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
