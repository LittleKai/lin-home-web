// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const NhomKinhPage = () => {
    const [activeTab, setActiveTab] = useState('doors');
    const [activeFaq, setActiveFaq] = useState(null);

    // Aluminum and glass types
    const aluminumTypes = [
        {
            id: 'doors',
            name: 'Cửa Nhôm Kính',
            price: '450,000 - 850,000 VNĐ/m²',
            description: 'Cửa đi, cửa sổ nhôm kính cho nhà ở, văn phòng',
            features: [
                'Nhôm Xingfa/Việt Pháp profile',
                'Kính cường lực 6-8mm',
                'Phụ kiện chính hãng (khóa, bản lề)',
                'Gioăng cao su chống thấm',
                'Bảo hành 2-3 năm'
            ],
            applications: [
                { type: 'Cửa chính', price: '550-850K', specs: 'Kính 8mm + khóa vân tay' },
                { type: 'Cửa ban công', price: '450-650K', specs: 'Kính 6mm + khóa thường' },
                { type: 'Cửa sổ', price: '450-600K', specs: 'Mở trượt/mở quay' },
                { type: 'Cửa phòng', price: '500-700K', specs: 'Kính mờ + khóa' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'curtain',
            name: 'Vách Kính & Mặt Dựng',
            price: '850,000 - 1,500,000 VNĐ/m²',
            description: 'Vách kính ngăn phòng, mặt dựng tòa nhà',
            features: [
                'Hệ khung nhôm structural glazing',
                'Kính hộp cách âm/cách nhiệt',
                'Seal silicone chống thấm',
                'Thiết kế theo yêu cầu',
                'Bảo hành 3-5 năm'
            ],
            applications: [
                { type: 'Mặt dựng tòa nhà', price: '1,200-1,500K', specs: 'Kính Low-E + hệ spider' },
                { type: 'Vách văn phòng', price: '850-1,200K', specs: 'Kính hộp 2 lớp' },
                { type: 'Showroom', price: '900-1,300K', specs: 'Kính 10-12mm' },
                { type: 'Nhà kính', price: '1,000-1,400K', specs: 'Kính chống nắng' }
            ],
            bgColor: '#059669'
        },
        {
            id: 'premium',
            name: 'Nhôm Kính Cao Cấp',
            price: '1,200,000 - 1,800,000 VNĐ/m²',
            description: 'Hệ nhôm kính cao cấp với công nghệ tiên tiến',
            features: [
                'Profile nhôm nhập khẩu',
                'Kính Low-E tiết kiệm năng lượng',
                'Hệ thống cách âm tốt (>40dB)',
                'Phụ kiện Châu Âu',
                'Bảo hành 5-7 năm'
            ],
            applications: [
                { type: 'Biệt thự cao cấp', price: '1,400-1,800K', specs: 'Hệ Schuco/Reynaers' },
                { type: 'Penthouse', price: '1,300-1,700K', specs: 'Kính 3 lớp Low-E' },
                { type: 'Khách sạn 5*', price: '1,200-1,600K', specs: 'Cách âm 42dB+' },
                { type: 'Văn phòng hạng A', price: '1,250-1,650K', specs: 'Kính an toàn' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Đo Đạc',
            description: 'Đo kích thước chính xác, kiểm tra kết cấu, thiết kế bản vẽ',
            duration: '1 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Gia Công Khung Nhôm',
            description: 'Cắt, gia công profile nhôm theo kích thước, lắp phụ kiện',
            duration: '2-3 ngày',
            icon: 'fas fa-cut'
        },
        {
            step: 3,
            title: 'Lắp Đặt Khung',
            description: 'Lắp khung nhôm, cố định chắc chắn, đảm bảo vuông góc',
            duration: '1-2 ngày',
            icon: 'fas fa-screwdriver'
        },
        {
            step: 4,
            title: 'Lắp Kính & Kín Gió',
            description: 'Lắp kính, seal silicone chống thấm, gioăng kín gió',
            duration: '1-2 ngày',
            icon: 'fas fa-wine-glass'
        },
        {
            step: 5,
            title: 'Kiểm Tra & Hoàn Thiện',
            description: 'Kiểm tra độ kín, vận hành trơn tru, vệ sinh hoàn thiện',
            duration: '0.5 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Glass types
    const glassTypes = [
        {
            type: 'Kính Cường Lực',
            specs: '6-12mm',
            features: ['Độ bền cao', 'An toàn khi vỡ', 'Chịu lực tốt'],
            price: '250,000 - 450,000 VNĐ/m²',
            suitable: ['Cửa đi', 'Cửa sổ', 'Vách ngăn'],
            icon: 'fas fa-shield-alt'
        },
        {
            type: 'Kính Hộp',
            specs: '2-3 lớp (5+6A+5)',
            features: ['Cách âm tốt', 'Cách nhiệt', 'Chống ngưng tụ'],
            price: '450,000 - 750,000 VNĐ/m²',
            suitable: ['Mặt dựng', 'Văn phòng', 'Phòng ngủ'],
            icon: 'fas fa-layer-group'
        },
        {
            type: 'Kính Low-E',
            specs: '6-8mm phủ màng',
            features: ['Tiết kiệm năng lượng', 'Chống nắng', 'Giữ nhiệt'],
            price: '550,000 - 850,000 VNĐ/m²',
            suitable: ['Biệt thự', 'Cao ốc', 'Nhà kính'],
            icon: 'fas fa-sun'
        },
        {
            type: 'Kính An Toàn',
            specs: 'Laminated 6.38-10.38mm',
            features: ['Chống đạn nhẹ', 'Chống va đập', 'Giữ mảnh khi vỡ'],
            price: '650,000 - 1,200,000 VNĐ/m²',
            suitable: ['Ngân hàng', 'Jewelry', 'Cao cấp'],
            icon: 'fas fa-lock'
        }
    ];

    // Aluminum profiles brands
    const aluminumBrands = [
        {
            brand: 'Xingfa (Trung Quốc)',
            pros: ['Giá hợp lý', 'Phổ biến nhất VN', 'Dễ thay phụ kiện'],
            quality: 'Tốt',
            price: 'Trung bình',
            warranty: '2-3 năm'
        },
        {
            brand: 'Việt Pháp (Việt Nam)',
            pros: ['Chất lượng ổn', 'Giá cạnh tranh', 'Hỗ trợ tốt'],
            quality: 'Tốt',
            price: 'Trung bình',
            warranty: '2-3 năm'
        },
        {
            brand: 'Schuco (Đức)',
            pros: ['Chất lượng cao', 'Cách âm tốt', 'Bền lâu'],
            quality: 'Rất tốt',
            price: 'Cao',
            warranty: '5-7 năm'
        },
        {
            brand: 'Reynaers (Bỉ)',
            pros: ['Luxury', 'Công nghệ tiên tiến', 'Thiết kế đẹp'],
            quality: 'Xuất sắc',
            price: 'Rất cao',
            warranty: '5-10 năm'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nên chọn nhôm Xingfa hay Việt Pháp?',
            answer: 'Cả hai đều tốt cho dân dụng. Xingfa phổ biến hơn, dễ tìm phụ kiện thay thế. Việt Pháp có độ dày thành profile tốt hơn một chút. Giá tương đương nhau. Nên chọn dựa vào uy tín đơn vị thi công.'
        },
        {
            question: 'Kính hộp có cách âm tốt hơn kính đơn bao nhiêu?',
            answer: 'Kính đơn 6mm: ~25-28dB. Kính hộp 5+6A+5: ~35-38dB. Kính hộp 3 lớp Low-E: ~40-45dB. Tăng khoảng 10-15dB so với kính đơn, đủ cách âm cho môi trường đô thị.'
        },
        {
            question: 'Chi phí làm cửa nhôm kính cho căn hộ 80m²?',
            answer: 'Căn hộ 80m² thường có 4-6 cửa sổ + 1 cửa ban công. Ước tính: 15-25m² nhôm kính. Chi phí: Nhôm Xingfa 7-12 triệu, nhôm cao cấp 15-25 triệu, tùy loại kính và thiết kế.'
        },
        {
            question: 'Thời gian thi công nhôm kính mất bao lâu?',
            answer: 'Cửa đơn: 1-2 ngày. Vách kính lớn: 3-5 ngày. Mặt dựng tòa nhà: 1-3 tuần tùy diện tích. Thời gian bao gồm gia công + lắp đặt + hoàn thiện.'
        },
        {
            question: 'Nhôm kính có cách âm tốt không?',
            answer: 'Cửa nhôm kính thường: 25-30dB. Kính hộp cách âm: 35-40dB. Hệ cao cấp với kính Low-E 3 lớp: 40-45dB. Đủ cho yêu cầu dân dụng và văn phòng, nhưng chưa bằng cửa gỗ đặc.'
        },
        {
            question: 'Chi phí bảo dưỡng nhôm kính như thế nào?',
            answer: 'Vệ sinh định kỳ: 20,000-50,000 VNĐ/m²/năm. Thay gioăng: 50,000-100,000 VNĐ/m²/5 năm. Sơn lại khung: 150,000-250,000 VNĐ/m²/10 năm. Chi phí thấp hơn nhiều so với cửa gỗ.'
        }
    ];

    const currentType = aluminumTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-door-open icon-door"></i>
                        Báo Giá Nhôm Kính
                    </h1>
                    <p className="section-subtitle">
                        Thi công cửa nhôm kính, vách kính, mặt dựng chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Chất Lượng Cao</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-safety"></i>
                            <span>Bảo Hành Dài Hạn</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Thợ Chuyên Nghiệp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-truck"></i>
                            <span>Giao Hàng Nhanh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aluminum Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Nhôm Kính & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        Giải pháp nhôm kính cho từng nhu cầu
                    </p>

                    {/* Tabs */}
                    <div className="tabs">
                        {aluminumTypes.map(type => (
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
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Applications Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-home"></i> Ứng dụng & giá:</h4>
                                    <div className="item-list">
                                        {currentType.applications.map((app, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{app.type}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">{app.specs}</span>
                                                    <span className="item-price-extended">{app.price}/m²</span>
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
                                        <i className="fas fa-calculator"></i>
                                        Tính Chi Phí
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Glass Types */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-wine-glass icon-glass"></i>
                        Các Loại Kính
                    </h2>
                    <p className="section-subtitle">
                        Chọn loại kính phù hợp với mục đích sử dụng
                    </p>

                    <div className="grid-4">
                        {glassTypes.map((glass, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={glass.icon}></i>
                                    {glass.type}
                                </h3>
                                <p className="subtitle">{glass.specs}</p>
                                <h4>Đặc điểm:</h4>
                                <ul>
                                    {glass.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Phù hợp:</h4>
                                <div className="tags">
                                    {glass.suitable.map((item, i) => (
                                        <span key={i} className="tag">{item}</span>
                                    ))}
                                </div>
                                <span className="standard">{glass.price}</span>
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
                        5 bước lắp đặt nhôm kính chuyên nghiệp
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

            {/* Aluminum Brands */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-award icon-quality"></i>
                        Thương Hiệu Nhôm
                    </h2>
                    <p className="section-subtitle">
                        Các thương hiệu nhôm phổ biến trên thị trường
                    </p>

                    <div className="grid-4">
                        {aluminumBrands.map((brand, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-certificate"></i>
                                    {brand.brand}
                                </h3>
                                <div className="brand-info">
                                    <p><strong>Chất lượng:</strong> {brand.quality}</p>
                                    <p><strong>Giá:</strong> {brand.price}</p>
                                    <p><strong>Bảo hành:</strong> {brand.warranty}</p>
                                </div>
                                <h4>Ưu điểm:</h4>
                                <ul>
                                    {brand.pros.map((pro, i) => (
                                        <li key={i}>
                                            <i className="fas fa-plus-circle"></i>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
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
                        Giải đáp thắc mắc về nhôm kính
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

export default NhomKinhPage;