# Full Stack Web Development — common competency survey

Bank version: FULL_STACK_WEB_DEV-COMMON-3. The same 130 MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.

There are 120 weighted technical questions and 10 separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.

The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.

## Web, JavaScript and HTTP

Focus: Semantic HTML, CSS, JavaScript arrays, JavaScript comparison, HTTP semantics, Git workflow, CORS, Cookie scope, JavaScript scheduling, Semantic forms, CSS specificity, JavaScript closure, HTTP caching, CORS behavior, Git conflict resolution

Roadmap resource: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/) (Curated academic or industry source).

### FS01 — Semantic HTML

Which HTML element is the appropriate default for an action that submits a form?

- A. `<div>` with only a click listener
- B. `<button type="submit">`
- C. `<img>` with no alternative text
- D. `<span>` with blue text

**Answer:** B. A native button provides form behavior and keyboard semantics.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS02 — CSS

Which selector targets elements with class `card`?

- A. `.card`
- B. `@card`
- C. `card()`
- D. `#card`

**Answer:** A. A dot denotes a class selector; a hash denotes an ID.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS03 — JavaScript arrays

What is `[2, 4, 6].map(x => x / 2)[1]`?

- A. 3
- B. 4
- C. 2
- D. 1

**Answer:** C. Mapping produces [1,2,3]; zero-based index 1 selects 2.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS06 — JavaScript comparison

What is the result of `5 === "5"` in JavaScript?

- A. true
- B. A syntax error
- C. The string "true"
- D. false

**Answer:** D. Strict equality does not coerce the string to a number.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS07 — HTTP semantics

An API cannot find a resource at a valid resource URL. Which status most directly represents this?

- A. 204
- B. 301
- C. 404
- D. 201

**Answer:** C. 404 denotes that the target resource was not found.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS08 — Git workflow

Which Git operation records staged changes as a local history entry?

- A. fetch
- B. clone
- C. commit
- D. status

**Answer:** C. A commit records a snapshot; fetching retrieves remote history.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS28 — CORS

What does a browser CORS policy primarily control?

- A. Whether the server uses SQL
- B. Whether any non-browser client may send a request
- C. Whether browser JavaScript may read certain cross-origin responses
- D. Whether a user is authorized for a database row

**Answer:** C. CORS is a browser enforcement mechanism and does not replace application authorization.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS45 — Cookie scope

What does HttpOnly on a session cookie accomplish?

- A. It prevents the browser from sending the cookie on requests
- B. It prevents ordinary JavaScript access to that cookie, but does not by itself prevent CSRF
- C. It encrypts the database
- D. It guarantees all application input is safe from XSS

**Answer:** B. HttpOnly limits script access; cookie sending and request authorization are separate issues.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS51 — JavaScript scheduling

In a browser, run `console.log('A'); Promise.resolve().then(()=>console.log('B')); console.log('C');`. What is the order?

- A. A, B, C
- B. C, B, A
- C. B, A, C
- D. A, C, B

**Answer:** D. Synchronous code finishes before the queued promise reaction runs.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X01 — Semantic forms

A form has a Save button. Which markup lets Enter submit the form without a custom keyboard listener?

- A. <button type="submit">Save</button>
- B. <span onclick="save()">Save</span>
- C. <div role="button">Save</div>
- D. <a href="#">Save</a>

**Answer:** A. The native submit button participates in form submission and keyboard behavior.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X02 — CSS specificity

For one element, `#panel .item` and `.item.active` set different colors. Which selector wins if both rules are applicable and no important rule exists?

- A. #panel .item because the ID dominates
- B. The later declaration always wins
- C. Neither selector can match the same element
- D. .item.active because it has two classes

**Answer:** A. An ID contributes more specificity than any number of class selectors in this comparison.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X03 — JavaScript closure

What does `let n=0; const next=()=>++n; next(); next();` return from the second `next()` call?

- A. 2
- B. undefined
- C. 0
- D. 1

**Answer:** A. The closure retains n; the first call makes it 1 and the second makes it 2.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X04 — HTTP caching

A browser sends `If-None-Match` with an ETag and the representation is unchanged. Which response is appropriate?

- A. 500 because validators are unsupported
- B. 200 with an unrelated body
- C. 304 without a representation body
- D. 404 because the resource is cached

**Answer:** C. A matching conditional request can return 304, allowing the client to reuse the cached representation.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X05 — CORS behavior

A frontend at origin A reads an API at origin B. The browser blocks the response even though the server returned 200. What should be inspected first?

- A. The HTML title
- B. The server CORS response headers for origin A
- C. The CSS bundle size
- D. The database primary key

**Answer:** B. Cross-origin read permission is conveyed by the server CORS headers; an HTTP 200 alone does not grant it.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

### FULL_STACK_WEB_DEV-X06 — Git conflict resolution

Two branches change the same line. What is the safe outcome before merging the conflict resolution?

- A. Delete both changes automatically
- B. Choose one side without running tests
- C. Resolve the intended logic and test the combined result
- D. Force push the target branch immediately

**Answer:** C. A conflict requires deciding the combined behavior, then verifying it with tests.

Source: [WEB: MDN Curriculum core modules](https://developer.mozilla.org/en-US/curriculum/core/)

## Java programming and testing

Focus: Java methods, Java integer division, Java array indexing, Null handling, Value equality, Hash contracts, Collection choice, Exception boundaries, Generic types, Streams and side effects, Immutability, Unit test boundaries, Algorithm complexity, Race conditions, Java records

Roadmap resource: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191) (Curated academic or industry source).

### FS09 — Java methods

A Java method is declared `int add(int a, int b)`. Which return statement matches that signature?

- A. `return "a+b";`
- B. `return;`
- C. `return true;`
- D. `return a + b;`

**Answer:** D. The declared return type is int.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FULL_STACK_WEB_DEV-X07 — Java integer division

What is the value of `7 / 2` when both operands have Java type `int`?

- A. 3.5
- B. 4
- C. Compilation error
- D. 3

**Answer:** D. Integer division truncates toward zero, so 7 divided by 2 is 3.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X08 — Java array indexing

An array has length 5. Which index is the last valid element?

- A. 5
- B. 6
- C. 3
- D. 4

**Answer:** D. Java array indices start at zero, so the last index is length minus one.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X09 — Null handling

A method promises a non-null result but may find no user. Which API makes absence explicit to callers?

- A. Catch `NullPointerException` in every caller
- B. Return a random User
- C. Return null without documentation
- D. Return `Optional<User>` and handle the empty case

**Answer:** D. Optional expresses that absence is possible and encourages an explicit branch.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X10 — Value equality

Two distinct `String` objects contain the same text. Which comparison checks equal content?

- A. `a.compareTo(b) == 1`
- B. `a == b`
- C. `a.equals(b)`
- D. `a = b`

**Answer:** C. String.equals compares content; == compares object identity.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X11 — Hash contracts

A mutable field used in `hashCode()` changes after an object is inserted in a HashSet. What can happen?

- A. Lookup may fail because the object is in the old bucket
- B. The set automatically rehashes every mutation
- C. Java forbids the mutation at compile time
- D. The set converts the object to a String

**Answer:** A. HashSet relies on the hash observed at insertion; changing that value can make lookup miss the stored object.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X12 — Collection choice

You repeatedly append and iterate 100,000 items but rarely remove from the front. Which default Java collection is suitable?

- A. TreeSet
- B. PriorityQueue
- C. HashMap
- D. ArrayList

**Answer:** D. ArrayList supports append and sequential iteration efficiently for this workload.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X13 — Exception boundaries

A service can recover from one malformed input record. Where should the exception be handled?

- A. Only by a top-level catch that discards all input
- B. Inside `finally` without logging
- C. By turning off exception handling
- D. At the record-processing boundary, with the error recorded

**Answer:** D. Handling at the recoverable record boundary allows processing to continue and preserves diagnostic information.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X14 — Generic types

Why use `List<String>` instead of raw `List` for text values?

- A. It makes all operations constant time
- B. It converts every item to an integer
- C. It stores values on the GPU
- D. It enables compile-time element type checking

**Answer:** D. Generics catch incompatible element types at compile time and reduce casts.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X15 — Streams and side effects

A stream pipeline uses `map` to update shared mutable state in parallel. What is the principal risk?

- A. Map changes the source language
- B. Shared mutation can race and produce nondeterministic results
- C. Map always sorts the output
- D. Parallel streams forbid lambdas

**Answer:** B. Concurrent side effects on unsynchronized shared state can race; pure transformations are safer.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X16 — Immutability

Which choice best protects an object from callers modifying its internal list?

- A. Return the mutable field directly
- B. Return `List.copyOf(field)` or an unmodifiable copy
- C. Make the field name uppercase
- D. Use a public array instead

**Answer:** B. An immutable copy prevents callers from mutating the held state through the returned reference.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X17 — Unit test boundaries

A parser accepts an integer in 1–100 inclusive. Which test set targets both boundaries and one invalid value on each side?

- A. 1, 100, 0, 101
- B. 25, 50, 75, 80
- C. Only 1
- D. Only 101

**Answer:** A. The set exercises both inclusive endpoints and the nearest out-of-range values.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X18 — Algorithm complexity

A loop scans every item in an array of n elements once. What is its time complexity?

- A. O(log n)
- B. O(n)
- C. O(n²)
- D. O(1)

**Answer:** B. One constant amount of work per item yields linear time.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X19 — Race conditions

Two threads increment a shared `int` without synchronization. What can go wrong?

- A. Both threads always observe the final value
- B. The compiler rejects the program
- C. A lost update because read-modify-write is not atomic
- D. The integer is automatically transactional

**Answer:** C. Each increment reads, modifies and writes; interleaving can overwrite another thread’s result.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

### FULL_STACK_WEB_DEV-X20 — Java records

Which use best fits a Java record?

- A. A thread that owns shared locks
- B. A small immutable data carrier with value semantics
- C. A mutable database connection pool
- D. A class requiring inheritance from another class

**Answer:** B. Records are suitable for concise data carriers with generated accessors and value-based equality.

Source: [JAVA: Programming in Java](https://nptel.ac.in/courses/106105191)

## Relational and document data

Focus: SQL joins, Uniqueness, Document modeling, Indexes, Pagination, Keyset pagination, Join cardinality, NULL comparison, Unique constraints, Index selectivity, Pagination consistency, Document boundaries, Transactions, Query plans, Normalization

Roadmap resource: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/) (Curated academic or industry source).

### FS16 — SQL joins

Customers has 3 rows. Exactly one customer has 2 matching orders; the others have none. How many rows does an unfiltered LEFT JOIN from customers to orders return?

- A. 4
- B. 6
- C. 3
- D. 2

**Answer:** A. The matched customer contributes two rows and each unmatched customer one.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS17 — Uniqueness

Two concurrent registrations try to use the same normalized username. What should enforce uniqueness reliably?

- A. A pre-insert SELECT without a constraint
- B. A database unique constraint/index, with conflict handling
- C. A browser-only existence check
- D. Sorting usernames after inserting them

**Answer:** B. Concurrent checks can both pass; a database constraint arbitrates the race.

Source: [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS18 — Document modeling

An address is small, belongs only to one user, and is almost always read with that user. What is a reasonable MongoDB starting model?

- A. Create a separate database per street
- B. Store only a screenshot of the address
- C. Duplicate the entire users collection per address
- D. Embed the address in the user document

**Answer:** D. Embedding can match the access pattern and keep related writes within one document.

Source: [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS19 — Indexes

Why can adding many indexes slow writes?

- A. Indexes eliminate every disk write
- B. All indexes are necessarily copied to the browser
- C. Indexes turn all writes into reads
- D. Writes must maintain the affected index structures

**Answer:** D. Indexes trade storage and write maintenance for faster supported lookups.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS27 — Pagination

Why should pagination over a mutable dataset use a deterministic ordering with a tie-breaker?

- A. To remove the need for authorization
- B. To guarantee a fixed dataset snapshot forever
- C. To make all database writes atomic
- D. To make page boundaries well-defined when primary sort values tie

**Answer:** D. Without a complete ordering, rows with equal sort values can appear inconsistently.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FS49 — Keyset pagination

Rows are ordered by `(created_at,id)` ascending. The last row on a page is `(t,k)`. Which next-page condition matches that order?

- A. `created_at > t OR (created_at = t AND id > k)`
- B. `id < k` regardless of time
- C. `created_at < t`
- D. `created_at >= t` without an ID condition

**Answer:** A. The lexicographic boundary uses both sort keys and excludes the previous final row.

Source: [AC: AICTE CSE model curriculum (2022)](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### FULL_STACK_WEB_DEV-X21 — Join cardinality

A customer has 3 orders and 2 support tickets. Joining both one-to-many tables to customers without aggregation yields how many rows for that customer?

- A. 6
- B. 2
- C. 3
- D. 5

**Answer:** A. The two child collections multiply: 3 orders × 2 tickets = 6 joined rows.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X22 — NULL comparison

In SQL, what does `column = NULL` return for a NULL value in a WHERE condition?

- A. TRUE
- B. FALSE
- C. UNKNOWN
- D. A syntax error in every SQL database

**Answer:** C. Comparisons with NULL yield UNKNOWN; use IS NULL to test for missing values.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X23 — Unique constraints

Two concurrent requests try to register the same email. What enforces uniqueness reliably?

- A. A database unique constraint with conflict handling
- B. A delay between requests
- C. A CSS validation message
- D. A frontend availability check only

**Answer:** A. A database unique constraint is enforced despite concurrent requests; client checks alone race.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X24 — Index selectivity

A query filters on customer_id and orders by created_at. Which B-tree index often supports both?

- A. An index only on description
- B. No index can support ordering
- C. (customer_id, created_at)
- D. (created_at, customer_id) for every possible query

**Answer:** C. A composite index beginning with the equality filter and continuing with the order key can support both operations.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X25 — Pagination consistency

Rows are inserted while a user pages through a changing result set. Which method more reliably avoids shifting offsets?

- A. Random ordering
- B. Sort only in the browser
- C. Keyset pagination with a stable sort key
- D. Increase OFFSET on every query

**Answer:** C. A cursor on a stable ordering key avoids offset drift from earlier inserts.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X26 — Document boundaries

A MongoDB document grows unbounded because every event is embedded in it. What is a better model?

- A. Put the events in the CSS
- B. Embed every future event anyway
- C. Store an independently queried event collection with a reference
- D. Disable document size checks

**Answer:** C. An unbounded event history is better separated from the parent document and queried by reference or key.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X27 — Transactions

An account transfer updates two balances. What property must hold if one update fails?

- A. Both balances change or neither does
- B. Only the sender balance changes
- C. Only the receiver balance changes
- D. The frontend silently retries forever

**Answer:** A. Atomicity preserves the transfer invariant by committing both changes or rolling them back.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X28 — Query plans

A database query slows as the table grows. Which evidence best identifies whether an index is used?

- A. The button color
- B. The JavaScript minifier output
- C. The server hostname
- D. An EXPLAIN/EXPLAIN ANALYZE plan

**Answer:** D. A query plan shows access paths and can reveal scans, index usage and row estimates.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

### FULL_STACK_WEB_DEV-X29 — Normalization

An order table repeats a customer address on every order and the address changes. What anomaly is likely?

- A. Automatic deduplication by SQL
- B. Loss of primary keys
- C. A browser CORS error
- D. Inconsistent copies unless updates reach every row

**Answer:** D. Repeated mutable facts create update anomalies when only some rows are changed.

Source: [SQL: CS50 Introduction to Databases with SQL](https://cs50.harvard.edu/sql/)

## React application behavior

Focus: React identity, React state, React update queue, Asynchronous UI, Frontend hydration, React state updater, Functional updater, Stable list keys, Effect dependencies, Async request race, Controlled input, Derived state, Error boundaries, Accessibility labels, Memoization

Roadmap resource: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) (Curated academic or industry source).

### FS11 — React identity

For a reorderable list of records, which React key is most suitable?

- A. The same constant for every row
- B. A new random number on each render
- C. A stable unique record ID
- D. The current array position regardless of reordering

**Answer:** C. Stable identity lets React preserve the intended component state during reordering.

Source: [F10: React list identity and keys](https://react.dev/learn/rendering-lists)

### FS12 — React state

Why should a React array state update normally create a new array instead of mutating the existing one?

- A. To provide a new state reference and preserve predictable updates
- B. To prevent HTTP caching automatically
- C. To make every render synchronous
- D. To force a database transaction

**Answer:** A. State should be treated as immutable; new values make changes explicit.

Source: [F2: React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

### FS36 — React update queue

A handler sees count=0 and calls `setCount(count+1); setCount(c=>c+1); setCount(c=>c+1);`. With normal React queue processing, what is the next count?

- A. 2
- B. 1
- C. 3
- D. 4

**Answer:** C. The queued replacement sets 1; the two functional updates produce 2 and 3.

Source: [F2: React state update queues](https://react.dev/learn/queueing-a-series-of-state-updates)

### FS37 — Asynchronous UI

A search request for "cat" starts before "cats" but finishes afterward and overwrites the newer results. Which fix directly prevents stale results from committing?

- A. Always display whichever response arrives last
- B. Increase the loading-spinner duration
- C. Store the response in a global variable without a key
- D. Check a request sequence/key before committing, and optionally abort obsolete requests

**Answer:** D. Only the response corresponding to the current query should update the visible result.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS56 — Frontend hydration

A server-rendered component inserts the current time, and its first client render computes a different time. What is a likely cause of hydration mismatch?

- A. The timestamp format is valid JavaScript, so differing output cannot cause a mismatch
- B. The server and first client render produce different initial markup
- C. Using a unique list key guarantees identical server and client text
- D. React always executes the first client render after copying all server state automatically

**Answer:** B. Hydration expects compatible initial output; transfer stable initial data or defer client-only values appropriately.

Source: [F11: React hydration requirements](https://react.dev/reference/react-dom/client/hydrateRoot)

### FULL_STACK_WEB_DEV-X30 — React state updater

A handler calls `setN(n+1)` twice using the same rendered n. What state change usually results after batching?

- A. Set to zero
- B. Throw a syntax error
- C. Increase by one
- D. Increase by two

**Answer:** C. Both updates use the same captured n; functional updaters would compose two increments.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X31 — Functional updater

Which form correctly increments a React counter twice in one handler?

- A. `setN(2)` for every starting value
- B. `setN(n+1); setN(n+1)`
- C. `setN(x=>x+1); setN(x=>x+1)`
- D. `n++; n++` without setN

**Answer:** C. Each functional updater receives the pending state produced by the previous updater.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X32 — Stable list keys

A list is reordered, but each row uses its array index as its React key. What can happen?

- A. Local row state follows the wrong item
- B. React sorts the list automatically
- C. The database becomes corrupted
- D. The page cannot compile

**Answer:** A. Index keys identify positions, so reused component state may attach to a different item after reordering.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X33 — Effect dependencies

An effect reads `userId` but its dependency array is empty. Which bug is likely when userId changes?

- A. The effect keeps using a stale value
- B. React automatically fetches the new user
- C. The component loses its CSS
- D. The browser clears localStorage

**Answer:** A. The effect does not rerun for the changed userId when the dependency is omitted.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X34 — Async request race

A user selects A then B; A’s slower fetch resolves last and overwrites B’s view. What prevents stale data from winning?

- A. Add more CSS transitions
- B. Remove error handling
- C. Increase the number of radio buttons
- D. Abort or identify outdated requests before updating state

**Answer:** D. Canceling the stale request or checking its identity ensures only the current selection updates the view.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X35 — Controlled input

Which React pattern makes the displayed input value follow component state?

- A. A CSS variable only
- B. A backend cookie only
- C. `value={name}` with `onChange` updating name
- D. A fixed value with no onChange

**Answer:** C. A controlled input reads its value from state and updates that state on change.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X36 — Derived state

A component stores filteredItems separately from items and filter and sometimes shows stale results. Which design is simplest?

- A. Store filteredItems in CSS
- B. Compute filteredItems from items and filter during render or memoization
- C. Add another independent copy of filteredItems
- D. Force a page reload after every change

**Answer:** B. Derived data computed from its inputs avoids synchronization between redundant state values.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X37 — Error boundaries

What can a React error boundary catch?

- A. Every event handler exception without handling
- B. Render errors in descendants
- C. All asynchronous request failures automatically
- D. All server database failures

**Answer:** B. Error boundaries cover rendering and lifecycle failures in their descendant tree, not every async or server error.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X38 — Accessibility labels

A text field has only placeholder text and no label. What is the robust fix?

- A. Associate a visible label with the input
- B. Use a darker placeholder only
- C. Remove the input name
- D. Add another wrapper div

**Answer:** A. A programmatically associated label provides an accessible name and remains visible when a value is entered.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X39 — Memoization

A costly calculation depends on data and threshold. Which dependency list keeps a memoized result current?

- A. []
- B. [data] only
- C. [threshold] only
- D. [data, threshold]

**Answer:** D. Both changing inputs must be dependencies; otherwise the memoized calculation can become stale.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

## Spring API engineering

Focus: Spring dependency injection, Input validation, Integration testing, API compatibility, Spring proxy boundary, REST validation, Service boundaries, Dependency injection, Idempotent PUT, Pagination input, Global exception handler, Authentication boundary, Integration test, Transaction propagation

Roadmap resource: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot) (Curated academic or industry source).

### FS13 — Spring dependency injection

What is a main benefit of constructor injection for a service's dependency?

- A. It eliminates every runtime error
- B. It bypasses authorization checks
- C. It automatically makes every operation transactional
- D. The required dependency is explicit and can be substituted in tests

**Answer:** D. Constructor injection expresses required collaborators and aids isolated testing.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS14 — Input validation

A form checks that quantity is positive in JavaScript. What should the API do?

- A. Validate quantity independently before accepting it
- B. Validate only the button's label
- C. Accept any number if the request uses HTTPS
- D. Trust the check because it ran in a browser

**Answer:** A. Requests can bypass client validation; HTTPS does not establish business validity.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS24 — Integration testing

Which test best checks that an API persists an order and returns its stored ID correctly?

- A. A request through the API against an isolated test database, followed by checking persisted data
- B. A screenshot of the endpoint name
- C. A unit test of string concatenation alone
- D. A test that asserts a hard-coded ID without a request

**Answer:** A. This exercises the relevant HTTP, service, and persistence boundary.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS32 — API compatibility

Which change is most likely to break clients that depend on an existing response field?

- A. Removing or changing the meaning of a required field
- B. Adding an optional field clients may ignore
- C. Improving internal query performance
- D. Adding server-side logging without changing responses

**Answer:** A. Existing clients may require the field's presence and semantics.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS38 — Spring proxy boundary

In default Spring proxy-based transaction management, a nontransactional method calls another method on `this` marked `@Transactional`. Why might no new transaction begin?

- A. The internal call bypasses the transactional proxy
- B. The annotation starts a transaction only after the called method returns
- C. Self-invocation starts a transaction only when the method is public
- D. The transaction always begins, but commits before the first statement

**Answer:** A. Default proxy advice intercepts calls through the proxy; self-invocation bypasses that boundary.

Source: [F4: Spring declarative transactions](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)

### FULL_STACK_WEB_DEV-X40 — REST validation

A POST request omits a required field. Which response fits a validation failure?

- A. A 5xx response for every user error
- B. No response
- C. A 4xx response with field-level details
- D. A 2xx response with an invalid record

**Answer:** C. Invalid client input should be rejected with a client-error status and useful validation details.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X41 — Service boundaries

A controller repeats business rules in three endpoints. Where should the shared rule normally live?

- A. In three copied controllers only
- B. Inside a browser extension
- C. A tested service/domain component
- D. In CSS

**Answer:** C. Shared business logic belongs in a reusable tested component rather than repeated HTTP handlers.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X42 — Dependency injection

A Spring service creates a repository with `new` internally. Why can constructor injection improve tests?

- A. It changes HTTP to UDP
- B. Tests can supply a controlled repository dependency
- C. It makes SQL unnecessary
- D. It disables the JVM

**Answer:** B. Constructor injection exposes dependencies and allows tests to provide fakes or mocks.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X43 — Idempotent PUT

A client repeats an identical PUT to a resource. What outcome best matches HTTP idempotence?

- A. The intended resource state is the same as after one PUT
- B. A second unrelated resource is created
- C. The server must return 500
- D. The resource is deleted

**Answer:** A. Idempotence concerns the final intended resource state after repeated identical requests.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X44 — API compatibility

A response removes a field required by older deployed clients. What is the risk?

- A. No risk because JSON is text
- B. Only CSS changes
- C. The database automatically supplies the field
- D. Older clients can fail even if the new server builds

**Answer:** D. A breaking contract change can cause existing clients to fail at runtime.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X45 — Pagination input

An API accepts `limit=-1` and passes it to a database query. What should the boundary do?

- A. Trust all query parameters
- B. Turn the number into a CSS value
- C. Always fetch every row
- D. Validate a positive bounded limit

**Answer:** D. Bound and validate request parameters to protect behavior and resource use.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X46 — Global exception handler

An unexpected backend exception is returned with a full stack trace and secret configuration. What should change?

- A. Silence all logging
- B. Return 200 and the exception
- C. Return a safe error body and log details internally
- D. Expose more stack frames

**Answer:** C. Clients need a stable safe error while detailed diagnostics belong in protected logs.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X47 — Authentication boundary

Which component must verify a bearer token before serving protected data?

- A. A README file
- B. The backend request authorization layer
- C. Only the button visibility in React
- D. The browser font loader

**Answer:** B. The backend must verify credentials and enforce access for every protected request.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X48 — Integration test

Which test best verifies a Spring endpoint’s JSON status, validation and persistence interaction?

- A. A test sending an HTTP request through the application layer
- B. A CSS snapshot only
- C. A unit test of a string concatenation helper only
- D. A screenshot of the home page

**Answer:** A. An endpoint integration test exercises routing, validation, serialization and persistence wiring.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

### FULL_STACK_WEB_DEV-X49 — Transaction propagation

A transactional method calls another method on the same Spring bean through `this`. Why might advice not run on the inner method?

- A. The internal call can bypass the Spring proxy
- B. The JVM always disallows method calls
- C. JSON cannot represent a transaction
- D. HTTP has no methods

**Answer:** A. Proxy-based transaction advice is applied through the proxy; self-invocation can bypass it.

Source: [SPRING: Building a REST API with Spring Boot](https://spring.academy/courses/building-a-rest-api-with-spring-boot)

## Application security and accessibility

Focus: Web architecture, Authentication and authorization, SQL injection, CSRF, Secrets, Object authorization, Tenant isolation, Accessible interaction, Security testing, SQL parameters, Password storage, CSRF defense, Secret handling, XSS prevention

Roadmap resource: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths) (Curated academic or industry source).

### FS04 — Web architecture

In a conventional web application, which component must enforce access to a private database record?

- A. Only the CSS stylesheet
- B. Only the browser's hidden menu
- C. The server handling the request
- D. Only the user's cached page

**Answer:** C. Clients can be modified; the trusted server must authorize the operation.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS21 — Authentication and authorization

A user is successfully signed in. What additional question does authorization answer?

- A. Which browser font is installed?
- B. Was the password typed with a keyboard?
- C. Is the response compressed?
- D. May this user perform this operation on this resource?

**Answer:** D. Identity alone does not grant permission to every resource.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS22 — SQL injection

Which method best separates SQL values from SQL syntax?

- A. Parameterized queries with bound values
- B. Concatenating input after removing spaces
- C. Renaming the database table
- D. Encrypting the connection but concatenating input

**Answer:** A. Parameters are handled as data instead of being parsed as query structure.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS23 — CSRF

A browser automatically sends a session cookie on requests. Which defense directly addresses unauthorized cross-site state-changing submissions?

- A. Changing POST to GET
- B. Allowing every Origin header
- C. Hiding the submit button
- D. An appropriate CSRF-token mechanism with server validation

**Answer:** D. A validated token ties the request to the intended interaction; cookie and origin policies provide additional defenses.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS34 — Secrets

Where should a database password used by a server normally be supplied?

- A. In a public React bundle
- B. In a CSS custom property
- C. Through restricted server-side secret configuration
- D. In a public source-code example with the real value

**Answer:** C. Browser assets are visible to users; credentials belong in controlled server configuration.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS43 — Object authorization

A signed-in user changes `/orders/41` to `/orders/42` and sees another customer's order. Which missing control is most direct?

- A. Enforce ownership only in the React route guard
- B. Replace sequential IDs with UUIDs and treat unguessability as the access check
- C. Check only that the session is valid before loading any order
- D. Server-side authorization for the specific order on every relevant operation

**Answer:** D. Authentication does not establish ownership or permitted access to a particular object.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS44 — Tenant isolation

An application caches documents by document ID, but IDs are only unique within a tenant. What is required to prevent cross-tenant cache collisions?

- A. Include tenant identity in the cache key and authorize access
- B. Use a global cache entry and filter only the displayed title
- C. Key by document ID alone and shorten the TTL to one second
- D. Authorize the database read but serve cache hits without tenant checks

**Answer:** A. The cache key must represent the full resource identity; authorization remains necessary.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FS52 — Accessible interaction

A dialog opens visually but keyboard focus remains behind it. Which change directly improves keyboard usability?

- A. Move focus appropriately into the dialog, manage focus while open, and restore it on close
- B. Remove all focus indicators
- C. Only change its background color
- D. Only increase its z-index

**Answer:** A. Visual stacking alone does not manage keyboard interaction or focus location.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS53 — Security testing

An authorization test passes for GET but DELETE has no ownership check. What is the correct test/design response?

- A. Assume GET authorization covers DELETE automatically
- B. Hide DELETE in the UI and remove server tests
- C. Check authorization for every relevant operation and include cross-user negative tests
- D. Make IDs sequential so users can predict permissions

**Answer:** C. Permissions must be enforced on each protected operation, including mutation paths.

Source: [F6: OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

### FULL_STACK_WEB_DEV-X50 — Object authorization

User A changes an object ID in the URL and can read user B’s record. What check is missing?

- A. A prettier URL
- B. A larger CSS bundle
- C. A shorter database name
- D. Authorization on the requested record for the current user

**Answer:** D. Authentication identifies the user; object-level authorization must also check ownership or permission.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

### FULL_STACK_WEB_DEV-X51 — SQL parameters

An API concatenates user input into a SQL WHERE clause. Which fix directly addresses injection?

- A. Use a faster server
- B. Remove all database indexes
- C. Use bound parameters or prepared statements
- D. Escape only spaces in the browser

**Answer:** C. Bound parameters keep input separate from SQL structure.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

### FULL_STACK_WEB_DEV-X52 — Password storage

Which storage design is appropriate for user passwords?

- A. The password in a client cookie
- B. A salted password hashing algorithm designed for passwords
- C. Plaintext in a private table
- D. A reversible encoding such as Base64

**Answer:** B. Password hashes with per-user salts and an appropriate slow algorithm limit the impact of database exposure.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

### FULL_STACK_WEB_DEV-X53 — CSRF defense

A session cookie authenticates state-changing browser requests. Which defense is relevant?

- A. Disable server logging
- B. An anti-CSRF token or appropriate same-site strategy
- C. Rename the submit button
- D. Use only client-side validation

**Answer:** B. Cookie-authenticated state changes need a CSRF defense because browsers attach cookies automatically.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

### FULL_STACK_WEB_DEV-X54 — Secret handling

A production API key appears in a public frontend bundle. What is the correct response?

- A. Rotate the exposed key and move secret use to a protected backend
- B. Hide the key in a CSS comment
- C. Rename the key variable
- D. Add a warning to the README only

**Answer:** A. Public bundles are readable by users; an exposed key must be rotated and used in a protected server context.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

### FULL_STACK_WEB_DEV-X55 — XSS prevention

An application displays user-supplied text as HTML without sanitization. What can happen?

- A. The database automatically gains a unique index
- B. The browser switches to HTTP/3
- C. The server recompiles Java
- D. Injected script can execute in another user’s browser

**Answer:** D. Unsafe HTML injection can turn user-controlled markup into active content in a victim browser.

Source: [SEC: Web Security Academy learning paths](https://portswigger.net/web-security/learning-paths)

## Delivery, performance and operation

Focus: Caching, Rate limiting, Observability, Deployment, Sensitive caching, Conditional updates, N+1 queries, Database migration, Timeout diagnosis, Release validation, Latency percentile, Cache invalidation, Load test isolation, Deployment rollback

Roadmap resource: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/) (Curated academic or industry source).

### FS26 — Caching

What does an ETag help a client do?

- A. Encrypt every response body
- B. Authenticate the user's password
- C. Validate whether its cached representation still matches the server version
- D. Guarantee that a resource never changes

**Answer:** C. Conditional requests can compare an ETag to avoid transferring an unchanged representation.

Source: [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS29 — Rate limiting

An API returns 429 and a Retry-After value. What should a cooperative client do?

- A. Immediately launch unlimited parallel retries
- B. Respect the delay and retry within a bounded policy
- C. Delete its authentication token automatically
- D. Treat the response as a successful write

**Answer:** B. 429 indicates rate limiting; bounded retries avoid worsening overload.

Source: [F1: MDN core web curriculum](https://developer.mozilla.org/en-US/curriculum/core/)

### FS31 — Observability

Which identifier most directly helps connect logs from several services handling one request?

- A. A random ID regenerated at every log statement
- B. The developer's editor theme
- C. The CSS class of the loading spinner
- D. A propagated trace/correlation ID

**Answer:** D. Propagated context connects the request's work across service boundaries.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS33 — Deployment

Why test a deployment's rollback procedure before an incident?

- A. To make every migration reversible automatically
- B. To guarantee the absence of all future failures
- C. To confirm that a previous compatible version can be restored under realistic conditions
- D. To remove all need for backups

**Answer:** C. Rollback can fail due to dependencies and data changes; practice reveals these constraints.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FS46 — Sensitive caching

An account response must not be stored by HTTP caches. Which directive most directly expresses that requirement?

- A. `Cache-Control: public, max-age=86400`
- B. `Cache-Control: no-store`
- C. `ETag` alone prohibits caching
- D. `Cache-Control: no-cache` alone guarantees no storage

**Answer:** B. no-store prohibits storage; no-cache generally permits storage but requires validation before reuse.

Source: [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS47 — Conditional updates

An API uses ETags for lost-update prevention. A client's `If-Match` value no longer matches. Which response is most appropriate?

- A. 201 Created for every mismatch
- B. 412 Precondition Failed
- C. 200 with a silent overwrite
- D. 304 Not Modified for a successful mutation

**Answer:** B. A failed precondition means the client's assumed resource version is no longer current.

Source: [F7: MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### FS48 — N+1 queries

A page loads 100 orders with one query, then fetches each order's customer separately. Traces show 101 queries. What should be tested first?

- A. Batch/fetch the needed related data while controlling result size and pagination semantics
- B. Increase the connection pool until all 100 related lookups run in parallel, without changing the access pattern
- C. Replace the database driver while preserving the same per-row query loop
- D. Cache the page indefinitely and omit invalidation

**Answer:** A. The access pattern creates N+1 database calls; batching or appropriate fetching reduces round trips.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS54 — Database migration

Old and new application versions overlap during deployment. What migration approach best supports that overlap?

- A. Assume rollback automatically restores dropped data
- B. Add compatible schema first, migrate/backfill and switch usage, then remove obsolete fields later
- C. Change field meaning without version coordination
- D. Drop required old fields before deploying the new application

**Answer:** B. An expand–migrate–contract sequence supports a compatibility window.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS55 — Timeout diagnosis

An endpoint's database queries take 20 ms, but requests wait 2 s for a pooled connection. What should be investigated first?

- A. Increase the endpoint timeout and treat the latency objective as satisfied
- B. Connection-pool saturation, held connections, transaction duration, and downstream capacity
- C. Optimize only the 20 ms query and disregard the 2 s wait
- D. Increase the pool size without measuring database capacity or connection hold time

**Answer:** B. Observed latency is dominated by resource waiting rather than measured query execution.

Source: [F3: Spring guides](https://spring.io/guides/)

### FS57 — Release validation

A new endpoint passes unit tests but p95 latency doubles at realistic concurrency. Which evidence is needed before calling the change acceptable?

- A. Only code coverage percentage
- B. Representative load tests against latency/error targets and investigation of the regression
- C. Only the average latency at zero load
- D. Only a successful single-user screenshot

**Answer:** B. Functional tests do not establish behavior under realistic contention and load.

Source: [MS: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### FULL_STACK_WEB_DEV-X56 — Latency percentile

For 100 requests sorted by duration, what does the 95th percentile approximately describe?

- A. The maximum divided by 95
- B. The fraction of requests that failed
- C. A duration at or below which about 95 requests fall
- D. The mean of the slowest 95 requests

**Answer:** C. A p95 latency approximates the response time below which 95% of requests finish.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X57 — Cache invalidation

A product is updated, but its cached page continues to show the old price. Which remedy targets the stale data?

- A. Add more database rows
- B. Disable authentication
- C. Invalidate or version the cached representation on update
- D. Increase the font size

**Answer:** C. The cache must be invalidated, refreshed or keyed by a new version when underlying data changes.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X58 — Load test isolation

A load test reports slow responses while its own generator CPU is saturated. What should be checked before blaming the server?

- A. Only the database schema
- B. Whether the load generator is the bottleneck
- C. The logo color
- D. The number of README headings

**Answer:** B. The client generating load can cap throughput and distort measured server latency.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X59 — Rate limiting

An endpoint allows 120 requests per minute, evenly spread. What is the average allowed rate per second?

- A. 1
- B. 2
- C. 60
- D. 120

**Answer:** B. 120 requests divided by 60 seconds gives 2 requests per second on average.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

### FULL_STACK_WEB_DEV-X60 — Deployment rollback

A new release breaks a compatible API call. Which release practice supports a safe rollback?

- A. Overwrite all old artifacts
- B. Apply irreversible schema changes without staging
- C. Disable health checks
- D. Keep the previous deployable artifact and test schema compatibility

**Answer:** D. A retained prior artifact and compatible data changes make rollback possible.

Source: [FSO: Full Stack Open](https://fullstackopen.com/en/part0/general_info/)

## Concurrency and production consistency

Focus: Optimistic concurrency, Multi-document atomicity, Payment retries, Database and message consistency, Isolation and invariants, Optimistic locking, Idempotency keys, Transactional outbox, Isolation anomaly, Event ordering, Saga compensation, Retry backoff, Queue deduplication, Timeout budgets, Concurrent updates

Roadmap resource: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/) (Curated academic or industry source).

### FS39 — Optimistic concurrency

Two clients read MongoDB document version=7. Both update with filter `{_id:id, version:7}` and increment version atomically. After one succeeds, what should the other detect?

- A. Zero matched documents and a version conflict
- B. Deletion of the collection
- C. An automatic merge of arbitrary business changes
- D. A guaranteed second successful overwrite

**Answer:** A. The first update changes the version, so the second filter no longer matches.

Source: [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS40 — Multi-document atomicity

A MongoDB `updateMany` modifies 100 documents. Does single-document atomicity guarantee all 100 changes commit as one indivisible operation?

- A. Yes; identical update expressions guarantee collection-wide atomicity
- B. Yes; using majority write concern makes all affected documents indivisible
- C. No; use a supported transaction when the multi-document invariant requires it
- D. Yes; a single updateMany command makes all affected documents one atomic unit

**Answer:** C. Atomicity of each document does not make the whole multi-document operation atomic.

Source: [F5: MongoDB atomicity and transactions](https://www.mongodb.com/docs/manual/core/write-operations-atomicity/)

### FS41 — Payment retries

A client times out after submitting a payment and retries. Which design best prevents a duplicate business charge?

- A. Use a fresh random key on every retry
- B. Deduplicate only in the browser's memory
- C. Persist and enforce an idempotency key tied to the request and its result, with concurrency handling
- D. Assume a timeout proves that no charge occurred

**Answer:** C. A timeout leaves the outcome uncertain; durable server-side request identity enables safe retries.

Source: [F8: PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

### FS42 — Database and message consistency

A service must save an order and eventually publish its event. Which design addresses a crash between database commit and publication?

- A. Publish first and discard the order if persistence fails
- B. Save the order and outbox record in one database transaction, then publish with retry and consumer deduplication
- C. Commit the order and assume the next network call cannot fail
- D. Retry the whole workflow without any event identity

**Answer:** B. The outbox makes the intent to publish durable alongside the order; delivery can still repeat.

Source: [F9: Debezium transactional outbox](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)

### FS50 — Isolation and invariants

Two doctors each see the other on call and concurrently mark themselves off call under snapshot-style isolation. Row updates do not conflict. What issue must the design address?

- A. A duplicate-key conflict, solved solely by adding an index to each doctor ID
- B. Write skew across the shared invariant, using suitable serialization/locking and retry handling
- C. A lost update to the same physical row, solved solely by a version field on each changed row
- D. A dirty read, solved simply by preventing reads of uncommitted values

**Answer:** B. Nonconflicting row writes can still jointly violate an invariant spanning rows.

Source: [F8: PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)

### FULL_STACK_WEB_DEV-X61 — Optimistic locking

Two clients read version 7 and both edit a record. Which update prevents a silent lost update?

- A. Always overwrite with the last request
- B. Update without reading the version
- C. Use a CSS animation
- D. Update only if version is still 7, then increment it

**Answer:** D. A compare-and-swap update detects that another writer changed the record.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X62 — Idempotency keys

A payment request times out after the server may have charged the card. What makes a retry safer?

- A. Disable all responses
- B. Rely on browser back navigation
- C. Reuse an idempotency key for the same logical operation
- D. Generate a new transaction every retry

**Answer:** C. A stable idempotency key lets the server recognize a repeated logical payment and avoid charging twice.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X63 — Transactional outbox

A database row commits but publishing its event fails. What pattern preserves the intent to publish?

- A. Store event text only in CSS
- B. Write an outbox record in the same database transaction
- C. Send the event before validating the request
- D. Ignore the failure forever

**Answer:** B. The outbox row commits with the business change and can be published later.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X64 — Isolation anomaly

Two transactions both see zero active leases and each creates one despite a maximum of one. Which invariant is violated?

- A. At most one active lease
- B. That every lease has an ID
- C. That JSON is valid
- D. That HTTP is stateless

**Answer:** A. Concurrent check-then-insert operations can violate the shared at-most-one invariant without a suitable constraint or isolation.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X65 — Event ordering

An event consumer sees update version 9 after version 10. What should it do before replacing the current state?

- A. Reject or reconcile the stale version 9 event
- B. Always overwrite version 10
- C. Clear the whole database
- D. Assume network order equals logical order

**Answer:** A. A version check prevents an older event from rolling state backward.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X66 — Saga compensation

A multi-service booking reserves a seat but the payment step fails. What is a suitable compensation?

- A. Charge twice
- B. Delete the audit log
- C. Return success without a booking
- D. Release the seat reservation

**Answer:** D. A compensating action reverses the completed reservation when the larger workflow cannot finish.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X67 — Retry backoff

Ten clients retry a failing API at exactly the same fixed interval. What reduces synchronized retry spikes?

- A. Removing all timeouts
- B. Retrying all calls on every render
- C. Exponential backoff with jitter
- D. A shorter identical interval

**Answer:** C. Jitter spreads retries across time while backoff reduces pressure during failure.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X68 — Queue deduplication

A worker receives the same at-least-once message twice. What property should its handler have?

- A. Discard all messages
- B. Idempotent processing keyed by a stable message or operation ID
- C. Assume the second delivery is impossible
- D. Create two identical invoices

**Answer:** B. At-least-once delivery permits duplicates; stable deduplication or idempotent effects protect the operation.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X69 — Timeout budgets

A request has a 500 ms deadline and the first dependency uses 400 ms. Approximately how much time remains before accounting for overhead?

- A. 900 ms
- B. 100 ms
- C. 400 ms
- D. 500 ms

**Answer:** B. 500 minus 400 leaves 100 ms for remaining work, so downstream timeouts must fit within that budget.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

### FULL_STACK_WEB_DEV-X70 — Concurrent updates

A counter receives 100 independent increments. Which implementation best avoids lost updates?

- A. An atomic database increment operation
- B. Read then write without a condition
- C. A frontend variable shared across users
- D. A static HTML value

**Answer:** A. An atomic increment combines the change at the storage layer so concurrent writes do not overwrite one another.

Source: [DB: Intro to Database Systems, 15-445/645 Fall 2025](https://15445.courses.cs.cmu.edu/fall2025/)

## Self-assessment

### FS05 — Web practice

What evidence can you demonstrate of building a basic accessible web page?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently built a semantic page with responsive styling (50% of practice item)
- D. I also checked keyboard use, labels, and multiple viewport sizes and recorded fixes (100% of practice item)

### FS10 — Programming practice

What evidence can you demonstrate of writing and debugging JavaScript or Java code?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented functions and checked normal and edge cases (50% of practice item)
- D. I also maintained tests and can explain a diagnosed failure and its fix (100% of practice item)

### FS15 — UI/API practice

What evidence can you demonstrate of connecting a React interface to a backend API?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented loading, success, and error states (50% of practice item)
- D. I also tested stale responses, validation, and component behavior with reproducible steps (100% of practice item)

### FS20 — Persistence practice

What evidence can you demonstrate of designing and querying application data?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently built CRUD operations with a documented schema (50% of practice item)
- D. I also tested constraints, query behavior, and concurrent or invalid updates (100% of practice item)

### FS25 — Security practice

What evidence can you demonstrate of implementing and testing application permissions?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently implemented server-side authentication and resource permissions (50% of practice item)
- D. I also wrote negative cross-user tests and documented security assumptions (100% of practice item)

### FS30 — Performance practice

What evidence can you demonstrate of diagnosing a full-stack performance problem?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently measured a frontend or backend bottleneck and changed it (50% of practice item)
- D. I also compared before/after measurements under the same workload and checked regressions (100% of practice item)

### FS35 — Delivery practice

What evidence can you demonstrate of deploying a versioned web application?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I independently deployed an app with configuration and health checks (50% of practice item)
- D. I also exercised monitoring and a compatible rollback or recovery procedure (100% of practice item)

### FS58 — Capstone evidence

What evidence can you demonstrate of building an original end-to-end web application?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I have an original app with UI, API, persistence, and repeatable setup (50% of practice item)
- D. I also tested security, accessibility, failure behavior, and performance and enabled independent review (100% of practice item)

### FS59 — Engineering evidence

What evidence can you demonstrate of investigating a concurrency or reliability defect?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I reproduced a defect, identified its cause, and implemented a fix (50% of practice item)
- D. I also added a meaningful regression check and documented the remaining limits (100% of practice item)

### FS60 — Product evidence

What evidence can you demonstrate of validating a web workflow with users?

- A. I have not attempted this activity (0% of practice item)
- B. I have completed a guided example of this activity (25% of practice item)
- C. I observed users completing core tasks and recorded failures (50% of practice item)
- D. I also addressed accessibility/usability findings and checked the revised workflow with evidence (100% of practice item)

