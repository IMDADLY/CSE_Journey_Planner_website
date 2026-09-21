package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "surveyResponse")
public class SurveyResponse {

    @Id
    private String id;

    private String anonymousSessionToken;
    private String specializationId;
    private int currentSemester;

    // questionId -> selectedOptionIndex (0-based)
    @Builder.Default
    private Map<String, Integer> answers = new HashMap<>();

    private int totalScore;
    private int maxScore;
    private float percentageScore;

    // "Beginner" | "Intermediate" | "Advanced"
    private String competencyLevel;

    @Builder.Default
    private List<String> skillGaps = new ArrayList<>();

    private Instant submittedAt;
}
