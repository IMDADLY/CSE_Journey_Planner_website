package com.example.cseplanner.controllers;

import com.example.cseplanner.dto.SurveySubmitRequest;
import com.example.cseplanner.dto.SurveySubmitResponse;
import com.example.cseplanner.models.Roadmap;
import com.example.cseplanner.models.SurveyQuestion;
import com.example.cseplanner.models.SurveyResponse;
import com.example.cseplanner.services.RoadmapService;
import com.example.cseplanner.services.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;
    private final RoadmapService roadmapService;

    @GetMapping("/{specializationId}/questions")
    public ResponseEntity<List<SurveyQuestion>> getQuestions(@PathVariable String specializationId) {
        return ResponseEntity.ok(surveyService.getQuestionsBySpecialization(specializationId));
    }

    @PostMapping("/submit")
    public ResponseEntity<SurveySubmitResponse> submitSurvey(@RequestBody SurveySubmitRequest request) {
        // Step 1: Evaluate survey answers, calculate scores and competency level
        SurveyResponse evaluation = surveyService.evaluateSurvey(request);

        // Step 2: Personalize & generate 8-semester roadmap
        Roadmap roadmap = roadmapService.generateRoadmap(evaluation);

        SurveySubmitResponse response = SurveySubmitResponse.builder()
                .surveyResponse(evaluation)
                .roadmap(roadmap)
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/response/{id}")
    public ResponseEntity<SurveyResponse> getSurveyResponse(@PathVariable String id) {
        return ResponseEntity.ok(surveyService.getResponseById(id));
    }
}
