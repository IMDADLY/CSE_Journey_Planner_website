package com.example.cseplanner.controllers;

import com.example.cseplanner.models.Specialization;
import com.example.cseplanner.services.SpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Stage 1 - SPECIALIZATION DISCOVERY
 * GET  /api/specializations           -> browse all specializations
 * GET  /api/specializations/{id}      -> view one specialization in detail
 * GET  /api/specializations/slug/{slug}
 * POST /api/specializations           -> (admin) add a new specialization
 */
@RestController
@RequestMapping("/api/specializations")
@RequiredArgsConstructor
public class SpecializationController {

    private final SpecializationService specializationService;

    @GetMapping
    public ResponseEntity<List<Specialization>> getAll() {
        return ResponseEntity.ok(specializationService.getAllActive());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Specialization> getById(@PathVariable String id) {
        return ResponseEntity.ok(specializationService.getById(id));
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Specialization> getBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(specializationService.getBySlug(slug));
    }

    @PostMapping
    public ResponseEntity<Specialization> create(@RequestBody Specialization specialization) {
        Specialization created = specializationService.create(specialization);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}
