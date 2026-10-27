package com.example.cseplanner.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.example.cseplanner.services.AiMlAssignmentCatalog;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.time.Instant;
import java.util.*;

@RestController
@RequestMapping("/api/ai-ml/survey")
public class AiMlSurveyController {
    private final JsonNode bank;
    private final AiMlAssignmentCatalog assignmentCatalog;
    private final MongoTemplate mongo;

    public AiMlSurveyController(ObjectMapper mapper, MongoTemplate mongo) throws IOException {
        this.bank = mapper.readTree(new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream());
        this.mongo = mongo;
        this.assignmentCatalog = new AiMlAssignmentCatalog(mapper, bank);
    }

    public record Answer(String status, String optionId) {}
    public record Submission(int currentSemester, String anonymousSessionToken, Map<String, Answer> answers) {}

    public static class SavedAttempt {
        @Id public String id;
        public String formVersion;
        public String anonymousSessionToken;
        public int currentSemester;
        public Map<String, Answer> answers;
        public Instant submittedAt;
        public SavedAttempt(String id, String formVersion, String token, int semester, Map<String, Answer> answers) {
            this.id=id; this.formVersion=formVersion; this.anonymousSessionToken=token;
            this.currentSemester=semester; this.answers=answers; this.submittedAt=Instant.now();
        }
    }

    @GetMapping
    public Map<String, Object> getForm() {
        List<Map<String, Object>> topics = new ArrayList<>();
        for (JsonNode t : bank.path("subtopics")) {
            topics.add(Map.of("id", t.path("id").asText(), "name", t.path("name").asText(),
                    "scope", t.path("scope").asText(), "sectionId", t.path("sectionId").asText()));
        }
        List<Map<String, Object>> questions = new ArrayList<>();
        for (JsonNode q : bank.path("questions")) {
            List<Map<String, Object>> options = new ArrayList<>();
            for (JsonNode option : q.path("options")) {
                options.add(Map.of("id", option.path("id").asText(), "label", option.path("label").asText(),
                        "text", option.path("text").asText()));
            }
            questions.add(Map.of("id", q.path("id").asText(), "type", q.path("type").asText(),
                    "subtopicId", q.path("subtopicId").asText(), "concept", q.path("concept").asText(),
                    "stem", q.path("stem").asText(), "format", q.path("format").asText(), "options", options));
        }
        return Map.of("formId", bank.path("form").path("id").asText(), "version", bank.path("bankVersion").asText(),
                "roadmapContentVersion", AiMlAssignmentCatalog.CONTENT_VERSION,
                "semesters", List.of(1,2,3,4,5,6,7,8), "subtopics", topics, "questions", questions);
    }

    @PostMapping("/submit")
    public Map<String, Object> submit(@RequestBody Submission request) {
        if (request == null || request.currentSemester() < 1 || request.currentSemester() > 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Choose a semester before submitting the survey.");
        }
        Map<String, Answer> submittedAnswers = request.answers() == null ? Map.of() : request.answers();
        Set<String> ids = new HashSet<>();
        for (JsonNode q : bank.path("questions")) ids.add(q.path("id").asText());
        if (!ids.containsAll(submittedAnswers.keySet())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The submission contains an unknown survey item.");
        }
        Map<String, Double> awarded = new HashMap<>();
        Map<String, Double> maximum = new HashMap<>();
        Map<String, Integer> correct = new HashMap<>();
        Map<String, Integer> unanswered = new HashMap<>();
        List<Map<String, Object>> review = new ArrayList<>();
        double practice = 0;
        for (JsonNode q : bank.path("questions")) {
            String id = q.path("id").asText();
            Answer answer = submittedAnswers.get(id);
            String state = answer == null ? "unanswered" : answer.status();
            JsonNode selected = null;
            if ("answered".equals(state)) {
                for (JsonNode o : q.path("options")) if (o.path("id").asText().equals(answer.optionId())) selected=o;
                if (selected == null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid option for " + id);
            } else if (!"unanswered".equals(state)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid status for " + id);
            }
            String topic = q.path("subtopicId").asText();
            if ("technical".equals(q.path("type").asText())) {
                double weight = q.path("weight").asDouble();
                maximum.merge(topic,weight,Double::sum);
                boolean right = selected != null && answer.optionId().equals(q.path("correctOptionId").asText());
                if (right) { awarded.merge(topic,weight,Double::sum); correct.merge(topic,1,Integer::sum); }
                if ("unanswered".equals(state)) unanswered.merge(topic,1,Integer::sum);
                String keyText="";
                for (JsonNode option : q.path("options")) {
                    if (option.path("id").asText().equals(q.path("correctOptionId").asText())) keyText=option.path("text").asText();
                }
                Map<String, Object> item = new LinkedHashMap<>();
                item.put("id",id); item.put("subtopicId",topic); item.put("concept",q.path("concept").asText());
                item.put("stem",q.path("stem").asText()); item.put("status",state); item.put("correct",right);
                item.put("correctOptionText",keyText); item.put("selectedOptionText",selected==null?null:selected.path("text").asText());
                item.put("explanation",q.path("explanation").asText());
                review.add(item);
            } else if (selected != null) {
                practice += selected.path("fraction").asDouble();
            }
        }
        List<Map<String, Object>> subtopicScores = new ArrayList<>();
        Map<String, Double> scoreByTopic = new HashMap<>();
        double scoreSum=0;
        for (JsonNode t : bank.path("subtopics")) {
            String id=t.path("id").asText();
            double score=Math.round(1000.0*awarded.getOrDefault(id,0.0)/maximum.get(id))/10.0;
            scoreByTopic.put(id,score); scoreSum+=score;
            subtopicScores.add(Map.of("id",id,"name",t.path("name").asText(),"score",score,
                    "correct",correct.getOrDefault(id,0),"total",6,"unanswered",unanswered.getOrDefault(id,0)));
        }
        String token = request.anonymousSessionToken();
        if (token == null || token.isBlank()) token = UUID.randomUUID().toString();
        String attemptId=UUID.randomUUID().toString();
        mongo.save(new SavedAttempt(attemptId, bank.path("bankVersion").asText(), token,
                request.currentSemester(), submittedAnswers), "aiMlSurveyAttempts");
        return Map.of("attemptId",attemptId,"currentSemester",request.currentSemester(),
                "overallTechnicalScore",Math.round(scoreSum/30.0*10.0)/10.0,
                "practiceScore",Math.round(practice*10.0),"subtopics",subtopicScores,
                "review",review,"roadmap",buildRoadmap(request.currentSemester(),scoreByTopic,review));
    }

    private Map<String, Object> buildRoadmap(int semester, Map<String, Double> scores, List<Map<String, Object>> review) {
        List<JsonNode> pending = new ArrayList<>();
        bank.path("subtopics").forEach(pending::add);
        Set<String> scheduled = new HashSet<>();
        List<JsonNode> ordered = new ArrayList<>();
        while (!pending.isEmpty()) {
            JsonNode choice = pending.stream().filter(t -> {
                for (JsonNode p : t.path("prerequisites")) if (!scheduled.contains(p.asText())) return false;
                return true;
            }).min(Comparator.comparingDouble(t -> scores.get(t.path("id").asText()))).orElseThrow();
            pending.remove(choice); ordered.add(choice); scheduled.add(choice.path("id").asText());
        }
        List<Map<String, Object>> semesters = new ArrayList<>();
        int remaining=9-semester;
        for (int sem=semester;sem<=8;sem++) {
            List<Map<String, Object>> units = new ArrayList<>();
            for (int i=0;i<ordered.size();i++) {
                if (semester+(i*remaining/ordered.size())!=sem) continue;
                JsonNode t=ordered.get(i), course=t.path("learningUnit");
                String id=t.path("id").asText();
                List<String> missed=review.stream().filter(r->id.equals(r.get("subtopicId")) && !Boolean.TRUE.equals(r.get("correct")))
                        .map(r->(String)r.get("concept")).distinct().toList();
                double score=scores.get(id);
                Map<String, Object> unit=new LinkedHashMap<>();
                unit.put("subtopicId",id);unit.put("subtopic",t.path("name").asText());unit.put("surveyScore",score);
                unit.put("studyFocus",t.path("studyFocus").asText());unit.put("missedConcepts",missed);
                unit.put("action",score<=50?"Study the relevant modules, then complete a worked exercise.":
                        score<85?"Review missed concepts before attempting the semester assignment.":
                                "Refresh this topic and explain it independently in the semester assignment.");
                unit.put("course",Map.of("title",course.path("title").asText(),"provider",course.path("provider").asText(),
                        "url",course.path("url").asText(),"selectedCoverage",course.path("selectedCoverage").asText()));
                unit.put("status","PLANNED");
                units.add(unit);
            }
            List<String> deliverables = new ArrayList<>();
            deliverables.add("Complete the individual course-linked assignment below after studying its prerequisite modules.");
            if (sem>=5) deliverables.add("Prepare targeted AI/ML internship or placement applications and explain project tradeoffs.");
            semesters.add(Map.of("semester",sem,"learningUnits",units,"deliverables",deliverables,
                    "projectRequirements",assignmentCatalog.forSemester(units)));
        }
        return Map.of("contentVersion",AiMlAssignmentCatalog.CONTENT_VERSION,"semesters",semesters,"note",semester>=7?
                "The remaining course schedule is dense. Follow prerequisites before the individual assignment; report unfinished learning honestly. Assignment difficulty follows course material, not semester number.":
                "Follow prerequisites and complete the individual course-linked assignments. Course completion and survey scores alone do not establish placement readiness.");
    }
}
