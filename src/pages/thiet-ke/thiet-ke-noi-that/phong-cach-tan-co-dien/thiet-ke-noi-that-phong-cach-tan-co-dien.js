import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const ThietKeNoiThatPhongCachTanCoDien = () => {
    const [activeTab, setActiveTab] = useState('chung-cu');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'chung-cu',
            name: 'Căn Hộ Chung Cư Cao Cấp',
            price: '180,000 - 250,000 VNĐ/m²',
            description: 'Thiết kế nội thất tân cổ điển cho căn hộ chung cư cao cấp',
            features: [
                'Phối cảnh 3D chi tiết',
                'Màu sắc trắng, kem, vàng ánh kim',
                'Phào chỉ tường nhẹ nhàng',
                'Đèn chùm pha lê trang trí',
                'Nội thất cao cấp phù hợp diện tích',
                'Tư vấn phong thủy miễn phí'
            ],
            sizes: [
                { area: '60-80m²', rooms: '2 phòng ngủ', price: '180-200k', style: 'Tối giản tinh tế' },
                { area: '80-100m²', rooms: '3 phòng ngủ', price: '200-230k', style: 'Sang trọng cân đối' },
                { area: '100-150m²', rooms: '3-4 phòng ngủ', price: '230-250k', style: 'Đẳng cấp hoàn hảo' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'nha-pho',
            name: 'Nhà Phố - Nhà Ống',
            price: '200,000 - 260,000 VNĐ/m²',
            description: 'Thiết kế nội thất tân cổ điển cho nhà phố, nhà ống nhiều tầng',
            features: [
                'Thiết kế nhiều tầng tỉ mỉ',
                'Phào chỉ trang trí tinh giản',
                'Tối ưu ánh sáng tự nhiên',
                'Giếng trời thông thoáng',
                'Cầu thang nghệ thuật',
                'Nội thất đa năng tiết kiệm diện tích'
            ],
            sizes: [
                { area: '60-100m²', floors: '3-4 tầng', price: '200-220k', type: 'Nhà ống hẹp' },
                { area: '100-150m²', floors: '3-4 tầng', price: '220-240k', type: 'Nhà phố trung' },
                { area: '150-250m²', floors: '3-5 tầng', price: '240-260k', type: 'Nhà phố rộng' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'biet-thu',
            name: 'Biệt Thự/Villa',
            price: '250,000 - 320,000 VNĐ/m²',
            description: 'Thiết kế nội thất tân cổ điển cao cấp cho biệt thự, villa',
            features: [
                'Không gian lớn, chi tiết nghệ thuật',
                'Đá marble cao cấp',
                'Đèn chùm pha lê lớn',
                'Trần cao, phào chỉ tinh xảo',
                'Nội thất gỗ tự nhiên',
                'Bố trí đẳng đối, hoàng tráng'
            ],
            sizes: [
                { area: '200-300m²', floors: '2-3 tầng', price: '250-280k', style: 'Biệt thự vườn' },
                { area: '300-500m²', floors: '3-4 tầng', price: '280-300k', style: 'Biệt thú đơn lập' },
                { area: '500-1000m²', floors: '3-5 tầng', price: '300-320k', style: 'Villa cao cấp' }
            ],
            bgColor: '#f59e0b'
        }
    ];

    const features = [
        {
            title: 'Màu Sắc Sang Trọng',
            description: 'Trắng, kem, vàng ánh kim, xanh cổ vịt, xám ghi - tạo không gian quý phái',
            icon: 'fas fa-palette'
        },
        {
            title: 'Chất Liệu Cao Cấp',
            description: 'Gỗ tự nhiên, đá marble, kim loại mạ vàng, vải nhung/da cao cấp',
            icon: 'fas fa-gem'
        },
        {
            title: 'Hoa Văn Tinh Tế',
            description: 'Phào chỉ tường, trần, cột giả - nhẹ nhàng, không rườm rà',
            icon: 'fas fa-paint-brush'
        },
        {
            title: 'Không Gian Cân Đối',
            description: 'Bố trí đăng đối, tạo cảm giác bề thế nhưng không nặng nề',
            icon: 'fas fa-balance-scale'
        }
    ];

    const applicationAreas = [
        {
            city: 'Hà Nội',
            areas: [
                { type: 'Biệt thự cao cấp', note: 'Chú trọng ánh sáng vàng' },
                { type: 'Chung cư hạng sang', note: 'Tối ưu diện tích' },
                { type: 'Nhà phố 3-5 tầng', note: 'Giếng trời thông thoáng' }
            ],
            icon: 'fas fa-city',
            color: '#ef4444'
        },
        {
            city: 'Nha Trang',
            areas: [
                { type: 'Villa ven biển', note: 'Vật liệu chống ẩm mặn' },
                { type: 'Khách sạn boutique', note: 'Sang trọng, tiện nghi' },
                { type: 'Homestay cao cấp', note: 'Kết hợp view biển' }
            ],
            icon: 'fas fa-umbrella-beach',
            color: '#3b82f6'
        }
    ];

    const advantages = [
        { text: 'Sang trọng - đẳng cấp, tạo giá trị khác biệt', icon: 'fas fa-crown' },
        { text: 'Thời gian sử dụng lâu dài, ít lỗi mốt', icon: 'fas fa-clock' },
        { text: 'Phù hợp phong thủy & bền vững', icon: 'fas fa-yin-yang' },
        { text: 'Tăng giá trị bất động sản', icon: 'fas fa-chart-line' }
    ];

    const disadvantages = [
        { text: 'Chi phí cao hơn phong cách hiện đại', solution: 'Tối ưu vật liệu, chọn gỗ công nghiệp chất lượng' },
        { text: 'Thi công phức tạp, cần KTS giàu kinh nghiệm', solution: 'Đội ngũ KTS chuyên sâu về tân cổ điển' },
        { text: 'Dễ trở nên rườm rà nếu không tinh tế', solution: 'Thiết kế 3D chi tiết, kiểm soát từng chi tiết' }
    ];

    const designNotes = [
        'Không lạm dụng chi tiết → tránh cảm giác nặng nề',
        'Lựa chọn màu sắc sáng kết hợp ánh kim để cân bằng',
        'Với khí hậu Nha Trang: chống ẩm mặn cho gỗ & kim loại',
        'Luôn có bản vẽ 3D để kiểm soát chi phí & thẩm mỹ',
        'Kết hợp ánh sáng tự nhiên với đèn nghệ thuật',
        'Đảm bảo tính đồng bộ giữa kiến trúc và nội thất'
    ];

    const faqs = [
        {
            question: 'Phong cách tân cổ điển có phù hợp với căn hộ chung cư nhỏ không?',
            answer: 'Hoàn toàn phù hợp! Tân cổ điển hiện đại đã được tinh giản, phù hợp cả căn hộ nhỏ. Chúng tôi sẽ sử dụng màu sáng, phào chỉ nhẹ nhàng, nội thất gọn gàng để tối ưu không gian.'
        },
        {
            question: 'Chi phí thiết kế nội thất tân cổ điển có đắt không?',
            answer: 'Chi phí từ 180,000 - 320,000 VNĐ/m² tùy loại công trình. Có thể tối ưu bằng cách chọn gỗ công nghiệp, đá nhân tạo chất lượng thay vì toàn bộ vật liệu tự nhiên.'
        },
        {
            question: 'Tại Nha Trang, nội thất tân cổ điển có bị ẩm mốc không?',
            answer: 'Không nếu chọn đúng vật liệu. Chúng tôi sử dụng gỗ chống ẩm, inox 304, kim loại mạ PVD và lớp phủ bảo vệ đặc biệt cho khu vực ven biển.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thiết kế 3D: 7-14 ngày. Thi công: 2-4 tháng tùy diện tích. Biệt thự lớn có thể mất 4-6 tháng để hoàn thiện chi tiết.'
        },
        {
            question: 'Có bảo hành không?',
            answer: 'Có. Bảo hành 24 tháng cho nội thất gỗ, 12 tháng cho hệ thống điện và các thiết bị. Bảo trì định kỳ miễn phí trong 6 tháng đầu.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);

    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="container">
                    <h1 className="page-title">
                        <i className="fas fa-landmark"></i>
                        Thiết Kế Nội Thất Phong Cách Tân Cổ Điển 2025
                    </h1>
                    <p className="page-subtitle">
                        Dịch vụ thiết kế nội thất phong cách Tân cổ điển tại Hà Nội & Nha Trang
                        <br />
                        <strong>Sang trọng – Tinh tế – Đẳng cấp</strong>
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-card">
                        <h2>
                            <i className="fas fa-info-circle"></i>
                            Giới Thiệu Về Phong Cách Tân Cổ Điển
                        </h2>
                        <p>
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> là sự kết hợp tinh tế giữa nét sang trọng cổ điển và sự tối giản hiện đại. 
                            Không cầu kỳ như cổ điển châu Âu, nhưng vẫn giữ sự quý phái – đẳng cấp, Tân cổ điển ngày càng được ưa chuộng tại Việt Nam.
                        </p>
                    </div>
                </div>
            </section>

            <section className="features-grid-section">
                <div className="container">
                    <h2 className="section-title">Đặc Trưng Phong Cách Tân Cổ Điển</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tabs-section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Thiết Kế Nội Thất Tân Cổ Điển 2025</h2>
                    
                    <div className="tabs-container">
                        {designTypes.map((type) => (
                            <button
                                key={type.id}
                                className={`tab-button ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                                style={activeTab === type.id ? { backgroundColor: type.bgColor } : {}}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="tab-content">
                            <div className="price-header" style={{ backgroundColor: currentType.bgColor }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-badge">{currentType.price}</div>
                            </div>

                            <div className="content-section">
                                <p className="description">{currentType.description}</p>

                                <div className="features-list">
                                    <h4>
                                        <i className="fas fa-star"></i>
                                        Đặc Điểm Nổi Bật
                                    </h4>
                                    <ul>
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check-circle"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sizes-table">
                                    <h4>
                                        <i className="fas fa-table"></i>
                                        Bảng Giá Chi Tiết
                                    </h4>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Diện Tích</th>
                                                <th>{currentType.id === 'chung-cu' ? 'Số Phòng' : currentType.id === 'nha-pho' ? 'Số Tầng' : 'Loại Hình'}</th>
                                                <th>Đơn Giá (VNĐ/m²)</th>
                                                <th>Phong Cách</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentType.sizes.map((size, index) => (
                                                <tr key={index}>
                                                    <td>{size.area}</td>
                                                    <td>{size.rooms || size.floors || size.type}</td>
                                                    <td><strong>{size.price}</strong></td>
                                                    <td>{size.style}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="note-box">
                        <i className="fas fa-info-circle"></i>
                        <strong>Lưu ý:</strong> Giá thay đổi theo diện tích, vật liệu, độ chi tiết. Liên hệ để nhận báo giá chính xác.
                    </div>
                </div>
            </section>

            <section className="application-section">
                <div className="container">
                    <h2 className="section-title">Ứng Dụng Tại Hà Nội & Nha Trang</h2>
                    <div className="application-grid">
                        {applicationAreas.map((area, index) => (
                            <div key={index} className="application-card" style={{ borderColor: area.color }}>
                                <div className="application-header" style={{ backgroundColor: area.color }}>
                                    <i className={area.icon}></i>
                                    <h3>{area.city}</h3>
                                </div>
                                <ul className="application-list">
                                    {area.areas.map((item, idx) => (
                                        <li key={idx}>
                                            <strong>{item.type}</strong>
                                            <span>{item.note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pros-cons-section">
                <div className="container">
                    <div className="pros-cons-grid">
                        <div className="pros-card">
                            <h3>
                                <i className="fas fa-thumbs-up"></i>
                                Ưu Điểm
                            </h3>
                            <ul>
                                {advantages.map((adv, index) => (
                                    <li key={index}>
                                        <i className={adv.icon}></i>
                                        {adv.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="cons-card">
                            <h3>
                                <i className="fas fa-exclamation-triangle"></i>
                                Nhược Điểm & Giải Pháp
                            </h3>
                            <ul>
                                {disadvantages.map((dis, index) => (
                                    <li key={index}>
                                        <strong>{dis.text}</strong>
                                        <p>
                                            <i className="fas fa-arrow-right"></i>
                                            {dis.solution}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="notes-section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Khi Thiết Kế Nội Thất Tân Cổ Điển</h2>
                    <div className="notes-grid">
                        {designNotes.map((note, index) => (
                            <div key={index} className="note-item">
                                <i className="fas fa-lightbulb"></i>
                                <p>{note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    <div className="faq-list">
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
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="commitment-section">
                <div className="container">
                    <h2 className="section-title">Ưu Đãi & Cam Kết Dịch Vụ</h2>
                    <div className="commitment-grid">
                        <div className="commitment-card">
                            <i className="fas fa-gift"></i>
                            <h4>Miễn Phí Tư Vấn</h4>
                            <p>Tư vấn ý tưởng ban đầu hoàn toàn miễn phí</p>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-cube"></i>
                            <h4>Thiết Kế 3D</h4>
                            <p>Phối cảnh 3D chân thực, chi tiết từng góc nhìn</p>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-user-tie"></i>
                            <h4>KTS Kinh Nghiệm</h4>
                            <p>Đội ngũ KTS lâu năm chuyên sâu tân cổ điển</p>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-hard-hat"></i>
                            <h4>Giám Sát Thi Công</h4>
                            <p>Giám sát chặt chẽ, đảm bảo đúng thiết kế</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default ThietKeNoiThatPhongCachTanCoDien;
