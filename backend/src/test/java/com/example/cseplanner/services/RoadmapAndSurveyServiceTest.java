package com.example.cseplanner.services;

import com.example.cseplanner.dto.ProgressReportDto;
import com.example.cseplanner.dto.SurveySubmitRequest;
import com.example.cseplanner.models.*;
import com.example.cseplanner.repository.RoadmapRepository;
import com.example.cseplanner.repository.SpecializationRepository;
import com.example.cseplanner.repository.SurveyQuestionRepository;
import com.example.cseplanner.repository.SurveyResponseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RoadmapAndSurveyServiceTest {

    @Mock
    private SurveyQuestionRepository surveyQuestionRepository;

    @Mock
    private SurveyResponseRepository surveyResponseRepository;

    @Mock
    private RoadmapRepository roadmapRepository;

    @Mock
    private SpecializationRepository specializationRepository;

    private SurveyService surveyService;
    private RoadmapService roadmapService;

    @BeforeEach
    void setUp() {
        surveyService = new SurveyService(null, surveyQuestionRepository, surveyResponseRepository);
        roadmapService = new RoadmapService(roadmapRepository, specializationRepository);
    }

    @Test
    @DisplayName("Should correctly evaluate survey score and detect skill gaps")
    void testSurveyEvaluation() {
        SurveyQuestion q1 = SurveyQuestion.builder()
                .id("q1")
                .specializationId("spec-full-stack")
                .questionText("Question 1")
                .options(List.of("A", "B", "C", "D"))
                .correctOptionIndex(1)
                .weight(1.0f)
                .skillTag("React Hooks")
                .build();

        SurveyQuestion q2 = SurveyQuestion.builder()
                .id("q2")
                .specializationId("spec-full-stack")
                .questionText("Question 2")
                .options(List.of("A", "B", "C", "D"))
                .correctOptionIndex(2)
                .weight(1.0f)
                .skillTag("Data Structures")
                .build();

        when(surveyQuestionRepository.findBySpecializationIdOrderBySectionAsc("spec-full-stack"))
                .thenReturn(List.of(q1, q2));
        when(surveyResponseRepository.save(any(SurveyResponse.class)))
                .thenAnswer(inv -> inv.getArgument(0));

        // Answer q1 correctly (index 1), q2 incorrectly (index 0)
        SurveySubmitRequest request = SurveySubmitRequest.builder()
                .anonymousSessionToken("test-session-123")
                .specializationId("spec-full-stack")
                .currentSemester(3)
                .answers(Map.of("q1", 1, "q2", 0))
                .build();

        SurveyResponse response = surveyService.evaluateSurvey(request);

        assertNotNull(response);
        assertEquals(10, response.getTotalScore());
        assertEquals(20, response.getMaxScore());
        assertEquals(50.0f, response.getPercentageScore());
        assertEquals("Intermediate", response.getCompetencyLevel());
        assertTrue(response.getSkillGaps().contains("Data Structures"));
        assertFalse(response.getSkillGaps().contains("React Hooks"));
    }

    @Test
    @DisplayName("Should generate 8 semester roadmap with embedded milestones and update progress")
    void testRoadmapGenerationAndMilestoneProgress() {
        Specialization spec = Specialization.builder()
                .id("spec-ai-ml")
                .name("Artificial Intelligence & Machine Learning")
                .slug("ai-ml")
                .build();

        when(specializationRepository.findById("spec-ai-ml")).thenReturn(Optional.of(spec));
        when(roadmapRepository.save(any(Roadmap.class))).thenAnswer(inv -> {
            Roadmap r = inv.getArgument(0);
            if (r.getId() == null) r.setId("roadmap-xyz");
            return r;
        });

        SurveyResponse response = SurveyResponse.builder()
                .id("resp-1")
                .anonymousSessionToken("token-abc")
                .specializationId("spec-ai-ml")
                .competencyLevel("Beginner")
                .currentSemester(2)
                .totalScore(30)
                .skillGaps(List.of("Python Basics"))
                .build();

        Roadmap roadmap = roadmapService.generateRoadmap(response);

        assertNotNull(roadmap);
        assertEquals(8, roadmap.getSemesterPlans().size());
        assertTrue(roadmap.getTotalMilestones() > 0);
        assertEquals(0, roadmap.getCompletedMilestones());
        assertEquals(0.0f, roadmap.getProgressPercentage());

        // Find a milestone in semester 2 to mark as completed
        MilestoneItem itemToComplete = roadmap.getSemesterPlans().get(1).getMilestones().get(0);
        String milestoneId = itemToComplete.getId();

        when(roadmapRepository.findById("roadmap-xyz")).thenReturn(Optional.of(roadmap));

        Roadmap updatedRoadmap = roadmapService.updateMilestoneStatus("roadmap-xyz", milestoneId, "COMPLETED");

        assertEquals(1, updatedRoadmap.getCompletedMilestones());
        assertTrue(updatedRoadmap.getProgressPercentage() > 0.0f);

        // Progress report check
        ProgressReportDto report = roadmapService.getProgressReport("roadmap-xyz");
        assertNotNull(report);
        assertEquals(1, report.getCompletedMilestones());
        assertEquals("Artificial Intelligence & Machine Learning", report.getSpecializationName());
    }
}
