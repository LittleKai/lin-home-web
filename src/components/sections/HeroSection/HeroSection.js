// src/components/sections/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ setActiveSection }) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-star"></i>
                        Hơn 10+ dự án thành công
                    </div>
                    <h1>Kiến Trúc Xây Dựng Hiện Đại</h1>
                    <p>
                        Thiết kế và thi công trọn gói với chất lượng tốt nhất.
                        Biến ước mơ ngôi nhà của bạn thành hiện thực với đội ngũ
                        kiến trúc sư và kỹ sư giàu kinh nghiệm.
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => setActiveSection('portfolio')}
                            aria-label="Xem portfolio dự án"
                        >
                            <i className="fas fa-play"></i>
                            Xem portfolio
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => setActiveSection('contact')}
                            aria-label="Liên hệ tư vấn"
                        >
                            <i className="fas fa-phone"></i>
                            Liên hệ ngay
                        </button>
                    </div>
                </div>
                <div className="hero-image floating" aria-hidden="true"></div>
            </div>
        </section>
    );
};

export default HeroSection;
