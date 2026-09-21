package com.example.cseplanner.controllers;

import com.example.cseplanner.models.Specialization;
import com.example.cseplanner.services.SurveyService
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/surveys")
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;


    @GetMapping("/{specializationId}")
    public ResponseEntity<Survey> getById(@PathVariable String specializationId) {
        return ResponseEntity.ok(surveyService.getById());
    }

   @PostMapping("/submit")
    public ResponseEntity<Survey>
}
