# AI/ML competency surveys — strictly nested S1–S8

Version 2 · Research checked 13 October 2026 · Administrator edition with answers.

This replaces the earlier eight separate 12-question surveys. The revised design has **60 unique MCQs**, reused unchanged across eight forms. **S8 contains 25 questions**. Each preceding semester adds five questions, so **S8 ⊂ S7 ⊂ S6 ⊂ S5 ⊂ S4 ⊂ S3 ⊂ S2 ⊂ S1** holds as a proper-subset relation. The eight forms contain 340 question appearances in total.

Every competency item has one correct answer, four options, a fixed weight, and an explanation. Self-assessment items have four evidence-based response choices and explicit partial-credit scores, with no factual answer key. At least 83% of each form's questions are objective competency items. All reused question IDs retain exactly the same stem, options, answer, and weight.

## Exact survey membership

Read each ID range inclusively. The linked semester files contain the complete questions, answers, weights, and references for that form; the full bank is also printed below.

| Form | Included IDs | Total MCQs | Competency | Self-assessment | Maximum raw score |
|---|---|---:|---:|---:|---:|
| [S1](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S1-AI-ML-Survey.md) | AI01–AI60 | 60 | 50 | 10 | 188 |
| [S2](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S2-AI-ML-Survey.md) | AI06–AI60 | 55 | 46 | 9 | 178 |
| [S3](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S3-AI-ML-Survey.md) | AI11–AI60 | 50 | 42 | 8 | 168 |
| [S4](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S4-AI-ML-Survey.md) | AI16–AI60 | 45 | 38 | 7 | 154 |
| [S5](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S5-AI-ML-Survey.md) | AI21–AI60 | 40 | 34 | 6 | 140 |
| [S6](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S6-AI-ML-Survey.md) | AI26–AI60 | 35 | 30 | 5 | 126 |
| [S7](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S7-AI-ML-Survey.md) | AI31–AI60 | 30 | 26 | 4 | 112 |
| [S8](/Users/imdadurahmanimran/Documents/Codex/2026-10-13/project-name-a-web-based-cse/outputs/AI-ML-Semester-Surveys/S8-AI-ML-Survey.md) | AI36–AI60 | 25 | 22 | 3 | 94 |

For example, S8 is AI36–AI60. S7 contains all of AI36–AI60 plus AI31–AI35. S6 contains all of S7 plus AI26–AI30. Continue the same rule down to S1. **No inherited question is replaced by an easier variant.** Tier order provides an intended progression from basic to advanced; empirical difficulty still needs a student pilot.

This is a diagnostic that narrows as the student progresses. S1 students receive the full range, including advanced stretch items. The advanced section should not be presented as material they are already expected to know. Because later forms omit earlier material, a newly joining S8 student may need a separate prerequisite check; it must be labelled separately if the defined S8 form is to remain unchanged.

## Research informing the content

The questions below are original, interview-style assessment items. They are **not claimed to be actual questions asked by Amazon, Microsoft, or a certification provider**. Official interview guides establish relevant skills; technical documentation supports specific answers.

| Evidence | What it contributed |
|---|---|
| Microsoft technical interview guidance (R07) | Code reasoning, complexity, data fluency, probability/statistics, model evaluation, and optimization. |
| Amazon Applied Scientist preparation (R08) | Experimental reasoning, modeling assumptions, knowledge depth, coding, and scrutiny of research claims. |
| Google ML Engineer role description (R09) and AWS MLA-C02 guide (R10) | Data preparation, traditional and generative models, pipelines, serving, monitoring, and security. These are professional-role references, not entry-level hiring cutoffs. |
| AICTE's 2022 CSE model curriculum (R01), CS2023 AI Core (R02), and 2026 NPTEL offerings (R03–R05) | Mathematical/programming prerequisites, classical ML, search, deep learning, and application breadth. The AICTE document is dated 2022; the 2026 NPTEL pages provide more recent syllabus evidence. |
| NPTEL LLM and RL courses (R06, R24), framework documentation, and the LoRA paper | Attention, retrieval, reinforcement-learning reasoning, parameter counts, and training/debugging details. |
| NIST AI RMF (R21) and OWASP LLM01 (R22) | Context-sensitive risk evaluation, privacy, subgroup errors, and prompt-injection boundaries. |

A source link accompanies each question. For elementary calculations, curriculum/interview links establish topic relevance; the worked explanation establishes the answer. Self-assessment wording and all points are proposed assessment-design choices rather than scores prescribed by these sources. The surveyed guidance supports these skill areas, but is not a representative statistical survey of all employers.

## Weighting and final score

| Item group | Weight per question | Reason for the proposed weight |
|---|---:|---|
| Tier 1–2 competency | 2 | Basic prerequisites and short calculations. |
| Tier 3–6 competency | 3 | Applying core methods and interpreting technical behavior. |
| Tier 7–8 competency | 4 | Operational or advanced decisions with multiple constraints. |
| Every self-assessment | 2 | A small contribution from reported practice; objective answers dominate. |

For an objective question, award its weight for the correct option and 0 for a wrong or unanswered item. No negative marking. For self-assessment, award A=0, B=0.5, C=1, D=2 points. The four choices represent no experience, guided practice, independent work, and stronger documented/reviewable evidence. Permit local coursework or personal projects as evidence; paid work or an internship is not required.

```text
rawScore = sum(points awarded on every question in the chosen form)
finalScore = 100 × rawScore / maximumRawScoreForThatForm
technicalScore = 100 × technicalPoints / maximumTechnicalPointsForThatForm
practiceScore = 100 × selfAssessmentPoints / maximumSelfAssessmentPointsForThatForm
```

Round only the displayed result. Preserve exact raw points. For example, an S8 student earning 64/88 technical points and 4/6 practice points has rawScore=68/94, finalScore=72.34, technicalScore=72.73, and practiceScore=66.67. Self-assessment supplies at most 10.64% of the S1 raw maximum and 6.38% of the S8 maximum.

Show the technical and practice scores separately, plus missed topics and scores for the tiers actually administered. **Do not apply a single pass/fail threshold across semesters:** S1 contains many advanced items and S8 contains only the advanced core. Normalizing both to 100 does not make the forms equally difficult. The shared AI36–AI60 technical items can give a consistent common-item subscore, but repeated exposure can also improve scores through recall.

For roadmap decisions, prioritize the earliest prerequisite gaps supported by answers, then later topics. A four-question technical tier is only a screening signal, so confirm a suspected gap with follow-up work. Do not call an MCQ score proof of coding ability or job readiness. Pilot the bank with faculty and students, inspect distractors and item discrimination, and establish local cutoffs before consequential use. All weights, intended tiers, and difficulty judgments are provisional.

## Complete question bank

## Tier 1 — Foundations: programming, vectors, algorithms, and problem formulation

Included in S1.

### AI01 — Python

**Competency MCQ · Weight: 2 points · Tier 1**

What is the value of `sum(x*x for x in range(3))` in Python 3?

- **A.** 9
- **B.** 6
- **C.** 5
- **D.** 14

**Answer: C.** The loop uses 0, 1, and 2; their squares sum to 5.

**Reference basis:** [R07: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### AI02 — Linear algebra

**Competency MCQ · Weight: 2 points · Tier 1**

What is the dot product of `[1, 2]` and `[3, 4]`?

- **A.** 10
- **B.** 7
- **C.** 11
- **D.** `[3, 8]`

**Answer: C.** Multiply corresponding components and add: 1×3 + 2×4 = 11.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI03 — Problem formulation

**Competency MCQ · Weight: 2 points · Tier 1**

A dataset contains floor area and the sale price of previously sold houses. Predicting a new house's numerical price is primarily which task?

- **A.** Supervised classification
- **B.** Reinforcement learning
- **C.** Unsupervised clustering
- **D.** Supervised regression

**Answer: D.** The target is a known continuous value during training.

**Reference basis:** [R02: CS2023 AI Core](https://csed.acm.org/ai-cs-core/)

### AI04 — Algorithmic reasoning

**Competency MCQ · Weight: 2 points · Tier 1**

A program scans each of n records exactly once and performs a fixed number of arithmetic operations per record. Under the usual constant-time arithmetic assumption, what is its time complexity?

- **A.** O(1)
- **B.** O(log n)
- **C.** O(n²)
- **D.** O(n)

**Answer: D.** The work grows linearly with the number of records.

**Reference basis:** [R07: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

### AI05 — Programming practice

**Self-assessment MCQ · Weight: 2 points · Tier 1**

Which option best describes work you can demonstrate in Python?

- **A.** I have not yet run a Python program **(0 points)**
- **B.** I have run and modified a guided example **(0.5 points)**
- **C.** I have written an original script with functions and checked normal and edge-case inputs **(1 points)**
- **D.** I have a reproducible repository with tests and can explain and debug my implementation **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R07: Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)

## Tier 2 — Data and mathematics: SQL, probability, calculus, and search

Included in S1 through S2.

### AI06 — SQL and data aggregation

**Competency MCQ · Weight: 2 points · Tier 2**

Table `events(user_id, event_type)` has one row per event. Which query returns one row per user with that user's event count?

- **A.** `SELECT user_id, COUNT(*) FROM events GROUP BY event_type;`
- **B.** `SELECT COUNT(DISTINCT user_id) FROM events;`
- **C.** `SELECT user_id, COUNT(*) FROM events GROUP BY user_id, event_type;`
- **D.** `SELECT user_id, COUNT(*) FROM events GROUP BY user_id;`

**Answer: D.** Grouping only by user_id counts all events for each user; grouping by both columns splits each user's result by event type.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

### AI07 — Conditional probability

**Competency MCQ · Weight: 2 points · Tier 2**

Among 40 students who completed a Python course, 30 passed a coding test. What is the empirical probability of passing, conditional on completing the course?

- **A.** 0.75
- **B.** 0.40
- **C.** 1.33
- **D.** 0.30

**Answer: A.** The relevant denominator is the 40 course completers: 30/40 = 0.75.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI08 — Calculus

**Competency MCQ · Weight: 2 points · Tier 2**

If `f(x)=x²`, what is `f′(3)`?

- **A.** 12
- **B.** 9
- **C.** 6
- **D.** 3

**Answer: C.** The derivative is 2x, which equals 6 at x=3.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI09 — AI search

**Competency MCQ · Weight: 2 points · Tier 2**

Every edge in a finite graph has unit cost. Which search, using a queue and a visited set, finds a shortest path in number of edges from a start node to a reachable goal?

- **A.** Greedy search using an arbitrary heuristic
- **B.** Random walk stopped at its first goal
- **C.** Breadth-first search
- **D.** Depth-first search

**Answer: C.** BFS explores successive distance layers; the unit-cost assumption makes the first reached goal shortest.

**Reference basis:** [R02: CS2023 AI Core](https://csed.acm.org/ai-cs-core/)

### AI10 — Data practice

**Self-assessment MCQ · Weight: 2 points · Tier 2**

Which option best describes your evidence of preparing a dataset?

- **A.** I have not yet prepared a dataset **(0 points)**
- **B.** I have followed a data-cleaning tutorial **(0.5 points)**
- **C.** I have independently cleaned and summarized a dataset and recorded my decisions **(1 points)**
- **D.** I have a reproducible workflow with source/provenance, schema, missingness, and quality checks **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

## Tier 3 — Classical ML: optimization, preprocessing, probabilistic models, and PCA

Included in S1 through S3.

### AI11 — Optimization

**Competency MCQ · Weight: 3 points · Tier 3**

At the current parameter value, `dL/dw=+4`. With learning rate 0.1, what update does ordinary gradient descent apply to w?

- **A.** Decrease w by 0.4
- **B.** Set w to 0.4
- **C.** Increase w by 0.4
- **D.** Divide w by 4

**Answer: A.** The update is w_new = w − 0.1×4.

**Reference basis:** [R11: Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/)

### AI12 — Feature preprocessing

**Competency MCQ · Weight: 3 points · Tier 3**

A k-nearest-neighbor model uses income measured in rupees and age measured in years. Income dominates the Euclidean distances. What is the most appropriate first experiment?

- **A.** Fit a scaler on training features and apply that transformation to all splits
- **B.** Fit separate scalers independently on train and test
- **C.** Increase k until the units become irrelevant
- **D.** Multiply income by another large constant

**Answer: A.** Training-derived scaling addresses unequal feature scales without fitting preprocessing on evaluation data.

**Reference basis:** [R12: scikit-learn: common pitfalls and data leakage](https://scikit-learn.org/stable/common_pitfalls.html)

### AI13 — Probabilistic models

**Competency MCQ · Weight: 3 points · Tier 3**

Which conditional-independence assumption does a standard naive Bayes classifier make?

- **A.** Features are independent given the class
- **B.** Features must have the same marginal distribution
- **C.** The class is independent of all features
- **D.** All classes have equal prior probability

**Answer: A.** The factorization is over features conditional on the class; equal priors are not required.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI14 — Dimensionality reduction

**Competency MCQ · Weight: 3 points · Tier 3**

Which statement about ordinary, unsupervised PCA is correct?

- **A.** It identifies causal variables
- **B.** It directly maximizes classification accuracy
- **C.** It seeks orthogonal directions of high input variance without using target labels
- **D.** It guarantees retention of all information useful for prediction

**Answer: C.** PCA optimizes an input-representation criterion, not a supervised prediction criterion.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI15 — Classical ML practice

**Self-assessment MCQ · Weight: 2 points · Tier 3**

Which option best describes an ML baseline you have built?

- **A.** I have not trained a baseline model **(0 points)**
- **B.** I have run a guided training notebook **(0.5 points)**
- **C.** I have independently trained and evaluated a baseline on an appropriate held-out split **(1 points)**
- **D.** I have compared alternatives fairly, documented error cases, and made the experiment reproducible **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R08: Amazon Applied Scientist interview preparation](https://amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep)

## Tier 4 — Reliable evaluation: metrics, validation, leakage, and ensembles

Included in S1 through S4.

### AI16 — Classification metrics

**Competency MCQ · Weight: 3 points · Tier 4**

A classifier has TP=30, FP=10, and FN=20. What is its F1 score?

- **A.** 0.750
- **B.** 0.600
- **C.** 0.900
- **D.** About 0.667

**Answer: D.** F1 = 2TP/(2TP+FP+FN) = 60/90.

**Reference basis:** [R11: Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/)

### AI17 — Leakage prevention

**Competency MCQ · Weight: 3 points · Tier 4**

You compare imputation methods and logistic-regression hyperparameters with cross-validation. Which arrangement avoids learning preprocessing from validation folds?

- **A.** Choose imputation using the final test score
- **B.** Fit the imputer on each validation fold and transform its training fold
- **C.** Place the imputer and classifier in one pipeline fitted separately inside each training fold
- **D.** Impute the whole dataset once before cross-validation

**Answer: C.** Each fold's learned transformations must use that fold's training data only.

**Reference basis:** [R12: scikit-learn: common pitfalls and data leakage](https://scikit-learn.org/stable/common_pitfalls.html)

### AI18 — Time-series evaluation

**Competency MCQ · Weight: 3 points · Tier 4**

A demand model will forecast next month's sales using information available today. Which validation design best represents that use?

- **A.** Shuffle dates and split randomly
- **B.** Train on earlier dates and validate on later dates, with an appropriate gap if feature/label windows overlap
- **C.** Train on the latest month and validate on the earliest month
- **D.** Use the final test month to select every hyperparameter

**Answer: B.** Evaluation must respect information availability and the direction of time.

**Reference basis:** [R13: scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html)

### AI19 — Ensembles

**Competency MCQ · Weight: 3 points · Tier 4**

Why can a random forest generalize better than one deep decision tree?

- **A.** Averaging partially decorrelated trees can reduce prediction variance
- **B.** Every tree is guaranteed to be unbiased
- **C.** Using more trees always removes training-data bias
- **D.** Averaging makes held-out evaluation unnecessary

**Answer: A.** Bagging and feature subsampling can reduce variance; they do not guarantee removal of bias or other errors.

**Reference basis:** [R01: AICTE CSE Model Curriculum (2022), including the ML micro-specialization](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)

### AI20 — Evaluation practice

**Self-assessment MCQ · Weight: 2 points · Tier 4**

Which option best describes your validation work?

- **A.** I have not designed a validation procedure **(0 points)**
- **B.** I have used a split and metric specified by a tutorial **(0.5 points)**
- **C.** I have chosen and justified a split and metrics for my own problem **(1 points)**
- **D.** I have also checked leakage and threshold/metric tradeoffs, documenting their effect on results **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R13: scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html)

## Tier 5 — Deep learning: tensor shapes, CNNs, inference, and training stability

Included in S1 through S5.

### AI21 — Tensor shapes

**Competency MCQ · Weight: 3 points · Tier 5**

For matrix multiplication, X has shape `(32, 10)` and W has shape `(10, 4)`. What is the shape of `X @ W`?

- **A.** `(32, 10, 4)`
- **B.** `(32, 4)`
- **C.** `(4, 32)`
- **D.** `(10, 10)`

**Answer: B.** The inner dimensions match and the outer dimensions form the result.

**Reference basis:** [R25: PyTorch: beginner workflow](https://docs.pytorch.org/tutorials/beginner/basics/)

### AI22 — CNN parameters

**Competency MCQ · Weight: 3 points · Tier 5**

A standard 2D convolution has 3 input channels, 16 output channels, a 3×3 kernel, groups=1, and one bias per output channel. How many trainable parameters does it have?

- **A.** 144
- **B.** 432
- **C.** 448
- **D.** 4,096

**Answer: C.** Each output channel has 3×3×3 weights and 1 bias: 16×(27+1)=448.

**Reference basis:** [R04: NPTEL Deep Learning, IIT Ropar (2026)](https://onlinecourses.nptel.ac.in/e-learning/course/noc26_cs66)

### AI23 — Inference behavior

**Competency MCQ · Weight: 3 points · Tier 5**

A PyTorch model contains dropout. To use dropout's evaluation behavior and disable gradient recording during inference, which pair is appropriate?

- **A.** Only `torch.no_grad()`, because it also disables dropout
- **B.** `model.eval()` and `torch.no_grad()`
- **C.** Only `model.eval()`, because it disables all gradient tracking
- **D.** `model.train()` and `torch.no_grad()`

**Answer: B.** Evaluation mode changes dropout behavior; no_grad separately disables autograd recording.

**Reference basis:** [R17: PyTorch: automatic differentiation](https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html), [R25: PyTorch: beginner workflow](https://docs.pytorch.org/tutorials/beginner/basics/)

### AI24 — Training stability

**Competency MCQ · Weight: 3 points · Tier 5**

A recurrent model develops extremely large gradient norms and unstable updates. Which intervention directly bounds the gradient norm used by an optimizer step?

- **A.** Removing validation data
- **B.** Increasing the numerical scale of the loss without unscaling gradients
- **C.** Gradient norm clipping before the optimizer step
- **D.** Increasing the learning rate

**Answer: C.** Clipping controls gradient magnitude. It addresses exploding gradients, though the cause of instability should also be investigated.

**Reference basis:** [R04: NPTEL Deep Learning, IIT Ropar (2026)](https://onlinecourses.nptel.ac.in/e-learning/course/noc26_cs66)

### AI25 — Deep-learning practice

**Self-assessment MCQ · Weight: 2 points · Tier 5**

Which option best describes neural-network training you can demonstrate?

- **A.** I have not trained a neural network **(0 points)**
- **B.** I have run a guided neural-network notebook **(0.5 points)**
- **C.** I have independently trained a model and recorded losses, settings, and held-out results **(1 points)**
- **D.** I have also diagnosed a training failure, tested a fix, and compared against a simpler baseline **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R25: PyTorch: beginner workflow](https://docs.pytorch.org/tutorials/beginner/basics/)

## Tier 6 — Specialized AI: attention, retrieval, NLP evaluation, and reinforcement learning

Included in S1 through S6.

### AI26 — Attention shapes

**Competency MCQ · Weight: 3 points · Tier 6**

In one attention head, Q and K each have shape `(n, d_k)` and V has shape `(n, d_v)`. Ignoring batch dimensions, what is the output shape of `softmax(QKᵀ / sqrt(d_k)) V`?

- **A.** `(n, n)`
- **B.** `(d_v, n)`
- **C.** `(d_k, d_v)`
- **D.** `(n, d_v)`

**Answer: D.** QKᵀ is n×n; multiplying its normalized weights by V gives n×d_v.

**Reference basis:** [R06: NPTEL Introduction to Large Language Models](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_cs45)

### AI27 — Retrieval and adaptation

**Competency MCQ · Weight: 3 points · Tier 6**

An assistant must answer from a permission-controlled policy library that changes daily and cite the relevant passages. What is the most direct baseline architecture?

- **A.** Increase sampling temperature to obtain newer facts
- **B.** Retrieve authorized, up-to-date passages and provide them as context to the generator
- **C.** Remove retrieval and rely on training-loss reduction
- **D.** Fine-tune once and assume its weights contain every future change

**Answer: B.** Retrieval supports external, frequently updated knowledge and source references; its quality and access controls still require evaluation.

**Reference basis:** [R09: Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)

### AI28 — NLP evaluation

**Competency MCQ · Weight: 3 points · Tier 6**

In a three-class text classifier, every class should contribute equally to the summary metric despite different class sizes. Which metric follows that requirement?

- **A.** Micro-averaged F1
- **B.** Macro-averaged F1
- **C.** Overall accuracy
- **D.** Support-weighted F1

**Answer: B.** Macro-F1 averages the per-class F1 values with equal class weights.

**Reference basis:** [R05: NPTEL Neural Networks for CV and NLP (2026)](https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs04)

### AI29 — Reinforcement learning

**Competency MCQ · Weight: 3 points · Tier 6**

For a nonterminal transition, Q(s,a)=2, reward=1, gamma=0.9, max_a′ Q(s′,a′)=4, and alpha=0.5. Using Q_new = Q + alpha×(reward + gamma×maxQ − Q), what is Q_new?

- **A.** 5.3
- **B.** 3.3
- **C.** 2.3
- **D.** 4.6

**Answer: B.** The target is 1+0.9×4=4.6; the update is 2+0.5×(4.6−2)=3.3.

**Reference basis:** [R24: NPTEL Reinforcement Learning](https://onlinecourses.nptel.ac.in/e-learning/preview/noc21_cs71)

### AI30 — NLP or vision practice

**Self-assessment MCQ · Weight: 2 points · Tier 6**

Which option best describes a text or image project you can demonstrate?

- **A.** I have not built a text or image model pipeline **(0 points)**
- **B.** I have run a pretrained-model demonstration **(0.5 points)**
- **C.** I have adapted a model or built a pipeline and evaluated it on held-out examples **(1 points)**
- **D.** I have also compared alternatives, checked leakage/domain shift, and documented reproducible error analysis **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R05: NPTEL Neural Networks for CV and NLP (2026)](https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs04)

## Tier 7 — Operational ML: serving, drift, rollout, and data governance

Included in S1 through S7.

### AI31 — Serving architecture

**Competency MCQ · Weight: 4 points · Tier 7**

A system scores 10 million records once nightly; results are needed by morning, and no per-request response is required. Which serving approach is the most natural starting point?

- **A.** One permanently reserved low-latency endpoint per record
- **B.** Manual notebook execution with no scheduling or failure recovery
- **C.** Interactive inference solely to minimize single-request latency
- **D.** Batch inference sized to meet the processing deadline

**Answer: D.** Batch inference matches the throughput and scheduling requirement; cost and completion time still need measurement.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

### AI32 — Distribution shift

**Competency MCQ · Weight: 4 points · Tier 7**

Let X be the input and Y the target. Which change is specifically concept drift, rather than only covariate drift?

- **A.** The model file is renamed
- **B.** Only P(X) changes while P(Y given X) stays fixed
- **C.** P(Y given X) changes over time
- **D.** A deployment uses a different logging format

**Answer: C.** Concept drift changes the input–target relationship; changed input frequencies alone do not establish it.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

### AI33 — Controlled deployment

**Competency MCQ · Weight: 4 points · Tier 7**

A candidate model passes offline tests. Which rollout best supports detection and reversal of unexpected production regressions?

- **A.** Change the model and preprocessing independently without versioning
- **B.** Send all traffic immediately and remove the previous artifact
- **C.** Shadow the model indefinitely and declare business uplift without an experiment
- **D.** Release to a limited cohort, monitor predefined quality and operational guardrails, and retain a tested rollback path

**Answer: D.** A controlled rollout with clear guardrails and a compatible rollback path limits exposure while collecting evidence.

**Reference basis:** [R09: Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)

### AI34 — Data governance

**Competency MCQ · Weight: 4 points · Tier 7**

A model service processes personal records. Debugging needs the model version, validation failures, and request timing; raw personal text is unnecessary. Which logging design best matches those needs?

- **A.** Hash names but retain unrestricted raw text and all identifiers
- **B.** Publish complete request logs for reproducibility
- **C.** Store all raw text indefinitely because storage is cheap
- **D.** Record necessary diagnostics, exclude raw text, restrict access, and define retention

**Answer: D.** Data minimization, access restrictions, and retention policies reduce unnecessary exposure while preserving required observability.

**Reference basis:** [R21: NIST AI RMF: trustworthiness characteristics](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)

### AI35 — Deployment practice

**Self-assessment MCQ · Weight: 2 points · Tier 7**

Which option best describes model serving you can demonstrate?

- **A.** I have not served model predictions outside a notebook **(0 points)**
- **B.** I have followed a model-serving tutorial **(0.5 points)**
- **C.** I have built a versioned batch job or API with input validation and measured performance **(1 points)**
- **D.** I have also implemented monitoring and failure/rollback handling and tested them under representative conditions **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

## Tier 8 — Advanced core: quantitative reasoning, debugging, experimentation, and deployment judgment

Included in S1 through S8.

### AI36 — Base rates and Bayes

**Competency MCQ · Weight: 4 points · Tier 8**

A fraud flagger has 90% true-positive rate and 5% false-positive rate. Fraud prevalence is 1%. If these rates hold in deployment, approximately what fraction of flagged transactions are actually fraudulent?

- **A.** 15.4%
- **B.** 90.0%
- **C.** 1.0%
- **D.** 95.0%

**Answer: A.** Out of 10,000 transactions, expect 90 true flags and 495 false flags. Precision = 90/(90+495) ≈ 15.4%.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI37 — Regularized optimization

**Competency MCQ · Weight: 4 points · Tier 8**

For one training example, L(w)=(wx−y)²+lambda×w², with x=2, y=3, w=1, and lambda=0.5. What is w after one gradient-descent step with learning rate 0.1?

- **A.** 1.3
- **B.** 0.7
- **C.** 1.4
- **D.** 0.6

**Answer: A.** dL/dw = 2x(wx−y)+2lambda×w = −4+1 = −3; w_new=1−0.1×(−3)=1.3.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI38 — Decision costs

**Competency MCQ · Weight: 4 points · Tier 8**

On the same representative validation set, threshold T1 yields FN=100 and FP=200; T2 yields FN=80 and FP=500. A false negative costs 20 units and a false positive costs 1 unit; correct decisions cost 0. Which threshold has lower total cost?

- **A.** They have equal cost because they use the same model
- **B.** T1: 2,200 units, versus T2: 2,500
- **C.** T1: 300 units, versus T2: 580
- **D.** T2: 2,100 units, versus T1: 2,200

**Answer: D.** T1 costs 100×20+200=2,200; T2 costs 80×20+500=2,100. Lower error count need not mean lower cost.

**Reference basis:** [R11: Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/)

### AI39 — Grouped nested validation

**Competency MCQ · Weight: 4 points · Tier 8**

You have multiple records per patient, must tune hyperparameters, and want to estimate the tuned procedure's performance on unseen patients. Which protocol is most defensible?

- **A.** Tune once on all patient records and report outer-fold scores for that chosen model
- **B.** Place each patient's first record in training and later records in validation
- **C.** Use group-disjoint outer folds; perform group-disjoint tuning and preprocessing within each outer training set
- **D.** Randomly split records into outer folds, then group only the inner folds

**Answer: C.** Outer folds estimate generalization to unseen groups; the inner process must not access outer-test patients.

**Reference basis:** [R13: scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html), [R14: scikit-learn: nested cross-validation](https://scikit-learn.org/stable/auto_examples/model_selection/plot_nested_cross_validation_iris.html)

### AI40 — Uncertainty and paired experiments

**Competency MCQ · Weight: 4 points · Tier 8**

Two fixed models are evaluated on the same independent test cases. A paired bootstrap 95% interval for the accuracy difference A−B is [−0.8, +1.6] percentage points. Which conclusion is supported?

- **A.** The interval does not establish a positive improvement for A at this confidence level
- **B.** A is proven better because the upper endpoint is positive
- **C.** There is a 95% probability that every future deployment gains 1.6 points
- **D.** The models are proven equivalent

**Answer: A.** The interval includes zero and negative differences. It does not prove improvement or equivalence; paired resampling keeps each case's two predictions together.

**Reference basis:** [R16: SciPy: paired bootstrap and confidence intervals](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)

### AI41 — Calibration versus ranking

**Competency MCQ · Weight: 4 points · Tier 8**

Model A and a strictly monotonically recalibrated version B rank every example identically, with no new ties. What can change even if ROC-AUC stays the same?

- **A.** The ranking of every positive–negative pair
- **B.** Probability calibration and log loss
- **C.** The true class prevalence in the test data
- **D.** The number of test examples

**Answer: B.** ROC-AUC depends on ranking; a monotonic probability transformation can change calibration and probability-based loss.

**Reference basis:** [R15: scikit-learn: probability calibration](https://scikit-learn.org/stable/modules/calibration.html)

### AI42 — Point-in-time features

**Competency MCQ · Weight: 4 points · Tier 8**

A fraud model makes a decision at transaction time t. Historical tables include chargebacks recorded weeks later. How should a trailing-30-day chargeback feature be constructed for training?

- **A.** Use only chargeback records that were actually available by t, with the same historical window semantics as serving
- **B.** Join the latest chargeback table and count every eventual chargeback associated with that window
- **C.** Compute the feature using all records, then rely on a random split to remove leakage
- **D.** Allow future chargebacks if their related transaction happened before t

**Answer: A.** Both event time and information availability matter; later outcomes cannot become features for an earlier decision.

**Reference basis:** [R19: AWS: feature store and point-in-time data](https://docs.aws.amazon.com/prescriptive-guidance/latest/ml-operations-planning/feature-store.html)

### AI43 — Bias and regularization

**Competency MCQ · Weight: 4 points · Tier 8**

A heavily L2-regularized linear model has high training error and similarly high validation error. Data and optimization checks pass; the target is learnable with these features. Which experiment most directly tests whether regularization is too restrictive?

- **A.** Collect only more examples while keeping an arbitrarily large penalty
- **B.** Select the model with the lowest test error over many trials
- **C.** Reduce the penalty and compare training and validation errors under the same protocol
- **D.** Increase the penalty and expect training error to fall

**Answer: C.** An excessive penalty can produce underfitting. Reducing it tests that hypothesis; validation decides whether generalization improves.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI44 — Representation tradeoffs

**Competency MCQ · Weight: 4 points · Tier 8**

An unsupervised PCA transformation retains 99% of input variance, yet a classifier's held-out accuracy drops sharply. Which explanation is plausible?

- **A.** Every retained principal component must be independent of the target
- **B.** PCA necessarily used the test labels
- **C.** A low-variance direction carried useful target information that PCA discarded
- **D.** Retaining 99% variance guarantees retaining 99% classification accuracy

**Answer: C.** Input variance and predictive relevance differ. Feature transformations must be evaluated for the downstream task.

**Reference basis:** [R03: NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)

### AI45 — Autograd code interpretation

**Competency MCQ · Weight: 4 points · Tier 8**

In PyTorch, run `x=torch.tensor(2.0, requires_grad=True); (x*x).backward(); (3*x).backward()`. No gradient is cleared between calls, and the second expression creates a fresh graph. What is `x.grad` afterward?

- **A.** 4.0
- **B.** 3.0
- **C.** An error because two different graphs can never share a leaf
- **D.** 7.0

**Answer: D.** The first backward contributes 2x=4; the second contributes 3. Gradients accumulate in the leaf's grad field.

**Reference basis:** [R17: PyTorch: automatic differentiation](https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html)

### AI46 — Mixed-precision training

**Competency MCQ · Weight: 4 points · Tier 8**

During float16 training, some small gradients underflow to zero. Which AMP mechanism directly targets this issue while preserving the intended unscaled optimizer update?

- **A.** Scale the loss but never unscale its resulting gradients
- **B.** Cast every reduction to float16 and remove scaling
- **C.** Multiply the learning rate by a large constant and leave gradients unchanged
- **D.** Scale the loss before backward, then unscale gradients before clipping/stepping and handle nonfinite values

**Answer: D.** Loss scaling preserves small gradient values during backward; unscaling restores their intended magnitude before the update.

**Reference basis:** [R18: PyTorch: automatic mixed precision examples](https://docs.pytorch.org/docs/stable/notes/amp_examples.html)

### AI47 — Transfer learning and domain shift

**Competency MCQ · Weight: 4 points · Tier 8**

You have 800 labelled target-domain images and a pretrained backbone. A random split is inflated by multiple views of each object. What is the strongest comparison of a frozen backbone versus fine-tuning?

- **A.** Split by object, compare both approaches on the same validation protocol, and reserve unseen objects for final testing
- **B.** Fine-tune on every image, then evaluate a frozen version on those same images
- **C.** Split by image and tune until the test score stops improving
- **D.** Assume the frozen model is best because the target dataset is small

**Answer: A.** Grouping prevents object-identity leakage. The data size alone does not settle which adaptation method generalizes better.

**Reference basis:** [R05: NPTEL Neural Networks for CV and NLP (2026)](https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs04), [R13: scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html)

### AI48 — Autoregressive training

**Competency MCQ · Weight: 4 points · Tier 8**

A next-token language model accidentally lets each training position attend to later tokens, including the target token. Training loss becomes very low. Why is this invalid for left-to-right generation?

- **A.** It guarantees the same low loss at generation time
- **B.** It is equivalent to standard causal masking
- **C.** Training exposes future information that is unavailable when generating that token
- **D.** It merely increases batch size without affecting the task

**Answer: C.** A causal attention mask prevents access to future positions; otherwise the training objective can be solved using unavailable information.

**Reference basis:** [R06: NPTEL Introduction to Large Language Models](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_cs45)

### AI49 — Parameter-efficient adaptation

**Competency MCQ · Weight: 4 points · Tier 8**

A frozen weight matrix W is 4,096×4,096. A LoRA update is BA with B shaped 4,096×8 and A shaped 8×4,096. Ignoring biases and scalars, how many trainable adapter parameters are added for this matrix?

- **A.** 32,768
- **B.** 65,536
- **C.** 134,217,728
- **D.** 16,777,216

**Answer: B.** The two matrices contribute 4,096×8 + 8×4,096 = 65,536 parameters.

**Reference basis:** [R23: Hu et al.: LoRA, original paper](https://arxiv.org/abs/2106.09685)

### AI50 — RAG diagnosis

**Competency MCQ · Weight: 4 points · Tier 8**

On a held-out QA set, an LLM answers correctly on 95% of cases when given the gold supporting passage, but 55% with production retrieval. Production retrieval includes the needed passage on only 60% of cases. What should be investigated first?

- **A.** Retrieval coverage, chunking, indexing, and query matching, followed by a controlled re-evaluation
- **B.** Discarding questions for which retrieval fails from the reported metric
- **C.** Full model pretraining before inspecting retrieval
- **D.** Raising temperature as the main way to fix missing evidence

**Answer: A.** The oracle-context comparison points to retrieval as a major bottleneck, though the full system still needs evaluation after a fix.

**Reference basis:** [R09: Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)

### AI51 — Prompt injection and access control

**Competency MCQ · Weight: 4 points · Tier 8**

A retrieved document tells an assistant to ignore its instructions and send customer data to an external endpoint. What is the strongest architectural response?

- **A.** Strip one suspicious phrase and assume all injections are removed
- **B.** Trust any command found in a highly ranked document
- **C.** Rely only on a prompt telling the model to be careful, while granting unrestricted tools
- **D.** Treat retrieved text as untrusted content and enforce data/tool permissions outside the model, with restricted tool actions

**Answer: D.** Retrieval can introduce indirect prompt injection. Independent authorization and least privilege limit what a manipulated model can do.

**Reference basis:** [R22: OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

### AI52 — Serving tradeoffs

**Competency MCQ · Weight: 4 points · Tier 8**

Under representative load, configuration A has 80 ms mean and 240 ms p95 latency; B has 100 ms mean and 170 ms p95. Both meet throughput and budget needs. The requirement is p95 ≤ 200 ms. Which choice satisfies the stated requirement?

- **A.** Both; only throughput matters
- **B.** Neither; a mean above 80 ms violates p95 ≤ 200 ms
- **C.** B; A fails the tail-latency requirement despite its lower mean
- **D.** A; the lower mean automatically implies lower p95

**Answer: C.** The stated criterion concerns p95, so only B meets it under the measured workload.

**Reference basis:** [R20: NVIDIA Triton: inference metrics](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/docs/metrics.html)

### AI53 — Training-serving skew

**Competency MCQ · Weight: 4 points · Tier 8**

A serialized classifier performs correctly offline but badly behind an API. The API passes features as `[income, age]`; training used `[age, income]`. Both are numeric and no exception occurs. What is the most direct prevention?

- **A.** Tune the learning rate of the existing model
- **B.** Use a versioned feature schema and shared preprocessing, with parity tests on identical raw examples
- **C.** Retrain on the same features without checking their order
- **D.** Monitor only aggregate request counts

**Answer: B.** A semantic feature-order mismatch can silently invalidate predictions. Schema and transformation parity checks address the cause.

**Reference basis:** [R12: scikit-learn: common pitfalls and data leakage](https://scikit-learn.org/stable/common_pitfalls.html)

### AI54 — Monitoring with delayed labels

**Competency MCQ · Weight: 4 points · Tier 8**

Labels arrive 30 days after predictions. Today's feature distribution differs from training, but labels are unavailable. What can you conclude now?

- **A.** Concept drift is proven solely because P(X) changed
- **B.** The model must be retrained immediately on its own predictions as ground truth
- **C.** The exact current accuracy is known from the feature drift statistic
- **D.** Input drift is detected; investigate it and collect delayed outcome evidence before claiming predictive accuracy has dropped

**Answer: D.** Input drift is a warning signal, not direct measurement of current prediction error or a proof that P(Y given X) changed.

**Reference basis:** [R10: AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)

### AI55 — Subgroup evaluation

**Competency MCQ · Weight: 4 points · Tier 8**

Two groups have equal overall accuracy but false-negative rates of 10% and 35%. The application cares about missed positives. What is the most defensible conclusion?

- **A.** Equal accuracy does not resolve the disparity; inspect uncertainty, subgroup data, and the consequences of missed positives
- **B.** Removing group labels from the report removes the disparity
- **C.** Different false-negative rates prove that no model could improve outcomes
- **D.** Equal accuracy proves equal impact

**Answer: A.** Aggregate parity can conceal different error patterns. Assess the relevant harm and uncertainty in context.

**Reference basis:** [R21: NIST AI RMF: trustworthiness characteristics](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)

### AI56 — Research and ablation

**Competency MCQ · Weight: 4 points · Tier 8**

A paper claims a new component improves a model by 0.4 points. Which experiment best tests the component's contribution?

- **A.** Add the component, change augmentation and loss simultaneously, and report only the final score
- **B.** Compare otherwise matched versions with and without it across several seeds, controlling data splits and training budget, and report uncertainty
- **C.** Give only the new model substantially more training and attribute the entire gain to the component
- **D.** Compare different datasets and select each model's best seed

**Answer: B.** A controlled ablation isolates the component; repeated runs reveal variation that a single best run hides.

**Reference basis:** [R08: Amazon Applied Scientist interview preparation](https://amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep)

### AI57 — Causal product evaluation

**Competency MCQ · Weight: 4 points · Tier 8**

A recommendation model has better offline click prediction on logs created by the old recommender. The team wants to know whether the new recommender increases purchases. What study most directly estimates that deployment effect, where randomization is feasible?

- **A.** Treat offline click AUC as proof of purchase uplift
- **B.** A properly randomized user-level A/B experiment with a prespecified purchase metric, guardrails, and adequate duration
- **C.** Compare exposed users with all unexposed users without accounting for selection
- **D.** Deploy only to users already most likely to purchase and compare their raw purchase rate with everyone else

**Answer: B.** The logged policy and user selection can bias observational comparisons; random assignment supports a causal comparison of deployed policies.

**Reference basis:** [R09: Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)

### AI58 — End-to-end practice

**Self-assessment MCQ · Weight: 2 points · Tier 8**

Which option best describes an original AI/ML system you can demonstrate?

- **A.** I have no end-to-end project yet **(0 points)**
- **B.** I have assembled guided components into a demo **(0.5 points)**
- **C.** I have an original project with traceable data, a baseline, held-out evaluation, and repeatable inference **(1 points)**
- **D.** I have also tested operational constraints and failure cases and enabled another person to reproduce and review it **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R09: Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)

### AI59 — Scientific practice

**Self-assessment MCQ · Weight: 2 points · Tier 8**

Which option best describes your evidence for evaluating an experimental claim?

- **A.** I have not evaluated an experimental claim **(0 points)**
- **B.** I have summarized a paper or reproduced a guided experiment **(0.5 points)**
- **C.** I have reproduced or audited a claim against a fair baseline with recorded settings **(1 points)**
- **D.** I have also run controlled ablations/repeated trials and reported uncertainty, failures, and limitations **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R08: Amazon Applied Scientist interview preparation](https://amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep)

### AI60 — Responsible-AI practice

**Self-assessment MCQ · Weight: 2 points · Tier 8**

Which option best describes a project-specific AI risk review you can demonstrate?

- **A.** I have not performed a project risk review **(0 points)**
- **B.** I have completed a guided review or checklist **(0.5 points)**
- **C.** I have documented relevant privacy, subgroup-performance, misuse, or reliability risks using project evidence **(1 points)**
- **D.** I have also tested a mitigation, recorded remaining limitations, and obtained an independent review **(2 points)**

**Scoring:** There is no factually correct choice. Score demonstrated practice using A=0, B=0.5, C=1, D=2 points. Record evidence status separately; lack of opportunity is not evidence of low aptitude.

**Reference basis:** [R21: NIST AI RMF: trustworthiness characteristics](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)

## Implementation and verification

The accompanying `AI-ML-Nested-Question-Bank.json` stores each question once and gives every survey its exact `questionIds` list. Generate the form from these IDs. Keep `weight`, stem, option IDs/text, and the answer key on the canonical question object; do not copy and edit question content separately for each semester. Persist the bank version with each attempt.

The file is an administrator dataset containing answers. Spring should score on the server and send React only the question fields needed during the attempt. Option IDs remain stable even if the display order is shuffled. Store self-reported evidence status separately from technical correctness. For strict administration of these forms, do not omit advanced items through adaptive stopping; any shortened assessment would be a separately versioned form.

The supplied bank was checked for 60 distinct question IDs, four options per item, valid objective keys, matching option scores, the 25-item S8 minimum, and all seven strict-subset relationships. The separate semester documents are generated from the same canonical question objects. Selected numerical answers were independently recomputed. These checks establish structural consistency, not empirical validity of the assessment.

## Source register

- **R01.** [AICTE CSE Model Curriculum (2022), including the ML micro-specialization](https://www.aicte.gov.in/sites/default/files/Updated-AICTE%20-%20UG%20CSE.pdf)
- **R02.** [CS2023 AI Core](https://csed.acm.org/ai-cs-core/)
- **R03.** [NPTEL Mathematical Foundations of Machine Learning (2026)](https://onlinecourses.nptel.ac.in/noc26_cs02/preview)
- **R04.** [NPTEL Deep Learning, IIT Ropar (2026)](https://onlinecourses.nptel.ac.in/e-learning/course/noc26_cs66)
- **R05.** [NPTEL Neural Networks for CV and NLP (2026)](https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs04)
- **R06.** [NPTEL Introduction to Large Language Models](https://onlinecourses.nptel.ac.in/e-learning/preview/noc25_cs45)
- **R07.** [Microsoft technical interview guidance](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)
- **R08.** [Amazon Applied Scientist interview preparation](https://amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep)
- **R09.** [Google Cloud Professional ML Engineer role and certification](https://cloud.google.com/learn/certification/machine-learning-engineer)
- **R10.** [AWS ML Engineer Associate MLA-C02 guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-02/machine-learning-engineer-associate-02.html)
- **R11.** [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/)
- **R12.** [scikit-learn: common pitfalls and data leakage](https://scikit-learn.org/stable/common_pitfalls.html)
- **R13.** [scikit-learn: cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html)
- **R14.** [scikit-learn: nested cross-validation](https://scikit-learn.org/stable/auto_examples/model_selection/plot_nested_cross_validation_iris.html)
- **R15.** [scikit-learn: probability calibration](https://scikit-learn.org/stable/modules/calibration.html)
- **R16.** [SciPy: paired bootstrap and confidence intervals](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)
- **R17.** [PyTorch: automatic differentiation](https://docs.pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html)
- **R18.** [PyTorch: automatic mixed precision examples](https://docs.pytorch.org/docs/stable/notes/amp_examples.html)
- **R19.** [AWS: feature store and point-in-time data](https://docs.aws.amazon.com/prescriptive-guidance/latest/ml-operations-planning/feature-store.html)
- **R20.** [NVIDIA Triton: inference metrics](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/docs/metrics.html)
- **R21.** [NIST AI RMF: trustworthiness characteristics](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)
- **R22.** [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- **R23.** [Hu et al.: LoRA, original paper](https://arxiv.org/abs/2106.09685)
- **R24.** [NPTEL Reinforcement Learning](https://onlinecourses.nptel.ac.in/e-learning/preview/noc21_cs71)
- **R25.** [PyTorch: beginner workflow](https://docs.pytorch.org/tutorials/beginner/basics/)
