import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongPhongCachHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const trends = [
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Không Gian Mở – Tối Ưu Diện Tích',
            features: [
                'Liên thông phòng khách – bếp – ăn',
                'Tích hợp bàn đảo bếp kiêm bàn ăn',
                'Phù hợp chung cư diện tích nhỏ (40–70m²)'
            ],
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-brain',
            title: 'Nội Thất Thông Minh – Đa Năng',
            features: [
                'Sofa giường, bàn trà nâng hạ, giường gấp tường',
                'Giải pháp "2 trong 1" cho nhà phố Hà Nội chật hẹp',
                'Tối ưu không gian lưu trữ thông minh'
            ],
            color: '#10b981'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Vật Liệu Bền Vững – Chống Ẩm Mặn',
            features: [
                'Gỗ công nghiệp chống ẩm, thép không gỉ, kính cường lực',
                'Đặc biệt cần cho Nha Trang để tránh ẩm mặn & han gỉ',
                'Thân thiện môi trường, bền lâu'
            ],
            color: '#10b981'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Ánh Sáng Tự Nhiên & Nhân Tạo',
            features: [
                'Sử dụng cửa kính lớn, giếng trời',
                'Kết hợp đèn LED âm trần, đèn hắt tường',
                'Tăng chiều sâu không gian, tiết kiệm điện'
            ],
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-palette',
            title: 'Màu Sắc Trung Tính – Nhấn Điểm',
            features: [
                'Chủ đạo: trắng, be, ghi',
                'Nhấn: gỗ nâu, đen, xanh đậm → tạo cá tính',
                'Dễ phối hợp đồ nội thất'
            ],
            color: '#8b5cf6'
        }
    ];

    const painPoints = [
        {
            pain: 'Nhà Phố Hà Nội Chật Hẹp, Thiếu Sáng',
            solution: 'Giếng trời, cửa kính lớn, gương phản chiếu ánh sáng',
            icon: 'fas fa-sun',
            color: '#f59e0b'
        },
        {
            pain: 'Chung Cư Nhỏ, Thiếu Không Gian Chứa Đồ',
            solution: 'Nội thất thông minh, đa năng, kệ âm tường',
            icon: 'fas fa-box',
            color: '#3b82f6'
        },
        {
            pain: 'Nha Trang Khí Hậu Ẩm Mặn, Nội Thất Nhanh Hỏng',
            solution: 'Gỗ công nghiệp chống ẩm, inox 304, kính cường lực',
            icon: 'fas fa-water',
            color: '#06b6d4'
        },
        {
            pain: 'Phong Cách Hiện Đại Dễ Bị Đơn Điệu, Lạnh Lẽo',
            solution: 'Trang trí bằng cây xanh, đèn vàng ấm, tranh treo tường',
            icon: 'fas fa-seedling',
            color: '#10b981'
        }
    ];

    const priceTable = [
        {
            type: 'Thiết kế nội thất căn hộ chung cư',
            price: '150.000 - 200.000 VNĐ/m²',
            note: 'Bao gồm phối cảnh 3D chi tiết'
        },
        {
            type: 'Thiết kế nội thất nhà phố – nhà ống',
            price: '160.000 - 220.000 VNĐ/m²',
            note: 'Tối ưu diện tích nhỏ, nhiều tầng'
        },
        {
            type: 'Thiết kế nội thất biệt thự/villa hiện đại',
            price: '200.000 - 280.000 VNĐ/m²',
            note: 'Không gian lớn, nhiều hạng mục cao cấp'
        }
    ];

    const designNotes = [
        {
            icon: 'fas fa-check-circle',
            title: 'Ưu tiên nội thất thông minh, gọn nhẹ',
            color: '#10b981'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Bố trí ánh sáng tự nhiên & giếng trời cho nhà phố Hà Nội',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Tại Nha Trang, cần chống ẩm mặn cho vật liệu gỗ & kim loại',
            color: '#06b6d4'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Tránh lạm dụng màu tối → khiến không gian nhỏ hẹp hơn',
            color: '#8b5cf6'
        }
    ];

    const faqData = [
        {
            question: 'Xu hướng nội thất Hiện đại 2025 có gì mới?',
            answer: 'Năm 2025 tập trung vào không gian mở liên thông, nội thất thông minh đa năng, vật liệu bền vững chống ẩm mặn, và sử dụng tối ưu ánh sáng tự nhiên kết hợp LED tiết kiệm điện.'
        },
        {
            question: 'Làm sao để căn hộ nhỏ trở nên rộng rãi hơn?',
            answer: 'Sử dụng không gian mở liên thông, nội thất đa năng (sofa giường, bàn gấp), gương tăng chiều sâu, màu sắc sáng, và tận dụng tối đa ánh sáng tự nhiên.'
        },
        {
            question: 'Vật liệu nào chống ẩm mặn tốt cho Nha Trang?',
            answer: 'Gỗ công nghiệp chống ẩm phủ melamine, inox 304, nhôm kính, kính cường lực, và đá nhân tạo. Tránh gỗ tự nhiên và sắt thường dễ bị han gỉ.'
        },
        {
            question: 'Làm thế nào để không gian không bị lạnh lẽo?',
            answer: 'Kết hợp gỗ ấm màu, sử dụng đèn LED vàng ấm (2700-3000K), thêm cây xanh, tranh treo tường, thảm trải sàn và gối tựa màu sắc.'
        },
        {
            question: 'Chi phí thiết kế theo xu hướng mới tốn bao nhiêu?',
            answer: 'Tương tự bảng giá chuẩn: 150-280K VNĐ/m² tùy loại hình. Nội thất thông minh có thể tăng 10-15% nhưng tiết kiệm không gian và bền lâu hơn.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <i className="fas fa-chart-line"></i>
                            Xu Hướng Thiết Kế Nội Thất Phong Cách Hiện Đại 2025
                        </h1>
                        <p className="hero-subtitle">
                            Giải pháp cho nhà phố & chung cư
                        </p>
                        <p className="hero-description">
                            Xu hướng thiết kế nội thất phong cách Hiện đại 2025 cho nhà phố & chung cư tại Hà Nội, Nha Trang. 
                            Giải pháp tối ưu diện tích nhỏ, thoáng sáng, tiện nghi, chuẩn phong thủy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle icon-primary"></i>
                        Giới Thiệu Xu Hướng 2025
                    </h2>
                    <div className="content-box">
                        <p>
                            Trong năm 2025, phong cách nội thất <strong>Hiện đại (Modern Style)</strong> tiếp tục là lựa chọn hàng đầu 
                            cho nhà phố và căn hộ chung cư.
                        </p>
                        <h3>Lý do:</h3>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                Tối ưu không gian hẹp – phù hợp quỹ đất nhỏ tại Hà Nội
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Mở rộng tầm nhìn, thoáng mát – hợp khí hậu ven biển Nha Trang
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Chi phí hợp lý, dễ ứng dụng cho nhiều loại hình nhà ở
                            </li>
                        </ul>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: '#3b82f6' }}></i>
                            {' '}<strong>Đây không chỉ là phong cách thời thượng mà còn là giải pháp thực tế cho hàng triệu gia đình Việt.</strong>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Xu Hướng Nổi Bật Trong Thiết Kế Nội Thất Hiện Đại 2025
                    </h2>
                    <div className="grid-2">
                        {trends.map((trend, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: trend.color }}>
                                    <i className={trend.icon}></i>
                                    {trend.title}
                                </h3>
                                <ul>
                                    {trend.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-exclamation-triangle icon-warning"></i>
                        Nỗi Đau Khách Hàng & Giải Pháp
                    </h2>
                    <div className="grid-2">
                        {painPoints.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: item.color }}>
                                    <i className={item.icon}></i>
                                    Nỗi Đau: {item.pain}
                                </h3>
                                <div className="content-box" style={{ background: '#f0fdf4', marginTop: '0.5rem' }}>
                                    <p>
                                        <i className="fas fa-lightbulb" style={{ color: '#10b981' }}></i>
                                        <strong> Giải pháp:</strong> {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Lưu Ý Khi Thiết Kế Nội Thất Hiện Đại Cho Nhà Phố & Chung Cư
                    </h2>
                    <div className="grid-2">
                        {designNotes.map((note, index) => (
                            <div key={index} className="info-card">
                                <p>
                                    <i className={note.icon} style={{ color: note.color }}></i>
                                    {' '}{note.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-gift icon-gift"></i>
                        Ưu Đãi & Cam Kết Dịch Vụ
                    </h2>
                    <div className="grid-4">
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-comments" style={{ color: '#3b82f6' }}></i>
                                Tư Vấn Miễn Phí
                            </h3>
                            <p>Miễn phí tư vấn ý tưởng ban đầu</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-cube" style={{ color: '#10b981' }}></i>
                                Thiết Kế 3D
                            </h3>
                            <p>Thiết kế 3D chân thực, dễ dàng hình dung</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-user-tie" style={{ color: '#f59e0b' }}></i>
                                KTS Kinh Nghiệm
                            </h3>
                            <p>Đội ngũ KTS nhiều kinh nghiệm</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-file-alt" style={{ color: '#8b5cf6' }}></i>
                                Hồ Sơ Chi Tiết
                            </h3>
                            <p>Bàn giao hồ sơ, hỗ trợ giám sát</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
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

export default XuHuongPhongCachHienDaiPage;
