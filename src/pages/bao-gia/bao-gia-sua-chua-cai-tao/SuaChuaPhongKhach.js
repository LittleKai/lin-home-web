// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/SuaChuaPhongKhach.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const SuaChuaPhongKhachPage = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [activeFaq, setActiveFaq] = useState(null);

    const livingRoomPackages = [
        {
            id: 'basic',
            name: 'Gói Cơ Bản',
            price: '3,000,000 - 5,000,000 VNĐ/m²',
            description: 'Sửa chữa phòng khách cơ bản, tươi mới',
            features: [
                'Sơn lại tường 2 lớp',
                'Sửa chữa trần cũ',
                'Lắp đèn LED downlight',
                'Sàn gỗ công nghiệp 8mm',
                'Ổ cắm điện bổ sung',
                'Vệ sinh tổng thể'
            ],
            items: [
                { name: 'Sơn tường', spec: '30-50m²', price: '3-6 triệu' },
                { name: 'Trần & đèn', spec: '20-30m²', price: '4-8 triệu' },
                { name: 'Sàn gỗ', spec: '20-30m²', price: '5-10 triệu' },
                { name: 'Điện & phụ kiện', spec: 'Cơ bản', price: '2-4 triệu' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Gói Tiêu Chuẩn',
            price: '5,000,000 - 8,000,000 VNĐ/m²',
            description: 'Nâng cấp phòng khách hiện đại, đầy đủ tiện nghi',
            features: [
                'Sơn tường cao cấp',
                'Trần thạch cao giật cấp',
                'Đèn LED âm trần + hắt sáng',
                'Sàn gỗ công nghiệp 12mm',
                'Kệ TV âm tường gỗ MFC',
                'Ốp tường trang trí',
                'Hệ thống điện thông minh'
            ],
            items: [
                { name: 'Sơn & hoàn thiện', spec: '30-50m²', price: '5-10 triệu' },
                { name: 'Trần thạch cao', spec: '20-30m²', price: '6-12 triệu' },
                { name: 'Sàn gỗ cao cấp', spec: '20-30m²', price: '8-18 triệu' },
                { name: 'Kệ TV & nội thất', spec: '3-5m dài', price: '8-15 triệu' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'premium',
            name: 'Gói Cao Cấp',
            price: '8,000,000 - 15,000,000 VNĐ/m²',
            description: 'Thiết kế phòng khách sang trọng, đẳng cấp',
            features: [
                'Sơn cao cấp Dulux/Jotun',
                'Trần thạch cao 3D nghệ thuật',
                'Hệ thống đèn thông minh',
                'Sàn gỗ tự nhiên/đá cao cấp',
                'Tủ kệ TV gỗ tự nhiên',
                'Ốp tường đá/gỗ trang trí',
                'Rèm cửa tự động',
                'Smart home đầy đủ'
            ],
            items: [
                { name: 'Sơn & trang trí cao cấp', spec: '30-50m²', price: '10-20 triệu' },
                { name: 'Trần nghệ thuật', spec: '20-30m²', price: '15-30 triệu' },
                { name: 'Sàn cao cấp', spec: '20-30m²', price: '20-40 triệu' },
                { name: 'Nội thất & smart home', spec: 'Sang trọng', price: '20-50 triệu' }
            ],
            bgColor: '#f59e0b'
        }
    ];

    const currentPackage = livingRoomPackages.find(pkg => pkg.id === activeTab);

    const features = [
        {
            icon: 'fas fa-paint-roller',
            title: 'Sơn Tường',
            items: ['Sơn nước cao cấp', 'Bả matit mịn', 'Màu sắc đa dạng']
        },
        {
            icon: 'fas fa-layer-group',
            title: 'Trần Thạch Cao',
            items: ['Trần phẳng/giật cấp', 'Chống ẩm, cách nhiệt', 'Đèn LED hắt sáng']
        },
        {
            icon: 'fas fa-th-large',
            title: 'Sàn Nhà',
            items: ['Sàn gỗ công nghiệp', 'Sàn gỗ tự nhiên', 'Gạch 600x600/800x800']
        },
        {
            icon: 'fas fa-tv',
            title: 'Kệ TV & Tủ',
            items: ['Kệ TV treo tường', 'Tủ trang trí', 'Gỗ MDF/MFC cao cấp']
        }
    ];

    const designStyles = [
        {
            style: 'Phong Cách Hiện Đại',
            description: 'Tối giản, tông màu trung tính, đường nét sắc sảo',
            priceRange: '5-10 triệu/m²',
            colors: ['Trắng', 'Xám', 'Be', 'Đen'],
            materials: ['Kính', 'Inox', 'Gỗ sáng màu']
        },
        {
            style: 'Phong Cách Bắc Âu',
            description: 'Ấm áp, ánh sáng tự nhiên, gỗ sáng màu',
            priceRange: '4-8 triệu/m²',
            colors: ['Trắng', 'Be', 'Xám nhạt'],
            materials: ['Gỗ tự nhiên', 'Vải bố', 'Len']
        },
        {
            style: 'Phong Cách Tân Cổ Điển',
            description: 'Sang trọng, phào chỉ tinh tế, màu ấm',
            priceRange: '8-15 triệu/m²',
            colors: ['Vàng kem', 'Nâu gỗ', 'Trắng ngà'],
            materials: ['Gỗ tự nhiên', 'Đá marble', 'Thạch cao']
        },
        {
            style: 'Phong Cách Công Nghiệp',
            description: 'Mộc mạc, tường gạch, trần cao, kim loại',
            priceRange: '3-7 triệu/m²',
            colors: ['Xám', 'Đen', 'Nâu gỗ'],
            materials: ['Gạch thô', 'Kim loại', 'Bê tông']
        }
    ];

    const tips = [
        'Chọn màu sơn sáng để tăng diện tích cảm nhận',
        'Bố trí đèn đa điểm cho không gian sinh động',
        'Sử dụng gương trang trí tạo chiều sâu',
        'Nội thất đơn giản, tránh rườm rà',
        'Kết hợp cửa kính lớn lấy ánh sáng tự nhiên'
    ];

    const faqs = [
        {
            question: 'Sửa chữa phòng khách 25m² hết bao nhiêu?',
            answer: 'Phòng khách 25m² sửa chữa cơ bản khoảng 75-125 triệu. Gói tiêu chuẩn 125-200 triệu. Gói cao cấp 200-375 triệu tùy vào thiết kế và vật liệu.'
        },
        {
            question: 'Có cần thay toàn bộ sàn không?',
            answer: 'Không nhất thiết. Nếu sàn cũ còn tốt, có thể chỉ đánh bóng hoặc phủ lớp sàn gỗ công nghiệp lên trên. Nếu hư hỏng nhiều mới cần tháo bỏ và làm mới.'
        },
        {
            question: 'Thời gian sửa chữa phòng khách mất bao lâu?',
            answer: 'Thường mất 2-3 tuần. Bao gồm: 2-3 ngày chuẩn bị & bảo vệ đồ đạc, 3-5 ngày trần & sơn, 3-5 ngày sàn, 3-5 ngày nội thất và hoàn thiện.'
        },
        {
            question: 'Có thể giữ lại một số nội thất cũ không?',
            answer: 'Hoàn toàn có thể! Nếu sofa, bàn, tủ cũ còn tốt, bạn có thể giữ lại và tích hợp vào thiết kế mới. Điều này giúp tiết kiệm chi phí đáng kể.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-couch"></i>
                        Báo Giá Sửa Chữa Phòng Khách
                    </h1>
                    <p className="section-subtitle">
                        Cải tạo phòng khách hiện đại, sang trọng với chi phí minh bạch và chất lượng đảm bảo
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-box-open"></i>
                        Các Gói Sửa Chữa Phòng Khách
                    </h2>

                    <div className="tab-buttons">
                        {livingRoomPackages.map((pkg) => (
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
                                        <h4>Vật liệu:</h4>
                                        <ul>
                                            {style.materials.map((material, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {material}
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
                        Lưu Ý Khi Sửa Chữa Phòng Khách
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

export default SuaChuaPhongKhachPage;
