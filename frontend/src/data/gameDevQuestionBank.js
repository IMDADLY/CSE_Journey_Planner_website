// Game Development & Interactive Media Nested Competency Question Bank (GD01 - GD60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (GD36–GD60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['GD01', 'GD60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['GD06', 'GD60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['GD11', 'GD60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['GD16', 'GD60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['GD21', 'GD60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['GD26', 'GD60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['GD31', 'GD60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['GD36', 'GD60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    "1": "Programming and spatial foundations",
    "2": "Game loop and interaction",
    "3": "Physics, rendering, and state",
    "4": "Assets, audio, and accessibility",
    "5": "Gameplay systems and profiling",
    "6": "Multiplayer and platform performance",
    "7": "Production, testing, and instrumentation",
    "8": "Advanced simulation, rendering, networking, and interactive-system diagnosis"
};

export const GAME_DEV_QUESTIONS = [
    {
        "id": "GD01",
        "tier": 1,
        "type": "competency",
        "tag": "CODING",
        "topic": "Code tracing",
        "skillTag": "Code tracing",
        "weight": 2,
        "questionText": "In C#, `int score = 0; for (int i = 0; i < 3; i++) score += 2;` runs once. What is score afterward?",
        "options": [
            "8",
            "3",
            "4",
            "6"
        ],
        "correctOptionIndex": 3,
        "explanation": "The loop executes for i=0,1,2 and adds 2 three times.",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD02",
        "tier": 1,
        "type": "competency",
        "tag": "MATHEMATICS",
        "topic": "Vectors",
        "skillTag": "Vectors",
        "weight": 2,
        "questionText": "A character moves from (2,3) to (5,7). What displacement vector describes this movement?",
        "options": [
            "(-3,-4)",
            "(5,7)",
            "(3,4)",
            "(7,10)"
        ],
        "correctOptionIndex": 2,
        "explanation": "Displacement is destination minus starting position.",
        "reference": "G1: Godot vector mathematics"
    },
    {
        "id": "GD03",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Coordinates",
        "skillTag": "Coordinates",
        "weight": 2,
        "questionText": "A child object is at local position (1,0,0). Its parent has translation (10,0,0), identity rotation, and unit scale. What is the child's world position?",
        "options": [
            "(11,0,0)",
            "(10,0,0)",
            "(9,0,0)",
            "(1,0,0)"
        ],
        "correctOptionIndex": 0,
        "explanation": "With no rotation or scaling, add the parent translation to the local position.",
        "reference": "G1: Godot vector mathematics"
    },
    {
        "id": "GD04",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Collections",
        "skillTag": "Collections",
        "weight": 2,
        "questionText": "Which collection operation prevents a player ID from being recorded twice in a set of players who collected a one-time reward?",
        "options": [
            "Sort duplicate IDs without removing any",
            "Increment an array index for each collision",
            "Insert the ID into a set and check whether insertion was new",
            "Append every ID to a list"
        ],
        "correctOptionIndex": 2,
        "explanation": "A set maintains distinct members; the result of insertion can guard one-time logic.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD05",
        "tier": 1,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Programming practice",
        "skillTag": "Programming practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of writing a small interactive program?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently written program with input and visible state changes",
            "I can also explain its logic and demonstrate tests for boundary cases"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD06",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Frame-independent motion",
        "skillTag": "Frame-independent motion",
        "weight": 2,
        "questionText": "A non-physics object should move at 5 metres per second. In a frame with deltaTime=0.02 seconds, what displacement should `speed * deltaTime` produce?",
        "options": [
            "5 metres",
            "250 metres",
            "0.02 metres",
            "0.1 metres"
        ],
        "correctOptionIndex": 3,
        "explanation": "5 m/s × 0.02 s = 0.1 m. Multiplying by elapsed time converts speed into displacement.",
        "reference": "G2: Unity fixed updates"
    },
    {
        "id": "GD07",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Input events",
        "skillTag": "Input events",
        "weight": 2,
        "questionText": "A single press must toggle a pause menu once, even if the key remains held. Which input event fits?",
        "options": [
            "Any mouse movement while the key is held",
            "Every frame in which the key is released",
            "The transition from released to pressed",
            "Every frame in which the key is held"
        ],
        "correctOptionIndex": 2,
        "explanation": "A press edge fires once per press; a held-state check may toggle on multiple frames.",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD08",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Game state",
        "skillTag": "Game state",
        "weight": 2,
        "questionText": "A player can be Idle, Running, or Jumping, with defined transitions. Which model directly represents these mutually exclusive modes?",
        "options": [
            "A spatial audio mixer",
            "A texture atlas",
            "A finite state machine",
            "A projection matrix"
        ],
        "correctOptionIndex": 2,
        "explanation": "States and transition conditions explicitly encode allowed modes and changes.",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD09",
        "tier": 2,
        "type": "competency",
        "tag": "MATHEMATICS",
        "topic": "Vector normalization",
        "skillTag": "Vector normalization",
        "weight": 2,
        "questionText": "A 2D input vector is (1,1). What should it become after normalization so diagonal movement has unit length?",
        "options": [
            "(1/√2,1/√2)",
            "(1,1)",
            "(√2,√2)",
            "(0.5,0.5)"
        ],
        "correctOptionIndex": 0,
        "explanation": "The original magnitude is √2, so dividing each component by √2 produces magnitude 1.",
        "reference": "G1: Godot vector mathematics"
    },
    {
        "id": "GD10",
        "tier": 2,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Prototype practice",
        "skillTag": "Prototype practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a playable movement prototype?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently built prototype with movement and interaction",
            "I can also demonstrate consistent movement at different frame rates and explain the timing choices"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G2: Unity fixed updates"
    },
    {
        "id": "GD11",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Physics updates",
        "skillTag": "Physics updates",
        "weight": 3,
        "questionText": "A game renders at a variable frame rate but simulates physics with a fixed timestep. Where should recurring physics forces normally be applied?",
        "options": [
            "Only when a rendered frame takes longer than average",
            "Only once during level loading",
            "In the engine's fixed physics update, following its API conventions",
            "In a UI repaint callback"
        ],
        "correctOptionIndex": 2,
        "explanation": "A fixed simulation step gives forces a consistent timing basis; the engine's force API determines whether explicit timestep scaling is needed.",
        "reference": "G2: Unity fixed updates"
    },
    {
        "id": "GD12",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Trigger volumes",
        "skillTag": "Trigger volumes",
        "weight": 3,
        "questionText": "A zone should notify gameplay when entered without physically blocking a player. Which setup is appropriate?",
        "options": [
            "A brighter material on the floor",
            "A trigger or overlap volume with an entry event",
            "A camera near-plane change",
            "A solid collider with no gameplay callback"
        ],
        "correctOptionIndex": 1,
        "explanation": "Trigger/overlap detection reports contact without requiring a blocking physical response.",
        "reference": "G9: Unity continuous collision detection"
    },
    {
        "id": "GD13",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Rendering visibility",
        "skillTag": "Rendering visibility",
        "weight": 3,
        "questionText": "An object is outside the camera's view frustum. Which optimization can skip submitting it for that camera?",
        "options": [
            "Raising network tick rate",
            "Frustum culling",
            "Increasing its mass",
            "Audio compression"
        ],
        "correctOptionIndex": 1,
        "explanation": "Frustum culling rejects objects outside the visible volume before unnecessary rendering work.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD14",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Animation logic",
        "skillTag": "Animation logic",
        "weight": 3,
        "questionText": "An attack animation visually continues after the character enters the Dead state. Which change addresses the state conflict most directly?",
        "options": [
            "Define and test a higher-priority death transition that interrupts attack playback",
            "Disable all animation transitions",
            "Increase the audio sample rate",
            "Double the attack texture resolution"
        ],
        "correctOptionIndex": 0,
        "explanation": "Explicit interruption and transition rules make animation agree with gameplay state.",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD15",
        "tier": 3,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Gameplay modeling",
        "skillTag": "Gameplay modeling",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of implementing state-based gameplay?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent state machine for a character or enemy",
            "I can also demonstrate transition tests and explain how conflicting states are prevented"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G8: Unity Certified User programmer competencies"
    },
    {
        "id": "GD16",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Texture coordinates",
        "skillTag": "Texture coordinates",
        "weight": 3,
        "questionText": "What do a mesh's UV coordinates primarily specify?",
        "options": [
            "The world's gravity direction",
            "The network address of the asset server",
            "The object's linear velocity",
            "How surface points map to positions in a texture"
        ],
        "correctOptionIndex": 3,
        "explanation": "UV coordinates map mesh surfaces to texture space.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "GD17",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Spatial audio",
        "skillTag": "Spatial audio",
        "weight": 3,
        "questionText": "Footsteps from a distant character should become quieter as distance increases. Which feature directly supports this?",
        "options": [
            "Increasing all UI sound volume",
            "Changing the shadow map size",
            "Distance attenuation on a spatial audio source",
            "Sorting sprites by name"
        ],
        "correctOptionIndex": 2,
        "explanation": "Spatial attenuation changes audible level with source-listener distance.",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD18",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Accessible interaction",
        "skillTag": "Accessible interaction",
        "weight": 3,
        "questionText": "A puzzle communicates correct and incorrect choices using only green and red. What is the best improvement?",
        "options": [
            "Remove feedback entirely",
            "Use slightly brighter red and green only",
            "Add distinct symbols or text alongside the colors",
            "Require a faster reaction time"
        ],
        "correctOptionIndex": 2,
        "explanation": "Redundant visual cues allow meaning to remain available when colors cannot be distinguished.",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD19",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Asset collaboration",
        "skillTag": "Asset collaboration",
        "weight": 3,
        "questionText": "Two developers frequently overwrite changes to the same binary scene file. What workflow most directly reduces conflicts?",
        "options": [
            "Ask Git to merge arbitrary binary bytes automatically",
            "Use supported asset locking or divide work into separate scenes/prefabs with clear ownership",
            "Commit only the final executable",
            "Disable version control for all assets"
        ],
        "correctOptionIndex": 1,
        "explanation": "Locking or separation prevents simultaneous incompatible edits; binary merge support depends on the asset format and tooling.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD20",
        "tier": 4,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Inclusive interaction",
        "skillTag": "Inclusive interaction",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building an accessible interaction or menu?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show independently implemented focus, non-color cues, or configurable input",
            "I can also show a documented accessibility review and fixes verified through user or structured task testing"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD21",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Object pooling",
        "skillTag": "Object pooling",
        "weight": 3,
        "questionText": "A game repeatedly creates and destroys hundreds of identical projectiles. Profiling shows allocation-related pauses. What change should be evaluated first?",
        "options": [
            "Recreate the entire level after every shot",
            "Allocate additional temporary lists every frame",
            "Make every projectile texture larger",
            "Reuse inactive projectiles from a pool with a defined reset routine"
        ],
        "correctOptionIndex": 3,
        "explanation": "Pooling reduces repeated allocation churn, provided reused objects have their state reset correctly.",
        "reference": "G7: Unity managed memory optimization"
    },
    {
        "id": "GD22",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Pathfinding",
        "skillTag": "Pathfinding",
        "weight": 3,
        "questionText": "On a four-neighbour grid with unit movement costs and no diagonal moves, which A* heuristic never overestimates the shortest unobstructed path?",
        "options": [
            "A fresh random number at every expansion",
            "Manhattan distance: abs(dx)+abs(dy)",
            "Twice the Manhattan distance",
            "The square of Manhattan distance"
        ],
        "correctOptionIndex": 1,
        "explanation": "Each horizontal or vertical step changes one coordinate by one; obstacles can only make the shortest route at least this long.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "GD23",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Performance diagnosis",
        "skillTag": "Performance diagnosis",
        "weight": 3,
        "questionText": "A build stutters on a target phone but runs smoothly in the editor on a workstation. What is the most useful next investigation?",
        "options": [
            "Optimize a random script based on its line count",
            "Measure only editor startup time",
            "Assume the GPU is responsible without measuring",
            "Profile the build on the phone using a reproducible scene"
        ],
        "correctOptionIndex": 3,
        "explanation": "Measurements on the affected device reveal the workload and bottleneck relevant to the observed problem.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD24",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Save compatibility",
        "skillTag": "Save compatibility",
        "weight": 3,
        "questionText": "Version 2 adds an inventory field to saved games. What design best preserves version-1 saves?",
        "options": [
            "Interpret every old byte layout as the new layout",
            "Delete all old saves during startup",
            "Store a save schema version and migrate older saves with defaults for new fields",
            "Use the file modification time as the only schema indicator"
        ],
        "correctOptionIndex": 2,
        "explanation": "Explicit schema versions and tested migrations support intentional compatibility across releases.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD25",
        "tier": 5,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Performance practice",
        "skillTag": "Performance practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of investigating a gameplay performance problem?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show a profiler capture and an independently implemented fix",
            "I can also show comparable before/after captures on a target device and explain the tradeoffs"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD26",
        "tier": 6,
        "type": "competency",
        "tag": "SECURITY",
        "topic": "Multiplayer authority",
        "skillTag": "Multiplayer authority",
        "weight": 3,
        "questionText": "In an authoritative-server game, who should make the final decision that an item was legitimately collected?",
        "options": [
            "Any client that displays the item",
            "The client with the highest frame rate",
            "The first peer to change its local score text",
            "The server after validating the request and game state"
        ],
        "correctOptionIndex": 3,
        "explanation": "Clients can request actions and predict visuals, while the server validates shared game-state changes.",
        "reference": "G4: Unreal networking and multiplayer"
    },
    {
        "id": "GD27",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Network messages",
        "skillTag": "Network messages",
        "weight": 3,
        "questionText": "Position updates are frequent, and a newer update supersedes an older one. Which delivery strategy is often suitable?",
        "options": [
            "Unreliable updates with sequence/timestamp handling and smoothing",
            "Use the UI redraw rate as proof of delivery",
            "Send positions only when the player disconnects",
            "Reliably queue every historical position indefinitely"
        ],
        "correctOptionIndex": 0,
        "explanation": "Timely recent state can matter more than delivery of obsolete positions; ordering and smoothing still need deliberate handling.",
        "reference": "G13: Gaffer on Games: state synchronization, author repository"
    },
    {
        "id": "GD28",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Level of detail",
        "skillTag": "Level of detail",
        "weight": 3,
        "questionText": "A distant object occupies only a few screen pixels but uses a very detailed mesh. Which technique targets that unnecessary geometry?",
        "options": [
            "Select a lower-detail mesh based on screen size or distance",
            "Raise physics solver iterations globally",
            "Disable input buffering",
            "Increase every object's polygon count"
        ],
        "correctOptionIndex": 0,
        "explanation": "LOD reduces geometric detail when the visible result needs fewer triangles.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD29",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Interactive UI",
        "skillTag": "Interactive UI",
        "weight": 3,
        "questionText": "A controller user opens a menu but no control is selected, so directional input does nothing. What should the interface establish?",
        "options": [
            "A higher network send rate",
            "An initial focus target and a navigable focus order",
            "A lower gravity constant",
            "A smaller texture compression block"
        ],
        "correctOptionIndex": 1,
        "explanation": "Controller and keyboard navigation require focus and predictable movement between controls.",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD30",
        "tier": 6,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Multiplayer practice",
        "skillTag": "Multiplayer practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a small networked interaction?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independent multiplayer prototype with a defined authority model",
            "I can also demonstrate tests with injected latency or loss and explain observed recovery behavior"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G4: Unreal networking and multiplayer"
    },
    {
        "id": "GD31",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Regression testing",
        "skillTag": "Regression testing",
        "weight": 4,
        "questionText": "A damage formula was changed. Which test best catches an unintended change in armor behavior?",
        "options": [
            "Listening to the background soundtrack",
            "Automated cases with known attack, armor, and expected damage values",
            "Checking whether the game logo loads",
            "Comparing only executable file sizes"
        ],
        "correctOptionIndex": 1,
        "explanation": "Tests anchored in expected gameplay results expose formula regressions directly.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD32",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Crash triage",
        "skillTag": "Crash triage",
        "weight": 4,
        "questionText": "Only release builds crash, and the report gives an address without a useful function name. What artifact most helps locate the failing code?",
        "options": [
            "The newest soundtrack file",
            "A screenshot of the main menu",
            "Matching debug symbols for that exact build",
            "An unrelated development build's source map"
        ],
        "correctOptionIndex": 2,
        "explanation": "Symbols must match the binary to translate addresses into meaningful code locations.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD33",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Instrumentation",
        "skillTag": "Instrumentation",
        "weight": 4,
        "questionText": "You need to measure where players abandon a tutorial. Which event design best supports that analysis?",
        "options": [
            "Record only the total number of texture files",
            "Record only sessions that finished successfully",
            "Record tutorial step entry/completion with a consistent session identifier and defined event meanings",
            "Record button clicks without identifying the tutorial step"
        ],
        "correctOptionIndex": 2,
        "explanation": "Step events and session linkage support a funnel that includes both completed and abandoned attempts.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD34",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Reproducible builds",
        "skillTag": "Reproducible builds",
        "weight": 4,
        "questionText": "A teammate cannot reproduce a gameplay bug after pulling the source. Which missing information is most relevant?",
        "options": [
            "The length of the release trailer",
            "The order of icons on the taskbar",
            "The engine/package versions, asset revisions, build configuration, and reproduction steps",
            "The author's desktop wallpaper"
        ],
        "correctOptionIndex": 2,
        "explanation": "Code alone may not define a game build; dependencies, assets, configuration, and steps are part of reproducibility.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD35",
        "tier": 7,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Release practice",
        "skillTag": "Release practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of preparing a reproducible playable build?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show a versioned build with documented dependencies and reproduction steps",
            "I can also show automated checks and evidence that another person or clean environment reproduced the build"
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
        "id": "GD36",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Frame budget",
        "skillTag": "Frame budget",
        "weight": 4,
        "questionText": "A game targets 60 rendered frames per second. Approximately how much time is available per frame?",
        "options": [
            "6 milliseconds",
            "1.67 milliseconds",
            "16.67 milliseconds",
            "60 milliseconds"
        ],
        "correctOptionIndex": 2,
        "explanation": "1000 ms / 60 ≈ 16.67 ms. This is a frame interval, not a separate unlimited budget for every subsystem.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD37",
        "tier": 8,
        "type": "competency",
        "tag": "ARCHITECTURE",
        "topic": "Pipeline bottleneck",
        "skillTag": "Pipeline bottleneck",
        "weight": 4,
        "questionText": "Assume CPU and GPU work overlap perfectly across frames, with no extra waits. CPU work takes 8 ms/frame and GPU work 20 ms/frame. What steady-state frame rate is the throughput upper bound?",
        "options": [
            "50 FPS",
            "100 FPS",
            "125 FPS",
            "35.7 FPS"
        ],
        "correctOptionIndex": 0,
        "explanation": "Under the stated overlap assumption, the slower 20 ms stage limits throughput: 1000/20=50 FPS.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD38",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Fixed-step accumulator",
        "skillTag": "Fixed-step accumulator",
        "weight": 4,
        "questionText": "A simulation accumulator starts at 0.005 s, then adds 0.050 s. Each physics step subtracts 0.020 s while enough time remains. How many steps run, and what remains?",
        "options": [
            "3 steps; nothing remains",
            "2 steps; 0.005 s remains",
            "1 step; 0.035 s remains",
            "2 steps; 0.015 s remains"
        ],
        "correctOptionIndex": 3,
        "explanation": "The accumulated 0.055 s permits two 0.020 s steps, leaving 0.015 s.",
        "reference": "G2: Unity fixed updates"
    },
    {
        "id": "GD39",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Simulation overload",
        "skillTag": "Simulation overload",
        "weight": 4,
        "questionText": "A fixed-step simulation takes longer to process new simulation time than real time allows, causing an increasing backlog. What is the most appropriate response?",
        "options": [
            "Process every accumulated step before rendering, with no work cap even while the backlog grows",
            "Drop an arbitrary number of physics callbacks while leaving the accumulator unchanged",
            "Increase the simulated delta for every catch-up step without checking stability or changing the timing policy",
            "Bound catch-up work, profile the overload, and explicitly choose how to handle excess elapsed time"
        ],
        "correctOptionIndex": 3,
        "explanation": "Unlimited catch-up can amplify overload. A cap needs a deliberate slow-down or time-discard policy, alongside reducing simulation cost.",
        "reference": "G2: Unity fixed updates"
    },
    {
        "id": "GD40",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Collision tunneling",
        "skillTag": "Collision tunneling",
        "weight": 4,
        "questionText": "A fast projectile crosses a thin wall entirely between discrete physics samples. What should be evaluated to detect that crossing?",
        "options": [
            "Increase rendering FPS without changing the physics sampling or collision method",
            "Enlarge only the projectile material bounds while leaving its collider unchanged",
            "An appropriate continuous collision or swept-shape test",
            "Enable visual motion blur and leave collision detection unchanged"
        ],
        "correctOptionIndex": 2,
        "explanation": "A sweep/CCD method considers motion between samples; its supported shapes, modes, and costs must be checked.",
        "reference": "G9: Unity continuous collision detection"
    },
    {
        "id": "GD41",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Tail frame times",
        "skillTag": "Tail frame times",
        "weight": 4,
        "questionText": "Two builds have the same mean frame time, but build B has recurring 90 ms frames. Which comparison best reveals the perceived stutter?",
        "options": [
            "Only mean FPS rounded to an integer",
            "Only the GPU vendor name",
            "Frame-time distribution and high percentiles, with traces of the spikes",
            "Only the number of source files"
        ],
        "correctOptionIndex": 2,
        "explanation": "Averages hide infrequent long frames; distribution and trace inspection expose them.",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD42",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Texture memory",
        "skillTag": "Texture memory",
        "weight": 4,
        "questionText": "An uncompressed 2048×2048 texture uses RGBA8, meaning four bytes per pixel. Ignore mipmaps and padding. How much storage does its base level require?",
        "options": [
            "16 MiB",
            "64 MiB",
            "8 MiB",
            "4 MiB"
        ],
        "correctOptionIndex": 0,
        "explanation": "2048×2048×4 = 16,777,216 bytes = 16 MiB, using 1 MiB=1,048,576 bytes.",
        "reference": "G10: Unity mipmaps"
    },
    {
        "id": "GD43",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Mip-chain memory",
        "skillTag": "Mip-chain memory",
        "weight": 4,
        "questionText": "A large square power-of-two texture uses uncompressed fixed bytes per pixel. Its full mip chain halves width and height each level. Approximately what is the total storage relative to the base level?",
        "options": [
            "4 times the base level",
            "1/4 of the base level",
            "2 times the base level",
            "4/3 of the base level"
        ],
        "correctOptionIndex": 3,
        "explanation": "The area series is 1+1/4+1/16+…≈4/3. Small terminal levels make the finite sum slightly smaller.",
        "reference": "G10: Unity mipmaps"
    },
    {
        "id": "GD44",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Pool lifecycle",
        "skillTag": "Pool lifecycle",
        "weight": 4,
        "questionText": "A reused projectile sometimes damages the previous target or expires immediately. Which fix addresses the likely lifecycle defect?",
        "options": [
            "Reset target references, lifetime, callbacks, and collision state when reactivating it",
            "Increase the pool capacity without changing the reactivation lifecycle",
            "Skip all initialization on pooled objects because their constructor already ran once",
            "Reset only the visible transform and keep gameplay callbacks and lifetime unchanged"
        ],
        "correctOptionIndex": 0,
        "explanation": "Reusing storage also reuses object state unless lifecycle code resets it deliberately.",
        "reference": "G7: Unity managed memory optimization"
    },
    {
        "id": "GD45",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Event retention",
        "skillTag": "Event retention",
        "weight": 4,
        "questionText": "A persistent event publisher holds a delegate to a destroyed scene's object. The object remains reachable in managed memory. What change addresses this retention?",
        "options": [
            "Unsubscribe at the appropriate lifecycle boundary, or use a suitable lifetime-aware subscription",
            "Force garbage collection while leaving the publisher-to-subscriber reference intact",
            "Disable the subscriber visually while preserving the persistent subscription",
            "Set one unrelated local variable to null and assume all delegate references disappear"
        ],
        "correctOptionIndex": 0,
        "explanation": "A strong delegate reference can keep a subscriber reachable; collection alone cannot remove that live reference.",
        "reference": "G7: Unity managed memory optimization"
    },
    {
        "id": "GD46",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Alpha compositing",
        "skillTag": "Alpha compositing",
        "weight": 4,
        "questionText": "Use `out = src*alpha + dst*(1-alpha)` per color channel in linear space. Starting from black, draw red (1,0,0) at alpha 0.5, then blue (0,0,1) at alpha 0.5. What is the final RGB?",
        "options": [
            "(0.25,0,0.5)",
            "(0.5,0,0.25)",
            "(0.5,0,0.5)",
            "(1,0,1)"
        ],
        "correctOptionIndex": 0,
        "explanation": "Red first gives (0.5,0,0). Blue then contributes (0,0,0.5) plus half the previous color, producing (0.25,0,0.5).",
        "reference": "G11: Unity shader blend modes"
    },
    {
        "id": "GD47",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "View-cone test",
        "skillTag": "View-cone test",
        "weight": 4,
        "questionText": "Unit vectors f and d denote forward direction and direction to a target. A target is inside a cone with half-angle 60° when the angle is at most 60°. Which test is correct?",
        "options": [
            "dot(f,d) >= 60",
            "dot(f,d) <= 0.5",
            "dot(f,d) >= 0.5",
            "dot(f,d) == 0 only"
        ],
        "correctOptionIndex": 2,
        "explanation": "For unit vectors the dot product equals cosine of the angle; cos(60°)=0.5 and cosine decreases over 0°–180°.",
        "reference": "G1: Godot vector mathematics"
    },
    {
        "id": "GD48",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Snapshot interpolation",
        "skillTag": "Snapshot interpolation",
        "weight": 4,
        "questionText": "Remote-player snapshots arrive with variable network delay. Why might a client render slightly behind the newest simulation time?",
        "options": [
            "To guarantee that packet loss never occurs",
            "To remove the need for timestamps",
            "To interpolate between buffered snapshots, trading extra display delay for smoother motion",
            "To let the client override server authority"
        ],
        "correctOptionIndex": 2,
        "explanation": "A buffer increases the chance that both endpoints for interpolation are available despite arrival jitter.",
        "reference": "G13: Gaffer on Games: state synchronization, author repository"
    },
    {
        "id": "GD49",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Prediction reconciliation",
        "skillTag": "Prediction reconciliation",
        "weight": 4,
        "questionText": "A client predicts movement. The server replies with authoritative state and the last processed input sequence. What is the usual reconciliation step?",
        "options": [
            "Replay acknowledged inputs again on top of the authoritative state",
            "Restore that authoritative state, then replay locally stored inputs after the acknowledged sequence",
            "Apply the authoritative position but replay unacknowledged inputs using their arrival order instead of their recorded sequence",
            "Keep the predicted state and ignore a correction whenever local motion appears smooth"
        ],
        "correctOptionIndex": 1,
        "explanation": "The acknowledgement identifies which inputs the server state already includes, avoiding double application during replay.",
        "reference": "G4: Unreal networking and multiplayer"
    },
    {
        "id": "GD50",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Server validation",
        "skillTag": "Server validation",
        "weight": 4,
        "questionText": "A client sends “deal 500 damage to player X.” What should an authoritative server do?",
        "options": [
            "Validate the action, weapon, timing, and target against server state and calculate allowed damage",
            "Validate only the target ID and trust the supplied damage and firing rate",
            "Accept client damage after checking only that it arrived over a reliable channel",
            "Accept the damage whenever the client is authenticated, without checking game state"
        ],
        "correctOptionIndex": 0,
        "explanation": "Reliable transport does not make gameplay claims trustworthy; authority requires validating the action's semantics.",
        "reference": "G6: Unreal multiplayer programming quick start"
    },
    {
        "id": "GD51",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Ordered reliable delivery",
        "skillTag": "Ordered reliable delivery",
        "weight": 4,
        "questionText": "A transport guarantees in-order reliable delivery on one stream. A lost old position message blocks newer messages on that stream until recovery. What phenomenon is illustrated?",
        "options": [
            "Head-of-line blocking",
            "Texture aliasing",
            "Frustum culling",
            "Floating-point underflow"
        ],
        "correctOptionIndex": 0,
        "explanation": "The stream cannot expose later ordered data while an earlier required segment is missing.",
        "reference": "G13: Gaffer on Games: state synchronization, author repository"
    },
    {
        "id": "GD52",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Replication bandwidth",
        "skillTag": "Replication bandwidth",
        "weight": 4,
        "questionText": "A server sends each client 10 entities × 20 updates/second × 40 payload bytes/update. Ignore headers and compression. What is the outgoing payload per client?",
        "options": [
            "80,000 bytes/second",
            "400 bytes/second",
            "8,000 bytes/second",
            "800 bytes/second"
        ],
        "correctOptionIndex": 2,
        "explanation": "10×20×40=8,000 payload bytes/s. Total server egress also depends on client count.",
        "reference": "G4: Unreal networking and multiplayer"
    },
    {
        "id": "GD53",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Deterministic replay",
        "skillTag": "Deterministic replay",
        "weight": 4,
        "questionText": "Two simulations use the same random seed but diverge after several minutes on different platforms. Which explanation is valid?",
        "options": [
            "Identical seeds do not guarantee identical floating-point behavior, execution order, or inputs",
            "A fixed timestep alone guarantees identical results across arbitrary physics engines",
            "The same random seed guarantees identical results even when the number/order of random calls differs",
            "Sending only input timestamps makes different floating-point implementations identical"
        ],
        "correctOptionIndex": 0,
        "explanation": "A deterministic system needs consistent initial state, inputs, ordering, random consumption, and numerical behavior.",
        "reference": "G12: Gaffer on Games: deterministic lockstep, author repository"
    },
    {
        "id": "GD54",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Rollback side effects",
        "skillTag": "Rollback side effects",
        "weight": 4,
        "questionText": "A rollback simulation re-executes the same frame and grants a persistent purchase reward twice. What design addresses this?",
        "options": [
            "Commit the external reward on every replayed frame and rely on identical payload text to prevent duplicates",
            "Keep the external write inside the replay loop and reset only the local visual counter",
            "Assign a new reward ID on each replay so the storage service can distinguish every repeated grant",
            "Separate replayable simulation from external side effects and deduplicate committed events by stable identity"
        ],
        "correctOptionIndex": 3,
        "explanation": "Re-simulation may repeat code; irreversible external effects need a commit/deduplication policy.",
        "reference": "G12: Gaffer on Games: deterministic lockstep, author repository"
    },
    {
        "id": "GD55",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Audio synchronization",
        "skillTag": "Audio synchronization",
        "weight": 4,
        "questionText": "A rhythm game schedules notes by accumulating variable render-frame delays, and note timing jitters. What timing basis better fits audio scheduling?",
        "options": [
            "The audio system's stable DSP/sample clock, with scheduled playback and measured output latency",
            "The number of loaded textures",
            "The count of rendered frames alone",
            "The current network player's ping for offline music"
        ],
        "correctOptionIndex": 0,
        "explanation": "Audio timing should follow the audio clock; rendering cadence is variable, and device latency may need calibration.",
        "reference": "G14: Unity scheduled audio playback"
    },
    {
        "id": "GD56",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Accessibility validation",
        "skillTag": "Accessibility validation",
        "weight": 4,
        "questionText": "A menu supports remapping, but its prompts still show hardcoded original buttons. What is the best correction?",
        "options": [
            "Disable remapping during tutorials",
            "Tell users to memorize the old layout",
            "Generate prompts from active bindings and test navigation with the remapped controls",
            "Change only the background color"
        ],
        "correctOptionIndex": 2,
        "explanation": "Input support must remain understandable after remapping; prompts and actual controls should agree.",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD57",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Experiment interpretation",
        "skillTag": "Experiment interpretation",
        "weight": 4,
        "questionText": "A tutorial redesign is tested only with returning expert players and completion improves. Which conclusion is justified?",
        "options": [
            "It proves all accessibility needs are met",
            "It proves the game has no performance problems",
            "It improved completion in that tested group; first-time users need separate representative evaluation",
            "It proves the tutorial helps every beginner"
        ],
        "correctOptionIndex": 2,
        "explanation": "Participant selection limits generalization. A beginner tutorial should also be evaluated with its intended audience.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "GD58",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Advanced diagnosis",
        "skillTag": "Advanced diagnosis",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of resolving a simulation, rendering, or networking defect?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently diagnosed defect with a reproducible case and fix",
            "I can also show a regression check, measured evidence, and an explanation of why competing hypotheses were rejected"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G3: Unity Profiler"
    },
    {
        "id": "GD59",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Experience evaluation",
        "skillTag": "Experience evaluation",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of evaluating an interactive experience with its intended users?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show a documented task-based playtest or structured accessibility evaluation",
            "I can also show how findings changed the design and evidence from a follow-up evaluation"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G5: Xbox Accessibility Guidelines"
    },
    {
        "id": "GD60",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Integrated delivery",
        "skillTag": "Integrated delivery",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of delivering a complete small game or interactive application?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I can show an independently integrated playable artifact with code and setup instructions",
            "I can also show a tested release with performance evidence, known limitations, and documented design tradeoffs"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "G8: Unity Certified User programmer competencies"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 1) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 1));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = GAME_DEV_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = GAME_DEV_QUESTIONS.findIndex(q => q.id === endId);
    return GAME_DEV_QUESTIONS.slice(startIndex, endIndex + 1);
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
