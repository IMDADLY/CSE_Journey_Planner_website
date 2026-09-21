package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "surveyQuestion")
public class SurveyQuestion {

    @Id
    private String id;

    private String specializationId;
    
    // "PROGRAMMING_FUNDAMENTALS" | "DATA_STRUCTURES" | "ALGORITHMS" | "SPECIALIZATION_CORE" | "MATHEMATICS"
    private String section;

    private String questionText;
    private String codeSnippet;   // optional code block to display

    @Builder.Default
    private List<String> options = new ArrayList<>();

    @Builder.Default
    private List<Integer> optionScores = new ArrayList<>();

    private int correctOptionIndex;

    private float weight;
    private String skillTag;
    private String difficulty;     // "EASY" | "MEDIUM" | "HARD"

    private Instant createdAt;
}