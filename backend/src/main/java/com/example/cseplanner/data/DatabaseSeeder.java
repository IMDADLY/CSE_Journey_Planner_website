package com.example.cseplanner.data;

import com.example.cseplanner.models.Specialization;
import com.example.cseplanner.models.SurveyQuestion;
import com.example.cseplanner.repository.SpecializationRepository;
import com.example.cseplanner.repository.SurveyQuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final SpecializationRepository specializationRepository;
    private final SurveyQuestionRepository surveyQuestionRepository;

    @Override
    public void run(String... args) {
        if (specializationRepository.count() == 0) {
            log.info("Specialization repository is empty. Seeding CSE Specializations and Survey Questions...");
            seedData();
            log.info("Database seeding completed successfully!");
        } else {
            log.info("Database already contains {} specializations. Skipping seed.", specializationRepository.count());
        }
    }

    private void seedData() {
        List<Specialization> specs = createSpecializations();
        specializationRepository.saveAll(specs);

        for (Specialization spec : specs) {
            List<SurveyQuestion> questions = createQuestionsForSpecialization(spec);
            surveyQuestionRepository.saveAll(questions);
        }
    }

    private List<Specialization> createSpecializations() {
        List<Specialization> list = new ArrayList<>();

        list.add(Specialization.builder()
                .id("spec-ai-ml")
                .name("Artificial Intelligence & Machine Learning")
                .slug("ai-ml")
                .description("Develop intelligent algorithms, deep neural networks, computer vision, and predictive AI models.")
                .category("Data & AI")
                .industryDemand(5)
                .demandTag("HIGH GROWTH (+30% CAGR)")
                .salaryRange("₹8–16 LPA")
                .difficulty("Advanced")
                .careerOutcomes(List.of("Machine Learning Engineer", "Data Scientist", "AI Research Scientist", "MLOps Engineer"))
                .coreSkills(List.of("Python", "Linear Algebra", "PyTorch / TensorFlow", "Scikit-Learn", "Deep Learning", "NLP"))
                .relatedTools(List.of("Jupyter", "Hugging Face", "MLflow", "CUDA", "Pandas", "NumPy"))
                .iconUrl("brain")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-full-stack")
                .name("Full Stack Web Development")
                .slug("full-stack-web-dev")
                .description("Build end-to-end modern web applications, design intuitive user interfaces, and develop scalable backend APIs.")
                .category("Software & Web")
                .industryDemand(5)
                .demandTag("STEADY HIGH DEMAND")
                .salaryRange("₹6–14 LPA")
                .difficulty("Beginner Friendly")
                .careerOutcomes(List.of("Full Stack Developer", "Frontend Engineer", "Backend Architect", "Product Engineer"))
                .coreSkills(List.of("JavaScript/TypeScript", "React.js", "Java Spring Boot / Node.js", "REST / GraphQL", "MongoDB / PostgreSQL"))
                .relatedTools(List.of("Git", "Webpack/Vite", "Docker", "Postman", "Tailwind CSS"))
                .iconUrl("code")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-cybersecurity")
                .name("Cybersecurity & Ethical Hacking")
                .slug("cybersecurity")
                .description("Defend critical digital infrastructure, fight modern cyber threats, perform ethical penetration testing, and secure cloud environments.")
                .category("Systems & Security")
                .industryDemand(5)
                .demandTag("CRITICAL DEMAND")
                .salaryRange("₹8–15 LPA")
                .difficulty("Intermediate")
                .careerOutcomes(List.of("Security Analyst", "Penetration Tester", "SOC Analyst", "Cloud Security Engineer", "CISO Track"))
                .coreSkills(List.of("Network Security", "Cryptography", "Linux Internals", "Vulnerability Assessment", "SIEM"))
                .relatedTools(List.of("Wireshark", "Metasploit", "Burp Suite", "Nmap", "Kali Linux"))
                .iconUrl("shield")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-cloud-devops")
                .name("Cloud Computing & DevOps")
                .slug("cloud-computing")
                .description("Architect scalable cloud-native architectures, automate CI/CD pipelines, and manage distributed containerized infrastructure.")
                .category("Cloud & Infrastructure")
                .industryDemand(5)
                .demandTag("VERY HIGH DEMAND")
                .salaryRange("₹7–15 LPA")
                .difficulty("Intermediate")
                .careerOutcomes(List.of("DevOps Engineer", "Cloud Architect", "Site Reliability Engineer (SRE)", "Infrastructure Engineer"))
                .coreSkills(List.of("Linux", "AWS / GCP / Azure", "Docker & Containers", "Kubernetes", "CI/CD Pipelines", "Terraform"))
                .relatedTools(List.of("Kubernetes", "Docker", "GitHub Actions", "Terraform", "Prometheus", "Ansible"))
                .iconUrl("cloud")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-data-engineering")
                .name("Data Engineering & Big Data")
                .slug("data-engineering")
                .description("Build robust ETL pipelines, high-throughput distributed data systems, and enterprise data warehouses.")
                .category("Data & AI")
                .industryDemand(4)
                .demandTag("HIGH GROWTH")
                .salaryRange("₹7–14 LPA")
                .difficulty("Intermediate")
                .careerOutcomes(List.of("Data Engineer", "Big Data Developer", "Analytics Engineer", "Database Administrator"))
                .coreSkills(List.of("SQL & Database Internals", "Apache Spark", "Data Warehousing", "Python / Scala", "Distributed Systems"))
                .relatedTools(List.of("Spark", "Kafka", "Airflow", "Snowflake", "dbt", "PostgreSQL"))
                .iconUrl("database")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-game-dev")
                .name("Game Development & Interactive Media")
                .slug("game-development")
                .description("Build immersive 2D/3D games, interactive virtual environments, physics simulations, and graphics rendering engines.")
                .category("Interactive Media")
                .industryDemand(3)
                .demandTag("STEADY GROWTH")
                .salaryRange("₹5–12 LPA")
                .difficulty("Intermediate")
                .careerOutcomes(List.of("Game Programmer", "Unity / Unreal Developer", "Graphics Engineer", "AR/VR Developer"))
                .coreSkills(List.of("C++", "C#", "Computer Graphics & Shaders", "Physics Engines", "3D Mathematics"))
                .relatedTools(List.of("Unity", "Unreal Engine", "Blender", "OpenGL", "DirectX"))
                .iconUrl("gamepad")
                .createdAt(Instant.now())
                .build());

        list.add(Specialization.builder()
                .id("spec-embedded-iot")
                .name("Embedded Systems & Robotics / IoT")
                .slug("embedded-systems")
                .description("Develop firmware, real-time operating systems (RTOS), robotics controllers, and smart connected IoT devices.")
                .category("Hardware & Systems")
                .industryDemand(4)
                .demandTag("STEADY DEMAND")
                .salaryRange("₹6–13 LPA")
                .difficulty("Advanced")
                .careerOutcomes(List.of("Embedded Software Engineer", "IoT Systems Developer", "Robotics Engineer", "Firmware Specialist"))
                .coreSkills(List.of("Embedded C / C++", "Microcontrollers (ARM, ESP32)", "RTOS", "Communication Protocols (I2C, SPI, UART)"))
                .relatedTools(List.of("STM32Cube", "Arduino IDE", "Raspberry Pi", "ROS", "KiCad"))
                .iconUrl("cpu")
                .createdAt(Instant.now())
                .build());

        return list;
    }

    private List<SurveyQuestion> createQuestionsForSpecialization(Specialization spec) {
        List<SurveyQuestion> list = new ArrayList<>();
        String specId = spec.getId();

        // 1. Programming Fundamentals
        list.add(SurveyQuestion.builder()
                .specializationId(specId)
                .section("PROGRAMMING_FUNDAMENTALS")
                .questionText("What will be the output of the following Python snippet?")
                .codeSnippet("x = [1, 2, 3]\nx.append([4, 5])\nprint(len(x))")
                .options(List.of("3", "4", "5", "Error"))
                .optionScores(List.of(0, 10, 0, 0))
                .correctOptionIndex(1)
                .weight(1.0f)
                .skillTag("Python Basics")
                .difficulty("EASY")
                .createdAt(Instant.now())
                .build());

        list.add(SurveyQuestion.builder()
                .specializationId(specId)
                .section("PROGRAMMING_FUNDAMENTALS")
                .questionText("What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?")
                .codeSnippet(null)
                .options(List.of("O(1)", "O(n)", "O(log n)", "O(n log n)"))
                .optionScores(List.of(0, 0, 10, 0))
                .correctOptionIndex(2)
                .weight(1.0f)
                .skillTag("Time Complexity")
                .difficulty("EASY")
                .createdAt(Instant.now())
                .build());

        // 2. Data Structures
        list.add(SurveyQuestion.builder()
                .specializationId(specId)
                .section("DATA_STRUCTURES")
                .questionText("Which data structure uses LIFO (Last In First Out) ordering?")
                .codeSnippet(null)
                .options(List.of("Queue", "Stack", "Linked List", "Binary Heap"))
                .optionScores(List.of(0, 10, 0, 0))
                .correctOptionIndex(1)
                .weight(1.0f)
                .skillTag("Linear Data Structures")
                .difficulty("EASY")
                .createdAt(Instant.now())
                .build());

        list.add(SurveyQuestion.builder()
                .specializationId(specId)
                .section("DATA_STRUCTURES")
                .questionText("Which of the following is typically a non-linear data structure?")
                .codeSnippet(null)
                .options(List.of("Array", "Graph", "Stack", "Queue"))
                .optionScores(List.of(0, 10, 0, 0))
                .correctOptionIndex(1)
                .weight(1.0f)
                .skillTag("Graph Structures")
                .difficulty("EASY")
                .createdAt(Instant.now())
                .build());

        // 3. Algorithms & Problem Solving
        list.add(SurveyQuestion.builder()
                .specializationId(specId)
                .section("ALGORITHMS")
                .questionText("Which algorithmic paradigm does the Merge Sort algorithm employ?")
                .codeSnippet(null)
                .options(List.of("Greedy Approach", "Dynamic Programming", "Divide and Conquer", "Backtracking"))
                .optionScores(List.of(0, 0, 10, 0))
                .correctOptionIndex(2)
                .weight(1.2f)
                .skillTag("Divide and Conquer")
                .difficulty("MEDIUM")
                .createdAt(Instant.now())
                .build());

        // 4. Specialization-Specific Question
        if (spec.getSlug().contains("ai") || spec.getSlug().contains("ml")) {
            list.add(SurveyQuestion.builder()
                    .specializationId(specId)
                    .section("SPECIALIZATION_CORE")
                    .questionText("In supervised Machine Learning, what problem arises when a model performs exceptionally well on training data but poorly on unseen test data?")
                    .codeSnippet(null)
                    .options(List.of("Underfitting", "Overfitting", "Data Drift", "High Bias"))
                    .optionScores(List.of(0, 10, 0, 0))
                    .correctOptionIndex(1)
                    .weight(1.5f)
                    .skillTag("Model Evaluation & Overfitting")
                    .difficulty("MEDIUM")
                    .createdAt(Instant.now())
                    .build());
        } else if (spec.getSlug().contains("cyber")) {
            list.add(SurveyQuestion.builder()
                    .specializationId(specId)
                    .section("SPECIALIZATION_CORE")
                    .questionText("What type of attack involves an attacker inserting malicious SQL statements into entry fields for execution by the database?")
                    .codeSnippet(null)
                    .options(List.of("Cross-Site Scripting (XSS)", "SQL Injection", "Man-in-the-Middle (MitM)", "DDoS"))
                    .optionScores(List.of(0, 10, 0, 0))
                    .correctOptionIndex(1)
                    .weight(1.5f)
                    .skillTag("Web Security & SQL Injection")
                    .difficulty("MEDIUM")
                    .createdAt(Instant.now())
                    .build());
        } else if (spec.getSlug().contains("cloud")) {
            list.add(SurveyQuestion.builder()
                    .specializationId(specId)
                    .section("SPECIALIZATION_CORE")
                    .questionText("Which of the following is the fundamental advantage of containerization (e.g., Docker) over traditional virtual machines?")
                    .codeSnippet(null)
                    .options(List.of("Requires a full guest OS for each container", "Shares the host OS kernel resulting in faster startup and lower overhead", "Cannot run on Linux hosts", "Does not support network isolation"))
                    .optionScores(List.of(0, 10, 0, 0))
                    .correctOptionIndex(1)
                    .weight(1.5f)
                    .skillTag("Containerization & Docker")
                    .difficulty("MEDIUM")
                    .createdAt(Instant.now())
                    .build());
        } else {
            // Full stack / general
            list.add(SurveyQuestion.builder()
                    .specializationId(specId)
                    .section("SPECIALIZATION_CORE")
                    .questionText("In React, what hook is used to perform side effects (such as data fetching or subscriptions) in functional components?")
                    .codeSnippet(null)
                    .options(List.of("useState", "useEffect", "useMemo", "useCallback"))
                    .optionScores(List.of(0, 10, 0, 0))
                    .correctOptionIndex(1)
                    .weight(1.5f)
                    .skillTag("React Lifecycle & Hooks")
                    .difficulty("MEDIUM")
                    .createdAt(Instant.now())
                    .build());
        }

        return list;
    }
}
