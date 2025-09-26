// src/pages/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const ThiCongSuaChuaCaiTaoNhaOPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeChecklist, setActiveChecklist] = useState(null);

    // Detailed renovation process
    const detailedProcess = [
        {
            step: 1,
            title: "Tư vấn và tiếp nhận nhu cầu khách hàng",
            description: "Buổi tư vấn trực tiếp hoặc online để hiểu nhu cầu xây dựng",
            duration: "1-3 ngày",
            details: [
                "Lắng nghe nhu cầu xây dựng, cải tạo hoặc hoàn thiện nhà",
                "Tư vấn giải pháp phù hợp với ngân sách, diện tích và phong cách",
                "Đề xuất sơ bộ về vật liệu, thời gian thi công và quy mô nhân lực"
            ],
            icon: "fa-comments",
            importance: "Rất quan trọng"
        },
        {
            step: 2,
            title: "Báo giá thi công và lập dự toán chi tiết",
            description: "Gửi báo giá thi công trọn gói với dự toán minh bạch",
            duration: "2-5 ngày",
            details: [
                "Chi phí vật liệu xây dựng, hoàn thiện",
                "Nhân công theo từng hạng mục",
                "Máy móc, thiết bị thi công",
                "Dự toán tiến độ và chi phí phát sinh (nếu có)"
            ],
            icon: "fa-calculator",
            importance: "Bắt buộc"
        },
        {
            step: 3,
            title: "Khảo sát hiện trạng và ký hợp đồng",
            description: "Đội ngũ kỹ sư đến công trình khảo sát và đo đạc thực tế",
            duration: "1-2 ngày",
            details: [
                "Kiểm tra mặt bằng, hiện trạng móng, tường, hệ thống điện - nước",
                "Ghi nhận những yếu tố ảnh hưởng đến quá trình thi công",
                "Đưa ra đề xuất tối ưu để hạn chế rủi ro",
                "Ký hợp đồng thi công trọn gói, quy định rõ quyền lợi và nghĩa vụ"
            ],
            icon: "fa-ruler-combined",
            importance: "Kỹ thuật cao"
        },
        {
            step: 3.5,
            title: "Hỗ trợ thủ tục xin phép xây dựng",
            description: "Hỗ trợ hoàn tất giấy phép xây dựng theo quy định pháp luật",
            duration: "15-30 ngày",
            details: [
                "Tư vấn, chuẩn bị hồ sơ cần thiết",
                "Hỗ trợ nộp và theo dõi tiến trình xin phép tại cơ quan quản lý",
                "Đảm bảo công trình được cấp phép đúng loại hình, đúng quy chuẩn"
            ],
            icon: "fa-file-contract",
            importance: "Rất quan trọng"
        },
        {
            step: 4,
            title: "Chuẩn bị nguyên vật liệu và nhân lực",
            description: "Chuẩn bị đầy đủ vật liệu, thiết bị và nhân lực thi công",
            duration: "3-7 ngày",
            details: [
                "Lựa chọn vật liệu xây dựng theo hợp đồng (gạch, xi măng, thép, gỗ, sơn...)",
                "Chuẩn bị máy móc, thiết bị cần thiết",
                "Bố trí đội ngũ nhân công, kỹ sư giám sát"
            ],
            icon: "fa-boxes",
            importance: "Bắt buộc"
        },
        {
            step: 5,
            title: "Thi công phần thô",
            description: "Thực hiện các hạng mục kết cấu chính của công trình",
            duration: "30-90 ngày",
            details: [
                "Đào móng, xử lý nền đất",
                "Thi công hệ thống cột, dầm, sàn, tường",
                "Lắp đặt sơ bộ hệ thống điện nước âm tường"
            ],
            icon: "fa-hard-hat",
            importance: "Kỹ thuật cao"
        },
        {
            step: 6,
            title: "Thi công hoàn thiện",
            description: "Hoàn thiện các chi tiết và hệ thống theo thiết kế",
            duration: "20-45 ngày",
            details: [
                "Trát, ốp lát, sơn bả",
                "Lắp đặt cửa, trần, sàn",
                "Hoàn thiện hệ thống điện nước, chiếu sáng",
                "Thi công nội thất cơ bản theo thiết kế"
            ],
            icon: "fa-paint-brush",
            importance: "Rất quan trọng"
        },
        {
            step: 7,
            title: "Nghiệm thu và bàn giao công trình",
            description: "Kiểm tra toàn bộ chất lượng và bàn giao công trình",
            duration: "3-5 ngày",
            details: [
                "Độ bền và chất lượng kết cấu",
                "Sự đồng bộ trong hoàn thiện nội thất",
                "Kiểm tra hệ thống điện, nước, chống thấm",
                "Nghiệm thu và bàn giao chính thức"
            ],
            icon: "fa-clipboard-check",
            importance: "Rất quan trọng"
        },
        {
            step: 8,
            title: "Bảo hành và hỗ trợ sau thi công",
            description: "Chế độ bảo hành và hỗ trợ khách hàng sau bàn giao",
            duration: "5-10 năm",
            details: [
                "Bảo hành phần kết cấu và hoàn thiện theo thời gian cam kết",
                "Hỗ trợ sửa chữa, bảo trì khi có sự cố",
                "Tư vấn miễn phí trong quá trình sử dụng"
            ],
            icon: "fa-tools",
            importance: "Bắt buộc"
        }
    ];

    // Safety notes about structure
    const safetyNotes = [
        {
            title: "Không tự ý đục phá cột, dầm, tường chịu lực",
            description: "Cần có sự kiểm tra của kỹ sư kết cấu trước khi thực hiện",
            icon: "fa-exclamation-triangle"
        },
        {
            title: "Thay đổi cầu thang, cửa, ban công cần kiểm tra tải trọng",
            description: "Đảm bảo kết cấu có thể chịu được tải trọng mới",
            icon: "fa-weight-hanging"
        },
        {
            title: "Gia cố thép hình, bê tông khi nâng tầng",
            description: "Sử dụng vật liệu cường độ cao để đảm bảo an toàn",
            icon: "fa-tools"
        },
        {
            title: "Luôn có biện pháp chống đỡ tạm trong khi tháo dỡ",
            description: "Đảm bảo an toàn trong quá trình thi công",
            icon: "fa-shield-alt"
        }
    ];

    // Common errors and solutions
    const commonErrors = [
        {
            error: "Đục phá nhầm tường/cột chịu lực",
            cause: "Không có bản vẽ kết cấu, thợ thi công tự ý đục phá",
            consequence: "Gây nứt, lún sàn, nguy cơ sập",
            solution: [
                "Thuê kỹ sư kết cấu kiểm tra trước",
                "Dùng thiết bị scan tường (radar, máy dò thép) trước khi khoan cắt",
                "Nếu đã đục nhầm, cần gia cố ngay bằng thép hình hoặc đổ bê tông bổ sung"
            ],
            prevention: "Luôn có bản vẽ kết cấu chi tiết"
        },
        {
            error: "Thi công chống thấm sai quy trình",
            cause: "Bỏ qua lớp xử lý bề mặt, chỉ quét 1 lớp vật liệu chống thấm",
            consequence: "Thấm dột sau vài tháng, bong tróc sơn, hư hại nội thất",
            solution: [
                "Làm sạch bề mặt, tạo độ nhám",
                "Thi công đủ 3 lớp (vữa tạo dốc - lớp màng chống thấm - lớp bảo vệ)",
                "Test ngâm nước 48-72h trước khi bàn giao"
            ],
            prevention: "Tuân thủ nghiêm ngặt quy trình chống thấm"
        },
        {
            error: "Đấu nối điện nước không đúng kỹ thuật",
            cause: "Thợ không theo bản vẽ M&E, nối dây/ống thủ công",
            consequence: "Rò rỉ, chập cháy, nguy cơ mất an toàn",
            solution: [
                "Luôn có bản vẽ điện - nước chi tiết",
                "Nghiệm thu bằng đồng hồ đo điện, test áp lực nước ≥ 2 bar",
                "Lắp aptomat & hệ thống tiếp đất đầy đủ"
            ],
            prevention: "Có bản vẽ M&E chi tiết và tuân thủ"
        },
        {
            error: "Sai cao độ nền/sàn",
            cause: "Không kiểm tra cốt cao độ chuẩn trước khi cán nền",
            consequence: "Nước đọng, dốc sai, gây thấm ngược",
            solution: [
                "Đo cốt bằng máy laser trước khi thi công",
                "Nếu sai, cần mài/cán lại nền theo đúng cao độ chuẩn"
            ],
            prevention: "Kiểm tra cốt cao độ bằng thiết bị chuyên dụng"
        }
    ];

    // Checklist sections
    const checklistSections = [
        {
            id: 'structure',
            title: 'A. Kết cấu & an toàn',
            items: [
                "Không có vết nứt mới xuất hiện trên dầm/cột/sàn",
                "Tường không bị võng hoặc phồng",
                "Móng và nền không lún sụt",
                "Cầu thang, lan can chắc chắn, không rung lắc"
            ]
        },
        {
            id: 'waterproof',
            title: 'B. Chống thấm & mái',
            items: [
                "Test ngâm nước sân thượng, WC tối thiểu 48h",
                "Không có thấm loang ở tường tầng dưới",
                "Mái, sê nô thoát nước tốt, không ứ đọng"
            ]
        },
        {
            id: 'me_system',
            title: 'C. Hệ thống điện - nước (M&E)',
            items: [
                "Điện: test từng line, aptomat hoạt động, có tiếp đất",
                "Nước: test áp lực ≥ 2 bar, không rò rỉ tại các mối nối",
                "Ống thoát không bị tắc, thoát nước nhanh"
            ]
        },
        {
            id: 'finishing',
            title: 'D. Hoàn thiện nội thất',
            items: [
                "Sàn gạch lát phẳng, khe đều, không kêu bộp",
                "Sơn đều màu, không loang, không bong tróc",
                "Trần thạch cao phẳng, không nứt tại mối nối",
                "Cửa, tủ, thiết bị nội thất vận hành trơn tru"
            ]
        },
        {
            id: 'documents',
            title: 'E. Hồ sơ & bàn giao',
            items: [
                "Có biên bản nghiệm thu từng hạng mục",
                "Hồ sơ bảo hành vật liệu & công trình",
                "Hình ảnh hiện trạng trước & sau để đối chiếu"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Quy trình sửa chữa cải tạo nhà mất bao lâu?",
            answer: "Tùy vào quy mô dự án: sửa chữa nhỏ 1-2 tuần, cải tạo lớn 1-3 tháng, nâng tầng có thể 3-6 tháng."
        },
        {
            id: 2,
            question: "Có cần xin phép khi sửa chữa cải tạo nhà không?",
            answer: "Cần xin phép nếu thay đổi kết cấu, mặt tiền, nâng tầng. Các hạng mục nội thất, sơn sửa nhỏ thì không cần."
        },
        {
            id: 3,
            question: "Làm sao để tránh phát sinh chi phí ngoài dự toán?",
            answer: "Cần có khảo sát kỹ lưỡng, thiết kế chi tiết, hợp đồng rõ ràng và dự phong 10-15% ngân sách."
        },
        {
            id: 4,
            question: "Có thể ở trong nhà khi đang cải tạo không?",
            answer: "Chỉ nên ở khi sửa chữa nhỏ. Cải tạo lớn nên di dời tạm thời để đảm bảo an toàn và chất lượng thi công."
        },
        {
            id: 5,
            question: "Bảo hành sau cải tạo như thế nào?",
            answer: "Kết cấu bảo hành 5-10 năm, hoàn thiện 2-3 năm, hệ thống điện nước 2-5 năm tùy hạng mục."
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    const toggleChecklist = (checklistId) => {
        setActiveChecklist(activeChecklist === checklistId ? null : checklistId);
    };

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>📋 Quy Trình Sửa Chữa Cải Tạo Nhà Chi Tiết</h1>
                            <p className="hero-subtitle">
                                Hướng Dẫn Đầy Đủ Từ Khảo Sát Đến Bàn Giao
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">9</span>
                                    <span className="stat-label">Bước chi tiết</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Checklist nghiệm thu</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">An toàn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <div className="intro-text">
                                <h2>Tại sao cần quy trình chuẩn khi sửa chữa cải tạo nhà?</h2>
                                <p>
                                    <strong>Sửa chữa cải tạo nhà</strong> không phải là việc đơn giản. Nó đòi hỏi
                                    sự am hiểu về kết cấu, kỹ thuật thi công và khả năng dự đoán các rủi ro có thể xảy ra.
                                </p>
                                <p>
                                    Một quy trình chuẩn sẽ giúp bạn tránh được những sai lầm tốn kém như đục phá nhầm
                                    kết cấu chịu lực, thi công chống thấm sai quy trình, hay phát sinh chi phí ngoài dự toán.
                                </p>
                                <h3>Quy trình này phù hợp với:</h3>
                                <ul className="role-list">
                                    <li>Nhà ở dân dụng cần sửa chữa, cải tạo</li>
                                    <li>Công trình cần nâng tầng, mở rộng</li>
                                    <li>Cải tạo từng khu vực: bếp, WC, phòng ngủ</li>
                                    <li>Nâng cấp hệ thống điện, nước, chống thấm</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='process' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23process)'/><rect x='50' y='60' width='300' height='180' fill='rgba(255,255,255,0.95)' rx='12'/><circle cx='120' cy='120' r='25' fill='%23667eea'/><circle cx='200' cy='120' r='25' fill='%23667eea'/><circle cx='280' cy='120' r='25' fill='%23667eea'/><text x='120' y='127' text-anchor='middle' font-size='16' fill='white' font-weight='bold'>1</text><text x='200' y='127' text-anchor='middle' font-size='16' fill='white' font-weight='bold'>2</text><text x='280' y='127' text-anchor='middle' font-size='16' fill='white' font-weight='bold'>3</text><line x1='145' y1='120' x2='175' y2='120' stroke='%23667eea' stroke-width='3'/><line x1='225' y1='120' x2='255' y2='120' stroke='%23667eea' stroke-width='3'/><text x='120' y='165' text-anchor='middle' font-size='10' fill='%23333'>Khảo sát</text><text x='200' y='165' text-anchor='middle' font-size='10' fill='%23333'>Thiết kế</text><text x='280' y='165' text-anchor='middle' font-size='10' fill='%23333'>Thi công</text><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Quy trình chuẩn</text></svg>"
                                    alt="Quy trình sửa chữa cải tạo"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>9 Bước Quy Trình Sửa Chữa Cải Tạo Chi Tiết</h2>
                            <p>Từng bước được mô tả cụ thể với thời gian và yêu cầu kỹ thuật</p>
                        </div>

                        <div className="process-timeline">
                            {detailedProcess.map((step, index) => (
                                <div key={step.step} className="process-item">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-content">
                                        <div className="process-header">
                                            <div className="process-icon">
                                                <i className={`fas ${step.icon}`}></i>
                                            </div>
                                            <div className="process-title">
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                                <div className="step-meta">
                                                    <span className="step-duration">
                                                        <i className="far fa-clock"></i> {step.duration}
                                                    </span>
                                                    <span className={`step-importance importance-${step.importance.toLowerCase().replace(/\s+/g, '-')}`}>
                                                        <i className="fas fa-star"></i> {step.importance}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="process-details">
                                            <ul>
                                                {step.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Safety Notes Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lưu Ý Về Kết Cấu & An Toàn</h2>
                            <p>Những điểm quan trọng cần tuân thủ để đảm bảo an toàn công trình</p>
                        </div>

                        <div className="benefits-grid">
                            {safetyNotes.map((note, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className={`fas ${note.icon}`}></i>
                                    </div>
                                    <h3>{note.title}</h3>
                                    <p>{note.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Errors Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Lỗi Thường Gặp & Biện Pháp Khắc Phục</h2>
                            <p>Học từ kinh nghiệm để tránh những sai lầm tốn kém</p>
                        </div>

                        <div className="benefits-grid">
                            {commonErrors.map((error, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#f59e0b'}}>
                                        <i className="fas fa-exclamation-circle"></i>
                                    </div>
                                    <h3>{error.error}</h3>
                                    <div style={{textAlign: 'left', fontSize: '14px', lineHeight: '1.5'}}>
                                        <div className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {error.cause}
                                        </div>
                                        <div className="issue-solution">
                                            <strong>Hậu quả:</strong> {error.consequence}
                                        </div>
                                        <div className="issue-prevention">
                                            <strong>Giải pháp:</strong>
                                            <ul style={{marginTop: '5px', paddingLeft: '15px'}}>
                                                {error.solution.map((sol, idx) => (
                                                    <li key={idx}>{sol}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Checklist Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>✅ Checklist Nghiệm Thu Cải Tạo - Sửa Chữa</h2>
                            <p>Danh sách kiểm tra chi tiết để đảm bảo chất lượng từng hạng mục</p>
                        </div>

                        <div style={{maxWidth: '900px', margin: '0 auto'}}>
                            {checklistSections.map((section) => (
                                <div key={section.id} className="faq-item" style={{
                                    marginBottom: '20px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'white'
                                }}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleChecklist(section.id)}
                                        style={{
                                            width: '100%',
                                            padding: '20px',
                                            textAlign: 'left',
                                            background: activeChecklist === section.id ? '#f8fafc' : 'white',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            fontWeight: '700',
                                            color: '#1a202c',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span>{section.title}</span>
                                        <i className={`fas fa-chevron-${activeChecklist === section.id ? 'up' : 'down'}`}></i>
                                    </button>
                                    {activeChecklist === section.id && (
                                        <div className="checklist-content" style={{
                                            padding: '0 20px 20px',
                                            background: '#f8fafc'
                                        }}>
                                            {section.items.map((item, itemIndex) => (
                                                <div key={itemIndex} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '12px',
                                                    marginBottom: '12px',
                                                    padding: '8px',
                                                    background: 'white',
                                                    borderRadius: '8px'
                                                }}>
                                                    <div style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        border: '2px solid #10b981',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        marginTop: '2px'
                                                    }}>
                                                        <i className="fas fa-check" style={{color: '#10b981', fontSize: '12px'}}></i>
                                                    </div>
                                                    <span style={{
                                                        color: '#4a5568',
                                                        lineHeight: '1.5',
                                                        fontSize: '15px'
                                                    }}>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="additional-info-section">
                    <div className="container">
                        <div className="section-header" style={{color: 'white', marginBottom: '48px'}}>
                            <h2>Lợi Ích Khi Tuân Thủ Quy Trình Chuẩn</h2>
                            <p>Những giá trị thiết thực mà quy trình mang lại</p>
                        </div>

                        <div className="additional-content">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3>Đảm bảo an toàn tuyệt đối</h3>
                                <p>
                                    Kiểm tra kỹ lưỡng kết cấu, tránh rủi ro đục phá nhầm tường chịu lực,
                                    đảm bảo an toàn cho người và công trình.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <h3>Kiểm soát chi phí hiệu quả</h3>
                                <p>
                                    Dự toán chi tiết, khảo sát kỹ lưỡng giúp hạn chế phát sinh,
                                    tiết kiệm 15-30% chi phí so với thi công không có quy trình.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h3>Tiến độ đúng cam kết</h3>
                                <p>
                                    Lập kế hoạch chi tiết từng giai đoạn, chuẩn bị đầy đủ vật tư,
                                    nhân lực giúp đảm bảo tiến độ theo đúng hợp đồng.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <h3>Chất lượng bền vững</h3>
                                <p>
                                    Tuân thủ quy trình kỹ thuật, nghiệm thu từng hạng mục,
                                    đảm bảo chất lượng công trình bền đẹp theo thời gian.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Câu Hỏi Thường Gặp</h2>
                            <p>Giải đáp những thắc mắc về quy trình sửa chữa cải tạo</p>
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
                <CTAContent />
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default ThiCongSuaChuaCaiTaoNhaOPage;