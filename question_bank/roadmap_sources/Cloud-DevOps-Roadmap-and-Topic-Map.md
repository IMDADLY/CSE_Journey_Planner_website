# Cloud Computing and DevOps — curated topic map and roadmap

Survey bank version 1 · Mapping/courses reviewed 20 October 2026 · 60/60 items mapped.

[Planning rules](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Roadmap-Logic-and-Implementation-Plan.md) · [Course catalog](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Course-Catalog.md)

## How to use this guide

Confirm a suspected topic gap, check its prerequisites, study the relevant parts of the linked course(s), and complete the topic bridge below. For a narrow gap, select units addressing the named focus; do not require every linked course in full. Each bridge combines the study focus, supporting reading and a new practical task. The bridge is a proposed local learning unit, not a provider-certified course. Provider-level syllabus coverage was checked; exact lesson IDs and the assessment bank still need curation/versioning in the production CMS.

Self-assessment assignments ask for evidence. A confident response does not exempt the learner from demonstrating a skill. Broad theoretical courses intentionally have narrower labs added for tooling-specific details. Study-focus labels are curator labels rather than quoted provider lesson names.

## Prerequisite sequence and exit evidence

| Node | Suggested semester | Prerequisites | Course/resources | Estimated selected hours | Exit evidence |
|---|---:|---|---|---:|---|
| CD-L: Linux and shell foundations | S1 | Entry diagnostic | [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) | 45 | Diagnose a process, permission and resource problem using recorded shell commands. |
| CD-N: Networking and transport | S2 | CD-L | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | 40 | Trace DNS, TCP and TLS failures separately and demonstrate correct service binding. |
| CD-C: Cloud architecture foundations | S2 | CD-L | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | 30 | Explain identity, shared responsibility, storage and failure domains for a small service. |
| CD-B: Containers, infrastructure and delivery | S3 | CD-N, CD-C | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | 50 | Build a digest-pinned container and reviewed infrastructure/deployment pipeline. |
| CD-K: Kubernetes operations | S4 | CD-B | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | 55 | Deploy locally and demonstrate probes, resource settings, scaling, placement and draining. |
| CD-I: Workload identity and secrets | S4 | CD-B | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | 25 | Use scoped workload credentials and demonstrate denied operations plus secret rotation. |
| CD-S: Reliability and observability | S5 | CD-K, CD-I | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | 55 | Define measurable SLOs, calculate budget burn and diagnose an injected incident from traces/metrics. |
| CD-R: Resilience, recovery and capacity | S6 | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | 50 | Run a timed recovery exercise and overload test with documented RPO/RTO and retry limits. |

**Planning estimate: 350 hours** for selected specialization units and their topic labs. Add roughly 80–120 hours for an integrated capstone and 100 hours for shared foundation/interview review as needed. These are curator estimates, not provider-advertised durations. Do not add every topic lab again to the node estimate. Verified prior learning reduces the plan.

## Semester blueprint

| Semester | Suggested focus | Required progress evidence |
|---|---|---|
| S1 | CD-L Linux and shell foundations | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S2 | CD-N Networking and transport; CD-C Cloud architecture foundations | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S3 | CD-B Containers, infrastructure and delivery | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S4 | CD-K Kubernetes operations; CD-I Workload identity and secrets | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S5 | CD-S Reliability and observability | Pass the relevant node gates; preserve code, calculations and test evidence. Start internship/team-project applications and recurring interview practice. |
| S6 | CD-R Resilience, recovery and capacity | Pass the relevant node gates; preserve code, calculations and test evidence. Produce an integrated project or reviewed internship contribution. |
| S7 | Capstone refinement, mock interviews and targeted gap closure | Pass the relevant node gates; preserve code, calculations and test evidence. Have a defensible portfolio ready before recruitment; move this earlier if the college calendar requires it. |
| S8 | Capstone refinement, mock interviews and targeted gap closure | Complete role-specific readiness gates, defend the capstone, and continue applications/interviews; list any unmet requirements. |

## Exact survey-topic mapping

Each row is one primary mapping. Course resources may recur across rows; the planner schedules overlapping units once. The numbered question is a diagnostic trigger, not the only assessment of the topic.

| Question | Topic / study focus | Learning node | Curated course/resources | Topic bridge |
|---|---|---|---|---|
| CD01 | Cloud foundations (technical) | CD-C | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd01) |
| CD02 | Responsibility (technical) | CD-C | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd02) |
| CD03 | Operating systems (technical) | CD-L | [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) | [Task and reading](#bridge-cd03) |
| CD04 | Networking (technical) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd04) |
| CD05 | Systems practice (practice) | CD-L | [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) | [Task and reading](#bridge-cd05) |
| CD06 | Linux permissions (technical) | CD-L | [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) | [Task and reading](#bridge-cd06) |
| CD07 | DNS (technical) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd07) |
| CD08 | TLS (technical) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd08) |
| CD09 | Version control (technical) | CD-B | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd09) |
| CD10 | Networking practice (practice) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd10) |
| CD11 | Containers (technical) | CD-B | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd11) |
| CD12 | Infrastructure as code (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) | [Task and reading](#bridge-cd12) |
| CD13 | Image identity (technical) | CD-B | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd13) |
| CD14 | Network ports (technical) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd14) |
| CD15 | Infrastructure practice (practice) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd15) |
| CD16 | Kubernetes readiness (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd16) |
| CD17 | CI pipelines (technical) | CD-B | [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd17) |
| CD18 | Configuration (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd18) |
| CD19 | Kubernetes Service (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd19) |
| CD20 | Delivery practice (practice) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd20) |
| CD21 | Least privilege (technical) | CD-I | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd21) |
| CD22 | Secrets (technical) | CD-I | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd22) |
| CD23 | Reliability objectives (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd23) |
| CD24 | Backups (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd24) |
| CD25 | Security practice (practice) | CD-I | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd25) |
| CD26 | Observability (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd26) |
| CD27 | Alerting (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd27) |
| CD28 | Retries (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd28) |
| CD29 | Metrics (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd29) |
| CD30 | Reliability practice (practice) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd30) |
| CD31 | Recovery objectives (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd31) |
| CD32 | Capacity (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd32) |
| CD33 | Stateless services (technical) | CD-C | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd33) |
| CD34 | Incident analysis (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd34) |
| CD35 | Recovery practice (practice) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd35) |
| CD36 | Error budgets (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd36) |
| CD37 | Budget burn (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd37) |
| CD38 | Autoscaling calculation (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd38) |
| CD39 | Resource requests (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd39) |
| CD40 | Memory failures (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd40) |
| CD41 | Slow startup (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd41) |
| CD42 | Probe dependencies (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd42) |
| CD43 | Terraform concurrency (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) | [Task and reading](#bridge-cd43) |
| CD44 | Infrastructure drift (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) | [Task and reading](#bridge-cd44) |
| CD45 | CI cloud identity (technical) | CD-I | [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd45) |
| CD46 | Artifact promotion (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd46) |
| CD47 | Canary interpretation (technical) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd47) |
| CD48 | Release and schema (technical) | CD-B | [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) | [Task and reading](#bridge-cd48) |
| CD49 | Recovery evidence (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd49) |
| CD50 | Failure domains (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd50) |
| CD51 | Queue capacity (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd51) |
| CD52 | Retry amplification (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd52) |
| CD53 | Deadlines (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd53) |
| CD54 | At-least-once work (technical) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd54) |
| CD55 | Layered diagnosis (technical) | CD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-cd55) |
| CD56 | Storage placement (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd56) |
| CD57 | Graceful shutdown (technical) | CD-K | [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) | [Task and reading](#bridge-cd57) |
| CD58 | Capstone evidence (practice) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd58) |
| CD59 | Incident evidence (practice) | CD-S | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) | [Task and reading](#bridge-cd59) |
| CD60 | Tradeoff evidence (practice) | CD-R | [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) | [Task and reading](#bridge-cd60) |

## Topic bridge tasks

For each task: (1) use the selected course foundations; (2) consult the relevant technical references; (3) complete the task with changed inputs/data rather than copying the original MCQ; (4) submit reproducible evidence and explain assumptions; (5) pass a fresh assessment. If the supporting reference is a broad curriculum or role guide, use the selected course for instruction and the task as the concrete learning target.

### Bridge CD01 — Cloud foundations

<a id="bridge-cd01"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Compare horizontal and vertical scaling for a small workload and failure model.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD02 — Responsibility

<a id="bridge-cd02"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Create a shared-responsibility table for a managed database deployment.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD03 — Operating systems

<a id="bridge-cd03"></a>

**Selected course(s):** [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

**Practice:** Inspect process state, resource use and termination from the shell.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD04 — Networking

<a id="bridge-cd04"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Trace a packet route and distinguish endpoint addressing from user identity.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD05 — Systems practice

<a id="bridge-cd05"></a>

**Selected course(s):** [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

**Practice:** Produce an independently explainable artifact for this practice topic. Diagnose a process, permission and resource problem using recorded shell commands.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD06 — Linux permissions

<a id="bridge-cd06"></a>

**Selected course(s):** [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

**Practice:** Predict and test owner/group/other access for several file modes.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD07 — DNS

<a id="bridge-cd07"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Diagnose a missing/wrong DNS record separately from transport failure.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD08 — TLS

<a id="bridge-cd08"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Inspect a TLS chain and hostname check in a local test service.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD09 — Version control

<a id="bridge-cd09"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Review and roll back an infrastructure configuration change in Git.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD10 — Networking practice

<a id="bridge-cd10"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Produce an independently explainable artifact for this practice topic. Trace DNS, TCP and TLS failures separately and demonstrate correct service binding.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD11 — Containers

<a id="bridge-cd11"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Inspect container namespaces, host-kernel sharing and resource isolation.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD12 — Infrastructure as code

<a id="bridge-cd12"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

**Practice:** Provision and destroy a small local or sandbox infrastructure configuration.

**Supporting reading:** [Terraform state](https://developer.hashicorp.com/terraform/language/state)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD13 — Image identity

<a id="bridge-cd13"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Prove that a mutable tag can change while a content digest identifies one artifact.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD14 — Network ports

<a id="bridge-cd14"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Compare loopback and reachable-interface binding in a container network.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD15 — Infrastructure practice

<a id="bridge-cd15"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a digest-pinned container and reviewed infrastructure/deployment pipeline.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html); [Terraform state](https://developer.hashicorp.com/terraform/language/state)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD16 — Kubernetes readiness

<a id="bridge-cd16"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Demonstrate readiness failure removing a pod from service traffic without assuming a restart.

**Supporting reading:** [Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD17 — CI pipelines

<a id="bridge-cd17"></a>

**Selected course(s):** [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Introduce a regression and show an automated pipeline blocking promotion.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD18 — Configuration

<a id="bridge-cd18"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Test the effect of a timeout/connection-limit configuration change.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD19 — Kubernetes Service

<a id="bridge-cd19"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Replace pods and show how a Service preserves discovery of eligible endpoints.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD20 — Delivery practice

<a id="bridge-cd20"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a digest-pinned container and reviewed infrastructure/deployment pipeline.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD21 — Least privilege

<a id="bridge-cd21"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Grant a job only required resource actions and test a prohibited operation.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD22 — Secrets

<a id="bridge-cd22"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Simulate a disclosed test secret and exercise revocation plus replacement.

**Supporting reading:** [GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD23 — Reliability objectives

<a id="bridge-cd23"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Define an SLI, an SLO and a measurement window for a user journey.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD24 — Backups

<a id="bridge-cd24"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Restore a test backup and verify service-level data consistency.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD25 — Security practice

<a id="bridge-cd25"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Produce an independently explainable artifact for this practice topic. Use scoped workload credentials and demonstrate denied operations plus secret rotation.

**Supporting reading:** [GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD26 — Observability

<a id="bridge-cd26"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Trace a request through multiple services using propagated context.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD27 — Alerting

<a id="bridge-cd27"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Trigger a user-impacting alert and document its response/runbook.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD28 — Retries

<a id="bridge-cd28"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Compare synchronized retries with jittered bounded backoff under overload.

**Supporting reading:** [Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD29 — Metrics

<a id="bridge-cd29"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Estimate metric-series growth before and after adding a high-cardinality label.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD30 — Reliability practice

<a id="bridge-cd30"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Produce an independently explainable artifact for this practice topic. Define measurable SLOs, calculate budget burn and diagnose an injected incident from traces/metrics.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD31 — Recovery objectives

<a id="bridge-cd31"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Specify RPO and RTO independently and measure both in an exercise.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD32 — Capacity

<a id="bridge-cd32"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Calculate capacity with headroom and one-instance failure, then test the estimate.

**Supporting reading:** [Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD33 — Stateless services

<a id="bridge-cd33"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Move session state out of one process and test replacement/failure behavior.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD34 — Incident analysis

<a id="bridge-cd34"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Write a blameless incident timeline with contributing conditions and tested follow-up actions.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD35 — Recovery practice

<a id="bridge-cd35"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Produce an independently explainable artifact for this practice topic. Run a timed recovery exercise and overload test with documented RPO/RTO and retry limits.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD36 — Error budgets

<a id="bridge-cd36"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Calculate time- and request-based error budgets for different objectives.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD37 — Budget burn

<a id="bridge-cd37"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Calculate budget burn for two windows and choose an alert response.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD38 — Autoscaling calculation

<a id="bridge-cd38"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Compute the simplified HPA ratio and compare it with an actual controlled scaling run.

**Supporting reading:** [Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD39 — Resource requests

<a id="bridge-cd39"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Change resource requests and explain the effect on utilization-based autoscaling.

**Supporting reading:** [Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD40 — Memory failures

<a id="bridge-cd40"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Distinguish memory leaks, workload peaks and node pressure in an OOM investigation.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD41 — Slow startup

<a id="bridge-cd41"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Configure startup/readiness/liveness behavior for a deliberately slow-starting service.

**Supporting reading:** [Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD42 — Probe dependencies

<a id="bridge-cd42"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Inject a dependency slowdown and avoid turning it into a restart storm.

**Supporting reading:** [Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD43 — Terraform concurrency

<a id="bridge-cd43"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

**Practice:** Attempt concurrent infrastructure changes against a locking backend in a safe sandbox.

**Supporting reading:** [Terraform state](https://developer.hashicorp.com/terraform/language/state)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD44 — Infrastructure drift

<a id="bridge-cd44"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

**Practice:** Introduce drift, inspect the refreshed plan and reconcile the intended state.

**Supporting reading:** [Terraform state](https://developer.hashicorp.com/terraform/language/state)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD45 — CI cloud identity

<a id="bridge-cd45"></a>

**Selected course(s):** [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Configure a narrowly scoped OIDC trust relationship for a test delivery workflow.

**Supporting reading:** [GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD46 — Artifact promotion

<a id="bridge-cd46"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Promote the same artifact digest across test environments with separate configuration.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD47 — Canary interpretation

<a id="bridge-cd47"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Design a representative canary with tail-latency and error guardrails.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD48 — Release and schema

<a id="bridge-cd48"></a>

**Selected course(s):** [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials); [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

**Practice:** Rehearse a schema change that remains compatible with the rollback version.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD49 — Recovery evidence

<a id="bridge-cd49"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Time recovery including credentials, dependencies and data validation.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD50 — Failure domains

<a id="bridge-cd50"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Spread replicas across failure domains and exercise one domain failure.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD51 — Queue capacity

<a id="bridge-cd51"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Calculate queue growth and verify it with a controlled producer/consumer experiment.

**Supporting reading:** [Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD52 — Retry amplification

<a id="bridge-cd52"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Trace retry amplification across layers and enforce one bounded retry budget.

**Supporting reading:** [Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD53 — Deadlines

<a id="bridge-cd53"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Propagate a deadline and demonstrate cancellation when the request budget expires.

**Supporting reading:** [Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD54 — At-least-once work

<a id="bridge-cd54"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Crash after a committed queue effect and verify retry-safe processing.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD55 — Layered diagnosis

<a id="bridge-cd55"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Diagnose a certificate hostname mismatch after successful DNS/TCP setup.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD56 — Storage placement

<a id="bridge-cd56"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Test scheduling with zone-restricted storage and document recovery constraints.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD57 — Graceful shutdown

<a id="bridge-cd57"></a>

**Selected course(s):** [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

**Practice:** Drain in-flight work during rolling replacement and measure failed/retried requests.

**Supporting reading:** [Kubernetes concepts](https://kubernetes.io/docs/concepts/); [Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge CD58 — Capstone evidence

<a id="bridge-cd58"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Produce an independently explainable artifact for this practice topic. Run a timed recovery exercise and overload test with documented RPO/RTO and retry limits.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD59 — Incident evidence

<a id="bridge-cd59"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

**Practice:** Produce an independently explainable artifact for this practice topic. Define measurable SLOs, calculate budget burn and diagnose an injected incident from traces/metrics.

**Supporting reading:** [Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge CD60 — Tradeoff evidence

<a id="bridge-cd60"></a>

**Selected course(s):** [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/); [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

**Practice:** Produce an independently explainable artifact for this practice topic. Run a timed recovery exercise and overload test with documented RPO/RTO and retry limits.

**Supporting reading:** [AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.
