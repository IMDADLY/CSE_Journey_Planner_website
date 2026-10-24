# Cloud Computing & DevOps — common competency survey

Bank version: CLOUD_COMPUTING-COMMON-3. The same 130 MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.

There are 120 weighted technical questions and 10 separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.

The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.

## Linux and shell foundations

Focus: Operating systems, Linux permissions, File permissions, Process signals, Shell exit status, Pipelines, Filesystem capacity, Inodes, Log rotation, Least privilege

Roadmap resource: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) (Curated academic or industry source).

### CD03 — Operating systems

What is a process?

- A. A source-code comment
- B. A hardware rack label
- C. An executing program with associated resources
- D. A DNS record type

**Answer:** C. A process is a runtime execution entity managed by the operating system.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD06 — Linux permissions

For a regular file, what do permissions 640 grant to group members?

- A. Read and write
- B. Read only
- C. Execute only
- D. No permissions

**Answer:** B. The group digit 4 represents read permission; owner 6 means read/write.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CLOUD_COMPUTING-X01 — File permissions

A file is mode 640 and owned by alice:ops. What access does a member of ops have?

- A. Read only
- B. Read and write
- C. Execute only
- D. No access

**Answer:** A. Group digit 4 grants read; the owner digit 6 grants read and write.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X02 — Process signals

A service ignores SIGTERM but must first be given a chance to clean up. What should the operator do?

- A. Start with SIGKILL to request cleanup
- B. Delete its executable while running
- C. Change the file owner
- D. Send SIGTERM, inspect, then use SIGKILL only if needed

**Answer:** D. SIGTERM permits graceful handling; SIGKILL cannot be caught and is a last resort.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X03 — Shell exit status

In a POSIX shell, a command exits with status 0. What does that indicate?

- A. The command produced no output
- B. The command had no arguments
- C. The command reported success
- D. The command used zero CPU

**Answer:** C. Exit status 0 conventionally reports success, independent of output or resource use.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X04 — Pipelines

A script runs `grep error app.log | wc -l`. What does its output count?

- A. Files named error
- B. Lines containing error in app.log
- C. All bytes in app.log
- D. Distinct error messages

**Answer:** B. grep emits each matching line; wc -l counts the emitted lines, including duplicates.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X05 — Filesystem capacity

A volume has 100 GiB capacity and 85 GiB used. A job needs 20 GiB. How much additional space is required at minimum?

- A. 35 GiB
- B. 5 GiB
- C. 15 GiB
- D. 20 GiB

**Answer:** B. Free space is 100−85=15 GiB; the job needs 20−15=5 GiB more.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X06 — Inodes

A filesystem reports free bytes but creating a tiny file fails with no space left. Which check is most relevant?

- A. Free inode count
- B. CPU frequency
- C. DNS TTL
- D. TLS certificate expiry

**Answer:** A. Each file consumes an inode; inode exhaustion can block creation even with free data blocks.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X07 — Log rotation

A process keeps writing to a deleted log file, and disk space stays used. Why?

- A. The disk is read-only
- B. The file name has no extension
- C. The network cache owns the blocks
- D. The process still holds an open file descriptor

**Answer:** D. Unlinking a path does not release blocks until the last open descriptor closes.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

### CLOUD_COMPUTING-X08 — Least privilege

A deployment user needs to read one config directory but has root access. What is the best change?

- A. Give write access to all system files
- B. Disable ownership checks
- C. Grant the minimum directory permissions needed
- D. Keep root because it is simpler

**Answer:** C. Narrow permissions reduce the impact of a compromised deployment account.

Source: [LINUX: Introduction to Linux, LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/)

## Networking and transport

Focus: Networking, DNS, TLS, Network ports, Layered diagnosis, Subnet size, DNS caching, TCP handshake, TLS identity, Load-balancer health, Latency budget, HTTP retry safety, Private addressing, Port binding

Roadmap resource: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) (Curated academic or industry source).

### CD04 — Networking

What does an IP address primarily identify in IP communication?

- A. An application's Git commit
- B. A TLS certificate's private key
- C. A network interface/addressable endpoint within the relevant network context
- D. A permanent human identity

**Answer:** C. IP addressing supports network delivery; it is not a reliable user identity.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD07 — DNS

What is the main purpose of a DNS lookup for an A record?

- A. Allocate CPU to a container
- B. Resolve a name to an IPv4 address
- C. Encrypt an HTTP body
- D. Authenticate a database transaction

**Answer:** B. An A record maps a domain name to an IPv4 address.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### CD08 — TLS

What does a correctly validated TLS connection provide?

- A. Transport confidentiality/integrity and authentication of the peer described by its certificate
- B. Automatic authorization for every API action
- C. Guaranteed application correctness
- D. Permanent deletion of all logs

**Answer:** A. TLS protects the connection; business permissions and application logic remain separate.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### CD14 — Network ports

A containerized server listens only on 127.0.0.1 inside its network namespace. Why might traffic from other pods fail?

- A. All containers forbid networking
- B. The server is not listening on an interface reachable from those pods
- C. The server must use port 80 for every protocol
- D. The image digest is too long

**Answer:** B. Loopback binding limits the listener to that namespace; routing and policy must also permit access.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD55 — Layered diagnosis

DNS resolution succeeds and TCP connects, but the TLS handshake fails with a hostname mismatch. What should be checked first?

- A. The requested hostname and the certificate's valid names/configuration
- B. Only the SQL query planner
- C. The number of CPU cores
- D. Only the container's working directory

**Answer:** A. The observed failure is at certificate identity validation, after name resolution and transport setup.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### CLOUD_COMPUTING-X09 — Subnet size

How many usable host addresses are in a conventional IPv4 /27 subnet, excluding network and broadcast?

- A. 31
- B. 28
- C. 30
- D. 32

**Answer:** C. A /27 leaves 5 host bits: 2^5=32 addresses, minus 2 reserved addresses = 30.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X10 — DNS caching

A DNS A record changed, but some clients still reach the old address. Which mechanism explains this?

- A. Filesystem journaling
- B. Cached answers until TTL expiry
- C. TCP congestion control
- D. Kubernetes RBAC

**Answer:** B. Resolvers may reuse cached answers for their time-to-live after an authoritative change.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X11 — TCP handshake

A SYN reaches the host but the client never receives a SYN-ACK. Which layer should be checked first?

- A. Transport path and firewall rules for the return traffic
- B. Application JSON validation
- C. Database indexing
- D. Container image signing

**Answer:** A. The handshake has not completed; investigate listener, packet filtering and return route before application data.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X12 — TLS identity

A client validates a server certificate. Which field must match the requested hostname?

- A. Private key fingerprint displayed by server
- B. HTTP response body
- C. Server process ID
- D. Subject alternative name

**Answer:** D. Hostname validation uses the certificate subject alternative name entries.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X13 — Load-balancer health

A load balancer forwards to a node whose process accepts TCP but cannot reach its database. Which health check better detects the failure?

- A. A TCP connection check alone
- B. A static HTML file check
- C. A node uptime check alone
- D. An application readiness check covering the dependency

**Answer:** D. A dependency-aware readiness check can exclude an instance that accepts sockets but cannot serve requests.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X14 — Latency budget

A request passes through services taking 25, 40 and 35 ms serially, ignoring overhead. What is minimum end-to-end latency?

- A. 75 ms
- B. 35 ms
- C. 100 ms
- D. 40 ms

**Answer:** C. Serial waits add: 25+40+35=100 ms.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X15 — HTTP retry safety

A client times out after sending a POST that might have succeeded. What makes retrying safer?

- A. A different user agent
- B. An idempotency key understood by the server
- C. A shorter DNS TTL
- D. A larger TCP receive window

**Answer:** B. The same key identifies the same logical operation and can prevent duplicate effects.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X16 — Private addressing

Two private subnets use overlapping 10.0.0.0/24 ranges and must be directly routed together. What is the core issue?

- A. Overlapping routes make destinations ambiguous
- B. TLS requires public IPs
- C. TCP cannot run on private addresses
- D. DNS records must use IPv6

**Answer:** A. Routing cannot distinguish identical destination prefixes without translation or renumbering.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### CLOUD_COMPUTING-X17 — Port binding

A server listens only on 127.0.0.1 inside a container. External clients cannot reach it despite published ports. Why?

- A. The process is bound to loopback inside its network namespace
- B. DNS TTL is too long
- C. The image has no tags
- D. The container has too much memory

**Answer:** A. Publishing a port cannot expose a process listening only on container loopback to external interfaces.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

## Cloud architecture foundations

Focus: Cloud foundations, Responsibility, Stateless services, Shared responsibility, Availability zones, Object storage semantics, Cost unit, Regional failure, Autoscaling metric, Identity boundaries, Failure domains

Roadmap resource: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) (Curated academic or industry source).

### CD01 — Cloud foundations

What does horizontal scaling usually mean?

- A. Giving one process a longer variable name
- B. Replacing every network request with a file
- C. Adding more service instances
- D. Increasing only one instance's CPU size

**Answer:** C. Horizontal scaling adds instances; vertical scaling changes the resources of an instance.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD02 — Responsibility

When using a managed database, what responsibility normally remains with the application team?

- A. Controlling the provider's employees' office access
- B. Maintaining the provider's physical building
- C. Manufacturing the storage drives
- D. Choosing appropriate data access permissions and protecting application credentials

**Answer:** D. Managed infrastructure does not remove responsibility for application identities and data access.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD33 — Stateless services

Why externalize sessions when distributing requests across replaceable web instances?

- A. It guarantees the state store cannot fail
- B. It removes all authentication requirements
- C. Any eligible instance can access the required session state
- D. It eliminates every network call

**Answer:** C. External state avoids tying a session solely to one process, but introduces a dependency to manage.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CLOUD_COMPUTING-X18 — Shared responsibility

On a managed database, who normally controls application account permissions and data classification?

- A. The provider alone
- B. The internet registrar
- C. The container registry
- D. The customer operating the application

**Answer:** D. Managed infrastructure shifts some operations to the provider, but application access and data decisions remain with the customer.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X19 — Availability zones

A service has one instance in each of two independent zones, each with 99% availability. Assuming independent failures and either instance suffices, what is availability?

- A. 98%
- B. 100%
- C. 99.99%
- D. 99%

**Answer:** C. Both must fail: 0.01×0.01=0.0001, so availability is 1−0.0001=99.99%. Independence is assumed.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X20 — Object storage semantics

An app needs to serve immutable user uploads at scale. Which storage fits best?

- A. A deployment manifest
- B. Object storage with generated object keys
- C. An ephemeral container filesystem
- D. A local process variable

**Answer:** B. Object storage suits durable immutable blobs addressed by keys; container local storage is ephemeral.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X21 — Cost unit

An instance costs $0.20/hour and runs continuously for 48 hours. Ignoring other costs, what is compute cost?

- A. $0.40
- B. $9.60
- C. $4.80
- D. $48.00

**Answer:** B. 0.20×48=$9.60.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X22 — Regional failure

A backup is kept only in the same region as the primary. What risk remains?

- A. A regional outage can affect both primary and backup
- B. A process crash cannot be restored
- C. TLS will stop working
- D. The backup is automatically encrypted

**Answer:** A. A shared regional failure domain can make both copies unavailable.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X23 — Autoscaling metric

CPU stays low while request queues grow because a service waits on an external API. What is a better scaling signal?

- A. CPU alone
- B. Number of source files
- C. Disk label
- D. Queue depth or request concurrency

**Answer:** D. Queue length or concurrency reflects demand when the workload is blocked on I/O.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X24 — Identity boundaries

A VM role grants read access to every storage bucket, but the workload needs one. What should change?

- A. Use one admin role for all VMs
- B. Disable audit logging
- C. Scope the role to the required bucket and operations
- D. Move the key into the image

**Answer:** C. Least privilege narrows the role to needed actions and resources.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X25 — Failure domains

A web tier runs across two zones, but all writes depend on one database in a single zone. What remains a single point of failure?

- A. The browser cache
- B. The build tag
- C. The database zone
- D. The web tier zone pair

**Answer:** C. Web redundancy cannot remove the single-zone database dependency.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

## Containers, infrastructure and delivery

Focus: Version control, Containers, Infrastructure as code, Image identity, CI pipelines, Configuration, Terraform concurrency, Infrastructure drift, Artifact promotion, Release and schema, Container layers, Build secrets, Terraform state, Plan review, Drift, CI isolation, Immutable release, Pipeline gating, Container networking

Roadmap resource: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials) (Curated academic or industry source).

### CD09 — Version control

Why review infrastructure changes in version control?

- A. To avoid storing any configuration
- B. To guarantee no outage can occur
- C. To replace runtime monitoring
- D. To make intended changes traceable and reviewable

**Answer:** D. Version control preserves proposed changes and their history; it does not replace testing.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD11 — Containers

Compared with a conventional virtual machine, what does a typical Linux container share with its host?

- A. The host kernel
- B. Every user's password
- C. Every process's private memory
- D. A separate physical CPU exclusively

**Answer:** A. Containers isolate processes using the host kernel; isolation details depend on configuration.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD12 — Infrastructure as code

What is an infrastructure-as-code configuration primarily intended to describe?

- A. Infrastructure resources and their intended configuration in a repeatable form
- B. Only application test data
- C. Only billing receipts
- D. Only a screenshot of a console

**Answer:** A. Declarative or programmable definitions support reproducible infrastructure changes.

Source: [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD13 — Image identity

Why deploy a container image by an immutable digest when reproducibility matters?

- A. A digest identifies specific image content
- B. It increases application permissions
- C. It removes all vulnerabilities automatically
- D. It makes the image run without a kernel

**Answer:** A. Mutable tags can point to different content over time; a digest fixes artifact identity.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD17 — CI pipelines

What is the main purpose of running automated tests on a proposed code change?

- A. Detect specified regressions before promotion
- B. Avoid using version control
- C. Prove that no unknown defect exists
- D. Replace all production monitoring

**Answer:** A. Tests provide evidence about covered behavior, not a universal correctness guarantee.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD18 — Configuration

Which configuration change generally deserves the same review discipline as a code release?

- A. A production timeout or connection-limit change
- B. The name of a scratch notebook
- C. A personal terminal font
- D. A local editor color preference

**Answer:** A. Runtime configuration can change system behavior and reliability materially.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD43 — Terraform concurrency

Two operators apply changes to the same state concurrently. What protection is appropriate when supported by the backend?

- A. Keep independent state files for the same resources and merge them after both applies
- B. Shared state with locking and controlled apply concurrency
- C. Disable locking because the provider API guarantees an atomic whole-plan apply
- D. Rely on Git conflict detection to serialize all remote infrastructure changes

**Answer:** B. State locking protects concurrent writers from conflicting operations; operational controls still matter.

Source: [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD44 — Infrastructure drift

A console change modifies a managed resource outside Terraform. What is the best response before another production apply?

- A. Review refreshed state and the plan, then reconcile the intended configuration deliberately
- B. Delete the resource immediately without inspection
- C. Blindly apply an old saved plan indefinitely
- D. Assume the change can never be detected

**Answer:** A. Unreviewed drift may be reverted or conflict with intended changes; inspect before deciding.

Source: [C5: Terraform state](https://developer.hashicorp.com/terraform/language/state)

### CD46 — Artifact promotion

Staging tested image digest X, but production rebuilds the source and gets digest Y. What improves confidence in promotion?

- A. Promote the same verified immutable artifact, with environment-specific configuration kept separate
- B. Rebuild from the same commit with floating dependencies and assume the artifact is identical
- C. Promote the same mutable tag while allowing the registry contents behind it to change
- D. Test one architecture image and deploy another without equivalent validation

**Answer:** A. Build differences can arise from dependencies and tooling; artifact identity makes promotion explicit.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD48 — Release and schema

A new service drops a column still required by the rollback version. Why is binary rollback alone insufficient?

- A. Binary rollback always recreates deleted data
- B. The old binary may no longer work with the changed data schema
- C. The problem is only DNS TTL
- D. Containers cannot access databases

**Answer:** B. Application and data compatibility must be planned together.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CLOUD_COMPUTING-X26 — Container layers

A Dockerfile copies all source before dependency installation; source edits cause slow rebuilds. What ordering improves cache reuse?

- A. Run the build without a Dockerfile
- B. Copy dependency manifests and install before copying changing source
- C. Disable all image layers
- D. Install dependencies after container starts

**Answer:** B. Stable manifests and installed dependencies can remain cached across source-only edits.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X27 — Image identity

A deployment needs exactly the image reviewed in CI. Which reference is strongest?

- A. Immutable image digest
- B. Mutable latest tag
- C. Repository name alone
- D. Build date in a comment

**Answer:** A. A digest identifies exact image content, whereas tags can be moved.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X28 — Build secrets

A build token is written with `ARG` and then removed in a later layer. What risk remains?

- A. Removal guarantees it was never present
- B. The token is encrypted by ARG
- C. Only the shell can read it
- D. It can be exposed through image history or layers

**Answer:** D. Build arguments and prior layers can leak credentials; use supported secret mounts and rotate exposed secrets.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X29 — Terraform state

Terraform state contains resource IDs and sensitive attributes. How should a team store it?

- A. Commit it to a public repository
- B. Keep one mutable local copy on every laptop
- C. Send it as chat text
- D. In an access-controlled shared backend with locking

**Answer:** D. A controlled backend enables shared state and locking; state can contain sensitive data.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X30 — Plan review

A Terraform plan unexpectedly destroys the production database. What is the right pipeline response?

- A. Delete the state file
- B. Ignore because only code changes matter
- C. Stop and investigate before apply
- D. Apply because plans are deterministic

**Answer:** C. The plan describes an intended destructive change; it must be reviewed before execution.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X31 — Drift

An operator edits cloud resources manually after Terraform applied. What does the next plan reveal?

- A. The Kubernetes version
- B. Differences between declared and observed state
- C. Only Git merge conflicts
- D. Nothing until CI is restarted

**Answer:** B. Terraform refreshes observed resource state and compares it with configuration.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X32 — CI isolation

A pull request from an untrusted fork needs test execution. What is the safe default for secrets?

- A. Run tests without production secrets or deploy credentials
- B. Provide the full deployment token
- C. Print secrets into logs for debugging
- D. Run deploy automatically on every fork

**Answer:** A. Untrusted code must not receive credentials that can access production.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X33 — Immutable release

A team edits a running production container to patch a bug. What is the reproducibility problem?

- A. The fix is absent from the versioned image and will disappear on replacement
- B. The edit updates all replicas automatically
- C. The registry hashes it immediately
- D. The edit improves rollback

**Answer:** A. Runtime edits are not captured in the deployed artifact and cannot be reliably reproduced.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X34 — Pipeline gating

Unit tests pass but a deployment manifest points to an image that was never built. What gate closes this gap?

- A. Skip image publishing
- B. Rely on a successful lint step
- C. Deploy with a mutable tag
- D. Verify the referenced digest exists and was produced by the build

**Answer:** D. The release should reference an artifact actually produced and verified by the pipeline.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

### CLOUD_COMPUTING-X35 — Container networking

Two containers on the same user-defined Docker network need to communicate. Which address is usually preferable?

- A. A hard-coded ephemeral container IP
- B. The image digest
- C. The target container or service DNS name
- D. The host loopback address of the caller

**Answer:** C. Network-scoped service names resolve across containers; loopback refers to the caller itself.

Source: [TF: Terraform tutorials](https://developer.hashicorp.com/terraform/tutorials)

## Kubernetes operations

Focus: Kubernetes readiness, Kubernetes Service, Capacity, Autoscaling calculation, Resource requests, Memory failures, Slow startup, Probe dependencies, Failure domains, Storage placement, Graceful shutdown, Requests and limits, Readiness probe, Liveness misuse, Rolling update, Pod disruption budget, CrashLoop diagnosis, Stateful identity, Namespace isolation, Node drain, Horizontal scaling

Roadmap resource: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/) (Curated academic or industry source).

### CD16 — Kubernetes readiness

What should a readiness probe primarily indicate?

- A. Whether the container should receive service traffic now
- B. Whether the developer has committed code
- C. Whether its log file is large
- D. Whether its image exists in a public registry

**Answer:** A. Readiness controls eligibility for traffic without necessarily restarting the container.

Source: [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD19 — Kubernetes Service

Why use a Service in front of replaceable pods?

- A. To guarantee zero request failures
- B. To serialize all database writes
- C. To provide stable discovery/routing over changing pod instances
- D. To make every pod's local disk durable

**Answer:** C. A Service decouples clients from individual pod lifetimes; readiness and application behavior still matter.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD32 — Capacity

If one instance safely handles 100 requests/s at the required latency, what does a 250 requests/s load suggest before allowing headroom or failures?

- A. At least 3 such instances under ideal load distribution
- B. One instance regardless of latency
- C. Exactly 2 instances
- D. 250 instances by definition

**Answer:** A. Ceiling(250/100)=3 is the ideal capacity minimum; production requires additional constraints/headroom.

Source: [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD38 — Autoscaling calculation

An HPA uses the simplified ratio rule with 4 current replicas, 75% observed CPU utilization, and a 50% target. Ignore tolerance, limits, stabilization, and missing metrics. What is the desired replica count?

- A. 8
- B. 4
- C. 6
- D. 3

**Answer:** C. ceil(4×75/50)=6 under the stated simplifications.

Source: [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD39 — Resource requests

CPU-based HPA utilization is computed relative to what for the relevant container resource metric?

- A. The number of image layers
- B. Configured CPU requests
- C. The TLS certificate expiry
- D. The registry upload size

**Answer:** B. Utilization targets rely on resource requests; absent or unsuitable requests can undermine scaling decisions.

Source: [C4: Kubernetes horizontal autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)

### CD40 — Memory failures

A container is repeatedly OOM-killed near its memory limit while CPU is low. What is the strongest next investigation?

- A. Treat every OOM termination as proof that the node has no free memory
- B. Raise only the CPU limit because CPU utilization always predicts memory pressure
- C. Measure memory use/leaks and workload peaks, then right-size or fix the workload
- D. Remove the memory limit without checking leaks or the node budget

**Answer:** C. CPU load does not diagnose memory exhaustion; peak memory and allocation behavior matter.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD41 — Slow startup

An application needs 90 seconds to initialize, but an aggressive liveness probe kills it every 20 seconds. What directly addresses this startup loop?

- A. Use a readiness failure alone as a request to restart the container
- B. Keep liveness unchanged and make readiness always succeed
- C. Use an appropriate startup probe/startup allowance before liveness enforcement
- D. Double the replica count while keeping the same failing startup probe timings

**Answer:** C. Startup probes can defer liveness/readiness behavior until initialization succeeds.

Source: [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD42 — Probe dependencies

Every pod restarts when a shared database briefly slows because liveness checks query that database. What should be reconsidered?

- A. Increase the number of restart loops
- B. Make all liveness probes fail whenever any remote service is slow
- C. Restart the database for every HTTP request
- D. Use liveness to detect local unrecoverable failure; handle dependency health with suitable readiness/degraded behavior

**Answer:** D. A shared dependency outage should not automatically trigger synchronized local restarts.

Source: [C3: Kubernetes probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/)

### CD50 — Failure domains

Six replicas all run on one physical node. What risk remains despite the replica count?

- A. Each replica is an independent failure domain even when all share one node
- B. One node failure can remove all six replicas
- C. Six pod objects imply six persistent copies of every local data file
- D. A Service automatically relocates live processes before a node fails

**Answer:** B. Availability depends on placement and shared dependencies, not only process count.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD56 — Storage placement

A pod is rescheduled to another zone while its persistent volume is restricted to the original zone. What must scheduling/storage design account for?

- A. Changing the pod label automatically copies its volume into the new zone
- B. A multi-zone Service overrides all volume attachment restrictions
- C. Volume topology and attachment constraints, with an appropriate recovery/storage strategy
- D. Adding compute replicas makes a zone-local volume synchronously replicated

**Answer:** C. Compute portability does not imply cross-zone storage availability.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CD57 — Graceful shutdown

A rolling deployment kills workers while requests are in flight. What shutdown behavior best reduces avoidable failures?

- A. Sleep forever after termination is requested
- B. Stop accepting new work, drain within a bounded grace period, and terminate with appropriate retry semantics
- C. Accept more work until the final kill signal
- D. Delete health checks and leave all work untracked

**Answer:** B. Draining and bounded termination coordinate routing and application completion; long work may need durable handoff.

Source: [C2: Kubernetes concepts](https://kubernetes.io/docs/concepts/)

### CLOUD_COMPUTING-X36 — Requests and limits

A pod requests 250 millicores and has a 500 millicore CPU limit. Two replicas request how much CPU for scheduling?

- A. 750 millicores
- B. 500 millicores
- C. 250 millicores
- D. 1000 millicores

**Answer:** B. Scheduling sums requests: 2×250=500 millicores; limits affect enforcement.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X37 — Readiness probe

A pod is running but fails its readiness probe. What should a Service do?

- A. Scale the deployment to zero
- B. Exclude it from ready endpoints
- C. Restart it immediately in every case
- D. Delete its persistent volume

**Answer:** B. Readiness controls whether the pod receives Service traffic; liveness governs restart decisions.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X38 — Liveness misuse

A liveness probe checks a temporarily unavailable database and restarts all app pods. What is the design flaw?

- A. External dependency failure is treated as unrecoverable local process failure
- B. The probe interval is too long by definition
- C. The database must run in every app pod
- D. Readiness cannot check dependencies

**Answer:** A. Liveness should identify stuck local processes; dependency outages should generally affect readiness, not trigger restart loops.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X39 — Rolling update

A deployment has 4 replicas, maxSurge 1 and maxUnavailable 0. What is the maximum total pods during rollout?

- A. 4
- B. 6
- C. 1
- D. 5

**Answer:** D. The rollout may add at most one above desired 4, giving 5; zero may be unavailable.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X40 — Pod disruption budget

A workload has 3 healthy replicas and minAvailable 2. How many can be voluntarily disrupted at once?

- A. 3
- B. 0
- C. 1
- D. 2

**Answer:** C. At most 3−2=1 healthy replica may be voluntarily unavailable.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X41 — CrashLoop diagnosis

A pod repeatedly exits with code 1 just after start. What is the most direct first evidence?

- A. Only Service DNS records
- B. Only node labels
- C. Container logs and previous termination state
- D. Only cluster CPU total

**Answer:** C. Logs plus termination reason help identify the application startup failure.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X42 — Stateful identity

A database replica needs stable network identity and per-replica storage. Which controller fits?

- A. DaemonSet
- B. StatefulSet
- C. ReplicaSet alone
- D. Job

**Answer:** B. StatefulSet provides stable ordinal identities and persistent volume claim templates for stateful replicas.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X43 — Namespace isolation

Two namespaces use the same Pod name. What is true?

- A. Names can coexist because namespace scopes them
- B. All cluster names must be unique across namespaces
- C. The second pod overwrites the first
- D. Namespaces isolate all network traffic automatically

**Answer:** A. Namespaced object names are unique within their namespace, not necessarily cluster-wide.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X44 — Node drain

A node must be maintained while serving traffic. What should happen first?

- A. Power it off without notice
- B. Delete all Services
- C. Disable readiness probes
- D. Cordon and drain according to disruption constraints

**Answer:** D. Cordon prevents new scheduling and drain evicts workloads under policy so they can move.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

### CLOUD_COMPUTING-X45 — Horizontal scaling

A service averages 80% CPU against a 50% target with 5 replicas. Approximate desired replicas before other constraints?

- A. 3
- B. 5
- C. 10
- D. 8

**Answer:** D. The ratio rule gives ceil(5×80/50)=8 desired replicas.

Source: [KUBE: Introduction to Kubernetes, LFS158](https://training.linuxfoundation.org/training/introduction-to-kubernetes/)

## Workload identity and secrets

Focus: Least privilege, Secrets, CI cloud identity, Service accounts, RBAC verbs, Secret rotation, Short-lived credentials, Namespace RBAC, Metadata exposure, Network policy

Roadmap resource: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) (Curated academic or industry source).

### CD21 — Least privilege

A deployment job only needs to push to one registry repository. Which permission choice is best aligned with least privilege?

- A. Grant global administrator access
- B. Grant the specific required actions on that repository
- C. Allow deletion of every cloud resource
- D. Share a human root credential

**Answer:** B. Permissions should match the job's required scope.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD22 — Secrets

Why should a secret not be committed to a repository even if the file is deleted later?

- A. It may remain in history and copies, requiring revocation/rotation
- B. Git always automatically revokes leaked credentials
- C. Deletion immediately clears every clone
- D. Only binary files can contain secrets

**Answer:** A. Removing a current file does not remove every historical or external copy.

Source: [C6: GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

### CD45 — CI cloud identity

How can a supported CI platform obtain cloud access without storing a long-lived cloud key in the repository?

- A. Reuse one permanent token across every unrelated repository
- B. Publish the administrator key in an environment file
- C. Disable authentication for the cloud account
- D. Exchange a trusted OIDC identity for short-lived, scoped credentials with constrained claims

**Answer:** D. Federation reduces long-lived secret handling; trust conditions must bind the intended workload.

Source: [C6: GitHub Actions OpenID Connect](https://docs.github.com/en/actions/concepts/security/openid-connect)

### CLOUD_COMPUTING-X46 — Service accounts

A pod needs to read one Secret. Which identity should it use?

- A. A human administrator password in an image
- B. A public anonymous token
- C. A dedicated service account bound to a narrow Role
- D. The cluster-admin service account

**Answer:** C. Workload identity with narrow RBAC limits access to the required object.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X47 — RBAC verbs

A role grants get and list on ConfigMaps. Can it create a new ConfigMap?

- A. Only if the pod is restarted
- B. No, create is a separate verb
- C. Yes, list implies create
- D. Yes, get implies all writes

**Answer:** B. RBAC verbs are distinct; get/list do not include create.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X48 — Secret rotation

A database password was exposed in logs. What is the immediate credential action?

- A. Rotate or revoke the password and update dependent workloads
- B. Only remove the log line from source
- C. Rename the Secret object
- D. Add a comment to the deployment

**Answer:** A. Exposure invalidates the credential; rotation/revocation and rollout are needed.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X49 — Short-lived credentials

A cloud workload has access via a long-lived static key stored in its image. Which alternative reduces exposure?

- A. Workload identity with short-lived issued credentials
- B. Another static key in the same image
- C. A public environment variable
- D. A shared root password

**Answer:** A. Identity federation or metadata-issued credentials avoid embedding durable secrets in artifacts.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X50 — Namespace RBAC

A Role is bound in namespace A. Does it by itself authorize reading Secrets in namespace B?

- A. Yes, all namespaces share Role bindings
- B. Yes, if both namespaces are on one node
- C. Only on weekends
- D. No, a separate binding or broader authorization is needed

**Answer:** D. Namespaced RoleBindings apply to their namespace.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X51 — Metadata exposure

A service accepts arbitrary URLs and fetches them from inside a cloud VM. What cloud-specific risk should be checked?

- A. A stale DNS A record only
- B. An index scan in the database
- C. Server-side request forgery to metadata endpoints
- D. A CSS injection in the browser

**Answer:** C. SSRF can let attackers reach cloud instance metadata or internal endpoints from a trusted workload.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

### CLOUD_COMPUTING-X52 — Network policy

A pod has RBAC permission to read a Secret but egress to its database is denied. What explains the failure?

- A. The pod must be a StatefulSet
- B. RBAC and network reachability are separate controls
- C. RBAC automatically opens every network path
- D. NetworkPolicy changes Secret permission

**Answer:** B. Authorization to API objects does not guarantee network connectivity to an external service.

Source: [AWS: AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/)

## Reliability and observability

Focus: Reliability objectives, Observability, Alerting, Metrics, Incident analysis, Error budgets, Budget burn, Canary interpretation, Availability SLO, Error budget, Latency percentiles, Golden signals, Alert design, Tracing, Counter rates, Cardinality, Postmortem

Roadmap resource: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) (Curated academic or industry source).

### CD23 — Reliability objectives

What is an SLO?

- A. A list of developer salaries
- B. A defined target for a service-level indicator over a specified window
- C. A guarantee that no incident will occur
- D. The maximum length of a log line

**Answer:** B. An SLO specifies the desired reliability measured by an SLI.

Source: [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD26 — Observability

Which signal is most suitable for connecting one request's work across multiple services?

- A. Only a random log ID generated independently in every service
- B. Only an unrelated daily CPU average
- C. A distributed trace with propagated context
- D. Only the source file name

**Answer:** C. Trace context preserves relationships between operations.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD27 — Alerting

Which alert is usually more directly actionable for an on-call team?

- A. Every routine container start
- B. A sustained breach of a user-facing error/latency objective with diagnostic context
- C. Every successful HTTP request
- D. An arbitrary log line count with no context

**Answer:** B. Alerts should identify conditions requiring timely intervention.

Source: [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD29 — Metrics

Why can user IDs as metric labels be problematic?

- A. They remove the need for logs
- B. They can create very high time-series cardinality and resource cost
- C. They guarantee perfect anonymity
- D. They reduce all metrics to one series

**Answer:** B. Unbounded label values can multiply stored series and make metrics expensive.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD34 — Incident analysis

What should a useful incident review prioritize?

- A. Deleting evidence to simplify the report
- B. Contributing conditions, impact, and concrete preventive or mitigative actions
- C. Only identifying one person to blame
- D. Only the length of the meeting

**Answer:** B. A systems-focused review supports learning and follow-up improvement.

Source: [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD36 — Error budgets

A time-based availability SLO is 99.9% over 30 days. Assuming every minute is in scope, how much unavailable time fits the budget?

- A. 4.32 minutes
- B. 30 minutes
- C. 432 minutes
- D. 43.2 minutes

**Answer:** D. 30×24×60×0.001 = 43.2 minutes.

Source: [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD37 — Budget burn

For a request-success SLO of 99.9%, the allowed error fraction is 0.1%. A period has 1% errors. What is the burn rate relative to that allowance?

- A. 100×
- B. 10×
- C. 1×
- D. 0.1×

**Answer:** B. 1% divided by 0.1% is 10; the observation window determines urgency.

Source: [C7: Google SRE error budget policy](https://sre.google/workbook/error-budget-policy/)

### CD47 — Canary interpretation

A canary receives only 1% of traffic from one easy region. Its average latency improves. What evidence is missing before broad rollout?

- A. Representative traffic and relevant tail/error guardrails across affected populations
- B. Running the same biased canary longer proves that untested populations will behave identically
- C. Average latency alone is sufficient when at least one request succeeded
- D. A small percentage automatically makes a sample representative of every traffic class

**Answer:** A. A biased sample and average-only metric can conceal regressions elsewhere.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CLOUD_COMPUTING-X53 — Availability SLO

An SLO allows 99.9% success over 30 days. About how many minutes of failed service are budgeted?

- A. 0.43
- B. 43.2
- C. 4.32
- D. 432

**Answer:** B. 30×24×60=43,200 minutes; 0.1%=0.001 gives 43.2 minutes.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X54 — Error budget

A service has a 0.1% failure budget over one million requests. How many failures are budgeted?

- A. 1000
- B. 100
- C. 10,000
- D. 999,000

**Answer:** A. 1,000,000×0.001=1,000 failures.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X55 — Latency percentiles

99 of 100 requests finish in 100 ms; one takes 2 s. What is the 99th percentile using nearest-rank?

- A. 2 s
- B. Average latency
- C. Cannot calculate from ordered values
- D. 100 ms

**Answer:** D. Nearest-rank p99 is the 99th ordered value, which is 100 ms.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X56 — Golden signals

A service has rising latency, errors and saturation. Which additional traffic signal helps characterize load?

- A. Number of README lines
- B. Container label length
- C. Requests per second
- D. Git commit count

**Answer:** C. Traffic rate is the fourth common signal alongside latency, errors and saturation.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X57 — Alert design

An alert fires whenever CPU briefly exceeds 70% although users see no impact. What improvement best reduces noise?

- A. Page on every log line
- B. Disable all alerts
- C. Alert on sustained user-impacting SLO burn or symptoms
- D. Lower the CPU threshold to 10%

**Answer:** C. Sustained SLO-based alerts tie paging to impact, reducing transient resource-only noise.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X58 — Tracing

A request crosses three services and p95 latency rises. Which telemetry best locates the slow span?

- A. CPU temperature alone
- B. Distributed trace with propagated context
- C. A total request counter alone
- D. A deployment tag alone

**Answer:** B. Trace spans with shared context show where the request spent time across services.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X59 — Counter rates

A monotonically increasing error counter goes from 120 to 180 over one minute. What average error rate is observed?

- A. 1 per second
- B. 60 per second
- C. 0.5 per second
- D. 180 per second

**Answer:** A. The increase is 60 over 60 seconds, hence 1/s.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X60 — Cardinality

A metric labels every request with unique user ID. Why can this be harmful?

- A. It reduces sample size to zero
- B. It makes counters negative
- C. It disables tracing
- D. It creates extremely high time-series cardinality

**Answer:** D. Each user ID creates a separate series combination, increasing storage and query cost.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X61 — Postmortem

An incident fix addressed a symptom but not the trigger. Which review artifact helps prevent recurrence?

- A. Only a blame assignment
- B. Only the final error message
- C. Only a screenshot of uptime
- D. A timeline with contributing factors and verified follow-up actions

**Answer:** D. A causal timeline and tested follow-up actions help identify and close systemic gaps.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

## Resilience, recovery and capacity

Focus: Backups, Retries, Recovery objectives, Recovery evidence, Queue capacity, Retry amplification, Deadlines, At-least-once work, RPO, RTO, Backoff jitter, Circuit breaking, Load shedding, Backup validation, Multi-zone tradeoff

Roadmap resource: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/) (Curated academic or industry source).

### CD24 — Backups

Why test a backup by restoring it?

- A. To check whether it can actually recover the required data and service
- B. To remove the need for access controls
- C. To make database replication synchronous
- D. To guarantee future backups will never fail

**Answer:** A. Backup existence alone does not establish recoverability.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD28 — Retries

Why add jitter to exponential backoff?

- A. To make requests idempotent automatically
- B. To guarantee successful completion
- C. To reduce synchronized retry bursts from many clients
- D. To eliminate the need for timeouts

**Answer:** C. Randomizing retry timing reduces coordination-induced load spikes.

Source: [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD31 — Recovery objectives

Which statement correctly distinguishes RPO and RTO?

- A. RPO is CPU speed; RTO is network throughput
- B. RPO concerns tolerable data loss in time; RTO concerns time to restore service
- C. Both are the number of replicas
- D. RTO always guarantees zero data loss

**Answer:** B. Recovery objectives describe different dimensions of loss and restoration.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD49 — Recovery evidence

A team has daily backups but has never restored them. It claims a 15-minute RTO. What would substantiate the claim?

- A. A timed restore/failover exercise including dependencies, validation, and access requirements
- B. Multiply the database size by advertised disk throughput and omit dependency recovery
- C. Treat successful replication as proof that all backup restores meet the objective
- D. Use the backup creation duration as the complete service restoration duration

**Answer:** A. Recovery duration must be demonstrated through the actual restoration path.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CD51 — Queue capacity

A queue receives 120 jobs/s and workers sustainably finish 100 jobs/s. Starting empty, what is the idealized backlog after 5 minutes, ignoring retries and variability?

- A. 30,000 jobs
- B. 36,000 jobs
- C. 600 jobs
- D. 6,000 jobs

**Answer:** D. The backlog grows at 20 jobs/s for 300 seconds.

Source: [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD52 — Retry amplification

A chain has three retrying layers. Each permits 3 total attempts for each downstream call. Under the worst aligned failure pattern, how many calls can reach the deepest dependency per original request?

- A. 3
- B. 81
- C. 9
- D. 27

**Answer:** D. Attempts can multiply: 3×3×3. Central retry budgets and deadlines can reduce amplification.

Source: [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD53 — Deadlines

A caller's total deadline is 1 second, but each of three sequential dependency calls has its own 1-second timeout. What is the problem?

- A. Increasing every timeout guarantees the deadline
- B. Only CPU utilization determines elapsed time
- C. Local timeouts can collectively exceed the end-to-end deadline unless remaining time is propagated/budgeted
- D. Three 1-second timeouts automatically fit in 1 second

**Answer:** C. Timeouts should respect the remaining request budget and cancellation behavior.

Source: [C8: Google SRE handling overload](https://sre.google/sre-book/handling-overload/)

### CD54 — At-least-once work

A worker commits a result then crashes before acknowledging its queue message. How should a retry avoid duplicate effects?

- A. Assume the broker knows the external commit automatically
- B. Generate a new business operation ID on every delivery
- C. Acknowledge every message before processing regardless of loss risk
- D. Use durable operation identity and an idempotent or transactional effect protocol

**Answer:** D. Redelivery after an uncertain acknowledgment is expected; effect handling must tolerate it.

Source: [C1: AWS DevOps Engineer role guide](https://docs.aws.amazon.com/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.html)

### CLOUD_COMPUTING-X62 — RPO

A backup runs every 4 hours and no continuous log is retained. What is the worst-case data loss from a failure just before the next backup?

- A. Almost 8 hours
- B. One minute
- C. Almost 4 hours
- D. Exactly 0

**Answer:** C. The newest backup can be almost four hours old, setting an approximate worst-case RPO.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X63 — RTO

A recovery run takes 20 minutes to provision, 30 to restore and 10 to verify. What is the minimum sequential RTO?

- A. 10 minutes
- B. 60 minutes
- C. 30 minutes
- D. 50 minutes

**Answer:** B. Sequential stages add: 20+30+10=60 minutes.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X64 — Retry amplification

A request has two layers, each retrying 3 total attempts. At most how many downstream calls can one top-level request cause?

- A. 9
- B. 3
- C. 6
- D. 12

**Answer:** A. Each of 3 outer attempts can trigger 3 inner attempts: 3×3=9.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X65 — Backoff jitter

Many workers retry at exactly 1, 2 and 4 seconds after outage. What change reduces synchronized peaks?

- A. Randomize delays within a backoff policy
- B. Use identical shorter delays
- C. Remove request deadlines
- D. Restart all workers together

**Answer:** A. Jitter spreads attempts across time rather than aligning them at the same moments.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X66 — Circuit breaking

A dependency is persistently failing and requests pile up waiting for timeouts. What does an open circuit breaker do?

- A. Retries indefinitely at full rate
- B. Makes failed calls succeed
- C. Disables health monitoring
- D. Fails fast for a period before probing recovery

**Answer:** D. An open breaker stops sending normal calls temporarily, limiting resource exhaustion and allowing later probes.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X67 — Queue capacity

A queue receives 120 jobs/minute and processes 90 jobs/minute for 10 minutes, starting empty. How many jobs accumulate?

- A. 900
- B. 1200
- C. 300
- D. 30

**Answer:** C. Net growth is 120−90=30 jobs/minute; over 10 minutes that is 300.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X68 — Load shedding

An overloaded service can process 100 requests/s but receives 180/s. Which response protects latency for accepted requests?

- A. Disable metrics
- B. Reject excess load quickly with a clear retry signal
- C. Queue all traffic indefinitely
- D. Increase every timeout without capacity change

**Answer:** B. Admission control keeps work bounded; excessive queues make every request slow.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X69 — Backup validation

A backup job reports success every night. What evidence establishes recoverability?

- A. The storage invoice increased
- B. A timed restore test with data integrity checks
- C. The backup file name exists
- D. The alert dashboard is green

**Answer:** B. A successful restore and integrity check demonstrate that the backup can actually be used.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

### CLOUD_COMPUTING-X70 — Multi-zone tradeoff

A stateful service moves to two zones but uses synchronous cross-zone writes. Which tradeoff should be measured?

- A. Higher write latency versus availability gain
- B. Faster local writes by definition
- C. Removal of all network cost
- D. Elimination of consistency choices

**Answer:** A. Cross-zone acknowledgement can increase write latency while improving tolerance to zone failure.

Source: [SRE: Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)

## Self-assessment

### CD05 — Systems practice

What evidence can you demonstrate of using a shell to inspect processes, files, and networking?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently diagnosed a basic process, permission, or connection issue (50% of practice item)
- D. I also recorded reproducible commands and explained the cause and fix (100% of practice item)

### CD10 — Networking practice

What evidence can you demonstrate of configuring and testing a small networked service?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently configured addressing, listening ports, and connectivity checks (50% of practice item)
- D. I also distinguished DNS, transport, and application failures using evidence (100% of practice item)

### CD15 — Infrastructure practice

What evidence can you demonstrate of building a container and repeatable infrastructure configuration?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently built and ran a versioned service from configuration (50% of practice item)
- D. I also checked reproducibility and handled configuration or dependency failures (100% of practice item)

### CD20 — Delivery practice

What evidence can you demonstrate of building an automated delivery pipeline?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented build, test, and deployment steps (50% of practice item)
- D. I also controlled artifact promotion and tested a failed-release path (100% of practice item)

### CD25 — Security practice

What evidence can you demonstrate of restricting workload permissions and secrets?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently used scoped credentials and controlled secret injection (50% of practice item)
- D. I also tested denied operations and documented rotation or revocation procedures (100% of practice item)

### CD30 — Reliability practice

What evidence can you demonstrate of measuring and alerting on service behavior?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently instrumented relevant latency/error signals and an objective (50% of practice item)
- D. I also tested an alert and used the evidence to investigate a failure (100% of practice item)

### CD35 — Recovery practice

What evidence can you demonstrate of exercising a service recovery procedure?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently restored a backup or recovered a failed service in a test environment (50% of practice item)
- D. I also measured recovery time/data loss and fixed gaps in the runbook (100% of practice item)

### CD58 — Capstone evidence

What evidence can you demonstrate of operating a reproducibly deployed cloud service?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I have a versioned service with IaC, delivery automation, and monitoring (50% of practice item)
- D. I also tested representative load, failure handling, access controls, and recovery with independent review (100% of practice item)

### CD59 — Incident evidence

What evidence can you demonstrate of investigating an operational incident or injected failure?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I reproduced a failure and documented its cause and mitigation (50% of practice item)
- D. I also verified the mitigation and created actionable follow-up checks or runbook changes (100% of practice item)

### CD60 — Tradeoff evidence

What evidence can you demonstrate of evaluating cost and reliability alternatives?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I compared alternatives using measured performance and resource cost (50% of practice item)
- D. I also documented failure-domain and recovery tradeoffs against explicit service objectives (100% of practice item)

