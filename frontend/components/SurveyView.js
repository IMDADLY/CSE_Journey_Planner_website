import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
    getQuestionsForSemester, 
    calculateSurveyScore, 
    SEMESTER_CONFIG 
} from '../src/data/aiMlQuestionBank';
import SurveyResultsView from './SurveyResultsView';
import CodeSnippetBlock from './CodeSnippetBlock';

const SurveyView = () => {
    const navigate = useNavigate();
    const { specializationId } = useParams();

    // Default to Semester 5 or URL query/state
    const [selectedSemester, setSelectedSemester] = useState(5);
    const [answers, setAnswers] = useState({}); // { [qId]: optionIndex }
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [evaluationResult, setEvaluationResult] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitPrompt, setSubmitPrompt] = useState(false);

    // Get strictly nested questions for the chosen semester
    const currentQuestions = useMemo(() => {
        return getQuestionsForSemester(selectedSemester);
    }, [selectedSemester]);

    const semConfig = SEMESTER_CONFIG[selectedSemester];

    // Count how many questions in the current form have been answered
    const answeredCount = useMemo(() => {
        return currentQuestions.filter(q => answers[q.id] !== undefined && answers[q.id] !== null).length;
    }, [currentQuestions, answers]);

    const answeredPercent = Math.round((answeredCount / (currentQuestions.length || 1)) * 100);

    const handleOptionSelect = (questionId, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
    };

    const handleSemesterChange = (newSem) => {
        const sem = parseInt(newSem, 10);
        setSelectedSemester(sem);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // 1. Calculate standard evaluation according to the exact research-backed weights
        const evalScore = calculateSurveyScore(currentQuestions, answers);
        setEvaluationResult(evalScore);

        // 2. Proactively try submitting to backend for MongoDB persistence & logging
        try {
            await fetch('/api/surveys/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    specializationId: specializationId || 'spec-ai-ml',
                    currentSemester: selectedSemester,
                    answers: answers
                })
            });
        } catch (e) {
            // Frontend operates autonomously with full canonical scoring
            console.warn('Backend survey submission synced in offline/client mode.');
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleRetake = () => {
        setIsSubmitted(false);
        setEvaluationResult(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Helper to format question numbers (01, 02, etc.)
    const formatQuestionNumber = (idx) => {
        const num = idx + 1;
        return num < 10 ? `0${num}` : `${num}`;
    };

    // Helper to determine if options are short enough for horizontal display
    const areOptionsShort = (options) => {
        return options.every(opt => opt.length <= 25);
    };

    if (isSubmitted && evaluationResult) {
        return (
            <div className="survey-page-wrapper">
                <header className="app-header">
                    <div className="container header-content">
                        <div className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <div className="brand-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div className="brand-text">
                                <span className="brand-title">CSE Journey Planner</span>
                                <span className="brand-subtitle">Specialization & Roadmap Navigator</span>
                            </div>
                        </div>

                        <div className="survey-header-right">
                            <span className="survey-breadcrumb">AI & Machine Learning / Diagnostic Result</span>
                        </div>
                    </div>
                </header>

                <main className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
                    <SurveyResultsView 
                        result={evaluationResult}
                        semester={selectedSemester}
                        questions={currentQuestions}
                        answers={answers}
                        onRetake={handleRetake}
                    />
                </main>
            </div>
        );
    }

    return (
        <div className="survey-page-wrapper">
            {/* Top Navigation Header matching design */}
            <header className="app-header">
                <div className="container header-content">
                    <div className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <div className="brand-icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div className="brand-text">
                            <span className="brand-title">CSE Journey Planner</span>
                            <span className="brand-subtitle">Specialization & Roadmap Navigator</span>
                        </div>
                    </div>

                    <div className="survey-header-right">
                        <span className="survey-breadcrumb">AI & Machine Learning / Survey</span>
                    </div>
                </div>
            </header>

            {/* Starting Point Banner (Mockup fidelity) */}
            <div className="survey-starting-bar">
                <div className="container starting-bar-content">
                    <div className="starting-bar-left">
                        <h1 className="starting-bar-title">Your starting point</h1>
                        
                        <div className="semester-selector-wrapper">
                            <span className="semester-selector-label">Current semester</span>
                            
                            <div className="semester-pill-selector">
                                <select 
                                    className="semester-select-dropdown"
                                    value={selectedSemester}
                                    onChange={(e) => handleSemesterChange(e.target.value)}
                                    id="semester-dropdown"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                                        <option key={s} value={s}>
                                            Semester {s}
                                        </option>
                                    ))}
                                </select>
                                <span className="semester-dropdown-chevron">▼</span>
                            </div>

                            <span className="starting-bar-caption">
                                Questions load for your specialization and semester ({currentQuestions.length} MCQs).
                            </span>
                        </div>
                    </div>

                    <div className="starting-bar-right">
                        <span className="starting-meta-badge">
                            Form S{selectedSemester} • Max {semConfig.maxRawScore} pts
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Survey Two-Column Layout */}
            <main className="container survey-main-layout">
                {/* Left Column: Continuous Questionnaire Form */}
                <section className="survey-questions-column">
                    {currentQuestions.map((q, idx) => {
                        const isSelf = q.type === 'self-assessment';
                        const selectedOption = answers[q.id];
                        const isAnswered = selectedOption !== undefined && selectedOption !== null;
                        const shortOptions = areOptionsShort(q.options);

                        return (
                            <article 
                                key={q.id} 
                                id={`question-${q.id}`}
                                className={`survey-card ${isAnswered ? 'is-answered' : ''}`}
                            >
                                {/* Card Tag & Number Header */}
                                <div className="survey-card-meta">
                                    <span className="survey-q-num">{formatQuestionNumber(idx)}</span>
                                    <span className={`survey-tag tag-${q.tag.toLowerCase().replace(/[^a-z]/g, '')}`}>
                                        {q.tag}
                                    </span>
                                    <span className="survey-tier-indicator">Tier {q.tier}</span>
                                    <span className="survey-weight-indicator">({q.weight} pts)</span>
                                </div>

                                {/* Question Stem */}
                                <h2 className="survey-q-stem">
                                    {q.questionText}
                                </h2>

                                {q.codeSnippet && (
                                    <CodeSnippetBlock code={q.codeSnippet} language={q.codeLanguage} />
                                )}

                                {/* Options list */}
                                <div className={`survey-options-group ${shortOptions ? 'layout-horizontal' : 'layout-stacked'}`}>
                                    {q.options.map((optionText, optIdx) => {
                                        const isChecked = selectedOption === optIdx;
                                        const optionLetter = String.fromCharCode(65 + optIdx);

                                        return (
                                            <label 
                                                key={optIdx} 
                                                className={`survey-option-label ${isChecked ? 'selected' : ''}`}
                                            >
                                                <input 
                                                    type="radio" 
                                                    name={`q-${q.id}`} 
                                                    value={optIdx}
                                                    checked={isChecked}
                                                    onChange={() => handleOptionSelect(q.id, optIdx)}
                                                    className="survey-radio-input"
                                                />
                                                <span className="custom-radio-circle" />
                                                <span className="option-text-wrapper">
                                                    <strong className="option-letter-prefix">{optionLetter}.</strong> {optionText}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}

                    {/* Bottom Submit Action */}
                    <div className="survey-bottom-actions">
                        <button 
                            className="btn-primary survey-submit-btn-large"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Evaluating Responses...' : `Submit Competency Survey (${answeredCount}/${currentQuestions.length} answered)`}
                        </button>
                        {answeredCount < currentQuestions.length && (
                            <p className="survey-unanswered-note">
                                ℹ️ You have {currentQuestions.length - answeredCount} unanswered questions. Unanswered items score 0 with no penalty. You can submit now or complete them above.
                            </p>
                        )}
                    </div>
                </section>

                {/* Right Sticky Sidebar (Mockup exact fidelity) */}
                <aside className="survey-sidebar-column">
                    <div className="survey-sticky-sidebar">
                        <div className="sidebar-accent-bar" />
                        
                        <div className="sidebar-content">
                            <h3 className="sidebar-title">One continuous form</h3>

                            <p className="sidebar-description">
                                Most questions test coding and theory.
                            </p>

                            <p className="sidebar-description">
                                Self-assessment provides a smaller supporting signal.
                            </p>

                            <p className="sidebar-description">
                                Scroll to view more questions and submit at the bottom.
                            </p>

                            {/* Live Progress Card */}
                            <div className="sidebar-progress-card">
                                <div className="progress-card-top">
                                    <span className="progress-card-label">Your Progress</span>
                                    <span className="progress-card-stats">{answeredCount} of {currentQuestions.length}</span>
                                </div>
                                <div className="progress-bar-track">
                                    <div 
                                        className="progress-bar-fill" 
                                        style={{ width: `${answeredPercent}%` }}
                                    />
                                </div>
                                <span className="progress-percent-label">{answeredPercent}% completed</span>
                            </div>

                            {/* Quick Scroll Indicator */}
                            <button 
                                className="scroll-helper-btn"
                                onClick={() => {
                                    // Scroll to the first unanswered question
                                    const unanswered = currentQuestions.find(q => answers[q.id] === undefined || answers[q.id] === null);
                                    if (unanswered) {
                                        const elem = document.getElementById(`question-${unanswered.id}`);
                                        if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    } else {
                                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                    }
                                }}
                            >
                                <span>{answeredCount < currentQuestions.length ? 'Next unattempted MCQ ↓' : 'Jump to submit ↓'}</span>
                            </button>

                            {/* Action Button */}
                            <button 
                                className="btn-primary sidebar-submit-btn"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                <span>Submit Survey</span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default SurveyView;
