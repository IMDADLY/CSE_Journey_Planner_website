# Game Development and Interactive Media — curated topic map and roadmap

Survey bank version 1 · Mapping/courses reviewed 20 October 2026 · 60/60 items mapped.

[Planning rules](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Roadmap-Logic-and-Implementation-Plan.md) · [Course catalog](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Course-Catalog.md)

## How to use this guide

Confirm a suspected topic gap, check its prerequisites, study the relevant parts of the linked course(s), and complete the topic bridge below. For a narrow gap, select units addressing the named focus; do not require every linked course in full. Each bridge combines the study focus, supporting reading and a new practical task. The bridge is a proposed local learning unit, not a provider-certified course. Provider-level syllabus coverage was checked; exact lesson IDs and the assessment bank still need curation/versioning in the production CMS.

Self-assessment assignments ask for evidence. A confident response does not exempt the learner from demonstrating a skill. Broad theoretical courses intentionally have narrower labs added for tooling-specific details. Study-focus labels are curator labels rather than quoted provider lesson names.

## Prerequisite sequence and exit evidence

| Node | Suggested semester | Prerequisites | Course/resources | Estimated selected hours | Exit evidence |
|---|---:|---|---|---:|---|
| GD-C: Programming and engine foundations | S1 | Entry diagnostic | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | 60 | Build and explain a small C# interaction with tested collections, input and lifecycle behavior. |
| GD-M: Spatial mathematics and graphics theory | S2 | GD-C | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | 40 | Compute transforms, normalized directions and rendering quantities; implement small verification examples. |
| GD-G: Gameplay, physics and state | S3 | GD-C, GD-M | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | 55 | Build a playable prototype with explicit state transitions, fixed-step physics and collision tests. |
| GD-A: Media and accessible interaction | S4 | GD-G | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | 35 | Integrate animation/audio/UI with remapping, non-color cues and task-based accessibility checks. |
| GD-P: Profiling, rendering and memory | S5 | GD-G, GD-A | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | 55 | Profile a target build, fix a measured bottleneck and report frame-time/memory evidence. |
| GD-N: Multiplayer simulation | S6 | GD-G, GD-P | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | 55 | Build a minimal authoritative prototype and test delay, loss, reconciliation and duplicated effects. |
| GD-R: Production and experience validation | S7 | GD-A, GD-P, GD-N | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | 40 | Create a reproducible release with regression tests, crash symbols and a representative playtest report. |

**Planning estimate: 340 hours** for selected specialization units and their topic labs. Add roughly 80–120 hours for an integrated capstone and 100 hours for shared foundation/interview review as needed. These are curator estimates, not provider-advertised durations. Do not add every topic lab again to the node estimate. Verified prior learning reduces the plan.

## Semester blueprint

| Semester | Suggested focus | Required progress evidence |
|---|---|---|
| S1 | GD-C Programming and engine foundations | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S2 | GD-M Spatial mathematics and graphics theory | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S3 | GD-G Gameplay, physics and state | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S4 | GD-A Media and accessible interaction | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S5 | GD-P Profiling, rendering and memory | Pass the relevant node gates; preserve code, calculations and test evidence. Start internship/team-project applications and recurring interview practice. |
| S6 | GD-N Multiplayer simulation | Pass the relevant node gates; preserve code, calculations and test evidence. Produce an integrated project or reviewed internship contribution. |
| S7 | GD-R Production and experience validation | Pass the relevant node gates; preserve code, calculations and test evidence. Have a defensible portfolio ready before recruitment; move this earlier if the college calendar requires it. |
| S8 | Capstone refinement, mock interviews and targeted gap closure | Complete role-specific readiness gates, defend the capstone, and continue applications/interviews; list any unmet requirements. |

## Exact survey-topic mapping

Each row is one primary mapping. Course resources may recur across rows; the planner schedules overlapping units once. The numbered question is a diagnostic trigger, not the only assessment of the topic.

| Question | Topic / study focus | Learning node | Curated course/resources | Topic bridge |
|---|---|---|---|---|
| GD01 | Code tracing (technical) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd01) |
| GD02 | Vectors (technical) | GD-M | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd02) |
| GD03 | Coordinates (technical) | GD-M | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd03) |
| GD04 | Collections (technical) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd04) |
| GD05 | Programming practice (practice) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd05) |
| GD06 | Frame-independent motion (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd06) |
| GD07 | Input events (technical) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd07) |
| GD08 | Game state (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd08) |
| GD09 | Vector normalization (technical) | GD-M | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd09) |
| GD10 | Prototype practice (practice) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd10) |
| GD11 | Physics updates (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd11) |
| GD12 | Trigger volumes (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd12) |
| GD13 | Rendering visibility (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd13) |
| GD14 | Animation logic (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd14) |
| GD15 | Gameplay modeling (practice) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd15) |
| GD16 | Texture coordinates (technical) | GD-M | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd16) |
| GD17 | Spatial audio (technical) | GD-A | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core) | [Task and reading](#bridge-gd17) |
| GD18 | Accessible interaction (technical) | GD-A | [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/); [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core) | [Task and reading](#bridge-gd18) |
| GD19 | Asset collaboration (technical) | GD-C | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd19) |
| GD20 | Inclusive interaction (practice) | GD-A | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-gd20) |
| GD21 | Object pooling (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd21) |
| GD22 | Pathfinding (technical) | GD-G | [ALG: Introduction to Algorithms, 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) | [Task and reading](#bridge-gd22) |
| GD23 | Performance diagnosis (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd23) |
| GD24 | Save compatibility (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd24) |
| GD25 | Performance practice (practice) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd25) |
| GD26 | Multiplayer authority (technical) | GD-N | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-gd26) |
| GD27 | Network messages (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-gd27) |
| GD28 | Level of detail (technical) | GD-P | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd28) |
| GD29 | Interactive UI (technical) | GD-A | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-gd29) |
| GD30 | Multiplayer practice (practice) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd30) |
| GD31 | Regression testing (technical) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd31) |
| GD32 | Crash triage (technical) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd32) |
| GD33 | Instrumentation (technical) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd33) |
| GD34 | Reproducible builds (technical) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd34) |
| GD35 | Release practice (practice) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd35) |
| GD36 | Frame budget (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd36) |
| GD37 | Pipeline bottleneck (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd37) |
| GD38 | Fixed-step accumulator (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd38) |
| GD39 | Simulation overload (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd39) |
| GD40 | Collision tunneling (technical) | GD-G | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/) | [Task and reading](#bridge-gd40) |
| GD41 | Tail frame times (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd41) |
| GD42 | Texture memory (technical) | GD-P | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd42) |
| GD43 | Mip-chain memory (technical) | GD-P | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd43) |
| GD44 | Pool lifecycle (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd44) |
| GD45 | Event retention (technical) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd45) |
| GD46 | Alpha compositing (technical) | GD-P | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd46) |
| GD47 | View-cone test (technical) | GD-M | [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd47) |
| GD48 | Snapshot interpolation (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd48) |
| GD49 | Prediction reconciliation (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd49) |
| GD50 | Server validation (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd50) |
| GD51 | Ordered reliable delivery (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) | [Task and reading](#bridge-gd51) |
| GD52 | Replication bandwidth (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd52) |
| GD53 | Deterministic replay (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd53) |
| GD54 | Rollback side effects (technical) | GD-N | [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) | [Task and reading](#bridge-gd54) |
| GD55 | Audio synchronization (technical) | GD-A | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core) | [Task and reading](#bridge-gd55) |
| GD56 | Accessibility validation (technical) | GD-A | [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) | [Task and reading](#bridge-gd56) |
| GD57 | Experiment interpretation (technical) | GD-R | [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd57) |
| GD58 | Advanced diagnosis (practice) | GD-P | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) | [Task and reading](#bridge-gd58) |
| GD59 | Experience evaluation (practice) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd59) |
| GD60 | Integrated delivery (practice) | GD-R | [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-gd60) |

## Topic bridge tasks

For each task: (1) use the selected course foundations; (2) consult the relevant technical references; (3) complete the task with changed inputs/data rather than copying the original MCQ; (4) submit reproducible evidence and explain assumptions; (5) pass a fresh assessment. If the supporting reference is a broad curriculum or role guide, use the selected course for instruction and the task as the concrete learning target.

### Bridge GD01 — Code tracing

<a id="bridge-gd01"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Trace and test a C# loop with altered bounds and initial state.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD02 — Vectors

<a id="bridge-gd02"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Compute and visualize displacement vectors between new positions.

**Supporting reading:** [Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD03 — Coordinates

<a id="bridge-gd03"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Compose parent/child transforms and verify local-to-world positions.

**Supporting reading:** [Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD04 — Collections

<a id="bridge-gd04"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Use a set to prevent repeated one-time rewards and test duplicate collisions.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD05 — Programming practice

<a id="bridge-gd05"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Produce an independently explainable artifact for this practice topic. Build and explain a small C# interaction with tested collections, input and lifecycle behavior.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD06 — Frame-independent motion

<a id="bridge-gd06"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Measure movement at several render rates using elapsed-time scaling.

**Supporting reading:** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD07 — Input events

<a id="bridge-gd07"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Test pressed-edge versus held input for a toggle action.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD08 — Game state

<a id="bridge-gd08"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Implement state transitions and reject illegal combinations.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD09 — Vector normalization

<a id="bridge-gd09"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Normalize movement vectors and compare diagonal with axial speed.

**Supporting reading:** [Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD10 — Prototype practice

<a id="bridge-gd10"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Produce an independently explainable artifact for this practice topic. Build and explain a small C# interaction with tested collections, input and lifecycle behavior.

**Supporting reading:** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD11 — Physics updates

<a id="bridge-gd11"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Separate rendering and fixed-step physics and test variable frame rates.

**Supporting reading:** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD12 — Trigger volumes

<a id="bridge-gd12"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Implement a non-blocking trigger volume and verify entry/exit events.

**Supporting reading:** [Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD13 — Rendering visibility

<a id="bridge-gd13"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Demonstrate frustum culling and measure the rendering work avoided.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD14 — Animation logic

<a id="bridge-gd14"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Test animation interruption when a character changes gameplay state.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD15 — Gameplay modeling

<a id="bridge-gd15"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a playable prototype with explicit state transitions, fixed-step physics and collision tests.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD16 — Texture coordinates

<a id="bridge-gd16"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Map a texture with UVs and explain seams/orientation in a simple mesh.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf); [Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD17 — Spatial audio

<a id="bridge-gd17"></a>

**Selected course(s):** [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

**Practice:** Configure spatial audio attenuation and test listener/source distances.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD18 — Accessible interaction

<a id="bridge-gd18"></a>

**Selected course(s):** [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/); [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

**Practice:** Make puzzle feedback understandable without relying on color alone.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD19 — Asset collaboration

<a id="bridge-gd19"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Use version control and ownership/locking rules for conflicting scene assets.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD20 — Inclusive interaction

<a id="bridge-gd20"></a>

**Selected course(s):** [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Produce an independently explainable artifact for this practice topic. Integrate animation/audio/UI with remapping, non-color cues and task-based accessibility checks.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD21 — Object pooling

<a id="bridge-gd21"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Pool projectiles and compare allocation/frame-time behavior.

**Supporting reading:** [Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD22 — Pathfinding

<a id="bridge-gd22"></a>

**Selected course(s):** [ALG: Introduction to Algorithms, 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)

**Practice:** Implement A* on a grid and justify an admissible heuristic.

**Supporting reading:** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf); [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD23 — Performance diagnosis

<a id="bridge-gd23"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Profile a reproducible build on its target device rather than only in the editor.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD24 — Save compatibility

<a id="bridge-gd24"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Migrate a versioned save file and test missing/new fields.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD25 — Performance practice

<a id="bridge-gd25"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Produce an independently explainable artifact for this practice topic. Profile a target build, fix a measured bottleneck and report frame-time/memory evidence.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD26 — Multiplayer authority

<a id="bridge-gd26"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Validate a pickup action on an authoritative server.

**Supporting reading:** [Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine); [Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD27 — Network messages

<a id="bridge-gd27"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Handle stale/out-of-order position updates and demonstrate smoothing.

**Supporting reading:** [Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD28 — Level of detail

<a id="bridge-gd28"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Compare LOD thresholds using visual error and frame-time measurements.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD29 — Interactive UI

<a id="bridge-gd29"></a>

**Selected course(s):** [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Implement initial menu focus and predictable controller navigation.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD30 — Multiplayer practice

<a id="bridge-gd30"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Produce an independently explainable artifact for this practice topic. Build a minimal authoritative prototype and test delay, loss, reconciliation and duplicated effects.

**Supporting reading:** [Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine); [Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD31 — Regression testing

<a id="bridge-gd31"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Write regression tests for gameplay formulas and edge cases.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD32 — Crash triage

<a id="bridge-gd32"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Use matching build symbols to investigate a synthetic crash report.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD33 — Instrumentation

<a id="bridge-gd33"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Instrument a tutorial funnel including sessions that abandon it.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD34 — Reproducible builds

<a id="bridge-gd34"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Reproduce a build from pinned code, assets, packages and configuration.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD35 — Release practice

<a id="bridge-gd35"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Produce an independently explainable artifact for this practice topic. Create a reproducible release with regression tests, crash symbols and a representative playtest report.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing); [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD36 — Frame budget

<a id="bridge-gd36"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Convert target FPS into a frame-time budget and allocate measured subsystem costs.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD37 — Pipeline bottleneck

<a id="bridge-gd37"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Model CPU/GPU overlap and verify the bottleneck with profiler evidence.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD38 — Fixed-step accumulator

<a id="bridge-gd38"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Implement a fixed-step accumulator and test residual time after several frames.

**Supporting reading:** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD39 — Simulation overload

<a id="bridge-gd39"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Bound catch-up work and document the simulation policy when overloaded.

**Supporting reading:** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html); [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD40 — Collision tunneling

<a id="bridge-gd40"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GAME: CS50 Introduction to 2D Game Development](https://cs50.harvard.edu/games/)

**Practice:** Reproduce projectile tunneling and evaluate an appropriate swept/CCD test.

**Supporting reading:** [Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD41 — Tail frame times

<a id="bridge-gd41"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Compare frame-time percentiles and trace the causes of long frames.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD42 — Texture memory

<a id="bridge-gd42"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Calculate texture memory for new dimensions/formats and compare engine estimates.

**Supporting reading:** [Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD43 — Mip-chain memory

<a id="bridge-gd43"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Calculate mip-chain storage and compare quality/memory with streaming settings.

**Supporting reading:** [Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD44 — Pool lifecycle

<a id="bridge-gd44"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Reset every relevant pooled-object field and test repeated reuse.

**Supporting reading:** [Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD45 — Event retention

<a id="bridge-gd45"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Demonstrate event-subscription retention and fix the subscription lifetime.

**Supporting reading:** [Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD46 — Alpha compositing

<a id="bridge-gd46"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Calculate ordered alpha compositing and verify it in a small rendering example.

**Supporting reading:** [Unity shader blend modes](https://docs.unity.com/en-us/engine/6000.7/manual/materials-and-shaders/shaders/writing-custom/shader-writing/sl/writing-shader-render-state-commands/blending-modes)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD47 — View-cone test

<a id="bridge-gd47"></a>

**Selected course(s):** [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Use dot products for a field-of-view check with boundary-angle tests.

**Supporting reading:** [Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD48 — Snapshot interpolation

<a id="bridge-gd48"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Interpolate buffered snapshots under simulated arrival jitter.

**Supporting reading:** [Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD49 — Prediction reconciliation

<a id="bridge-gd49"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Reconcile predicted movement and replay only unacknowledged inputs.

**Supporting reading:** [Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine); [Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD50 — Server validation

<a id="bridge-gd50"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Reject invalid client action claims based on server state and timing.

**Supporting reading:** [Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD51 — Ordered reliable delivery

<a id="bridge-gd51"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

**Practice:** Demonstrate head-of-line delay on an ordered reliable stream.

**Supporting reading:** [Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD52 — Replication bandwidth

<a id="bridge-gd52"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Estimate replication bandwidth and compare observed payload rates.

**Supporting reading:** [Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD53 — Deterministic replay

<a id="bridge-gd53"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Test deterministic replay with recorded inputs, seeds, ordering and state hashes.

**Supporting reading:** [Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD54 — Rollback side effects

<a id="bridge-gd54"></a>

**Selected course(s):** [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183); [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

**Practice:** Deduplicate external effects during rollback/re-simulation.

**Supporting reading:** [Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md); [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD55 — Audio synchronization

<a id="bridge-gd55"></a>

**Selected course(s):** [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

**Practice:** Schedule rhythm events using the audio clock and measure audiovisual alignment.

**Supporting reading:** [Unity scheduled audio playback](https://docs.unity.com/en-us/engine/6000.7/script-reference/unityengine/audiosource/playscheduled)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD56 — Accessibility validation

<a id="bridge-gd56"></a>

**Selected course(s):** [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core); [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

**Practice:** Generate prompts from active bindings and test remapped controls end to end.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD57 — Experiment interpretation

<a id="bridge-gd57"></a>

**Selected course(s):** [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Design a playtest that includes the intended novice audience and avoids unsupported generalization.

**Supporting reading:** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge GD58 — Advanced diagnosis

<a id="bridge-gd58"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

**Practice:** Produce an independently explainable artifact for this practice topic. Profile a target build, fix a measured bottleneck and report frame-time/memory evidence.

**Supporting reading:** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html); [Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD59 — Experience evaluation

<a id="bridge-gd59"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Produce an independently explainable artifact for this practice topic. Create a reproducible release with regression tests, crash symbols and a representative playtest report.

**Supporting reading:** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge GD60 — Integrated delivery

<a id="bridge-gd60"></a>

**Selected course(s):** [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Produce an independently explainable artifact for this practice topic. Create a reproducible release with regression tests, crash symbols and a representative playtest report.

**Supporting reading:** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer); [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.
