# Game Development & Interactive Media — common competency survey

Bank version: GAME_DEVELOPMENT-COMMON-3. The same 130 MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.

There are 120 weighted technical questions and 10 separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.

The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.

## Programming and engine foundations

Focus: Code tracing, Collections, Input events, Asset collaboration, C# value types, C# reference alias, Collection cost, Null lifetime, Component ownership, Input edges, Object pooling, Deterministic state, Unit boundaries, Event unsubscribe

Roadmap resource: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) (Curated academic or industry source).

### GD01 — Code tracing

In C#, `int score = 0; for (int i = 0; i < 3; i++) score += 2;` runs once. What is score afterward?

- A. 8
- B. 3
- C. 4
- D. 6

**Answer:** D. The loop executes for i=0,1,2 and adds 2 three times.

Source: [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD04 — Collections

Which collection operation prevents a player ID from being recorded twice in a set of players who collected a one-time reward?

- A. Sort duplicate IDs without removing any
- B. Increment an array index for each collision
- C. Insert the ID into a set and check whether insertion was new
- D. Append every ID to a list

**Answer:** C. A set maintains distinct members; the result of insertion can guard one-time logic.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD07 — Input events

A single press must toggle a pause menu once, even if the key remains held. Which input event fits?

- A. Any mouse movement while the key is held
- B. Every frame in which the key is released
- C. The transition from released to pressed
- D. Every frame in which the key is held

**Answer:** C. A press edge fires once per press; a held-state check may toggle on multiple frames.

Source: [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD19 — Asset collaboration

Two developers frequently overwrite changes to the same binary scene file. What workflow most directly reduces conflicts?

- A. Ask Git to merge arbitrary binary bytes automatically
- B. Use supported asset locking or divide work into separate scenes/prefabs with clear ownership
- C. Commit only the final executable
- D. Disable version control for all assets

**Answer:** B. Locking or separation prevents simultaneous incompatible edits; binary merge support depends on the asset format and tooling.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GAME_DEVELOPMENT-X01 — C# value types

A C# struct value is copied into another variable, then the copy is changed. What happens to the original?

- A. It keeps its old value
- B. It always changes too
- C. It becomes null
- D. It moves to the GPU

**Answer:** A. Assignment copies a value type value; modifying the copy does not modify the original.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X02 — C# reference alias

Two variables reference the same mutable class instance. One changes a field. What does the other observe?

- A. A deep copy
- B. A compile error
- C. The original field until scene reload
- D. The updated field

**Answer:** D. Both variables refer to one object, so its field update is visible through either reference.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X03 — Collection cost

A game repeatedly appends entities and iterates them each frame. Which collection is a reasonable default?

- A. A priority queue for all operations
- B. A recursive linked tree
- C. A dynamic array/List
- D. A separate file for every entity

**Answer:** C. A List supports append and cache-friendly iteration for this pattern.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X04 — Null lifetime

A callback runs after its target object is destroyed. What should the handler check?

- A. The current build number
- B. Whether the target is still valid before use
- C. Only screen resolution
- D. Only audio volume

**Answer:** B. Lifecycle changes can invalidate the target before an asynchronous callback executes.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X05 — Component ownership

Two components independently update the same transform every frame. Why is motion unstable?

- A. Physics always overrides both
- B. Their writes can conflict or depend on update order
- C. The transform can have only one coordinate
- D. The compiler merges both values

**Answer:** B. Competing writes produce order-dependent final state; one system should own the motion or coordinate updates.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X06 — Input edges

A jump should trigger once when a key is pressed, not every held frame. Which event should drive it?

- A. A press/down transition
- B. A held-key state every frame
- C. A key-up transition only
- D. The frame counter modulo 60

**Answer:** A. A key-down edge occurs once per press; held state repeats across frames.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X07 — Object pooling

Spawning and destroying hundreds of identical effects causes frequent allocation spikes. What technique helps?

- A. Allocate a larger effect every time
- B. Run garbage collection each frame
- C. Turn off all effects
- D. Reuse inactive effect instances from a pool

**Answer:** D. Pooling reuses objects and reduces allocation/destruction churn.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X08 — Deterministic state

A replay system needs repeatable random events. What should it record?

- A. Only the executable filename
- B. A screenshot of the first frame
- C. The RNG seed and input sequence
- D. Only the monitor refresh rate

**Answer:** C. The same seed and ordered inputs can reproduce random choices if the simulation is deterministic.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X09 — Unit boundaries

A damage function should never reduce health below zero. Which boundary test is most useful?

- A. Health 50, damage 0 gives 50 only
- B. Test only the UI color
- C. Health 5, damage 8 gives 0
- D. Health 100, damage 1 gives 99 only

**Answer:** C. Damage exceeding current health tests the clamp at zero.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X10 — Event unsubscribe

A destroyed scene object remains subscribed to a global event. What risk follows?

- A. A lower network ping
- B. Unexpected callbacks and retained references
- C. Faster frame rendering
- D. Automatic scene cleanup

**Answer:** B. The publisher may still call or retain the old subscriber; unsubscribe at lifecycle end.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

## Spatial mathematics and graphics theory

Focus: Vectors, Coordinates, Vector normalization, Texture coordinates, View-cone test, Vector length, Normalize, Dot product, Projection, Coordinate transforms, Scale composition, Rotation, Interpolation, Perspective, Normals

Roadmap resource: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/) (Curated academic or industry source).

### GD02 — Vectors

A character moves from (2,3) to (5,7). What displacement vector describes this movement?

- A. (-3,-4)
- B. (5,7)
- C. (3,4)
- D. (7,10)

**Answer:** C. Displacement is destination minus starting position.

Source: [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD03 — Coordinates

A child object is at local position (1,0,0). Its parent has translation (10,0,0), identity rotation, and unit scale. What is the child's world position?

- A. (11,0,0)
- B. (10,0,0)
- C. (9,0,0)
- D. (1,0,0)

**Answer:** A. With no rotation or scaling, add the parent translation to the local position.

Source: [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD09 — Vector normalization

A 2D input vector is (1,1). What should it become after normalization so diagonal movement has unit length?

- A. (1/√2,1/√2)
- B. (1,1)
- C. (√2,√2)
- D. (0.5,0.5)

**Answer:** A. The original magnitude is √2, so dividing each component by √2 produces magnitude 1.

Source: [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GD16 — Texture coordinates

What do a mesh's UV coordinates primarily specify?

- A. The world's gravity direction
- B. The network address of the asset server
- C. The object's linear velocity
- D. How surface points map to positions in a texture

**Answer:** D. UV coordinates map mesh surfaces to texture space.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### GD47 — View-cone test

Unit vectors f and d denote forward direction and direction to a target. A target is inside a cone with half-angle 60° when the angle is at most 60°. Which test is correct?

- A. dot(f,d) >= 60
- B. dot(f,d) <= 0.5
- C. dot(f,d) >= 0.5
- D. dot(f,d) == 0 only

**Answer:** C. For unit vectors the dot product equals cosine of the angle; cos(60°)=0.5 and cosine decreases over 0°–180°.

Source: [G1: Godot vector mathematics](https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html)

### GAME_DEVELOPMENT-X11 — Vector length

What is the length of 2D vector (3,4)?

- A. 5
- B. 7
- C. 12
- D. 25

**Answer:** A. sqrt(3²+4²)=sqrt(25)=5.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X12 — Normalize

What is the unit vector in direction (3,4)?

- A. (3,4)
- B. (1,1)
- C. (0.75,1)
- D. (0.6,0.8)

**Answer:** D. Divide each component by length 5: (3/5,4/5)=(0.6,0.8).

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X13 — Dot product

Vectors (1,0) and (0,1) have which dot product?

- A. 1
- B. -1
- C. 2
- D. 0

**Answer:** D. 1×0+0×1=0, indicating orthogonality.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X14 — Projection

A unit forward vector is (1,0); a target offset is (−2,3). What does the dot product indicate?

- A. Target is at the same position
- B. Target is exactly to the right
- C. Target is behind relative to forward
- D. Target is directly ahead

**Answer:** C. (1,0)·(−2,3)=−2; negative forward projection means behind.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X15 — Coordinate transforms

A child has local x=2 and its parent is translated to world x=10 with no rotation or scale. What is child world x?

- A. 2
- B. 12
- C. 8
- D. 20

**Answer:** B. Pure translations add: 10+2=12.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X16 — Scale composition

A sprite is 20 pixels wide and rendered at scale 1.5 on x. What width appears before camera scaling?

- A. 30 pixels
- B. 20 pixels
- C. 13.3 pixels
- D. 1.5 pixels

**Answer:** A. 20×1.5=30 pixels.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X17 — Rotation

Rotating (1,0) by 90° counterclockwise in a standard right-handed 2D plane gives what?

- A. (0,1)
- B. (0,−1)
- C. (1,1)
- D. (−1,0)

**Answer:** A. The unit x vector maps to unit y under a 90° counterclockwise rotation.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X18 — Interpolation

Linear interpolation from 10 to 30 at t=0.25 gives what?

- A. 20
- B. 25
- C. 5
- D. 15

**Answer:** D. 10+(30−10)×0.25=15.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X19 — Perspective

Two equal-size objects at different depths have different screen sizes in a perspective camera. Which appears larger?

- A. Both are identical
- B. The one with a larger file size
- C. The closer object
- D. The farther object

**Answer:** C. Perspective projection makes apparent size decrease with distance.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

### GAME_DEVELOPMENT-X20 — Normals

A surface appears too dark after a nonuniform scale. Which vector data may require correct transformation and renormalization?

- A. Object IDs
- B. Surface normals
- C. Texture filenames
- D. Audio channels

**Answer:** B. Normals require appropriate inverse-transpose treatment under nonuniform scaling and renormalization.

Source: [GRAPHICS: Computer Graphics, 6.837 Fall 2012](https://ocw.mit.edu/courses/6-837-computer-graphics-fall-2012/)

## Gameplay, physics and state

Focus: Frame-independent motion, Game state, Physics updates, Trigger volumes, Animation logic, Pathfinding, Save compatibility, Fixed-step accumulator, Simulation overload, Collision tunneling, Fixed-step integration, Frame-dependent motion, State machine, Velocity units, Acceleration, Collision layers, Spawn fairness, Priority of events

Roadmap resource: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) (Curated academic or industry source).

### GD06 — Frame-independent motion

A non-physics object should move at 5 metres per second. In a frame with deltaTime=0.02 seconds, what displacement should `speed * deltaTime` produce?

- A. 5 metres
- B. 250 metres
- C. 0.02 metres
- D. 0.1 metres

**Answer:** D. 5 m/s × 0.02 s = 0.1 m. Multiplying by elapsed time converts speed into displacement.

Source: [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD08 — Game state

A player can be Idle, Running, or Jumping, with defined transitions. Which model directly represents these mutually exclusive modes?

- A. A spatial audio mixer
- B. A texture atlas
- C. A finite state machine
- D. A projection matrix

**Answer:** C. States and transition conditions explicitly encode allowed modes and changes.

Source: [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD11 — Physics updates

A game renders at a variable frame rate but simulates physics with a fixed timestep. Where should recurring physics forces normally be applied?

- A. Only when a rendered frame takes longer than average
- B. Only once during level loading
- C. In the engine's fixed physics update, following its API conventions
- D. In a UI repaint callback

**Answer:** C. A fixed simulation step gives forces a consistent timing basis; the engine's force API determines whether explicit timestep scaling is needed.

Source: [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD12 — Trigger volumes

A zone should notify gameplay when entered without physically blocking a player. Which setup is appropriate?

- A. A brighter material on the floor
- B. A trigger or overlap volume with an entry event
- C. A camera near-plane change
- D. A solid collider with no gameplay callback

**Answer:** B. Trigger/overlap detection reports contact without requiring a blocking physical response.

Source: [G9: Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html)

### GD14 — Animation logic

An attack animation visually continues after the character enters the Dead state. Which change addresses the state conflict most directly?

- A. Define and test a higher-priority death transition that interrupts attack playback
- B. Disable all animation transitions
- C. Increase the audio sample rate
- D. Double the attack texture resolution

**Answer:** A. Explicit interruption and transition rules make animation agree with gameplay state.

Source: [G8: Unity Certified User programmer competencies](https://unity.com/products/unity-certifications/user-programmer)

### GD22 — Pathfinding

On a four-neighbour grid with unit movement costs and no diagonal moves, which A* heuristic never overestimates the shortest unobstructed path?

- A. A fresh random number at every expansion
- B. Manhattan distance: abs(dx)+abs(dy)
- C. Twice the Manhattan distance
- D. The square of Manhattan distance

**Answer:** B. Each horizontal or vertical step changes one coordinate by one; obstacles can only make the shortest route at least this long.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### GD24 — Save compatibility

Version 2 adds an inventory field to saved games. What design best preserves version-1 saves?

- A. Interpret every old byte layout as the new layout
- B. Delete all old saves during startup
- C. Store a save schema version and migrate older saves with defaults for new fields
- D. Use the file modification time as the only schema indicator

**Answer:** C. Explicit schema versions and tested migrations support intentional compatibility across releases.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD38 — Fixed-step accumulator

A simulation accumulator starts at 0.005 s, then adds 0.050 s. Each physics step subtracts 0.020 s while enough time remains. How many steps run, and what remains?

- A. 3 steps; nothing remains
- B. 2 steps; 0.005 s remains
- C. 1 step; 0.035 s remains
- D. 2 steps; 0.015 s remains

**Answer:** D. The accumulated 0.055 s permits two 0.020 s steps, leaving 0.015 s.

Source: [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD39 — Simulation overload

A fixed-step simulation takes longer to process new simulation time than real time allows, causing an increasing backlog. What is the most appropriate response?

- A. Process every accumulated step before rendering, with no work cap even while the backlog grows
- B. Drop an arbitrary number of physics callbacks while leaving the accumulator unchanged
- C. Increase the simulated delta for every catch-up step without checking stability or changing the timing policy
- D. Bound catch-up work, profile the overload, and explicitly choose how to handle excess elapsed time

**Answer:** D. Unlimited catch-up can amplify overload. A cap needs a deliberate slow-down or time-discard policy, alongside reducing simulation cost.

Source: [G2: Unity fixed updates](https://docs.unity3d.com/Manual/fixed-updates.html)

### GD40 — Collision tunneling

A fast projectile crosses a thin wall entirely between discrete physics samples. What should be evaluated to detect that crossing?

- A. Increase rendering FPS without changing the physics sampling or collision method
- B. Enlarge only the projectile material bounds while leaving its collider unchanged
- C. An appropriate continuous collision or swept-shape test
- D. Enable visual motion blur and leave collision detection unchanged

**Answer:** C. A sweep/CCD method considers motion between samples; its supported shapes, modes, and costs must be checked.

Source: [G9: Unity continuous collision detection](https://docs.unity.cn/Manual/ContinuousCollisionDetection.html)

### GAME_DEVELOPMENT-X21 — Fixed-step integration

A body moves 2 units/s for a 0.02 s fixed step. How far does it move per step?

- A. 100 units
- B. 0.04 units
- C. 0.2 units
- D. 2 units

**Answer:** B. Distance=speed×time=2×0.02=0.04 units.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X22 — Frame-dependent motion

Position increases by 1 unit per rendered frame. At 120 fps versus 60 fps, how does speed change?

- A. It doubles
- B. It halves
- C. It stays equal
- D. It becomes zero

**Answer:** A. Updates per second double, so movement per second doubles unless scaled by elapsed time.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X23 — Collision tunneling

A fast small projectile skips through a thin wall between discrete positions. What helps?

- A. A larger font
- B. A lower texture resolution
- C. A random spawn point
- D. Continuous collision detection or a swept test

**Answer:** D. Swept/continuous tests consider the path between sampled positions.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X24 — State machine

An enemy switches between Patrol and Chase. Which condition best protects against oscillation near a range threshold?

- A. Randomly toggle each frame
- B. Remove the transition
- C. Use enter/exit thresholds or hysteresis
- D. Use one identical threshold for both edges

**Answer:** C. Hysteresis provides a buffer so small measurement changes do not flip states repeatedly.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X25 — Velocity units

A character moves 120 pixels in 2 seconds at constant speed. What speed is that?

- A. 122 pixels/s
- B. 30 pixels/s
- C. 60 pixels/s
- D. 240 pixels/s

**Answer:** C. 120/2=60 pixels per second.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X26 — Acceleration

Velocity begins at 2 m/s and acceleration is 3 m/s² for 2 s. What is final velocity?

- A. 3 m/s
- B. 8 m/s
- C. 5 m/s
- D. 12 m/s

**Answer:** B. v=u+at=2+3×2=8 m/s.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X27 — Collision layers

A player projectile damages other players because its collision mask includes the player layer. What is the targeted fix?

- A. Configure collision layers/masks or team filters
- B. Increase projectile speed
- C. Use a different shader
- D. Disable all physics

**Answer:** A. Filtering limits eligible collision pairs without altering unrelated simulation.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X28 — Spawn fairness

Enemies spawn within the camera view and immediately hit the player. Which constraint improves fairness?

- A. Increase spawn frequency
- B. Hide player health
- C. Remove collision sounds
- D. Spawn outside a minimum safe radius with visibility checks

**Answer:** D. Safe-distance and visibility constraints prevent unavoidable damage.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X29 — Pathfinding

On a grid with uniform move cost, which search guarantees a shortest path without a heuristic?

- A. Depth-first search
- B. Random walk
- C. Greedy nearest neighbor
- D. Breadth-first search

**Answer:** D. BFS explores increasing path length when every edge has equal cost.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X30 — Priority of events

A player reaches zero health and picks up health in the same frame. What should the design define?

- A. A random result every run
- B. No state transition
- C. An explicit event order or resolution rule
- D. Whatever callback order happens to occur

**Answer:** C. An explicit rule avoids frame-order bugs and makes behavior testable.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

## Media and accessible interaction

Focus: Spatial audio, Accessible interaction, Interactive UI, Audio synchronization, Accessibility validation, Color-only feedback, Input remapping, Animation transition, Audio mix, Subtitle timing, Motion comfort, UI focus, Localization layout, Animation sampling, Haptic alternative

Roadmap resource: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core) (Curated academic or industry source).

### GD17 — Spatial audio

Footsteps from a distant character should become quieter as distance increases. Which feature directly supports this?

- A. Increasing all UI sound volume
- B. Changing the shadow map size
- C. Distance attenuation on a spatial audio source
- D. Sorting sprites by name

**Answer:** C. Spatial attenuation changes audible level with source-listener distance.

Source: [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD18 — Accessible interaction

A puzzle communicates correct and incorrect choices using only green and red. What is the best improvement?

- A. Remove feedback entirely
- B. Use slightly brighter red and green only
- C. Add distinct symbols or text alongside the colors
- D. Require a faster reaction time

**Answer:** C. Redundant visual cues allow meaning to remain available when colors cannot be distinguished.

Source: [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD29 — Interactive UI

A controller user opens a menu but no control is selected, so directional input does nothing. What should the interface establish?

- A. A higher network send rate
- B. An initial focus target and a navigable focus order
- C. A lower gravity constant
- D. A smaller texture compression block

**Answer:** B. Controller and keyboard navigation require focus and predictable movement between controls.

Source: [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GD55 — Audio synchronization

A rhythm game schedules notes by accumulating variable render-frame delays, and note timing jitters. What timing basis better fits audio scheduling?

- A. The audio system's stable DSP/sample clock, with scheduled playback and measured output latency
- B. The number of loaded textures
- C. The count of rendered frames alone
- D. The current network player's ping for offline music

**Answer:** A. Audio timing should follow the audio clock; rendering cadence is variable, and device latency may need calibration.

Source: [G14: Unity scheduled audio playback](https://docs.unity.com/en-us/engine/6000.7/script-reference/unityengine/audiosource/playscheduled)

### GD56 — Accessibility validation

A menu supports remapping, but its prompts still show hardcoded original buttons. What is the best correction?

- A. Disable remapping during tutorials
- B. Tell users to memorize the old layout
- C. Generate prompts from active bindings and test navigation with the remapped controls
- D. Change only the background color

**Answer:** C. Input support must remain understandable after remapping; prompts and actual controls should agree.

Source: [G5: Xbox Accessibility Guidelines](https://learn.microsoft.com/en-us/xbox/accessibility/guidelines)

### GAME_DEVELOPMENT-X31 — Color-only feedback

A puzzle indicates success only by turning a tile green. What is a better accessible cue?

- A. Increase animation speed
- B. Add shape, text or sound feedback as well
- C. Make the green slightly darker
- D. Remove the feedback

**Answer:** B. Redundant non-color cues support players who cannot distinguish the color or cannot see it.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X32 — Input remapping

A player cannot use the default jump key. Which design directly supports them?

- A. Allow remapping to another input
- B. Lock the default key
- C. Increase difficulty
- D. Add motion blur

**Answer:** A. Remapping lets players select accessible controls.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X33 — Animation transition

An animation blend snaps because two states use mismatched root motion. What should be inspected?

- A. Transition blend and root-motion ownership
- B. Only audio sample rate
- C. Only texture compression
- D. Only menu color

**Answer:** A. Conflicting or discontinuous root motion can create visible jumps at transitions.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X34 — Audio mix

Important dialogue is masked by effects at the same volume. What should be adjusted?

- A. Raise every channel equally
- B. Reduce frame rate
- C. Remove subtitles
- D. Mix priorities or duck effects during dialogue

**Answer:** D. Ducking or level hierarchy improves speech intelligibility without changing unrelated systems.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X35 — Subtitle timing

A subtitle disappears before the line finishes. What timing evidence should guide a fix?

- A. Only the codec name
- B. Only level length
- C. Measured spoken duration and reading time
- D. Only the character sprite size

**Answer:** C. Captions must remain long enough for speech and reading; timings should be checked against content.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X36 — Motion comfort

A camera rapidly shakes on every hit and causes discomfort. Which user control helps?

- A. A forced fullscreen mode
- B. An option to reduce or disable camera shake
- C. Higher shake frequency
- D. More chromatic aberration

**Answer:** B. A reduce-motion setting allows players to avoid intense camera motion.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X37 — UI focus

A gamepad user opens a pause menu, but no button receives focus. What is the immediate interaction issue?

- A. The network connection is lost
- B. The menu cannot be navigated predictably by gamepad
- C. The physics step is too short
- D. The font has too many glyphs

**Answer:** B. Focus must move into an interactive menu and return appropriately when it closes.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X38 — Localization layout

A translated button label is twice as long and gets clipped. Which layout approach is safer?

- A. Flexible sizing with tested text expansion
- B. Fixed pixel width for every language
- C. Rasterize the original English text
- D. Hide the label

**Answer:** A. Localization needs room for expansion and responsive layout, not assumptions based on one language.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X39 — Animation sampling

An animation has 30 frames and plays at 15 frames/s. How long is one full pass?

- A. 0.5 s
- B. 15 s
- C. 30 s
- D. 2 s

**Answer:** D. 30/15=2 seconds.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

### GAME_DEVELOPMENT-X40 — Haptic alternative

A critical warning uses vibration only. What should accompany it?

- A. No warning
- B. A longer loading screen
- C. A visual or audible warning
- D. Stronger vibration only

**Answer:** C. Players may disable or lack haptics; a second modality preserves the warning.

Source: [CREATIVE: Creative Core pathway](https://learn.unity.com/pathway/creative-core)

## Profiling, rendering and memory

Focus: Rendering visibility, Object pooling, Performance diagnosis, Level of detail, Frame budget, Pipeline bottleneck, Tail frame times, Texture memory, Mip-chain memory, Pool lifecycle, Event retention, Alpha compositing, Frame diagnosis, Overdraw, Batching, Mipmaps, Garbage spikes, Profile target, LOD choice, Regression metric

Roadmap resource: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) (Curated academic or industry source).

### GD13 — Rendering visibility

An object is outside the camera's view frustum. Which optimization can skip submitting it for that camera?

- A. Raising network tick rate
- B. Frustum culling
- C. Increasing its mass
- D. Audio compression

**Answer:** B. Frustum culling rejects objects outside the visible volume before unnecessary rendering work.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD21 — Object pooling

A game repeatedly creates and destroys hundreds of identical projectiles. Profiling shows allocation-related pauses. What change should be evaluated first?

- A. Recreate the entire level after every shot
- B. Allocate additional temporary lists every frame
- C. Make every projectile texture larger
- D. Reuse inactive projectiles from a pool with a defined reset routine

**Answer:** D. Pooling reduces repeated allocation churn, provided reused objects have their state reset correctly.

Source: [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD23 — Performance diagnosis

A build stutters on a target phone but runs smoothly in the editor on a workstation. What is the most useful next investigation?

- A. Optimize a random script based on its line count
- B. Measure only editor startup time
- C. Assume the GPU is responsible without measuring
- D. Profile the build on the phone using a reproducible scene

**Answer:** D. Measurements on the affected device reveal the workload and bottleneck relevant to the observed problem.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD28 — Level of detail

A distant object occupies only a few screen pixels but uses a very detailed mesh. Which technique targets that unnecessary geometry?

- A. Select a lower-detail mesh based on screen size or distance
- B. Raise physics solver iterations globally
- C. Disable input buffering
- D. Increase every object's polygon count

**Answer:** A. LOD reduces geometric detail when the visible result needs fewer triangles.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD36 — Frame budget

A game targets 60 rendered frames per second. Approximately how much time is available per frame?

- A. 6 milliseconds
- B. 1.67 milliseconds
- C. 16.67 milliseconds
- D. 60 milliseconds

**Answer:** C. 1000 ms / 60 ≈ 16.67 ms. This is a frame interval, not a separate unlimited budget for every subsystem.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD37 — Pipeline bottleneck

Assume CPU and GPU work overlap perfectly across frames, with no extra waits. CPU work takes 8 ms/frame and GPU work 20 ms/frame. What steady-state frame rate is the throughput upper bound?

- A. 50 FPS
- B. 100 FPS
- C. 125 FPS
- D. 35.7 FPS

**Answer:** A. Under the stated overlap assumption, the slower 20 ms stage limits throughput: 1000/20=50 FPS.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD41 — Tail frame times

Two builds have the same mean frame time, but build B has recurring 90 ms frames. Which comparison best reveals the perceived stutter?

- A. Only mean FPS rounded to an integer
- B. Only the GPU vendor name
- C. Frame-time distribution and high percentiles, with traces of the spikes
- D. Only the number of source files

**Answer:** C. Averages hide infrequent long frames; distribution and trace inspection expose them.

Source: [G3: Unity Profiler](https://docs.unity3d.com/Manual/Profiler.html)

### GD42 — Texture memory

An uncompressed 2048×2048 texture uses RGBA8, meaning four bytes per pixel. Ignore mipmaps and padding. How much storage does its base level require?

- A. 16 MiB
- B. 64 MiB
- C. 8 MiB
- D. 4 MiB

**Answer:** A. 2048×2048×4 = 16,777,216 bytes = 16 MiB, using 1 MiB=1,048,576 bytes.

Source: [G10: Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

### GD43 — Mip-chain memory

A large square power-of-two texture uses uncompressed fixed bytes per pixel. Its full mip chain halves width and height each level. Approximately what is the total storage relative to the base level?

- A. 4 times the base level
- B. 1/4 of the base level
- C. 2 times the base level
- D. 4/3 of the base level

**Answer:** D. The area series is 1+1/4+1/16+…≈4/3. Small terminal levels make the finite sum slightly smaller.

Source: [G10: Unity mipmaps](https://docs.unity.com/en-us/engine/6000.6/manual/materials-and-shaders/textures/textures-getting-started/texture-mipmaps-introduction)

### GD44 — Pool lifecycle

A reused projectile sometimes damages the previous target or expires immediately. Which fix addresses the likely lifecycle defect?

- A. Reset target references, lifetime, callbacks, and collision state when reactivating it
- B. Increase the pool capacity without changing the reactivation lifecycle
- C. Skip all initialization on pooled objects because their constructor already ran once
- D. Reset only the visible transform and keep gameplay callbacks and lifetime unchanged

**Answer:** A. Reusing storage also reuses object state unless lifecycle code resets it deliberately.

Source: [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD45 — Event retention

A persistent event publisher holds a delegate to a destroyed scene's object. The object remains reachable in managed memory. What change addresses this retention?

- A. Unsubscribe at the appropriate lifecycle boundary, or use a suitable lifetime-aware subscription
- B. Force garbage collection while leaving the publisher-to-subscriber reference intact
- C. Disable the subscriber visually while preserving the persistent subscription
- D. Set one unrelated local variable to null and assume all delegate references disappear

**Answer:** A. A strong delegate reference can keep a subscriber reachable; collection alone cannot remove that live reference.

Source: [G7: Unity managed memory optimization](https://docs.unity3d.com/Manual/performance-optimizing-code-managed-memory.html)

### GD46 — Alpha compositing

Use `out = src*alpha + dst*(1-alpha)` per color channel in linear space. Starting from black, draw red (1,0,0) at alpha 0.5, then blue (0,0,1) at alpha 0.5. What is the final RGB?

- A. (0.25,0,0.5)
- B. (0.5,0,0.25)
- C. (0.5,0,0.5)
- D. (1,0,1)

**Answer:** A. Red first gives (0.5,0,0). Blue then contributes (0,0,0.5) plus half the previous color, producing (0.25,0,0.5).

Source: [G11: Unity shader blend modes](https://docs.unity.com/en-us/engine/6000.7/manual/materials-and-shaders/shaders/writing-custom/shader-writing/sl/writing-shader-render-state-commands/blending-modes)

### GAME_DEVELOPMENT-X41 — Frame budget

For 60 fps, approximately how much time is available per frame?

- A. 8.3 ms
- B. 33.3 ms
- C. 16.7 ms
- D. 60 ms

**Answer:** C. 1000 ms/60≈16.7 ms per frame.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X42 — Frame diagnosis

A build has 10 ms CPU time and 20 ms GPU time per frame. Ignoring overlap and sync details, which is likely the limiting stage?

- A. Input polling
- B. GPU
- C. CPU
- D. Disk capacity

**Answer:** B. The longer GPU frame stage is the likely bottleneck in this simplified comparison.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X43 — Overdraw

Many transparent full-screen particles make GPU time spike. What is a likely cause?

- A. Repeated pixel shading from overdraw
- B. Too few draw calls
- C. A slow database join
- D. Too many audio channels only

**Answer:** A. Large transparent layers often shade the same pixels repeatedly.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X44 — Batching

A scene draws many identical static meshes separately. What can reduce CPU draw-call overhead?

- A. Duplicate each material
- B. Add unique shader variants
- C. Rebuild meshes each frame
- D. Instancing or batching where suitable

**Answer:** D. Instancing/batching can group compatible draws and reduce submission overhead.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X45 — Texture memory

An uncompressed 1024×1024 RGBA8 texture uses about how much memory for its base level?

- A. 1 MiB
- B. 16 MiB
- C. 1024 MiB
- D. 4 MiB

**Answer:** D. 1024×1024×4 bytes=4,194,304 bytes=4 MiB.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X46 — Mipmaps

What is the approximate total memory factor for a full 2D mip chain versus base texture only?

- A. About 4
- B. About 1/4
- C. About 4/3
- D. About 2

**Answer:** C. Areas form 1+1/4+1/16+…=4/3 of base level, excluding overhead.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X47 — Garbage spikes

A profiler shows allocations on every UI refresh followed by pauses. What should be changed first?

- A. Add more logging inside the loop
- B. Reduce repeated allocations in the hot path
- C. Increase texture resolution
- D. Remove all input handling

**Answer:** B. Per-refresh allocations can trigger collection; reuse buffers or avoid needless object creation.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X48 — Profile target

An editor build is smooth but a low-end phone drops frames. What evidence should guide optimization?

- A. A profiler capture on the target device/build
- B. Only editor frame rate
- C. Only source line count
- D. Only asset filenames

**Answer:** A. Target hardware and build configuration determine real bottlenecks.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X49 — LOD choice

A distant object uses the same high-detail mesh as a close object. What technique reduces unnecessary geometry work?

- A. Level of detail meshes
- B. Increase polygon count
- C. Disable culling
- D. Use higher resolution textures

**Answer:** A. LOD reduces geometry complexity where visual detail is less perceptible.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X50 — Regression metric

After a graphics change, average fps improves but p99 frame time doubles. What does this suggest?

- A. Uniformly smoother gameplay
- B. The GPU never stalls
- C. The measurement is impossible
- D. More severe occasional stutter despite better average

**Answer:** D. A larger p99 frame time indicates worse tail frames even if mean throughput improves.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

## Multiplayer simulation

Focus: Multiplayer authority, Network messages, Snapshot interpolation, Prediction reconciliation, Server validation, Ordered reliable delivery, Replication bandwidth, Deterministic replay, Rollback side effects, Authority, Latency prediction, Round trip, Interpolation, Packet loss, Duplicate effects, Tick rate, Reconciliation, Lag compensation, Bandwidth

Roadmap resource: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183) (Curated academic or industry source).

### GD26 — Multiplayer authority

In an authoritative-server game, who should make the final decision that an item was legitimately collected?

- A. Any client that displays the item
- B. The client with the highest frame rate
- C. The first peer to change its local score text
- D. The server after validating the request and game state

**Answer:** D. Clients can request actions and predict visuals, while the server validates shared game-state changes.

Source: [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)

### GD27 — Network messages

Position updates are frequent, and a newer update supersedes an older one. Which delivery strategy is often suitable?

- A. Unreliable updates with sequence/timestamp handling and smoothing
- B. Use the UI redraw rate as proof of delivery
- C. Send positions only when the player disconnects
- D. Reliably queue every historical position indefinitely

**Answer:** A. Timely recent state can matter more than delivery of obsolete positions; ordering and smoothing still need deliberate handling.

Source: [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD48 — Snapshot interpolation

Remote-player snapshots arrive with variable network delay. Why might a client render slightly behind the newest simulation time?

- A. To guarantee that packet loss never occurs
- B. To remove the need for timestamps
- C. To interpolate between buffered snapshots, trading extra display delay for smoother motion
- D. To let the client override server authority

**Answer:** C. A buffer increases the chance that both endpoints for interpolation are available despite arrival jitter.

Source: [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD49 — Prediction reconciliation

A client predicts movement. The server replies with authoritative state and the last processed input sequence. What is the usual reconciliation step?

- A. Replay acknowledged inputs again on top of the authoritative state
- B. Restore that authoritative state, then replay locally stored inputs after the acknowledged sequence
- C. Apply the authoritative position but replay unacknowledged inputs using their arrival order instead of their recorded sequence
- D. Keep the predicted state and ignore a correction whenever local motion appears smooth

**Answer:** B. The acknowledgement identifies which inputs the server state already includes, avoiding double application during replay.

Source: [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)

### GD50 — Server validation

A client sends “deal 500 damage to player X.” What should an authoritative server do?

- A. Validate the action, weapon, timing, and target against server state and calculate allowed damage
- B. Validate only the target ID and trust the supplied damage and firing rate
- C. Accept client damage after checking only that it arrived over a reliable channel
- D. Accept the damage whenever the client is authenticated, without checking game state

**Answer:** A. Reliable transport does not make gameplay claims trustworthy; authority requires validating the action's semantics.

Source: [G6: Unreal multiplayer programming quick start](https://dev.epicgames.com/documentation/en-us/unreal-engine/multiplayer-programming-quick-start-for-unreal-engine)

### GD51 — Ordered reliable delivery

A transport guarantees in-order reliable delivery on one stream. A lost old position message blocks newer messages on that stream until recovery. What phenomenon is illustrated?

- A. Head-of-line blocking
- B. Texture aliasing
- C. Frustum culling
- D. Floating-point underflow

**Answer:** A. The stream cannot expose later ordered data while an earlier required segment is missing.

Source: [G13: Gaffer on Games: state synchronization, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/state_synchronization.md)

### GD52 — Replication bandwidth

A server sends each client 10 entities × 20 updates/second × 40 payload bytes/update. Ignore headers and compression. What is the outgoing payload per client?

- A. 80,000 bytes/second
- B. 400 bytes/second
- C. 8,000 bytes/second
- D. 800 bytes/second

**Answer:** C. 10×20×40=8,000 payload bytes/s. Total server egress also depends on client count.

Source: [G4: Unreal networking and multiplayer](https://dev.epicgames.com/documentation/en-us/unreal-engine/networking-and-multiplayer-in-unreal-engine)

### GD53 — Deterministic replay

Two simulations use the same random seed but diverge after several minutes on different platforms. Which explanation is valid?

- A. Identical seeds do not guarantee identical floating-point behavior, execution order, or inputs
- B. A fixed timestep alone guarantees identical results across arbitrary physics engines
- C. The same random seed guarantees identical results even when the number/order of random calls differs
- D. Sending only input timestamps makes different floating-point implementations identical

**Answer:** A. A deterministic system needs consistent initial state, inputs, ordering, random consumption, and numerical behavior.

Source: [G12: Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

### GD54 — Rollback side effects

A rollback simulation re-executes the same frame and grants a persistent purchase reward twice. What design addresses this?

- A. Commit the external reward on every replayed frame and rely on identical payload text to prevent duplicates
- B. Keep the external write inside the replay loop and reset only the local visual counter
- C. Assign a new reward ID on each replay so the storage service can distinguish every repeated grant
- D. Separate replayable simulation from external side effects and deduplicate committed events by stable identity

**Answer:** D. Re-simulation may repeat code; irreversible external effects need a commit/deduplication policy.

Source: [G12: Gaffer on Games: deterministic lockstep, author repository](https://github.com/mas-bandwidth/gafferongames/blob/main/content/post/deterministic_lockstep.md)

### GAME_DEVELOPMENT-X51 — Authority

In a competitive multiplayer game, who should decide whether a hit is valid?

- A. The victim client without verification
- B. The UI animation
- C. An authoritative server
- D. The shooter client without verification

**Answer:** C. Server authority limits client tampering and reconciles a shared world state.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X52 — Latency prediction

A client waits for a server round trip before showing its own movement. What can improve responsiveness?

- A. Render fewer menus
- B. Client-side prediction with later reconciliation
- C. Stop sending inputs
- D. Increase sprite size

**Answer:** B. Prediction applies local input immediately, then corrects against authoritative updates.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X53 — Round trip

A packet takes 40 ms each way with negligible processing. What is approximate round-trip time?

- A. 160 ms
- B. 80 ms
- C. 40 ms
- D. 20 ms

**Answer:** B. 40 ms outbound + 40 ms return = 80 ms.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X54 — Interpolation

A client receives remote positions at 10 Hz but renders at 60 Hz. What smooths visible motion between updates?

- A. Interpolation between buffered snapshots
- B. Ignoring all received positions
- C. Teleporting at every packet
- D. Increasing texture size

**Answer:** A. Interpolation estimates positions between discrete network snapshots.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X55 — Packet loss

A reliable ordered channel loses one packet. What can happen to later ordered messages?

- A. They always overtake it
- B. They are converted to audio
- C. They are duplicated by the renderer
- D. They wait behind the missing packet

**Answer:** D. Ordered delivery can block later messages until the gap is recovered.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X56 — Duplicate effects

A purchase command is retransmitted after timeout. How can the server avoid two purchases?

- A. Trust the client animation
- B. Disable acknowledgements
- C. Deduplicate by stable command ID
- D. Use a new ID on each retry

**Answer:** C. A stable command identity lets the server recognize a repeated logical operation.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X57 — Tick rate

A server simulates at 20 ticks/s. What is the tick interval?

- A. 5 ms
- B. 200 ms
- C. 50 ms
- D. 20 ms

**Answer:** C. 1000/20=50 ms per simulation tick.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X58 — Reconciliation

The client predicted x=12 but the authoritative server reports x=10 for a past input. What should the client do?

- A. Delete the player
- B. Correct to server state and replay later unacknowledged inputs
- C. Always keep x=12
- D. Tell the server to accept x=12

**Answer:** B. Reconciliation starts at authoritative state then reapplies pending local inputs.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X59 — Lag compensation

A server evaluates a hit using the target position at receipt time only. What player-visible issue arises at high latency?

- A. Valid aimed shots may miss because the target moved before receipt
- B. All hits become guaranteed
- C. The render resolution changes
- D. Audio desynchronizes permanently

**Answer:** A. The target can move during network transit; carefully bounded history-based rewind can address this.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

### GAME_DEVELOPMENT-X60 — Bandwidth

A snapshot is 2 KiB and sent 20 times/s to one player. What is approximate outbound data rate before protocol overhead?

- A. 2 KiB/s
- B. 20 KiB/s
- C. 400 KiB/s
- D. 40 KiB/s

**Answer:** D. 2×20=40 KiB/s.

Source: [NET: Computer Networks and Internet Protocol](https://nptel.ac.in/courses/106105183)

## Production and experience validation

Focus: Regression testing, Crash triage, Instrumentation, Reproducible builds, Experiment interpretation, Bug reproduction, Symbol files, Release determinism, Playtest sampling, A/B comparison, Regression test, Crash rate, Accessibility QA, Save migration, Telemetry privacy

Roadmap resource: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer) (Curated academic or industry source).

### GD31 — Regression testing

A damage formula was changed. Which test best catches an unintended change in armor behavior?

- A. Listening to the background soundtrack
- B. Automated cases with known attack, armor, and expected damage values
- C. Checking whether the game logo loads
- D. Comparing only executable file sizes

**Answer:** B. Tests anchored in expected gameplay results expose formula regressions directly.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD32 — Crash triage

Only release builds crash, and the report gives an address without a useful function name. What artifact most helps locate the failing code?

- A. The newest soundtrack file
- B. A screenshot of the main menu
- C. Matching debug symbols for that exact build
- D. An unrelated development build's source map

**Answer:** C. Symbols must match the binary to translate addresses into meaningful code locations.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD33 — Instrumentation

You need to measure where players abandon a tutorial. Which event design best supports that analysis?

- A. Record only the total number of texture files
- B. Record only sessions that finished successfully
- C. Record tutorial step entry/completion with a consistent session identifier and defined event meanings
- D. Record button clicks without identifying the tutorial step

**Answer:** C. Step events and session linkage support a funnel that includes both completed and abandoned attempts.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD34 — Reproducible builds

A teammate cannot reproduce a gameplay bug after pulling the source. Which missing information is most relevant?

- A. The length of the release trailer
- B. The order of icons on the taskbar
- C. The engine/package versions, asset revisions, build configuration, and reproduction steps
- D. The author's desktop wallpaper

**Answer:** C. Code alone may not define a game build; dependencies, assets, configuration, and steps are part of reproducibility.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GD57 — Experiment interpretation

A tutorial redesign is tested only with returning expert players and completion improves. Which conclusion is justified?

- A. It proves all accessibility needs are met
- B. It proves the game has no performance problems
- C. It improved completion in that tested group; first-time users need separate representative evaluation
- D. It proves the tutorial helps every beginner

**Answer:** C. Participant selection limits generalization. A beginner tutorial should also be evaluated with its intended audience.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### GAME_DEVELOPMENT-X61 — Bug reproduction

A crash occurs only after pausing during a scene load. What artifact most helps reproduce it?

- A. Only a screenshot of the menu
- B. Only user age
- C. Only the install path
- D. Exact steps, build version and crash log

**Answer:** D. A reproducible sequence and matching build diagnostics let developers recreate and inspect the failure.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X62 — Symbol files

A production stack trace contains only addresses. What build artifact helps map addresses to source?

- A. A gameplay trailer
- B. A sound bank
- C. Debug symbols for that exact build
- D. A texture atlas

**Answer:** C. Matching debug symbols resolve code addresses to functions and lines.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X63 — Release determinism

Two team members export supposedly identical builds but package different asset versions. What process helps?

- A. A different splash screen
- B. Versioned assets and a reproducible build pipeline
- C. Manual file copying without manifests
- D. More frequent editor restarts

**Answer:** B. Pinned inputs and automated packaging reduce drift between builds.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X64 — Playtest sampling

Only expert developers test a beginner tutorial. What bias can result?

- A. They miss obstacles faced by new players
- B. They always underestimate frame rate
- C. They remove all bugs
- D. They produce random input

**Answer:** A. Experienced testers have prior knowledge that novices do not; recruit representative players.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X65 — A/B comparison

Variant A has 40/100 players finish a tutorial; B has 55/100. What is the observed difference in completion rate?

- A. 15 percentage points
- B. 15 percent of A
- C. 95 percentage points
- D. 5 percentage points

**Answer:** A. B is 55%, A is 40%; 55−40=15 percentage points.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X66 — Regression test

A bug fix changes inventory stacking. Which regression test is targeted?

- A. Only launch the game once
- B. Only inspect an unrelated shader
- C. Only test audio volume
- D. Stack and unstack at boundary capacities after save/load

**Answer:** D. The test should exercise changed behavior and likely persistence edge cases.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X67 — Crash rate

A build has 50 crashes over 10,000 sessions. What is observed crashes per session as a percentage?

- A. 0.05%
- B. 50%
- C. 0.5%
- D. 5%

**Answer:** C. 50/10,000=0.005=0.5%.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X68 — Accessibility QA

A tester completes the main quest with keyboard only but cannot use the settings menu. What conclusion follows?

- A. The game must use only a mouse
- B. The end-to-end keyboard flow still fails
- C. Keyboard accessibility is complete
- D. The settings menu is irrelevant

**Answer:** B. All necessary interactions, including settings, must be navigable in the tested mode.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X69 — Save migration

A new release adds a required save field. What protects existing players?

- A. Rename the executable only
- B. A versioned migration or compatible default
- C. Delete all old saves
- D. Assume every save is new

**Answer:** B. Versioned migration or defaults map older stored state to the new schema.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

### GAME_DEVELOPMENT-X70 — Telemetry privacy

A playtest logs raw chat messages to a public analytics dashboard. What should be changed?

- A. Minimize and restrict personal content before collection/publication
- B. Log more message detail
- C. Use a faster database
- D. Increase the dashboard refresh rate

**Answer:** A. Raw player communications can contain personal data; collect only needed data with access controls.

Source: [UNITY: Junior Programmer pathway](https://learn.unity.com/pathway/junior-programmer)

## Self-assessment

### GD05 — Programming practice

What evidence can you demonstrate of writing a small interactive program?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently written program with input and visible state changes (50% of practice item)
- D. I can also explain its logic and demonstrate tests for boundary cases (100% of practice item)

### GD10 — Prototype practice

What evidence can you demonstrate of building a playable movement prototype?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently built prototype with movement and interaction (50% of practice item)
- D. I can also demonstrate consistent movement at different frame rates and explain the timing choices (100% of practice item)

### GD15 — Gameplay modeling

What evidence can you demonstrate of implementing state-based gameplay?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent state machine for a character or enemy (50% of practice item)
- D. I can also demonstrate transition tests and explain how conflicting states are prevented (100% of practice item)

### GD20 — Inclusive interaction

What evidence can you demonstrate of building an accessible interaction or menu?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show independently implemented focus, non-color cues, or configurable input (50% of practice item)
- D. I can also show a documented accessibility review and fixes verified through user or structured task testing (100% of practice item)

### GD25 — Performance practice

What evidence can you demonstrate of investigating a gameplay performance problem?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show a profiler capture and an independently implemented fix (50% of practice item)
- D. I can also show comparable before/after captures on a target device and explain the tradeoffs (100% of practice item)

### GD30 — Multiplayer practice

What evidence can you demonstrate of building a small networked interaction?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent multiplayer prototype with a defined authority model (50% of practice item)
- D. I can also demonstrate tests with injected latency or loss and explain observed recovery behavior (100% of practice item)

### GD35 — Release practice

What evidence can you demonstrate of preparing a reproducible playable build?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show a versioned build with documented dependencies and reproduction steps (50% of practice item)
- D. I can also show automated checks and evidence that another person or clean environment reproduced the build (100% of practice item)

### GD58 — Advanced diagnosis

What evidence can you demonstrate of resolving a simulation, rendering, or networking defect?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently diagnosed defect with a reproducible case and fix (50% of practice item)
- D. I can also show a regression check, measured evidence, and an explanation of why competing hypotheses were rejected (100% of practice item)

### GD59 — Experience evaluation

What evidence can you demonstrate of evaluating an interactive experience with its intended users?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show a documented task-based playtest or structured accessibility evaluation (50% of practice item)
- D. I can also show how findings changed the design and evidence from a follow-up evaluation (100% of practice item)

### GD60 — Integrated delivery

What evidence can you demonstrate of delivering a complete small game or interactive application?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently integrated playable artifact with code and setup instructions (50% of practice item)
- D. I can also show a tested release with performance evidence, known limitations, and documented design tradeoffs (100% of practice item)

