# Cloud Computing and DevOps — nested competency surveys

Version 1 · Administrator edition with answers · Research checked 15–16 October 2026.

Scope: Linux/networking, cloud infrastructure, containers, delivery pipelines, Terraform, Kubernetes, reliability, observability, security, and recovery.

**Research emphasis:** The AWS DevOps role guide and Google SRE materials inform operational competencies. Kubernetes, Terraform, and GitHub documentation support specific tooling questions. Certification targets are professional references, not graduate pass criteria.

## Forms and scoring

| Form | IDs (inclusive) | Technical | Self-assessment | Total | Raw maximum |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S1.md) | CD01–CD60 | 50 | 10 | 60 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S2.md) | CD06–CD60 | 46 | 9 | 55 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S3.md) | CD11–CD60 | 42 | 8 | 50 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S4.md) | CD16–CD60 | 38 | 7 | 45 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S5.md) | CD21–CD60 | 34 | 6 | 40 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S6.md) | CD26–CD60 | 30 | 5 | 35 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S7.md) | CD31–CD60 | 26 | 4 | 30 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Cloud-DevOps/Semesters/S8.md) | CD36–CD60 | 22 | 3 | 25 | 94 |

Each form uses the strict rule **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1**. All ID ranges are inclusive. S8 contains IDs 36–60; each preceding form adds five earlier IDs, comprising four competency questions and one self-assessment. Inherited wording, options, keys, and weights are identical. There are 60 unique questions and 340 appearances across the eight forms.

Competency questions have four options and one correct answer. Weights are 2 for tiers 1–2, 3 for tiers 3–6, and 4 for tiers 7–8. Correct = full weight; incorrect or unanswered = 0. Each self-assessment has weight 2 and scores A=0, B=0.5, C=1, D=2; unanswered=0. There is no negative marking. Self-assessment measures reported practice; it has no objectively correct answer. Coursework, simulators, personal projects, and local demonstrations are acceptable evidence; paid experience is not required.

The proposed weighting gives foundational recognition/code-reading items 2 points, applied intermediate competencies 3, and later-stage integration/diagnosis 4. Self-report is capped at 2 to keep demonstrated knowledge dominant. These are design priorities, not empirically estimated item difficulty or weights prescribed by the sources. Some late-stage items check essential fundamentals in advanced contexts and will be easier than other items in the same tier.

`finalScore = 100 × rawPoints / formMaximum`. Also report `technicalScore = 100 × technicalPoints / technicalMaximum` and `practiceScore = 100 × selfAssessmentPoints / practiceMaximum`. Preserve raw values and round only for display. S8 has technicalMaximum=88 and practiceMaximum=6; 64 technical plus 4 practice points produces 68/94 = **72.34/100**. In S1, self-assessment contributes at most 20/188 = 10.64% of raw points; in S8 it contributes at most 6/94 = 6.38%.

S1 includes advanced stretch questions. Its overall percentage is not an appropriate first-year pass/fail judgment. Present tier and topic gaps, then recommend prerequisite learning before advanced work. Normalization does not make scores from different forms equally difficult. The shared tier-8 technical items permit a common-item subscore, though repeat exposure may inflate it. Four technical questions in an earlier tier are a screening sample, not a comprehensive diagnosis.

Semester tiers are proposed learning stages, not a claim about every university syllabus. Weights, ordering, and difficulty have not been psychometrically validated. Pilot with faculty and students, review ambiguous items and distractors, and confirm practical ability through work samples before consequential recommendations. A student joining in a late semester may need a separately labelled prerequisite check. Omitting difficult questions through adaptive stopping would create a different form and would no longer implement these exact membership lists.

These original interview-style questions are informed by official curricula, role guidance, and technical documentation. They are not represented as actual employer interview questions. Source links indicate technical support or topic relevance; worked calculations and scenario assumptions establish the intended answers. Professional certification profiles describe skill areas, not B.Tech hiring cutoffs or a representative survey of all employers.


## Complete bank

## Tier 1 — Systems and cloud foundations

Included in S1.

### CD01 — Cloud foundations

**Competency MCQ · Tier 1 · Weight 2**

What does horizontal scaling usually mean?

- **A.** Giving one process a longer variable name
- **B.** Replacing every network request with a file
- **C.** Adding more service instances
- **D.** Increasing only one instance's CPU size

**Answer: C.** Horizontal scaling adds instances; vertical scaling changes the resources of an instance.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD02 — Responsibility

**Competency MCQ · Tier 1 · Weight 2**

When using a managed database, what responsibility normally remains with the application team?

- **A.** Controlling the provider's employees' office access
- **B.** Maintaining the provider's physical building
- **C.** Manufacturing the storage drives
- **D.** Choosing appropriate data access permissions and protecting application credentials

**Answer: D.** Managed infrastructure does not remove responsibility for application identities and data access.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD03 — Operating systems

**Competency MCQ · Tier 1 · Weight 2**

What is a process?

- **A.** A source-code comment
- **B.** A hardware rack label
- **C.** An executing program with associated resources
- **D.** A DNS record type

**Answer: C.** A process is a runtime execution entity managed by the operating system.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD04 — Networking

**Competency MCQ · Tier 1 · Weight 2**

What does an IP address primarily identify in IP communication?

- **A.** An application's Git commit
- **B.** A TLS certificate's private key
- **C.** A network interface/addressable endpoint within the relevant network context
- **D.** A permanent human identity

**Answer: C.** IP addressing supports network delivery; it is not a reliable user identity.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD05 — Systems practice

**Self-assessment MCQ · Tier 1 · Weight 2**

What evidence can you demonstrate of using a shell to inspect processes, files, and networking?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently diagnosed a basic process, permission, or connection issue **(1 points)**
- **D.** I also recorded reproducible commands and explained the cause and fix **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Tier 2 — Linux, networking, and Git

Included in S1 through S2.

### CD06 — Linux permissions

**Competency MCQ · Tier 2 · Weight 2**

For a regular file, what do permissions 640 grant to group members?

- **A.** Read and write
- **B.** Read only
- **C.** Execute only
- **D.** No permissions

**Answer: B.** The group digit 4 represents read permission; owner 6 means read/write.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD07 — DNS

**Competency MCQ · Tier 2 · Weight 2**

What is the main purpose of a DNS lookup for an A record?

- **A.** Allocate CPU to a container
- **B.** Resolve a name to an IPv4 address
- **C.** Encrypt an HTTP body
- **D.** Authenticate a database transaction

**Answer: B.** An A record maps a domain name to an IPv4 address.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD08 — TLS

**Competency MCQ · Tier 2 · Weight 2**

What does a correctly validated TLS connection provide?

- **A.** Transport confidentiality/integrity and authentication of the peer described by its certificate
- **B.** Automatic authorization for every API action
- **C.** Guaranteed application correctness
- **D.** Permanent deletion of all logs

**Answer: A.** TLS protects the connection; business permissions and application logic remain separate.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### CD09 — Version control

**Competency MCQ · Tier 2 · Weight 2**

Why review infrastructure changes in version control?

- **A.** To avoid storing any configuration
- **B.** To guarantee no outage can occur
- **C.** To replace runtime monitoring
- **D.** To make intended changes traceable and reviewable

**Answer: D.** Version control preserves proposed changes and their history; it does not replace testing.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD10 — Networking practice

**Self-assessment MCQ · Tier 2 · Weight 2**

What evidence can you demonstrate of configuring and testing a small networked service?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently configured addressing, listening ports, and connectivity checks **(1 points)**
- **D.** I also distinguished DNS, transport, and application failures using evidence **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

## Tier 3 — Containers and infrastructure automation

Included in S1 through S3.

### CD11 — Containers

**Competency MCQ · Tier 3 · Weight 3**

Compared with a conventional virtual machine, what does a typical Linux container share with its host?

- **A.** The host kernel
- **B.** Every user's password
- **C.** Every process's private memory
- **D.** A separate physical CPU exclusively

**Answer: A.** Containers isolate processes using the host kernel; isolation details depend on configuration.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD12 — Infrastructure as code

**Competency MCQ · Tier 3 · Weight 3**

What is an infrastructure-as-code configuration primarily intended to describe?

- **A.** Infrastructure resources and their intended configuration in a repeatable form
- **B.** Only application test data
- **C.** Only billing receipts
- **D.** Only a screenshot of a console

**Answer: A.** Declarative or programmable definitions support reproducible infrastructure changes.

**Reference basis:** [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD13 — Image identity

**Competency MCQ · Tier 3 · Weight 3**

Why deploy a container image by an immutable digest when reproducibility matters?

- **A.** A digest identifies specific image content
- **B.** It increases application permissions
- **C.** It removes all vulnerabilities automatically
- **D.** It makes the image run without a kernel

**Answer: A.** Mutable tags can point to different content over time; a digest fixes artifact identity.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD14 — Network ports

**Competency MCQ · Tier 3 · Weight 3**

A containerized server listens only on 127.0.0.1 inside its network namespace. Why might traffic from other pods fail?

- **A.** All containers forbid networking
- **B.** The server is not listening on an interface reachable from those pods
- **C.** The server must use port 80 for every protocol
- **D.** The image digest is too long

**Answer: B.** Loopback binding limits the listener to that namespace; routing and policy must also permit access.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD15 — Infrastructure practice

**Self-assessment MCQ · Tier 3 · Weight 2**

What evidence can you demonstrate of building a container and repeatable infrastructure configuration?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently built and ran a versioned service from configuration **(1 points)**
- **D.** I also checked reproducibility and handled configuration or dependency failures **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html), [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

## Tier 4 — CI/CD and platform operations

Included in S1 through S4.

### CD16 — Kubernetes readiness

**Competency MCQ · Tier 4 · Weight 3**

What should a readiness probe primarily indicate?

- **A.** Whether the container should receive service traffic now
- **B.** Whether the developer has committed code
- **C.** Whether its log file is large
- **D.** Whether its image exists in a public registry

**Answer: A.** Readiness controls eligibility for traffic without necessarily restarting the container.

**Reference basis:** [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD17 — CI pipelines

**Competency MCQ · Tier 4 · Weight 3**

What is the main purpose of running automated tests on a proposed code change?

- **A.** Detect specified regressions before promotion
- **B.** Avoid using version control
- **C.** Prove that no unknown defect exists
- **D.** Replace all production monitoring

**Answer: A.** Tests provide evidence about covered behavior, not a universal correctness guarantee.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD18 — Configuration

**Competency MCQ · Tier 4 · Weight 3**

Which configuration change generally deserves the same review discipline as a code release?

- **A.** A production timeout or connection-limit change
- **B.** The name of a scratch notebook
- **C.** A personal terminal font
- **D.** A local editor color preference

**Answer: A.** Runtime configuration can change system behavior and reliability materially.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD19 — Kubernetes Service

**Competency MCQ · Tier 4 · Weight 3**

Why use a Service in front of replaceable pods?

- **A.** To guarantee zero request failures
- **B.** To serialize all database writes
- **C.** To provide stable discovery/routing over changing pod instances
- **D.** To make every pod's local disk durable

**Answer: C.** A Service decouples clients from individual pod lifetimes; readiness and application behavior still matter.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD20 — Delivery practice

**Self-assessment MCQ · Tier 4 · Weight 2**

What evidence can you demonstrate of building an automated delivery pipeline?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently implemented build, test, and deployment steps **(1 points)**
- **D.** I also controlled artifact promotion and tested a failed-release path **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

## Tier 5 — Reliability and security

Included in S1 through S5.

### CD21 — Least privilege

**Competency MCQ · Tier 5 · Weight 3**

A deployment job only needs to push to one registry repository. Which permission choice is best aligned with least privilege?

- **A.** Grant global administrator access
- **B.** Grant the specific required actions on that repository
- **C.** Allow deletion of every cloud resource
- **D.** Share a human root credential

**Answer: B.** Permissions should match the job's required scope.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD22 — Secrets

**Competency MCQ · Tier 5 · Weight 3**

Why should a secret not be committed to a repository even if the file is deleted later?

- **A.** It may remain in history and copies, requiring revocation/rotation
- **B.** Git always automatically revokes leaked credentials
- **C.** Deletion immediately clears every clone
- **D.** Only binary files can contain secrets

**Answer: A.** Removing a current file does not remove every historical or external copy.

**Reference basis:** [C6: GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

### CD23 — Reliability objectives

**Competency MCQ · Tier 5 · Weight 3**

What is an SLO?

- **A.** A list of developer salaries
- **B.** A defined target for a service-level indicator over a specified window
- **C.** A guarantee that no incident will occur
- **D.** The maximum length of a log line

**Answer: B.** An SLO specifies the desired reliability measured by an SLI.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD24 — Backups

**Competency MCQ · Tier 5 · Weight 3**

Why test a backup by restoring it?

- **A.** To check whether it can actually recover the required data and service
- **B.** To remove the need for access controls
- **C.** To make database replication synchronous
- **D.** To guarantee future backups will never fail

**Answer: A.** Backup existence alone does not establish recoverability.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD25 — Security practice

**Self-assessment MCQ · Tier 5 · Weight 2**

What evidence can you demonstrate of restricting workload permissions and secrets?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently used scoped credentials and controlled secret injection **(1 points)**
- **D.** I also tested denied operations and documented rotation or revocation procedures **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C6: GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

## Tier 6 — Observability and distributed failure

Included in S1 through S6.

### CD26 — Observability

**Competency MCQ · Tier 6 · Weight 3**

Which signal is most suitable for connecting one request's work across multiple services?

- **A.** Only a random log ID generated independently in every service
- **B.** Only an unrelated daily CPU average
- **C.** A distributed trace with propagated context
- **D.** Only the source file name

**Answer: C.** Trace context preserves relationships between operations.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD27 — Alerting

**Competency MCQ · Tier 6 · Weight 3**

Which alert is usually more directly actionable for an on-call team?

- **A.** Every routine container start
- **B.** A sustained breach of a user-facing error/latency objective with diagnostic context
- **C.** Every successful HTTP request
- **D.** An arbitrary log line count with no context

**Answer: B.** Alerts should identify conditions requiring timely intervention.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD28 — Retries

**Competency MCQ · Tier 6 · Weight 3**

Why add jitter to exponential backoff?

- **A.** To make requests idempotent automatically
- **B.** To guarantee successful completion
- **C.** To reduce synchronized retry bursts from many clients
- **D.** To eliminate the need for timeouts

**Answer: C.** Randomizing retry timing reduces coordination-induced load spikes.

**Reference basis:** [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD29 — Metrics

**Competency MCQ · Tier 6 · Weight 3**

Why can user IDs as metric labels be problematic?

- **A.** They remove the need for logs
- **B.** They can create very high time-series cardinality and resource cost
- **C.** They guarantee perfect anonymity
- **D.** They reduce all metrics to one series

**Answer: B.** Unbounded label values can multiply stored series and make metrics expensive.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD30 — Reliability practice

**Self-assessment MCQ · Tier 6 · Weight 2**

What evidence can you demonstrate of measuring and alerting on service behavior?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently instrumented relevant latency/error signals and an objective **(1 points)**
- **D.** I also tested an alert and used the evidence to investigate a failure **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

## Tier 7 — Capacity and recovery

Included in S1 through S7.

### CD31 — Recovery objectives

**Competency MCQ · Tier 7 · Weight 4**

Which statement correctly distinguishes RPO and RTO?

- **A.** RPO is CPU speed; RTO is network throughput
- **B.** RPO concerns tolerable data loss in time; RTO concerns time to restore service
- **C.** Both are the number of replicas
- **D.** RTO always guarantees zero data loss

**Answer: B.** Recovery objectives describe different dimensions of loss and restoration.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD32 — Capacity

**Competency MCQ · Tier 7 · Weight 4**

If one instance safely handles 100 requests/s at the required latency, what does a 250 requests/s load suggest before allowing headroom or failures?

- **A.** At least 3 such instances under ideal load distribution
- **B.** One instance regardless of latency
- **C.** Exactly 2 instances
- **D.** 250 instances by definition

**Answer: A.** Ceiling(250/100)=3 is the ideal capacity minimum; production requires additional constraints/headroom.

**Reference basis:** [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD33 — Stateless services

**Competency MCQ · Tier 7 · Weight 4**

Why externalize sessions when distributing requests across replaceable web instances?

- **A.** It guarantees the state store cannot fail
- **B.** It removes all authentication requirements
- **C.** Any eligible instance can access the required session state
- **D.** It eliminates every network call

**Answer: C.** External state avoids tying a session solely to one process, but introduces a dependency to manage.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD34 — Incident analysis

**Competency MCQ · Tier 7 · Weight 4**

What should a useful incident review prioritize?

- **A.** Deleting evidence to simplify the report
- **B.** Contributing conditions, impact, and concrete preventive or mitigative actions
- **C.** Only identifying one person to blame
- **D.** Only the length of the meeting

**Answer: B.** A systems-focused review supports learning and follow-up improvement.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD35 — Recovery practice

**Self-assessment MCQ · Tier 7 · Weight 2**

What evidence can you demonstrate of exercising a service recovery procedure?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I independently restored a backup or recovered a failed service in a test environment **(1 points)**
- **D.** I also measured recovery time/data loss and fixed gaps in the runbook **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

## Tier 8 — Advanced incident, scaling, deployment, and resilience reasoning

Included in S1 through S8.

### CD36 — Error budgets

**Competency MCQ · Tier 8 · Weight 4**

A time-based availability SLO is 99.9% over 30 days. Assuming every minute is in scope, how much unavailable time fits the budget?

- **A.** 4.32 minutes
- **B.** 30 minutes
- **C.** 432 minutes
- **D.** 43.2 minutes

**Answer: D.** 30×24×60×0.001 = 43.2 minutes.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD37 — Budget burn

**Competency MCQ · Tier 8 · Weight 4**

For a request-success SLO of 99.9%, the allowed error fraction is 0.1%. A period has 1% errors. What is the burn rate relative to that allowance?

- **A.** 100×
- **B.** 10×
- **C.** 1×
- **D.** 0.1×

**Answer: B.** 1% divided by 0.1% is 10; the observation window determines urgency.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD38 — Autoscaling calculation

**Competency MCQ · Tier 8 · Weight 4**

An HPA uses the simplified ratio rule with 4 current replicas, 75% observed CPU utilization, and a 50% target. Ignore tolerance, limits, stabilization, and missing metrics. What is the desired replica count?

- **A.** 8
- **B.** 4
- **C.** 6
- **D.** 3

**Answer: C.** ceil(4×75/50)=6 under the stated simplifications.

**Reference basis:** [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD39 — Resource requests

**Competency MCQ · Tier 8 · Weight 4**

CPU-based HPA utilization is computed relative to what for the relevant container resource metric?

- **A.** The number of image layers
- **B.** Configured CPU requests
- **C.** The TLS certificate expiry
- **D.** The registry upload size

**Answer: B.** Utilization targets rely on resource requests; absent or unsuitable requests can undermine scaling decisions.

**Reference basis:** [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD40 — Memory failures

**Competency MCQ · Tier 8 · Weight 4**

A container is repeatedly OOM-killed near its memory limit while CPU is low. What is the strongest next investigation?

- **A.** Treat every OOM termination as proof that the node has no free memory
- **B.** Raise only the CPU limit because CPU utilization always predicts memory pressure
- **C.** Measure memory use/leaks and workload peaks, then right-size or fix the workload
- **D.** Remove the memory limit without checking leaks or the node budget

**Answer: C.** CPU load does not diagnose memory exhaustion; peak memory and allocation behavior matter.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD41 — Slow startup

**Competency MCQ · Tier 8 · Weight 4**

An application needs 90 seconds to initialize, but an aggressive liveness probe kills it every 20 seconds. What directly addresses this startup loop?

- **A.** Use a readiness failure alone as a request to restart the container
- **B.** Keep liveness unchanged and make readiness always succeed
- **C.** Use an appropriate startup probe/startup allowance before liveness enforcement
- **D.** Double the replica count while keeping the same failing startup probe timings

**Answer: C.** Startup probes can defer liveness/readiness behavior until initialization succeeds.

**Reference basis:** [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD42 — Probe dependencies

**Competency MCQ · Tier 8 · Weight 4**

Every pod restarts when a shared database briefly slows because liveness checks query that database. What should be reconsidered?

- **A.** Increase the number of restart loops
- **B.** Make all liveness probes fail whenever any remote service is slow
- **C.** Restart the database for every HTTP request
- **D.** Use liveness to detect local unrecoverable failure; handle dependency health with suitable readiness/degraded behavior

**Answer: D.** A shared dependency outage should not automatically trigger synchronized local restarts.

**Reference basis:** [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD43 — Terraform concurrency

**Competency MCQ · Tier 8 · Weight 4**

Two operators apply changes to the same state concurrently. What protection is appropriate when supported by the backend?

- **A.** Keep independent state files for the same resources and merge them after both applies
- **B.** Shared state with locking and controlled apply concurrency
- **C.** Disable locking because the provider API guarantees an atomic whole-plan apply
- **D.** Rely on Git conflict detection to serialize all remote infrastructure changes

**Answer: B.** State locking protects concurrent writers from conflicting operations; operational controls still matter.

**Reference basis:** [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD44 — Infrastructure drift

**Competency MCQ · Tier 8 · Weight 4**

A console change modifies a managed resource outside Terraform. What is the best response before another production apply?

- **A.** Review refreshed state and the plan, then reconcile the intended configuration deliberately
- **B.** Delete the resource immediately without inspection
- **C.** Blindly apply an old saved plan indefinitely
- **D.** Assume the change can never be detected

**Answer: A.** Unreviewed drift may be reverted or conflict with intended changes; inspect before deciding.

**Reference basis:** [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD45 — CI cloud identity

**Competency MCQ · Tier 8 · Weight 4**

How can a supported CI platform obtain cloud access without storing a long-lived cloud key in the repository?

- **A.** Reuse one permanent token across every unrelated repository
- **B.** Publish the administrator key in an environment file
- **C.** Disable authentication for the cloud account
- **D.** Exchange a trusted OIDC identity for short-lived, scoped credentials with constrained claims

**Answer: D.** Federation reduces long-lived secret handling; trust conditions must bind the intended workload.

**Reference basis:** [C6: GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

### CD46 — Artifact promotion

**Competency MCQ · Tier 8 · Weight 4**

Staging tested image digest X, but production rebuilds the source and gets digest Y. What improves confidence in promotion?

- **A.** Promote the same verified immutable artifact, with environment-specific configuration kept separate
- **B.** Rebuild from the same commit with floating dependencies and assume the artifact is identical
- **C.** Promote the same mutable tag while allowing the registry contents behind it to change
- **D.** Test one architecture image and deploy another without equivalent validation

**Answer: A.** Build differences can arise from dependencies and tooling; artifact identity makes promotion explicit.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD47 — Canary interpretation

**Competency MCQ · Tier 8 · Weight 4**

A canary receives only 1% of traffic from one easy region. Its average latency improves. What evidence is missing before broad rollout?

- **A.** Representative traffic and relevant tail/error guardrails across affected populations
- **B.** Running the same biased canary longer proves that untested populations will behave identically
- **C.** Average latency alone is sufficient when at least one request succeeded
- **D.** A small percentage automatically makes a sample representative of every traffic class

**Answer: A.** A biased sample and average-only metric can conceal regressions elsewhere.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD48 — Release and schema

**Competency MCQ · Tier 8 · Weight 4**

A new service drops a column still required by the rollback version. Why is binary rollback alone insufficient?

- **A.** Binary rollback always recreates deleted data
- **B.** The old binary may no longer work with the changed data schema
- **C.** The problem is only DNS TTL
- **D.** Containers cannot access databases

**Answer: B.** Application and data compatibility must be planned together.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD49 — Recovery evidence

**Competency MCQ · Tier 8 · Weight 4**

A team has daily backups but has never restored them. It claims a 15-minute RTO. What would substantiate the claim?

- **A.** A timed restore/failover exercise including dependencies, validation, and access requirements
- **B.** Multiply the database size by advertised disk throughput and omit dependency recovery
- **C.** Treat successful replication as proof that all backup restores meet the objective
- **D.** Use the backup creation duration as the complete service restoration duration

**Answer: A.** Recovery duration must be demonstrated through the actual restoration path.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD50 — Failure domains

**Competency MCQ · Tier 8 · Weight 4**

Six replicas all run on one physical node. What risk remains despite the replica count?

- **A.** Each replica is an independent failure domain even when all share one node
- **B.** One node failure can remove all six replicas
- **C.** Six pod objects imply six persistent copies of every local data file
- **D.** A Service automatically relocates live processes before a node fails

**Answer: B.** Availability depends on placement and shared dependencies, not only process count.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD51 — Queue capacity

**Competency MCQ · Tier 8 · Weight 4**

A queue receives 120 jobs/s and workers sustainably finish 100 jobs/s. Starting empty, what is the idealized backlog after 5 minutes, ignoring retries and variability?

- **A.** 30,000 jobs
- **B.** 36,000 jobs
- **C.** 600 jobs
- **D.** 6,000 jobs

**Answer: D.** The backlog grows at 20 jobs/s for 300 seconds.

**Reference basis:** [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD52 — Retry amplification

**Competency MCQ · Tier 8 · Weight 4**

A chain has three retrying layers. Each permits 3 total attempts for each downstream call. Under the worst aligned failure pattern, how many calls can reach the deepest dependency per original request?

- **A.** 3
- **B.** 81
- **C.** 9
- **D.** 27

**Answer: D.** Attempts can multiply: 3×3×3. Central retry budgets and deadlines can reduce amplification.

**Reference basis:** [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD53 — Deadlines

**Competency MCQ · Tier 8 · Weight 4**

A caller's total deadline is 1 second, but each of three sequential dependency calls has its own 1-second timeout. What is the problem?

- **A.** Increasing every timeout guarantees the deadline
- **B.** Only CPU utilization determines elapsed time
- **C.** Local timeouts can collectively exceed the end-to-end deadline unless remaining time is propagated/budgeted
- **D.** Three 1-second timeouts automatically fit in 1 second

**Answer: C.** Timeouts should respect the remaining request budget and cancellation behavior.

**Reference basis:** [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD54 — At-least-once work

**Competency MCQ · Tier 8 · Weight 4**

A worker commits a result then crashes before acknowledging its queue message. How should a retry avoid duplicate effects?

- **A.** Assume the broker knows the external commit automatically
- **B.** Generate a new business operation ID on every delivery
- **C.** Acknowledge every message before processing regardless of loss risk
- **D.** Use durable operation identity and an idempotent or transactional effect protocol

**Answer: D.** Redelivery after an uncertain acknowledgment is expected; effect handling must tolerate it.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD55 — Layered diagnosis

**Competency MCQ · Tier 8 · Weight 4**

DNS resolution succeeds and TCP connects, but the TLS handshake fails with a hostname mismatch. What should be checked first?

- **A.** The requested hostname and the certificate's valid names/configuration
- **B.** Only the SQL query planner
- **C.** The number of CPU cores
- **D.** Only the container's working directory

**Answer: A.** The observed failure is at certificate identity validation, after name resolution and transport setup.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### CD56 — Storage placement

**Competency MCQ · Tier 8 · Weight 4**

A pod is rescheduled to another zone while its persistent volume is restricted to the original zone. What must scheduling/storage design account for?

- **A.** Changing the pod label automatically copies its volume into the new zone
- **B.** A multi-zone Service overrides all volume attachment restrictions
- **C.** Volume topology and attachment constraints, with an appropriate recovery/storage strategy
- **D.** Adding compute replicas makes a zone-local volume synchronously replicated

**Answer: C.** Compute portability does not imply cross-zone storage availability.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD57 — Graceful shutdown

**Competency MCQ · Tier 8 · Weight 4**

A rolling deployment kills workers while requests are in flight. What shutdown behavior best reduces avoidable failures?

- **A.** Sleep forever after termination is requested
- **B.** Stop accepting new work, drain within a bounded grace period, and terminate with appropriate retry semantics
- **C.** Accept more work until the final kill signal
- **D.** Delete health checks and leave all work untracked

**Answer: B.** Draining and bounded termination coordinate routing and application completion; long work may need durable handoff.

**Reference basis:** [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/), [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD58 — Capstone evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of operating a reproducibly deployed cloud service?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I have a versioned service with IaC, delivery automation, and monitoring **(1 points)**
- **D.** I also tested representative load, failure handling, access controls, and recovery with independent review **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD59 — Incident evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of investigating an operational incident or injected failure?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I reproduced a failure and documented its cause and mitigation **(1 points)**
- **D.** I also verified the mitigation and created actionable follow-up checks or runbook changes **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD60 — Tradeoff evidence

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of evaluating cost and reliability alternatives?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I compared alternatives using measured performance and resource cost **(1 points)**
- **D.** I also documented failure-domain and recovery tradeoffs against explicit service objectives **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

## Source register

- **MS.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **AC.** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **C1.** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)
- **C2.** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- **C3.** [Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)
- **C4.** [Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)
- **C5.** [Terraform state](https://developer.hashicorp.com/terraform/language/state)
- **C6.** [GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)
- **C7.** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)
- **C8.** [Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

## App integration

The JSON stores each question once and gives each semester an exact ID list. Preserve question and option IDs and the bank version. Score on the Spring server; React must not receive `correctOptionId` or `rationale` during an attempt. Self-assessment option fractions may be displayed. MongoDB can store canonical questions and reference them from surveys. Store attempt responses, raw points, evidence status, and version together. If options are shuffled at runtime, score by option ID. Do not silently change weights or inherited wording by semester.

Structural checks verify all seven proper-subset relationships, 25 items in S8, four unique options per item, valid answer keys and references, scoring totals, and identical inherited content across forms. These checks do not establish assessment validity.
