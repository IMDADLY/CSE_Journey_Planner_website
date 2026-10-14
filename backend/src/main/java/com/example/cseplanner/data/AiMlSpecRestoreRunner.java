package com.example.cseplanner.data;

import com.example.cseplanner.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * Restores the AI/ML specialization on databases seeded before it existed.
 * Idempotent: inserts {@code spec-ai-ml} only when absent. Runs after
 * {@link DatabaseSeeder} so a fresh database is seeded first.
 */
@Slf4j
@Component
@Order(2)
@RequiredArgsConstructor
public class AiMlSpecRestoreRunner implements ApplicationRunner {

    private final SpecializationRepository specializationRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!specializationRepository.existsById("spec-ai-ml")) {
            specializationRepository.save(DatabaseSeeder.aiMlSpecialization());
            log.info("Restored missing AI/ML specialization (spec-ai-ml).");
        } else {
            log.info("AI/ML specialization already present. Skipping restore.");
        }
    }
}
