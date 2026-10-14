import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TIER_NAMES } from '../src/data/aiMlQuestionBank';

const SurveyResultsView = ({ result, semester, questions, answers, onRetake }) => {
    const navigate = useNavigate();
    const [filterReview, setFilterReview] = useState('all'); // 'all' | 'incorrect' | 'self'

    const handlePrint = () => {
        window.print();
    };

    const reviewQuestions = questions.filter(q => {
        const selected = answers[q.id];
        if (filterReview === 'self') return q.type === 'self-assessment';
        if (filterReview === 'incorrect') {
            if (q.type === 'self-assessment') return selected === undefined || selected === null || selected < 2;
            return selected !== q.correctOptionIndex;
        }
        return true;
    });

    const getScoreColor = (pct) => {
        if (pct >= 75) return '#10b981';
        if (pct >= 50) return '#2563eb';
        if (pct >= 35) return '#f59e0b';
        return '#ef4444';
    };

    return (
        <div className="survey-results-container">
            {/* Action Bar / Breadcrumb */}
            <div className="results-top-nav no-print">
                <button className="back-link-btn" onClick={() => navigate('/')}>
                    ← Back to Specializations
                </button>
                <div className="results-nav-actions">
                    <button className="btn-secondary" onClick={onRetake}>
                        🔄 Retake Survey
                    </button>
                    <button className="btn-primary" onClick={handlePrint}>
                        🖨️ Print / Save Diagnostic Report
                    </button>
                </div>
            </div>

            {/* Scorecard Header */}
            <div className="results-hero-card">
                <div className="results-hero-content">
                    <div className="results-badge-row">
                        <span className="results-track-badge">Artificial Intelligence & Machine Learning</span>
                        <span className="results-sem-badge">Semester {semester} Cohort</span>
                        <span className={`results-level-badge level-${result.competencyLevel.toLowerCase()}`}>
                            {result.competencyLevel} Level
                        </span>
                    </div>

                    <h1 className="results-title">Competency Diagnostic Scorecard</h1>
                    <p className="results-subtitle">
                        Standardized baseline diagnostic evaluated across {questions.length} semester-appropriate assessment items.
                    </p>

                    {/* Metric Cards Grid */}
                    <div className="metrics-grid">
                        <div className="metric-card primary">
                            <span className="metric-label">Final Weighted Score</span>
                            <div className="metric-value-row">
                                <span className="metric-number" style={{ color: getScoreColor(result.finalScore) }}>
                                    {result.finalScore}%
                                </span>
                                <span className="metric-fraction">
                                    {result.rawScore} / {result.maxRawScore} pts
                                </span>
                            </div>
                            <div className="metric-bar-bg">
                                <div 
                                    className="metric-bar-fill" 
                                    style={{ width: `${Math.min(100, result.finalScore)}%`, backgroundColor: getScoreColor(result.finalScore) }}
                                />
                            </div>
                        </div>

                        <div className="metric-card">
                            <span className="metric-label">Technical Competency</span>
                            <div className="metric-value-row">
                                <span className="metric-number" style={{ color: getScoreColor(result.technicalScore) }}>
                                    {result.technicalScore}%
                                </span>
                                <span className="metric-fraction">
                                    {result.technicalPoints} / {result.maxTechnicalPoints} pts
                                </span>
                            </div>
                            <div className="metric-bar-bg">
                                <div 
                                    className="metric-bar-fill" 
                                    style={{ width: `${Math.min(100, result.technicalScore)}%`, backgroundColor: getScoreColor(result.technicalScore) }}
                                />
                            </div>
                        </div>

                        <div className="metric-card">
                            <span className="metric-label">Demonstrated Practice</span>
                            <div className="metric-value-row">
                                <span className="metric-number" style={{ color: getScoreColor(result.practiceScore) }}>
                                    {result.practiceScore}%
                                </span>
                                <span className="metric-fraction">
                                    {result.practicePoints} / {result.maxPracticePoints} pts
                                </span>
                            </div>
                            <div className="metric-bar-bg">
                                <div 
                                    className="metric-bar-fill" 
                                    style={{ width: `${Math.min(100, result.practiceScore)}%`, backgroundColor: getScoreColor(result.practiceScore) }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier-by-Tier Progression Breakdown */}
            <div className="results-section">
                <div className="section-header">
                    <h2 className="section-title">📊 Competency by Subject Tier</h2>
                    <span className="section-meta">Administered tiers for Semester {semester}</span>
                </div>

                <div className="tiers-grid">
                    {Object.values(result.tierBreakdown).map(tierData => {
                        const tierPct = tierData.max > 0 ? Math.round((tierData.earned / tierData.max) * 100) : 0;
                        return (
                            <div key={tierData.tier} className="tier-card">
                                <div className="tier-card-top">
                                    <span className="tier-number-badge">Tier {tierData.tier}</span>
                                    <span className="tier-score-badge" style={{ color: getScoreColor(tierPct) }}>
                                        {tierData.earned} / {tierData.max} pts ({tierPct}%)
                                    </span>
                                </div>
                                <h3 className="tier-title">{tierData.name}</h3>
                                <div className="metric-bar-bg" style={{ height: '6px', marginTop: '0.75rem' }}>
                                    <div 
                                        className="metric-bar-fill" 
                                        style={{ width: `${tierPct}%`, backgroundColor: getScoreColor(tierPct) }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Identified Skill Gaps */}
            {result.skillGaps && result.skillGaps.length > 0 && (
                <div className="results-section">
                    <div className="section-header">
                        <h2 className="section-title">🎯 Key Skill Opportunities & Focus Areas</h2>
                        <span className="section-meta">Topics identified for targeted practice</span>
                    </div>

                    <div className="skill-gaps-tags-container">
                        {result.skillGaps.map((gap, idx) => (
                            <div key={idx} className="skill-gap-pill">
                                <span className="gap-icon">⚠️</span>
                                <span className="gap-text">{gap}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Question Review Section */}
            <div className="results-section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">📝 Detailed Assessment Review</h2>
                        <span className="section-meta">Worked solutions, scoring criteria, and syllabus references</span>
                    </div>

                    <div className="filter-button-group no-print">
                        <button 
                            className={`filter-btn ${filterReview === 'all' ? 'active' : ''}`}
                            onClick={() => setFilterReview('all')}
                        >
                            All ({questions.length})
                        </button>
                        <button 
                            className={`filter-btn ${filterReview === 'incorrect' ? 'active' : ''}`}
                            onClick={() => setFilterReview('incorrect')}
                        >
                            Missed / Partial
                        </button>
                        <button 
                            className={`filter-btn ${filterReview === 'self' ? 'active' : ''}`}
                            onClick={() => setFilterReview('self')}
                        >
                            Self-Assessment
                        </button>
                    </div>
                </div>

                <div className="review-list">
                    {reviewQuestions.map((q, idx) => {
                        const selectedIdx = answers[q.id];
                        const isSelf = q.type === 'self-assessment';
                        const isCorrect = isSelf 
                            ? (selectedIdx !== undefined && selectedIdx !== null && selectedIdx >= 2)
                            : (selectedIdx === q.correctOptionIndex);

                        const awardedPts = isSelf
                            ? (selectedIdx !== undefined && selectedIdx !== null ? q.optionScores[selectedIdx] : 0)
                            : (selectedIdx === q.correctOptionIndex ? q.weight : 0);

                        return (
                            <div key={q.id} className={`review-card ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                                <div className="review-card-header">
                                    <div className="review-meta-left">
                                        <span className="review-qid">{q.id}</span>
                                        <span className={`survey-tag tag-${q.tag.toLowerCase().replace(/[^a-z]/g, '')}`}>
                                            {q.tag}
                                        </span>
                                        <span className="review-tier-tag">Tier {q.tier}</span>
                                        <span className="review-topic-tag">{q.topic}</span>
                                    </div>
                                    <div className="review-meta-right">
                                        <span className={`review-status-pill ${isCorrect ? 'correct' : 'incorrect'}`}>
                                            {isCorrect ? '✓ Correct / Demonstrated' : '✗ Missed / Needs Practice'}
                                        </span>
                                        <span className="review-weight-pill">
                                            {awardedPts} / {q.weight} pts
                                        </span>
                                    </div>
                                </div>

                                <div className="review-stem">{q.questionText}</div>

                                {/* Options breakdown */}
                                <div className="review-options-grid">
                                    {q.options.map((optText, optIdx) => {
                                        const isChosen = selectedIdx === optIdx;
                                        const isKey = !isSelf && optIdx === q.correctOptionIndex;

                                        let optClass = 'review-option';
                                        if (isKey) optClass += ' key-answer';
                                        if (isChosen && !isKey) optClass += ' user-wrong';
                                        if (isChosen && isKey) optClass += ' user-correct';

                                        const letter = String.fromCharCode(65 + optIdx);

                                        return (
                                            <div key={optIdx} className={optClass}>
                                                <div className="review-opt-letter">{letter}.</div>
                                                <div className="review-opt-text">{optText}</div>
                                                {isChosen && <span className="review-badge-user">Your Choice</span>}
                                                {isKey && <span className="review-badge-correct">Correct Answer</span>}
                                                {isSelf && (
                                                    <span className="review-badge-self-pts">
                                                        +{q.optionScores[optIdx]} pts
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Solution & Reference */}
                                <div className="review-solution-box">
                                    <div className="solution-line">
                                        <strong>💡 Explanation:</strong> {q.explanation}
                                    </div>
                                    {q.reference && (
                                        <div className="reference-line">
                                            <strong>📚 Reference Basis:</strong> {q.reference}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="results-bottom-bar no-print">
                <button className="btn-secondary" onClick={() => navigate('/')}>
                    ← Explore Other Specializations
                </button>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button className="btn-secondary" onClick={onRetake}>
                        🔄 Retake Survey
                    </button>
                    <button className="btn-primary" onClick={handlePrint}>
                        🖨️ Print / Save Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SurveyResultsView;
