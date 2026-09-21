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
@Document(collection = "survey")
public class Survey {

    @Id
    private String id;

    private String specializationId;

    private List<String> surveyQuestionIds;

    private Instant createdAt;
}