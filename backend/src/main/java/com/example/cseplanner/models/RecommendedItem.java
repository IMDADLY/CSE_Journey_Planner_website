package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Generic embedded wrapper around a referenced ID, used inside SemesterPlan.
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendedItem {

    private String refId;        // ID pointing to Certification / Internship / ProjectIdea
    private String priority;     // "Must-do" | "Recommended" | "Optional"
    private String reason;       // short justification shown in the UI
}