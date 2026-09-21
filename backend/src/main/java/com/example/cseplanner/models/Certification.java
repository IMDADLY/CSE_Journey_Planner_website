package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "certification")
public class Certification {

    @Id
    private String id;

    private String title;
    private String provider;
    private String url;

    private List<String> specializationIds;
    private List<String> skillTags;
    private String difficultyLevel;
    private int estimatedHours;
}