package com.example.cseplanner.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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

class SpecializationJourneyControllerTest {
    private static final List<String> SLUGS = List.of("full-stack-web-dev", "cloud-computing",
            "data-engineering", "game-development", "embedded-systems");

    @SuppressWarnings("unchecked")
    @Test
    void allSpecializationsExposeSameFormToEverySemesterAndMapGapsToRoadmap() throws Exception {
        MongoTemplate mongo=mock(MongoTemplate.class);
        var controller=new SpecializationJourneyController(new ObjectMapper(),mongo);
        for (String slug:SLUGS) {
            Map<String,Object> form=controller.getForm(slug);
            List<Map<String,Object>> questions=(List<Map<String,Object>>)form.get("questions");
            assertEquals(130,questions.size(),slug);
            assertEquals(120,questions.stream().filter(q->"technical".equals(q.get("type"))).count(),slug);
            assertEquals(10,questions.stream().filter(q->"self_assessment".equals(q.get("type"))).count(),slug);
            assertTrue(((List<?>)form.get("subtopics")).size()>=7,slug);
            for (Map<String,Object> topic:(List<Map<String,Object>>)form.get("subtopics")) {
                long count=questions.stream().filter(q->"technical".equals(q.get("type"))
                        && topic.get("id").equals(q.get("subtopicId"))).count();
                assertTrue(count>=10,slug+": "+topic.get("id")+" has only "+count+" technical items");
            }
            assertTrue(questions.stream().noneMatch(q->q.containsKey("correctOptionId") || q.containsKey("explanation") || q.containsKey("weight")),slug);
            Map<String,Object> empty=controller.submit(slug,new SpecializationJourneyController.Submission(1,"test",Map.of()));
            assertEquals(0.0,empty.get("overallTechnicalScore"),slug);
            assertEquals(120,((List<?>)empty.get("review")).size(),slug);
            assertTrue(((List<Map<String,Object>>)empty.get("review")).stream().allMatch(q->"unanswered".equals(q.get("status"))),slug);
            Map<String,Object> roadmap=(Map<String,Object>)empty.get("roadmap");
            assertEquals(form.get("roadmapContentVersion"),roadmap.get("contentVersion"),slug);
            assertTrue(roadmap.containsKey("internshipOpportunities"),slug);
            assertEquals(8,((List<?>)roadmap.get("semesters")).size(),slug);
            Map<String,Object> first=(Map<String,Object>)((List<?>)roadmap.get("semesters")).get(0);
            Map<String,Object> unit=(Map<String,Object>)((List<?>)first.get("learningUnits")).get(0);
            assertFalse(((Map<String,Object>)unit.get("course")).get("url").toString().isBlank(),slug);
            assertFalse(((List<?>)unit.get("focusItems")).isEmpty(),slug);
            Map<String,Object> last=controller.submit(slug,new SpecializationJourneyController.Submission(8,"test",Map.of()));
            assertEquals(1,((List<?>)((Map<?,?>)last.get("roadmap")).get("semesters")).size(),slug);
            assertEquals(empty.get("overallTechnicalScore"),last.get("overallTechnicalScore"),slug);
        }
        verify(mongo,times(10)).save(any(SpecializationJourneyController.SavedAttempt.class),eq("specializationSurveyAttempts"));
    }

    @Test
    void technicalKeysScorePerfectlyAndInvalidOptionsAreRejected() throws Exception {
        var mapper=new ObjectMapper();
        var controller=new SpecializationJourneyController(mapper,mock(MongoTemplate.class));
        for (String slug:SLUGS) {
            JsonNode bank=mapper.readTree(new ClassPathResource("assessment/"+slug+"-common-v2.json").getInputStream());
            Map<String,SpecializationJourneyController.Answer> answers=new HashMap<>();
            for (JsonNode question:bank.path("questions")) {
                if ("technical".equals(question.path("type").asText())) {
                    answers.put(question.path("id").asText(),new SpecializationJourneyController.Answer("answered",question.path("correctOptionId").asText()));
                }
            }
            Map<String,Object> report=controller.submit(slug,new SpecializationJourneyController.Submission(3,"test",answers));
            assertEquals(100.0,report.get("overallTechnicalScore"),slug);
            assertEquals(0.0,report.get("practiceScore"),slug);
            answers.put(bank.path("questions").get(0).path("id").asText(),new SpecializationJourneyController.Answer("answered","fake-option"));
            assertThrows(ResponseStatusException.class,()->controller.submit(slug,new SpecializationJourneyController.Submission(3,"test",answers)),slug);
        }
    }
}
