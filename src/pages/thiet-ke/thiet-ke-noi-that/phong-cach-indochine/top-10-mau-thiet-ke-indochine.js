import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const Top10MauIndochinePage = () => {
    const [activeTab, setActiveTab] = useState('living-room');
    const [activeFaq, setActiveFaq] = useState(null);

    const designs = [
        {
            id: 'living-room-villa',
            category: 'living-room',
            name: 'Phòng Khách Biệt Thự Indochine Sang Trọng',
            location: 'Nha Trang',
            features: [
                'Sofa gỗ chạm khắc hoa văn tinh xảo',
                'Bàn trà gỗ tự nhiên nguyên khối',
                'Trần cao 4-5m, đèn quạt gỗ cổ điển',
                'Gạch bông trang trí sàn',
                'Cửa kính lớn đón ánh sáng'
            ],
            price: '250-320 triệu',
            area: '40-60m²',
            color: '#3b82f6'
        },
        {
            id: 'living-room-apartment',
            category: 'living-room',
            name: 'Phòng Khách Chung Cư Indochine Tinh Giản',
            location: 'Hà Nội',
            features: [
                'Gạch bông điểm nhấn vùng trung tâm',
                'Nội thất mây tre gọn gàng',
                'Màu sắc trung tính: vàng nhạt, trắng ngà',
                'Ánh sáng tự nhiên tối đa',
                'Nội thất đa năng tiết kiệm không gian'
            ],
            price: '60-90 triệu',
            area: '20-30m²',
            color: '#10b981'
        },
        {
            id: 'villa-beach',
            category: 'villa',
            name: 'Villa Ven Biển Nha Trang',
            location: 'Nha Trang',
            features: [
                'Cửa kính toàn cảnh view biển',
                'Không gian mở liên thông',
                'Nội thất tre mây chống ẩm mặn',
                'Tông màu trắng - xanh ngọc biển',
                'Hệ thống thông gió tự nhiên'
            ],
            price: '800 triệu - 1.5 tỷ',
            area: '150-250m²',
            color: '#06b6d4'
        },
        {
            id: 'dining-room',
            category: 'dining',
            name: 'Phòng Ăn Ấm Cúng',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Bàn gỗ nguyên khối 6-8 chỗ',
                'Ghế mây tre đan thoáng mát',
                'Đèn lồng treo trang trí',
                'Bình gốm cổ trên bàn',
                'Tủ đựng chén đĩa gỗ'
            ],
            price: '45-80 triệu',
            area: '15-25m²',
            color: '#f59e0b'
        },
        {
            id: 'kitchen',
            category: 'kitchen',
            name: 'Phòng Bếp Indochine',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Gạch bông lát sàn cổ điển',
                'Tủ bếp gỗ công nghiệp phủ veneer',
                'Đá ốp bếp granite tự nhiên',
                'Đèn trần gỗ trang trí',
                'Kệ mở treo gia vị tre'
            ],
            price: '80-150 triệu',
            area: '10-20m²',
            color: '#ef4444'
        },
        {
            id: 'bedroom-master',
            category: 'bedroom',
            name: 'Phòng Ngủ Master Biệt Thự',
            location: 'Nha Trang',
            features: [
                'Giường gỗ chạm khắc size King',
                'Ga màu vàng nhạt sang trọng',
                'Tranh sơn dầu phong cảnh Á Đông',
                'Đèn ngủ gốm cổ điển',
                'Tủ áo gỗ tự nhiên'
            ],
            price: '120-200 triệu',
            area: '30-40m²',
            color: '#8b5cf6'
        },
        {
            id: 'bedroom-small',
            category: 'bedroom',
            name: 'Phòng Ngủ Nhỏ Chung Cư',
            location: 'Hà Nội',
            features: [
                'Nội thất gọn gàng, đa năng',
                'Tủ âm tường tiết kiệm diện tích',
                'Gạch bông trang trí đầu giường',
                'Màu sáng tăng không gian',
                'Giường có ngăn kéo chứa đồ'
            ],
            price: '35-60 triệu',
            area: '12-18m²',
            color: '#ec4899'
        },
        {
            id: 'bathroom',
            category: 'bathroom',
            name: 'Phòng Tắm Indochine Sang Trọng',
            location: 'Hà Nội & Nha Trang',
            features: [
                'Bồn tắm sứ oval cổ điển',
                'Lavabo gốm hoa văn',
                'Sàn gạch hoa cổ điển',
                'Gương tròn khung gỗ',
                'Vòi đồng cổ điển'
            ],
            price: '50-100 triệu',
            area: '8-15m²',
            color: '#14b8a6'
        },
        {
            id: 'office',
            category: 'office',
            name: 'Phòng Làm Việc Indochine',
            location: 'Hà Nội',
            features: [
                'Bàn làm việc gỗ tự nhiên',
                'Kệ sách tre đan',
                'Đèn bàn bằng gốm',
                'Tông màu nâu - vàng nhạt',
                'Ghế xoay bọc da'
            ],
            price: '40-70 triệu',
            area: '10-15m²',
            color: '#a855f7'
        },
        {
            id: 'homestay',
            category: 'commercial',
            name: 'Homestay/Resort Indochine',
            location: 'Nha Trang',
            features: [
                'Trần cao 4-6m thoáng mát',
                'Nội thất tre mây 100%',
                'Gạch bông cổ toàn bộ sàn',
                'Không gian mở gần thiên nhiên',
                'View biển hoặc núi'
            ],
            price: '500 triệu - 2 tỷ',
            area: '100-200m²',
            color: '#f97316'
        }
    ];

    const categories = [
        { id: 'living-room', name: 'Phòng Khách', icon: 'fas fa-couch' },
        { id: 'villa', name: 'Villa', icon: 'fas fa-home' },
        { id: 'dining', name: 'Phòng Ăn', icon: 'fas fa-utensils' },
        { id: 'kitchen', name: 'Phòng Bếp', icon: 'fas fa-fire-burner' },
        { id: 'bedroom', name: 'Phòng Ngủ', icon: 'fas fa-bed' },
        { id: 'bathroom', name: 'Phòng Tắm', icon: 'fas fa-shower' },
        { id: 'office', name: 'Phòng Làm Việc', icon: 'fas fa-briefcase' },
        { id: 'commercial', name: 'Homestay/Resort', icon: 'fas fa-hotel' }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '180,000 - 230,000',
            note: 'Thiết kế tinh giản, tối ưu không gian',
            suitable: 'Hà Nội'
        },
        {
            type: 'Nhà phố',
            price: '200,000 - 260,000',
            note: 'Tối ưu diện tích nhỏ, nhiều ánh sáng',
            suitable: 'Hà Nội'
        },
        {
            type: 'Biệt thự/Villa',
            price: '250,000 - 320,000',
            note: 'Cao cấp, nhiều chi tiết thủ công',
            suitable: 'Nha Trang'
        }
    ];

    const faqData = [
        {
            question: 'Thiết kế nào phù hợp với chung cư nhỏ tại Hà Nội?',
            answer: 'Mẫu "Phòng Khách Chung Cư Indochine Tinh Giản" và "Phòng Ngủ Nhỏ Chung Cư" là phù hợp nhất. Giảm chi tiết, ưu tiên màu sáng, nội thất đa năng nhưng vẫn giữ tinh thần Indochine.'
        },
        {
            question: 'Villa ven biển Nha Trang nên chọn mẫu nào?',
            answer: 'Mẫu "Villa Ven Biển Nha Trang" với cửa kính toàn cảnh, nội thất tre mây chống ẩm mặn, tông màu trắng xanh biển. Giá 800 triệu - 1.5 tỷ cho 150-250m².'
        },
        {
            question: 'Chi phí thiết kế phòng khách Indochine là bao nhiêu?',
            answer: 'Chung cư: 60-90 triệu (20-30m²). Biệt thự: 250-320 triệu (40-60m²). Bao gồm thiết kế 3D, giám sát thi công, nội thất cơ bản.'
        },
        {
            question: 'Có thể kết hợp Indochine với phong cách khác không?',
            answer: 'Có thể kết hợp với phong cách hiện đại (Modern) hoặc tối giản (Minimalist) để phù hợp không gian nhỏ nhưng vẫn giữ được nét đặc trưng Indochine.'
        },
        {
            question: 'Homestay Indochine có thu hút khách không?',
            answer: 'Rất thu hút, đặc biệt ở Nha Trang. Indochine tạo không gian độc đáo, gần gũi thiên nhiên, phù hợp xu hướng du lịch trải nghiệm. Giá thuê cao hơn 20-30% so với thông thường.'
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
                            Phong cách <strong>Indochine (Đông Dương)</strong> là lựa chọn của nhiều gia chủ trong năm 2025 
                            nhờ sự sang trọng, hoài cổ nhưng vẫn tiện nghi hiện đại. Với sự hòa quyện giữa văn hóa Á Đông 
                            và nét Pháp cổ điển, Indochine mang lại không gian sống tinh tế, đậm dấu ấn nghệ thuật.
                        </p>
                        <p>
                            Dưới đây là <strong>10 mẫu thiết kế Indochine đẹp nhất 2025</strong>, phù hợp cho cả 
                            Hà Nội và Nha Trang.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="designs">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-images"></i>
                        Top 10 Mẫu Thiết Kế Indochine
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
                        Báo Giá Thiết Kế Nội Thất Indochine 2025
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
                        Giải đáp thắc mắc về mẫu thiết kế Indochine
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

export default Top10MauIndochinePage;
