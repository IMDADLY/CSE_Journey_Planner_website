package com.example.cseplanner.dto;

import com.example.cseplanner.models.Roadmap;
import com.example.cseplanner.models.SurveyResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SurveySubmitResponse {

    private SurveyResponse surveyResponse;
    private Roadmap roadmap;
}
