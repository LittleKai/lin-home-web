// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/smarthome.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

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
            suitable: ['Căn hộ chung cư', 'Nhà phố nhỏ', 'Văn phòng'],
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

    // Smart systems categories
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

    // Installation process
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
            description: 'Thiết kế sơ đồ, chọn thiết bị, lập báo giá chi tiết',
            duration: '3-5 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 3,
            title: 'Thi Công & Lắp Đặt',
            description: 'Lắp đặt thiết bị, đi dây điện, kết nối mạng',
            duration: '3-10 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 4,
            title: 'Cấu Hình & Kết Nối',
            description: 'Cấu hình hệ thống, kết nối các thiết bị, test',
            duration: '1-2 ngày',
            icon: 'fas fa-cog'
        },
        {
            step: 5,
            title: 'Hướng Dẫn & Bàn Giao',
            description: 'Hướng dẫn sử dụng app, bàn giao tài liệu',
            duration: '1 ngày',
            icon: 'fas fa-graduation-cap'
        }
    ];

    // Brand comparison
    const brands = [
        {
            name: 'Aqara (Xiaomi)',
            origin: 'Trung Quốc',
            priceRange: 'Bình dân',
            pros: ['Giá hợp lý', 'Đa dạng sản phẩm', 'App dễ dùng'],
            cons: ['Server Trung Quốc', 'Hỗ trợ tiếng Việt hạn chế'],
            rating: 4
        },
        {
            name: 'BKAV SmartHome',
            origin: 'Việt Nam',
            priceRange: 'Trung cấp',
            pros: ['Made in Vietnam', 'Hỗ trợ tốt', 'Tích hợp AI'],
            cons: ['Ít sản phẩm', 'Giá cao hơn Xiaomi'],
            rating: 4.5
        },
        {
            name: 'Schneider KNX',
            origin: 'Pháp',
            priceRange: 'Cao cấp',
            pros: ['Chuẩn châu Âu', 'Độ bền cao', 'Chuyên nghiệp'],
            cons: ['Giá rất đắt', 'Phức tạp', 'Cần kỹ thuật cao'],
            rating: 5
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Smarthome có tiết kiệm điện không?',
            answer: 'Có, hệ thống smarthome có thể tiết kiệm 15-30% điện năng nhờ tự động tắt/mở thiết bị theo lịch và tối ưu hóa hoạt động.'
        },
        {
            question: 'Có thể nâng cấp dần từng phần không?',
            answer: 'Có thể. Nên bắt đầu từ chiếu sáng thông minh, sau đó mở rộng dần an ninh, điều hòa, rèm cửa theo nhu cầu và ngân sách.'
        },
        {
            question: 'Hệ thống có hoạt động khi mất internet?',
            answer: 'Các chức năng cơ bản vẫn hoạt động. Chỉ điều khiển từ xa và một số tính năng AI cần internet mới bị ảnh hưởng.'
        },
        {
            question: 'Chi phí vận hành hàng tháng như thế nào?',
            answer: 'Rất thấp, chủ yếu là tiền điện cho các thiết bị (50,000-200,000 VNĐ/tháng) và chi phí internet nếu có.'
        }
    ];

    const currentPackage = smarthomePackages.find(pkg => pkg.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🏡 Báo Giá Thi Công Smarthome (Nhà Thông Minh) 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết thi công hệ thống nhà thông minh 
                            tại Hà Nội & Nha Trang. Tiện nghi - An toàn - Hiện đại.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-mobile-alt"></i>
                                <span>Điều Khiển Từ Xa</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-robot"></i>
                                <span>Tự Động Hóa AI</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>An Ninh Thông Minh</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Tiết Kiệm Năng Lượng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smarthome Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🏠 Gói Smarthome & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 gói smarthome phù hợp mọi quy mô và ngân sách
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
                        <div className="smarthome-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentPackage.bgColor}, ${currentPackage.bgColor}dd)` }}>
                                <h3>{currentPackage.name}</h3>
                                <div className="price-range">{currentPackage.price}</div>
                                <p>{currentPackage.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Chức năng:</h4>
                                    <ul className="features-list">
                                        {currentPackage.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="devices-section">
                                    <h4>📱 Thiết bị:</h4>
                                    <ul className="devices-list">
                                        {currentPackage.devices.map((device, index) => (
                                            <li key={index}>
                                                <i className="fas fa-microchip"></i>
                                                {device}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="suitable-for">
                                <h4>🏠 Phù hợp:</h4>
                                <div className="tags">
                                    {currentPackage.suitable.map((item, index) => (
                                        <span key={index} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="detail-actions">
                                <a href="/lien-he" className="btn btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Liên Hệ Báo Giá
                                </a>
                                <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                    <i className="fas fa-eye"></i>
                                    Demo Trải Nghiệm
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Smart Systems */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔧 Hạng Mục Smarthome</h2>
                    <p className="section-subtitle">
                        Các hệ thống thông minh phổ biến trong nhà
                    </p>

                    <div className="systems-grid grid-3">
                        {smartSystems.map((system, index) => (
                            <div key={index} className="system-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={system.icon}></i>
                                        {system.category}
                                    </h3>
                                    <p>{system.description}</p>
                                </div>
                                <div className="card-body">
                                    <div className="system-devices">
                                        <h4>Thiết bị:</h4>
                                        <ul>
                                            {system.devices.map((device, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {device}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="system-price">
                                        <strong>{system.price}</strong>
                                    </div>
                                </div>
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
                        5 bước triển khai hệ thống smarthome chuyên nghiệp
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

            {/* Brand Comparison */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🏷️ So Sánh Thương Hiệu</h2>
                    <p className="section-subtitle">
                        So sánh các thương hiệu smarthome phổ biến
                    </p>

                    <div className="brands-grid grid-3">
                        {brands.map((brand, index) => (
                            <div key={index} className="brand-card card">
                                <div className="card-header">
                                    <h3>{brand.name}</h3>
                                    <div className="brand-info">
                                        <span className="origin">Xuất xứ: {brand.origin}</span>
                                        <span className="price-range">Giá: {brand.priceRange}</span>
                                    </div>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i 
                                                key={i} 
                                                className={`fas fa-star ${i < brand.rating ? 'active' : ''}`}
                                            ></i>
                                        ))}
                                        <span>{brand.rating}/5</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="pros-cons">
                                        <div className="pros">
                                            <h4>👍 Ưu điểm:</h4>
                                            <ul>
                                                {brand.pros.map((pro, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-plus"></i>
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="cons">
                                            <h4>👎 Nhược điểm:</h4>
                                            <ul>
                                                {brand.cons.map((con, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-minus"></i>
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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

export default SmarthomePage;
