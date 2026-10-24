# Data Engineering and Big Data — curated topic map and roadmap

Survey bank version 1 · Mapping/courses reviewed 20 October 2026 · 60/60 items mapped.

[Planning rules](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Roadmap-Logic-and-Implementation-Plan.md) · [Course catalog](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Course-Catalog.md)

## How to use this guide

Confirm a suspected topic gap, check its prerequisites, study the relevant parts of the linked course(s), and complete the topic bridge below. For a narrow gap, select units addressing the named focus; do not require every linked course in full. Each bridge combines the study focus, supporting reading and a new practical task. The bridge is a proposed local learning unit, not a provider-certified course. Provider-level syllabus coverage was checked; exact lesson IDs and the assessment bank still need curation/versioning in the production CMS.

Self-assessment assignments ask for evidence. A confident response does not exempt the learner from demonstrating a skill. Broad theoretical courses intentionally have narrower labs added for tooling-specific details. Study-focus labels are curator labels rather than quoted provider lesson names.

## Prerequisite sequence and exit evidence

| Node | Suggested semester | Prerequisites | Course/resources | Estimated selected hours | Exit evidence |
|---|---:|---|---|---:|---|
| DE-P: Programming and data inspection | S1 | Entry diagnostic | [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/) | 40 | Parse and validate a dataset with tests for missing, malformed and duplicate input. |
| DE-Q: SQL and relational modeling | S2 | DE-P | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | 50 | Write joins/windows, explain NULL behavior and test key/constraint/cardinality assumptions. |
| DE-D: Database and historical data semantics | S3 | DE-Q | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | 45 | Model current and historical state and reconcile inserts, updates, deletes and late arrivals. |
| DE-B: Batch and distributed processing | S4 | DE-Q | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | 55 | Inspect a Spark plan, measure skew and I/O, and compare a correctness-preserving optimization. |
| DE-O: Orchestration and reliable loading | S4 | DE-P, DE-Q | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | 40 | Build retry-safe interval-based workflows; implement the Airflow-specific bridge separately from Kestra. |
| DE-S: Streams and change data | S5 | DE-D, DE-O | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | 55 | Test event-time handling, replay, deduplication and external side effects using injected failures. |
| DE-L: Lakehouse storage and publication | S6 | DE-B, DE-D | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | 45 | Evolve a schema, compact files and publish a consistent snapshot while readers run. |
| DE-G: Data quality, governance and operation | S6 | DE-O, DE-S, DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | 30 | Enforce freshness/quality/access contracts and demonstrate lineage plus a reconciled recovery. |

**Planning estimate: 360 hours** for selected specialization units and their topic labs. Add roughly 80–120 hours for an integrated capstone and 100 hours for shared foundation/interview review as needed. These are curator estimates, not provider-advertised durations. Do not add every topic lab again to the node estimate. Verified prior learning reduces the plan.

## Semester blueprint

| Semester | Suggested focus | Required progress evidence |
|---|---|---|
| S1 | DE-P Programming and data inspection | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S2 | DE-Q SQL and relational modeling | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S3 | DE-D Database and historical data semantics | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S4 | DE-B Batch and distributed processing; DE-O Orchestration and reliable loading | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S5 | DE-S Streams and change data | Pass the relevant node gates; preserve code, calculations and test evidence. Start internship/team-project applications and recurring interview practice. |
| S6 | DE-L Lakehouse storage and publication; DE-G Data quality, governance and operation | Pass the relevant node gates; preserve code, calculations and test evidence. Produce an integrated project or reviewed internship contribution. |
| S7 | Capstone refinement, mock interviews and targeted gap closure | Pass the relevant node gates; preserve code, calculations and test evidence. Have a defensible portfolio ready before recruitment; move this earlier if the college calendar requires it. |
| S8 | Capstone refinement, mock interviews and targeted gap closure | Complete role-specific readiness gates, defend the capstone, and continue applications/interviews; list any unmet requirements. |

## Exact survey-topic mapping

Each row is one primary mapping. Course resources may recur across rows; the planner schedules overlapping units once. The numbered question is a diagnostic trigger, not the only assessment of the topic.

| Question | Topic / study focus | Learning node | Curated course/resources | Topic bridge |
|---|---|---|---|---|
| DE01 | Data structures (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de01) |
| DE02 | Missing values (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de02) |
| DE03 | Primary keys (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de03) |
| DE04 | Programming (technical) | DE-P | [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/) | [Task and reading](#bridge-de04) |
| DE05 | Data practice (practice) | DE-P | [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/) | [Task and reading](#bridge-de05) |
| DE06 | SQL aggregation (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de06) |
| DE07 | Join cardinality (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de07) |
| DE08 | Referential integrity (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de08) |
| DE09 | Normalization (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de09) |
| DE10 | SQL practice (practice) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de10) |
| DE11 | ETL and ELT (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de11) |
| DE12 | Columnar formats (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de12) |
| DE13 | Idempotence (technical) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de13) |
| DE14 | Lineage (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de14) |
| DE15 | Pipeline practice (practice) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de15) |
| DE16 | Distributed aggregation (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de16) |
| DE17 | Partitioning (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de17) |
| DE18 | Data skew (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de18) |
| DE19 | Broadcast joins (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de19) |
| DE20 | Distributed practice (practice) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de20) |
| DE21 | Event time (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de21) |
| DE22 | Watermarks (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de22) |
| DE23 | CDC (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de23) |
| DE24 | Delivery semantics (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de24) |
| DE25 | Streaming practice (practice) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de25) |
| DE26 | Workflow dependencies (technical) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de26) |
| DE27 | Quality checks (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de27) |
| DE28 | Backfills (technical) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de28) |
| DE29 | Governance (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de29) |
| DE30 | Quality practice (practice) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de30) |
| DE31 | Query pruning (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de31) |
| DE32 | Small files (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de32) |
| DE33 | Schema contracts (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de33) |
| DE34 | Freshness objectives (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de34) |
| DE35 | Operations practice (practice) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de35) |
| DE36 | Window functions (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de36) |
| DE37 | NULL anti-joins (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de37) |
| DE38 | Join explosion (technical) | DE-Q | [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) | [Task and reading](#bridge-de38) |
| DE39 | Historical dimensions (technical) | DE-D | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de39) |
| DE40 | Late dimensions (technical) | DE-D | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de40) |
| DE41 | CDC deletes (technical) | DE-D | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/) | [Task and reading](#bridge-de41) |
| DE42 | Snapshot and log boundary (technical) | DE-D | [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/) | [Task and reading](#bridge-de42) |
| DE43 | Transactional outbox (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de43) |
| DE44 | Watermark arithmetic (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de44) |
| DE45 | Exactly-once boundaries (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de45) |
| DE46 | Deduplication horizon (technical) | DE-S | [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de46) |
| DE47 | Backlog arithmetic (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de47) |
| DE48 | Skew mitigation (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de48) |
| DE49 | Broadcast limits (technical) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de49) |
| DE50 | Partition cardinality (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de50) |
| DE51 | Compaction correctness (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de51) |
| DE52 | Retry-safe loading (technical) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de52) |
| DE53 | Deterministic backfills (technical) | DE-O | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de53) |
| DE54 | Schema identity (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de54) |
| DE55 | Time zones (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de55) |
| DE56 | Quality reconciliation (technical) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de56) |
| DE57 | Atomic publication (technical) | DE-L | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) | [Task and reading](#bridge-de57) |
| DE58 | Capstone evidence (practice) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de58) |
| DE59 | Optimization evidence (practice) | DE-B | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de59) |
| DE60 | Governance evidence (practice) | DE-G | [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) | [Task and reading](#bridge-de60) |

## Topic bridge tasks

For each task: (1) use the selected course foundations; (2) consult the relevant technical references; (3) complete the task with changed inputs/data rather than copying the original MCQ; (4) submit reproducible evidence and explain assumptions; (5) pass a fresh assessment. If the supporting reference is a broad curriculum or role guide, use the selected course for instruction and the task as the concrete learning target.

### Bridge DE01 — Data structures

<a id="bridge-de01"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Represent a business event as a typed row and document the data contract.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE02 — Missing values

<a id="bridge-de02"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Write SQL NULL tests and compare their results with ordinary equality.

**Supporting reading:** [PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE03 — Primary keys

<a id="bridge-de03"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Create and test a primary-key constraint using duplicate records.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE04 — Programming

<a id="bridge-de04"></a>

**Selected course(s):** [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

**Practice:** Write a Python transformation with numeric, empty and malformed input tests.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE05 — Data practice

<a id="bridge-de05"></a>

**Selected course(s):** [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

**Practice:** Produce an independently explainable artifact for this practice topic. Parse and validate a dataset with tests for missing, malformed and duplicate input.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE06 — SQL aggregation

<a id="bridge-de06"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Use HAVING and WHERE correctly in an aggregate query.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE07 — Join cardinality

<a id="bridge-de07"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Predict join output size before running the query on repeated keys.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE08 — Referential integrity

<a id="bridge-de08"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Test foreign-key enforcement including allowed NULL behavior.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE09 — Normalization

<a id="bridge-de09"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Normalize duplicated customer facts and demonstrate an update anomaly avoided.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE10 — SQL practice

<a id="bridge-de10"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Produce an independently explainable artifact for this practice topic. Write joins/windows, explain NULL behavior and test key/constraint/cardinality assumptions.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE11 — ETL and ELT

<a id="bridge-de11"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Implement ETL and ELT variants and explain where transformations run.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE12 — Columnar formats

<a id="bridge-de12"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Compare selected-column reads in row and columnar formats.

**Supporting reading:** [Apache Parquet overview](https://parquet.apache.org/docs/overview/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE13 — Idempotence

<a id="bridge-de13"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Retry a partially completed batch and verify that effects are not duplicated.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE14 — Lineage

<a id="bridge-de14"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Trace a derived field back to source data and transformation versions.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE15 — Pipeline practice

<a id="bridge-de15"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Build retry-safe interval-based workflows; implement the Airflow-specific bridge separately from Kestra.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE16 — Distributed aggregation

<a id="bridge-de16"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Inspect a group-by shuffle and explain why matching keys move.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE17 — Partitioning

<a id="bridge-de17"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Compare partition-pruned and unpruned queries on the same table.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE18 — Data skew

<a id="bridge-de18"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Construct a skewed dataset and inspect slow task/partition distributions.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE19 — Broadcast joins

<a id="bridge-de19"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Compare a broadcast and shuffle join within measured worker memory limits.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE20 — Distributed practice

<a id="bridge-de20"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Inspect a Spark plan, measure skew and I/O, and compare a correctness-preserving optimization.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE21 — Event time

<a id="bridge-de21"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Separate occurrence, ingestion and processing timestamps in event records.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE22 — Watermarks

<a id="bridge-de22"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Explain state retention and late-event handling under a stated watermark policy.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE23 — CDC

<a id="bridge-de23"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Capture inserts, updates and deletes and materialize a derived table.

**Supporting reading:** [Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE24 — Delivery semantics

<a id="bridge-de24"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Replay one event and verify that the consumer tolerates redelivery.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE25 — Streaming practice

<a id="bridge-de25"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Test event-time handling, replay, deduplication and external side effects using injected failures.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE26 — Workflow dependencies

<a id="bridge-de26"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Express workflow dependencies explicitly and test an upstream failure.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE27 — Quality checks

<a id="bridge-de27"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Reject or quarantine records violating key/value contracts before publication.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE28 — Backfills

<a id="bridge-de28"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Backfill an explicit historical interval with pinned input and logic versions.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE29 — Governance

<a id="bridge-de29"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Give an analyst an aggregate view without unnecessary raw identifiers.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE30 — Quality practice

<a id="bridge-de30"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Enforce freshness/quality/access contracts and demonstrate lineage plus a reconciled recovery.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE31 — Query pruning

<a id="bridge-de31"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Inspect whether a query predicate actually enables partition pruning.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE32 — Small files

<a id="bridge-de32"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Measure overhead before and after a correctness-preserving small-file compaction.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE33 — Schema contracts

<a id="bridge-de33"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Test a producer schema change against versioned consumer contracts.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE34 — Freshness objectives

<a id="bridge-de34"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Detect stale output even when its most recent orchestration run succeeded.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE35 — Operations practice

<a id="bridge-de35"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Enforce freshness/quality/access contracts and demonstrate lineage plus a reconciled recovery.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE36 — Window functions

<a id="bridge-de36"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Implement cumulative and partitioned window queries with explicit frames.

**Supporting reading:** [PostgreSQL window functions](https://www.postgresql.org/docs/current/tutorial-window.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE37 — NULL anti-joins

<a id="bridge-de37"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Compare NOT IN and NOT EXISTS with NULL-containing inputs.

**Supporting reading:** [PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE38 — Join explosion

<a id="bridge-de38"></a>

**Selected course(s):** [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

**Practice:** Predict a many-to-many join explosion and repair an unintended cardinality assumption.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE39 — Historical dimensions

<a id="bridge-de39"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Join facts to half-open historical dimension intervals and test boundary timestamps.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE40 — Late dimensions

<a id="bridge-de40"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Reconcile facts that arrive before their dimension records.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE41 — CDC deletes

<a id="bridge-de41"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

**Practice:** Apply CDC deletes and verify that removed source entities disappear from current state.

**Supporting reading:** [Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE42 — Snapshot and log boundary

<a id="bridge-de42"></a>

**Selected course(s):** [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/); [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

**Practice:** Document and test a snapshot/log handover with concurrent writes and replay.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE43 — Transactional outbox

<a id="bridge-de43"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Publish business changes through an outbox and inject duplicate deliveries.

**Supporting reading:** [Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE44 — Watermark arithmetic

<a id="bridge-de44"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Calculate a watermark for changed event times and test the operator's actual late-data behavior.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE45 — Exactly-once boundaries

<a id="bridge-de45"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Replay a checkpointed stream writing to a non-idempotent sink and repair the duplicate effect.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE46 — Deduplication horizon

<a id="bridge-de46"></a>

**Selected course(s):** [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/); [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Test a duplicate arriving after the retained deduplication horizon.

**Supporting reading:** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE47 — Backlog arithmetic

<a id="bridge-de47"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Estimate backlog from arrival/service rates and compare measured growth.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE48 — Skew mitigation

<a id="bridge-de48"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Salt a hot key for an associative aggregate and reconcile the final sum.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE49 — Broadcast limits

<a id="bridge-de49"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Measure broadcast memory and change strategy when the smaller side is no longer small.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE50 — Partition cardinality

<a id="bridge-de50"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Compare partition schemes against real query filters and file-count costs.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE51 — Compaction correctness

<a id="bridge-de51"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Compact files while readers run and verify consistent snapshot visibility.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE52 — Retry-safe loading

<a id="bridge-de52"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Use stable keys or atomic partition replacement to make a retried load safe.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE53 — Deterministic backfills

<a id="bridge-de53"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Rerun a historical workflow without current-time or latest-file dependence.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE54 — Schema identity

<a id="bridge-de54"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Rename/reorder fields using stable schema identity and validate old/new reads.

**Supporting reading:** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE55 — Time zones

<a id="bridge-de55"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Group UTC events into local calendar days across a daylight-saving transition.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE56 — Quality reconciliation

<a id="bridge-de56"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Reconcile counts, keys and value aggregates to reveal errors hidden by equal row counts.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE57 — Atomic publication

<a id="bridge-de57"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp); [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

**Practice:** Build and validate a replacement dataset, then publish it atomically.

**Supporting reading:** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html); [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge DE58 — Capstone evidence

<a id="bridge-de58"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Enforce freshness/quality/access contracts and demonstrate lineage plus a reconciled recovery.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE59 — Optimization evidence

<a id="bridge-de59"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Inspect a Spark plan, measure skew and I/O, and compare a correctness-preserving optimization.

**Supporting reading:** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge DE60 — Governance evidence

<a id="bridge-de60"></a>

**Selected course(s):** [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

**Practice:** Produce an independently explainable artifact for this practice topic. Enforce freshness/quality/access contracts and demonstrate lineage plus a reconciled recovery.

**Supporting reading:** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.
