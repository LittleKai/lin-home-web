// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import '../BaoGiaThiCongHangMuc.css';
import '../ConstructionDetailPages.css';

const DienNangLuongMatTroiPage = () => {
    const [activeTab, setActiveTab] = useState('grid-tied');
    const [activeFaq, setActiveFaq] = useState(null);

    // Solar system types
    const solarSystems = [
        {
            id: 'grid-tied',
            name: 'Hệ Thống Hòa Lưới',
            price: '18,000,000 - 25,000,000 VNĐ/kWp',
            description: 'Kết hợp điện mặt trời + điện lưới, bán điện dư cho EVN',
            features: [
                'Tấm pin Canadian Solar/JA Solar',
                'Inverter Sungrow/Growatt',
                'Khung giá đỡ mạ kẽm',
                'Hệ thống giám sát',
                'Bảo hành 10-15 năm'
            ],
            capacity: [
                { size: '3kWp', price: '54-75 triệu', area: '15-20m²' },
                { size: '5kWp', price: '90-125 triệu', area: '25-35m²' },
                { size: '10kWp', price: '180-250 triệu', area: '50-70m²' }
            ],
            bgColor: '#f59e0b'
        },
        {
            id: 'off-grid',
            name: 'Hệ Thống Độc Lập',
            price: '25,000,000 - 35,000,000 VNĐ/kWp',
            description: 'Hoạt động nhờ pin lưu trữ, phù hợp vùng chưa có điện lưới',
            features: [
                'Tấm pin cao cấp',
                'Inverter off-grid',
                'Ắc quy lithium/gel',
                'Bộ điều khiển sạc',
                'Bảo hành 8-12 năm'
            ],
            capacity: [
                { size: '3kWp', price: '75-105 triệu', area: '15-20m²' },
                { size: '5kWp', price: '125-175 triệu', area: '25-35m²' },
                { size: '10kWp', price: '250-350 triệu', area: '50-70m²' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'hybrid',
            name: 'Hệ Thống Hybrid (Lai)',
            price: '22,000,000 - 30,000,000 VNĐ/kWp',
            description: 'Vừa hòa lưới, vừa có pin lưu trữ cho nguồn điện ổn định',
            features: [
                'Tấm pin hiệu suất cao',
                'Inverter hybrid thông minh',
                'Pin lithium cao cấp',
                'Hệ thống EMS',
                'Bảo hành 10-20 năm'
            ],
            capacity: [
                { size: '3kWp', price: '66-90 triệu', area: '15-20m²' },
                { size: '5kWp', price: '110-150 triệu', area: '25-35m²' },
                { size: '10kWp', price: '220-300 triệu', area: '50-70m²' }
            ],
            bgColor: '#3b82f6'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát Công Trình',
            description: 'Kiểm tra mái nhà, hướng nắng, kết cấu, điều kiện lắp đặt',
            duration: '1 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Tư Vấn Giải Pháp',
            description: 'Chọn công suất phù hợp (3kWp, 5kWp, 10kWp), thiết kế hệ thống',
            duration: '1-2 ngày',
            icon: 'fas fa-lightbulb'
        },
        {
            step: 3,
            title: 'Thiết Kế Hệ Thống',
            description: 'Bố trí tấm pin, inverter, tủ điện, tính toán hiệu suất',
            duration: '2-3 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 4,
            title: 'Thi Công Lắp Đặt',
            description: 'Lắp khung giá đỡ, tấm pin, kết nối inverter, tủ điện',
            duration: '1-3 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 5,
            title: 'Chạy Thử & Bàn Giao',
            description: 'Kiểm tra hiệu suất, kết nối lưới điện, hướng dẫn vận hành',
            duration: '1 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Benefits comparison
    const benefits = [
        {
            icon: 'fas fa-dollar-sign',
            title: 'Tiết Kiệm Chi Phí',
            description: 'Giảm 40-70% tiền điện hàng tháng',
            color: '#10b981'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Thân Thiện Môi Trường',
            description: 'Giảm khí thải CO₂, bảo vệ hành tinh',
            color: '#059669'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Đầu Tư Sinh Lời',
            description: 'Có thể bán điện dư cho EVN',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-home',
            title: 'Tăng Giá Trị BĐS',
            description: 'Ngôi nhà hiện đại, tiện ích hơn',
            color: '#8b5cf6'
        }
    ];

    // Technical specifications
    const techSpecs = [
        {
            category: 'Tấm Pin Solar',
            items: [
                { name: 'Canadian Solar 540W', efficiency: '21.2%', warranty: '15 năm' },
                { name: 'JA Solar 545W', efficiency: '21.5%', warranty: '15 năm' },
                { name: 'Jinko Solar 550W', efficiency: '21.8%', warranty: '12 năm' },
                { name: 'Trina Solar 535W', efficiency: '21.0%', warranty: '12 năm' }
            ]
        },
        {
            category: 'Inverter',
            items: [
                { name: 'Sungrow SG5KTL', capacity: '5kW', warranty: '5 năm' },
                { name: 'Growatt MIN 5000TL-X', capacity: '5kW', warranty: '5 năm' },
                { name: 'Huawei SUN2000-5KTL', capacity: '5kW', warranty: '5 năm' },
                { name: 'SMA Sunny Boy 5.0', capacity: '5kW', warranty: '7 năm' }
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Hệ thống điện mặt trời có tiết kiệm được bao nhiều?',
            answer: 'Hệ thống điện mặt trời có thể tiết kiệm 40-70% tiền điện hàng tháng tùy thuộc vào công suất lắp đặt và mức tiêu thụ điện của gia đình.'
        },
        {
            question: 'Thời gian hoàn vốn đầu tư bao lâu?',
            answer: 'Thời gian hoàn vốn trung bình từ 5-7 năm. Với tuổi thọ tấm pin 25-30 năm, bạn sẽ có 20+ năm sử dụng điện miễn phí.'
        },
        {
            question: 'Điện mặt trời có hoạt động khi trời âm u?',
            answer: 'Có, nhưng hiệu suất giảm 10-20%. Ngày âm u vẫn có ánh sáng tán xạ để tấm pin phát điện, chỉ không bằng ngày nắng.'
        },
        {
            question: 'Chi phí bảo dưỡng hệ thống như thế nào?',
            answer: 'Chi phí bảo dưỡng rất thấp, chủ yếu là vệ sinh tấm pin 3-6 tháng/lần (200,000-500,000 VNĐ/lần) và kiểm tra hệ thống.'
        }
    ];

    const currentSystem = solarSystems.find(sys => sys.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            ☀️ Báo Giá Thi Công Điện Năng Lượng Mặt Trời 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết hệ thống điện mặt trời hòa lưới, độc lập, hybrid 
                            tại Hà Nội & Nha Trang. Tiết kiệm điện - Thân thiện môi trường.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-solar-panel"></i>
                                <span>Công Nghệ Tiên Tiến</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Xanh - Sạch - Bền Vững</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-piggy-bank"></i>
                                <span>Tiết Kiệm 40-70%</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Bảo Hành 10-25 Năm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar System Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">⚡ Loại Hệ Thống & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng hệ thống điện mặt trời phù hợp mọi nhu cầu
                    </p>

                    <div className="tabs">
                        {solarSystems.map(system => (
                            <button
                                key={system.id}
                                className={`tab ${activeTab === system.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(system.id)}
                            >
                                {system.name}
                            </button>
                        ))}
                    </div>

                    {currentSystem && (
                        <div className="solar-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentSystem.bgColor}, ${currentSystem.bgColor}dd)` }}>
                                <h3>{currentSystem.name}</h3>
                                <div className="price-range">{currentSystem.price}</div>
                                <p>{currentSystem.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>⚡ Bao gồm:</h4>
                                    <ul className="features-list">
                                        {currentSystem.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="capacity-section">
                                    <h4>🔌 Công suất & giá:</h4>
                                    <div className="capacity-list">
                                        {currentSystem.capacity.map((cap, index) => (
                                            <div key={index} className="capacity-item">
                                                <div className="capacity-name">{cap.size}</div>
                                                <div className="capacity-price">{cap.price}</div>
                                                <div className="capacity-area">Diện tích: {cap.area}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-actions">
                                <a href="/lien-he" className="btn btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Liên Hệ Báo Giá
                                </a>
                                <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Tính Công Suất
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🌟 Lợi Ích Điện Mặt Trời</h2>
                    <p className="section-subtitle">
                        Những ưu điểm vượt trội của hệ thống điện năng lượng mặt trời
                    </p>

                    <div className="benefits-grid grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon" style={{ backgroundColor: benefit.color }}>
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Thi Công</h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt hệ thống điện mặt trời chuyên nghiệp
                    </p>

                    <div className="process-timeline">
                        {installationSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={step.icon}></i>
                                    <span>{step.step}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration">
                                        <i className="far fa-clock"></i>
                                        {step.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">⚙️ Thông Số Kỹ Thuật</h2>
                    <p className="section-subtitle">
                        Thông số chi tiết các thiết bị trong hệ thống
                    </p>

                    <div className="tech-specs-grid grid-2">
                        {techSpecs.map((spec, index) => (
                            <div key={index} className="spec-card card">
                                <div className="card-header">
                                    <h3>{spec.category}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="spec-table">
                                        {spec.items.map((item, i) => (
                                            <div key={i} className="spec-row">
                                                <div className="spec-name">{item.name}</div>
                                                <div className="spec-details">
                                                    {item.efficiency && <span>Hiệu suất: {item.efficiency}</span>}
                                                    {item.capacity && <span>Công suất: {item.capacity}</span>}
                                                    <span>BH: {item.warranty}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Thường Gặp</h2>
                    
                    <div className="faq-list">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button 
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default DienNangLuongMatTroiPage;
