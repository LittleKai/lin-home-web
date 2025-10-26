import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const Top10MauHienDaiPage = () => {
    const [activeTab, setActiveTab] = useState('living-room');
    const [activeFaq, setActiveFaq] = useState(null);

    const designs = [
        {
            id: 'living-room-apartment',
            category: 'living-room',
            name: 'Phòng Khách Chung Cư Hiện Đại Tối Giản',
            location: 'Hà Nội',
            features: [
                'Gam màu trắng – ghi, sofa chữ L',
                'Kệ TV treo tường tiết kiệm diện tích',
                'Ánh sáng LED âm trần',
                'Cửa kính lớn đón sáng',
                'Giải pháp cho căn hộ nhỏ'
            ],
            price: '50-80 triệu',
            area: '20-30m²',
            color: '#3b82f6'
        },
        {
            id: 'living-room-villa',
            category: 'living-room',
            name: 'Phòng Khách Biệt Thự Ven Biển',
            location: 'Nha Trang',
            features: [
                'Cửa kính toàn cảnh view biển',
                'Sofa da màu be sang trọng',
                'Bàn trà gỗ tự nhiên',
                'Không gian mở đón gió biển',
                'Vật liệu chống ẩm mặn'
            ],
            price: '150-250 triệu',
            area: '40-60m²',
            color: '#06b6d4'
        },
        {
            id: 'kitchen',
            category: 'kitchen',
            name: 'Phòng Bếp + Bàn Ăn Liên Thông',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Bếp chữ L tối ưu không gian',
                'Đảo bếp kết hợp bàn ăn',
                'Gỗ công nghiệp phủ melamine',
                'Ánh sáng LED dưới tủ',
                'Không gian mở liên thông'
            ],
            price: '60-120 triệu',
            area: '15-25m²',
            color: '#f59e0b'
        },
        {
            id: 'bedroom-master',
            category: 'bedroom',
            name: 'Phòng Ngủ Master Sang Trọng',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Giường bọc nệm cao cấp',
                'Tab đầu giường tối giản',
                'Đèn hắt trần tạo chiều sâu',
                'Tranh nghệ thuật trừu tượng',
                'Tủ quần áo âm tường'
            ],
            price: '80-150 triệu',
            area: '25-35m²',
            color: '#8b5cf6'
        },
        {
            id: 'bedroom-kid',
            category: 'bedroom',
            name: 'Phòng Ngủ Con Trẻ Năng Động',
            location: 'Hà Nội',
            features: [
                'Giường tầng thông minh',
                'Tủ quần áo âm tường',
                'Bàn học tích hợp kệ sách',
                'Màu sắc tươi sáng vui tươi',
                'Nội thất đa năng tiện nghi'
            ],
            price: '35-60 triệu',
            area: '12-18m²',
            color: '#10b981'
        },
        {
            id: 'bathroom',
            category: 'bathroom',
            name: 'Phòng Tắm Hiện Đại',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Kính cường lực ngăn ướt',
                'Lavabo treo tường gọn gàng',
                'Đèn LED chống nước',
                'Vật liệu chống ẩm mặn',
                'Gương có đèn LED'
            ],
            price: '30-60 triệu',
            area: '6-12m²',
            color: '#14b8a6'
        },
        {
            id: 'office',
            category: 'office',
            name: 'Nội Thất Văn Phòng Tại Nhà',
            location: 'Hà Nội',
            features: [
                'Bàn làm việc gỗ công nghiệp',
                'Ghế ergonomic thoải mái',
                'Kệ sách treo tường',
                'Tận dụng ánh sáng tự nhiên',
                'Không gian yên tĩnh'
            ],
            price: '25-50 triệu',
            area: '8-15m²',
            color: '#a855f7'
        },
        {
            id: 'studio',
            category: 'studio',
            name: 'Nội Thất Căn Hộ Studio',
            location: 'Hà Nội',
            features: [
                'Sofa giường đa năng',
                'Bàn ăn gấp gọn',
                'Tủ đa năng tiết kiệm diện tích',
                'Vách ngăn di động thông minh',
                'Giải pháp cho căn hộ nhỏ'
            ],
            price: '40-70 triệu',
            area: '25-35m²',
            color: '#ec4899'
        },
        {
            id: 'villa',
            category: 'villa',
            name: 'Nội Thất Villa Hiện Đại Cao Cấp',
            location: 'Nha Trang',
            features: [
                'Đèn chùm nghệ thuật',
                'Sofa da cao cấp',
                'Ốp đá tự nhiên',
                'Không gian mở liền kề hồ bơi',
                'View biển toàn cảnh'
            ],
            price: '500 triệu - 1 tỷ',
            area: '150-250m²',
            color: '#f97316'
        },
        {
            id: 'entertainment',
            category: 'entertainment',
            name: 'Phòng Giải Trí Gia Đình',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Ghế sofa rạp phim',
                'Hệ thống âm thanh 5.1',
                'Màn hình chiếu lớn',
                'Trang trí tối giản',
                'Ánh sáng hắt trần điều chỉnh'
            ],
            price: '80-150 triệu',
            area: '20-35m²',
            color: '#ef4444'
        }
    ];

    const categories = [
        { id: 'living-room', name: 'Phòng Khách', icon: 'fas fa-couch' },
        { id: 'kitchen', name: 'Phòng Bếp', icon: 'fas fa-fire-burner' },
        { id: 'bedroom', name: 'Phòng Ngủ', icon: 'fas fa-bed' },
        { id: 'bathroom', name: 'Phòng Tắm', icon: 'fas fa-shower' },
        { id: 'office', name: 'Văn Phòng', icon: 'fas fa-briefcase' },
        { id: 'studio', name: 'Studio', icon: 'fas fa-home' },
        { id: 'villa', name: 'Villa', icon: 'fas fa-hotel' },
        { id: 'entertainment', name: 'Giải Trí', icon: 'fas fa-film' }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '150,000 - 200,000',
            note: 'Bao gồm phối cảnh 3D chi tiết',
            suitable: 'Hà Nội'
        },
        {
            type: 'Nhà phố',
            price: '160,000 - 220,000',
            note: 'Tối ưu diện tích nhỏ, nhiều tầng',
            suitable: 'Hà Nội'
        },
        {
            type: 'Biệt thự/Villa',
            price: '200,000 - 280,000',
            note: 'Không gian rộng, nhiều hạng mục cao cấp',
            suitable: 'Nha Trang'
        }
    ];

    const faqData = [
        {
            question: 'Thiết kế nào phù hợp với chung cư nhỏ tại Hà Nội?',
            answer: 'Mẫu "Phòng Khách Chung Cư Hiện Đại Tối Giản" và "Nội Thất Căn Hộ Studio" là phù hợp nhất. Ưu tiên màu sáng, nội thất đa năng, không gian mở để tối ưu diện tích.'
        },
        {
            question: 'Villa ven biển Nha Trang nên chọn mẫu nào?',
            answer: 'Mẫu "Phòng Khách Biệt Thự Ven Biển" và "Nội Thất Villa Hiện Đại Cao Cấp" với cửa kính toàn cảnh, vật liệu chống ẩm mặn, không gian mở. Giá 500 triệu - 1 tỷ cho 150-250m².'
        },
        {
            question: 'Chi phí thiết kế phòng khách Hiện đại là bao nhiêu?',
            answer: 'Chung cư: 50-80 triệu (20-30m²). Biệt thự: 150-250 triệu (40-60m²). Bao gồm thiết kế 3D, giám sát thi công, nội thất cơ bản.'
        },
        {
            question: 'Có thể kết hợp Hiện đại với phong cách khác không?',
            answer: 'Có thể kết hợp với phong cách Scandinavian hoặc Minimalist để tăng sự ấm cúng nhưng vẫn giữ được nét đơn giản, tối giản của phong cách Hiện đại.'
        },
        {
            question: 'Phòng ngủ con trẻ có cần thiết kế riêng không?',
            answer: 'Có. Phòng ngủ con trẻ cần thiết kế năng động với màu sắc tươi sáng, nội thất thông minh như giường tầng, bàn học tích hợp kệ sách. Chi phí 35-60 triệu cho 12-18m².'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const filteredDesigns = designs.filter(d => d.category === activeTab);

    return (
        <div className="main-content">

            <section className="section" id="intro">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle"></i>
                        Giới Thiệu
                    </h2>
                    <div className="content-text">
                        <p>
                            Nội thất phong cách <strong>Hiện đại (Modern Style)</strong> ngày càng phổ biến nhờ
                            sự tối giản, tiện nghi và tinh tế. Trong năm 2025, nhiều xu hướng mới ra đời, kết hợp
                            giữa công năng thông minh – thẩm mỹ sang trọng – vật liệu bền vững.
                        </p>
                        <p>
                            Dưới đây là <strong>10 mẫu thiết kế nội thất Hiện đại đẹp nhất 2025</strong>, phù hợp
                            cho chung cư, nhà phố, biệt thự tại Hà Nội & Nha Trang.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="designs">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-images"></i>
                        Top 10 Mẫu Thiết Kế Hiện Đại
                    </h2>
                    <p className="section-subtitle">
                        Chọn danh mục để xem mẫu thiết kế
                    </p>

                    <div className="tabs">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`tab ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                <i className={cat.icon}></i>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid-2">
                        {filteredDesigns.map((design, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: design.color }}>
                                    <i className="fas fa-star"></i>
                                    {design.name}
                                </h3>
                                <p className="location-badge">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {design.location}
                                </p>
                                <ul>
                                    {design.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="design-info">
                                    <span className="standard">
                                        <i className="fas fa-ruler-combined"></i>
                                        {design.area}
                                    </span>
                                    <span className="standard">
                                        <i className="fas fa-tag"></i>
                                        {design.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tag"></i>
                        Báo Giá Thiết Kế Nội Thất Hiện Đại 2025
                    </h2>
                    <p className="section-subtitle">
                        Đơn giá tham khảo VNĐ/m² - Thay đổi theo vật liệu & yêu cầu chi tiết
                    </p>

                    <div className="grid-3">
                        {priceTable.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-home"></i>
                                    {item.type}
                                </h3>
                                <p className="price-highlight">{item.price} VNĐ/m²</p>
                                <p><strong>Ghi chú:</strong> {item.note}</p>
                                <p><strong>Phù hợp:</strong> {item.suitable}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về mẫu thiết kế Hiện đại
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

            <CTAContent />
        </div>
    );
};

export default Top10MauHienDaiPage;