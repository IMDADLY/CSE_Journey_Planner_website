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
@Document(collection = "internship")
public class Internship {

    @Id
    private String id;

    private String title;
    private String description;

    private String specializationId;
    private List<String> requiredSkills;
    private String difficultyLevel;
}