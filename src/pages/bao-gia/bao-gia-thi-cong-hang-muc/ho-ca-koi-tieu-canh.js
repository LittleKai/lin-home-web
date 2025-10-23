// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const HoCaKoiTieuCanhPage = () => {
    const [activeTab, setActiveTab] = useState('koi-outdoor');
    const [activeFaq, setActiveFaq] = useState(null);

    // Koi pond and landscape types
    const landscapeTypes = [
        {
            id: 'koi-outdoor',
            name: 'Hồ Cá Koi Ngoài Trời',
            price: '25,000,000 - 80,000,000 VNĐ',
            description: 'Hồ cá koi ngoài trời kết hợp cây xanh, tiểu cảnh tự nhiên',
            features: [
                'Hệ thống lọc nước chuyên nghiệp',
                'Thác nước tự nhiên',
                'Đèn LED underwater nhiều màu',
                'Cây cảnh trang trí xung quanh',
                'Hệ thống oxy tự động',
                'Cá koi Nhật chuẩn F1'
            ],
            sizes: [
                { area: '3-5m²', fish: '10-15 con', price: '25-40 triệu' },
                { area: '6-8m²', fish: '20-30 con', price: '45-60 triệu' },
                { area: '10-15m²', fish: '30-50 con', price: '65-80 triệu' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'landscape-garden',
            name: 'Tiểu Cảnh Sân Vườn',
            price: '15,000,000 - 50,000,000 VNĐ',
            description: 'Tiểu cảnh khô, ướt kết hợp hòn non bộ và cây cảnh',
            features: [
                'Hòn non bộ tự nhiên',
                'Cây bonsai Nhật Bản',
                'Đường dẫn sỏi nghệ thuật',
                'Ánh sáng trang trí',
                'Thác nước mini',
                'Ghế đá nghỉ chân'
            ],
            sizes: [
                { area: '5-10m²', style: 'Tiểu cảnh khô', price: '15-25 triệu' },
                { area: '10-15m²', style: 'Tiểu cảnh nước', price: '30-40 triệu' },
                { area: '15-25m²', style: 'Tiểu cảnh hỗn hợp', price: '40-50 triệu' }
            ],
            bgColor: '#059669'
        },
        {
            id: 'koi-fengshui',
            name: 'Hồ Koi Phong Thủy',
            price: '40,000,000 - 120,000,000 VNĐ',
            description: 'Hồ koi thiết kế theo phong thủy, mang lại may mắn thịnh vượng',
            features: [
                'Thiết kế theo ngũ hành phong thủy',
                'Cá koi Nhật chuẩn các màu phong thủy',
                'Hệ thống oxy và lọc cao cấp',
                'Cây cảnh theo phong thủy',
                'Đèn chiếu sáng theo hướng',
                'Bảo hành 24 tháng'
            ],
            sizes: [
                { area: '5-8m²', fish: '9-15 con', price: '40-60 triệu' },
                { area: '8-12m²', fish: '15-25 con', price: '70-90 triệu' },
                { area: '12-20m²', fish: '25-40 con', price: '100-120 triệu' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Tư Vấn',
            description: 'Đo diện tích, xem hướng phong thủy, tư vấn thiết kế phù hợp',
            duration: '1 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Thiết Kế 3D',
            description: 'Bản vẽ 3D chi tiết, bố trí hồ cá, cây cảnh, ánh sáng',
            duration: '2-3 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 3,
            title: 'Thi Công Hạ Tầng',
            description: 'Đào hồ, xử lý chống thấm, lắp đặt hệ thống lọc nước',
            duration: '3-7 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 4,
            title: 'Lắp Đặt Hệ Thống',
            description: 'Hệ thống lọc nước & oxy, đảm bảo môi trường sống cho cá',
            duration: '1-2 ngày',
            icon: 'fas fa-cogs'
        },
        {
            step: 5,
            title: 'Hoàn Thiện & Bàn Giao',
            description: 'Trang trí tiểu cảnh, thả cá koi, hướng dẫn chăm sóc',
            duration: '2-3 ngày',
            icon: 'fas fa-fish'
        }
    ];

    // Benefits
    const benefits = [
        {
            icon: 'fas fa-yin-yang',
            title: 'Phong Thủy Tốt',
            description: 'Cá koi tượng trưng may mắn, thịnh vượng',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Gần Gũi Thiên Nhiên',
            description: 'Không gian sống xanh, thư giãn',
            color: '#10b981'
        },
        {
            icon: 'fas fa-home',
            title: 'Tăng Giá Trị BĐS',
            description: 'Tăng giá trị ngôi nhà, resort, khách sạn',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-heart',
            title: 'Giảm Căng Thẳng',
            description: 'Tiếng nước chảy, màu sắc cá koi thư giãn',
            color: '#ec4899'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Hàng Ngày',
            tasks: ['Cho cá ăn 2-3 lần', 'Kiểm tra hệ thống oxy', 'Quan sát sức khỏe cá'],
            icon: 'fas fa-calendar-day'
        },
        {
            category: 'Hàng Tuần',
            tasks: ['Vệ sinh bề mặt hồ', 'Kiểm tra độ pH nước', 'Cắt tỉa cây cảnh'],
            icon: 'fas fa-calendar-week'
        },
        {
            category: 'Hàng Tháng',
            tasks: ['Thay nước 20-30%', 'Vệ sinh hệ thống lọc', 'Bón phân cây cảnh'],
            icon: 'fas fa-calendar-alt'
        },
        {
            category: 'Hàng Quý',
            tasks: ['Kiểm tra sức khỏe cá', 'Vệ sinh đèn LED', 'Bảo dưỡng máy bơm'],
            icon: 'fas fa-calendar'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Hồ cá koi có cần bảo dưỡng thường xuyên không?',
            answer: 'Cần vệ sinh định kỳ 2-3 tháng/lần, thay nước, làm sạch hệ thống lọc. Chi phí bảo dưỡng khoảng 2-5 triệu VNĐ/năm tùy kích thước hồ.'
        },
        {
            question: 'Cá koi có sống được trong khí hậu Việt Nam?',
            answer: 'Cá koi thích nghi tốt với khí hậu Việt Nam. Tại Hà Nội cần chú ý mùa đông lạnh, ở Nha Trang cần chống nắng gắt và mặn.'
        },
        {
            question: 'Chi phí nuôi cá koi hàng tháng bao nhiều?',
            answer: 'Chi phí thức ăn 200,000-800,000 VNĐ/tháng, tiền điện máy bơm 150,000-400,000 VNĐ/tháng tùy quy mô hồ.'
        },
        {
            question: 'Hồ koi có ảnh hưởng đến móng nhà không?',
            answer: 'Không nếu thi công đúng kỹ thuật. Chúng tôi làm lớp chống thấm và cách ly hoàn toàn, không ảnh hưởng kết cấu nhà.'
        }
    ];

    const currentType = landscapeTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🌿 Báo Giá Thi Công Hồ Cá Koi - Tiểu Cảnh Sân Vườn 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết thiết kế & thi công hồ cá koi, tiểu cảnh sân vườn 
                            tại Hà Nội & Nha Trang. Đẹp - Chuẩn phong thủy - Giá hợp lý.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-fish"></i>
                                <span>Cá Koi Nhật Chuẩn</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-yin-yang"></i>
                                <span>Thiết Kế Phong Thủy</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Tiểu Cảnh Tự Nhiên</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-tools"></i>
                                <span>Thi Công Chuyên Nghiệp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Landscape Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🐟 Loại Hồ Koi & Tiểu Cảnh</h2>
                    <p className="section-subtitle">
                        3 dòng thiết kế phù hợp mọi không gian và ngân sách
                    </p>

                    <div className="tabs">
                        {landscapeTypes.map(type => (
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
                        <div className="landscape-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>🌟 Bao gồm:</h4>
                                    <ul className="features-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sizes-section">
                                    <h4>📐 Quy mô & giá:</h4>
                                    <div className="sizes-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="size-item">
                                                <div className="size-area">{size.area}</div>
                                                <div className="size-details">
                                                    {size.fish && <span>Cá: {size.fish}</span>}
                                                    {size.style && <span>{size.style}</span>}
                                                </div>
                                                <div className="size-price">{size.price}</div>
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
                                    Xem Mẫu 3D
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🌟 Lợi Ích Hồ Koi & Tiểu Cảnh</h2>
                    <p className="section-subtitle">
                        Những giá trị mang lại cho không gian sống
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
                        5 bước thiết kế và thi công hồ koi chuyên nghiệp
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

            {/* Maintenance Guide */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔧 Hướng Dẫn Bảo Dưỡng</h2>
                    <p className="section-subtitle">
                        Lịch bảo dưỡng định kỳ để hồ koi luôn đẹp và cá khỏe mạnh
                    </p>

                    <div className="maintenance-grid grid-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="maintenance-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={tip.icon}></i>
                                        {tip.category}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <ul className="task-list">
                                        {tip.tasks.map((task, i) => (
                                            <li key={i}>
                                                <i className="fas fa-check-circle"></i>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
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

export default HoCaKoiTieuCanhPage;
