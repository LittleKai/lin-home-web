// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongKhach.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const SuaChuaPhongKhach = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Renovation packages for living room
    const renovationPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '25,000,000 - 45,000,000 VNĐ',
            pricePerSqm: '1,000,000 - 1,500,000 VNĐ/m²',
            description: 'Sửa chữa cơ bản, làm mới không gian phòng khách',
            features: [
                'Sơn lại tường, trần',
                'Thay gạch hoặc sàn gỗ',
                'Sửa chữa điện, đèn',
                'Thay cửa sổ cũ',
                'Bảo hành 12 tháng'
            ],
            includes: [
                'Vật liệu giá tốt',
                'Thi công nhanh 7-10 ngày',
                'Không thay đổi bố cục'
            ],
            suitable: ['Phòng khách 20-30m²', 'Nhà cũ 10-15 năm'],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Gói Tiêu Chuẩn',
            price: '45,000,000 - 80,000,000 VNĐ',
            pricePerSqm: '1,500,000 - 2,500,000 VNĐ/m²',
            description: 'Cải tạo nâng cấp, thay đổi bố cục, vật liệu tốt hơn',
            features: [
                'Thay đổi bố cục không gian',
                'Trần thạch cao giật cấp',
                'Sàn gỗ công nghiệp cao cấp',
                'Điện âm tường, đèn LED',
                'Sơn chống bám bẩn',
                'Bảo hành 18 tháng'
            ],
            includes: [
                'Thiết kế 2D miễn phí',
                'Vật liệu chất lượng tốt',
                'Thi công 15-20 ngày'
            ],
            suitable: ['Phòng khách 30-50m²', 'Nhà phố', 'Chung cư'],
            bgColor: '#f59e0b'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '80,000,000 - 150,000,000 VNĐ',
            pricePerSqm: '2,500,000 - 4,000,000 VNĐ/m²',
            description: 'Cải tạo toàn diện, thiết kế hiện đại, vật liệu cao cấp',
            features: [
                'Thiết kế kiến trúc mới',
                'Trần 3D, vách trang trí',
                'Đá marble/granite',
                'Hệ thống ánh sáng thông minh',
                'Điều hòa âm trần',
                'Nội thất cao cấp',
                'Bảo hành 24-36 tháng'
            ],
            includes: [
                'Thiết kế 3D chi tiết',
                'Vật liệu nhập khẩu',
                'Smarthome tích hợp',
                'Thi công 30-45 ngày'
            ],
            suitable: ['Phòng khách >50m²', 'Biệt thự', 'Penthouse'],
            bgColor: '#8b5cf6'
        }
    ];

    // Work items breakdown
    const workItems = [
        {
            category: 'Phá Dỡ',
            items: [
                { name: 'Phá trần cũ', price: '50,000 - 80,000 VNĐ/m²' },
                { name: 'Bứng gạch cũ', price: '60,000 - 90,000 VNĐ/m²' },
                { name: 'Phá tường không chịu lực', price: '80,000 - 120,000 VNĐ/m²' }
            ],
            icon: 'fas fa-hammer'
        },
        {
            category: 'Xây Mới',
            items: [
                { name: 'Xây tường gạch', price: '180,000 - 250,000 VNĐ/m²' },
                { name: 'Trát tường', price: '60,000 - 90,000 VNĐ/m²' },
                { name: 'Làm vách thạch cao', price: '200,000 - 350,000 VNĐ/m²' }
            ],
            icon: 'fas fa-building'
        },
        {
            category: 'Điện',
            items: [
                { name: 'Đi dây điện mới', price: '150,000 - 250,000 VNĐ/điểm' },
                { name: 'Lắp đèn downlight', price: '200,000 - 400,000 VNĐ/bộ' },
                { name: 'Lắp đèn chùm', price: '500,000 - 2,000,000 VNĐ/bộ' }
            ],
            icon: 'fas fa-bolt'
        },
        {
            category: 'Trần',
            items: [
                { name: 'Trần thạch cao phẳng', price: '120,000 - 180,000 VNĐ/m²' },
                { name: 'Trần giật cấp', price: '220,000 - 350,000 VNĐ/m²' },
                { name: 'Trần 3D trang trí', price: '400,000 - 600,000 VNĐ/m²' }
            ],
            icon: 'fas fa-layer-group'
        },
        {
            category: 'Sàn',
            items: [
                { name: 'Sàn gỗ công nghiệp', price: '180,000 - 450,000 VNĐ/m²' },
                { name: 'Gạch ceramic 60x60', price: '150,000 - 300,000 VNĐ/m²' },
                { name: 'Đá marble', price: '350,000 - 550,000 VNĐ/m²' }
            ],
            icon: 'fas fa-th-large'
        },
        {
            category: 'Sơn & Hoàn Thiện',
            items: [
                { name: 'Sơn nội thất cao cấp', price: '50,000 - 90,000 VNĐ/m²' },
                { name: 'Sơn hiệu ứng', price: '100,000 - 200,000 VNĐ/m²' },
                { name: 'Giấy dán tường', price: '80,000 - 300,000 VNĐ/m²' }
            ],
            icon: 'fas fa-paint-roller'
        }
    ];

    // Design styles
    const designStyles = [
        {
            style: 'Hiện Đại',
            features: ['Tối giản', 'Màu trung tính', 'Ánh sáng LED', 'Vật liệu công nghiệp'],
            cost: '2,000,000 - 3,500,000 VNĐ/m²'
        },
        {
            style: 'Tân Cổ Điển',
            features: ['Phào chỉ', 'Màu ấm', 'Đèn chùm', 'Gỗ tự nhiên'],
            cost: '2,500,000 - 4,500,000 VNĐ/m²'
        },
        {
            style: 'Scandinavian',
            features: ['Sáng tạo', 'Gỗ sáng màu', 'Tối giản', 'Xanh tự nhiên'],
            cost: '1,800,000 - 3,000,000 VNĐ/m²'
        },
        {
            style: 'Indochine',
            features: ['Gỗ óc chó', 'Đèn mây tre', 'Màu đất', 'Decor dân gian'],
            cost: '2,200,000 - 3,800,000 VNĐ/m²'
        }
    ];

    // Cost saving tips
    const savingTips = [
        {
            tip: 'Giữ Lại Kết Cấu',
            description: 'Không phá tường, chỉ sửa bề mặt',
            saving: 'Tiết kiệm 20-30%',
            icon: 'fas fa-save'
        },
        {
            tip: 'Vật Liệu Hợp Lý',
            description: 'Chọn vật liệu tốt nhưng không quá cao cấp',
            saving: 'Tiết kiệm 15-25%',
            icon: 'fas fa-boxes'
        },
        {
            tip: 'Tự Mua Vật Liệu',
            description: 'Mua trực tiếp thay vì qua nhà thầu',
            saving: 'Tiết kiệm 10-15%',
            icon: 'fas fa-shopping-cart'
        },
        {
            tip: 'Thi Công Từng Giai Đoạn',
            description: 'Làm dần theo khả năng tài chính',
            saving: 'Linh hoạt chi phí',
            icon: 'fas fa-tasks'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Sửa chữa phòng khách 30m² hết bao nhiêu tiền?',
            answer: 'Chi phí sửa phòng khách 30m² dao động: Gói cơ bản 30-45 triệu, gói tiêu chuẩn 45-75 triệu, gói cao cấp 75-120 triệu. Giá cụ thể phụ thuộc vào mức độ cải tạo, vật liệu và thiết kế.'
        },
        {
            question: 'Thời gian sửa chữa phòng khách mất bao lâu?',
            answer: 'Thời gian thi công phụ thuộc gói: Gói cơ bản 7-10 ngày, gói tiêu chuẩn 15-20 ngày, gói cao cấp 30-45 ngày. Thời gian có thể kéo dài nếu thay đổi thiết kế hoặc chờ vật liệu.'
        },
        {
            question: 'Có cần thay đổi bố cục phòng khách không?',
            answer: 'Không bắt buộc. Sửa cơ bản giữ nguyên bố cục tiết kiệm chi phí. Thay đổi bố cục giúp tối ưu không gian nhưng tốn thêm 20-30% chi phí do phải phá dỡ và xây mới.'
        },
        {
            question: 'Nên chọn sàn gỗ hay gạch cho phòng khách?',
            answer: 'Sàn gỗ: ấm áp, đẹp mắt, giá 180-450K/m², cách âm tốt. Gạch: bền, dễ vệ sinh, giá 150-350K/m², mát hơn. Chọn tùy phong cách và khí hậu. Miền Bắc nên dùng gỗ, miền Nam có thể dùng gạch.'
        },
        {
            question: 'Chi phí trần thạch cao phòng khách bao nhiêu?',
            answer: 'Trần thạch cao: Trần phẳng 120-180K/m², trần giật cấp 220-350K/m², trần 3D trang trí 400-600K/m². Bao gồm vật liệu, thi công, đèn LED. Giá tăng nếu làm hình dạng phức tạp.'
        },
        {
            question: 'Có nên lắp điều hòa âm trần không?',
            answer: 'Điều hòa âm trần: đẹp, tiết kiệm không gian, giá 15-25 triệu/bộ 1 chiều, 20-35 triệu/bộ 2 chiều. Phù hợp phòng >25m², trần cao >2.8m. Nếu phòng nhỏ, dùng điều hòa treo tường tiết kiệm hơn.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">🛋️ Báo Giá Sửa Chữa Phòng Khách</h1>
                    <p className="section-subtitle">
                        Báo giá chi tiết cải tạo, nâng cấp phòng khách hiện đại
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">25-150M</div>
                            <div className="stat-label">Chi Phí Tổng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">7-45</div>
                            <div className="stat-label">Ngày Thi Công</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Gói Dịch Vụ</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">12-36</div>
                            <div className="stat-label">Tháng Bảo Hành</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Renovation Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📦 Gói Sửa Chữa Phòng Khách</h2>
                    <p className="section-subtitle">
                        3 gói dịch vụ phù hợp với mọi nhu cầu và ngân sách
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {renovationPackages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    className={`tab ${activeTab === pkg.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(pkg.id)}
                                >
                                    {pkg.name}
                                </button>
                            ))}
                        </div>

                        {renovationPackages.map((pkg) => (
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

            {/* Work Items Breakdown */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔨 Bảng Giá Từng Hạng Mục</h2>
                    <p className="section-subtitle">
                        Chi phí chi tiết cho từng công việc trong phòng khách
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

            {/* Design Styles */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🎨 Phong Cách Thiết Kế</h2>
                    <p className="section-subtitle">
                        Chi phí theo phong cách thiết kế phòng khách
                    </p>

                    <div className="styles-grid grid-2">
                        {designStyles.map((style, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>{style.style}</h3>
                                    <div className="style-cost">{style.cost}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {style.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <i className="fas fa-palette"></i>
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

            {/* Saving Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">💡 Mẹo Tiết Kiệm Chi Phí</h2>
                    <p className="section-subtitle">
                        Cách giảm chi phí mà vẫn đảm bảo chất lượng
                    </p>

                    <div className="tips-grid grid-2">
                        {savingTips.map((item, index) => (
                            <div key={index} className="tip-card card">
                                <div className="card-header">
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.tip}</h3>
                                </div>

                                <div className="card-body">
                                    <p>{item.description}</p>
                                    <div className="saving-amount">
                                        <i className="fas fa-arrow-down"></i>
                                        {item.saving}
                                    </div>
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

export default SuaChuaPhongKhach;
