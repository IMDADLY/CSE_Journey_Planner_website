package com.example.cseplanner.services;

import com.example.cseplanner.dto.ProgressReportDto;
import com.example.cseplanner.exception.ResourceNotFoundException;
import com.example.cseplanner.models.*;
import com.example.cseplanner.repository.RoadmapRepository;
import com.example.cseplanner.repository.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class RoadmapService {

    private final RoadmapRepository roadmapRepository;
    private final SpecializationRepository specializationRepository;

    public Roadmap generateRoadmap(SurveyResponse response) {
        String specializationId = response.getSpecializationId();
        Specialization specialization = specializationRepository.findById(specializationId)
                .orElse(specializationRepository.findBySlug(specializationId).orElse(null));

        String specializationName = (specialization != null) ? specialization.getName() : "CSE Specialization";
        int currentSem = Math.max(1, Math.min(8, response.getCurrentSemester()));
        String level = response.getCompetencyLevel() != null ? response.getCompetencyLevel() : "Intermediate";

        List<SemesterPlan> semesterPlans = buildSemesterPlans(specialization, currentSem, level, response.getSkillGaps());

        Roadmap roadmap = Roadmap.builder()
                .anonymousSessionToken(response.getAnonymousSessionToken())
                .specializationId(specialization != null ? specialization.getId() : specializationId)
                .specializationName(specializationName)
                .surveyResponseId(response.getId())
                .competencyScore(response.getTotalScore())
                .competencyLevel(level)
                .currentSemester(currentSem)
                .totalSemesters(8)
                .semesterPlans(semesterPlans)
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();

        roadmap.recalculateProgress();
        Roadmap saved = roadmapRepository.save(roadmap);
        log.info("Generated roadmap ID {} for session {} with {} milestones",
                saved.getId(), saved.getAnonymousSessionToken(), saved.getTotalMilestones());
        return saved;
    }

    public Roadmap getById(String id) {
        return roadmapRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Roadmap not found with id: " + id));
    }

    public Roadmap getLatestBySessionToken(String token) {
        return roadmapRepository.findFirstByAnonymousSessionTokenOrderByCreatedAtDesc(token)
                .orElseThrow(() -> new ResourceNotFoundException("No roadmap found for session token: " + token));
    }

    public List<Roadmap> getAllBySessionToken(String token) {
        return roadmapRepository.findByAnonymousSessionToken(token);
    }

    public Roadmap updateMilestoneStatus(String roadmapId, String milestoneId, String newStatus) {
        Roadmap roadmap = getById(roadmapId);
        boolean found = false;

        if (roadmap.getSemesterPlans() != null) {
            for (SemesterPlan plan : roadmap.getSemesterPlans()) {
                if (plan.getMilestones() != null) {
                    for (MilestoneItem item : plan.getMilestones()) {
                        if (milestoneId.equals(item.getId())) {
                            item.setStatus(newStatus.toUpperCase());
                            if ("COMPLETED".equalsIgnoreCase(newStatus)) {
                                item.setCompletedAt(Instant.now());
                            } else {
                                item.setCompletedAt(null);
                            }
                            found = true;
                            break;
                        }
                    }
                }
                if (found) break;
            }
        }

        if (!found) {
            throw new ResourceNotFoundException("Milestone not found with id: " + milestoneId);
        }

        roadmap.recalculateProgress();
        return roadmapRepository.save(roadmap);
    }

    public ProgressReportDto getProgressReport(String roadmapId) {
        Roadmap roadmap = getById(roadmapId);

        Map<String, Integer> totalByCategory = new HashMap<>();
        Map<String, Integer> completedByCategory = new HashMap<>();
        int activityPointsEarned = 0;

        if (roadmap.getSemesterPlans() != null) {
            for (SemesterPlan plan : roadmap.getSemesterPlans()) {
                if (plan.getMilestones() != null) {
                    for (MilestoneItem item : plan.getMilestones()) {
                        String cat = item.getCategory() != null ? item.getCategory() : "OTHER";
                        totalByCategory.put(cat, totalByCategory.getOrDefault(cat, 0) + 1);

                        if ("COMPLETED".equalsIgnoreCase(item.getStatus())) {
                            completedByCategory.put(cat, completedByCategory.getOrDefault(cat, 0) + 1);
                            activityPointsEarned += item.getActivityPoints();
                        }
                    }
                }
            }
        }

        // Student is on track if their progress matches or exceeds expected progress for their semester
        float expectedPercent = Math.min(100.0f, (roadmap.getCurrentSemester() / 8.0f) * 100.0f);
        boolean onTrack = roadmap.getProgressPercentage() >= (expectedPercent * 0.7f);

        return ProgressReportDto.builder()
                .roadmapId(roadmap.getId())
                .specializationName(roadmap.getSpecializationName())
                .currentSemester(roadmap.getCurrentSemester())
                .totalMilestones(roadmap.getTotalMilestones())
                .completedMilestones(roadmap.getCompletedMilestones())
                .percentageCompleted(roadmap.getProgressPercentage())
                .onTrack(onTrack)
                .totalByCategory(totalByCategory)
                .completedByCategory(completedByCategory)
                .totalActivityPointsEarned(activityPointsEarned)
                .lastUpdated(roadmap.getUpdatedAt())
                .build();
    }

    private List<SemesterPlan> buildSemesterPlans(Specialization spec, int currentSemester, String level, List<String> skillGaps) {
        List<SemesterPlan> plans = new ArrayList<>();
        String specName = (spec != null) ? spec.getName() : "CSE Track";
        String specSlug = (spec != null && spec.getSlug() != null) ? spec.getSlug().toLowerCase() : "general";

        // Pre-configured themes for an 8-semester B.Tech CSE Journey (matching GUI Design Page 4)
        String[] themes = {
                "Foundations & Basic Programming",
                "Data Structures & Core Algorithms",
                "Front-End / Core Specialization Basics",
                "Back-End / Systems & Architecture",
                "Specialization Integration & Applied Engineering",
                "Cloud, DevOps & Distributed Systems",
                "Capstone Project & Industrial Innovation",
                "Career Ready, Placement & Industry Transition"
        };

        for (int sem = 1; sem <= 8; sem++) {
            List<MilestoneItem> milestones = generateMilestonesForSemester(specSlug, specName, sem, level, skillGaps);
            
            // If student is already past this semester, mark foundational milestones as completed if advanced
            if (sem < currentSemester && "Advanced".equalsIgnoreCase(level)) {
                for (MilestoneItem item : milestones) {
                    item.setStatus("COMPLETED");
                    item.setCompletedAt(Instant.now());
                }
            }

            SemesterPlan plan = SemesterPlan.builder()
                    .semesterNumber(sem)
                    .theme(themes[sem - 1])
                    .focusSkillTags(determineFocusSkills(specSlug, sem))
                    .milestones(milestones)
                    .semesterGoals(determineSemesterGoals(specSlug, sem))
                    .build();

            plans.add(plan);
        }

        return plans;
    }

    private List<MilestoneItem> generateMilestonesForSemester(String specSlug, String specName, int sem, String level, List<String> skillGaps) {
        List<MilestoneItem> items = new ArrayList<>();

        switch (sem) {
            case 1:
                items.add(createItem("Problem Solving and C Programming", "COURSE", "University / Autonomous", "14 Weeks", 10, "https://nptel.ac.in/courses/106104128", false, "Fundamental algorithmic problem solving"));
                items.add(createItem("Basic Electronics & Digital Systems", "COURSE", "University Core", "14 Weeks", 10, null, false, "Core computer hardware basics"));
                items.add(createItem("Programming in C (NPTEL)", "NPTEL_CERTIFICATION", "NPTEL / IIT Kanpur", "12 Weeks", 20, "https://nptel.ac.in/courses/106104128", true, "Official NPTEL certificate with proctored exam"));
                items.add(createItem("CLI Personal Expense Tracker", "PROJECT", "Self-Directed", "3 Weeks", 15, "https://github.com", false, "Build a modular CLI app in C with file storage"));
                break;

            case 2:
                items.add(createItem("Data Structures and Algorithms", "COURSE", "University Core", "14 Weeks", 10, null, false, "Arrays, Stacks, Queues, Linked Lists, Trees"));
                items.add(createItem("Discrete Mathematics", "COURSE", "University Core", "14 Weeks", 10, null, false, "Graph theory, sets, combinatorics"));
                items.add(createItem("Data Structures & Algorithms Using Java/Python", "NPTEL_CERTIFICATION", "NPTEL / IIT Delhi", "8 Weeks", 20, "https://nptel.ac.in/courses/106106133", true, "Standard industry benchmark DSA certification"));
                items.add(createItem("Custom Hash Table & Graph Traversal Engine", "PROJECT", "Self-Directed", "4 Weeks", 15, "https://github.com", false, "Implement hash table with collision handling and BFS/DFS visualizer"));
                break;

            case 3:
                items.add(createItem("Object Oriented Programming & Design", "COURSE", "University Core", "14 Weeks", 10, null, false, "OOP principles, design patterns, clean code"));
                items.add(createItem("Computer Organization & Architecture", "COURSE", "University Core", "14 Weeks", 10, null, false, "CPU architecture, memory hierarchies"));
                if (specSlug.contains("ai") || specSlug.contains("ml") || specSlug.contains("data")) {
                    items.add(createItem("Python for Data Science (NPTEL)", "NPTEL_CERTIFICATION", "NPTEL / IIT Madras", "4 Weeks", 15, "https://nptel.ac.in/courses/106106182", true, "NumPy, Pandas, Matplotlib mastery"));
                    items.add(createItem("Exploratory Data Analysis Dashboard", "PROJECT", "Portfolio", "4 Weeks", 20, "https://streamlit.io", false, "Interactive dashboard analyzing real-world dataset"));
                } else if (specSlug.contains("cyber") || specSlug.contains("security")) {
                    items.add(createItem("Introduction to Information Security", "NPTEL_CERTIFICATION", "NPTEL / IIT Madras", "8 Weeks", 20, "https://nptel.ac.in/courses/106106129", true, "Foundations of cyber security"));
                    items.add(createItem("Network Packet Sniffer & Analyzer", "PROJECT", "Portfolio", "4 Weeks", 20, "https://github.com", false, "Build a raw socket packet inspector"));
                } else {
                    items.add(createItem("HTML, CSS, Modern JavaScript & React", "NPTEL_CERTIFICATION", "NPTEL / IIT Kharagpur", "12 Weeks", 20, "https://nptel.ac.in/courses/106105084", true, "Frontend engineering fundamentals"));
                    items.add(createItem("Personal Responsive Portfolio Website", "PROJECT", "Portfolio", "3 Weeks", 20, "https://github.com", false, "Responsive portfolio showcasing projects and live demos"));
                }
                break;

            case 4:
                items.add(createItem("Operating Systems", "COURSE", "University Core", "14 Weeks", 10, null, false, "Concurrency, memory management, file systems"));
                items.add(createItem("Database Management Systems (DBMS)", "COURSE", "University Core", "14 Weeks", 10, null, false, "SQL, ACID properties, indexing, normalization"));
                items.add(createItem("Modern Database Management Systems (NPTEL)", "NPTEL_CERTIFICATION", "NPTEL / IIT Kharagpur", "8 Weeks", 20, "https://nptel.ac.in/courses/106105175", true, "Relational and NoSQL distributed databases"));
                items.add(createItem("Production REST API with Spring Boot / FastAPI", "PROJECT", "Portfolio", "5 Weeks", 25, "https://github.com", false, "CRUD service with JWT authentication and MongoDB"));
                items.add(createItem("Summer Internship Preparation & Resume Building", "INTERNSHIP", "Campus Placement Cell", "4 Weeks", 15, null, false, "Prepare LeetCode medium questions and apply for 1st internships"));
                break;

            case 5:
                items.add(createItem("Computer Networks", "COURSE", "University Core", "14 Weeks", 10, null, false, "TCP/IP, routing protocols, DNS, HTTP/3"));
                if (specSlug.contains("ai") || specSlug.contains("ml")) {
                    items.add(createItem("Applied Deep Learning and Neural Networks", "NPTEL_CERTIFICATION", "NPTEL / IIT Ropar", "12 Weeks", 20, "https://nptel.ac.in/courses/106106184", true, "TensorFlow/PyTorch, CNNs, RNNs, and Transformers"));
                    items.add(createItem("End-to-End Image Classification System", "PROJECT", "Portfolio", "6 Weeks", 25, "https://huggingface.co", false, "Model training, quantization, and deployment via API"));
                } else if (specSlug.contains("cloud") || specSlug.contains("devops")) {
                    items.add(createItem("Cloud Computing (NPTEL)", "NPTEL_CERTIFICATION", "NPTEL / IIT Kharagpur", "8 Weeks", 20, "https://nptel.ac.in/courses/106105167", true, "AWS, GCP architecture and virtualization"));
                    items.add(createItem("Kubernetes Cluster & Multi-Tier Deployment", "PROJECT", "Portfolio", "5 Weeks", 25, "https://kubernetes.io", false, "Container orchestration with ingress and health monitoring"));
                } else {
                    items.add(createItem("Full Stack Enterprise Development", "NPTEL_CERTIFICATION", "NPTEL / IIT Bombay", "12 Weeks", 20, "https://nptel.ac.in/courses/106106222", true, "Microservices and state management"));
                    items.add(createItem("E-Commerce Full Stack Web Application", "PROJECT", "Portfolio", "6 Weeks", 25, "https://github.com", false, "Cart, payment gateway integration, admin panel"));
                }
                items.add(createItem("Pre-Final Year Summer Internship Application Drive", "INTERNSHIP", "Industry Partner", "8 Weeks", 30, null, false, "Targeted software engineering internship"));
                break;

            case 6:
                items.add(createItem("Software Engineering & Agile Methodologies", "COURSE", "University Core", "14 Weeks", 10, null, false, "CI/CD, Scrum, test automation, system testing"));
                items.add(createItem("Cloud Computing & DevOps Practice (NPTEL)", "NPTEL_CERTIFICATION", "NPTEL / IIT Kharagpur", "8 Weeks", 20, "https://nptel.ac.in/courses/106105167", true, "Continuous delivery, Docker, Terraform"));
                items.add(createItem("CI/CD Pipeline & Automated Cloud Deployment", "PROJECT", "Portfolio", "5 Weeks", 25, "https://github.com", false, "Automate testing, container building, and deployment with GitHub Actions"));
                items.add(createItem("Summer Industrial Internship (2-3 Months)", "INTERNSHIP", "Tech Company / Research Lab", "10 Weeks", 40, null, false, "Full-time industrial internship experience"));
                break;

            case 7:
                items.add(createItem("High Performance Distributed Computing", "COURSE", "Elective", "14 Weeks", 10, null, false, "Microservices, scalability, caching, and sharding"));
                items.add(createItem("Industry Capstone Project - Phase 1", "PROJECT", "Major Degree Project", "14 Weeks", 35, null, false, "Comprehensive architecture, system design, and MVP development"));
                items.add(createItem("System Design & Architecture Certification", "NPTEL_CERTIFICATION", "NPTEL / Industry", "8 Weeks", 20, null, true, "Low-level and high-level scalable system design"));
                items.add(createItem("Resume Finalization & Placement Mock Interviews", "INTERNSHIP", "Training & Placement", "6 Weeks", 15, null, false, "DSA mock interviews, behavioral rounds, and system design interviews"));
                break;

            case 8:
                items.add(createItem("Industry Capstone Project - Phase 2 & Defense", "PROJECT", "Final Degree Capstone", "14 Weeks", 40, null, false, "Production deployment, performance benchmarking, and research paper publication"));
                items.add(createItem("Pre-Placement Training & Technical Round Clearing", "INTERNSHIP", "Placement Cell", "8 Weeks", 20, null, false, "Final interview preparations and corporate onboarding"));
                items.add(createItem("Full Time Role / Corporate Conversion", "INTERNSHIP", "Product Company", "16 Weeks", 50, null, false, "Convert summer internship to full-time SWE / specialized role"));
                break;

            default:
                break;
        }

        return items;
    }

    private MilestoneItem createItem(String title, String category, String provider, String duration, int points, String link, boolean isNptel, String desc) {
        return MilestoneItem.builder()
                .id(UUID.randomUUID().toString())
                .title(title)
                .category(category)
                .status("NOT_STARTED")
                .provider(provider)
                .duration(duration)
                .activityPoints(points)
                .resourceLink(link)
                .isNptel(isNptel)
                .description(desc)
                .build();
    }

    private List<String> determineFocusSkills(String specSlug, int sem) {
        if (sem == 1) return List.of("C Language", "Problem Solving", "Logic Building", "Command Line");
        if (sem == 2) return List.of("Data Structures", "Recursion", "Time Complexity", "Algorithms");
        if (sem == 3) return List.of("Object-Oriented Design", "Clean Architecture", "Version Control (Git)");
        if (sem == 4) return List.of("Operating Systems", "SQL Databases", "REST APIs", "Backend Dev");
        if (sem == 5) return List.of(specSlug.toUpperCase(), "Microservices", "System Integration");
        if (sem == 6) return List.of("Docker", "CI/CD", "Cloud Infrastructure", "DevOps");
        if (sem == 7) return List.of("System Design", "Scalability", "Capstone Project", "Mock Interviews");
        return List.of("Placement Clearance", "Production Engineering", "Industry Readiness");
    }

    private List<String> determineSemesterGoals(String specSlug, int sem) {
        if (sem == 1) return List.of("Solve 50+ basic algorithmic problems", "Get certified in NPTEL C programming");
        if (sem == 2) return List.of("Master linear and non-linear data structures", "Start solving LeetCode Easy");
        if (sem == 3) return List.of("Build first portfolio website", "Publish 2 projects on GitHub");
        if (sem == 4) return List.of("Build production REST API with database", "Prepare for summer internships");
        if (sem == 5) return List.of("Earn domain specialization NPTEL certificate", "Apply to 20+ internships");
        if (sem == 6) return List.of("Complete 2-3 months internship", "Implement automated CI/CD pipeline");
        if (sem == 7) return List.of("Complete Capstone Project MVP", "Clear company placement coding tests");
        return List.of("Defend final capstone project", "Secure dream placement / corporate offer");
    }
}
