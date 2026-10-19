// Cloud Computing & DevOps Nested Competency Question Bank (CD01 - CD60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (CD36–CD60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['CD01', 'CD60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['CD06', 'CD60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['CD11', 'CD60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['CD16', 'CD60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['CD21', 'CD60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['CD26', 'CD60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['CD31', 'CD60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['CD36', 'CD60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    "1": "Systems and cloud foundations",
    "2": "Linux, networking, and Git",
    "3": "Containers and infrastructure automation",
    "4": "CI/CD and platform operations",
    "5": "Reliability and security",
    "6": "Observability and distributed failure",
    "7": "Capacity and recovery",
    "8": "Advanced incident, scaling, deployment, and resilience reasoning"
};

export const CLOUD_QUESTIONS = [
    {
        "id": "CD01",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Cloud foundations",
        "skillTag": "Cloud foundations",
        "weight": 2,
        "questionText": "What does horizontal scaling usually mean?",
        "options": [
            "Giving one process a longer variable name",
            "Replacing every network request with a file",
            "Adding more service instances",
            "Increasing only one instance's CPU size"
        ],
        "correctOptionIndex": 2,
        "explanation": "Horizontal scaling adds instances; vertical scaling changes the resources of an instance.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD02",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Responsibility",
        "skillTag": "Responsibility",
        "weight": 2,
        "questionText": "When using a managed database, what responsibility normally remains with the application team?",
        "options": [
            "Controlling the provider's employees' office access",
            "Maintaining the provider's physical building",
            "Manufacturing the storage drives",
            "Choosing appropriate data access permissions and protecting application credentials"
        ],
        "correctOptionIndex": 3,
        "explanation": "Managed infrastructure does not remove responsibility for application identities and data access.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD03",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Operating systems",
        "skillTag": "Operating systems",
        "weight": 2,
        "questionText": "What is a process?",
        "options": [
            "A source-code comment",
            "A hardware rack label",
            "An executing program with associated resources",
            "A DNS record type"
        ],
        "correctOptionIndex": 2,
        "explanation": "A process is a runtime execution entity managed by the operating system.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "CD04",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Networking",
        "skillTag": "Networking",
        "weight": 2,
        "questionText": "What does an IP address primarily identify in IP communication?",
        "options": [
            "An application's Git commit",
            "A TLS certificate's private key",
            "A network interface/addressable endpoint within the relevant network context",
            "A permanent human identity"
        ],
        "correctOptionIndex": 2,
        "explanation": "IP addressing supports network delivery; it is not a reliable user identity.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "CD05",
        "tier": 1,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Systems practice",
        "skillTag": "Systems practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of using a shell to inspect processes, files, and networking?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently diagnosed a basic process, permission, or connection issue",
            "I also recorded reproducible commands and explained the cause and fix"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "CD06",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Linux permissions",
        "skillTag": "Linux permissions",
        "weight": 2,
        "questionText": "For a regular file, what do permissions 640 grant to group members?",
        "options": [
            "Read and write",
            "Read only",
            "Execute only",
            "No permissions"
        ],
        "correctOptionIndex": 1,
        "explanation": "The group digit 4 represents read permission; owner 6 means read/write.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "CD07",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "DNS",
        "skillTag": "DNS",
        "weight": 2,
        "questionText": "What is the main purpose of a DNS lookup for an A record?",
        "options": [
            "Allocate CPU to a container",
            "Resolve a name to an IPv4 address",
            "Encrypt an HTTP body",
            "Authenticate a database transaction"
        ],
        "correctOptionIndex": 1,
        "explanation": "An A record maps a domain name to an IPv4 address.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "CD08",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "TLS",
        "skillTag": "TLS",
        "weight": 2,
        "questionText": "What does a correctly validated TLS connection provide?",
        "options": [
            "Transport confidentiality/integrity and authentication of the peer described by its certificate",
            "Automatic authorization for every API action",
            "Guaranteed application correctness",
            "Permanent deletion of all logs"
        ],
        "correctOptionIndex": 0,
        "explanation": "TLS protects the connection; business permissions and application logic remain separate.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "CD09",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Version control",
        "skillTag": "Version control",
        "weight": 2,
        "questionText": "Why review infrastructure changes in version control?",
        "options": [
            "To avoid storing any configuration",
            "To guarantee no outage can occur",
            "To replace runtime monitoring",
            "To make intended changes traceable and reviewable"
        ],
        "correctOptionIndex": 3,
        "explanation": "Version control preserves proposed changes and their history; it does not replace testing.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD10",
        "tier": 2,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Networking practice",
        "skillTag": "Networking practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of configuring and testing a small networked service?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently configured addressing, listening ports, and connectivity checks",
            "I also distinguished DNS, transport, and application failures using evidence"
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
        "id": "CD11",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Containers",
        "skillTag": "Containers",
        "weight": 3,
        "questionText": "Compared with a conventional virtual machine, what does a typical Linux container share with its host?",
        "options": [
            "The host kernel",
            "Every user's password",
            "Every process's private memory",
            "A separate physical CPU exclusively"
        ],
        "correctOptionIndex": 0,
        "explanation": "Containers isolate processes using the host kernel; isolation details depend on configuration.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD12",
        "tier": 3,
        "type": "competency",
        "tag": "CODING",
        "topic": "Infrastructure as code",
        "skillTag": "Infrastructure as code",
        "weight": 3,
        "questionText": "What is an infrastructure-as-code configuration primarily intended to describe?",
        "options": [
            "Infrastructure resources and their intended configuration in a repeatable form",
            "Only application test data",
            "Only billing receipts",
            "Only a screenshot of a console"
        ],
        "correctOptionIndex": 0,
        "explanation": "Declarative or programmable definitions support reproducible infrastructure changes.",
        "reference": "C5: Terraform state"
    },
    {
        "id": "CD13",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Image identity",
        "skillTag": "Image identity",
        "weight": 3,
        "questionText": "Why deploy a container image by an immutable digest when reproducibility matters?",
        "options": [
            "A digest identifies specific image content",
            "It increases application permissions",
            "It removes all vulnerabilities automatically",
            "It makes the image run without a kernel"
        ],
        "correctOptionIndex": 0,
        "explanation": "Mutable tags can point to different content over time; a digest fixes artifact identity.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD14",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Network ports",
        "skillTag": "Network ports",
        "weight": 3,
        "questionText": "A containerized server listens only on 127.0.0.1 inside its network namespace. Why might traffic from other pods fail?",
        "options": [
            "All containers forbid networking",
            "The server is not listening on an interface reachable from those pods",
            "The server must use port 80 for every protocol",
            "The image digest is too long"
        ],
        "correctOptionIndex": 1,
        "explanation": "Loopback binding limits the listener to that namespace; routing and policy must also permit access.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD15",
        "tier": 3,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Infrastructure practice",
        "skillTag": "Infrastructure practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a container and repeatable infrastructure configuration?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently built and ran a versioned service from configuration",
            "I also checked reproducibility and handled configuration or dependency failures"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD16",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Kubernetes readiness",
        "skillTag": "Kubernetes readiness",
        "weight": 3,
        "questionText": "What should a readiness probe primarily indicate?",
        "options": [
            "Whether the container should receive service traffic now",
            "Whether the developer has committed code",
            "Whether its log file is large",
            "Whether its image exists in a public registry"
        ],
        "correctOptionIndex": 0,
        "explanation": "Readiness controls eligibility for traffic without necessarily restarting the container.",
        "reference": "C3: Kubernetes probes"
    },
    {
        "id": "CD17",
        "tier": 4,
        "type": "competency",
        "tag": "ARCHITECTURE",
        "topic": "CI pipelines",
        "skillTag": "CI pipelines",
        "weight": 3,
        "questionText": "What is the main purpose of running automated tests on a proposed code change?",
        "options": [
            "Detect specified regressions before promotion",
            "Avoid using version control",
            "Prove that no unknown defect exists",
            "Replace all production monitoring"
        ],
        "correctOptionIndex": 0,
        "explanation": "Tests provide evidence about covered behavior, not a universal correctness guarantee.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD18",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Configuration",
        "skillTag": "Configuration",
        "weight": 3,
        "questionText": "Which configuration change generally deserves the same review discipline as a code release?",
        "options": [
            "A production timeout or connection-limit change",
            "The name of a scratch notebook",
            "A personal terminal font",
            "A local editor color preference"
        ],
        "correctOptionIndex": 0,
        "explanation": "Runtime configuration can change system behavior and reliability materially.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD19",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Kubernetes Service",
        "skillTag": "Kubernetes Service",
        "weight": 3,
        "questionText": "Why use a Service in front of replaceable pods?",
        "options": [
            "To guarantee zero request failures",
            "To serialize all database writes",
            "To provide stable discovery/routing over changing pod instances",
            "To make every pod's local disk durable"
        ],
        "correctOptionIndex": 2,
        "explanation": "A Service decouples clients from individual pod lifetimes; readiness and application behavior still matter.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD20",
        "tier": 4,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Delivery practice",
        "skillTag": "Delivery practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building an automated delivery pipeline?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented build, test, and deployment steps",
            "I also controlled artifact promotion and tested a failed-release path"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD21",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Least privilege",
        "skillTag": "Least privilege",
        "weight": 3,
        "questionText": "A deployment job only needs to push to one registry repository. Which permission choice is best aligned with least privilege?",
        "options": [
            "Grant global administrator access",
            "Grant the specific required actions on that repository",
            "Allow deletion of every cloud resource",
            "Share a human root credential"
        ],
        "correctOptionIndex": 1,
        "explanation": "Permissions should match the job's required scope.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD22",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Secrets",
        "skillTag": "Secrets",
        "weight": 3,
        "questionText": "Why should a secret not be committed to a repository even if the file is deleted later?",
        "options": [
            "It may remain in history and copies, requiring revocation/rotation",
            "Git always automatically revokes leaked credentials",
            "Deletion immediately clears every clone",
            "Only binary files can contain secrets"
        ],
        "correctOptionIndex": 0,
        "explanation": "Removing a current file does not remove every historical or external copy.",
        "reference": "C6: GitHub Actions OpenID Connect"
    },
    {
        "id": "CD23",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Reliability objectives",
        "skillTag": "Reliability objectives",
        "weight": 3,
        "questionText": "What is an SLO?",
        "options": [
            "A list of developer salaries",
            "A defined target for a service-level indicator over a specified window",
            "A guarantee that no incident will occur",
            "The maximum length of a log line"
        ],
        "correctOptionIndex": 1,
        "explanation": "An SLO specifies the desired reliability measured by an SLI.",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD24",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Backups",
        "skillTag": "Backups",
        "weight": 3,
        "questionText": "Why test a backup by restoring it?",
        "options": [
            "To check whether it can actually recover the required data and service",
            "To remove the need for access controls",
            "To make database replication synchronous",
            "To guarantee future backups will never fail"
        ],
        "correctOptionIndex": 0,
        "explanation": "Backup existence alone does not establish recoverability.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD25",
        "tier": 5,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Security practice",
        "skillTag": "Security practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of restricting workload permissions and secrets?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently used scoped credentials and controlled secret injection",
            "I also tested denied operations and documented rotation or revocation procedures"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C6: GitHub Actions OpenID Connect"
    },
    {
        "id": "CD26",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Observability",
        "skillTag": "Observability",
        "weight": 3,
        "questionText": "Which signal is most suitable for connecting one request's work across multiple services?",
        "options": [
            "Only a random log ID generated independently in every service",
            "Only an unrelated daily CPU average",
            "A distributed trace with propagated context",
            "Only the source file name"
        ],
        "correctOptionIndex": 2,
        "explanation": "Trace context preserves relationships between operations.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD27",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Alerting",
        "skillTag": "Alerting",
        "weight": 3,
        "questionText": "Which alert is usually more directly actionable for an on-call team?",
        "options": [
            "Every routine container start",
            "A sustained breach of a user-facing error/latency objective with diagnostic context",
            "Every successful HTTP request",
            "An arbitrary log line count with no context"
        ],
        "correctOptionIndex": 1,
        "explanation": "Alerts should identify conditions requiring timely intervention.",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD28",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Retries",
        "skillTag": "Retries",
        "weight": 3,
        "questionText": "Why add jitter to exponential backoff?",
        "options": [
            "To make requests idempotent automatically",
            "To guarantee successful completion",
            "To reduce synchronized retry bursts from many clients",
            "To eliminate the need for timeouts"
        ],
        "correctOptionIndex": 2,
        "explanation": "Randomizing retry timing reduces coordination-induced load spikes.",
        "reference": "C8: Google SRE handling overload"
    },
    {
        "id": "CD29",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Metrics",
        "skillTag": "Metrics",
        "weight": 3,
        "questionText": "Why can user IDs as metric labels be problematic?",
        "options": [
            "They remove the need for logs",
            "They can create very high time-series cardinality and resource cost",
            "They guarantee perfect anonymity",
            "They reduce all metrics to one series"
        ],
        "correctOptionIndex": 1,
        "explanation": "Unbounded label values can multiply stored series and make metrics expensive.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD30",
        "tier": 6,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Reliability practice",
        "skillTag": "Reliability practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of measuring and alerting on service behavior?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently instrumented relevant latency/error signals and an objective",
            "I also tested an alert and used the evidence to investigate a failure"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD31",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Recovery objectives",
        "skillTag": "Recovery objectives",
        "weight": 4,
        "questionText": "Which statement correctly distinguishes RPO and RTO?",
        "options": [
            "RPO is CPU speed; RTO is network throughput",
            "RPO concerns tolerable data loss in time; RTO concerns time to restore service",
            "Both are the number of replicas",
            "RTO always guarantees zero data loss"
        ],
        "correctOptionIndex": 1,
        "explanation": "Recovery objectives describe different dimensions of loss and restoration.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD32",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Capacity",
        "skillTag": "Capacity",
        "weight": 4,
        "questionText": "If one instance safely handles 100 requests/s at the required latency, what does a 250 requests/s load suggest before allowing headroom or failures?",
        "options": [
            "At least 3 such instances under ideal load distribution",
            "One instance regardless of latency",
            "Exactly 2 instances",
            "250 instances by definition"
        ],
        "correctOptionIndex": 0,
        "explanation": "Ceiling(250/100)=3 is the ideal capacity minimum; production requires additional constraints/headroom.",
        "reference": "C4: Kubernetes horizontal autoscaling"
    },
    {
        "id": "CD33",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Stateless services",
        "skillTag": "Stateless services",
        "weight": 4,
        "questionText": "Why externalize sessions when distributing requests across replaceable web instances?",
        "options": [
            "It guarantees the state store cannot fail",
            "It removes all authentication requirements",
            "Any eligible instance can access the required session state",
            "It eliminates every network call"
        ],
        "correctOptionIndex": 2,
        "explanation": "External state avoids tying a session solely to one process, but introduces a dependency to manage.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD34",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Incident analysis",
        "skillTag": "Incident analysis",
        "weight": 4,
        "questionText": "What should a useful incident review prioritize?",
        "options": [
            "Deleting evidence to simplify the report",
            "Contributing conditions, impact, and concrete preventive or mitigative actions",
            "Only identifying one person to blame",
            "Only the length of the meeting"
        ],
        "correctOptionIndex": 1,
        "explanation": "A systems-focused review supports learning and follow-up improvement.",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD35",
        "tier": 7,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Recovery practice",
        "skillTag": "Recovery practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of exercising a service recovery procedure?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently restored a backup or recovered a failed service in a test environment",
            "I also measured recovery time/data loss and fixed gaps in the runbook"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD36",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Error budgets",
        "skillTag": "Error budgets",
        "weight": 4,
        "questionText": "A time-based availability SLO is 99.9% over 30 days. Assuming every minute is in scope, how much unavailable time fits the budget?",
        "options": [
            "4.32 minutes",
            "30 minutes",
            "432 minutes",
            "43.2 minutes"
        ],
        "correctOptionIndex": 3,
        "explanation": "30×24×60×0.001 = 43.2 minutes.",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD37",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Budget burn",
        "skillTag": "Budget burn",
        "weight": 4,
        "questionText": "For a request-success SLO of 99.9%, the allowed error fraction is 0.1%. A period has 1% errors. What is the burn rate relative to that allowance?",
        "options": [
            "100×",
            "10×",
            "1×",
            "0.1×"
        ],
        "correctOptionIndex": 1,
        "explanation": "1% divided by 0.1% is 10; the observation window determines urgency.",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD38",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Autoscaling calculation",
        "skillTag": "Autoscaling calculation",
        "weight": 4,
        "questionText": "An HPA uses the simplified ratio rule with 4 current replicas, 75% observed CPU utilization, and a 50% target. Ignore tolerance, limits, stabilization, and missing metrics. What is the desired replica count?",
        "options": [
            "8",
            "4",
            "6",
            "3"
        ],
        "correctOptionIndex": 2,
        "explanation": "ceil(4×75/50)=6 under the stated simplifications.",
        "reference": "C4: Kubernetes horizontal autoscaling"
    },
    {
        "id": "CD39",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Resource requests",
        "skillTag": "Resource requests",
        "weight": 4,
        "questionText": "CPU-based HPA utilization is computed relative to what for the relevant container resource metric?",
        "options": [
            "The number of image layers",
            "Configured CPU requests",
            "The TLS certificate expiry",
            "The registry upload size"
        ],
        "correctOptionIndex": 1,
        "explanation": "Utilization targets rely on resource requests; absent or unsuitable requests can undermine scaling decisions.",
        "reference": "C4: Kubernetes horizontal autoscaling"
    },
    {
        "id": "CD40",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Memory failures",
        "skillTag": "Memory failures",
        "weight": 4,
        "questionText": "A container is repeatedly OOM-killed near its memory limit while CPU is low. What is the strongest next investigation?",
        "options": [
            "Treat every OOM termination as proof that the node has no free memory",
            "Raise only the CPU limit because CPU utilization always predicts memory pressure",
            "Measure memory use/leaks and workload peaks, then right-size or fix the workload",
            "Remove the memory limit without checking leaks or the node budget"
        ],
        "correctOptionIndex": 2,
        "explanation": "CPU load does not diagnose memory exhaustion; peak memory and allocation behavior matter.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD41",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Slow startup",
        "skillTag": "Slow startup",
        "weight": 4,
        "questionText": "An application needs 90 seconds to initialize, but an aggressive liveness probe kills it every 20 seconds. What directly addresses this startup loop?",
        "options": [
            "Use a readiness failure alone as a request to restart the container",
            "Keep liveness unchanged and make readiness always succeed",
            "Use an appropriate startup probe/startup allowance before liveness enforcement",
            "Double the replica count while keeping the same failing startup probe timings"
        ],
        "correctOptionIndex": 2,
        "explanation": "Startup probes can defer liveness/readiness behavior until initialization succeeds.",
        "reference": "C3: Kubernetes probes"
    },
    {
        "id": "CD42",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Probe dependencies",
        "skillTag": "Probe dependencies",
        "weight": 4,
        "questionText": "Every pod restarts when a shared database briefly slows because liveness checks query that database. What should be reconsidered?",
        "options": [
            "Increase the number of restart loops",
            "Make all liveness probes fail whenever any remote service is slow",
            "Restart the database for every HTTP request",
            "Use liveness to detect local unrecoverable failure; handle dependency health with suitable readiness/degraded behavior"
        ],
        "correctOptionIndex": 3,
        "explanation": "A shared dependency outage should not automatically trigger synchronized local restarts.",
        "reference": "C3: Kubernetes probes"
    },
    {
        "id": "CD43",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Terraform concurrency",
        "skillTag": "Terraform concurrency",
        "weight": 4,
        "questionText": "Two operators apply changes to the same state concurrently. What protection is appropriate when supported by the backend?",
        "options": [
            "Keep independent state files for the same resources and merge them after both applies",
            "Shared state with locking and controlled apply concurrency",
            "Disable locking because the provider API guarantees an atomic whole-plan apply",
            "Rely on Git conflict detection to serialize all remote infrastructure changes"
        ],
        "correctOptionIndex": 1,
        "explanation": "State locking protects concurrent writers from conflicting operations; operational controls still matter.",
        "reference": "C5: Terraform state"
    },
    {
        "id": "CD44",
        "tier": 8,
        "type": "competency",
        "tag": "ARCHITECTURE",
        "topic": "Infrastructure drift",
        "skillTag": "Infrastructure drift",
        "weight": 4,
        "questionText": "A console change modifies a managed resource outside Terraform. What is the best response before another production apply?",
        "options": [
            "Review refreshed state and the plan, then reconcile the intended configuration deliberately",
            "Delete the resource immediately without inspection",
            "Blindly apply an old saved plan indefinitely",
            "Assume the change can never be detected"
        ],
        "correctOptionIndex": 0,
        "explanation": "Unreviewed drift may be reverted or conflict with intended changes; inspect before deciding.",
        "reference": "C5: Terraform state"
    },
    {
        "id": "CD45",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CI cloud identity",
        "skillTag": "CI cloud identity",
        "weight": 4,
        "questionText": "How can a supported CI platform obtain cloud access without storing a long-lived cloud key in the repository?",
        "options": [
            "Reuse one permanent token across every unrelated repository",
            "Publish the administrator key in an environment file",
            "Disable authentication for the cloud account",
            "Exchange a trusted OIDC identity for short-lived, scoped credentials with constrained claims"
        ],
        "correctOptionIndex": 3,
        "explanation": "Federation reduces long-lived secret handling; trust conditions must bind the intended workload.",
        "reference": "C6: GitHub Actions OpenID Connect"
    },
    {
        "id": "CD46",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Artifact promotion",
        "skillTag": "Artifact promotion",
        "weight": 4,
        "questionText": "Staging tested image digest X, but production rebuilds the source and gets digest Y. What improves confidence in promotion?",
        "options": [
            "Promote the same verified immutable artifact, with environment-specific configuration kept separate",
            "Rebuild from the same commit with floating dependencies and assume the artifact is identical",
            "Promote the same mutable tag while allowing the registry contents behind it to change",
            "Test one architecture image and deploy another without equivalent validation"
        ],
        "correctOptionIndex": 0,
        "explanation": "Build differences can arise from dependencies and tooling; artifact identity makes promotion explicit.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD47",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Canary interpretation",
        "skillTag": "Canary interpretation",
        "weight": 4,
        "questionText": "A canary receives only 1% of traffic from one easy region. Its average latency improves. What evidence is missing before broad rollout?",
        "options": [
            "Representative traffic and relevant tail/error guardrails across affected populations",
            "Running the same biased canary longer proves that untested populations will behave identically",
            "Average latency alone is sufficient when at least one request succeeded",
            "A small percentage automatically makes a sample representative of every traffic class"
        ],
        "correctOptionIndex": 0,
        "explanation": "A biased sample and average-only metric can conceal regressions elsewhere.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD48",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Release and schema",
        "skillTag": "Release and schema",
        "weight": 4,
        "questionText": "A new service drops a column still required by the rollback version. Why is binary rollback alone insufficient?",
        "options": [
            "Binary rollback always recreates deleted data",
            "The old binary may no longer work with the changed data schema",
            "The problem is only DNS TTL",
            "Containers cannot access databases"
        ],
        "correctOptionIndex": 1,
        "explanation": "Application and data compatibility must be planned together.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD49",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Recovery evidence",
        "skillTag": "Recovery evidence",
        "weight": 4,
        "questionText": "A team has daily backups but has never restored them. It claims a 15-minute RTO. What would substantiate the claim?",
        "options": [
            "A timed restore/failover exercise including dependencies, validation, and access requirements",
            "Multiply the database size by advertised disk throughput and omit dependency recovery",
            "Treat successful replication as proof that all backup restores meet the objective",
            "Use the backup creation duration as the complete service restoration duration"
        ],
        "correctOptionIndex": 0,
        "explanation": "Recovery duration must be demonstrated through the actual restoration path.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD50",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Failure domains",
        "skillTag": "Failure domains",
        "weight": 4,
        "questionText": "Six replicas all run on one physical node. What risk remains despite the replica count?",
        "options": [
            "Each replica is an independent failure domain even when all share one node",
            "One node failure can remove all six replicas",
            "Six pod objects imply six persistent copies of every local data file",
            "A Service automatically relocates live processes before a node fails"
        ],
        "correctOptionIndex": 1,
        "explanation": "Availability depends on placement and shared dependencies, not only process count.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD51",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Queue capacity",
        "skillTag": "Queue capacity",
        "weight": 4,
        "questionText": "A queue receives 120 jobs/s and workers sustainably finish 100 jobs/s. Starting empty, what is the idealized backlog after 5 minutes, ignoring retries and variability?",
        "options": [
            "30,000 jobs",
            "36,000 jobs",
            "600 jobs",
            "6,000 jobs"
        ],
        "correctOptionIndex": 3,
        "explanation": "The backlog grows at 20 jobs/s for 300 seconds.",
        "reference": "C8: Google SRE handling overload"
    },
    {
        "id": "CD52",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Retry amplification",
        "skillTag": "Retry amplification",
        "weight": 4,
        "questionText": "A chain has three retrying layers. Each permits 3 total attempts for each downstream call. Under the worst aligned failure pattern, how many calls can reach the deepest dependency per original request?",
        "options": [
            "3",
            "81",
            "9",
            "27"
        ],
        "correctOptionIndex": 3,
        "explanation": "Attempts can multiply: 3×3×3. Central retry budgets and deadlines can reduce amplification.",
        "reference": "C8: Google SRE handling overload"
    },
    {
        "id": "CD53",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Deadlines",
        "skillTag": "Deadlines",
        "weight": 4,
        "questionText": "A caller's total deadline is 1 second, but each of three sequential dependency calls has its own 1-second timeout. What is the problem?",
        "options": [
            "Increasing every timeout guarantees the deadline",
            "Only CPU utilization determines elapsed time",
            "Local timeouts can collectively exceed the end-to-end deadline unless remaining time is propagated/budgeted",
            "Three 1-second timeouts automatically fit in 1 second"
        ],
        "correctOptionIndex": 2,
        "explanation": "Timeouts should respect the remaining request budget and cancellation behavior.",
        "reference": "C8: Google SRE handling overload"
    },
    {
        "id": "CD54",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "At-least-once work",
        "skillTag": "At-least-once work",
        "weight": 4,
        "questionText": "A worker commits a result then crashes before acknowledging its queue message. How should a retry avoid duplicate effects?",
        "options": [
            "Assume the broker knows the external commit automatically",
            "Generate a new business operation ID on every delivery",
            "Acknowledge every message before processing regardless of loss risk",
            "Use durable operation identity and an idempotent or transactional effect protocol"
        ],
        "correctOptionIndex": 3,
        "explanation": "Redelivery after an uncertain acknowledgment is expected; effect handling must tolerate it.",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD55",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Layered diagnosis",
        "skillTag": "Layered diagnosis",
        "weight": 4,
        "questionText": "DNS resolution succeeds and TCP connects, but the TLS handshake fails with a hostname mismatch. What should be checked first?",
        "options": [
            "The requested hostname and the certificate's valid names/configuration",
            "Only the SQL query planner",
            "The number of CPU cores",
            "Only the container's working directory"
        ],
        "correctOptionIndex": 0,
        "explanation": "The observed failure is at certificate identity validation, after name resolution and transport setup.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "CD56",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Storage placement",
        "skillTag": "Storage placement",
        "weight": 4,
        "questionText": "A pod is rescheduled to another zone while its persistent volume is restricted to the original zone. What must scheduling/storage design account for?",
        "options": [
            "Changing the pod label automatically copies its volume into the new zone",
            "A multi-zone Service overrides all volume attachment restrictions",
            "Volume topology and attachment constraints, with an appropriate recovery/storage strategy",
            "Adding compute replicas makes a zone-local volume synchronously replicated"
        ],
        "correctOptionIndex": 2,
        "explanation": "Compute portability does not imply cross-zone storage availability.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD57",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Graceful shutdown",
        "skillTag": "Graceful shutdown",
        "weight": 4,
        "questionText": "A rolling deployment kills workers while requests are in flight. What shutdown behavior best reduces avoidable failures?",
        "options": [
            "Sleep forever after termination is requested",
            "Stop accepting new work, drain within a bounded grace period, and terminate with appropriate retry semantics",
            "Accept more work until the final kill signal",
            "Delete health checks and leave all work untracked"
        ],
        "correctOptionIndex": 1,
        "explanation": "Draining and bounded termination coordinate routing and application completion; long work may need durable handoff.",
        "reference": "C2: Kubernetes concepts"
    },
    {
        "id": "CD58",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Capstone evidence",
        "skillTag": "Capstone evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of operating a reproducibly deployed cloud service?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I have a versioned service with IaC, delivery automation, and monitoring",
            "I also tested representative load, failure handling, access controls, and recovery with independent review"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C1: AWS DevOps Engineer role guide"
    },
    {
        "id": "CD59",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Incident evidence",
        "skillTag": "Incident evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of investigating an operational incident or injected failure?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I reproduced a failure and documented its cause and mitigation",
            "I also verified the mitigation and created actionable follow-up checks or runbook changes"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C7: Google SRE error budget policy"
    },
    {
        "id": "CD60",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Tradeoff evidence",
        "skillTag": "Tradeoff evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of evaluating cost and reliability alternatives?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I compared alternatives using measured performance and resource cost",
            "I also documented failure-domain and recovery tradeoffs against explicit service objectives"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "C1: AWS DevOps Engineer role guide"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 1) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 1));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = CLOUD_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = CLOUD_QUESTIONS.findIndex(q => q.id === endId);
    return CLOUD_QUESTIONS.slice(startIndex, endIndex + 1);
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
