// src/index.js (Updated)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';

// Performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Performance monitoring (optional)
function sendToAnalytics(metric) {
    // Send metrics to your analytics service
    console.log('Performance metric:', metric);
}

// Monitor web vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// Service Worker registration (optional for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}