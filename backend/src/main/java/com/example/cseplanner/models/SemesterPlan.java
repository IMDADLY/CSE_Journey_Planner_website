package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

// Embedded, NOT a top-level @Document — lives inside a Roadmap.
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SemesterPlan {

    private int semesterNumber;
    private String theme;                  // e.g. "Foundations", "Core Specialization", "Industry Readiness"
    
    @Builder.Default
    private List<String> focusSkillTags = new ArrayList<>();   // skills to build this semester

    @Builder.Default
    private List<MilestoneItem> milestones = new ArrayList<>(); // embedded course, cert, project, internship milestones

    @Builder.Default
    private List<String> semesterGoals = new ArrayList<>();    // e.g. "Complete 1 portfolio project", "Apply to 3 internships"
}