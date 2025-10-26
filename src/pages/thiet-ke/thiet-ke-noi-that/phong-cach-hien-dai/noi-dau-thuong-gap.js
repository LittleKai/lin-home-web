import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const NoiDauThuongGapPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const painPoints = [
        {
            number: 1,
            title: 'Không Gian Trống Trải, Lạnh Lẽo',
            cause: 'Lạm dụng gam màu trắng – xám, nội thất tối giản quá mức',
            solutions: [
                'Kết hợp gỗ ấm màu, đèn vàng',
                'Thêm tranh canvas, cây xanh, decor để tăng sức sống',
                'Sử dụng thảm trải sàn, gối tựa màu sắc'
            ],
            icon: 'fas fa-snowflake',
            color: '#06b6d4'
        },
        {
            number: 2,
            title: 'Nội Thất Kém Chất Lượng – Nhanh Xuống Cấp',
            cause: 'Chọn gỗ MDF thường, phụ kiện rẻ tiền',
            consequence: 'Mối mọt, bong tróc, cong vênh sau 1–2 năm',
            solutions: [
                'Sử dụng MDF chống ẩm, HDF, gỗ veneer',
                'Chọn phụ kiện Hafele, Blum thay vì hàng trôi nổi',
                'Kiểm tra xuất xứ và chứng nhận chất lượng'
            ],
            icon: 'fas fa-hammer',
            color: '#ef4444'
        },
        {
            number: 3,
            title: 'Nhà Phố Hà Nội Chật Hẹp, Thiếu Sáng',
            cause: 'Mặt tiền nhỏ, bị che khuất bởi công trình xung quanh',
            solutions: [
                'Giếng trời, cửa kính lớn, gương phản chiếu',
                'Thiết kế nội thất đa năng, giảm vách ngăn thừa',
                'Sử dụng màu sáng và đèn LED hợp lý'
            ],
            icon: 'fas fa-sun',
            color: '#f59e0b'
        },
        {
            number: 4,
            title: 'Nha Trang Khí Hậu Ẩm Mặn – Đồ Nhanh Hỏng',
            cause: 'Không chọn vật liệu phù hợp khí hậu ven biển',
            solutions: [
                'Dùng inox 304, nhôm kính, gỗ chống ẩm phủ melamine/laminate',
                'Tránh vật liệu dễ han gỉ, bong nứt',
                'Bảo dưỡng định kỳ hệ thống chống ẩm'
            ],
            icon: 'fas fa-water',
            color: '#3b82f6'
        },
        {
            number: 5,
            title: 'Thiết Kế Thiếu Đồng Bộ – Công Năng Bất Tiện',
            cause: 'Không có bản vẽ 3D tổng thể → bố trí chắp vá',
            consequence: 'Khó di chuyển, không đồng bộ kiến trúc – nội thất',
            solutions: [
                'Thiết kế 3D trước khi thi công',
                'Chọn đơn vị thiết kế thi công trọn gói để đồng bộ',
                'Lên kế hoạch chi tiết về công năng sử dụng'
            ],
            icon: 'fas fa-puzzle-piece',
            color: '#8b5cf6'
        }
    ];

    const priceTable = [
        {
            type: 'Nội thất căn hộ chung cư hiện đại',
            price: '150.000 - 200.000 VNĐ/m²',
            note: 'Bao gồm phối cảnh 3D chi tiết'
        },
        {
            type: 'Nội thất nhà phố – nhà ống hiện đại',
            price: '160.000 - 220.000 VNĐ/m²',
            note: 'Tối ưu diện tích nhỏ, thiếu sáng'
        },
        {
            type: 'Nội thất biệt thự/villa hiện đại',
            price: '200.000 - 280.000 VNĐ/m²',
            note: 'Không gian rộng, cao cấp'
        }
    ];

    const preventionTips = [
        {
            icon: 'fas fa-search',
            title: 'Khảo Sát Kỹ Lưỡng',
            description: 'Đánh giá đầy đủ điều kiện địa lý, khí hậu, hướng nhà trước khi thiết kế',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-cube',
            title: 'Thiết Kế 3D Chi Tiết',
            description: 'Bản vẽ 3D giúp hình dung rõ ràng và tránh sai sót khi thi công',
            color: '#10b981'
        },
        {
            icon: 'fas fa-clipboard-check',
            title: 'Chọn Vật Liệu Phù Hợp',
            description: 'Ưu tiên vật liệu chống ẩm, bền vững phù hợp với khí hậu địa phương',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'KTS Có Kinh Nghiệm',
            description: 'Làm việc với kiến trúc sư giàu kinh nghiệm về phong cách Hiện đại',
            color: '#8b5cf6'
        }
    ];

    const faqData = [
        {
            question: 'Làm sao biết nội thất có chất lượng tốt?',
            answer: 'Kiểm tra xuất xứ gỗ công nghiệp (MDF chống ẩm, HDF), chứng nhận chất lượng, phụ kiện có thương hiệu (Hafele, Blum), và có chế độ bảo hành rõ ràng từ nhà cung cấp.'
        },
        {
            question: 'Chi phí để khắc phục nỗi đau thiết kế tốn bao nhiêu?',
            answer: 'Tùy mức độ: thiết kế lại 3D (5-10 triệu), thay vật liệu kém chất lượng (20-30% giá trị nội thất cũ), cải tạo ánh sáng (10-20 triệu). Tốt nhất là làm đúng từ đầu.'
        },
        {
            question: 'Có thể tự thiết kế để tiết kiệm chi phí không?',
            answer: 'Có thể, nhưng rủi ro cao về công năng, thẩm mỹ và thi công. Nên thuê KTS để có bản vẽ 3D chính xác, tránh tốn chi phí sửa chữa sau này.'
        },
        {
            question: 'Làm thế nào để không gian Hiện đại không lạnh lẽo?',
            answer: 'Kết hợp gỗ ấm màu (sồi, óc chó), đèn LED vàng ấm, thêm cây xanh, tranh canvas, thảm trải sàn, gối tựa màu sắc để tạo điểm nhấn và sự ấm cúng.'
        },
        {
            question: 'Thời gian bảo hành nội thất phong cách Hiện đại?',
            answer: 'Thông thường 12-24 tháng cho gỗ công nghiệp, 6-12 tháng cho phụ kiện. Nên chọn đơn vị có chế độ bảo hành, bảo trì định kỳ rõ ràng.'
        }
    ];

    return (
        <div className="main-content">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <i className="fas fa-exclamation-triangle"></i>
                            5 Nỗi Đau Thường Gặp Khi Thiết Kế Nội Thất Phong Cách Hiện Đại
                        </h1>
                        <p className="hero-subtitle">
                            & Cách Khắc Phục Hiệu Quả
                        </p>
                        <p className="hero-description">
                            5 nỗi đau thường gặp khi thiết kế nội thất phong cách Hiện đại 2025 và cách khắc phục. 
                            Giải pháp cho nhà phố, chung cư Hà Nội & biệt thự ven biển Nha Trang.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle icon-primary"></i>
                        Giới Thiệu
                    </h2>
                    <div className="content-box">
                        <p>
                            Phong cách <strong>Hiện đại (Modern Style)</strong> đang là xu hướng nội thất phổ biến nhất tại Việt Nam, 
                            đặc biệt ở Hà Nội & Nha Trang. Tuy nhiên, không ít khách hàng gặp phải vấn đề phát sinh trong quá trình 
                            thiết kế & thi công, khiến không gian sống kém tiện nghi, nhanh xuống cấp.
                        </p>
                        <p>
                            Trong bài viết này, chúng tôi phân tích <strong>5 nỗi đau điển hình</strong> và đưa ra giải pháp khắc phục.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list-ol icon-quality"></i>
                        5 Nỗi Đau Thường Gặp & Giải Pháp
                    </h2>

                    {painPoints.map((pain, index) => (
                        <div key={index} className="content-box" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ color: pain.color }}>
                                <i className={pain.icon}></i>
                                {' '}Nỗi Đau {pain.number}: {pain.title}
                            </h3>
                            
                            <div className="info-card" style={{ background: '#fef2f2', margin: '1rem 0' }}>
                                <p>
                                    <strong>
                                        <i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i>
                                        {' '}Nguyên nhân:
                                    </strong> {pain.cause}
                                </p>
                                {pain.consequence && (
                                    <p>
                                        <strong>
                                            <i className="fas fa-exclamation-circle" style={{ color: '#f59e0b' }}></i>
                                            {' '}Hậu quả:
                                        </strong> {pain.consequence}
                                    </p>
                                )}
                            </div>

                            <div className="info-card" style={{ background: '#f0fdf4' }}>
                                <p>
                                    <strong>
                                        <i className="fas fa-lightbulb" style={{ color: '#10b981' }}></i>
                                        {' '}Giải pháp:
                                    </strong>
                                </p>
                                <ul>
                                    {pain.solutions.map((solution, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check"></i>
                                            {solution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-shield-alt icon-primary"></i>
                        Cách Phòng Tránh Nỗi Đau
                    </h2>
                    <div className="grid-4">
                        {preventionTips.map((tip, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: tip.color }}>
                                    <i className={tip.icon}></i>
                                    {tip.title}
                                </h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="content-box" style={{ textAlign: 'center', background: '#eff6ff' }}>
                        <h3 style={{ color: '#3b82f6' }}>
                            <i className="fas fa-quote-left"></i>
                            Kết Luận
                        </h3>
                        <p>
                            Thiết kế nội thất phong cách Hiện đại sẽ trở nên hoàn hảo nếu được xử lý đúng những nỗi đau khách hàng thường gặp.
                        </p>
                        <p>
                            <strong>Đừng để không gian sống của bạn trở nên đơn điệu hoặc nhanh xuống cấp.</strong>
                        </p>
                        <p>
                            Hãy để chúng tôi giúp bạn sở hữu căn hộ hiện đại – tiện nghi – bền đẹp tại Hà Nội & Nha Trang.
                        </p>
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

export default NoiDauThuongGapPage;
