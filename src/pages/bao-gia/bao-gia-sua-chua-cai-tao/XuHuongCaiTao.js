// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/XuHuongCaiTao.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const XuHuongCaiTao = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Latest renovation trends
    const trends = [
        {
            id: 1,
            trend: 'Smarthome & Tự Động Hóa',
            description: 'Tích hợp công nghệ thông minh vào nhà cũ',
            cost: '10,000,000 - 50,000,000 VNĐ',
            features: [
                'Điều khiển đèn, điều hòa bằng giọng nói/app',
                'Camera an ninh thông minh',
                'Khóa vân tay, khóa điện tử',
                'Rèm tự động theo giờ',
                'Cảm biến chuyển động tiết kiệm điện'
            ],
            icon: 'fas fa-home',
            color: '#3b82f6'
        },
        {
            id: 2,
            trend: 'Không Gian Mở',
            description: 'Phá bỏ tường ngăn tạo không gian thông thoáng',
            cost: '15,000,000 - 40,000,000 VNĐ',
            features: [
                'Bếp mở liền phòng khách',
                'Phòng ngủ kết hợp phòng làm việc',
                'Sử dụng vách kính thay tường',
                'Thiết kế đa chức năng',
                'Tăng ánh sáng tự nhiên'
            ],
            icon: 'fas fa-expand-arrows-alt',
            color: '#10b981'
        },
        {
            id: 3,
            trend: 'Xanh & Bền Vững',
            description: 'Sử dụng vật liệu thân thiện môi trường',
            cost: '20,000,000 - 60,000,000 VNĐ',
            features: [
                'Sơn không VOC',
                'Gỗ tái chế, tre',
                'Điện mặt trời',
                'Hệ thống thu nước mưa',
                'Cây xanh trong nhà'
            ],
            icon: 'fas fa-leaf',
            color: '#059669'
        },
        {
            id: 4,
            trend: 'Phong Cách Tối Giản',
            description: 'Thiết kế đơn giản, gọn gàng, ít đồ đạc',
            cost: '12,000,000 - 35,000,000 VNĐ',
            features: [
                'Màu trung tính (trắng, xám, be)',
                'Tủ âm tường tiết kiệm không gian',
                'Đồ nội thất đa năng',
                'Tối giản hóa decor',
                'Tăng không gian lưu trữ ẩn'
            ],
            icon: 'fas fa-shapes',
            color: '#6366f1'
        },
        {
            id: 5,
            trend: 'Năng Lượng Mặt Trời',
            description: 'Lắp đặt hệ thống điện mặt trời',
            cost: '60,000,000 - 150,000,000 VNĐ',
            features: [
                'Hệ thống 3-5kW cho hộ gia đình',
                'Giảm 50-70% tiền điện',
                'Thân thiện môi trường',
                'Hoàn vốn sau 5-7 năm',
                'Bảo hành 10-25 năm'
            ],
            icon: 'fas fa-solar-panel',
            color: '#f59e0b'
        },
        {
            id: 6,
            trend: 'Phòng Đa Năng',
            description: 'Thiết kế phòng linh hoạt nhiều chức năng',
            cost: '10,000,000 - 30,000,000 VNĐ',
            features: [
                'Phòng làm việc/phòng khách',
                'Phòng ngủ/phòng tập yoga',
                'Nội thất có thể di chuyển',
                'Vách ngăn di động',
                'Phù hợp nhà nhỏ'
            ],
            icon: 'fas fa-th',
            color: '#8b5cf6'
        }
    ];

    // Popular styles
    const styles = [
        {
            style: 'Scandinavian',
            characteristics: ['Sáng, tối giản', 'Gỗ sáng màu', 'Xanh tự nhiên', 'Chức năng cao'],
            cost: '1,500,000 - 3,000,000 VNĐ/m²',
            suitable: 'Nhà phố, chung cư nhỏ'
        },
        {
            style: 'Industrial',
            characteristics: ['Gạch thô', 'Kim loại đen', 'Bê tông', 'Phong cách công nghiệp'],
            cost: '1,800,000 - 3,500,000 VNĐ/m²',
            suitable: 'Quán cafe, loft, studio'
        },
        {
            style: 'Japandi',
            characteristics: ['Kết hợp Nhật-Bắc Âu', 'Tối giản ấm áp', 'Gỗ tự nhiên', 'Thiền'],
            cost: '2,000,000 - 4,000,000 VNĐ/m²',
            suitable: 'Nhà phố, biệt thự'
        },
        {
            style: 'Modern Luxury',
            characteristics: ['Sang trọng', 'Vật liệu cao cấp', 'Ánh sáng thông minh', 'Chi tiết tinh xảo'],
            cost: '3,000,000 - 6,000,000 VNĐ/m²',
            suitable: 'Biệt thự, penthouse'
        }
    ];

    // Technology integrations
    const techIntegrations = [
        {
            tech: 'Smarthome Cơ Bản',
            devices: ['Công tắc thông minh', 'Đèn LED điều khiển', 'Camera WiFi'],
            cost: '5-15 triệu',
            brands: 'Google Home, Xiaomi, Broadlink'
        },
        {
            tech: 'Smarthome Trung Cấp',
            devices: ['Điều hòa thông minh', 'Rèm tự động', 'Khóa vân tay', 'Hub điều khiển'],
            cost: '15-35 triệu',
            brands: 'Xiaomi, Tuya, Aqara'
        },
        {
            tech: 'Smarthome Cao Cấp',
            devices: ['Toàn bộ hệ thống', 'Cảm biến AI', 'Tích hợp giọng nói', 'Màn hình trung tâm'],
            cost: '35-100 triệu',
            brands: 'Lumi, Acis, Control4'
        }
    ];

    // Eco-friendly materials
    const ecoMaterials = [
        {
            material: 'Sơn Không VOC',
            benefit: 'An toàn sức khỏe, không mùi độc',
            cost: '+20-30% so với sơn thường',
            brands: 'Dulux, Jotun, Nippon'
        },
        {
            material: 'Gỗ Tái Chế',
            benefit: 'Bảo vệ rừng, độc đáo',
            cost: 'Tương đương gỗ thường',
            brands: 'Gỗ pallet, gỗ thông tái chế'
        },
        {
            material: 'Tre',
            benefit: 'Bền, nhanh tái sinh, đẹp',
            cost: 'Rẻ hơn gỗ 30-40%',
            brands: 'Sàn tre, tường tre'
        },
        {
            material: 'Gạch Tái Chế',
            benefit: 'Giảm rác thải, tiết kiệm',
            cost: 'Rẻ hơn 20-30%',
            brands: 'Gạch xi măng tái chế'
        }
    ];

    // Budget by trend
    const budgetBreakdown = [
        {
            trend: 'Smarthome Cơ Bản',
            minBudget: '10-20 triệu',
            items: 'Đèn + công tắc thông minh + camera'
        },
        {
            trend: 'Không Gian Mở',
            minBudget: '30-60 triệu',
            items: 'Phá tường + hoàn thiện + điều chỉnh điện'
        },
        {
            trend: 'Phong Cách Tối Giản',
            minBudget: '20-40 triệu/phòng',
            items: 'Sơn + tủ âm tường + sàn gỗ'
        },
        {
            trend: 'Điện Mặt Trời',
            minBudget: '60-150 triệu',
            items: 'Hệ thống 3-5kW + lắp đặt'
        },
        {
            trend: 'Xanh Bền Vững',
            minBudget: '+15-25% chi phí thường',
            items: 'Vật liệu eco-friendly'
        }
    ];

    // Benefits of trendy renovation
    const benefits = [
        {
            benefit: 'Tăng Giá Trị Nhà',
            description: 'Nhà hiện đại, xu hướng mới có giá trị cao hơn 15-30%',
            icon: 'fas fa-arrow-up'
        },
        {
            benefit: 'Tiết Kiệm Dài Hạn',
            description: 'Smarthome, điện mặt trời giúp tiết kiệm tiền hàng tháng',
            icon: 'fas fa-piggy-bank'
        },
        {
            benefit: 'Sống Tiện Nghi Hơn',
            description: 'Công nghệ giúp cuộc sống dễ dàng, thoải mái hơn',
            icon: 'fas fa-couch'
        },
        {
            benefit: 'Thân Thiện Môi Trường',
            description: 'Giảm tác động xấu đến môi trường, sống xanh',
            icon: 'fas fa-seedling'
        },
        {
            benefit: 'Không Gian Đẹp Hơn',
            description: 'Thiết kế hiện đại, xu hướng mới đẹp mắt hơn',
            icon: 'fas fa-palette'
        },
        {
            benefit: 'An Toàn & Bảo Mật',
            description: 'Camera, khóa thông minh tăng cường an ninh',
            icon: 'fas fa-shield-alt'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Xu hướng cải tạo nhà năm 2025 là gì?',
            answer: 'Xu hướng 2025: (1) Smarthome & tự động hóa, (2) Không gian mở thông thoáng, (3) Vật liệu xanh bền vững, (4) Phong cách tối giản, (5) Năng lượng mặt trời, (6) Phòng đa năng linh hoạt. Chi phí áp dụng từ 10-150 triệu tùy xu hướng.'
        },
        {
            question: 'Chi phí lắp đặt smarthome bao nhiêu?',
            answer: 'Chi phí smarthome: Cơ bản 5-15 triệu (đèn, công tắc, camera), trung cấp 15-35 triệu (điều hòa, rèm, khóa), cao cấp 35-100 triệu (toàn bộ hệ thống). Tiết kiệm điện 20-30%, hoàn vốn sau 3-5 năm.'
        },
        {
            question: 'Phong cách nào phù hợp nhà nhỏ?',
            answer: 'Nhà nhỏ nên dùng: (1) Scandinavian: sáng, tối giản, (2) Japandi: ấm áp, tinh tế, (3) Không gian mở: phá tường tạo rộng, (4) Tủ âm tường: tiết kiệm diện tích. Chi phí 1.5-4M/m².'
        },
        {
            question: 'Có nên lắp điện mặt trời không?',
            answer: 'Nên lắp nếu: (1) Mái rộng, hướng Nam, (2) Tiền điện >2 triệu/tháng, (3) Muốn sống xanh. Chi phí 60-150 triệu cho hệ 3-5kW, giảm 50-70% tiền điện, hoàn vốn sau 5-7 năm.'
        },
        {
            question: 'Vật liệu eco-friendly có đắt hơn không?',
            answer: 'Tùy loại: Sơn không VOC đắt hơn 20-30%, tre rẻ hơn gỗ 30-40%, gạch tái chế rẻ hơn 20-30%. Tổng chi phí xanh chỉ tăng 15-25% nhưng an toàn sức khỏe và môi trường.'
        },
        {
            question: 'Làm sao để tạo không gian mở?',
            answer: 'Tạo không gian mở: (1) Phá bỏ tường ngăn không chịu lực, (2) Dùng vách kính thay tường, (3) Bếp mở liền phòng khách, (4) Màu sáng tăng cảm giác rộng. Chi phí phá tường + hoàn thiện 30-60 triệu.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">🎨 Xu Hướng Cải Tạo 2025</h1>
                    <p className="section-subtitle">
                        Cập nhật xu hướng thiết kế và cải tạo nhà mới nhất
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">6</div>
                            <div className="stat-label">Xu Hướng Hot</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Phong Cách Phổ Biến</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15-30%</div>
                            <div className="stat-label">Tăng Giá Trị Nhà</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">20-50%</div>
                            <div className="stat-label">Tiết Kiệm Năng Lượng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Trends */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔥 Xu Hướng Nổi Bật 2025</h2>
                    <p className="section-subtitle">
                        6 xu hướng cải tạo được yêu thích nhất
                    </p>

                    <div className="trends-grid grid-3">
                        {trends.map((item) => (
                            <div key={item.id} className="trend-card card">
                                <div className="card-header" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.trend}</h3>
                                    <p>{item.description}</p>
                                    <div className="trend-cost">{item.cost}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {item.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-star"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Styles */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🎭 Phong Cách Phổ Biến</h2>
                    <p className="section-subtitle">
                        4 phong cách thiết kế được ưa chuộng
                    </p>

                    <div className="styles-grid grid-2">
                        {styles.map((style, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>{style.style}</h3>
                                    <div className="style-cost">{style.cost}</div>
                                </div>

                                <div className="card-body">
                                    <div className="characteristics">
                                        <h4>Đặc điểm:</h4>
                                        <ul>
                                            {style.characteristics.map((char, charIndex) => (
                                                <li key={charIndex}>
                                                    <i className="fas fa-check"></i>
                                                    {char}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="suitable">
                                        <p><strong>Phù hợp:</strong> {style.suitable}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Integration */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">💻 Tích Hợp Công Nghệ</h2>
                    <p className="section-subtitle">
                        Chi phí smarthome theo từng mức độ
                    </p>

                    <div className="tech-grid grid-3">
                        {techIntegrations.map((tech, index) => (
                            <div key={index} className="tech-card card">
                                <div className="card-header">
                                    <h3>{tech.tech}</h3>
                                    <div className="tech-cost">{tech.cost}</div>
                                </div>

                                <div className="card-body">
                                    <h4>Thiết bị:</h4>
                                    <ul>
                                        {tech.devices.map((device, deviceIndex) => (
                                            <li key={deviceIndex}>
                                                <i className="fas fa-microchip"></i>
                                                {device}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="brands"><strong>Thương hiệu:</strong> {tech.brands}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eco Materials */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🌱 Vật Liệu Xanh</h2>
                    <p className="section-subtitle">
                        Vật liệu thân thiện môi trường phổ biến
                    </p>

                    <div className="eco-grid grid-2">
                        {ecoMaterials.map((material, index) => (
                            <div key={index} className="eco-card card">
                                <div className="card-header">
                                    <i className="fas fa-leaf icon-large"></i>
                                    <h3>{material.material}</h3>
                                </div>

                                <div className="card-body">
                                    <p><strong>Lợi ích:</strong> {material.benefit}</p>
                                    <p><strong>Chi phí:</strong> {material.cost}</p>
                                    <p><strong>Thương hiệu:</strong> {material.brands}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Budget Breakdown */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">💰 Ngân Sách Theo Xu Hướng</h2>
                    <p className="section-subtitle">
                        Chi phí tối thiểu để áp dụng từng xu hướng
                    </p>

                    <div className="budget-list">
                        {budgetBreakdown.map((item, index) => (
                            <div key={index} className="budget-item card">
                                <div className="budget-header">
                                    <h4>{item.trend}</h4>
                                    <div className="budget-amount">{item.minBudget}</div>
                                </div>
                                <div className="budget-content">
                                    <p>{item.items}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">✨ Lợi Ích Cải Tạo Xu Hướng</h2>
                    <p className="section-subtitle">
                        6 lợi ích khi áp dụng xu hướng mới
                    </p>

                    <div className="benefits-grid grid-3">
                        {benefits.map((item, index) => (
                            <div key={index} className="benefit-card card">
                                <div className="card-header">
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.benefit}</h3>
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

export default XuHuongCaiTao;
