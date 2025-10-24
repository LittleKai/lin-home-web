// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/ChonDonViUyTin.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const ChonDonViUyTin = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Criteria for choosing contractor
    const selectionCriteria = [
        {
            criterion: 'Kinh Nghiệm',
            importance: 'Rất cao',
            checkpoints: [
                'Hoạt động tối thiểu 3-5 năm',
                'Có portfolio dự án thực tế',
                'Chuyên môn phù hợp công trình',
                'Đánh giá tốt từ khách hàng cũ'
            ],
            icon: 'fas fa-certificate',
            color: '#10b981'
        },
        {
            criterion: 'Giấy Tờ Pháp Lý',
            importance: 'Rất cao',
            checkpoints: [
                'Giấy phép kinh doanh hợp lệ',
                'Chứng chỉ năng lực thi công',
                'Bảo hiểm trách nhiệm nghề nghiệp',
                'Hợp đồng rõ ràng, minh bạch'
            ],
            icon: 'fas fa-file-contract',
            color: '#3b82f6'
        },
        {
            criterion: 'Báo Giá',
            importance: 'Cao',
            checkpoints: [
                'Báo giá chi tiết từng hạng mục',
                'Giá cả hợp lý so với thị trường',
                'Không phát sinh quá 10%',
                'Có điều khoản thanh toán rõ ràng'
            ],
            icon: 'fas fa-file-invoice-dollar',
            color: '#f59e0b'
        },
        {
            criterion: 'Đội Ngũ',
            importance: 'Cao',
            checkpoints: [
                'Thợ có tay nghề, kinh nghiệm',
                'Giám sát công trình chuyên nghiệp',
                'Phân công rõ ràng trách nhiệm',
                'Thái độ làm việc chuyên nghiệp'
            ],
            icon: 'fas fa-users',
            color: '#8b5cf6'
        },
        {
            criterion: 'Bảo Hành',
            importance: 'Trung bình',
            checkpoints: [
                'Cam kết bảo hành bằng văn bản',
                'Thời gian bảo hành 12-36 tháng',
                'Phạm vi bảo hành rõ ràng',
                'Hỗ trợ sau bàn giao nhanh chóng'
            ],
            icon: 'fas fa-shield-alt',
            color: '#06b6d4'
        },
        {
            criterion: 'Tham Khảo',
            importance: 'Trung bình',
            checkpoints: [
                'Đánh giá tốt trên mạng xã hội',
                'Được bạn bè giới thiệu',
                'Có văn phòng, showroom rõ ràng',
                'Sẵn sàng cho khách tham quan công trình'
            ],
            icon: 'fas fa-star',
            color: '#f59e0b'
        }
    ];

    // Red flags to avoid
    const redFlags = [
        {
            warning: 'Không Có Giấy Tờ',
            description: 'Không có giấy phép kinh doanh, chứng chỉ năng lực',
            risk: 'Rất cao',
            icon: 'fas fa-exclamation-triangle'
        },
        {
            warning: 'Báo Giá Quá Thấp',
            description: 'Giá thấp hơn thị trường 30-40% không rõ lý do',
            risk: 'Cao',
            icon: 'fas fa-dollar-sign'
        },
        {
            warning: 'Yêu Cầu Cọc Cao',
            description: 'Đòi cọc >50% hoặc thanh toán hết trước khi thi công',
            risk: 'Cao',
            icon: 'fas fa-hand-holding-usd'
        },
        {
            warning: 'Không Hợp Đồng',
            description: 'Chỉ thỏa thuận miệng, không ký hợp đồng',
            risk: 'Rất cao',
            icon: 'fas fa-handshake-slash'
        },
        {
            warning: 'Thiếu Minh Bạch',
            description: 'Không cho xem bản vẽ, báo giá chi tiết, nguồn gốc vật liệu',
            risk: 'Cao',
            icon: 'fas fa-eye-slash'
        },
        {
            warning: 'Không Bảo Hành',
            description: 'Từ chối cam kết bảo hành hoặc bảo hành <6 tháng',
            risk: 'Trung bình',
            icon: 'fas fa-ban'
        }
    ];

    // Contract checklist
    const contractChecklist = [
        {
            section: 'Thông Tin Hai Bên',
            items: [
                'Tên, địa chỉ, số điện thoại đầy đủ',
                'CMND/CCCD của cả hai bên',
                'Giấy phép kinh doanh của nhà thầu',
                'Người đại diện hợp pháp'
            ]
        },
        {
            section: 'Phạm Vi Công Việc',
            items: [
                'Danh sách chi tiết hạng mục thi công',
                'Bản vẽ thiết kế kèm theo',
                'Vật liệu sử dụng (thương hiệu, quy cách)',
                'Khối lượng công việc cụ thể'
            ]
        },
        {
            section: 'Giá Trị & Thanh Toán',
            items: [
                'Tổng giá trị hợp đồng',
                'Phương thức thanh toán (%, thời điểm)',
                'Chi phí phát sinh (nếu có)',
                'Phương thức xử lý điều chỉnh giá'
            ]
        },
        {
            section: 'Tiến Độ',
            items: [
                'Thời gian bắt đầu cụ thể',
                'Thời gian hoàn thành cam kết',
                'Bảng tiến độ chi tiết từng giai đoạn',
                'Xử phạt nếu chậm tiến độ'
            ]
        },
        {
            section: 'Nghiệm Thu & Bảo Hành',
            items: [
                'Quy trình nghiệm thu từng phần',
                'Tiêu chuẩn nghiệm thu chất lượng',
                'Thời gian bảo hành từng hạng mục',
                'Trách nhiệm bảo hành cụ thể'
            ]
        },
        {
            section: 'Trách Nhiệm & Quyền Lợi',
            items: [
                'Trách nhiệm của chủ đầu tư',
                'Trách nhiệm của nhà thầu',
                'Xử lý tranh chấp',
                'Điều kiện chấm dứt hợp đồng'
            ]
        }
    ];

    // Questions to ask contractors
    const questionsToAsk = [
        {
            category: 'Kinh Nghiệm',
            questions: [
                'Công ty có bao nhiêu năm kinh nghiệm?',
                'Đã làm dự án nào tương tự chưa?',
                'Có thể xem portfolio và tham khảo khách hàng cũ không?',
                'Ai sẽ là người giám sát trực tiếp công trình?'
            ]
        },
        {
            category: 'Quy Trình',
            questions: [
                'Quy trình thi công như thế nào?',
                'Làm thế nào để kiểm soát chất lượng?',
                'Tần suất báo cáo tiến độ là bao lâu?',
                'Xử lý thế nào nếu phát sinh vấn đề?'
            ]
        },
        {
            category: 'Vật Liệu',
            questions: [
                'Vật liệu lấy từ nguồn nào?',
                'Có chứng nhận chất lượng vật liệu không?',
                'Nếu muốn thay đổi vật liệu thì sao?',
                'Có phụ thu nếu vật liệu tăng giá không?'
            ]
        },
        {
            category: 'Chi Phí',
            questions: [
                'Báo giá đã bao gồm những gì?',
                'Chi phí nào có thể phát sinh?',
                'Tỷ lệ thanh toán theo tiến độ ra sao?',
                'Có được giảm giá nếu thanh toán nhanh không?'
            ]
        },
        {
            category: 'Bảo Hành',
            questions: [
                'Thời gian bảo hành bao lâu?',
                'Phạm vi bảo hành bao gồm gì?',
                'Thời gian phản hồi khi có sự cố là bao lâu?',
                'Có hợp đồng bảo trì định kỳ không?'
            ]
        }
    ];

    // Comparison tips
    const comparisonTips = [
        {
            step: '1',
            title: 'Thu Thập Ít Nhất 3 Báo Giá',
            description: 'Liên hệ 3-5 đơn vị uy tín để so sánh giá và dịch vụ',
            icon: 'fas fa-list-ol'
        },
        {
            step: '2',
            title: 'So Sánh Chi Tiết',
            description: 'So sánh từng hạng mục, vật liệu, thời gian, bảo hành',
            icon: 'fas fa-balance-scale'
        },
        {
            step: '3',
            title: 'Kiểm Tra Uy Tín',
            description: 'Tìm hiểu đánh giá, review, giấy tờ pháp lý của đơn vị',
            icon: 'fas fa-search'
        },
        {
            step: '4',
            title: 'Gặp Mặt Trực Tiếp',
            description: 'Gặp người phụ trách để đánh giá chuyên môn và thái độ',
            icon: 'fas fa-handshake'
        },
        {
            step: '5',
            title: 'Thương Lượng',
            description: 'Thương lượng giá, điều khoản hợp đồng, tiến độ thanh toán',
            icon: 'fas fa-comments-dollar'
        },
        {
            step: '6',
            title: 'Ký Hợp Đồng Rõ Ràng',
            description: 'Đảm bảo hợp đồng chi tiết, minh bạch về mọi vấn đề',
            icon: 'fas fa-file-signature'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Làm sao để chọn đơn vị sửa chữa uy tín?',
            answer: 'Chọn đơn vị uy tín cần: (1) Kiểm tra giấy phép kinh doanh và chứng chỉ năng lực, (2) Xem portfolio và tham khảo khách hàng cũ, (3) So sánh 3-5 báo giá, (4) Đọc review trên mạng, (5) Gặp mặt trực tiếp đánh giá chuyên môn, (6) Hợp đồng rõ ràng và có bảo hành.'
        },
        {
            question: 'Nên cọc bao nhiêu % khi ký hợp đồng?',
            answer: 'Nên cọc 20-30% khi ký hợp đồng, 30-40% khi hoàn thành phần thô, 30% khi hoàn thiện, giữ lại 10% sau nghiệm thu 1-3 tháng. Tránh cọc >50% hoặc thanh toán hết trước khi thi công.'
        },
        {
            question: 'Hợp đồng thi công cần có những điều khoản gì?',
            answer: 'Hợp đồng cần: (1) Thông tin hai bên đầy đủ, (2) Phạm vi công việc chi tiết, (3) Giá trị và phương thức thanh toán, (4) Tiến độ và xử phạt chậm, (5) Chất lượng vật liệu, (6) Bảo hành rõ ràng, (7) Xử lý tranh chấp.'
        },
        {
            question: 'Có nên chọn đơn vị báo giá thấp nhất không?',
            answer: 'Không nên. Giá quá thấp có thể do: (1) Vật liệu kém chất lượng, (2) Thợ thiếu kinh nghiệm, (3) Phát sinh nhiều sau này, (4) Không có bảo hành. Nên chọn giá trung bình và xem chất lượng, uy tín.'
        },
        {
            question: 'Nên hỏi những câu hỏi gì khi gặp nhà thầu?',
            answer: 'Hỏi về: (1) Kinh nghiệm và dự án đã làm, (2) Quy trình thi công và kiểm soát chất lượng, (3) Nguồn gốc vật liệu, (4) Chi phí phát sinh có thể xảy ra, (5) Thời gian bảo hành và phạm vi, (6) Giám sát công trình và báo cáo tiến độ.'
        },
        {
            question: 'Có cần kiểm tra giấy phép của đơn vị không?',
            answer: 'Rất cần! Kiểm tra: (1) Giấy phép kinh doanh hợp lệ, (2) Chứng chỉ năng lực thi công, (3) Bảo hiểm trách nhiệm (nếu có). Đơn vị không có giấy tờ rõ ràng rất rủi ro khi có tranh chấp.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">✅ Chọn Đơn Vị Uy Tín</h1>
                    <p className="section-subtitle">
                        Hướng dẫn chi tiết cách chọn nhà thầu sửa chữa cải tạo uy tín
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">6</div>
                            <div className="stat-label">Tiêu Chí Quan Trọng</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3-5</div>
                            <div className="stat-label">Báo Giá Nên So Sánh</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">6</div>
                            <div className="stat-label">Bước Lựa Chọn</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Hợp Đồng Rõ Ràng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selection Criteria */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📋 Tiêu Chí Lựa Chọn</h2>
                    <p className="section-subtitle">
                        6 tiêu chí quan trọng khi chọn đơn vị thi công
                    </p>

                    <div className="criteria-grid grid-3">
                        {selectionCriteria.map((item, index) => (
                            <div key={index} className="criterion-card card">
                                <div className="card-header" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                                    <i className={`${item.icon} icon-large`}></i>
                                    <h3>{item.criterion}</h3>
                                    <div className="importance">Độ quan trọng: <strong>{item.importance}</strong></div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {item.checkpoints.map((checkpoint, checkpointIndex) => (
                                            <li key={checkpointIndex}>
                                                <i className="fas fa-check-circle"></i>
                                                {checkpoint}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Red Flags */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🚩 Dấu Hiệu Cảnh Báo</h2>
                    <p className="section-subtitle">
                        Những dấu hiệu cần tránh khi chọn đơn vị thi công
                    </p>

                    <div className="red-flags-grid grid-3">
                        {redFlags.map((flag, index) => (
                            <div key={index} className="red-flag-card card">
                                <div className="card-header" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                                    <i className={`${flag.icon} icon-large`}></i>
                                    <h3>{flag.warning}</h3>
                                    <div className="risk-level">Rủi ro: <strong>{flag.risk}</strong></div>
                                </div>

                                <div className="card-body">
                                    <p>{flag.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contract Checklist */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">📝 Checklist Hợp Đồng</h2>
                    <p className="section-subtitle">
                        Những mục cần có trong hợp đồng thi công
                    </p>

                    <div className="checklist-grid grid-2">
                        {contractChecklist.map((section, index) => (
                            <div key={index} className="checklist-card card">
                                <div className="card-header">
                                    <i className="fas fa-clipboard-check icon-large"></i>
                                    <h3>{section.section}</h3>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <i className="fas fa-square-check"></i>
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

            {/* Questions to Ask */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Cần Hỏi</h2>
                    <p className="section-subtitle">
                        Những câu hỏi quan trọng khi gặp nhà thầu
                    </p>

                    <div className="questions-grid">
                        {questionsToAsk.map((category, index) => (
                            <div key={index} className="questions-card card">
                                <div className="card-header">
                                    <h3>{category.category}</h3>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {category.questions.map((question, questionIndex) => (
                                            <li key={questionIndex}>
                                                <i className="fas fa-question-circle"></i>
                                                {question}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔍 Quy Trình So Sánh</h2>
                    <p className="section-subtitle">
                        6 bước để lựa chọn đơn vị thi công tốt nhất
                    </p>

                    <div className="process-timeline">
                        {comparisonTips.map((tip, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={tip.icon}></i>
                                    <span>{tip.step}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{tip.title}</h3>
                                    <p>{tip.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Thường Gặp</h2>

                    <div className="faq-list">
                        {faqData.map((faq, index) => (
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

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default ChonDonViUyTin;
