# Embedded Systems and Robotics — nested competency surveys

Version 1 · Administrator edition with answers · Research checked 15–16 October 2026.

Scope: microcontrollers, C, peripherals, timing, RTOS concurrency, sensing, control, kinematics, ROS 2, communications, and dependable robot integration. IoT transport appears where relevant to connected robots.

**Research emphasis:** NPTEL Robotics and the authors’ Modern Robotics material establish motion/control coverage. FreeRTOS and official ROS 2 documentation inform embedded concurrency and middleware. ROS website access was blocked, so the official ROS documentation repository was used for QoS material.

## Forms and scoring

| Form | IDs (inclusive) | Technical | Self-assessment | Total | Raw maximum |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S1.md) | ER01–ER60 | 50 | 10 | 60 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S2.md) | ER06–ER60 | 46 | 9 | 55 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S3.md) | ER11–ER60 | 42 | 8 | 50 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S4.md) | ER16–ER60 | 38 | 7 | 45 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S5.md) | ER21–ER60 | 34 | 6 | 40 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S6.md) | ER26–ER60 | 30 | 5 | 35 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S7.md) | ER31–ER60 | 26 | 4 | 30 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Embedded-Robotics/Semesters/S8.md) | ER36–ER60 | 22 | 3 | 25 | 94 |

Each form uses the strict rule **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1**. All ID ranges are inclusive. S8 contains IDs 36–60; each preceding form adds five earlier IDs, comprising four competency questions and one self-assessment. Inherited wording, options, keys, and weights are identical. There are 60 unique questions and 340 appearances across the eight forms.

Competency questions have four options and one correct answer. Weights are 2 for tiers 1–2, 3 for tiers 3–6, and 4 for tiers 7–8. Correct = full weight; incorrect or unanswered = 0. Each self-assessment has weight 2 and scores A=0, B=0.5, C=1, D=2; unanswered=0. There is no negative marking. Self-assessment measures reported practice; it has no objectively correct answer. Coursework, simulators, personal projects, and local demonstrations are acceptable evidence; paid experience is not required.

The proposed weighting gives foundational recognition/code-reading items 2 points, applied intermediate competencies 3, and later-stage integration/diagnosis 4. Self-report is capped at 2 to keep demonstrated knowledge dominant. These are design priorities, not empirically estimated item difficulty or weights prescribed by the sources. Some late-stage items check essential fundamentals in advanced contexts and will be easier than other items in the same tier.

`finalScore = 100 × rawPoints / formMaximum`. Also report `technicalScore = 100 × technicalPoints / technicalMaximum` and `practiceScore = 100 × selfAssessmentPoints / practiceMaximum`. Preserve raw values and round only for display. S8 has technicalMaximum=88 and practiceMaximum=6; 64 technical plus 4 practice points produces 68/94 = **72.34/100**. In S1, self-assessment contributes at most 20/188 = 10.64% of raw points; in S8 it contributes at most 6/94 = 6.38%.

S1 includes advanced stretch questions. Its overall percentage is not an appropriate first-year pass/fail judgment. Present tier and topic gaps, then recommend prerequisite learning before advanced work. Normalization does not make scores from different forms equally difficult. The shared tier-8 technical items permit a common-item subscore, though repeat exposure may inflate it. Four technical questions in an earlier tier are a screening sample, not a comprehensive diagnosis.

Semester tiers are proposed learning stages, not a claim about every university syllabus. Weights, ordering, and difficulty have not been psychometrically validated. Pilot with faculty and students, review ambiguous items and distractors, and confirm practical ability through work samples before consequential recommendations. A student joining in a late semester may need a separately labelled prerequisite check. Omitting difficult questions through adaptive stopping would create a different form and would no longer implement these exact membership lists.

These original interview-style questions are informed by official curricula, role guidance, and technical documentation. They are not represented as actual employer interview questions. Source links indicate technical support or topic relevance; worked calculations and scenario assumptions establish the intended answers. Professional certification profiles describe skill areas, not B.Tech hiring cutoffs or a representative survey of all employers.


## Complete bank

## Tier 1 — Digital and programming foundations

Included in S1.

### ER01 — Binary arithmetic

**Competency MCQ · Tier 1 · Weight 2**

What is the decimal value of the binary number 1010?

- **A.** 14
- **B.** 10
- **C.** 8
- **D.** 12

**Answer: B.** The set bits contribute 8 and 2, giving 10.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER02 — C arrays

**Competency MCQ · Tier 1 · Weight 2**

In C, `int readings[3] = {4, 7, 9};` is declared. Which expression reads the value 7?

- **A.** readings[3]
- **B.** readings[0]
- **C.** readings[1]
- **D.** readings[2]

**Answer: C.** C arrays use zero-based indexing. Index 3 is outside this three-element array.

**Reference basis:** [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

### ER03 — Digital inputs

**Competency MCQ · Tier 1 · Weight 2**

An active-low button connects a GPIO input to ground when pressed, with a pull-up resistor to the supply. What logic level is expected when pressed?

- **A.** Low
- **B.** Always floating
- **C.** High
- **D.** A level determined only by CPU frequency

**Answer: A.** Pressing the button pulls the input toward ground; the pull-up defines the unpressed level.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER04 — Feedback components

**Competency MCQ · Tier 1 · Weight 2**

Which component most directly measures a motor shaft's rotation for feedback?

- **A.** Fuse
- **B.** Rotary encoder
- **C.** Motor driver
- **D.** Power regulator

**Answer: B.** An encoder produces position or incremental rotation information; the driver controls motor power.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER05 — Embedded programming practice

**Self-assessment MCQ · Tier 1 · Weight 2**

What evidence can you demonstrate of writing a small embedded C program or equivalent simulator task?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show independently written code that reads input and controls an output **(1 points)**
- **D.** I can also explain the code and demonstrate boundary or error-case tests **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

## Tier 2 — Microcontrollers and interfaces

Included in S1 through S2.

### ER06 — ADC resolution

**Competency MCQ · Tier 2 · Weight 2**

An ideal 12-bit ADC spans 0–3.3 V with 4096 equal quantization bins. Approximately what is one bin's width?

- **A.** 3.3 mV
- **B.** 12 mV
- **C.** 0.806 mV
- **D.** 80.6 mV

**Answer: C.** 3.3/4096 V ≈ 0.000806 V = 0.806 mV. The stated bin model avoids endpoint-convention ambiguity.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER07 — PWM duty cycle

**Competency MCQ · Tier 2 · Weight 2**

A PWM signal is high for 0.5 ms in every 2 ms period. What is its duty cycle?

- **A.** 50%
- **B.** 25%
- **C.** 4%
- **D.** 75%

**Answer: B.** Duty cycle is high time divided by period: 0.5/2=0.25.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER08 — Serial interfaces

**Competency MCQ · Tier 2 · Weight 2**

Which common interface uses SDA and SCL lines and device addresses on a shared bus?

- **A.** UART with TX/RX only
- **B.** I2C
- **C.** An analog voltage divider
- **D.** A parallel GPIO port

**Answer: B.** I2C uses serial data and clock lines with addressed transactions.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER09 — Bit masking

**Competency MCQ · Tier 2 · Weight 2**

For an unsigned status value, which C expression tests whether bit 3 is set, numbering the least significant bit as 0?

- **A.** `(status & (1u << 3)) != 0`
- **B.** `status == 3`
- **C.** `(status >> 3) == 0`
- **D.** `status + 3 == 0`

**Answer: A.** Shifting 1 by three creates the bit-3 mask; bitwise AND isolates that bit.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER10 — Peripheral practice

**Self-assessment MCQ · Tier 2 · Weight 2**

What evidence can you demonstrate of interfacing a sensor or actuator on hardware or a peripheral simulator?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently configured interface with measured or simulated input/output **(1 points)**
- **D.** I can also explain timing and electrical assumptions and demonstrate a diagnosed interface fault **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

## Tier 3 — Timing, interrupts, and sensors

Included in S1 through S3.

### ER11 — Timer conversion

**Competency MCQ · Tier 3 · Weight 3**

A timer increments at 1 MHz. Ignoring wraparound, what elapsed time do 1000 ticks represent?

- **A.** 1 second
- **B.** 1 microsecond
- **C.** 1 millisecond
- **D.** 100 milliseconds

**Answer: C.** Each tick is 1 microsecond; 1000 ticks are 1000 microseconds or 1 millisecond.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER12 — Interrupt handling

**Competency MCQ · Tier 3 · Weight 3**

A sensor ISR must acknowledge an interrupt and trigger expensive processing. Which design usually keeps interrupt latency for other work bounded?

- **A.** Wait inside the ISR until a user presses a button
- **B.** Allocate and process an unbounded batch before acknowledging
- **C.** Perform a blocking network request inside the ISR
- **D.** Capture minimal data, acknowledge the source, and notify a task using an ISR-safe mechanism

**Answer: D.** Short bounded ISR work limits interference; longer processing can be deferred to an appropriately scheduled task.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER13 — Switch debounce

**Competency MCQ · Tier 3 · Weight 3**

A mechanical switch creates several transitions during one physical press. What does debouncing address?

- **A.** Changing the motor gear ratio
- **B.** Converting UART data into SPI
- **C.** Increasing the ADC voltage range
- **D.** Treating rapid contact oscillations as one stable input change

**Answer: D.** Mechanical contacts bounce; filtering or a stable-time state machine prevents multiple false presses.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER14 — Sensor calibration

**Competency MCQ · Tier 3 · Weight 3**

A temperature sensor repeatedly reads 2°C above a trusted reference across a narrow operating range. Which simple calibration fits that observed constant bias?

- **A.** Add 2°C to each reading
- **B.** Reverse the order of the samples
- **C.** Multiply every reading by 2
- **D.** Subtract 2°C from each reading in that validated range

**Answer: D.** An additive offset correction addresses a constant bias. Wider ranges may require a richer calibration model.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER15 — Timing practice

**Self-assessment MCQ · Tier 3 · Weight 2**

What evidence can you demonstrate of implementing a timed or interrupt-driven task?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent timer/ISR implementation with captured timing evidence **(1 points)**
- **D.** I can also show latency measurements or simulation traces and explain how long work is deferred **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

## Tier 4 — RTOS and robot motion

Included in S1 through S4.

### ER16 — RTOS blocking

**Competency MCQ · Tier 4 · Weight 3**

A task needs to wait for a queue item without wasting CPU time. Which approach is appropriate?

- **A.** Use a queue receive with a suitable blocking timeout
- **B.** Spin continuously checking whether the queue is empty
- **C.** Hold every shared mutex while waiting
- **D.** Disable interrupts until an item appears

**Answer: A.** Blocking lets other tasks run; a suitable timeout can support recovery when data does not arrive.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER17 — Task mutual exclusion

**Competency MCQ · Tier 4 · Weight 3**

Two tasks modify a shared data structure. Which primitive is designed to guard an owned critical section between tasks?

- **A.** A PWM output
- **B.** An ADC channel
- **C.** A mutex used with consistent lock ownership
- **D.** A read-only constant

**Answer: C.** A mutex controls task access to a shared resource. ISR interactions require mechanisms suitable for interrupt context.

**Reference basis:** [E1: FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

### ER18 — Robot kinematics

**Competency MCQ · Tier 4 · Weight 3**

What does forward kinematics compute for a robot arm?

- **A.** Battery charge from motor temperature
- **B.** Obstacle locations from Wi-Fi strength
- **C.** End-effector pose from joint coordinates and the robot model
- **D.** Joint coordinates from a desired end-effector pose

**Answer: C.** Forward kinematics maps joint configuration to pose; solving joint configuration from pose is inverse kinematics.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E3: NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

### ER19 — Differential drive

**Competency MCQ · Tier 4 · Weight 3**

An ideal differential-drive robot has equal positive left and right wheel linear speeds. With no slip, what motion results?

- **A.** Straight forward motion
- **B.** A turn whose radius must be zero
- **C.** Straight backward motion
- **D.** Rotation in place

**Answer: A.** Equal wheel speeds produce zero angular velocity and nonzero forward velocity.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER20 — Concurrency practice

**Self-assessment MCQ · Tier 4 · Weight 2**

What evidence can you demonstrate of building a small RTOS or concurrent robot application?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show independent tasks with a documented shared-resource or message-passing design **(1 points)**
- **D.** I can also show contention/failure tests and explain synchronization choices **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E1: FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

## Tier 5 — Control and robot middleware

Included in S1 through S5.

### ER21 — Feedback control

**Competency MCQ · Tier 5 · Weight 3**

A speed controller compares a desired speed with measured speed. What is the usual error for negative-feedback control?

- **A.** Desired speed plus measured speed
- **B.** The encoder count without reference to the desired speed
- **C.** Measured speed multiplied by supply voltage
- **D.** Desired speed minus measured speed

**Answer: D.** The sign convention e=reference−measurement lets the controller respond to tracking error; actuator polarity must be consistent.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER22 — Integral action

**Competency MCQ · Tier 5 · Weight 3**

Which PID term can remove a persistent constant tracking error in a suitable stable closed-loop system?

- **A.** Derivative term alone
- **B.** A coordinate-frame label
- **C.** A timestamp field
- **D.** Integral term

**Answer: D.** Integrating a sustained error accumulates corrective action. Stability and saturation handling still matter.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER23 — ROS communication

**Competency MCQ · Tier 5 · Weight 3**

A robot continuously publishes sensor measurements for multiple consumers. Which ROS 2 interaction is the natural fit?

- **A.** A topic with publishers and subscribers
- **B.** A service that is called exactly once during compilation
- **C.** A firmware linker section
- **D.** A local variable that exists only in one callback

**Answer: A.** Topics support asynchronous streams and multiple consumers; services fit request-response interactions.

**Reference basis:** [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER24 — Coordinate frames

**Competency MCQ · Tier 5 · Weight 3**

A lidar point is expressed in the lidar frame, but a map expects map-frame coordinates. What is required before combining them correctly?

- **A.** Sorting points by intensity
- **B.** Only changing the point's text label
- **C.** A valid transform between the frames at the measurement time
- **D.** Dropping all timestamps unconditionally

**Answer: C.** Coordinates need a transformation, not a renamed label; a moving platform makes the transform time-dependent.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER25 — Control practice

**Self-assessment MCQ · Tier 5 · Weight 2**

What evidence can you demonstrate of implementing a feedback controller on a simulated or physical plant?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent controller with recorded reference and measured response **(1 points)**
- **D.** I can also show tuning evidence, saturation handling, and a discussion of stability and timing limits **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

## Tier 6 — Estimation, planning, and integration

Included in S1 through S6.

### ER26 — Sensor fusion

**Competency MCQ · Tier 6 · Weight 3**

Why might a mobile robot combine wheel odometry with an IMU?

- **A.** Their information and error characteristics can complement each other
- **B.** Wheel slip becomes physically impossible
- **C.** An IMU directly measures absolute global position without integration
- **D.** Two sensors guarantee zero error in every situation

**Answer: A.** Odometry and inertial measurements have different limitations, so a suitable estimator can exploit complementary information.

**Reference basis:** [E11: Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf), [E3: NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

### ER27 — Planning and control

**Competency MCQ · Tier 6 · Weight 3**

Which distinction is most accurate?

- **A.** A planner chooses a route or trajectory; a controller produces commands to track it
- **B.** Planning and control both mean reading only battery voltage
- **C.** A planner must always execute at the motor PWM frequency
- **D.** A controller chooses source-code filenames; a planner compiles them

**Answer: A.** Planning and feedback control operate on related but distinct problems and may use different update rates.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E3: NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)

### ER28 — Obstacle clearance

**Competency MCQ · Tier 6 · Weight 3**

Why inflate obstacles in a configuration-space map for a robot with nonzero width?

- **A.** To make the physical robot smaller
- **B.** To account for the robot's footprint when checking feasible motion
- **C.** To eliminate the need for localization
- **D.** To increase encoder resolution

**Answer: B.** Inflation converts body-clearance constraints into a planning representation, commonly approximating the robot as a reference point.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER29 — Connected-device messages

**Competency MCQ · Tier 6 · Weight 3**

A robot receives duplicated command messages because its transport offers at-least-once delivery. What application design avoids repeating a one-time action?

- **A.** Apply each command twice to maintain symmetry
- **B.** Use stable command IDs and track which commands were already applied
- **C.** Assume each received message must be a new intention
- **D.** Use arrival order as the only permanent identity

**Answer: B.** At-least-once delivery permits duplicates; application-level identities allow deduplication.

**Reference basis:** [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst), [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### ER30 — Robot integration

**Self-assessment MCQ · Tier 6 · Weight 2**

What evidence can you demonstrate of integrating robot sensing, transforms, and motion behavior?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent simulation or hardware demonstration with consistent frames and timestamps **(1 points)**
- **D.** I can also show tests for delayed/noisy data and explain how the system responds **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

## Tier 7 — Reliability and verification

Included in S1 through S7.

### ER31 — Watchdog monitoring

**Competency MCQ · Tier 7 · Weight 4**

What is the purpose of a watchdog configured to reset an unresponsive controller?

- **A.** Improve ADC resolution
- **B.** Increase motor torque automatically
- **C.** Trigger recovery when required software progress is not observed within a timeout
- **D.** Correct every possible sensor calibration error

**Answer: C.** A watchdog detects missing timely servicing and can initiate configured recovery; it does not prove full system correctness.

**Reference basis:** [E7: Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

### ER32 — Power-loss persistence

**Competency MCQ · Tier 7 · Weight 4**

Configuration may be interrupted while being written to flash. Which design improves recovery?

- **A.** Use versioned records with integrity checks and a commit strategy that preserves a previous valid record
- **B.** Treat partially written bytes as a valid configuration
- **C.** Store every configuration solely in an uninitialized variable
- **D.** Overwrite the only copy and assume power remains on

**Answer: A.** A recoverable record protocol can distinguish complete valid data from interrupted writes and retain a fallback.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER33 — Hardware-in-the-loop testing

**Competency MCQ · Tier 7 · Weight 4**

What is a hardware-in-the-loop test in this context?

- **A.** Compiling without running any controller code
- **B.** Testing only a screenshot of the robot
- **C.** Running the real controller against simulated or controlled plant/sensor signals
- **D.** Reviewing only a mechanical drawing

**Answer: C.** HIL exercises controller hardware and interfaces while the physical environment is represented or controlled.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER34 — Command freshness

**Competency MCQ · Tier 7 · Weight 4**

A moving robot stops receiving velocity commands. Which control policy best handles the loss of fresh commands?

- **A.** Increase speed to reconnect faster
- **B.** Disable all sensor feedback
- **C.** Use a bounded command timeout and enter a defined safe motion state
- **D.** Keep the last nonzero speed forever

**Answer: C.** Stale commands must not remain valid indefinitely; the safe response depends on the system's hazard analysis and dynamics.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057), [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER35 — Verification practice

**Self-assessment MCQ · Tier 7 · Weight 2**

What evidence can you demonstrate of testing embedded or robot failure handling?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show independent tests for a timeout, sensor fault, or restart condition **(1 points)**
- **D.** I can also show expected-versus-observed results, repeatable fault injection, and a fix verified by retesting **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

## Tier 8 — Advanced timing, control, concurrency, and robot-system diagnosis

Included in S1 through S8.

### ER36 — Integer conversion

**Competency MCQ · Tier 8 · Weight 4**

Assume C provides `uint8_t`. After `uint8_t x = 250; x = (uint8_t)(x + 10);`, what is x?

- **A.** 4
- **B.** 255
- **C.** Undefined solely because the final value exceeds 255
- **D.** 260

**Answer: A.** The addition is representable after integer promotion; conversion to an 8-bit unsigned type reduces 260 modulo 256 to 4.

**Reference basis:** [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

### ER37 — ISR concurrency

**Competency MCQ · Tier 8 · Weight 4**

A 32-bit variable is shared between a task and an ISR on a platform where 32-bit access is not atomic. Why is declaring it `volatile` insufficient for a consistent read?

- **A.** Volatile alone establishes a consistent multiword snapshot even if interrupts occur between loads
- **B.** Volatile turns any variable access into one indivisible machine instruction
- **C.** Volatile does not make a multi-instruction access atomic or prevent a torn value
- **D.** Volatile inserts a mutex that the ISR and task acquire automatically

**Answer: C.** Visibility of accesses and atomicity are different. Use an appropriate bounded critical section, atomic facility, or safe snapshot protocol for the target.

**Reference basis:** [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER38 — Priority inversion

**Competency MCQ · Tier 8 · Weight 4**

A low-priority task holds a mutex needed by a high-priority task, while a medium-priority task keeps preempting the low-priority task. Which mechanism directly mitigates this inversion?

- **A.** Increase only the unrelated medium-priority task priority to make it finish earlier
- **B.** Temporarily inherit the waiting task's higher priority while holding the mutex
- **C.** Disable preemption for the entire application, regardless of deadline requirements
- **D.** Replace the blocking mutex with a high-priority busy loop that prevents the owner from running

**Answer: B.** Priority inheritance lets the owner finish the protected work sooner; it does not solve every deadlock or scheduling problem.

**Reference basis:** [E1: FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

### ER39 — Response-time analysis

**Competency MCQ · Tier 8 · Weight 4**

On one CPU, task H has execution time 1 ms and period/deadline 4 ms. Lower-priority task L has execution time 3 ms and period/deadline 10 ms. Assume fixed priorities, preemption, no blocking/jitter/overhead, and synchronous release. Solve L's worst-case response using R=3+ceil(R/4)×1. What is the result?

- **A.** 3 ms, because interference never counts
- **B.** 7 ms, missing L's deadline
- **C.** 11 ms, missing L's deadline
- **D.** 4 ms, meeting L's 10 ms deadline

**Answer: D.** Starting at R=3 gives 4; substituting 4 gives 4 again. L finishes in 4 ms in this model.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER40 — UART capacity

**Competency MCQ · Tier 8 · Weight 4**

A UART runs at 115200 bit/s using 8N1: one start bit, eight data bits, one stop bit. Ignore inter-byte gaps. What is the maximum data-byte rate?

- **A.** 11,520 bytes/s
- **B.** 9,600 bytes/s
- **C.** 14,400 bytes/s
- **D.** 115,200 bytes/s

**Answer: A.** Each payload byte occupies ten transmitted bits, so 115200/10=11520 bytes/s.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER41 — DMA cache coherence

**Competency MCQ · Tier 8 · Weight 4**

On a non-coherent write-back-cache MCU, the CPU writes a transmit buffer in cache and DMA reads main memory. DMA transmits old bytes. Which fix addresses this specific stale-data path?

- **A.** Clean the appropriate cache lines before DMA reads, with required alignment, barriers, and ownership rules
- **B.** Invalidate dirty cache lines and discard the new data before transmission
- **C.** Increase the UART stop-bit count
- **D.** Only mark the C pointer volatile

**Answer: A.** Dirty CPU cache contents must reach memory before a non-coherent DMA reader accesses them; follow the target's cache maintenance requirements.

**Reference basis:** [E9: ST AN4839: CPU cache and DMA coherence](https://www.st.com/resource/en/application_note/DM00272913-.pdf)

### ER42 — Sampling alias

**Competency MCQ · Tier 8 · Weight 4**

A pure 70 Hz sinusoid is sampled uniformly at 100 samples/s with no antialias filter. Which lower-frequency sinusoid can produce the same samples up to phase/sign convention?

- **A.** 170 kHz
- **B.** 70 kHz
- **C.** 100 Hz
- **D.** 30 Hz

**Answer: D.** 70 Hz folds around the 50 Hz Nyquist frequency to abs(100−70)=30 Hz; the sampled data cannot uniquely identify the original frequency.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193), [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### ER43 — Antialias filtering

**Competency MCQ · Tier 8 · Weight 4**

A sensor contains frequencies above half the sampling rate. Which action addresses aliasing before acquisition?

- **A.** Add timestamps to the same samples and treat the analog bandwidth constraint as removed
- **B.** Apply an appropriate analog low-pass filter before the ADC, or raise the sample rate with suitable filtering
- **C.** Use only a post-sampling low-pass filter and assume it separates an aliased component from a genuine lower-frequency component
- **D.** Increase ADC bit depth without changing sampling bandwidth or rate

**Answer: B.** Once different analog frequencies map to identical samples, post-processing alone cannot generally undo the ambiguity.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER44 — PID anti-windup

**Competency MCQ · Tier 8 · Weight 4**

A motor command saturates while the PID integral term continues to grow, causing a long overshoot after the error reverses. What change targets the cause?

- **A.** Use an anti-windup strategy such as conditional integration or back-calculation tied to actuator limits
- **B.** Remove every measurement timestamp
- **C.** Increase integral gain without considering saturation
- **D.** Accumulate the integral faster during saturation

**Answer: A.** Anti-windup limits inappropriate integral accumulation when requested control cannot be delivered.

**Reference basis:** [E10: MathWorks anti-windup control example](https://www.mathworks.com/help/simulink/slref/anti-windup-control-using-a-pid-controller.html)

### ER45 — Timing jitter

**Competency MCQ · Tier 8 · Weight 4**

A discrete controller assumes a 1 ms sample period, but actual intervals vary from 1 to 8 ms. What is the strongest next step?

- **A.** Resample logged data after the run and assume this repairs the controller timing that actually occurred
- **B.** Measure timing, remove avoidable jitter, and analyze the controller with its actual sampling and delay behavior
- **C.** Increase proportional gain until the nominal simulation tracks well, without measuring timing
- **D.** Tune using the nominal 1 ms period and treat a correct average rate as sufficient

**Answer: B.** Sampling variation and delay can change closed-loop behavior; implementation timing is part of the control design.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057), [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER46 — Differential-drive calculation

**Competency MCQ · Tier 8 · Weight 4**

An ideal robot has left wheel linear speed 0.4 m/s, right wheel speed 0.6 m/s, and track width 0.5 m. With v=(vr+vl)/2 and omega=(vr−vl)/track, what are v and omega?

- **A.** 0.5 m/s and 2 rad/s
- **B.** 1.0 m/s and 0.2 rad/s
- **C.** 0.5 m/s and 0.4 rad/s
- **D.** 0.2 m/s and 0.5 rad/s

**Answer: C.** The mean wheel speed is 0.5 m/s; the speed difference divided by width is 0.2/0.5=0.4 rad/s.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER47 — Encoder resolution

**Competency MCQ · Tier 8 · Weight 4**

An encoder provides 1024 counted increments per output-shaft revolution, already including decoding and gearing. What angle does one count represent?

- **A.** Approximately 0.3516 degrees
- **B.** Exactly 1024 degrees
- **C.** Approximately 2.8125 degrees
- **D.** Exactly 1 degree

**Answer: A.** 360°/1024≈0.3516°. The question explicitly includes gearing and quadrature in the stated count.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193), [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER48 — Kinematic singularities

**Competency MCQ · Tier 8 · Weight 4**

Near a robot-arm Jacobian singularity, a small desired end-effector velocity can require very large joint velocities. Which response is appropriate?

- **A.** Clip joint speeds independently and assume the exact desired Cartesian motion is still guaranteed
- **B.** Use the ordinary Jacobian inverse without conditioning checks or joint-speed bounds
- **C.** Use a suitable damped inverse/constraint-aware method and avoid infeasible motion near the singularity
- **D.** Scale the commanded Cartesian velocity up until the inverse solution becomes numerically larger

**Answer: C.** A poorly conditioned Jacobian amplifies commands; damping and constraints trade exact tracking for bounded feasible motion.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER49 — ROS 2 QoS compatibility

**Competency MCQ · Tier 8 · Weight 4**

A ROS 2 publisher offers BEST_EFFORT reliability and a subscriber requests RELIABLE reliability. Assume all other settings match. Are these reliability policies compatible?

- **A.** No; the publisher does not offer the reliability requested by the subscriber
- **B.** Yes; the subscriber retransmits data that the publisher never delivered
- **C.** Yes; matching topic names bypass all QoS compatibility checks
- **D.** Yes; reliability is negotiated upward to the stronger request automatically

**Answer: A.** ROS 2 requested/offered QoS compatibility requires the publisher to satisfy the subscriber's requested reliability.

**Reference basis:** [E4: ROS 2 QoS official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst)

### ER50 — Time-aligned transforms

**Competency MCQ · Tier 8 · Weight 4**

A robot receives a delayed lidar scan while turning. Transforming it with the robot's current pose bends otherwise static walls in the map. What is the best correction?

- **A.** Transform the whole scan with the most recent pose, regardless of the timestamp difference
- **B.** Increase the number of map cells without correcting the temporal misalignment
- **C.** Replace every scan timestamp with its arrival time and assume transport delay is zero
- **D.** Use the pose/transform corresponding to measurement time, accounting for scan timing where needed

**Answer: D.** Spatial fusion must align coordinate frames in time; moving scanners may also need per-point motion compensation.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER51 — Estimator covariance

**Competency MCQ · Tier 8 · Weight 4**

A Kalman-style estimator is given a measurement noise covariance R much smaller than the sensor's actual noise. What is a likely consequence, other factors equal?

- **A.** It gives those measurements too much influence and may become overconfident or noisy
- **B.** It automatically detects every sensor failure
- **C.** It necessarily ignores the measurements entirely
- **D.** It guarantees exact ground-truth position

**Answer: A.** Understated uncertainty overweights observations relative to prediction; covariance assumptions need validation.

**Reference basis:** [E11: Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf)

### ER52 — Stopping-distance model

**Competency MCQ · Tier 8 · Weight 4**

A robot travels at 2 m/s. It keeps that speed for a 0.1 s reaction delay, then decelerates constantly at 1 m/s² to rest. Ignore slope and slip. What minimum distance follows from this model?

- **A.** 4.2 metres
- **B.** 2.0 metres
- **C.** 0.2 metres
- **D.** 2.2 metres

**Answer: D.** Reaction travel is 2×0.1=0.2 m; braking travel is v²/(2a)=4/2=2 m. Total=2.2 m before any safety margin.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER53 — Ring-buffer overload

**Competency MCQ · Tier 8 · Weight 4**

An ISR produces 1000 samples/s and a task consumes 800 samples/s steadily. An empty ring buffer has capacity for 400 samples. Ignoring burst effects, when does it first fill?

- **A.** After 5 seconds
- **B.** After 0.4 seconds
- **C.** After 2 seconds
- **D.** It never fills because the consumer is running

**Answer: C.** Backlog grows at 200 samples/s, so 400/200=2 s. A larger finite buffer only delays sustained overload.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER54 — Watchdog coverage

**Competency MCQ · Tier 8 · Weight 4**

A timer ISR feeds the watchdog even when the control task is deadlocked. What change improves detection of that failure?

- **A.** Feed only after a supervisor verifies timely progress of required tasks
- **B.** Disable the watchdog during every control cycle
- **C.** Feed the watchdog more often from the same ISR
- **D.** Increase PWM frequency to hide the deadlock

**Answer: A.** An independent interrupt can remain alive while application work is stuck; watchdog servicing should reflect required system progress.

**Reference basis:** [E7: Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

### ER55 — Update integrity

**Competency MCQ · Tier 8 · Weight 4**

A connected robot downloads firmware. Which mechanism checks that the image was authorized by a trusted signer and has not been altered?

- **A.** Accept any image whose version string is lexicographically greater than the installed version
- **B.** Verify a digital signature against a protected trusted key before activation
- **C.** Encrypt the image with a key sent inside the same unauthenticated download
- **D.** Compare a checksum supplied beside the image over the same untrusted channel

**Answer: B.** A signature can authenticate image origin and integrity when keys are trusted. Rollback prevention and safe activation are separate requirements.

**Reference basis:** [E12: MCUboot signed-image validation](https://github.com/mcu-tools/mcuboot/blob/main/docs/signed_images.md)

### ER56 — Integration diagnosis

**Competency MCQ · Tier 8 · Weight 4**

A robot's localization drifts only when motors run. Sensor readings show periodic spikes synchronized with PWM, even while the robot is mechanically stationary. What investigation is best supported by this evidence?

- **A.** Check electrical interference, grounding, supply integrity, and sampling timing before changing motion models
- **B.** Replace the planner heuristic without inspecting raw signals
- **C.** Assume wheel slip is the only possible explanation
- **D.** Increase map resolution and ignore the spikes

**Answer: A.** The stationary test weakens a motion-only explanation; PWM-correlated sensor artifacts point toward electrical or acquisition coupling that should be measured.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER57 — Validation limits

**Competency MCQ · Tier 8 · Weight 4**

A navigation controller passes ideal simulation tests but fails near reflective surfaces on the real robot. What should the validation plan add?

- **A.** Representative sensor failure cases, hardware/field tests, and documented operating limits
- **B.** A claim that simulation success proves every environment safe
- **C.** Only more runs of the unchanged ideal simulation
- **D.** Only a different robot name in the UI

**Answer: A.** Simulation coverage is limited by its models. Real sensor behavior and environmental edge cases must be included in validation.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057), [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER58 — Advanced diagnosis

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of resolving a timing, control, or concurrency defect?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently diagnosed defect with reproducible traces and a fix **(1 points)**
- **D.** I can also explain alternative hypotheses, demonstrate regression coverage, and quantify the improvement **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER59 — System evaluation

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of evaluating a robot or embedded subsystem against stated requirements?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent report with timing, accuracy, or resource measurements **(1 points)**
- **D.** I can also show boundary-condition results, uncertainty or measurement limitations, and justified operating limits **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER60 — Integrated delivery

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of delivering a reproducible embedded or robotics project?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show code, setup instructions, and an integrated hardware or simulator demonstration **(1 points)**
- **D.** I can also show versioned builds, interface documentation, verification evidence, and a reasoned account of design tradeoffs **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193), [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057), [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Source register

- **MS.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **AC.** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **E1.** [FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)
- **E2.** [Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)
- **E3.** [NPTEL Robotics course](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_me166)
- **E4.** [ROS 2 QoS official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst)
- **E5.** [ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)
- **E6.** [NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)
- **E7.** [Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)
- **E8.** [NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)
- **E9.** [ST AN4839: CPU cache and DMA coherence](https://www.st.com/resource/en/application_note/DM00272913-.pdf)
- **E10.** [MathWorks anti-windup control example](https://www.mathworks.com/help/simulink/slref/anti-windup-control-using-a-pid-controller.html)
- **E11.** [Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf)
- **E12.** [MCUboot signed-image validation](https://github.com/mcu-tools/mcuboot/blob/main/docs/signed_images.md)
- **E13.** [WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

## App integration

The JSON stores each question once and gives each semester an exact ID list. Preserve question and option IDs and the bank version. Score on the Spring server; React must not receive `correctOptionId` or `rationale` during an attempt. Self-assessment option fractions may be displayed. MongoDB can store canonical questions and reference them from surveys. Store attempt responses, raw points, evidence status, and version together. If options are shuffled at runtime, score by option ID. Do not silently change weights or inherited wording by semester.

Structural checks verify all seven proper-subset relationships, 25 items in S8, four unique options per item, valid answer keys and references, scoring totals, and identical inherited content across forms. These checks do not establish assessment validity.
