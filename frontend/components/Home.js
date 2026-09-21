import React, { useState, useEffect, useMemo } from 'react';
import SpecializationDetailModal from './SpecializationDetailModal';

// Default pre-curated CSE specializations (instant render & offline fallback)
const DEFAULT_SPECIALIZATIONS = [
    {
        id: "spec-ai-ml",
        name: "Artificial Intelligence & Machine Learning",
        slug: "ai-ml",
        description: "Develop intelligent algorithms, deep neural networks, computer vision, and predictive AI models.",
        category: "Data & AI",
        industryDemand: 5,
        demandTag: "HIGH GROWTH (+30% CAGR)",
        salaryRange: "₹8–16 LPA",
        difficulty: "Advanced",
        careerOutcomes: ["Machine Learning Engineer", "Data Scientist", "AI Research Scientist", "MLOps Engineer"],
        coreSkills: ["Python", "Linear Algebra", "PyTorch / TensorFlow", "Scikit-Learn", "Deep Learning", "NLP"],
        relatedTools: ["Jupyter", "Hugging Face", "MLflow", "CUDA", "Pandas", "NumPy"],
        iconUrl: "brain"
    },
    {
        id: "spec-full-stack",
        name: "Full Stack Web Development",
        slug: "full-stack-web-dev",
        description: "Build end-to-end modern web applications, design intuitive user interfaces, and develop scalable backend APIs.",
        category: "Software & Web",
        industryDemand: 5,
        demandTag: "STEADY HIGH DEMAND",
        salaryRange: "₹6–14 LPA",
        difficulty: "Beginner Friendly",
        careerOutcomes: ["Full Stack Developer", "Frontend Engineer", "Backend Architect", "Product Engineer"],
        coreSkills: ["JavaScript/TypeScript", "React.js", "Java Spring Boot / Node.js", "REST / GraphQL", "MongoDB / PostgreSQL"],
        relatedTools: ["Git", "Webpack/Vite", "Docker", "Postman", "Tailwind CSS"],
        iconUrl: "code"
    },
    {
        id: "spec-cybersecurity",
        name: "Cybersecurity & Ethical Hacking",
        slug: "cybersecurity",
        description: "Defend critical digital infrastructure, fight modern cyber threats, perform ethical penetration testing, and secure cloud environments.",
        category: "Systems & Security",
        industryDemand: 5,
        demandTag: "CRITICAL DEMAND",
        salaryRange: "₹8–15 LPA",
        difficulty: "Intermediate",
        careerOutcomes: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Cloud Security Engineer", "CISO Track"],
        coreSkills: ["Network Security", "Cryptography", "Linux Internals", "Vulnerability Assessment", "SIEM"],
        relatedTools: ["Wireshark", "Metasploit", "Burp Suite", "Nmap", "Kali Linux"],
        iconUrl: "shield"
    },
    {
        id: "spec-cloud-devops",
        name: "Cloud Computing & DevOps",
        slug: "cloud-computing",
        description: "Architect scalable cloud-native architectures, automate CI/CD pipelines, and manage distributed containerized infrastructure.",
        category: "Cloud & Infrastructure",
        industryDemand: 5,
        demandTag: "VERY HIGH DEMAND",
        salaryRange: "₹7–15 LPA",
        difficulty: "Intermediate",
        careerOutcomes: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer (SRE)", "Infrastructure Engineer"],
        coreSkills: ["Linux", "AWS / GCP / Azure", "Docker & Containers", "Kubernetes", "CI/CD Pipelines", "Terraform"],
        relatedTools: ["Kubernetes", "Docker", "GitHub Actions", "Terraform", "Prometheus", "Ansible"],
        iconUrl: "cloud"
    },
    {
        id: "spec-data-engineering",
        name: "Data Engineering & Big Data",
        slug: "data-engineering",
        description: "Build robust ETL pipelines, high-throughput distributed data systems, and enterprise data warehouses.",
        category: "Data & AI",
        industryDemand: 4,
        demandTag: "HIGH GROWTH",
        salaryRange: "₹7–14 LPA",
        difficulty: "Intermediate",
        careerOutcomes: ["Data Engineer", "Big Data Developer", "Analytics Engineer", "Database Administrator"],
        coreSkills: ["SQL & Database Internals", "Apache Spark", "Data Warehousing", "Python / Scala", "Distributed Systems"],
        relatedTools: ["Spark", "Kafka", "Airflow", "Snowflake", "dbt", "PostgreSQL"],
        iconUrl: "database"
    },
    {
        id: "spec-game-dev",
        name: "Game Development & Interactive Media",
        slug: "game-development",
        description: "Build immersive 2D/3D games, interactive virtual environments, physics simulations, and graphics rendering engines.",
        category: "Interactive Media",
        industryDemand: 3,
        demandTag: "STEADY GROWTH",
        salaryRange: "₹5–12 LPA",
        difficulty: "Intermediate",
        careerOutcomes: ["Game Programmer", "Unity / Unreal Developer", "Graphics Engineer", "AR/VR Developer"],
        coreSkills: ["C++", "C#", "Computer Graphics & Shaders", "Physics Engines", "3D Mathematics"],
        relatedTools: ["Unity", "Unreal Engine", "Blender", "OpenGL", "DirectX"],
        iconUrl: "gamepad"
    },
    {
        id: "spec-embedded-iot",
        name: "Embedded Systems & Robotics / IoT",
        slug: "embedded-systems",
        description: "Develop firmware, real-time operating systems (RTOS), robotics controllers, and smart connected IoT devices.",
        category: "Hardware & Systems",
        industryDemand: 4,
        demandTag: "STEADY DEMAND",
        salaryRange: "₹6–13 LPA",
        difficulty: "Advanced",
        careerOutcomes: ["Embedded Software Engineer", "IoT Systems Developer", "Robotics Engineer", "Firmware Specialist"],
        coreSkills: ["Embedded C / C++", "Microcontrollers (ARM, ESP32)", "RTOS", "Communication Protocols (I2C, SPI, UART)"],
        relatedTools: ["STM32Cube", "Arduino IDE", "Raspberry Pi", "ROS", "KiCad"],
        iconUrl: "cpu"
    }
];

const CATEGORIES = [
    "All Tracks",
    "Data & AI",
    "Software & Web",
    "Cloud & Infrastructure",
    "Systems & Security",
    "Interactive Media",
    "Hardware & Systems"
];

const Home = () => {
    const [specializations, setSpecializations] = useState(DEFAULT_SPECIALIZATIONS);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Tracks');
    const [selectedSpec, setSelectedSpec] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch from backend API if available
    useEffect(() => {
        fetch('/api/specializations')
            .then(res => {
                if (!res.ok) throw new Error('Network error');
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setSpecializations(data);
                }
            })
            .catch(() => {
                // Keep default dataset if backend API is not yet running
            });
    }, []);

    // Filter specializations based on search query and category pill
    const filteredSpecializations = useMemo(() => {
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
        alert(`Starting competency survey for ${spec.name}! (Specialization ID: ${spec.id})`);
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
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
                            {specializations.length} Specializations Available
                        </span>
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
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Results Header */}
                <div className="results-header">
                    <span className="results-count">
                        Showing {filteredSpecializations.length} of {specializations.length} specializations
                        {selectedCategory !== 'All Tracks' && ` in "${selectedCategory}"`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </span>
                </div>

                {/* Specializations Grid */}
                {filteredSpecializations.length > 0 ? (
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
                                    <button 
                                        type="button"
                                        className="card-explore-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenDetail(spec);
                                        }}
                                    >
                                        <span>Explore Track</span>
                                        <span>→</span>
                                    </button>
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