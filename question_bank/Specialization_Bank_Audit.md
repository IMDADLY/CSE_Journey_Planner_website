# Five specialization banks: coverage and roadmap audit

**Status:** expanded editor edition. The five common surveys each have 130 items: 120 weighted technical MCQs and 10 separately scored self-assessment MCQs. This meets the lower end of the requested 130–190 item range. Each form has the same questions in S1–S8; the selected semester changes the roadmap schedule.

| Specialization | Technical | Self-assessment | Learning nodes | Fewest technical items in a node |
|---|---:|---:|---:|---:|
| Full Stack Web Development | 120 | 10 | 8 | 15 |
| Cloud Computing & DevOps | 120 | 10 | 8 | 10 |
| Data Engineering & Big Data | 120 | 10 | 8 | 11 |
| Game Development & Interactive Media | 120 | 10 | 7 | 14 |
| Embedded Systems & Robotics / IoT | 120 | 10 | 9 | 11 |

Each bank retains 50 technical and 10 self-assessment questions from its earlier version and adds 70 technical questions. The extensions include a keyed answer, four options, an explanation, a difficulty weight, a learning-node mapping, and a topic resource. The generated JSON and readable survey editions come from `scripts/export-specialization-surveys.cjs`; extension source items are in `scripts/extra-specialization-questions.cjs`.

## Interpretation and review limits

The server reports unanswered items separately and scores self-assessment separately. It builds the roadmap from technical node scores, prerequisites, the current semester, missed concepts, linked resources, and practical exit tasks. These scores are screening signals, not validated measures of mastery or placement readiness. Difficulty weights and thresholds are editorial estimates that need student pilot calibration.

The extensions cite a relevant official or academic course resource for each node. Those links establish topic coverage; they are not an item-by-item proof or precise chapter locator. A subject expert should check factual correctness, distractor quality, source alignment, accessibility, and duplicate concepts before high-stakes use. The 50 retained technical questions also need this review. The AI/ML bank remains a separate 190-item review edition with a more granular, 30-subtopic blueprint.

## Source mapping

The curated maps in `roadmap_sources/` establish the earlier question-to-node and question-to-resource links. The generator preserves each retained question's source reference and gives new questions the corresponding node resource. A moved ROS tutorial link is replaced with the official ROS 2 first-steps source. Links and course syllabi need periodic checking.

## Validation

- Generation checks total counts, unique IDs, four distinct options, answer-key membership, valid learning nodes, and resource coverage.
- Controller tests cover all five public forms, hidden keys, correct scoring, unanswered submissions, invalid options, and the S1/S8 schedule difference.
- The frontend build excludes the legacy client-side answer-key modules.
