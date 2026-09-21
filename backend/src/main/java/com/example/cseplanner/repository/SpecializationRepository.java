package com.example.cseplanner.repository;

import com.example.cseplanner.models.Specialization;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SpecializationRepository extends MongoRepository<Specialization, String> {

    Optional<Specialization> findBySlug(String slug);
}
