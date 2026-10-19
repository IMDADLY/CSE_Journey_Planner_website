# Full Stack Web Development — nested competency surveys

Version 1 · Administrator edition with answers · Research checked 15–16 October 2026.

Scope: accessible browser interfaces, JavaScript/React, HTTP, Java/Spring APIs, MongoDB and relational data, testing, security, and production behavior.

**Research emphasis:** MDN supplies a web curriculum; Microsoft supplies interview skill areas; Spring, React, MongoDB, PostgreSQL, and OWASP support implementation and scenario questions.

## Forms and scoring

| Form | IDs (inclusive) | Technical | Self-assessment | Total | Raw maximum |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S1.md) | FS01–FS60 | 50 | 10 | 60 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S2.md) | FS06–FS60 | 46 | 9 | 55 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S3.md) | FS11–FS60 | 42 | 8 | 50 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S4.md) | FS16–FS60 | 38 | 7 | 45 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S5.md) | FS21–FS60 | 34 | 6 | 40 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S6.md) | FS26–FS60 | 30 | 5 | 35 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S7.md) | FS31–FS60 | 26 | 4 | 30 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Full-Stack/Semesters/S8.md) | FS36–FS60 | 22 | 3 | 25 | 94 |

Each form uses the strict rule **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1**. All ID ranges are inclusive. S8 contains IDs 36–60; each preceding form adds five earlier IDs, comprising four competency questions and one self-assessment. Inherited wording, options, keys, and weights are identical. There are 60 unique questions and 340 appearances across the eight forms.

Competency questions have four options and one correct answer. Weights are 2 for tiers 1–2, 3 for tiers 3–6, and 4 for tiers 7–8. Correct = full weight; incorrect or unanswered = 0. Each self-assessment has weight 2 and scores A=0, B=0.5, C=1, D=2; unanswered=0. There is no negative marking. Self-assessment measures reported practice; it has no objectively correct answer. Coursework, simulators, personal projects, and local demonstrations are acceptable evidence; paid experience is not required.

The proposed weighting gives foundational recognition/code-reading items 2 points, applied intermediate competencies 3, and later-stage integration/diagnosis 4. Self-report is capped at 2 to keep demonstrated knowledge dominant. These are design priorities, not empirically estimated item difficulty or weights prescribed by the sources. Some late-stage items check essential fundamentals in advanced contexts and will be easier than other items in the same tier.

`finalScore = 100 × rawPoints / formMaximum`. Also report `technicalScore = 100 × technicalPoints / technicalMaximum` and `practiceScore = 100 × selfAssessmentPoints / practiceMaximum`. Preserve raw values and round only for display. S8 has technicalMaximum=88 and practiceMaximum=6; 64 technical plus 4 practice points produces 68/94 = **72.34/100**. In S1, self-assessment contributes at most 20/188 = 10.64% of raw points; in S8 it contributes at most 6/94 = 6.38%.

S1 includes advanced stretch questions. Its overall percentage is not an appropriate first-year pass/fail judgment. Present tier and topic gaps, then recommend prerequisite learning before advanced work. Normalization does not make scores from different forms equally difficult. The shared tier-8 technical items permit a common-item subscore, though repeat exposure may inflate it. Four technical questions in an earlier tier are a screening sample, not a comprehensive diagnosis.

Semester tiers are proposed learning stages, not a claim about every university syllabus. Weights, ordering, and difficulty have not been psychometrically validated. Pilot with faculty and students, review ambiguous items and distractors, and confirm practical ability through work samples before consequential recommendations. A student joining in a late semester may need a separately labelled prerequisite check. Omitting difficult questions through adaptive stopping would create a different form and would no longer implement these exact membership lists.

These original interview-style questions are informed by official curricula, role guidance, and technical documentation. They are not represented as actual employer interview questions. Source links indicate technical support or topic relevance; worked calculations and scenario assumptions establish the intended answers. Professional certification profiles describe skill areas, not B.Tech hiring cutoffs or a representative survey of all employers.


## Complete bank

## Tier 1 — Web and programming basics

Included in S1.

### FS01 — Semantic HTML

**Competency MCQ · Tier 1 · Weight 2**

Which HTML element is the appropriate default for an action that submits a form?

- **A.** `<div>` with only a click listener
- **B.** `<button type="submit">`
- **C.** `<img>` with no alternative text
- **D.** `<span>` with blue text

**Answer: B.** A native button provides form behavior and keyboard semantics.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS02 — CSS

**Competency MCQ · Tier 1 · Weight 2**

Which selector targets elements with class `card`?

- **A.** `.card`
- **B.** `@card`
- **C.** `card()`
- **D.** `#card`

**Answer: A.** A dot denotes a class selector; a hash denotes an ID.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS03 — JavaScript arrays

**Competency MCQ · Tier 1 · Weight 2**

What is `[2, 4, 6].map(x => x / 2)[1]`?

- **A.** 3
- **B.** 4
- **C.** 2
- **D.** 1

**Answer: C.** Mapping produces [1,2,3]; zero-based index 1 selects 2.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS04 — Web architecture

**Competency MCQ · Tier 1 · Weight 2**

In a conventional web application, which component must enforce access to a private database record?

- **A.** Only the CSS stylesheet
- **B.** Only the browser's hidden menu
- **C.** The server handling the request
- **D.** Only the user's cached page

**Answer: C.** Clients can be modified; the trusted server must authorize the operation.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS05 — Web practice

**Self-assessment MCQ · Tier 1 · Weight 2**

What evidence can you demonstrate of building a basic accessible web page?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently built a semantic page with responsive styling **(1 points)**
- **D.** I also checked keyboard use, labels, and multiple viewport sizes and recorded fixes **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

## Tier 2 — JavaScript, HTTP, and Git

Included in S1 through S2.

### FS06 — JavaScript comparison

**Competency MCQ · Tier 2 · Weight 2**

What is the result of `5 === "5"` in JavaScript?

- **A.** true
- **B.** A syntax error
- **C.** The string "true"
- **D.** false

**Answer: D.** Strict equality does not coerce the string to a number.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS07 — HTTP semantics

**Competency MCQ · Tier 2 · Weight 2**

An API cannot find a resource at a valid resource URL. Which status most directly represents this?

- **A.** 204
- **B.** 301
- **C.** 404
- **D.** 201

**Answer: C.** 404 denotes that the target resource was not found.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS08 — Git workflow

**Competency MCQ · Tier 2 · Weight 2**

Which Git operation records staged changes as a local history entry?

- **A.** fetch
- **B.** clone
- **C.** commit
- **D.** status

**Answer: C.** A commit records a snapshot; fetching retrieves remote history.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS09 — Java methods

**Competency MCQ · Tier 2 · Weight 2**

A Java method is declared `int add(int a, int b)`. Which return statement matches that signature?

- **A.** `return "a+b";`
- **B.** `return;`
- **C.** `return true;`
- **D.** `return a + b;`

**Answer: D.** The declared return type is int.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS10 — Programming practice

**Self-assessment MCQ · Tier 2 · Weight 2**

What evidence can you demonstrate of writing and debugging JavaScript or Java code?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented functions and checked normal and edge cases **(1 points)**
- **D.** I also maintained tests and can explain a diagnosed failure and its fix **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Tier 3 — React and server fundamentals

Included in S1 through S3.

### FS11 — React identity

**Competency MCQ · Tier 3 · Weight 3**

For a reorderable list of records, which React key is most suitable?

- **A.** The same constant for every row
- **B.** A new random number on each render
- **C.** A stable unique record ID
- **D.** The current array position regardless of reordering

**Answer: C.** Stable identity lets React preserve the intended component state during reordering.

**Reference basis:** [F10: React list identity and keys](https://react.dev/learn/rendering-lists)

### FS12 — React state

**Competency MCQ · Tier 3 · Weight 3**

Why should a React array state update normally create a new array instead of mutating the existing one?

- **A.** To provide a new state reference and preserve predictable updates
- **B.** To prevent HTTP caching automatically
- **C.** To make every render synchronous
- **D.** To force a database transaction

**Answer: A.** State should be treated as immutable; new values make changes explicit.

**Reference basis:** [F2: React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

### FS13 — Spring dependency injection

**Competency MCQ · Tier 3 · Weight 3**

What is a main benefit of constructor injection for a service's dependency?

- **A.** It eliminates every runtime error
- **B.** It bypasses authorization checks
- **C.** It automatically makes every operation transactional
- **D.** The required dependency is explicit and can be substituted in tests

**Answer: D.** Constructor injection expresses required collaborators and aids isolated testing.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS14 — Input validation

**Competency MCQ · Tier 3 · Weight 3**

A form checks that quantity is positive in JavaScript. What should the API do?

- **A.** Validate quantity independently before accepting it
- **B.** Validate only the button's label
- **C.** Accept any number if the request uses HTTPS
- **D.** Trust the check because it ran in a browser

**Answer: A.** Requests can bypass client validation; HTTPS does not establish business validity.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS15 — UI/API practice

**Self-assessment MCQ · Tier 3 · Weight 2**

What evidence can you demonstrate of connecting a React interface to a backend API?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented loading, success, and error states **(1 points)**
- **D.** I also tested stale responses, validation, and component behavior with reproducible steps **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F2: React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates), [F3: Spring guides](https://spring.io/guides/)

## Tier 4 — Persistence and API design

Included in S1 through S4.

### FS16 — SQL joins

**Competency MCQ · Tier 4 · Weight 3**

Customers has 3 rows. Exactly one customer has 2 matching orders; the others have none. How many rows does an unfiltered LEFT JOIN from customers to orders return?

- **A.** 4
- **B.** 6
- **C.** 3
- **D.** 2

**Answer: A.** The matched customer contributes two rows and each unmatched customer one.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS17 — Uniqueness

**Competency MCQ · Tier 4 · Weight 3**

Two concurrent registrations try to use the same normalized username. What should enforce uniqueness reliably?

- **A.** A pre-insert SELECT without a constraint
- **B.** A database unique constraint/index, with conflict handling
- **C.** A browser-only existence check
- **D.** Sorting usernames after inserting them

**Answer: B.** Concurrent checks can both pass; a database constraint arbitrates the race.

**Reference basis:** [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS18 — Document modeling

**Competency MCQ · Tier 4 · Weight 3**

An address is small, belongs only to one user, and is almost always read with that user. What is a reasonable MongoDB starting model?

- **A.** Create a separate database per street
- **B.** Store only a screenshot of the address
- **C.** Duplicate the entire users collection per address
- **D.** Embed the address in the user document

**Answer: D.** Embedding can match the access pattern and keep related writes within one document.

**Reference basis:** [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS19 — Indexes

**Competency MCQ · Tier 4 · Weight 3**

Why can adding many indexes slow writes?

- **A.** Indexes eliminate every disk write
- **B.** All indexes are necessarily copied to the browser
- **C.** Indexes turn all writes into reads
- **D.** Writes must maintain the affected index structures

**Answer: D.** Indexes trade storage and write maintenance for faster supported lookups.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS20 — Persistence practice

**Self-assessment MCQ · Tier 4 · Weight 2**

What evidence can you demonstrate of designing and querying application data?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently built CRUD operations with a documented schema **(1 points)**
- **D.** I also tested constraints, query behavior, and concurrent or invalid updates **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

## Tier 5 — Security and testing

Included in S1 through S5.

### FS21 — Authentication and authorization

**Competency MCQ · Tier 5 · Weight 3**

A user is successfully signed in. What additional question does authorization answer?

- **A.** Which browser font is installed?
- **B.** Was the password typed with a keyboard?
- **C.** Is the response compressed?
- **D.** May this user perform this operation on this resource?

**Answer: D.** Identity alone does not grant permission to every resource.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS22 — SQL injection

**Competency MCQ · Tier 5 · Weight 3**

Which method best separates SQL values from SQL syntax?

- **A.** Parameterized queries with bound values
- **B.** Concatenating input after removing spaces
- **C.** Renaming the database table
- **D.** Encrypting the connection but concatenating input

**Answer: A.** Parameters are handled as data instead of being parsed as query structure.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS23 — CSRF

**Competency MCQ · Tier 5 · Weight 3**

A browser automatically sends a session cookie on requests. Which defense directly addresses unauthorized cross-site state-changing submissions?

- **A.** Changing POST to GET
- **B.** Allowing every Origin header
- **C.** Hiding the submit button
- **D.** An appropriate CSRF-token mechanism with server validation

**Answer: D.** A validated token ties the request to the intended interaction; cookie and origin policies provide additional defenses.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/), [F3: Spring guides](https://spring.io/guides/)

### FS24 — Integration testing

**Competency MCQ · Tier 5 · Weight 3**

Which test best checks that an API persists an order and returns its stored ID correctly?

- **A.** A request through the API against an isolated test database, followed by checking persisted data
- **B.** A screenshot of the endpoint name
- **C.** A unit test of string concatenation alone
- **D.** A test that asserts a hard-coded ID without a request

**Answer: A.** This exercises the relevant HTTP, service, and persistence boundary.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS25 — Security practice

**Self-assessment MCQ · Tier 5 · Weight 2**

What evidence can you demonstrate of implementing and testing application permissions?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented server-side authentication and resource permissions **(1 points)**
- **D.** I also wrote negative cross-user tests and documented security assumptions **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

## Tier 6 — Performance and asynchronous systems

Included in S1 through S6.

### FS26 — Caching

**Competency MCQ · Tier 6 · Weight 3**

What does an ETag help a client do?

- **A.** Encrypt every response body
- **B.** Authenticate the user's password
- **C.** Validate whether its cached representation still matches the server version
- **D.** Guarantee that a resource never changes

**Answer: C.** Conditional requests can compare an ETag to avoid transferring an unchanged representation.

**Reference basis:** [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS27 — Pagination

**Competency MCQ · Tier 6 · Weight 3**

Why should pagination over a mutable dataset use a deterministic ordering with a tie-breaker?

- **A.** To remove the need for authorization
- **B.** To guarantee a fixed dataset snapshot forever
- **C.** To make all database writes atomic
- **D.** To make page boundaries well-defined when primary sort values tie

**Answer: D.** Without a complete ordering, rows with equal sort values can appear inconsistently.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS28 — CORS

**Competency MCQ · Tier 6 · Weight 3**

What does a browser CORS policy primarily control?

- **A.** Whether the server uses SQL
- **B.** Whether any non-browser client may send a request
- **C.** Whether browser JavaScript may read certain cross-origin responses
- **D.** Whether a user is authorized for a database row

**Answer: C.** CORS is a browser enforcement mechanism and does not replace application authorization.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/), [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS29 — Rate limiting

**Competency MCQ · Tier 6 · Weight 3**

An API returns 429 and a Retry-After value. What should a cooperative client do?

- **A.** Immediately launch unlimited parallel retries
- **B.** Respect the delay and retry within a bounded policy
- **C.** Delete its authentication token automatically
- **D.** Treat the response as a successful write

**Answer: B.** 429 indicates rate limiting; bounded retries avoid worsening overload.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS30 — Performance practice

**Self-assessment MCQ · Tier 6 · Weight 2**

What evidence can you demonstrate of diagnosing a full-stack performance problem?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently measured a frontend or backend bottleneck and changed it **(1 points)**
- **D.** I also compared before/after measurements under the same workload and checked regressions **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Tier 7 — Operations and architecture

Included in S1 through S7.

### FS31 — Observability

**Competency MCQ · Tier 7 · Weight 4**

Which identifier most directly helps connect logs from several services handling one request?

- **A.** A random ID regenerated at every log statement
- **B.** The developer's editor theme
- **C.** The CSS class of the loading spinner
- **D.** A propagated trace/correlation ID

**Answer: D.** Propagated context connects the request's work across service boundaries.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS32 — API compatibility

**Competency MCQ · Tier 7 · Weight 4**

Which change is most likely to break clients that depend on an existing response field?

- **A.** Removing or changing the meaning of a required field
- **B.** Adding an optional field clients may ignore
- **C.** Improving internal query performance
- **D.** Adding server-side logging without changing responses

**Answer: A.** Existing clients may require the field's presence and semantics.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS33 — Deployment

**Competency MCQ · Tier 7 · Weight 4**

Why test a deployment's rollback procedure before an incident?

- **A.** To make every migration reversible automatically
- **B.** To guarantee the absence of all future failures
- **C.** To confirm that a previous compatible version can be restored under realistic conditions
- **D.** To remove all need for backups

**Answer: C.** Rollback can fail due to dependencies and data changes; practice reveals these constraints.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FS34 — Secrets

**Competency MCQ · Tier 7 · Weight 4**

Where should a database password used by a server normally be supplied?

- **A.** In a public React bundle
- **B.** In a CSS custom property
- **C.** Through restricted server-side secret configuration
- **D.** In a public source-code example with the real value

**Answer: C.** Browser assets are visible to users; credentials belong in controlled server configuration.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS35 — Delivery practice

**Self-assessment MCQ · Tier 7 · Weight 2**

What evidence can you demonstrate of deploying a versioned web application?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently deployed an app with configuration and health checks **(1 points)**
- **D.** I also exercised monitoring and a compatible rollback or recovery procedure **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

## Tier 8 — Advanced concurrency, security, debugging, and system design

Included in S1 through S8.

### FS36 — React update queue

**Competency MCQ · Tier 8 · Weight 4**

A handler sees count=0 and calls `setCount(count+1); setCount(c=>c+1); setCount(c=>c+1);`. With normal React queue processing, what is the next count?

- **A.** 2
- **B.** 1
- **C.** 3
- **D.** 4

**Answer: C.** The queued replacement sets 1; the two functional updates produce 2 and 3.

**Reference basis:** [F2: React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

### FS37 — Asynchronous UI

**Competency MCQ · Tier 8 · Weight 4**

A search request for "cat" starts before "cats" but finishes afterward and overwrites the newer results. Which fix directly prevents stale results from committing?

- **A.** Always display whichever response arrives last
- **B.** Increase the loading-spinner duration
- **C.** Store the response in a global variable without a key
- **D.** Check a request sequence/key before committing, and optionally abort obsolete requests

**Answer: D.** Only the response corresponding to the current query should update the visible result.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS38 — Spring proxy boundary

**Competency MCQ · Tier 8 · Weight 4**

In default Spring proxy-based transaction management, a nontransactional method calls another method on `this` marked `@Transactional`. Why might no new transaction begin?

- **A.** The internal call bypasses the transactional proxy
- **B.** The annotation starts a transaction only after the called method returns
- **C.** Self-invocation starts a transaction only when the method is public
- **D.** The transaction always begins, but commits before the first statement

**Answer: A.** Default proxy advice intercepts calls through the proxy; self-invocation bypasses that boundary.

**Reference basis:** [F4: Spring declarative transactions](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)

### FS39 — Optimistic concurrency

**Competency MCQ · Tier 8 · Weight 4**

Two clients read MongoDB document version=7. Both update with filter `{_id:id, version:7}` and increment version atomically. After one succeeds, what should the other detect?

- **A.** Zero matched documents and a version conflict
- **B.** Deletion of the collection
- **C.** An automatic merge of arbitrary business changes
- **D.** A guaranteed second successful overwrite

**Answer: A.** The first update changes the version, so the second filter no longer matches.

**Reference basis:** [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS40 — Multi-document atomicity

**Competency MCQ · Tier 8 · Weight 4**

A MongoDB `updateMany` modifies 100 documents. Does single-document atomicity guarantee all 100 changes commit as one indivisible operation?

- **A.** Yes; identical update expressions guarantee collection-wide atomicity
- **B.** Yes; using majority write concern makes all affected documents indivisible
- **C.** No; use a supported transaction when the multi-document invariant requires it
- **D.** Yes; a single updateMany command makes all affected documents one atomic unit

**Answer: C.** Atomicity of each document does not make the whole multi-document operation atomic.

**Reference basis:** [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS41 — Payment retries

**Competency MCQ · Tier 8 · Weight 4**

A client times out after submitting a payment and retries. Which design best prevents a duplicate business charge?

- **A.** Use a fresh random key on every retry
- **B.** Deduplicate only in the browser's memory
- **C.** Persist and enforce an idempotency key tied to the request and its result, with concurrency handling
- **D.** Assume a timeout proves that no charge occurred

**Answer: C.** A timeout leaves the outcome uncertain; durable server-side request identity enables safe retries.

**Reference basis:** [F8: PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

### FS42 — Database and message consistency

**Competency MCQ · Tier 8 · Weight 4**

A service must save an order and eventually publish its event. Which design addresses a crash between database commit and publication?

- **A.** Publish first and discard the order if persistence fails
- **B.** Save the order and outbox record in one database transaction, then publish with retry and consumer deduplication
- **C.** Commit the order and assume the next network call cannot fail
- **D.** Retry the whole workflow without any event identity

**Answer: B.** The outbox makes the intent to publish durable alongside the order; delivery can still repeat.

**Reference basis:** [F9: Debezium transactional outbox](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### FS43 — Object authorization

**Competency MCQ · Tier 8 · Weight 4**

A signed-in user changes `/orders/41` to `/orders/42` and sees another customer's order. Which missing control is most direct?

- **A.** Enforce ownership only in the React route guard
- **B.** Replace sequential IDs with UUIDs and treat unguessability as the access check
- **C.** Check only that the session is valid before loading any order
- **D.** Server-side authorization for the specific order on every relevant operation

**Answer: D.** Authentication does not establish ownership or permitted access to a particular object.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS44 — Tenant isolation

**Competency MCQ · Tier 8 · Weight 4**

An application caches documents by document ID, but IDs are only unique within a tenant. What is required to prevent cross-tenant cache collisions?

- **A.** Include tenant identity in the cache key and authorize access
- **B.** Use a global cache entry and filter only the displayed title
- **C.** Key by document ID alone and shorten the TTL to one second
- **D.** Authorize the database read but serve cache hits without tenant checks

**Answer: A.** The cache key must represent the full resource identity; authorization remains necessary.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS45 — Cookie scope

**Competency MCQ · Tier 8 · Weight 4**

What does HttpOnly on a session cookie accomplish?

- **A.** It prevents the browser from sending the cookie on requests
- **B.** It prevents ordinary JavaScript access to that cookie, but does not by itself prevent CSRF
- **C.** It encrypts the database
- **D.** It guarantees all application input is safe from XSS

**Answer: B.** HttpOnly limits script access; cookie sending and request authorization are separate issues.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS46 — Sensitive caching

**Competency MCQ · Tier 8 · Weight 4**

An account response must not be stored by HTTP caches. Which directive most directly expresses that requirement?

- **A.** `Cache-Control: public, max-age=86400`
- **B.** `Cache-Control: no-store`
- **C.** `ETag` alone prohibits caching
- **D.** `Cache-Control: no-cache` alone guarantees no storage

**Answer: B.** no-store prohibits storage; no-cache generally permits storage but requires validation before reuse.

**Reference basis:** [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS47 — Conditional updates

**Competency MCQ · Tier 8 · Weight 4**

An API uses ETags for lost-update prevention. A client's `If-Match` value no longer matches. Which response is most appropriate?

- **A.** 201 Created for every mismatch
- **B.** 412 Precondition Failed
- **C.** 200 with a silent overwrite
- **D.** 304 Not Modified for a successful mutation

**Answer: B.** A failed precondition means the client's assumed resource version is no longer current.

**Reference basis:** [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS48 — N+1 queries

**Competency MCQ · Tier 8 · Weight 4**

A page loads 100 orders with one query, then fetches each order's customer separately. Traces show 101 queries. What should be tested first?

- **A.** Batch/fetch the needed related data while controlling result size and pagination semantics
- **B.** Increase the connection pool until all 100 related lookups run in parallel, without changing the access pattern
- **C.** Replace the database driver while preserving the same per-row query loop
- **D.** Cache the page indefinitely and omit invalidation

**Answer: A.** The access pattern creates N+1 database calls; batching or appropriate fetching reduces round trips.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS49 — Keyset pagination

**Competency MCQ · Tier 8 · Weight 4**

Rows are ordered by `(created_at,id)` ascending. The last row on a page is `(t,k)`. Which next-page condition matches that order?

- **A.** `created_at > t OR (created_at = t AND id > k)`
- **B.** `id < k` regardless of time
- **C.** `created_at < t`
- **D.** `created_at >= t` without an ID condition

**Answer: A.** The lexicographic boundary uses both sort keys and excludes the previous final row.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS50 — Isolation and invariants

**Competency MCQ · Tier 8 · Weight 4**

Two doctors each see the other on call and concurrently mark themselves off call under snapshot-style isolation. Row updates do not conflict. What issue must the design address?

- **A.** A duplicate-key conflict, solved solely by adding an index to each doctor ID
- **B.** Write skew across the shared invariant, using suitable serialization/locking and retry handling
- **C.** A lost update to the same physical row, solved solely by a version field on each changed row
- **D.** A dirty read, solved simply by preventing reads of uncommitted values

**Answer: B.** Nonconflicting row writes can still jointly violate an invariant spanning rows.

**Reference basis:** [F8: PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

### FS51 — JavaScript scheduling

**Competency MCQ · Tier 8 · Weight 4**

In a browser, run `console.log('A'); Promise.resolve().then(()=>console.log('B')); console.log('C');`. What is the order?

- **A.** A, B, C
- **B.** C, B, A
- **C.** B, A, C
- **D.** A, C, B

**Answer: D.** Synchronous code finishes before the queued promise reaction runs.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS52 — Accessible interaction

**Competency MCQ · Tier 8 · Weight 4**

A dialog opens visually but keyboard focus remains behind it. Which change directly improves keyboard usability?

- **A.** Move focus appropriately into the dialog, manage focus while open, and restore it on close
- **B.** Remove all focus indicators
- **C.** Only change its background color
- **D.** Only increase its z-index

**Answer: A.** Visual stacking alone does not manage keyboard interaction or focus location.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS53 — Security testing

**Competency MCQ · Tier 8 · Weight 4**

An authorization test passes for GET but DELETE has no ownership check. What is the correct test/design response?

- **A.** Assume GET authorization covers DELETE automatically
- **B.** Hide DELETE in the UI and remove server tests
- **C.** Check authorization for every relevant operation and include cross-user negative tests
- **D.** Make IDs sequential so users can predict permissions

**Answer: C.** Permissions must be enforced on each protected operation, including mutation paths.

**Reference basis:** [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS54 — Database migration

**Competency MCQ · Tier 8 · Weight 4**

Old and new application versions overlap during deployment. What migration approach best supports that overlap?

- **A.** Assume rollback automatically restores dropped data
- **B.** Add compatible schema first, migrate/backfill and switch usage, then remove obsolete fields later
- **C.** Change field meaning without version coordination
- **D.** Drop required old fields before deploying the new application

**Answer: B.** An expand–migrate–contract sequence supports a compatibility window.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS55 — Timeout diagnosis

**Competency MCQ · Tier 8 · Weight 4**

An endpoint's database queries take 20 ms, but requests wait 2 s for a pooled connection. What should be investigated first?

- **A.** Increase the endpoint timeout and treat the latency objective as satisfied
- **B.** Connection-pool saturation, held connections, transaction duration, and downstream capacity
- **C.** Optimize only the 20 ms query and disregard the 2 s wait
- **D.** Increase the pool size without measuring database capacity or connection hold time

**Answer: B.** Observed latency is dominated by resource waiting rather than measured query execution.

**Reference basis:** [F3: Spring guides](https://spring.io/guides/)

### FS56 — Frontend hydration

**Competency MCQ · Tier 8 · Weight 4**

A server-rendered component inserts the current time, and its first client render computes a different time. What is a likely cause of hydration mismatch?

- **A.** The timestamp format is valid JavaScript, so differing output cannot cause a mismatch
- **B.** The server and first client render produce different initial markup
- **C.** Using a unique list key guarantees identical server and client text
- **D.** React always executes the first client render after copying all server state automatically

**Answer: B.** Hydration expects compatible initial output; transfer stable initial data or defer client-only values appropriately.

**Reference basis:** [F11: React hydration requirements](https://react.dev/reference/react-dom/client/hydrateRoot)

### FS57 — Release validation

**Competency MCQ · Tier 8 · Weight 4**

A new endpoint passes unit tests but p95 latency doubles at realistic concurrency. Which evidence is needed before calling the change acceptable?

- **A.** Only code coverage percentage
- **B.** Representative load tests against latency/error targets and investigation of the regression
- **C.** Only the average latency at zero load
- **D.** Only a successful single-user screenshot

**Answer: B.** Functional tests do not establish behavior under realistic contention and load.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FS58 — Capstone evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of building an original end-to-end web application?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I have an original app with UI, API, persistence, and repeatable setup **(1 points)**
- **D.** I also tested security, accessibility, failure behavior, and performance and enabled independent review **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/), [F3: Spring guides](https://spring.io/guides/)

### FS59 — Engineering evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of investigating a concurrency or reliability defect?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I reproduced a defect, identified its cause, and implemented a fix **(1 points)**
- **D.** I also added a meaningful regression check and documented the remaining limits **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FS60 — Product evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of validating a web workflow with users?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I observed users completing core tasks and recorded failures **(1 points)**
- **D.** I also addressed accessibility/usability findings and checked the revised workflow with evidence **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

## Source register

- **MS.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **AC.** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **F1.** [MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)
- **F2.** [React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)
- **F3.** [Spring guides](https://spring.io/guides/)
- **F4.** [Spring declarative transactions](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)
- **F5.** [MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)
- **F6.** [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- **F7.** [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)
- **F8.** [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)
- **F9.** [Debezium transactional outbox](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)
- **F10.** [React list identity and keys](https://react.dev/learn/rendering-lists)
- **F11.** [React hydration requirements](https://react.dev/reference/react-dom/client/hydrateRoot)

## App integration

The JSON stores each question once and gives each semester an exact ID list. Preserve question and option IDs and the bank version. Score on the Spring server; React must not receive `correctOptionId` or `rationale` during an attempt. Self-assessment option fractions may be displayed. MongoDB can store canonical questions and reference them from surveys. Store attempt responses, raw points, evidence status, and version together. If options are shuffled at runtime, score by option ID. Do not silently change weights or inherited wording by semester.

Structural checks verify all seven proper-subset relationships, 25 items in S8, four unique options per item, valid answer keys and references, scoring totals, and identical inherited content across forms. These checks do not establish assessment validity.
