import * as aiMlBank from './aiMlQuestionBank.js';
import * as fullStackBank from './fullStackQuestionBank.js';
import * as cloudBank from './cloudQuestionBank.js';
import * as dataEngBank from './dataEngineeringQuestionBank.js';
import * as gameDevBank from './gameDevQuestionBank.js';
import * as embeddedBank from './embeddedSystemsQuestionBank.js';

export const QUESTION_BANKS = {
    'spec-ai-ml': {
        id: 'spec-ai-ml',
        slug: 'ai-ml',
        name: 'Artificial Intelligence & Machine Learning',
        shortName: 'AI & Machine Learning',
        category: 'Data & AI',
        iconUrl: 'brain',
        config: aiMlBank.SEMESTER_CONFIG,
        tierNames: aiMlBank.TIER_NAMES,
        questions: aiMlBank.AI_ML_QUESTIONS,
        getQuestionsForSemester: aiMlBank.getQuestionsForSemester,
        calculateSurveyScore: aiMlBank.calculateSurveyScore
    },
    'spec-full-stack': {
        id: 'spec-full-stack',
        slug: 'full-stack-web-dev',
        name: 'Full Stack Web Development',
        shortName: 'Full Stack Web Dev',
        category: 'Software & Web',
        iconUrl: 'code',
        config: fullStackBank.SEMESTER_CONFIG,
        tierNames: fullStackBank.TIER_NAMES,
        questions: fullStackBank.FULL_STACK_QUESTIONS,
        getQuestionsForSemester: fullStackBank.getQuestionsForSemester,
        calculateSurveyScore: fullStackBank.calculateSurveyScore
    },
    'spec-cloud-devops': {
        id: 'spec-cloud-devops',
        slug: 'cloud-computing',
        name: 'Cloud Computing & DevOps',
        shortName: 'Cloud & DevOps',
        category: 'Cloud & Infrastructure',
        iconUrl: 'cloud',
        config: cloudBank.SEMESTER_CONFIG,
        tierNames: cloudBank.TIER_NAMES,
        questions: cloudBank.CLOUD_QUESTIONS,
        getQuestionsForSemester: cloudBank.getQuestionsForSemester,
        calculateSurveyScore: cloudBank.calculateSurveyScore
    },
    'spec-data-engineering': {
        id: 'spec-data-engineering',
        slug: 'data-engineering',
        name: 'Data Engineering & Big Data',
        shortName: 'Data Engineering',
        category: 'Data & AI',
        iconUrl: 'database',
        config: dataEngBank.SEMESTER_CONFIG,
        tierNames: dataEngBank.TIER_NAMES,
        questions: dataEngBank.DATA_ENG_QUESTIONS,
        getQuestionsForSemester: dataEngBank.getQuestionsForSemester,
        calculateSurveyScore: dataEngBank.calculateSurveyScore
    },
    'spec-game-dev': {
        id: 'spec-game-dev',
        slug: 'game-development',
        name: 'Game Development & Interactive Media',
        shortName: 'Game Development',
        category: 'Interactive Media',
        iconUrl: 'gamepad',
        config: gameDevBank.SEMESTER_CONFIG,
        tierNames: gameDevBank.TIER_NAMES,
        questions: gameDevBank.GAME_DEV_QUESTIONS,
        getQuestionsForSemester: gameDevBank.getQuestionsForSemester,
        calculateSurveyScore: gameDevBank.calculateSurveyScore
    },
    'spec-embedded-iot': {
        id: 'spec-embedded-iot',
        slug: 'embedded-systems',
        name: 'Embedded Systems & Robotics / IoT',
        shortName: 'Embedded & Robotics',
        category: 'Hardware & Systems',
        iconUrl: 'cpu',
        config: embeddedBank.SEMESTER_CONFIG,
        tierNames: embeddedBank.TIER_NAMES,
        questions: embeddedBank.EMBEDDED_QUESTIONS,
        getQuestionsForSemester: embeddedBank.getQuestionsForSemester,
        calculateSurveyScore: embeddedBank.calculateSurveyScore
    }
};

// Aliases mapping slug variants to the canonical question bank
const SLUG_LOOKUP = {
    'ai-ml': 'spec-ai-ml',
    'ai': 'spec-ai-ml',
    'ml': 'spec-ai-ml',
    'spec-ai-ml': 'spec-ai-ml',

    'full-stack-web-dev': 'spec-full-stack',
    'full-stack': 'spec-full-stack',
    'spec-full-stack': 'spec-full-stack',

    'cloud-computing': 'spec-cloud-devops',
    'cloud': 'spec-cloud-devops',
    'devops': 'spec-cloud-devops',
    'spec-cloud-devops': 'spec-cloud-devops',

    'data-engineering': 'spec-data-engineering',
    'big-data': 'spec-data-engineering',
    'spec-data-engineering': 'spec-data-engineering',

    'game-development': 'spec-game-dev',
    'game-dev': 'spec-game-dev',
    'spec-game-dev': 'spec-game-dev',

    'embedded-systems': 'spec-embedded-iot',
    'embedded-iot': 'spec-embedded-iot',
    'robotics': 'spec-embedded-iot',
    'spec-embedded-iot': 'spec-embedded-iot'
};

/**
 * Retrieve the question bank for a specialization by its ID or URL slug.
 * Defaults cleanly to AI/ML if unmapped.
 */
export const getQuestionBankForSpecialization = (specIdOrSlug) => {
    if (!specIdOrSlug) {
        return QUESTION_BANKS['spec-ai-ml'];
    }
    const normalized = String(specIdOrSlug).toLowerCase().trim();
    const mappedKey = SLUG_LOOKUP[normalized] || normalized;
    return QUESTION_BANKS[mappedKey] || QUESTION_BANKS['spec-ai-ml'];
};

/**
 * Retrieve all registered question banks.
 */
export const getAllQuestionBanks = () => {
    return Object.values(QUESTION_BANKS);
};
