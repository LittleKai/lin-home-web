import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongIndochinePage = () => {
    const [activeTab, setActiveTab] = useState('khai-niem');
    const [activeFaq, setActiveFaq] = useState(null);

    const trends = [
        {
            id: 'khong-gian-mo',
            name: 'Không Gian Mở - Thoáng Đãng',
            icon: 'fas fa-door-open',
            description: 'Ứng dụng nhiều cửa kính, vách ngăn nhẹ, liên thông phòng khách - bếp - ăn',
            features: [
                'Cửa kính lớn đón ánh sáng tự nhiên',
                'Vách ngăn gỗ hoặc tre nhẹ nhàng',
                'Liên thông không gian sinh hoạt',
                'Tận dụng tối đa thông gió'
            ],
            color: '#10b981'
        },
        {
            id: 'vat-lieu',
            name: 'Vật Liệu Tự Nhiên',
            icon: 'fas fa-tree',
            description: 'Gỗ, tre, mây, đá tự nhiên, gạch bông hoa văn cổ điển',
            features: [
                'Gỗ tự nhiên chống ẩm',
                'Tre mây đan thủ công',
                'Đá tự nhiên ốp tường',
                'Gạch bông hoa văn cổ'
            ],
            color: '#059669'
        },
        {
            id: 'mau-sac',
            name: 'Màu Sắc Bản Địa',
            icon: 'fas fa-palette',
            description: 'Vàng nhạt, trắng ngà, xanh ngọc, nâu gỗ - ấm áp, sang trọng',
            features: [
                'Vàng nhạt tạo ấm cúng',
                'Trắng ngà thanh lịch',
                'Xanh ngọc điểm nhấn',
                'Nâu gỗ tự nhiên'
            ],
            color: '#f59e0b'
        },
        {
            id: 'noi-that',
            name: 'Nội Thất Chạm Khắc',
            icon: 'fas fa-couch',
            description: 'Sofa gỗ, bàn ghế mây tre, tủ gỗ điêu khắc, đèn mây',
            features: [
                'Sofa gỗ chạm khắc tinh xảo',
                'Bàn ghế mây tre đan',
                'Tủ gỗ cổ điển',
                'Đèn treo mây tre'
            ],
            color: '#8b5cf6'
        },
        {
            id: 'van-hoa',
            name: 'Tinh Thần Á Đông',
            icon: 'fas fa-yin-yang',
            description: 'Tranh sơn dầu, tượng gỗ, đồ gốm cổ - kết hợp hoài niệm và hiện đại',
            features: [
                'Tranh sơn dầu phong cảnh',
                'Tượng gỗ nghệ thuật',
                'Đồ gốm cổ trang trí',
                'Hoa văn Á Đông tinh tế'
            ],
            color: '#ec4899'
        }
    ];

    const solutions = [
        {
            type: 'Biệt Thự Indochine',
            icon: 'fas fa-home',
            suitable: 'Nha Trang - Villa ven biển, Resort nghỉ dưỡng',
            features: [
                'Không gian rộng với trần cao',
                'Hành lang thoáng, cửa vòm',
                'Gỗ chống ẩm cao cấp',
                'Gạch bông hoa văn lớn',
                'Đồ nội thất thủ công'
            ],
            price: '250,000 - 320,000 VNĐ/m²',
            color: '#3b82f6'
        },
        {
            type: 'Chung Cư Indochine',
            icon: 'fas fa-building',
            suitable: 'Hà Nội - Chung cư cao cấp, Nhà phố',
            features: [
                'Diện tích nhỏ - thiết kế tối giản',
                'Gỗ công nghiệp phủ veneer',
                'Gạch bông trang trí điểm nhấn',
                'Nội thất đa năng, gọn gàng',
                'Màu sắc sáng tăng không gian'
            ],
            price: '180,000 - 230,000 VNĐ/m²',
            color: '#10b981'
        }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '180,000 - 230,000',
            note: 'Thiết kế 3D chi tiết',
            features: ['Nội thất tinh giản', 'Tối ưu không gian', 'Phối cảnh 3D']
        },
        {
            type: 'Nhà phố',
            price: '200,000 - 260,000',
            note: 'Tối ưu diện tích nhỏ',
            features: ['Không gian nhỏ', 'Ánh sáng tự nhiên', 'Thiết kế thông minh']
        },
        {
            type: 'Biệt thự/Villa',
            price: '250,000 - 320,000',
            note: 'Nội thất cao cấp, nhiều chi tiết',
            features: ['Vật liệu cao cấp', 'Chi tiết thủ công', 'Không gian lớn']
        }
    ];

    const faqData = [
        {
            question: 'Phong cách Indochine có phù hợp với khí hậu Việt Nam không?',
            answer: 'Hoàn toàn phù hợp. Indochine được thiết kế dựa trên khí hậu nhiệt đới Đông Dương, với không gian thoáng mát, vật liệu chống ẩm, thông gió tốt.'
        },
        {
            question: 'Chi phí thiết kế Indochine có cao không?',
            answer: 'Chi phí trung bình 180,000 - 320,000 VNĐ/m² tùy loại hình. Có thể tối ưu bằng cách sử dụng gỗ công nghiệp kết hợp gỗ tự nhiên, tre ép công nghiệp thay vì nguyên khối.'
        },
        {
            question: 'Có thể áp dụng Indochine cho chung cư nhỏ không?',
            answer: 'Có thể. Với chung cư nhỏ, cần giảm chi tiết trang trí, ưu tiên màu sáng, nội thất đa năng nhưng vẫn giữ được tinh thần Indochine.'
        },
        {
            question: 'Vật liệu gỗ có bị ẩm mốc không?',
            answer: 'Nếu chọn gỗ chống ẩm (Lim Nam Phi, Teak), phủ sơn PU và có hệ thống thông gió tốt thì không bị ẩm mốc. Đặc biệt quan trọng ở Hà Nội và Nha Trang.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thiết kế 3D: 5-7 ngày. Thi công: 30-60 ngày tùy diện tích và độ phức tạp. Biệt thự lớn có thể mất 2-3 tháng.'
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
                            Phong cách <strong>Indochine (Đông Dương)</strong> mang nét giao thoa độc đáo giữa nội thất 
                            Á Đông truyền thống và kiến trúc Pháp tinh tế. Trong năm 2025, Indochine trở thành xu hướng 
                            nổi bật trong các công trình từ chung cư nhỏ tại Hà Nội đến biệt thự, resort cao cấp ở Nha Trang.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="trends">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i>
                        5 Xu Hướng Thiết Kế Indochine 2025
                    </h2>
                    <p className="section-subtitle">
                        Những xu hướng nổi bật đang dẫn đầu thị trường
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
                        Giải Pháp Cho Biệt Thự & Chung Cư
                    </h2>
                    <p className="section-subtitle">
                        Tùy chỉnh phong cách phù hợp với từng không gian
                    </p>

                    <div className="grid-2">
                        {solutions.map((solution, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: solution.color }}>
                                    <i className={solution.icon}></i>
                                    {solution.type}
                                </h3>
                                <p><strong>Phù hợp:</strong> {solution.suitable}</p>
                                <ul>
                                    {solution.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{solution.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tag"></i>
                        Báo Giá Thiết Kế Nội Thất Indochine 2025
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
                        Giải đáp thắc mắc về xu hướng Indochine 2025
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

export default XuHuongIndochinePage;
