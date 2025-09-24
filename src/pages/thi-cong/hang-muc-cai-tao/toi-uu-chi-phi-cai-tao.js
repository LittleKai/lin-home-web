// src/pages/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';

const ToiUuChiPhiCaiTaoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeTab, setActiveTab] = useState('causes');

    // Why renovation costs often exceed budget
    const costInflationCauses = [
        {
            title: "Khảo sát không kỹ",
            description: "Bỏ sót hạng mục ẩn như đường điện, nước, chống thấm",
            icon: "fa-search",
            impact: "Cao"
        },
        {
            title: "Thiếu bản vẽ thiết kế",
            description: "Thi công thay đổi liên tục, gây lãng phí vật tư",
            icon: "fa-drafting-compass",
            impact: "Cao"
        },
        {
            title: "Chọn vật liệu không phù hợp",
            description: "Phải thay mới sớm, tốn gấp đôi chi phí",
            icon: "fa-cubes",
            impact: "Trung bình"
        },
        {
            title: "Hợp đồng mập mờ",
            description: "Phát sinh chi phí ngoài dự toán không kiểm soát",
            icon: "fa-file-contract",
            impact: "Cao"
        },
        {
            title: "Không có quỹ dự phòng",
            description: "Dễ bị động về tài chính khi có phát sinh",
            icon: "fa-piggy-bank",
            impact: "Trung bình"
        }
    ];

    // Cost optimization principles
    const optimizationPrinciples = [
        {
            title: "Lập kế hoạch rõ ràng",
            description: "Xác định nhu cầu ưu tiên thay vì làm đồng loạt",
            details: [
                "Phân loại theo độ ưu tiên: chống thấm → kết cấu → hoàn thiện",
                "Tham khảo báo giá nhiều nhà thầu trước khi quyết định",
                "Lập timeline chi tiết cho từng giai đoạn"
            ],
            icon: "fa-clipboard-list",
            color: "#667eea"
        },
        {
            title: "Có bản vẽ thiết kế & dự toán chi tiết",
            description: "Tránh thay đổi khi thi công, kiểm soát chi phí",
            details: [
                "Bản vẽ giúp tránh thay đổi khi thi công",
                "Dự toán tách rõ: vật tư - nhân công - phát sinh",
                "Có phối cảnh 3D để khách hàng dễ quyết định"
            ],
            icon: "fa-drafting-compass",
            color: "#10b981"
        },
        {
            title: "Chọn vật liệu thông minh",
            description: "Cân bằng giữa chất lượng và giá thành",
            details: [
                "Sàn: gỗ công nghiệp chịu ẩm thay vì gỗ tự nhiên",
                "Cửa: composite hoặc nhôm kính thay cho gỗ tự nhiên",
                "Trần: thạch cao khung xương, bền và tiết kiệm"
            ],
            icon: "fa-balance-scale",
            color: "#f59e0b"
        },
        {
            title: "Tối ưu diện tích",
            description: "Hạn chế đập phá, tận dụng kết cấu có sẵn",
            details: [
                "Dùng vách ngăn nhẹ, kính, rèm để mở rộng không gian",
                "Hạn chế tác động đến kết cấu chịu lực",
                "Sử dụng nội thất đa năng, tiết kiệm diện tích"
            ],
            icon: "fa-compress-arrows-alt",
            color: "#8b5cf6"
        },
        {
            title: "Chọn đơn vị thi công uy tín",
            description: "Tránh phát sinh do thi công kém chất lượng",
            details: [
                "Có hợp đồng minh bạch và cam kết bảo hành",
                "Làm việc theo quy trình, hạn chế phát sinh",
                "Đội ngũ thợ lành nghề, giám sát chuyên môn"
            ],
            icon: "fa-handshake",
            color: "#06b6d4"
        }
    ];

    // Common mistakes that increase costs
    const costlyMistakes = [
        {
            title: "Không kiểm tra hạ tầng điện-nước",
            description: "Sau hoàn thiện mới phát hiện rò rỉ, phải đập phá sửa lại",
            cost: "+30-50%",
            solution: "Test hệ thống trước khi hoàn thiện"
        },
        {
            title: "Chọn nhà thầu giá rẻ",
            description: "Thi công ẩu, phải làm lại từ đầu",
            cost: "+100%",
            solution: "Chọn theo uy tín và năng lực, không chỉ giá"
        },
        {
            title: "Thay đổi vật liệu & thiết kế liên tục",
            description: "Mua thừa vật tư, mất nhân công",
            cost: "+20-40%",
            solution: "Quyết định rõ ràng ngay từ đầu"
        },
        {
            title: "Không tính chi phí nhân công tăng thêm",
            description: "Khi kéo dài tiến độ, chi phí tăng đáng kể",
            cost: "+15-30%",
            solution: "Lập timeline chi tiết, giám sát tiến độ"
        }
    ];

    // Smart material choices
    const smartMaterials = [
        {
            category: "Sàn",
            expensive: "Gỗ tự nhiên",
            smart: "Gỗ công nghiệp chịu nước",
            saving: "50-70%",
            benefit: "Chống ẩm tốt hơn, lắp đặt nhanh"
        },
        {
            category: "Cửa",
            expensive: "Gỗ tự nhiên",
            smart: "Composite",
            saving: "40-60%",
            benefit: "Không mối mọt, chịu nước tốt"
        },
        {
            category: "Trần",
            expensive: "Trần đúc bê tông",
            smart: "Thạch cao khung xương",
            saving: "30-50%",
            benefit: "Nhẹ, cách âm, dễ sửa chữa"
        },
        {
            category: "Sơn",
            expensive: "Sơn nhập khẩu",
            smart: "Sơn chống thấm trong nước chất lượng",
            saving: "20-40%",
            benefit: "Phù hợp khí hậu, dễ mua bổ sung"
        }
    ];

    // Cost control checklist
    const costControlChecklist = [
        {
            phase: "Chuẩn bị",
            items: [
                "Có bản vẽ & dự toán trước khi thi công",
                "Dự phòng ít nhất 10-15% chi phí cho phát sinh",
                "So sánh 3-5 báo giá từ các đơn vị khác nhau"
            ]
        },
        {
            phase: "Thi công",
            items: [
                "Kiểm tra kỹ điện-nước-chống thấm trước hoàn thiện",
                "Chọn vật liệu phù hợp ngân sách & công năng",
                "Giám sát chặt chẽ, nghiệm thu từng giai đoạn"
            ]
        },
        {
            phase: "Hợp đồng",
            items: [
                "Hợp đồng rõ ràng, có điều khoản về xử lý phát sinh",
                "Quy định rõ trách nhiệm khi có sai sót",
                "Thanh toán theo tiến độ, giữ lại 10% cuối"
            ]
        }
    ];

    // Budget planning template
    const budgetTemplate = [
        {
            category: "Chi phí thiết kế",
            percentage: "5-8%",
            description: "Bản vẽ kiến trúc, kết cấu, M&E"
        },
        {
            category: "Vật liệu xây dựng",
            percentage: "40-50%",
            description: "Gạch, xi măng, thép, gỗ, sơn..."
        },
        {
            category: "Nhân công thi công",
            percentage: "25-35%",
            description: "Thợ xây, thợ điện, thợ nước, giám sát"
        },
        {
            category: "Thiết bị & nội thất",
            percentage: "15-25%",
            description: "Cửa, trần, thiết bị vệ sinh, điện"
        },
        {
            category: "Chi phí phát sinh",
            percentage: "10-15%",
            description: "Dự phòng cho các tình huống không lường trước"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Làm sao để tránh phát sinh khi sửa chữa?",
            answer: "Cần có thiết kế chi tiết, khảo sát kỹ, hợp đồng rõ ràng và giám sát chặt chẽ từng giai đoạn thi công."
        },
        {
            id: 2,
            question: "Nên chọn nhà thầu trọn gói hay thuê riêng từng đội thợ?",
            answer: "Nên chọn trọn gói để đồng bộ quy trình, tránh đùn đẩy trách nhiệm, kiểm soát chi phí tốt hơn."
        },
        {
            id: 3,
            question: "Vật liệu nào vừa bền vừa tiết kiệm chi phí?",
            answer: "Nên ưu tiên sàn gỗ công nghiệp chịu nước, cửa composite, sơn chống thấm chất lượng thay vì loại rẻ kém bền."
        },
        {
            id: 4,
            question: "Có nên vay ngân hàng để cải tạo nhà không?",
            answer: "Nếu chi phí lớn, có thể vay nhưng cần tính toán khả năng trả nợ và lập kế hoạch chi tiết để không bị đội vốn."
        },
        {
            id: 5,
            question: "Tỷ lệ dự phòng hợp lý là bao nhiều?",
            answer: "Nên dự phòng 10-15% tổng chi phí để xử lý các phát sinh không lường trước được."
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
                            <h1>💰 Tối Ưu Chi Phí Cải Tạo</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Tiết Kiệm, Hiệu Quả Cao
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">30-50%</span>
                                    <span className="stat-label">Tiết kiệm chi phí</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">10-15%</span>
                                    <span className="stat-label">Dự phòng hợp lý</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Nguyên tắc vàng</span>
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
                                <h2>Vì sao chi phí sửa chữa - cải tạo thường bị đội lên?</h2>
                                <p>
                                    Nhiều gia chủ gặp tình huống <strong>"chi phí cải tạo vượt dự toán 30-50%"</strong>
                                    do không chuẩn bị kỹ càng và thiếu kinh nghiệm trong việc quản lý dự án.
                                </p>
                                <p>
                                    <strong>Tối ưu chi phí cải tạo</strong> không có nghĩa là chọn rẻ nhất, mà là
                                    <strong>chọn đúng nhu cầu - đúng vật liệu - đúng đơn vị thi công</strong>.
                                    Khi có kế hoạch rõ ràng và đơn vị uy tín, bạn sẽ kiểm soát được ngân sách
                                    và yên tâm về chất lượng.
                                </p>
                                <h3>Nguyên tắc tối ưu chi phí:</h3>
                                <ul className="role-list">
                                    <li>Lập kế hoạch chi tiết, có thứ tự ưu tiên</li>
                                    <li>Chọn vật liệu phù hợp, không nhất thiết đắt nhất</li>
                                    <li>Tận dụng kết cấu cũ, hạn chế đập phá</li>
                                    <li>Có dự phòng 10-15% cho phát sinh</li>
                                    <li>Chọn đơn vị thi công uy tín, tránh rủi ro</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='cost-opt' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='400' height='300' fill='url(%23cost-opt)'/><circle cx='200' cy='150' r='80' fill='rgba(255,255,255,0.9)'/><text x='200' y='130' text-anchor='middle' font-size='24' font-weight='bold' fill='%2310b981'>30-50%</text><text x='200' y='150' text-anchor='middle' font-size='12' fill='%23059669'>Tiết kiệm</text><text x='200' y='170' text-anchor='middle' font-size='12' fill='%23059669'>chi phí</text><rect x='50' y='80' width='60' height='40' fill='rgba(255,255,255,0.8)' rx='8'/><rect x='290' y='100' width='60' height='40' fill='rgba(255,255,255,0.8)' rx='8'/><rect x='70' y='200' width='60' height='40' fill='rgba(255,255,255,0.8)' rx='8'/><rect x='270' y='180' width='60' height='40' fill='rgba(255,255,255,0.8)' rx='8'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Tối ưu chi phí cải tạo</text></svg>"
                                    alt="Tối ưu chi phí cải tạo"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost Inflation Causes Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Nguyên Nhân Chi Phí Bị Đội Lên</h2>
                            <p>Những lý do phổ biến khiến dự toán vượt tầm kiểm soát</p>
                        </div>

                        <div className="benefits-grid">
                            {costInflationCauses.map((cause, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{
                                        background: cause.impact === 'Cao' ? '#ef4444' : '#f59e0b'
                                    }}>
                                        <i className={`fas ${cause.icon}`}></i>
                                    </div>
                                    <h3>{cause.title}</h3>
                                    <p>{cause.description}</p>
                                    <div style={{
                                        marginTop: '12px',
                                        padding: '6px 12px',
                                        borderRadius: '16px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        background: cause.impact === 'Cao' ? '#fee2e2' : '#fef3c7',
                                        color: cause.impact === 'Cao' ? '#dc2626' : '#d97706'
                                    }}>
                                        Tác động: {cause.impact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Optimization Principles Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>5 Nguyên Tắc Tối Ưu Chi Phí Cải Tạo</h2>
                            <p>Những nguyên tắc vàng để kiểm soát ngân sách hiệu quả</p>
                        </div>

                        <div className="process-timeline">
                            {optimizationPrinciples.map((principle, index) => (
                                <div key={index} className="process-item">
                                    <div className="process-number">
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="process-content">
                                        <div className="process-header">
                                            <div className="process-icon" style={{background: principle.color}}>
                                                <i className={`fas ${principle.icon}`}></i>
                                            </div>
                                            <div className="process-title">
                                                <h3>{principle.title}</h3>
                                                <p>{principle.description}</p>
                                            </div>
                                        </div>
                                        <div className="process-details">
                                            <ul>
                                                {principle.details.map((detail, detailIndex) => (
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

                {/* Costly Mistakes Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Những Sai Lầm Khiến Chi Phí Tăng Cao</h2>
                            <p>Tránh những lỗi phổ biến gây lãng phí ngân sách</p>
                        </div>

                        <div className="benefits-grid">
                            {costlyMistakes.map((mistake, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <h3>{mistake.title}</h3>
                                    <p style={{marginBottom: '12px'}}>{mistake.description}</p>
                                    <div style={{
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        background: '#fee2e2',
                                        color: '#dc2626',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '8px'
                                    }}>
                                        Chi phí tăng: {mistake.cost}
                                    </div>
                                    <div style={{
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        background: '#d1fae5',
                                        color: '#065f46',
                                        fontSize: '14px'
                                    }}>
                                        <strong>Giải pháp:</strong> {mistake.solution}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Smart Materials Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Chọn Vật Liệu Thông Minh</h2>
                            <p>So sánh lựa chọn vật liệu tiết kiệm mà vẫn đảm bảo chất lượng</p>
                        </div>

                        <div className="benefits-grid">
                            {smartMaterials.map((material, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#10b981'}}>
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <h3>{material.category}</h3>
                                    <div style={{textAlign: 'left', fontSize: '14px'}}>
                                        <p style={{color: '#dc2626', marginBottom: '8px'}}>
                                            <strong>Đắt tiền:</strong> {material.expensive}
                                        </p>
                                        <p style={{color: '#059669', marginBottom: '8px'}}>
                                            <strong>Thông minh:</strong> {material.smart}
                                        </p>
                                        <div style={{
                                            padding: '6px 10px',
                                            background: '#d1fae5',
                                            borderRadius: '6px',
                                            marginBottom: '8px',
                                            color: '#065f46',
                                            fontWeight: '600'
                                        }}>
                                            Tiết kiệm: {material.saving}
                                        </div>
                                        <p style={{color: '#4a5568', fontSize: '13px', fontStyle: 'italic'}}>
                                            {material.benefit}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Budget Template Section */}
                <section className="benefits-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Mẫu Phân Bổ Ngân Sách Cải Tạo</h2>
                            <p>Hướng dẫn phân bổ ngân sách hợp lý cho dự án cải tạo</p>
                        </div>

                        <div className="benefits-grid">
                            {budgetTemplate.map((item, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#667eea'}}>
                                        <span style={{fontSize: '18px', fontWeight: 'bold', color: 'white'}}>
                                            {item.percentage}
                                        </span>
                                    </div>
                                    <h3>{item.category}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cost Control Checklist Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Checklist Kiểm Soát Chi Phí</h2>
                            <p>Danh sách kiểm tra để tránh phát sinh ngoài ý muốn</p>
                        </div>

                        <div className="benefits-grid">
                            {costControlChecklist.map((phase, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#f59e0b'}}>
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <h3>{phase.phase}</h3>
                                    <div style={{textAlign: 'left'}}>
                                        <ul style={{listStyle: 'none', padding: 0, fontSize: '14px'}}>
                                            {phase.items.map((item, itemIndex) => (
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
                            <p>Giải đáp những thắc mắc về tối ưu chi phí cải tạo</p>
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
                            <h2>Cải Tạo Thông Minh, Tiết Kiệm Hiệu Quả</h2>
                            <p>
                                <strong>Tối ưu chi phí cải tạo</strong> không có nghĩa là chọn rẻ nhất, mà là
                                <strong>đầu tư đúng cách để có được giá trị tốt nhất</strong>. Khi có bản kế hoạch
                                rõ ràng, dự toán chi tiết và đơn vị thi công uy tín, bạn sẽ kiểm soát được ngân sách
                                và yên tâm về chất lượng công trình.
                            </p>
                            <p>
                                Hãy liên hệ với chúng tôi để được tư vấn <strong>giải pháp cải tạo tiết kiệm -
                                bền đẹp - an toàn</strong> cho ngôi nhà của bạn.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn tiết kiệm: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Lập dự toán miễn phí
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

export default ToiUuChiPhiCaiTaoPage;
