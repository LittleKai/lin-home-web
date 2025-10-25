import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const ResortDuLichPage = () => {
    const [activeTab, setActiveTab] = useState('beach');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'beach',
            name: 'Resort Ven Biển',
            price: '250,000 - 400,000 VNĐ/m²',
            description: 'Không gian mở, gần gũi thiên nhiên, view biển. Phù hợp Nha Trang và các vùng ven biển',
            features: [
                'View biển thoáng đãng',
                'Bungalow riêng tư',
                'Hồ bơi vô cực',
                'Nhà hàng view biển',
                'Spa, massage ven biển',
                'Khu vui chơi nước'
            ],
            sizes: [
                { area: '1000-3000m²', type: 'Resort nhỏ', price: '250-900 triệu', features: '10-20 phòng' },
                { area: '3000-8000m²', type: 'Resort trung', price: '750-2.5 tỷ', features: '30-60 phòng' },
                { area: '8000-20000m²', type: 'Resort lớn', price: '2-6.5 tỷ', features: '80-150 phòng' }
            ],
            bgColor: '#14b8a6'
        },
        {
            id: 'mountain',
            name: 'Resort Nghỉ Dưỡng Núi',
            price: '220,000 - 380,000 VNĐ/m²',
            description: 'Không gian yên tĩnh, trong lành. Phù hợp vùng ngoại ô, miền núi',
            features: [
                'Không gian yên tĩnh',
                'Villa sân vườn',
                'Không khí trong lành',
                'Hoạt động outdoor',
                'Nhà hàng organic',
                'Khu trekking, camping'
            ],
            sizes: [
                { area: '2000-5000m²', type: 'Eco resort nhỏ', price: '440-1.5 tỷ', features: '15-30 phòng' },
                { area: '5000-12000m²', type: 'Resort trung', price: '1.1-3.8 tỷ', features: '40-80 phòng' },
                { area: '12000-30000m²', type: 'Resort lớn', price: '2.6-9.5 tỷ', features: '100-200 phòng' }
            ],
            bgColor: '#22c55e'
        },
        {
            id: 'urban',
            name: 'Resort Đô Thị',
            price: '280,000 - 420,000 VNĐ/m²',
            description: 'Sang trọng, tiện nghi, gần trung tâm. Kết hợp nghỉ dưỡng và công tác',
            features: [
                'Gần trung tâm',
                'Hội nghị, sự kiện',
                'Spa, gym hiện đại',
                'Nhà hàng đa dạng',
                'Phòng họp cao cấp',
                'Dịch vụ 5 sao'
            ],
            sizes: [
                { area: '800-2000m²', type: 'Boutique hotel', price: '224-700 triệu', features: '20-40 phòng' },
                { area: '2000-6000m²', type: 'Resort hotel', price: '560-2 tỷ', features: '50-100 phòng' },
                { area: '6000-15000m²', type: 'Resort lớn', price: '1.7-5.3 tỷ', features: '120-250 phòng' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    const benefits = [
        { icon: 'fas fa-umbrella-beach', title: 'Trải nghiệm độc đáo', description: 'Tạo không gian nghỉ dưỡng đẳng cấp, thu hút khách' },
        { icon: 'fas fa-chart-line', title: 'Doanh thu bền vững', description: 'Thiết kế tối ưu vận hành, tăng lợi nhuận lâu dài' },
        { icon: 'fas fa-leaf', title: 'Hòa mình thiên nhiên', description: 'Kết nối con người với thiên nhiên, thư giãn tối đa' },
        { icon: 'fas fa-star', title: 'Thương hiệu mạnh', description: 'Thiết kế đẹp tạo dấu ấn, khách quay lại nhiều lần' }
    ];

    const faqData = [
        {
            question: 'Diện tích tối thiểu để xây resort?',
            answer: 'Tối thiểu 1000-1500m² cho resort nhỏ 10-15 phòng. Lý tưởng 3000-5000m² cho 30-50 phòng với đầy đủ tiện ích (hồ bơi, nhà hàng, spa). Resort lớn cần >10,000m².'
        },
        {
            question: 'Chi phí đầu tư resort ven biển khoảng bao nhiêu?',
            answer: 'Chi phí rất đa dạng. Thiết kế 250,000-400,000 VNĐ/m². Xây dựng 8-15 triệu/m². Resort 3000m² (30 phòng) cần đầu tư khoảng 25-50 tỷ (đất, xây dựng, nội thất, tiện ích). Thời gian hoàn vốn 5-10 năm.'
        },
        {
            question: 'Resort cần những tiện ích gì?',
            answer: 'Tiện ích cơ bản: Lễ tân, nhà hàng, hồ bơi, spa/massage, khu vui chơi trẻ em. Tiện ích nâng cao: Gym, phòng hội nghị, bar, karaoke, thể thao nước, tour du lịch. Tùy phân khúc và quy mô.'
        },
        {
            question: 'Thiết kế resort ven biển cần lưu ý gì?',
            answer: 'Lưu ý: (1) Chống ẩm mặn, (2) Vật liệu chịu được nắng mưa, (3) Hệ thống thoát nước tốt, (4) Tối ưu view biển, (5) Chống bão, (6) Cảnh quan xanh chống nắng. Nha Trang cần đặc biệt chú ý mùa mưa bão.'
        },
        {
            question: 'Thời gian xây dựng resort mất bao lâu?',
            answer: 'Thiết kế: 2-4 tháng. Xây dựng: 12-24 tháng tùy quy mô. Resort 30 phòng mất 12-15 tháng, 60-80 phòng mất 18-24 tháng. Cần thêm 3-6 tháng setup, đào tạo nhân viên trước khai trương.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-umbrella-beach icon-primary"></i>
                        Thiết Kế Resort - Khu Du Lịch 2025
                    </h1>
                    <p className="section-subtitle">
                        Nghỉ dưỡng - gần gũi thiên nhiên - sang trọng tại Hà Nội & Nha Trang
                    </p>
                    <div className="grid-4">
                        {benefits.map((item, index) => (
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
                        Lợi Ích Thiết Kế Resort Chuyên Nghiệp
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
                        Loại Hình Resort & Báo Giá
                    </h2>
                    <p className="section-subtitle">3 loại hình resort phổ biến</p>
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
                                    <h4><i className="fas fa-star"></i> Tiện ích:</h4>
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
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary"><i className="fas fa-images"></i>Xem Dự Án Mẫu</a>
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

export default ResortDuLichPage;
