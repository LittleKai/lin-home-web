import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const NhaPhoPage = () => {
    const [activeTab, setActiveTab] = useState('modern');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'modern',
            name: 'Nhà Phố Hiện Đại',
            price: '180,000 - 250,000 VNĐ/m²',
            description: 'Đường nét tối giản, nhiều mảng kính. Phù hợp nhà phố trẻ trung, năng động',
            features: [
                'Đường nét tối giản',
                'Nhiều mảng kính',
                'Không gian mở',
                'Ánh sáng tự nhiên tối đa',
                'Giếng trời thông minh',
                'Ban công rộng rãi'
            ],
            sizes: [
                { area: '60-80m²', type: 'Nhà phố 3 tầng', price: '11-20 triệu', features: '3-4 phòng ngủ' },
                { area: '80-120m²', type: 'Nhà phố 4 tầng', price: '14-30 triệu', features: '4-5 phòng ngủ' },
                { area: '120-200m²', type: 'Nhà phố 5 tầng', price: '22-50 triệu', features: '5-6 phòng ngủ' }
            ],
            bgColor: '#06b6d4'
        },
        {
            id: 'neoclassic',
            name: 'Nhà Phố Tân Cổ Điển',
            price: '220,000 - 300,000 VNĐ/m²',
            description: 'Ban công, phào chỉ nhẹ nhàng, tinh tế. Tạo cảm giác sang trọng, đẳng cấp',
            features: [
                'Ban công cổ điển',
                'Phào chỉ tinh tế',
                'Cột trụ nhẹ nhàng',
                'Màu sắc trang nhã',
                'Chi tiết tỉ mỉ',
                'Chuẩn phong thủy'
            ],
            sizes: [
                { area: '60-80m²', type: 'Nhà phố tân cổ điển', price: '13-24 triệu', features: '3-4 phòng ngủ' },
                { area: '80-120m²', type: 'Nhà phố 2 mặt tiền', price: '18-36 triệu', features: '4-5 phòng ngủ' },
                { area: '120-200m²', type: 'Nhà phố cao cấp', price: '26-60 triệu', features: '5-6 phòng ngủ' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'eco',
            name: 'Nhà Phố Xanh - Eco House',
            price: '200,000 - 280,000 VNĐ/m²',
            description: 'Nhiều cây xanh, giếng trời, sân thượng. Phù hợp nhà phố tại Hà Nội & Nha Trang nắng nóng',
            features: [
                'Nhiều cây xanh',
                'Giếng trời tối ưu',
                'Sân thượng vườn',
                'Thông gió tự nhiên',
                'Tiết kiệm điện năng',
                'Thân thiện môi trường'
            ],
            sizes: [
                { area: '60-80m²', type: 'Eco house nhỏ', price: '12-22 triệu', features: '3-4 phòng ngủ' },
                { area: '80-120m²', type: 'Eco house trung', price: '16-34 triệu', features: '4-5 phòng ngủ' },
                { area: '120-200m²', type: 'Eco house lớn', price: '24-56 triệu', features: '5-6 phòng ngủ' }
            ],
            bgColor: '#22c55e'
        }
    ];

    const benefits = [
        { icon: 'fas fa-expand-arrows-alt', title: 'Tối ưu diện tích', description: 'Bố trí công năng hợp lý cho đất hẹp, sử dụng tối đa không gian' },
        { icon: 'fas fa-home', title: 'Thẩm mỹ hiện đại', description: 'Kiến trúc đẹp, hài hòa với cảnh quan đô thị' },
        { icon: 'fas fa-sun', title: 'Ánh sáng & gió tự nhiên', description: 'Giải pháp lấy sáng, giếng trời, ban công thông minh' },
        { icon: 'fas fa-yin-yang', title: 'Phong thủy chuẩn', description: 'Bố trí cửa, cầu thang, phòng hợp mệnh gia chủ' },
        { icon: 'fas fa-coins', title: 'Tiết kiệm chi phí', description: 'Thiết kế rõ ràng, hạn chế phát sinh khi thi công' }
    ];

    const faqData = [
        {
            question: 'Nhà phố mặt tiền hẹp 4m có thiết kế được đẹp không?',
            answer: 'Hoàn toàn được! Với mặt tiền 4m, chúng tôi áp dụng giải pháp: (1) Giếng trời để lấy sáng, (2) Cầu thang xoắn tiết kiệm diện tích, (3) Ban công nhô ra tạo không gian, (4) Sử dụng kính để mở rộng tầm nhìn. Nhiều nhà phố 4m của chúng tôi rất đẹp và tiện nghi.'
        },
        {
            question: 'Chi phí xây nhà phố 4 tầng khoảng bao nhiêu?',
            answer: 'Chi phí xây nhà phố 4 tầng dao động 7-12 triệu/m² tùy cấp độ hoàn thiện. Với mặt bằng 60m², chi phí khoảng 1.7-2.9 tỷ (chưa bao gồm thiết kế và nội thất). Chi phí thiết kế khoảng 180,000-250,000 VNĐ/m².'
        },
        {
            question: 'Nhà phố có cần giếng trời không?',
            answer: 'Rất nên! Giếng trời giúp: (1) Lấy ánh sáng tự nhiên cho tầng giữa, (2) Thông gió, giảm nhiệt, (3) Trồng cây xanh, (4) Tăng tính thẩm mỹ. Đặc biệt quan trọng với nhà phố hẹp, dài hoặc giáp 3 mặt.'
        },
        {
            question: 'Nên thiết kế cầu thang ở vị trí nào?',
            answer: 'Vị trí cầu thang phụ thuộc vào: (1) Phong thủy: Không nên ở giữa nhà, (2) Công năng: Gần cửa chính để tiện di chuyển, (3) Ánh sáng: Gần giếng trời nếu có. Cầu thang xoắn tiết kiệm diện tích hơn cầu thang chữ L.'
        },
        {
            question: 'Nhà phố có thể thiết kế gara để xe ô tô không?',
            answer: 'Có thể nếu mặt tiền ≥5m. Với mặt tiền <5m, có thể đỗ xe ngang hoặc dùng hệ thống nâng hạ xe. Nhiều gia đình chọn tầng trệt làm gara, tầng 2 trở lên để ở.'
        },
        {
            question: 'Nhà phố tại Nha Trang cần lưu ý gì?',
            answer: 'Tại Nha Trang cần: (1) Chống ẩm mặn bằng sơn chống ăn mòn, (2) Thông gió tốt để tránh nóng ẩm, (3) Hệ thống thoát nước mạnh mùa mưa, (4) Màu sơn chống phai. Ưu tiên vật liệu chống ăn mòn.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-city icon-primary"></i>
                        Thiết Kế Nhà Phố 2025
                    </h1>
                    <p className="section-subtitle">
                        Hiện đại - tối ưu công năng - hợp phong thủy tại Hà Nội & Nha Trang
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
                        Lợi Ích Thiết Kế Nhà Phố Chuyên Nghiệp
                    </h2>
                    <div className="grid-3">
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
                        Phong Cách Thiết Kế & Báo Giá
                    </h2>
                    <p className="section-subtitle">3 phong cách thiết kế nhà phố phổ biến 2025</p>
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
                                    <h4><i className="fas fa-star"></i> Đặc điểm nổi bật:</h4>
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
                        <i className="fas fa-exclamation-circle icon-primary"></i>
                        Lưu Ý Khi Thiết Kế Nhà Phố
                    </h2>
                    <div className="grid-2">
                        <div className="note-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Với Hà Nội</h3>
                            <p>Cần chú trọng giải pháp lấy sáng và cách nhiệt. Giếng trời là giải pháp tối ưu cho nhà phố hẹp.</p>
                        </div>
                        <div className="note-card">
                            <i className="fas fa-umbrella-beach"></i>
                            <h3>Với Nha Trang</h3>
                            <p>Ưu tiên chống ẩm mặn và thông gió tự nhiên. Sử dụng vật liệu chống ăn mòn.</p>
                        </div>
                    </div>
                    <div className="highlight-box">
                        <i className="fas fa-lightbulb"></i>
                        <p><strong>Khuyến nghị:</strong> Nên bố trí giếng trời và ban công để tăng thông thoáng. Cần kết hợp kiến trúc - nội thất - phong thủy đồng bộ.</p>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
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

export default NhaPhoPage;
