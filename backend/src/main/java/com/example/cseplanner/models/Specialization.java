package com.example.cseplanner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "specialization")
public class Specialization {

    @Id
    private String id;
    private String surveyId;
    private String name;
    private String slug;
    private String description;

    // Discovery UI fields (GUI Design Page 2)
    private String category;           // "Data & AI", "Software & Web", "Cloud & DevOps", "Systems & Security"
    private int industryDemand;        // 1 to 5 stars or scale
    private String demandTag;          // "HIGH GROWTH (+30% CAGR)", "CRITICAL DEMAND", "STEADY GROWTH"
    private String salaryRange;        // e.g. "₹8–14 LPA"
    private String difficulty;         // "Beginner Friendly", "Intermediate", "Advanced"
    
    @Builder.Default
    private List<String> careerOutcomes = new ArrayList<>();
    
    @Builder.Default
    private List<String> coreSkills = new ArrayList<>();
    
    @Builder.Default
    private List<String> relatedTools = new ArrayList<>();

    private String iconUrl;
    private Instant createdAt;
}