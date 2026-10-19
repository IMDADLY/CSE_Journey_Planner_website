// Embedded Systems & Robotics / IoT Nested Competency Question Bank (ER01 - ER60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (ER36–ER60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['ER01', 'ER60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['ER06', 'ER60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['ER11', 'ER60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['ER16', 'ER60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['ER21', 'ER60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['ER26', 'ER60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['ER31', 'ER60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['ER36', 'ER60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    "1": "Digital and programming foundations",
    "2": "Microcontrollers and interfaces",
    "3": "Timing, interrupts, and sensors",
    "4": "RTOS and robot motion",
    "5": "Control and robot middleware",
    "6": "Estimation, planning, and integration",
    "7": "Reliability and verification",
    "8": "Advanced timing, control, concurrency, and robot-system diagnosis"
};

export const EMBEDDED_QUESTIONS = [
    {
        "id": "ER01",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Binary arithmetic",
        "skillTag": "Binary arithmetic",
        "weight": 2,
        "questionText": "What is the decimal value of the binary number 1010?",
        "options": [
            "14",
            "10",
            "8",
            "12"
        ],
        "correctOptionIndex": 1,
        "explanation": "The set bits contribute 8 and 2, giving 10.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER02",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "C arrays",
        "skillTag": "C arrays",
        "weight": 2,
        "questionText": "In C, `int readings[3] = {4, 7, 9};` is declared. Which expression reads the value 7?",
        "options": [
            "readings[3]",
            "readings[0]",
            "readings[1]",
            "readings[2]"
        ],
        "correctOptionIndex": 2,
        "explanation": "C arrays use zero-based indexing. Index 3 is outside this three-element array.",
        "reference": "E13: WG14 N1570 C11 committee draft"
    },
    {
        "id": "ER03",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Digital inputs",
        "skillTag": "Digital inputs",
        "weight": 2,
        "questionText": "An active-low button connects a GPIO input to ground when pressed, with a pull-up resistor to the supply. What logic level is expected when pressed?",
        "options": [
            "Low",
            "Always floating",
            "High",
            "A level determined only by CPU frequency"
        ],
        "correctOptionIndex": 0,
        "explanation": "Pressing the button pulls the input toward ground; the pull-up defines the unpressed level.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER04",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Feedback components",
        "skillTag": "Feedback components",
        "weight": 2,
        "questionText": "Which component most directly measures a motor shaft's rotation for feedback?",
        "options": [
            "Fuse",
            "Rotary encoder",
            "Motor driver",
            "Power regulator"
        ],
        "correctOptionIndex": 1,
        "explanation": "An encoder produces position or incremental rotation information; the driver controls motor power.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER05",
        "tier": 1,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Embedded programming practice",
        "skillTag": "Embedded programming practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of writing a small embedded C program or equivalent simulator task?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show independently written code that reads input and controls an output",
            "I can also explain the code and demonstrate boundary or error-case tests"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER06",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "ADC resolution",
        "skillTag": "ADC resolution",
        "weight": 2,
        "questionText": "An ideal 12-bit ADC spans 0–3.3 V with 4096 equal quantization bins. Approximately what is one bin's width?",
        "options": [
            "3.3 mV",
            "12 mV",
            "0.806 mV",
            "80.6 mV"
        ],
        "correctOptionIndex": 2,
        "explanation": "3.3/4096 V ≈ 0.000806 V = 0.806 mV. The stated bin model avoids endpoint-convention ambiguity.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER07",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "PWM duty cycle",
        "skillTag": "PWM duty cycle",
        "weight": 2,
        "questionText": "A PWM signal is high for 0.5 ms in every 2 ms period. What is its duty cycle?",
        "options": [
            "50%",
            "25%",
            "4%",
            "75%"
        ],
        "correctOptionIndex": 1,
        "explanation": "Duty cycle is high time divided by period: 0.5/2=0.25.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER08",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Serial interfaces",
        "skillTag": "Serial interfaces",
        "weight": 2,
        "questionText": "Which common interface uses SDA and SCL lines and device addresses on a shared bus?",
        "options": [
            "UART with TX/RX only",
            "I2C",
            "An analog voltage divider",
            "A parallel GPIO port"
        ],
        "correctOptionIndex": 1,
        "explanation": "I2C uses serial data and clock lines with addressed transactions.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER09",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Bit masking",
        "skillTag": "Bit masking",
        "weight": 2,
        "questionText": "For an unsigned status value, which C expression tests whether bit 3 is set, numbering the least significant bit as 0?",
        "options": [
            "`(status & (1u << 3)) != 0`",
            "`status == 3`",
            "`(status >> 3) == 0`",
            "`status + 3 == 0`"
        ],
        "correctOptionIndex": 0,
        "explanation": "Shifting 1 by three creates the bit-3 mask; bitwise AND isolates that bit.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER10",
        "tier": 2,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Peripheral practice",
        "skillTag": "Peripheral practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of interfacing a sensor or actuator on hardware or a peripheral simulator?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently configured interface with measured or simulated input/output",
            "I can also explain timing and electrical assumptions and demonstrate a diagnosed interface fault"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER11",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Timer conversion",
        "skillTag": "Timer conversion",
        "weight": 3,
        "questionText": "A timer increments at 1 MHz. Ignoring wraparound, what elapsed time do 1000 ticks represent?",
        "options": [
            "1 second",
            "1 microsecond",
            "1 millisecond",
            "100 milliseconds"
        ],
        "correctOptionIndex": 2,
        "explanation": "Each tick is 1 microsecond; 1000 ticks are 1000 microseconds or 1 millisecond.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER12",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Interrupt handling",
        "skillTag": "Interrupt handling",
        "weight": 3,
        "questionText": "A sensor ISR must acknowledge an interrupt and trigger expensive processing. Which design usually keeps interrupt latency for other work bounded?",
        "options": [
            "Wait inside the ISR until a user presses a button",
            "Allocate and process an unbounded batch before acknowledging",
            "Perform a blocking network request inside the ISR",
            "Capture minimal data, acknowledge the source, and notify a task using an ISR-safe mechanism"
        ],
        "correctOptionIndex": 3,
        "explanation": "Short bounded ISR work limits interference; longer processing can be deferred to an appropriately scheduled task.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER13",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Switch debounce",
        "skillTag": "Switch debounce",
        "weight": 3,
        "questionText": "A mechanical switch creates several transitions during one physical press. What does debouncing address?",
        "options": [
            "Changing the motor gear ratio",
            "Converting UART data into SPI",
            "Increasing the ADC voltage range",
            "Treating rapid contact oscillations as one stable input change"
        ],
        "correctOptionIndex": 3,
        "explanation": "Mechanical contacts bounce; filtering or a stable-time state machine prevents multiple false presses.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER14",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Sensor calibration",
        "skillTag": "Sensor calibration",
        "weight": 3,
        "questionText": "A temperature sensor repeatedly reads 2°C above a trusted reference across a narrow operating range. Which simple calibration fits that observed constant bias?",
        "options": [
            "Add 2°C to each reading",
            "Reverse the order of the samples",
            "Multiply every reading by 2",
            "Subtract 2°C from each reading in that validated range"
        ],
        "correctOptionIndex": 3,
        "explanation": "An additive offset correction addresses a constant bias. Wider ranges may require a richer calibration model.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER15",
        "tier": 3,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Timing practice",
        "skillTag": "Timing practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of implementing a timed or interrupt-driven task?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent timer/ISR implementation with captured timing evidence",
            "I can also show latency measurements or simulation traces and explain how long work is deferred"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER16",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "RTOS blocking",
        "skillTag": "RTOS blocking",
        "weight": 3,
        "questionText": "A task needs to wait for a queue item without wasting CPU time. Which approach is appropriate?",
        "options": [
            "Use a queue receive with a suitable blocking timeout",
            "Spin continuously checking whether the queue is empty",
            "Hold every shared mutex while waiting",
            "Disable interrupts until an item appears"
        ],
        "correctOptionIndex": 0,
        "explanation": "Blocking lets other tasks run; a suitable timeout can support recovery when data does not arrive.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER17",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Task mutual exclusion",
        "skillTag": "Task mutual exclusion",
        "weight": 3,
        "questionText": "Two tasks modify a shared data structure. Which primitive is designed to guard an owned critical section between tasks?",
        "options": [
            "A PWM output",
            "An ADC channel",
            "A mutex used with consistent lock ownership",
            "A read-only constant"
        ],
        "correctOptionIndex": 2,
        "explanation": "A mutex controls task access to a shared resource. ISR interactions require mechanisms suitable for interrupt context.",
        "reference": "E1: FreeRTOS mutexes and priority inheritance"
    },
    {
        "id": "ER18",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Robot kinematics",
        "skillTag": "Robot kinematics",
        "weight": 3,
        "questionText": "What does forward kinematics compute for a robot arm?",
        "options": [
            "Battery charge from motor temperature",
            "Obstacle locations from Wi-Fi strength",
            "End-effector pose from joint coordinates and the robot model",
            "Joint coordinates from a desired end-effector pose"
        ],
        "correctOptionIndex": 2,
        "explanation": "Forward kinematics maps joint configuration to pose; solving joint configuration from pose is inverse kinematics.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER19",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Differential drive",
        "skillTag": "Differential drive",
        "weight": 3,
        "questionText": "An ideal differential-drive robot has equal positive left and right wheel linear speeds. With no slip, what motion results?",
        "options": [
            "Straight forward motion",
            "A turn whose radius must be zero",
            "Straight backward motion",
            "Rotation in place"
        ],
        "correctOptionIndex": 0,
        "explanation": "Equal wheel speeds produce zero angular velocity and nonzero forward velocity.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER20",
        "tier": 4,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Concurrency practice",
        "skillTag": "Concurrency practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a small RTOS or concurrent robot application?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show independent tasks with a documented shared-resource or message-passing design",
            "I can also show contention/failure tests and explain synchronization choices"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E1: FreeRTOS mutexes and priority inheritance"
    },
    {
        "id": "ER21",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Feedback control",
        "skillTag": "Feedback control",
        "weight": 3,
        "questionText": "A speed controller compares a desired speed with measured speed. What is the usual error for negative-feedback control?",
        "options": [
            "Desired speed plus measured speed",
            "The encoder count without reference to the desired speed",
            "Measured speed multiplied by supply voltage",
            "Desired speed minus measured speed"
        ],
        "correctOptionIndex": 3,
        "explanation": "The sign convention e=reference−measurement lets the controller respond to tracking error; actuator polarity must be consistent.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER22",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Integral action",
        "skillTag": "Integral action",
        "weight": 3,
        "questionText": "Which PID term can remove a persistent constant tracking error in a suitable stable closed-loop system?",
        "options": [
            "Derivative term alone",
            "A coordinate-frame label",
            "A timestamp field",
            "Integral term"
        ],
        "correctOptionIndex": 3,
        "explanation": "Integrating a sustained error accumulates corrective action. Stability and saturation handling still matter.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER23",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "ROS communication",
        "skillTag": "ROS communication",
        "weight": 3,
        "questionText": "A robot continuously publishes sensor measurements for multiple consumers. Which ROS 2 interaction is the natural fit?",
        "options": [
            "A topic with publishers and subscribers",
            "A service that is called exactly once during compilation",
            "A firmware linker section",
            "A local variable that exists only in one callback"
        ],
        "correctOptionIndex": 0,
        "explanation": "Topics support asynchronous streams and multiple consumers; services fit request-response interactions.",
        "reference": "E5: ROS 2 feature overview, official documentation source"
    },
    {
        "id": "ER24",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Coordinate frames",
        "skillTag": "Coordinate frames",
        "weight": 3,
        "questionText": "A lidar point is expressed in the lidar frame, but a map expects map-frame coordinates. What is required before combining them correctly?",
        "options": [
            "Sorting points by intensity",
            "Only changing the point's text label",
            "A valid transform between the frames at the measurement time",
            "Dropping all timestamps unconditionally"
        ],
        "correctOptionIndex": 2,
        "explanation": "Coordinates need a transformation, not a renamed label; a moving platform makes the transform time-dependent.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER25",
        "tier": 5,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Control practice",
        "skillTag": "Control practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of implementing a feedback controller on a simulated or physical plant?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent controller with recorded reference and measured response",
            "I can also show tuning evidence, saturation handling, and a discussion of stability and timing limits"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER26",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Sensor fusion",
        "skillTag": "Sensor fusion",
        "weight": 3,
        "questionText": "Why might a mobile robot combine wheel odometry with an IMU?",
        "options": [
            "Their information and error characteristics can complement each other",
            "Wheel slip becomes physically impossible",
            "An IMU directly measures absolute global position without integration",
            "Two sensors guarantee zero error in every situation"
        ],
        "correctOptionIndex": 0,
        "explanation": "Odometry and inertial measurements have different limitations, so a suitable estimator can exploit complementary information.",
        "reference": "E11: Welch and Bishop: An Introduction to the Kalman Filter"
    },
    {
        "id": "ER27",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Planning and control",
        "skillTag": "Planning and control",
        "weight": 3,
        "questionText": "Which distinction is most accurate?",
        "options": [
            "A planner chooses a route or trajectory; a controller produces commands to track it",
            "Planning and control both mean reading only battery voltage",
            "A planner must always execute at the motor PWM frequency",
            "A controller chooses source-code filenames; a planner compiles them"
        ],
        "correctOptionIndex": 0,
        "explanation": "Planning and feedback control operate on related but distinct problems and may use different update rates.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER28",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Obstacle clearance",
        "skillTag": "Obstacle clearance",
        "weight": 3,
        "questionText": "Why inflate obstacles in a configuration-space map for a robot with nonzero width?",
        "options": [
            "To make the physical robot smaller",
            "To account for the robot's footprint when checking feasible motion",
            "To eliminate the need for localization",
            "To increase encoder resolution"
        ],
        "correctOptionIndex": 1,
        "explanation": "Inflation converts body-clearance constraints into a planning representation, commonly approximating the robot as a reference point.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER29",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Connected-device messages",
        "skillTag": "Connected-device messages",
        "weight": 3,
        "questionText": "A robot receives duplicated command messages because its transport offers at-least-once delivery. What application design avoids repeating a one-time action?",
        "options": [
            "Apply each command twice to maintain symmetry",
            "Use stable command IDs and track which commands were already applied",
            "Assume each received message must be a new intention",
            "Use arrival order as the only permanent identity"
        ],
        "correctOptionIndex": 1,
        "explanation": "At-least-once delivery permits duplicates; application-level identities allow deduplication.",
        "reference": "E5: ROS 2 feature overview, official documentation source"
    },
    {
        "id": "ER30",
        "tier": 6,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Robot integration",
        "skillTag": "Robot integration",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of integrating robot sensing, transforms, and motion behavior?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent simulation or hardware demonstration with consistent frames and timestamps",
            "I can also show tests for delayed/noisy data and explain how the system responds"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER31",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Watchdog monitoring",
        "skillTag": "Watchdog monitoring",
        "weight": 4,
        "questionText": "What is the purpose of a watchdog configured to reset an unresponsive controller?",
        "options": [
            "Improve ADC resolution",
            "Increase motor torque automatically",
            "Trigger recovery when required software progress is not observed within a timeout",
            "Correct every possible sensor calibration error"
        ],
        "correctOptionIndex": 2,
        "explanation": "A watchdog detects missing timely servicing and can initiate configured recovery; it does not prove full system correctness.",
        "reference": "E7: Zephyr watchdog API"
    },
    {
        "id": "ER32",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Power-loss persistence",
        "skillTag": "Power-loss persistence",
        "weight": 4,
        "questionText": "Configuration may be interrupted while being written to flash. Which design improves recovery?",
        "options": [
            "Use versioned records with integrity checks and a commit strategy that preserves a previous valid record",
            "Treat partially written bytes as a valid configuration",
            "Store every configuration solely in an uninitialized variable",
            "Overwrite the only copy and assume power remains on"
        ],
        "correctOptionIndex": 0,
        "explanation": "A recoverable record protocol can distinguish complete valid data from interrupted writes and retain a fallback.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER33",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Hardware-in-the-loop testing",
        "skillTag": "Hardware-in-the-loop testing",
        "weight": 4,
        "questionText": "What is a hardware-in-the-loop test in this context?",
        "options": [
            "Compiling without running any controller code",
            "Testing only a screenshot of the robot",
            "Running the real controller against simulated or controlled plant/sensor signals",
            "Reviewing only a mechanical drawing"
        ],
        "correctOptionIndex": 2,
        "explanation": "HIL exercises controller hardware and interfaces while the physical environment is represented or controlled.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER34",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Command freshness",
        "skillTag": "Command freshness",
        "weight": 4,
        "questionText": "A moving robot stops receiving velocity commands. Which control policy best handles the loss of fresh commands?",
        "options": [
            "Increase speed to reconnect faster",
            "Disable all sensor feedback",
            "Use a bounded command timeout and enter a defined safe motion state",
            "Keep the last nonzero speed forever"
        ],
        "correctOptionIndex": 2,
        "explanation": "Stale commands must not remain valid indefinitely; the safe response depends on the system's hazard analysis and dynamics.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER35",
        "tier": 7,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Verification practice",
        "skillTag": "Verification practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of testing embedded or robot failure handling?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show independent tests for a timeout, sensor fault, or restart condition",
            "I can also show expected-versus-observed results, repeatable fault injection, and a fix verified by retesting"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER36",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Integer conversion",
        "skillTag": "Integer conversion",
        "weight": 4,
        "questionText": "Assume C provides `uint8_t`. After `uint8_t x = 250; x = (uint8_t)(x + 10);`, what is x?",
        "options": [
            "4",
            "255",
            "Undefined solely because the final value exceeds 255",
            "260"
        ],
        "correctOptionIndex": 0,
        "explanation": "The addition is representable after integer promotion; conversion to an 8-bit unsigned type reduces 260 modulo 256 to 4.",
        "reference": "E13: WG14 N1570 C11 committee draft"
    },
    {
        "id": "ER37",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "ISR concurrency",
        "skillTag": "ISR concurrency",
        "weight": 4,
        "questionText": "A 32-bit variable is shared between a task and an ISR on a platform where 32-bit access is not atomic. Why is declaring it `volatile` insufficient for a consistent read?",
        "options": [
            "Volatile alone establishes a consistent multiword snapshot even if interrupts occur between loads",
            "Volatile turns any variable access into one indivisible machine instruction",
            "Volatile does not make a multi-instruction access atomic or prevent a torn value",
            "Volatile inserts a mutex that the ISR and task acquire automatically"
        ],
        "correctOptionIndex": 2,
        "explanation": "Visibility of accesses and atomicity are different. Use an appropriate bounded critical section, atomic facility, or safe snapshot protocol for the target.",
        "reference": "E13: WG14 N1570 C11 committee draft"
    },
    {
        "id": "ER38",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Priority inversion",
        "skillTag": "Priority inversion",
        "weight": 4,
        "questionText": "A low-priority task holds a mutex needed by a high-priority task, while a medium-priority task keeps preempting the low-priority task. Which mechanism directly mitigates this inversion?",
        "options": [
            "Increase only the unrelated medium-priority task priority to make it finish earlier",
            "Temporarily inherit the waiting task's higher priority while holding the mutex",
            "Disable preemption for the entire application, regardless of deadline requirements",
            "Replace the blocking mutex with a high-priority busy loop that prevents the owner from running"
        ],
        "correctOptionIndex": 1,
        "explanation": "Priority inheritance lets the owner finish the protected work sooner; it does not solve every deadlock or scheduling problem.",
        "reference": "E1: FreeRTOS mutexes and priority inheritance"
    },
    {
        "id": "ER39",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Response-time analysis",
        "skillTag": "Response-time analysis",
        "weight": 4,
        "questionText": "On one CPU, task H has execution time 1 ms and period/deadline 4 ms. Lower-priority task L has execution time 3 ms and period/deadline 10 ms. Assume fixed priorities, preemption, no blocking/jitter/overhead, and synchronous release. Solve L's worst-case response using R=3+ceil(R/4)×1. What is the result?",
        "options": [
            "3 ms, because interference never counts",
            "7 ms, missing L's deadline",
            "11 ms, missing L's deadline",
            "4 ms, meeting L's 10 ms deadline"
        ],
        "correctOptionIndex": 3,
        "explanation": "Starting at R=3 gives 4; substituting 4 gives 4 again. L finishes in 4 ms in this model.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER40",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "UART capacity",
        "skillTag": "UART capacity",
        "weight": 4,
        "questionText": "A UART runs at 115200 bit/s using 8N1: one start bit, eight data bits, one stop bit. Ignore inter-byte gaps. What is the maximum data-byte rate?",
        "options": [
            "11,520 bytes/s",
            "9,600 bytes/s",
            "14,400 bytes/s",
            "115,200 bytes/s"
        ],
        "correctOptionIndex": 0,
        "explanation": "Each payload byte occupies ten transmitted bits, so 115200/10=11520 bytes/s.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER41",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "DMA cache coherence",
        "skillTag": "DMA cache coherence",
        "weight": 4,
        "questionText": "On a non-coherent write-back-cache MCU, the CPU writes a transmit buffer in cache and DMA reads main memory. DMA transmits old bytes. Which fix addresses this specific stale-data path?",
        "options": [
            "Clean the appropriate cache lines before DMA reads, with required alignment, barriers, and ownership rules",
            "Invalidate dirty cache lines and discard the new data before transmission",
            "Increase the UART stop-bit count",
            "Only mark the C pointer volatile"
        ],
        "correctOptionIndex": 0,
        "explanation": "Dirty CPU cache contents must reach memory before a non-coherent DMA reader accesses them; follow the target's cache maintenance requirements.",
        "reference": "E9: ST AN4839: CPU cache and DMA coherence"
    },
    {
        "id": "ER42",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Sampling alias",
        "skillTag": "Sampling alias",
        "weight": 4,
        "questionText": "A pure 70 Hz sinusoid is sampled uniformly at 100 samples/s with no antialias filter. Which lower-frequency sinusoid can produce the same samples up to phase/sign convention?",
        "options": [
            "170 kHz",
            "70 kHz",
            "100 Hz",
            "30 Hz"
        ],
        "correctOptionIndex": 3,
        "explanation": "70 Hz folds around the 50 Hz Nyquist frequency to abs(100−70)=30 Hz; the sampled data cannot uniquely identify the original frequency.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER43",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Antialias filtering",
        "skillTag": "Antialias filtering",
        "weight": 4,
        "questionText": "A sensor contains frequencies above half the sampling rate. Which action addresses aliasing before acquisition?",
        "options": [
            "Add timestamps to the same samples and treat the analog bandwidth constraint as removed",
            "Apply an appropriate analog low-pass filter before the ADC, or raise the sample rate with suitable filtering",
            "Use only a post-sampling low-pass filter and assume it separates an aliased component from a genuine lower-frequency component",
            "Increase ADC bit depth without changing sampling bandwidth or rate"
        ],
        "correctOptionIndex": 1,
        "explanation": "Once different analog frequencies map to identical samples, post-processing alone cannot generally undo the ambiguity.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER44",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "PID anti-windup",
        "skillTag": "PID anti-windup",
        "weight": 4,
        "questionText": "A motor command saturates while the PID integral term continues to grow, causing a long overshoot after the error reverses. What change targets the cause?",
        "options": [
            "Use an anti-windup strategy such as conditional integration or back-calculation tied to actuator limits",
            "Remove every measurement timestamp",
            "Increase integral gain without considering saturation",
            "Accumulate the integral faster during saturation"
        ],
        "correctOptionIndex": 0,
        "explanation": "Anti-windup limits inappropriate integral accumulation when requested control cannot be delivered.",
        "reference": "E10: MathWorks anti-windup control example"
    },
    {
        "id": "ER45",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Timing jitter",
        "skillTag": "Timing jitter",
        "weight": 4,
        "questionText": "A discrete controller assumes a 1 ms sample period, but actual intervals vary from 1 to 8 ms. What is the strongest next step?",
        "options": [
            "Resample logged data after the run and assume this repairs the controller timing that actually occurred",
            "Measure timing, remove avoidable jitter, and analyze the controller with its actual sampling and delay behavior",
            "Increase proportional gain until the nominal simulation tracks well, without measuring timing",
            "Tune using the nominal 1 ms period and treat a correct average rate as sufficient"
        ],
        "correctOptionIndex": 1,
        "explanation": "Sampling variation and delay can change closed-loop behavior; implementation timing is part of the control design.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER46",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Differential-drive calculation",
        "skillTag": "Differential-drive calculation",
        "weight": 4,
        "questionText": "An ideal robot has left wheel linear speed 0.4 m/s, right wheel speed 0.6 m/s, and track width 0.5 m. With v=(vr+vl)/2 and omega=(vr−vl)/track, what are v and omega?",
        "options": [
            "0.5 m/s and 2 rad/s",
            "1.0 m/s and 0.2 rad/s",
            "0.5 m/s and 0.4 rad/s",
            "0.2 m/s and 0.5 rad/s"
        ],
        "correctOptionIndex": 2,
        "explanation": "The mean wheel speed is 0.5 m/s; the speed difference divided by width is 0.2/0.5=0.4 rad/s.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER47",
        "tier": 8,
        "type": "competency",
        "tag": "CODING",
        "topic": "Encoder resolution",
        "skillTag": "Encoder resolution",
        "weight": 4,
        "questionText": "An encoder provides 1024 counted increments per output-shaft revolution, already including decoding and gearing. What angle does one count represent?",
        "options": [
            "Approximately 0.3516 degrees",
            "Exactly 1024 degrees",
            "Approximately 2.8125 degrees",
            "Exactly 1 degree"
        ],
        "correctOptionIndex": 0,
        "explanation": "360°/1024≈0.3516°. The question explicitly includes gearing and quadrature in the stated count.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER48",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Kinematic singularities",
        "skillTag": "Kinematic singularities",
        "weight": 4,
        "questionText": "Near a robot-arm Jacobian singularity, a small desired end-effector velocity can require very large joint velocities. Which response is appropriate?",
        "options": [
            "Clip joint speeds independently and assume the exact desired Cartesian motion is still guaranteed",
            "Use the ordinary Jacobian inverse without conditioning checks or joint-speed bounds",
            "Use a suitable damped inverse/constraint-aware method and avoid infeasible motion near the singularity",
            "Scale the commanded Cartesian velocity up until the inverse solution becomes numerically larger"
        ],
        "correctOptionIndex": 2,
        "explanation": "A poorly conditioned Jacobian amplifies commands; damping and constraints trade exact tracking for bounded feasible motion.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER49",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "ROS 2 QoS compatibility",
        "skillTag": "ROS 2 QoS compatibility",
        "weight": 4,
        "questionText": "A ROS 2 publisher offers BEST_EFFORT reliability and a subscriber requests RELIABLE reliability. Assume all other settings match. Are these reliability policies compatible?",
        "options": [
            "No; the publisher does not offer the reliability requested by the subscriber",
            "Yes; the subscriber retransmits data that the publisher never delivered",
            "Yes; matching topic names bypass all QoS compatibility checks",
            "Yes; reliability is negotiated upward to the stronger request automatically"
        ],
        "correctOptionIndex": 0,
        "explanation": "ROS 2 requested/offered QoS compatibility requires the publisher to satisfy the subscriber's requested reliability.",
        "reference": "E4: ROS 2 QoS official documentation source"
    },
    {
        "id": "ER50",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Time-aligned transforms",
        "skillTag": "Time-aligned transforms",
        "weight": 4,
        "questionText": "A robot receives a delayed lidar scan while turning. Transforming it with the robot's current pose bends otherwise static walls in the map. What is the best correction?",
        "options": [
            "Transform the whole scan with the most recent pose, regardless of the timestamp difference",
            "Increase the number of map cells without correcting the temporal misalignment",
            "Replace every scan timestamp with its arrival time and assume transport delay is zero",
            "Use the pose/transform corresponding to measurement time, accounting for scan timing where needed"
        ],
        "correctOptionIndex": 3,
        "explanation": "Spatial fusion must align coordinate frames in time; moving scanners may also need per-point motion compensation.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER51",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Estimator covariance",
        "skillTag": "Estimator covariance",
        "weight": 4,
        "questionText": "A Kalman-style estimator is given a measurement noise covariance R much smaller than the sensor's actual noise. What is a likely consequence, other factors equal?",
        "options": [
            "It gives those measurements too much influence and may become overconfident or noisy",
            "It automatically detects every sensor failure",
            "It necessarily ignores the measurements entirely",
            "It guarantees exact ground-truth position"
        ],
        "correctOptionIndex": 0,
        "explanation": "Understated uncertainty overweights observations relative to prediction; covariance assumptions need validation.",
        "reference": "E11: Welch and Bishop: An Introduction to the Kalman Filter"
    },
    {
        "id": "ER52",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Stopping-distance model",
        "skillTag": "Stopping-distance model",
        "weight": 4,
        "questionText": "A robot travels at 2 m/s. It keeps that speed for a 0.1 s reaction delay, then decelerates constantly at 1 m/s² to rest. Ignore slope and slip. What minimum distance follows from this model?",
        "options": [
            "4.2 metres",
            "2.0 metres",
            "0.2 metres",
            "2.2 metres"
        ],
        "correctOptionIndex": 3,
        "explanation": "Reaction travel is 2×0.1=0.2 m; braking travel is v²/(2a)=4/2=2 m. Total=2.2 m before any safety margin.",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER53",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Ring-buffer overload",
        "skillTag": "Ring-buffer overload",
        "weight": 4,
        "questionText": "An ISR produces 1000 samples/s and a task consumes 800 samples/s steadily. An empty ring buffer has capacity for 400 samples. Ignoring burst effects, when does it first fill?",
        "options": [
            "After 5 seconds",
            "After 0.4 seconds",
            "After 2 seconds",
            "It never fills because the consumer is running"
        ],
        "correctOptionIndex": 2,
        "explanation": "Backlog grows at 200 samples/s, so 400/200=2 s. A larger finite buffer only delays sustained overload.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER54",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Watchdog coverage",
        "skillTag": "Watchdog coverage",
        "weight": 4,
        "questionText": "A timer ISR feeds the watchdog even when the control task is deadlocked. What change improves detection of that failure?",
        "options": [
            "Feed only after a supervisor verifies timely progress of required tasks",
            "Disable the watchdog during every control cycle",
            "Feed the watchdog more often from the same ISR",
            "Increase PWM frequency to hide the deadlock"
        ],
        "correctOptionIndex": 0,
        "explanation": "An independent interrupt can remain alive while application work is stuck; watchdog servicing should reflect required system progress.",
        "reference": "E7: Zephyr watchdog API"
    },
    {
        "id": "ER55",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Update integrity",
        "skillTag": "Update integrity",
        "weight": 4,
        "questionText": "A connected robot downloads firmware. Which mechanism checks that the image was authorized by a trusted signer and has not been altered?",
        "options": [
            "Accept any image whose version string is lexicographically greater than the installed version",
            "Verify a digital signature against a protected trusted key before activation",
            "Encrypt the image with a key sent inside the same unauthenticated download",
            "Compare a checksum supplied beside the image over the same untrusted channel"
        ],
        "correctOptionIndex": 1,
        "explanation": "A signature can authenticate image origin and integrity when keys are trusted. Rollback prevention and safe activation are separate requirements.",
        "reference": "E12: MCUboot signed-image validation"
    },
    {
        "id": "ER56",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Integration diagnosis",
        "skillTag": "Integration diagnosis",
        "weight": 4,
        "questionText": "A robot's localization drifts only when motors run. Sensor readings show periodic spikes synchronized with PWM, even while the robot is mechanically stationary. What investigation is best supported by this evidence?",
        "options": [
            "Check electrical interference, grounding, supply integrity, and sampling timing before changing motion models",
            "Replace the planner heuristic without inspecting raw signals",
            "Assume wheel slip is the only possible explanation",
            "Increase map resolution and ignore the spikes"
        ],
        "correctOptionIndex": 0,
        "explanation": "The stationary test weakens a motion-only explanation; PWM-correlated sensor artifacts point toward electrical or acquisition coupling that should be measured.",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    },
    {
        "id": "ER57",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Validation limits",
        "skillTag": "Validation limits",
        "weight": 4,
        "questionText": "A navigation controller passes ideal simulation tests but fails near reflective surfaces on the real robot. What should the validation plan add?",
        "options": [
            "Representative sensor failure cases, hardware/field tests, and documented operating limits",
            "A claim that simulation success proves every environment safe",
            "Only more runs of the unchanged ideal simulation",
            "Only a different robot name in the UI"
        ],
        "correctOptionIndex": 0,
        "explanation": "Simulation coverage is limited by its models. Real sensor behavior and environmental edge cases must be included in validation.",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER58",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Advanced diagnosis",
        "skillTag": "Advanced diagnosis",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of resolving a timing, control, or concurrency defect?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently diagnosed defect with reproducible traces and a fix",
            "I can also explain alternative hypotheses, demonstrate regression coverage, and quantify the improvement"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E8: NPTEL Embedded Systems: timing, scheduling, and testing"
    },
    {
        "id": "ER59",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "System evaluation",
        "skillTag": "System evaluation",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of evaluating a robot or embedded subsystem against stated requirements?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent report with timing, accuracy, or resource measurements",
            "I can also show boundary-condition results, uncertainty or measurement limitations, and justified operating limits"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E2: Modern Robotics: authors’ book and video supplements"
    },
    {
        "id": "ER60",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Integrated delivery",
        "skillTag": "Integrated delivery",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of delivering a reproducible embedded or robotics project?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show code, setup instructions, and an integrated hardware or simulator demonstration",
            "I can also show versioned builds, interface documentation, verification evidence, and a reasoned account of design tradeoffs"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "E6: NPTEL Embedded System Design with ARM"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 1) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 1));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = EMBEDDED_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = EMBEDDED_QUESTIONS.findIndex(q => q.id === endId);
    return EMBEDDED_QUESTIONS.slice(startIndex, endIndex + 1);
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
