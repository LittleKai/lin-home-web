// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongBep.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const CaiTaoPhongBep = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Kitchen renovation packages
    const kitchenPackages = [
        {
            id: 'basic',
            name: 'Bếp Cơ Bản',
            price: '30,000,000 - 55,000,000 VNĐ',
            pricePerSqm: '1,500,000 - 2,500,000 VNĐ/m²',
            description: 'Cải tạo bếp đơn giản, vật liệu tiết kiệm, chức năng đầy đủ',
            features: [
                'Tủ bếp gỗ công nghiệp MDF',
                'Bếp từ/gas âm 2 bếp',
                'Máy hút mùi cơ bản',
                'Mặt đá nhân tạo Việt Nam',
                'Bồn rửa inox 304',
                'Vòi rửa đồng mạ',
                'Bảo hành 12 tháng'
            ],
            includes: ['Thi công 10-15 ngày', 'Vật liệu tiết kiệm', 'Thiết kế đơn giản'],
            suitable: ['Bếp 6-10m²', 'Nhà cho thuê', 'Ngân sách hạn chế'],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Bếp Tiêu Chuẩn',
            price: '55,000,000 - 100,000,000 VNĐ',
            pricePerSqm: '2,500,000 - 4,000,000 VNĐ/m²',
            description: 'Bếp hiện đại, đầy đủ tính năng, vật liệu tốt',
            features: [
                'Tủ bếp gỗ tự nhiên/Acrylic',
                'Bếp từ/gas 3-4 bếp cao cấp',
                'Máy hút âm tủ/khử mùi ion',
                'Mặt đá granite/quartz',
                'Bồn rửa Franke/Teka',
                'Vòi rửa cao cấp Hansgrohe',
                'Lò vi sóng âm tủ',
                'Máy rửa chén nhập khẩu',
                'Bảo hành 18-24 tháng'
            ],
            includes: ['Thiết kế 3D', 'Thi công 20-30 ngày', 'Vật liệu chất lượng'],
            suitable: ['Bếp 10-18m²', 'Nhà phố', 'Chung cư cao cấp'],
            bgColor: '#f59e0b'
        },
        {
            id: 'luxury',
            name: 'Bếp Luxury',
            price: '100,000,000 - 250,000,000 VNĐ',
            pricePerSqm: '4,000,000 - 7,000,000 VNĐ/m²',
            description: 'Bếp đẳng cấp, thiết bị nhập khẩu, smarthome',
            features: [
                'Tủ bếp gỗ tự nhiên cao cấp',
                'Bếp từ Bosch/Electrolux 5 bếp',
                'Máy hút âm trần công suất lớn',
                'Mặt đá marble nhập khẩu',
                'Bồn rửa đá tự nhiên',
                'Vòi cảm ứng thông minh',
                'Lò nướng âm tủ cao cấp',
                'Tủ lạnh âm tủ Side by Side',
                'Máy rửa chén Bosch/Miele',
                'Hệ thống smarthome tích hợp',
                'Bảo hành 24-36 tháng'
            ],
            includes: ['Thiết kế kiến trúc', 'Thi công 40-60 ngày', 'Vật liệu nhập khẩu'],
            suitable: ['Bếp >20m²', 'Biệt thự', 'Penthouse'],
            bgColor: '#8b5cf6'
        }
    ];

    // Kitchen components pricing
    const components = [
        {
            name: 'Tủ Bếp',
            items: [
                { type: 'MDF phủ Melamine', price: '2,500,000 - 3,500,000 VNĐ/m dài' },
                { type: 'MDF phủ Acrylic', price: '3,500,000 - 5,000,000 VNĐ/m dài' },
                { type: 'Gỗ công nghiệp veneer', price: '5,000,000 - 7,500,000 VNĐ/m dài' },
                { type: 'Gỗ tự nhiên sồi/xoan', price: '8,000,000 - 15,000,000 VNĐ/m dài' }
            ],
            icon: 'fas fa-cabinet-filing'
        },
        {
            name: 'Mặt Bếp',
            items: [
                { type: 'Đá nhân tạo Việt Nam', price: '800,000 - 1,200,000 VNĐ/m dài' },
                { type: 'Granite tự nhiên', price: '1,500,000 - 2,500,000 VNĐ/m dài' },
                { type: 'Quartz nhập khẩu', price: '2,500,000 - 4,000,000 VNĐ/m dài' },
                { type: 'Marble cao cấp', price: '4,000,000 - 8,000,000 VNĐ/m dài' }
            ],
            icon: 'fas fa-th-large'
        },
        {
            name: 'Thiết Bị Bếp',
            items: [
                { type: 'Bếp từ/gas 2 bếp', price: '3,000,000 - 8,000,000 VNĐ' },
                { type: 'Bếp từ 3-4 bếp cao cấp', price: '8,000,000 - 20,000,000 VNĐ' },
                { type: 'Máy hút mùi cơ bản', price: '2,000,000 - 5,000,000 VNĐ' },
                { type: 'Máy hút khử mùi cao cấp', price: '5,000,000 - 15,000,000 VNĐ' }
            ],
            icon: 'fas fa-fire'
        },
        {
            name: 'Thiết Bị Vệ Sinh',
            items: [
                { type: 'Bồn rửa inox 304', price: '800,000 - 2,500,000 VNĐ' },
                { type: 'Bồn rửa Franke/Teka', price: '2,500,000 - 5,000,000 VNĐ' },
                { type: 'Vòi rửa đồng mạ', price: '500,000 - 1,500,000 VNĐ' },
                { type: 'Vòi cảm ứng cao cấp', price: '2,000,000 - 5,000,000 VNĐ' }
            ],
            icon: 'fas fa-sink'
        }
    ];

    // Kitchen layouts
    const layouts = [
        {
            layout: 'Bếp Chữ I',
            area: '4-8m²',
            description: 'Bếp 1 hàng, tiết kiệm diện tích',
            cost: '25-45 triệu',
            pros: ['Tiết kiệm không gian', 'Chi phí thấp', 'Dễ thi công'],
            cons: ['Ít diện tích làm việc', 'Không gian lưu trữ hạn chế']
        },
        {
            layout: 'Bếp Chữ L',
            area: '6-12m²',
            description: 'Bếp góc, tận dụng không gian',
            cost: '40-80 triệu',
            pros: ['Tận dụng góc', 'Linh hoạt', 'Nhiều không gian làm việc'],
            cons: ['Cần diện tích vừa phải', 'Chi phí cao hơn chữ I']
        },
        {
            layout: 'Bếp Chữ U',
            area: '8-15m²',
            description: 'Bếp 3 hàng, nhiều không gian',
            cost: '60-120 triệu',
            pros: ['Rất nhiều không gian', 'Tiện nghi cao', 'Đẹp mắt'],
            cons: ['Cần diện tích lớn', 'Chi phí cao', 'Khó vệ sinh góc']
        },
        {
            layout: 'Bếp Đảo',
            area: '>15m²',
            description: 'Bếp có đảo trung tâm, sang trọng',
            cost: '100-250 triệu',
            pros: ['Sang trọng', 'Đa năng', 'Không gian giao tiếp'],
            cons: ['Cần diện tích rộng', 'Chi phí rất cao', 'Phức tạp thi công']
        }
    ];

    // Construction items
    const constructionItems = [
        {
            item: 'Phá Dỡ Bếp Cũ',
            price: '3,000,000 - 5,000,000 VNĐ',
            note: 'Bao gồm tháo tủ, thiết bị, dọn rác'
        },
        {
            item: 'Chống Thấm Tường Bếp',
            price: '120,000 - 180,000 VNĐ/m²',
            note: 'Sơn chống thấm chuyên dụng'
        },
        {
            item: 'Ốp Gạch Tường',
            price: '150,000 - 300,000 VNĐ/m²',
            note: 'Gạch 30x60 hoặc 30x30'
        },
        {
            item: 'Lát Nền Bếp',
            price: '180,000 - 350,000 VNĐ/m²',
            note: 'Gạch chống trơn 60x60 hoặc 80x80'
        },
        {
            item: 'Điện Nước Bếp',
            price: '5,000,000 - 10,000,000 VNĐ',
            note: 'Đi dây điện, đường ống nước'
        },
        {
            item: 'Trần Thạch Cao',
            price: '150,000 - 250,000 VNĐ/m²',
            note: 'Trần chống ẩm có đèn LED'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Chi phí làm mới bếp 8m² hết bao nhiêu tiền?',
            answer: 'Bếp 8m² chi phí dao động: Gói cơ bản 30-45 triệu, gói tiêu chuẩn 45-80 triệu, gói luxury 80-150 triệu. Bao gồm tủ bếp, thiết bị, ốp lát, điện nước. Giá cụ thể phụ thuộc vật liệu và thiết bị chọn.'
        },
        {
            question: 'Thời gian cải tạo bếp mất bao lâu?',
            answer: 'Thời gian cải tạo bếp: Gói cơ bản 10-15 ngày, gói tiêu chuẩn 20-30 ngày, gói luxury 40-60 ngày. Bao gồm phá dỡ, thi công, lắp đặt. Thời gian có thể lâu hơn nếu chờ thiết bị nhập khẩu.'
        },
        {
            question: 'Nên chọn tủ bếp gỗ công nghiệp hay gỗ tự nhiên?',
            answer: 'Gỗ công nghiệp (MDF/Acrylic): bền, chống ẩm tốt, giá 2.5-5M/m dài, đa dạng màu sắc. Gỗ tự nhiên: sang trọng, bền lâu, giá 8-15M/m dài, cần bảo dưỡng. Nên chọn gỗ công nghiệp nếu ngân sách hạn chế.'
        },
        {
            question: 'Mặt bếp đá tự nhiên hay đá nhân tạo tốt hơn?',
            answer: 'Đá nhân tạo: không thấm nước, ít xốp, giá 800K-4M/m dài, màu đều. Đá tự nhiên (granite/marble): sang, bền, giá 1.5-8M/m dài, có vân tự nhiên. Đá nhân tạo phù hợp hơn vì dễ vệ sinh và bền màu.'
        },
        {
            question: 'Bếp từ hay bếp gas tốt hơn?',
            answer: 'Bếp từ: an toàn, sạch, tiết kiệm điện, giá 3-20 triệu, cần nồi chuyên dụng. Bếp gas: quen thuộc, nấu nhanh, giá 1-5 triệu. Xu hướng hiện nay dùng bếp từ cho an toàn và vệ sinh.'
        },
        {
            question: 'Chi phí máy hút mùi bao nhiêu?',
            answer: 'Máy hút mùi: Loại cơ bản 2-5 triệu, loại khử mùi ion 5-10 triệu, loại âm trần 10-15 triệu. Nên chọn công suất phù hợp diện tích bếp: 6-8m² dùng 600-800m³/h, >10m² dùng 1000m³/h trở lên.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">🍳 Báo Giá Cải Tạo Phòng Bếp</h1>
                    <p className="section-subtitle">
                        Báo giá chi tiết cải tạo bếp hiện đại, đầy đủ tiện nghi
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">30-250M</div>
                            <div className="stat-label">Chi Phí Tổng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10-60</div>
                            <div className="stat-label">Ngày Thi Công</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Gói Bếp</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">12-36</div>
                            <div className="stat-label">Tháng Bảo Hành</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kitchen Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📦 Gói Cải Tạo Bếp</h2>
                    <p className="section-subtitle">
                        3 gói bếp từ cơ bản đến luxury
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {kitchenPackages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(pkg.id)}
                                >
                                    {pkg.name}
                                </button>
                            ))}
                        </div>

                        {kitchenPackages.map((pkg) => (
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
                                            <h4>🔧 Bao Gồm:</h4>
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

            {/* Components Pricing */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">💰 Bảng Giá Chi Tiết</h2>
                    <p className="section-subtitle">
                        Chi phí từng bộ phận của bếp
                    </p>

                    <div className="components-grid grid-2">
                        {components.map((component, index) => (
                            <div key={index} className="component-card card">
                                <div className="card-header">
                                    <i className={`${component.icon} icon-large`}></i>
                                    <h3>{component.name}</h3>
                                </div>

                                <div className="card-body">
                                    {component.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="component-item">
                                            <div className="item-type">{item.type}</div>
                                            <div className="item-price">{item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kitchen Layouts */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📐 Bố Cục Bếp</h2>
                    <p className="section-subtitle">
                        4 kiểu bố cục bếp phổ biến
                    </p>

                    <div className="layouts-grid grid-2">
                        {layouts.map((layout, index) => (
                            <div key={index} className="layout-card card">
                                <div className="card-header">
                                    <h3>{layout.layout}</h3>
                                    <div className="layout-info">
                                        <span className="area">
                                            <i className="fas fa-ruler-combined"></i>
                                            {layout.area}
                                        </span>
                                        <span className="cost">
                                            <i className="fas fa-dollar-sign"></i>
                                            {layout.cost}
                                        </span>
                                    </div>
                                    <p>{layout.description}</p>
                                </div>

                                <div className="card-body">
                                    <div className="pros-cons">
                                        <div className="pros">
                                            <h4>👍 Ưu điểm:</h4>
                                            <ul>
                                                {layout.pros.map((pro, proIndex) => (
                                                    <li key={proIndex}>
                                                        <i className="fas fa-plus"></i>
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="cons">
                                            <h4>👎 Nhược điểm:</h4>
                                            <ul>
                                                {layout.cons.map((con, conIndex) => (
                                                    <li key={conIndex}>
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

            {/* Construction Items */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔨 Chi Phí Thi Công</h2>
                    <p className="section-subtitle">
                        Bảng giá các hạng mục thi công bếp
                    </p>

                    <div className="construction-grid">
                        {constructionItems.map((item, index) => (
                            <div key={index} className="construction-item card">
                                <div className="item-header">
                                    <h4>{item.item}</h4>
                                    <div className="item-price">{item.price}</div>
                                </div>
                                <div className="item-note">{item.note}</div>
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

export default CaiTaoPhongBep;
