// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/CaiTaoPhongTam.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CaiTaoPhongTamPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    const bathroomPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '20,000,000 - 35,000,000 VNĐ',
            description: 'Cải tạo WC cơ bản, tiết kiệm, đầy đủ chức năng',
            features: [
                'Chống thấm sàn & tường',
                'Gạch ốp lát 300x600mm',
                'Bồn cầu 1 khối Viglacera',
                'Lavabo treo tường',
                'Sen tắm đơn giản',
                'Gương phòng tắm',
                'Đèn LED downlight'
            ],
            items: [
                { name: 'Chống thấm toàn bộ', spec: '4-6m²', price: '3-5 triệu' },
                { name: 'Ốp lát gạch', spec: '15-20m²', price: '6-10 triệu' },
                { name: 'Thiết bị vệ sinh', spec: 'Cơ bản', price: '8-15 triệu' },
                { name: 'Phụ kiện & hoàn thiện', spec: 'Đầy đủ', price: '3-5 triệu' }
            ],
            bgColor: '#06b6d4'
        },
        {
            id: 'standard',
            name: 'Gói Tiêu Chuẩn',
            price: '35,000,000 - 60,000,000 VNĐ',
            description: 'WC hiện đại với thiết bị cao cấp',
            features: [
                'Chống thấm cao cấp Sika',
                'Gạch ốp lát 600x600mm',
                'Bồn cầu thông minh Inax',
                'Lavabo đặt bàn + tủ',
                'Sen cây + vòi sen',
                'Buồng tắm kính cường lực',
                'Gương tráng bạc + đèn LED',
                'Máy nước nóng'
            ],
            items: [
                { name: 'Chống thấm + xử lý', spec: '6-8m²', price: '5-8 triệu' },
                { name: 'Ốp lát gạch cao cấp', spec: '20-30m²', price: '10-18 triệu' },
                { name: 'Thiết bị vệ sinh', spec: 'Cao cấp', price: '15-25 triệu' },
                { name: 'Vách kính & phụ kiện', spec: 'Đầy đủ', price: '5-9 triệu' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '60,000,000 - 100,000,000 VNĐ',
            description: 'WC sang trọng với thiết bị nhập khẩu',
            features: [
                'Chống thấm epoxy cao cấp',
                'Gạch vân đá Marble 800x800mm',
                'Bồn cầu thông minh Toto',
                'Lavabo Kohler + tủ gỗ',
                'Sen tắm nhiệt độ Grohe',
                'Buồng tắm kính cao cấp',
                'Bồn tắm massage',
                'Gương thông minh LED',
                'Hệ thống sưởi ấm'
            ],
            items: [
                { name: 'Chống thấm chuyên sâu', spec: '8-12m²', price: '8-15 triệu' },
                { name: 'Ốp lát đá cao cấp', spec: '30-40m²', price: '20-35 triệu' },
                { name: 'Thiết bị nhập khẩu', spec: 'Cao cấp', price: '25-40 triệu' },
                { name: 'Nội thất & smart home', spec: 'Sang trọng', price: '7-10 triệu' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    const currentPackage = bathroomPackages.find(pkg => pkg.id === activeTab);

    const features = [
        {
            icon: 'fas fa-shield-alt',
            title: 'Chống Thấm',
            items: ['Xử lý bề mặt cũ', 'Sơn/màng chống thấm', 'Test áp lực 24-48h']
        },
        {
            icon: 'fas fa-toilet',
            title: 'Bồn Cầu',
            items: ['1 khối/2 khối', 'Xả nước tiết kiệm', 'Bồn cầu thông minh']
        },
        {
            icon: 'fas fa-sink',
            title: 'Lavabo',
            items: ['Treo tường/đặt bàn', 'Ceramic cao cấp', 'Tủ lavabo gỗ']
        },
        {
            icon: 'fas fa-shower',
            title: 'Sen Tắm',
            items: ['Sen cây/sen âm tường', 'Điều chỉnh nhiệt độ', 'Buồng tắm kính']
        }
    ];

    const bathroomStyles = [
        {
            style: 'WC Khô Ướt Liền',
            description: 'Tiết kiệm diện tích, phù hợp nhà nhỏ',
            area: '3-5m²',
            features: ['Lavabo + bồn cầu', 'Sen tắm + rèm', 'Thoát nước tập trung']
        },
        {
            style: 'WC Khô Ướt Tách',
            description: 'Khu vực khô và ướt riêng biệt',
            area: '5-8m²',
            features: ['Phòng tắm riêng', 'Khu vực lavabo', 'Thông thoáng hơn']
        },
        {
            style: 'WC Có Bồn Tắm',
            description: 'Sang trọng, thư giãn tối đa',
            area: '8-12m²',
            features: ['Bồn tắm ngâm', 'Sen tắm riêng', 'Không gian rộng rãi']
        },
        {
            style: 'WC Phong Cách Spa',
            description: 'Thiết kế resort, thư giãn cao cấp',
            area: '10-20m²',
            features: ['Bồn tắm nằm', 'Sauna nhỏ', 'Đá tự nhiên cao cấp']
        }
    ];

    const tips = [
        'Đầu tư chống thấm kỹ lưỡng tránh thấm dột',
        'Chọn gạch chống trơn, an toàn khi ướt',
        'Hệ thống thoát nước phải đủ dốc',
        'Lắp quạt hút/cửa sổ đảm bảo thông gió',
        'Chọn thiết bị vệ sinh tiết kiệm nước',
        'Bố trí ổ điện an toàn, tránh nước'
    ];

    const faqs = [
        {
            question: 'Cải tạo WC nhỏ 3m² hết bao nhiêu?',
            answer: 'WC 3m² cải tạo cơ bản khoảng 20-35 triệu, gói tiêu chuẩn 35-50 triệu. Chi phí bao gồm chống thấm, ốp lát, thiết bị vệ sinh cơ bản.'
        },
        {
            question: 'Có cần phá sàn để chống thấm không?',
            answer: 'Không nhất thiết phải phá sàn. Nếu sàn cũ còn tốt, có thể chống thấm trực tiếp. Nếu sàn bị nứt nhiều hoặc đã thấm, nên phá bỏ và làm lại để đảm bảo.'
        },
        {
            question: 'Thời gian cải tạo WC mất bao lâu?',
            answer: 'Thường mất 1-2 tuần. Bao gồm: 1-2 ngày tháo dỡ, 2-3 ngày chống thấm, 3-5 ngày ốp lát, 2-3 ngày lắp đặt thiết bị và hoàn thiện.'
        },
        {
            question: 'Nên chọn bồn cầu 1 khối hay 2 khối?',
            answer: 'Bồn cầu 1 khối dễ vệ sinh hơn, hiện đại nhưng giá cao hơn. Bồn cầu 2 khối giá rẻ, dễ sửa chữa nhưng khó vệ sinh phần nối. Nên chọn 1 khối nếu ngân sách cho phép.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-bath"></i>
                        Báo Giá Cải Tạo Phòng Tắm
                    </h1>
                    <p className="section-subtitle">
                        Cải tạo phòng tắm hiện đại, chống thấm hoàn hảo với chi phí minh bạch
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-box-open"></i>
                        Các Gói Cải Tạo Phòng Tắm
                    </h2>

                    <div className="tab-buttons">
                        {bathroomPackages.map((pkg) => (
                            <button
                                key={pkg.id}
                                className={`tab-btn ${activeTab === pkg.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(pkg.id)}
                            >
                                {pkg.name}
                            </button>
                        ))}
                    </div>

                    {currentPackage && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentPackage.bgColor}, ${currentPackage.bgColor}dd)` }}
                            >
                                <h3>{currentPackage.name}</h3>
                                <div className="price-range">{currentPackage.price}</div>
                                <p>{currentPackage.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Bao gồm:</h4>
                                    <ul className="info-list">
                                        {currentPackage.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info-section">
                                    <h4><i className="fas fa-list"></i> Chi tiết chi phí:</h4>
                                    <div className="item-list">
                                        {currentPackage.items.map((item, index) => (
                                            <div key={index} className="item-card">
                                                <div className="item-info">
                                                    <span className="item-name">{item.name}</span>
                                                    <span className="item-spec">{item.spec}</span>
                                                </div>
                                                <span className="item-price">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary">
                                        <i className="fas fa-phone"></i>
                                        Liên Hệ Báo Giá
                                    </a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                        <i className="fas fa-images"></i>
                                        Xem Thư Viện Mẫu
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-th"></i>
                        Các Hạng Mục Chính
                    </h2>
                    <div className="grid-4">
                        {features.map((feature, index) => (
                            <div key={index} className="info-card">
                                <i className={`${feature.icon} icon-large`}></i>
                                <h3>{feature.title}</h3>
                                <ul className="info-list">
                                    {feature.items.map((item, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-palette"></i>
                        Các Kiểu Bố Trí Phòng Tắm
                    </h2>
                    <div className="grid-4">
                        {bathroomStyles.map((style, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-home"></i>
                                        {style.style}
                                    </h3>
                                    <p>{style.description}</p>
                                    <div className="price-range">DT: {style.area}</div>
                                </div>
                                <div className="card-body">
                                    <div className="spaces">
                                        <h4>Đặc điểm:</h4>
                                        <ul>
                                            {style.features.map((feature, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Lưu Ý Khi Cải Tạo Phòng Tắm
                    </h2>
                    <div className="tips-section">
                        <ul>
                            {tips.map((tip, index) => (
                                <li key={index}>
                                    <i className="fas fa-check-circle"></i>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
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
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default CaiTaoPhongTamPage;
