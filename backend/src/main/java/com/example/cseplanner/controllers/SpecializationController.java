package com.example.cseplanner.controllers;

import com.example.cseplanner.models.Specialization;
import com.example.cseplanner.services.SpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/specializations")
@RequiredArgsConstructor
public class SpecializationController {

    private final SpecializationService specializationService;

    @GetMapping
    public ResponseEntity<List<Specialization>> getAll() {
        return ResponseEntity.ok(specializationService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Specialization> getById(@PathVariable String id) {
        return ResponseEntity.ok(specializationService.getById(id));
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Specialization> getBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(specializationService.getBySlug(slug));
    }
}
