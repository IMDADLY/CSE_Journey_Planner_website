package com.example.cseplanner.repository;

import com.example.cseplanner.models.Survey;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SurveyRepository extends MongoRepository<Survey, String> {

    Optional<Survey> findBySpecializationId(String specializationId);
}
