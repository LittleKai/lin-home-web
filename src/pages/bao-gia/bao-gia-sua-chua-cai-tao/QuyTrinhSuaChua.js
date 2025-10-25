// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/QuyTrinhSuaChua.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const QuyTrinhSuaChuaPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const processSteps = [
        {
            step: '01',
            title: 'Tiếp Nhận Thông Tin',
            icon: 'fas fa-phone-alt',
            color: '#667eea',
            description: 'Tư vấn sơ bộ và xác định nhu cầu khách hàng',
            details: [
                'Lắng nghe nhu cầu cải tạo của khách hàng',
                'Tư vấn sơ bộ qua điện thoại/Zalo/Email',
                'Xác định phạm vi công việc và ngân sách dự kiến',
                'Đặt lịch khảo sát thực tế tại công trình'
            ],
            duration: '1 ngày',
            notes: 'Miễn phí tư vấn và báo giá sơ bộ'
        },
        {
            step: '02',
            title: 'Khảo Sát Hiện Trạng',
            icon: 'fas fa-search',
            color: '#f59e0b',
            description: 'Đo đạc và đánh giá tình trạng công trình',
            details: [
                'Đo đạc diện tích, kết cấu nhà chính xác',
                'Kiểm tra tình trạng tường, sàn, trần',
                'Đánh giá hệ thống điện, nước hiện tại',
                'Xác định mức độ xuống cấp và hạng mục cần xử lý',
                'Chụp ảnh hiện trạng chi tiết'
            ],
            duration: '1-2 ngày',
            notes: 'Miễn phí khảo sát khi liên hệ trực tiếp'
        },
        {
            step: '03',
            title: 'Thiết Kế & Báo Giá',
            icon: 'fas fa-pencil-ruler',
            color: '#10b981',
            description: 'Đưa ra phương án thiết kế và báo giá chi tiết',
            details: [
                'Thiết kế 2D/3D theo nhu cầu và phong cách',
                'Lựa chọn vật liệu phù hợp với ngân sách',
                'Báo giá chi tiết từng hạng mục công việc',
                'Tư vấn tối ưu chi phí và tiến độ',
                'Điều chỉnh phương án theo ý kiến khách hàng'
            ],
            duration: '3-5 ngày',
            notes: 'Miễn phí thiết kế khi ký hợp đồng thi công'
        },
        {
            step: '04',
            title: 'Ký Hợp Đồng',
            icon: 'fas fa-file-signature',
            color: '#3b82f6',
            description: 'Thỏa thuận và ký kết hợp đồng thi công',
            details: [
                'Thống nhất phương án thiết kế cuối cùng',
                'Xác nhận báo giá và phương thức thanh toán',
                'Cam kết về tiến độ và chất lượng',
                'Quy định về bảo hành và trách nhiệm',
                'Ký hợp đồng chính thức'
            ],
            duration: '1 ngày',
            notes: 'Hợp đồng minh bạch, không phát sinh'
        },
        {
            step: '05',
            title: 'Thi Công',
            icon: 'fas fa-hard-hat',
            color: '#ec4899',
            description: 'Triển khai thi công theo đúng kế hoạch',
            details: [
                'Chuẩn bị mặt bằng và bảo vệ đồ đạc',
                'Tháo dỡ các hạng mục cũ (nếu có)',
                'Thi công từng công đoạn theo tiến độ',
                'Giám sát chất lượng từng bước',
                'Báo cáo tiến độ định kỳ cho khách hàng',
                'Vệ sinh hiện trường hàng ngày'
            ],
            duration: '2-8 tuần',
            notes: 'Tùy thuộc quy mô và phạm vi công việc'
        },
        {
            step: '06',
            title: 'Nghiệm Thu & Bàn Giao',
            icon: 'fas fa-clipboard-check',
            color: '#8b5cf6',
            description: 'Kiểm tra chất lượng và bàn giao công trình',
            details: [
                'Kiểm tra kỹ lưỡng từng hạng mục',
                'Sửa chữa những điểm chưa hoàn thiện',
                'Vệ sinh tổng thể công trình',
                'Hướng dẫn sử dụng và bảo trì',
                'Bàn giao hồ sơ hoàn công',
                'Ký biên bản nghiệm thu'
            ],
            duration: '1-2 ngày',
            notes: 'Nghiệm thu chặt chẽ đảm bảo chất lượng'
        },
        {
            step: '07',
            title: 'Bảo Hành & Hỗ Trợ',
            icon: 'fas fa-shield-alt',
            color: '#06b6d4',
            description: 'Bảo hành và hỗ trợ sau thi công',
            details: [
                'Bảo hành 12-24 tháng theo hợp đồng',
                'Hỗ trợ sửa chữa các lỗi phát sinh',
                'Tư vấn bảo trì và sử dụng',
                'Hỗ trợ khẩn cấp khi cần thiết',
                'Chăm sóc khách hàng lâu dài'
            ],
            duration: '12-24 tháng',
            notes: 'Cam kết bảo hành chất lượng công trình'
        }
    ];

    const benefits = [
        {
            icon: 'fas fa-check-double',
            title: 'Quy Trình Chuyên Nghiệp',
            desc: 'Từng bước được chuẩn hóa, đảm bảo chất lượng'
        },
        {
            icon: 'fas fa-clock',
            title: 'Tiến Độ Cam Kết',
            desc: 'Đúng thời gian, không trì hoãn'
        },
        {
            icon: 'fas fa-hand-holding-usd',
            title: 'Chi Phí Minh Bạch',
            desc: 'Báo giá rõ ràng, không phát sinh'
        },
        {
            icon: 'fas fa-headset',
            title: 'Hỗ Trợ 24/7',
            desc: 'Luôn sẵn sàng tư vấn và giải đáp'
        }
    ];

    const faqs = [
        {
            question: 'Quy trình có thể linh hoạt theo yêu cầu không?',
            answer: 'Hoàn toàn có thể! Chúng tôi luôn linh hoạt điều chỉnh quy trình để phù hợp với tình hình thực tế và yêu cầu của từng khách hàng, đảm bảo hiệu quả tối ưu.'
        },
        {
            question: 'Tôi có thể tham gia giám sát thi công không?',
            answer: 'Tất nhiên! Chúng tôi khuyến khích khách hàng tham gia giám sát. Bạn có thể đến công trình bất cứ lúc nào trong giờ làm việc để kiểm tra tiến độ và chất lượng.'
        },
        {
            question: 'Nếu có phát sinh trong quá trình thi công thì sao?',
            answer: 'Mọi phát sinh sẽ được thông báo ngay cho khách hàng, đưa ra phương án xử lý và chỉ thực hiện sau khi có sự đồng ý. Chi phí phát sinh (nếu có) sẽ được báo giá rõ ràng trước.'
        },
        {
            question: 'Sau khi bàn giao có hỗ trợ gì thêm không?',
            answer: 'Chúng tôi có chế độ bảo hành 12-24 tháng và hỗ trợ kỹ thuật trọn đời. Mọi vấn đề phát sinh trong thời gian bảo hành sẽ được xử lý miễn phí.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-clipboard-list"></i>
                        Quy Trình Sửa Chữa Cải Tạo Nhà
                    </h1>
                    <p className="section-subtitle">
                        Quy trình làm việc chuyên nghiệp từ A-Z, đảm bảo chất lượng và tiến độ cam kết
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list-ol"></i>
                        7 Bước Quy Trình Chuẩn
                    </h2>
                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number" style={{ background: step.color }}>
                                    <i className={step.icon}></i>
                                </div>
                                <div className="step-content">
                                    <div className="step-label">Bước {step.step}</div>
                                    <h3>{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                    <ul className="info-list">
                                        {step.details.map((detail, i) => (
                                            <li key={i}>
                                                <i className="fas fa-check-circle"></i>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="step-meta">
                                        <span className="step-duration">
                                            <i className="fas fa-clock"></i>
                                            Thời gian: {step.duration}
                                        </span>
                                        <span className="step-note">
                                            <i className="fas fa-info-circle"></i>
                                            {step.notes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i>
                        Lợi Ích Của Quy Trình Chuẩn
                    </h2>
                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <i className={`${benefit.icon} icon-large`}></i>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-calendar-check"></i>
                        Ví Dụ Timeline Cải Tạo Căn Hộ 80m²
                    </h2>
                    <div className="timeline-example">
                        <div className="timeline-item">
                            <div className="timeline-date">Ngày 1-2</div>
                            <div className="timeline-content">
                                <h4>Tuần 1: Chuẩn Bị & Khảo Sát</h4>
                                <p>Tiếp nhận thông tin, khảo sát hiện trạng, đo đạc chi tiết</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Ngày 3-7</div>
                            <div className="timeline-content">
                                <h4>Tuần 1: Thiết Kế & Ký HĐ</h4>
                                <p>Hoàn thiện thiết kế, báo giá chi tiết, ký hợp đồng</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Tuần 2-3</div>
                            <div className="timeline-content">
                                <h4>Tháo Dỡ & Xử Lý</h4>
                                <p>Tháo dỡ hạng mục cũ, vận chuyển xà bần, chuẩn bị mặt bằng</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Tuần 4-6</div>
                            <div className="timeline-content">
                                <h4>Thi Công Chính</h4>
                                <p>Điện nước, trần, tường, sàn, chống thấm các phòng</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Tuần 7-8</div>
                            <div className="timeline-content">
                                <h4>Hoàn Thiện & Nội Thất</h4>
                                <p>Sơn, ốp lát, lắp đặt nội thất, thiết bị</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">Ngày cuối</div>
                            <div className="timeline-content">
                                <h4>Nghiệm Thu & Bàn Giao</h4>
                                <p>Kiểm tra, vệ sinh, bàn giao công trình hoàn chỉnh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
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

export default QuyTrinhSuaChuaPage;
