import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const BietThuPage = () => {
    const [activeTab, setActiveTab] = useState('modern');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'modern',
            name: 'Biệt Thự Hiện Đại',
            price: '220,000 - 350,000 VNĐ/m²',
            description: 'Kiến trúc mở, nhiều kính, tối giản. Phù hợp gia đình trẻ, biệt thự ven biển Nha Trang',
            features: [
                'Kiến trúc mở, tối giản',
                'Nhiều kính, ánh sáng tự nhiên',
                'Đường nét hiện đại',
                'Không gian linh hoạt',
                'Hồ bơi vô cực',
                'Sân vườn xanh mát'
            ],
            sizes: [
                { area: '200-300m²', type: 'Biệt thự 2 tầng', price: '44-105 triệu', features: '3-4 phòng ngủ' },
                { area: '300-500m²', type: 'Biệt thự 3 tầng', price: '66-175 triệu', features: '4-5 phòng ngủ' },
                { area: '500-800m²', type: 'Biệt thự cao cấp', price: '110-280 triệu', features: '5-7 phòng ngủ' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'neoclassic',
            name: 'Biệt Thự Tân Cổ Điển',
            price: '250,000 - 350,000 VNĐ/m²',
            description: 'Kết hợp sang trọng, tinh tế và tiện nghi. Phù hợp biệt thự Hà Nội, ngoại ô',
            features: [
                'Sang trọng, tinh tế',
                'Cột trụ, phào chỉ đẹp',
                'Ban công cổ điển',
                'Màu sắc trang nhã',
                'Chuẩn phong thủy',
                'Nội thất cao cấp'
            ],
            sizes: [
                { area: '200-300m²', type: 'Biệt thự tân cổ điển', price: '50-105 triệu', features: '3-4 phòng ngủ' },
                { area: '300-500m²', type: 'Biệt thự sang trọng', price: '75-175 triệu', features: '4-5 phòng ngủ' },
                { area: '500-800m²', type: 'Biệt thự đẳng cấp', price: '125-280 triệu', features: '5-7 phòng ngủ' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'classic',
            name: 'Biệt Thự Cổ Điển',
            price: '280,000 - 350,000 VNĐ/m²',
            description: 'Đường nét cầu kỳ, mái vòm, cột trụ lớn. Thể hiện sự quyền quý, uy nghiêm',
            features: [
                'Đường nét cầu kỳ',
                'Mái vòm, cột trụ lớn',
                'Phù điêu tinh xảo',
                'Quyền quý, uy nghiêm',
                'Chi tiết tỉ mỉ',
                'Giá trị bền vững'
            ],
            sizes: [
                { area: '300-400m²', type: 'Biệt thự cổ điển', price: '84-140 triệu', features: '4-5 phòng ngủ' },
                { area: '400-600m²', type: 'Biệt thự sang trọng', price: '112-210 triệu', features: '5-6 phòng ngủ' },
                { area: '600-1000m²', type: 'Biệt thự đẳng cấp', price: '168-350 triệu', features: '6-8 phòng ngủ' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'garden',
            name: 'Biệt Thự Sân Vườn',
            price: '240,000 - 350,000 VNĐ/m²',
            description: 'Nhiều cây xanh, tiểu cảnh, hồ cá koi. Mang thiên nhiên vào không gian sống',
            features: [
                'Nhiều cây xanh',
                'Tiểu cảnh, hồ cá koi',
                'Không gian mở',
                'Gần gũi thiên nhiên',
                'Thư giãn, nghỉ dưỡng',
                'Phong thủy tốt'
            ],
            sizes: [
                { area: '300-500m²', type: 'Biệt thự sân vườn', price: '72-175 triệu', features: '4-5 phòng ngủ' },
                { area: '500-800m²', type: 'Biệt thự vườn lớn', price: '120-280 triệu', features: '5-6 phòng ngủ' },
                { area: '800-1500m²', type: 'Biệt thự nghỉ dưỡng', price: '192-525 triệu', features: '6-8 phòng ngủ' }
            ],
            bgColor: '#22c55e'
        }
    ];

    const benefits = [
        { icon: 'fas fa-home', title: 'Tối ưu công năng', description: 'Bố trí hợp lý phòng khách, bếp, phòng ngủ, sân vườn' },
        { icon: 'fas fa-gem', title: 'Thẩm mỹ đẳng cấp', description: 'Kiến trúc sang trọng, nội thất tinh tế, bắt mắt' },
        { icon: 'fas fa-yin-yang', title: 'Phong thủy chuẩn', description: 'Mang lại may mắn, tài lộc cho gia chủ' },
        { icon: 'fas fa-chart-line', title: 'Tăng giá trị BĐS', description: 'Biệt thự thiết kế chuẩn có giá trị bền vững' },
        { icon: 'fas fa-tree', title: 'Không gian xanh', description: 'Sân vườn, hồ bơi, tiểu cảnh nghỉ dưỡng' }
    ];

    const faqData = [
        {
            question: 'Biệt thự khác villa như thế nào?',
            answer: 'Biệt thự thường có quy mô lớn hơn (>200m²), kiến trúc đồ sộ, đẳng cấp cao hơn, thường ở trong khu đô thị hoặc ngoại ô. Villa thường gắn liền với nghỉ dưỡng, ven biển, không gian mở. Tuy nhiên ranh giới ngày nay khá mờ nhạt.'
        },
        {
            question: 'Chi phí xây biệt thự 2 tầng 300m² khoảng bao nhiêu?',
            answer: 'Chi phí xây dựng 8-15 triệu/m² tùy cấp độ. Với 300m²: 2.4-4.5 tỷ (chưa gồm thiết kế, nội thất, sân vườn). Chi phí thiết kế 220,000-350,000 VNĐ/m² (66-105 triệu). Tổng dự án khoảng 3-6 tỷ.'
        },
        {
            question: 'Biệt thự cần diện tích đất tối thiểu bao nhiêu?',
            answer: 'Tối thiểu 200-250m² để xây biệt thự nhỏ. Lý tưởng 300-500m² để có sân vườn, hồ bơi thoải mái. Biệt thự sân vườn nên có >500m². Tỷ lệ xây dựng thường 40-50% diện tích đất.'
        },
        {
            question: 'Nên chọn phong cách nào cho biệt thự?',
            answer: 'Tùy vị trí và sở thích: (1) Hà Nội → Tân cổ điển hoặc hiện đại tinh tế, (2) Nha Trang → Hiện đại mở, biệt thự sân vườn, (3) Gia đình trẻ → Hiện đại, tối giản, (4) Gia đình lớn tuổi → Tân cổ điển, cổ điển. KTS sẽ tư vấn chi tiết.'
        },
        {
            question: 'Biệt thự có nhất thiết phải có hồ bơi không?',
            answer: 'Không bắt buộc nhưng rất nên có nếu diện tích cho phép. Hồ bơi nhỏ 15-20m² chi phí 80-150 triệu. Ngoài hồ bơi có thể thiết kế hồ cá koi, tiểu cảnh hoặc sân vườn xanh.'
        },
        {
            question: 'Thời gian thiết kế và xây dựng biệt thự mất bao lâu?',
            answer: 'Thiết kế: 1-2 tháng. Xây dựng: 8-15 tháng tùy quy mô. Biệt thú 300m² mất 8-10 tháng, 500m² mất 10-12 tháng, >800m² có thể mất 12-18 tháng. Nội thất thêm 2-4 tháng.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-house-user icon-primary"></i>
                        Thiết Kế Biệt Thự 2025
                    </h1>
                    <p className="section-subtitle">
                        Hiện đại - tân cổ điển - cổ điển tại Hà Nội & Nha Trang
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
                        Lợi Ích Thiết Kế Biệt Thự Chuyên Nghiệp
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
                        Phong Cách Thiết Kế Biệt Thự & Báo Giá
                    </h2>
                    <p className="section-subtitle">4 phong cách thiết kế biệt thự 2025</p>
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
                        Lưu Ý Khi Thiết Kế Biệt Thự
                    </h2>
                    <div className="grid-2">
                        <div className="note-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Với Hà Nội</h3>
                            <p>Chú trọng phong thủy và sự tiện nghi. Phong cách tân cổ điển hoặc hiện đại phù hợp khí hậu 4 mùa.</p>
                        </div>
                        <div className="note-card">
                            <i className="fas fa-umbrella-beach"></i>
                            <h3>Với Nha Trang</h3>
                            <p>Ưu tiên không gian mở, chống ẩm mặn, đón gió biển. Biệt thự sân vườn và hiện đại rất phù hợp.</p>
                        </div>
                    </div>
                    <div className="highlight-box">
                        <i className="fas fa-lightbulb"></i>
                        <p><strong>Khuyến nghị:</strong> Nên chọn đơn vị thiết kế có kinh nghiệm biệt thự cao cấp. Kết hợp đồng bộ kiến trúc - nội thất - sân vườn để đạt hiệu quả cao nhất.</p>
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

export default BietThuPage;
