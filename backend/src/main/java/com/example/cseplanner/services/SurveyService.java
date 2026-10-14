package com.example.cseplanner.services;

import com.example.cseplanner.dto.SurveySubmitRequest;
import com.example.cseplanner.exception.ResourceNotFoundException;
import com.example.cseplanner.models.Survey;
import com.example.cseplanner.models.SurveyQuestion;
import com.example.cseplanner.models.SurveyResponse;
import com.example.cseplanner.repository.SurveyQuestionRepository;
import com.example.cseplanner.repository.SurveyRepository;
import com.example.cseplanner.repository.SurveyResponseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final SurveyQuestionRepository surveyQuestionRepository;
    private final SurveyResponseRepository surveyResponseRepository;

    public Survey getById(String id) {
        return surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey not found with id: " + id));
    }

    public List<SurveyQuestion> getQuestionsBySpecialization(String specializationId) {
        List<SurveyQuestion> questions = surveyQuestionRepository.findBySpecializationIdOrderBySectionAsc(specializationId);
        if (questions.isEmpty()) {
            // Fallback: check by specializationId with plain list
            questions = surveyQuestionRepository.findBySpecializationId(specializationId);
        }
        return questions;
    }

    public List<SurveyQuestion> getQuestionsBySpecializationAndSemester(String specializationId, int semester) {
        List<SurveyQuestion> allQuestions = getQuestionsBySpecialization(specializationId);
        if (allQuestions == null || allQuestions.isEmpty()) {
            return allQuestions;
        }
        // AI/ML nested survey support (S8=25, S7=30, ... S1=60)
        if ((specializationId.contains("ai") || specializationId.contains("ml")) && allQuestions.size() >= 25) {
            int startIdx = 0;
            if (semester >= 8) startIdx = Math.min(35, allQuestions.size() - 25);
            else if (semester == 7) startIdx = Math.min(30, allQuestions.size() - 30);
            else if (semester == 6) startIdx = Math.min(25, allQuestions.size() - 35);
            else if (semester == 5) startIdx = Math.min(20, allQuestions.size() - 40);
            else if (semester == 4) startIdx = Math.min(15, allQuestions.size() - 45);
            else if (semester == 3) startIdx = Math.min(10, allQuestions.size() - 50);
            else if (semester == 2) startIdx = Math.min(5, allQuestions.size() - 55);
            return allQuestions.subList(startIdx, allQuestions.size());
        }
        return allQuestions;
    }

    public SurveyResponse evaluateSurvey(SurveySubmitRequest request) {
        String specializationId = request.getSpecializationId();
        String sessionToken = request.getAnonymousSessionToken();
        if (sessionToken == null || sessionToken.isBlank()) {
            sessionToken = UUID.randomUUID().toString();
        }

        int currentSemester = request.getCurrentSemester() > 0 ? request.getCurrentSemester() : 1;
        Map<String, Integer> answers = request.getAnswers();

        List<SurveyQuestion> questions = getQuestionsBySpecialization(specializationId);

        int totalScore = 0;
        int maxScore = 0;
        List<String> skillGaps = new ArrayList<>();

        if (questions != null && !questions.isEmpty()) {
            for (SurveyQuestion q : questions) {
                int questionMax = (q.getWeight() > 0) ? (int) (q.getWeight() * 10) : 10;
                maxScore += questionMax;

                Integer chosenOption = (answers != null) ? answers.get(q.getId()) : null;
                boolean isCorrect = false;

                if (chosenOption != null) {
                    if (chosenOption == q.getCorrectOptionIndex()) {
                        isCorrect = true;
                        totalScore += questionMax;
                    } else if (q.getOptionScores() != null && chosenOption < q.getOptionScores().size()) {
                        int score = q.getOptionScores().get(chosenOption);
                        totalScore += score;
                        if (score >= questionMax) {
                            isCorrect = true;
                        }
                    }
                }

                if (!isCorrect && q.getSkillTag() != null && !skillGaps.contains(q.getSkillTag())) {
                    skillGaps.add(q.getSkillTag());
                }
            }
        }

        if (maxScore == 0) {
            maxScore = 100;
        }

        float percentage = Math.round(((float) totalScore / maxScore) * 100.0f);

        String competencyLevel;
        if (percentage < 40.0f) {
            competencyLevel = "Beginner";
        } else if (percentage <= 75.0f) {
            competencyLevel = "Intermediate";
        } else {
            competencyLevel = "Advanced";
        }

        SurveyResponse response = SurveyResponse.builder()
                .anonymousSessionToken(sessionToken)
                .specializationId(specializationId)
                .currentSemester(currentSemester)
                .answers(answers != null ? answers : Map.of())
                .totalScore(totalScore)
                .maxScore(maxScore)
                .percentageScore(percentage)
                .competencyLevel(competencyLevel)
                .skillGaps(skillGaps)
                .submittedAt(Instant.now())
                .build();

        SurveyResponse saved = surveyResponseRepository.save(response);
        log.info("Survey submitted successfully for specialization {}: score={}/{} ({}%), level={}",
                specializationId, totalScore, maxScore, percentage, competencyLevel);
        return saved;
    }

    public SurveyResponse getResponseById(String id) {
        return surveyResponseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey response not found: " + id));
    }
}
