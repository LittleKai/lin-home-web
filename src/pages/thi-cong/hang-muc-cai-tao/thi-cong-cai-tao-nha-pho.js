// src/pages/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';

const ThiCongCaiTaoNhaPhoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Townhouse characteristics and renovation needs
    const townhouseCharacteristics = [
        {
            title: "Đặc thù nhà phố",
            description: "Nằm ở khu đô thị đông đúc, diện tích đất hạn chế, mật độ xây dựng cao",
            icon: "fa-city",
            color: "#667eea"
        },
        {
            title: "Vấn đề thường gặp",
            description: "Công năng không phù hợp, ánh sáng thông gió kém, hệ thống điện nước xuống cấp",
            icon: "fa-exclamation-triangle",
            color: "#ef4444"
        },
        {
            title: "Nhu cầu cải tạo",
            description: "Mở rộng phòng khách, thêm phòng ngủ, cải tạo bếp-WC, nâng cấp mặt tiền",
            icon: "fa-home",
            color: "#10b981"
        },
        {
            title: "Mục tiêu cải tạo",
            description: "Tối ưu không gian, cải thiện thông gió, nâng cấp thẩm mỹ và tiện nghi",
            icon: "fa-bullseye",
            color: "#f59e0b"
        }
    ];

    // Renovation process for townhouse
    const renovationProcess = [
        {
            step: 1,
            title: "Khảo sát hiện trạng",
            description: "Đánh giá toàn diện tình trạng ngôi nhà phố",
            details: [
                "Đo đạc diện tích, kiểm tra nền móng",
                "Kiểm tra kết cấu dầm/cột hiện tại",
                "Đánh giá hệ thống điện-nước",
                "Phân tích ánh sáng và thông gió"
            ],
            duration: "2-3 ngày",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế phương án cải tạo",
            description: "Lập bản vẽ tối ưu công năng và thẩm mỹ",
            details: [
                "Thiết kế bố trí mặt bằng hợp lý",
                "Giải pháp cải thiện ánh sáng, thông gió",
                "Lựa chọn vật liệu phù hợp không gian nhỏ",
                "Phối cảnh 3D để khách hàng dễ hình dung"
            ],
            duration: "5-7 ngày",
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Xin phép xây dựng",
            description: "Thủ tục pháp lý cho các thay đổi kết cấu/mặt tiền",
            details: [
                "Xin phép nếu cải tạo thay đổi kết cấu",
                "Hồ sơ thay đổi mặt tiền, nâng tầng",
                "Đảm bảo tuân thủ quy hoạch đô thị",
                "Tránh rủi ro pháp lý"
            ],
            duration: "15-30 ngày",
            icon: "fa-file-contract"
        },
        {
            step: 4,
            title: "Thi công cải tạo",
            description: "Triển khai theo từng hạng mục từ thô đến hoàn thiện",
            details: [
                "Tháo dỡ, xây mới theo thiết kế",
                "Đi lại hệ thống điện nước",
                "Cải thiện thông gió, lấy sáng",
                "Hoàn thiện nội thất theo phong cách hiện đại"
            ],
            duration: "30-90 ngày",
            icon: "fa-hard-hat"
        },
        {
            step: 5,
            title: "Nghiệm thu & bàn giao",
            description: "Kiểm tra chất lượng và bàn giao công trình",
            details: [
                "Kiểm tra kết cấu, chống thấm",
                "Test hệ thống điện nước",
                "Nghiệm thu hoàn thiện, thẩm mỹ",
                "Bàn giao hồ sơ bảo hành"
            ],
            duration: "2-3 ngày",
            icon: "fa-clipboard-check"
        }
    ];

    // Common mistakes in townhouse renovation
    const commonMistakes = [
        {
            title: "Sai công năng khi bố trí lại mặt bằng",
            cause: "Không có thiết kế chi tiết, bản vẽ 3D",
            consequence: "Không gian chật chội, khó sử dụng",
            solution: "Có thiết kế chi tiết, bản vẽ 3D trước khi thi công",
            icon: "fa-map"
        },
        {
            title: "Ánh sáng & thông gió kém",
            cause: "Không tính toán giải pháp lấy sáng, thông gió",
            consequence: "Nhà bí bách, ảnh hưởng sức khỏe",
            solution: "Bổ sung giếng trời, cửa sổ, vách kính lấy sáng",
            icon: "fa-lightbulb"
        },
        {
            title: "Hệ thống điện - nước cũ không thay mới",
            cause: "Muốn tiết kiệm chi phí, giữ lại hệ thống cũ",
            consequence: "Nguy cơ rò rỉ, chập cháy, không an toàn",
            solution: "Thay toàn bộ đường ống, dây điện âm tường",
            icon: "fa-bolt"
        },
        {
            title: "Hoàn thiện ẩu",
            cause: "Chạy tiến độ, không nghiệm thu từng lớp",
            consequence: "Sơn loang, gạch bong, trần nứt",
            solution: "Nghiệm thu từng hạng mục, đúng quy trình",
            icon: "fa-paint-brush"
        }
    ];

    // Customer pain points
    const painPoints = [
        {
            title: "Lo sợ kết cấu yếu, nguy cơ nứt/sập",
            description: "Khi thay đổi không gian, lo ngại an toàn",
            solution: "Khảo sát kỹ thuật, có kỹ sư kết cấu tư vấn",
            icon: "fa-exclamation-triangle"
        },
        {
            title: "Ngân sách phát sinh vượt kiểm soát",
            description: "Do khảo sát và dự toán ban đầu không kỹ",
            solution: "Dự toán chi tiết, hợp đồng minh bạch",
            icon: "fa-money-bill-wave"
        },
        {
            title: "Thi công chậm tiến độ",
            description: "Ảnh hưởng đến sinh hoạt gia đình",
            solution: "Lập timeline rõ ràng, giám sát tiến độ",
            icon: "fa-clock"
        },
        {
            title: "Thẩm mỹ không như mong muốn",
            description: "Chỉnh sửa mà không có thiết kế tổng thể",
            solution: "Thiết kế tổng thể, có bản vẽ 3D",
            icon: "fa-eye"
        }
    ];

    // Optimal solutions for townhouse renovation
    const optimalSolutions = [
        {
            title: "Thuê đơn vị có kỹ sư kết cấu",
            description: "Đảm bảo an toàn khi thay đổi không gian",
            icon: "fa-user-tie",
            color: "#667eea"
        },
        {
            title: "Bản vẽ thiết kế & dự toán chi tiết",
            description: "Có thiết kế tổng thể trước khi thi công",
            icon: "fa-drafting-compass",
            color: "#10b981"
        },
        {
            title: "Chọn vật liệu phù hợp",
            description: "Sàn gỗ công nghiệp, cửa nhôm kính, sơn chống thấm",
            icon: "fa-cubes",
            color: "#f59e0b"
        },
        {
            title: "Hợp đồng rõ ràng",
            description: "Về tiến độ, bảo hành và chi phí phát sinh",
            icon: "fa-file-contract",
            color: "#8b5cf6"
        }
    ];

    // Quality checklist for townhouse renovation
    const qualityChecklist = [
        {
            category: "An toàn kết cấu",
            items: [
                "Không xuất hiện vết nứt trên dầm, cột, tường",
                "Móng và nền không lún sụt",
                "Cầu thang, lan can chắc chắn"
            ]
        },
        {
            category: "Chống thấm",
            items: [
                "Thoát nước tốt, không thấm dột sau mưa/ngâm thử",
                "Xử lý kín các góc tường, mối nối",
                "Mái, ban công không ứ đọng nước"
            ]
        },
        {
            category: "Hệ thống M&E",
            items: [
                "Hệ thống điện nước hoạt động ổn định, an toàn",
                "Ánh sáng và thông gió được cải thiện",
                "Không có rò rỉ điện, nước"
            ]
        },
        {
            category: "Hoàn thiện",
            items: [
                "Sàn, trần, tường hoàn thiện đúng kỹ thuật, thẩm mỹ",
                "Sơn đều màu, không bong tróc",
                "Nội thất vận hành trơn tru"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Cải tạo nhà phố có cần xin phép xây dựng không?",
            answer: "Nếu chỉ thay đổi nội thất, sơn sửa thì không cần. Nhưng nếu thay đổi kết cấu, mở ban công, nâng tầng thì bắt buộc phải xin phép."
        },
        {
            id: 2,
            question: "Cải tạo nhà phố mất bao lâu?",
            answer: "Trung bình từ 30-90 ngày, tùy quy mô và mức độ cải tạo."
        },
        {
            id: 3,
            question: "Cách hạn chế phát sinh chi phí khi cải tạo?",
            answer: "Lập dự toán chi tiết từng hạng mục, ký hợp đồng rõ ràng, có quỹ dự phòng 10-15%."
        },
        {
            id: 4,
            question: "Có nên giữ lại hệ thống điện nước cũ?",
            answer: "Không nên. Hệ thống cũ thường đã xuống cấp, gây nguy cơ cháy nổ, thấm dột."
        },
        {
            id: 5,
            question: "Chi phí cải tạo nhà phố khoảng bao nhiều?",
            answer: "Tùy quy mô: cải tạo nhỏ 200-500 triệu, cải tạo lớn 800tr-2 tỷ."
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
                            <h1>🏘️ Thi Công Cải Tạo Nhà Phố</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Tối Ưu Không Gian Sống Hiện Đại
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">30-90</span>
                                    <span className="stat-label">Ngày hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Tối ưu không gian</span>
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
                                <h2>Đặc thù nhà phố và nhu cầu cải tạo</h2>
                                <p>
                                    <strong>Nhà phố</strong> thường nằm ở khu đô thị đông đúc, diện tích đất hạn chế,
                                    mật độ xây dựng cao. Sau một thời gian sử dụng, nhiều vấn đề nảy sinh cần được
                                    cải tạo để phù hợp với nhu cầu sinh hoạt hiện đại.
                                </p>
                                <p>
                                    Với <strong>không gian hạn chế và đặc thù riêng</strong>, việc cải tạo nhà phố
                                    cần có giải pháp thông minh để tối ưu hóa từng mét vuông, cải thiện ánh sáng
                                    và thông gió, đồng thời nâng cao giá trị thẩm mỹ.
                                </p>
                                <h3>Nhu cầu cải tạo phổ biến:</h3>
                                <ul className="role-list">
                                    <li>Mở rộng phòng khách, tối ưu không gian sinh hoạt chung</li>
                                    <li>Thêm phòng ngủ hoặc phòng làm việc</li>
                                    <li>Cải tạo bếp - WC hiện đại, tiện nghi</li>
                                    <li>Nâng cấp mặt tiền, tăng tính thẩm mỹ</li>
                                    <li>Cải thiện thông gió và ánh sáng tự nhiên</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='townhouse' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='400' height='300' fill='url(%23townhouse)'/><rect x='80' y='120' width='60' height='120' fill='rgba(255,255,255,0.9)' rx='4'/><rect x='160' y='100' width='60' height='140' fill='rgba(255,255,255,0.95)' rx='4'/><rect x='240' y='110' width='60' height='130' fill='rgba(255,255,255,0.9)' rx='4'/><polygon points='80,120 110,90 140,120' fill='rgba(16,185,129,0.8)'/><polygon points='160,100 190,70 220,100' fill='rgba(5,150,105,0.8)'/><polygon points='240,110 270,80 300,110' fill='rgba(16,185,129,0.8)'/><rect x='90' y='180' width='20' height='30' fill='%23667eea'/><rect x='170' y='170' width='20' height='40' fill='%23667eea'/><rect x='250' y='175' width='20' height='35' fill='%23667eea'/><rect x='100' y='140' width='20' height='15' fill='%2310b981'/><rect x='180' y='130' width='20' height='15' fill='%2310b981'/><rect x='260' y='135' width='20' height='15' fill='%2310b981'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Cải tạo nhà phố</text></svg>"
                                    alt="Thi công cải tạo nhà phố"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Characteristics Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Đặc Thù Và Thách Thức Khi Cải Tạo Nhà Phố</h2>
                            <p>Hiểu rõ đặc điểm để có giải pháp phù hợp</p>
                        </div>

                        <div className="benefits-grid">
                            {townhouseCharacteristics.map((item, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: item.color}}>
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Cải Tạo Nhà Phố Chuẩn Kỹ Thuật</h2>
                            <p>5 bước thực hiện chuyên nghiệp cho ngôi nhà phố hoàn hảo</p>
                        </div>

                        <div className="process-timeline">
                            {renovationProcess.map((step) => (
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
                                                <span className="process-duration">
                                                    <i className="far fa-clock"></i> {step.duration}
                                                </span>
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
                            <h2>Các Lỗi Thường Gặp & Biện Pháp Khắc Phục</h2>
                            <p>Tránh những sai lầm phổ biến trong cải tạo nhà phố</p>
                        </div>

                        <div className="benefits-grid">
                            {commonMistakes.map((mistake, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className={`fas ${mistake.icon}`}></i>
                                    </div>
                                    <h3>{mistake.title}</h3>
                                    <div style={{textAlign: 'left', fontSize: '14px', lineHeight: '1.4'}}>
                                        <p className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {mistake.cause}
                                        </p>
                                        <p className="issue-solution">
                                            <strong>Hậu quả:</strong> {mistake.consequence}
                                        </p>
                                        <p className="issue-prevention">
                                            <strong>Giải pháp:</strong> {mistake.solution}
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
                            <h2>Nỗi Đau Của Khách Hàng Khi Cải Tạo Nhà Phố</h2>
                            <p>Những lo lắng thường gặp và giải pháp của chúng tôi</p>
                        </div>

                        <div className="benefits-grid">
                            {painPoints.map((point, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#dc2626'}}>
                                        <i className={`fas ${point.icon}`}></i>
                                    </div>
                                    <h3 style={{color: '#dc2626'}}>{point.title}</h3>
                                    <p style={{marginBottom: '12px'}}>
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

                {/* Optimal Solutions Section */}
                <section className="benefits-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Giải Pháp Tối Ưu Khi Cải Tạo Nhà Phố</h2>
                            <p>Những nguyên tắc quan trọng để có công trình hoàn hảo</p>
                        </div>

                        <div className="benefits-grid">
                            {optimalSolutions.map((solution, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: solution.color}}>
                                        <i className={`fas ${solution.icon}`}></i>
                                    </div>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Checklist Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Checklist Nghiệm Thu Cải Tạo Nhà Phố</h2>
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
                            <p>Giải đáp những thắc mắc phổ biến về cải tạo nhà phố</p>
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
                            <h2>Cải Tạo Nhà Phố Chuyên Nghiệp</h2>
                            <p>
                                <strong>Cải tạo nhà phố</strong> là giải pháp lý tưởng để tối ưu không gian sống,
                                nâng cao chất lượng cuộc sống và tăng giá trị bất động sản. Tuy nhiên, đây là
                                hạng mục có tính kỹ thuật cao, cần <strong>đội ngũ chuyên môn và kinh nghiệm thực tế</strong>.
                            </p>
                            <p>
                                Với đội ngũ kỹ sư kết cấu, kiến trúc sư và thợ lành nghề, chúng tôi cam kết
                                mang đến cho bạn <strong>giải pháp cải tạo nhà phố an toàn - đẹp - tiết kiệm</strong>,
                                cùng chính sách bảo hành rõ ràng.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn cải tạo: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-home"></i>
                                    Xem dự án mẫu
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

export default ThiCongCaiTaoNhaPhoPage;