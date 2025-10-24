// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CachUocTinhChiPhi.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const CachUocTinhChiPhi = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Cost estimation methods
    const costMethods = [
        {
            id: 'basic',
            name: 'Sửa Chữa Cơ Bản',
            price: '800,000 - 1,500,000 VNĐ/m²',
            description: 'Sửa chữa đơn giản, thay thế vật liệu cũ, không thay đổi kết cấu',
            features: [
                'Thay thế vật liệu cũ hỏng',
                'Sơn lại tường, trần',
                'Sửa chữa điện nước nhỏ',
                'Thay gạch, sàn bị vỡ',
                'Bảo hành 6-12 tháng'
            ],
            includes: ['Vật liệu', 'Nhân công', 'Vận chuyển', 'Dọn dẹp'],
            bgColor: '#10b981'
        },
        {
            id: 'medium',
            name: 'Cải Tạo Trung Bình',
            price: '1,500,000 - 2,500,000 VNĐ/m²',
            description: 'Cải tạo có thay đổi bố cục, nâng cấp hệ thống điện nước',
            features: [
                'Đập bỏ vách ngăn cũ',
                'Xây tường mới, thay cửa',
                'Nâng cấp điện, nước, thoát nước',
                'Lát gạch, sơn toàn bộ',
                'Thay thiết bị vệ sinh',
                'Bảo hành 12-18 tháng'
            ],
            includes: ['Vật liệu cao cấp', 'Nhân công chuyên nghiệp', 'Thiết kế 2D', 'Giám sát'],
            bgColor: '#f59e0b'
        },
        {
            id: 'luxury',
            name: 'Cải Tạo Toàn Diện',
            price: '2,500,000 - 4,000,000 VNĐ/m²',
            description: 'Cải tạo hoàn toàn, thiết kế mới, vật liệu cao cấp',
            features: [
                'Thiết kế kiến trúc mới',
                'Đập bỏ toàn bộ cũ',
                'Xây dựng lại kết cấu',
                'Hệ thống điện, nước, điều hòa mới',
                'Nội thất cao cấp, smarthome',
                'Bảo hành 24-36 tháng'
            ],
            includes: ['Thiết kế 3D', 'Vật liệu nhập khẩu', 'Giám sát 24/7', 'Bảo trì định kỳ'],
            bgColor: '#8b5cf6'
        }
    ];

    // Calculation steps
    const calculationSteps = [
        {
            step: 1,
            title: 'Đo Đạc Hiện Trạng',
            description: 'Khảo sát thực tế, đo diện tích, kiểm tra kết cấu cũ',
            duration: '1-2 ngày',
            icon: 'fas fa-ruler-combined'
        },
        {
            step: 2,
            title: 'Xác Định Hạng Mục',
            description: 'Liệt kê công việc cần làm: phá dỡ, xây mới, hoàn thiện',
            duration: '1 ngày',
            icon: 'fas fa-list-check'
        },
        {
            step: 3,
            title: 'Tính Toán Vật Liệu',
            description: 'Tính khối lượng vật liệu cần thiết cho từng hạng mục',
            duration: '1-2 ngày',
            icon: 'fas fa-calculator'
        },
        {
            step: 4,
            title: 'Ước Tính Nhân Công',
            description: 'Tính toán số ngày công và chi phí nhân công',
            duration: '1 ngày',
            icon: 'fas fa-users'
        },
        {
            step: 5,
            title: 'Báo Giá Chi Tiết',
            description: 'Lập bảng báo giá chi tiết, chia theo hạng mục',
            duration: '1-2 ngày',
            icon: 'fas fa-file-invoice-dollar'
        }
    ];

    // Cost breakdown items
    const costBreakdown = [
        {
            category: 'Phá Dỡ & Chuẩn Bị',
            percentage: '10-15%',
            items: ['Phá dỡ tường cũ', 'Dọn dẹp vệ sinh', 'Bảo vệ không gian khác'],
            icon: 'fas fa-hammer'
        },
        {
            category: 'Xây Dựng Kết Cấu',
            percentage: '25-30%',
            items: ['Xây tường mới', 'Sửa cột dầm', 'Đổ bê tông'],
            icon: 'fas fa-building'
        },
        {
            category: 'Điện & Nước',
            percentage: '15-20%',
            items: ['Lắp điện mới', 'Đường ống nước', 'Thiết bị vệ sinh'],
            icon: 'fas fa-bolt'
        },
        {
            category: 'Hoàn Thiện',
            percentage: '30-35%',
            items: ['Ốp lát', 'Sơn nước', 'Trần thạch cao', 'Cửa đi'],
            icon: 'fas fa-paint-roller'
        },
        {
            category: 'Phí Khác',
            percentage: '10-15%',
            items: ['Quản lý', 'Lợi nhuận', 'Dự phòng'],
            icon: 'fas fa-percentage'
        }
    ];

    // Price factors
    const priceFactors = [
        {
            factor: 'Diện Tích',
            impact: 'Cao',
            description: 'Diện tích càng lớn, chi phí/m² giảm do hiệu quả quy mô',
            icon: 'fas fa-expand-arrows-alt'
        },
        {
            factor: 'Vật Liệu',
            impact: 'Rất cao',
            description: 'Chất lượng vật liệu ảnh hưởng 40-50% tổng chi phí',
            icon: 'fas fa-box-open'
        },
        {
            factor: 'Thiết Kế',
            impact: 'Trung bình',
            description: 'Thiết kế phức tạp làm tăng 10-20% chi phí',
            icon: 'fas fa-drafting-compass'
        },
        {
            factor: 'Vị Trí',
            impact: 'Trung bình',
            description: 'Vị trí khó tiếp cận tăng chi phí vận chuyển và thi công',
            icon: 'fas fa-map-marker-alt'
        },
        {
            factor: 'Thời Gian',
            impact: 'Cao',
            description: 'Thi công gấp có thể tăng 15-25% chi phí',
            icon: 'fas fa-clock'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Chi phí sửa chữa cải tạo nhà bao nhiêu tiền 1m²?',
            answer: 'Chi phí dao động từ 800,000 - 4,000,000 VNĐ/m² tùy mức độ sửa chữa. Sửa chữa cơ bản 800K-1.5M/m², cải tạo trung bình 1.5M-2.5M/m², cải tạo toàn diện 2.5M-4M/m². Giá cụ thể phụ thuộc vào diện tích, vật liệu và yêu cầu thiết kế.'
        },
        {
            question: 'Cách tính chi phí cải tạo nhà chính xác nhất?',
            answer: 'Cách tính chính xác: (1) Đo diện tích cần cải tạo, (2) Liệt kê hạng mục công việc, (3) Tính khối lượng vật liệu, (4) Tính nhân công, (5) Cộng chi phí quản lý 10-15%. Nên có báo giá chi tiết từ 2-3 đơn vị để so sánh.'
        },
        {
            question: 'Chi phí phá dỡ chiếm bao nhiêu % tổng chi phí?',
            answer: 'Chi phí phá dỡ và chuẩn bị mặt bằng chiếm khoảng 10-15% tổng chi phí cải tạo. Bao gồm: phá dỡ tường cũ, dọn dẹp rác thải, bảo vệ không gian khác không thi công.'
        },
        {
            question: 'Có cách nào tiết kiệm chi phí cải tạo không?',
            answer: 'Có nhiều cách tiết kiệm: (1) Giữ lại kết cấu cũ nếu còn tốt, (2) Chọn vật liệu phù hợp thay vì quá cao cấp, (3) Tự mua vật liệu, (4) Thi công từng giai đoạn, (5) Tìm thợ có kinh nghiệm tránh sai sót.'
        },
        {
            question: 'Thời gian cải tạo nhà mất bao lâu?',
            answer: 'Thời gian cải tạo phụ thuộc diện tích và mức độ: Căn 50m² sửa cơ bản 15-20 ngày, cải tạo trung bình 30-45 ngày, cải tạo toàn diện 60-90 ngày. Nhà lớn hơn 100m² cần 90-150 ngày.'
        },
        {
            question: 'Chi phí nào hay phát sinh khi cải tạo?',
            answer: 'Chi phí phát sinh thường gặp: (1) Kết cấu cũ hư hỏng nặng hơn dự kiến, (2) Thay đổi thiết kế giữa chừng, (3) Vật liệu tăng giá, (4) Phát hiện mối mọt hoặc thấm, (5) Nâng cấp thêm tiện ích. Nên dự phòng 10-15% tổng chi phí.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">💰 Cách Ước Tính Chi Phí Sửa Chữa Cải Tạo</h1>
                    <p className="section-subtitle">
                        Hướng dẫn chi tiết cách tính toán chi phí cải tạo chính xác, minh bạch
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">5</div>
                            <div className="stat-label">Bước Tính Chi Phí</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10-15%</div>
                            <div className="stat-label">Dự Phòng Khuyến Nghị</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">2-3</div>
                            <div className="stat-label">Báo Giá Nên So Sánh</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24h</div>
                            <div className="stat-label">Thời Gian Báo Giá</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tabs */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📊 Mức Giá Theo Phân Khúc</h2>
                    <p className="section-subtitle">
                        3 phân khúc giá phổ biến cho sửa chữa cải tạo nhà ở
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {costMethods.map((method) => (
                                <button
                                    key={method.id}
                                    className={`tab ${activeTab === method.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(method.id)}
                                >
                                    {method.name}
                                </button>
                            ))}
                        </div>

                        {costMethods.map((method) => (
                            <div
                                key={method.id}
                                className={`tab-content ${activeTab === method.id ? 'active' : ''}`}
                            >
                                <div className="pricing-card card">
                                    <div className="card-header" style={{ background: `linear-gradient(135deg, ${method.bgColor}, ${method.bgColor}dd)` }}>
                                        <h3>{method.name}</h3>
                                        <div className="price-range">{method.price}</div>
                                        <p>{method.description}</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="features-section">
                                            <h4>🔨 Công Việc Bao Gồm:</h4>
                                            <ul>
                                                {method.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-check-circle"></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="includes-section">
                                            <h4>📦 Gói Dịch Vụ:</h4>
                                            <ul>
                                                {method.includes.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-box"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pricing-actions">
                                        <a href="/lien-he" className="btn btn-primary">
                                            <i className="fas fa-phone"></i>
                                            Liên Hệ Báo Giá
                                        </a>
                                        <a href="/bao-gia/bao-gia-sua-chua-cai-tao" className="btn btn-secondary">
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

            {/* Calculation Process */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">📝 Quy Trình Tính Chi Phí</h2>
                    <p className="section-subtitle">
                        5 bước tính toán chi phí cải tạo chính xác
                    </p>

                    <div className="process-timeline">
                        {calculationSteps.map((step, index) => (
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

            {/* Cost Breakdown */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">💵 Cơ Cấu Chi Phí</h2>
                    <p className="section-subtitle">
                        Phân bổ chi phí theo từng hạng mục công việc
                    </p>

                    <div className="breakdown-grid grid-3">
                        {costBreakdown.map((item, index) => (
                            <div key={index} className="breakdown-card card">
                                <div className="card-header">
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.category}</h3>
                                    <div className="percentage">{item.percentage}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {item.items.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <i className="fas fa-angle-right"></i>
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price Factors */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">📈 Yếu Tố Ảnh Hưởng Giá</h2>
                    <p className="section-subtitle">
                        5 yếu tố chính quyết định chi phí cải tạo
                    </p>

                    <div className="factors-grid grid-3">
                        {priceFactors.map((item, index) => (
                            <div key={index} className="factor-card card">
                                <div className="card-header">
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.factor}</h3>
                                    <div className={`impact impact-${item.impact.toLowerCase().replace(' ', '-')}`}>
                                        {item.impact}
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p>{item.description}</p>
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

export default CachUocTinhChiPhi;
