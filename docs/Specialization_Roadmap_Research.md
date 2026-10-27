# Detailed specialization roadmaps: content and internship research

Reviewed **27 October 2026**. Scope is the five non-AI/ML **roadmap pages and their generated data only**. Question banks, survey forms, answer keys, scoring, skill reports and answer review retain their existing assessment model. AI/ML remains the reference implementation.

## Learning structure

The authored steps follow real subject boundaries, not a fixed target number: Full Stack has 30, Cloud/DevOps 27, Data Engineering 26, Game Development 21 and Embedded/Robotics 26. Every step has a stable id, original broad-area assessment mapping, goal, study focus, estimated selected-study time and explicit prerequisites. A score belongs to the broad area; it is not a new measurement of each lesson.

Data lives in `backend/src/main/resources/roadmaps/<slug>.json`, separate from the assessment banks and the scripts that regenerate them. Each learning step has a curated roadmap-specific prerequisite list. The original survey areas remain intact as assessment groupings; unrelated steps are not made prerequisites merely because they are adjacent in a list. For example, JavaScript functions do not require prior CSS layout, and Git does not require an HTTP course. A step's four-hour study estimate is a curator planning allowance, not a claim about a provider's full course or a completion requirement. Assignment time is separate. Students starting late retain the same foundations; a dense schedule is labeled honestly.

Every authored step has a bounded exercise available for semester selection. There is **one** selected assignment per displayed semester, not one compulsory assignment per lesson. Course exercises are preferred among the semester's scheduled steps. Each original exercise has concrete inputs, outputs or behavior, boundaries and acceptance criteria. Assignments use local files, fictional data, simulations or primitive Unity scenes. No paid cloud deployment, physical robot, additional student assessment, upload or completion verification is introduced.

## Verified course exercise sources

| Track | Existing course and selected exercise | Scope / access |
| --- | --- | --- |
| Full Stack | [MDN HTML text basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics) | First two exercises only; public material. The provider calls these skill tests, but the planner adds no student test or marking workflow. |
| Full Stack | [Full Stack Open: Introduction to React](https://fullstackopen.com/en/part1/introduction_to_react/) | Exercises 1.1–1.2 only; public local work; no course submission. |
| Cloud/DevOps | [Terraform: local Docker infrastructure](https://developer.hashicorp.com/terraform/tutorials/docker-get-started/docker-build) | Local sample lifecycle, inspection and cleanup; no cloud account. |
| Data Engineering | [CS50 SQL: Cyberchase](https://cs50.harvard.edu/sql/psets/0/cyberchase/) | Queries 1–5 only with official database; public instructions and local SQLite. |
| Game Development | [Unity Junior Programmer: Play Fetch](https://learn.unity.com/pathway/junior-programmer/unit/basic-gameplay/tutorial/challenge-2-play-fetch?version=) | Five non-bonus behavior fixes; supplied starter project. Unity ID may be required for downloads/progress. No finished solutions. |
| Embedded/Robotics | [CS50 C: Mario, less comfortable](https://cs50.harvard.edu/x/psets/1/mario/less/) | One bounded introductory C exercise; no provider submission or automated student grading. |

Other exercises are explicitly marked **Original course-aligned exercise** rather than attributed to a provider. Linked courses are reused from the current roadmap. Provider labels are corrected in roadmap metadata. Examples of primary-source checks include [NPTEL Java](https://nptel.ac.in/courses/106105191), [ARM embedded design](https://nptel.ac.in/courses/106105193), [Embedded Systems](https://nptel.ac.in/courses/108105057), [Linux Foundation Linux](https://training.linuxfoundation.org/training/introduction-to-linux/), [Kubernetes](https://training.linuxfoundation.org/training/introduction-to-kubernetes/), [Kafka 101](https://developer.confluent.io/courses/apache-kafka/events/), [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) and [Modern Robotics](https://modernrobotics.northwestern.edu/nu-gm-book-resource/).

The prior ROS link mixed a Jazzy course label with a rolling-branch file. The roadmap now points to [the official Jazzy tutorial sources](https://github.com/ros2/ros2_documentation/tree/jazzy/source/Tutorials). The rendered documentation presented an anti-bot access restriction during research; the public source tree was verified instead. No assessment-bank URL was rewritten.

Cloud Git/delivery material uses the **already linked Full Stack Open supporting course**, including its supplied Git guide; Terraform is not credited with teaching Git.

## Internship matching rules

The shared matcher uses the same logic as AI/ML: every mandatory requirement must map to both a course step and an **actually selected** assignment description. It does not examine student work or infer proficiency. Introductory simulations are not evidence of hardware practice, production engineering, a published portfolio or commercial experience. Preferred qualifications and workplace learning goals are not promoted to mandatory entry qualifications.

Only verified current India-based or explicitly India-eligible remote internships may appear. Unstated compensation/duration/deadline is labeled, not invented. A paid cloud certificate or fee-based training program is not a substitute internship. Unknown mandatory eligibility restrictions cause exclusion. Applications are never submitted by this website.

## Employer research ledger

Official pages were reviewed on 27 October 2026. Entries marked unverified are withheld, not asserted closed. Roles may match only some personalized roadmaps. There is no quota and no fallback partial-match list.

| Track | Official candidate | Decision |
| --- | --- | --- |
| Full Stack | [Baap: Full Stack Developer Intern](https://baapcompany.com/careers/) | Cataloged conditionally: JavaScript, a backend language and SQL. Existing Java-based path can meet these without adding Node.js. Role-specific email route is published. |
| Full Stack | [Baap: Java Developer Intern](https://baapcompany.com/careers/) | Cataloged conditionally: Java, Spring and SQL. Campus attendance is disclosed; stipend and duration for these specific roles are not inferred from a separate graduate startup cohort. |
| Full Stack | [Baap: Web Developer Intern](https://baapcompany.com/careers/) | Not cataloged in this revision: its HTML/CSS/JavaScript/React/Git combination needs a separate audited selected-exercise mapping. No broader readiness claim is made. |
| Full Stack | [9th Bit: Software Engineering Intern](https://9thbit.org/careers.html) | Excluded: listed work involves Python/Node backends and LLM integration outside this Java roadmap; complete entry criteria are not separated clearly. |
| Full Stack | [LivingAI: Full-Stack Intern](https://livingai.in/careers/) | Excluded: mandatory complete web-project portfolio is not guaranteed by the selected small exercises. |
| Full Stack | [Trezno: Full Stack Development Intern](https://treznotech.com/careers) | Withheld: official page timed out; indexed PHP/Python backend stack does not match the existing Java path. |
| Cloud | [Agentic Academy Labs: DevOps Intern](https://www.agenticacademy.online/company/careers/devops-intern) | Cataloged conditionally: Linux, Git, scripting and network/web foundations. Live application form opened without entering or sending data. Published as paid and remote for India; no amount or duration stated. |
| Cloud | [Baap: DevOps and Cloud Intern](https://baapcompany.com/careers/) | Researched: Linux/Git entry skills are relevant; not cataloged in this revision pending a separate role-specific mapping and campus-availability review. |
| Cloud | [LaunchPixel: Cloud & DevOps](https://careers.launchpixel.in/cloud-devops-intern) | Excluded: employer explicitly marks applications paused. |
| Cloud | [Digital Tech Prosperity](https://www.digitaltechs.in/careers) | Withheld: current-looking role discovered, but complete mandatory qualifications/application status were not established. |
| Cloud | [SDMNC internship program](https://www.sdmncsoftware.com/internship) | Withheld: program discovered; no verified role-specific eligibility/fee/application assessment. |
| Data | [9th Bit: Data Engineer Intern](https://9thbit.org/careers.html) | Excluded: page lists work rather than complete entry requirements; no fully audited match for the warehouse/visualization expectations. |
| Data | [Trezno: Data Engineer Intern](https://treznotech.com/careers) | Withheld: live fetch timed out; indexed Databricks/dbt/Spark stack is not hands-on coverage of the local standard-library assignments. |
| Data | [AGT Intelligence: Geospatial Data Engineer Intern](https://agt-intelligence.com/careers) | Excluded: specialized spatial/distributed tooling requires a deeper mapping than the existing generic data exercises support. |
| Data | [Robic Rufarm: ML/Data Engineer internship](https://myrufarm.freshteam.com/jobs/_h2Et58ANX67/software-ai-internship-program) | Excluded: completed degree and ML/deep-learning tooling expectations exceed this undergraduate data track. Unpaid status alone is not an exclusion. |
| Game | [Avsar: Unity Game Development Intern](https://avsargames.com/careers/) | Cataloged conditionally: Unity/C# and OOP. Role-specific application dialog opened without filling/submitting it; India remote eligibility stated. No role-specific stipend/duration published. |
| Game | [Avsar: Game Design Intern](https://avsargames.com/careers/) | Not cataloged: distinct design/production expectations require a separate mapping, not merely Unity familiarity. |
| Game | [Avsar: Junior Unity Game Developer](https://avsargames.com/careers/) | Excluded: full-time experienced role, not an internship. |
| Game | [Webtronix: Game Development Intern](https://www.web-tronix.com/careers/) | Withheld: India location/eligibility and current role-specific application route not established. |
| Game | [Advisory Apps: Game Development Intern](https://stdaigou.com.my/career/) | Excluded: Kuala Lumpur location; India-eligible remote access not established. |
| Embedded | [Sahrang Medtech: Embedded Systems Intern](https://sahrangmedtech.systems/careers.html) | Excluded: hands-on hardware familiarity and electronics-degree eligibility cannot be assumed from a CSE roadmap using simulations. |
| Embedded | [Sahrang Medtech: Software Development Intern](https://sahrangmedtech.systems/careers.html) | Excluded for this track: Git/software workflow requirement is not practised by its selected C/robotics exercises. |
| Embedded | [Edall: Embedded Engineer internship](https://edallsystems.com/careers/embedded-engineer-0-1-years-exp/) | Excluded: must already be from Bangalore; residency cannot be established from current semester. No city data collection added. |
| Embedded | [Honeywell: bachelor embedded internship](https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/job/159851) | Withheld: live requirements, deadline and active application status not fully verified; discovery snippet is insufficient. |
| Embedded | [Vihanga EmbedSoft careers](https://www.vihangaembedsoft.com/careers/) | Withheld: training/project-intern route requires fee and eligibility clarification; not treated as a verified employer opening. |
| Embedded | [Digantara: Embedded Platform Intern](https://careers.kula.ai/digantara/64158-embedded-platform-intern) | Withheld: specific platform/hardware experience and current application route not fully audited. |

The data-engineering and embedded catalogs are intentionally empty after screening. Their section still exists; there is no invented opening or explanatory replacement content. Other catalogs contain four distinct roles in total, shown only when their mappings resolve in a personalized roadmap.

## Maintenance and verification

- Learning catalog: `roadmaps/<slug>.json`. Internship catalog: `roadmaps/<slug>-internships.json`. Do not edit assessment-bank questions to adjust roadmap detail.
- Update the relevant `contentVersion` whenever content or verification dates change. The API combines learning and internship versions so older cached reports require resubmission while survey drafts retain their existing assessment version.
- Use exact UTC verification instants. Deadline must be an exact instant with a known timezone; withhold ambiguous deadlines. Both server and browser stop displaying a role at the earlier of the deadline and verification + seven days. The browser also handles a report remaining open past expiry.
- Preserve mandatory versus preferred requirements. Never map a course title alone to practical experience. Check all requirement alternatives against the relevant track's course and assignment IDs.
- Included listings were checked at 13:13:11 UTC / 18:43:11 IST on 27 October 2026. Reverify them by **3 November 2026, 18:43:11 IST** to keep displaying them. No recurring automation or live scraping was created.
- Run the specialization catalog/controller tests, AI/ML regression tests, shared browser-expiry checks, and frontend build. These are software checks, not student tests.
