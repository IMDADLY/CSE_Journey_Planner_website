package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MilestoneItem {

    private String id;
    private String title;
    private String description;

    // "COURSE" | "NPTEL_CERTIFICATION" | "PROJECT" | "INTERNSHIP"
    private String category;

    // "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
    @Builder.Default
    private String status = "NOT_STARTED";

    private String provider;       // e.g. "NPTEL / IIT Madras", "Coursera", "Self-directed"
    private String duration;       // e.g. "12 Weeks", "40 Hours"
    private int activityPoints;    // College AICTE / University activity points
    private String resourceLink;
    private boolean isNptel;

    private Instant completedAt;
}
