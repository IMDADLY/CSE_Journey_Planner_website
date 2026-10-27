package com.example.cseplanner.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

class AiMlSurveyControllerTest {
    @SuppressWarnings("unchecked")
    @Test
    void commonFormHidesKeysAndRoadmapUsesCurrentSemester() throws Exception {
        MongoTemplate mongo=mock(MongoTemplate.class);
        AiMlSurveyController controller=new AiMlSurveyController(new ObjectMapper(),mongo);
        Map<String,Object> form=controller.getForm();
        List<Map<String,Object>> questions=(List<Map<String,Object>>)form.get("questions");
        assertEquals(190,questions.size());
        assertEquals(30,((List<?>)form.get("subtopics")).size());
        assertTrue(questions.stream().noneMatch(q->q.containsKey("correctOptionId") || q.containsKey("explanation") || q.containsKey("weight")));
        Map<String,AiMlSurveyController.Answer> answers=new HashMap<>();
        for(Map<String,Object> question:questions) {
            List<Map<String,Object>> options=(List<Map<String,Object>>)question.get("options");
            answers.put((String)question.get("id"),new AiMlSurveyController.Answer("answered",(String)options.get(0).get("id")));
        }
        Map<String,Object> first=controller.submit(new AiMlSurveyController.Submission(1,"test",answers));
        Map<String,Object> last=controller.submit(new AiMlSurveyController.Submission(8,"test",answers));
        assertEquals(first.get("overallTechnicalScore"),last.get("overallTechnicalScore"));
        Map<String,Object> firstRoadmap=(Map<String,Object>)first.get("roadmap");
        Map<String,Object> lastRoadmap=(Map<String,Object>)last.get("roadmap");
        assertEquals(8,((List<?>)firstRoadmap.get("semesters")).size());
        assertEquals(1,((List<?>)lastRoadmap.get("semesters")).size());
        verify(mongo,times(2)).save(any(AiMlSurveyController.SavedAttempt.class),eq("aiMlSurveyAttempts"));
    }

    @SuppressWarnings("unchecked")
    @Test
    void rejectsUnknownOptionsAndReportsUnansweredSeparately() throws Exception {
        AiMlSurveyController controller=new AiMlSurveyController(new ObjectMapper(),mock(MongoTemplate.class));
        List<Map<String,Object>> questions=(List<Map<String,Object>>)controller.getForm().get("questions");
        Map<String,AiMlSurveyController.Answer> answers=new HashMap<>();
        String firstId=(String)questions.get(0).get("id");
        answers.put(firstId,new AiMlSurveyController.Answer("answered","not-an-option"));
        assertThrows(ResponseStatusException.class,()->controller.submit(new AiMlSurveyController.Submission(3,"test",answers)));
        answers.clear();
        Map<String,Object> report=controller.submit(new AiMlSurveyController.Submission(3,"test",answers));
        List<Map<String,Object>> review=(List<Map<String,Object>>)report.get("review");
        assertEquals(0.0,report.get("overallTechnicalScore"));
        assertEquals("unanswered",review.stream().filter(q->firstId.equals(q.get("id"))).findFirst().orElseThrow().get("status"));
        List<Map<String,Object>> subtopics=(List<Map<String,Object>>)report.get("subtopics");
        assertTrue(subtopics.stream().allMatch(topic->Integer.valueOf(6).equals(topic.get("unanswered"))));
    }

    @Test
    void exactAnswerKeysProduceFullTechnicalScore() throws Exception {
        AiMlSurveyController controller=new AiMlSurveyController(new ObjectMapper(),mock(MongoTemplate.class));
        JsonNode bank=new ObjectMapper().readTree(new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream());
        Map<String,AiMlSurveyController.Answer> answers=new HashMap<>();
        for(JsonNode question:bank.path("questions")) {
            String id=question.path("id").asText();
            String option=question.path("type").asText().equals("technical") ? question.path("correctOptionId").asText() :
                    question.path("options").get(3).path("id").asText();
            answers.put(id,new AiMlSurveyController.Answer("answered",option));
        }
        Map<String,Object> result=controller.submit(new AiMlSurveyController.Submission(5,"test",answers));
        assertEquals(100.0,result.get("overallTechnicalScore"));
        assertEquals(100L,result.get("practiceScore"));
        assertTrue(((List<?>)result.get("review")).stream().allMatch(q->Boolean.TRUE.equals(((Map<?,?>)q).get("correct"))));
    }

    @SuppressWarnings("unchecked")
    @Test
    void weakSubtopicMovesEarlierAndPracticeAnswersDoNotChangeTechnicalRoadmap() throws Exception {
        var mapper=new ObjectMapper();
        var controller=new AiMlSurveyController(mapper,mock(MongoTemplate.class));
        JsonNode bank=mapper.readTree(new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream());
        Map<String,AiMlSurveyController.Answer> allCorrect=new HashMap<>();
        Map<String,AiMlSurveyController.Answer> weakMetrics=new HashMap<>();
        Map<String,AiMlSurveyController.Answer> otherPracticeScore=new HashMap<>();
        for(JsonNode question:bank.path("questions")) {
            String id=question.path("id").asText();
            boolean technical="technical".equals(question.path("type").asText());
            String correct=technical?question.path("correctOptionId").asText():question.path("options").get(3).path("id").asText();
            allCorrect.put(id,new AiMlSurveyController.Answer("answered",correct));
            otherPracticeScore.put(id,new AiMlSurveyController.Answer("answered",technical?correct:question.path("options").get(0).path("id").asText()));
            if(technical && "AML-14".equals(question.path("subtopicId").asText())) {
                String wrong=null;
                for(JsonNode option:question.path("options"))if(!option.path("id").asText().equals(correct)){wrong=option.path("id").asText();break;}
                weakMetrics.put(id,new AiMlSurveyController.Answer("answered",wrong));
            } else {
                weakMetrics.put(id,new AiMlSurveyController.Answer("answered",correct));
            }
        }

        Map<String,Object> perfect=controller.submit(new AiMlSurveyController.Submission(1,"test",allCorrect));
        Map<String,Object> weak=controller.submit(new AiMlSurveyController.Submission(1,"test",weakMetrics));
        Map<String,Object> practiceOnly=controller.submit(new AiMlSurveyController.Submission(1,"test",otherPracticeScore));
        assertEquals(100.0,perfect.get("overallTechnicalScore"));
        assertEquals(96.7,weak.get("overallTechnicalScore"));
        assertEquals(perfect.get("overallTechnicalScore"),practiceOnly.get("overallTechnicalScore"));
        assertNotEquals(perfect.get("practiceScore"),practiceOnly.get("practiceScore"));
        assertEquals(perfect.get("roadmap"),practiceOnly.get("roadmap"));

        List<Map<String,Object>> perfectUnits=flattenRoadmap((Map<String,Object>)perfect.get("roadmap"));
        List<Map<String,Object>> weakUnits=flattenRoadmap((Map<String,Object>)weak.get("roadmap"));
        assertEquals(30,perfectUnits.size());
        assertEquals(30,weakUnits.size());
        assertEquals(30,weakUnits.stream().map(unit->unit.get("subtopicId")).distinct().count());
        assertTrue(positionOf(weakUnits,"AML-14")<positionOf(perfectUnits,"AML-14"));
        Map<String,Object> weakMetricsUnit=weakUnits.stream().filter(unit->"AML-14".equals(unit.get("subtopicId"))).findFirst().orElseThrow();
        assertEquals(0.0,weakMetricsUnit.get("surveyScore"));
        assertEquals(6,((List<?>)weakMetricsUnit.get("missedConcepts")).size());
        for(JsonNode topic:bank.path("subtopics"))for(JsonNode prerequisite:topic.path("prerequisites"))
            assertTrue(positionOf(weakUnits,prerequisite.asText())<positionOf(weakUnits,topic.path("id").asText()),
                    prerequisite.asText()+" must appear before "+topic.path("id").asText());
    }

    @SuppressWarnings("unchecked")
    @Test
    void everyStartingSemesterHasCompleteCourseAlignedAssignmentsAcrossScorePatterns() throws Exception {
        var mapper = new ObjectMapper();
        var controller = new AiMlSurveyController(mapper, mock(MongoTemplate.class));
        JsonNode bank = mapper.readTree(new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream());
        JsonNode catalog = mapper.readTree(new ClassPathResource("assessment/ai-ml-assignments-v1.json").getInputStream());
        Map<String,AiMlSurveyController.Answer> correct = new HashMap<>();
        Map<String,AiMlSurveyController.Answer> mixed = new HashMap<>();
        for (JsonNode question : bank.path("questions")) {
            if (!"technical".equals(question.path("type").asText())) continue;
            var answer = new AiMlSurveyController.Answer("answered", question.path("correctOptionId").asText());
            correct.put(question.path("id").asText(), answer);
            if (question.path("subtopicId").asText().hashCode() % 2 == 0)
                mixed.put(question.path("id").asText(), answer);
        }
        assertEquals(30, catalog.size());
        assertNotNull(controller.getForm().get("roadmapContentVersion"));
        for (var answers : List.of(Map.<String,AiMlSurveyController.Answer>of(), correct, mixed)) {
            for (int start = 1; start <= 8; start++) {
                var result = controller.submit(new AiMlSurveyController.Submission(start, "test", answers));
                var roadmap = (Map<String,Object>)result.get("roadmap");
                assertEquals(controller.getForm().get("roadmapContentVersion"), roadmap.get("contentVersion"));
                var semesters = (List<Map<String,Object>>)roadmap.get("semesters");
                assertEquals(9-start, semesters.size());
                var selectedTopics = semesters.stream()
                        .map(plan -> (Map<String,Object>)plan.get("projectRequirements"))
                        .map(doc -> doc.get("subtopicId")).collect(java.util.stream.Collectors.toSet());
                for (var role : (List<Map<String,Object>>)roadmap.get("internshipOpportunities")) {
                    assertFalse(role.containsKey("score"));
                    for (var material : (List<Map<String,Object>>)role.get("relatedMaterial")) {
                        assertTrue(selectedTopics.contains(material.get("assignmentTopicId")));
                        assertTrue(flattenRoadmap(roadmap).stream().anyMatch(unit ->
                                unit.get("subtopicId").equals(material.get("courseTopicId"))
                                        && unit.get("course").equals(material.get("course"))));
                    }
                }
                var scheduled = new java.util.HashSet<String>();
                var assignmentIds = new java.util.HashSet<Object>();
                for (var semester : semesters) {
                    var units = (List<Map<String,Object>>)semester.get("learningUnits");
                    var doc = (Map<String,Object>)semester.get("projectRequirements");
                    assertTrue(assignmentIds.add(doc.get("id")), "Do not repeat an assignment");
                    var focus = units.stream().filter(u -> u.get("subtopicId").equals(doc.get("subtopicId"))).findFirst().orElseThrow();
                    assertEquals(focus.get("course"), doc.get("course"));
                    for (var unit : units) {
                        String id = (String)unit.get("subtopicId");
                        for (JsonNode prerequisite : bank.path("subtopics")) {
                            if (id.equals(prerequisite.path("id").asText()))
                                for (JsonNode parent : prerequisite.path("prerequisites"))
                                    assertTrue(scheduled.contains(parent.asText()), id + " requires " + parent.asText());
                        }
                        scheduled.add(id);
                    }
                    for (String field : List.of("title", "sourceType", "setup", "starterCode", "scope", "independentWork"))
                        assertFalse(doc.get(field).toString().isBlank(), field);
                    for (String field : List.of("goals", "prerequisites", "techStack", "requirements", "acceptanceCriteria", "submission", "proofOfLearning"))
                        assertFalse(((List<?>)doc.get(field)).isEmpty(), field);
                    int hours = (int)doc.get("estimatedHours");
                    assertTrue(hours >= 6 && hours <= 12);
                    int total = ((List<Map<String,Object>>)doc.get("timeline")).stream().mapToInt(t -> (int)t.get("hours")).sum();
                    assertEquals(hours, total);
                    boolean hasCourseTask = units.stream().anyMatch(u -> "Selected course tasks".equals(catalog.path((String)u.get("subtopicId")).path("sourceType").asText()));
                    if (hasCourseTask) {
                        assertEquals("Selected course tasks", doc.get("sourceType"));
                        assertTrue(((Map<?,?>)doc.get("source")).get("url").toString().startsWith("https://"));
                    }
                }
            }
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Map<String,Object>> flattenRoadmap(Map<String,Object> roadmap) {
        List<Map<String,Object>> result=new java.util.ArrayList<>();
        for(Map<String,Object> semester:(List<Map<String,Object>>)roadmap.get("semesters"))
            result.addAll((List<Map<String,Object>>)semester.get("learningUnits"));
        return result;
    }

    private static int positionOf(List<Map<String,Object>> units,String topicId) {
        for(int i=0;i<units.size();i++)if(topicId.equals(units.get(i).get("subtopicId")))return i;
        return Integer.MAX_VALUE;
    }
}
