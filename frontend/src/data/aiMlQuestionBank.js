// AI/ML Nested Competency Question Bank (AI01 - AI60)
// Derived from the strict S1-S8 nested assessment specification.
// S8 contains 25 items (AI36–AI60).
// Each preceding semester adds 5 items: S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1.

export const SEMESTER_CONFIG = {
    1: { idRange: ['AI01', 'AI60'], totalCount: 60, compCount: 50, selfCount: 10, maxRawScore: 188, maxTechScore: 168, maxPracticeScore: 20 },
    2: { idRange: ['AI06', 'AI60'], totalCount: 55, compCount: 46, selfCount: 9,  maxRawScore: 178, maxTechScore: 160, maxPracticeScore: 18 },
    3: { idRange: ['AI11', 'AI60'], totalCount: 50, compCount: 42, selfCount: 8,  maxRawScore: 168, maxTechScore: 152, maxPracticeScore: 16 },
    4: { idRange: ['AI16', 'AI60'], totalCount: 45, compCount: 38, selfCount: 7,  maxRawScore: 154, maxTechScore: 140, maxPracticeScore: 14 },
    5: { idRange: ['AI21', 'AI60'], totalCount: 40, compCount: 34, selfCount: 6,  maxRawScore: 140, maxTechScore: 128, maxPracticeScore: 12 },
    6: { idRange: ['AI26', 'AI60'], totalCount: 35, compCount: 30, selfCount: 5,  maxRawScore: 126, maxTechScore: 116, maxPracticeScore: 10 },
    7: { idRange: ['AI31', 'AI60'], totalCount: 30, compCount: 26, selfCount: 4,  maxRawScore: 112, maxTechScore: 104, maxPracticeScore: 8 },
    8: { idRange: ['AI36', 'AI60'], totalCount: 25, compCount: 22, selfCount: 3,  maxRawScore: 94,  maxTechScore: 88,  maxPracticeScore: 6 },
};

export const TIER_NAMES = {
    1: "Foundations: Programming, Vectors & Algorithms",
    2: "Data & Mathematics: SQL, Probability, Calculus & Search",
    3: "Classical ML: Optimization, Preprocessing & Probabilistic Models",
    4: "Reliable Evaluation: Metrics, Validation, Leakage & Ensembles",
    5: "Deep Learning: Tensor Shapes, CNNs, Inference & Stability",
    6: "Specialized AI: Attention, Retrieval, NLP & Reinforcement Learning",
    7: "Operational ML: Serving, Drift, Rollout & Governance",
    8: "Advanced Core: Reasoning, Debugging & Deployment Judgment"
};

export const AI_ML_QUESTIONS = [
    // --- TIER 1 ---
    {
        id: "AI01",
        tier: 1,
        type: "competency",
        tag: "CODING",
        topic: "Python",
        skillTag: "Python Programming",
        weight: 2,
        questionText: "What is the value of sum(x*x for x in range(3)) in Python 3?",
        options: ["9", "6", "5", "14"],
        correctOptionIndex: 2, // C
        explanation: "The loop uses 0, 1, and 2; their squares are 0, 1, and 4, which sum to 5.",
        reference: "Microsoft technical interview guidance (R07)"
    },
    {
        id: "AI02",
        tier: 1,
        type: "competency",
        tag: "THEORY",
        topic: "Linear algebra",
        skillTag: "Linear Algebra & Vectors",
        weight: 2,
        questionText: "What is the dot product of [1, 2] and [3, 4]?",
        options: ["10", "7", "11", "[3, 8]"],
        correctOptionIndex: 2, // C
        explanation: "Multiply corresponding components and add: 1×3 + 2×4 = 3 + 8 = 11.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI03",
        tier: 1,
        type: "competency",
        tag: "THEORY",
        topic: "Problem formulation",
        skillTag: "Problem Formulation",
        weight: 2,
        questionText: "A dataset contains floor area and the sale price of previously sold houses. Predicting a new house's numerical price is primarily which task?",
        options: [
            "Supervised classification",
            "Reinforcement learning",
            "Unsupervised clustering",
            "Supervised regression"
        ],
        correctOptionIndex: 3, // D
        explanation: "The target is a known continuous numerical value during training, which defines supervised regression.",
        reference: "CS2023 AI Core (R02)"
    },
    {
        id: "AI04",
        tier: 1,
        type: "competency",
        tag: "CODING",
        topic: "Algorithmic reasoning",
        skillTag: "Time Complexity & Algorithms",
        weight: 2,
        questionText: "A program scans each of n records exactly once and performs a fixed number of arithmetic operations per record. Under the usual constant-time arithmetic assumption, what is its time complexity?",
        options: ["O(1)", "O(log n)", "O(n²)", "O(n)"],
        correctOptionIndex: 3, // D
        explanation: "The work grows linearly with the number of records, resulting in O(n) time complexity.",
        reference: "Microsoft technical interview guidance (R07)"
    },
    {
        id: "AI05",
        tier: 1,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Programming practice",
        skillTag: "Python Practical Experience",
        weight: 2,
        questionText: "Which option best describes work you can demonstrate in Python?",
        options: [
            "I have not yet run a Python program",
            "I have run and modified a guided example",
            "I have written an original script with functions and checked normal and edge-case inputs",
            "I have a reproducible repository with tests and can explain and debug my implementation"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored based on demonstrated practical evidence (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "Microsoft technical interview guidance (R07)"
    },

    // --- TIER 2 ---
    {
        id: "AI06",
        tier: 2,
        type: "competency",
        tag: "CODING",
        topic: "SQL and data aggregation",
        skillTag: "SQL & Data Aggregation",
        weight: 2,
        questionText: "Table events(user_id, event_type) has one row per event. Which query returns one row per user with that user's event count?",
        options: [
            "SELECT user_id, COUNT(*) FROM events GROUP BY event_type;",
            "SELECT COUNT(DISTINCT user_id) FROM events;",
            "SELECT user_id, COUNT(*) FROM events GROUP BY user_id, event_type;",
            "SELECT user_id, COUNT(*) FROM events GROUP BY user_id;"
        ],
        correctOptionIndex: 3, // D
        explanation: "Grouping only by user_id counts all events for each user; grouping by both columns splits each user's count by event type.",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },
    {
        id: "AI07",
        tier: 2,
        type: "competency",
        tag: "THEORY",
        topic: "Conditional probability",
        skillTag: "Probability & Statistics",
        weight: 2,
        questionText: "Among 40 students who completed a Python course, 30 passed a coding test. What is the empirical probability of passing, conditional on completing the course?",
        options: ["0.75", "0.40", "1.33", "0.30"],
        correctOptionIndex: 0, // A
        explanation: "The relevant denominator is the 40 course completers: 30 / 40 = 0.75.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI08",
        tier: 2,
        type: "competency",
        tag: "THEORY",
        topic: "Calculus",
        skillTag: "Multivariate Calculus & Derivatives",
        weight: 2,
        questionText: "If f(x) = x², what is f′(3)?",
        options: ["12", "9", "6", "3"],
        correctOptionIndex: 2, // C
        explanation: "The derivative of x² is 2x, which equals 2(3) = 6 at x = 3.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI09",
        tier: 2,
        type: "competency",
        tag: "THEORY",
        topic: "AI search",
        skillTag: "Graph Search & Heuristics",
        weight: 2,
        questionText: "Every edge in a finite graph has unit cost. Which search, using a queue and a visited set, finds a shortest path in number of edges from a start node to a reachable goal?",
        options: [
            "Greedy search using an arbitrary heuristic",
            "Random walk stopped at its first goal",
            "Breadth-first search",
            "Depth-first search"
        ],
        correctOptionIndex: 2, // C
        explanation: "Breadth-first search explores successive distance layers; the unit-cost assumption ensures the first reached goal is the shortest path.",
        reference: "CS2023 AI Core (R02)"
    },
    {
        id: "AI10",
        tier: 2,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Data practice",
        skillTag: "Data Preparation & Pipeline Practice",
        weight: 2,
        questionText: "Which option best describes your evidence of preparing a dataset?",
        options: [
            "I have not yet prepared a dataset",
            "I have followed a data-cleaning tutorial",
            "I have independently cleaned and summarized a dataset and recorded my decisions",
            "I have a reproducible workflow with source/provenance, schema, missingness, and quality checks"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored based on demonstrated data preparation workflow (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },

    // --- TIER 3 ---
    {
        id: "AI11",
        tier: 3,
        type: "competency",
        tag: "THEORY",
        topic: "Optimization",
        skillTag: "Gradient Descent & Optimization",
        weight: 3,
        questionText: "At the current parameter value, dL/dw = +4. With learning rate 0.1, what update does ordinary gradient descent apply to w?",
        options: [
            "Decrease w by 0.4",
            "Set w to 0.4",
            "Increase w by 0.4",
            "Divide w by 4"
        ],
        correctOptionIndex: 0, // A
        explanation: "The gradient descent update rule is w_new = w - lr * (dL/dw) = w - (0.1 * 4) = w - 0.4 (decrease by 0.4).",
        reference: "Google Machine Learning Crash Course (R11)"
    },
    {
        id: "AI12",
        tier: 3,
        type: "competency",
        tag: "THEORY",
        topic: "Feature preprocessing",
        skillTag: "Feature Scaling & Leakage",
        weight: 3,
        questionText: "A k-nearest-neighbor model uses income measured in rupees and age measured in years. Income dominates the Euclidean distances. What is the most appropriate first experiment?",
        options: [
            "Fit a scaler on training features and apply that transformation to all splits",
            "Fit separate scalers independently on train and test",
            "Increase k until the units become irrelevant",
            "Multiply income by another large constant"
        ],
        correctOptionIndex: 0, // A
        explanation: "Training-derived feature scaling addresses disparate feature magnitudes without leaking test/evaluation distribution statistics.",
        reference: "scikit-learn: common pitfalls and data leakage (R12)"
    },
    {
        id: "AI13",
        tier: 3,
        type: "competency",
        tag: "THEORY",
        topic: "Probabilistic models",
        skillTag: "Probabilistic Classifiers & Naive Bayes",
        weight: 3,
        questionText: "Which conditional-independence assumption does a standard naive Bayes classifier make?",
        options: [
            "Features are independent given the class",
            "Features must have the same marginal distribution",
            "The class is independent of all features",
            "All classes have equal prior probability"
        ],
        correctOptionIndex: 0, // A
        explanation: "Naive Bayes explicitly assumes that all features are mutually independent conditioned on the class label.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI14",
        tier: 3,
        type: "competency",
        tag: "THEORY",
        topic: "Dimensionality reduction",
        skillTag: "PCA & Dimensionality Reduction",
        weight: 3,
        questionText: "Which statement about ordinary, unsupervised PCA is correct?",
        options: [
            "It identifies causal variables",
            "It directly maximizes classification accuracy",
            "It seeks orthogonal directions of high input variance without using target labels",
            "It guarantees retention of all information useful for prediction"
        ],
        correctOptionIndex: 2, // C
        explanation: "PCA maximizes input variance along orthogonal eigenvectors without utilizing any target labels.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI15",
        tier: 3,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Classical ML practice",
        skillTag: "Baseline Model Building",
        weight: 2,
        questionText: "Which option best describes an ML baseline you have built?",
        options: [
            "I have not trained a baseline model",
            "I have run a guided training notebook",
            "I have independently trained and evaluated a baseline on an appropriate held-out split",
            "I have compared alternatives fairly, documented error cases, and made the experiment reproducible"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on model experimentation discipline (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "Amazon Applied Scientist interview preparation (R08)"
    },

    // --- TIER 4 ---
    {
        id: "AI16",
        tier: 4,
        type: "competency",
        tag: "CODING",
        topic: "Classification metrics",
        skillTag: "Evaluation Metrics (F1, Precision, Recall)",
        weight: 3,
        questionText: "A classifier has TP=30, FP=10, and FN=20. What is its F1 score?",
        options: ["0.750", "0.600", "0.900", "About 0.667"],
        correctOptionIndex: 3, // D
        explanation: "F1 = 2TP / (2TP + FP + FN) = (2 * 30) / (60 + 10 + 20) = 60 / 90 ≈ 0.667.",
        reference: "Google Machine Learning Crash Course (R11)"
    },
    {
        id: "AI17",
        tier: 4,
        type: "competency",
        tag: "THEORY",
        topic: "Leakage prevention",
        skillTag: "Cross-Validation & Data Leakage",
        weight: 3,
        questionText: "You compare imputation methods and logistic-regression hyperparameters with cross-validation. Which arrangement avoids learning preprocessing from validation folds?",
        options: [
            "Choose imputation using the final test score",
            "Fit the imputer on each validation fold and transform its training fold",
            "Place the imputer and classifier in one pipeline fitted separately inside each training fold",
            "Impute the whole dataset once before cross-validation"
        ],
        correctOptionIndex: 2, // C
        explanation: "Preprocessing transformations must be learned strictly within the training fold of each CV iteration via unified pipelines.",
        reference: "scikit-learn: common pitfalls and data leakage (R12)"
    },
    {
        id: "AI18",
        tier: 4,
        type: "competency",
        tag: "THEORY",
        topic: "Time-series evaluation",
        skillTag: "Temporal Validation & Time Series",
        weight: 3,
        questionText: "A demand model will forecast next month's sales using information available today. Which validation design best represents that use?",
        options: [
            "Shuffle dates and split randomly",
            "Train on earlier dates and validate on later dates, with an appropriate gap if feature/label windows overlap",
            "Train on the latest month and validate on the earliest month",
            "Use the final test month to select every hyperparameter"
        ],
        correctOptionIndex: 1, // B
        explanation: "Evaluation must preserve the temporal arrow of time and prevent future leakage into past windows.",
        reference: "scikit-learn: cross-validation (R13)"
    },
    {
        id: "AI19",
        tier: 4,
        type: "competency",
        tag: "THEORY",
        topic: "Ensembles",
        skillTag: "Ensemble Methods & Random Forests",
        weight: 3,
        questionText: "Why can a random forest generalize better than one deep decision tree?",
        options: [
            "Averaging partially decorrelated trees can reduce prediction variance",
            "Every tree is guaranteed to be unbiased",
            "Using more trees always removes training-data bias",
            "Averaging makes held-out evaluation unnecessary"
        ],
        correctOptionIndex: 0, // A
        explanation: "Bootstrap aggregation (bagging) and random feature subsampling decorrelate individual trees, reducing overall variance without increasing bias.",
        reference: "AICTE CSE Model Curriculum (R01)"
    },
    {
        id: "AI20",
        tier: 4,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Evaluation practice",
        skillTag: "Validation Protocol Design",
        weight: 2,
        questionText: "Which option best describes your validation work?",
        options: [
            "I have not designed a validation procedure",
            "I have used a split and metric specified by a tutorial",
            "I have chosen and justified a split and metrics for my own problem",
            "I have also checked leakage and threshold/metric tradeoffs, documenting their effect on results"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on validation design rigor (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "scikit-learn: cross-validation (R13)"
    },

    // --- TIER 5 ---
    {
        id: "AI21",
        tier: 5,
        type: "competency",
        tag: "CODING",
        topic: "Tensor shapes",
        skillTag: "Tensor Math & PyTorch Basics",
        weight: 3,
        questionText: "For matrix multiplication, X has shape (32, 10) and W has shape (10, 4). What is the shape of X @ W?",
        options: ["(32, 10, 4)", "(32, 4)", "(4, 32)", "(10, 10)"],
        correctOptionIndex: 1, // B
        explanation: "In matrix multiplication (N, K) @ (K, M), inner dimension K matches and the outer dimensions form the output shape (N, M) = (32, 4).",
        reference: "PyTorch: beginner workflow (R25)"
    },
    {
        id: "AI22",
        tier: 5,
        type: "competency",
        tag: "CODING",
        topic: "CNN parameters",
        skillTag: "Convolutional Neural Networks",
        weight: 3,
        questionText: "A standard 2D convolution has 3 input channels, 16 output channels, a 3×3 kernel, groups=1, and one bias per output channel. How many trainable parameters does it have?",
        options: ["144", "432", "448", "4,096"],
        correctOptionIndex: 2, // C
        explanation: "Weight parameters = 16 * (3 * 3 * 3) = 16 * 27 = 432. Bias parameters = 16. Total = 432 + 16 = 448.",
        reference: "NPTEL Deep Learning, IIT Ropar (R04)"
    },
    {
        id: "AI23",
        tier: 5,
        type: "competency",
        tag: "CODING",
        topic: "Inference behavior",
        skillTag: "PyTorch Autograd & Eval Mode",
        weight: 3,
        questionText: "A PyTorch model contains dropout. To use dropout's evaluation behavior and disable gradient recording during inference, which pair is appropriate?",
        options: [
            "Only torch.no_grad(), because it also disables dropout",
            "model.eval() and torch.no_grad()",
            "Only model.eval(), because it disables all gradient tracking",
            "model.train() and torch.no_grad()"
        ],
        correctOptionIndex: 1, // B
        explanation: "model.eval() configures layers like Dropout and BatchNorm for inference, while torch.no_grad() turns off autograd computation.",
        reference: "PyTorch: automatic differentiation & basics (R17, R25)"
    },
    {
        id: "AI24",
        tier: 5,
        type: "competency",
        tag: "THEORY",
        topic: "Training stability",
        skillTag: "Deep Learning Training Dynamics",
        weight: 3,
        questionText: "A recurrent model develops extremely large gradient norms and unstable updates. Which intervention directly bounds the gradient norm used by an optimizer step?",
        options: [
            "Removing validation data",
            "Increasing the numerical scale of the loss without unscaling gradients",
            "Gradient norm clipping before the optimizer step",
            "Increasing the learning rate"
        ],
        correctOptionIndex: 2, // C
        explanation: "Gradient norm clipping clips the global norm of parameters to a predefined maximum threshold before calling optimizer.step().",
        reference: "NPTEL Deep Learning, IIT Ropar (R04)"
    },
    {
        id: "AI25",
        tier: 5,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Deep-learning practice",
        skillTag: "Neural Network Training Practice",
        weight: 2,
        questionText: "Which option best describes neural-network training you can demonstrate?",
        options: [
            "I have not trained a neural network",
            "I have run a guided neural-network notebook",
            "I have independently trained a model and recorded losses, settings, and held-out results",
            "I have also diagnosed a training failure, tested a fix, and compared against a simpler baseline"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on hands-on deep learning mastery (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "PyTorch: beginner workflow (R25)"
    },

    // --- TIER 6 ---
    {
        id: "AI26",
        tier: 6,
        type: "competency",
        tag: "CODING",
        topic: "Attention shapes",
        skillTag: "Transformers & Attention Mechanisms",
        weight: 3,
        questionText: "In one attention head, Q and K each have shape (n, d_k) and V has shape (n, d_v). Ignoring batch dimensions, what is the output shape of softmax(QKᵀ / sqrt(d_k)) V?",
        options: ["(n, n)", "(d_v, n)", "(d_k, d_v)", "(n, d_v)"],
        correctOptionIndex: 3, // D
        explanation: "QKᵀ yields an (n, n) attention weight matrix; multiplying by V of shape (n, d_v) yields (n, d_v).",
        reference: "NPTEL Introduction to Large Language Models (R06)"
    },
    {
        id: "AI27",
        tier: 6,
        type: "competency",
        tag: "THEORY",
        topic: "Retrieval and adaptation",
        skillTag: "Retrieval-Augmented Generation (RAG)",
        weight: 3,
        questionText: "An assistant must answer from a permission-controlled policy library that changes daily and cite the relevant passages. What is the most direct baseline architecture?",
        options: [
            "Increase sampling temperature to obtain newer facts",
            "Retrieve authorized, up-to-date passages and provide them as context to the generator",
            "Remove retrieval and rely on training-loss reduction",
            "Fine-tune once and assume its weights contain every future change"
        ],
        correctOptionIndex: 1, // B
        explanation: "Retrieval-Augmented Generation (RAG) feeds dynamically retrieved current context into the LLM prompt without retraining.",
        reference: "Google Cloud Professional ML Engineer (R09)"
    },
    {
        id: "AI28",
        tier: 6,
        type: "competency",
        tag: "THEORY",
        topic: "NLP evaluation",
        skillTag: "NLP & Multiclass Metrics",
        weight: 3,
        questionText: "In a three-class text classifier, every class should contribute equally to the summary metric despite different class sizes. Which metric follows that requirement?",
        options: [
            "Micro-averaged F1",
            "Macro-averaged F1",
            "Overall accuracy",
            "Support-weighted F1"
        ],
        correctOptionIndex: 1, // B
        explanation: "Macro-averaged F1 calculates the arithmetic mean of per-class F1 scores with equal weighting regardless of class frequencies.",
        reference: "NPTEL Neural Networks for CV and NLP (R05)"
    },
    {
        id: "AI29",
        tier: 6,
        type: "competency",
        tag: "CODING",
        topic: "Reinforcement learning",
        skillTag: "Reinforcement Learning & Q-Learning",
        weight: 3,
        questionText: "For a nonterminal transition, Q(s,a)=2, reward=1, gamma=0.9, max_a′ Q(s′,a′)=4, and alpha=0.5. Using Q_new = Q + alpha×(reward + gamma×maxQ − Q), what is Q_new?",
        options: ["5.3", "3.3", "2.3", "4.6"],
        correctOptionIndex: 1, // B
        explanation: "TD Target = 1 + (0.9 * 4) = 4.6. Q_new = 2 + 0.5 * (4.6 - 2) = 2 + 0.5 * 2.6 = 3.3.",
        reference: "NPTEL Reinforcement Learning (R24)"
    },
    {
        id: "AI30",
        tier: 6,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "NLP or vision practice",
        skillTag: "Applied NLP / Vision Projects",
        weight: 2,
        questionText: "Which option best describes a text or image project you can demonstrate?",
        options: [
            "I have not built a text or image model pipeline",
            "I have run a pretrained-model demonstration",
            "I have adapted a model or built a pipeline and evaluated it on held-out examples",
            "I have also compared alternatives, checked leakage/domain shift, and documented reproducible error analysis"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on multimodal applied project execution (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "NPTEL Neural Networks for CV and NLP (R05)"
    },

    // --- TIER 7 ---
    {
        id: "AI31",
        tier: 7,
        type: "competency",
        tag: "THEORY",
        topic: "Serving architecture",
        skillTag: "ML System Architecture & Batch Serving",
        weight: 4,
        questionText: "A system scores 10 million records once nightly; results are needed by morning, and no per-request response is required. Which serving approach is the most natural starting point?",
        options: [
            "One permanently reserved low-latency endpoint per record",
            "Manual notebook execution with no scheduling or failure recovery",
            "Interactive inference solely to minimize single-request latency",
            "Batch inference sized to meet the processing deadline"
        ],
        correctOptionIndex: 3, // D
        explanation: "Offline batch inference optimizes throughput and resource cost when per-record real-time latency is not required.",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },
    {
        id: "AI32",
        tier: 7,
        type: "competency",
        tag: "THEORY",
        topic: "Distribution shift",
        skillTag: "Concept Drift & Distribution Shifts",
        weight: 4,
        questionText: "Let X be the input and Y the target. Which change is specifically concept drift, rather than only covariate drift?",
        options: [
            "The model file is renamed",
            "Only P(X) changes while P(Y given X) stays fixed",
            "P(Y given X) changes over time",
            "A deployment uses a different logging format"
        ],
        correctOptionIndex: 2, // C
        explanation: "Concept drift occurs when the conditional relationship P(Y | X) shifts, whereas covariate drift refers strictly to changes in P(X).",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },
    {
        id: "AI33",
        tier: 7,
        type: "competency",
        tag: "THEORY",
        topic: "Controlled deployment",
        skillTag: "Model Deployment & Canary Releases",
        weight: 4,
        questionText: "A candidate model passes offline tests. Which rollout best supports detection and reversal of unexpected production regressions?",
        options: [
            "Change the model and preprocessing independently without versioning",
            "Send all traffic immediately and remove the previous artifact",
            "Shadow the model indefinitely and declare business uplift without an experiment",
            "Release to a limited cohort, monitor predefined quality and operational guardrails, and retain a tested rollback path"
        ],
        correctOptionIndex: 3, // D
        explanation: "Canary rollouts with automated health guardrails and instant rollback minimize blast radius for unforeseen production regressions.",
        reference: "Google Cloud Professional ML Engineer (R09)"
    },
    {
        id: "AI34",
        tier: 7,
        type: "competency",
        tag: "THEORY",
        topic: "Data governance",
        skillTag: "AI Governance & Data Minimization",
        weight: 4,
        questionText: "A model service processes personal records. Debugging needs the model version, validation failures, and request timing; raw personal text is unnecessary. Which logging design best matches those needs?",
        options: [
            "Hash names but retain unrestricted raw text and all identifiers",
            "Publish complete request logs for reproducibility",
            "Store all raw text indefinitely because storage is cheap",
            "Record necessary diagnostics, exclude raw text, restrict access, and define retention"
        ],
        correctOptionIndex: 3, // D
        explanation: "Data minimization and access segregation log only essential observability telemetry while eliminating sensitive PII payload exposure.",
        reference: "NIST AI RMF: trustworthiness characteristics (R21)"
    },
    {
        id: "AI35",
        tier: 7,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Deployment practice",
        skillTag: "Model Serving & Production Practice",
        weight: 2,
        questionText: "Which option best describes model serving you can demonstrate?",
        options: [
            "I have not served model predictions outside a notebook",
            "I have followed a model-serving tutorial",
            "I have built a versioned batch job or API with input validation and measured performance",
            "I have also implemented monitoring and failure/rollback handling and tested them under representative conditions"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on model serving & production deployment skills (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },

    // --- TIER 8 ---
    {
        id: "AI36",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Base rates and Bayes",
        skillTag: "Bayesian Reasoning & Base Rate Fallacy",
        weight: 4,
        questionText: "A fraud flagger has 90% true-positive rate and 5% false-positive rate. Fraud prevalence is 1%. If these rates hold in deployment, approximately what fraction of flagged transactions are actually fraudulent?",
        options: ["15.4%", "90.0%", "1.0%", "95.0%"],
        correctOptionIndex: 0, // A
        explanation: "Out of 10,000 cases: 100 fraudulent (90 true positives), 9,900 legitimate (495 false positives). Precision = 90 / (90 + 495) = 90 / 585 ≈ 15.38%.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI37",
        tier: 8,
        type: "competency",
        tag: "CODING",
        topic: "Regularized optimization",
        skillTag: "L2 Regularization & Gradient Updates",
        weight: 4,
        questionText: "For one training example, L(w)=(wx−y)²+lambda×w², with x=2, y=3, w=1, and lambda=0.5. What is w after one gradient-descent step with learning rate 0.1?",
        options: ["1.3", "0.7", "1.4", "0.6"],
        correctOptionIndex: 0, // A
        explanation: "dL/dw = 2x(wx - y) + 2*lambda*w = 2(2)(2*1 - 3) + 2(0.5)(1) = 4(-1) + 1 = -3. w_new = 1 - 0.1*(-3) = 1 + 0.3 = 1.3.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI38",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Decision costs",
        skillTag: "Cost-Sensitive Classification & Thresholding",
        weight: 4,
        questionText: "On the same representative validation set, threshold T1 yields FN=100 and FP=200; T2 yields FN=80 and FP=500. A false negative costs 20 units and a false positive costs 1 unit; correct decisions cost 0. Which threshold has lower total cost?",
        options: [
            "They have equal cost because they use the same model",
            "T1: 2,200 units, versus T2: 2,500",
            "T1: 300 units, versus T2: 580",
            "T2: 2,100 units, versus T1: 2,200"
        ],
        correctOptionIndex: 3, // D
        explanation: "Cost(T1) = 100*20 + 200*1 = 2,000 + 200 = 2,200. Cost(T2) = 80*20 + 500*1 = 1,600 + 500 = 2,100. T2 is lower cost.",
        reference: "Google Machine Learning Crash Course (R11)"
    },
    {
        id: "AI39",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Grouped nested validation",
        skillTag: "GroupKFold & Nested Cross-Validation",
        weight: 4,
        questionText: "You have multiple records per patient, must tune hyperparameters, and want to estimate the tuned procedure's performance on unseen patients. Which protocol is most defensible?",
        options: [
            "Tune once on all patient records and report outer-fold scores for that chosen model",
            "Place each patient's first record in training and later records in validation",
            "Use group-disjoint outer folds; perform group-disjoint tuning and preprocessing within each outer training set",
            "Randomly split records into outer folds, then group only the inner folds"
        ],
        correctOptionIndex: 2, // C
        explanation: "Group-disjoint outer and inner splits prevent same-patient identity leakage across training, validation, and evaluation folds.",
        reference: "scikit-learn: nested cross-validation (R13, R14)"
    },
    {
        id: "AI40",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Uncertainty and paired experiments",
        skillTag: "Bootstrap Resampling & Hypothesis Testing",
        weight: 4,
        questionText: "Two fixed models are evaluated on the same independent test cases. A paired bootstrap 95% interval for the accuracy difference A−B is [−0.8, +1.6] percentage points. Which conclusion is supported?",
        options: [
            "The interval does not establish a positive improvement for A at this confidence level",
            "A is proven better because the upper endpoint is positive",
            "There is a 95% probability that every future deployment gains 1.6 points",
            "The models are proven equivalent"
        ],
        correctOptionIndex: 0, // A
        explanation: "Because the confidence interval spans across zero (-0.8 to +1.6), we fail to reject the null hypothesis of no significant performance difference.",
        reference: "SciPy: paired bootstrap and confidence intervals (R16)"
    },
    {
        id: "AI41",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Calibration versus ranking",
        skillTag: "Probability Calibration & ROC-AUC",
        weight: 4,
        questionText: "Model A and a strictly monotonically recalibrated version B rank every example identically, with no new ties. What can change even if ROC-AUC stays the same?",
        options: [
            "The ranking of every positive–negative pair",
            "Probability calibration and log loss",
            "The true class prevalence in the test data",
            "The number of test examples"
        ],
        correctOptionIndex: 1, // B
        explanation: "ROC-AUC is solely a rank-order metric; monotonic scaling shifts predicted probabilities, directly affecting Brier score and Log Loss.",
        reference: "scikit-learn: probability calibration (R15)"
    },
    {
        id: "AI42",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Point-in-time features",
        skillTag: "Feature Stores & Temporal Correctness",
        weight: 4,
        questionText: "A fraud model makes a decision at transaction time t. Historical tables include chargebacks recorded weeks later. How should a trailing-30-day chargeback feature be constructed for training?",
        options: [
            "Use only chargeback records that were actually available by t, with the same historical window semantics as serving",
            "Join the latest chargeback table and count every eventual chargeback associated with that window",
            "Compute the feature using all records, then rely on a random split to remove leakage",
            "Allow future chargebacks if their related transaction happened before t"
        ],
        correctOptionIndex: 0, // A
        explanation: "Point-in-time correctness requires simulating exact information state at timestamp t to prevent lookahead target leakage.",
        reference: "AWS: feature store and point-in-time data (R19)"
    },
    {
        id: "AI43",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Bias and regularization",
        skillTag: "Bias-Variance Tradeoff & Underfitting",
        weight: 4,
        questionText: "A heavily L2-regularized linear model has high training error and similarly high validation error. Data and optimization checks pass; the target is learnable with these features. Which experiment most directly tests whether regularization is too restrictive?",
        options: [
            "Collect only more examples while keeping an arbitrarily large penalty",
            "Select the model with the lowest test error over many trials",
            "Reduce the penalty and compare training and validation errors under the same protocol",
            "Increase the penalty and expect training error to fall"
        ],
        correctOptionIndex: 2, // C
        explanation: "High training and validation error indicates high bias/underfitting. Reducing the penalty isolates whether excessive regularization restricted model capacity.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI44",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Representation tradeoffs",
        skillTag: "Unsupervised Representation & Task Alignment",
        weight: 4,
        questionText: "An unsupervised PCA transformation retains 99% of input variance, yet a classifier's held-out accuracy drops sharply. Which explanation is plausible?",
        options: [
            "Every retained principal component must be independent of the target",
            "PCA necessarily used the test labels",
            "A low-variance direction carried useful target information that PCA discarded",
            "Retaining 99% variance guarantees retaining 99% classification accuracy"
        ],
        correctOptionIndex: 2, // C
        explanation: "PCA maximizes total variance in X regardless of target Y; low-variance directions may hold the most discriminative signals for class separation.",
        reference: "NPTEL Mathematical Foundations of Machine Learning (R03)"
    },
    {
        id: "AI45",
        tier: 8,
        type: "competency",
        tag: "CODING",
        topic: "Autograd code interpretation",
        skillTag: "PyTorch Autograd Graph Mechanics",
        weight: 4,
        questionText: "In PyTorch, run x=torch.tensor(2.0, requires_grad=True); (x*x).backward(); (3*x).backward(). No gradient is cleared between calls, and the second expression creates a fresh graph. What is x.grad afterward?",
        options: ["4.0", "3.0", "An error because two different graphs can never share a leaf", "7.0"],
        correctOptionIndex: 3, // D
        explanation: "PyTorch accumulates gradients into leaf tensors: d(x^2)/dx at x=2 is 4; d(3x)/dx is 3. Total accumulated gradient = 4 + 3 = 7.0.",
        reference: "PyTorch: automatic differentiation (R17)"
    },
    {
        id: "AI46",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Mixed-precision training",
        skillTag: "Mixed Precision Training (AMP)",
        weight: 4,
        questionText: "During float16 training, some small gradients underflow to zero. Which AMP mechanism directly targets this issue while preserving the intended unscaled optimizer update?",
        options: [
            "Scale the loss but never unscale its resulting gradients",
            "Cast every reduction to float16 and remove scaling",
            "Multiply the learning rate by a large constant and leave gradients unchanged",
            "Scale the loss before backward, then unscale gradients before clipping/stepping and handle nonfinite values"
        ],
        correctOptionIndex: 3, // D
        explanation: "Automatic Mixed Precision multiplies loss by a scale factor to keep gradients within fp16 dynamic range, unscaling them prior to optimization.",
        reference: "PyTorch: automatic mixed precision examples (R18)"
    },
    {
        id: "AI47",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Transfer learning and domain shift",
        skillTag: "Transfer Learning & Domain Adaptation",
        weight: 4,
        questionText: "You have 800 labelled target-domain images and a pretrained backbone. A random split is inflated by multiple views of each object. What is the strongest comparison of a frozen backbone versus fine-tuning?",
        options: [
            "Split by object, compare both approaches on the same validation protocol, and reserve unseen objects for final testing",
            "Fine-tune on every image, then evaluate a frozen version on those same images",
            "Split by image and tune until the test score stops improving",
            "Assume the frozen model is best because the target dataset is small"
        ],
        correctOptionIndex: 0, // A
        explanation: "Grouping splits by unique physical objects ensures that models are tested on genuine visual generalization rather than memorized viewing angles.",
        reference: "NPTEL Neural Networks for CV and NLP (R05, R13)"
    },
    {
        id: "AI48",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Autoregressive training",
        skillTag: "Causal Masking & Language Models",
        weight: 4,
        questionText: "A next-token language model accidentally lets each training position attend to later tokens, including the target token. Training loss becomes very low. Why is this invalid for left-to-right generation?",
        options: [
            "It guarantees the same low loss at generation time",
            "It is equivalent to standard causal masking",
            "Training exposes future information that is unavailable when generating that token",
            "It merely increases batch size without affecting the task"
        ],
        correctOptionIndex: 2, // C
        explanation: "Without a causal triangular attention mask, the model trivializes next-token prediction by looking ahead at the ground truth token.",
        reference: "NPTEL Introduction to Large Language Models (R06)"
    },
    {
        id: "AI49",
        tier: 8,
        type: "competency",
        tag: "CODING",
        topic: "Parameter-efficient adaptation",
        skillTag: "LoRA & PEFT Parameter Efficiency",
        weight: 4,
        questionText: "A frozen weight matrix W is 4,096×4,096. A LoRA update is BA with B shaped 4,096×8 and A shaped 8×4,096. Ignoring biases and scalars, how many trainable adapter parameters are added for this matrix?",
        options: ["32,768", "65,536", "134,217,728", "16,777,216"],
        correctOptionIndex: 1, // B
        explanation: "Adapter parameters = (4096 * 8) + (8 * 4096) = 32,768 + 32,768 = 65,536 parameters.",
        reference: "Hu et al.: LoRA, original paper (R23)"
    },
    {
        id: "AI50",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "RAG diagnosis",
        skillTag: "RAG Evaluation & Error Diagnostics",
        weight: 4,
        questionText: "On a held-out QA set, an LLM answers correctly on 95% of cases when given the gold supporting passage, but 55% with production retrieval. Production retrieval includes the needed passage on only 60% of cases. What should be investigated first?",
        options: [
            "Retrieval coverage, chunking, indexing, and query matching, followed by a controlled re-evaluation",
            "Discarding questions for which retrieval fails from the reported metric",
            "Full model pretraining before inspecting retrieval",
            "Raising temperature as the main way to fix missing evidence"
        ],
        correctOptionIndex: 0, // A
        explanation: "Because generation accuracy given gold context is 95% while retrieval hit rate is only 60%, retrieval recall is the primary system bottleneck.",
        reference: "Google Cloud Professional ML Engineer (R09)"
    },
    {
        id: "AI51",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Prompt injection and access control",
        skillTag: "LLM Security & Prompt Injection Defense",
        weight: 4,
        questionText: "A retrieved document tells an assistant to ignore its instructions and send customer data to an external endpoint. What is the strongest architectural response?",
        options: [
            "Strip one suspicious phrase and assume all injections are removed",
            "Trust any command found in a highly ranked document",
            "Rely only on a prompt telling the model to be careful, while granting unrestricted tools",
            "Treat retrieved text as untrusted content and enforce data/tool permissions outside the model, with restricted tool actions"
        ],
        correctOptionIndex: 3, // D
        explanation: "Untrusted prompt data must never directly govern tool privileges; deterministic external authorization and least-privilege security boundaries are essential.",
        reference: "OWASP LLM01: Prompt Injection (R22)"
    },
    {
        id: "AI52",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Serving tradeoffs",
        skillTag: "Inference Latency & Tail SLA Compliance",
        weight: 4,
        questionText: "Under representative load, configuration A has 80 ms mean and 240 ms p95 latency; B has 100 ms mean and 170 ms p95. Both meet throughput and budget needs. The requirement is p95 ≤ 200 ms. Which choice satisfies the stated requirement?",
        options: [
            "Both; only throughput matters",
            "Neither; a mean above 80 ms violates p95 ≤ 200 ms",
            "B; A fails the tail-latency requirement despite its lower mean",
            "A; the lower mean automatically implies lower p95"
        ],
        correctOptionIndex: 2, // C
        explanation: "Service level agreements specify tail latency (p95); configuration B has p95=170ms <= 200ms, whereas A's tail latency of 240ms violates the SLA.",
        reference: "NVIDIA Triton: inference metrics (R20)"
    },
    {
        id: "AI53",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Training-serving skew",
        skillTag: "MLOps & Training-Serving Skew",
        weight: 4,
        questionText: "A serialized classifier performs correctly offline but badly behind an API. The API passes features as [income, age]; training used [age, income]. Both are numeric and no exception occurs. What is the most direct prevention?",
        options: [
            "Tune the learning rate of the existing model",
            "Use a versioned feature schema and shared preprocessing, with parity tests on identical raw examples",
            "Retrain on the same features without checking their order",
            "Monitor only aggregate request counts"
        ],
        correctOptionIndex: 1, // B
        explanation: "Silent column permutations degrade model predictions without throwing errors; schema enforcement and parity tests prevent feature alignment skew.",
        reference: "scikit-learn: common pitfalls and data leakage (R12)"
    },
    {
        id: "AI54",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Monitoring with delayed labels",
        skillTag: "Production Monitoring & Drift Detection",
        weight: 4,
        questionText: "Labels arrive 30 days after predictions. Today's feature distribution differs from training, but labels are unavailable. What can you conclude now?",
        options: [
            "Concept drift is proven solely because P(X) changed",
            "The model must be retrained immediately on its own predictions as ground truth",
            "The exact current accuracy is known from the feature drift statistic",
            "Input drift is detected; investigate it and collect delayed outcome evidence before claiming predictive accuracy has dropped"
        ],
        correctOptionIndex: 3, // D
        explanation: "Shifts in P(X) represent input covariate drift; they indicate a need for investigation, but true concept drift and accuracy require ground-truth labels.",
        reference: "AWS ML Engineer Associate MLA-C02 guide (R10)"
    },
    {
        id: "AI55",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Subgroup evaluation",
        skillTag: "Fairness, Bias & Subgroup Disparities",
        weight: 4,
        questionText: "Two groups have equal overall accuracy but false-negative rates of 10% and 35%. The application cares about missed positives. What is the most defensible conclusion?",
        options: [
            "Equal accuracy does not resolve the disparity; inspect uncertainty, subgroup data, and the consequences of missed positives",
            "Removing group labels from the report removes the disparity",
            "Different false-negative rates prove that no model could improve outcomes",
            "Equal accuracy proves equal impact"
        ],
        correctOptionIndex: 0, // A
        explanation: "Aggregate accuracy conceals subgroup disparities; critical failure modes like false negatives require disaggregated evaluation.",
        reference: "NIST AI RMF: trustworthiness characteristics (R21)"
    },
    {
        id: "AI56",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Research and ablation",
        skillTag: "Empirical Ablation & Scientific Rigor",
        weight: 4,
        questionText: "A paper claims a new component improves a model by 0.4 points. Which experiment best tests the component's contribution?",
        options: [
            "Add the component, change augmentation and loss simultaneously, and report only the final score",
            "Compare otherwise matched versions with and without it across several seeds, controlling data splits and training budget, and report uncertainty",
            "Give only the new model substantially more training and attribute the entire gain to the component",
            "Compare different datasets and select each model's best seed"
        ],
        correctOptionIndex: 1, // B
        explanation: "Proper ablation controls all confounding variables (training budget, seeds, hyperparameters) and isolates the exact delta of the component.",
        reference: "Amazon Applied Scientist interview preparation (R08)"
    },
    {
        id: "AI57",
        tier: 8,
        type: "competency",
        tag: "THEORY",
        topic: "Causal product evaluation",
        skillTag: "A/B Testing & Causal Inference",
        weight: 4,
        questionText: "A recommendation model has better offline click prediction on logs created by the old recommender. The team wants to know whether the new recommender increases purchases. What study most directly estimates that deployment effect, where randomization is feasible?",
        options: [
            "Treat offline click AUC as proof of purchase uplift",
            "A properly randomized user-level A/B experiment with a prespecified purchase metric, guardrails, and adequate duration",
            "Compare exposed users with all unexposed users without accounting for selection",
            "Deploy only to users already most likely to purchase and compare their raw purchase rate with everyone else"
        ],
        correctOptionIndex: 1, // B
        explanation: "Online randomized controlled experiments (A/B testing) prevent feedback loop bias and provide causal estimates of policy changes.",
        reference: "Google Cloud Professional ML Engineer (R09)"
    },
    {
        id: "AI58",
        tier: 8,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "End-to-end practice",
        skillTag: "End-to-End AI System Engineering",
        weight: 2,
        questionText: "Which option best describes an original AI/ML system you can demonstrate?",
        options: [
            "I have no end-to-end project yet",
            "I have assembled guided components into a demo",
            "I have an original project with traceable data, a baseline, held-out evaluation, and repeatable inference",
            "I have also tested operational constraints and failure cases and enabled another person to reproduce and review it"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on end-to-end project maturity (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "Google Cloud Professional ML Engineer (R09)"
    },
    {
        id: "AI59",
        tier: 8,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Scientific practice",
        skillTag: "Scientific Experimentation & Auditing",
        weight: 2,
        questionText: "Which option best describes your evidence for evaluating an experimental claim?",
        options: [
            "I have not evaluated an experimental claim",
            "I have summarized a paper or reproduced a guided experiment",
            "I have reproduced or audited a claim against a fair baseline with recorded settings",
            "I have also run controlled ablations/repeated trials and reported uncertainty, failures, and limitations"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on scientific claim verification skills (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "Amazon Applied Scientist interview preparation (R08)"
    },
    {
        id: "AI60",
        tier: 8,
        type: "self-assessment",
        tag: "SELF-ASSESSMENT",
        topic: "Responsible-AI practice",
        skillTag: "Responsible AI & Ethics Review",
        weight: 2,
        questionText: "Which option best describes a project-specific AI risk review you can demonstrate?",
        options: [
            "I have not performed a project risk review",
            "I have completed a guided review or checklist",
            "I have documented relevant privacy, subgroup-performance, misuse, or reliability risks using project evidence",
            "I have also tested a mitigation, recorded remaining limitations, and obtained an independent review"
        ],
        optionScores: [0, 0.5, 1, 2],
        explanation: "Self-assessment scored on responsible AI auditing rigor (A: 0 pts, B: 0.5 pts, C: 1 pt, D: 2 pts).",
        reference: "NIST AI RMF: trustworthiness characteristics (R21)"
    }
];

// Helper to filter questions by semester according to the strict subset rule
export const getQuestionsForSemester = (semester = 5) => {
    const sem = Math.max(1, Math.min(8, Number(semester) || 5));
    const config = SEMESTER_CONFIG[sem];
    const [startId, endId] = config.idRange;
    const startIndex = AI_ML_QUESTIONS.findIndex(q => q.id === startId);
    const endIndex = AI_ML_QUESTIONS.findIndex(q => q.id === endId);
    return AI_ML_QUESTIONS.slice(startIndex, endIndex + 1);
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
                name: TIER_NAMES[tier],
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
            maxRawScore += q.weight; // 2 pts
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
            // Competency question
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
