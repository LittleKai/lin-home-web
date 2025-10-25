import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const TuDuongNhaThoPage = () => {
    const [activeTab, setActiveTab] = useState('traditional');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'traditional',
            name: 'Kiến Trúc Truyền Thống',
            price: '200,000 - 300,000 VNĐ/m²',
            description: 'Mái ngói đỏ, cột gỗ lim, họa tiết chạm khắc rồng phượng. Phù hợp vùng Bắc Bộ, Hà Nội',
            features: ['Mái ngói đỏ truyền thống', 'Cột gỗ lim, gõ', 'Chạm khắc rồng phượng', 'Bàn thờ chính giữa', 'Hoành phi, câu đối', 'Phong thủy chuẩn'],
            sizes: [
                { area: '40-80m²', type: 'Nhà thờ nhỏ', price: '8-24 triệu', features: 'Gia đình nhỏ' },
                { area: '80-150m²', type: 'Nhà thờ trung', price: '16-45 triệu', features: 'Dòng họ vừa' },
                { area: '150-300m²', type: 'Từ đường lớn', price: '30-90 triệu', features: 'Dòng họ lớn' }
            ],
            bgColor: '#a855f7'
        },
        {
            id: 'modern-traditional',
            name: 'Kết Hợp Hiện Đại',
            price: '180,000 - 280,000 VNĐ/m²',
            description: 'Giữ nét truyền thống, kết hợp bê tông giả gỗ, đá tự nhiên. Bền vững, chi phí hợp lý',
            features: ['Bê tông giả gỗ', 'Đá tự nhiên', 'Giữ nét truyền thống', 'Bền vững hơn', 'Chi phí hợp lý', 'Dễ bảo trì'],
            sizes: [
                { area: '40-80m²', type: 'Nhà thờ hiện đại', price: '7-22 triệu', features: 'Tiết kiệm' },
                { area: '80-150m²', type: 'Từ đường kết hợp', price: '14-42 triệu', features: 'Cân bằng' },
                { area: '150-300m²', type: 'Từ đường cao cấp', price: '27-84 triệu', features: 'Đẳng cấp' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'garden',
            name: 'Từ Đường Kết Hợp Sân Vườn',
            price: '220,000 - 300,000 VNĐ/m²',
            description: 'Hồ cá koi, cây xanh, non bộ. Thường áp dụng tại Nha Trang và các vùng ngoại ô',
            features: ['Hồ cá koi phong thủy', 'Cây xanh quanh năm', 'Non bộ, tiểu cảnh', 'Lối đi lát đá', 'Đèn chiếu sáng', 'Không gian yên tĩnh'],
            sizes: [
                { area: '80-150m²', type: 'Nhà thờ + vườn nhỏ', price: '18-45 triệu', features: 'Có tiểu cảnh' },
                { area: '150-250m²', type: 'Từ đường + vườn', price: '33-75 triệu', features: 'Có hồ koi' },
                { area: '250-500m²', type: 'Từ đường lớn + vườn', price: '55-150 triệu', features: 'Hoàn chỉnh' }
            ],
            bgColor: '#22c55e'
        }
    ];

    const benefits = [
        { icon: 'fas fa-yin-yang', title: 'Chuẩn phong thủy', description: 'Bố trí hướng, không gian thờ đúng quy chuẩn' },
        { icon: 'fas fa-landmark', title: 'Giữ bản sắc văn hóa', description: 'Kiến trúc truyền thống đặc trưng vùng miền' },
        { icon: 'fas fa-gem', title: 'Thẩm mỹ trang nghiêm', description: 'Không gian linh thiêng, bền vững' },
        { icon: 'fas fa-tree', title: 'Kết hợp cảnh quan', description: 'Tạo không gian thanh tịnh, gần gũi thiên nhiên' }
    ];

    const faqData = [
        { question: 'Từ đường cần diện tích tối thiểu bao nhiêu?', answer: 'Nhà thờ nhỏ cần tối thiểu 30-40m². Từ đường dòng họ nên có 80-150m². Nếu kết hợp sân vườn, hồ cá thì cần >150m². Quan trọng là thiết kế hợp phong thủy, bố trí bàn thờ đúng hướng.' },
        { question: 'Chi phí xây từ đường khoảng bao nhiêu?', answer: 'Chi phí thiết kế 200,000-300,000 VNĐ/m². Xây dựng 6-12 triệu/m² tùy vật liệu (gỗ thật đắt hơn bê tông giả gỗ). Từ đường 100m² cần 600 triệu - 1.2 tỷ (thiết kế + xây dựng). Gỗ lim, gõ tăng chi phí 30-50%.' },
        { question: 'Nên chọn gỗ thật hay bê tông giả gỗ?', answer: 'Gỗ thật (lim, gõ) đẹp, sang trọng nhưng đắt (15-25 triệu/m³), cần bảo trì thường xuyên. Bê tông giả gỗ rẻ hơn 40-60%, bền hơn, ít mối mọt nhưng kém linh thiêng. Nhiều gia đình chọn kết hợp: cột chính gỗ thật, phần khác giả gỗ.' }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title"><i className="fas fa-torii-gate icon-primary"></i>Thiết Kế Từ Đường - Nhà Thờ 2025</h1>
                    <p className="section-subtitle">Kiến trúc truyền thống - chuẩn phong thủy - bền vững tại Hà Nội & Nha Trang</p>
                    <div className="grid-4">
                        {benefits.map((item, index) => (<div key={index} className="feature-item"><i className={item.icon}></i><span>{item.title}</span></div>))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-star icon-primary"></i>Lợi Ích Thiết Kế Từ Đường Chuyên Nghiệp</h2>
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
                    <div className="tabs">
                        {designTypes.map(type => (<button key={type.id} className={`tab ${activeTab === type.id ? 'active' : ''}`} onClick={() => setActiveTab(type.id)}>{type.name}</button>))}
                    </div>

                    {currentType && (
                        <div className="detail-card">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3><div className="price-range">{currentType.price}</div><p>{currentType.description}</p>
                            </div>
                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
                                    <ul className="info-list">{currentType.features.map((feature, index) => (<li key={index}><i className="fas fa-check"></i>{feature}</li>))}</ul>
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

export default TuDuongNhaThoPage;
