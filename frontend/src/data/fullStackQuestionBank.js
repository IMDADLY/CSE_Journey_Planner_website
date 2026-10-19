// Full Stack Web Development Nested Competency Question Bank (FS01 - FS60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (FS36–FS60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['FS01', 'FS60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['FS06', 'FS60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['FS11', 'FS60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['FS16', 'FS60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['FS21', 'FS60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['FS26', 'FS60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['FS31', 'FS60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['FS36', 'FS60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    "1": "Web and programming basics",
    "2": "JavaScript, HTTP, and Git",
    "3": "React and server fundamentals",
    "4": "Persistence and API design",
    "5": "Security and testing",
    "6": "Performance and asynchronous systems",
    "7": "Operations and architecture",
    "8": "Advanced concurrency, security, debugging, and system design"
};

export const FULL_STACK_QUESTIONS = [
    {
        "id": "FS01",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Semantic HTML",
        "skillTag": "Semantic HTML",
        "weight": 2,
        "questionText": "Which HTML element is the appropriate default for an action that submits a form?",
        "options": [
            "`<div>` with only a click listener",
            "`<button type=\"submit\">`",
            "`<img>` with no alternative text",
            "`<span>` with blue text"
        ],
        "correctOptionIndex": 1,
        "explanation": "A native button provides form behavior and keyboard semantics.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS02",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CSS",
        "skillTag": "CSS",
        "weight": 2,
        "questionText": "Which selector targets elements with class `card`?",
        "options": [
            "`.card`",
            "`@card`",
            "`card()`",
            "`#card`"
        ],
        "correctOptionIndex": 0,
        "explanation": "A dot denotes a class selector; a hash denotes an ID.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS03",
        "tier": 1,
        "type": "competency",
        "tag": "THEORY",
        "topic": "JavaScript arrays",
        "skillTag": "JavaScript arrays",
        "weight": 2,
        "questionText": "What is `[2, 4, 6].map(x => x / 2)[1]`?",
        "options": [
            "3",
            "4",
            "2",
            "1"
        ],
        "correctOptionIndex": 2,
        "explanation": "Mapping produces [1,2,3]; zero-based index 1 selects 2.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS04",
        "tier": 1,
        "type": "competency",
        "tag": "ARCHITECTURE",
        "topic": "Web architecture",
        "skillTag": "Web architecture",
        "weight": 2,
        "questionText": "In a conventional web application, which component must enforce access to a private database record?",
        "options": [
            "Only the CSS stylesheet",
            "Only the browser's hidden menu",
            "The server handling the request",
            "Only the user's cached page"
        ],
        "correctOptionIndex": 2,
        "explanation": "Clients can be modified; the trusted server must authorize the operation.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS05",
        "tier": 1,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Web practice",
        "skillTag": "Web practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building a basic accessible web page?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently built a semantic page with responsive styling",
            "I also checked keyboard use, labels, and multiple viewport sizes and recorded fixes"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS06",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "JavaScript comparison",
        "skillTag": "JavaScript comparison",
        "weight": 2,
        "questionText": "What is the result of `5 === \"5\"` in JavaScript?",
        "options": [
            "true",
            "A syntax error",
            "The string \"true\"",
            "false"
        ],
        "correctOptionIndex": 3,
        "explanation": "Strict equality does not coerce the string to a number.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS07",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "HTTP semantics",
        "skillTag": "HTTP semantics",
        "weight": 2,
        "questionText": "An API cannot find a resource at a valid resource URL. Which status most directly represents this?",
        "options": [
            "204",
            "301",
            "404",
            "201"
        ],
        "correctOptionIndex": 2,
        "explanation": "404 denotes that the target resource was not found.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS08",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Git workflow",
        "skillTag": "Git workflow",
        "weight": 2,
        "questionText": "Which Git operation records staged changes as a local history entry?",
        "options": [
            "fetch",
            "clone",
            "commit",
            "status"
        ],
        "correctOptionIndex": 2,
        "explanation": "A commit records a snapshot; fetching retrieves remote history.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS09",
        "tier": 2,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Java methods",
        "skillTag": "Java methods",
        "weight": 2,
        "questionText": "A Java method is declared `int add(int a, int b)`. Which return statement matches that signature?",
        "options": [
            "`return \"a+b\";`",
            "`return;`",
            "`return true;`",
            "`return a + b;`"
        ],
        "correctOptionIndex": 3,
        "explanation": "The declared return type is int.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "FS10",
        "tier": 2,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Programming practice",
        "skillTag": "Programming practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of writing and debugging JavaScript or Java code?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented functions and checked normal and edge cases",
            "I also maintained tests and can explain a diagnosed failure and its fix"
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
        "id": "FS11",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "React identity",
        "skillTag": "React identity",
        "weight": 3,
        "questionText": "For a reorderable list of records, which React key is most suitable?",
        "options": [
            "The same constant for every row",
            "A new random number on each render",
            "A stable unique record ID",
            "The current array position regardless of reordering"
        ],
        "correctOptionIndex": 2,
        "explanation": "Stable identity lets React preserve the intended component state during reordering.",
        "reference": "F10: React list identity and keys"
    },
    {
        "id": "FS12",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "React state",
        "skillTag": "React state",
        "weight": 3,
        "questionText": "Why should a React array state update normally create a new array instead of mutating the existing one?",
        "options": [
            "To provide a new state reference and preserve predictable updates",
            "To prevent HTTP caching automatically",
            "To make every render synchronous",
            "To force a database transaction"
        ],
        "correctOptionIndex": 0,
        "explanation": "State should be treated as immutable; new values make changes explicit.",
        "reference": "F2: React state update queues"
    },
    {
        "id": "FS13",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Spring dependency injection",
        "skillTag": "Spring dependency injection",
        "weight": 3,
        "questionText": "What is a main benefit of constructor injection for a service's dependency?",
        "options": [
            "It eliminates every runtime error",
            "It bypasses authorization checks",
            "It automatically makes every operation transactional",
            "The required dependency is explicit and can be substituted in tests"
        ],
        "correctOptionIndex": 3,
        "explanation": "Constructor injection expresses required collaborators and aids isolated testing.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS14",
        "tier": 3,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Input validation",
        "skillTag": "Input validation",
        "weight": 3,
        "questionText": "A form checks that quantity is positive in JavaScript. What should the API do?",
        "options": [
            "Validate quantity independently before accepting it",
            "Validate only the button's label",
            "Accept any number if the request uses HTTPS",
            "Trust the check because it ran in a browser"
        ],
        "correctOptionIndex": 0,
        "explanation": "Requests can bypass client validation; HTTPS does not establish business validity.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS15",
        "tier": 3,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "UI/API practice",
        "skillTag": "UI/API practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of connecting a React interface to a backend API?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented loading, success, and error states",
            "I also tested stale responses, validation, and component behavior with reproducible steps"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F2: React state update queues"
    },
    {
        "id": "FS16",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "SQL joins",
        "skillTag": "SQL joins",
        "weight": 3,
        "questionText": "Customers has 3 rows. Exactly one customer has 2 matching orders; the others have none. How many rows does an unfiltered LEFT JOIN from customers to orders return?",
        "options": [
            "4",
            "6",
            "3",
            "2"
        ],
        "correctOptionIndex": 0,
        "explanation": "The matched customer contributes two rows and each unmatched customer one.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "FS17",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Uniqueness",
        "skillTag": "Uniqueness",
        "weight": 3,
        "questionText": "Two concurrent registrations try to use the same normalized username. What should enforce uniqueness reliably?",
        "options": [
            "A pre-insert SELECT without a constraint",
            "A database unique constraint/index, with conflict handling",
            "A browser-only existence check",
            "Sorting usernames after inserting them"
        ],
        "correctOptionIndex": 1,
        "explanation": "Concurrent checks can both pass; a database constraint arbitrates the race.",
        "reference": "F5: MongoDB atomicity and transactions"
    },
    {
        "id": "FS18",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Document modeling",
        "skillTag": "Document modeling",
        "weight": 3,
        "questionText": "An address is small, belongs only to one user, and is almost always read with that user. What is a reasonable MongoDB starting model?",
        "options": [
            "Create a separate database per street",
            "Store only a screenshot of the address",
            "Duplicate the entire users collection per address",
            "Embed the address in the user document"
        ],
        "correctOptionIndex": 3,
        "explanation": "Embedding can match the access pattern and keep related writes within one document.",
        "reference": "F5: MongoDB atomicity and transactions"
    },
    {
        "id": "FS19",
        "tier": 4,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Indexes",
        "skillTag": "Indexes",
        "weight": 3,
        "questionText": "Why can adding many indexes slow writes?",
        "options": [
            "Indexes eliminate every disk write",
            "All indexes are necessarily copied to the browser",
            "Indexes turn all writes into reads",
            "Writes must maintain the affected index structures"
        ],
        "correctOptionIndex": 3,
        "explanation": "Indexes trade storage and write maintenance for faster supported lookups.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "FS20",
        "tier": 4,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Persistence practice",
        "skillTag": "Persistence practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of designing and querying application data?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently built CRUD operations with a documented schema",
            "I also tested constraints, query behavior, and concurrent or invalid updates"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F5: MongoDB atomicity and transactions"
    },
    {
        "id": "FS21",
        "tier": 5,
        "type": "competency",
        "tag": "SECURITY",
        "topic": "Authentication and authorization",
        "skillTag": "Authentication and authorization",
        "weight": 3,
        "questionText": "A user is successfully signed in. What additional question does authorization answer?",
        "options": [
            "Which browser font is installed?",
            "Was the password typed with a keyboard?",
            "Is the response compressed?",
            "May this user perform this operation on this resource?"
        ],
        "correctOptionIndex": 3,
        "explanation": "Identity alone does not grant permission to every resource.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS22",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "SQL injection",
        "skillTag": "SQL injection",
        "weight": 3,
        "questionText": "Which method best separates SQL values from SQL syntax?",
        "options": [
            "Parameterized queries with bound values",
            "Concatenating input after removing spaces",
            "Renaming the database table",
            "Encrypting the connection but concatenating input"
        ],
        "correctOptionIndex": 0,
        "explanation": "Parameters are handled as data instead of being parsed as query structure.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS23",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CSRF",
        "skillTag": "CSRF",
        "weight": 3,
        "questionText": "A browser automatically sends a session cookie on requests. Which defense directly addresses unauthorized cross-site state-changing submissions?",
        "options": [
            "Changing POST to GET",
            "Allowing every Origin header",
            "Hiding the submit button",
            "An appropriate CSRF-token mechanism with server validation"
        ],
        "correctOptionIndex": 3,
        "explanation": "A validated token ties the request to the intended interaction; cookie and origin policies provide additional defenses.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS24",
        "tier": 5,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Integration testing",
        "skillTag": "Integration testing",
        "weight": 3,
        "questionText": "Which test best checks that an API persists an order and returns its stored ID correctly?",
        "options": [
            "A request through the API against an isolated test database, followed by checking persisted data",
            "A screenshot of the endpoint name",
            "A unit test of string concatenation alone",
            "A test that asserts a hard-coded ID without a request"
        ],
        "correctOptionIndex": 0,
        "explanation": "This exercises the relevant HTTP, service, and persistence boundary.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS25",
        "tier": 5,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Security practice",
        "skillTag": "Security practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of implementing and testing application permissions?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently implemented server-side authentication and resource permissions",
            "I also wrote negative cross-user tests and documented security assumptions"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS26",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Caching",
        "skillTag": "Caching",
        "weight": 3,
        "questionText": "What does an ETag help a client do?",
        "options": [
            "Encrypt every response body",
            "Authenticate the user's password",
            "Validate whether its cached representation still matches the server version",
            "Guarantee that a resource never changes"
        ],
        "correctOptionIndex": 2,
        "explanation": "Conditional requests can compare an ETag to avoid transferring an unchanged representation.",
        "reference": "F7: MDN HTTP caching"
    },
    {
        "id": "FS27",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Pagination",
        "skillTag": "Pagination",
        "weight": 3,
        "questionText": "Why should pagination over a mutable dataset use a deterministic ordering with a tie-breaker?",
        "options": [
            "To remove the need for authorization",
            "To guarantee a fixed dataset snapshot forever",
            "To make all database writes atomic",
            "To make page boundaries well-defined when primary sort values tie"
        ],
        "correctOptionIndex": 3,
        "explanation": "Without a complete ordering, rows with equal sort values can appear inconsistently.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "FS28",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "CORS",
        "skillTag": "CORS",
        "weight": 3,
        "questionText": "What does a browser CORS policy primarily control?",
        "options": [
            "Whether the server uses SQL",
            "Whether any non-browser client may send a request",
            "Whether browser JavaScript may read certain cross-origin responses",
            "Whether a user is authorized for a database row"
        ],
        "correctOptionIndex": 2,
        "explanation": "CORS is a browser enforcement mechanism and does not replace application authorization.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS29",
        "tier": 6,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Rate limiting",
        "skillTag": "Rate limiting",
        "weight": 3,
        "questionText": "An API returns 429 and a Retry-After value. What should a cooperative client do?",
        "options": [
            "Immediately launch unlimited parallel retries",
            "Respect the delay and retry within a bounded policy",
            "Delete its authentication token automatically",
            "Treat the response as a successful write"
        ],
        "correctOptionIndex": 1,
        "explanation": "429 indicates rate limiting; bounded retries avoid worsening overload.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS30",
        "tier": 6,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Performance practice",
        "skillTag": "Performance practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of diagnosing a full-stack performance problem?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently measured a frontend or backend bottleneck and changed it",
            "I also compared before/after measurements under the same workload and checked regressions"
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
        "id": "FS31",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Observability",
        "skillTag": "Observability",
        "weight": 4,
        "questionText": "Which identifier most directly helps connect logs from several services handling one request?",
        "options": [
            "A random ID regenerated at every log statement",
            "The developer's editor theme",
            "The CSS class of the loading spinner",
            "A propagated trace/correlation ID"
        ],
        "correctOptionIndex": 3,
        "explanation": "Propagated context connects the request's work across service boundaries.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS32",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "API compatibility",
        "skillTag": "API compatibility",
        "weight": 4,
        "questionText": "Which change is most likely to break clients that depend on an existing response field?",
        "options": [
            "Removing or changing the meaning of a required field",
            "Adding an optional field clients may ignore",
            "Improving internal query performance",
            "Adding server-side logging without changing responses"
        ],
        "correctOptionIndex": 0,
        "explanation": "Existing clients may require the field's presence and semantics.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS33",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Deployment",
        "skillTag": "Deployment",
        "weight": 4,
        "questionText": "Why test a deployment's rollback procedure before an incident?",
        "options": [
            "To make every migration reversible automatically",
            "To guarantee the absence of all future failures",
            "To confirm that a previous compatible version can be restored under realistic conditions",
            "To remove all need for backups"
        ],
        "correctOptionIndex": 2,
        "explanation": "Rollback can fail due to dependencies and data changes; practice reveals these constraints.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "FS34",
        "tier": 7,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Secrets",
        "skillTag": "Secrets",
        "weight": 4,
        "questionText": "Where should a database password used by a server normally be supplied?",
        "options": [
            "In a public React bundle",
            "In a CSS custom property",
            "Through restricted server-side secret configuration",
            "In a public source-code example with the real value"
        ],
        "correctOptionIndex": 2,
        "explanation": "Browser assets are visible to users; credentials belong in controlled server configuration.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS35",
        "tier": 7,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Delivery practice",
        "skillTag": "Delivery practice",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of deploying a versioned web application?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I independently deployed an app with configuration and health checks",
            "I also exercised monitoring and a compatible rollback or recovery procedure"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS36",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "React update queue",
        "skillTag": "React update queue",
        "weight": 4,
        "questionText": "A handler sees count=0 and calls `setCount(count+1); setCount(c=>c+1); setCount(c=>c+1);`. With normal React queue processing, what is the next count?",
        "options": [
            "2",
            "1",
            "3",
            "4"
        ],
        "correctOptionIndex": 2,
        "explanation": "The queued replacement sets 1; the two functional updates produce 2 and 3.",
        "reference": "F2: React state update queues"
    },
    {
        "id": "FS37",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Asynchronous UI",
        "skillTag": "Asynchronous UI",
        "weight": 4,
        "questionText": "A search request for \"cat\" starts before \"cats\" but finishes afterward and overwrites the newer results. Which fix directly prevents stale results from committing?",
        "options": [
            "Always display whichever response arrives last",
            "Increase the loading-spinner duration",
            "Store the response in a global variable without a key",
            "Check a request sequence/key before committing, and optionally abort obsolete requests"
        ],
        "correctOptionIndex": 3,
        "explanation": "Only the response corresponding to the current query should update the visible result.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS38",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Spring proxy boundary",
        "skillTag": "Spring proxy boundary",
        "weight": 4,
        "questionText": "In default Spring proxy-based transaction management, a nontransactional method calls another method on `this` marked `@Transactional`. Why might no new transaction begin?",
        "options": [
            "The internal call bypasses the transactional proxy",
            "The annotation starts a transaction only after the called method returns",
            "Self-invocation starts a transaction only when the method is public",
            "The transaction always begins, but commits before the first statement"
        ],
        "correctOptionIndex": 0,
        "explanation": "Default proxy advice intercepts calls through the proxy; self-invocation bypasses that boundary.",
        "reference": "F4: Spring declarative transactions"
    },
    {
        "id": "FS39",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Optimistic concurrency",
        "skillTag": "Optimistic concurrency",
        "weight": 4,
        "questionText": "Two clients read MongoDB document version=7. Both update with filter `{_id:id, version:7}` and increment version atomically. After one succeeds, what should the other detect?",
        "options": [
            "Zero matched documents and a version conflict",
            "Deletion of the collection",
            "An automatic merge of arbitrary business changes",
            "A guaranteed second successful overwrite"
        ],
        "correctOptionIndex": 0,
        "explanation": "The first update changes the version, so the second filter no longer matches.",
        "reference": "F5: MongoDB atomicity and transactions"
    },
    {
        "id": "FS40",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Multi-document atomicity",
        "skillTag": "Multi-document atomicity",
        "weight": 4,
        "questionText": "A MongoDB `updateMany` modifies 100 documents. Does single-document atomicity guarantee all 100 changes commit as one indivisible operation?",
        "options": [
            "Yes; identical update expressions guarantee collection-wide atomicity",
            "Yes; using majority write concern makes all affected documents indivisible",
            "No; use a supported transaction when the multi-document invariant requires it",
            "Yes; a single updateMany command makes all affected documents one atomic unit"
        ],
        "correctOptionIndex": 2,
        "explanation": "Atomicity of each document does not make the whole multi-document operation atomic.",
        "reference": "F5: MongoDB atomicity and transactions"
    },
    {
        "id": "FS41",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Payment retries",
        "skillTag": "Payment retries",
        "weight": 4,
        "questionText": "A client times out after submitting a payment and retries. Which design best prevents a duplicate business charge?",
        "options": [
            "Use a fresh random key on every retry",
            "Deduplicate only in the browser's memory",
            "Persist and enforce an idempotency key tied to the request and its result, with concurrency handling",
            "Assume a timeout proves that no charge occurred"
        ],
        "correctOptionIndex": 2,
        "explanation": "A timeout leaves the outcome uncertain; durable server-side request identity enables safe retries.",
        "reference": "F8: PostgreSQL transaction isolation"
    },
    {
        "id": "FS42",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Database and message consistency",
        "skillTag": "Database and message consistency",
        "weight": 4,
        "questionText": "A service must save an order and eventually publish its event. Which design addresses a crash between database commit and publication?",
        "options": [
            "Publish first and discard the order if persistence fails",
            "Save the order and outbox record in one database transaction, then publish with retry and consumer deduplication",
            "Commit the order and assume the next network call cannot fail",
            "Retry the whole workflow without any event identity"
        ],
        "correctOptionIndex": 1,
        "explanation": "The outbox makes the intent to publish durable alongside the order; delivery can still repeat.",
        "reference": "F9: Debezium transactional outbox"
    },
    {
        "id": "FS43",
        "tier": 8,
        "type": "competency",
        "tag": "SECURITY",
        "topic": "Object authorization",
        "skillTag": "Object authorization",
        "weight": 4,
        "questionText": "A signed-in user changes `/orders/41` to `/orders/42` and sees another customer's order. Which missing control is most direct?",
        "options": [
            "Enforce ownership only in the React route guard",
            "Replace sequential IDs with UUIDs and treat unguessability as the access check",
            "Check only that the session is valid before loading any order",
            "Server-side authorization for the specific order on every relevant operation"
        ],
        "correctOptionIndex": 3,
        "explanation": "Authentication does not establish ownership or permitted access to a particular object.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS44",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Tenant isolation",
        "skillTag": "Tenant isolation",
        "weight": 4,
        "questionText": "An application caches documents by document ID, but IDs are only unique within a tenant. What is required to prevent cross-tenant cache collisions?",
        "options": [
            "Include tenant identity in the cache key and authorize access",
            "Use a global cache entry and filter only the displayed title",
            "Key by document ID alone and shorten the TTL to one second",
            "Authorize the database read but serve cache hits without tenant checks"
        ],
        "correctOptionIndex": 0,
        "explanation": "The cache key must represent the full resource identity; authorization remains necessary.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS45",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Cookie scope",
        "skillTag": "Cookie scope",
        "weight": 4,
        "questionText": "What does HttpOnly on a session cookie accomplish?",
        "options": [
            "It prevents the browser from sending the cookie on requests",
            "It prevents ordinary JavaScript access to that cookie, but does not by itself prevent CSRF",
            "It encrypts the database",
            "It guarantees all application input is safe from XSS"
        ],
        "correctOptionIndex": 1,
        "explanation": "HttpOnly limits script access; cookie sending and request authorization are separate issues.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS46",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Sensitive caching",
        "skillTag": "Sensitive caching",
        "weight": 4,
        "questionText": "An account response must not be stored by HTTP caches. Which directive most directly expresses that requirement?",
        "options": [
            "`Cache-Control: public, max-age=86400`",
            "`Cache-Control: no-store`",
            "`ETag` alone prohibits caching",
            "`Cache-Control: no-cache` alone guarantees no storage"
        ],
        "correctOptionIndex": 1,
        "explanation": "no-store prohibits storage; no-cache generally permits storage but requires validation before reuse.",
        "reference": "F7: MDN HTTP caching"
    },
    {
        "id": "FS47",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Conditional updates",
        "skillTag": "Conditional updates",
        "weight": 4,
        "questionText": "An API uses ETags for lost-update prevention. A client's `If-Match` value no longer matches. Which response is most appropriate?",
        "options": [
            "201 Created for every mismatch",
            "412 Precondition Failed",
            "200 with a silent overwrite",
            "304 Not Modified for a successful mutation"
        ],
        "correctOptionIndex": 1,
        "explanation": "A failed precondition means the client's assumed resource version is no longer current.",
        "reference": "F7: MDN HTTP caching"
    },
    {
        "id": "FS48",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "N+1 queries",
        "skillTag": "N+1 queries",
        "weight": 4,
        "questionText": "A page loads 100 orders with one query, then fetches each order's customer separately. Traces show 101 queries. What should be tested first?",
        "options": [
            "Batch/fetch the needed related data while controlling result size and pagination semantics",
            "Increase the connection pool until all 100 related lookups run in parallel, without changing the access pattern",
            "Replace the database driver while preserving the same per-row query loop",
            "Cache the page indefinitely and omit invalidation"
        ],
        "correctOptionIndex": 0,
        "explanation": "The access pattern creates N+1 database calls; batching or appropriate fetching reduces round trips.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS49",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Keyset pagination",
        "skillTag": "Keyset pagination",
        "weight": 4,
        "questionText": "Rows are ordered by `(created_at,id)` ascending. The last row on a page is `(t,k)`. Which next-page condition matches that order?",
        "options": [
            "`created_at > t OR (created_at = t AND id > k)`",
            "`id < k` regardless of time",
            "`created_at < t`",
            "`created_at >= t` without an ID condition"
        ],
        "correctOptionIndex": 0,
        "explanation": "The lexicographic boundary uses both sort keys and excludes the previous final row.",
        "reference": "AC: AICTE CSE model curriculum (2022)"
    },
    {
        "id": "FS50",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Isolation and invariants",
        "skillTag": "Isolation and invariants",
        "weight": 4,
        "questionText": "Two doctors each see the other on call and concurrently mark themselves off call under snapshot-style isolation. Row updates do not conflict. What issue must the design address?",
        "options": [
            "A duplicate-key conflict, solved solely by adding an index to each doctor ID",
            "Write skew across the shared invariant, using suitable serialization/locking and retry handling",
            "A lost update to the same physical row, solved solely by a version field on each changed row",
            "A dirty read, solved simply by preventing reads of uncommitted values"
        ],
        "correctOptionIndex": 1,
        "explanation": "Nonconflicting row writes can still jointly violate an invariant spanning rows.",
        "reference": "F8: PostgreSQL transaction isolation"
    },
    {
        "id": "FS51",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "JavaScript scheduling",
        "skillTag": "JavaScript scheduling",
        "weight": 4,
        "questionText": "In a browser, run `console.log('A'); Promise.resolve().then(()=>console.log('B')); console.log('C');`. What is the order?",
        "options": [
            "A, B, C",
            "C, B, A",
            "B, A, C",
            "A, C, B"
        ],
        "correctOptionIndex": 3,
        "explanation": "Synchronous code finishes before the queued promise reaction runs.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS52",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Accessible interaction",
        "skillTag": "Accessible interaction",
        "weight": 4,
        "questionText": "A dialog opens visually but keyboard focus remains behind it. Which change directly improves keyboard usability?",
        "options": [
            "Move focus appropriately into the dialog, manage focus while open, and restore it on close",
            "Remove all focus indicators",
            "Only change its background color",
            "Only increase its z-index"
        ],
        "correctOptionIndex": 0,
        "explanation": "Visual stacking alone does not manage keyboard interaction or focus location.",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS53",
        "tier": 8,
        "type": "competency",
        "tag": "SECURITY",
        "topic": "Security testing",
        "skillTag": "Security testing",
        "weight": 4,
        "questionText": "An authorization test passes for GET but DELETE has no ownership check. What is the correct test/design response?",
        "options": [
            "Assume GET authorization covers DELETE automatically",
            "Hide DELETE in the UI and remove server tests",
            "Check authorization for every relevant operation and include cross-user negative tests",
            "Make IDs sequential so users can predict permissions"
        ],
        "correctOptionIndex": 2,
        "explanation": "Permissions must be enforced on each protected operation, including mutation paths.",
        "reference": "F6: OWASP authorization guidance"
    },
    {
        "id": "FS54",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Database migration",
        "skillTag": "Database migration",
        "weight": 4,
        "questionText": "Old and new application versions overlap during deployment. What migration approach best supports that overlap?",
        "options": [
            "Assume rollback automatically restores dropped data",
            "Add compatible schema first, migrate/backfill and switch usage, then remove obsolete fields later",
            "Change field meaning without version coordination",
            "Drop required old fields before deploying the new application"
        ],
        "correctOptionIndex": 1,
        "explanation": "An expand–migrate–contract sequence supports a compatibility window.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS55",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Timeout diagnosis",
        "skillTag": "Timeout diagnosis",
        "weight": 4,
        "questionText": "An endpoint's database queries take 20 ms, but requests wait 2 s for a pooled connection. What should be investigated first?",
        "options": [
            "Increase the endpoint timeout and treat the latency objective as satisfied",
            "Connection-pool saturation, held connections, transaction duration, and downstream capacity",
            "Optimize only the 20 ms query and disregard the 2 s wait",
            "Increase the pool size without measuring database capacity or connection hold time"
        ],
        "correctOptionIndex": 1,
        "explanation": "Observed latency is dominated by resource waiting rather than measured query execution.",
        "reference": "F3: Spring guides"
    },
    {
        "id": "FS56",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Frontend hydration",
        "skillTag": "Frontend hydration",
        "weight": 4,
        "questionText": "A server-rendered component inserts the current time, and its first client render computes a different time. What is a likely cause of hydration mismatch?",
        "options": [
            "The timestamp format is valid JavaScript, so differing output cannot cause a mismatch",
            "The server and first client render produce different initial markup",
            "Using a unique list key guarantees identical server and client text",
            "React always executes the first client render after copying all server state automatically"
        ],
        "correctOptionIndex": 1,
        "explanation": "Hydration expects compatible initial output; transfer stable initial data or defer client-only values appropriately.",
        "reference": "F11: React hydration requirements"
    },
    {
        "id": "FS57",
        "tier": 8,
        "type": "competency",
        "tag": "THEORY",
        "topic": "Release validation",
        "skillTag": "Release validation",
        "weight": 4,
        "questionText": "A new endpoint passes unit tests but p95 latency doubles at realistic concurrency. Which evidence is needed before calling the change acceptable?",
        "options": [
            "Only code coverage percentage",
            "Representative load tests against latency/error targets and investigation of the regression",
            "Only the average latency at zero load",
            "Only a successful single-user screenshot"
        ],
        "correctOptionIndex": 1,
        "explanation": "Functional tests do not establish behavior under realistic contention and load.",
        "reference": "MS: Microsoft technical interview guidance"
    },
    {
        "id": "FS58",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Capstone evidence",
        "skillTag": "Capstone evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of building an original end-to-end web application?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I have an original app with UI, API, persistence, and repeatable setup",
            "I also tested security, accessibility, failure behavior, and performance and enabled independent review"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F1: MDN core web curriculum"
    },
    {
        "id": "FS59",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Engineering evidence",
        "skillTag": "Engineering evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of investigating a concurrency or reliability defect?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I reproduced a defect, identified its cause, and implemented a fix",
            "I also added a meaningful regression check and documented the remaining limits"
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
        "id": "FS60",
        "tier": 8,
        "type": "self-assessment",
        "tag": "SELF-ASSESSMENT",
        "topic": "Product evidence",
        "skillTag": "Product evidence",
        "weight": 2,
        "questionText": "What evidence can you demonstrate of validating a web workflow with users?",
        "options": [
            "I have not attempted this activity",
            "I have completed a guided example of this activity",
            "I observed users completing core tasks and recorded failures",
            "I also addressed accessibility/usability findings and checked the revised workflow with evidence"
        ],
        "optionScores": [
            0,
            0.5,
            1,
            2
        ],
        "explanation": "Self-assessment scored on demonstrated experience (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        "reference": "F1: MDN core web curriculum"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 1) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 1));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = FULL_STACK_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = FULL_STACK_QUESTIONS.findIndex(q => q.id === endId);
    return FULL_STACK_QUESTIONS.slice(startIndex, endIndex + 1);
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
