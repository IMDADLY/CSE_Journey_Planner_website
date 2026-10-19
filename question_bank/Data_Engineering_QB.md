# Data Engineering and Big Data — nested competency surveys

Version 1 · Administrator edition with answers · Research checked 15–16 October 2026.

Scope: SQL and modeling, batch/stream processing, Spark, orchestration, data quality, CDC, lakehouse evolution, governance, and reliable large-scale pipelines.

**Research emphasis:** The AWS Data Engineer role guide motivates ingestion, storage, operations, and governance coverage. PostgreSQL, Spark, Airflow, Iceberg, and Debezium provide technical foundations. Numeric cases and code-reading items are original.

## Forms and scoring

| Form | IDs (inclusive) | Technical | Self-assessment | Total | Raw maximum |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S1.md) | DE01–DE60 | 50 | 10 | 60 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S2.md) | DE06–DE60 | 46 | 9 | 55 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S3.md) | DE11–DE60 | 42 | 8 | 50 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S4.md) | DE16–DE60 | 38 | 7 | 45 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S5.md) | DE21–DE60 | 34 | 6 | 40 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S6.md) | DE26–DE60 | 30 | 5 | 35 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S7.md) | DE31–DE60 | 26 | 4 | 30 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Data-Engineering/Semesters/S8.md) | DE36–DE60 | 22 | 3 | 25 | 94 |

Each form uses the strict rule **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1**. All ID ranges are inclusive. S8 contains IDs 36–60; each preceding form adds five earlier IDs, comprising four competency questions and one self-assessment. Inherited wording, options, keys, and weights are identical. There are 60 unique questions and 340 appearances across the eight forms.

Competency questions have four options and one correct answer. Weights are 2 for tiers 1–2, 3 for tiers 3–6, and 4 for tiers 7–8. Correct = full weight; incorrect or unanswered = 0. Each self-assessment has weight 2 and scores A=0, B=0.5, C=1, D=2; unanswered=0. There is no negative marking. Self-assessment measures reported practice; it has no objectively correct answer. Coursework, simulators, personal projects, and local demonstrations are acceptable evidence; paid experience is not required.

The proposed weighting gives foundational recognition/code-reading items 2 points, applied intermediate competencies 3, and later-stage integration/diagnosis 4. Self-report is capped at 2 to keep demonstrated knowledge dominant. These are design priorities, not empirically estimated item difficulty or weights prescribed by the sources. Some late-stage items check essential fundamentals in advanced contexts and will be easier than other items in the same tier.

`finalScore = 100 × rawPoints / formMaximum`. Also report `technicalScore = 100 × technicalPoints / technicalMaximum` and `practiceScore = 100 × selfAssessmentPoints / practiceMaximum`. Preserve raw values and round only for display. S8 has technicalMaximum=88 and practiceMaximum=6; 64 technical plus 4 practice points produces 68/94 = **72.34/100**. In S1, self-assessment contributes at most 20/188 = 10.64% of raw points; in S8 it contributes at most 6/94 = 6.38%.

S1 includes advanced stretch questions. Its overall percentage is not an appropriate first-year pass/fail judgment. Present tier and topic gaps, then recommend prerequisite learning before advanced work. Normalization does not make scores from different forms equally difficult. The shared tier-8 technical items permit a common-item subscore, though repeat exposure may inflate it. Four technical questions in an earlier tier are a screening sample, not a comprehensive diagnosis.

Semester tiers are proposed learning stages, not a claim about every university syllabus. Weights, ordering, and difficulty have not been psychometrically validated. Pilot with faculty and students, review ambiguous items and distractors, and confirm practical ability through work samples before consequential recommendations. A student joining in a late semester may need a separately labelled prerequisite check. Omitting difficult questions through adaptive stopping would create a different form and would no longer implement these exact membership lists.

These original interview-style questions are informed by official curricula, role guidance, and technical documentation. They are not represented as actual employer interview questions. Source links indicate technical support or topic relevance; worked calculations and scenario assumptions establish the intended answers. Professional certification profiles describe skill areas, not B.Tech hiring cutoffs or a representative survey of all employers.


## Complete bank

## Tier 1 — Data and programming basics

Included in S1.

### DE01 — Data structures

**Competency MCQ · Tier 1 · Weight 2**

In a relational table, what does a row normally represent?

- **A.** The entire database schema
- **B.** Only an index definition
- **C.** A storage server
- **D.** One record or tuple

**Answer: D.** Rows represent individual tuples under the table's schema.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE02 — Missing values

**Competency MCQ · Tier 1 · Weight 2**

Which SQL predicate tests whether column x is NULL?

- **A.** `x = NULL`
- **B.** `x > NULL`
- **C.** `x IS NULL`
- **D.** `x == "NULL"`

**Answer: C.** NULL uses special SQL predicates; equality with NULL does not evaluate to true.

**Reference basis:** [D9: PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

### DE03 — Primary keys

**Competency MCQ · Tier 1 · Weight 2**

What is a primary key intended to do?

- **A.** Guarantee a table never changes
- **B.** Sort every query automatically
- **C.** Compress every string
- **D.** Uniquely identify a row under the table's constraints

**Answer: D.** Identity and uniqueness differ from output order or immutability.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE04 — Programming

**Competency MCQ · Tier 1 · Weight 2**

What does `sum([3, 5, 7])` return in Python?

- **A.** 5
- **B.** 3
- **C.** 15
- **D.** 357

**Answer: C.** The values are added numerically: 3+5+7=15.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### DE05 — Data practice

**Self-assessment MCQ · Tier 1 · Weight 2**

What evidence can you demonstrate of inspecting and transforming a small dataset?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently parsed records and checked missing or malformed values **(1 points)**
- **D.** I also made the transformation reproducible and documented input/output assumptions **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

## Tier 2 — SQL and data modeling

Included in S1 through S2.

### DE06 — SQL aggregation

**Competency MCQ · Tier 2 · Weight 2**

Which clause filters grouped aggregate results such as `COUNT(*) > 5`?

- **A.** HAVING
- **B.** WHERE applied to the aggregate in the same query level
- **C.** LIMIT alone
- **D.** ORDER BY

**Answer: A.** HAVING applies conditions to groups after aggregation.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE07 — Join cardinality

**Competency MCQ · Tier 2 · Weight 2**

One customer row matches three order rows in an inner join. How many result rows does that customer contribute?

- **A.** 3
- **B.** 0
- **C.** 9
- **D.** 1

**Answer: A.** An ordinary join produces a result for each matching pair.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE08 — Referential integrity

**Competency MCQ · Tier 2 · Weight 2**

What does a foreign-key constraint primarily enforce?

- **A.** Every query uses an index
- **B.** All joins are one-to-one
- **C.** Referenced key values exist in the parent relation, subject to NULL rules
- **D.** Every column is encrypted

**Answer: C.** Foreign keys preserve specified relationships, not arbitrary performance properties.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE09 — Normalization

**Competency MCQ · Tier 2 · Weight 2**

Why separate customer contact details from many order records in a normalized design?

- **A.** To make joins impossible
- **B.** To remove the need for keys
- **C.** To guarantee faster performance for every workload
- **D.** To reduce duplicated facts and update anomalies

**Answer: D.** Storing a shared fact once reduces inconsistent repeated updates; query tradeoffs still matter.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE10 — SQL practice

**Self-assessment MCQ · Tier 2 · Weight 2**

What evidence can you demonstrate of writing queries over related tables?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently wrote joins, aggregates, and key-based checks **(1 points)**
- **D.** I also tested NULLs, duplicate keys, and unexpected join cardinalities **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

## Tier 3 — Batch pipelines and formats

Included in S1 through S3.

### DE11 — ETL and ELT

**Competency MCQ · Tier 3 · Weight 3**

What distinguishes ELT from ETL in the usual terminology?

- **A.** ELT never transforms data
- **B.** ELT means every load is real time
- **C.** ELT loads data before applying the main transformations in the destination platform
- **D.** ELT uses no storage

**Answer: C.** The difference is the placement/order of transformation relative to loading.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE12 — Columnar formats

**Competency MCQ · Tier 3 · Weight 3**

A query reads 3 of 100 columns from a large analytical table. Why can Parquet help?

- **A.** It requires loading all columns as untyped strings
- **B.** It guarantees every query reads zero bytes
- **C.** Column-oriented layout can avoid reading many unneeded columns and supports encoding/compression
- **D.** It prevents any schema from existing

**Answer: C.** Column pruning and suitable encodings can reduce analytical I/O.

**Reference basis:** [D10: Apache Parquet overview](https://parquet.apache.org/docs/overview/)

### DE13 — Idempotence

**Competency MCQ · Tier 3 · Weight 3**

A daily load is retried after partial failure. What does an idempotent design aim to ensure?

- **A.** The network can deliver each packet only once
- **B.** Repeating the same logical load does not duplicate its intended effects
- **C.** Every retry creates another full copy by design
- **D.** No process can ever crash

**Answer: B.** Retries should converge to the intended result for the same input and operation identity.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE14 — Lineage

**Competency MCQ · Tier 3 · Weight 3**

What is data lineage most useful for?

- **A.** Guaranteeing that every source is correct
- **B.** Replacing all data validation
- **C.** Tracing an output to upstream data and transformations
- **D.** Inferring every user's password

**Answer: C.** Lineage supports impact analysis and investigation of derived results.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE15 — Pipeline practice

**Self-assessment MCQ · Tier 3 · Weight 2**

What evidence can you demonstrate of building a repeatable batch load?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented extraction, transformation, and loading **(1 points)**
- **D.** I also tested reruns, partial failure, and output reconciliation **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

## Tier 4 — Distributed processing and partitioning

Included in S1 through S4.

### DE16 — Distributed aggregation

**Competency MCQ · Tier 4 · Weight 3**

Why may grouping records by a key require a shuffle?

- **A.** Every grouping operation needs a new programming language
- **B.** Records with the same key may need to move to the same processing location
- **C.** A shuffle always removes duplicate values
- **D.** Grouping only changes text colors

**Answer: B.** Grouping often redistributes data across partitions by key.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE17 — Partitioning

**Competency MCQ · Tier 4 · Weight 3**

Why partition a large event table by date when queries commonly restrict dates?

- **A.** It automatically validates every timestamp
- **B.** It ensures every user's records remain on one machine forever
- **C.** It removes all late data
- **D.** Eligible queries can skip unrelated partitions

**Answer: D.** Partition pruning reduces work when filters align with the partition scheme.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE18 — Data skew

**Competency MCQ · Tier 4 · Weight 3**

One distributed task processes 70% of the rows and finishes much later than others. What is a likely issue?

- **A.** Uneven key/partition distribution causing skew
- **B.** Too many independent backups
- **C.** Perfectly balanced work
- **D.** A lack of column names

**Answer: A.** Skew concentrates work and can dominate job completion time.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE19 — Broadcast joins

**Competency MCQ · Tier 4 · Weight 3**

When is a broadcast join a plausible optimization?

- **A.** When every worker has zero available memory
- **B.** Whenever keys are missing
- **C.** When one side is genuinely small enough to replicate safely to workers
- **D.** Whenever both sides are too large for memory

**Answer: C.** Broadcasting a small relation can reduce shuffling of a much larger relation.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE20 — Distributed practice

**Self-assessment MCQ · Tier 4 · Weight 2**

What evidence can you demonstrate of measuring a distributed data transformation?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently ran and inspected partition/shuffle behavior **(1 points)**
- **D.** I also diagnosed skew or excessive I/O and compared a corrective change **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

## Tier 5 — Streaming and change data capture

Included in S1 through S5.

### DE21 — Event time

**Competency MCQ · Tier 5 · Weight 3**

What is event time in stream processing?

- **A.** Always the current wall-clock time during a retry
- **B.** The time the event occurred according to its event timestamp
- **C.** Always the time a worker received the event
- **D.** The pipeline's creation date

**Answer: B.** Event time distinguishes occurrence from ingestion/processing time.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE22 — Watermarks

**Competency MCQ · Tier 5 · Weight 3**

What is a watermark primarily used to help manage in stateful event-time processing?

- **A.** Guaranteed perfect global clock synchronization
- **B.** Progress assumptions and state/late-data handling
- **C.** Lossless retention of every event forever
- **D.** Encryption key rotation

**Answer: B.** Watermarks express event-time progress and enable bounded state under assumptions.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE23 — CDC

**Competency MCQ · Tier 5 · Weight 3**

What does change data capture generally provide?

- **A.** A stream or log of inserts, updates, and deletes from a source
- **B.** Only screenshots of tables
- **C.** Only a daily total row count
- **D.** A guarantee that no schema ever changes

**Answer: A.** CDC captures changes so downstream systems can maintain derived state.

**Reference basis:** [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE24 — Delivery semantics

**Competency MCQ · Tier 5 · Weight 3**

In an at-least-once pipeline, which behavior must consumers be prepared for?

- **A.** Guaranteed arrival order across all unrelated partitions
- **B.** Automatic deduplication of every external side effect
- **C.** Guaranteed absence of retries
- **D.** Repeated delivery of a logical event

**Answer: D.** At-least-once delivery can repeat work after uncertain outcomes.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE25 — Streaming practice

**Self-assessment MCQ · Tier 5 · Weight 2**

What evidence can you demonstrate of processing events with timestamps and replay?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently built a stream consumer with documented delivery behavior **(1 points)**
- **D.** I also tested late/duplicate events and recovery from an interrupted run **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

## Tier 6 — Quality, orchestration, and governance

Included in S1 through S6.

### DE26 — Workflow dependencies

**Competency MCQ · Tier 6 · Weight 3**

In a DAG, task B requires task A's output. What should define B's execution dependency?

- **A.** Alphabetical task naming alone
- **B.** A fixed sleep chosen without observing A
- **C.** An explicit dependency on successful availability of A's required output
- **D.** The assumption that B's machine is slower

**Answer: C.** Explicit dependencies express the required ordering and failure behavior.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE27 — Quality checks

**Competency MCQ · Tier 6 · Weight 3**

A required order ID should be non-null and unique. Which tests directly check that contract?

- **A.** Only counting columns
- **B.** Only checking the file extension
- **C.** Only verifying that the job printed "done"
- **D.** Null-rate and uniqueness checks on the relevant output

**Answer: D.** A successful job can still produce data violating key constraints.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE28 — Backfills

**Competency MCQ · Tier 6 · Weight 3**

What should a historical backfill use to avoid depending on the current wall-clock date?

- **A.** Only today's date for every historical partition
- **B.** A random date on each retry
- **C.** The worker's file creation time
- **D.** Explicit processing intervals and versioned inputs/logic

**Answer: D.** Explicit intervals and controlled inputs make historical processing reproducible.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE29 — Governance

**Competency MCQ · Tier 6 · Weight 3**

An analytics team needs aggregate counts but not raw personal identifiers. Which design best matches that need?

- **A.** Place raw identifiers in public dashboards
- **B.** Keep all raw data forever without a purpose
- **C.** Give every analyst unrestricted raw production access
- **D.** Provide suitably aggregated/minimized data with scoped access

**Answer: D.** Data access and retention should match the required use.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE30 — Quality practice

**Self-assessment MCQ · Tier 6 · Weight 2**

What evidence can you demonstrate of enforcing data contracts and quality checks?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented schema, key, and value checks **(1 points)**
- **D.** I also quarantined or reported invalid data and demonstrated how downstream publication is protected **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

## Tier 7 — Operational data architecture

Included in S1 through S7.

### DE31 — Query pruning

**Competency MCQ · Tier 7 · Weight 4**

A table is partitioned by event_date, but a query scans every partition. What should be examined first?

- **A.** Only the dashboard font
- **B.** Whether its filter is expressed in a form the engine can use for partition pruning
- **C.** Whether the table name is uppercase
- **D.** Only the number of Git branches

**Answer: B.** The planner must relate predicates to partition metadata to eliminate irrelevant data.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE32 — Small files

**Competency MCQ · Tier 7 · Weight 4**

Why can millions of tiny data files slow an analytical workload?

- **A.** Metadata, listing, scheduling, and per-file overhead can dominate useful work
- **B.** Compression cannot ever be used on small files
- **C.** Tiny files make network latency exactly zero
- **D.** Every file always maps to one CPU instruction

**Answer: A.** File count and layout affect overhead as well as bytes scanned.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE33 — Schema contracts

**Competency MCQ · Tier 7 · Weight 4**

A producer changes a numeric amount field into a differently formatted string. What is the best response?

- **A.** Assume every consumer automatically infers the intended meaning
- **B.** Silently replace every failed value with zero
- **C.** Disable all schema checks permanently
- **D.** Check compatibility, version the contract where needed, and validate consumers before rollout

**Answer: D.** Type and semantic changes can break downstream assumptions.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE34 — Freshness objectives

**Competency MCQ · Tier 7 · Weight 4**

A pipeline finishes successfully but yesterday's dashboard is still serving last week's data. Which quality dimension failed?

- **A.** Freshness/timeliness
- **B.** Only primary-key length
- **C.** Only developer productivity
- **D.** Only file compression ratio

**Answer: A.** Job success alone does not establish that the expected period's data reached consumers.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE35 — Operations practice

**Self-assessment MCQ · Tier 7 · Weight 2**

What evidence can you demonstrate of operating and recovering a data pipeline?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently added freshness/failure monitoring and a documented recovery path **(1 points)**
- **D.** I also exercised a backfill or replay and reconciled the recovered output **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

## Tier 8 — Advanced consistency, replay, event time, and scaling

Included in S1 through S8.

### DE36 — Window functions

**Competency MCQ · Tier 8 · Weight 4**

For ordered amounts 10,20,30 with unique sequence numbers, what does `SUM(amount) OVER (ORDER BY seq ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` return?

- **A.** 60,60,60
- **B.** 10,20,30
- **C.** 10,30,60
- **D.** 30,50,60

**Answer: C.** The explicit ROWS frame forms a cumulative sum through each current row.

**Reference basis:** [D8: PostgreSQL window functions](https://www.postgresql.org/docs/current/tutorial-window.html)

### DE37 — NULL anti-joins

**Competency MCQ · Tier 8 · Weight 4**

A non-null key x does not equal any non-null value in a subquery, but the subquery also returns NULL. In standard SQL, how does `x NOT IN (subquery)` behave in WHERE?

- **A.** It always evaluates true
- **B.** It throws a division-by-zero error
- **C.** It automatically ignores the NULL
- **D.** It evaluates to unknown rather than true, so that row is not retained

**Answer: D.** NULL can make NOT IN unknown; an appropriately correlated NOT EXISTS often expresses the intended anti-join more clearly.

**Reference basis:** [D9: PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

### DE38 — Join explosion

**Competency MCQ · Tier 8 · Weight 4**

For key K, the left table has 4 rows and the right table has 5 matching rows. An unrestricted equijoin on K produces how many rows for K?

- **A.** 9
- **B.** 5
- **C.** 4
- **D.** 20

**Answer: D.** Every left match pairs with every right match: 4×5=20.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE39 — Historical dimensions

**Competency MCQ · Tier 8 · Weight 4**

A fact at time t must join the customer attributes valid at t. Which SCD Type 2 join condition is appropriate for half-open validity intervals?

- **A.** Join to every historical row with that business key
- **B.** Always join only to the latest customer row
- **C.** Match the business key and `valid_from <= t AND t < valid_to`
- **D.** Ignore time and select an arbitrary row

**Answer: C.** Time-qualified joining preserves historical attribute meaning and avoids duplicate historical matches.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE40 — Late dimensions

**Competency MCQ · Tier 8 · Weight 4**

A fact arrives before its matching dimension record. What is a defensible design?

- **A.** Discard the fact and treat the load as reconciled because all remaining rows join
- **B.** Track the unresolved relationship and reconcile it using a documented late-arrival policy
- **C.** Attach the newest available dimension row permanently, even if it belongs to a different business key
- **D.** Convert the missing foreign key to zero without preserving the original key for reconciliation

**Answer: B.** Explicit handling preserves traceability and allows later correction.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE41 — CDC deletes

**Competency MCQ · Tier 8 · Weight 4**

A downstream current-state table applies CDC inserts/updates but ignores source deletes. What is the result?

- **A.** Delete handling is unnecessary for current-state replication
- **B.** The table necessarily becomes empty
- **C.** All historical facts are automatically correct
- **D.** Deleted source entities can remain incorrectly present downstream

**Answer: D.** Current-state materialization needs a defined delete/tombstone policy.

**Reference basis:** [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE42 — Snapshot and log boundary

**Competency MCQ · Tier 8 · Weight 4**

A pipeline combines an initial snapshot with subsequent change events. What must the protocol establish?

- **A.** Start both independently and rely on equal row counts to prove no gap exists
- **B.** Use file creation timestamps as the only ordering contract across snapshot and log
- **C.** A consistent snapshot/log boundary and handling of overlaps/replays
- **D.** Start the log only after a long snapshot finishes and ignore changes during the snapshot

**Answer: C.** Without a coordinated boundary, concurrent changes can be missed or applied twice.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE43 — Transactional outbox

**Competency MCQ · Tier 8 · Weight 4**

Why write a business update and its outbox event in the same transaction?

- **A.** To guarantee no message can ever be delivered twice
- **B.** To force every broker to use SQL
- **C.** To eliminate the need for consumers
- **D.** To make the business change and intent to publish commit together

**Answer: D.** Atomic intent prevents the dual-write gap; publication and processing still need retry/deduplication design.

**Reference basis:** [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE44 — Watermark arithmetic

**Competency MCQ · Tier 8 · Weight 4**

A simplified single-input policy defines watermark as maximum observed event time minus 10 minutes. The maximum is 12:30. Which timestamp is the watermark?

- **A.** 12:30
- **B.** 12:40
- **C.** 12:20
- **D.** 12:10

**Answer: C.** Subtracting the configured delay gives 12:20; exact acceptance/eviction behavior depends on the operator and engine.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE45 — Exactly-once boundaries

**Competency MCQ · Tier 8 · Weight 4**

A streaming engine checkpoints state but writes to an external API that creates a new payment on every call. Does checkpointing alone guarantee one payment per event?

- **A.** Yes; a stable Kafka offset makes every arbitrary downstream API idempotent
- **B.** Yes; restoring a checkpoint automatically reverses external API calls made after it
- **C.** Yes; checkpointing plus one consumer eliminates uncertain outcomes after a crash
- **D.** No; the external effect needs an idempotent/transactional protocol compatible with replay

**Answer: D.** End-to-end semantics include source, processing state, and sink side effects.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE46 — Deduplication horizon

**Competency MCQ · Tier 8 · Weight 4**

A pipeline keeps event IDs for 24 hours, then evicts them. What should it assume about a duplicate arriving after 48 hours?

- **A.** It must refer to a different entity
- **B.** It may no longer be recognized unless another durable mechanism handles it
- **C.** It is guaranteed to be rejected forever
- **D.** It cannot exist because the queue is distributed

**Answer: B.** Finite deduplication state implies a bounded recognition horizon.

**Reference basis:** [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE47 — Backlog arithmetic

**Competency MCQ · Tier 8 · Weight 4**

Ingestion is 50,000 rows/s and sustainable processing is 40,000 rows/s. Starting empty, what backlog accumulates in 2 minutes under constant rates?

- **A.** 4,800,000 rows
- **B.** 1,200,000 rows
- **C.** 120,000 rows
- **D.** 6,000,000 rows

**Answer: B.** The deficit is 10,000 rows/s for 120 seconds.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE48 — Skew mitigation

**Competency MCQ · Tier 8 · Weight 4**

A huge group-by sum is dominated by one key. What technique can spread that key's associative aggregation work before combining partial sums?

- **A.** Randomly delete most of that key's records
- **B.** Use one worker for every record of every key
- **C.** Sort only the column names
- **D.** Salt the hot key into subkeys, aggregate partial sums, then combine by original key

**Answer: D.** Two-stage associative aggregation can divide a hot key's work while preserving the sum.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE49 — Broadcast limits

**Competency MCQ · Tier 8 · Weight 4**

A dimension table is called "small" but grows beyond worker memory. What is the risk of forcing its broadcast?

- **A.** Broadcasting stores the relation only on the driver, so worker memory is irrelevant
- **B.** The engine must automatically preserve every forced broadcast hint without any memory risk
- **C.** Worker memory pressure/failures and replication overhead; reconsider the join strategy
- **D.** The table size on compressed disk is always an upper bound on its in-memory representation

**Answer: C.** Broadcast suitability depends on actual size and worker capacity.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE50 — Partition cardinality

**Competency MCQ · Tier 8 · Weight 4**

A lake table is physically partitioned by a nearly unique request ID. Why may this be a poor layout?

- **A.** It prevents schema evolution
- **B.** It makes all joins local automatically
- **C.** It can produce enormous numbers of tiny partitions/files with little pruning benefit for common queries
- **D.** It guarantees optimal scans for every query

**Answer: C.** Partition choices should reflect access patterns and manageable granularity.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE51 — Compaction correctness

**Competency MCQ · Tier 8 · Weight 4**

A compaction job rewrites many small files while readers query the table. What publication behavior is desirable?

- **A.** Expose the replacements immediately and let readers choose the newest filename for each row
- **B.** A supported atomic metadata/snapshot commit so readers see a consistent file set
- **C.** Use matching total file size as a substitute for atomic snapshot publication
- **D.** Delete old files first, then publish replacement files individually to avoid duplicate reads

**Answer: B.** A consistent table snapshot separates physical rewriting from atomic visibility.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE52 — Retry-safe loading

**Competency MCQ · Tier 8 · Weight 4**

A task inserts rows then fails before recording completion. What loading strategy most directly prevents duplicate business rows on retry?

- **A.** Mark the task successful before writing any rows so it cannot be retried
- **B.** Use stable business keys and an appropriate upsert/merge or atomic partition-replacement protocol
- **C.** Assign a fresh UUID to each row on every retry and append the batch again
- **D.** Check for prior rows only in task-local memory, then insert without database constraints

**Answer: B.** Idempotent effect identity must survive task retries.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE53 — Deterministic backfills

**Competency MCQ · Tier 8 · Weight 4**

An Airflow task selects "latest" input and uses `now()` to label its output during a historical retry. What is the risk?

- **A.** The task can no longer use SQL
- **B.** The same logical run can consume different data or produce differently labelled output
- **C.** The DAG becomes cyclic automatically
- **D.** Retries always reproduce the original result

**Answer: B.** Use explicit data intervals and controlled input versions for repeatable results.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE54 — Schema identity

**Competency MCQ · Tier 8 · Weight 4**

Why does Iceberg use stable field IDs during schema evolution?

- **A.** They require values to be reinterpreted by the new physical column order after every rename
- **B.** They make a column name, rather than its identity, the permanent lookup key
- **C.** They allow any incompatible type change without rewriting or validating data
- **D.** To track fields independently of names and positions so compatible renames/reordering preserve identity

**Answer: D.** Field identity should survive supported naming/position changes; type compatibility still matters.

**Reference basis:** [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE55 — Time zones

**Competency MCQ · Tier 8 · Weight 4**

An event timestamp is stored in UTC, but reports group by a business day in a timezone with daylight-saving transitions. What must the grouping define?

- **A.** That the server's accidental timezone is authoritative
- **B.** That all local days always equal 86,400 seconds
- **C.** The business timezone and calendar boundaries rather than assuming every local day is exactly 24 UTC hours
- **D.** That timezone offsets never change

**Answer: C.** Calendar-day boundaries can shift relative to UTC; explicit semantics avoid misclassification.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE56 — Quality reconciliation

**Competency MCQ · Tier 8 · Weight 4**

Input and output have equal row counts after a transformation. Does that alone prove correctness?

- **A.** No; keys, duplicates, values, and reconciled aggregates may still be wrong
- **B.** Yes; equal counts imply identical meaning
- **C.** Yes, provided the files use Parquet
- **D.** No output can ever be validated

**Answer: A.** Count checks detect some losses but miss substitutions, duplication offsets, and value corruption.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE57 — Atomic publication

**Competency MCQ · Tier 8 · Weight 4**

A dashboard must see either yesterday's complete aggregate or today's complete replacement. Which design best supports that contract?

- **A.** Use a fixed sleep before readers start instead of a storage consistency contract
- **B.** Build and validate a new version, then atomically publish/switch its reference using supported storage semantics
- **C.** Overwrite one visible file in place and assume readers cannot open it mid-write
- **D.** Publish the new metadata before all referenced files are durable

**Answer: B.** Separating build from publication avoids presenting partial results as a complete dataset.

**Reference basis:** [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html), [D7: PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

### DE58 — Capstone evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of building an original analytical data pipeline?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I have a pipeline with documented sources, modeling, transformations, and consumer outputs **(1 points)**
- **D.** I also verified replay, lineage, quality, permissions, and performance with independent review **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE59 — Optimization evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of testing a big-data performance hypothesis?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I measured a bottleneck and compared an alternative using the same input **(1 points)**
- **D.** I also checked correctness, resource cost, and behavior at representative scale **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE60 — Governance evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of managing access and lifecycle for a dataset?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently defined access, retention, and sensitive-data handling **(1 points)**
- **D.** I also tested enforcement and documented downstream dependencies and deletion/retention implications **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

## Source register

- **MS.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **AC.** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **D1.** [AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)
- **D2.** [AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)
- **D3.** [Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)
- **D4.** [Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)
- **D5.** [Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)
- **D6.** [Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)
- **D7.** [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)
- **D8.** [PostgreSQL window functions](https://www.postgresql.org/docs/current/tutorial-window.html)
- **D9.** [PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)
- **D10.** [Apache Parquet overview](https://parquet.apache.org/docs/overview/)

## App integration

The JSON stores each question once and gives each semester an exact ID list. Preserve question and option IDs and the bank version. Score on the Spring server; React must not receive `correctOptionId` or `rationale` during an attempt. Self-assessment option fractions may be displayed. MongoDB can store canonical questions and reference them from surveys. Store attempt responses, raw points, evidence status, and version together. If options are shuffled at runtime, score by option ID. Do not silently change weights or inherited wording by semester.

Structural checks verify all seven proper-subset relationships, 25 items in S8, four unique options per item, valid answer keys and references, scoring totals, and identical inherited content across forms. These checks do not establish assessment validity.
