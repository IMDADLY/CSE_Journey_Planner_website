package com.example.cseplanner.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.*;

/** Authored requirements, selected only after the personalized semester has been scheduled. */
public final class AiMlAssignmentCatalog {
    public static final String CONTENT_VERSION = "ai-ml-assignments-v1";
    private final ObjectMapper mapper;
    private final JsonNode assignments;
    private final Map<String, JsonNode> topics = new LinkedHashMap<>();

    public AiMlAssignmentCatalog(ObjectMapper mapper, JsonNode bank) throws IOException {
        this.mapper = mapper;
        try (var input = new ClassPathResource("assessment/ai-ml-assignments-v1.json").getInputStream()) {
            assignments = mapper.readTree(input);
        }
        for (JsonNode topic : bank.path("subtopics")) {
            String id = topic.path("id").asText();
            if (!assignments.has(id)) throw new IllegalStateException("Missing AI/ML assignment for " + id);
            topics.put(id, topic);
        }
    }

    public Map<String, Object> forSemester(List<Map<String, Object>> units) {
        if (units.isEmpty()) throw new IllegalArgumentException("AI/ML semester must have a learning unit");
        // Prefer real course tasks, retaining prerequisite order within each preference group.
        Map<String, Object> focus = units.stream().filter(unit ->
                "Selected course tasks".equals(assignments.path((String) unit.get("subtopicId")).path("sourceType").asText()))
                .findFirst().orElse(units.getFirst());
        String id = (String) focus.get("subtopicId");
        JsonNode topic = topics.get(id);
        Map<String, Object> document = mapper.convertValue(assignments.path(id),
                new com.fasterxml.jackson.core.type.TypeReference<LinkedHashMap<String, Object>>() {});
        document.put("id", CONTENT_VERSION + ":" + id);
        document.put("subtopicId", id);
        document.put("course", focus.get("course"));
        document.put("goals", List.of("Demonstrate " + topic.path("name").asText().toLowerCase(Locale.ROOT)
                + " through the specific tasks and checks below.",
                "Explain your reasoning and independently check the result."));
        List<String> prerequisites = new ArrayList<>();
        prerequisites.add("Before starting, study the linked course modules: "
                + topic.path("learningUnit").path("selectedCoverage").asText());
        for (JsonNode prerequisite : topic.path("prerequisites")) {
            prerequisites.add("First complete the scheduled material for "
                    + topics.get(prerequisite.asText()).path("name").asText() + ".");
        }
        document.put("prerequisites", prerequisites);
        document.put("prerequisiteTopicIds", mapper.convertValue(topic.path("prerequisites"), List.class));
        document.put("estimatedHours", 8);
        document.put("duration", "1–2 weeks, after the relevant course modules");
        document.put("timeline", List.of(
                Map.of("phase", "Week 1: review modules and understand inputs", "hours", 2),
                Map.of("phase", "Week 1: implement the selected tasks or work the calculations", "hours", 3),
                Map.of("phase", "Week 2: check examples and edge cases", "hours", 2),
                Map.of("phase", "Week 2: document and explain your work", "hours", 1)));
        document.put("scope", "Complete only the tasks listed here. No full application, public deployment, GPU training, paid service, certificate or course submission is required.");
        document.put("submission", List.of("Your source files or worked calculation document, plus any small input fixture you created.",
                "A README with local setup, dependency versions, exact run/check steps and source attribution.",
                "Recorded outputs and checks, including the stated edge cases; report failures honestly.",
                "A short explanation of your method, one limitation, and a manual trace of one example."));
        document.put("proofOfLearning", List.of("Explain every submitted function or calculation without assistance.",
                "Change one input or parameter, predict the effect, then verify it and explain any difference.",
                "Provide an individual-work declaration and list the course resources used. These are review evidence, not automatic proof of authorship."));
        document.put("independentWork", "Work completely individually. Use only the linked course material and references supplied by that course. No AI assistance (including AI tutors, chatbots, code generation or AI autocomplete), vibe coding, copied solutions, external solution repositories or help from another person. Only explicitly allowed course starter files may be reused, with attribution. Studying ML algorithms is allowed; using AI to complete this assignment is not.");
        return document;
    }
}
