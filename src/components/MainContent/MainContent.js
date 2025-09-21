// src/components/MainContent/MainContent.js
import React from 'react';

// Import separated components
import HeroSection from '../sections/HeroSection/HeroSection';
import FeaturesSection from '../sections/FeaturesSection/FeaturesSection';
import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';
import AppsSection from '../sections/AppsSection/AppsSection';
import NewsSection from '../sections/NewsSection/NewsSection';
import ContactSection from '../sections/ContactSection/ContactSection';
import Footer from '../Footer/Footer';

const MainContent = ({ activeSection, setActiveSection }) => {
    // Render content based on active section
    const renderContent = () => {
        switch(activeSection) {
            case 'contact':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <ContactSection />
                        <Footer />
                    </main>
                );

            case 'portfolio':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <PortfolioSection />
                        <FeaturesSection />
                        <Footer />
                    </main>
                );

            case 'apps':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <AppsSection />
                        <NewsSection />
                        <Footer />
                    </main>
                );

            case 'features':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <FeaturesSection />
                        <PortfolioSection />
                        <Footer />
                    </main>
                );

            case 'news':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <NewsSection />
                        <ContactSection />
                        <Footer />
                    </main>
                );

            default:
                // Home page with all sections
                return (
                    <main>
                        <HeroSection setActiveSection={setActiveSection} />
                        <FeaturesSection />
                        <PortfolioSection />
                        <AppsSection />
                        <NewsSection />
                        <ContactSection />
                        <Footer />
                    </main>
                );
        }
    };

    return renderContent();
};

export default MainContent;