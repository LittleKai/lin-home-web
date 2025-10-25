// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/ChonDonViUyTin.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const ChonDonViUyTinPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const criteria = [
        {
            icon: 'fas fa-award',
            title: 'Kinh Nghiệm & Uy Tín',
            color: '#667eea',
            points: [
                'Hoạt động từ 5 năm trở lên trong lĩnh vực',
                'Có hồ sơ năng lực và giấy phép kinh doanh',
                'Danh sách dự án đã thực hiện rõ ràng',
                'Đánh giá tốt từ khách hàng cũ',
                'Có showroom hoặc văn phòng cố định'
            ],
            importance: 'Rất quan trọng',
            tips: 'Kiểm tra website, fanpage và đánh giá từ khách hàng thực tế'
        },
        {
            icon: 'fas fa-file-contract',
            title: 'Báo Giá Minh Bạch',
            color: '#10b981',
            points: [
                'Báo giá chi tiết từng hạng mục công việc',
                'Ghi rõ khối lượng, đơn giá, thành tiền',
                'Cam kết không phát sinh chi phí',
                'Hợp đồng đầy đủ điều khoản rõ ràng',
                'Quy định thanh toán hợp lý'
            ],
            importance: 'Rất quan trọng',
            tips: 'So sánh báo giá của 2-3 đơn vị để có cái nhìn tổng quan'
        },
        {
            icon: 'fas fa-pencil-ruler',
            title: 'Năng Lực Thiết Kế',
            color: '#3b82f6',
            points: [
                'Đội ngũ kiến trúc sư chuyên nghiệp',
                'Thiết kế 2D/3D chất lượng cao',
                'Tư vấn phong cách phù hợp',
                'Thiết kế đồng bộ kiến trúc - nội thất',
                'Lắng nghe và điều chỉnh theo ý kiến khách hàng'
            ],
            importance: 'Quan trọng',
            tips: 'Xem portfolio các dự án đã thiết kế để đánh giá năng lực'
        },
        {
            icon: 'fas fa-hard-hat',
            title: 'Đội Ngũ Thi Công',
            color: '#f59e0b',
            points: [
                'Thợ lành nghề, được đào tạo bài bản',
                'Giám sát công trình chặt chẽ',
                'Trang thiết bị thi công đầy đủ',
                'Tuân thủ quy trình an toàn lao động',
                'Vệ sinh hiện trường sạch sẽ'
            ],
            importance: 'Rất quan trọng',
            tips: 'Yêu cầu đến tham quan các công trình đang thi công'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Chính Sách Bảo Hành',
            color: '#ec4899',
            points: [
                'Bảo hành ít nhất 12-24 tháng',
                'Quy định bảo hành rõ ràng trong hợp đồng',
                'Hỗ trợ sửa chữa khi có sự cố',
                'Chăm sóc khách hàng sau bàn giao',
                'Có đội ngũ bảo trì chuyên trách'
            ],
            importance: 'Quan trọng',
            tips: 'Đọc kỹ điều khoản bảo hành trước khi ký hợp đồng'
        },
        {
            icon: 'fas fa-clock',
            title: 'Cam Kết Tiến Độ',
            color: '#8b5cf6',
            points: [
                'Lập kế hoạch thi công chi tiết',
                'Cam kết thời gian hoàn thành cụ thể',
                'Báo cáo tiến độ định kỳ',
                'Có phương án xử lý khi chậm tiến độ',
                'Đền bù nếu trễ hẹn không lý do'
            ],
            importance: 'Quan trọng',
            tips: 'Yêu cầu ghi rõ tiến độ và mức đền bù trong hợp đồng'
        }
    ];

    const redFlags = [
        {
            warning: 'Báo giá quá thấp so với thị trường',
            reason: 'Có thể cắt giảm chất lượng hoặc phát sinh nhiều chi phí sau'
        },
        {
            warning: 'Không có văn phòng/showroom cố định',
            reason: 'Khó liên hệ và truy trách nhiệm sau khi bàn giao'
        },
        {
            warning: 'Yêu cầu đặt cọc quá cao ngay từ đầu',
            reason: 'Rủi ro mất tiền nếu đơn vị không uy tín'
        },
        {
            warning: 'Không có hợp đồng hoặc hợp đồng không rõ ràng',
            reason: 'Khó khăn trong việc bảo vệ quyền lợi khi có tranh chấp'
        },
        {
            warning: 'Không cho xem dự án đã làm',
            reason: 'Có thể thiếu kinh nghiệm hoặc chất lượng không đảm bảo'
        }
    ];

    const checklistSteps = [
        {
            step: 1,
            title: 'Tìm Kiếm & Sàng Lọc',
            actions: [
                'Tìm kiếm 3-5 đơn vị qua Google, Facebook, giới thiệu',
                'Kiểm tra website, fanpage, đánh giá khách hàng',
                'Xem portfolio các dự án đã thực hiện',
                'Loại bỏ những đơn vị không uy tín'
            ]
        },
        {
            step: 2,
            title: 'Liên Hệ & Tư Vấn',
            actions: [
                'Liên hệ để được tư vấn sơ bộ',
                'Đánh giá thái độ phục vụ và chuyên môn',
                'Hỏi về kinh nghiệm và dự án tương tự',
                'Yêu cầu khảo sát thực tế (nếu phù hợp)'
            ]
        },
        {
            step: 3,
            title: 'Khảo Sát & Báo Giá',
            actions: [
                'Để đơn vị khảo sát hiện trạng công trình',
                'Nhận báo giá chi tiết từng hạng mục',
                'So sánh báo giá của các đơn vị',
                'Đặt câu hỏi về những điểm chưa rõ'
            ]
        },
        {
            step: 4,
            title: 'Tham Quan Công Trình',
            actions: [
                'Yêu cầu tham quan công trình đang/đã làm',
                'Đánh giá chất lượng thi công thực tế',
                'Hỏi ý kiến khách hàng cũ',
                'Quan sát đội ngũ và cách làm việc'
            ]
        },
        {
            step: 5,
            title: 'Đàm Phán & Ký Hợp Đồng',
            actions: [
                'Thương lượng giá và điều khoản hợp lý',
                'Đọc kỹ hợp đồng trước khi ký',
                'Đảm bảo các cam kết được ghi rõ',
                'Giữ bản sao hợp đồng đầy đủ'
            ]
        }
    ];

    const faqs = [
        {
            question: 'Có nên chọn đơn vị báo giá thấp nhất không?',
            answer: 'Không nên! Giá quá thấp có thể là dấu hiệu của chất lượng kém hoặc sẽ phát sinh nhiều chi phí sau. Nên chọn đơn vị có giá hợp lý, báo giá minh bạch và uy tín tốt.'
        },
        {
            question: 'Làm sao biết đơn vị có uy tín không?',
            answer: 'Kiểm tra: thời gian hoạt động, giấy phép kinh doanh, website/fanpage chính thức, đánh giá khách hàng, dự án đã làm. Nên tham khảo ý kiến người quen hoặc tham quan công trình thực tế.'
        },
        {
            question: 'Có cần ký hợp đồng khi cải tạo nhà không?',
            answer: 'Rất cần! Hợp đồng bảo vệ quyền lợi của cả hai bên. Trong hợp đồng cần ghi rõ: phạm vi công việc, giá cả, tiến độ, trách nhiệm, bảo hành và phương thức thanh toán.'
        },
        {
            question: 'Nên đặt cọc bao nhiêu khi ký hợp đồng?',
            answer: 'Thông thường đặt cọc 20-30% tổng giá trị hợp đồng. Tránh đặt cọc quá cao (trên 50%) ở giai đoạn đầu. Thanh toán theo tiến độ là cách an toàn nhất.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-award"></i>
                        Cách Chọn Đơn Vị Sửa Chữa Cải Tạo Uy Tín
                    </h1>
                    <p className="section-subtitle">
                        Hướng dẫn chi tiết giúp bạn chọn được đơn vị thi công chất lượng, tránh rủi ro
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-check-double"></i>
                        6 Tiêu Chí Đánh Giá Đơn Vị Uy Tín
                    </h2>
                    <div className="grid-3">
                        {criteria.map((criterion, index) => (
                            <div key={index} className="info-card">
                                <div className="card-icon" style={{ background: criterion.color }}>
                                    <i className={criterion.icon}></i>
                                </div>
                                <h3>{criterion.title}</h3>
                                <ul className="info-list">
                                    {criterion.points.map((point, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="importance-badge">
                                    <i className="fas fa-star"></i>
                                    {criterion.importance}
                                </div>
                                <p className="tip-text">
                                    <i className="fas fa-lightbulb"></i>
                                    <strong>Mẹo:</strong> {criterion.tips}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-exclamation-triangle"></i>
                        Dấu Hiệu Cảnh Báo Cần Tránh
                    </h2>
                    <div className="warning-list">
                        {redFlags.map((flag, index) => (
                            <div key={index} className="warning-item">
                                <div className="warning-icon">
                                    <i className="fas fa-times-circle"></i>
                                </div>
                                <div className="warning-content">
                                    <h4>{flag.warning}</h4>
                                    <p>
                                        <i className="fas fa-info-circle"></i>
                                        {flag.reason}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks"></i>
                        5 Bước Chọn Đơn Vị Phù Hợp
                    </h2>
                    <div className="process-timeline">
                        {checklistSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="step-content">
                                    <div className="step-label">Bước {step.step}</div>
                                    <h3>{step.title}</h3>
                                    <ul>
                                        {step.actions.map((action, i) => (
                                            <li key={i}>
                                                <i className="fas fa-chevron-right"></i>
                                                {action}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-handshake"></i>
                        Cam Kết Của LinHome
                    </h2>
                    <div className="grid-4">
                        <div className="info-card">
                            <i className="fas fa-certificate icon-large"></i>
                            <h3>Giấy Phép Đầy Đủ</h3>
                            <p>Đăng ký kinh doanh hợp pháp, hoạt động lâu năm trong ngành</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-file-alt icon-large"></i>
                            <h3>Hợp Đồng Minh Bạch</h3>
                            <p>Báo giá chi tiết, không phát sinh, cam kết bằng văn bản</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-users icon-large"></i>
                            <h3>Đội Ngũ Chuyên Nghiệp</h3>
                            <p>Kiến trúc sư & thợ thi công giàu kinh nghiệm</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-headset icon-large"></i>
                            <h3>Hỗ Trợ Tận Tâm</h3>
                            <p>Tư vấn 24/7, bảo hành dài hạn, chăm sóc sau bán</p>
                        </div>
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

export default ChonDonViUyTinPage;
