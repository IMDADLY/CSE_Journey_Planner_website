import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecializationDetailModal from './SpecializationDetailModal';

const Home = () => {
    const navigate = useNavigate();
    // DB is the single source of truth: no fallback dataset.
    // null = not loaded yet; [] = loaded but empty.
    const [specializations, setSpecializations] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [retryKey, setRetryKey] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Tracks');
    const [selectedSpec, setSelectedSpec] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch is mandatory; neutral state until it resolves.
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        setFetchError(null);
        fetch('/api/specializations', { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error(`Request failed: ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (!Array.isArray(data)) throw new Error('Unexpected response shape');
                setSpecializations(data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err && err.name === 'AbortError') return;
                setFetchError(err instanceof Error ? err.message : 'Failed to load specializations');
                setIsLoading(false);
            });
        return () => controller.abort();
    }, [retryKey]);

    // Categories derived from DB data so pills can never disagree with it.
    const categories = useMemo(() => {
        if (!specializations) return ['All Tracks'];
        const seen = [];
        for (const spec of specializations) {
            if (spec.category && !seen.includes(spec.category)) seen.push(spec.category);
        }
        return ['All Tracks', ...seen];
    }, [specializations]);

    // Filter specializations based on search query and category pill
    const filteredSpecializations = useMemo(() => {
        if (!specializations) return [];
        const query = searchQuery.trim().toLowerCase();
        return specializations.filter(spec => {
            const matchesCategory = (selectedCategory === 'All Tracks') || 
                (spec.category && spec.category.toLowerCase() === selectedCategory.toLowerCase());

            if (!matchesCategory) return false;
            if (!query) return true;

            const nameMatch = spec.name && spec.name.toLowerCase().includes(query);
            const descMatch = spec.description && spec.description.toLowerCase().includes(query);
            const catMatch = spec.category && spec.category.toLowerCase().includes(query);
            const skillsMatch = spec.coreSkills && spec.coreSkills.some(s => s.toLowerCase().includes(query));
            const outcomesMatch = spec.careerOutcomes && spec.careerOutcomes.some(o => o.toLowerCase().includes(query));
            const toolsMatch = spec.relatedTools && spec.relatedTools.some(t => t.toLowerCase().includes(query));

            return nameMatch || descMatch || catMatch || skillsMatch || outcomesMatch || toolsMatch;
        });
    }, [specializations, searchQuery, selectedCategory]);

    const handleOpenDetail = (spec) => {
        setSelectedSpec(spec);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSpec(null);
    };

    const handleStartSurvey = (spec) => {
        setIsModalOpen(false);
        const specKey = spec.slug || spec.id || 'ai-ml';
        navigate(`/survey/${specKey}`);
    };

    const renderCardIcon = (icon) => {
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
        <div className="home-page">
            {/* Header */}
            <header className="app-header">
                <div className="container header-content">
                    <a href="/" className="brand-logo">
                        <div className="brand-icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div className="brand-text">
                            <span className="brand-title">CSE Journey Planner</span>
                            <span className="brand-subtitle">Specialization & Roadmap Navigator</span>
                        </div>
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {isLoading ? (
                            <span className="header-count-skeleton" aria-label="Loading specializations" />
                        ) : fetchError ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
                                Unable to load
                                <button
                                    type="button"
                                    className="filter-pill"
                                    onClick={() => setRetryKey(k => k + 1)}
                                >
                                    Retry
                                </button>
                            </span>
                        ) : (
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
                                {specializations.length} Specializations Available
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-badge">
                        <span>✨</span>
                        <span>Stage 1 • Specialization Discovery</span>
                    </div>

                    <h1 className="hero-title">
                        Discover Your <span>CSE Specialization</span>
                    </h1>

                    <p className="hero-description">
                        Explore core and emerging Computer Science specializations, evaluate current market demand,
                        and find the perfect career path tailored to your skills and aspirations.
                    </p>

                    {/* Search Bar */}
                    <div className="search-container">
                        <div className="search-input-wrapper">
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search by specialization, skill (e.g. Python, React), or career role..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button 
                                    className="search-clear-btn" 
                                    onClick={() => setSearchQuery('')}
                                    title="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="filter-pills-container">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                                disabled={isLoading || !!fetchError}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Results Header */}
                <div className="results-header">
                    {isLoading ? (
                        <span className="results-count">Loading specializations…</span>
                    ) : fetchError ? (
                        <span className="results-count">Unable to load specializations.</span>
                    ) : (
                        <span className="results-count">
                            Showing {filteredSpecializations.length} of {specializations.length} specializations
                            {selectedCategory !== 'All Tracks' && ` in "${selectedCategory}"`}
                            {searchQuery && ` matching "${searchQuery}"`}
                        </span>
                    )}
                </div>

                {/* Specializations Grid */}
                {isLoading ? (
                    <div className="specializations-grid" aria-label="Loading specializations">
                        {[0, 1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="spec-card spec-card-skeleton" aria-hidden="true">
                                <div className="skeleton-line skeleton-title" />
                                <div className="skeleton-line" />
                                <div className="skeleton-line skeleton-short" />
                            </div>
                        ))}
                    </div>
                ) : fetchError ? (
                    <div className="empty-state">
                        <div className="empty-icon">⚠️</div>
                        <h3 className="empty-title">Couldn&apos;t load specializations</h3>
                        <p className="empty-text">
                            {fetchError} Check your connection and try again.
                        </p>
                        <button
                            className="reset-search-btn"
                            onClick={() => setRetryKey(k => k + 1)}
                        >
                            Retry
                        </button>
                    </div>
                ) : filteredSpecializations.length > 0 ? (
                    <div className="specializations-grid">
                        {filteredSpecializations.map((spec) => (
                            <article 
                                key={spec.id || spec.slug} 
                                className="spec-card"
                                onClick={() => handleOpenDetail(spec)}
                            >
                                <div className="card-top">
                                    <div className="card-icon-box">
                                        {renderCardIcon(spec.iconUrl)}
                                    </div>
                                    <div className="card-badges">
                                        <span className="badge-category">{spec.category || 'Computer Science'}</span>
                                        {spec.demandTag && (
                                            <span className="badge-demand">{spec.demandTag}</span>
                                        )}
                                        {spec.salaryRange && (
                                            <span className="badge-salary">{spec.salaryRange}</span>
                                        )}
                                    </div>
                                </div>

                                <h2 className="card-title">{spec.name}</h2>
                                <p className="card-description">{spec.description}</p>

                                {/* Core Skills */}
                                {spec.coreSkills && spec.coreSkills.length > 0 && (
                                    <div className="card-skills">
                                        {spec.coreSkills.slice(0, 4).map((skill, idx) => (
                                            <span key={idx} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                        {spec.coreSkills.length > 4 && (
                                            <span className="skill-tag" style={{ color: '#2563eb', fontWeight: 600 }}>
                                                +{spec.coreSkills.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="card-footer">
                                    <span className="card-difficulty">
                                        Level: {spec.difficulty || 'All Levels'}
                                    </span>
                                    <div className="card-actions-group">
                                        <button 
                                            type="button"
                                            className="card-survey-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleStartSurvey(spec);
                                            }}
                                            title="Take Competency Survey"
                                        >
                                            <span>📝 Survey</span>
                                        </button>
                                        <button 
                                            type="button"
                                            className="card-explore-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenDetail(spec);
                                            }}
                                        >
                                            <span>Explore</span>
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h3 className="empty-title">No matching specializations found</h3>
                        <p className="empty-text">
                            Try adjusting your search terms or selecting a different category filter.
                        </p>
                        <button 
                            className="reset-search-btn"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('All Tracks');
                            }}
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </main>

            {/* Specialization Detail Modal */}
            <SpecializationDetailModal
                specialization={selectedSpec}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onStartSurvey={handleStartSurvey}
            />
        </div>
    );
};

export default Home;