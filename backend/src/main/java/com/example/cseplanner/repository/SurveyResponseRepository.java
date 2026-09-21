package com.example.cseplanner.repository;

import com.example.cseplanner.models.SurveyResponse;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SurveyResponseRepository extends MongoRepository<SurveyResponse, String> {

    List<SurveyResponse> findByAnonymousSessionToken(String anonymousSessionToken);

    List<SurveyResponse> findBySpecializationId(String specializationId);
}
