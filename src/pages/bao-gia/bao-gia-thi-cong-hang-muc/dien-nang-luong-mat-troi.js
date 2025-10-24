// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

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
                { size: '3kWp', price: '54-75 triệu', area: '15-20m²', output: '12-15 kWh/ngày' },
                { size: '5kWp', price: '90-125 triệu', area: '25-35m²', output: '20-25 kWh/ngày' },
                { size: '10kWp', price: '180-250 triệu', area: '50-70m²', output: '40-50 kWh/ngày' }
            ],
            bgColor: '#f59e0b'
        },
        {
            id: 'off-grid',
            name: 'Hệ Thống Độc Lập',
            price: '25,000,000 - 35,000,000 VNĐ/kWp',
            description: 'Hoạt động nhờ pin lưu trữ, phù hợp vùng chưa có điện lưới',
            features: [
                'Tấm pin hiệu suất cao',
                'Inverter off-grid',
                'Ắc quy lithium/gel',
                'Bộ điều khiển sạc MPPT',
                'Bảo hành 8-12 năm'
            ],
            capacity: [
                { size: '3kWp', price: '75-105 triệu', area: '15-20m²', output: '12-15 kWh/ngày' },
                { size: '5kWp', price: '125-175 triệu', area: '25-35m²', output: '20-25 kWh/ngày' },
                { size: '10kWp', price: '250-350 triệu', area: '50-70m²', output: '40-50 kWh/ngày' }
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
                { size: '3kWp', price: '66-90 triệu', area: '15-20m²', output: '12-15 kWh/ngày' },
                { size: '5kWp', price: '110-150 triệu', area: '25-35m²', output: '20-25 kWh/ngày' },
                { size: '10kWp', price: '220-300 triệu', area: '50-70m²', output: '40-50 kWh/ngày' }
            ],
            bgColor: '#3b82f6'
        }
    ];

    // Installation steps
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
            description: 'Chọn công suất phù hợp, thiết kế hệ thống tối ưu',
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

    // Benefits
    const benefits = [
        {
            title: 'Tiết Kiệm Chi Phí Điện',
            description: 'Giảm 50-90% hóa đơn điện hàng tháng, hoàn vốn 5-7 năm',
            icon: 'fas fa-piggy-bank',
            color: '#10b981'
        },
        {
            title: 'Thân Thiện Môi Trường',
            description: 'Năng lượng sạch, giảm khí thải CO2, bảo vệ hành tinh',
            icon: 'fas fa-leaf',
            color: '#059669'
        },
        {
            title: 'Độc Lập Năng Lượng',
            description: 'Không lo cúp điện, nguồn điện ổn định suốt 25-30 năm',
            icon: 'fas fa-bolt',
            color: '#f59e0b'
        },
        {
            title: 'Tăng Giá Trị Bất Động Sản',
            description: 'Nhà có điện mặt trời có giá trị cao hơn 3-5%',
            icon: 'fas fa-home',
            color: '#3b82f6'
        }
    ];

    // Technical specs
    const technicalSpecs = [
        {
            component: 'Tấm Pin Solar',
            brands: ['Canadian Solar', 'JA Solar', 'Longi', 'Jinko'],
            specs: 'Công suất: 400-550W/tấm, Hiệu suất: 20-22%',
            warranty: '25-30 năm',
            icon: 'fas fa-solar-panel'
        },
        {
            component: 'Inverter',
            brands: ['Sungrow', 'Growatt', 'SMA', 'Fronius'],
            specs: 'Hiệu suất chuyển đổi: 97-98.5%',
            warranty: '5-10 năm',
            icon: 'fas fa-microchip'
        },
        {
            component: 'Ắc Quy (Off-grid)',
            brands: ['BYD', 'Tesla', 'LG Chem', 'Pylontech'],
            specs: 'Lithium-ion, Dung lượng: 5-20kWh',
            warranty: '5-10 năm',
            icon: 'fas fa-battery-full'
        },
        {
            component: 'Khung Giá Đỡ',
            brands: ['Schletter', 'K2 Systems', 'Unirac'],
            specs: 'Nhôm/thép mạ kẽm, chịu gió 150km/h',
            warranty: '10-15 năm',
            icon: 'fas fa-th'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Hệ thống điện mặt trời có hiệu quả ở Việt Nam không?',
            answer: 'Rất hiệu quả! Việt Nam có lượng nắng trung bình 1,500-2,500 giờ/năm, đặc biệt miền Nam và Tây Nguyên. Hệ thống 5kWp có thể phát 20-25 kWh/ngày, tiết kiệm 4-5 triệu VNĐ/tháng.'
        },
        {
            question: 'Bao lâu thì hoàn vốn đầu tư điện mặt trời?',
            answer: 'Thời gian hoàn vốn trung bình từ 5-7 năm tùy vào giá điện và lượng nắng. Với tuổi thọ tấm pin 25-30 năm, bạn sẽ có 20+ năm sử dụng điện miễn phí hoặc có lợi nhuận từ bán điện.'
        },
        {
            question: 'Điện mặt trời có hoạt động khi trời âm u?',
            answer: 'Có, nhưng hiệu suất giảm 10-30% tùy mức độ u ám. Ngày âm u vẫn có ánh sáng tán xạ để tấm pin phát điện, chỉ không bằng ngày nắng. Hệ hòa lưới/hybrid sẽ tự động lấy điện từ lưới điện khi cần.'
        },
        {
            question: 'Chi phí bảo dưỡng hệ thống như thế nào?',
            answer: 'Chi phí bảo dưỡng rất thấp, chủ yếu là vệ sinh tấm pin 3-6 tháng/lần (200,000-500,000 VNĐ/lần) và kiểm tra hệ thống định kỳ. Tấm pin không có bộ phận chuyển động nên ít hỏng hóc.'
        },
        {
            question: 'Có cần xin phép khi lắp điện mặt trời?',
            answer: 'Hệ hòa lưới cần đăng ký với EVN để bán điện (miễn phí, 1-2 tuần). Hệ độc lập không cần. Không cần xin phép xây dựng nếu lắp trên mái nhà hiện có.'
        },
        {
            question: 'Tấm pin có chịu được bão không?',
            answer: 'Có. Tấm pin được thiết kế chịu gió 150-180km/h (bão cấp 12-13). Khung giá đỡ bằng nhôm/thép mạ kẽm chắc chắn, cố định vào kết cấu mái. Tuy nhiên cần thi công đúng kỹ thuật.'
        }
    ];

    const currentSystem = solarSystems.find(sys => sys.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-sun icon-eco"></i>
                        Báo Giá Điện Năng Lượng Mặt Trời
                    </h1>
                    <p className="section-subtitle">
                        Thi công hệ thống điện mặt trời hòa lưới, độc lập, hybrid chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-piggy-bank icon-pricing"></i>
                            <span>Tiết Kiệm Chi Phí</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-leaf icon-eco"></i>
                            <span>Thân Thiện Môi Trường</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Bảo Hành 25 Năm</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-bolt icon-electrical"></i>
                            <span>Độc Lập Năng Lượng</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar Systems Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Hệ Thống & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại hệ thống điện mặt trời phổ biến
                    </p>

                    {/* Tabs */}
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

                    {/* Detail Card */}
                    {currentSystem && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentSystem.bgColor}, ${currentSystem.bgColor}dd)` }}
                            >
                                <h3>{currentSystem.name}</h3>
                                <div className="price-range">{currentSystem.price}</div>
                                <p>{currentSystem.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                {/* Features Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Bao gồm:</h4>
                                    <ul className="info-list">
                                        {currentSystem.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Capacity Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-bolt"></i> Công suất & giá:</h4>
                                    <div className="item-list">
                                        {currentSystem.capacity.map((cap, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{cap.size}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">
                                                        {cap.area} | {cap.output}
                                                    </span>
                                                    <span className="item-price-extended">{cap.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="detail-content">
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
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Lợi Ích Điện Mặt Trời
                    </h2>
                    <p className="section-subtitle">
                        Tại sao nên sử dụng năng lượng mặt trời
                    </p>

                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: benefit.color }}>
                                    <i className={benefit.icon}></i>
                                    {benefit.title}
                                </h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-process"></i>
                        Quy Trình Thi Công
                    </h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt hệ thống điện mặt trời
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

            {/* Technical Specs */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-cogs icon-construction"></i>
                        Thông Số Kỹ Thuật
                    </h2>
                    <p className="section-subtitle">
                        Thiết bị và linh kiện chính
                    </p>

                    <div className="grid-4">
                        {technicalSpecs.map((spec, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={spec.icon}></i>
                                    {spec.component}
                                </h3>
                                <h4>Thương hiệu:</h4>
                                <div className="tags">
                                    {spec.brands.map((brand, i) => (
                                        <span key={i} className="tag">{brand}</span>
                                    ))}
                                </div>
                                <p><strong>Thông số:</strong> {spec.specs}</p>
                                <span className="standard">Bảo hành: {spec.warranty}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về điện mặt trời
                    </p>

                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <i className="fas fa-chevron-down"></i>
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