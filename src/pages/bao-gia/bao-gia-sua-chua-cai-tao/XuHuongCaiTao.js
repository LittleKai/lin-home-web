// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/XuHuongCaiTao.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const XuHuongCaiTaoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const trends = [
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Không Gian Mở & Ánh Sáng Tự Nhiên',
            color: '#667eea',
            description: 'Xu hướng tối ưu không gian sống với ánh sáng và thông thoáng',
            features: [
                'Phòng khách liên thông với bếp, loại bỏ vách ngăn cứng',
                'Cửa kính lớn tầm nhìn rộng, kết nối ngoại thất',
                'Giếng trời và giếng thông gió tự nhiên',
                'Sử dụng màu sơn sáng và trần cao tăng diện tích cảm nhận',
                'Ban công mở, không gian xanh trong nhà'
            ],
            benefits: 'Tăng cảm giác rộng rãi, tiết kiệm điện, sống khỏe mạnh hơn'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Vật Liệu Xanh & Bền Vững',
            color: '#10b981',
            description: 'Ưu tiên vật liệu thân thiện môi trường và tiết kiệm năng lượng',
            features: [
                'Gạch không nung, sơn sinh thái VOC thấp',
                'Gỗ tái chế, gỗ công nghiệp chứng nhận FSC',
                'Vật liệu cách nhiệt tiết kiệm điện năng',
                'Sàn tre ép, vật liệu tái chế',
                'Hệ thống thu thập nước mưa'
            ],
            benefits: 'An toàn sức khỏe, giảm chi phí vận hành, bảo vệ môi trường'
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Nhà Thông Minh (Smart Home)',
            color: '#3b82f6',
            description: 'Ứng dụng công nghệ IoT cho cuộc sống tiện nghi',
            features: [
                'Đèn, rèm, điều hòa điều khiển smartphone/giọng nói',
                'Camera an ninh, khóa cửa vân tay/mật mã',
                'Thiết bị điện thông minh tiết kiệm năng lượng',
                'Hệ thống báo động khói, rò rỉ gas',
                'Tích hợp Google Home, Alexa, HomeKit'
            ],
            benefits: 'Tiện lợi, an toàn, tiết kiệm điện và kiểm soát từ xa'
        },
        {
            icon: 'fas fa-couch',
            title: 'Nội Thất Đa Chức Năng',
            color: '#f59e0b',
            description: 'Tối ưu không gian với nội thất thông minh',
            features: [
                'Giường kết hợp tủ kéo, ngăn chứa đồ',
                'Bàn gấp gọn, sofa giường đa năng',
                'Tủ âm tường tiết kiệm diện tích',
                'Bàn ăn mở rộng linh hoạt',
                'Ray trượt, bản lề giảm chấn cao cấp'
            ],
            benefits: 'Tiết kiệm không gian, linh hoạt sử dụng, gọn gàng'
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'Phong Cách Tối Giản (Minimalism)',
            color: '#8b5cf6',
            description: 'Đơn giản nhưng tinh tế, tập trung công năng',
            features: [
                'Loại bỏ chi tiết rườm rà, đường nét sắc sảo',
                'Gam màu trung tính: trắng, be, xám',
                'Nội thất đơn giản, chất liệu cao cấp',
                'Ánh sáng tự nhiên và không gian thông thoáng',
                'Chức năng ẩn, bề mặt phẳng nhẵn'
            ],
            benefits: 'Dễ vệ sinh, không gian rộng rãi, thanh lịch'
        },
        {
            icon: 'fas fa-seedling',
            title: 'Không Gian Xanh Trong Nhà',
            color: '#ec4899',
            description: 'Tích hợp thiên nhiên vào không gian sống',
            features: [
                'Ban công/sân thượng trồng cây xanh',
                'Vườn đứng trang trí tường',
                'Bàn làm việc/góc đọc sách có cây cảnh',
                'Khu vực BBQ ngoài trời',
                'Sử dụng vật liệu gỗ, đá tự nhiên'
            ],
            benefits: 'Không khí trong lành, giảm stress, gần gũi thiên nhiên'
        },
        {
            icon: 'fas fa-box-open',
            title: 'Gói Cải Tạo Trọn Gói',
            color: '#06b6d4',
            description: 'Xu hướng chọn dịch vụ toàn diện',
            features: [
                'Thiết kế + thi công một đơn vị',
                'Tiết kiệm chi phí so với thuê lẻ',
                'Đồng bộ phong cách từ kiến trúc đến nội thất',
                'Bảo hành và cam kết chất lượng',
                'Dễ dàng theo dõi tiến độ'
            ],
            benefits: 'Tiết kiệm thời gian, chi phí, chất lượng đảm bảo'
        }
    ];

    const colorTrends = [
        {
            palette: 'Màu Trung Tính',
            colors: ['Trắng', 'Be', 'Xám nhạt', 'Nâu gỗ'],
            style: 'Hiện đại, tối giản',
            mood: 'Thanh lịch, dễ phối đồ'
        },
        {
            palette: 'Màu Đất',
            colors: ['Nâu đất', 'Xanh rêu', 'Cam đất', 'Gỗ tối'],
            style: 'Bắc Âu, tự nhiên',
            mood: 'Ấm áp, gần gũi'
        },
        {
            palette: 'Màu Pastel',
            colors: ['Hồng nhạt', 'Xanh mint', 'Vàng kem', 'Tím lavender'],
            style: 'Vintage, nữ tính',
            mood: 'Ngọt ngào, nhẹ nhàng'
        },
        {
            palette: 'Màu Tương Phản',
            colors: ['Đen', 'Trắng', 'Vàng đồng', 'Xám đậm'],
            style: 'Sang trọng, hiện đại',
            mood: 'Cá tính, nổi bật'
        }
    ];

    const designStyles = [
        {
            style: 'Scandinavian (Bắc Âu)',
            features: ['Sáng sủa', 'Gỗ sáng', 'Đơn giản'],
            popular: 'Rất phổ biến'
        },
        {
            style: 'Minimalism (Tối giản)',
            features: ['Tối giản', 'Chức năng', 'Sạch sẽ'],
            popular: 'Đang hot'
        },
        {
            style: 'Industrial (Công nghiệp)',
            features: ['Gạch thô', 'Kim loại', 'Trần cao'],
            popular: 'Độc đáo'
        },
        {
            style: 'Modern (Hiện đại)',
            features: ['Công nghệ', 'Tiện nghi', 'Sang trọng'],
            popular: 'Xu hướng mới'
        }
    ];

    const tips = [
        'Lập kế hoạch rõ ràng trước khi cải tạo',
        'Ưu tiên công năng trước thẩm mỹ',
        'Đầu tư vào vật liệu bền, chất lượng',
        'Kết hợp xu hướng mới với sở thích cá nhân',
        'Chọn đơn vị thi công uy tín để đảm bảo chất lượng'
    ];

    const faqs = [
        {
            question: 'Cải tạo theo xu hướng mới có tốn kém không?',
            answer: 'Không nhất thiết! Nhiều xu hướng như tối giản, không gian mở đều giúp tiết kiệm chi phí. Quan trọng là lựa chọn xu hướng phù hợp với ngân sách và nhu cầu thực tế.'
        },
        {
            question: 'Nên theo xu hướng nào cho căn hộ nhỏ?',
            answer: 'Nên chọn phong cách tối giản hoặc Bắc Âu với màu sáng, nội thất đa chức năng, không gian mở. Ánh sáng tự nhiên và gương sẽ giúp căn hộ trông rộng hơn.'
        },
        {
            question: 'Smart home có đắt không?',
            answer: 'Chi phí ban đầu cao hơn nhưng tiết kiệm điện và tiện lợi lâu dài. Có thể bắt đầu với các thiết bị cơ bản như đèn LED thông minh, công tắc wifi, rồi nâng cấp dần.'
        },
        {
            question: 'Xu hướng 2025 có phù hợp với nhà cũ không?',
            answer: 'Hoàn toàn phù hợp! Nhiều xu hướng tập trung vào tối ưu không gian và ánh sáng - rất phù hợp để làm mới nhà cũ. Không cần cải tạo toàn bộ, chỉ cần một vài điểm nhấn đã có thể thay đổi đáng kể.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Xu Hướng Sửa Chữa Cải Tạo Nhà 2025
                    </h1>
                    <p className="section-subtitle">
                        Khám phá những xu hướng mới nhất: Hiện đại, thông minh và bền vững
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-fire"></i>
                        7 Xu Hướng Nổi Bật 2025
                    </h2>
                    <div className="grid-3">
                        {trends.map((trend, index) => (
                            <div key={index} className="info-card">
                                <div className="card-icon" style={{ background: trend.color }}>
                                    <i className={trend.icon}></i>
                                </div>
                                <h3>{trend.title}</h3>
                                <p className="card-description">{trend.description}</p>
                                <ul className="info-list">
                                    {trend.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="benefit-badge">
                                    <i className="fas fa-thumbs-up"></i>
                                    {trend.benefits}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-palette"></i>
                        Xu Hướng Màu Sắc 2025
                    </h2>
                    <div className="grid-4">
                        {colorTrends.map((palette, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-paint-roller"></i>
                                        {palette.palette}
                                    </h3>
                                    <p>{palette.style}</p>
                                </div>
                                <div className="card-body">
                                    <div className="materials">
                                        <h4>Màu sắc:</h4>
                                        <div className="tags">
                                            {palette.colors.map((color, i) => (
                                                <span key={i} className="tag">{color}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="spaces">
                                        <h4>Cảm xúc:</h4>
                                        <p>{palette.mood}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i>
                        Phong Cách Thiết Kế Phổ Biến
                    </h2>
                    <div className="grid-4">
                        {designStyles.map((design, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-home"></i>
                                    {design.style}
                                </h3>
                                <div className="tags">
                                    {design.features.map((feature, i) => (
                                        <span key={i} className="tag">{feature}</span>
                                    ))}
                                </div>
                                <div className="frequency-badge">{design.popular}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Lời Khuyên Khi Cải Tạo Theo Xu Hướng
                    </h2>
                    <div className="tips-section">
                        <ul>
                            {tips.map((tip, index) => (
                                <li key={index}>
                                    <i className="fas fa-check-circle"></i>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
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
                                        {faq.answer}
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

export default XuHuongCaiTaoPage;
