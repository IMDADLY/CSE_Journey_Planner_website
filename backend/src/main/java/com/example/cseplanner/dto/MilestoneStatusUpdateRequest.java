package com.example.cseplanner.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MilestoneStatusUpdateRequest {

    // "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
    private String status;
}
