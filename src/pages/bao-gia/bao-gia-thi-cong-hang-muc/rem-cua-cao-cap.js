// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const RemCuaCaoCapPage = () => {
    const [activeTab, setActiveTab] = useState('fabric');
    const [activeFaq, setActiveFaq] = useState(null);

    // Curtain types
    const curtainTypes = [
        {
            id: 'fabric',
            name: 'Rèm Vải Cao Cấp',
            price: '450,000 - 850,000 VNĐ/m²',
            description: 'Rèm vải 2 lớp chống nắng, cách nhiệt, cách âm tốt',
            features: [
                'Vải 2 lớp chống nắng 95%',
                'Ray trượt im lặng Đức',
                'Điều khiển từ xa',
                'Bảo hành 18 tháng',
                'Đa dạng màu sắc',
                'Dễ vệ sinh'
            ],
            materials: [
                { name: 'Vải nhung cao cấp', price: '650-850K', origin: 'Hàn Quốc' },
                { name: 'Vải linen tự nhiên', price: '550-750K', origin: 'Châu Âu' },
                { name: 'Vải blackout', price: '450-650K', origin: 'Việt Nam' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'rainbow',
            name: 'Rèm Cầu Vồng',
            price: '320,000 - 650,000 VNĐ/m²',
            description: 'Điều chỉnh ánh sáng linh hoạt, phù hợp văn phòng, chung cư',
            features: [
                'Điều chỉnh ánh sáng linh hoạt',
                'Vải chống UV 70-85%',
                'Lắp đặt nhanh gọn',
                'Bảo hành 12 tháng',
                'Tiết kiệm không gian',
                'Giá cả hợp lý'
            ],
            materials: [
                { name: 'Vải polyester', price: '320-450K', origin: 'Trung Quốc' },
                { name: 'Vải screen cao cấp', price: '480-580K', origin: 'Hàn Quốc' },
                { name: 'Vải chống cháy', price: '550-650K', origin: 'Nhật Bản' }
            ],
            bgColor: '#ec4899'
        },
        {
            id: 'smart',
            name: 'Rèm Tự Động Smarthome',
            price: '1,200,000 - 2,500,000 VNĐ/m²',
            description: 'Rèm tự động điều khiển bằng app, hẹn giờ thông minh',
            features: [
                'Motor Somfy chính hãng',
                'App điều khiển iOS/Android',
                'Hẹn giờ tự động',
                'Bảo hành 24 tháng',
                'Tích hợp Google/Alexa',
                'Cảm biến ánh sáng'
            ],
            materials: [
                { name: 'Vải cao cấp + Motor', price: '1,200-1,800K', origin: 'Pháp' },
                { name: 'Motor im lặng', price: '1,500-2,000K', origin: 'Đức' },
                { name: 'Cảm biến thông minh', price: '1,800-2,500K', origin: 'Mỹ' }
            ],
            bgColor: '#3b82f6'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Đo Đạc',
            description: 'Đo chính xác cửa sổ, cửa đi, tư vấn loại rèm phù hợp',
            duration: '0.5 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Tư Vấn & Chọn Mẫu',
            description: 'Chọn loại rèm, màu sắc, chất liệu phù hợp phong cách',
            duration: '1 ngày',
            icon: 'fas fa-palette'
        },
        {
            step: 3,
            title: 'Thiết Kế & Báo Giá',
            description: 'Thiết kế chi tiết, báo giá rõ ràng từng hạng mục',
            duration: '1-2 ngày',
            icon: 'fas fa-calculator'
        },
        {
            step: 4,
            title: 'Gia Công Rèm',
            description: 'Gia công rèm theo thiết kế, chuẩn bị phụ kiện',
            duration: '3-7 ngày',
            icon: 'fas fa-cut'
        },
        {
            step: 5,
            title: 'Lắp Đặt & Bàn Giao',
            description: 'Thi công lắp đặt tại công trình, kiểm tra chất lượng',
            duration: '1 ngày',
            icon: 'fas fa-tools'
        }
    ];

    // Curtain features comparison
    const featureComparison = [
        {
            feature: 'Chống Nắng',
            fabric: '95%',
            rainbow: '70-85%',
            smart: '95%'
        },
        {
            feature: 'Cách Âm',
            fabric: 'Tốt',
            rainbow: 'Trung bình',
            smart: 'Tốt'
        },
        {
            feature: 'Độ Bền',
            fabric: '5-7 năm',
            rainbow: '3-5 năm',
            smart: '7-10 năm'
        },
        {
            feature: 'Điều Khiển',
            fabric: 'Tay + Remote',
            rainbow: 'Tay',
            smart: 'App + Voice'
        },
        {
            feature: 'Bảo Hành',
            fabric: '18 tháng',
            rainbow: '12 tháng',
            smart: '24 tháng'
        }
    ];

    // Applications by space
    const applications = [
        {
            space: 'Phòng Ngủ',
            recommended: 'Rèm Vải Blackout',
            reason: 'Chống sáng tối đa, cách âm, riêng tư',
            price: '650-850K/m²',
            icon: 'fas fa-bed'
        },
        {
            space: 'Phòng Khách',
            recommended: 'Rèm Vải 2 Lớp',
            reason: 'Sang trọng, điều chỉnh ánh sáng linh hoạt',
            price: '550-750K/m²',
            icon: 'fas fa-couch'
        },
        {
            space: 'Văn Phòng',
            recommended: 'Rèm Cầu Vồng',
            reason: 'Tiện lợi, tiết kiệm, chống chói',
            price: '400-600K/m²',
            icon: 'fas fa-briefcase'
        },
        {
            space: 'Biệt Thự',
            recommended: 'Rèm Tự Động',
            reason: 'Hiện đại, tiện nghi, tự động hóa',
            price: '1,500-2,500K/m²',
            icon: 'fas fa-home'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Rèm có chống nắng hiệu quả không?',
            answer: 'Rèm blackout chống nắng 95-99%, rèm screen chống 70-85% ánh sáng và tia UV. Tùy chọn phù hợp nhu cầu sử dụng.'
        },
        {
            question: 'Rèm có bền trong khí hậu nhiệt đới?',
            answer: 'Vải chất lượng cao chống UV, chống ẩm có thể bền 5-7 năm. Ở Nha Trang cần chọn vải chống mặn.'
        },
        {
            question: 'Chi phí bảo dưỡng rèm như thế nào?',
            answer: 'Rèm vải cần giặt 6-12 tháng/lần (100-300K), rèm tự động cần bảo dưỡng motor 1 năm/lần (200-500K).'
        },
        {
            question: 'Có thể thay chỉ vải rèm không?',
            answer: 'Có thể thay vải mới giữ nguyên ray và phụ kiện, tiết kiệm 30-50% chi phí so với làm mới hoàn toàn.'
        }
    ];

    const currentType = curtainTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🪟 Báo Giá Thi Công Rèm Cửa Cao Cấp 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết lắp đặt rèm vải, rèm cầu vồng, rèm tự động 
                            tại Hà Nội & Nha Trang. Đẹp - Sang - Giá tốt.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-sun"></i>
                                <span>Chống Nắng 95%</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-volume-mute"></i>
                                <span>Cách Âm Tốt</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-mobile-alt"></i>
                                <span>Điều Khiển Thông Minh</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-palette"></i>
                                <span>Đa Dạng Mẫu Mã</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curtain Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🎭 Loại Rèm Cửa & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng rèm cửa phù hợp mọi không gian và nhu cầu
                    </p>

                    <div className="tabs">
                        {curtainTypes.map(type => (
                            <button
                                key={type.id}
                                className={`tab ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="curtain-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Đặc điểm:</h4>
                                    <ul className="features-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="materials-section">
                                    <h4>🎨 Chất liệu & giá:</h4>
                                    <div className="materials-list">
                                        {currentType.materials.map((material, index) => (
                                            <div key={index} className="material-item">
                                                <div className="material-name">{material.name}</div>
                                                <div className="material-price">{material.price}</div>
                                                <div className="material-origin">Xuất xứ: {material.origin}</div>
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
                                    <i className="fas fa-eye"></i>
                                    Xem Mẫu Rèm
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">⚖️ So Sánh Tính Năng</h2>
                    <p className="section-subtitle">
                        Bảng so sánh chi tiết 3 loại rèm cửa
                    </p>

                    <div className="comparison-table">
                        <div className="table-wrapper">
                            <table className="comparison">
                                <thead>
                                    <tr>
                                        <th>Tính Năng</th>
                                        <th style={{ background: '#8b5cf6' }}>Rèm Vải</th>
                                        <th style={{ background: '#ec4899' }}>Rèm Cầu Vồng</th>
                                        <th style={{ background: '#3b82f6' }}>Rèm Tự Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {featureComparison.map((row, index) => (
                                        <tr key={index}>
                                            <td className="feature-name">{row.feature}</td>
                                            <td>{row.fabric}</td>
                                            <td>{row.rainbow}</td>
                                            <td>{row.smart}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Thi Công</h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt rèm cửa chuyên nghiệp
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

            {/* Applications by Space */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🏠 Ứng Dụng Theo Không Gian</h2>
                    <p className="section-subtitle">
                        Gợi ý loại rèm phù hợp từng không gian
                    </p>

                    <div className="applications-grid grid-4">
                        {applications.map((app, index) => (
                            <div key={index} className="application-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={app.icon}></i>
                                        {app.space}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="recommended">
                                        <h4>💡 Gợi ý:</h4>
                                        <p className="product-name">{app.recommended}</p>
                                    </div>
                                    <div className="reason">
                                        <h4>📋 Lý do:</h4>
                                        <p>{app.reason}</p>
                                    </div>
                                    <div className="app-price">
                                        <strong>{app.price}</strong>
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

export default RemCuaCaoCapPage;
