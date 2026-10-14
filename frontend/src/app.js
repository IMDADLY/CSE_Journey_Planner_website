import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../components/Home";
import SurveyView from "../components/SurveyView";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:specializationId" element={<SurveyView />} />
                <Route path="/survey" element={<SurveyView />} />
            </Routes>
        </Router>
    );
};

export default App;