import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from "../components/Home";
import AiMlJourneySurvey from "../components/AiMlJourneySurvey";

const SURVEY_DETAILS = {
    'full-stack-web-dev': ['full-stack-web-dev', 'Full Stack Web Development'],
    'full-stack': ['full-stack-web-dev', 'Full Stack Web Development'],
    'spec-full-stack': ['full-stack-web-dev', 'Full Stack Web Development'],
    'cloud-computing': ['cloud-computing', 'Cloud Computing & DevOps'],
    'cloud': ['cloud-computing', 'Cloud Computing & DevOps'],
    'devops': ['cloud-computing', 'Cloud Computing & DevOps'],
    'spec-cloud-devops': ['cloud-computing', 'Cloud Computing & DevOps'],
    'data-engineering': ['data-engineering', 'Data Engineering & Big Data'],
    'big-data': ['data-engineering', 'Data Engineering & Big Data'],
    'spec-data-engineering': ['data-engineering', 'Data Engineering & Big Data'],
    'game-development': ['game-development', 'Game Development & Interactive Media'],
    'game-dev': ['game-development', 'Game Development & Interactive Media'],
    'spec-game-dev': ['game-development', 'Game Development & Interactive Media'],
    'embedded-systems': ['embedded-systems', 'Embedded Systems & Robotics / IoT'],
    'embedded-iot': ['embedded-systems', 'Embedded Systems & Robotics / IoT'],
    'robotics': ['embedded-systems', 'Embedded Systems & Robotics / IoT'],
    'spec-embedded-iot': ['embedded-systems', 'Embedded Systems & Robotics / IoT']
};

const SpecializationSurvey = () => {
    const { specializationId } = useParams();
    const slug=specializationId?.toLowerCase();
    if (['ai-ml', 'ai', 'ml', 'spec-ai-ml'].includes(slug)) return <AiMlJourneySurvey />;
    const details=SURVEY_DETAILS[slug];
    if (!details) return <Navigate to="/" replace />;
    return <AiMlJourneySurvey key={details[0]} specializationId={details[0]} specializationName={details[1]} />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:specializationId" element={<SpecializationSurvey />} />
                <Route path="/survey" element={<AiMlJourneySurvey />} />
            </Routes>
        </Router>
    );
};

export default App;
