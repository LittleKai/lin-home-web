// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/CaiTaoPhongBep.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CaiTaoPhongBepPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    const kitchenPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '30,000,000 - 50,000,000 VNĐ',
            description: 'Phù hợp cải tạo bếp đơn giản, tiết kiệm',
            features: [
                'Tủ bếp MDF chống ẩm',
                'Mặt bàn bếp nhân tạo Acrylic',
                'Chậu rửa inox 304',
                'Vòi rửa đồng mạ crom',
                'Gạch ốp 300x600mm',
                'Đèn LED âm trần'
            ],
            items: [
                { name: 'Tủ bếp dưới', spec: '3-4m dài', price: '15-20 triệu' },
                { name: 'Tủ bếp trên', spec: '2-3m dài', price: '8-12 triệu' },
                { name: 'Ốp lát gạch', spec: '10-15m²', price: '5-8 triệu' },
                { name: 'Thiết bị & phụ kiện', spec: 'Cơ bản', price: '2-10 triệu' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Gói Tiêu Chuẩn',
            price: '50,000,000 - 80,000,000 VNĐ',
            description: 'Bếp hiện đại với thiết bị đầy đủ tiện nghi',
            features: [
                'Tủ bếp gỗ công nghiệp cao cấp',
                'Mặt đá nhân tạo Quartz',
                'Bếp từ/gas âm cao cấp',
                'Máy hút mùi 7 tấc',
                'Chậu rửa Inox 304 cao cấp',
                'Gạch ốp 600x600mm',
                'Hệ thống đèn LED thông minh'
            ],
            items: [
                { name: 'Tủ bếp tổng thể', spec: '5-7m dài', price: '30-45 triệu' },
                { name: 'Bếp từ & máy hút', spec: 'Cao cấp', price: '10-15 triệu' },
                { name: 'Ốp lát & hoàn thiện', spec: '15-20m²', price: '8-15 triệu' },
                { name: 'Phụ kiện thông minh', spec: 'Đầy đủ', price: '2-5 triệu' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '80,000,000 - 150,000,000 VNĐ',
            description: 'Bếp sang trọng với đầy đủ thiết bị hiện đại',
            features: [
                'Tủ bếp gỗ tự nhiên/Acrylic bóng gương',
                'Mặt đá Granite/Marble tự nhiên',
                'Bếp từ đôi cao cấp',
                'Máy hút mùi âm trần',
                'Máy rửa bát nhập khẩu',
                'Tủ lạnh âm tủ',
                'Gạch cao cấp/Kính ốp bếp',
                'Hệ thống đèn LED điều khiển'
            ],
            items: [
                { name: 'Tủ bếp cao cấp', spec: '7-10m dài', price: '50-80 triệu' },
                { name: 'Thiết bị nhập khẩu', spec: 'Đầy đủ', price: '20-40 triệu' },
                { name: 'Ốp lát cao cấp', spec: '20-30m²', price: '10-20 triệu' },
                { name: 'Smart home & accessories', spec: 'Cao cấp', price: '5-10 triệu' }
            ],
            bgColor: '#f59e0b'
        }
    ];

    const currentPackage = kitchenPackages.find(pkg => pkg.id === activeTab);

    const features = [
        {
            icon: 'fas fa-door-open',
            title: 'Tủ Bếp',
            items: ['Gỗ công nghiệp MDF/MFC', 'Phủ Melamine/Acrylic', 'Phụ kiện Blum/Hafele']
        },
        {
            icon: 'fas fa-mountain',
            title: 'Mặt Bếp',
            items: ['Đá nhân tạo Acrylic/Quartz', 'Đá tự nhiên Granite', 'Inox 304 dày']
        },
        {
            icon: 'fas fa-fire',
            title: 'Bếp & Hút Mùi',
            items: ['Bếp từ/gas âm', 'Máy hút mùi 7-9 tấc', 'Tiết kiệm điện năng']
        },
        {
            icon: 'fas fa-faucet',
            title: 'Chậu & Vòi',
            items: ['Chậu inox 304', 'Vòi rửa cao cấp', 'Bộ lọc nước']
        }
    ];

    const layoutStyles = [
        {
            style: 'Bếp Chữ I',
            description: 'Phù hợp không gian hẹp, thuận tiện di chuyển',
            area: '4-6m²',
            image: 'kitchen-i.jpg'
        },
        {
            style: 'Bếp Chữ L',
            description: 'Tối ưu diện tích, bố trí linh hoạt',
            area: '6-10m²',
            image: 'kitchen-l.jpg'
        },
        {
            style: 'Bếp Chữ U',
            description: 'Không gian rộng, thuận tiện nấu nướng',
            area: '10-15m²',
            image: 'kitchen-u.jpg'
        },
        {
            style: 'Bếp Đảo',
            description: 'Hiện đại, sang trọng, có quầy bar',
            area: '15-25m²',
            image: 'kitchen-island.jpg'
        }
    ];

    const tips = [
        'Chọn vật liệu chống ẩm, dễ vệ sinh',
        'Bố trí tam giác công năng: bếp - rửa - tủ lạnh',
        'Đầu tư hệ thống chiếu sáng đầy đủ',
        'Lắp đặt ổ cắm điện hợp lý',
        'Chọn màu sắc tươi sáng, dễ phối hợp'
    ];

    const faqs = [
        {
            question: 'Cải tạo bếp nhỏ cần bao nhiêu tiền?',
            answer: 'Bếp nhỏ 4-6m² cải tạo cơ bản khoảng 30-50 triệu. Gói tiêu chuẩn 50-80 triệu. Chi phí phụ thuộc vào chất lượng tủ bếp và thiết bị.'
        },
        {
            question: 'Thời gian cải tạo bếp mất bao lâu?',
            answer: 'Thông thường mất 2-4 tuần tùy quy mô. Bao gồm: 3-5 ngày tháo dỡ & xử lý, 5-7 ngày lắp đặt tủ bếp, 3-5 ngày hoàn thiện.'
        },
        {
            question: 'Có cần xin giấy phép cải tạo bếp không?',
            answer: 'Thường không cần nếu chỉ cải tạo nội thất. Tuy nhiên nếu thay đổi kết cấu, phá tường thì cần xin phép ban quản lý (chung cư) hoặc phường (nhà riêng).'
        },
        {
            question: 'Nên chọn tủ bếp trên hay dưới?',
            answer: 'Nên có cả hai. Tủ dưới chứa đồ nặng, tủ trên chứa đồ nhẹ. Nếu ngân sách hạn chế, ưu tiên tủ dưới và mặt bếp trước, tủ trên có thể làm sau.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-kitchen-set"></i>
                        Báo Giá Cải Tạo Phòng Bếp
                    </h1>
                    <p className="section-subtitle">
                        Cải tạo nhà bếp hiện đại, tiện nghi với chi phí minh bạch và chất lượng đảm bảo
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-box-open"></i>
                        Các Gói Cải Tạo Bếp
                    </h2>

                    <div className="tab-buttons">
                        {kitchenPackages.map((pkg) => (
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
                        Các Kiểu Bố Trí Bếp
                    </h2>
                    <div className="grid-4">
                        {layoutStyles.map((layout, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-home"></i>
                                        {layout.style}
                                    </h3>
                                    <p>{layout.description}</p>
                                    <div className="price-range">DT: {layout.area}</div>
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
                        Lưu Ý Khi Cải Tạo Bếp
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

export default CaiTaoPhongBepPage;
