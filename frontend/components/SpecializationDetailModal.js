import React, { useEffect } from 'react';

const SpecializationDetailModal = ({ specialization, isOpen, onClose, onStartSurvey }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !specialization) return null;

    const renderIcon = (icon) => {
        switch (icon) {
            case 'brain': return '🧠';
            case 'code': return '💻';
            case 'shield': return '🛡️';
            case 'cloud': return '☁️';
            case 'database': return '🗄️';
            case 'gamepad': return '🎮';
            case 'cpu': return '🤖';
            default: return '🚀';
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <div className="modal-header-info">
                        <div className="modal-icon">
                            {renderIcon(specialization.iconUrl)}
                        </div>
                        <div>
                            <h2 className="modal-title">{specialization.name}</h2>
                            <div className="modal-tags">
                                <span className="badge-category">{specialization.category || 'Computer Science'}</span>
                                {specialization.demandTag && (
                                    <span className="badge-demand">{specialization.demandTag}</span>
                                )}
                                {specialization.salaryRange && (
                                    <span className="badge-salary">{specialization.salaryRange}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <button 
                        className="modal-close-btn" 
                        onClick={onClose} 
                        aria-label="Close modal"
                        title="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    {/* Stats */}
                    <div className="modal-stats-grid">
                        <div className="modal-stat-item">
                            <span className="stat-label">Industry Demand</span>
                            <span className="stat-value">
                                {'★'.repeat(specialization.industryDemand || 5)}
                                {'☆'.repeat(Math.max(0, 5 - (specialization.industryDemand || 5)))}
                            </span>
                        </div>
                        <div className="modal-stat-item">
                            <span className="stat-label">Avg. Starting Package</span>
                            <span className="stat-value">{specialization.salaryRange || '₹6–14 LPA'}</span>
                        </div>
                        <div className="modal-stat-item">
                            <span className="stat-label">Learning Curve</span>
                            <span className="stat-value">{specialization.difficulty || 'Intermediate'}</span>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="modal-section">
                        <h3 className="modal-section-title">Specialization Overview</h3>
                        <p className="card-description" style={{ fontSize: '1rem', color: '#334155' }}>
                            {specialization.description}
                        </p>
                    </div>

                    {/* Career Outcomes */}
                    {specialization.careerOutcomes && specialization.careerOutcomes.length > 0 && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Career Outcomes & Job Roles</h3>
                            <div className="career-chips-grid">
                                {specialization.careerOutcomes.map((role, idx) => (
                                    <span key={idx} className="career-chip">
                                        🎯 {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Core Skills */}
                    {specialization.coreSkills && specialization.coreSkills.length > 0 && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Core Skills & Concepts</h3>
                            <div className="card-skills">
                                {specialization.coreSkills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                                        ✓ {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tools & Frameworks */}
                    {specialization.relatedTools && specialization.relatedTools.length > 0 && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Tools & Technologies</h3>
                            <div className="tools-chips-grid">
                                {specialization.relatedTools.map((tool, idx) => (
                                    <span key={idx} className="tool-chip">
                                        ⚡ {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button className="btn-secondary" onClick={onClose}>
                        Close
                    </button>
                    <button 
                        className="btn-primary" 
                        onClick={() => onStartSurvey && onStartSurvey(specialization)}
                    >
                        <span>Take Competency Survey</span>
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecializationDetailModal;
