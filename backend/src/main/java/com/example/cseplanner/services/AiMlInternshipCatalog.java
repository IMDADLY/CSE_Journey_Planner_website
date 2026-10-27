package com.example.cseplanner.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.time.Clock;
import java.util.*;

/** AI/ML catalog adapter; matching is shared with the other roadmaps. */
public final class AiMlInternshipCatalog {
    public static final String CONTENT_VERSION = "ai-ml-internships-v1";
    private final RoadmapInternshipCatalog delegate;
    public AiMlInternshipCatalog(ObjectMapper mapper) throws IOException {
        delegate = new RoadmapInternshipCatalog(mapper, "assessment/ai-ml-internships-v1.json");
    }
    AiMlInternshipCatalog(JsonNode catalog, Clock clock) {
        delegate = new RoadmapInternshipCatalog(catalog, clock);
    }
    public List<Map<String,Object>> forRoadmap(List<Map<String,Object>> semesters, int currentSemester) {
        return delegate.forRoadmap(semesters, currentSemester);
    }
}
