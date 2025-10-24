// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongTam.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const CaiTaoPhongTam = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Bathroom renovation packages
    const bathroomPackages = [
        {
            id: 'basic',
            name: 'Phòng Tắm Cơ Bản',
            price: '20,000,000 - 40,000,000 VNĐ',
            pricePerSqm: '2,500,000 - 4,000,000 VNĐ/m²',
            description: 'Cải tạo phòng tắm đơn giản, thiết bị cơ bản',
            features: [
                'Gạch ốp lát 30x60 giá tốt',
                'Bồn cầu Caesar/Inax cơ bản',
                'Sen tắm, lavabo đồng mạ',
                'Gương phòng tắm có đèn',
                'Điện nước an toàn',
                'Chống thấm bảo hành 2 năm'
            ],
            includes: ['Thi công 10-15 ngày', 'Vật liệu tiết kiệm', 'Chống thấm chuẩn'],
            suitable: ['WC 3-5m²', 'Nhà cho thuê', 'Ngân sách hạn chế'],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Phòng Tắm Tiêu Chuẩn',
            price: '40,000,000 - 80,000,000 VNĐ',
            pricePerSqm: '4,000,000 - 6,500,000 VNĐ/m²',
            description: 'Phòng tắm hiện đại, thiết bị tốt, thiết kế đẹp',
            features: [
                'Gạch 40x80 hoặc 60x60 cao cấp',
                'Bồn cầu TOTO/American Standard',
                'Sen cây, bồn tắm nằm',
                'Vách kính cường lực 10mm',
                'Tủ lavabo có bàn đá',
                'Máy nước nóng trực tiếp',
                'Hệ thống chiếu sáng LED',
                'Chống thấm bảo hành 3 năm'
            ],
            includes: ['Thiết kế 2D-3D', 'Thi công 20-30 ngày', 'Vật liệu chất lượng'],
            suitable: ['WC 5-10m²', 'Nhà phố', 'Chung cư'],
            bgColor: '#f59e0b'
        },
        {
            id: 'luxury',
            name: 'Phòng Tắm Luxury',
            price: '80,000,000 - 200,000,000 VNĐ',
            pricePerSqm: '6,500,000 - 12,000,000 VNĐ/m²',
            description: 'Phòng tắm sang trọng, thiết bị nhập khẩu cao cấp',
            features: [
                'Đá marble/granite nhập khẩu',
                'Bồn cầu Duravit/Kohler',
                'Bồn tắm Jacuzzi massage',
                'Phòng xông hơi ướt/khô',
                'Sen thác đa chức năng',
                'Tủ lavabo gỗ tự nhiên',
                'Máy sưởi âm trần',
                'Smarthome tích hợp',
                'Chống thấm bảo hành 5 năm'
            ],
            includes: ['Thiết kế kiến trúc', 'Thi công 40-60 ngày', 'Thiết bị nhập khẩu'],
            suitable: ['WC >10m²', 'Biệt thự', 'Penthouse'],
            bgColor: '#8b5cf6'
        }
    ];

    // Construction items
    const constructionItems = [
        {
            category: 'Phá Dỡ & Chống Thấm',
            items: [
                { name: 'Phá dỡ WC cũ', price: '2,000,000 - 4,000,000 VNĐ' },
                { name: 'Chống thấm sàn', price: '150,000 - 250,000 VNĐ/m²' },
                { name: 'Chống thấm tường', price: '120,000 - 200,000 VNĐ/m²' }
            ],
            icon: 'fas fa-hammer'
        },
        {
            category: 'Ốp Lát',
            items: [
                { name: 'Gạch ốp tường 30x60', price: '180,000 - 300,000 VNĐ/m²' },
                { name: 'Gạch lát nền 60x60', price: '200,000 - 350,000 VNĐ/m²' },
                { name: 'Đá marble ốp lát', price: '500,000 - 1,200,000 VNĐ/m²' }
            ],
            icon: 'fas fa-th-large'
        },
        {
            category: 'Thiết Bị Vệ Sinh',
            items: [
                { name: 'Bồn cầu 1 khối', price: '2,000,000 - 15,000,000 VNĐ' },
                { name: 'Lavabo + tủ', price: '3,000,000 - 20,000,000 VNĐ' },
                { name: 'Sen tắm + vòi', price: '2,000,000 - 12,000,000 VNĐ' }
            ],
            icon: 'fas fa-toilet'
        },
        {
            category: 'Vách Kính & Phụ Kiện',
            items: [
                { name: 'Vách kính 8mm', price: '1,200,000 - 1,800,000 VNĐ/m²' },
                { name: 'Vách kính 10mm', price: '1,800,000 - 2,500,000 VNĐ/m²' },
                { name: 'Phụ kiện inox 304', price: '500,000 - 2,000,000 VNĐ/bộ' }
            ],
            icon: 'fas fa-door-open'
        },
        {
            category: 'Điện & Nước Nóng',
            items: [
                { name: 'Điện nước phòng tắm', price: '3,000,000 - 6,000,000 VNĐ' },
                { name: 'Máy nước nóng trực tiếp', price: '2,500,000 - 8,000,000 VNĐ' },
                { name: 'Máy nước nóng gián tiếp', price: '5,000,000 - 15,000,000 VNĐ' }
            ],
            icon: 'fas fa-bolt'
        },
        {
            category: 'Thông Gió & Chiếu Sáng',
            items: [
                { name: 'Quạt hút âm trần', price: '800,000 - 2,500,000 VNĐ' },
                { name: 'Đèn LED downlight', price: '300,000 - 800,000 VNĐ/bộ' },
                { name: 'Máy sưởi âm trần', price: '3,000,000 - 8,000,000 VNĐ' }
            ],
            icon: 'fas fa-fan'
        }
    ];

    // Bathroom layouts
    const layouts = [
        {
            size: 'WC Nhỏ (3-4m²)',
            layout: 'Bố cục 1 hàng',
            features: ['Bồn cầu + lavabo nhỏ', 'Sen tắm đứng', 'Tiết kiệm không gian'],
            cost: '18-35 triệu'
        },
        {
            size: 'WC Vừa (4-6m²)',
            layout: 'Bố cục góc',
            features: ['Bồn cầu + lavabo', 'Cabin sen', 'Máy giặt (tùy chọn)'],
            cost: '30-60 triệu'
        },
        {
            size: 'WC Lớn (6-10m²)',
            layout: 'Chia 2 khu vực',
            features: ['Khu WC riêng', 'Khu tắm rửa', 'Bồn tắm nằm'],
            cost: '50-100 triệu'
        },
        {
            size: 'WC Master (>10m²)',
            layout: 'Đa chức năng',
            features: ['Khu WC', 'Khu tắm + bồn Jacuzzi', 'Phòng xông hơi'],
            cost: '100-250 triệu'
        }
    ];

    // Waterproofing tips
    const waterproofTips = [
        {
            area: 'Sàn Phòng Tắm',
            method: 'Màng khò nóng + sơn chống thấm',
            layers: '3 lớp: màng + vữa polymer + sơn PU',
            warranty: '3-5 năm'
        },
        {
            area: 'Tường Ướt',
            method: 'Sơn chống thấm Sika/Kova',
            layers: '2 lớp sơn + lưới thủy tinh',
            warranty: '2-3 năm'
        },
        {
            area: 'Góc Tường - Sàn',
            method: 'Băng chống thấm chuyên dụng',
            layers: 'Băng keo + vữa trám khe',
            warranty: '2 năm'
        },
        {
            area: 'Hố Ga Thoát Nước',
            method: 'Xi măng + silicone',
            layers: 'Chống thấm vòng ga kỹ lưỡng',
            warranty: '1-2 năm'
        }
    ];

    // Equipment brands comparison
    const equipmentBrands = [
        {
            brand: 'Caesar (VN)',
            price: 'Tốt',
            quality: '⭐⭐⭐',
            warranty: '2 năm',
            note: 'Giá cả hợp lý, chất lượng ổn'
        },
        {
            brand: 'Inax (Nhật)',
            price: 'Trung bình',
            quality: '⭐⭐⭐⭐',
            warranty: '3 năm',
            note: 'Phổ biến, độ bền tốt'
        },
        {
            brand: 'TOTO (Nhật)',
            price: 'Cao',
            quality: '⭐⭐⭐⭐⭐',
            warranty: '5 năm',
            note: 'Cao cấp, công nghệ tiên tiến'
        },
        {
            brand: 'American Standard',
            price: 'Cao',
            quality: '⭐⭐⭐⭐⭐',
            warranty: '5 năm',
            note: 'Thiết kế đẹp, bền bỉ'
        },
        {
            brand: 'Kohler/Duravit',
            price: 'Rất cao',
            quality: '⭐⭐⭐⭐⭐',
            warranty: '10 năm',
            note: 'Luxury, thiết kế độc đáo'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Cải tạo phòng tắm 5m² hết bao nhiêu tiền?',
            answer: 'Phòng tắm 5m² chi phí: Gói cơ bản 20-35 triệu, gói tiêu chuẩn 35-65 triệu, gói luxury 65-120 triệu. Bao gồm phá dỡ, chống thấm, ốp lát, thiết bị vệ sinh, điện nước. Giá tăng nếu làm cabin sen, bồn tắm.'
        },
        {
            question: 'Thời gian cải tạo phòng tắm mất bao lâu?',
            answer: 'Thời gian cải tạo WC: Gói cơ bản 10-15 ngày, gói tiêu chuẩn 20-30 ngày, gói luxury 40-60 ngày. Phụ thuộc diện tích, mức độ phá dỡ, và chờ vật liệu. Chống thấm cần 3-5 ngày khô hoàn toàn.'
        },
        {
            question: 'Làm thế nào để chống thấm phòng tắm hiệu quả?',
            answer: 'Chống thấm hiệu quả: (1) Dùng màng khò nóng + sơn chống thấm 3 lớp cho sàn, (2) Sơn chống thấm 2 lớp cho tường ướt, (3) Băng keo chống thấm góc tường-sàn, (4) Chống thấm kỹ hố ga. Bảo hành tối thiểu 3 năm.'
        },
        {
            question: 'Nên chọn bồn cầu 1 khối hay 2 khối?',
            answer: 'Bồn cầu 1 khối: dễ vệ sinh, hiện đại, giá 2-15 triệu, ít rò rỉ. Bồn cầu 2 khối: giá rẻ hơn 30%, dễ thay bồn nước, nhưng khó vệ sinh hơn. Nên chọn 1 khối nếu ngân sách cho phép.'
        },
        {
            question: 'Chi phí vách kính phòng tắm bao nhiêu?',
            answer: 'Vách kính: Kính 8mm 1.2-1.8M/m², kính 10mm 1.8-2.5M/m². Cabin sen đứng góc 90° giá 4-8 triệu, cabin chữ nhật 5-12 triệu. Nên dùng kính cường lực 10mm an toàn hơn và bền hơn.'
        },
        {
            question: 'Có nên lắp bồn tắm Jacuzzi không?',
            answer: 'Bồn Jacuzzi: sang trọng, massage thư giãn, giá 20-100 triệu. Cần: diện tích >8m², điện nước đủ mạnh, chống thấm tốt. Phù hợp biệt thự, penthouse. Nếu diện tích nhỏ nên dùng bồn tắm nằm thường 5-15 triệu.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">🚿 Báo Giá Cải Tạo Phòng Tắm</h1>
                    <p className="section-subtitle">
                        Báo giá chi tiết cải tạo phòng tắm hiện đại, an toàn
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">20-200M</div>
                            <div className="stat-label">Chi Phí Tổng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10-60</div>
                            <div className="stat-label">Ngày Thi Công</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Gói Phòng Tắm</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">2-5</div>
                            <div className="stat-label">Năm Bảo Hành</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bathroom Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📦 Gói Cải Tạo Phòng Tắm</h2>
                    <p className="section-subtitle">
                        3 gói phòng tắm từ cơ bản đến luxury
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {bathroomPackages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(pkg.id)}
                                >
                                    {pkg.name}
                                </button>
                            ))}
                        </div>

                        {bathroomPackages.map((pkg) => (
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
                                            <h4>✨ Bao Gồm:</h4>
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
                                            <h4>🎁 Ưu Đãi:</h4>
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
                                            <h4>✅ Phù Hợp:</h4>
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
                                            Liên Hệ Ngay
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

            {/* Construction Items */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔨 Bảng Giá Từng Hạng Mục</h2>
                    <p className="section-subtitle">
                        Chi phí chi tiết cho từng công việc
                    </p>

                    <div className="work-items-grid grid-2">
                        {constructionItems.map((category, index) => (
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

            {/* Bathroom Layouts */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📐 Bố Cục Theo Diện Tích</h2>
                    <p className="section-subtitle">
                        Gợi ý bố cục và chi phí theo diện tích
                    </p>

                    <div className="layouts-grid grid-2">
                        {layouts.map((layout, index) => (
                            <div key={index} className="layout-card card">
                                <div className="card-header">
                                    <h3>{layout.size}</h3>
                                    <div className="layout-type">{layout.layout}</div>
                                    <div className="layout-cost">{layout.cost}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {layout.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <i className="fas fa-check"></i>
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

            {/* Waterproofing Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">💧 Kỹ Thuật Chống Thấm</h2>
                    <p className="section-subtitle">
                        Phương pháp chống thấm từng khu vực
                    </p>

                    <div className="waterproof-grid grid-2">
                        {waterproofTips.map((tip, index) => (
                            <div key={index} className="waterproof-card card">
                                <div className="card-header">
                                    <i className="fas fa-shield-alt icon-large"></i>
                                    <h3>{tip.area}</h3>
                                </div>

                                <div className="card-body">
                                    <div className="waterproof-info">
                                        <p><strong>Phương pháp:</strong> {tip.method}</p>
                                        <p><strong>Cấu tạo:</strong> {tip.layers}</p>
                                        <p><strong>Bảo hành:</strong> {tip.warranty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Brands */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🏷️ So Sánh Thương Hiệu</h2>
                    <p className="section-subtitle">
                        Đánh giá các thương hiệu thiết bị vệ sinh
                    </p>

                    <div className="brands-comparison">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Thương Hiệu</th>
                                    <th>Giá</th>
                                    <th>Chất Lượng</th>
                                    <th>Bảo Hành</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipmentBrands.map((brand, index) => (
                                    <tr key={index}>
                                        <td><strong>{brand.brand}</strong></td>
                                        <td>{brand.price}</td>
                                        <td>{brand.quality}</td>
                                        <td>{brand.warranty}</td>
                                        <td>{brand.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default CaiTaoPhongTam;
