# Data Engineering & Big Data — common competency survey

Bank version: DATA_ENGINEERING-COMMON-3. The same 130 MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.

There are 120 weighted technical questions and 10 separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.

The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.

## Programming and data inspection

Focus: Programming, Python CSV parsing, Missing values, Idempotent parsing, Schema validation, Unicode, Memory growth, Datetime zones, Sampling, Data profiling, Quarantine

Roadmap resource: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/) (Curated academic or industry source).

### DE04 — Programming

What does `sum([3, 5, 7])` return in Python?

- A. 5
- B. 3
- C. 15
- D. 357

**Answer:** C. The values are added numerically: 3+5+7=15.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### DATA_ENGINEERING-X01 — Python CSV parsing

A CSV field contains `"New York, NY"`. Why is splitting each line on commas unsafe?

- A. Quoted commas are part of one field
- B. Commas are never allowed in CSV
- C. Python strings cannot contain commas
- D. The row must be skipped

**Answer:** A. A CSV parser respects quoting; naive splitting incorrectly creates two fields.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X02 — Missing values

A numeric column has 100 rows, 7 nulls and 3 malformed strings. How many rows have valid numeric values?

- A. 93
- B. 97
- C. 100
- D. 90

**Answer:** D. 100−7−3=90 valid rows under the stated disjoint categories.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X03 — Idempotent parsing

A file is retried after half its rows were loaded. Which key supports safe repeat processing?

- A. A new random ID every retry
- B. The worker process ID
- C. A stable source row ID or content-derived key
- D. The current wall-clock second

**Answer:** C. A stable logical key lets the target recognize rows previously ingested.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X04 — Schema validation

A source changes `amount` from numeric to free text. Which control should detect this before aggregation?

- A. A new partition name
- B. A typed validation contract at ingestion
- C. A larger output file
- D. A later dashboard color change

**Answer:** B. Typed validation rejects or quarantines incompatible values before they corrupt derived metrics.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X05 — Unicode

A pipeline decodes UTF-8 bytes with a different character encoding and names become garbled. What is the root problem?

- A. Excessive shuffle
- B. Encoding mismatch during decode
- C. Wrong SQL join key
- D. Too many Kafka partitions

**Answer:** B. Bytes must be interpreted with the encoding used by the producer.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X06 — Memory growth

A Python job appends every input record to one list before writing. It fails as data grows. What design change helps?

- A. Process records in bounded batches or a stream
- B. Increase recursion depth
- C. Duplicate the list for safety
- D. Sort the entire file twice

**Answer:** A. Bounded processing caps memory rather than retaining the whole dataset.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X07 — Datetime zones

Events from two regions carry local timestamps without offsets. What ambiguity prevents correct ordering?

- A. Their row IDs are duplicated
- B. Their payloads must be JSON
- C. Their dates must be in the same month
- D. Their actual UTC instants are unknown

**Answer:** D. A local time without zone or offset cannot be mapped unambiguously to a common timeline.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X08 — Sampling

A 1% sample of a billion records has approximately how many records?

- A. 100 million
- B. 100 thousand
- C. 10 million
- D. 1 million

**Answer:** C. 0.01×1,000,000,000=10,000,000.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X09 — Data profiling

A `customer_id` column is assumed unique. Which check directly tests the assumption?

- A. Count file bytes
- B. Inspect one random row
- C. Compare total row count with distinct non-null customer_id count
- D. Compute only average transaction amount

**Answer:** C. Equal total and distinct non-null counts are necessary for uniqueness and non-nullness.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

### DATA_ENGINEERING-X10 — Quarantine

A small fraction of source records fail a validation rule. Which strategy preserves inspectability and valid progress?

- A. Stop logging failures
- B. Load valid rows and quarantine invalid rows with reasons
- C. Silently drop invalid rows
- D. Coerce all values to zero

**Answer:** B. A quarantine separates failures with traceable reasons while valid data can continue under policy.

Source: [PY: Introduction to Computer Science and Programming in Python](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)

## SQL and relational modeling

Focus: Data structures, Missing values, Primary keys, SQL aggregation, Join cardinality, Referential integrity, Normalization, Window functions, NULL anti-joins, Join explosion, Join multiplicity, NULL semantics, Window aggregation, Anti-join, Group counting, Index order, Division guard, Duplicate dimensions, SQL injection

Roadmap resource: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) (Curated academic or industry source).

### DE01 — Data structures

In a relational table, what does a row normally represent?

- A. The entire database schema
- B. Only an index definition
- C. A storage server
- D. One record or tuple

**Answer:** D. Rows represent individual tuples under the table's schema.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE02 — Missing values

Which SQL predicate tests whether column x is NULL?

- A. `x = NULL`
- B. `x > NULL`
- C. `x IS NULL`
- D. `x == "NULL"`

**Answer:** C. NULL uses special SQL predicates; equality with NULL does not evaluate to true.

Source: [D9: PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

### DE03 — Primary keys

What is a primary key intended to do?

- A. Guarantee a table never changes
- B. Sort every query automatically
- C. Compress every string
- D. Uniquely identify a row under the table's constraints

**Answer:** D. Identity and uniqueness differ from output order or immutability.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE06 — SQL aggregation

Which clause filters grouped aggregate results such as `COUNT(*) > 5`?

- A. HAVING
- B. WHERE applied to the aggregate in the same query level
- C. LIMIT alone
- D. ORDER BY

**Answer:** A. HAVING applies conditions to groups after aggregation.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE07 — Join cardinality

One customer row matches three order rows in an inner join. How many result rows does that customer contribute?

- A. 3
- B. 0
- C. 9
- D. 1

**Answer:** A. An ordinary join produces a result for each matching pair.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE08 — Referential integrity

What does a foreign-key constraint primarily enforce?

- A. Every query uses an index
- B. All joins are one-to-one
- C. Referenced key values exist in the parent relation, subject to NULL rules
- D. Every column is encrypted

**Answer:** C. Foreign keys preserve specified relationships, not arbitrary performance properties.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE09 — Normalization

Why separate customer contact details from many order records in a normalized design?

- A. To make joins impossible
- B. To remove the need for keys
- C. To guarantee faster performance for every workload
- D. To reduce duplicated facts and update anomalies

**Answer:** D. Storing a shared fact once reduces inconsistent repeated updates; query tradeoffs still matter.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DE36 — Window functions

For ordered amounts 10,20,30 with unique sequence numbers, what does `SUM(amount) OVER (ORDER BY seq ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` return?

- A. 60,60,60
- B. 10,20,30
- C. 10,30,60
- D. 30,50,60

**Answer:** C. The explicit ROWS frame forms a cumulative sum through each current row.

Source: [D8: PostgreSQL window functions](https://www.postgresql.org/docs/current/tutorial-window.html)

### DE37 — NULL anti-joins

A non-null key x does not equal any non-null value in a subquery, but the subquery also returns NULL. In standard SQL, how does `x NOT IN (subquery)` behave in WHERE?

- A. It always evaluates true
- B. It throws a division-by-zero error
- C. It automatically ignores the NULL
- D. It evaluates to unknown rather than true, so that row is not retained

**Answer:** D. NULL can make NOT IN unknown; an appropriately correlated NOT EXISTS often expresses the intended anti-join more clearly.

Source: [D9: PostgreSQL subquery and NULL semantics](https://www.postgresql.org/docs/current/functions-subquery.html)

### DE38 — Join explosion

For key K, the left table has 4 rows and the right table has 5 matching rows. An unrestricted equijoin on K produces how many rows for K?

- A. 9
- B. 5
- C. 4
- D. 20

**Answer:** D. Every left match pairs with every right match: 4×5=20.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### DATA_ENGINEERING-X11 — Join multiplicity

A key occurs twice on the left and three times on the right. How many inner join rows result for that key?

- A. 6
- B. 5
- C. 3
- D. 2

**Answer:** A. Each of 2 left rows matches each of 3 right rows: 2×3=6.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X12 — NULL semantics

Which predicate selects rows whose `deleted_at` is missing?

- A. `deleted_at = NULL`
- B. `deleted_at <> NULL`
- C. `deleted_at IN (NULL)`
- D. `deleted_at IS NULL`

**Answer:** D. SQL uses IS NULL; ordinary comparisons with NULL evaluate to UNKNOWN.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X13 — Window aggregation

A table has one row per order. Which expression keeps every row while giving each customer total spend?

- A. `SUM(amount) GROUP BY customer_id` in the same SELECT without grouping other columns
- B. `DISTINCT amount`
- C. `COUNT(*) WHERE customer_id`
- D. `SUM(amount) OVER (PARTITION BY customer_id)`

**Answer:** D. A window aggregate computes the customer sum without collapsing order rows.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X14 — Anti-join

Which query pattern finds customers with no matching order?

- A. CROSS JOIN orders
- B. LEFT JOIN then filter `orders.id IS NOT NULL`
- C. LEFT JOIN orders then filter `orders.id IS NULL`
- D. INNER JOIN orders

**Answer:** C. Unmatched left rows have NULL fields from the right side.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X15 — Group counting

A group has values 2, NULL, 5. What are `COUNT(*)` and `COUNT(value)`?

- A. 2 and 2
- B. 3 and 2
- C. 2 and 3
- D. 3 and 3

**Answer:** B. COUNT(*) counts all three rows; COUNT(value) ignores the NULL.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X16 — Primary keys

A fact table uses a natural key that can be corrected later. What modeling concern arises?

- A. Foreign-key references may need coordinated updates
- B. The key becomes automatically compressed
- C. Indexes cannot reference integers
- D. Rows no longer have timestamps

**Answer:** A. Mutable natural keys can require cascading reference changes; stable surrogate IDs may help.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X17 — Index order

A query filters `account_id = ?` and orders by `event_time`. Which composite index is a likely starting point?

- A. (account_id, event_time)
- B. (event_time, account_id) for all queries
- C. (payload) only
- D. No index can support both

**Answer:** A. Equality on the leading key then ordering on the next key is a common useful index shape.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X18 — Division guard

A metric divides revenue by order_count, which can be zero. Which SQL pattern avoids a zero denominator?

- A. `revenue / order_count` without checks
- B. `revenue * order_count`
- C. `COUNT(revenue)`
- D. `revenue / NULLIF(order_count, 0)`

**Answer:** D. NULLIF maps a zero count to NULL, producing NULL rather than divide-by-zero.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X19 — Duplicate dimensions

A fact joins a dimension with two active rows for the same key. What happens to fact totals?

- A. The SQL engine deduplicates automatically
- B. The fact rows disappear
- C. They can double after the join
- D. They are always halved

**Answer:** C. Each fact matches both active dimension rows; aggregation after the join can overcount.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### DATA_ENGINEERING-X20 — SQL injection

A pipeline builds SQL by concatenating an external table filter. What protects the query structure?

- A. Increasing the connection pool
- B. Parameterized values and allowlisted identifiers
- C. Escaping only whitespace
- D. Adding DISTINCT

**Answer:** B. Bind data values separately; identifiers need explicit allowlisting because they cannot generally be bound as values.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

## Database and historical data semantics

Focus: Historical dimensions, Late dimensions, CDC deletes, Snapshot and log boundary, SCD type 2, Snapshot time, Delete propagation, Transaction atomicity, MVCC, CDC ordering, Upsert conflict, Isolation anomaly, Schema evolution

Roadmap resource: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) (Curated academic or industry source).

### DE39 — Historical dimensions

A fact at time t must join the customer attributes valid at t. Which SCD Type 2 join condition is appropriate for half-open validity intervals?

- A. Join to every historical row with that business key
- B. Always join only to the latest customer row
- C. Match the business key and `valid_from <= t AND t < valid_to`
- D. Ignore time and select an arbitrary row

**Answer:** C. Time-qualified joining preserves historical attribute meaning and avoids duplicate historical matches.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE40 — Late dimensions

A fact arrives before its matching dimension record. What is a defensible design?

- A. Discard the fact and treat the load as reconciled because all remaining rows join
- B. Track the unresolved relationship and reconcile it using a documented late-arrival policy
- C. Attach the newest available dimension row permanently, even if it belongs to a different business key
- D. Convert the missing foreign key to zero without preserving the original key for reconciliation

**Answer:** B. Explicit handling preserves traceability and allows later correction.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE41 — CDC deletes

A downstream current-state table applies CDC inserts/updates but ignores source deletes. What is the result?

- A. Delete handling is unnecessary for current-state replication
- B. The table necessarily becomes empty
- C. All historical facts are automatically correct
- D. Deleted source entities can remain incorrectly present downstream

**Answer:** D. Current-state materialization needs a defined delete/tombstone policy.

Source: [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE42 — Snapshot and log boundary

A pipeline combines an initial snapshot with subsequent change events. What must the protocol establish?

- A. Start both independently and rely on equal row counts to prove no gap exists
- B. Use file creation timestamps as the only ordering contract across snapshot and log
- C. A consistent snapshot/log boundary and handling of overlaps/replays
- D. Start the log only after a long snapshot finishes and ignore changes during the snapshot

**Answer:** C. Without a coordinated boundary, concurrent changes can be missed or applied twice.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DATA_ENGINEERING-X21 — SCD type 2

A customer moves on 1 June. How should a type-2 dimension represent the change?

- A. Copy every fact into a new table
- B. Close the old effective interval and insert a new version
- C. Overwrite the only row with no history
- D. Delete all customer facts

**Answer:** B. Type-2 history preserves prior attributes in an expired row and adds a current version.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X22 — Snapshot time

A report as of March must use the price known then, not today. Which join condition matters?

- A. Fact event time within dimension effective interval
- B. Only current_flag = true
- C. Only matching product name
- D. Newest dimension row regardless of time

**Answer:** A. Temporal joins use the dimension version valid at the fact time.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X23 — Delete propagation

A source row is deleted but a nightly incremental job reads only new inserts. What happens?

- A. The target deletes it automatically
- B. The batch scheduler restarts
- C. All history is erased
- D. The target retains a stale row unless deletes are captured

**Answer:** D. An insert-only incremental feed cannot represent source deletions; tombstones or reconciliation are needed.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X24 — Transaction atomicity

A transfer writes debit and credit rows. The job crashes after debit. What property was missing?

- A. Partition pruning
- B. A longer filename
- C. Atomic commit of both changes
- D. Column compression

**Answer:** C. Atomicity ensures both related changes commit or neither does.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X25 — MVCC

A long-running reader sees a consistent older snapshot while writers commit new rows. What mechanism explains this?

- A. A queue retry
- B. A CSV header
- C. Multiversion concurrency control
- D. A DNS cache

**Answer:** C. MVCC retains versions needed by readers while newer versions become visible to later transactions.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X26 — CDC ordering

For one key, update version 8 arrives after version 9. What should an idempotent sink check?

- A. Delete both versions
- B. Reject or reconcile the stale sequence/version
- C. Always overwrite with the last arrival
- D. Randomize the key

**Answer:** B. Version or log position checks prevent out-of-order arrival from rolling state backward.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X27 — Upsert conflict

A target has row key 42 and a retry replays the same source event. Which operation minimizes duplication?

- A. Upsert keyed on 42 with a stable event version
- B. Append with a new random key
- C. Drop all target rows first
- D. Run the source twice

**Answer:** A. A stable key and event version let a retry converge on the intended state.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X28 — Isolation anomaly

Two jobs read stock=1 and both sell one unit without a condition. What can happen?

- A. Automatic serialization by every database
- B. A DNS conflict
- C. A null dimension key
- D. Overselling from a lost update

**Answer:** D. Concurrent read-modify-write can both succeed unless protected by a lock, condition or isolation.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### DATA_ENGINEERING-X29 — Schema evolution

A consumer expects a non-null column, but a producer drops it without coordination. What is the contract risk?

- A. The database automatically imputes it
- B. The file becomes smaller with no effect
- C. The schema registry generates history
- D. The consumer can fail or misinterpret data

**Answer:** D. Removing a required field is a breaking schema change for existing consumers.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

## Batch and distributed processing

Focus: ETL and ELT, Columnar formats, Distributed aggregation, Data skew, Broadcast joins, Small files, Backlog arithmetic, Skew mitigation, Broadcast limits, Partition skew, Broadcast join, Partition pruning, Shuffle bytes, Narrow transformation, Cache tradeoff, Executor memory, Data locality

Roadmap resource: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) (Curated academic or industry source).

### DE11 — ETL and ELT

What distinguishes ELT from ETL in the usual terminology?

- A. ELT never transforms data
- B. ELT means every load is real time
- C. ELT loads data before applying the main transformations in the destination platform
- D. ELT uses no storage

**Answer:** C. The difference is the placement/order of transformation relative to loading.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE12 — Columnar formats

A query reads 3 of 100 columns from a large analytical table. Why can Parquet help?

- A. It requires loading all columns as untyped strings
- B. It guarantees every query reads zero bytes
- C. Column-oriented layout can avoid reading many unneeded columns and supports encoding/compression
- D. It prevents any schema from existing

**Answer:** C. Column pruning and suitable encodings can reduce analytical I/O.

Source: [D10: Apache Parquet overview](https://parquet.apache.org/docs/overview/)

### DE16 — Distributed aggregation

Why may grouping records by a key require a shuffle?

- A. Every grouping operation needs a new programming language
- B. Records with the same key may need to move to the same processing location
- C. A shuffle always removes duplicate values
- D. Grouping only changes text colors

**Answer:** B. Grouping often redistributes data across partitions by key.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE18 — Data skew

One distributed task processes 70% of the rows and finishes much later than others. What is a likely issue?

- A. Uneven key/partition distribution causing skew
- B. Too many independent backups
- C. Perfectly balanced work
- D. A lack of column names

**Answer:** A. Skew concentrates work and can dominate job completion time.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE19 — Broadcast joins

When is a broadcast join a plausible optimization?

- A. When every worker has zero available memory
- B. Whenever keys are missing
- C. When one side is genuinely small enough to replicate safely to workers
- D. Whenever both sides are too large for memory

**Answer:** C. Broadcasting a small relation can reduce shuffling of a much larger relation.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE32 — Small files

Why can millions of tiny data files slow an analytical workload?

- A. Metadata, listing, scheduling, and per-file overhead can dominate useful work
- B. Compression cannot ever be used on small files
- C. Tiny files make network latency exactly zero
- D. Every file always maps to one CPU instruction

**Answer:** A. File count and layout affect overhead as well as bytes scanned.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE47 — Backlog arithmetic

Ingestion is 50,000 rows/s and sustainable processing is 40,000 rows/s. Starting empty, what backlog accumulates in 2 minutes under constant rates?

- A. 4,800,000 rows
- B. 1,200,000 rows
- C. 120,000 rows
- D. 6,000,000 rows

**Answer:** B. The deficit is 10,000 rows/s for 120 seconds.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE48 — Skew mitigation

A huge group-by sum is dominated by one key. What technique can spread that key's associative aggregation work before combining partial sums?

- A. Randomly delete most of that key's records
- B. Use one worker for every record of every key
- C. Sort only the column names
- D. Salt the hot key into subkeys, aggregate partial sums, then combine by original key

**Answer:** D. Two-stage associative aggregation can divide a hot key's work while preserving the sum.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DE49 — Broadcast limits

A dimension table is called "small" but grows beyond worker memory. What is the risk of forcing its broadcast?

- A. Broadcasting stores the relation only on the driver, so worker memory is irrelevant
- B. The engine must automatically preserve every forced broadcast hint without any memory risk
- C. Worker memory pressure/failures and replication overhead; reconsider the join strategy
- D. The table size on compressed disk is always an upper bound on its in-memory representation

**Answer:** C. Broadcast suitability depends on actual size and worker capacity.

Source: [D2: AWS ingestion and transformation competencies](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01-domain1.html)

### DATA_ENGINEERING-X30 — Partition skew

One Spark key holds 80% of rows. Why might a groupBy be slow despite many executors?

- A. GroupBy never shuffles
- B. The driver must sort all keys locally
- C. One shuffle partition can dominate runtime
- D. Every executor receives exactly equal work

**Answer:** C. A hot key can make one task process most records and determine job completion time.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X31 — Broadcast join

A 5 MB dimension joins a 2 TB fact table. Which approach may avoid shuffling the large table?

- A. Collect both tables to the driver
- B. Broadcast the small dimension to workers
- C. Broadcast the 2 TB fact table
- D. Force a full cartesian join

**Answer:** B. Replicating the small table enables local joins against large partitions when memory permits.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X32 — Partition pruning

A dataset is partitioned by date; a query filters one date. What optimization should occur?

- A. Read only matching date partitions
- B. Read every partition then discard rows
- C. Move data to one worker
- D. Disable predicate pushdown

**Answer:** A. A partition filter can skip irrelevant files entirely.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X33 — Shuffle bytes

A shuffle writes 40 GiB from each of 5 workers. How much data is written in total?

- A. 200 GiB
- B. 40 GiB
- C. 8 GiB
- D. 45 GiB

**Answer:** A. 5×40=200 GiB across workers.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X34 — Narrow transformation

Which operation is typically narrow for a partitioned Spark DataFrame?

- A. Global groupBy on an unpartitioned key
- B. Global sort
- C. Repartitioning by a new key
- D. Filtering rows within each partition

**Answer:** D. A filter can operate locally; global grouping and sorting usually exchange data.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X35 — Small files

A lake table has millions of tiny files and slow queries. Which maintenance action helps?

- A. Disable file metadata
- B. Collect all data to one process
- C. Compact files into appropriately sized files
- D. Split every file further

**Answer:** C. File compaction reduces per-file planning and open overhead.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X36 — Cache tradeoff

A DataFrame is cached but used only once. Why may this hurt?

- A. Caching changes the schema
- B. Caching consumes memory and materialization time without reuse
- C. Caching guarantees faster initial computation
- D. Caching disables all jobs

**Answer:** B. Caching only pays when reused enough to offset storing and materializing it.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X37 — Executor memory

A task repeatedly spills during a wide aggregation. Which evidence should be inspected?

- A. Only DNS lookup time
- B. Shuffle spill and memory metrics in the execution plan/UI
- C. Only source code line count
- D. Only job name

**Answer:** B. Spill metrics show whether execution exceeds available task memory and triggers disk I/O.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X38 — Data locality

A plan moves far more bytes than input size because a key-based aggregation exchanges records. What stage is responsible?

- A. Shuffle exchange
- B. Local filter
- C. Schema inference only
- D. Output renaming

**Answer:** A. Key-based aggregation redistributes rows to group equal keys, causing network exchange.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

## Orchestration and reliable loading

Focus: Idempotence, Workflow dependencies, Backfills, Retry-safe loading, Deterministic backfills, Interval partition, Rerun safety, Dependencies, Backfill, Exactly-once claim, Task granularity, Late upstream, DAG cycle

Roadmap resource: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) (Curated academic or industry source).

### DE13 — Idempotence

A daily load is retried after partial failure. What does an idempotent design aim to ensure?

- A. The network can deliver each packet only once
- B. Repeating the same logical load does not duplicate its intended effects
- C. Every retry creates another full copy by design
- D. No process can ever crash

**Answer:** B. Retries should converge to the intended result for the same input and operation identity.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE26 — Workflow dependencies

In a DAG, task B requires task A's output. What should define B's execution dependency?

- A. Alphabetical task naming alone
- B. A fixed sleep chosen without observing A
- C. An explicit dependency on successful availability of A's required output
- D. The assumption that B's machine is slower

**Answer:** C. Explicit dependencies express the required ordering and failure behavior.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE28 — Backfills

What should a historical backfill use to avoid depending on the current wall-clock date?

- A. Only today's date for every historical partition
- B. A random date on each retry
- C. The worker's file creation time
- D. Explicit processing intervals and versioned inputs/logic

**Answer:** D. Explicit intervals and controlled inputs make historical processing reproducible.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE52 — Retry-safe loading

A task inserts rows then fails before recording completion. What loading strategy most directly prevents duplicate business rows on retry?

- A. Mark the task successful before writing any rows so it cannot be retried
- B. Use stable business keys and an appropriate upsert/merge or atomic partition-replacement protocol
- C. Assign a fresh UUID to each row on every retry and append the batch again
- D. Check for prior rows only in task-local memory, then insert without database constraints

**Answer:** B. Idempotent effect identity must survive task retries.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DE53 — Deterministic backfills

An Airflow task selects "latest" input and uses `now()` to label its output during a historical retry. What is the risk?

- A. The task can no longer use SQL
- B. The same logical run can consume different data or produce differently labelled output
- C. The DAG becomes cyclic automatically
- D. Retries always reproduce the original result

**Answer:** B. Use explicit data intervals and controlled input versions for repeatable results.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DATA_ENGINEERING-X39 — Interval partition

A daily job for 2026-01-02 should process which interval under start-inclusive, end-exclusive semantics?

- A. [Jan 1 00:00, Jan 2 00:00)
- B. [Jan 2 00:00, Jan 2 23:59:59] only
- C. All rows with ingestion date Jan 3
- D. [Jan 2 00:00, Jan 3 00:00)

**Answer:** D. Half-open daily intervals include the start and exclude the next midnight.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X40 — Rerun safety

A scheduled load fails after writing some rows. Which design permits safe rerun?

- A. Skip failed intervals permanently
- B. Delete the source
- C. Deterministic interval output with replace or idempotent merge
- D. Append every retry with new IDs

**Answer:** C. A rerun should converge on one correct interval result instead of duplicating partial writes.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X41 — Dependencies

Task B reads Task A output. What must the orchestrator enforce?

- A. B deletes A output first
- B. B ignores A status
- C. B starts after A successfully publishes its output
- D. B always starts at the same instant as A

**Answer:** C. The dependency edge protects B from consuming absent or incomplete upstream data.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X42 — Backfill

A transformation changes and needs rebuilding six old days. What is a controlled backfill?

- A. Overwrite every table without a snapshot
- B. Run each affected historical interval with explicit version and validation
- C. Run only today and hope old data changes
- D. Manually edit random records

**Answer:** B. Explicit historical intervals and validation make backfills reproducible and auditable.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X43 — Exactly-once claim

A job retries a database insert after timeout. Why is a scheduler retry alone insufficient for exactly-once effects?

- A. The first insert may have committed; the retry can duplicate it
- B. Schedulers never retry
- C. Databases cannot store IDs
- D. Timeouts always roll back transactions

**Answer:** A. The outcome of a timed-out write is unknown; stable keys and idempotent sink logic are needed.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X44 — Task granularity

One task processes all 365 daily partitions and fails near the end. What design improves recovery?

- A. Increase task name length
- B. Disable checkpoints
- C. Process data only once per year
- D. Use bounded partition tasks with separately recorded completion

**Answer:** D. Smaller independently retryable partitions limit redo after a late failure.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X45 — Late upstream

A downstream dashboard expects a daily table by 08:00 but the source arrives at 10:00. Which control helps detect this?

- A. A wider varchar field
- B. More color in the chart
- C. A larger container image
- D. A freshness deadline with alerting

**Answer:** D. A freshness SLA checks arrival and publication time independently of row-level validity.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X46 — DAG cycle

Tasks A, B and C depend on B, C and A respectively. Why can the workflow not start?

- A. A task name is too short
- B. All tasks use SQL
- C. The dependency graph contains a cycle
- D. The graph has only three nodes

**Answer:** C. No task in the cycle has its prerequisites satisfied.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

## Streams and change data

Focus: Event time, Watermarks, CDC, Delivery semantics, Transactional outbox, Watermark arithmetic, Exactly-once boundaries, Deduplication horizon, Kafka partitions, Per-key order, Watermark, Consumer offset, Replay, Deduplication window, Throughput, CDC snapshot

Roadmap resource: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/) (Curated academic or industry source).

### DE21 — Event time

What is event time in stream processing?

- A. Always the current wall-clock time during a retry
- B. The time the event occurred according to its event timestamp
- C. Always the time a worker received the event
- D. The pipeline's creation date

**Answer:** B. Event time distinguishes occurrence from ingestion/processing time.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE22 — Watermarks

What is a watermark primarily used to help manage in stateful event-time processing?

- A. Guaranteed perfect global clock synchronization
- B. Progress assumptions and state/late-data handling
- C. Lossless retention of every event forever
- D. Encryption key rotation

**Answer:** B. Watermarks express event-time progress and enable bounded state under assumptions.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE23 — CDC

What does change data capture generally provide?

- A. A stream or log of inserts, updates, and deletes from a source
- B. Only screenshots of tables
- C. Only a daily total row count
- D. A guarantee that no schema ever changes

**Answer:** A. CDC captures changes so downstream systems can maintain derived state.

Source: [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE24 — Delivery semantics

In an at-least-once pipeline, which behavior must consumers be prepared for?

- A. Guaranteed arrival order across all unrelated partitions
- B. Automatic deduplication of every external side effect
- C. Guaranteed absence of retries
- D. Repeated delivery of a logical event

**Answer:** D. At-least-once delivery can repeat work after uncertain outcomes.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE43 — Transactional outbox

Why write a business update and its outbox event in the same transaction?

- A. To guarantee no message can ever be delivered twice
- B. To force every broker to use SQL
- C. To eliminate the need for consumers
- D. To make the business change and intent to publish commit together

**Answer:** D. Atomic intent prevents the dual-write gap; publication and processing still need retry/deduplication design.

Source: [D6: Debezium outbox event router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### DE44 — Watermark arithmetic

A simplified single-input policy defines watermark as maximum observed event time minus 10 minutes. The maximum is 12:30. Which timestamp is the watermark?

- A. 12:30
- B. 12:40
- C. 12:20
- D. 12:10

**Answer:** C. Subtracting the configured delay gives 12:20; exact acceptance/eviction behavior depends on the operator and engine.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE45 — Exactly-once boundaries

A streaming engine checkpoints state but writes to an external API that creates a new payment on every call. Does checkpointing alone guarantee one payment per event?

- A. Yes; a stable Kafka offset makes every arbitrary downstream API idempotent
- B. Yes; restoring a checkpoint automatically reverses external API calls made after it
- C. Yes; checkpointing plus one consumer eliminates uncertain outcomes after a crash
- D. No; the external effect needs an idempotent/transactional protocol compatible with replay

**Answer:** D. End-to-end semantics include source, processing state, and sink side effects.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DE46 — Deduplication horizon

A pipeline keeps event IDs for 24 hours, then evicts them. What should it assume about a duplicate arriving after 48 hours?

- A. It must refer to a different entity
- B. It may no longer be recognized unless another durable mechanism handles it
- C. It is guaranteed to be rejected forever
- D. It cannot exist because the queue is distributed

**Answer:** B. Finite deduplication state implies a bounded recognition horizon.

Source: [D3: Spark Structured Streaming guide (3.5.8 reference)](https://spark.apache.org/docs/3.5.8/structured-streaming-programming-guide.html)

### DATA_ENGINEERING-X47 — Kafka partitions

A topic has 6 partitions and one consumer group has 8 consumers. At most how many consumers can actively read one partition each?

- A. 1
- B. 6
- C. 8
- D. 14

**Answer:** B. A partition is assigned to at most one group member at a time; 2 members are idle.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X48 — Per-key order

Events for one account must stay ordered in Kafka. What partitioning choice helps?

- A. Use the account ID as a stable key
- B. Use a random key per event
- C. Add more consumer groups
- D. Compress the value

**Answer:** A. The same key maps to one partition, which preserves append order within that partition.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X49 — Event time

An event occurs at 12:00 but arrives at 12:08. Which timestamp should place it into a 12:00 event-time window?

- A. Occurrence time 12:00
- B. Arrival time 12:08
- C. Consumer start time
- D. Broker installation date

**Answer:** A. Event-time windows use when the event happened, subject to watermark/late-data policy.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X50 — Watermark

A watermark is 12:05 and a 12:00 event arrives after its window closes. What must the pipeline define?

- A. That the event never existed
- B. That the clock is always wrong
- C. That the partition is deleted
- D. A late-event policy such as drop, correction or side output

**Answer:** D. Watermarks bound lateness; the system needs an explicit treatment for later arrivals.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X51 — Consumer offset

A consumer commits an offset before its database write, then crashes. What failure is possible?

- A. The database write is always rolled back
- B. The broker deletes the topic
- C. The event is skipped without the database effect
- D. The event is guaranteed to replay

**Answer:** C. The committed offset marks progress even though the side effect never occurred.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X52 — Replay

A new bug fix requires reprocessing retained events. What must the sink support?

- A. A shorter topic name
- B. Idempotent or versioned writes during replay
- C. Only random IDs on each write
- D. No output validation

**Answer:** B. Replayed events may encounter existing outputs, so sink effects must converge correctly.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X53 — Deduplication window

A source can redeliver events up to 24 hours later. A dedupe store retains keys for only 1 hour. What risk remains?

- A. Partitions lose ordering
- B. Duplicates arriving after one hour can be applied twice
- C. The store rejects all events
- D. Watermarks become negative

**Answer:** B. The retention horizon is shorter than the possible redelivery delay.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X54 — Throughput

A stream receives 300 events/s and each worker handles 75 events/s. What minimum number of equal workers is needed, ignoring headroom?

- A. 4
- B. 3
- C. 5
- D. 75

**Answer:** A. 300/75=4 workers at full utilization; production capacity needs headroom.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

### DATA_ENGINEERING-X55 — CDC snapshot

A CDC reader takes a snapshot and then tails changes. What prevents gaps between them?

- A. Sorting by row name
- B. A larger file buffer
- C. A different delimiter
- D. A coordinated log position or consistent snapshot boundary

**Answer:** D. A defined handoff position links snapshot state to subsequent change records without missing updates.

Source: [KAFKA: Apache Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/)

## Lakehouse storage and publication

Focus: Partitioning, Query pruning, Schema contracts, Partition cardinality, Compaction correctness, Schema identity, Atomic publication, Columnar format, Partition design, Snapshot consistency, Schema compatibility, Compaction cost, Retention, File size, Publication

Roadmap resource: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) (Curated academic or industry source).

### DE17 — Partitioning

Why partition a large event table by date when queries commonly restrict dates?

- A. It automatically validates every timestamp
- B. It ensures every user's records remain on one machine forever
- C. It removes all late data
- D. Eligible queries can skip unrelated partitions

**Answer:** D. Partition pruning reduces work when filters align with the partition scheme.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE31 — Query pruning

A table is partitioned by event_date, but a query scans every partition. What should be examined first?

- A. Only the dashboard font
- B. Whether its filter is expressed in a form the engine can use for partition pruning
- C. Whether the table name is uppercase
- D. Only the number of Git branches

**Answer:** B. The planner must relate predicates to partition metadata to eliminate irrelevant data.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE33 — Schema contracts

A producer changes a numeric amount field into a differently formatted string. What is the best response?

- A. Assume every consumer automatically infers the intended meaning
- B. Silently replace every failed value with zero
- C. Disable all schema checks permanently
- D. Check compatibility, version the contract where needed, and validate consumers before rollout

**Answer:** D. Type and semantic changes can break downstream assumptions.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE50 — Partition cardinality

A lake table is physically partitioned by a nearly unique request ID. Why may this be a poor layout?

- A. It prevents schema evolution
- B. It makes all joins local automatically
- C. It can produce enormous numbers of tiny partitions/files with little pruning benefit for common queries
- D. It guarantees optimal scans for every query

**Answer:** C. Partition choices should reflect access patterns and manageable granularity.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE51 — Compaction correctness

A compaction job rewrites many small files while readers query the table. What publication behavior is desirable?

- A. Expose the replacements immediately and let readers choose the newest filename for each row
- B. A supported atomic metadata/snapshot commit so readers see a consistent file set
- C. Use matching total file size as a substitute for atomic snapshot publication
- D. Delete old files first, then publish replacement files individually to avoid duplicate reads

**Answer:** B. A consistent table snapshot separates physical rewriting from atomic visibility.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE54 — Schema identity

Why does Iceberg use stable field IDs during schema evolution?

- A. They require values to be reinterpreted by the new physical column order after every rename
- B. They make a column name, rather than its identity, the permanent lookup key
- C. They allow any incompatible type change without rewriting or validating data
- D. To track fields independently of names and positions so compatible renames/reordering preserve identity

**Answer:** D. Field identity should survive supported naming/position changes; type compatibility still matters.

Source: [D5: Iceberg schema and partition evolution](https://iceberg.apache.org/docs/latest/evolution/)

### DE57 — Atomic publication

A dashboard must see either yesterday's complete aggregate or today's complete replacement. Which design best supports that contract?

- A. Use a fixed sleep before readers start instead of a storage consistency contract
- B. Build and validate a new version, then atomically publish/switch its reference using supported storage semantics
- C. Overwrite one visible file in place and assume readers cannot open it mid-write
- D. Publish the new metadata before all referenced files are durable

**Answer:** B. Separating build from publication avoids presenting partial results as a complete dataset.

Source: [D4: Airflow best practices](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html)

### DATA_ENGINEERING-X56 — Columnar format

Analysts read two columns from a 100-column table. Why can a columnar format reduce I/O?

- A. It stores every row twice
- B. It guarantees all queries are O(1)
- C. It can read only needed column chunks
- D. It removes all nulls automatically

**Answer:** C. Column-oriented layout allows projection to skip irrelevant columns.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X57 — Partition design

A table is partitioned by unique user ID and gets millions of tiny directories. What is the design problem?

- A. Loss of SQL support
- B. All data becomes uncompressed
- C. Excessively high-cardinality partitions
- D. Too few unique keys

**Answer:** C. High-cardinality partition keys create many small partitions and metadata overhead.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X58 — Snapshot consistency

A reader scans while a writer replaces several data files. What should a transactional table format provide?

- A. An empty table during every write
- B. One consistent committed snapshot
- C. A random mix of old and new files
- D. Only the newest file name

**Answer:** B. A transaction log or equivalent snapshot mechanism lets readers see a coherent version.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X59 — Schema compatibility

A producer adds an optional nullable column. Why is this often easier to evolve than removing a required column?

- A. Older readers can usually ignore the new field
- B. It forces all old rows to be rewritten immediately
- C. It changes every primary key
- D. It removes type checking

**Answer:** A. Additive optional fields preserve existing fields expected by older consumers.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X60 — Compaction cost

A compaction job rewrites 500 GiB of files. What tradeoff should be considered?

- A. Only the new file names
- B. Only the dashboard font
- C. No cost because compaction is metadata-only
- D. Read improvement versus compute/I/O cost and write contention

**Answer:** D. Compaction consumes resources and may contend with writes; benefits should be measured.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X61 — Retention

A privacy deletion request targets one person in a versioned lake table. Why is deleting current rows alone insufficient?

- A. Current rows cannot be deleted
- B. Columnar storage forbids privacy rules
- C. Partitioning always anonymizes data
- D. Older snapshots/files may still contain the person’s data

**Answer:** D. History and retained files may preserve deleted values until purged under policy.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X62 — File size

A 1 TiB dataset is stored in 1 MiB files. Roughly how many files is that?

- A. 10,000
- B. 1,000,000,000
- C. 1,048,576
- D. 1,024

**Answer:** C. 1 TiB=2^40 bytes and 1 MiB=2^20 bytes, so 2^20=1,048,576 files.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X63 — Publication

A table build completes in temporary storage. What should happen before consumers see it?

- A. Skip schema checks
- B. Validate then atomically publish a version or pointer
- C. Expose partial files as they appear
- D. Delete the prior version immediately

**Answer:** B. Validation plus an atomic publication boundary prevents readers seeing an incomplete build.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

## Data quality, governance and operation

Focus: Lineage, Quality checks, Governance, Freshness objectives, Time zones, Quality reconciliation, Freshness metric, Reconciliation, PII access, Quality threshold, Incident rollback, Data contract

Roadmap resource: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) (Curated academic or industry source).

### DE14 — Lineage

What is data lineage most useful for?

- A. Guaranteeing that every source is correct
- B. Replacing all data validation
- C. Tracing an output to upstream data and transformations
- D. Inferring every user's password

**Answer:** C. Lineage supports impact analysis and investigation of derived results.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE27 — Quality checks

A required order ID should be non-null and unique. Which tests directly check that contract?

- A. Only counting columns
- B. Only checking the file extension
- C. Only verifying that the job printed "done"
- D. Null-rate and uniqueness checks on the relevant output

**Answer:** D. A successful job can still produce data violating key constraints.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE29 — Governance

An analytics team needs aggregate counts but not raw personal identifiers. Which design best matches that need?

- A. Place raw identifiers in public dashboards
- B. Keep all raw data forever without a purpose
- C. Give every analyst unrestricted raw production access
- D. Provide suitably aggregated/minimized data with scoped access

**Answer:** D. Data access and retention should match the required use.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE34 — Freshness objectives

A pipeline finishes successfully but yesterday's dashboard is still serving last week's data. Which quality dimension failed?

- A. Freshness/timeliness
- B. Only primary-key length
- C. Only developer productivity
- D. Only file compression ratio

**Answer:** A. Job success alone does not establish that the expected period's data reached consumers.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE55 — Time zones

An event timestamp is stored in UTC, but reports group by a business day in a timezone with daylight-saving transitions. What must the grouping define?

- A. That the server's accidental timezone is authoritative
- B. That all local days always equal 86,400 seconds
- C. The business timezone and calendar boundaries rather than assuming every local day is exactly 24 UTC hours
- D. That timezone offsets never change

**Answer:** C. Calendar-day boundaries can shift relative to UTC; explicit semantics avoid misclassification.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DE56 — Quality reconciliation

Input and output have equal row counts after a transformation. Does that alone prove correctness?

- A. No; keys, duplicates, values, and reconciled aggregates may still be wrong
- B. Yes; equal counts imply identical meaning
- C. Yes, provided the files use Parquet
- D. No output can ever be validated

**Answer:** A. Count checks detect some losses but miss substitutions, duplication offsets, and value corruption.

Source: [D1: AWS Data Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/data-engineer-associate-01.html)

### DATA_ENGINEERING-X64 — Freshness metric

A dataset is due hourly; the newest published event is 3 hours old. What is its freshness lag?

- A. 3 hours
- B. 1 hour
- C. 0 hours
- D. 24 hours

**Answer:** A. Freshness lag is current time minus latest relevant event/publication time under the stated definition.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X65 — Reconciliation

A source has 12,000 valid records, target has 11,900 and 50 were intentionally rejected. How many remain unexplained?

- A. 50
- B. 100
- C. 150
- D. 0

**Answer:** A. Expected accepted count is 12,000−50=11,950; 11,950−11,900=50 missing.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X66 — Lineage

A dashboard metric is wrong. What lineage information helps locate the cause?

- A. The dashboard theme
- B. The analyst laptop model
- C. Only the final row count
- D. Upstream datasets, transformations and versions feeding the metric

**Answer:** D. Lineage connects the output to the exact input and transformation chain.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X67 — PII access

A public analytics table contains email addresses. What is the first governance concern?

- A. Too many joins
- B. Lack of chart labels
- C. Unnecessary exposure of personal data
- D. Insufficient partition count

**Answer:** C. Access and minimization controls should restrict personal fields to authorized uses.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X68 — Quality threshold

A daily table normally has 1 million rows and today has 20. Which gate best prevents silent publication?

- A. A color-coded README
- B. A row-count anomaly check with a justified threshold
- C. A SQL syntax check only
- D. A file extension check

**Answer:** B. Volume checks catch gross completeness failures that syntax checks cannot.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X69 — Incident rollback

A bad transformation published a corrupt dataset. What supports rapid recovery?

- A. Deleting all source records
- B. Versioned snapshots and a known-good publish pointer
- C. A one-way overwrite with no history
- D. Only rerunning the broken job

**Answer:** B. A validated prior snapshot and pointer can restore consumers while the fault is investigated.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

### DATA_ENGINEERING-X70 — Data contract

A source team changes the meaning of `revenue` from gross to net without changing type. Why can type validation miss the issue?

- A. Semantic meaning changed although schema stayed valid
- B. SQL cannot store decimals
- C. The field became a timestamp
- D. Kafka rejects the row

**Answer:** A. Contracts must include semantic definitions and tests, not only field types.

Source: [DEZ: Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)

## Self-assessment

### DE05 — Data practice

What evidence can you demonstrate of inspecting and transforming a small dataset?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently parsed records and checked missing or malformed values (50% of practice item)
- D. I also made the transformation reproducible and documented input/output assumptions (100% of practice item)

### DE10 — SQL practice

What evidence can you demonstrate of writing queries over related tables?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently wrote joins, aggregates, and key-based checks (50% of practice item)
- D. I also tested NULLs, duplicate keys, and unexpected join cardinalities (100% of practice item)

### DE15 — Pipeline practice

What evidence can you demonstrate of building a repeatable batch load?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented extraction, transformation, and loading (50% of practice item)
- D. I also tested reruns, partial failure, and output reconciliation (100% of practice item)

### DE20 — Distributed practice

What evidence can you demonstrate of measuring a distributed data transformation?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently ran and inspected partition/shuffle behavior (50% of practice item)
- D. I also diagnosed skew or excessive I/O and compared a corrective change (100% of practice item)

### DE25 — Streaming practice

What evidence can you demonstrate of processing events with timestamps and replay?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently built a stream consumer with documented delivery behavior (50% of practice item)
- D. I also tested late/duplicate events and recovery from an interrupted run (100% of practice item)

### DE30 — Quality practice

What evidence can you demonstrate of enforcing data contracts and quality checks?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented schema, key, and value checks (50% of practice item)
- D. I also quarantined or reported invalid data and demonstrated how downstream publication is protected (100% of practice item)

### DE35 — Operations practice

What evidence can you demonstrate of operating and recovering a data pipeline?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently added freshness/failure monitoring and a documented recovery path (50% of practice item)
- D. I also exercised a backfill or replay and reconciled the recovered output (100% of practice item)

### DE58 — Capstone evidence

What evidence can you demonstrate of building an original analytical data pipeline?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I have a pipeline with documented sources, modeling, transformations, and consumer outputs (50% of practice item)
- D. I also verified replay, lineage, quality, permissions, and performance with independent review (100% of practice item)

### DE59 — Optimization evidence

What evidence can you demonstrate of testing a big-data performance hypothesis?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I measured a bottleneck and compared an alternative using the same input (50% of practice item)
- D. I also checked correctness, resource cost, and behavior at representative scale (100% of practice item)

### DE60 — Governance evidence

What evidence can you demonstrate of managing access and lifecycle for a dataset?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently defined access, retention, and sensitive-data handling (50% of practice item)
- D. I also tested enforcement and documented downstream dependencies and deletion/retention implications (100% of practice item)

