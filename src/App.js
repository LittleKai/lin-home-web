import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import FloatButtons from './components/FloatButtons/FloatButtons';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Scroll to top when section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    return (
        <div className="App">
            {/* Header */}
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            {/* Main Content */}
            <MainContent
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            {/* Float Buttons */}
            <FloatButtons />
        </div>
    );
}

export default App;