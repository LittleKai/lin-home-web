import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const trends = [
        {
            id: 'khong-gian-mo',
            name: 'Không Gian Mở - Tối Ưu Diện Tích',
            icon: 'fas fa-door-open',
            description: 'Liên thông phòng khách – bếp – ăn. Tích hợp bàn đảo bếp kiêm bàn ăn',
            features: [
                'Liên thông các phòng',
                'Bàn đảo bếp đa năng',
                'Phù hợp chung cư 40-70m²',
                'Tối ưu diện tích sử dụng'
            ],
            color: '#10b981'
        },
        {
            id: 'noi-that-thong-minh',
            name: 'Nội Thất Thông Minh - Đa Năng',
            icon: 'fas fa-microchip',
            description: 'Sofa giường, bàn trà nâng hạ, giường gấp tường',
            features: [
                'Sofa giường tiện lợi',
                'Bàn trà có ngăn chứa',
                'Giường gấp tiết kiệm diện tích',
                'Giải pháp 2 trong 1'
            ],
            color: '#3b82f6'
        },
        {
            id: 'vat-lieu-ben-vung',
            name: 'Vật Liệu Bền Vững - Chống Ẩm Mặn',
            icon: 'fas fa-shield-alt',
            description: 'Gỗ công nghiệp chống ẩm, thép không gỉ, kính cường lực',
            features: [
                'Gỗ chống ẩm cao cấp',
                'Thép không gỉ inox 304',
                'Kính cường lực an toàn',
                'Phù hợp khí hậu Nha Trang'
            ],
            color: '#059669'
        },
        {
            id: 'anh-sang',
            name: 'Ánh Sáng Tự Nhiên & Nhân Tạo',
            icon: 'fas fa-lightbulb',
            description: 'Cửa kính lớn, giếng trời, đèn LED âm trần, đèn hắt tường',
            features: [
                'Cửa kính lớn đón sáng',
                'Giếng trời cho nhà phố',
                'Đèn LED âm trần',
                'Đèn hắt tăng chiều sâu'
            ],
            color: '#f59e0b'
        },
        {
            id: 'mau-sac',
            name: 'Màu Sắc Trung Tính - Nhấn Điểm',
            icon: 'fas fa-palette',
            description: 'Chủ đạo: trắng, be, ghi. Nhấn: gỗ nâu, đen, xanh đậm',
            features: [
                'Trắng: thoáng sạch',
                'Be: ấm áp',
                'Ghi: tinh tế',
                'Nhấn màu tạo cá tính'
            ],
            color: '#8b5cf6'
        }
    ];

    const painPoints = [
        {
            problem: 'Nhà phố Hà Nội chật hẹp, thiếu sáng',
            solution: 'Giếng trời, cửa kính lớn, gương phản chiếu ánh sáng',
            icon: 'fas fa-sun',
            color: '#f59e0b'
        },
        {
            problem: 'Chung cư nhỏ, thiếu không gian chứa đồ',
            solution: 'Nội thất thông minh, đa năng, kệ âm tường',
            icon: 'fas fa-box',
            color: '#3b82f6'
        },
        {
            problem: 'Nha Trang khí hậu ẩm mặn, nội thất nhanh hỏng',
            solution: 'Gỗ công nghiệp chống ẩm, inox 304, kính cường lực',
            icon: 'fas fa-water',
            color: '#06b6d4'
        },
        {
            problem: 'Phong cách hiện đại dễ bị đơn điệu, lạnh lẽo',
            solution: 'Trang trí bằng cây xanh, đèn vàng ấm, tranh treo tường',
            icon: 'fas fa-tree',
            color: '#10b981'
        }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '150,000 - 200,000',
            note: 'Bao gồm phối cảnh 3D chi tiết',
            features: ['Tối ưu diện tích nhỏ', 'Nội thất đa năng', 'Ánh sáng tốt']
        },
        {
            type: 'Nhà phố',
            price: '160,000 - 220,000',
            note: 'Tối ưu diện tích nhỏ, nhiều tầng',
            features: ['Giếng trời', 'Cửa kính lớn', 'Không gian liên thông']
        },
        {
            type: 'Biệt thự/Villa',
            price: '200,000 - 280,000',
            note: 'Không gian lớn, nhiều hạng mục cao cấp',
            features: ['Vật liệu cao cấp', 'Không gian mở', 'View đẹp']
        }
    ];

    const faqData = [
        {
            question: 'Phong cách Hiện đại có phù hợp với khí hậu Việt Nam không?',
            answer: 'Hoàn toàn phù hợp. Phong cách Hiện đại được thiết kế với không gian mở, ánh sáng tự nhiên và vật liệu chống ẩm, phù hợp cả với khí hậu ẩm ở Hà Nội lẫn ẩm mặn ở Nha Trang.'
        },
        {
            question: 'Chi phí thiết kế Hiện đại có cao không?',
            answer: 'Chi phí trung bình 150,000 - 280,000 VNĐ/m² tùy loại hình. So với các phong cách khác như tân cổ điển hay Indochine, phong cách Hiện đại có chi phí hợp lý hơn nhờ vật liệu đơn giản và ít chi tiết trang trí.'
        },
        {
            question: 'Có thể áp dụng Hiện đại cho chung cư nhỏ không?',
            answer: 'Rất phù hợp. Phong cách Hiện đại là giải pháp tốt nhất cho căn hộ 40-70m² với nội thất thông minh, không gian mở và màu sắc sáng giúp tối ưu diện tích.'
        },
        {
            question: 'Vật liệu gỗ có bị ẩm mốc không?',
            answer: 'Nếu chọn gỗ công nghiệp chống ẩm chất lượng cao (MDF chống ẩm, HDF) và có hệ thống thông gió tốt thì không bị ẩm mốc. Đặc biệt quan trọng ở Hà Nội và Nha Trang.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thiết kế 3D: 5-7 ngày. Thi công: 30-45 ngày tùy diện tích. Chung cư nhỏ thường nhanh hơn biệt thự lớn 1-2 tháng.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

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
                            Trong năm 2025, phong cách nội thất <strong>Hiện đại (Modern Style)</strong> tiếp tục
                            là lựa chọn hàng đầu cho nhà phố và căn hộ chung cư.
                        </p>
                        <p><strong>Lý do:</strong></p>
                        <ul className="styled-list">
                            <li>Tối ưu không gian hẹp – phù hợp quỹ đất nhỏ tại Hà Nội</li>
                            <li>Mở rộng tầm nhìn, thoáng mát – hợp khí hậu ven biển Nha Trang</li>
                            <li>Chi phí hợp lý, dễ ứng dụng cho nhiều loại hình nhà ở</li>
                        </ul>
                        <p>
                            Đây không chỉ là phong cách thời thượng mà còn là giải pháp thực tế cho
                            hàng triệu gia đình Việt.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="trends">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i>
                        5 Xu Hướng Nổi Bật 2025
                    </h2>
                    <p className="section-subtitle">
                        Những xu hướng đang dẫn đầu thị trường nội thất
                    </p>

                    <div className="grid-3">
                        {trends.map((trend, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: trend.color }}>
                                    <i className={trend.icon}></i>
                                    {trend.name}
                                </h3>
                                <p>{trend.description}</p>
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

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Nỗi Đau Khách Hàng & Giải Pháp
                    </h2>
                    <p className="section-subtitle">
                        4 vấn đề phổ biến và cách khắc phục
                    </p>

                    <div className="grid-2">
                        {painPoints.map((pain, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: pain.color }}>
                                    <i className={pain.icon}></i>
                                    Nỗi đau {index + 1}
                                </h3>
                                <p><strong>Vấn đề:</strong> {pain.problem}</p>
                                <p className="solution-text">
                                    <i className="fas fa-lightbulb"></i>
                                    <strong>Giải pháp:</strong> {pain.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tag"></i>
                        Báo Giá Thiết Kế Nội Thất Hiện Đại 2025
                    </h2>
                    <p className="section-subtitle">
                        Đơn giá tham khảo VNĐ/m² - Thay đổi theo diện tích & vật liệu
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
                                <ul>
                                    {item.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
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
                        Giải đáp thắc mắc về xu hướng Hiện đại 2025
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

export default XuHuongHienDaiPage;