package com.example.cseplanner.repository;

import com.example.cseplanner.models.Survey;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SurveyQuestionRepository extends MongoRepository<Survey, String> {
}
