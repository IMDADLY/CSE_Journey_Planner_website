package com.example.cseplanner.controllers;

import com.fasterxml.jackson.databind.JsonNode;
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
@RequestMapping("/api/specializations/{specialization}/survey")
public class SpecializationJourneyController {
    private static final Set<String> SUPPORTED = Set.of("full-stack-web-dev", "cloud-computing",
            "data-engineering", "game-development", "embedded-systems");
    private final Map<String, JsonNode> banks = new HashMap<>();
    private final MongoTemplate mongo;

    public SpecializationJourneyController(ObjectMapper mapper, MongoTemplate mongo) throws IOException {
        this.mongo = mongo;
        for (String slug : SUPPORTED) {
            try (var input = new ClassPathResource("assessment/" + slug + "-common-v2.json").getInputStream()) {
                banks.put(slug, mapper.readTree(input));
            }
        }
    }

    public record Answer(String status, String optionId) {}
    public record Submission(int currentSemester, String anonymousSessionToken, Map<String, Answer> answers) {}

    public static class SavedAttempt {
        @Id public String id;
        public String specializationId;
        public String formVersion;
        public String anonymousSessionToken;
        public int currentSemester;
        public Map<String, Answer> answers;
        public Instant submittedAt;
        public SavedAttempt(String id, String specializationId, String formVersion, String token,
                            int semester, Map<String, Answer> answers) {
            this.id=id; this.specializationId=specializationId; this.formVersion=formVersion;
            this.anonymousSessionToken=token; this.currentSemester=semester;
            this.answers=answers; this.submittedAt=Instant.now();
        }
    }

    private JsonNode bank(String specialization) {
        JsonNode result = banks.get(specialization);
        if (result == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unknown specialization");
        return result;
    }

    @GetMapping
    public Map<String, Object> getForm(@PathVariable String specialization) {
        JsonNode bank = bank(specialization);
        List<Map<String, Object>> topics = new ArrayList<>();
        for (JsonNode t : bank.path("subtopics")) {
            topics.add(Map.of("id",t.path("id").asText(),"name",t.path("name").asText(),
                    "scope",t.path("scope").asText(),"sectionId",t.path("sectionId").asText()));
        }
        List<Map<String, Object>> questions = new ArrayList<>();
        for (JsonNode q : bank.path("questions")) {
            List<Map<String, Object>> options = new ArrayList<>();
            for (JsonNode option : q.path("options")) {
                options.add(Map.of("id",option.path("id").asText(),"label",option.path("label").asText(),
                        "text",option.path("text").asText()));
            }
            Map<String, Object> item = new LinkedHashMap<>();
            item.put("id",q.path("id").asText()); item.put("type",q.path("type").asText());
            item.put("subtopicId",q.path("subtopicId").asText()); item.put("concept",q.path("concept").asText());
            item.put("stem",q.path("stem").asText()); item.put("format",q.path("format").asText());
            item.put("codeSnippet",q.path("codeSnippet").isNull()?null:q.path("codeSnippet").asText());
            item.put("options",options);
            questions.add(item);
        }
        return Map.of("formId",bank.path("form").path("id").asText(),
                "version",bank.path("bankVersion").asText(),"specializationName",bank.path("specializationName").asText(),
                "semesters",List.of(1,2,3,4,5,6,7,8),"subtopics",topics,"questions",questions);
    }

    @PostMapping("/submit")
    public Map<String, Object> submit(@PathVariable String specialization, @RequestBody Submission request) {
        JsonNode bank = bank(specialization);
        if (request == null || request.currentSemester() < 1 || request.currentSemester() > 8) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Choose a semester before submitting.");
        }
        Map<String, Answer> answers = request.answers() == null ? Map.of() : request.answers();
        Set<String> ids = new HashSet<>();
        for (JsonNode q : bank.path("questions")) ids.add(q.path("id").asText());
        if (!ids.containsAll(answers.keySet())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unknown survey question.");
        }
        Map<String, Double> earned = new HashMap<>(), possible = new HashMap<>();
        Map<String, Integer> correct = new HashMap<>(), unanswered = new HashMap<>(), totals = new HashMap<>();
        List<Map<String, Object>> review = new ArrayList<>();
        double practiceEarned=0, practicePossible=0;
        for (JsonNode q : bank.path("questions")) {
            String id=q.path("id").asText(), topic=q.path("subtopicId").asText();
            Answer answer=answers.get(id);
            String status=answer==null ? "unanswered" : answer.status();
            JsonNode selected=null;
            if ("answered".equals(status)) {
                for (JsonNode option : q.path("options")) {
                    if (option.path("id").asText().equals(answer.optionId())) selected=option;
                }
                if (selected==null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid option for " + id);
            } else if (!"unanswered".equals(status) || (answer != null && answer.optionId() != null)) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid answer for " + id);
            }
            if ("technical".equals(q.path("type").asText())) {
                double weight=q.path("weight").asDouble();
                possible.merge(topic,weight,Double::sum);
                totals.merge(topic,1,Integer::sum);
                boolean right=selected!=null && answer.optionId().equals(q.path("correctOptionId").asText());
                if (right) {earned.merge(topic,weight,Double::sum);correct.merge(topic,1,Integer::sum);}
                if ("unanswered".equals(status)) unanswered.merge(topic,1,Integer::sum);
                String key="";
                for (JsonNode option : q.path("options")) {
                    if (option.path("id").asText().equals(q.path("correctOptionId").asText())) key=option.path("text").asText();
                }
                Map<String,Object> item=new LinkedHashMap<>();
                item.put("id",id);item.put("subtopicId",topic);item.put("concept",q.path("concept").asText());
                item.put("stem",q.path("stem").asText());item.put("status",status);item.put("correct",right);
                item.put("correctOptionText",key);
                item.put("selectedOptionText",selected==null?null:selected.path("text").asText());
                item.put("explanation",q.path("explanation").asText());
                item.put("resourceUrl",q.path("learningResources").path(0).path("url").asText(""));
                review.add(item);
            } else {
                practicePossible++;
                if (selected!=null) practiceEarned+=selected.path("fraction").asDouble();
            }
        }
        List<Map<String,Object>> scores=new ArrayList<>();
        Map<String,Double> scoreByTopic=new HashMap<>();
        double totalEarned=0,totalPossible=0;
        for (JsonNode topic : bank.path("subtopics")) {
            String id=topic.path("id").asText();
            double max=possible.getOrDefault(id,0.0), got=earned.getOrDefault(id,0.0);
            double score=max==0 ? 0 : Math.round(1000.0*got/max)/10.0;
            scoreByTopic.put(id,score);totalEarned+=got;totalPossible+=max;
            scores.add(Map.of("id",id,"name",topic.path("name").asText(),"score",score,
                    "correct",correct.getOrDefault(id,0),"total",totals.getOrDefault(id,0),
                    "unanswered",unanswered.getOrDefault(id,0),
                    "evidence",totals.getOrDefault(id,0)<4?"limited":"screening"));
        }
        String token=request.anonymousSessionToken();
        if (token==null || token.isBlank()) token=UUID.randomUUID().toString();
        String attemptId=UUID.randomUUID().toString();
        mongo.save(new SavedAttempt(attemptId,specialization,bank.path("bankVersion").asText(),token,
                request.currentSemester(),answers),"specializationSurveyAttempts");
        return Map.of("attemptId",attemptId,"currentSemester",request.currentSemester(),
                "overallTechnicalScore",totalPossible==0?0:Math.round(1000.0*totalEarned/totalPossible)/10.0,
                "practiceScore",practicePossible==0?0:Math.round(1000.0*practiceEarned/practicePossible)/10.0,
                "subtopics",scores,"review",review,
                "roadmap",buildRoadmap(bank,request.currentSemester(),scoreByTopic,review));
    }

    private Map<String,Object> buildRoadmap(JsonNode bank,int semester,Map<String,Double> scores,List<Map<String,Object>> review) {
        List<JsonNode> pending=new ArrayList<>(),ordered=new ArrayList<>();
        bank.path("subtopics").forEach(pending::add);
        Set<String> scheduled=new HashSet<>();
        while (!pending.isEmpty()) {
            JsonNode next=pending.stream().filter(t -> {
                for (JsonNode prerequisite:t.path("prerequisites")) if (!scheduled.contains(prerequisite.asText())) return false;
                return true;
            }).min(Comparator.comparingDouble(t->scores.getOrDefault(t.path("id").asText(),0.0))).orElseThrow();
            pending.remove(next);ordered.add(next);scheduled.add(next.path("id").asText());
        }
        List<Map<String,Object>> semesters=new ArrayList<>();
        int remaining=9-semester;
        for (int sem=semester;sem<=8;sem++) {
            List<Map<String,Object>> units=new ArrayList<>();
            for (int i=0;i<ordered.size();i++) {
                if (semester+i*remaining/ordered.size()!=sem) continue;
                JsonNode topic=ordered.get(i),course=topic.path("learningUnit");
                String id=topic.path("id").asText();
                double score=scores.get(id);
                List<Map<String,Object>> gaps=review.stream().filter(r->id.equals(r.get("subtopicId")) && !Boolean.TRUE.equals(r.get("correct")))
                        .map(r->Map.<String,Object>of("concept",r.get("concept"),"url",r.get("resourceUrl"))).distinct().toList();
                Map<String,Object> unit=new LinkedHashMap<>();
                unit.put("subtopicId",id);unit.put("subtopic",topic.path("name").asText());
                unit.put("surveyScore",score);unit.put("studyFocus",topic.path("studyFocus").asText());
                unit.put("evidence",topic.path("targetTechnicalCount").asInt()<4?"limited":"screening");
                unit.put("exitEvidence",topic.path("exitEvidence").asText());
                unit.put("missedConcepts",gaps.stream().map(g->(String)g.get("concept")).toList());
                unit.put("focusItems",gaps);
                unit.put("action",score<=50?"Study the linked material and complete a worked exercise for each missed concept.":
                        score<85?"Review missed concepts and use them in a small tested project.":
                                "Refresh this area while building your portfolio project.");
                unit.put("course",Map.of("title",course.path("title").asText(),"provider",course.path("provider").asText(),
                        "url",course.path("url").asText(),"selectedCoverage",course.path("selectedCoverage").asText()));
                List<Map<String,String>> additional=new ArrayList<>();
                for (JsonNode resource:course.path("additionalResources")) {
                    additional.add(Map.of("title",resource.path("title").asText(),"url",resource.path("url").asText()));
                }
                unit.put("additionalResources",additional);
                unit.put("status","PLANNED");units.add(unit);
            }
            String stage=sem<=2?"foundation":sem<=5?"intermediate":"capstone";
            List<String> deliverables=new ArrayList<>();
            deliverables.add(bank.path("deliverables").path(stage).asText());
            if (sem>=5) deliverables.add("Prepare a specialization-specific internship or placement application and explain your project tradeoffs.");
            semesters.add(Map.of("semester",sem,"learningUnits",units,"deliverables",deliverables));
        }
        return Map.of("semesters",semesters,"note",semester>=7?
                "The remaining schedule is dense. Prioritize the largest prerequisite gaps and show practical evidence in a capstone.":
                "Follow prerequisites and build the listed project evidence. Survey scores alone do not establish placement readiness.");
    }
}
