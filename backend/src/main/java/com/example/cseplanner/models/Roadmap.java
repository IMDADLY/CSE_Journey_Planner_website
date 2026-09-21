package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "roadmap")
public class Roadmap {

    @Id
    private String id;

    // No login -> client holds this token (e.g. UUID in localStorage)
    // and sends it back to fetch/update their roadmap later.
    private String anonymousSessionToken;

    private String specializationId;

    // Snapshot of the survey result that generated this roadmap,
    // so the roadmap logic behind it stays reproducible/explainable.
    private String surveyId;
    private int competencyScore;
    private String competencyLevel;   // "Beginner" | "Intermediate" | "Advanced"

    private int currentSemester;      // student's semester at generation time
    private int totalSemesters;       // usually 8 for B.Tech

    private List<SemesterPlan> semesterPlans;

    private Instant createdAt;
    private Instant updatedAt;
}