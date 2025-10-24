// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../thiet-ke/ThietKePage.css';
import '../../thi-cong/ThiCongHangMuc.css';
import '../BaoGiaThietKeThiCong.css';

const ThiCongHoanThienPricingPage = () => {
    const [activeCategory, setActiveCategory] = useState('co-ban');
    const [activeFaq, setActiveFaq] = useState(null);

    // Finishing packages
    const finishingPackages = [
        {
            id: 'co-ban',
            category: 'co-ban',
            title: 'Gói Cơ Bản',
            price: '1,800,000 - 2,500,000 VNĐ/m²',
            description: 'Hoàn thiện cơ bản với vật liệu phổ thông',
            includes: [
                'Ốp lát gạch men cơ bản',
                'Sơn nước nội ngoại thất',
                'Trần thạch cao phẳng',
                'Cửa gỗ composite',
                'Điện nước cơ bản',
                'Thiết bị vệ sinh phổ thông'
            ],
            materials: [
                'Gạch Đồng Tâm 60x60',
                'Sơn Dulux nội thất',
                'Thạch cao Knauf',
                'Cửa Composite Eurowindow',
                'Thiết bị TOTO cơ bản'
            ],
            duration: '30-45 ngày',
            warranty: '12-24 tháng',
            bgColor: '#10b981'
        },
        {
            id: 'cao-cap',
            category: 'cao-cap',
            title: 'Gói Cao Cấp',
            price: '2,800,000 - 3,800,000 VNĐ/m²',
            description: 'Hoàn thiện cao cấp với vật liệu chất lượng',
            includes: [
                'Ốp lát gạch granite, ceramic cao cấp',
                'Sơn nước cao cấp, sơn hiệu ứng',
                'Trần thạch cao tạo hình',
                'Cửa gỗ tự nhiên hoặc composite cao cấp',
                'Hệ thống điện thông minh',
                'Thiết bị vệ sinh cao cấp'
            ],
            materials: [
                'Gạch Viglacera, Granite Thanh Hóa',
                'Sơn Jotun, Nippon',
                'Trần Armstrong, Rockfon',
                'Cửa gỗ Veneer, HDF',
                'Thiết bị TOTO, Inax cao cấp'
            ],
            duration: '45-60 ngày',
            warranty: '24-36 tháng',
            bgColor: '#667eea'
        },
        {
            id: 'luxury',
            category: 'luxury',
            title: 'Gói Luxury',
            price: '4,500,000 - 6,500,000 VNĐ/m²',
            description: 'Hoàn thiện đẳng cấp với vật liệu nhập khẩu',
            includes: [
                'Ốp lát đá marble, granite nhập khẩu',
                'Sơn hiệu ứng đặc biệt, giấy dán tường',
                'Trần thạch cao nghệ thuật, trần xuyên sáng',
                'Cửa gỗ tự nhiên cao cấp, cửa thép vân gỗ',
                'Hệ thống smarthome hoàn chỉnh',
                'Thiết bị vệ sinh luxury'
            ],
            materials: [
                'Marble Carrara, Granite Brazil',
                'Sơn Benjamin Moore, Sherwin Williams',
                'Trần Hunter Douglas, USG Boral',
                'Cửa gỗ Sồi Mỹ, Walnut',
                'Thiết bị Kohler, Duravit'
            ],
            duration: '60-90 ngày',
            warranty: '36-60 tháng',
            bgColor: '#f59e0b'
        }
    ];

    // Finishing categories
    const finishingCategories = [
        {
            category: 'op-lat',
            title: 'Ốp lát gạch đá',
            items: [
                { name: 'Gạch men 60x60 cơ bản', price: '180,000 - 250,000 VNĐ/m²' },
                { name: 'Gạch granite 80x80', price: '280,000 - 400,000 VNĐ/m²' },
                { name: 'Đá marble tự nhiên', price: '800,000 - 1,500,000 VNĐ/m²' },
                { name: 'Gạch mosaic cao cấp', price: '350,000 - 600,000 VNĐ/m²' }
            ],
            icon: 'fas fa-th-large',
            color: '#10b981'
        },
        {
            category: 'son-nuoc',
            title: 'Sơn nước',
            items: [
                { name: 'Sơn nước nội thất cơ bản', price: '45,000 - 65,000 VNĐ/m²' },
                { name: 'Sơn nước cao cấp Jotun', price: '75,000 - 95,000 VNĐ/m²' },
                { name: 'Sơn hiệu ứng đặc biệt', price: '120,000 - 200,000 VNĐ/m²' },
                { name: 'Giấy dán tường cao cấp', price: '150,000 - 300,000 VNĐ/m²' }
            ],
            icon: 'fas fa-paint-brush',
            color: '#667eea'
        },
        {
            category: 'tran',
            title: 'Trần thạch cao',
            items: [
                { name: 'Trần thạch cao phẳng', price: '120,000 - 180,000 VNĐ/m²' },
                { name: 'Trần thạch cao tạo hình', price: '200,000 - 350,000 VNĐ/m²' },
                { name: 'Trần xuyên sáng', price: '450,000 - 800,000 VNĐ/m²' },
                { name: 'Trần nhôm Clip-in', price: '280,000 - 450,000 VNĐ/m²' }
            ],
            icon: 'fas fa-layer-group',
            color: '#f59e0b'
        },
        {
            category: 'cua',
            title: 'Cửa & Khung',
            items: [
                { name: 'Cửa gỗ composite', price: '1,200,000 - 2,000,000 VNĐ/cánh' },
                { name: 'Cửa gỗ tự nhiên', price: '2,500,000 - 4,500,000 VNĐ/cánh' },
                { name: 'Cửa kính cường lực', price: '800,000 - 1,500,000 VNĐ/m²' },
                { name: 'Cửa cuốn tự động', price: '3,500,000 - 6,000,000 VNĐ/cánh' }
            ],
            icon: 'fas fa-door-open',
            color: '#8b5cf6'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Hoàn thiện bao gồm những hạng mục gì?',
            answer: 'Hoàn thiện bao gồm: ốp lát gạch, sơn tường, làm trần, lắp cửa, hệ thống điện nước, thiết bị vệ sinh, thi công nội thất cơ bản.'
        },
        {
            id: 2,
            question: 'Thời gian hoàn thiện mất bao lâu?',
            answer: 'Gói cơ bản: 30-45 ngày, Gói cao cấp: 45-60 ngày, Gói luxury: 60-90 ngày. Tùy thuộc diện tích và độ phức tạp.'
        },
        {
            id: 3,
            question: 'Có thể thay đổi vật liệu trong quá trình thi công không?',
            answer: 'Có thể thay đổi nhưng phải thông báo trước ít nhất 3-5 ngày và sẽ điều chỉnh lại dự toán chi phí. Thay đổi quá nhiều có thể ảnh hưởng đến tiến độ chung.'
        },
        {
            id: 4,
            question: 'Vật liệu có đảm bảo chất lượng không?',
            answer: 'Sử dụng vật liệu chính hãng từ các thương hiệu uy tín: Viglacera, Đồng Tâm, Dulux, Jotun, TOTO, Inax... có đầy đủ tem chứng nhận và bảo hành.'
        },
        {
            id: 5,
            question: 'Có bảo hành hoàn thiện không?',
            answer: 'Có bảo hành: chống thấm 3 năm, sơn tường 2 năm, ốp lát gạch 2 năm, hệ thống điện nước 1 năm và hỗ trợ bảo trì định kỳ.'
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const currentPackage = finishingPackages.find(pkg => pkg.id === activeCategory);

    return (
        <div className="thiet-ke-page">
            {/* Finishing Packages */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🎨 Gói Hoàn Thiện 2025</h2>
                        <p>Lựa chọn gói hoàn thiện phù hợp với ngân sách và yêu cầu</p>
                    </div>

                    <div className="pricing-tabs">
                        {finishingPackages.map(pkg => (
                            <button
                                key={pkg.id}
                                className={`pricing-tab ${activeCategory === pkg.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(pkg.id)}
                            >
                                {pkg.title}
                            </button>
                        ))}
                    </div>

                    {currentPackage && (
                        <div className="pricing-detail">
                            <div className="pricing-card" style={{ borderColor: currentPackage.bgColor }}>
                                <div className="pricing-header" style={{ background: currentPackage.bgColor }}>
                                    <h3>{currentPackage.title}</h3>
                                    <div className="pricing-amount">{currentPackage.price}</div>
                                    <p>{currentPackage.description}</p>
                                </div>

                                <div className="pricing-body">
                                    <div className="pricing-grid">
                                        <div className="pricing-column">
                                            <h4>🏗️ Bao gồm hạng mục:</h4>
                                            <ul>
                                                {currentPackage.includes.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pricing-column">
                                            <h4>🧱 Vật liệu sử dụng:</h4>
                                            <ul>
                                                {currentPackage.materials.map((material, index) => (
                                                    <li key={index}>{material}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pricing-meta">
                                        <div className="meta-item">
                                            <i className="far fa-clock"></i>
                                            <span>Thời gian: {currentPackage.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <i className="fas fa-shield-alt"></i>
                                            <span>Bảo hành: {currentPackage.warranty}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Detailed Pricing by Category */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2>📋 Bảng Giá Chi Tiết Theo Hạng Mục</h2>
                        <p>Đơn giá từng hạng mục hoàn thiện cụ thể</p>
                    </div>

                    <div className="services-grid">
                        {finishingCategories.map((category, index) => (
                            <div key={index} className="service-card">
                                <div className="service-header">
                                    <div
                                        className="service-icon"
                                        style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` }}
                                    >
                                        <i className={category.icon}></i>
                                    </div>
                                </div>

                                <h3>{category.title}</h3>

                                <div className="pricing-items">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="pricing-item">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                    ))}
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
                        <p>Giải đáp những thắc mắc về thi công hoàn thiện</p>
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

export default ThiCongHoanThienPricingPage;