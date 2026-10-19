# Game Development and Interactive Media — nested competency surveys

Version 1 · Administrator edition with answers · Research checked 15–16 October 2026.

Scope: gameplay programming, mathematics, rendering, physics, animation/audio, UI/accessibility, multiplayer, profiling, asset workflows, and interactive-experience validation.

**Research emphasis:** Official Unity, Godot, and Unreal documentation supplies practical development competencies; Xbox accessibility guidance supplies inclusive interaction requirements. Microsoft interview guidance informs coding/problem-solving style. These sources are not a survey of game-studio hiring frequencies.

## Forms and scoring

| Form | IDs (inclusive) | Technical | Self-assessment | Total | Raw maximum |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S1.md) | GD01–GD60 | 50 | 10 | 60 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S2.md) | GD06–GD60 | 46 | 9 | 55 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S3.md) | GD11–GD60 | 42 | 8 | 50 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S4.md) | GD16–GD60 | 38 | 7 | 45 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S5.md) | GD21–GD60 | 34 | 6 | 40 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S6.md) | GD26–GD60 | 30 | 5 | 35 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S7.md) | GD31–GD60 | 26 | 4 | 30 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/Additional-Specialization-Surveys/Game-Development/Semesters/S8.md) | GD36–GD60 | 22 | 3 | 25 | 94 |

Each form uses the strict rule **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1**. All ID ranges are inclusive. S8 contains IDs 36–60; each preceding form adds five earlier IDs, comprising four competency questions and one self-assessment. Inherited wording, options, keys, and weights are identical. There are 60 unique questions and 340 appearances across the eight forms.

Competency questions have four options and one correct answer. Weights are 2 for tiers 1–2, 3 for tiers 3–6, and 4 for tiers 7–8. Correct = full weight; incorrect or unanswered = 0. Each self-assessment has weight 2 and scores A=0, B=0.5, C=1, D=2; unanswered=0. There is no negative marking. Self-assessment measures reported practice; it has no objectively correct answer. Coursework, simulators, personal projects, and local demonstrations are acceptable evidence; paid experience is not required.

The proposed weighting gives foundational recognition/code-reading items 2 points, applied intermediate competencies 3, and later-stage integration/diagnosis 4. Self-report is capped at 2 to keep demonstrated knowledge dominant. These are design priorities, not empirically estimated item difficulty or weights prescribed by the sources. Some late-stage items check essential fundamentals in advanced contexts and will be easier than other items in the same tier.

`finalScore = 100 × rawPoints / formMaximum`. Also report `technicalScore = 100 × technicalPoints / technicalMaximum` and `practiceScore = 100 × selfAssessmentPoints / practiceMaximum`. Preserve raw values and round only for display. S8 has technicalMaximum=88 and practiceMaximum=6; 64 technical plus 4 practice points produces 68/94 = **72.34/100**. In S1, self-assessment contributes at most 20/188 = 10.64% of raw points; in S8 it contributes at most 6/94 = 6.38%.

S1 includes advanced stretch questions. Its overall percentage is not an appropriate first-year pass/fail judgment. Present tier and topic gaps, then recommend prerequisite learning before advanced work. Normalization does not make scores from different forms equally difficult. The shared tier-8 technical items permit a common-item subscore, though repeat exposure may inflate it. Four technical questions in an earlier tier are a screening sample, not a comprehensive diagnosis.

Semester tiers are proposed learning stages, not a claim about every university syllabus. Weights, ordering, and difficulty have not been psychometrically validated. Pilot with faculty and students, review ambiguous items and distractors, and confirm practical ability through work samples before consequential recommendations. A student joining in a late semester may need a separately labelled prerequisite check. Omitting difficult questions through adaptive stopping would create a different form and would no longer implement these exact membership lists.

These original interview-style questions are informed by official curricula, role guidance, and technical documentation. They are not represented as actual employer interview questions. Source links indicate technical support or topic relevance; worked calculations and scenario assumptions establish the intended answers. Professional certification profiles describe skill areas, not B.Tech hiring cutoffs or a representative survey of all employers.


## Complete bank

## Tier 1 — Programming and spatial foundations

Included in S1.

### GD01 — Code tracing

**Competency MCQ · Tier 1 · Weight 2**

In C#, `int score = 0; for (int i = 0; i < 3; i++) score += 2;` runs once. What is score afterward?

- **A.** 8
- **B.** 3
- **C.** 4
- **D.** 6

**Answer: D.** The loop executes for i=0,1,2 and adds 2 three times.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD02 — Vectors

**Competency MCQ · Tier 1 · Weight 2**

A character moves from (2,3) to (5,7). What displacement vector describes this movement?

- **A.** (-3,-4)
- **B.** (5,7)
- **C.** (3,4)
- **D.** (7,10)

**Answer: C.** Displacement is destination minus starting position.

**Reference basis:** [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD03 — Coordinates

**Competency MCQ · Tier 1 · Weight 2**

A child object is at local position (1,0,0). Its parent has translation (10,0,0), identity rotation, and unit scale. What is the child's world position?

- **A.** (11,0,0)
- **B.** (10,0,0)
- **C.** (9,0,0)
- **D.** (1,0,0)

**Answer: A.** With no rotation or scaling, add the parent translation to the local position.

**Reference basis:** [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD04 — Collections

**Competency MCQ · Tier 1 · Weight 2**

Which collection operation prevents a player ID from being recorded twice in a set of players who collected a one-time reward?

- **A.** Sort duplicate IDs without removing any
- **B.** Increment an array index for each collision
- **C.** Insert the ID into a set and check whether insertion was new
- **D.** Append every ID to a list

**Answer: C.** A set maintains distinct members; the result of insertion can guard one-time logic.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD05 — Programming practice

**Self-assessment MCQ · Tier 1 · Weight 2**

What evidence can you demonstrate of writing a small interactive program?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently written program with input and visible state changes **(1 points)**
- **D.** I can also explain its logic and demonstrate tests for boundary cases **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

## Tier 2 — Game loop and interaction

Included in S1 through S2.

### GD06 — Frame-independent motion

**Competency MCQ · Tier 2 · Weight 2**

A non-physics object should move at 5 metres per second. In a frame with deltaTime=0.02 seconds, what displacement should `speed * deltaTime` produce?

- **A.** 5 metres
- **B.** 250 metres
- **C.** 0.02 metres
- **D.** 0.1 metres

**Answer: D.** 5 m/s × 0.02 s = 0.1 m. Multiplying by elapsed time converts speed into displacement.

**Reference basis:** [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD07 — Input events

**Competency MCQ · Tier 2 · Weight 2**

A single press must toggle a pause menu once, even if the key remains held. Which input event fits?

- **A.** Any mouse movement while the key is held
- **B.** Every frame in which the key is released
- **C.** The transition from released to pressed
- **D.** Every frame in which the key is held

**Answer: C.** A press edge fires once per press; a held-state check may toggle on multiple frames.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD08 — Game state

**Competency MCQ · Tier 2 · Weight 2**

A player can be Idle, Running, or Jumping, with defined transitions. Which model directly represents these mutually exclusive modes?

- **A.** A spatial audio mixer
- **B.** A texture atlas
- **C.** A finite state machine
- **D.** A projection matrix

**Answer: C.** States and transition conditions explicitly encode allowed modes and changes.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD09 — Vector normalization

**Competency MCQ · Tier 2 · Weight 2**

A 2D input vector is (1,1). What should it become after normalization so diagonal movement has unit length?

- **A.** (1/√2,1/√2)
- **B.** (1,1)
- **C.** (√2,√2)
- **D.** (0.5,0.5)

**Answer: A.** The original magnitude is √2, so dividing each component by √2 produces magnitude 1.

**Reference basis:** [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD10 — Prototype practice

**Self-assessment MCQ · Tier 2 · Weight 2**

What evidence can you demonstrate of building a playable movement prototype?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently built prototype with movement and interaction **(1 points)**
- **D.** I can also demonstrate consistent movement at different frame rates and explain the timing choices **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

## Tier 3 — Physics, rendering, and state

Included in S1 through S3.

### GD11 — Physics updates

**Competency MCQ · Tier 3 · Weight 3**

A game renders at a variable frame rate but simulates physics with a fixed timestep. Where should recurring physics forces normally be applied?

- **A.** Only when a rendered frame takes longer than average
- **B.** Only once during level loading
- **C.** In the engine's fixed physics update, following its API conventions
- **D.** In a UI repaint callback

**Answer: C.** A fixed simulation step gives forces a consistent timing basis; the engine's force API determines whether explicit timestep scaling is needed.

**Reference basis:** [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD12 — Trigger volumes

**Competency MCQ · Tier 3 · Weight 3**

A zone should notify gameplay when entered without physically blocking a player. Which setup is appropriate?

- **A.** A brighter material on the floor
- **B.** A trigger or overlap volume with an entry event
- **C.** A camera near-plane change
- **D.** A solid collider with no gameplay callback

**Answer: B.** Trigger/overlap detection reports contact without requiring a blocking physical response.

**Reference basis:** [G9: Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD13 — Rendering visibility

**Competency MCQ · Tier 3 · Weight 3**

An object is outside the camera's view frustum. Which optimization can skip submitting it for that camera?

- **A.** Raising network tick rate
- **B.** Frustum culling
- **C.** Increasing its mass
- **D.** Audio compression

**Answer: B.** Frustum culling rejects objects outside the visible volume before unnecessary rendering work.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD14 — Animation logic

**Competency MCQ · Tier 3 · Weight 3**

An attack animation visually continues after the character enters the Dead state. Which change addresses the state conflict most directly?

- **A.** Define and test a higher-priority death transition that interrupts attack playback
- **B.** Disable all animation transitions
- **C.** Increase the audio sample rate
- **D.** Double the attack texture resolution

**Answer: A.** Explicit interruption and transition rules make animation agree with gameplay state.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD15 — Gameplay modeling

**Self-assessment MCQ · Tier 3 · Weight 2**

What evidence can you demonstrate of implementing state-based gameplay?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent state machine for a character or enemy **(1 points)**
- **D.** I can also demonstrate transition tests and explain how conflicting states are prevented **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

## Tier 4 — Assets, audio, and accessibility

Included in S1 through S4.

### GD16 — Texture coordinates

**Competency MCQ · Tier 4 · Weight 3**

What do a mesh's UV coordinates primarily specify?

- **A.** The world's gravity direction
- **B.** The network address of the asset server
- **C.** The object's linear velocity
- **D.** How surface points map to positions in a texture

**Answer: D.** UV coordinates map mesh surfaces to texture space.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf), [G10: Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

### GD17 — Spatial audio

**Competency MCQ · Tier 4 · Weight 3**

Footsteps from a distant character should become quieter as distance increases. Which feature directly supports this?

- **A.** Increasing all UI sound volume
- **B.** Changing the shadow map size
- **C.** Distance attenuation on a spatial audio source
- **D.** Sorting sprites by name

**Answer: C.** Spatial attenuation changes audible level with source-listener distance.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD18 — Accessible interaction

**Competency MCQ · Tier 4 · Weight 3**

A puzzle communicates correct and incorrect choices using only green and red. What is the best improvement?

- **A.** Remove feedback entirely
- **B.** Use slightly brighter red and green only
- **C.** Add distinct symbols or text alongside the colors
- **D.** Require a faster reaction time

**Answer: C.** Redundant visual cues allow meaning to remain available when colors cannot be distinguished.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD19 — Asset collaboration

**Competency MCQ · Tier 4 · Weight 3**

Two developers frequently overwrite changes to the same binary scene file. What workflow most directly reduces conflicts?

- **A.** Ask Git to merge arbitrary binary bytes automatically
- **B.** Use supported asset locking or divide work into separate scenes/prefabs with clear ownership
- **C.** Commit only the final executable
- **D.** Disable version control for all assets

**Answer: B.** Locking or separation prevents simultaneous incompatible edits; binary merge support depends on the asset format and tooling.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD20 — Inclusive interaction

**Self-assessment MCQ · Tier 4 · Weight 2**

What evidence can you demonstrate of building an accessible interaction or menu?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show independently implemented focus, non-color cues, or configurable input **(1 points)**
- **D.** I can also show a documented accessibility review and fixes verified through user or structured task testing **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

## Tier 5 — Gameplay systems and profiling

Included in S1 through S5.

### GD21 — Object pooling

**Competency MCQ · Tier 5 · Weight 3**

A game repeatedly creates and destroys hundreds of identical projectiles. Profiling shows allocation-related pauses. What change should be evaluated first?

- **A.** Recreate the entire level after every shot
- **B.** Allocate additional temporary lists every frame
- **C.** Make every projectile texture larger
- **D.** Reuse inactive projectiles from a pool with a defined reset routine

**Answer: D.** Pooling reduces repeated allocation churn, provided reused objects have their state reset correctly.

**Reference basis:** [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD22 — Pathfinding

**Competency MCQ · Tier 5 · Weight 3**

On a four-neighbour grid with unit movement costs and no diagonal moves, which A* heuristic never overestimates the shortest unobstructed path?

- **A.** A fresh random number at every expansion
- **B.** Manhattan distance: abs(dx)+abs(dy)
- **C.** Twice the Manhattan distance
- **D.** The square of Manhattan distance

**Answer: B.** Each horizontal or vertical step changes one coordinate by one; obstacles can only make the shortest route at least this long.

**Reference basis:** [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf), [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD23 — Performance diagnosis

**Competency MCQ · Tier 5 · Weight 3**

A build stutters on a target phone but runs smoothly in the editor on a workstation. What is the most useful next investigation?

- **A.** Optimize a random script based on its line count
- **B.** Measure only editor startup time
- **C.** Assume the GPU is responsible without measuring
- **D.** Profile the build on the phone using a reproducible scene

**Answer: D.** Measurements on the affected device reveal the workload and bottleneck relevant to the observed problem.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD24 — Save compatibility

**Competency MCQ · Tier 5 · Weight 3**

Version 2 adds an inventory field to saved games. What design best preserves version-1 saves?

- **A.** Interpret every old byte layout as the new layout
- **B.** Delete all old saves during startup
- **C.** Store a save schema version and migrate older saves with defaults for new fields
- **D.** Use the file modification time as the only schema indicator

**Answer: C.** Explicit schema versions and tested migrations support intentional compatibility across releases.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD25 — Performance practice

**Self-assessment MCQ · Tier 5 · Weight 2**

What evidence can you demonstrate of investigating a gameplay performance problem?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show a profiler capture and an independently implemented fix **(1 points)**
- **D.** I can also show comparable before/after captures on a target device and explain the tradeoffs **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

## Tier 6 — Multiplayer and platform performance

Included in S1 through S6.

### GD26 — Multiplayer authority

**Competency MCQ · Tier 6 · Weight 3**

In an authoritative-server game, who should make the final decision that an item was legitimately collected?

- **A.** Any client that displays the item
- **B.** The client with the highest frame rate
- **C.** The first peer to change its local score text
- **D.** The server after validating the request and game state

**Answer: D.** Clients can request actions and predict visuals, while the server validates shared game-state changes.

**Reference basis:** [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine), [G6: Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

### GD27 — Network messages

**Competency MCQ · Tier 6 · Weight 3**

Position updates are frequent, and a newer update supersedes an older one. Which delivery strategy is often suitable?

- **A.** Unreliable updates with sequence/timestamp handling and smoothing
- **B.** Use the UI redraw rate as proof of delivery
- **C.** Send positions only when the player disconnects
- **D.** Reliably queue every historical position indefinitely

**Answer: A.** Timely recent state can matter more than delivery of obsolete positions; ordering and smoothing still need deliberate handling.

**Reference basis:** [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD28 — Level of detail

**Competency MCQ · Tier 6 · Weight 3**

A distant object occupies only a few screen pixels but uses a very detailed mesh. Which technique targets that unnecessary geometry?

- **A.** Select a lower-detail mesh based on screen size or distance
- **B.** Raise physics solver iterations globally
- **C.** Disable input buffering
- **D.** Increase every object's polygon count

**Answer: A.** LOD reduces geometric detail when the visible result needs fewer triangles.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD29 — Interactive UI

**Competency MCQ · Tier 6 · Weight 3**

A controller user opens a menu but no control is selected, so directional input does nothing. What should the interface establish?

- **A.** A higher network send rate
- **B.** An initial focus target and a navigable focus order
- **C.** A lower gravity constant
- **D.** A smaller texture compression block

**Answer: B.** Controller and keyboard navigation require focus and predictable movement between controls.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD30 — Multiplayer practice

**Self-assessment MCQ · Tier 6 · Weight 2**

What evidence can you demonstrate of building a small networked interaction?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independent multiplayer prototype with a defined authority model **(1 points)**
- **D.** I can also demonstrate tests with injected latency or loss and explain observed recovery behavior **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine), [G6: Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

## Tier 7 — Production, testing, and instrumentation

Included in S1 through S7.

### GD31 — Regression testing

**Competency MCQ · Tier 7 · Weight 4**

A damage formula was changed. Which test best catches an unintended change in armor behavior?

- **A.** Listening to the background soundtrack
- **B.** Automated cases with known attack, armor, and expected damage values
- **C.** Checking whether the game logo loads
- **D.** Comparing only executable file sizes

**Answer: B.** Tests anchored in expected gameplay results expose formula regressions directly.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD32 — Crash triage

**Competency MCQ · Tier 7 · Weight 4**

Only release builds crash, and the report gives an address without a useful function name. What artifact most helps locate the failing code?

- **A.** The newest soundtrack file
- **B.** A screenshot of the main menu
- **C.** Matching debug symbols for that exact build
- **D.** An unrelated development build's source map

**Answer: C.** Symbols must match the binary to translate addresses into meaningful code locations.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD33 — Instrumentation

**Competency MCQ · Tier 7 · Weight 4**

You need to measure where players abandon a tutorial. Which event design best supports that analysis?

- **A.** Record only the total number of texture files
- **B.** Record only sessions that finished successfully
- **C.** Record tutorial step entry/completion with a consistent session identifier and defined event meanings
- **D.** Record button clicks without identifying the tutorial step

**Answer: C.** Step events and session linkage support a funnel that includes both completed and abandoned attempts.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD34 — Reproducible builds

**Competency MCQ · Tier 7 · Weight 4**

A teammate cannot reproduce a gameplay bug after pulling the source. Which missing information is most relevant?

- **A.** The length of the release trailer
- **B.** The order of icons on the taskbar
- **C.** The engine/package versions, asset revisions, build configuration, and reproduction steps
- **D.** The author's desktop wallpaper

**Answer: C.** Code alone may not define a game build; dependencies, assets, configuration, and steps are part of reproducibility.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD35 — Release practice

**Self-assessment MCQ · Tier 7 · Weight 2**

What evidence can you demonstrate of preparing a reproducible playable build?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show a versioned build with documented dependencies and reproduction steps **(1 points)**
- **D.** I can also show automated checks and evidence that another person or clean environment reproduced the build **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

## Tier 8 — Advanced simulation, rendering, networking, and interactive-system diagnosis

Included in S1 through S8.

### GD36 — Frame budget

**Competency MCQ · Tier 8 · Weight 4**

A game targets 60 rendered frames per second. Approximately how much time is available per frame?

- **A.** 6 milliseconds
- **B.** 1.67 milliseconds
- **C.** 16.67 milliseconds
- **D.** 60 milliseconds

**Answer: C.** 1000 ms / 60 ≈ 16.67 ms. This is a frame interval, not a separate unlimited budget for every subsystem.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD37 — Pipeline bottleneck

**Competency MCQ · Tier 8 · Weight 4**

Assume CPU and GPU work overlap perfectly across frames, with no extra waits. CPU work takes 8 ms/frame and GPU work 20 ms/frame. What steady-state frame rate is the throughput upper bound?

- **A.** 50 FPS
- **B.** 100 FPS
- **C.** 125 FPS
- **D.** 35.7 FPS

**Answer: A.** Under the stated overlap assumption, the slower 20 ms stage limits throughput: 1000/20=50 FPS.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD38 — Fixed-step accumulator

**Competency MCQ · Tier 8 · Weight 4**

A simulation accumulator starts at 0.005 s, then adds 0.050 s. Each physics step subtracts 0.020 s while enough time remains. How many steps run, and what remains?

- **A.** 3 steps; nothing remains
- **B.** 2 steps; 0.005 s remains
- **C.** 1 step; 0.035 s remains
- **D.** 2 steps; 0.015 s remains

**Answer: D.** The accumulated 0.055 s permits two 0.020 s steps, leaving 0.015 s.

**Reference basis:** [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD39 — Simulation overload

**Competency MCQ · Tier 8 · Weight 4**

A fixed-step simulation takes longer to process new simulation time than real time allows, causing an increasing backlog. What is the most appropriate response?

- **A.** Process every accumulated step before rendering, with no work cap even while the backlog grows
- **B.** Drop an arbitrary number of physics callbacks while leaving the accumulator unchanged
- **C.** Increase the simulated delta for every catch-up step without checking stability or changing the timing policy
- **D.** Bound catch-up work, profile the overload, and explicitly choose how to handle excess elapsed time

**Answer: D.** Unlimited catch-up can amplify overload. A cap needs a deliberate slow-down or time-discard policy, alongside reducing simulation cost.

**Reference basis:** [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html), [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD40 — Collision tunneling

**Competency MCQ · Tier 8 · Weight 4**

A fast projectile crosses a thin wall entirely between discrete physics samples. What should be evaluated to detect that crossing?

- **A.** Increase rendering FPS without changing the physics sampling or collision method
- **B.** Enlarge only the projectile material bounds while leaving its collider unchanged
- **C.** An appropriate continuous collision or swept-shape test
- **D.** Enable visual motion blur and leave collision detection unchanged

**Answer: C.** A sweep/CCD method considers motion between samples; its supported shapes, modes, and costs must be checked.

**Reference basis:** [G9: Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html)

### GD41 — Tail frame times

**Competency MCQ · Tier 8 · Weight 4**

Two builds have the same mean frame time, but build B has recurring 90 ms frames. Which comparison best reveals the perceived stutter?

- **A.** Only mean FPS rounded to an integer
- **B.** Only the GPU vendor name
- **C.** Frame-time distribution and high percentiles, with traces of the spikes
- **D.** Only the number of source files

**Answer: C.** Averages hide infrequent long frames; distribution and trace inspection expose them.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD42 — Texture memory

**Competency MCQ · Tier 8 · Weight 4**

An uncompressed 2048×2048 texture uses RGBA8, meaning four bytes per pixel. Ignore mipmaps and padding. How much storage does its base level require?

- **A.** 16 MiB
- **B.** 64 MiB
- **C.** 8 MiB
- **D.** 4 MiB

**Answer: A.** 2048×2048×4 = 16,777,216 bytes = 16 MiB, using 1 MiB=1,048,576 bytes.

**Reference basis:** [G10: Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

### GD43 — Mip-chain memory

**Competency MCQ · Tier 8 · Weight 4**

A large square power-of-two texture uses uncompressed fixed bytes per pixel. Its full mip chain halves width and height each level. Approximately what is the total storage relative to the base level?

- **A.** 4 times the base level
- **B.** 1/4 of the base level
- **C.** 2 times the base level
- **D.** 4/3 of the base level

**Answer: D.** The area series is 1+1/4+1/16+…≈4/3. Small terminal levels make the finite sum slightly smaller.

**Reference basis:** [G10: Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

### GD44 — Pool lifecycle

**Competency MCQ · Tier 8 · Weight 4**

A reused projectile sometimes damages the previous target or expires immediately. Which fix addresses the likely lifecycle defect?

- **A.** Reset target references, lifetime, callbacks, and collision state when reactivating it
- **B.** Increase the pool capacity without changing the reactivation lifecycle
- **C.** Skip all initialization on pooled objects because their constructor already ran once
- **D.** Reset only the visible transform and keep gameplay callbacks and lifetime unchanged

**Answer: A.** Reusing storage also reuses object state unless lifecycle code resets it deliberately.

**Reference basis:** [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD45 — Event retention

**Competency MCQ · Tier 8 · Weight 4**

A persistent event publisher holds a delegate to a destroyed scene's object. The object remains reachable in managed memory. What change addresses this retention?

- **A.** Unsubscribe at the appropriate lifecycle boundary, or use a suitable lifetime-aware subscription
- **B.** Force garbage collection while leaving the publisher-to-subscriber reference intact
- **C.** Disable the subscriber visually while preserving the persistent subscription
- **D.** Set one unrelated local variable to null and assume all delegate references disappear

**Answer: A.** A strong delegate reference can keep a subscriber reachable; collection alone cannot remove that live reference.

**Reference basis:** [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD46 — Alpha compositing

**Competency MCQ · Tier 8 · Weight 4**

Use `out = src*alpha + dst*(1-alpha)` per color channel in linear space. Starting from black, draw red (1,0,0) at alpha 0.5, then blue (0,0,1) at alpha 0.5. What is the final RGB?

- **A.** (0.25,0,0.5)
- **B.** (0.5,0,0.25)
- **C.** (0.5,0,0.5)
- **D.** (1,0,1)

**Answer: A.** Red first gives (0.5,0,0). Blue then contributes (0,0,0.5) plus half the previous color, producing (0.25,0,0.5).

**Reference basis:** [G11: Unity shader blend modes](https://docs.unity.com/en-us/engine/6000.7/manual/materials-and-shaders/shaders/writing-custom/shader-writing/sl/writing-shader-render-state-commands/blending-modes)

### GD47 — View-cone test

**Competency MCQ · Tier 8 · Weight 4**

Unit vectors f and d denote forward direction and direction to a target. A target is inside a cone with half-angle 60° when the angle is at most 60°. Which test is correct?

- **A.** dot(f,d) >= 60
- **B.** dot(f,d) <= 0.5
- **C.** dot(f,d) >= 0.5
- **D.** dot(f,d) == 0 only

**Answer: C.** For unit vectors the dot product equals cosine of the angle; cos(60°)=0.5 and cosine decreases over 0°–180°.

**Reference basis:** [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD48 — Snapshot interpolation

**Competency MCQ · Tier 8 · Weight 4**

Remote-player snapshots arrive with variable network delay. Why might a client render slightly behind the newest simulation time?

- **A.** To guarantee that packet loss never occurs
- **B.** To remove the need for timestamps
- **C.** To interpolate between buffered snapshots, trading extra display delay for smoother motion
- **D.** To let the client override server authority

**Answer: C.** A buffer increases the chance that both endpoints for interpolation are available despite arrival jitter.

**Reference basis:** [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD49 — Prediction reconciliation

**Competency MCQ · Tier 8 · Weight 4**

A client predicts movement. The server replies with authoritative state and the last processed input sequence. What is the usual reconciliation step?

- **A.** Replay acknowledged inputs again on top of the authoritative state
- **B.** Restore that authoritative state, then replay locally stored inputs after the acknowledged sequence
- **C.** Apply the authoritative position but replay unacknowledged inputs using their arrival order instead of their recorded sequence
- **D.** Keep the predicted state and ignore a correction whenever local motion appears smooth

**Answer: B.** The acknowledgement identifies which inputs the server state already includes, avoiding double application during replay.

**Reference basis:** [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine), [G6: Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

### GD50 — Server validation

**Competency MCQ · Tier 8 · Weight 4**

A client sends “deal 500 damage to player X.” What should an authoritative server do?

- **A.** Validate the action, weapon, timing, and target against server state and calculate allowed damage
- **B.** Validate only the target ID and trust the supplied damage and firing rate
- **C.** Accept client damage after checking only that it arrived over a reliable channel
- **D.** Accept the damage whenever the client is authenticated, without checking game state

**Answer: A.** Reliable transport does not make gameplay claims trustworthy; authority requires validating the action's semantics.

**Reference basis:** [G6: Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

### GD51 — Ordered reliable delivery

**Competency MCQ · Tier 8 · Weight 4**

A transport guarantees in-order reliable delivery on one stream. A lost old position message blocks newer messages on that stream until recovery. What phenomenon is illustrated?

- **A.** Head-of-line blocking
- **B.** Texture aliasing
- **C.** Frustum culling
- **D.** Floating-point underflow

**Answer: A.** The stream cannot expose later ordered data while an earlier required segment is missing.

**Reference basis:** [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD52 — Replication bandwidth

**Competency MCQ · Tier 8 · Weight 4**

A server sends each client 10 entities × 20 updates/second × 40 payload bytes/update. Ignore headers and compression. What is the outgoing payload per client?

- **A.** 80,000 bytes/second
- **B.** 400 bytes/second
- **C.** 8,000 bytes/second
- **D.** 800 bytes/second

**Answer: C.** 10×20×40=8,000 payload bytes/s. Total server egress also depends on client count.

**Reference basis:** [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)

### GD53 — Deterministic replay

**Competency MCQ · Tier 8 · Weight 4**

Two simulations use the same random seed but diverge after several minutes on different platforms. Which explanation is valid?

- **A.** Identical seeds do not guarantee identical floating-point behavior, execution order, or inputs
- **B.** A fixed timestep alone guarantees identical results across arbitrary physics engines
- **C.** The same random seed guarantees identical results even when the number/order of random calls differs
- **D.** Sending only input timestamps makes different floating-point implementations identical

**Answer: A.** A deterministic system needs consistent initial state, inputs, ordering, random consumption, and numerical behavior.

**Reference basis:** [G12: Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

### GD54 — Rollback side effects

**Competency MCQ · Tier 8 · Weight 4**

A rollback simulation re-executes the same frame and grants a persistent purchase reward twice. What design addresses this?

- **A.** Commit the external reward on every replayed frame and rely on identical payload text to prevent duplicates
- **B.** Keep the external write inside the replay loop and reset only the local visual counter
- **C.** Assign a new reward ID on each replay so the storage service can distinguish every repeated grant
- **D.** Separate replayable simulation from external side effects and deduplicate committed events by stable identity

**Answer: D.** Re-simulation may repeat code; irreversible external effects need a commit/deduplication policy.

**Reference basis:** [G12: Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md), [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD55 — Audio synchronization

**Competency MCQ · Tier 8 · Weight 4**

A rhythm game schedules notes by accumulating variable render-frame delays, and note timing jitters. What timing basis better fits audio scheduling?

- **A.** The audio system's stable DSP/sample clock, with scheduled playback and measured output latency
- **B.** The number of loaded textures
- **C.** The count of rendered frames alone
- **D.** The current network player's ping for offline music

**Answer: A.** Audio timing should follow the audio clock; rendering cadence is variable, and device latency may need calibration.

**Reference basis:** [G14: Unity scheduled audio playback](https://docs.unity.com/en-us/engine/6000.7/script-reference/unityengine/audiosource/playscheduled)

### GD56 — Accessibility validation

**Competency MCQ · Tier 8 · Weight 4**

A menu supports remapping, but its prompts still show hardcoded original buttons. What is the best correction?

- **A.** Disable remapping during tutorials
- **B.** Tell users to memorize the old layout
- **C.** Generate prompts from active bindings and test navigation with the remapped controls
- **D.** Change only the background color

**Answer: C.** Input support must remain understandable after remapping; prompts and actual controls should agree.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD57 — Experiment interpretation

**Competency MCQ · Tier 8 · Weight 4**

A tutorial redesign is tested only with returning expert players and completion improves. Which conclusion is justified?

- **A.** It proves all accessibility needs are met
- **B.** It proves the game has no performance problems
- **C.** It improved completion in that tested group; first-time users need separate representative evaluation
- **D.** It proves the tutorial helps every beginner

**Answer: C.** Participant selection limits generalization. A beginner tutorial should also be evaluated with its intended audience.

**Reference basis:** [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD58 — Advanced diagnosis

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of resolving a simulation, rendering, or networking defect?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently diagnosed defect with a reproducible case and fix **(1 points)**
- **D.** I can also show a regression check, measured evidence, and an explanation of why competing hypotheses were rejected **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html), [G12: Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

### GD59 — Experience evaluation

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of evaluating an interactive experience with its intended users?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show a documented task-based playtest or structured accessibility evaluation **(1 points)**
- **D.** I can also show how findings changed the design and evidence from a follow-up evaluation **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD60 — Integrated delivery

**Self-assessment MCQ · Tier 8 · Weight 2**

What evidence can you demonstrate of delivering a complete small game or interactive application?

- **A.** I have not attempted this activity **(0 points)**
- **B.** I have completed a guided example of this activity **(0.5 points)**
- **C.** I can show an independently integrated playable artifact with code and setup instructions **(1 points)**
- **D.** I can also show a tested release with performance evidence, known limitations, and documented design tradeoffs **(2 points)**

**Scoring:** A=0, B=0.5, C=1, D=2. No factual answer key. Record evidence status separately.

**Reference basis:** [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer), [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Source register

- **MS.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **AC.** [AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **G1.** [Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)
- **G2.** [Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)
- **G3.** [Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)
- **G4.** [Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)
- **G5.** [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)
- **G6.** [Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)
- **G7.** [Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)
- **G8.** [Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)
- **G9.** [Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html)
- **G10.** [Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)
- **G11.** [Unity shader blend modes](https://docs.unity.com/en-us/engine/6000.7/manual/materials-and-shaders/shaders/writing-custom/shader-writing/sl/writing-shader-render-state-commands/blending-modes)
- **G12.** [Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)
- **G13.** [Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)
- **G14.** [Unity scheduled audio playback](https://docs.unity.com/en-us/engine/6000.7/script-reference/unityengine/audiosource/playscheduled)

## App integration

The JSON stores each question once and gives each semester an exact ID list. Preserve question and option IDs and the bank version. Score on the Spring server; React must not receive `correctOptionId` or `rationale` during an attempt. Self-assessment option fractions may be displayed. MongoDB can store canonical questions and reference them from surveys. Store attempt responses, raw points, evidence status, and version together. If options are shuffled at runtime, score by option ID. Do not silently change weights or inherited wording by semester.

Structural checks verify all seven proper-subset relationships, 25 items in S8, four unique options per item, valid answer keys and references, scoring totals, and identical inherited content across forms. These checks do not establish assessment validity.
