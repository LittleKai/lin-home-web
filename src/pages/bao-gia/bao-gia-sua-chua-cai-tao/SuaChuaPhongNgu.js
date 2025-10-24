// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongNgu.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const SuaChuaPhongNgu = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Bedroom renovation packages
    const bedroomPackages = [
        {
            id: 'basic',
            name: 'Phòng Ngủ Cơ Bản',
            price: '15,000,000 - 30,000,000 VNĐ',
            pricePerSqm: '800,000 - 1,500,000 VNĐ/m²',
            description: 'Sửa chữa cơ bản, làm mới phòng ngủ đơn giản',
            features: [
                'Sơn lại tường màu mới',
                'Trần thạch cao phẳng đơn giản',
                'Sàn gỗ công nghiệp giá tốt',
                'Thay cửa phòng composite',
                'Điện chiếu sáng cơ bản',
                'Bảo hành 12 tháng'
            ],
            includes: ['Thi công nhanh 7-10 ngày', 'Vật liệu tiết kiệm', 'Không đập phá nhiều'],
            suitable: ['Phòng 12-18m²', 'Nhà cho thuê', 'Ngân sách hạn chế'],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Phòng Ngủ Tiêu Chuẩn',
            price: '30,000,000 - 60,000,000 VNĐ',
            pricePerSqm: '1,500,000 - 2,800,000 VNĐ/m²',
            description: 'Cải tạo nâng cấp, thiết kế hiện đại, tiện nghi',
            features: [
                'Thiết kế 2D theo yêu cầu',
                'Trần thạch cao giật cấp + LED',
                'Sàn gỗ công nghiệp cao cấp',
                'Tủ quần áo âm tường',
                'Điện âm tường + smarthome cơ bản',
                'Sơn chống bám bẩn',
                'Đèn trang trí hiện đại',
                'Bảo hành 18 tháng'
            ],
            includes: ['Thiết kế miễn phí', 'Thi công 15-25 ngày', 'Vật liệu chất lượng'],
            suitable: ['Phòng 18-30m²', 'Nhà phố', 'Chung cư'],
            bgColor: '#f59e0b'
        },
        {
            id: 'luxury',
            name: 'Phòng Ngủ Master',
            price: '60,000,000 - 150,000,000 VNĐ',
            pricePerSqm: '2,800,000 - 5,000,000 VNĐ/m²',
            description: 'Phòng ngủ cao cấp, đầy đủ tiện nghi, thiết kế sang trọng',
            features: [
                'Thiết kế 3D chi tiết',
                'Trần 3D + ánh sáng thông minh',
                'Sàn gỗ tự nhiên hoặc thảm cao cấp',
                'Phòng thay đồ Walk-in closet',
                'Hệ thống âm thanh tích hợp',
                'Điều hòa âm trần Inverter',
                'Smarthome cao cấp',
                'Nội thất luxury',
                'Bảo hành 24-36 tháng'
            ],
            includes: ['Thiết kế kiến trúc', 'Thi công 30-50 ngày', 'Vật liệu nhập khẩu'],
            suitable: ['Phòng >30m²', 'Biệt thự', 'Penthouse'],
            bgColor: '#8b5cf6'
        }
    ];

    // Work items
    const workItems = [
        {
            category: 'Trần',
            items: [
                { name: 'Trần thạch cao phẳng', price: '120,000 - 180,000 VNĐ/m²' },
                { name: 'Trần giật cấp + LED', price: '220,000 - 350,000 VNĐ/m²' },
                { name: 'Trần 3D trang trí', price: '400,000 - 650,000 VNĐ/m²' }
            ],
            icon: 'fas fa-layer-group'
        },
        {
            category: 'Tường & Sơn',
            items: [
                { name: 'Sơn nước nội thất', price: '50,000 - 90,000 VNĐ/m²' },
                { name: 'Sơn hiệu ứng', price: '100,000 - 200,000 VNĐ/m²' },
                { name: 'Giấy dán tường', price: '80,000 - 350,000 VNĐ/m²' }
            ],
            icon: 'fas fa-paint-roller'
        },
        {
            category: 'Sàn',
            items: [
                { name: 'Sàn gỗ Janmi/Kosmos', price: '180,000 - 320,000 VNĐ/m²' },
                { name: 'Sàn gỗ Robina/Inovar', price: '280,000 - 450,000 VNĐ/m²' },
                { name: 'Sàn gỗ tự nhiên', price: '450,000 - 1,200,000 VNĐ/m²' }
            ],
            icon: 'fas fa-tree'
        },
        {
            category: 'Cửa & Tủ',
            items: [
                { name: 'Cửa phòng composite', price: '3,500,000 - 6,000,000 VNĐ/cánh' },
                { name: 'Tủ quần áo Melamine', price: '3,500,000 - 5,500,000 VNĐ/m dài' },
                { name: 'Tủ quần áo Acrylic', price: '5,500,000 - 8,500,000 VNĐ/m dài' }
            ],
            icon: 'fas fa-door-closed'
        },
        {
            category: 'Điện & Ánh Sáng',
            items: [
                { name: 'Điện chiếu sáng cơ bản', price: '2,000,000 - 4,000,000 VNĐ' },
                { name: 'Đèn trang trí + LED', price: '4,000,000 - 8,000,000 VNĐ' },
                { name: 'Smarthome cơ bản', price: '5,000,000 - 12,000,000 VNĐ' }
            ],
            icon: 'fas fa-lightbulb'
        },
        {
            category: 'Điều Hòa',
            items: [
                { name: 'Máy lạnh treo tường', price: '6,000,000 - 12,000,000 VNĐ' },
                { name: 'Điều hòa âm trần', price: '15,000,000 - 30,000,000 VNĐ' },
                { name: 'Lắp đặt + ống đồng', price: '1,000,000 - 3,000,000 VNĐ' }
            ],
            icon: 'fas fa-snowflake'
        }
    ];

    // Room features
    const roomFeatures = [
        {
            feature: 'Phòng Ngủ Nhỏ (<15m²)',
            tips: ['Màu sáng tăng diện tích', 'Giường có ngăn kéo', 'Gương phản chiếu', 'Tủ âm tường'],
            cost: '12-35 triệu'
        },
        {
            feature: 'Phòng Ngủ Vừa (15-25m²)',
            tips: ['Bố cục linh hoạt', 'Trần giật cấp tạo điểm nhấn', 'Ban công mini', 'Bàn trang điểm'],
            cost: '25-60 triệu'
        },
        {
            feature: 'Phòng Ngủ Master (>25m²)',
            tips: ['Phòng thay đồ riêng', 'Phòng tắm ensuite', 'Trần 3D sang trọng', 'Hệ thống thông minh'],
            cost: '60-150 triệu'
        }
    ];

    // Lighting tips
    const lightingTips = [
        {
            zone: 'Ánh Sáng Tổng Thể',
            description: 'Đèn trần chính, LED downlight',
            recommendation: '3-5W/m², màu trắng ấm 3000K'
        },
        {
            zone: 'Ánh Sáng Đầu Giường',
            description: 'Đèn ngủ, đèn đọc sách',
            recommendation: 'Đèn bàn hoặc đèn gắn tường có dimmer'
        },
        {
            zone: 'Ánh Sáng Trang Trí',
            description: 'LED dải, đèn âm tường',
            recommendation: 'Ánh sáng nhấn nhá góc phòng, đầu giường'
        },
        {
            zone: 'Ánh Sáng Tủ Quần Áo',
            description: 'Đèn LED trong tủ',
            recommendation: 'Cảm biến chuyển động, tiết kiệm điện'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Sửa chữa phòng ngủ 18m² hết bao nhiêu tiền?',
            answer: 'Phòng ngủ 18m² chi phí: Gói cơ bản 15-25 triệu, gói tiêu chuẩn 25-50 triệu, gói master 50-90 triệu. Bao gồm sơn, trần, sàn, điện, tủ. Giá tăng nếu thay cửa, lắp điều hòa, hoặc có phòng thay đồ.'
        },
        {
            question: 'Thời gian sửa phòng ngủ mất bao lâu?',
            answer: 'Thời gian thi công phòng ngủ: Gói cơ bản 7-10 ngày, gói tiêu chuẩn 15-25 ngày, gói master 30-50 ngày. Thời gian phụ thuộc mức độ phá dỡ, đợi vật liệu, và độ phức tạp thiết kế.'
        },
        {
            question: 'Nên chọn màu sơn nào cho phòng ngủ?',
            answer: 'Màu sơn phòng ngủ: Trắng/be/xám nhạt tăng diện tích và thư giãn, xanh nhạt/tím hoa cà giúp ngủ ngon, tránh đỏ/cam quá rực gây kích thích. Nên sơn 1 bức tường nhấn, 3 bức còn lại màu nhạt.'
        },
        {
            question: 'Có nên làm trần thạch cao phòng ngủ không?',
            answer: 'Nên làm trần thạch cao vì: giấu dây điện, điều hòa, tăng cách âm, cách nhiệt, tạo điểm nhấn với đèn LED. Chi phí 120-350K/m² tùy kiểu dáng. Tránh làm quá phức tạp gây ngột ngạt.'
        },
        {
            question: 'Chi phí tủ quần áo phòng ngủ bao nhiêu?',
            answer: 'Tủ quần áo: Melamine 3.5-5.5M/m dài, Acrylic 5.5-8.5M/m dài, gỗ tự nhiên 10-20M/m dài. Tủ 2.4m dài cao 2.4m giá 8-20 triệu. Nên làm tủ âm tường tiết kiệm diện tích.'
        },
        {
            question: 'Phòng ngủ có cần smarthome không?',
            answer: 'Smarthome phòng ngủ tiện lợi: điều khiển đèn bằng giọng nói/điện thoại, hẹn giờ điều hòa, rèm tự động. Chi phí cơ bản 5-12 triệu cho đèn + điều hòa + rèm. Không bắt buộc nhưng tăng trải nghiệm.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">🛏️ Báo Giá Sửa Chữa Phòng Ngủ</h1>
                    <p className="section-subtitle">
                        Báo giá chi tiết cải tạo phòng ngủ thoải mái, thư giãn
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">15-150M</div>
                            <div className="stat-label">Chi Phí Tổng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">7-50</div>
                            <div className="stat-label">Ngày Thi Công</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Gói Phòng Ngủ</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">12-36</div>
                            <div className="stat-label">Tháng Bảo Hành</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bedroom Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📦 Gói Cải Tạo Phòng Ngủ</h2>
                    <p className="section-subtitle">
                        3 gói phòng ngủ phù hợp mọi nhu cầu
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {bedroomPackages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(pkg.id)}
                                >
                                    {pkg.name}
                                </button>
                            ))}
                        </div>

                        {bedroomPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`tab-content ${activeTab === pkg.id ? 'active' : ''}`}
                            >
                                <div className="pricing-card card">
                                    <div className="card-header" style={{ background: `linear-gradient(135deg, ${pkg.bgColor}, ${pkg.bgColor}dd)` }}>
                                        <h3>{pkg.name}</h3>
                                        <div className="price-range">{pkg.price}</div>
                                        <div className="price-note">{pkg.pricePerSqm}</div>
                                        <p>{pkg.description}</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="features-section">
                                            <h4>✨ Hạng Mục Bao Gồm:</h4>
                                            <ul>
                                                {pkg.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-check-circle"></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="includes-section">
                                            <h4>🎁 Ưu Đãi Kèm Theo:</h4>
                                            <ul>
                                                {pkg.includes.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-gift"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="suitable-section">
                                            <h4>🏠 Phù Hợp Cho:</h4>
                                            <ul>
                                                {pkg.suitable.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-home"></i>
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

            {/* Work Items */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔨 Bảng Giá Từng Hạng Mục</h2>
                    <p className="section-subtitle">
                        Chi phí chi tiết cho từng công việc
                    </p>

                    <div className="work-items-grid grid-2">
                        {workItems.map((category, index) => (
                            <div key={index} className="work-category-card card">
                                <div className="card-header">
                                    <i className={`${category.icon} icon-large`}></i>
                                    <h3>{category.category}</h3>
                                </div>

                                <div className="card-body">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="work-item">
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-price">{item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Features */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📐 Theo Diện Tích Phòng</h2>
                    <p className="section-subtitle">
                        Gợi ý thiết kế và chi phí theo diện tích
                    </p>

                    <div className="features-grid grid-3">
                        {roomFeatures.map((room, index) => (
                            <div key={index} className="feature-card card">
                                <div className="card-header">
                                    <h3>{room.feature}</h3>
                                    <div className="feature-cost">{room.cost}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {room.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex}>
                                                <i className="fas fa-lightbulb"></i>
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

            {/* Lighting Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">💡 Ánh Sáng Phòng Ngủ</h2>
                    <p className="section-subtitle">
                        Hướng dẫn thiết kế ánh sáng thoải mái
                    </p>

                    <div className="lighting-grid grid-2">
                        {lightingTips.map((light, index) => (
                            <div key={index} className="lighting-card card">
                                <div className="card-header">
                                    <i className="fas fa-lightbulb icon-large"></i>
                                    <h3>{light.zone}</h3>
                                </div>

                                <div className="card-body">
                                    <p><strong>{light.description}</strong></p>
                                    <p className="recommendation">
                                        <i className="fas fa-check-circle"></i>
                                        {light.recommendation}
                                    </p>
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

export default SuaChuaPhongNgu;
