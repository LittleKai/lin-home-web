// src/pages/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const CaiTaoPhongNguPhongKhachPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Why renovate bedroom and living room
    const renovationReasons = [
        {
            title: "Phòng khách - Không gian trung tâm",
            description: "Thể hiện gu thẩm mỹ, nơi tiếp khách và sinh hoạt chung của gia đình",
            icon: "fa-home",
            color: "#667eea"
        },
        {
            title: "Phòng ngủ - Nơi nghỉ ngơi",
            description: "Tái tạo năng lượng, cần yên tĩnh, thoải mái và đảm bảo chất lượng giấc ngủ",
            icon: "fa-bed",
            color: "#10b981"
        },
        {
            title: "Không gian cũ kỹ, lỗi thời",
            description: "Bố trí không hợp lý, thiếu ánh sáng, nội thất xuống cấp",
            icon: "fa-exclamation-triangle",
            color: "#f59e0b"
        },
        {
            title: "Nâng cấp tiện nghi hiện đại",
            description: "Tối ưu không gian, áp dụng công nghệ thông minh",
            icon: "fa-magic",
            color: "#8b5cf6"
        }
    ];

    // Renovation process
    const renovationProcess = [
        {
            step: 1,
            title: "Khảo sát & đo đạc",
            description: "Đánh giá hiện trạng và nhu cầu sử dụng",
            details: [
                "Kiểm tra diện tích, kết cấu tường, sàn, trần",
                "Đánh giá hệ thống điện hiện tại",
                "Phân tích ánh sáng và thông gió",
                "Tìm hiểu nhu cầu và sở thích của gia chủ"
            ],
            duration: "1 ngày",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế cải tạo",
            description: "Lập phương án thiết kế tối ưu",
            details: [
                "Bố trí ánh sáng, thông gió hợp lý",
                "Chọn phong cách nội thất phù hợp",
                "Lên bản vẽ 3D để khách hàng dễ hình dung",
                "Tư vấn về màu sắc và vật liệu"
            ],
            duration: "3-5 ngày",
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Thi công hạ tầng",
            description: "Cải tạo kết cấu và hệ thống kỹ thuật",
            details: [
                "Điều chỉnh tường ngăn (nếu cần)",
                "Đi lại hệ thống điện - đèn",
                "Thi công trần thạch cao (nếu có)",
                "Xử lý chống thấm, cách âm"
            ],
            duration: "5-10 ngày",
            icon: "fa-tools"
        },
        {
            step: 4,
            title: "Hoàn thiện nội thất",
            description: "Thi công các hạng mục hoàn thiện",
            details: [
                "Sơn tường, trần theo màu thiết kế",
                "Lắp sàn gỗ/gạch cao cấp",
                "Lắp đặt rèm cửa, đèn trang trí",
                "Lắp đặt nội thất thông minh"
            ],
            duration: "7-14 ngày",
            icon: "fa-paint-brush"
        },
        {
            step: 5,
            title: "Bố trí trang trí",
            description: "Hoàn thiện không gian thẩm mỹ",
            details: [
                "Bố trí đèn chiếu sáng chuyên dụng",
                "Treo tranh ảnh, vật dụng trang trí",
                "Sắp xếp nội thất hợp lý",
                "Tạo điểm nhấn cho không gian"
            ],
            duration: "2-3 ngày",
            icon: "fa-palette"
        },
        {
            step: 6,
            title: "Nghiệm thu & bàn giao",
            description: "Kiểm tra và bàn giao hoàn thiện",
            details: [
                "Kiểm tra chất lượng ánh sáng, hệ thống điện",
                "Đo độ phẳng sàn/trần, kiểm tra sơn",
                "Test thiết bị, nội thất",
                "Bàn giao hồ sơ bảo hành"
            ],
            duration: "1 ngày",
            icon: "fa-clipboard-check"
        }
    ];

    // Common mistakes
    const commonMistakes = [
        {
            title: "Bố trí nội thất thiếu khoa học",
            cause: "Không có bản vẽ thiết kế trước",
            consequence: "Không gian chật chội, khó sử dụng",
            solution: "Cần bản vẽ thiết kế trước, chọn nội thất đa năng",
            icon: "fa-couch"
        },
        {
            title: "Thiếu ánh sáng & thông gió",
            cause: "Không tính toán hệ thống chiếu sáng",
            consequence: "Gây bí bách, ảnh hưởng sức khỏe",
            solution: "Tăng cửa sổ, dùng đèn LED điều chỉnh cường độ",
            icon: "fa-lightbulb"
        },
        {
            title: "Cách âm kém trong phòng ngủ",
            cause: "Không sử dụng vật liệu cách âm",
            consequence: "Ngủ không sâu giấc, ảnh hưởng sức khỏe",
            solution: "Dùng vật liệu cách âm: xốp PU, bông thủy tinh",
            icon: "fa-volume-mute"
        },
        {
            title: "Sàn & tường xuống cấp",
            cause: "Không xử lý chống thấm trước khi hoàn thiện",
            consequence: "Bong tróc, ẩm mốc, mất thẩm mỹ",
            solution: "Xử lý chống thấm, dùng sàn gỗ công nghiệp chịu ẩm",
            icon: "fa-home"
        },
        {
            title: "Thi công trần/sơn ẩu",
            cause: "Chạy tiến độ, không tuân thủ quy trình",
            consequence: "Trần nứt, sơn loang, mất thẩm mỹ",
            solution: "Dùng sơn chống kiềm, kiểm tra khung xương thạch cao",
            icon: "fa-paint-roller"
        }
    ];

    // Customer pain points
    const painPoints = [
        {
            title: "Phòng khách không ấn tượng",
            description: "Ngại tiếp khách, mất mặt với bạn bè",
            solution: "Thiết kế hiện đại, trang trí sang trọng",
            icon: "fa-frown"
        },
        {
            title: "Phòng ngủ chật, bí bách",
            description: "Ngủ không ngon, ảnh hưởng sức khỏe",
            solution: "Tối ưu bố trí, cải thiện thông gió",
            icon: "fa-bed"
        },
        {
            title: "Thi công ẩu, nhanh xuống cấp",
            description: "Tốn chi phí sửa lại nhiều lần",
            solution: "Quy trình chuẩn, vật liệu chất lượng",
            icon: "fa-tools"
        },
        {
            title: "Chi phí phát sinh ngoài dự toán",
            description: "Mất kiểm soát tài chính",
            solution: "Dự toán minh bạch, hợp đồng rõ ràng",
            icon: "fa-money-bill-wave"
        }
    ];

    // Optimal solutions
    const optimalSolutions = [
        {
            title: "Thiết kế tối giản hoặc hiện đại",
            description: "Tiết kiệm diện tích, tạo cảm giác rộng rãi",
            icon: "fa-compress-arrows-alt",
            color: "#667eea"
        },
        {
            title: "Vật liệu bền, thân thiện môi trường",
            description: "Đảm bảo sức khỏe và độ bền lâu dài",
            icon: "fa-leaf",
            color: "#10b981"
        },
        {
            title: "Công nghệ nhà thông minh",
            description: "Đèn, rèm, điều hòa điều khiển bằng smartphone",
            icon: "fa-mobile-alt",
            color: "#8b5cf6"
        },
        {
            title: "Yếu tố phong thủy",
            description: "Bố trí hợp phong thủy, mang lại may mắn",
            icon: "fa-yin-yang",
            color: "#f59e0b"
        }
    ];

    // Design styles
    const designStyles = [
        {
            name: "Hiện đại",
            description: "Đường nét gọn gàng, màu sắc trung tính",
            features: ["Nội thất đa năng", "Ánh sáng LED", "Màu trắng - xám"],
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'><rect width='200' height='120' fill='%23f8fafc'/><rect x='20' y='30' width='60' height='40' fill='%23667eea' rx='4'/><rect x='90' y='25' width='50' height='50' fill='%23e2e8f0' rx='4'/><rect x='150' y='35' width='30' height='30' fill='%23cbd5e0' rx='4'/></svg>"
        },
        {
            name: "Tân cổ điển",
            description: "Kết hợp cổ điển và hiện đại",
            features: ["Chất liệu gỗ", "Họa tiết tinh tế", "Màu ấm"],
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'><rect width='200' height='120' fill='%23fef3c7'/><rect x='20' y='30' width='60' height='40' fill='%23d97706' rx='8'/><rect x='90' y='25' width='50' height='50' fill='%23f59e0b' rx='8'/><circle cx='165' cy='50' r='15' fill='%23d4af37'/></svg>"
        },
        {
            name: "Tối giản",
            description: "Ít nhưng chất, tập trung công năng",
            features: ["Không gian mở", "Nội thất cần thiết", "Màu đơn sắc"],
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'><rect width='200' height='120' fill='%23ffffff'/><rect x='50' y='40' width='100' height='30' fill='%23374151' rx='2'/><line x1='30' y1='80' x2='170' y2='80' stroke='%23374151' stroke-width='2'/></svg>"
        },
        {
            name: "Scandinavian",
            description: "Phong cách Bắc Âu, ấm cúng",
            features: ["Gỗ tự nhiên", "Vải lanh cotton", "Ánh sáng tự nhiên"],
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'><rect width='200' height='120' fill='%23f9fafb'/><rect x='20' y='30' width='60' height='40' fill='%23fbbf24' rx='6'/><rect x='90' y='35' width='50' height='30' fill='%23f3f4f6' rx='4'/><circle cx='165' cy='50' r='12' fill='%23059669'/></svg>"
        }
    ];

    // Quality checklist
    const qualityChecklist = [
        {
            category: "Hệ thống điện & ánh sáng",
            items: [
                "Hệ thống điện, đèn, ổ cắm an toàn & bố trí hợp lý",
                "Ánh sáng đạt tiêu chuẩn sinh hoạt",
                "Công tắc điều chỉnh được cường độ sáng"
            ]
        },
        {
            category: "Sàn & tường",
            items: [
                "Sàn phẳng, không kêu bộp, vật liệu đúng cam kết",
                "Sơn tường đều màu, không bong tróc",
                "Trần thạch cao chắc chắn, không nứt"
            ]
        },
        {
            category: "Nội thất & tiện nghi",
            items: [
                "Nội thất vận hành trơn tru, an toàn",
                "Rèm cửa hoạt động êm ái",
                "Các thiết bị thông minh kết nối ổn định"
            ]
        },
        {
            category: "Thông gió & cách âm",
            items: [
                "Thông gió đạt tiêu chuẩn sinh hoạt",
                "Cách âm tốt, đặc biệt với phòng ngủ",
                "Không có tiếng ồn từ thiết bị"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Cải tạo phòng khách & phòng ngủ có cần phá dỡ nhiều không?",
            answer: "Thường chỉ cần thay đổi nội thất, sàn, trần, bố trí lại ánh sáng - hạn chế tác động kết cấu."
        },
        {
            id: 2,
            question: "Nên dùng sàn gỗ hay gạch cho phòng ngủ & phòng khách?",
            answer: "Phòng ngủ: nên dùng sàn gỗ để tạo cảm giác ấm cúng. Phòng khách: có thể kết hợp gạch vân đá hoặc gỗ."
        },
        {
            id: 3,
            question: "Bao lâu thì nên cải tạo lại các không gian này?",
            answer: "10-12 năm hoặc khi nội thất xuống cấp, không còn đáp ứng nhu cầu."
        },
        {
            id: 4,
            question: "Chi phí cải tạo dao động bao nhiều?",
            answer: "Từ 80-300 triệu, tùy diện tích, vật liệu & phong cách."
        },
        {
            id: 5,
            question: "Làm sao để phòng ngủ có giấc ngủ ngon?",
            answer: "Cần cách âm tốt, ánh sáng dịu, màu sắc ấm, nhiệt độ phù hợp và không khí trong lành."
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
                            <h1>🛏️ Cải Tạo Phòng Ngủ & Phòng Khách</h1>
                            <p className="hero-subtitle">
                                Tối Ưu Không Gian Sống, Nâng Tầm Tiện Nghi & Thẩm Mỹ
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">6</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">2-4</span>
                                    <span className="stat-label">Tuần hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">Năm bền đẹp</span>
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
                                <h2>Vì sao cần cải tạo phòng ngủ & phòng khách?</h2>
                                <p>
                                    <strong>Phòng khách</strong> là không gian trung tâm của ngôi nhà, nơi thể hiện
                                    gu thẩm mỹ của gia chủ và là nơi tiếp khách, sinh hoạt chung quan trọng nhất.
                                </p>
                                <p>
                                    <strong>Phòng ngủ</strong> là nơi nghỉ ngơi, tái tạo năng lượng sau một ngày
                                    làm việc mệt mỏi. Không gian này cần <strong>yên tĩnh, thoải mái và đảm bảo
                                    chất lượng giấc ngủ</strong> tốt nhất.
                                </p>
                                <h3>Nguyên nhân cần cải tạo:</h3>
                                <ul className="role-list">
                                    <li>Không gian cũ kỹ, bố trí không hợp lý</li>
                                    <li>Thiếu ánh sáng tự nhiên, thông gió kém</li>
                                    <li>Nội thất xuống cấp, không còn phù hợp</li>
                                    <li>Muốn nâng cấp tiện nghi hiện đại</li>
                                    <li>Tăng giá trị thẩm mỹ và bất động sản</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='room-reno' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%238b5cf6'/><stop offset='100%' style='stop-color:%23667eea'/></linearGradient></defs><rect width='400' height='300' fill='url(%23room-reno)'/><rect x='50' y='80' width='140' height='120' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='210' y='70' width='140' height='130' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='70' y='120' width='100' height='60' fill='%238b5cf6' rx='4'/><rect x='230' y='110' width='100' height='70' fill='%23667eea' rx='4'/><circle cx='90' cy='105' r='8' fill='%23fbbf24'/><circle cx='250' cy='95' r='8' fill='%23fbbf24'/><rect x='80' y='160' width='80' height='4' fill='%23e2e8f0'/><rect x='240' y='150' width='80' height='4' fill='%23e2e8f0'/><text x='120' y='60' text-anchor='middle' font-size='12' fill='white' font-weight='bold'>Phòng khách</text><text x='280' y='50' text-anchor='middle' font-size='12' fill='white' font-weight='bold'>Phòng ngủ</text><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Cải tạo không gian sống</text></svg>"
                                    alt="Cải tạo phòng ngủ và phòng khách"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasons Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lý Do Cần Cải Tạo Phòng Ngủ & Phòng Khách</h2>
                            <p>Tầm quan trọng của hai không gian chính trong ngôi nhà</p>
                        </div>

                        <div className="benefits-grid">
                            {renovationReasons.map((reason, index) => (
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
                            <h2>Quy Trình Cải Tạo Phòng Khách & Phòng Ngủ Chuẩn</h2>
                            <p>6 bước thực hiện chuyên nghiệp từ khảo sát đến bàn giao</p>
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

                {/* Design Styles Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Phong Cách Thiết Kế Phổ Biến</h2>
                            <p>Lựa chọn phong cách phù hợp với cá tính và sở thích</p>
                        </div>

                        <div className="benefits-grid">
                            {designStyles.map((style, index) => (
                                <div key={index} className="benefit-card">
                                    <div style={{
                                        width: '80px',
                                        height: '50px',
                                        margin: '0 auto 16px',
                                        borderRadius: '8px',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={style.image}
                                            alt={style.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h3>{style.name}</h3>
                                    <p style={{marginBottom: '12px'}}>{style.description}</p>
                                    <div className="tag-list">
                                        {style.features.map((feature, idx) => (
                                            <span key={idx} className="tag">{feature}</span>
                                        ))}
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
                            <p>Tránh những sai lầm phổ biến trong cải tạo phòng ngủ và phòng khách</p>
                        </div>

                        <div className="benefits-grid">
                            {commonMistakes.map((mistake, index) => (
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
                            <h2>Nỗi Đau Của Khách Hàng</h2>
                            <p>Những lo lắng phổ biến và giải pháp của chúng tôi</p>
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
                            <h2>Giải Pháp Tối Ưu</h2>
                            <p>Những lựa chọn thông minh cho không gian hoàn hảo</p>
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
                            <h2>Checklist Nghiệm Thu</h2>
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
                            <p>Giải đáp những thắc mắc phổ biến về cải tạo phòng ngủ và phòng khách</p>
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

export default CaiTaoPhongNguPhongKhachPage;