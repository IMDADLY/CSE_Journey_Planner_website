# Full Stack Web Development — curated topic map and roadmap

Survey bank version 1 · Mapping/courses reviewed 20 October 2026 · 60/60 items mapped.

[Planning rules](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Roadmap-Logic-and-Implementation-Plan.md) · [Course catalog](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Course-Catalog.md)

## How to use this guide

Confirm a suspected topic gap, check its prerequisites, study the relevant parts of the linked course(s), and complete the topic bridge below. For a narrow gap, select units addressing the named focus; do not require every linked course in full. Each bridge combines the study focus, supporting reading and a new practical task. The bridge is a proposed local learning unit, not a provider-certified course. Provider-level syllabus coverage was checked; exact lesson IDs and the assessment bank still need curation/versioning in the production CMS.

Self-assessment assignments ask for evidence. A confident response does not exempt the learner from demonstrating a skill. Broad theoretical courses intentionally have narrower labs added for tooling-specific details. Study-focus labels are curator labels rather than quoted provider lesson names.

## Prerequisite sequence and exit evidence

| Node | Suggested semester | Prerequisites | Course/resources | Estimated selected hours | Exit evidence |
|---|---:|---|---|---:|---|
| FS-W: Web, JavaScript and HTTP | S1 | Entry diagnostic | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | 55 | Build a responsive semantic interface with tested input handling, keyboard navigation and HTTP explanations. |
| FS-J: Java programming and testing | S2 | Entry diagnostic | [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191) | 45 | Write tested Java domain logic with explicit dependencies and documented edge cases. |
| FS-D: Relational and document data | S3 | FS-J | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | 50 | Model related records, enforce constraints, compare indexes and implement consistent CRUD. |
| FS-R: React application behavior | S3 | FS-W | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | 50 | Build a React UI with stable state identity, asynchronous request handling and component tests. |
| FS-A: Spring API engineering | S4 | FS-J, FS-D, FS-W | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | 45 | Build a validated API with persistence and integration tests; demonstrate client-server error handling. |
| FS-S: Application security and accessibility | S5 | FS-R, FS-A | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | 40 | Pass cross-user authorization, CSRF and keyboard-flow checks on a complete user journey. |
| FS-O: Delivery, performance and operation | S6 | FS-A, FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | 50 | Deploy one immutable build, instrument it and demonstrate load testing plus a compatible rollback. |
| FS-X: Concurrency and production consistency | S7 | FS-D, FS-A, FS-S | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | 45 | Reproduce a lost-update/dual-write failure and verify a transactional/idempotent repair. |

**Planning estimate: 380 hours** for selected specialization units and their topic labs. Add roughly 80–120 hours for an integrated capstone and 100 hours for shared foundation/interview review as needed. These are curator estimates, not provider-advertised durations. Do not add every topic lab again to the node estimate. Verified prior learning reduces the plan.

## Semester blueprint

| Semester | Suggested focus | Required progress evidence |
|---|---|---|
| S1 | FS-W Web, JavaScript and HTTP | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S2 | FS-J Java programming and testing | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S3 | FS-D Relational and document data; FS-R React application behavior | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S4 | FS-A Spring API engineering | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S5 | FS-S Application security and accessibility | Pass the relevant node gates; preserve code, calculations and test evidence. Start internship/team-project applications and recurring interview practice. |
| S6 | FS-O Delivery, performance and operation | Pass the relevant node gates; preserve code, calculations and test evidence. Produce an integrated project or reviewed internship contribution. |
| S7 | FS-X Concurrency and production consistency | Pass the relevant node gates; preserve code, calculations and test evidence. Have a defensible portfolio ready before recruitment; move this earlier if the college calendar requires it. |
| S8 | Capstone refinement, mock interviews and targeted gap closure | Complete role-specific readiness gates, defend the capstone, and continue applications/interviews; list any unmet requirements. |

## Exact survey-topic mapping

Each row is one primary mapping. Course resources may recur across rows; the planner schedules overlapping units once. The numbered question is a diagnostic trigger, not the only assessment of the topic.

| Question | Topic / study focus | Learning node | Curated course/resources | Topic bridge |
|---|---|---|---|---|
| FS01 | Semantic HTML (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs01) |
| FS02 | CSS (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs02) |
| FS03 | JavaScript arrays (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs03) |
| FS04 | Web architecture (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs04) |
| FS05 | Web practice (practice) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs05) |
| FS06 | JavaScript comparison (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs06) |
| FS07 | HTTP semantics (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs07) |
| FS08 | Git workflow (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs08) |
| FS09 | Java methods (technical) | FS-J | [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191) | [Task and reading](#bridge-fs09) |
| FS10 | Programming practice (practice) | FS-J | [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191) | [Task and reading](#bridge-fs10) |
| FS11 | React identity (technical) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs11) |
| FS12 | React state (technical) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs12) |
| FS13 | Spring dependency injection (technical) | FS-A | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | [Task and reading](#bridge-fs13) |
| FS14 | Input validation (technical) | FS-A | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | [Task and reading](#bridge-fs14) |
| FS15 | UI/API practice (practice) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs15) |
| FS16 | SQL joins (technical) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-fs16) |
| FS17 | Uniqueness (technical) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs17) |
| FS18 | Document modeling (technical) | FS-D | [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs18) |
| FS19 | Indexes (technical) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs19) |
| FS20 | Persistence practice (practice) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs20) |
| FS21 | Authentication and authorization (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs21) |
| FS22 | SQL injection (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs22) |
| FS23 | CSRF (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs23) |
| FS24 | Integration testing (technical) | FS-A | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | [Task and reading](#bridge-fs24) |
| FS25 | Security practice (practice) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs25) |
| FS26 | Caching (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs26) |
| FS27 | Pagination (technical) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-fs27) |
| FS28 | CORS (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs28) |
| FS29 | Rate limiting (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs29) |
| FS30 | Performance practice (practice) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs30) |
| FS31 | Observability (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs31) |
| FS32 | API compatibility (technical) | FS-A | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | [Task and reading](#bridge-fs32) |
| FS33 | Deployment (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs33) |
| FS34 | Secrets (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs34) |
| FS35 | Delivery practice (practice) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs35) |
| FS36 | React update queue (technical) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs36) |
| FS37 | Asynchronous UI (technical) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs37) |
| FS38 | Spring proxy boundary (technical) | FS-A | [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) | [Task and reading](#bridge-fs38) |
| FS39 | Optimistic concurrency (technical) | FS-X | [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs39) |
| FS40 | Multi-document atomicity (technical) | FS-X | [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs40) |
| FS41 | Payment retries (technical) | FS-X | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs41) |
| FS42 | Database and message consistency (technical) | FS-X | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs42) |
| FS43 | Object authorization (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs43) |
| FS44 | Tenant isolation (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs44) |
| FS45 | Cookie scope (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs45) |
| FS46 | Sensitive caching (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs46) |
| FS47 | Conditional updates (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs47) |
| FS48 | N+1 queries (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs48) |
| FS49 | Keyset pagination (technical) | FS-D | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-fs49) |
| FS50 | Isolation and invariants (technical) | FS-X | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-fs50) |
| FS51 | JavaScript scheduling (technical) | FS-W | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs51) |
| FS52 | Accessible interaction (technical) | FS-S | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs52) |
| FS53 | Security testing (technical) | FS-S | [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs53) |
| FS54 | Database migration (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs54) |
| FS55 | Timeout diagnosis (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs55) |
| FS56 | Frontend hydration (technical) | FS-R | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-fs56) |
| FS57 | Release validation (technical) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs57) |
| FS58 | Capstone evidence (practice) | FS-O | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-fs58) |
| FS59 | Engineering evidence (practice) | FS-X | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path) | [Task and reading](#bridge-fs59) |
| FS60 | Product evidence (practice) | FS-S | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-fs60) |

## Topic bridge tasks

For each task: (1) use the selected course foundations; (2) consult the relevant technical references; (3) complete the task with changed inputs/data rather than copying the original MCQ; (4) submit reproducible evidence and explain assumptions; (5) pass a fresh assessment. If the supporting reference is a broad curriculum or role guide, use the selected course for instruction and the task as the concrete learning target.

### Bridge FS01 — Semantic HTML

<a id="bridge-fs01"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Build a form using semantic controls and verify submission by keyboard.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS02 — CSS

<a id="bridge-fs02"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Implement responsive styles and explain selector specificity on conflicting rules.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS03 — JavaScript arrays

<a id="bridge-fs03"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Write array transformations with empty-array and index boundary tests.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS04 — Web architecture

<a id="bridge-fs04"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Trace a private-record request and locate every server-side trust decision.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS05 — Web practice

<a id="bridge-fs05"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a responsive semantic interface with tested input handling, keyboard navigation and HTTP explanations.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS06 — JavaScript comparison

<a id="bridge-fs06"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Test JavaScript equality/coercion cases and explain the resulting types.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS07 — HTTP semantics

<a id="bridge-fs07"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Design HTTP responses for create, missing-resource and validation-error cases.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS08 — Git workflow

<a id="bridge-fs08"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Make and revert a small Git change using a reviewable history.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS09 — Java methods

<a id="bridge-fs09"></a>

**Selected course(s):** [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

**Practice:** Implement Java methods with typed returns and tests for invalid input.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS10 — Programming practice

<a id="bridge-fs10"></a>

**Selected course(s):** [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

**Practice:** Produce an independently explainable artifact for this practice topic. Write tested Java domain logic with explicit dependencies and documented edge cases.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS11 — React identity

<a id="bridge-fs11"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Reorder a stateful React list and demonstrate why stable record keys matter.

**Supporting reading:** [React list identity and keys](https://react.dev/learn/rendering-lists)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS12 — React state

<a id="bridge-fs12"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Update nested React state without mutation and test the rendered result.

**Supporting reading:** [React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS13 — Spring dependency injection

<a id="bridge-fs13"></a>

**Selected course(s):** [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

**Practice:** Replace a service dependency in a constructor-injected Spring unit test.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS14 — Input validation

<a id="bridge-fs14"></a>

**Selected course(s):** [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

**Practice:** Bypass client validation in a test request and verify server rejection.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS15 — UI/API practice

<a id="bridge-fs15"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a React UI with stable state identity, asynchronous request handling and component tests.

**Supporting reading:** [React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates); [Spring guides](https://spring.io/guides/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS16 — SQL joins

<a id="bridge-fs16"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Predict and verify LEFT/INNER JOIN cardinalities with unmatched and duplicate rows.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS17 — Uniqueness

<a id="bridge-fs17"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Race two registrations and prove a database uniqueness rule resolves the conflict.

**Supporting reading:** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS18 — Document modeling

<a id="bridge-fs18"></a>

**Selected course(s):** [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Compare embedded and referenced MongoDB models for stated access patterns.

**Supporting reading:** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS19 — Indexes

<a id="bridge-fs19"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Measure indexed reads and write overhead on a controlled dataset.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS20 — Persistence practice

<a id="bridge-fs20"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Produce an independently explainable artifact for this practice topic. Model related records, enforce constraints, compare indexes and implement consistent CRUD.

**Supporting reading:** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS21 — Authentication and authorization

<a id="bridge-fs21"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Create an operation/resource permission matrix and test both allow and deny cases.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS22 — SQL injection

<a id="bridge-fs22"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Use bound SQL parameters and verify that special input is treated as data.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS23 — CSRF

<a id="bridge-fs23"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Test a protected state-changing endpoint with valid, missing and invalid CSRF defenses.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/); [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS24 — Integration testing

<a id="bridge-fs24"></a>

**Selected course(s):** [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

**Practice:** Write an API integration test that verifies the database effect as well as the response.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS25 — Security practice

<a id="bridge-fs25"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Produce an independently explainable artifact for this practice topic. Pass cross-user authorization, CSRF and keyboard-flow checks on a complete user journey.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS26 — Caching

<a id="bridge-fs26"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Implement conditional GET and verify when a cached response can be reused.

**Supporting reading:** [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS27 — Pagination

<a id="bridge-fs27"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Test deterministic page ordering when sort values tie and rows are inserted.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS28 — CORS

<a id="bridge-fs28"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Test permitted and disallowed origins while keeping server authorization independent.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/); [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS29 — Rate limiting

<a id="bridge-fs29"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Implement a bounded retry policy honoring rate-limit responses.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS30 — Performance practice

<a id="bridge-fs30"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Produce an independently explainable artifact for this practice topic. Deploy one immutable build, instrument it and demonstrate load testing plus a compatible rollback.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS31 — Observability

<a id="bridge-fs31"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Propagate one trace ID through UI/API/database work and diagnose a failed request.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS32 — API compatibility

<a id="bridge-fs32"></a>

**Selected course(s):** [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

**Practice:** Run a consumer compatibility test before changing a response contract.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS33 — Deployment

<a id="bridge-fs33"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Demonstrate a rollback with application and database compatibility checks.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS34 — Secrets

<a id="bridge-fs34"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Inject server secrets without exposing them in browser bundles or repository history.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS35 — Delivery practice

<a id="bridge-fs35"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Produce an independently explainable artifact for this practice topic. Deploy one immutable build, instrument it and demonstrate load testing plus a compatible rollback.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS36 — React update queue

<a id="bridge-fs36"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Predict a new mixture of replacement and functional React state updates, then verify it.

**Supporting reading:** [React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS37 — Asynchronous UI

<a id="bridge-fs37"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Reproduce out-of-order search responses and prevent stale updates from committing.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS38 — Spring proxy boundary

<a id="bridge-fs38"></a>

**Selected course(s):** [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

**Practice:** Compare external proxy calls and self-invocation in a Spring transaction test.

**Supporting reading:** [Spring declarative transactions](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS39 — Optimistic concurrency

<a id="bridge-fs39"></a>

**Selected course(s):** [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Race two version-filtered updates and handle the losing writer explicitly.

**Supporting reading:** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS40 — Multi-document atomicity

<a id="bridge-fs40"></a>

**Selected course(s):** [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Test a multi-document invariant with and without an appropriate transaction.

**Supporting reading:** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS41 — Payment retries

<a id="bridge-fs41"></a>

**Selected course(s):** [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Replay concurrent payment requests with one durable idempotency key.

**Supporting reading:** [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS42 — Database and message consistency

<a id="bridge-fs42"></a>

**Selected course(s):** [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Inject a crash between commit and publish, then verify an outbox plus deduplicating consumer.

**Supporting reading:** [Debezium transactional outbox](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS43 — Object authorization

<a id="bridge-fs43"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Attempt cross-user reads and writes on object IDs and verify denial.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS44 — Tenant isolation

<a id="bridge-fs44"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Create two tenants sharing a local document ID and verify cache isolation.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS45 — Cookie scope

<a id="bridge-fs45"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Inspect cookie flags and separately test script access and cross-site request protection.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS46 — Sensitive caching

<a id="bridge-fs46"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Compare no-store and no-cache behavior on a synthetic sensitive response.

**Supporting reading:** [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS47 — Conditional updates

<a id="bridge-fs47"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Use stale and current If-Match values and verify precondition handling.

**Supporting reading:** [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS48 — N+1 queries

<a id="bridge-fs48"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Capture an N+1 trace and compare a bounded batch-fetch implementation.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS49 — Keyset pagination

<a id="bridge-fs49"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Implement keyset pagination over a compound sort key with tie cases.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS50 — Isolation and invariants

<a id="bridge-fs50"></a>

**Selected course(s):** [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Reproduce write skew and verify an invariant-preserving concurrency strategy.

**Supporting reading:** [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS51 — JavaScript scheduling

<a id="bridge-fs51"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Predict and run a JavaScript event-loop example with promise reactions.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS52 — Accessible interaction

<a id="bridge-fs52"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Test dialog focus entry, containment and restoration with keyboard-only interaction.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS53 — Security testing

<a id="bridge-fs53"></a>

**Selected course(s):** [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Write negative authorization tests across all protected HTTP operations.

**Supporting reading:** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS54 — Database migration

<a id="bridge-fs54"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Rehearse an expand/migrate/contract rollout with overlapping application versions.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS55 — Timeout diagnosis

<a id="bridge-fs55"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Measure pool wait, query time and connection hold time under realistic load.

**Supporting reading:** [Spring guides](https://spring.io/guides/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS56 — Frontend hydration

<a id="bridge-fs56"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Reproduce a server/client initial-render mismatch and fix its data timing.

**Supporting reading:** [React hydration requirements](https://react.dev/reference/react-dom/client/hydrateRoot)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS57 — Release validation

<a id="bridge-fs57"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Compare latency/error distributions before and after a release under the same load.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge FS58 — Capstone evidence

<a id="bridge-fs58"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/); [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Produce an independently explainable artifact for this practice topic. Deploy one immutable build, instrument it and demonstrate load testing plus a compatible rollback.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/); [Spring guides](https://spring.io/guides/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS59 — Engineering evidence

<a id="bridge-fs59"></a>

**Selected course(s):** [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot); [MONGO: MongoDB Associate Java Developer Path](https://learn.mongodb.com/pages/mongodb-java-developer-path)

**Practice:** Produce an independently explainable artifact for this practice topic. Reproduce a lost-update/dual-write failure and verify a transactional/idempotent repair.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge FS60 — Product evidence

<a id="bridge-fs60"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Produce an independently explainable artifact for this practice topic. Pass cross-user authorization, CSRF and keyboard-flow checks on a complete user journey.

**Supporting reading:** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.
