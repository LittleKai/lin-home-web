import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CanHoChungCuPage = () => {
    const [activeTab, setActiveTab] = useState('modern');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'modern',
            name: 'Căn Hộ Hiện Đại',
            price: '150,000 - 220,000 VNĐ/m²',
            description: 'Tối giản, thông minh, đa năng. Phù hợp căn hộ chung cư, studio, 1-2 phòng ngủ',
            features: [
                'Thiết kế tối giản',
                'Tối ưu diện tích',
                'Nội thất đa năng',
                'Màu sắc trung tính',
                'Ánh sáng thông minh',
                'Lưu trữ khéo léo'
            ],
            sizes: [
                { area: '30-50m²', type: 'Studio - 1PN', price: '5-11 triệu', features: 'Phòng khách kết hợp' },
                { area: '50-70m²', type: 'Căn hộ 2PN', price: '8-15 triệu', features: '2 phòng ngủ' },
                { area: '70-100m²', type: 'Căn hộ 3PN', price: '11-22 triệu', features: '3 phòng ngủ' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'luxury',
            name: 'Căn Hộ Cao Cấp',
            price: '200,000 - 300,000 VNĐ/m²',
            description: 'Sang trọng, tinh tế, chất lượng cao. Phù hợp penthouse, căn hộ duplex',
            features: [
                'Vật liệu cao cấp',
                'Thiết kế tinh tế',
                'Nội thất sang trọng',
                'Hệ thống thông minh',
                'Âm thanh, ánh sáng',
                'Ban công view đẹp'
            ],
            sizes: [
                { area: '80-120m²', type: 'Căn hộ cao cấp', price: '16-36 triệu', features: '3 phòng ngủ' },
                { area: '120-180m²', type: 'Penthouse nhỏ', price: '24-54 triệu', features: '3-4 phòng ngủ' },
                { area: '180-300m²', type: 'Penthouse lớn', price: '36-90 triệu', features: '4-5 phòng ngủ' }
            ],
            bgColor: '#ec4899'
        },
        {
            id: 'family',
            name: 'Căn Hộ Gia Đình',
            price: '150,000 - 250,000 VNĐ/m²',
            description: 'Ấm cúng, tiện nghi, an toàn. Phù hợp gia đình có trẻ nhỏ, người cao tuổi',
            features: [
                'An toàn cho trẻ',
                'Tiện nghi, thực dụng',
                'Không gian mở',
                'Khu vực học tập',
                'Lưu trữ tối ưu',
                'Dễ vệ sinh, bảo trì'
            ],
            sizes: [
                { area: '60-80m²', type: 'Căn 2-3PN', price: '9-20 triệu', features: 'Gia đình nhỏ' },
                { area: '80-110m²', type: 'Căn 3-4PN', price: '12-28 triệu', features: 'Gia đình trung' },
                { area: '110-150m²', type: 'Căn 4-5PN', price: '17-38 triệu', features: 'Gia đình lớn' }
            ],
            bgColor: '#10b981'
        }
    ];

    const benefits = [
        { icon: 'fas fa-expand-arrows-alt', title: 'Tối ưu diện tích', description: 'Thiết kế thông minh, tận dụng tối đa không gian nhỏ' },
        { icon: 'fas fa-palette', title: 'Thẩm mỹ hiện đại', description: 'Phong cách đa dạng, phù hợp mọi lứa tuổi' },
        { icon: 'fas fa-lightbulb', title: 'Ánh sáng tự nhiên', description: 'Tối ưu ánh sáng, thông gió cho căn hộ' },
        { icon: 'fas fa-coins', title: 'Tiết kiệm chi phí', description: 'Thiết kế rõ ràng, thi công nhanh, ít phát sinh' }
    ];

    const faqData = [
        {
            question: 'Căn hộ 60m² có thiết kế được 3 phòng ngủ không?',
            answer: 'Có thể thiết kế 3 phòng ngủ nhưng sẽ hơi chật. Khuyến nghị 60-70m² nên thiết kế 2 phòng ngủ + 1 phòng đa năng (vừa làm việc, vừa khách ngủ). Trên 70m² mới thoải mái cho 3 phòng ngủ riêng biệt.'
        },
        {
            question: 'Chi phí thiết kế nội thất chung cư khoảng bao nhiêu?',
            answer: 'Chi phí thiết kế 150,000-250,000 VNĐ/m². Thi công nội thất 3-7 triệu/m² tùy cấp độ. Với căn 70m²: thiết kế 10.5-17.5 triệu, thi công 210-490 triệu. Tổng dự án khoảng 220-510 triệu.'
        },
        {
            question: 'Nên chọn phong cách gì cho căn hộ nhỏ?',
            answer: 'Ưu tiên phong cách tối giản (minimalism), Scandinavian, hoặc Modern với màu sáng để tạo cảm giác rộng rãi. Tránh phong cách cổ điển cầu kỳ sẽ làm không gian chật hẹp hơn.'
        },
        {
            question: 'Căn hộ có ban công nhỏ thiết kế như thế nào?',
            answer: 'Ban công nhỏ có thể: (1) Làm góc thư giãn với ghế, cây xanh, (2) Khu phơi đồ thông minh, (3) Kết hợp với phòng khách bằng cửa kính lớn, (4) Làm khu vườn mini. Tránh để ban công trống hoặc quá tải.'
        },
        {
            question: 'Có cần thuê KTS để thiết kế chung cư không?',
            answer: 'Rất nên! KTS giúp: (1) Tối ưu công năng diện tích nhỏ, (2) Giải pháp lưu trữ thông minh, (3) Chọn vật liệu phù hợp, (4) Tránh lãng phí, phát sinh. Chi phí thiết kế chỉ 5-7% tổng dự án nhưng giá trị mang lại rất lớn.'
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
                        Thiết Kế Căn Hộ - Chung Cư 2025
                    </h1>
                    <p className="section-subtitle">
                        Hiện đại - tối ưu không gian - đa phong cách tại Hà Nội & Nha Trang
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
                        Lợi Ích Thiết Kế Căn Hộ Chuyên Nghiệp
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
                        Phong Cách Thiết Kế & Báo Giá
                    </h2>
                    <p className="section-subtitle">3 phong cách thiết kế căn hộ phổ biến</p>
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
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
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
                        <i className="fas fa-lightbulb icon-primary"></i>
                        Lưu Ý Khi Thiết Kế Căn Hộ
                    </h2>
                    <div className="highlight-box">
                        <i className="fas fa-info-circle"></i>
                        <p><strong>Tips quan trọng:</strong> Ưu tiên nội thất đa năng, tủ âm tường, giường có ngăn kéo. Sử dụng gương, màu sáng để tạo cảm giác rộng. Hạn chế vách ngăn cứng, dùng rèm, kệ để phân chia không gian linh hoạt.</p>
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

export default CanHoChungCuPage;
