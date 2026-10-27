package com.example.cseplanner.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;

import java.time.*;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class AiMlInternshipCatalogTest {
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final Instant VERIFIED = Instant.parse("2026-10-27T12:35:27Z");

    private ObjectNode fixture() throws Exception {
        try (var input = new ClassPathResource("assessment/ai-ml-internships-v1.json").getInputStream()) {
            var root = (ObjectNode) MAPPER.readTree(input);
            ((ObjectNode)root.path("opportunities").get(0)).set("requirements", MAPPER.readTree("""
                    [{"label":"Python","alignment":"Course and selected exercise",
                      "courseTopicIds":["AML-01"],"assignmentTopicIds":["AML-01"]}]
                    """));
            return root;
        }
    }

    private List<Map<String, Object>> semesters(String assignmentTopic, String courseTopic) {
        return List.of(Map.of("semester", 3,
                "learningUnits", List.of(Map.of("subtopicId", courseTopic,
                        "course", Map.of("title", "Python", "url", "https://example.org/course"))),
                "projectRequirements", Map.of("id", "stable-assignment", "subtopicId", assignmentTopic,
                        "title", "Selected exercise", "status", "NOT_STARTED")));
    }

    private List<Map<String, Object>> matches(ObjectNode root, Instant now, int semester) {
        return new AiMlInternshipCatalog(root, Clock.fixed(now, ZoneOffset.UTC))
                .forRoadmap(semesters("AML-01", "AML-01"), semester);
    }

    @Test
    void matchesDescriptionsWithoutCheckingStudentWorkOrScores() throws Exception {
        var result = matches(fixture(), VERIFIED, 1);
        assertEquals(1, result.size());
        var opportunity = result.getFirst();
        assertEquals(3, opportunity.get("preparationSemester"));
        assertEquals(VERIFIED.plus(Duration.ofDays(7)).toString(), opportunity.get("visibleUntil"));
        assertEquals("Not stated", opportunity.get("deadline"));
        assertFalse(opportunity.containsKey("score"));
        assertFalse(opportunity.containsKey("completed"));
        assertEquals(1, ((List<?>)opportunity.get("relatedMaterial")).size());
    }

    @Test
    void requiresBothCourseCoverageAndAnActuallySelectedAssignment() throws Exception {
        var service = new AiMlInternshipCatalog(fixture(), Clock.fixed(VERIFIED, ZoneOffset.UTC));
        assertTrue(service.forRoadmap(semesters("AML-02", "AML-01"), 1).isEmpty());
        assertTrue(service.forRoadmap(semesters("AML-01", "AML-02"), 1).isEmpty());
        assertTrue(service.forRoadmap(List.of(), 1).isEmpty());
        var root = fixture();
        ((ObjectNode)root.path("opportunities").get(0)).withArray("requirements").add(MAPPER.readTree("""
                {"label":"Production work","courseTopicIds":["AML-27"],"assignmentTopicIds":["AML-27"]}
                """));
        assertTrue(matches(root, VERIFIED, 1).isEmpty(), "Every mandatory requirement must match");
    }

    @Test
    void expiresAtDeadlineOrExactlySevenDaysAndRejectsBadDates() throws Exception {
        assertEquals(1, matches(fixture(), VERIFIED.plus(Duration.ofDays(7)).minusMillis(1), 1).size());
        assertTrue(matches(fixture(), VERIFIED.plus(Duration.ofDays(7)), 1).isEmpty());
        assertTrue(matches(fixture(), VERIFIED.minusSeconds(1), 1).isEmpty());
        var root = fixture();
        var role = (ObjectNode)root.path("opportunities").get(0);
        role.put("deadline", VERIFIED.plusSeconds(60).toString());
        assertEquals(1, matches(root, VERIFIED.plusSeconds(59), 1).size());
        assertTrue(matches(root, VERIFIED.plusSeconds(60), 1).isEmpty());
        role.put("deadline", "ambiguous");
        assertTrue(matches(root, VERIFIED, 1).isEmpty());
        role.remove("deadline");
        role.put("verifiedAt", "invalid");
        assertTrue(matches(root, VERIFIED, 1).isEmpty());
    }

    @Test
    void enforcesFeesCountryDegreeAndYearWithoutInventingEligibility() throws Exception {
        for (String field : List.of("undergraduateEligible", "eligibilityResolved")) {
            var root = fixture();
            ((ObjectNode)root.path("opportunities").get(0)).put(field, false);
            assertTrue(matches(root, VERIFIED, 1).isEmpty(), field);
        }
        var root = fixture(); var role = (ObjectNode)root.path("opportunities").get(0);
        role.put("feeRequired", true);
        assertTrue(matches(root, VERIFIED, 1).isEmpty());
        role.put("feeRequired", false);
        role.set("eligibleCountries", MAPPER.readTree("[\"US\"]"));
        role.put("workMode", "Remote");
        assertTrue(matches(root, VERIFIED, 1).isEmpty(), "Remote does not imply India eligibility");
        role.set("eligibleCountries", MAPPER.readTree("[\"IN\"]"));
        role.put("minimumSemester", 5); role.put("maximumSemester", 6);
        assertTrue(matches(root, VERIFIED, 4).isEmpty());
        assertEquals(1, matches(root, VERIFIED, 5).size());
        assertEquals(1, matches(root, VERIFIED, 6).size());
        assertTrue(matches(root, VERIFIED, 7).isEmpty());
        role.put("status", "closed");
        assertTrue(matches(root, VERIFIED, 5).isEmpty());
    }

    @Test
    void realCatalogHasValidReferencesAndDoesNotSubstituteUnselectedExercises() throws Exception {
        com.fasterxml.jackson.databind.JsonNode root, bank, assignments;
        try (var stream = new ClassPathResource("assessment/ai-ml-internships-v1.json").getInputStream()) { root = MAPPER.readTree(stream); }
        try (var stream = new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream()) { bank = MAPPER.readTree(stream); }
        try (var stream = new ClassPathResource("assessment/ai-ml-assignments-v1.json").getInputStream()) { assignments = MAPPER.readTree(stream); }
        Set<String> topics = new HashSet<>();
        for (var topic : bank.path("subtopics")) topics.add(topic.path("id").asText());
        for (var role : root.path("opportunities")) for (var requirement : role.path("requirements")) {
            for (var id : requirement.path("courseTopicIds")) assertTrue(topics.contains(id.asText()));
            for (var id : requirement.path("assignmentTopicIds")) assertTrue(assignments.has(id.asText()));
        }
        List<Map<String, Object>> schedule = new ArrayList<>();
        for (var topic : bank.path("subtopics")) {
            String id = topic.path("id").asText();
            schedule.add(Map.of("semester", 1, "learningUnits", List.of(Map.of("subtopicId", id,
                    "course", MAPPER.convertValue(topic.path("learningUnit"), Map.class))),
                    "projectRequirements", Map.of("id", "assignment:" + id, "subtopicId", id,
                            "title", assignments.path(id).path("title").asText())));
        }
        var service = new AiMlInternshipCatalog(root, Clock.fixed(VERIFIED, ZoneOffset.UTC));
        assertFalse(service.forRoadmap(schedule, 1).isEmpty());
        assertTrue(service.forRoadmap(semesters("AML-01", "AML-01"), 8).isEmpty());
    }
}
