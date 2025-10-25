// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/SuaChuaPhongNgu.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const SuaChuaPhongNguPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    const bedroomPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '2,500,000 - 4,500,000 VNĐ/m²',
            description: 'Sửa chữa phòng ngủ cơ bản, ấm cúng',
            features: [
                'Sơn tường màu nhẹ nhàng',
                'Trần thạch cao phẳng',
                'Đèn LED downlight',
                'Sàn gỗ công nghiệp 8mm',
                'Tủ quần áo MDF đơn giản',
                'Giường gỗ công nghiệp'
            ],
            items: [
                { name: 'Sơn tường', spec: '20-30m²', price: '2-5 triệu' },
                { name: 'Trần & đèn', spec: '12-20m²', price: '3-6 triệu' },
                { name: 'Sàn gỗ', spec: '12-20m²', price: '3-8 triệu' },
                { name: 'Tủ quần áo', spec: '2-3m dài', price: '8-15 triệu' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'standard',
            name: 'Gói Tiêu Chuẩn',
            price: '4,500,000 - 7,000,000 VNĐ/m²',
            description: 'Phòng ngủ hiện đại, tiện nghi đầy đủ',
            features: [
                'Sơn cao cấp 2 màu',
                'Trần thạch cao giật cấp',
                'Đèn LED + đèn ngủ',
                'Sàn gỗ công nghiệp 12mm',
                'Tủ quần áo âm tường',
                'Giường + tab đầu giường',
                'Rèm cửa chống nắng'
            ],
            items: [
                { name: 'Sơn & hoàn thiện', spec: '20-30m²', price: '4-8 triệu' },
                { name: 'Trần thạch cao', spec: '12-20m²', price: '4-10 triệu' },
                { name: 'Sàn gỗ cao cấp', spec: '12-20m²', price: '5-12 triệu' },
                { name: 'Nội thất hoàn chỉnh', spec: 'Bộ phòng ngủ', price: '20-40 triệu' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '7,000,000 - 12,000,000 VNĐ/m²',
            description: 'Phòng ngủ sang trọng, thư giãn tối đa',
            features: [
                'Sơn cao cấp kháng khuẩn',
                'Trần 3D cách âm',
                'Hệ thống đèn thông minh',
                'Sàn gỗ tự nhiên',
                'Tủ quần áo gỗ tự nhiên',
                'Giường cao cấp + nệm',
                'Bàn trang điểm',
                'Rèm tự động điều khiển',
                'Điều hòa âm trần'
            ],
            items: [
                { name: 'Sơn & trang trí cao cấp', spec: '20-30m²', price: '8-15 triệu' },
                { name: 'Trần cách âm', spec: '12-20m²', price: '10-20 triệu' },
                { name: 'Sàn gỗ tự nhiên', spec: '12-20m²', price: '15-30 triệu' },
                { name: 'Nội thất sang trọng', spec: 'Bộ cao cấp', price: '40-80 triệu' }
            ],
            bgColor: '#ec4899'
        }
    ];

    const currentPackage = bedroomPackages.find(pkg => pkg.id === activeTab);

    const features = [
        {
            icon: 'fas fa-bed',
            title: 'Giường Ngủ',
            items: ['Gỗ công nghiệp MDF', 'Gỗ tự nhiên cao cấp', 'Kích thước phù hợp']
        },
        {
            icon: 'fas fa-door-closed',
            title: 'Tủ Quần Áo',
            items: ['Tủ cánh lùa/mở', 'Âm tường tiết kiệm diện tích', 'Phụ kiện cao cấp']
        },
        {
            icon: 'fas fa-moon',
            title: 'Ánh Sáng',
            items: ['Đèn chính trần', 'Đèn ngủ đầu giường', 'Đèn tủ thông minh']
        },
        {
            icon: 'fas fa-fan',
            title: 'Thông Gió',
            items: ['Điều hòa tiết kiệm', 'Quạt trần hiện đại', 'Cửa sổ thoáng mát']
        }
    ];

    const designStyles = [
        {
            style: 'Phong Cách Tối Giản',
            description: 'Đơn giản, gọn gàng, tập trung nghỉ ngơi',
            priceRange: '3-6 triệu/m²',
            colors: ['Trắng', 'Xám nhạt', 'Be'],
            suitable: ['Phòng nhỏ', 'Người trẻ', 'Căn hộ hiện đại']
        },
        {
            style: 'Phong Cách Bắc Âu',
            description: 'Ấm áp, gỗ sáng màu, ánh sáng tự nhiên',
            priceRange: '4-7 triệu/m²',
            colors: ['Trắng', 'Gỗ sồi', 'Xanh pastel'],
            suitable: ['Gia đình trẻ', 'Phòng rộng', 'Yêu thiên nhiên']
        },
        {
            style: 'Phong Cách Vintage',
            description: 'Cổ điển, ấm cúng, nội thất gỗ tối màu',
            priceRange: '5-10 triệu/m²',
            colors: ['Nâu gỗ', 'Trắng kem', 'Vàng đồng'],
            suitable: ['Người trung niên', 'Yêu cổ điển', 'Phòng lớn']
        },
        {
            style: 'Phong Cách Hiện Đại',
            description: 'Sang trọng, công nghệ thông minh, tiện nghi',
            priceRange: '7-12 triệu/m²',
            colors: ['Đen', 'Trắng', 'Xám', 'Vàng đồng'],
            suitable: ['Doanh nhân', 'Ưa công nghệ', 'Ngân sách cao']
        }
    ];

    const tips = [
        'Chọn màu sơn nhẹ nhàng, tạo cảm giác thư giãn',
        'Bố trí giường tránh đối diện cửa chính',
        'Đèn ngủ vàng ấm giúp dễ ngủ hơn',
        'Tủ quần áo âm tường tiết kiệm diện tích',
        'Sử dụng rèm cửa dày chống nắng, cách âm'
    ];

    const faqs = [
        {
            question: 'Sửa chữa phòng ngủ 15m² hết bao nhiêu?',
            answer: 'Phòng ngủ 15m² sửa chữa cơ bản khoảng 37-67 triệu. Gói tiêu chuẩn 67-105 triệu. Gói cao cấp 105-180 triệu tùy nội thất và thiết kế.'
        },
        {
            question: 'Có nên làm tủ quần áo âm tường không?',
            answer: 'Nên làm nếu phòng nhỏ. Tủ âm tường tiết kiệm diện tích, tối ưu không gian, tạo cảm giác rộng rãi hơn. Chi phí cao hơn tủ rời nhưng hiệu quả lâu dài.'
        },
        {
            question: 'Thời gian sửa chữa phòng ngủ mất bao lâu?',
            answer: 'Thường mất 1.5-2 tuần. Bao gồm: 2-3 ngày sơn & trần, 2-3 ngày sàn, 3-5 ngày lắp đặt tủ quần áo, 2-3 ngày hoàn thiện.'
        },
        {
            question: 'Nên chọn sàn gỗ hay gạch cho phòng ngủ?',
            answer: 'Nên chọn sàn gỗ vì ấm hơn, êm chân hơn, tạo cảm giác ấm cúng. Gạch lạnh, dễ trơn khi ướt. Nếu ngân sách hạn chế, chọn sàn gỗ công nghiệp.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-bed"></i>
                        Báo Giá Sửa Chữa Phòng Ngủ
                    </h1>
                    <p className="section-subtitle">
                        Cải tạo phòng ngủ ấm cúng, thư giãn với chi phí hợp lý và chất lượng đảm bảo
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-box-open"></i>
                        Các Gói Sửa Chữa Phòng Ngủ
                    </h2>

                    <div className="tab-buttons">
                        {bedroomPackages.map((pkg) => (
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
                        Phong Cách Thiết Kế
                    </h2>
                    <div className="grid-4">
                        {designStyles.map((style, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-home"></i>
                                        {style.style}
                                    </h3>
                                    <p>{style.description}</p>
                                    <div className="price-range">{style.priceRange}</div>
                                </div>
                                <div className="card-body">
                                    <div className="materials">
                                        <h4>Màu sắc:</h4>
                                        <div className="tags">
                                            {style.colors.map((color, i) => (
                                                <span key={i} className="tag">{color}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="spaces">
                                        <h4>Phù hợp:</h4>
                                        <ul>
                                            {style.suitable.map((item, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {item}
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
                        Lưu Ý Khi Sửa Chữa Phòng Ngủ
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

export default SuaChuaPhongNguPage;
