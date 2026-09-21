package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

// Embedded, NOT a top-level @Document — only ever lives inside a Roadmap.
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SemesterPlan {

    private int semesterNumber;
    private String theme;                  // e.g. "Foundations", "Core Specialization", "Industry Readiness"
    private List<String> focusSkillTags;   // skills to build this semester

    private List<RecommendedItem> certifications; // refs to Certification
    private List<RecommendedItem> internships;    // refs to Internship
    private List<RecommendedItem> projectIdeas;   // refs to ProjectIdea

    private List<String> milestones;       // e.g. "Complete 1 portfolio project", "Apply to 3 internships"
}