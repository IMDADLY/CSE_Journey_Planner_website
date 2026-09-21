package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "surveyQuestion")
public class SurveyQuestion {

    @Id
    private String id;

    private String questionText;
    private List<String> options;
    private List<Integer> optionScores;

    private float weight;
    private String skillTag;

    private Instant createdAt;
}