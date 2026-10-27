package com.example.cseplanner.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.time.*;
import java.util.*;

/** Curriculum relevance only. No submission, completion, score or proficiency checks. */
public final class RoadmapInternshipCatalog {
    private final JsonNode catalog;
    private final Clock clock;

    public RoadmapInternshipCatalog(ObjectMapper mapper, String resource) throws IOException {
        try (var input = new ClassPathResource(resource).getInputStream()) {
            catalog = mapper.readTree(input);
        }
        clock = Clock.systemUTC();
    }

    RoadmapInternshipCatalog(JsonNode catalog, Clock clock) {
        this.catalog = catalog;
        this.clock = clock;
    }

    public String contentVersion() { return catalog.path("contentVersion").asText("internships-v1"); }

    @SuppressWarnings("unchecked")
    public List<Map<String, Object>> forRoadmap(List<Map<String, Object>> semesters, int currentSemester) {
        Map<String, Map<String, Object>> courses = new LinkedHashMap<>();
        Map<String, Map<String, Object>> assignments = new LinkedHashMap<>();
        Map<String, Integer> courseSemester = new HashMap<>(), assignmentSemester = new HashMap<>();
        for (var semester : semesters) {
            int number = (int) semester.get("semester");
            for (var unit : (List<Map<String, Object>>) semester.get("learningUnits")) {
                String id = (String) unit.getOrDefault("learningUnitId", unit.get("subtopicId"));
                courses.put(id, (Map<String, Object>) unit.get("course"));
                courseSemester.put(id, number);
            }
            var assignment = (Map<String, Object>) semester.get("projectRequirements");
            if (assignment != null) {
                String topic = (String) assignment.get("subtopicId");
                assignments.put(topic, assignment);
                assignmentSemester.put(topic, number);
            }
        }
        List<Map<String, Object>> result = new ArrayList<>();
        Instant now = clock.instant();
        for (JsonNode role : catalog.path("opportunities")) {
            if (currentSemester < 1 || currentSemester > 8
                    || !"open".equals(role.path("status").asText())
                    || role.path("feeRequired").asBoolean(true)
                    || !role.path("undergraduateEligible").asBoolean(false)
                    || !role.path("eligibilityResolved").asBoolean(false)
                    || !contains(role.path("eligibleCountries"), "IN")
                    || currentSemester < role.path("minimumSemester").asInt(1)
                    || currentSemester > role.path("maximumSemester").asInt(8)) continue;
            Instant verified, expires;
            try {
                verified = Instant.parse(role.path("verifiedAt").asText());
                expires = verified.plus(Duration.ofDays(7));
                if (role.hasNonNull("deadline")) {
                    Instant deadline = Instant.parse(role.path("deadline").asText());
                    if (deadline.isBefore(expires)) expires = deadline;
                }
            } catch (DateTimeException e) { continue; }
            if (verified.isAfter(now) || !now.isBefore(expires)) continue;
            List<Map<String, Object>> material = new ArrayList<>();
            int preparationSemester = currentSemester;
            boolean matches = role.path("requirements").isArray() && !role.path("requirements").isEmpty();
            for (JsonNode requirement : role.path("requirements")) {
                String courseId = firstScheduled(requirement.path("courseTopicIds"), courses.keySet());
                String assignmentId = firstScheduled(requirement.path("assignmentTopicIds"), assignments.keySet());
                if (courseId == null || assignmentId == null) { matches = false; break; }
                var assignment = assignments.get(assignmentId);
                preparationSemester = Math.max(preparationSemester,
                        Math.max(courseSemester.get(courseId), assignmentSemester.get(assignmentId)));
                material.add(Map.of("requirement", requirement.path("label").asText(),
                        "alignment", requirement.path("alignment").asText(),
                        "courseTopicId", courseId, "course", courses.get(courseId),
                        "assignmentTopicId", assignmentId, "assignmentId", assignment.get("id"),
                        "assignmentTitle", assignment.get("title"), "assignmentSemester", assignmentSemester.get(assignmentId)));
            }
            if (!matches) continue;
            Map<String, Object> item = new LinkedHashMap<>();
            for (String field : List.of("id", "employer", "role", "location", "workMode", "eligibility",
                    "compensation", "duration", "sourceUrl", "applicationUrl", "applicationInstructions", "verifiedAt"))
                item.put(field, role.path(field).asText("Not stated"));
            item.put("deadline", role.hasNonNull("deadline") ? role.path("deadline").asText() : "Not stated");
            item.put("visibleUntil", expires.toString());
            item.put("preparationSemester", preparationSemester);
            item.put("relatedMaterial", material);
            result.add(item);
        }
        return result;
    }

    private static boolean contains(JsonNode ids, String value) {
        for (JsonNode id : ids) if (value.equals(id.asText())) return true;
        return false;
    }

    private static String firstScheduled(JsonNode alternatives, Set<String> scheduled) {
        for (JsonNode alternative : alternatives)
            if (scheduled.contains(alternative.asText())) return alternative.asText();
        return null;
    }
}
