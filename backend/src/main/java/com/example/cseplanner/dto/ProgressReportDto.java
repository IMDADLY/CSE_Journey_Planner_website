package com.example.cseplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProgressReportDto {

    private String roadmapId;
    private String specializationName;
    private int currentSemester;

    private int totalMilestones;
    private int completedMilestones;
    private float percentageCompleted;
    private boolean onTrack;

    @Builder.Default
    private Map<String, Integer> totalByCategory = new HashMap<>();

    @Builder.Default
    private Map<String, Integer> completedByCategory = new HashMap<>();

    private int totalActivityPointsEarned;
    private Instant lastUpdated;
}
