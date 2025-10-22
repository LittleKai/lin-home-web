// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import '../BaoGiaThiCongHangMuc.css';

const NhomKinhPage = () => {
    const [activeTab, setActiveTab] = useState('doors');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for aluminum and glass
    const aluminumTypes = [
        {
            id: 'doors',
            name: 'Cửa Nhôm Kính',
            price: '450,000 - 850,000 VNĐ/m²',
            description: 'Cửa đi, cửa sổ nhôm kính cho nhà ở, văn phòng',
            features: [
                'Nhôm Xingfa/Việt Pháp profile',
                'Kính cường lực 6-8mm',
                'Phụ kiện chính hãng (khóa, bản lề)',
                'Gioăng cao su chống thấm',
                'Bảo hành 2-3 năm'
            ],
            applications: ['Cửa chính', 'Cửa ban công', 'Cửa sổ', 'Cửa phòng'],
            bgColor: '#3b82f6'
        },
        {
            id: 'curtain',
            name: 'Vách Kính & Mặt Dựng',
            price: '850,000 - 1,500,000 VNĐ/m²',
            description: 'Vách kính ngăn phòng, mặt dựng tòa nhà',
            features: [
                'Hệ khung nhôm structural glazing',
                'Kính hộp cách âm/cách nhiệt',
                'Seal silicone chống thấm',
                'Thiết kế theo yêu cầu',
                'Bảo hành 3-5 năm'
            ],
            applications: ['Mặt dựng tòa nhà', 'Vách văn phòng', 'Showroom', 'Nhà kính'],
            bgColor: '#059669'
        },
        {
            id: 'premium',
            name: 'Nhôm Kính Cao Cấp',
            price: '1,200,000 - 1,800,000 VNĐ/m²',
            description: 'Hệ nhôm kính cao cấp với công nghệ tiên tiến',
            features: [
                'Nhôm hệ Thermal Break',
                'Kính Low-E cách nhiệt',
                'Phụ kiện châu Âu',
                'Cách âm > 35dB',
                'Bảo hành 5-7 năm'
            ],
            applications: ['Biệt thự', 'Penthouse', 'Khách sạn 5*', 'Tòa nhà cao cấp'],
            bgColor: '#8b5cf6'
        }
    ];

    // Glass types and specifications
    const glassTypes = [
        {
            type: 'Kính Cường Lực',
            thickness: '6mm - 19mm',
            price: '350,000 - 750,000 VNĐ/m²',
            features: ['An toàn cao', 'Chống va đập', 'Chịu nhiệt tốt'],
            applications: ['Cửa ra vào', 'Vách ngăn', 'Lan can']
        },
        {
            type: 'Kính Hộp (Double Glazing)',
            thickness: '16mm - 24mm',
            price: '450,000 - 950,000 VNĐ/m²',
            features: ['Cách âm tuyệt vời', 'Cách nhiệt', 'Chống đọng sương'],
            applications: ['Mặt dựng', 'Cửa sổ cao cấp', 'Vách kính văn phòng']
        },
        {
            type: 'Kính Low-E',
            thickness: '6mm - 12mm',
            price: '650,000 - 1,200,000 VNĐ/m²',
            features: ['Tiết kiệm năng lượng', 'Lọc tia UV', 'Màng phủ đặc biệt'],
            applications: ['Tòa nhà xanh', 'Nhà thông minh', 'Khách sạn resort']
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Đo Đạc & Thiết Kế',
            description: 'Khảo sát thực địa, đo đạc chính xác, thiết kế kỹ thuật',
            duration: '1-2 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Gia Công Tại Xưởng',
            description: 'Cắt profile nhôm, gia công kính, lắp ráp phụ kiện',
            duration: '3-7 ngày',
            icon: 'fas fa-industry'
        },
        {
            step: 3,
            title: 'Chuẩn Bị Công Trình',
            description: 'Chuẩn bị ô chờ, kiểm tra kết cấu, làm sạch bề mặt',
            duration: '0.5 ngày',
            icon: 'fas fa-broom'
        },
        {
            step: 4,
            title: 'Lắp Đặt Khung & Kính',
            description: 'Cố định khung nhôm, lắp kính, điều chỉnh độ kín',
            duration: '1-3 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 5,
            title: 'Hoàn Thiện & Bàn Giao',
            description: 'Kiểm tra chất lượng, vệ sinh, hướng dẫn sử dụng',
            duration: '0.5 ngày',
            icon: 'fas fa-handshake'
        }
    ];

    // Maintenance guidelines
    const maintenanceGuides = [
        {
            category: 'Vệ sinh thường xuyên',
            icon: 'fas fa-spray-can',
            tips: [
                'Lau kính bằng dung dịch chuyên dụng',
                'Vệ sinh ray trượt định kỳ',
                'Kiểm tra gioăng cao su',
                'Bôi trôn phụ kiện 6 tháng/lần'
            ]
        },
        {
            category: 'Bảo dưỡng định kỳ',
            icon: 'fas fa-cog',
            tips: [
                'Thay gioăng cao su 3-5 năm',
                'Điều chỉnh độ kín cửa',
                'Kiểm tra vít cố định',
                'Sơn lại frame nhôm 7-10 năm'
            ]
        },
        {
            category: 'Xử lý sự cố',
            icon: 'fas fa-wrench',
            tips: [
                'Cửa khó đóng mở: bôi trôn ray',
                'Kính bị xước: đánh bóng hoặc thay',
                'Gioăng bị hỏng: thay ngay',
                'Liên hệ thợ chuyên nghiệp khi cần'
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nhôm Xingfa và Việt Pháp khác gì?',
            answer: 'Nhôm Xingfa: chất lượng cao, độ bền tốt, giá cao hơn, tem đỏ chính hãng. Nhôm Việt Pháp: giá hợp lý, phù hợp nhà ở dân dụng, chất lượng ổn định.'
        },
        {
            question: 'Thời gian thi công nhôm kính bao lâu?',
            answer: 'Cửa đơn giản: 3-5 ngày. Vách kính lớn: 7-10 ngày. Mặt dựng tòa nhà: 2-4 tuần. Thời gian phụ thuộc diện tích và độ phức tạp thiết kế.'
        },
        {
            question: 'Nhôm kính có cách âm tốt không?',
            answer: 'Cửa nhôm kính thường: 25-30dB. Kính hộp cách âm: 35-40dB. Hệ cao cấp với kính Low-E: 40-45dB. Đủ cho yêu cầu dân dụng và văn phòng.'
        },
        {
            question: 'Chi phí bảo dưỡng nhôm kính như thế nào?',
            answer: 'Vệ sinh định kỳ: 20,000-50,000 VNĐ/m²/năm. Thay gioăng: 50,000-100,000 VNĐ/m²/5 năm. Sơn lại frame: 150,000-250,000 VNĐ/m²/10 năm.'
        }
    ];

    const currentType = aluminumTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🪟 Báo Giá Thi Công Nhôm Kính 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết thi công cửa nhôm kính, vách kính, mặt dựng 
                            tại Hà Nội & Nha Trang. Chất lượng cao - Bảo hành dài hạn.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>An Toàn Cao</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-volume-off"></i>
                                <span>Cách Âm Tốt</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-sun"></i>
                                <span>Ánh Sáng Tự Nhiên</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-gem"></i>
                                <span>Thẩm Mỹ Cao</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aluminum Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🏗️ Loại Nhôm Kính & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng sản phẩm nhôm kính phù hợp mọi công trình
                    </p>

                    <div className="tabs">
                        {aluminumTypes.map(type => (
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
                        <div className="aluminum-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Bao gồm:</h4>
                                    <ul className="features-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="applications-section">
                                    <h4>🏠 Ứng dụng:</h4>
                                    <div className="tags">
                                        {currentType.applications.map((app, index) => (
                                            <span key={index} className="tag">{app}</span>
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
                                    Tính Chi Phí
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Glass Types */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔍 Loại Kính & Thông Số</h2>
                    <p className="section-subtitle">
                        So sánh các loại kính phổ biến trong thi công nhôm kính
                    </p>

                    <div className="glass-grid grid-3">
                        {glassTypes.map((glass, index) => (
                            <div key={index} className="glass-card card">
                                <div className="card-header">
                                    <h3>{glass.type}</h3>
                                    <div className="glass-thickness">{glass.thickness}</div>
                                    <div className="glass-price">{glass.price}</div>
                                </div>
                                <div className="card-body">
                                    <div className="glass-features">
                                        <h4>🔸 Đặc điểm:</h4>
                                        <ul>
                                            {glass.features.map((feature, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-star"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="glass-applications">
                                        <h4>🔸 Ứng dụng:</h4>
                                        <ul>
                                            {glass.applications.map((app, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-arrow-right"></i>
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
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
                        5 bước thi công chuyên nghiệp đảm bảo chất lượng
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

            {/* Maintenance Guidelines */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🧽 Hướng Dẫn Bảo Dưỡng</h2>
                    <p className="section-subtitle">
                        Cách chăm sóc nhôm kính để tăng tuổi thọ và giữ thẩm mỹ
                    </p>

                    <div className="maintenance-grid grid-3">
                        {maintenanceGuides.map((guide, index) => (
                            <div key={index} className="maintenance-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={guide.icon}></i>
                                        {guide.category}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        {guide.tips.map((tip, i) => (
                                            <li key={i}>
                                                <i className="fas fa-check-circle"></i>
                                                {tip}
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

export default NhomKinhPage;
