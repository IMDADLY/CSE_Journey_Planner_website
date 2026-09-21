package com.example.cseplanner.services;
import com.example.cseplanner.models.Survey;
import com.example.cseplanner.exception.ResourceNotFoundException;
import com.example.cseplanner.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SurveyService {
    private final SurveyRepository surveyRepository;


    public Survey getById(String id) {
        if(!surveyRepository.existsById(id)) {
            throw new ResourceNotFoundException("Survey not found with id : "+id);
        }

    }
}
