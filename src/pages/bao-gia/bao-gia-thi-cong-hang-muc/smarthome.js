// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/smarthome.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const SmarthomePage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Smarthome packages
    const smarthomePackages = [
        {
            id: 'basic',
            name: 'Gói Smarthome Cơ Bản',
            price: '15,000,000 - 25,000,000 VNĐ',
            description: 'Giải pháp nhà thông minh cơ bản cho căn hộ 80-120m²',
            features: [
                'Hệ thống chiếu sáng thông minh (5-8 thiết bị)',
                'Điều khiển 2-3 điều hòa',
                'Camera an ninh cơ bản (2-3 mắt)',
                'Cảm biến chuyển động',
                'App điều khiển iOS/Android'
            ],
            devices: [
                'Công tắc thông minh Aqara/Lumi',
                'Camera IP Xiaomi/Ezviz',
                'Cảm biến PIR',
                'Hub điều khiển trung tâm'
            ],
            suitable: ['Căn hộ chung cư', 'Nhà phố nhỏ', 'Văn phòng nhỏ'],
            bgColor: '#10b981'
        },
        {
            id: 'premium',
            name: 'Gói Smarthome Cao Cấp',
            price: '35,000,000 - 55,000,000 VNĐ',
            description: 'Hệ thống nhà thông minh hoàn chỉnh cho biệt thự, penthouse',
            features: [
                'Hệ thống chiếu sáng đa zone (10-15 thiết bị)',
                'Điều khiển toàn bộ thiết bị điện',
                'Hệ thống an ninh đầy đủ (5-8 camera)',
                'Rèm cửa tự động',
                'Hệ thống âm thanh đa vùng',
                'Voice control (Google/Alexa)'
            ],
            devices: [
                'Thiết bị BKAV SmartHome',
                'Camera AI Hikvision',
                'Motor rèm Somfy',
                'Loa âm trần đa vùng',
                'Màn hình điều khiển trung tâm'
            ],
            suitable: ['Biệt thự', 'Penthouse', 'Nhà phố cao cấp'],
            bgColor: '#3b82f6'
        },
        {
            id: 'luxury',
            name: 'Gói Smarthome Luxury',
            price: '80,000,000 - 150,000,000 VNĐ',
            description: 'Hệ thống nhà thông minh đẳng cấp cho villa, resort',
            features: [
                'Hệ thống KNX/EIB chuẩn châu Âu',
                'Điều khiển toàn diện mọi thiết bị',
                'AI Security với face recognition',
                'Home theater tích hợp',
                'Hệ thống tưới cây tự động',
                'Quản lý năng lượng thông minh',
                'Dashboard quản lý chuyên nghiệp'
            ],
            devices: [
                'Hệ thống KNX Schneider',
                'Camera AI Axis/Bosch',
                'Màn hình cảm ứng 10-15 inch',
                'Server điều khiển trung tâm',
                'Cảm biến môi trường IoT'
            ],
            suitable: ['Villa cao cấp', 'Resort', 'Khách sạn 5*'],
            bgColor: '#8b5cf6'
        }
    ];

    // Smart systems
    const smartSystems = [
        {
            category: 'Chiếu Sáng Thông Minh',
            icon: 'fas fa-lightbulb',
            description: 'Điều chỉnh độ sáng, màu sắc theo ngữ cảnh',
            devices: ['Công tắc dimmer', 'Đèn LED RGB', 'Cảm biến ánh sáng'],
            price: '1,500,000 - 3,500,000 VNĐ/phòng'
        },
        {
            category: 'An Ninh - Giám Sát',
            icon: 'fas fa-shield-alt',
            description: 'Camera, cảm biến, báo động thông minh',
            devices: ['Camera IP AI', 'Cảm biến cửa', 'Báo động khói'],
            price: '5,000,000 - 15,000,000 VNĐ/hệ thống'
        },
        {
            category: 'Điều Hòa & Thiết Bị',
            icon: 'fas fa-thermometer-half',
            description: 'Điều khiển từ xa, hẹn giờ tự động',
            devices: ['IR controller', 'Smart plug', 'Cảm biến nhiệt độ'],
            price: '2,000,000 - 5,000,000 VNĐ/phòng'
        },
        {
            category: 'Rèm Cửa Tự Động',
            icon: 'fas fa-window-maximize',
            description: 'Tự động đóng mở theo giờ hoặc ánh sáng',
            devices: ['Motor rèm', 'Remote control', 'Cảm biến ánh sáng'],
            price: '3,000,000 - 8,000,000 VNĐ/bộ'
        },
        {
            category: 'Âm Thanh Giải Trí',
            icon: 'fas fa-music',
            description: 'Âm thanh đa vùng, tích hợp karaoke',
            devices: ['Loa âm trần', 'Amplifier', 'Music server'],
            price: '10,000,000 - 30,000,000 VNĐ/hệ thống'
        },
        {
            category: 'Quản Lý Năng Lượng',
            icon: 'fas fa-bolt',
            description: 'Giám sát và tối ưu hóa tiêu thụ điện',
            devices: ['Smart meter', 'Energy monitor', 'Load controller'],
            price: '5,000,000 - 12,000,000 VNĐ/hệ thống'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Tư Vấn',
            description: 'Khảo sát công trình, tư vấn giải pháp phù hợp nhu cầu',
            duration: '1-2 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Thiết Kế Hệ Thống',
            description: 'Thiết kế sơ đồ, chọn thiết bị, lập dự toán chi tiết',
            duration: '2-3 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 3,
            title: 'Lắp Đặt Thiết Bị',
            description: 'Lắp đặt các thiết bị thông minh, kéo dây, đấu nối',
            duration: '3-7 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 4,
            title: 'Cấu Hình & Kết Nối',
            description: 'Cấu hình thiết bị, kết nối mạng, tích hợp các hệ thống',
            duration: '1-2 ngày',
            icon: 'fas fa-cogs'
        },
        {
            step: 5,
            title: 'Chạy Thử & Bàn Giao',
            description: 'Test hệ thống, hướng dẫn sử dụng, bàn giao tài liệu',
            duration: '1 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Benefits
    const benefits = [
        {
            title: 'Tiện Nghi & Thoải Mái',
            description: 'Điều khiển mọi thiết bị từ xa, tự động hóa theo lịch',
            icon: 'fas fa-mobile-alt',
            color: '#3b82f6'
        },
        {
            title: 'An Toàn & Bảo Mật',
            description: 'Giám sát 24/7, cảnh báo ngay khi có xâm nhập',
            icon: 'fas fa-shield-alt',
            color: '#ef4444'
        },
        {
            title: 'Tiết Kiệm Năng Lượng',
            description: 'Tối ưu điện năng, giảm 20-30% hóa đơn điện',
            icon: 'fas fa-leaf',
            color: '#10b981'
        },
        {
            title: 'Tăng Giá Trị BĐS',
            description: 'Nhà có smarthome có giá trị cao hơn 5-10%',
            icon: 'fas fa-home',
            color: '#f59e0b'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Smarthome có phức tạp không? Người già có dùng được?',
            answer: 'Smarthome hiện đại rất dễ dùng với app trực quan, voice control. Người già có thể điều khiển bằng giọng nói hoặc remote đơn giản. Chúng tôi sẽ hướng dẫn kỹ và thiết lập sẵn các scenario thường dùng.'
        },
        {
            question: 'Chi phí smarthome cho căn hộ 100m² bao nhiêu?',
            answer: 'Gói cơ bản: 15-25 triệu (chiếu sáng + camera + điều hòa). Gói cao cấp: 35-55 triệu (full tính năng). Gói luxury: 80-150 triệu (KNX, AI, home theater). Tùy nhu cầu và ngân sách.'
        },
        {
            question: 'Có thể nâng cấp dần được không?',
            answer: 'Hoàn toàn được. Nên bắt đầu từ chiếu sáng thông minh, sau đó mở rộng dần an ninh, điều hòa, rèm cửa theo nhu cầu và ngân sách. Hệ thống được thiết kế để dễ dàng mở rộng.'
        },
        {
            question: 'Hệ thống có hoạt động khi mất internet?',
            answer: 'Các chức năng cơ bản (bật/tắt đèn, điều hòa) vẫn hoạt động bình thường. Chỉ điều khiển từ xa và một số tính năng AI cần internet mới bị ảnh hưởng. Hệ thống hoạt động độc lập trong mạng LAN.'
        },
        {
            question: 'Thời gian lắp đặt smarthome mất bao lâu?',
            answer: 'Căn hộ 100m² gói cơ bản: 3-5 ngày. Gói cao cấp: 5-10 ngày. Biệt thự gói luxury: 10-20 ngày. Bao gồm lắp đặt, cấu hình, test và hướng dẫn sử dụng.'
        },
        {
            question: 'Chi phí vận hành hàng tháng như thế nào?',
            answer: 'Rất thấp, chủ yếu là tiền điện cho các thiết bị (50,000-200,000 VNĐ/tháng) và chi phí internet nếu có. Không có phí duy trì hệ thống. Tiết kiệm điện còn giúp giảm hóa đơn tổng thể.'
        }
    ];

    const currentPackage = smarthomePackages.find(pkg => pkg.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-home icon-construction"></i>
                        Báo Giá Smarthome - Nhà Thông Minh
                    </h1>
                    <p className="section-subtitle">
                        Thi công hệ thống nhà thông minh tiện nghi, an toàn, hiện đại
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-mobile-alt"></i>
                            <span>Điều Khiển Từ Xa</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-robot"></i>
                            <span>Tự Động Hóa AI</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-safety"></i>
                            <span>An Ninh Thông Minh</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-leaf icon-eco"></i>
                            <span>Tiết Kiệm Năng Lượng</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smarthome Packages Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Gói Smarthome & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 gói smarthome phù hợp mọi quy mô
                    </p>

                    <div className="tabs">
                        {smarthomePackages.map(pkg => (
                            <button
                                key={pkg.id}
                                className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(pkg.id)}
                            >
                                {pkg.name}
                            </button>
                        ))}
                    </div>

                    {currentPackage && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentPackage.bgColor}, ${currentPackage.bgColor}dd)` }}
                            >
                                <h3>{currentPackage.name}</h3>
                                <div className="price-range">{currentPackage.price}</div>
                                <p>{currentPackage.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Tính năng:</h4>
                                    <ul className="info-list">
                                        {currentPackage.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info-section">
                                    <h4><i className="fas fa-microchip"></i> Thiết bị:</h4>
                                    <ul className="info-list">
                                        {currentPackage.devices.map((device, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {device}
                                            </li>
                                        ))}
                                    </ul>
                                    <h4 style={{ marginTop: '1rem' }}>Phù hợp:</h4>
                                    <div className="tags">
                                        {currentPackage.suitable.map((s, i) => (
                                            <span key={i} className="tag">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary">
                                        <i className="fas fa-phone"></i>
                                        Liên Hệ Báo Giá
                                    </a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                        <i className="fas fa-calculator"></i>
                                        Tư Vấn Giải Pháp
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Smart Systems */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-cogs icon-construction"></i>
                        Các Hệ Thống Thông Minh
                    </h2>
                    <p className="section-subtitle">
                        Các giải pháp smarthome phổ biến
                    </p>

                    <div className="grid-3">
                        {smartSystems.map((system, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={system.icon}></i>
                                    {system.category}
                                </h3>
                                <p>{system.description}</p>
                                <h4>Thiết bị:</h4>
                                <ul>
                                    {system.devices.map((device, i) => (
                                        <li key={i}>
                                            <i className="fas fa-dot-circle"></i>
                                            {device}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{system.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Lợi Ích Smarthome
                    </h2>
                    <p className="section-subtitle">
                        Tại sao nên có nhà thông minh
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
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-process"></i>
                        Quy Trình Triển Khai
                    </h2>
                    <p className="section-subtitle">
                        5 bước triển khai smarthome chuyên nghiệp
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

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về smarthome
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

export default SmarthomePage;