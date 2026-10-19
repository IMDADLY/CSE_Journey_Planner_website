// Data Engineering & Big Data Nested Competency Question Bank (DE01 - DE60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (DE36–DE60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['DE01', 'DE60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['DE06', 'DE60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['DE11', 'DE60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['DE16', 'DE60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['DE21', 'DE60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['DE26', 'DE60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['DE31', 'DE60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['DE36', 'DE60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    "1": "Data and programming basics",
    "2": "SQL and data modeling",
    "3": "Batch pipelines and formats",
    "4": "Distributed processing and partitioning",
    "5": "Streaming and change data capture",
    "6": "Quality, orchestration, and governance",
    "7": "Operational data architecture",
    "8": "Advanced consistency, replay, event time, and scaling"
};

export const DATA_ENG_QUESTIONS = [
    {
        "id": "DE01",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Data structures",
        "skillTag": "Data structures",
        "weight": 2,
        "questionText": "In a relational table, what does a row normally represent?",
        "options": [
            "The entire database schema",
            "Only an index definition",
            "A storage server",
            "One record or tuple"
        ],
        "correctOptionIndex": 3,
        "explanation": "Rows represent individual tuples under the table's schema.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE02",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Missing values",
        "skillTag": "Missing values",
        "weight": 2,
        "questionText": "Which SQL predicate tests whether column x is NULL?",
        "options": [
            "`x = NULL`",
            "`x > NULL`",
            "`x IS NULL`",
            "`x == \"NULL\"`"
        ],
        "correctOptionIndex": 2,
        "explanation": "NULL uses special SQL predicates; equality with NULL does not evaluate to true.",
        "reference": "D9: PostgreSQL subquery and NULL semantics"
    },
    {
        "id": "DE03",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Primary keys",
        "skillTag": "Primary keys",
        "weight": 2,
        "questionText": "What is a primary key intended to do?",
        "options": [
            "Guarantee a table never changes",
            "Sort every query automatically",
            "Compress every string",
            "Uniquely identify a row under the table's constraints"
        ],
        "correctOptionIndex": 3,
        "explanation": "Identity and uniqueness differ from output order or immutability.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE04",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Programming",
        "skillTag": "Programming",
        "weight": 2,
        "questionText": "What does `sum([3, 5, 7])` return in Python?",
        "options": [
            "5",
            "3",
            "15",
            "357"
        ],
        "correctOptionIndex": 2,
        "explanation": "The values are added numerically: 3+5+7=15.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "DE05",
        "tier": 1,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Data practice",
        "skillTag": "Data practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of inspecting and transforming a small dataset?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently parsed records and checked missing or malformed values",
            "I also made the transformation reproducible and documented input/output assumptions"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE06",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "SQL aggregation",
        "skillTag": "SQL aggregation",
        "weight": 2,
        "questionText": "Which clause filters grouped aggregate results such as `COUNT(*) > 5`?",
        "options": [
            "HAVING",
            "WHERE applied to the aggregate in the same query level",
            "LIMIT alone",
            "ORDER BY"
        ],
        "correctOptionIndex": 0,
        "explanation": "HAVING applies conditions to groups after aggregation.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE07",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Join cardinality",
        "skillTag": "Join cardinality",
        "weight": 2,
        "questionText": "One customer row matches three order rows in an inner join. How many result rows does that customer contribute?",
        "options": [
            "3",
            "0",
            "9",
            "1"
        ],
        "correctOptionIndex": 0,
        "explanation": "An ordinary join produces a result for each matching pair.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE08",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Referential integrity",
        "skillTag": "Referential integrity",
        "weight": 2,
        "questionText": "What does a foreign-key constraint primarily enforce?",
        "options": [
            "Every query uses an index",
            "All joins are one-to-one",
            "Referenced key values exist in the parent relation, subject to NULL rules",
            "Every column is encrypted"
        ],
        "correctOptionIndex": 2,
        "explanation": "Foreign keys preserve specified relationships, not arbitrary performance properties.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE09",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Normalization",
        "skillTag": "Normalization",
        "weight": 2,
        "questionText": "Why separate customer contact details from many order records in a normalized design?",
        "options": [
            "To make joins impossible",
            "To remove the need for keys",
            "To guarantee faster performance for every workload",
            "To reduce duplicated facts and update anomalies"
        ],
        "correctOptionIndex": 3,
        "explanation": "Storing a shared fact once reduces inconsistent repeated updates; query tradeoffs still matter.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE10",
        "tier": 2,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "SQL practice",
        "skillTag": "SQL practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of writing queries over related tables?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently wrote joins, aggregates, and key-based checks",
            "I also tested NULLs, duplicate keys, and unexpected join cardinalities"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE11",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "ETL and ELT",
        "skillTag": "ETL and ELT",
        "weight": 3,
        "questionText": "What distinguishes ELT from ETL in the usual terminology?",
        "options": [
            "ELT never transforms data",
            "ELT means every load is real time",
            "ELT loads data before applying the main transformations in the destination platform",
            "ELT uses no storage"
        ],
        "correctOptionIndex": 2,
        "explanation": "The difference is the placement/order of transformation relative to loading.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE12",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Columnar formats",
        "skillTag": "Columnar formats",
        "weight": 3,
        "questionText": "A query reads 3 of 100 columns from a large analytical table. Why can Parquet help?",
        "options": [
            "It requires loading all columns as untyped strings",
            "It guarantees every query reads zero bytes",
            "Column-oriented layout can avoid reading many unneeded columns and supports encoding/compression",
            "It prevents any schema from existing"
        ],
        "correctOptionIndex": 2,
        "explanation": "Column pruning and suitable encodings can reduce analytical I/O.",
        "reference": "D10: Apache Parquet overview"
    },
    {
        "id": "DE13",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Idempotence",
        "skillTag": "Idempotence",
        "weight": 3,
        "questionText": "A daily load is retried after partial failure. What does an idempotent design aim to ensure?",
        "options": [
            "The network can deliver each packet only once",
            "Repeating the same logical load does not duplicate its intended effects",
            "Every retry creates another full copy by design",
            "No process can ever crash"
        ],
        "correctOptionIndex": 1,
        "explanation": "Retries should converge to the intended result for the same input and operation identity.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE14",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Lineage",
        "skillTag": "Lineage",
        "weight": 3,
        "questionText": "What is data lineage most useful for?",
        "options": [
            "Guaranteeing that every source is correct",
            "Replacing all data validation",
            "Tracing an output to upstream data and transformations",
            "Inferring every user's password"
        ],
        "correctOptionIndex": 2,
        "explanation": "Lineage supports impact analysis and investigation of derived results.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE15",
        "tier": 3,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Pipeline practice",
        "skillTag": "Pipeline practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a repeatable batch load?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented extraction, transformation, and loading",
            "I also tested reruns, partial failure, and output reconciliation"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE16",
        "tier": 4,
        "type": "competency",
        "tag": "ARCHITECTURE",
        "topic": "Distributed aggregation",
        "skillTag": "Distributed aggregation",
        "weight": 3,
        "questionText": "Why may grouping records by a key require a shuffle?",
        "options": [
            "Every grouping operation needs a new programming language",
            "Records with the same key may need to move to the same processing location",
            "A shuffle always removes duplicate values",
            "Grouping only changes text colors"
        ],
        "correctOptionIndex": 1,
        "explanation": "Grouping often redistributes data across partitions by key.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE17",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Partitioning",
        "skillTag": "Partitioning",
        "weight": 3,
        "questionText": "Why partition a large event table by date when queries commonly restrict dates?",
        "options": [
            "It automatically validates every timestamp",
            "It ensures every user's records remain on one machine forever",
            "It removes all late data",
            "Eligible queries can skip unrelated partitions"
        ],
        "correctOptionIndex": 3,
        "explanation": "Partition pruning reduces work when filters align with the partition scheme.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE18",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Data skew",
        "skillTag": "Data skew",
        "weight": 3,
        "questionText": "One distributed task processes 70% of the rows and finishes much later than others. What is a likely issue?",
        "options": [
            "Uneven key/partition distribution causing skew",
            "Too many independent backups",
            "Perfectly balanced work",
            "A lack of column names"
        ],
        "correctOptionIndex": 0,
        "explanation": "Skew concentrates work and can dominate job completion time.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE19",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Broadcast joins",
        "skillTag": "Broadcast joins",
        "weight": 3,
        "questionText": "When is a broadcast join a plausible optimization?",
        "options": [
            "When every worker has zero available memory",
            "Whenever keys are missing",
            "When one side is genuinely small enough to replicate safely to workers",
            "Whenever both sides are too large for memory"
        ],
        "correctOptionIndex": 2,
        "explanation": "Broadcasting a small relation can reduce shuffling of a much larger relation.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE20",
        "tier": 4,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Distributed practice",
        "skillTag": "Distributed practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of measuring a distributed data transformation?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently ran and inspected partition/shuffle behavior",
            "I also diagnosed skew or excessive I/O and compared a corrective change"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE21",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Event time",
        "skillTag": "Event time",
        "weight": 3,
        "questionText": "What is event time in stream processing?",
        "options": [
            "Always the current wall-clock time during a retry",
            "The time the event occurred according to its event timestamp",
            "Always the time a worker received the event",
            "The pipeline's creation date"
        ],
        "correctOptionIndex": 1,
        "explanation": "Event time distinguishes occurrence from ingestion/processing time.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE22",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Watermarks",
        "skillTag": "Watermarks",
        "weight": 3,
        "questionText": "What is a watermark primarily used to help manage in stateful event-time processing?",
        "options": [
            "Guaranteed perfect global clock synchronization",
            "Progress assumptions and state/late-data handling",
            "Lossless retention of every event forever",
            "Encryption key rotation"
        ],
        "correctOptionIndex": 1,
        "explanation": "Watermarks express event-time progress and enable bounded state under assumptions.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE23",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CDC",
        "skillTag": "CDC",
        "weight": 3,
        "questionText": "What does change data capture generally provide?",
        "options": [
            "A stream or log of inserts, updates, and deletes from a source",
            "Only screenshots of tables",
            "Only a daily total row count",
            "A guarantee that no schema ever changes"
        ],
        "correctOptionIndex": 0,
        "explanation": "CDC captures changes so downstream systems can maintain derived state.",
        "reference": "D6: Debezium outbox event router"
    },
    {
        "id": "DE24",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Delivery semantics",
        "skillTag": "Delivery semantics",
        "weight": 3,
        "questionText": "In an at-least-once pipeline, which behavior must consumers be prepared for?",
        "options": [
            "Guaranteed arrival order across all unrelated partitions",
            "Automatic deduplication of every external side effect",
            "Guaranteed absence of retries",
            "Repeated delivery of a logical event"
        ],
        "correctOptionIndex": 3,
        "explanation": "At-least-once delivery can repeat work after uncertain outcomes.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE25",
        "tier": 5,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Streaming practice",
        "skillTag": "Streaming practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of processing events with timestamps and replay?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently built a stream consumer with documented delivery behavior",
            "I also tested late/duplicate events and recovery from an interrupted run"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE26",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Workflow dependencies",
        "skillTag": "Workflow dependencies",
        "weight": 3,
        "questionText": "In a DAG, task B requires task A's output. What should define B's execution dependency?",
        "options": [
            "Alphabetical task naming alone",
            "A fixed sleep chosen without observing A",
            "An explicit dependency on successful availability of A's required output",
            "The assumption that B's machine is slower"
        ],
        "correctOptionIndex": 2,
        "explanation": "Explicit dependencies express the required ordering and failure behavior.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE27",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Quality checks",
        "skillTag": "Quality checks",
        "weight": 3,
        "questionText": "A required order ID should be non-null and unique. Which tests directly check that contract?",
        "options": [
            "Only counting columns",
            "Only checking the file extension",
            "Only verifying that the job printed \"done\"",
            "Null-rate and uniqueness checks on the relevant output"
        ],
        "correctOptionIndex": 3,
        "explanation": "A successful job can still produce data violating key constraints.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE28",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Backfills",
        "skillTag": "Backfills",
        "weight": 3,
        "questionText": "What should a historical backfill use to avoid depending on the current wall-clock date?",
        "options": [
            "Only today's date for every historical partition",
            "A random date on each retry",
            "The worker's file creation time",
            "Explicit processing intervals and versioned inputs/logic"
        ],
        "correctOptionIndex": 3,
        "explanation": "Explicit intervals and controlled inputs make historical processing reproducible.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE29",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Governance",
        "skillTag": "Governance",
        "weight": 3,
        "questionText": "An analytics team needs aggregate counts but not raw personal identifiers. Which design best matches that need?",
        "options": [
            "Place raw identifiers in public dashboards",
            "Keep all raw data forever without a purpose",
            "Give every analyst unrestricted raw production access",
            "Provide suitably aggregated/minimized data with scoped access"
        ],
        "correctOptionIndex": 3,
        "explanation": "Data access and retention should match the required use.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE30",
        "tier": 6,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Quality practice",
        "skillTag": "Quality practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of enforcing data contracts and quality checks?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented schema, key, and value checks",
            "I also quarantined or reported invalid data and demonstrated how downstream publication is protected"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE31",
        "tier": 7,
        "type": "competency",
        "tag": "CODING",
        "topic": "Query pruning",
        "skillTag": "Query pruning",
        "weight": 4,
        "questionText": "A table is partitioned by event_date, but a query scans every partition. What should be examined first?",
        "options": [
            "Only the dashboard font",
            "Whether its filter is expressed in a form the engine can use for partition pruning",
            "Whether the table name is uppercase",
            "Only the number of Git branches"
        ],
        "correctOptionIndex": 1,
        "explanation": "The planner must relate predicates to partition metadata to eliminate irrelevant data.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE32",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Small files",
        "skillTag": "Small files",
        "weight": 4,
        "questionText": "Why can millions of tiny data files slow an analytical workload?",
        "options": [
            "Metadata, listing, scheduling, and per-file overhead can dominate useful work",
            "Compression cannot ever be used on small files",
            "Tiny files make network latency exactly zero",
            "Every file always maps to one CPU instruction"
        ],
        "correctOptionIndex": 0,
        "explanation": "File count and layout affect overhead as well as bytes scanned.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE33",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Schema contracts",
        "skillTag": "Schema contracts",
        "weight": 4,
        "questionText": "A producer changes a numeric amount field into a differently formatted string. What is the best response?",
        "options": [
            "Assume every consumer automatically infers the intended meaning",
            "Silently replace every failed value with zero",
            "Disable all schema checks permanently",
            "Check compatibility, version the contract where needed, and validate consumers before rollout"
        ],
        "correctOptionIndex": 3,
        "explanation": "Type and semantic changes can break downstream assumptions.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE34",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Freshness objectives",
        "skillTag": "Freshness objectives",
        "weight": 4,
        "questionText": "A pipeline finishes successfully but yesterday's dashboard is still serving last week's data. Which quality dimension failed?",
        "options": [
            "Freshness/timeliness",
            "Only primary-key length",
            "Only developer productivity",
            "Only file compression ratio"
        ],
        "correctOptionIndex": 0,
        "explanation": "Job success alone does not establish that the expected period's data reached consumers.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE35",
        "tier": 7,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Operations practice",
        "skillTag": "Operations practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of operating and recovering a data pipeline?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently added freshness/failure monitoring and a documented recovery path",
            "I also exercised a backfill or replay and reconciled the recovered output"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE36",
        "tier": 8,
        "type": "competency",
        "tag": "CODING",
        "topic": "Window functions",
        "skillTag": "Window functions",
        "weight": 4,
        "questionText": "For ordered amounts 10,20,30 with unique sequence numbers, what does `SUM(amount) OVER (ORDER BY seq ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` return?",
        "options": [
            "60,60,60",
            "10,20,30",
            "10,30,60",
            "30,50,60"
        ],
        "correctOptionIndex": 2,
        "explanation": "The explicit ROWS frame forms a cumulative sum through each current row.",
        "reference": "D8: PostgreSQL window functions"
    },
    {
        "id": "DE37",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "NULL anti-joins",
        "skillTag": "NULL anti-joins",
        "weight": 4,
        "questionText": "A non-null key x does not equal any non-null value in a subquery, but the subquery also returns NULL. In standard SQL, how does `x NOT IN (subquery)` behave in WHERE?",
        "options": [
            "It always evaluates true",
            "It throws a division-by-zero error",
            "It automatically ignores the NULL",
            "It evaluates to unknown rather than true, so that row is not retained"
        ],
        "correctOptionIndex": 3,
        "explanation": "NULL can make NOT IN unknown; an appropriately correlated NOT EXISTS often expresses the intended anti-join more clearly.",
        "reference": "D9: PostgreSQL subquery and NULL semantics"
    },
    {
        "id": "DE38",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Join explosion",
        "skillTag": "Join explosion",
        "weight": 4,
        "questionText": "For key K, the left table has 4 rows and the right table has 5 matching rows. An unrestricted equijoin on K produces how many rows for K?",
        "options": [
            "9",
            "5",
            "4",
            "20"
        ],
        "correctOptionIndex": 3,
        "explanation": "Every left match pairs with every right match: 4×5=20.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "DE39",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Historical dimensions",
        "skillTag": "Historical dimensions",
        "weight": 4,
        "questionText": "A fact at time t must join the customer attributes valid at t. Which SCD Type 2 join condition is appropriate for half-open validity intervals?",
        "options": [
            "Join to every historical row with that business key",
            "Always join only to the latest customer row",
            "Match the business key and `valid_from <= t AND t < valid_to`",
            "Ignore time and select an arbitrary row"
        ],
        "correctOptionIndex": 2,
        "explanation": "Time-qualified joining preserves historical attribute meaning and avoids duplicate historical matches.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE40",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Late dimensions",
        "skillTag": "Late dimensions",
        "weight": 4,
        "questionText": "A fact arrives before its matching dimension record. What is a defensible design?",
        "options": [
            "Discard the fact and treat the load as reconciled because all remaining rows join",
            "Track the unresolved relationship and reconcile it using a documented late-arrival policy",
            "Attach the newest available dimension row permanently, even if it belongs to a different business key",
            "Convert the missing foreign key to zero without preserving the original key for reconciliation"
        ],
        "correctOptionIndex": 1,
        "explanation": "Explicit handling preserves traceability and allows later correction.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE41",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CDC deletes",
        "skillTag": "CDC deletes",
        "weight": 4,
        "questionText": "A downstream current-state table applies CDC inserts/updates but ignores source deletes. What is the result?",
        "options": [
            "Delete handling is unnecessary for current-state replication",
            "The table necessarily becomes empty",
            "All historical facts are automatically correct",
            "Deleted source entities can remain incorrectly present downstream"
        ],
        "correctOptionIndex": 3,
        "explanation": "Current-state materialization needs a defined delete/tombstone policy.",
        "reference": "D6: Debezium outbox event router"
    },
    {
        "id": "DE42",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Snapshot and log boundary",
        "skillTag": "Snapshot and log boundary",
        "weight": 4,
        "questionText": "A pipeline combines an initial snapshot with subsequent change events. What must the protocol establish?",
        "options": [
            "Start both independently and rely on equal row counts to prove no gap exists",
            "Use file creation timestamps as the only ordering contract across snapshot and log",
            "A consistent snapshot/log boundary and handling of overlaps/replays",
            "Start the log only after a long snapshot finishes and ignore changes during the snapshot"
        ],
        "correctOptionIndex": 2,
        "explanation": "Without a coordinated boundary, concurrent changes can be missed or applied twice.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE43",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Transactional outbox",
        "skillTag": "Transactional outbox",
        "weight": 4,
        "questionText": "Why write a business update and its outbox event in the same transaction?",
        "options": [
            "To guarantee no message can ever be delivered twice",
            "To force every broker to use SQL",
            "To eliminate the need for consumers",
            "To make the business change and intent to publish commit together"
        ],
        "correctOptionIndex": 3,
        "explanation": "Atomic intent prevents the dual-write gap; publication and processing still need retry/deduplication design.",
        "reference": "D6: Debezium outbox event router"
    },
    {
        "id": "DE44",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Watermark arithmetic",
        "skillTag": "Watermark arithmetic",
        "weight": 4,
        "questionText": "A simplified single-input policy defines watermark as maximum observed event time minus 10 minutes. The maximum is 12:30. Which timestamp is the watermark?",
        "options": [
            "12:30",
            "12:40",
            "12:20",
            "12:10"
        ],
        "correctOptionIndex": 2,
        "explanation": "Subtracting the configured delay gives 12:20; exact acceptance/eviction behavior depends on the operator and engine.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE45",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Exactly-once boundaries",
        "skillTag": "Exactly-once boundaries",
        "weight": 4,
        "questionText": "A streaming engine checkpoints state but writes to an external API that creates a new payment on every call. Does checkpointing alone guarantee one payment per event?",
        "options": [
            "Yes; a stable Kafka offset makes every arbitrary downstream API idempotent",
            "Yes; restoring a checkpoint automatically reverses external API calls made after it",
            "Yes; checkpointing plus one consumer eliminates uncertain outcomes after a crash",
            "No; the external effect needs an idempotent/transactional protocol compatible with replay"
        ],
        "correctOptionIndex": 3,
        "explanation": "End-to-end semantics include source, processing state, and sink side effects.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE46",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Deduplication horizon",
        "skillTag": "Deduplication horizon",
        "weight": 4,
        "questionText": "A pipeline keeps event IDs for 24 hours, then evicts them. What should it assume about a duplicate arriving after 48 hours?",
        "options": [
            "It must refer to a different entity",
            "It may no longer be recognized unless another durable mechanism handles it",
            "It is guaranteed to be rejected forever",
            "It cannot exist because the queue is distributed"
        ],
        "correctOptionIndex": 1,
        "explanation": "Finite deduplication state implies a bounded recognition horizon.",
        "reference": "D3: Spark Structured Streaming guide (3.5.8 reference)"
    },
    {
        "id": "DE47",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Backlog arithmetic",
        "skillTag": "Backlog arithmetic",
        "weight": 4,
        "questionText": "Ingestion is 50,000 rows/s and sustainable processing is 40,000 rows/s. Starting empty, what backlog accumulates in 2 minutes under constant rates?",
        "options": [
            "4,800,000 rows",
            "1,200,000 rows",
            "120,000 rows",
            "6,000,000 rows"
        ],
        "correctOptionIndex": 1,
        "explanation": "The deficit is 10,000 rows/s for 120 seconds.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE48",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Skew mitigation",
        "skillTag": "Skew mitigation",
        "weight": 4,
        "questionText": "A huge group-by sum is dominated by one key. What technique can spread that key's associative aggregation work before combining partial sums?",
        "options": [
            "Randomly delete most of that key's records",
            "Use one worker for every record of every key",
            "Sort only the column names",
            "Salt the hot key into subkeys, aggregate partial sums, then combine by original key"
        ],
        "correctOptionIndex": 3,
        "explanation": "Two-stage associative aggregation can divide a hot key's work while preserving the sum.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE49",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Broadcast limits",
        "skillTag": "Broadcast limits",
        "weight": 4,
        "questionText": "A dimension table is called \"small\" but grows beyond worker memory. What is the risk of forcing its broadcast?",
        "options": [
            "Broadcasting stores the relation only on the driver, so worker memory is irrelevant",
            "The engine must automatically preserve every forced broadcast hint without any memory risk",
            "Worker memory pressure/failures and replication overhead; reconsider the join strategy",
            "The table size on compressed disk is always an upper bound on its in-memory representation"
        ],
        "correctOptionIndex": 2,
        "explanation": "Broadcast suitability depends on actual size and worker capacity.",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE50",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Partition cardinality",
        "skillTag": "Partition cardinality",
        "weight": 4,
        "questionText": "A lake table is physically partitioned by a nearly unique request ID. Why may this be a poor layout?",
        "options": [
            "It prevents schema evolution",
            "It makes all joins local automatically",
            "It can produce enormous numbers of tiny partitions/files with little pruning benefit for common queries",
            "It guarantees optimal scans for every query"
        ],
        "correctOptionIndex": 2,
        "explanation": "Partition choices should reflect access patterns and manageable granularity.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE51",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Compaction correctness",
        "skillTag": "Compaction correctness",
        "weight": 4,
        "questionText": "A compaction job rewrites many small files while readers query the table. What publication behavior is desirable?",
        "options": [
            "Expose the replacements immediately and let readers choose the newest filename for each row",
            "A supported atomic metadata/snapshot commit so readers see a consistent file set",
            "Use matching total file size as a substitute for atomic snapshot publication",
            "Delete old files first, then publish replacement files individually to avoid duplicate reads"
        ],
        "correctOptionIndex": 1,
        "explanation": "A consistent table snapshot separates physical rewriting from atomic visibility.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE52",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Retry-safe loading",
        "skillTag": "Retry-safe loading",
        "weight": 4,
        "questionText": "A task inserts rows then fails before recording completion. What loading strategy most directly prevents duplicate business rows on retry?",
        "options": [
            "Mark the task successful before writing any rows so it cannot be retried",
            "Use stable business keys and an appropriate upsert/merge or atomic partition-replacement protocol",
            "Assign a fresh UUID to each row on every retry and append the batch again",
            "Check for prior rows only in task-local memory, then insert without database constraints"
        ],
        "correctOptionIndex": 1,
        "explanation": "Idempotent effect identity must survive task retries.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE53",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Deterministic backfills",
        "skillTag": "Deterministic backfills",
        "weight": 4,
        "questionText": "An Airflow task selects \"latest\" input and uses `now()` to label its output during a historical retry. What is the risk?",
        "options": [
            "The task can no longer use SQL",
            "The same logical run can consume different data or produce differently labelled output",
            "The DAG becomes cyclic automatically",
            "Retries always reproduce the original result"
        ],
        "correctOptionIndex": 1,
        "explanation": "Use explicit data intervals and controlled input versions for repeatable results.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE54",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Schema identity",
        "skillTag": "Schema identity",
        "weight": 4,
        "questionText": "Why does Iceberg use stable field IDs during schema evolution?",
        "options": [
            "They require values to be reinterpreted by the new physical column order after every rename",
            "They make a column name, rather than its identity, the permanent lookup key",
            "They allow any incompatible type change without rewriting or validating data",
            "To track fields independently of names and positions so compatible renames/reordering preserve identity"
        ],
        "correctOptionIndex": 3,
        "explanation": "Field identity should survive supported naming/position changes; type compatibility still matters.",
        "reference": "D5: Iceberg schema and partition evolution"
    },
    {
        "id": "DE55",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Time zones",
        "skillTag": "Time zones",
        "weight": 4,
        "questionText": "An event timestamp is stored in UTC, but reports group by a business day in a timezone with daylight-saving transitions. What must the grouping define?",
        "options": [
            "That the server's accidental timezone is authoritative",
            "That all local days always equal 86,400 seconds",
            "The business timezone and calendar boundaries rather than assuming every local day is exactly 24 UTC hours",
            "That timezone offsets never change"
        ],
        "correctOptionIndex": 2,
        "explanation": "Calendar-day boundaries can shift relative to UTC; explicit semantics avoid misclassification.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE56",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Quality reconciliation",
        "skillTag": "Quality reconciliation",
        "weight": 4,
        "questionText": "Input and output have equal row counts after a transformation. Does that alone prove correctness?",
        "options": [
            "No; keys, duplicates, values, and reconciled aggregates may still be wrong",
            "Yes; equal counts imply identical meaning",
            "Yes, provided the files use Parquet",
            "No output can ever be validated"
        ],
        "correctOptionIndex": 0,
        "explanation": "Count checks detect some losses but miss substitutions, duplication offsets, and value corruption.",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE57",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Atomic publication",
        "skillTag": "Atomic publication",
        "weight": 4,
        "questionText": "A dashboard must see either yesterday's complete aggregate or today's complete replacement. Which design best supports that contract?",
        "options": [
            "Use a fixed sleep before readers start instead of a storage consistency contract",
            "Build and validate a new version, then atomically publish/switch its reference using supported storage semantics",
            "Overwrite one visible file in place and assume readers cannot open it mid-write",
            "Publish the new metadata before all referenced files are durable"
        ],
        "correctOptionIndex": 1,
        "explanation": "Separating build from publication avoids presenting partial results as a complete dataset.",
        "reference": "D4: Airflow best practices"
    },
    {
        "id": "DE58",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Capstone evidence",
        "skillTag": "Capstone evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building an original analytical data pipeline?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I have a pipeline with documented sources, modeling, transformations, and consumer outputs",
            "I also verified replay, lineage, quality, permissions, and performance with independent review"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D1: AWS Data Engineer role guide"
    },
    {
        "id": "DE59",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Optimization evidence",
        "skillTag": "Optimization evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of testing a big-data performance hypothesis?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I measured a bottleneck and compared an alternative using the same input",
            "I also checked correctness, resource cost, and behavior at representative scale"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D2: AWS ingestion and transformation competencies"
    },
    {
        "id": "DE60",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Governance evidence",
        "skillTag": "Governance evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of managing access and lifecycle for a dataset?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently defined access, retention, and sensitive-data handling",
            "I also tested enforcement and documented downstream dependencies and deletion/retention implications"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "D1: AWS Data Engineer role guide"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 1) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 1));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = DATA_ENG_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = DATA_ENG_QUESTIONS.findIndex(q => q.id === endId);
    return DATA_ENG_QUESTIONS.slice(startIndex, endIndex + 1);
};

// Helper to score an attempt based on the specification
export const calculateSurveyScore = (questions, answers) => {
    let rawScore = 0;
    let maxRawScore = 0;
    let technicalPoints = 0;
    let maxTechnicalPoints = 0;
    let practicePoints = 0;
    let maxPracticePoints = 0;

    const tierBreakdown = {};
    const skillGaps = [];

    questions.forEach(q => {
        const tier = q.tier;
        if (!tierBreakdown[tier]) {
            tierBreakdown[tier] = {
                tier,
                name: TIER_NAMES[tier] || `Tier ${tier}`,
                earned: 0,
                max: 0,
                totalQuestions: 0,
                correctCount: 0
            };
        }

        tierBreakdown[tier].totalQuestions += 1;
        const selectedOption = answers[q.id];
        let questionEarned = 0;
        let isCorrect = false;

        if (q.type === 'self-assessment') {
            maxRawScore += q.weight;
            maxPracticePoints += q.weight;
            tierBreakdown[tier].max += q.weight;

            if (selectedOption !== undefined && selectedOption !== null) {
                const score = q.optionScores ? q.optionScores[selectedOption] : 0;
                questionEarned = score;
                practicePoints += score;
                rawScore += score;
                tierBreakdown[tier].earned += score;
                if (score >= 1) isCorrect = true;
            }
        } else {
            maxRawScore += q.weight;
            maxTechnicalPoints += q.weight;
            tierBreakdown[tier].max += q.weight;

            if (selectedOption !== undefined && selectedOption !== null && selectedOption === q.correctOptionIndex) {
                questionEarned = q.weight;
                technicalPoints += q.weight;
                rawScore += q.weight;
                tierBreakdown[tier].earned += q.weight;
                tierBreakdown[tier].correctCount += 1;
                isCorrect = true;
            }
        }

        if (!isCorrect && q.skillTag && !skillGaps.includes(q.skillTag)) {
            skillGaps.push(q.skillTag);
        }
    });

    const finalScore = maxRawScore > 0 ? (100 * rawScore / maxRawScore) : 0;
    const technicalScore = maxTechnicalPoints > 0 ? (100 * technicalPoints / maxTechnicalPoints) : 0;
    const practiceScore = maxPracticePoints > 0 ? (100 * practicePoints / maxPracticePoints) : 0;

    let competencyLevel = "Beginner";
    if (finalScore >= 75) {
        competencyLevel = "Advanced";
    } else if (finalScore >= 40) {
        competencyLevel = "Intermediate";
    }

    return {
        rawScore: Number(rawScore.toFixed(2)),
        maxRawScore,
        technicalPoints: Number(technicalPoints.toFixed(2)),
        maxTechnicalPoints,
        practicePoints: Number(practicePoints.toFixed(2)),
        maxPracticePoints,
        finalScore: Number(finalScore.toFixed(2)),
        technicalScore: Number(technicalScore.toFixed(2)),
        practiceScore: Number(practiceScore.toFixed(2)),
        competencyLevel,
        tierBreakdown,
        skillGaps
    };
};
