package com.example.cseplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveySubmitRequest {

    private String anonymousSessionToken;
    private String specializationId;
    
    // The student's current semester (1 through 8, defaults to 1 if not specified)
    private int currentSemester;

    // questionId -> selectedOptionIndex (0-based)
    private Map<String, Integer> answers;
}
