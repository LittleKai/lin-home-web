// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

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
                { area: '3-5m²', fish: '10-15 con', price: '25-40 triệu', depth: '1.2-1.5m' },
                { area: '6-8m²', fish: '20-30 con', price: '45-60 triệu', depth: '1.5-1.8m' },
                { area: '10-15m²', fish: '30-50 con', price: '65-80 triệu', depth: '1.8-2.0m' }
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
                { area: '5-10m²', style: 'Tiểu cảnh khô', price: '15-25 triệu', type: 'Zen garden' },
                { area: '10-15m²', style: 'Tiểu cảnh nước', price: '30-40 triệu', type: 'Water feature' },
                { area: '15-25m²', style: 'Tiểu cảnh hỗn hợp', price: '40-50 triệu', type: 'Mixed style' }
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
                { area: '5-8m²', fish: '9-15 con', price: '40-60 triệu', depth: '1.5m' },
                { area: '8-12m²', fish: '15-25 con', price: '70-90 triệu', depth: '1.8m' },
                { area: '12-20m²', fish: '25-40 con', price: '100-120 triệu', depth: '2.0m' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation steps
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
            description: 'Cá koi tượng trưng may mắn, thịnh vượng, tài lộc',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Gần Gũi Thiên Nhiên',
            description: 'Không gian sống xanh, thư giãn, giảm stress',
            color: '#10b981'
        },
        {
            icon: 'fas fa-home',
            title: 'Tăng Giá Trị BĐS',
            description: 'Tăng giá trị ngôi nhà, resort, khách sạn 10-15%',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-heart',
            title: 'Giảm Căng Thẳng',
            description: 'Tiếng nước chảy, màu sắc cá koi giúp thư giãn',
            color: '#ec4899'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Hàng Ngày',
            tasks: ['Cho cá ăn 2-3 lần/ngày', 'Kiểm tra hệ thống oxy', 'Quan sát sức khỏe cá'],
            icon: 'fas fa-calendar-day',
            frequency: 'Mỗi ngày'
        },
        {
            category: 'Hàng Tuần',
            tasks: ['Vệ sinh bề mặt hồ', 'Kiểm tra độ pH nước (6.5-8.5)', 'Cắt tỉa cây cảnh'],
            icon: 'fas fa-calendar-week',
            frequency: 'Mỗi tuần'
        },
        {
            category: 'Hàng Tháng',
            tasks: ['Thay nước 20-30%', 'Vệ sinh hệ thống lọc', 'Bón phân cây cảnh'],
            icon: 'fas fa-calendar-alt',
            frequency: 'Mỗi tháng'
        },
        {
            category: 'Hàng Quý',
            tasks: ['Kiểm tra sức khỏe cá', 'Vệ sinh đèn LED', 'Bảo dưỡng máy bơm'],
            icon: 'fas fa-calendar',
            frequency: '3 tháng/lần'
        }
    ];

    // Koi colors and meaning
    const koiColors = [
        {
            color: 'Kohaku (Đỏ Trắng)',
            meaning: 'Thành công trong sự nghiệp',
            price: '500K - 5 triệu/con',
            icon: 'fas fa-fish',
            bgColor: '#ef4444'
        },
        {
            color: 'Sanke (Tam Sắc)',
            meaning: 'Hạnh phúc gia đình',
            price: '800K - 8 triệu/con',
            icon: 'fas fa-fish',
            bgColor: '#f59e0b'
        },
        {
            color: 'Showa (Đen Đỏ Trắng)',
            meaning: 'Quyền lực, địa vị',
            price: '1-10 triệu/con',
            icon: 'fas fa-fish',
            bgColor: '#1f2937'
        },
        {
            color: 'Ogon (Vàng Kim)',
            meaning: 'Tài lộc, may mắn',
            price: '600K - 6 triệu/con',
            icon: 'fas fa-fish',
            bgColor: '#eab308'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Hồ cá koi có cần bảo dưỡng thường xuyên không?',
            answer: 'Cần vệ sinh định kỳ 2-3 tháng/lần, thay nước, làm sạch hệ thống lọc. Chi phí bảo dưỡng khoảng 2-5 triệu VNĐ/năm tùy kích thước hồ. Công việc hàng ngày chỉ là cho cá ăn và quan sát.'
        },
        {
            question: 'Cá koi có sống được trong khí hậu Việt Nam không?',
            answer: 'Cá koi thích nghi rất tốt với khí hậu Việt Nam (nhiệt độ 15-30°C). Tại Hà Nội cần chú ý mùa đông lạnh (dưới 10°C), ở Nha Trang cần chống nắng gắt và xử lý độ mặn nếu gần biển.'
        },
        {
            question: 'Chi phí nuôi cá koi hàng tháng bao nhiêu?',
            answer: 'Chi phí thức ăn 200,000-800,000 VNĐ/tháng (tùy số lượng cá), tiền điện máy bơm 150,000-400,000 VNĐ/tháng, thuốc và vitamin 100,000-200,000 VNĐ/tháng. Tổng khoảng 500K-1.5 triệu/tháng.'
        },
        {
            question: 'Hồ koi có ảnh hưởng đến móng nhà không?',
            answer: 'Không nếu thi công đúng kỹ thuật. Chúng tôi làm lớp chống thấm bằng xi măng polymer hoặc màng HDPE, cách ly hoàn toàn với móng nhà. Hồ được thiết kế riêng biệt không ảnh hưởng kết cấu.'
        },
        {
            question: 'Nên chọn hồ koi trong nhà hay ngoài trời?',
            answer: 'Ngoài trời tự nhiên hơn, chi phí thấp hơn nhưng cần chống nắng mưa. Trong nhà kiểm soát tốt hơn, đẹp sang trọng nhưng chi phí cao hơn 30-50%. Tùy không gian và ngân sách.'
        },
        {
            question: 'Cá koi sống được bao lâu?',
            answer: 'Cá koi có thể sống 25-35 năm, thậm chí đến 100 năm nếu chăm sóc tốt. Tuổi thọ trung bình trong điều kiện nuôi thông thường là 20-30 năm. Cá càng lớn tuổi càng đẹp và có giá trị.'
        }
    ];

    const currentType = landscapeTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-water icon-water"></i>
                        Báo Giá Hồ Cá Koi - Tiểu Cảnh
                    </h1>
                    <p className="section-subtitle">
                        Thiết kế & thi công hồ cá koi, tiểu cảnh sân vườn chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-yin-yang"></i>
                            <span>Phong Thủy Chuẩn</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-leaf icon-eco"></i>
                            <span>Xanh - Sạch - Đẹp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Bảo Hành 24 Tháng</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Tư Vấn Chuyên Nghiệp</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Landscape Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Hình & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại hình tiểu cảnh và hồ cá koi phổ biến
                    </p>

                    {/* Tabs */}
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

                    {/* Detail Card */}
                    {currentType && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}
                            >
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                {/* Features Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Bao gồm:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Sizes Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Quy mô & giá:</h4>
                                    <div className="item-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{size.area}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">
                                                        {size.fish || size.style} | {size.depth || size.type}
                                                    </span>
                                                    <span className="item-price-extended">{size.price}</span>
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
                                        <i className="fas fa-eye"></i>
                                        Xem Mẫu Thiết Kế
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
                        Lợi Ích Hồ Cá Koi
                    </h2>
                    <p className="section-subtitle">
                        Tại sao nên có hồ cá koi tại nhà
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
                        5 bước thi công hồ cá koi chuyên nghiệp
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

            {/* Koi Colors */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-palette icon-design"></i>
                        Màu Sắc Cá Koi & Ý Nghĩa
                    </h2>
                    <p className="section-subtitle">
                        Chọn màu cá koi phù hợp phong thủy
                    </p>

                    <div className="grid-4">
                        {koiColors.map((koi, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={koi.icon} style={{ color: koi.bgColor }}></i>
                                    {koi.color}
                                </h3>
                                <p><strong>Ý nghĩa:</strong> {koi.meaning}</p>
                                <span className="standard">{koi.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Hướng Dẫn Chăm Sóc
                    </h2>
                    <p className="section-subtitle">
                        Lịch chăm sóc hồ cá koi định kỳ
                    </p>

                    <div className="grid-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={tip.icon}></i>
                                    {tip.category}
                                </h3>
                                <ul>
                                    {tip.tasks.map((task, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                                <span className="frequency-badge">{tip.frequency}</span>
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
                        Giải đáp thắc mắc về hồ cá koi
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

export default HoCaKoiTieuCanhPage;