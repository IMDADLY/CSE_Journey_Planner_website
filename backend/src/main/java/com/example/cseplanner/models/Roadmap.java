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
@Document(collection = "roadmap")
public class Roadmap {

    @Id
    private String id;

    // Client holds this token in localStorage (e.g. UUID)
    private String anonymousSessionToken;

    private String specializationId;
    private String specializationName;

    private String surveyResponseId;
    private int competencyScore;
    private String competencyLevel;   // "Beginner" | "Intermediate" | "Advanced"

    private int currentSemester;      // student's semester at generation time
    @Builder.Default
    private int totalSemesters = 8;   // 8 semesters for B.Tech

    private int totalMilestones;
    private int completedMilestones;
    private float progressPercentage;

    @Builder.Default
    private List<SemesterPlan> semesterPlans = new ArrayList<>();

    private Instant createdAt;
    private Instant updatedAt;

    public void recalculateProgress() {
        int total = 0;
        int completed = 0;
        if (semesterPlans != null) {
            for (SemesterPlan plan : semesterPlans) {
                if (plan.getMilestones() != null) {
                    for (MilestoneItem item : plan.getMilestones()) {
                        total++;
                        if ("COMPLETED".equalsIgnoreCase(item.getStatus())) {
                            completed++;
                        }
                    }
                }
            }
        }
        this.totalMilestones = total;
        this.completedMilestones = completed;
        this.progressPercentage = total > 0 ? Math.round(((float) completed / total) * 100.0f) : 0f;
        this.updatedAt = Instant.now();
    }
}