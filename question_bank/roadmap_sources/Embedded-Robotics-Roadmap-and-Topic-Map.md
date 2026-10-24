# Embedded Systems and Robotics — curated topic map and roadmap

Survey bank version 1 · Mapping/courses reviewed 20 October 2026 · 60/60 items mapped.

[Planning rules](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Roadmap-Logic-and-Implementation-Plan.md) · [Course catalog](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Curated-Roadmaps/Course-Catalog.md)

## How to use this guide

Confirm a suspected topic gap, check its prerequisites, study the relevant parts of the linked course(s), and complete the topic bridge below. For a narrow gap, select units addressing the named focus; do not require every linked course in full. Each bridge combines the study focus, supporting reading and a new practical task. The bridge is a proposed local learning unit, not a provider-certified course. Provider-level syllabus coverage was checked; exact lesson IDs and the assessment bank still need curation/versioning in the production CMS.

Self-assessment assignments ask for evidence. A confident response does not exempt the learner from demonstrating a skill. Broad theoretical courses intentionally have narrower labs added for tooling-specific details. Study-focus labels are curator labels rather than quoted provider lesson names.

## Prerequisite sequence and exit evidence

| Node | Suggested semester | Prerequisites | Course/resources | Estimated selected hours | Exit evidence |
|---|---:|---|---|---:|---|
| ER-C: C, binary and digital foundations | S1 | Entry diagnostic | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | 45 | Write bounded C code with memory/bit-operation tests and explain integer conversions. |
| ER-M: Microcontrollers and peripherals | S2 | ER-C | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | 55 | Interface a sensor/actuator and validate ADC/PWM/serial calculations with captured signals or simulator traces. |
| ER-T: Timing, sampling and interrupts | S3 | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | 45 | Measure timing, implement bounded ISRs and demonstrate debounce, calibration and aliasing behavior. |
| ER-R: RTOS concurrency and resources | S4 | ER-T | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | 50 | Trace task scheduling, handle shared data correctly and analyze deadlines and bounded buffers. |
| ER-K: Robot mathematics and motion | S3 | ER-C | [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702); [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | 50 | Verify frame transformations, forward/inverse kinematics and differential-drive calculations. |
| ER-U: Feedback control | S4 | ER-K, ER-T | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | 50 | Tune a controller in simulation and test saturation, timing variation and stopping constraints. |
| ER-O: ROS 2 and robot integration | S5 | ER-K, ER-R | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | 45 | Implement nodes, transforms and compatible QoS using the official ROS tutorials; record timestamped tests. |
| ER-E: Estimation and planning | S6 | ER-K, ER-U, ER-O | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | 45 | Test an estimator and planner with noisy/delayed measurements and clearance constraints. |
| ER-V: Dependability and verification | S7 | ER-R, ER-U, ER-E | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | 50 | Exercise watchdog, command-loss, update and persistence failures with documented recovery and operating limits. |

**Planning estimate: 435 hours** for selected specialization units and their topic labs. Add roughly 80–120 hours for an integrated capstone and 100 hours for shared foundation/interview review as needed. These are curator estimates, not provider-advertised durations. Do not add every topic lab again to the node estimate. Verified prior learning reduces the plan.

## Semester blueprint

| Semester | Suggested focus | Required progress evidence |
|---|---|---|
| S1 | ER-C C, binary and digital foundations | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S2 | ER-M Microcontrollers and peripherals | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S3 | ER-T Timing, sampling and interrupts; ER-K Robot mathematics and motion | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S4 | ER-R RTOS concurrency and resources; ER-U Feedback control | Pass the relevant node gates; preserve code, calculations and test evidence. |
| S5 | ER-O ROS 2 and robot integration | Pass the relevant node gates; preserve code, calculations and test evidence. Start internship/team-project applications and recurring interview practice. |
| S6 | ER-E Estimation and planning | Pass the relevant node gates; preserve code, calculations and test evidence. Produce an integrated project or reviewed internship contribution. |
| S7 | ER-V Dependability and verification | Pass the relevant node gates; preserve code, calculations and test evidence. Have a defensible portfolio ready before recruitment; move this earlier if the college calendar requires it. |
| S8 | Capstone refinement, mock interviews and targeted gap closure | Complete role-specific readiness gates, defend the capstone, and continue applications/interviews; list any unmet requirements. |

## Exact survey-topic mapping

Each row is one primary mapping. Course resources may recur across rows; the planner schedules overlapping units once. The numbered question is a diagnostic trigger, not the only assessment of the topic.

| Question | Topic / study focus | Learning node | Curated course/resources | Topic bridge |
|---|---|---|---|---|
| ER01 | Binary arithmetic (technical) | ER-C | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | [Task and reading](#bridge-er01) |
| ER02 | C arrays (technical) | ER-C | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | [Task and reading](#bridge-er02) |
| ER03 | Digital inputs (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er03) |
| ER04 | Feedback components (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er04) |
| ER05 | Embedded programming practice (practice) | ER-C | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | [Task and reading](#bridge-er05) |
| ER06 | ADC resolution (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er06) |
| ER07 | PWM duty cycle (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er07) |
| ER08 | Serial interfaces (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er08) |
| ER09 | Bit masking (technical) | ER-C | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | [Task and reading](#bridge-er09) |
| ER10 | Peripheral practice (practice) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er10) |
| ER11 | Timer conversion (technical) | ER-T | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er11) |
| ER12 | Interrupt handling (technical) | ER-T | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er12) |
| ER13 | Switch debounce (technical) | ER-T | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er13) |
| ER14 | Sensor calibration (technical) | ER-T | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er14) |
| ER15 | Timing practice (practice) | ER-T | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er15) |
| ER16 | RTOS blocking (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er16) |
| ER17 | Task mutual exclusion (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er17) |
| ER18 | Robot kinematics (technical) | ER-K | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er18) |
| ER19 | Differential drive (technical) | ER-K | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er19) |
| ER20 | Concurrency practice (practice) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er20) |
| ER21 | Feedback control (technical) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er21) |
| ER22 | Integral action (technical) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er22) |
| ER23 | ROS communication (technical) | ER-O | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | [Task and reading](#bridge-er23) |
| ER24 | Coordinate frames (technical) | ER-K | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er24) |
| ER25 | Control practice (practice) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er25) |
| ER26 | Sensor fusion (technical) | ER-E | [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/); [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er26) |
| ER27 | Planning and control (technical) | ER-E | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-er27) |
| ER28 | Obstacle clearance (technical) | ER-E | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-er28) |
| ER29 | Connected-device messages (technical) | ER-O | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | [Task and reading](#bridge-er29) |
| ER30 | Robot integration (practice) | ER-O | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | [Task and reading](#bridge-er30) |
| ER31 | Watchdog monitoring (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er31) |
| ER32 | Power-loss persistence (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er32) |
| ER33 | Hardware-in-the-loop testing (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er33) |
| ER34 | Command freshness (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er34) |
| ER35 | Verification practice (practice) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er35) |
| ER36 | Integer conversion (technical) | ER-C | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) | [Task and reading](#bridge-er36) |
| ER37 | ISR concurrency (technical) | ER-R | [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/); [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er37) |
| ER38 | Priority inversion (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er38) |
| ER39 | Response-time analysis (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er39) |
| ER40 | UART capacity (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er40) |
| ER41 | DMA cache coherence (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er41) |
| ER42 | Sampling alias (technical) | ER-T | [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er42) |
| ER43 | Antialias filtering (technical) | ER-T | [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/) | [Task and reading](#bridge-er43) |
| ER44 | PID anti-windup (technical) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er44) |
| ER45 | Timing jitter (technical) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er45) |
| ER46 | Differential-drive calculation (technical) | ER-K | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er46) |
| ER47 | Encoder resolution (technical) | ER-M | [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) | [Task and reading](#bridge-er47) |
| ER48 | Kinematic singularities (technical) | ER-K | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er48) |
| ER49 | ROS 2 QoS compatibility (technical) | ER-O | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | [Task and reading](#bridge-er49) |
| ER50 | Time-aligned transforms (technical) | ER-O | [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) | [Task and reading](#bridge-er50) |
| ER51 | Estimator covariance (technical) | ER-E | [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) | [Task and reading](#bridge-er51) |
| ER52 | Stopping-distance model (technical) | ER-U | [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) | [Task and reading](#bridge-er52) |
| ER53 | Ring-buffer overload (technical) | ER-R | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er53) |
| ER54 | Watchdog coverage (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er54) |
| ER55 | Update integrity (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er55) |
| ER56 | Integration diagnosis (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er56) |
| ER57 | Validation limits (technical) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er57) |
| ER58 | Advanced diagnosis (practice) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er58) |
| ER59 | System evaluation (practice) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er59) |
| ER60 | Integrated delivery (practice) | ER-V | [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) | [Task and reading](#bridge-er60) |

## Topic bridge tasks

For each task: (1) use the selected course foundations; (2) consult the relevant technical references; (3) complete the task with changed inputs/data rather than copying the original MCQ; (4) submit reproducible evidence and explain assumptions; (5) pass a fresh assessment. If the supporting reference is a broad curriculum or role guide, use the selected course for instruction and the task as the concrete learning target.

### Bridge ER01 — Binary arithmetic

<a id="bridge-er01"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

**Practice:** Convert between binary/hex/decimal and verify register-mask calculations.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER02 — C arrays

<a id="bridge-er02"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

**Practice:** Write C array access tests and detect out-of-bounds cases.

**Supporting reading:** [WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER03 — Digital inputs

<a id="bridge-er03"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Model an active-low input with a pull-up and verify pressed/unpressed levels.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER04 — Feedback components

<a id="bridge-er04"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Read encoder changes and distinguish sensing from motor actuation.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER05 — Embedded programming practice

<a id="bridge-er05"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

**Practice:** Produce an independently explainable artifact for this practice topic. Write bounded C code with memory/bit-operation tests and explain integer conversions.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER06 — ADC resolution

<a id="bridge-er06"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Calculate ADC quantization under an explicitly stated range convention.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER07 — PWM duty cycle

<a id="bridge-er07"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Measure PWM high time/period and compare duty cycle with the requested setting.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER08 — Serial interfaces

<a id="bridge-er08"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Capture or simulate an addressed serial transaction and explain bus signals.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER09 — Bit masking

<a id="bridge-er09"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

**Practice:** Set, clear and test individual bits without disturbing unrelated bits.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER10 — Peripheral practice

<a id="bridge-er10"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Produce an independently explainable artifact for this practice topic. Interface a sensor/actuator and validate ADC/PWM/serial calculations with captured signals or simulator traces.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER11 — Timer conversion

<a id="bridge-er11"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Convert timer ticks to elapsed time including a wraparound test.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER12 — Interrupt handling

<a id="bridge-er12"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Keep ISR work bounded and defer expensive processing with a suitable notification.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER13 — Switch debounce

<a id="bridge-er13"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Implement a debounce state machine and test noisy switch transitions.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER14 — Sensor calibration

<a id="bridge-er14"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Estimate sensor offset/scale from reference measurements and validate held-out points.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER15 — Timing practice

<a id="bridge-er15"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Produce an independently explainable artifact for this practice topic. Measure timing, implement bounded ISRs and demonstrate debounce, calibration and aliasing behavior.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER16 — RTOS blocking

<a id="bridge-er16"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Use a blocking queue receive with timeout and measure CPU behavior.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER17 — Task mutual exclusion

<a id="bridge-er17"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Protect task-owned shared state and test contention without using a mutex inside an ISR.

**Supporting reading:** [FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER18 — Robot kinematics

<a id="bridge-er18"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Compute forward kinematics and verify against a simulator.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER19 — Differential drive

<a id="bridge-er19"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Predict straight/turning differential-drive motion with changed wheel speeds.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER20 — Concurrency practice

<a id="bridge-er20"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Produce an independently explainable artifact for this practice topic. Trace task scheduling, handle shared data correctly and analyze deadlines and bounded buffers.

**Supporting reading:** [FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER21 — Feedback control

<a id="bridge-er21"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Implement a negative-feedback error convention and test actuator polarity.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER22 — Integral action

<a id="bridge-er22"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Compare steady-state error with and without integral action on a suitable plant.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER23 — ROS communication

<a id="bridge-er23"></a>

**Selected course(s):** [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst)

**Practice:** Create ROS publishers/subscribers and inspect message flow with command-line tools.

**Supporting reading:** [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER24 — Coordinate frames

<a id="bridge-er24"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Transform a point between sensor, robot and world frames with timestamp checks.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER25 — Control practice

<a id="bridge-er25"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Produce an independently explainable artifact for this practice topic. Tune a controller in simulation and test saturation, timing variation and stopping constraints.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER26 — Sensor fusion

<a id="bridge-er26"></a>

**Selected course(s):** [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/); [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Fuse noisy odometry and inertial measurements with documented uncertainty assumptions.

**Supporting reading:** [Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf); [NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER27 — Planning and control

<a id="bridge-er27"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Separate planned trajectories from the controller commands that track them.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER28 — Obstacle clearance

<a id="bridge-er28"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Plan with robot footprint clearance and test narrow passages.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER29 — Connected-device messages

<a id="bridge-er29"></a>

**Selected course(s):** [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst)

**Practice:** Deduplicate connected-device commands by stable identity.

**Supporting reading:** [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst); [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER30 — Robot integration

<a id="bridge-er30"></a>

**Selected course(s):** [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst)

**Practice:** Produce an independently explainable artifact for this practice topic. Implement nodes, transforms and compatible QoS using the official ROS tutorials; record timestamped tests.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER31 — Watchdog monitoring

<a id="bridge-er31"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Configure watchdog recovery and demonstrate missing-progress detection.

**Supporting reading:** [Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER32 — Power-loss persistence

<a id="bridge-er32"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Interrupt a persistent configuration update and recover a previous valid record.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER33 — Hardware-in-the-loop testing

<a id="bridge-er33"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Exercise a real or emulated controller against controlled plant/sensor signals.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER34 — Command freshness

<a id="bridge-er34"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Stop or enter the defined safe state after a command freshness timeout.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057); [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER35 — Verification practice

<a id="bridge-er35"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Produce an independently explainable artifact for this practice topic. Exercise watchdog, command-loss, update and persistence failures with documented recovery and operating limits.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER36 — Integer conversion

<a id="bridge-er36"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

**Practice:** Trace promoted C arithmetic and unsigned conversion with boundary values.

**Supporting reading:** [WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER37 — ISR concurrency

<a id="bridge-er37"></a>

**Selected course(s):** [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/); [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Reproduce a torn shared read and fix it using a target-appropriate atomic/snapshot protocol.

**Supporting reading:** [WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER38 — Priority inversion

<a id="bridge-er38"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Trace priority inversion and compare a mutex with priority inheritance.

**Supporting reading:** [FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER39 — Response-time analysis

<a id="bridge-er39"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Perform fixed-priority response-time analysis and compare a scheduling trace.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER40 — UART capacity

<a id="bridge-er40"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Calculate UART payload throughput including framing bits.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER41 — DMA cache coherence

<a id="bridge-er41"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Test CPU-to-DMA buffer visibility with documented cache maintenance and ownership.

**Supporting reading:** [ST AN4839: CPU cache and DMA coherence](https://www.st.com/resource/en/application_note/DM00272913-.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER42 — Sampling alias

<a id="bridge-er42"></a>

**Selected course(s):** [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Generate aliased samples and demonstrate ambiguity between original frequencies.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER43 — Antialias filtering

<a id="bridge-er43"></a>

**Selected course(s):** [SIGNAL: Signals and Systems, RES.6-007](https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/)

**Practice:** Choose an analog antialias filter/sample rate before acquisition.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER44 — PID anti-windup

<a id="bridge-er44"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Test PID saturation with and without an anti-windup strategy.

**Supporting reading:** [MathWorks anti-windup control example](https://www.mathworks.com/help/simulink/slref/anti-windup-control-using-a-pid-controller.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER45 — Timing jitter

<a id="bridge-er45"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Measure control-loop sampling jitter and evaluate its effect on response.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057); [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER46 — Differential-drive calculation

<a id="bridge-er46"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Compute differential-drive linear/angular speeds and compare simulated motion.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER47 — Encoder resolution

<a id="bridge-er47"></a>

**Selected course(s):** [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

**Practice:** Convert encoder increments into shaft angle with explicit gearing/decoding conventions.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER48 — Kinematic singularities

<a id="bridge-er48"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Measure Jacobian conditioning and compare bounded/damped inverse solutions.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER49 — ROS 2 QoS compatibility

<a id="bridge-er49"></a>

**Selected course(s):** [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst)

**Practice:** Test compatible and incompatible ROS reliability QoS pairs.

**Supporting reading:** [ROS 2 QoS official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER50 — Time-aligned transforms

<a id="bridge-er50"></a>

**Selected course(s):** [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst)

**Practice:** Transform delayed measurements at acquisition time and compare map distortion.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER51 — Estimator covariance

<a id="bridge-er51"></a>

**Selected course(s):** [STAT: Introduction to Probability and Statistics, 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/)

**Practice:** Vary assumed measurement covariance and compare estimation error/confidence.

**Supporting reading:** [Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER52 — Stopping-distance model

<a id="bridge-er52"></a>

**Selected course(s):** [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Practice:** Calculate reaction-plus-braking distance and test stated model assumptions.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER53 — Ring-buffer overload

<a id="bridge-er53"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Measure bounded-buffer fill time under sustained producer/consumer imbalance.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER54 — Watchdog coverage

<a id="bridge-er54"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Make watchdog servicing conditional on progress of required tasks.

**Supporting reading:** [Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER55 — Update integrity

<a id="bridge-er55"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Verify a signed test firmware image and reject altered/untrusted images.

**Supporting reading:** [MCUboot signed-image validation](https://github.com/mcu-tools/mcuboot/blob/main/docs/signed_images.md)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER56 — Integration diagnosis

<a id="bridge-er56"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Investigate PWM-correlated sensor spikes while the mechanism remains stationary.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER57 — Validation limits

<a id="bridge-er57"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Test representative sensor/environment failures beyond an ideal simulation.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057); [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

**Completion:** Fresh knowledge/transfer assessment plus independent task rubric; published survey item alone is insufficient.

### Bridge ER58 — Advanced diagnosis

<a id="bridge-er58"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Produce an independently explainable artifact for this practice topic. Exercise watchdog, command-loss, update and persistence failures with documented recovery and operating limits.

**Supporting reading:** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER59 — System evaluation

<a id="bridge-er59"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Produce an independently explainable artifact for this practice topic. Exercise watchdog, command-loss, update and persistence failures with documented recovery and operating limits.

**Supporting reading:** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.

### Bridge ER60 — Integrated delivery

<a id="bridge-er60"></a>

**Selected course(s):** [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

**Practice:** Produce an independently explainable artifact for this practice topic. Exercise watchdog, command-loss, update and persistence failures with documented recovery and operating limits.

**Supporting reading:** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193); [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057); [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

**Completion:** Review independent artifact and explanation; self-reported option alone never establishes mastery.
