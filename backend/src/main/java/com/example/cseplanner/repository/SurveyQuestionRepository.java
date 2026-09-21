package com.example.cseplanner.repository;

import com.example.cseplanner.models.SurveyQuestion;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SurveyQuestionRepository extends MongoRepository<SurveyQuestion, String> {

    List<SurveyQuestion> findBySpecializationId(String specializationId);
    
    List<SurveyQuestion> findBySpecializationIdOrderBySectionAsc(String specializationId);
}
