package com.example.cseplanner.services;

import com.example.cseplanner.exception.ResourceNotFoundException;
import com.example.cseplanner.models.Specialization;
import com.example.cseplanner.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpecializationService {

    private final SpecializationRepository specializationRepository;

    public List<Specialization> getAll() {
        return specializationRepository.findAll();
    }

    public Specialization getById(String id) {
        return specializationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Specialization not found: " + id));
    }

    public Specialization getBySlug(String slug) {
        return specializationRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Specialization not found: " + slug));
    }

    public Specialization create(Specialization specialization) {
        return specializationRepository.save(specialization);
    }

    public void deleteById(String id){
        if (!specializationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Specialization not found : "+id);
        }
        specializationRepository.deleteById(id);
    }
}
