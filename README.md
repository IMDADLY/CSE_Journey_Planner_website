# CSE B.Tech Planner Website

> 🚧 This project is currently **in progress** (work in progress).

Implemented using:
1. Front-end : React (Javascript)
2. Back-end : Java , Spring Boot
3. Database : MongoDB

## Run locally

Requires JDK 25 (or a compatible newer JDK), Maven, Node.js 20+, and a MongoDB instance (local or Atlas).

From the project root:

```bash
npm install
npm run build:all
mvn spring-boot:run
```

Put your MongoDB connection string in a root-level `.env` file as `SPRING_DATA_MONGODB_URI=mongodb+srv://...`, then run `mvn spring-boot:run`. The app loads that ignored local file automatically; shell environment variables still take precedence. Copy `.env.example` to get the expected format. For a local MongoDB server, use `SPRING_DATA_MONGODB_URI=mongodb://localhost:27017/cse_journey_planner`. Allow your current IP in Atlas Network Access. Open http://localhost:8080 after startup.

Never commit real connection strings. `.env` files are ignored by Git.

If a credential has previously been committed or shared, rotate it in Atlas Database Access. Removing it from current files does not remove it from Git history.

## AI/ML common survey

Open `/survey/ai-ml` after starting the Spring application. Every semester receives the same seven survey sections: 180 technical multiple-choice questions across 30 subtopics, followed by ten separately scored practice questions. The semester changes the generated roadmap, not the questions. Questions may be left unanswered; they receive no points and are reported separately from incorrect answers. Draft answers save in the current browser; the submitted report and roadmap can be reopened after a refresh in that browser.

The server loads the versioned Review 2 question bank from `backend/src/main/resources/assessment/ai-ml-common-v1.json`. On startup it upserts the 190 items into the `aiMlAssessmentItems` MongoDB collection. The public question endpoint omits keys, weights and explanations; submission checks all responses and scores against the server bank. Submitted attempts are stored in `aiMlSurveyAttempts`. The readable editor edition with answers is `question_bank/AI_ML_Common_Survey.md`; the coverage audit, source-verification log, and expandable review page are in the same folder.

The report shows six-question subtopic evidence and a current-semester roadmap with learning links and project work. Scores are provisional learning signals. Faculty review and a student pilot are still needed before using score thresholds as validated measures of mastery or placement readiness.

## Five additional specialization surveys

Full Stack Web Development, Cloud Computing & DevOps, Data Engineering & Big Data, Game Development & Interactive Media, and Embedded Systems & Robotics / IoT now use the same survey-to-roadmap flow. Each has 130 items: 120 weighted technical MCQs and 10 separately scored practice MCQs. The technical set combines 50 questions from the earlier bank with 70 original extensions. All eight semesters receive the same form; only the roadmap schedule changes with the current semester. Questions map to learning nodes and resources in `question_bank/roadmap_sources/`, with individual study links for missed concepts and practical exit evidence. Scores remain screening signals until faculty review and student pilot calibration.

The server reads `backend/src/main/resources/assessment/*-common-v2.json` and keeps the answer keys out of the public form endpoint. Submitted attempts are stored in `specializationSurveyAttempts` with their bank version. To regenerate the five JSON banks and readable editor editions after editing the legacy source banks, run `node scripts/export-specialization-surveys.cjs`. The editor editions are in `question_bank/*_Common_Survey.md`.
