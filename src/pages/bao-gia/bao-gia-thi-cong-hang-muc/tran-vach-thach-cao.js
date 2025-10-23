// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import Footer from '../../../components/Footer/Footer';

// import '../BaoGiaThiCongHangMuc.css';

const TranVachThachCaoPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for ceiling and wall construction
    const pricingData = [
        {
            id: 'basic',
            name: 'Trần Thạch Cao Cơ Bản',
            price: '120,000 - 180,000 VNĐ/m²',
            description: 'Trần phẳng đơn giản, phù hợp nhà ở dân dụng',
            features: [
                'Trần phẳng thạch cao Vĩnh Tường',
                'Khung xương thép mạ kẽm',
                'Bả matit, sơn bóng 1 lớp',
                'Điện cơ bản (đèn downlight)',
                'Bảo hành 12 tháng'
            ],
            suitable: ['Phòng khách', 'Phòng ngủ', 'Phòng ăn'],
            bgColor: '#10b981'
        },
        {
            id: 'premium',
            name: 'Trần Giật Cấp Cao Cấp',
            price: '220,000 - 320,000 VNĐ/m²',
            description: 'Trần giật cấp với đèn LED âm trần, hiện đại',
            features: [
                'Trần giật cấp 2-3 tầng',
                'Thạch cao Gyproc chống ẩm',
                'LED strip + đèn downlight',
                'Bả matit, sơn cao cấp',
                'Thiết kế theo yêu cầu',
                'Bảo hành 18 tháng'
            ],
            suitable: ['Phòng khách cao cấp', 'Phòng làm việc', 'Showroom'],
            bgColor: '#667eea'
        },
        {
            id: 'luxury',
            name: 'Vách Thạch Cao + Cách Âm',
            price: '280,000 - 380,000 VNĐ/m²',
            description: 'Vách ngăn cách âm, trang trí nghệ thuật',
            features: [
                'Vách thạch cao 2 lớp',
                'Cách âm bông thủy tinh',
                'Tạo hình nghệ thuật',
                'Sơn hiệu ứng đặc biệt',
                'Âm thanh cách âm 40dB',
                'Bảo hành 24 tháng'
            ],
            suitable: ['Studio âm thanh', 'Phòng karaoke', 'Văn phòng'],
            bgColor: '#8b5cf6'
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Tư Vấn',
            description: 'Đo đạc, kiểm tra kết cấu, tư vấn thiết kế phù hợp',
            duration: '1-2 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Thiết Kế & Báo Giá',
            description: 'Tạo bản vẽ 3D, tính toán vật liệu, báo giá chi tiết',
            duration: '2-3 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 3,
            title: 'Lắp Đặt Khung Xương',
            description: 'Cố định khung thép mạ kẽm, đảm bảo độ thẳng đứng',
            duration: '1-2 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 4,
            title: 'Bắt Tấm Thạch Cao',
            description: 'Lắp ghép tấm thạch cao, cố định bằng vít chuyên dụng',
            duration: '1-2 ngày',
            icon: 'fas fa-layer-group'
        },
        {
            step: 5,
            title: 'Hoàn Thiện & Bàn Giao',
            description: 'Xử lý mối nối, bả matit, sơn hoàn thiện, vệ sinh',
            duration: '2-3 ngày',
            icon: 'fas fa-paint-brush'
        }
    ];

    // Material comparison
    const materials = [
        {
            name: 'Thạch Cao Vĩnh Tường',
            price: '45,000 - 55,000 VNĐ/m²',
            pros: ['Giá hợp lý', 'Dễ thi công', 'Phổ biến'],
            cons: ['Độ bền trung bình', 'Hút ẩm nhẹ'],
            rating: 4
        },
        {
            name: 'Thạch Cao Gyproc',
            price: '65,000 - 85,000 VNĐ/m²',
            pros: ['Chống ẩm tốt', 'Bền đẹp', 'Cách âm'],
            cons: ['Giá cao hơn', 'Cần thợ lành nghề'],
            rating: 5
        },
        {
            name: 'Thạch Cao Knauf',
            price: '75,000 - 95,000 VNĐ/m²',
            pros: ['Chất lượng Đức', 'Chống cháy', 'Thân thiện môi trường'],
            cons: ['Đắt nhất', 'Khó mua tại VN'],
            rating: 5
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Trần thạch cao có bền không?',
            answer: 'Trần thạch cao có độ bền từ 10-15 năm nếu thi công đúng kỹ thuật và sử dụng vật liệu chất lượng. Tuy nhiên cần tránh va đập mạnh và môi trường quá ẩm ướt.'
        },
        {
            question: 'Thời gian thi công trần thạch cao bao lâu?',
            answer: 'Thời gian thi công phụ thuộc diện tích: Phòng 20m² mất 3-5 ngày, căn hộ 80m² mất 7-10 ngày, bao gồm cả thời gian khô sơn.'
        },
        {
            question: 'Có nên làm trần thạch cao cho nhà ẩm ướt?',
            answer: 'Nên chọn loại thạch cao chống ẩm (Gyproc, Knauf) và đảm bảo thông gió tốt. Tránh làm trần thạch cao ở khu vực thường xuyên bị ngập úng.'
        },
        {
            question: 'Chi phí trần thạch cao có phát sinh không?',
            answer: 'Không phát sinh nếu theo đúng thiết kế đã thống nhất. Chỉ phát sinh khi khách hàng yêu cầu thay đổi thiết kế hoặc nâng cấp vật liệu.'
        }
    ];

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🏗️ Báo Giá Thi Công Trần & Vách Thạch Cao 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết thi công trần thạch cao phẳng, giật cấp, vách ngăn cách âm 
                            tại Hà Nội & Nha Trang. Uy tín - Chất lượng - Bảo hành dài hạn.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-layer-group"></i>
                                <span>Đa Dạng Mẫu Mã</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-volume-off"></i>
                                <span>Cách Âm Tốt</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-fire-extinguisher"></i>
                                <span>Chống Cháy</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Thân thiện MÔI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">💰 Bảng Giá Thi Công Trần Thạch Cao</h2>
                    <p className="section-subtitle">
                        Báo giá chi tiết 3 gói dịch vụ phù hợp mọi nhu cầu và ngân sách
                    </p>

                    <div className="tabs">
                        {pricingData.map(pkg => (
                            <button
                                key={pkg.id}
                                className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(pkg.id)}
                            >
                                {pkg.name}
                            </button>
                        ))}
                    </div>

                    <div className="pricing-grid">
                        {pricingData.map(pkg => (
                            <div 
                                key={pkg.id} 
                                className={`pricing-card ${activeTab === pkg.id ? 'active' : ''}`}
                                style={{ display: activeTab === pkg.id ? 'block' : 'none' }}
                            >
                                <div 
                                    className="pricing-header"
                                    style={{ background: `linear-gradient(135deg, ${pkg.bgColor}, ${pkg.bgColor}dd)` }}
                                >
                                    <h3>{pkg.name}</h3>
                                    <div className="pricing-price">{pkg.price}</div>
                                    <p>{pkg.description}</p>
                                </div>

                                <div className="pricing-body">
                                    <div className="pricing-features">
                                        <h4>✨ Bao gồm:</h4>
                                        <ul>
                                            {pkg.features.map((feature, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-check"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="suitable-for">
                                        <h4>🏠 Phù hợp:</h4>
                                        <div className="tags">
                                            {pkg.suitable.map((item, index) => (
                                                <span key={index} className="tag">{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pricing-actions">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Construction Process */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Thi Công Chuẩn</h2>
                    <p className="section-subtitle">
                        5 bước thi công chuyên nghiệp đảm bảo chất lượng và tiến độ
                    </p>

                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
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

            {/* Material Comparison */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🧱 So Sánh Vật Liệu Thạch Cao</h2>
                    <p className="section-subtitle">
                        Chọn loại thạch cao phù hợp với ngân sách và yêu cầu chất lượng
                    </p>

                    <div className="materials-grid grid-3">
                        {materials.map((material, index) => (
                            <div key={index} className="material-card card">
                                <div className="card-header">
                                    <h3>{material.name}</h3>
                                    <div className="material-price">{material.price}</div>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i 
                                                key={i} 
                                                className={`fas fa-star ${i < material.rating ? 'active' : ''}`}
                                            ></i>
                                        ))}
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="pros-cons">
                                        <div className="pros">
                                            <h4>👍 Ưu điểm:</h4>
                                            <ul>
                                                {material.pros.map((pro, i) => (
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
                                                {material.cons.map((con, i) => (
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
            <section className="section section-alt">
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

export default TranVachThachCaoPage;
