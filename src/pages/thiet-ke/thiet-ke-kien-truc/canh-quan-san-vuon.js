import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CanhQuanSanVuonPage = () => {
    const [activeTab, setActiveTab] = useState('modern');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'modern',
            name: 'Sân Vườn Hiện Đại',
            price: '80,000 - 150,000 VNĐ/m²',
            description: 'Đường nét tối giản, nhiều mảng xanh, kết hợp ánh sáng',
            features: ['Thiết kế tối giản', 'Cây xanh hiện đại', 'Ánh sáng nghệ thuật', 'Đá tự nhiên', 'Lối đi hợp lý', 'Dễ bảo trì'],
            sizes: [
                { area: '20-50m²', type: 'Sân vườn nhỏ', price: '2-8 triệu', features: 'Nhà phố' },
                { area: '50-100m²', type: 'Sân vườn trung', price: '4-15 triệu', features: 'Biệt thự' },
                { area: '100-300m²', type: 'Sân vườn lớn', price: '8-45 triệu', features: 'Villa' }
            ],
            bgColor: '#22c55e'
        },
        {
            id: 'japanese',
            name: 'Sân Vườn Nhật Bản',
            price: '150,000 - 250,000 VNĐ/m²',
            description: 'Tiểu cảnh đá, bonsai, hồ cá koi, cầu gỗ',
            features: ['Tiểu cảnh đá', 'Bonsai Nhật', 'Hồ cá koi', 'Cầu gỗ', 'Đèn đá', 'Thiền Zen'],
            sizes: [
                { area: '30-70m²', type: 'Vườn Nhật nhỏ', price: '5-18 triệu', features: 'Có tiểu cảnh' },
                { area: '70-150m²', type: 'Vườn Nhật trung', price: '11-38 triệu', features: 'Có hồ koi' },
                { area: '150-400m²', type: 'Vườn Nhật lớn', price: '23-100 triệu', features: 'Đầy đủ' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'european',
            name: 'Sân Vườn Châu Âu',
            price: '100,000 - 200,000 VNĐ/m²',
            description: 'Bãi cỏ rộng, đài phun nước, ghế nghỉ ngoài trời',
            features: ['Bãi cỏ xanh', 'Đài phun nước', 'Ghế đá nghệ thuật', 'Cây hoa rực rỡ', 'Hàng rào xanh', 'BBQ ngoài trời'],
            sizes: [
                { area: '50-100m²', type: 'Vườn Âu nhỏ', price: '5-20 triệu', features: 'Bãi cỏ cơ bản' },
                { area: '100-200m²', type: 'Vườn Âu trung', price: '10-40 triệu', features: 'Có phun nước' },
                { area: '200-500m²', type: 'Vườn Âu lớn', price: '20-100 triệu', features: 'Đầy đủ' }
            ],
            bgColor: '#10b981'
        }
    ];

    const benefits = [
        { icon: 'fas fa-spa', title: 'Thẩm mỹ cao', description: 'Biến không gian sống thành tác phẩm nghệ thuật' },
        { icon: 'fas fa-yin-yang', title: 'Phong thủy tốt', description: 'Mang lại tài lộc, sức khỏe và cân bằng' },
        { icon: 'fas fa-leaf', title: 'Không gian thư giãn', description: 'Hồ cá koi, thác nước giúp giảm căng thẳng' },
        { icon: 'fas fa-chart-line', title: 'Tăng giá trị BĐS', description: 'Nhà có sân vườn đẹp luôn có giá trị cao hơn' }
    ];

    const faqData = [
        { question: 'Sân vườn nhỏ 20m² có thiết kế được không?', answer: 'Hoàn toàn được! Với 20m² có thể thiết kế góc xanh mini với cây cảnh, tiểu cảnh đá, lối đi nhỏ. Nếu thích hồ cá koi có thể làm hồ nhỏ 3-5m². Thiết kế thông minh giúp không gian tuy nhỏ nhưng vẫn đẹp và thoáng.' },
        { question: 'Chi phí thiết kế và thi công sân vườn?', answer: 'Chi phí thiết kế 80,000-250,000 VNĐ/m². Thi công 500,000-2,000,000 VNĐ/m² tùy phong cách. Sân vườn 50m² cần 25-100 triệu (thiết kế + thi công). Hồ cá koi thêm 20-50 triệu.' },
        { question: 'Sân vườn ở Nha Trang nên trồng cây gì?', answer: 'Nên trồng cây chịu nắng, muối mặn: Dừa, dứa cảnh, xương rồng, sen đá, cỏ lá gừng, phượng vĩ, bàng, dương. Tránh cây ưa ẩm, không chịu muối. Cần tưới đủ nước mùa khô.' }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tree icon-primary"></i>
                        Thiết Kế Cảnh Quan - Sân Vườn 2025
                    </h1>
                    <p className="section-subtitle">Không gian xanh - tiểu cảnh đẹp - hồ cá koi tại Hà Nội & Nha Trang</p>
                    <div className="grid-4">
                        {benefits.map((item, index) => (
                            <div key={index} className="feature-item"><i className={item.icon}></i><span>{item.title}</span></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-star icon-primary"></i>Lợi Ích Thiết Kế Cảnh Quan Chuyên Nghiệp</h2>
                    <div className="grid-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div className="info-icon"><i className={benefit.icon}></i></div>
                                <h3>{benefit.title}</h3><p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-tags icon-primary"></i>Phong Cách Thiết Kế & Báo Giá</h2>
                    <p className="section-subtitle">3 phong cách thiết kế sân vườn phổ biến</p>
                    <div className="tabs">
                        {designTypes.map(type => (
                            <button key={type.id} className={`tab ${activeTab === type.id ? 'active' : ''}`} onClick={() => setActiveTab(type.id)}>{type.name}</button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="detail-card">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3><div className="price-range">{currentType.price}</div><p>{currentType.description}</p>
                            </div>
                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (<li key={index}><i className="fas fa-check"></i>{feature}</li>))}
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
                    <h2 className="section-title"><i className="fas fa-question-circle icon-primary"></i>Câu Hỏi Thường Gặp</h2>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className={`faq-question ${activeFaq === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span><i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
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

export default CanhQuanSanVuonPage;
