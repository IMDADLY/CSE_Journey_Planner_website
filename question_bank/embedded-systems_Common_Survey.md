# Embedded Systems & Robotics / IoT — common competency survey

Bank version: EMBEDDED_SYSTEMS-COMMON-3. The same 130 MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.

There are 120 weighted technical questions and 10 separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.

The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.

## C, binary and digital foundations

Focus: Binary arithmetic, C arrays, Bit masking, Integer conversion, Unsigned range, Bit mask, Bit set, Buffer bounds, Signed overflow, Volatile, Endian interpretation

Roadmap resource: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/) (Curated academic or industry source).

### ER01 — Binary arithmetic

What is the decimal value of the binary number 1010?

- A. 14
- B. 10
- C. 8
- D. 12

**Answer:** B. The set bits contribute 8 and 2, giving 10.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER02 — C arrays

In C, `int readings[3] = {4, 7, 9};` is declared. Which expression reads the value 7?

- A. readings[3]
- B. readings[0]
- C. readings[1]
- D. readings[2]

**Answer:** C. C arrays use zero-based indexing. Index 3 is outside this three-element array.

Source: [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

### ER09 — Bit masking

For an unsigned status value, which C expression tests whether bit 3 is set, numbering the least significant bit as 0?

- A. `(status & (1u << 3)) != 0`
- B. `status == 3`
- C. `(status >> 3) == 0`
- D. `status + 3 == 0`

**Answer:** A. Shifting 1 by three creates the bit-3 mask; bitwise AND isolates that bit.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER36 — Integer conversion

Assume C provides `uint8_t`. After `uint8_t x = 250; x = (uint8_t)(x + 10);`, what is x?

- A. 4
- B. 255
- C. Undefined solely because the final value exceeds 255
- D. 260

**Answer:** A. The addition is representable after integer promotion; conversion to an 8-bit unsigned type reduces 260 modulo 256 to 4.

Source: [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

### EMBEDDED_SYSTEMS-X01 — Unsigned range

What values can an 8-bit unsigned integer represent?

- A. 0 to 255
- B. −128 to 127
- C. 0 to 256
- D. −255 to 255

**Answer:** A. Eight bits encode 2^8=256 values, from 0 through 255.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X02 — Bit mask

If register value is binary 1010 and mask is binary 0010, what is `value & mask`?

- A. 1010
- B. 1000
- C. 0000
- D. 0010

**Answer:** D. Bitwise AND keeps only bits set in both values; bit 1 is set in each.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X03 — Bit set

Which expression sets bit 3 of unsigned register r without clearing other bits?

- A. `r ^ (1u << 3)`
- B. `r >> 3`
- C. `r | (1u << 3)`
- D. `r & (1u << 3)`

**Answer:** C. OR with a one-bit mask sets the selected bit and preserves others.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X04 — Buffer bounds

A C array has 8 elements indexed 0–7. A loop writes `a[i]` for `i <= 8`. What is wrong?

- A. The array grows automatically
- B. It writes one element past the array
- C. It stops at index 7
- D. It writes only 7 values

**Answer:** B. The loop includes i=8, which is out of bounds for an 8-element array.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X05 — Signed overflow

A signed C integer computation exceeds its representable range. Why is wraparound unsafe to assume?

- A. The CPU disables interrupts
- B. Signed integer overflow is undefined behavior in C
- C. All compilers guarantee modulo arithmetic
- D. The value becomes null

**Answer:** B. Portable C cannot rely on a specific result from signed overflow.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X06 — Volatile

A memory-mapped status register can change outside normal program flow. Why declare its access volatile?

- A. To force observable loads/stores at each access
- B. To make operations atomic automatically
- C. To replace synchronization entirely
- D. To prevent hardware interrupts

**Answer:** A. Volatile tells the compiler the value may change externally, but it does not guarantee atomicity or ordering between threads.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X07 — Endian interpretation

Bytes 0x01 0x02 represent a 16-bit value in big-endian order. What value is it?

- A. 0x0201
- B. 0x0003
- C. 0x0100
- D. 0x0102

**Answer:** D. The first byte is most significant in big-endian order: 0x01×256+0x02=0x0102.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

### EMBEDDED_SYSTEMS-X08 — Integer conversion

A sensor value 300 is stored in an 8-bit unsigned destination. Assuming modulo conversion, what is stored?

- A. 255
- B. −44
- C. 44
- D. 300

**Answer:** C. 300 mod 256=44 for conversion to an 8-bit unsigned type.

Source: [C: CS50x — selected C and memory units](https://cs50.harvard.edu/x/)

## Microcontrollers and peripherals

Focus: Digital inputs, Feedback components, ADC resolution, PWM duty cycle, Serial interfaces, UART capacity, Encoder resolution, ADC step, PWM average, UART time, I2C addressing, SPI chip select, Pull-up input, Peripheral clock

Roadmap resource: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) (Curated academic or industry source).

### ER03 — Digital inputs

An active-low button connects a GPIO input to ground when pressed, with a pull-up resistor to the supply. What logic level is expected when pressed?

- A. Low
- B. Always floating
- C. High
- D. A level determined only by CPU frequency

**Answer:** A. Pressing the button pulls the input toward ground; the pull-up defines the unpressed level.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER04 — Feedback components

Which component most directly measures a motor shaft's rotation for feedback?

- A. Fuse
- B. Rotary encoder
- C. Motor driver
- D. Power regulator

**Answer:** B. An encoder produces position or incremental rotation information; the driver controls motor power.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER06 — ADC resolution

An ideal 12-bit ADC spans 0–3.3 V with 4096 equal quantization bins. Approximately what is one bin's width?

- A. 3.3 mV
- B. 12 mV
- C. 0.806 mV
- D. 80.6 mV

**Answer:** C. 3.3/4096 V ≈ 0.000806 V = 0.806 mV. The stated bin model avoids endpoint-convention ambiguity.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER07 — PWM duty cycle

A PWM signal is high for 0.5 ms in every 2 ms period. What is its duty cycle?

- A. 50%
- B. 25%
- C. 4%
- D. 75%

**Answer:** B. Duty cycle is high time divided by period: 0.5/2=0.25.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER08 — Serial interfaces

Which common interface uses SDA and SCL lines and device addresses on a shared bus?

- A. UART with TX/RX only
- B. I2C
- C. An analog voltage divider
- D. A parallel GPIO port

**Answer:** B. I2C uses serial data and clock lines with addressed transactions.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER40 — UART capacity

A UART runs at 115200 bit/s using 8N1: one start bit, eight data bits, one stop bit. Ignore inter-byte gaps. What is the maximum data-byte rate?

- A. 11,520 bytes/s
- B. 9,600 bytes/s
- C. 14,400 bytes/s
- D. 115,200 bytes/s

**Answer:** A. Each payload byte occupies ten transmitted bits, so 115200/10=11520 bytes/s.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER47 — Encoder resolution

An encoder provides 1024 counted increments per output-shaft revolution, already including decoding and gearing. What angle does one count represent?

- A. Approximately 0.3516 degrees
- B. Exactly 1024 degrees
- C. Approximately 2.8125 degrees
- D. Exactly 1 degree

**Answer:** A. 360°/1024≈0.3516°. The question explicitly includes gearing and quadrature in the stated count.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X09 — ADC resolution

A 10-bit ADC has how many distinct codes?

- A. 512
- B. 2048
- C. 1024
- D. 1000

**Answer:** C. A 10-bit converter has 2^10=1024 code values.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X10 — ADC step

For an ideal 10-bit ADC spanning 0–3.3 V, about how many mV is one code width using 3.3/1024?

- A. 10 mV
- B. 3.22 mV
- C. 0.322 mV
- D. 32.2 mV

**Answer:** B. 3.3 V/1024≈0.00322 V=3.22 mV.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X11 — PWM average

An ideal 5 V PWM signal has 40% duty cycle. What average voltage does a low-pass filter approach?

- A. 2 V
- B. 4 V
- C. 3 V
- D. 0.4 V

**Answer:** A. Average is 5×0.40=2 V under the ideal filtering assumption.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X12 — UART time

At 9600 baud, an 8N1 UART frame uses 10 bits. Roughly how long does one byte frame take?

- A. 0.104 ms
- B. 10 ms
- C. 9.6 ms
- D. 1.04 ms

**Answer:** D. 10/9600 s≈0.00104 s=1.04 ms.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X13 — I2C addressing

Two devices with the same fixed I2C address share one bus. What problem follows?

- A. The bus automatically assigns unique addresses
- B. Clock speed doubles
- C. The devices become UART peripherals
- D. Both may respond to the same address

**Answer:** D. Devices sharing an address cannot be selected independently without additional bus or address mechanisms.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X14 — SPI chip select

Two SPI peripherals share SCLK and MOSI. What normally distinguishes which device should communicate?

- A. Different UART baud rates
- B. Different IP addresses
- C. Separate chip-select lines
- D. Separate CPU clocks only

**Answer:** C. A chip-select signal activates the intended peripheral on a shared SPI bus.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X15 — Pull-up input

A button input floats when open and reads unpredictably. What hardware configuration helps?

- A. Remove the ground
- B. Enable a pull-up or pull-down resistor
- C. Increase the display brightness
- D. Lower the UART baud rate

**Answer:** B. A pull resistor defines a stable logic level when the switch is open.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X16 — Peripheral clock

A timer register is configured but the timer never increments. Which setup step is a likely omission?

- A. Enable the timer peripheral clock
- B. Change the source file extension
- C. Increase ADC resolution
- D. Move the interrupt vector to RAM

**Answer:** A. Many MCUs gate peripheral clocks; a disabled clock prevents timer operation.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

## Timing, sampling and interrupts

Focus: Timer conversion, Interrupt handling, Switch debounce, Sensor calibration, Sampling alias, Antialias filtering, Nyquist, Timer period, Interrupt duration, Debounce, Aliasing, Timestamp wrap, Deadline, Clock drift

Roadmap resource: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193) (Curated academic or industry source).

### ER11 — Timer conversion

A timer increments at 1 MHz. Ignoring wraparound, what elapsed time do 1000 ticks represent?

- A. 1 second
- B. 1 microsecond
- C. 1 millisecond
- D. 100 milliseconds

**Answer:** C. Each tick is 1 microsecond; 1000 ticks are 1000 microseconds or 1 millisecond.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER12 — Interrupt handling

A sensor ISR must acknowledge an interrupt and trigger expensive processing. Which design usually keeps interrupt latency for other work bounded?

- A. Wait inside the ISR until a user presses a button
- B. Allocate and process an unbounded batch before acknowledging
- C. Perform a blocking network request inside the ISR
- D. Capture minimal data, acknowledge the source, and notify a task using an ISR-safe mechanism

**Answer:** D. Short bounded ISR work limits interference; longer processing can be deferred to an appropriately scheduled task.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER13 — Switch debounce

A mechanical switch creates several transitions during one physical press. What does debouncing address?

- A. Changing the motor gear ratio
- B. Converting UART data into SPI
- C. Increasing the ADC voltage range
- D. Treating rapid contact oscillations as one stable input change

**Answer:** D. Mechanical contacts bounce; filtering or a stable-time state machine prevents multiple false presses.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER14 — Sensor calibration

A temperature sensor repeatedly reads 2°C above a trusted reference across a narrow operating range. Which simple calibration fits that observed constant bias?

- A. Add 2°C to each reading
- B. Reverse the order of the samples
- C. Multiply every reading by 2
- D. Subtract 2°C from each reading in that validated range

**Answer:** D. An additive offset correction addresses a constant bias. Wider ranges may require a richer calibration model.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER42 — Sampling alias

A pure 70 Hz sinusoid is sampled uniformly at 100 samples/s with no antialias filter. Which lower-frequency sinusoid can produce the same samples up to phase/sign convention?

- A. 170 kHz
- B. 70 kHz
- C. 100 Hz
- D. 30 Hz

**Answer:** D. 70 Hz folds around the 50 Hz Nyquist frequency to abs(100−70)=30 Hz; the sampled data cannot uniquely identify the original frequency.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER43 — Antialias filtering

A sensor contains frequencies above half the sampling rate. Which action addresses aliasing before acquisition?

- A. Add timestamps to the same samples and treat the analog bandwidth constraint as removed
- B. Apply an appropriate analog low-pass filter before the ADC, or raise the sample rate with suitable filtering
- C. Use only a post-sampling low-pass filter and assume it separates an aliased component from a genuine lower-frequency component
- D. Increase ADC bit depth without changing sampling bandwidth or rate

**Answer:** B. Once different analog frequencies map to identical samples, post-processing alone cannot generally undo the ambiguity.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X17 — Nyquist

A signal contains frequencies up to 400 Hz. What sample rate exceeds the Nyquist minimum?

- A. 1000 samples/s
- B. 400 samples/s
- C. 600 samples/s
- D. 200 samples/s

**Answer:** A. The strict minimum is greater than 2×400=800 samples/s; 1000 qualifies.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X18 — Timer period

A 1 MHz timer increments every microsecond. How many ticks represent 5 ms?

- A. 500
- B. 50,000
- C. 5
- D. 5000

**Answer:** D. 5 ms=5000 microseconds, hence 5000 ticks.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X19 — Interrupt duration

An ISR runs for 3 ms, but an event can arrive every 1 ms. What risk follows?

- A. The ADC gains resolution
- B. The clock runs three times faster
- C. Events can backlog or be missed because service time exceeds arrival interval
- D. The ISR finishes before every event

**Answer:** C. An ISR taking 3 ms cannot individually serve 1 ms arrivals without buffering or coalescing.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X20 — Debounce

A mechanical switch produces multiple edges over 8 ms. What can prevent multiple logical presses?

- A. Increase display frame rate
- B. A debounce interval or state filter longer than the bounce window
- C. Count every edge as a press
- D. Disable interrupts forever

**Answer:** B. A suitable debounce filter collapses transient edges into one stable state change.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X21 — Aliasing

A 700 Hz sinusoid sampled at 1000 Hz can appear at what lower frequency?

- A. 1000 Hz
- B. 300 Hz
- C. 700 Hz only
- D. 1700 Hz

**Answer:** B. The sampled alias is |700−1000|=300 Hz below Nyquist.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X22 — Timestamp wrap

A 16-bit millisecond counter wraps. How long is its full cycle approximately?

- A. 65.536 s
- B. 6.554 s
- C. 655.36 s
- D. 16 s

**Answer:** A. 2^16 ms=65,536 ms=65.536 seconds.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X23 — Deadline

A control cycle has 10 ms deadline; sensing takes 2 ms, compute 5 ms, actuation 1 ms. Ignoring overhead, how much slack remains?

- A. 8 ms
- B. 3 ms
- C. 0 ms
- D. 2 ms

**Answer:** D. 10−(2+5+1)=2 ms.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### EMBEDDED_SYSTEMS-X24 — Clock drift

Two devices each timestamp events using free-running unsynchronized clocks. Why are timestamps hard to compare?

- A. The values must be signed
- B. The clocks have no frequency
- C. Offset and drift between clocks are unknown
- D. UART frames lack start bits

**Answer:** C. Without synchronization, local time bases may differ in offset and rate.

Source: [ARM: Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

## RTOS concurrency and resources

Focus: RTOS blocking, Task mutual exclusion, ISR concurrency, Priority inversion, Response-time analysis, DMA cache coherence, Ring-buffer overload, Queue capacity, Race condition, Deadlock, Scheduling, Watchdog servicing, Bounded queues, Task deadlines

Roadmap resource: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) (Curated academic or industry source).

### ER16 — RTOS blocking

A task needs to wait for a queue item without wasting CPU time. Which approach is appropriate?

- A. Use a queue receive with a suitable blocking timeout
- B. Spin continuously checking whether the queue is empty
- C. Hold every shared mutex while waiting
- D. Disable interrupts until an item appears

**Answer:** A. Blocking lets other tasks run; a suitable timeout can support recovery when data does not arrive.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER17 — Task mutual exclusion

Two tasks modify a shared data structure. Which primitive is designed to guard an owned critical section between tasks?

- A. A PWM output
- B. An ADC channel
- C. A mutex used with consistent lock ownership
- D. A read-only constant

**Answer:** C. A mutex controls task access to a shared resource. ISR interactions require mechanisms suitable for interrupt context.

Source: [E1: FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

### ER37 — ISR concurrency

A 32-bit variable is shared between a task and an ISR on a platform where 32-bit access is not atomic. Why is declaring it `volatile` insufficient for a consistent read?

- A. Volatile alone establishes a consistent multiword snapshot even if interrupts occur between loads
- B. Volatile turns any variable access into one indivisible machine instruction
- C. Volatile does not make a multi-instruction access atomic or prevent a torn value
- D. Volatile inserts a mutex that the ISR and task acquire automatically

**Answer:** C. Visibility of accesses and atomicity are different. Use an appropriate bounded critical section, atomic facility, or safe snapshot protocol for the target.

Source: [E13: WG14 N1570 C11 committee draft](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf)

### ER38 — Priority inversion

A low-priority task holds a mutex needed by a high-priority task, while a medium-priority task keeps preempting the low-priority task. Which mechanism directly mitigates this inversion?

- A. Increase only the unrelated medium-priority task priority to make it finish earlier
- B. Temporarily inherit the waiting task's higher priority while holding the mutex
- C. Disable preemption for the entire application, regardless of deadline requirements
- D. Replace the blocking mutex with a high-priority busy loop that prevents the owner from running

**Answer:** B. Priority inheritance lets the owner finish the protected work sooner; it does not solve every deadlock or scheduling problem.

Source: [E1: FreeRTOS mutexes and priority inheritance](https://freertos.org/Real-time-embedded-RTOS-mutexes.html)

### ER39 — Response-time analysis

On one CPU, task H has execution time 1 ms and period/deadline 4 ms. Lower-priority task L has execution time 3 ms and period/deadline 10 ms. Assume fixed priorities, preemption, no blocking/jitter/overhead, and synchronous release. Solve L's worst-case response using R=3+ceil(R/4)×1. What is the result?

- A. 3 ms, because interference never counts
- B. 7 ms, missing L's deadline
- C. 11 ms, missing L's deadline
- D. 4 ms, meeting L's 10 ms deadline

**Answer:** D. Starting at R=3 gives 4; substituting 4 gives 4 again. L finishes in 4 ms in this model.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER41 — DMA cache coherence

On a non-coherent write-back-cache MCU, the CPU writes a transmit buffer in cache and DMA reads main memory. DMA transmits old bytes. Which fix addresses this specific stale-data path?

- A. Clean the appropriate cache lines before DMA reads, with required alignment, barriers, and ownership rules
- B. Invalidate dirty cache lines and discard the new data before transmission
- C. Increase the UART stop-bit count
- D. Only mark the C pointer volatile

**Answer:** A. Dirty CPU cache contents must reach memory before a non-coherent DMA reader accesses them; follow the target's cache maintenance requirements.

Source: [E9: ST AN4839: CPU cache and DMA coherence](https://www.st.com/resource/en/application_note/DM00272913-.pdf)

### ER53 — Ring-buffer overload

An ISR produces 1000 samples/s and a task consumes 800 samples/s steadily. An empty ring buffer has capacity for 400 samples. Ignoring burst effects, when does it first fill?

- A. After 5 seconds
- B. After 0.4 seconds
- C. After 2 seconds
- D. It never fills because the consumer is running

**Answer:** C. Backlog grows at 200 samples/s, so 400/200=2 s. A larger finite buffer only delays sustained overload.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X25 — Priority inversion

A high-priority task waits on a mutex held by a low-priority task while medium tasks run. What mechanism can reduce inversion?

- A. Remove the mutex but keep shared writes
- B. Disable the scheduler permanently
- C. Priority inheritance on the mutex
- D. Give medium tasks more priority

**Answer:** C. Priority inheritance temporarily boosts the lock holder so it can release the resource.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X26 — Queue capacity

A producer emits 50 items/s and a consumer handles 40 items/s for 6 s. How many items accumulate in an initially empty queue?

- A. 300
- B. 60
- C. 10
- D. 240

**Answer:** B. Net growth is 10 items/s; 10×6=60 items.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X27 — Race condition

An ISR and task both modify a shared multi-byte counter. What must be addressed?

- A. Atomic access or a protected handoff
- B. Only the variable name
- C. The display pixel format
- D. The UART stop bit

**Answer:** A. Concurrent access may tear or lose updates; use an atomic operation, critical section or queue as appropriate.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X28 — Deadlock

Task A locks X then Y, task B locks Y then X. What risk does this create?

- A. Guaranteed faster execution
- B. A hardware reset on every lock
- C. Automatic lock reordering
- D. Deadlock from circular wait

**Answer:** D. Opposite lock order permits each task to hold one lock and wait indefinitely for the other.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X29 — Scheduling

Two periodic tasks need 2 ms every 10 ms and 3 ms every 20 ms. What is total CPU utilization?

- A. 25%
- B. 50%
- C. 15%
- D. 35%

**Answer:** D. 2/10+3/20=0.20+0.15=0.35=35%.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X30 — Watchdog servicing

A task kicks the watchdog from an idle loop even if the control task hangs. What is the design flaw?

- A. The idle loop cannot run
- B. It increases ADC resolution
- C. The watchdog no longer proves the critical task is healthy
- D. The watchdog timeout is always zero

**Answer:** C. Feed the watchdog only when critical health conditions are met.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X31 — Bounded queues

A telemetry producer is faster than its sender. Which policy must be explicit for a bounded queue?

- A. Stop all interrupts silently
- B. Backpressure, drop or overwrite behavior under full load
- C. Assume the queue is infinite
- D. Always allocate memory until reset

**Answer:** B. Finite capacity requires defined overload behavior to preserve predictable memory and latency.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X32 — Task deadlines

A task has a 10 ms period but one execution takes 12 ms. What has occurred?

- A. A deadline miss if each job must finish within its period
- B. A guaranteed priority inversion
- C. A normal early completion
- D. A UART framing error

**Answer:** A. A 12 ms job exceeds a 10 ms relative deadline when deadline equals period.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

## Robot mathematics and motion

Focus: Robot kinematics, Differential drive, Coordinate frames, Differential-drive calculation, Kinematic singularities, 2D rotation, Wheel circumference, Encoder distance, Turn in place, Frame composition, Pose uncertainty, Stopping distance

Roadmap resource: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702) (Curated academic or industry source).

### ER18 — Robot kinematics

What does forward kinematics compute for a robot arm?

- A. Battery charge from motor temperature
- B. Obstacle locations from Wi-Fi strength
- C. End-effector pose from joint coordinates and the robot model
- D. Joint coordinates from a desired end-effector pose

**Answer:** C. Forward kinematics maps joint configuration to pose; solving joint configuration from pose is inverse kinematics.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER19 — Differential drive

An ideal differential-drive robot has equal positive left and right wheel linear speeds. With no slip, what motion results?

- A. Straight forward motion
- B. A turn whose radius must be zero
- C. Straight backward motion
- D. Rotation in place

**Answer:** A. Equal wheel speeds produce zero angular velocity and nonzero forward velocity.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER24 — Coordinate frames

A lidar point is expressed in the lidar frame, but a map expects map-frame coordinates. What is required before combining them correctly?

- A. Sorting points by intensity
- B. Only changing the point's text label
- C. A valid transform between the frames at the measurement time
- D. Dropping all timestamps unconditionally

**Answer:** C. Coordinates need a transformation, not a renamed label; a moving platform makes the transform time-dependent.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER46 — Differential-drive calculation

An ideal robot has left wheel linear speed 0.4 m/s, right wheel speed 0.6 m/s, and track width 0.5 m. With v=(vr+vl)/2 and omega=(vr−vl)/track, what are v and omega?

- A. 0.5 m/s and 2 rad/s
- B. 1.0 m/s and 0.2 rad/s
- C. 0.5 m/s and 0.4 rad/s
- D. 0.2 m/s and 0.5 rad/s

**Answer:** C. The mean wheel speed is 0.5 m/s; the speed difference divided by width is 0.2/0.5=0.4 rad/s.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER48 — Kinematic singularities

Near a robot-arm Jacobian singularity, a small desired end-effector velocity can require very large joint velocities. Which response is appropriate?

- A. Clip joint speeds independently and assume the exact desired Cartesian motion is still guaranteed
- B. Use the ordinary Jacobian inverse without conditioning checks or joint-speed bounds
- C. Use a suitable damped inverse/constraint-aware method and avoid infeasible motion near the singularity
- D. Scale the commanded Cartesian velocity up until the inverse solution becomes numerically larger

**Answer:** C. A poorly conditioned Jacobian amplifies commands; damping and constraints trade exact tracking for bounded feasible motion.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X33 — 2D rotation

A planar robot facing +x turns 90° counterclockwise. Which direction does it face?

- A. +y
- B. −y
- C. −x
- D. +x

**Answer:** A. A 90° CCW rotation maps +x to +y.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X34 — Wheel circumference

A wheel radius is 0.1 m. About how far does it roll in one revolution without slip?

- A. 0.314 m
- B. 0.1 m
- C. 1 m
- D. 0.628 m

**Answer:** D. Circumference=2πr≈2×3.1416×0.1=0.628 m.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X35 — Encoder distance

A 0.5 m wheel circumference encoder counts 200 ticks/revolution. What distance is 50 ticks without slip?

- A. 0.5 m
- B. 0.05 m
- C. 0.125 m
- D. 0.25 m

**Answer:** C. 50/200=0.25 revolution; 0.25×0.5=0.125 m.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X36 — Differential drive

Both drive wheels rotate forward at equal speeds. What ideal planar motion results?

- A. No movement
- B. Straight forward
- C. Rotate in place
- D. Straight backward

**Answer:** B. Equal wheel speeds produce zero yaw rate and forward translation in the ideal model.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X37 — Turn in place

Left and right wheels rotate with equal magnitude in opposite directions. What ideal motion results?

- A. No rotation
- B. Rotation about the robot center
- C. Straight translation
- D. A pure vertical movement

**Answer:** B. Opposite wheel travel cancels translation and creates yaw rotation.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X38 — Frame composition

A sensor is 0.2 m ahead of the robot center and an obstacle is 1 m ahead of the sensor on the same axis. How far ahead of robot center?

- A. 1.2 m
- B. 0.8 m
- C. 1 m
- D. 0.2 m

**Answer:** A. Collinear translations add: 0.2+1.0=1.2 m.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X39 — Pose uncertainty

Wheel odometry drifts over a long route. Why?

- A. A wheel encoder measures absolute global position
- B. The map automatically corrects all errors
- C. The robot never rotates
- D. Small slip and measurement errors accumulate during integration

**Answer:** D. Dead reckoning integrates imperfect motion estimates, accumulating error.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

### EMBEDDED_SYSTEMS-X40 — Stopping distance

At speed 2 m/s with constant deceleration 1 m/s², what ideal braking distance is needed?

- A. 4 m
- B. 0.5 m
- C. 2 m
- D. 1 m

**Answer:** C. d=v²/(2a)=4/(2×1)=2 m, excluding reaction distance.

Source: [MATH: Mathematical Foundations for Machine Learning](https://nptel.ac.in/courses/106108702)

## Feedback control

Focus: Feedback control, Integral action, PID anti-windup, Timing jitter, Stopping-distance model, Proportional control, Integral windup, Derivative noise, Control sign, Sample period, Safety stop, Actuator saturation, Overshoot diagnosis

Roadmap resource: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) (Curated academic or industry source).

### ER21 — Feedback control

A speed controller compares a desired speed with measured speed. What is the usual error for negative-feedback control?

- A. Desired speed plus measured speed
- B. The encoder count without reference to the desired speed
- C. Measured speed multiplied by supply voltage
- D. Desired speed minus measured speed

**Answer:** D. The sign convention e=reference−measurement lets the controller respond to tracking error; actuator polarity must be consistent.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER22 — Integral action

Which PID term can remove a persistent constant tracking error in a suitable stable closed-loop system?

- A. Derivative term alone
- B. A coordinate-frame label
- C. A timestamp field
- D. Integral term

**Answer:** D. Integrating a sustained error accumulates corrective action. Stability and saturation handling still matter.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER44 — PID anti-windup

A motor command saturates while the PID integral term continues to grow, causing a long overshoot after the error reverses. What change targets the cause?

- A. Use an anti-windup strategy such as conditional integration or back-calculation tied to actuator limits
- B. Remove every measurement timestamp
- C. Increase integral gain without considering saturation
- D. Accumulate the integral faster during saturation

**Answer:** A. Anti-windup limits inappropriate integral accumulation when requested control cannot be delivered.

Source: [E10: MathWorks anti-windup control example](https://www.mathworks.com/help/simulink/slref/anti-windup-control-using-a-pid-controller.html)

### ER45 — Timing jitter

A discrete controller assumes a 1 ms sample period, but actual intervals vary from 1 to 8 ms. What is the strongest next step?

- A. Resample logged data after the run and assume this repairs the controller timing that actually occurred
- B. Measure timing, remove avoidable jitter, and analyze the controller with its actual sampling and delay behavior
- C. Increase proportional gain until the nominal simulation tracks well, without measuring timing
- D. Tune using the nominal 1 ms period and treat a correct average rate as sufficient

**Answer:** B. Sampling variation and delay can change closed-loop behavior; implementation timing is part of the control design.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER52 — Stopping-distance model

A robot travels at 2 m/s. It keeps that speed for a 0.1 s reaction delay, then decelerates constantly at 1 m/s² to rest. Ignore slope and slip. What minimum distance follows from this model?

- A. 4.2 metres
- B. 2.0 metres
- C. 0.2 metres
- D. 2.2 metres

**Answer:** D. Reaction travel is 2×0.1=0.2 m; braking travel is v²/(2a)=4/2=2 m. Total=2.2 m before any safety margin.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X41 — Proportional control

With error e=3 and gain Kp=2, what is proportional output before limits?

- A. 5
- B. 9
- C. 6
- D. 1.5

**Answer:** C. u=Kp e=2×3=6.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X42 — Integral windup

A motor saturates at full power while an integral controller keeps accumulating error. What problem can follow?

- A. Faster UART transfer
- B. Large overshoot after leaving saturation
- C. Guaranteed zero error immediately
- D. Lower sensor noise

**Answer:** B. Accumulated integral action persists after saturation and can drive overshoot; anti-windup limits it.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X43 — Derivative noise

A derivative term amplifies high-frequency sensor noise. Which adjustment is common?

- A. Filter the measurement/derivative appropriately
- B. Increase derivative gain without limit
- C. Remove the sensor ground
- D. Decrease control sample rate arbitrarily

**Answer:** A. Differentiation magnifies rapid noise; filtering can reduce it with attention to delay.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X44 — Control sign

A positive position error causes a controller to command movement farther from the target. What is likely wrong?

- A. ADC bit depth only
- B. Robot color
- C. File extension
- D. Feedback sign or actuator direction

**Answer:** D. A wrong sign turns negative feedback into positive feedback, increasing error.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X45 — Sample period

A controller executes every 20 ms. What is its sample frequency?

- A. 20 Hz
- B. 100 Hz
- C. 5 Hz
- D. 50 Hz

**Answer:** D. 1/0.020 s=50 cycles per second.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X46 — Safety stop

A robot loses its command link while moving. What should the local controller do under a fail-safe design?

- A. Ignore local sensors
- B. Wait for a new firmware release
- C. Stop or enter a defined safe state after a timeout
- D. Continue last speed indefinitely

**Answer:** C. Command-loss behavior must be bounded locally; a safe state limits runaway motion.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X47 — Actuator saturation

A controller requests torque 12 Nm but the actuator max is 8 Nm. What delivered command should a limiter output?

- A. 20 Nm
- B. 8 Nm
- C. 12 Nm
- D. 4 Nm

**Answer:** B. Clamp the requested magnitude to the 8 Nm physical limit.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X48 — Overshoot diagnosis

A proportional-only position loop overshoots and oscillates. Which change should be tested with measured response?

- A. Reduce gain or add damping as justified
- B. Always double the gain
- C. Remove all sensors
- D. Increase target position continuously

**Answer:** A. A lower gain or damping can improve stability; tune using measured dynamics rather than a fixed rule.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

## ROS 2 and robot integration

Focus: ROS communication, Connected-device messages, ROS 2 QoS compatibility, Time-aligned transforms, ROS topic, ROS service, Coordinate frames, QoS mismatch, Timestamp drift, Node lifecycle, Message frequency, ROS testing

Roadmap resource: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst) (Curated academic or industry source).

### ER23 — ROS communication

A robot continuously publishes sensor measurements for multiple consumers. Which ROS 2 interaction is the natural fit?

- A. A topic with publishers and subscribers
- B. A service that is called exactly once during compilation
- C. A firmware linker section
- D. A local variable that exists only in one callback

**Answer:** A. Topics support asynchronous streams and multiple consumers; services fit request-response interactions.

Source: [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER29 — Connected-device messages

A robot receives duplicated command messages because its transport offers at-least-once delivery. What application design avoids repeating a one-time action?

- A. Apply each command twice to maintain symmetry
- B. Use stable command IDs and track which commands were already applied
- C. Assume each received message must be a new intention
- D. Use arrival order as the only permanent identity

**Answer:** B. At-least-once delivery permits duplicates; application-level identities allow deduplication.

Source: [E5: ROS 2 feature overview, official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/The-ROS2-Project/Features.rst)

### ER49 — ROS 2 QoS compatibility

A ROS 2 publisher offers BEST_EFFORT reliability and a subscriber requests RELIABLE reliability. Assume all other settings match. Are these reliability policies compatible?

- A. No; the publisher does not offer the reliability requested by the subscriber
- B. Yes; the subscriber retransmits data that the publisher never delivered
- C. Yes; matching topic names bypass all QoS compatibility checks
- D. Yes; reliability is negotiated upward to the stronger request automatically

**Answer:** A. ROS 2 requested/offered QoS compatibility requires the publisher to satisfy the subscriber's requested reliability.

Source: [E4: ROS 2 QoS official documentation source](https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst)

### ER50 — Time-aligned transforms

A robot receives a delayed lidar scan while turning. Transforming it with the robot's current pose bends otherwise static walls in the map. What is the best correction?

- A. Transform the whole scan with the most recent pose, regardless of the timestamp difference
- B. Increase the number of map cells without correcting the temporal misalignment
- C. Replace every scan timestamp with its arrival time and assume transport delay is zero
- D. Use the pose/transform corresponding to measurement time, accounting for scan timing where needed

**Answer:** D. Spatial fusion must align coordinate frames in time; moving scanners may also need per-point motion compensation.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X49 — ROS topic

A camera node publishes images to multiple consumers. Which ROS communication pattern fits?

- A. Publish/subscribe topic
- B. Parameter update only
- C. Service request for every frame
- D. A build artifact

**Answer:** A. Topics distribute asynchronous streams to multiple subscribers.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X50 — ROS service

A client needs a one-time request and response to reset odometry. Which ROS pattern fits?

- A. High-rate sensor topic only
- B. Transform frame only
- C. Static parameter file only
- D. Service

**Answer:** D. Services support bounded request-response interactions.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X51 — Coordinate frames

A camera detects an object in camera coordinates, but planning uses map coordinates. What is required?

- A. Only a higher frame rate
- B. A new motor driver
- C. A timestamp-compatible transform chain between camera and map
- D. Only a topic rename

**Answer:** C. The detection must be transformed through known frames at the relevant timestamp.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X52 — QoS mismatch

A sensor publisher uses best-effort and a subscriber requests reliable only. Why might data not arrive?

- A. The frame ID must be blank
- B. Their QoS policies may be incompatible
- C. ROS automatically upgrades every publisher
- D. The message must be JSON

**Answer:** B. Offered and requested QoS must be compatible for an endpoint connection.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X53 — Timestamp drift

A robot camera and LiDAR are 200 ms out of sync. What can fail?

- A. The map origin changes automatically
- B. Sensor fusion associates measurements from different robot poses
- C. Both sensors increase resolution
- D. Message types become identical

**Answer:** B. Time misalignment can associate observations taken at different poses, corrupting fusion.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X54 — Node lifecycle

A navigation node activates before its map and transform dependencies are ready. What should startup do?

- A. Wait for readiness or coordinate lifecycle transitions
- B. Discard all localization messages
- C. Assume dependencies will never fail
- D. Disable timestamps

**Answer:** A. A controlled lifecycle avoids processing with missing required state.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X55 — Message frequency

A sensor publishes 200 messages in 10 seconds. What is average publication rate?

- A. 200 Hz
- B. 10 Hz
- C. 2 Hz
- D. 20 Hz

**Answer:** D. 200/10=20 messages per second.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

### EMBEDDED_SYSTEMS-X56 — ROS testing

A robot works in simulation but fails on hardware due to different sensor latency. What should tests add?

- A. Only a renamed topic
- B. Only more UI screenshots
- C. Hardware-in-loop or recorded timing/latency cases
- D. Only a higher simulation resolution

**Answer:** C. Tests must cover real timing and device behavior that simulation may omit.

Source: [ROS: ROS 2 Jazzy tutorials](https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst)

## Estimation and planning

Focus: Sensor fusion, Planning and control, Obstacle clearance, Estimator covariance, Bayes update, Sensor variance, Kalman innovation, Occupancy grid, A-star heuristic, Path clearance, Localization recovery

Roadmap resource: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/) (Curated academic or industry source).

### ER26 — Sensor fusion

Why might a mobile robot combine wheel odometry with an IMU?

- A. Their information and error characteristics can complement each other
- B. Wheel slip becomes physically impossible
- C. An IMU directly measures absolute global position without integration
- D. Two sensors guarantee zero error in every situation

**Answer:** A. Odometry and inertial measurements have different limitations, so a suitable estimator can exploit complementary information.

Source: [E11: Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf)

### ER27 — Planning and control

Which distinction is most accurate?

- A. A planner chooses a route or trajectory; a controller produces commands to track it
- B. Planning and control both mean reading only battery voltage
- C. A planner must always execute at the motor PWM frequency
- D. A controller chooses source-code filenames; a planner compiles them

**Answer:** A. Planning and feedback control operate on related but distinct problems and may use different update rates.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER28 — Obstacle clearance

Why inflate obstacles in a configuration-space map for a robot with nonzero width?

- A. To make the physical robot smaller
- B. To account for the robot's footprint when checking feasible motion
- C. To eliminate the need for localization
- D. To increase encoder resolution

**Answer:** B. Inflation converts body-clearance constraints into a planning representation, commonly approximating the robot as a reference point.

Source: [E2: Modern Robotics: authors’ book and video supplements](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### ER51 — Estimator covariance

A Kalman-style estimator is given a measurement noise covariance R much smaller than the sensor's actual noise. What is a likely consequence, other factors equal?

- A. It gives those measurements too much influence and may become overconfident or noisy
- B. It automatically detects every sensor failure
- C. It necessarily ignores the measurements entirely
- D. It guarantees exact ground-truth position

**Answer:** A. Understated uncertainty overweights observations relative to prediction; covariance assumptions need validation.

Source: [E11: Welch and Bishop: An Introduction to the Kalman Filter](https://www.cs.unc.edu/~welch/media/pdf/kalman_intro.pdf)

### EMBEDDED_SYSTEMS-X57 — Bayes update

A sensor test has 80% sensitivity and 10% false-positive rate; prior probability is 50%. What is P(event | positive)?

- A. 50%
- B. 10%
- C. 8/9 ≈ 88.9%
- D. 80%

**Answer:** C. Bayes: 0.8×0.5/(0.8×0.5+0.1×0.5)=0.4/0.45=8/9.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X58 — Sensor variance

Two independent position sensors have variances 1 and 4. Which should receive more weight in inverse-variance fusion?

- A. Neither measurement
- B. The variance-1 sensor
- C. The variance-4 sensor
- D. Equal weights always

**Answer:** B. Precision is inverse variance: 1 versus 1/4, so the lower-variance sensor receives more weight.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X59 — Kalman innovation

A position filter predicts 10 m and measures 12 m. What is innovation, measurement minus prediction?

- A. 2 m
- B. −2 m
- C. 10 m
- D. 22 m

**Answer:** A. Innovation=12−10=2 m.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X60 — Occupancy grid

A planner treats unknown cells as free by default. What safety risk follows?

- A. It always finds no path
- B. It increases battery life
- C. It makes GPS exact
- D. It may plan through unobserved obstacles

**Answer:** D. Unknown space may contain obstacles; planning policy should account for that uncertainty.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X61 — A-star heuristic

What property of an A* heuristic helps guarantee optimality with nonnegative edge costs?

- A. It always overestimates remaining cost
- B. It returns a random number
- C. It ignores the goal
- D. It does not overestimate remaining cost

**Answer:** D. An admissible heuristic is a lower bound on remaining cost, supporting optimal paths.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X62 — Path clearance

A robot has radius 0.3 m and a corridor is 0.5 m wide. Can its center pass through without collision in an ideal planar model?

- A. Yes, if it moves slowly
- B. Only if the map origin changes
- C. No, diameter 0.6 m exceeds width
- D. Yes, radius is below width

**Answer:** C. The robot diameter is 2×0.3=0.6 m, greater than 0.5 m clearance.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

### EMBEDDED_SYSTEMS-X63 — Localization recovery

A robot is physically moved while powered on, but odometry assumes continuous motion. What can restore position belief?

- A. Increase wheel radius in software
- B. Use external observations or relocalization against the map
- C. Integrate the same old odometry longer
- D. Delete the map

**Answer:** B. Kidnapped-robot movement is invisible to wheel integration; external observations can relocalize.

Source: [ROBOT: Modern Robotics: Mechanics, Planning, and Control](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)

## Dependability and verification

Focus: Watchdog monitoring, Power-loss persistence, Hardware-in-the-loop testing, Command freshness, Watchdog coverage, Update integrity, Integration diagnosis, Validation limits, Watchdog timeout, Brownout, Firmware update, CRC purpose, Command timeout, Fault injection, Operating envelope

Roadmap resource: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057) (Curated academic or industry source).

### ER31 — Watchdog monitoring

What is the purpose of a watchdog configured to reset an unresponsive controller?

- A. Improve ADC resolution
- B. Increase motor torque automatically
- C. Trigger recovery when required software progress is not observed within a timeout
- D. Correct every possible sensor calibration error

**Answer:** C. A watchdog detects missing timely servicing and can initiate configured recovery; it does not prove full system correctness.

Source: [E7: Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

### ER32 — Power-loss persistence

Configuration may be interrupted while being written to flash. Which design improves recovery?

- A. Use versioned records with integrity checks and a commit strategy that preserves a previous valid record
- B. Treat partially written bytes as a valid configuration
- C. Store every configuration solely in an uninitialized variable
- D. Overwrite the only copy and assume power remains on

**Answer:** A. A recoverable record protocol can distinguish complete valid data from interrupted writes and retain a fallback.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER33 — Hardware-in-the-loop testing

What is a hardware-in-the-loop test in this context?

- A. Compiling without running any controller code
- B. Testing only a screenshot of the robot
- C. Running the real controller against simulated or controlled plant/sensor signals
- D. Reviewing only a mechanical drawing

**Answer:** C. HIL exercises controller hardware and interfaces while the physical environment is represented or controlled.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER34 — Command freshness

A moving robot stops receiving velocity commands. Which control policy best handles the loss of fresh commands?

- A. Increase speed to reconnect faster
- B. Disable all sensor feedback
- C. Use a bounded command timeout and enter a defined safe motion state
- D. Keep the last nonzero speed forever

**Answer:** C. Stale commands must not remain valid indefinitely; the safe response depends on the system's hazard analysis and dynamics.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### ER54 — Watchdog coverage

A timer ISR feeds the watchdog even when the control task is deadlocked. What change improves detection of that failure?

- A. Feed only after a supervisor verifies timely progress of required tasks
- B. Disable the watchdog during every control cycle
- C. Feed the watchdog more often from the same ISR
- D. Increase PWM frequency to hide the deadlock

**Answer:** A. An independent interrupt can remain alive while application work is stuck; watchdog servicing should reflect required system progress.

Source: [E7: Zephyr watchdog API](https://docs.zephyrproject.org/latest/doxygen/html/group__watchdog__interface.html)

### ER55 — Update integrity

A connected robot downloads firmware. Which mechanism checks that the image was authorized by a trusted signer and has not been altered?

- A. Accept any image whose version string is lexicographically greater than the installed version
- B. Verify a digital signature against a protected trusted key before activation
- C. Encrypt the image with a key sent inside the same unauthenticated download
- D. Compare a checksum supplied beside the image over the same untrusted channel

**Answer:** B. A signature can authenticate image origin and integrity when keys are trusted. Rollback prevention and safe activation are separate requirements.

Source: [E12: MCUboot signed-image validation](https://github.com/mcu-tools/mcuboot/blob/main/docs/signed_images.md)

### ER56 — Integration diagnosis

A robot's localization drifts only when motors run. Sensor readings show periodic spikes synchronized with PWM, even while the robot is mechanically stationary. What investigation is best supported by this evidence?

- A. Check electrical interference, grounding, supply integrity, and sampling timing before changing motion models
- B. Replace the planner heuristic without inspecting raw signals
- C. Assume wheel slip is the only possible explanation
- D. Increase map resolution and ignore the spikes

**Answer:** A. The stationary test weakens a motion-only explanation; PWM-correlated sensor artifacts point toward electrical or acquisition coupling that should be measured.

Source: [E6: NPTEL Embedded System Design with ARM](https://nptel.ac.in/courses/106105193)

### ER57 — Validation limits

A navigation controller passes ideal simulation tests but fails near reflective surfaces on the real robot. What should the validation plan add?

- A. Representative sensor failure cases, hardware/field tests, and documented operating limits
- B. A claim that simulation success proves every environment safe
- C. Only more runs of the unchanged ideal simulation
- D. Only a different robot name in the UI

**Answer:** A. Simulation coverage is limited by its models. Real sensor behavior and environmental edge cases must be included in validation.

Source: [E8: NPTEL Embedded Systems: timing, scheduling, and testing](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X64 — Watchdog timeout

A control loop should heartbeat every 20 ms; a watchdog times out after 100 ms. About how many missed heartbeats trigger timeout?

- A. 5
- B. 2
- C. 20
- D. 100

**Answer:** A. 100/20=5 expected heartbeat intervals without service.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X65 — Brownout

A device reboots when motors start and voltage dips. What should be checked first?

- A. Supply voltage under load and brownout thresholds
- B. Only the robot paint color
- C. Only the map file
- D. Only the wheel diameter

**Answer:** A. Motor inrush can sag supply voltage below controller operating limits.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X66 — Firmware update

Power fails during firmware replacement. What design improves recovery?

- A. Overwrite the only image without validation
- B. Disable checksums
- C. Store update state only in RAM
- D. A verified fallback image or atomic A/B update

**Answer:** D. A fallback/dual-slot design can boot a known-good image if the new image is incomplete.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X67 — CRC purpose

A packet has a CRC that does not match the payload. What should the receiver infer?

- A. The packet is guaranteed fresh
- B. The packet has zero latency
- C. The packet may be corrupted and should be rejected or retried
- D. The packet is authenticated

**Answer:** C. A CRC detects many accidental transmission errors; it does not provide authenticity.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X68 — Command timeout

A rover receives no valid speed command for 500 ms. What behavior should a defined safety policy specify?

- A. Ignore the timeout
- B. A bounded stop or safe-state transition
- C. Continue indefinitely at old speed
- D. Increase speed automatically

**Answer:** B. A command watchdog should move to a safe state after the specified loss interval.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X69 — Fault injection

A controller is claimed to recover from stuck sensor readings. Which test most directly checks it?

- A. Increase radio power
- B. Inject a constant sensor value and observe detection plus safe response
- C. Only test normal sensor readings
- D. Change the display font

**Answer:** B. A stuck-value fault injection tests the actual detection and fallback path.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

### EMBEDDED_SYSTEMS-X70 — Operating envelope

A robot was tested only indoors on flat floors. Why should documentation state this?

- A. It defines the conditions under which safety/performance claims were checked
- B. It guarantees outdoor performance
- C. It changes wheel torque
- D. It replaces field testing

**Answer:** A. Validated operating limits prevent unsupported use assumptions.

Source: [RTOS: Embedded Systems](https://nptel.ac.in/courses/108105057)

## Self-assessment

### ER05 — Embedded programming practice

What evidence can you demonstrate of writing a small embedded C program or equivalent simulator task?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show independently written code that reads input and controls an output (50% of practice item)
- D. I can also explain the code and demonstrate boundary or error-case tests (100% of practice item)

### ER10 — Peripheral practice

What evidence can you demonstrate of interfacing a sensor or actuator on hardware or a peripheral simulator?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently configured interface with measured or simulated input/output (50% of practice item)
- D. I can also explain timing and electrical assumptions and demonstrate a diagnosed interface fault (100% of practice item)

### ER15 — Timing practice

What evidence can you demonstrate of implementing a timed or interrupt-driven task?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent timer/ISR implementation with captured timing evidence (50% of practice item)
- D. I can also show latency measurements or simulation traces and explain how long work is deferred (100% of practice item)

### ER20 — Concurrency practice

What evidence can you demonstrate of building a small RTOS or concurrent robot application?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show independent tasks with a documented shared-resource or message-passing design (50% of practice item)
- D. I can also show contention/failure tests and explain synchronization choices (100% of practice item)

### ER25 — Control practice

What evidence can you demonstrate of implementing a feedback controller on a simulated or physical plant?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent controller with recorded reference and measured response (50% of practice item)
- D. I can also show tuning evidence, saturation handling, and a discussion of stability and timing limits (100% of practice item)

### ER30 — Robot integration

What evidence can you demonstrate of integrating robot sensing, transforms, and motion behavior?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent simulation or hardware demonstration with consistent frames and timestamps (50% of practice item)
- D. I can also show tests for delayed/noisy data and explain how the system responds (100% of practice item)

### ER35 — Verification practice

What evidence can you demonstrate of testing embedded or robot failure handling?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show independent tests for a timeout, sensor fault, or restart condition (50% of practice item)
- D. I can also show expected-versus-observed results, repeatable fault injection, and a fix verified by retesting (100% of practice item)

### ER58 — Advanced diagnosis

What evidence can you demonstrate of resolving a timing, control, or concurrency defect?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independently diagnosed defect with reproducible traces and a fix (50% of practice item)
- D. I can also explain alternative hypotheses, demonstrate regression coverage, and quantify the improvement (100% of practice item)

### ER59 — System evaluation

What evidence can you demonstrate of evaluating a robot or embedded subsystem against stated requirements?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show an independent report with timing, accuracy, or resource measurements (50% of practice item)
- D. I can also show boundary-condition results, uncertainty or measurement limitations, and justified operating limits (100% of practice item)

### ER60 — Integrated delivery

What evidence can you demonstrate of delivering a reproducible embedded or robotics project?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I can show code, setup instructions, and an integrated hardware or simulator demonstration (50% of practice item)
- D. I can also show versioned builds, interface documentation, verification evidence, and a reasoned account of design tradeoffs (100% of practice item)

