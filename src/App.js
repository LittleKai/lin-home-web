import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatButtons from './components/FloatButtons/FloatButtons';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [isLoading, setIsLoading] = useState(true);

    // Handle initial loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Scroll to top when section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    // Render loading screen
    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-logo">
                        <div className="logo-icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <h2>LIN HOME</h2>
                    </div>
                    <div className="loading-spinner"></div>
                    <p>Đang tải...</p>
                </div>
            </div>
        );
    }

    // Render main content based on active section
    const renderContent = () => {
        switch (activeSection) {
            case 'apps':
                return (
                    <>
                        <div style={{ marginTop: '80px' }}>
                            <Apps />
                            <News />
                        </div>
                    </>
                );
            case 'contact':
                return (
                    <div style={{ marginTop: '80px' }}>
                        <Contact />
                    </div>
                );
            case 'services':
                return (
                    <div style={{ marginTop: '80px' }}>
                        <Features />
                        <Portfolio />
                    </div>
                );
            case 'portfolio':
                return (
                    <div style={{ marginTop: '80px' }}>
                        <Portfolio />
                        <Features />
                    </div>
                );
            case 'news':
                return (
                    <div style={{ marginTop: '80px' }}>
                        <News />
                    </div>
                );
            default:
                return (
                    <>
                        <Hero />
                        <Features />
                        <Portfolio />
                        <Apps />
                        <News />
                        <Contact />
                    </>
                );
        }
    };

    return (
        <div className="App">
            {/* Header */}
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            {/* Main Content */}
            <main className="main-content">
                {renderContent()}
            </main>

            {/* Footer */}
            <Footer />

            {/* Float Buttons */}
            <FloatButtons />

            {/* Background Elements for decoration */}
            <div className="background-elements">
                <div className="bg-gradient-1"></div>
                <div className="bg-gradient-2"></div>
            </div>
        </div>
    );
}

export default App;
