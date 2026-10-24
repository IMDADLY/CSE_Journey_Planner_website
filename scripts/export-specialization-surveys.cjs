// Converts the five reviewed legacy banks to the server-side common survey format.
// Run with: node scripts/export-specialization-surveys.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const extraBanks = require('./extra-specialization-questions.cjs');

const root = path.resolve(__dirname, '..');
const specs = [
  ['full-stack-web-dev', 'Full Stack Web Development', 'fullStackQuestionBank.js', 'FULL_STACK_QUESTIONS', 'Full_Stack_QB.md', [
    ['MDN Learn Web Development', 'MDN', 'https://developer.mozilla.org/en-US/docs/Learn_web_development'],
    ['JavaScript Guide', 'MDN', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'],
    ['Learn React', 'React', 'https://react.dev/learn'],
    ['Building REST services', 'Spring', 'https://spring.io/guides/tutorials/rest'],
    ['Web Security Testing Guide', 'OWASP', 'https://owasp.org/www-project-web-security-testing-guide/'],
    ['Testing JavaScript', 'MDN', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing'],
    ['Web Performance', 'MDN', 'https://developer.mozilla.org/en-US/docs/Web/Performance'],
    ['System Design Primer', 'GitHub community', 'https://github.com/donnemartin/system-design-primer']
  ]],
  ['cloud-computing', 'Cloud Computing & DevOps', 'cloudQuestionBank.js', 'CLOUD_QUESTIONS', 'Cloud_Computing_QB.md', [
    ['Cloud computing concepts', 'AWS', 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html'],
    ['Linux and networking fundamentals', 'Linux Foundation', 'https://training.linuxfoundation.org/training/introduction-to-linux/'],
    ['Docker Get Started', 'Docker', 'https://docs.docker.com/get-started/'],
    ['Kubernetes concepts', 'Kubernetes', 'https://kubernetes.io/docs/concepts/'],
    ['Terraform tutorials', 'HashiCorp', 'https://developer.hashicorp.com/terraform/tutorials'],
    ['GitHub Actions tutorials', 'GitHub', 'https://docs.github.com/en/actions/tutorials'],
    ['Site Reliability Engineering', 'Google', 'https://sre.google/sre-book/table-of-contents/'],
    ['AWS Well-Architected Framework', 'AWS', 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html']
  ]],
  ['data-engineering', 'Data Engineering & Big Data', 'dataEngineeringQuestionBank.js', 'DATA_ENG_QUESTIONS', 'Data_Engineering_QB.md', [
    ['SQL Tutorial', 'PostgreSQL', 'https://www.postgresql.org/docs/current/tutorial.html'],
    ['Get started with data engineering', 'Microsoft Learn', 'https://learn.microsoft.com/en-us/training/paths/get-started-data-engineering/'],
    ['Spark SQL and DataFrames', 'Apache Spark', 'https://spark.apache.org/docs/latest/sql-programming-guide.html'],
    ['Data Engineering on Azure', 'Microsoft Learn', 'https://learn.microsoft.com/en-us/training/paths/get-started-data-engineering/'],
    ['Airflow Tutorials', 'Apache Airflow', 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html'],
    ['Kafka documentation', 'Apache Kafka', 'https://kafka.apache.org/documentation/'],
    ['Delta Lake documentation', 'Delta Lake', 'https://docs.delta.io/latest/index.html'],
    ['Data engineering best practices', 'Microsoft Learn', 'https://learn.microsoft.com/en-us/azure/architecture/data-guide/']
  ]],
  ['game-development', 'Game Development & Interactive Media', 'gameDevQuestionBank.js', 'GAME_DEV_QUESTIONS', 'Game_Dev_QB.md', [
    ['Junior Programmer pathway', 'Unity Learn', 'https://learn.unity.com/pathway/junior-programmer'],
    ['Game development', 'Godot', 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html'],
    ['Unity scripting', 'Unity Learn', 'https://learn.unity.com/pathway/junior-programmer'],
    ['Game physics', 'Unity Manual', 'https://docs.unity3d.com/Manual/PhysicsSection.html'],
    ['Graphics programming', 'LearnOpenGL', 'https://learnopengl.com/'],
    ['Game AI', 'Unity Learn', 'https://learn.unity.com/'],
    ['Performance optimization', 'Unity Manual', 'https://docs.unity3d.com/Manual/BestPracticeUnderstandingPerformanceInUnity.html'],
    ['Xbox Accessibility Guidelines', 'Microsoft', 'https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/']
  ]],
  ['embedded-systems', 'Embedded Systems & Robotics / IoT', 'embeddedSystemsQuestionBank.js', 'EMBEDDED_QUESTIONS', 'Embedded_Systems_QB.md', [
    ['Embedded Systems', 'Arm Education', 'https://www.arm.com/resources/education/education-kits'],
    ['C language fundamentals', 'cppreference', 'https://en.cppreference.com/w/c/language.html'],
    ['Microcontroller architecture', 'Arm', 'https://developer.arm.com/documentation/'],
    ['FreeRTOS kernel', 'FreeRTOS', 'https://www.freertos.org/Documentation/RTOS_book.html'],
    ['Embedded interfaces', 'STMicroelectronics', 'https://wiki.st.com/stm32mcu/wiki/Category:STM32_step_by_step'],
    ['Modern Robotics', 'Northwestern University', 'https://modernrobotics.northwestern.edu/'],
    ['ROS 2 first steps', 'Open Robotics', 'https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst'],
    ['ROS 2 first steps', 'Open Robotics', 'https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst']
  ]]
];

const labels = 'ABCD';
const roadmapNames = {
  'full-stack-web-dev': 'Full-Stack', 'cloud-computing': 'Cloud-DevOps',
  'data-engineering': 'Data-Engineering', 'game-development': 'Game-Development',
  'embedded-systems': 'Embedded-Robotics'
};
const markdownLinks = text => [...text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)]
  .map(match => ({title: match[1], url: match[2].replace(
    'https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst',
    'https://github.com/ros2/ros2_documentation/blob/rolling/source/First-Steps.rst')}));
for (const [slug, name, moduleName, exportName, markdownName, courses] of specs) {
  const source = fs.readFileSync(path.join(root, 'frontend/src/data', moduleName), 'utf8');
  const context = vm.createContext({});
  vm.runInContext(source.replaceAll('export const ', 'const ') + `\nthis.items=${exportName};this.tiers=TIER_NAMES;`, context);
  const legacy = context.items;
  const markdown = fs.readFileSync(path.join(root, 'question_bank', markdownName), 'utf8');
  const references = new Map([...markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)].map(m => [m[1], m[2]]));
  const key = slug.toUpperCase().replaceAll('-', '_');
  const roadmap = fs.readFileSync(path.join(root, 'question_bank/roadmap_sources',
    `${roadmapNames[slug]}-Roadmap-and-Topic-Map.md`), 'utf8');
  const nodeRows = [...roadmap.matchAll(/^\| ([A-Z]{2}-[A-Z]): ([^|]+) \| S([1-8]) \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$/gm)];
  const mappedRows = [...roadmap.matchAll(/^\| ([A-Z]{2}\d{2}) \| ([^|]+) \| ([A-Z]{2}-[A-Z]) \| ([^|]+) \| ([^|]+) \|$/gm)];
  const questionMapping = new Map(mappedRows.map(row => [row[1], {
    nodeId: row[3], learningResources: markdownLinks(row[4]), bridge: row[5]
  }]));
  if (nodeRows.length < 7 || questionMapping.size !== 60) throw new Error(`${slug}: incomplete curated roadmap mapping`);
  const subtopics = nodeRows.map((row,index) => {
    const id=row[1], grouped=legacy.filter(q => q.type !== 'self-assessment' && questionMapping.get(q.id)?.nodeId === id);
    const resources=markdownLinks(row[5]);
    const concepts=[...new Set(grouped.map(q => q.skillTag || q.topic))];
    return {
      id, name: row[2].trim(), scope: concepts.join(', '), sectionId: `SEC-${String(index+1).padStart(2,'0')}`,
      suggestedSemester: Number(row[3]), prerequisites: [...row[4].matchAll(/[A-Z]{2}-[A-Z]/g)].map(m => m[0]),
      targetTechnicalCount: grouped.length, estimatedSelectedHours: Number(row[6]), exitEvidence: row[7].trim(),
      learningUnit: {id: `${key}-COURSE-${index+1}`, title: resources[0].title, provider: 'Curated academic or industry source',
        url: resources[0].url, selectedCoverage: concepts.join(', '), additionalResources: resources.slice(1)},
      studyFocus: concepts.join(', ')
    };
  });
  const questions = legacy.map(q => {
    const match = [...references.entries()].find(([title]) => title === q.reference);
    const reference = match ? {title: match[0], url: match[1]} : null;
    const isTechnical = q.type !== 'self-assessment';
    return {
      id: q.id, version: 2, type: isTechnical ? 'technical' : 'self_assessment',
      subtopicId: questionMapping.get(q.id).nodeId,
      concept: q.skillTag || q.topic, stem: q.questionText, codeSnippet: q.codeSnippet || null,
      format: q.tag || 'Conceptual understanding', difficulty: q.tier,
      options: q.options.map((text, index) => ({id: `${q.id}-O${index + 1}`, label: labels[index], text,
        ...(isTechnical ? {} : {fraction: (q.optionScores?.[index] || 0) / q.weight})})),
      ...(isTechnical ? {correctOptionId: `${q.id}-O${q.correctOptionIndex + 1}`} : {}),
      weight: q.weight, explanation: q.explanation || '', workedSolution: q.explanation || '',
      learningObjective: q.topic, origin: 'reused from legacy specialization bank',
      learningResources: questionMapping.get(q.id).learningResources,
      references: reference ? [{...reference, locator: q.topic}] : []
    };
  });
  const formatNames = {N:'Numerical calculation',C:'Code or query interpretation',
    D:'Debugging and failure diagnosis',S:'Applied scenario',K:'Conceptual understanding'};
  const additions = extraBanks[slug] || [];
  if (additions.length !== 70) throw new Error(`${slug}: expected 70 new technical questions, found ${additions.length}`);
  for (const [index,row] of additions.entries()) {
    const [nodeId,concept,stem,optionTexts,answerIndex,explanation,formatCode,difficulty] = row;
    const topic = subtopics.find(t => t.id === nodeId);
    if (!topic || !Array.isArray(optionTexts) || optionTexts.length !== 4 ||
        new Set(optionTexts).size !== 4 || !Number.isInteger(answerIndex) || answerIndex<0 || answerIndex>3 ||
        !formatNames[formatCode] || ![1,2,3].includes(difficulty) || !explanation) {
      throw new Error(`${slug}: invalid extension item ${index+1}`);
    }
    const id=`${key}-X${String(index+1).padStart(2,'0')}`;
    // Rotate the authored answer position to avoid a predictable answer key.
    const offset=(index*3+Math.floor(index/4))%4;
    const rotated=optionTexts.map((_,i)=>optionTexts[(i+4-offset)%4]);
    const chosenIndex=(answerIndex+offset)%4;
    const resource=topic.learningUnit;
    questions.push({
      id,version:3,type:'technical',subtopicId:nodeId,concept,stem,codeSnippet:null,
      format:formatNames[formatCode],difficulty:['','foundation','application','advanced'][difficulty],
      options:rotated.map((text,i)=>({id:`${id}-O${i+1}`,label:labels[i],text})),
      correctOptionId:`${id}-O${chosenIndex+1}`,
      weight:difficulty,explanation,workedSolution:explanation,learningObjective:concept,
      origin:'original extension; editorial review pending',
      learningResources:[{title:resource.title,url:resource.url},...resource.additionalResources],
      references:[{title:resource.title,url:resource.url,
        locator:`Curriculum topic: ${topic.name}; exact chapter alignment pending review`}]
    });
  }
  for (const topic of subtopics) {
    const grouped=questions.filter(q=>q.type==='technical'&&q.subtopicId===topic.id);
    topic.targetTechnicalCount=grouped.length;
    topic.scope=[...new Set(grouped.map(q=>q.concept))].join(', ');
    topic.studyFocus=topic.scope;
    topic.learningUnit.selectedCoverage=topic.scope;
  }
  const technicalCount = questions.filter(q => q.type === 'technical').length;
  const selfAssessmentCount = questions.length - technicalCount;
  if (questions.length !== 130 || technicalCount !== 120 || selfAssessmentCount !== 10 || subtopics.some(t => t.targetTechnicalCount < 4)) {
    throw new Error(`${slug}: legacy bank has unexpected coverage: ${JSON.stringify(subtopics.map(t=>[t.id,t.targetTechnicalCount]))}`);
  }
  if (new Set(questions.map(q=>q.id)).size !== questions.length ||
      questions.some(q => q.options.length !== 4 || !q.learningResources.length ||
        (q.type === 'technical' && !q.options.some(option => option.id === q.correctOptionId))) ||
      questions.some(q => !subtopics.some(topic => topic.id === q.subtopicId))) {
    throw new Error(`${slug}: invalid option, key, resource, or subtopic mapping`);
  }
  const bank = {
    schemaVersion: 3, bankVersion: `${key}-COMMON-3`, specializationId: slug, specializationName: name,
    status: 'expanded common survey; faculty and empirical calibration pending',
    form: {id: `${key}-COMMON`, semesters: [1,2,3,4,5,6,7,8], sameItemsAndScoringAcrossSemesters: true,
      technicalCount, selfAssessmentCount, contextFields: ['currentSemester'], finalStep: 'roadmap'},
    subtopics, questions,
    deliverables: {
      foundation: `Build a tested ${name} foundations project and document the design decisions.`,
      intermediate: `Build an end-to-end ${name} project with tests, failure analysis, and version control.`,
      capstone: `Publish a portfolio-ready ${name} capstone with deployment, documentation, and a technical walkthrough.`
    }
  };
  const destination = path.join(root, 'backend/src/main/resources/assessment', `${slug}-common-v2.json`);
  fs.writeFileSync(destination, JSON.stringify(bank, null, 2) + '\n');
  const lines = [`# ${name} — common competency survey`, '',
    `Bank version: ${bank.bankVersion}. The same ${questions.length} MCQs serve semesters 1–8; the chosen semester changes the roadmap schedule.`,
    '', `There are ${technicalCount} weighted technical questions and ${selfAssessmentCount} separately scored self-assessment questions. Blank items earn zero and are recorded as unanswered.`,
    '', 'The bank combines existing items with original extensions. Difficulty is editorial, not empirically calibrated. Extension references map to a relevant course topic; exact chapter alignment and item wording require faculty review before high-stakes use.', ''];
  for (const topic of subtopics) {
    lines.push(`## ${topic.name}`, '', `Focus: ${topic.studyFocus}`, '',
      `Roadmap resource: [${topic.learningUnit.title}](${topic.learningUnit.url}) (${topic.learningUnit.provider}).`, '');
    for (const q of questions.filter(q => q.subtopicId === topic.id && q.type === 'technical')) {
      lines.push(`### ${q.id} — ${q.concept}`, '', `${q.stem}`, '');
      if (q.codeSnippet) lines.push('```', q.codeSnippet, '```', '');
      q.options.forEach(o => lines.push(`- ${o.label}. ${o.text}`));
      lines.push('', `**Answer:** ${q.options.find(o => o.id === q.correctOptionId).label}. ${q.workedSolution}`, '');
      q.references.forEach(ref => lines.push(`Source: [${ref.title}](${ref.url})`, ''));
    }
  }
  lines.push('## Self-assessment', '');
  for (const q of questions.filter(q => q.type === 'self_assessment')) {
    lines.push(`### ${q.id} — ${q.concept}`, '', q.stem, '');
    q.options.forEach(o => lines.push(`- ${o.label}. ${o.text} (${Math.round(o.fraction * 100)}% of practice item)`));
    lines.push('');
  }
  fs.writeFileSync(path.join(root, 'question_bank', `${slug}_Common_Survey.md`), lines.join('\n') + '\n');
  console.log(`${slug}: ${questions.length} items, ${subtopics.length} mapped learning units`);
}
