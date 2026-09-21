package com.example.cseplanner.controllers;

import com.example.cseplanner.dto.MilestoneStatusUpdateRequest;
import com.example.cseplanner.dto.ProgressReportDto;
import com.example.cseplanner.models.Roadmap;
import com.example.cseplanner.services.RoadmapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roadmaps")
@RequiredArgsConstructor
public class RoadmapController {

    private final RoadmapService roadmapService;

    @GetMapping("/{id}")
    public ResponseEntity<Roadmap> getById(@PathVariable String id) {
        return ResponseEntity.ok(roadmapService.getById(id));
    }

    @GetMapping("/session/{sessionToken}")
    public ResponseEntity<Roadmap> getLatestBySessionToken(@PathVariable String sessionToken) {
        return ResponseEntity.ok(roadmapService.getLatestBySessionToken(sessionToken));
    }

    @GetMapping("/session/{sessionToken}/all")
    public ResponseEntity<List<Roadmap>> getAllBySessionToken(@PathVariable String sessionToken) {
        return ResponseEntity.ok(roadmapService.getAllBySessionToken(sessionToken));
    }

    @PatchMapping("/{id}/milestones/{milestoneId}")
    public ResponseEntity<Roadmap> updateMilestoneStatus(
            @PathVariable String id,
            @PathVariable String milestoneId,
            @RequestBody MilestoneStatusUpdateRequest request) {
        String status = (request != null && request.getStatus() != null) ? request.getStatus() : "COMPLETED";
        Roadmap updated = roadmapService.updateMilestoneStatus(id, milestoneId, status);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/{id}/progress-report")
    public ResponseEntity<ProgressReportDto> getProgressReport(@PathVariable String id) {
        return ResponseEntity.ok(roadmapService.getProgressReport(id));
    }
}
