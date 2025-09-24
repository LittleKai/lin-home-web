// src/pages/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';

const CaiTaoNangTangMoRongPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Reasons for extension renovation
    const extensionReasons = [
        {
            title: "Gia đình đông người",
            description: "Cần thêm phòng ngủ, phòng sinh hoạt chung",
            icon: "fa-users",
            color: "#667eea"
        },
        {
            title: "Mở rộng công năng",
            description: "Thêm phòng làm việc, kho, garage",
            icon: "fa-plus-square",
            color: "#10b981"
        },
        {
            title: "Tận dụng đất nhỏ",
            description: "Giải pháp hiệu quả thay vì mua đất mới",
            icon: "fa-expand-arrows-alt",
            color: "#f59e0b"
        },
        {
            title: "Tăng giá trị tài sản",
            description: "Nhà cao hơn, diện tích nhiều hơn, giá trị cao hơn",
            icon: "fa-chart-line",
            color: "#8b5cf6"
        }
    ];

    // Extension process
    const extensionProcess = [
        {
            step: 1,
            title: "Khảo sát & kiểm định kết cấu hiện trạng",
            description: "Đánh giá khả năng chịu lực của công trình hiện tại",
            details: [
                "Kiểm tra móng, dầm, cột, tường chịu lực",
                "Thí nghiệm khả năng chịu tải (nếu cần)",
                "Đánh giá độ an toàn kết cấu",
                "Lập báo cáo kỹ thuật chi tiết"
            ],
            duration: "3-7 ngày",
            tools: "Thiết bị đo chuyên dụng"
        },
        {
            step: 2,
            title: "Thiết kế phương án nâng tầng/mở rộng",
            description: "Lập bản vẽ kỹ thuật và phương án gia cố",
            details: [
                "Bản vẽ kiến trúc, kết cấu & M&E",
                "Đề xuất biện pháp gia cố (cọc ép, đai thép, dầm bê tông)",
                "Tính toán tải trọng và an toàn",
                "Phối cảnh 3D để khách hàng hình dung"
            ],
            duration: "7-14 ngày",
            tools: "Phần mềm thiết kế"
        },
        {
            step: 3,
            title: "Xin phép xây dựng/cải tạo",
            description: "Hoàn tất thủ tục pháp lý theo quy định",
            details: [
                "Hồ sơ xin phép tại UBND quận/huyện",
                "Xin phép thay đổi chiều cao, mặt tiền",
                "Đảm bảo tuân thủ quy hoạch đô thị",
                "Theo dõi tiến trình phê duyệt"
            ],
            duration: "15-45 ngày",
            tools: "Hồ sơ pháp lý"
        },
        {
            step: 4,
            title: "Thi công gia cố móng & kết cấu chịu lực",
            description: "Chuẩn bị nền tảng cho việc nâng tầng",
            details: [
                "Gia cố móng (ép cọc, khoan nhồi mini, dầm giằng)",
                "Gia cố cột/dầm hiện có trước khi xây thêm tầng",
                "Thi công biện pháp chống đỡ tạm thời",
                "Kiểm tra chất lượng gia cố"
            ],
            duration: "10-21 ngày",
            tools: "Thiết bị gia cố chuyên dụng"
        },
        {
            step: 5,
            title: "Thi công nâng tầng / mở rộng",
            description: "Thực hiện xây dựng phần mở rộng",
            details: [
                "Thi công khung chịu lực trước → tường bao → mái",
                "Đồng bộ hệ thống điện, nước, chống thấm",
                "Đảm bảo liên kết chắc chắn giữa phần cũ và mới",
                "Kiểm soát chất lượng từng giai đoạn"
            ],
            duration: "30-60 ngày",
            tools: "Thiết bị xây dựng"
        },
        {
            step: 6,
            title: "Hoàn thiện & bàn giao",
            description: "Hoàn tất các chi tiết và bàn giao công trình",
            details: [
                "Ốp lát, sơn, nội thất bổ sung",
                "Test hệ thống điện, nước, chống thấm",
                "Nghiệm thu từng hạng mục",
                "Bàn giao hồ sơ bảo hành"
            ],
            duration: "14-30 ngày",
            tools: "Thiết bị nghiệm thu"
        }
    ];

    // Common mistakes
    const extensionMistakes = [
        {
            title: "Không kiểm tra móng trước khi nâng tầng",
            cause: "Chủ quan, nghĩ móng cũ đủ khỏe",
            consequence: "Nứt tường, lún móng, thậm chí nguy cơ sập",
            solution: "Thí nghiệm nén tĩnh/nén động; ép cọc bổ sung",
            prevention: "Luôn khảo sát & có bản vẽ kết cấu",
            icon: "fa-exclamation-triangle"
        },
        {
            title: "Nứt vết tiếp giáp phần cũ - mới",
            cause: "Thi công không neo thép/dầm liên kết",
            consequence: "Tường nứt dọc, thấm nước, mất thẩm mỹ",
            solution: "Neo thép chờ, dùng vữa không co ngót, trám keo epoxy",
            prevention: "Thiết kế chi tiết liên kết ngay từ đầu",
            icon: "fa-compress-arrows-alt"
        },
        {
            title: "Sai cao độ sàn tầng mới",
            cause: "Không kiểm tra cốt, thi công thủ công",
            consequence: "Chênh sàn, khó đóng cửa, nước đọng",
            solution: "Cán lại nền, điều chỉnh dốc",
            prevention: "Dùng máy laser đo cốt trước thi công",
            icon: "fa-level-up-alt"
        },
        {
            title: "Hệ thống điện - nước không đồng bộ",
            cause: "Không làm lại bản vẽ M&E, đấu nối chắp vá",
            consequence: "Chập điện, rò rỉ nước",
            solution: "Thi công M&E đồng bộ, test áp lực nước, test điện trở",
            prevention: "Có bản vẽ M&E chi tiết từ đầu",
            icon: "fa-plug"
        },
        {
            title: "Không chống thấm kỹ phần mái/tầng mới",
            cause: "Bỏ qua hoặc chỉ quét sơ lớp chống thấm",
            consequence: "Thấm nước, hỏng trần, sàn tầng dưới",
            solution: "Thi công đủ lớp chống thấm, ngâm thử nước ≥ 48h",
            prevention: "Tuân thủ quy trình chống thấm 3 lớp",
            icon: "fa-tint"
        }
    ];

    // Customer pain points
    const painPoints = [
        {
            title: "Lo lắng an toàn kết cấu",
            description: "Nhà có đủ chắc khi lên tầng không?",
            solution: "Khảo sát kỹ thuật và gia cố chuyên nghiệp",
            icon: "fa-shield-alt",
            color: "#ef4444"
        },
        {
            title: "Sợ phát sinh chi phí",
            description: "Bảng giá ban đầu thấp, về sau tăng mạnh",
            solution: "Dự toán chi tiết, hợp đồng minh bạch",
            icon: "fa-money-bill-wave",
            color: "#f59e0b"
        },
        {
            title: "Tiến độ kéo dài",
            description: "Mất thời gian sinh hoạt, ảnh hưởng công việc",
            solution: "Lập timeline rõ ràng, giám sát chặt chẽ",
            icon: "fa-clock",
            color: "#8b5cf6"
        },
        {
            title: "Nứt tường, thấm dột sau thi công",
            description: "Tốn tiền sửa đi sửa lại",
            solution: "Quy trình kỹ thuật chuẩn, bảo hành lâu dài",
            icon: "fa-home",
            color: "#10b981"
        }
    ];

    // Quality checklist
    const qualityChecklist = [
        {
            category: "Kết cấu",
            items: [
                "Móng, dầm, cột không nứt, không lún",
                "Vết tiếp giáp phần cũ - mới xử lý kín, không nứt",
                "Khung chịu lực mới liên kết chắc chắn với phần cũ"
            ]
        },
        {
            category: "Chống thấm",
            items: [
                "Mái, sân thượng test ngâm 48h không thấm",
                "Tường tiếp giáp không loang",
                "Hệ thống thoát nước hoạt động tốt"
            ]
        },
        {
            category: "M&E",
            items: [
                "Điện có tiếp đất, aptomat hoạt động",
                "Nước test áp lực ≥ 2 bar, không rò rỉ",
                "Hệ thống đồng bộ giữa tầng cũ và mới"
            ]
        },
        {
            category: "Hoàn thiện",
            items: [
                "Cao độ sàn đúng chuẩn, không chênh",
                "Sơn/trần đều màu, không nứt",
                "Cửa sổ, ban công an toàn, thẩm mỹ"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Nhà cấp 4 có nâng tầng được không?",
            answer: "Được, nhưng phải khảo sát móng, thường cần ép cọc/gia cố mới nâng tầng an toàn."
        },
        {
            id: 2,
            question: "Chi phí nâng tầng bao nhiều?",
            answer: "Trung bình 5-7 triệu/m² (tùy kết cấu, vật liệu, vị trí thi công)."
        },
        {
            id: 3,
            question: "Bao lâu thì hoàn thiện 1 công trình nâng tầng?",
            answer: "2-4 tháng tùy quy mô & hiện trạng công trình."
        },
        {
            id: 4,
            question: "Có cần xin phép khi nâng tầng không?",
            answer: "Có, bắt buộc xin phép nếu thay đổi chiều cao, diện tích sàn."
        },
        {
            id: 5,
            question: "Nhà liền kề có bị ảnh hưởng khi cải tạo không?",
            answer: "Có, nếu không chống đỡ tốt. Bắt buộc phải có biện pháp che chắn, giằng chống."
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏗️ Cải Tạo Nâng Tầng Và Mở Rộng Nhà</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Tối Ưu Không Gian Sống
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">6</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">2-4</span>
                                    <span className="stat-label">Tháng hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">An toàn kết cấu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <div className="intro-text">
                                <h2>Tại sao cần cải tạo nâng tầng & mở rộng nhà?</h2>
                                <p>
                                    Trong bối cảnh đất đai ngày càng khan hiếm và giá cả tăng cao,
                                    <strong> cải tạo nâng tầng và mở rộng nhà</strong> trở thành giải pháp
                                    thông minh để tối ưu không gian sống mà không cần mua thêm đất.
                                </p>
                                <p>
                                    Đây là hạng mục cải tạo có tính kỹ thuật cao, liên quan trực tiếp đến
                                    <strong> kết cấu, móng và tải trọng công trình</strong>, đòi hỏi đơn vị
                                    thi công phải có chuyên môn sâu và kinh nghiệm thực tế.
                                </p>
                                <h3>Lưu ý quan trọng về kết cấu & an toàn:</h3>
                                <ul className="role-list">
                                    <li>Kiểm tra móng hiện hữu - nhiều nhà cũ không đủ chịu lực</li>
                                    <li>Hệ thống chống thấm & thoát nước mái đặc biệt quan trọng</li>
                                    <li>Liên kết giữa phần cũ và mới cần neo thép, giằng dầm</li>
                                    <li>Nhà liền kề phải có biện pháp chống rung, chống sụt lún</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='extension' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23extension)'/><rect x='80' y='150' width='120' height='80' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='200' y='120' width='120' height='110' fill='rgba(255,255,255,0.95)' rx='8'/><polygon points='80,150 140,110 200,150' fill='rgba(102,126,234,0.8)'/><polygon points='200,120 260,80 320,120' fill='rgba(118,75,162,0.8)'/><circle cx='350' cy='60' r='15' fill='rgba(255,215,0,0.8)'/><rect x='100' y='180' width='80' height='4' fill='%23667eea'/><rect x='220' y='160' width='80' height='4' fill='%23764ba2'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Nâng tầng mở rộng</text><path d='M 150 200 Q 170 190 190 200' stroke='rgba(255,255,255,0.8)' stroke-width='3' fill='none' marker-end='url(%23arrowhead)'/></svg>"
                                    alt="Cải tạo nâng tầng mở rộng"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasons Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lý Do Cần Cải Tạo Nâng Tầng & Mở Rộng</h2>
                            <p>Những lợi ích vượt trội của giải pháp này</p>
                        </div>

                        <div className="benefits-grid">
                            {extensionReasons.map((reason, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: reason.color}}>
                                        <i className={`fas ${reason.icon}`}></i>
                                    </div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Cải Tạo Nâng Tầng & Mở Rộng (Chuẩn Kỹ Thuật)</h2>
                            <p>6 bước thực hiện chuyên nghiệp đảm bảo an toàn</p>
                        </div>

                        <div className="process-timeline">
                            {extensionProcess.map((step) => (
                                <div key={step.step} className="process-item">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-content">
                                        <div className="process-header">
                                            <div className="process-title">
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                                <div className="step-meta">
                                                    <span className="step-duration">
                                                        <i className="far fa-clock"></i> {step.duration}
                                                    </span>
                                                    <span className="step-tools">
                                                        <i className="fas fa-tools"></i> {step.tools}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="process-details">
                                            <ul>
                                                {step.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Mistakes Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Lỗi Thường Gặp Khi Nâng Tầng & Mở Rộng</h2>
                            <p>Tránh những sai lầm có thể gây hậu quả nghiêm trọng</p>
                        </div>

                        <div className="benefits-grid">
                            {extensionMistakes.map((mistake, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className={`fas ${mistake.icon}`}></i>
                                    </div>
                                    <h3>{mistake.title}</h3>
                                    <div style={{textAlign: 'left', fontSize: '13px', lineHeight: '1.4'}}>
                                        <p className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {mistake.cause}
                                        </p>
                                        <p className="issue-solution">
                                            <strong>Hậu quả:</strong> {mistake.consequence}
                                        </p>
                                        <p className="issue-prevention">
                                            <strong>Khắc phục:</strong> {mistake.solution}
                                        </p>
                                        <p style={{color: '#0369a1', fontStyle: 'italic'}}>
                                            <strong>Phòng ngừa:</strong> {mistake.prevention}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pain Points Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Phân Tích "Nỗi Đau" Của Khách Hàng</h2>
                            <p>Những lo lắng phổ biến và giải pháp của chúng tôi</p>
                        </div>

                        <div className="benefits-grid">
                            {painPoints.map((point, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: point.color}}>
                                        <i className={`fas ${point.icon}`}></i>
                                    </div>
                                    <h3>{point.title}</h3>
                                    <p style={{color: '#dc2626', marginBottom: '12px'}}>
                                        <strong>Nỗi lo:</strong> {point.description}
                                    </p>
                                    <p style={{color: '#059669'}}>
                                        <strong>Giải pháp:</strong> {point.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Checklist Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Checklist Nghiệm Thu Nâng Tầng & Mở Rộng</h2>
                            <p>Danh sách kiểm tra chất lượng trước khi bàn giao</p>
                        </div>

                        <div className="benefits-grid">
                            {qualityChecklist.map((category, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#10b981'}}>
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <h3>{category.category}</h3>
                                    <div style={{textAlign: 'left'}}>
                                        <ul style={{listStyle: 'none', padding: 0, fontSize: '14px'}}>
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex} style={{
                                                    marginBottom: '8px',
                                                    paddingLeft: '20px',
                                                    position: 'relative'
                                                }}>
                                                    <i className="fas fa-check" style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: '2px',
                                                        color: '#10b981',
                                                        fontSize: '12px'
                                                    }}></i>
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

                {/* FAQ Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Câu Hỏi Thường Gặp (FAQ)</h2>
                            <p>Giải đáp những thắc mắc phổ biến về nâng tầng mở rộng</p>
                        </div>

                        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                            {faqData.map((faq) => (
                                <div key={faq.id} className="faq-item" style={{
                                    marginBottom: '16px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'white'
                                }}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                        style={{
                                            width: '100%',
                                            padding: '20px',
                                            textAlign: 'left',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#1a202c',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                    </button>
                                    {activeFaq === faq.id && (
                                        <div className="faq-answer" style={{
                                            padding: '0 20px 20px',
                                            color: '#4a5568',
                                            lineHeight: '1.6'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Bắt Đầu Dự Án Nâng Tầng Mở Rộng</h2>
                            <p>
                                <strong>Cải tạo nâng tầng và mở rộng nhà</strong> là giải pháp thông minh để tối ưu
                                không gian mà không cần mua đất mới. Tuy nhiên, đây cũng là hạng mục
                                <strong> nguy cơ cao về kết cấu</strong>.
                            </p>
                            <p>
                                Hãy chọn <strong>đơn vị có chuyên môn kết cấu, kinh nghiệm thi công thực tế</strong>,
                                và kiểm soát bằng <strong>hợp đồng + checklist nghiệm thu</strong> để yên tâm lâu dài.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn nâng tầng: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Báo giá chi tiết
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default CaiTaoNangTangMoRongPage;
