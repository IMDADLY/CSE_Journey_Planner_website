package com.example.cseplanner.repository;

import com.example.cseplanner.models.Roadmap;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface RoadmapRepository extends MongoRepository<Roadmap, String> {

    List<Roadmap> findByAnonymousSessionToken(String anonymousSessionToken);

    Optional<Roadmap> findFirstByAnonymousSessionTokenOrderByCreatedAtDesc(String anonymousSessionToken);

    Optional<Roadmap> findByAnonymousSessionTokenAndSpecializationId(String anonymousSessionToken, String specializationId);
}
