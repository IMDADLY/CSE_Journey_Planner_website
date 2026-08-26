package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Stage 1 - SPECIALIZATION DISCOVERY
 * Represents one CSE specialization track (e.g. AI/ML Engineering, Cybersecurity)
 * shown to students before they commit to a path.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "specialization")
public class Specialization {

    @Id
    private String id; //generated

    private String name;                 // e.g. "AI/ML Engineering"
    private String slug;                 // e.g. "ai-ml-engineering" (used in URLs)
    private String description;

    private String industryDemand;       // e.g. "Very High", "High", "Moderate"
    private List<String> careerOutcomes; // e.g. ["ML Engineer", "MLOps Engineer", "Applied Scientist"]
    private List<String> coreSkills;     // e.g. ["Python", "Linear Algebra", "TensorFlow/PyTorch"]
    private List<String> relatedTools;   // e.g. ["Docker", "AWS SageMaker"]

    private String iconUrl;
    private Integer displayOrder;
    private boolean active = true;
}