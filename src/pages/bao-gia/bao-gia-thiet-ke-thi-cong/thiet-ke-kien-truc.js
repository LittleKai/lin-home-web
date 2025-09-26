// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../thiet-ke/ThietKePage.css';
import '../BaoGiaThietKeThiCongNha.css';

const ThietKeKienTrucPricingPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing packages for architectural design
    const designPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '80,000 - 120,000 VNĐ/m²',
            description: 'Thiết kế kiến trúc cơ bản cho nhà phố, nhà cấp 4',
            features: [
                'Bản vẽ mặt bằng tổng thể',
                'Mặt đứng 4 hướng',
                'Mặt cắt cơ bản',
                'Phối cảnh 3D (2-3 góc)',
                'Bản vẽ kết cấu đơn giản',
                'Hỗ trợ thủ tục xin phép'
            ],
            suitable: ['Nhà phố 3-4 tầng', 'Nhà cấp 4', 'Kiến trúc đơn giản'],
            bgColor: '#10b981'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '150,000 - 250,000 VNĐ/m²',
            description: 'Thiết kế chi tiết cho biệt thự, nhà phố cao cấp',
            features: [
                'Bản vẽ kiến trúc hoàn chỉnh',
                'Thiết kế nội thất cơ bản',
                'Phối cảnh 3D chất lượng cao (5-8 góc)',
                'Bản vẽ kết cấu chi tiết',
                'Video walkthrough 3D',
                'Sửa đổi tối đa 3 lần',
                'Giám sát thi công'
            ],
            suitable: ['Biệt thự', 'Nhà phố cao cấp', 'Villa', 'Shophouse'],
            bgColor: '#667eea'
        },
        {
            id: 'luxury',
            name: 'Gói Sang Trọng',
            price: '300,000 - 450,000 VNĐ/m²',
            description: 'Thiết kế đẳng cấp cho lâu đài, biệt thự luxury',
            features: [
                'Thiết kế kiến trúc độc quyền',
                'Thiết kế nội thất hoàn chỉnh',
                'Thiết kế sân vườn cảnh quan',
                'Phối cảnh 3D siêu chất lượng (10+ góc)',
                'Video 4K walkthrough',
                'Mô hình 3D vật lý',
                'Sửa đổi không giới hạn',
                'Giám sát thi công toàn diện'
            ],
            suitable: ['Biệt thự luxury', 'Lâu đài', 'Resort', 'Khách sạn boutique'],
            bgColor: '#f59e0b'
        }
    ];

    // Design process
    const designProcess = [
        {
            step: 1,
            title: 'Tư vấn & Khảo sát',
            description: 'Tìm hiểu nhu cầu, sở thích và điều kiện thực tế',
            details: [
                'Gặp mặt tư vấn trực tiếp',
                'Khảo sát địa hình, hướng nhà',
                'Phân tích phong thủy cơ bản',
                'Xác định ngân sách và timeline'
            ],
            duration: '1-2 ngày',
            icon: 'fas fa-users'
        },
        {
            step: 2,
            title: 'Ý tưởng & Concept',
            description: 'Phát triển ý tưởng thiết kế ban đầu',
            details: [
                'Sketch ý tưởng sơ bộ',
                'Xác định phong cách kiến trúc',
                'Phân bổ công năng không gian',
                'Thuyết trình concept'
            ],
            duration: '3-5 ngày',
            icon: 'far fa-lightbulb'
        },
        {
            step: 3,
            title: 'Thiết kế Sơ bộ',
            description: 'Hoàn thiện bản vẽ kiến trúc chi tiết',
            details: [
                'Bản vẽ mặt bằng các tầng',
                'Mặt đứng 4 hướng',
                'Mặt cắt ngang, dọc',
                'Thuyết trình và điều chỉnh'
            ],
            duration: '7-10 ngày',
            icon: 'fas fa-compass'
        },
        {
            step: 4,
            title: 'Phối cảnh 3D',
            description: 'Tạo hình ảnh 3D chân thực',
            details: [
                'Modeling 3D chi tiết',
                'Render chất lượng cao',
                'Phối cảnh ngoại thất',
                'Video walkthrough (tùy gói)'
            ],
            duration: '5-7 ngày',
            icon: 'fas fa-cube'
        },
        {
            step: 5,
            title: 'Hoàn thiện & Bàn giao',
            description: 'Chỉnh sửa cuối cùng và bàn giao hồ sơ',
            details: [
                'Sửa đổi theo góp ý',
                'Hoàn thiện bộ hồ sơ',
                'Hướng dẫn đọc bản vẽ',
                'Hỗ trợ thủ tục xin phép'
            ],
            duration: '2-3 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Thời gian thiết kế mất bao lâu?',
            answer: 'Tùy theo quy mô và độ phức tạp: Nhà phố cơ bản 15-20 ngày, biệt thự 25-35 ngày, dự án lớn 45-60 ngày.'
        },
        {
            id: 2,
            question: 'Có được sửa đổi thiết kế không?',
            answer: 'Có, mỗi gói có số lần sửa đổi khác nhau. Gói cơ bản: 2 lần, gói cao cấp: 3 lần, gói sang trọng: không giới hạn.'
        },
        {
            id: 3,
            question: 'Chi phí có bao gồm thủ tục xin phép không?',
            answer: 'Gói cơ bản hỗ trợ chuẩn bị hồ sơ, gói cao cấp và sang trọng bao gồm hoàn toàn thủ tục xin phép.'
        },
        {
            id: 4,
            question: 'Có thiết kế nội thất không?',
            answer: 'Gói cơ bản không có, gói cao cấp có thiết kế nội thất cơ bản, gói sang trọng có thiết kế nội thất hoàn chỉnh.'
        },
        {
            id: 5,
            question: 'Thanh toán như thế nào?',
            answer: 'Chia 3 đợt: 40% khi ký hợp đồng, 40% khi hoàn thành thiết kế sơ bộ, 20% khi bàn giao hoàn chỉnh.'
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    return (
        <div className="thiet-ke-page">
            {/* Pricing Packages */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🎯 Bảng Giá Thiết Kế Kiến Trúc 2025</h2>
                        <p>Lựa chọn gói thiết kế phù hợp với nhu cầu và ngân sách của bạn</p>
                    </div>

                    <div className="package-tabs">
                        {designPackages.map(pkg => (
                            <button
                                key={pkg.id}
                                className={`package-tab ${activeTab === pkg.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(pkg.id)}
                            >
                                {pkg.name}
                            </button>
                        ))}
                    </div>

                    {designPackages.map(pkg => (
                        activeTab === pkg.id && (
                            <div key={pkg.id} className="package-content">
                                <div className="package-info" style={{ borderColor: pkg.bgColor }}>
                                    <div className="package-header" style={{ background: pkg.bgColor }}>
                                        <h3>{pkg.name}</h3>
                                        <div className="package-price">{pkg.price}</div>
                                        <p>{pkg.description}</p>
                                    </div>

                                    <div className="package-body">
                                        <div className="features-grid">
                                            <div className="features-column">
                                                <h4>✨ Bao gồm dịch vụ:</h4>
                                                <ul>
                                                    {pkg.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="features-column">
                                                <h4>🏠 Phù hợp cho:</h4>
                                                <ul>
                                                    {pkg.suitable.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </section>

            {/* Design Process */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🔄 Quy Trình Thiết Kế Kiến Trúc</h2>
                        <p>5 bước thiết kế chuyên nghiệp từ ý tưởng đến hiện thực</p>
                    </div>

                    <div className="process-timeline">
                        {designProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-details">
                                        <ul>
                                            {step.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="step-meta">
                                        <span className="step-duration">
                                            <i className="far fa-clock"></i> {step.duration}
                                        </span>
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
                    <div className="section-header">
                        <h2>❓ Câu Hỏi Thường Gặp</h2>
                        <p>Giải đáp những thắc mắc về dịch vụ thiết kế kiến trúc</p>
                    </div>

                    <div className="faq-container">
                        {faqData.map(faq => (
                            <div key={faq.id} className="faq-item">
                                <div
                                    className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === faq.id && (
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

export default ThietKeKienTrucPricingPage;