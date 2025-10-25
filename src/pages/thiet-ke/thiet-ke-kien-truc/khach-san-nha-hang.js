import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const KhachSanNhaHangPage = () => {
    const [activeTab, setActiveTab] = useState('hotel');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'hotel',
            name: 'Thiết Kế Khách Sạn',
            price: '300,000 - 450,000 VNĐ/m²',
            description: 'Hiện đại, tân cổ điển, resort ven biển - đạt chuẩn 3-5 sao',
            features: [
                'Kính, gỗ, ánh sáng sang trọng',
                'Lobby ấn tượng',
                'Phòng ngủ tiện nghi',
                'Nhà hàng, hội nghị',
                'Spa, gym, hồ bơi',
                'Hệ thống thông minh'
            ],
            sizes: [
                { area: '500-1000m²', type: 'KS 3 sao', price: '150-350 triệu', features: '20-30 phòng' },
                { area: '1000-2000m²', type: 'KS 4 sao', price: '300-750 triệu', features: '40-60 phòng' },
                { area: '2000-5000m²', type: 'KS 5 sao', price: '600-2 tỷ', features: '80-150 phòng' }
            ],
            bgColor: '#f59e0b'
        },
        {
            id: 'restaurant',
            name: 'Thiết Kế Nhà Hàng',
            price: '280,000 - 400,000 VNĐ/m²',
            description: 'Sang trọng, hiện đại, truyền thống - tối ưu luồng phục vụ',
            features: [
                'Khu vực tiếp khách',
                'Bếp hiện đại',
                'Kho nguyên liệu',
                'Không gian linh hoạt',
                'Ánh sáng ấm áp',
                'Hệ thống âm thanh'
            ],
            sizes: [
                { area: '100-200m²', type: 'Nhà hàng nhỏ', price: '28-70 triệu', features: '50-80 khách' },
                { area: '200-400m²', type: 'Nhà hàng trung', price: '56-140 triệu', features: '100-150 khách' },
                { area: '400-800m²', type: 'Nhà hàng lớn', price: '112-280 triệu', features: '200-300 khách' }
            ],
            bgColor: '#ef4444'
        },
        {
            id: 'cafe-shop',
            name: 'Thiết Kế Cafe - Shop',
            price: '250,000 - 380,000 VNĐ/m²',
            description: 'Trendy, vintage, minimalist - thu hút khách hàng trẻ',
            features: [
                'Không gian Instagram-able',
                'Quầy bar ấn tượng',
                'Góc check-in đẹp',
                'Ánh sáng độc đáo',
                'Kệ trưng bày hàng hóa',
                'Khu vực làm việc'
            ],
            sizes: [
                { area: '50-100m²', type: 'Cafe/Shop nhỏ', price: '13-32 triệu', features: '20-30 chỗ' },
                { area: '100-200m²', type: 'Cafe/Shop trung', price: '25-66 triệu', features: '40-60 chỗ' },
                { area: '200-400m²', type: 'Cafe/Shop lớn', price: '50-135 triệu', features: '80-120 chỗ' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    const benefits = [
        { icon: 'fas fa-store', title: 'Tăng giá trị thương hiệu', description: 'Không gian đẹp tạo ấn tượng mạnh với khách hàng' },
        { icon: 'fas fa-cogs', title: 'Tối ưu công năng', description: 'Bố trí khoa học giúp vận hành dễ dàng, hiệu quả' },
        { icon: 'fas fa-users', title: 'Phong thủy & tâm lý khách hàng', description: 'Thiết kế hợp lý giúp giữ chân khách lâu hơn' },
        { icon: 'fas fa-chart-line', title: 'Khả năng cạnh tranh', description: 'Nổi bật so với đối thủ trong cùng lĩnh vực' }
    ];

    const faqData = [
        {
            question: 'Chi phí thiết kế khách sạn - nhà hàng bao gồm những gì?',
            answer: 'Bao gồm: khảo sát hiện trạng, tư vấn phong cách, thiết kế mặt bằng công năng, phối cảnh 3D, hồ sơ kỹ thuật chi tiết. Riêng khách sạn có thêm thiết kế phòng mẫu. Giá thay đổi tùy quy mô và phong cách.'
        },
        {
            question: 'Thiết kế nhà hàng cần lưu ý gì?',
            answer: 'Cần tối ưu luồng di chuyển khách - nhân viên - thức ăn. Bếp phải đạt chuẩn vệ sinh ATTP. Khu vực tiếp khách cần thoáng, đẹp. Hệ thống điều hòa, thông gió tốt. Âm thanh, ánh sáng phù hợp.'
        },
        {
            question: 'Cafe nhỏ cần diện tích tối thiểu bao nhiêu?',
            answer: 'Diện tích tối thiểu 30-50m² có thể mở được cafe nhỏ 15-20 chỗ ngồi. Tuy nhiên 80-100m² sẽ thoải mái hơn để bố trí quầy bar, khu ngồi và WC. Thiết kế thông minh giúp tối ưu không gian nhỏ.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-building icon-primary"></i>
                        Thiết Kế Khách Sạn - Nhà Hàng - Shop - Cafe
                    </h1>
                    <p className="section-subtitle">
                        Đẹp - chuyên nghiệp - tối ưu công năng tại Hà Nội & Nha Trang
                    </p>
                    <div className="grid-4">
                        {benefits.slice(0, 4).map((item, index) => (
                            <div key={index} className="feature-item">
                                <i className={item.icon}></i>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-primary"></i>
                        Lợi Ích Của Thiết Kế Chuyên Nghiệp
                    </h2>
                    <div className="grid-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div className="info-icon"><i className={benefit.icon}></i></div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-primary"></i>
                        Loại Hình Thiết Kế & Báo Giá
                    </h2>
                    <div className="tabs">
                        {designTypes.map(type => (
                            <button key={type.id} className={`tab ${activeTab === type.id ? 'active' : ''}`} onClick={() => setActiveTab(type.id)}>
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="detail-card">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>
                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Bao gồm:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}><i className="fas fa-check"></i>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Quy mô & giá:</h4>
                                    <div className="item-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{size.area}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">{size.type} | {size.features}</span>
                                                    <span className="item-price-extended">{size.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary"><i className="fas fa-phone"></i>Liên Hệ Báo Giá</a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary"><i className="fas fa-images"></i>Xem Mẫu Thiết Kế</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle icon-primary"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className={`faq-question ${activeFaq === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default KhachSanNhaHangPage;
