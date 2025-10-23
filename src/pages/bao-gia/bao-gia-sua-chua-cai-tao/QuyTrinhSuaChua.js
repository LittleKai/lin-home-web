// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/QuyTrinhSuaChua.js
import React from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const QuyTrinhSuaChua = () => {
    const processSteps = [
        {
            step: 1,
            title: 'Tiếp nhận thông tin & nhu cầu khách hàng',
            description: 'Tư vấn sơ bộ qua điện thoại/Zalo/Email. Lắng nghe nhu cầu: cải tạo phòng khách, phòng bếp, nâng cấp WC, sơn sửa toàn bộ... Đặt lịch khảo sát thực tế.',
            icon: 'fas fa-phone',
            note: 'Đây là bước quan trọng để xác định đúng nhu cầu và ngân sách'
        },
        {
            step: 2,
            title: 'Khảo sát hiện trạng công trình',
            description: 'Đo đạc diện tích, kết cấu nhà. Kiểm tra tình trạng tường, sàn, trần, hệ thống điện nước. Đánh giá mức độ xuống cấp, các hạng mục cần xử lý.',
            icon: 'fas fa-clipboard-check',
            note: 'Miễn phí khảo sát khi khách hàng liên hệ trực tiếp qua hotline'
        },
        {
            step: 3,
            title: 'Đề xuất phương án thiết kế & báo giá',
            description: 'Đưa ra phương án cải tạo 2D/3D (nếu cần). Báo giá chi tiết từng hạng mục. Tư vấn vật liệu phù hợp với ngân sách. Thời gian thi công dự kiến.',
            icon: 'fas fa-drafting-compass',
            note: 'Báo giá trọn gói, cam kết không phát sinh'
        },
        {
            step: 4,
            title: 'Ký hợp đồng thi công',
            description: 'Thống nhất phương án thiết kế. Ký hợp đồng với điều khoản rõ ràng. Lịch thanh toán theo tiến độ. Cam kết bảo hành.',
            icon: 'fas fa-file-signature',
            note: 'Hợp đồng minh bạch, bảo vệ quyền lợi hai bên'
        },
        {
            step: 5,
            title: 'Thi công theo quy trình chuẩn',
            description: 'Tháo dỡ & xử lý phần cũ. Thi công phần thô (xây, trát, điện nước). Hoàn thiện (sơn, ốp lát, lắp đặt). Kiểm tra chất lượng từng giai đoạn.',
            icon: 'fas fa-hammer',
            note: 'Đảm bảo tiến độ, an toàn và chất lượng'
        },
        {
            step: 6,
            title: 'Nghiệm thu & bàn giao',
            description: 'Kiểm tra toàn bộ công trình. Hướng dẫn sử dụng và bảo quản. Bàn giao hồ sơ hoàn công. Kích hoạt bảo hành.',
            icon: 'fas fa-key',
            note: 'Nghiệm thu kỹ lưỡng, đảm bảo sự hài lòng'
        },
        {
            step: 7,
            title: 'Bảo hành & hỗ trợ sau thi công',
            description: 'Bảo hành 12-24 tháng. Hỗ trợ xử lý sự cố 24/7. Tư vấn bảo dưỡng định kỳ. Ưu đãi cho khách hàng cũ.',
            icon: 'fas fa-shield-alt',
            note: 'Đồng hành lâu dài cùng khách hàng'
        }
    ];

    const qualityStandards = [
        {
            icon: 'fas fa-users',
            title: 'Đội ngũ tay nghề cao',
            items: [
                'Kiến trúc sư giàu kinh nghiệm',
                'Thợ thi công lành nghề',
                'Giám sát công trình chuyên nghiệp'
            ]
        },
        {
            icon: 'fas fa-clipboard-list',
            title: 'Quy trình ISO',
            items: [
                'Tuân thủ tiêu chuẩn xây dựng',
                'Kiểm soát chất lượng nghiêm ngặt',
                'Hồ sơ thi công đầy đủ'
            ]
        },
        {
            icon: 'fas fa-clock',
            title: 'Đúng tiến độ',
            items: [
                'Lập kế hoạch chi tiết',
                'Theo dõi tiến độ hàng ngày',
                'Cam kết hoàn thành đúng hẹn'
            ]
        },
        {
            icon: 'fas fa-hand-holding-usd',
            title: 'Minh bạch chi phí',
            items: [
                'Báo giá chi tiết từng hạng mục',
                'Không phát sinh ngoài hợp đồng',
                'Thanh toán theo tiến độ'
            ]
        }
    ];

    const faqs = [
        {
            question: 'Thời gian sửa chữa cải tạo nhà mất bao lâu?',
            answer: 'Tùy thuộc vào quy mô và phạm vi cải tạo. Thông thường: Cải tạo 1 phòng: 7-10 ngày, Cải tạo căn hộ: 20-30 ngày, Cải tạo nhà phố: 30-45 ngày. Chúng tôi sẽ cung cấp lịch trình chi tiết sau khi khảo sát.'
        },
        {
            question: 'Có cần xin giấy phép sửa chữa không?',
            answer: 'Việc sửa chữa nhỏ trong nhà thường không cần giấy phép. Tuy nhiên, nếu thay đổi kết cấu, mặt tiền hoặc tăng diện tích xây dựng thì cần xin phép. LinHome sẽ hỗ trợ bạn trong việc này.'
        },
        {
            question: 'Thanh toán như thế nào?',
            answer: 'Chúng tôi áp dụng thanh toán theo tiến độ: Đợt 1: 30% sau khi ký hợp đồng, Đợt 2: 40% khi hoàn thành phần thô, Đợt 3: 25% khi hoàn thiện, Đợt 4: 5% sau nghiệm thu bàn giao.'
        },
        {
            question: 'Nếu phát sinh chi phí ngoài dự toán thì sao?',
            answer: 'LinHome cam kết báo giá trọn gói, không phát sinh. Trong trường hợp khách hàng muốn thay đổi thiết kế hoặc nâng cấp vật liệu, chúng tôi sẽ báo giá bổ sung và chỉ thực hiện khi được sự đồng ý.'
        }
    ];

    return (
        <div className="suachua-detail-page">
            {/* Header */}
            <section className="detail-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Trang chủ</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia">Báo giá</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia/bao-gia-sua-chua-cai-tao">Báo giá sửa chữa cải tạo</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Quy trình sửa chữa</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-clipboard-list"></i>
                        Quy Trình Sửa Chữa Cải Tạo Nhà Trọn Gói Từ A-Z
                    </h1>
                    <p className="detail-subtitle">
                        Quy trình làm việc chuyên nghiệp, minh bạch, đảm bảo tiến độ và chất lượng công trình
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Khi quyết định sửa chữa, cải tạo nhà, nhiều gia chủ thường lo lắng về tiến độ, chất lượng 
                            và chi phí phát sinh. Thực tế, một quy trình làm việc chuyên nghiệp, minh bạch sẽ giúp bạn 
                            kiểm soát được toàn bộ dự án, tiết kiệm thời gian và hạn chế rủi ro.
                        </p>
                        <p>
                            Trong bài viết này, <strong>LinHome</strong> sẽ chia sẻ quy trình sửa chữa cải tạo nhà 
                            trọn gói từ A–Z, giúp bạn dễ dàng hình dung và chuẩn bị trước khi bắt đầu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình 7 Bước Chuyên Nghiệp</h2>
                    
                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker">{step.step}</div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <i className={step.icon}></i>
                                        <h3>{step.title}</h3>
                                    </div>
                                    <p>{step.description}</p>
                                    <div className="timeline-note">
                                        <i className="fas fa-info-circle"></i>
                                        <span>{step.note}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Cam Kết Chất Lượng</h2>
                    <p className="section-subtitle">
                        LinHome cam kết mang đến dịch vụ sửa chữa cải tạo chất lượng cao nhất
                    </p>
                    
                    <div className="grid-4">
                        {qualityStandards.map((standard, index) => (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <div className="feature-icon">
                                        <i className={standard.icon}></i>
                                    </div>
                                    <h4>{standard.title}</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {standard.items.map((item, idx) => (
                                            <li key={idx} style={{ padding: '0.3rem 0', color: '#4a5568' }}>
                                                <i className="fas fa-check" style={{ color: '#10b981', marginRight: '0.5rem' }}></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question">
                                    {faq.question}
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lợi Ích Khi Chọn LinHome</h2>
                    
                    <div className="benefit-grid">
                        <div className="benefit-item">
                            <i className="fas fa-award"></i>
                            <h4>15+ Năm Kinh Nghiệm</h4>
                            <p>Đội ngũ chuyên nghiệp với hàng nghìn công trình hoàn thành</p>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-handshake"></i>
                            <h4>Tư Vấn Miễn Phí</h4>
                            <p>Khảo sát và tư vấn tận nơi hoàn toàn miễn phí</p>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-shield-alt"></i>
                            <h4>Bảo Hành Dài Hạn</h4>
                            <p>Cam kết bảo hành từ 12-24 tháng cho toàn bộ công trình</p>
                        </div>
                        <div className="benefit-item">
                            <i className="fas fa-dollar-sign"></i>
                            <h4>Giá Cả Cạnh Tranh</h4>
                            <p>Báo giá minh bạch, không phát sinh chi phí</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Bắt Đầu Dự Án Cải Tạo Nhà Của Bạn</h2>
                        <p>
                            Với quy trình chuyên nghiệp và đội ngũ giàu kinh nghiệm, LinHome sẵn sàng 
                            đồng hành cùng bạn trong hành trình biến ngôi nhà cũ thành tổ ấm mơ ước.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Gọi Tư Vấn: 0941 090 333
                            </a>
                            <a href="/lien-he" className="btn btn-secondary">
                                <i className="fas fa-calendar"></i>
                                Đặt Lịch Khảo Sát
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .timeline-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                }

                .timeline-header i {
                    font-size: 1.5rem;
                    color: #667eea;
                }

                .timeline-note {
                    margin-top: 0.75rem;
                    padding: 0.75rem;
                    background: #f0f4ff;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: #667eea;
                }

                .benefit-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .benefit-item {
                    text-align: center;
                    padding: 2rem;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .benefit-item i {
                    font-size: 3rem;
                    color: #667eea;
                    margin-bottom: 1rem;
                    display: block;
                }

                .benefit-item h4 {
                    margin-bottom: 0.75rem;
                    color: #2d3748;
                }

                .benefit-item p {
                    color: #4a5568;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .benefit-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default QuyTrinhSuaChua;
