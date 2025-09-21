// src/components/sections/FeaturesSection/FeaturesSection.js
import React, { useState, useEffect } from 'react';
import { servicesData } from '../../../data/menuData';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulate loading and use static data
    useEffect(() => {
        const loadServices = () => {
            setTimeout(() => {
                setServices(servicesData);
                setLoading(false);
            }, 500); // Simulate loading time
        };

        loadServices();
    }, []);

    const handleServiceClick = (service) => {
        // Handle service click - could navigate to detail page
        alert(`Chuyển đến: ${service.title}`);
    };

    if (loading) {
        return (
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Dịch vụ chuyên nghiệp</div>
                        <h2 className="section-title">Dịch vụ của chúng tôi</h2>
                    </div>
                    <div className="features-grid">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="feature-card loading">
                                <div className="feature-icon skeleton"></div>
                                <div className="skeleton-text"></div>
                                <div className="skeleton-text"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Dịch vụ chuyên nghiệp</div>
                    <h2 className="section-title">Dịch vụ của chúng tôi</h2>
                    <p className="section-subtitle">
                        Cung cấp giải pháp toàn diện cho mọi nhu cầu xây dựng
                        từ thiết kế đến thi công hoàn thiện
                    </p>
                </div>

                <div className="features-grid">
                    {services.map((service, index) => (
                        <div key={service.id || index} className="feature-card">
                            <div className="feature-icon">
                                <i className={`fas ${service.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.price && (
                                <div className="service-price">
                                    <span>{service.price}</span>
                                </div>
                            )}
                            {service.duration && (
                                <div className="service-duration">
                                    <i className="far fa-clock" aria-hidden="true"></i>
                                    <span>{service.duration}</span>
                                </div>
                            )}
                            <button
                                className="feature-link"
                                onClick={() => handleServiceClick(service)}
                                aria-label={`Xem chi tiết ${service.title}`}
                            >
                                Xem chi tiết
                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;