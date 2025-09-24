// src/pages/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';

const CaiTaoMatTienNgoaiThatPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Why renovate facade and exterior
    const renovationReasons = [
        {
            title: "Mặt tiền là 'bộ mặt' của ngôi nhà",
            description: "Ảnh hưởng trực tiếp đến ấn tượng đầu tiên và giá trị bất động sản",
            icon: "fa-home",
            color: "#667eea"
        },
        {
            title: "Ngoại thất chịu tác động thời tiết",
            description: "Sân vườn, cổng, ban công, sơn ngoài dễ xuống cấp do mưa nắng",
            icon: "fa-cloud-rain",
            color: "#06b6d4"
        },
        {
            title: "Các vấn đề thường gặp",
            description: "Sơn bong tróc, gạch ốp nứt, cổng rỉ sét, ban công mất an toàn",
            icon: "fa-exclamation-triangle",
            color: "#ef4444"
        },
        {
            title: "Nâng cao giá trị tài sản",
            description: "Mặt tiền đẹp tăng giá trị bán/cho thuê và tạo ấn tượng tốt",
            icon: "fa-chart-line",
            color: "#10b981"
        }
    ];

    // Renovation process
    const renovationProcess = [
        {
            step: 1,
            title: "Khảo sát hiện trạng",
            description: "Đánh giá tình trạng mặt tiền và ngoại thất",
            details: [
                "Kiểm tra lớp sơn, vật liệu ốp lát",
                "Đánh giá kết cấu ban công, mái hiên",
                "Kiểm tra tình trạng cổng, hàng rào",
                "Phân tích sân vườn, hệ thống thoát nước"
            ],
            duration: "1-2 ngày",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Lên phương án thiết kế",
            description: "Định hình phong cách và vật liệu",
            details: [
                "Định hình phong cách (hiện đại, tân cổ điển, tối giản)",
                "Lựa chọn màu sắc và vật liệu phù hợp",
                "Thiết kế cảnh quan sân vườn",
                "Phối cảnh 3D để khách hàng dễ hình dung"
            ],
            duration: "3-5 ngày",
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Thi công sửa chữa kết cấu",
            description: "Gia cố và sửa chữa các hư hỏng",
            details: [
                "Gia cố ban công, thay lan can mới",
                "Sửa chữa, thay mới mái hiên",
                "Xử lý chống thấm tường ngoài",
                "Sửa chữa các vết nứt, lún sụt"
            ],
            duration: "5-10 ngày",
            icon: "fa-tools"
        },
        {
            step: 4,
            title: "Hoàn thiện thẩm mỹ",
            description: "Thi công lớp hoàn thiện bề mặt",
            details: [
                "Sơn chống thấm, chống UV",
                "Ốp gạch đá trang trí",
                "Lắp đặt đèn ngoại thất",
                "Hoàn thiện chi tiết trang trí"
            ],
            duration: "7-14 ngày",
            icon: "fa-paint-brush"
        },
        {
            step: 5,
            title: "Cải tạo sân vườn & cổng",
            description: "Hoàn thiện không gian xung quanh",
            details: [
                "Trồng cây, thiết kế tiểu cảnh",
                "Lát đá sân, làm lối đi",
                "Thay cổng & hàng rào mới",
                "Lắp đặt hệ thống tưới, chiếu sáng"
            ],
            duration: "5-12 ngày",
            icon: "fa-tree"
        },
        {
            step: 6,
            title: "Nghiệm thu & bàn giao",
            description: "Kiểm tra và bàn giao hoàn thiện",
            details: [
                "Kiểm tra sơn, độ bền vật liệu",
                "Test hệ thống thoát nước",
                "Kiểm tra an toàn lan can, cổng",
                "Bàn giao hồ sơ bảo hành"
            ],
            duration: "1 ngày",
            icon: "fa-clipboard-check"
        }
    ];

    // Common mistakes
    const commonMistakes = [
        {
            title: "Sơn ngoại thất nhanh phai màu, bong tróc",
            cause: "Chọn sơn kém chất lượng, không chống UV",
            consequence: "Phải sơn lại sau vài tháng, tốn chi phí",
            solution: "Chọn sơn chuyên dụng chống tia UV, thi công đủ lớp lót-phủ",
            icon: "fa-paint-roller"
        },
        {
            title: "Tường ngoài thấm dột",
            cause: "Thi công sai quy trình, thiếu chống thấm",
            consequence: "Thấm nước vào trong nhà, hư hại nội thất",
            solution: "Xử lý vết nứt, quét lớp chống thấm trước khi sơn",
            icon: "fa-tint"
        },
        {
            title: "Ban công nứt, lan can rỉ sét",
            cause: "Không gia cố kết cấu, vật liệu kém chất lượng",
            consequence: "Nguy hiểm an toàn, mất thẩm mỹ",
            solution: "Gia cố kết cấu, thay lan can inox/kính cường lực",
            icon: "fa-exclamation-triangle"
        },
        {
            title: "Sân vườn thoát nước kém",
            cause: "Không tạo độ dốc, hệ thống thoát nước kém",
            consequence: "Ngập úng, cây chết, gạch lát bong tróc",
            solution: "Lát sân có độ dốc, bố trí hệ thống thoát nước hợp lý",
            icon: "fa-water"
        },
        {
            title: "Trang trí ngoại thất rườm rà",
            cause: "Không có thiết kế tổng thể",
            consequence: "Mất thẩm mỹ, không hài hòa",
            solution: "Ưu tiên phong cách tối giản, đồng bộ màu sắc",
            icon: "fa-palette"
        }
    ];

    // Customer pain points
    const painPoints = [
        {
            title: "Ngôi nhà xuống cấp, kém thẩm mỹ",
            description: "Mất giá trị khi bán/cho thuê, xấu hổ với hàng xóm",
            solution: "Cải tạo toàn diện, nâng cấp hiện đại",
            icon: "fa-frown"
        },
        {
            title: "Chi phí bảo trì lặt vặt phát sinh liên tục",
            description: "Sơn lại, sửa chữa nhỏ nhặt tốn kém",
            solution: "Sử dụng vật liệu bền, ít bảo dưỡng",
            icon: "fa-money-bill-wave"
        },
        {
            title: "Mặt tiền lỗi thời",
            description: "Không hợp với phong cách sống hiện đại",
            solution: "Thiết kế theo xu hướng mới, hiện đại",
            icon: "fa-clock"
        },
        {
            title: "Ngại đầu tư lớn",
            description: "Lo sợ phát sinh ngoài dự toán",
            solution: "Dự toán minh bạch, thi công từng giai đoạn",
            icon: "fa-dollar-sign"
        }
    ];

    // Optimal solutions
    const optimalSolutions = [
        {
            title: "Vật liệu bền, ít bảo dưỡng",
            description: "Đá ốp, sơn chống thấm, kính cường lực giảm chi phí bảo trì",
            icon: "fa-shield-alt",
            color: "#10b981"
        },
        {
            title: "Thiết kế thống nhất",
            description: "Mặt tiền hài hòa với nội thất và cảnh quan xung quanh",
            icon: "fa-sync-alt",
            color: "#667eea"
        },
        {
            title: "Ứng dụng cây xanh",
            description: "Tường đứng, mái che giảm nhiệt và tăng thẩm mỹ",
            icon: "fa-leaf",
            color: "#22c55e"
        },
        {
            title: "Thi công từng giai đoạn",
            description: "Kiểm soát chi phí, có thể dừng khi cần thiết",
            icon: "fa-layer-group",
            color: "#f59e0b"
        }
    ];

    // Exterior styles
    const exteriorStyles = [
        {
            name: "Hiện đại tối giản",
            description: "Đường nét gọn gàng, màu sắc trung tính",
            features: ["Màu trắng, xám", "Vật liệu kính, thép", "Ánh sáng LED"],
            color: "#667eea"
        },
        {
            name: "Tân cổ điển",
            description: "Kết hợp nét cổ điển và hiện đại",
            features: ["Cột trụ, phào chỉ", "Màu kem, nâu", "Đá tự nhiên"],
            color: "#d97706"
        },
        {
            name: "Nhiệt đới",
            description: "Phù hợp khí hậu Việt Nam",
            features: ["Mái ngói, gỗ tự nhiên", "Cây xanh nhiều", "Thoáng mát"],
            color: "#059669"
        },
        {
            name: "Công nghiệp",
            description: "Phong cách mạnh mẽ, cá tính",
            features: ["Gạch thô, kim loại", "Màu đen, nâu", "Đèn chiếu sáng"],
            color: "#374151"
        }
    ];

    // Quality checklist
    const qualityChecklist = [
        {
            category: "Sơn và bề mặt",
            items: [
                "Sơn đều màu, không loang, không bong tróc",
                "Bề mặt nhẵn mịn, không có vết xước",
                "Màu sắc đúng theo thiết kế"
            ]
        },
        {
            category: "Chống thấm",
            items: [
                "Không có thấm dột, rạn nứt tường ngoài",
                "Các mối nối được xử lý kín đáo",
                "Hệ thống thoát nước hoạt động tốt"
            ]
        },
        {
            category: "An toàn kết cấu",
            items: [
                "Lan can ban công chắc chắn, an toàn",
                "Mái hiên không bị võng, nứt",
                "Cổng và hàng rào vững chắc"
            ]
        },
        {
            category: "Tiện ích và thẩm mỹ",
            items: [
                "Hệ thống đèn ngoại thất hoạt động ổn định",
                "Sân vườn thoát nước tốt, không đọng nước",
                "Cảnh quan hài hòa, thẩm mỹ"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Cải tạo mặt tiền có cần xin phép không?",
            answer: "Có, nếu thay đổi kết cấu hoặc hình thức kiến trúc chính. Chỉ sơn, thay gạch thì không cần."
        },
        {
            id: 2,
            question: "Sơn ngoại thất nên chọn loại nào?",
            answer: "Nên dùng sơn chống thấm, chống tia UV, thương hiệu uy tín như Dulux, Jotun, Kova."
        },
        {
            id: 3,
            question: "Thời gian cải tạo mặt tiền & ngoại thất bao lâu?",
            answer: "Từ 2-6 tuần tùy quy mô và hạng mục cải tạo."
        },
        {
            id: 4,
            question: "Chi phí cải tạo mặt tiền & ngoại thất khoảng bao nhiều?",
            answer: "Dao động từ 100-500 triệu, tùy phong cách, vật liệu, diện tích."
        },
        {
            id: 5,
            question: "Làm sao để mặt tiền bền đẹp lâu dài?",
            answer: "Chọn vật liệu chất lượng, thi công đúng quy trình, bảo dưỡng định kỳ."
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
                            <h1>🏛️ Cải Tạo Mặt Tiền & Ngoại Thất</h1>
                            <p className="hero-subtitle">
                                Nâng Tầm Thẩm Mỹ Và Giá Trị Ngôi Nhà
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">6</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">2-6</span>
                                    <span className="stat-label">Tuần hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">200%</span>
                                    <span className="stat-label">Tăng giá trị</span>
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
                                <h2>Vì sao cần cải tạo mặt tiền & ngoại thất?</h2>
                                <p>
                                    <strong>Mặt tiền</strong> là "bộ mặt" của ngôi nhà, ảnh hưởng trực tiếp đến
                                    ấn tượng đầu tiên và giá trị bất động sản. Một mặt tiền đẹp không chỉ tạo
                                    niềm tự hào cho gia chủ mà còn <strong>tăng giá trị tài sản</strong> đáng kể.
                                </p>
                                <p>
                                    <strong>Ngoại thất</strong> (sân vườn, cổng, ban công, sơn ngoài) chịu tác động
                                    trực tiếp của thời tiết nên dễ xuống cấp. Việc cải tạo đúng thời điểm sẽ giúp
                                    <strong>bảo vệ công trình và nâng cao thẩm mỹ</strong>.
                                </p>
                                <h3>Lý do cải tạo thường gặp:</h3>
                                <ul className="role-list">
                                    <li>Sơn bong tróc, mờ màu do tác động thời tiết</li>
                                    <li>Gạch ốp tường rạn nứt, bong tróc</li>
                                    <li>Cổng sắt gỉ sét, lan can ban công mất an toàn</li>
                                    <li>Sân vườn thiếu thẩm mỹ, thoát nước kém</li>
                                    <li>Muốn nâng cấp theo phong cách hiện đại</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='facade' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f59e0b'/><stop offset='100%' style='stop-color:%23d97706'/></linearGradient></defs><rect width='400' height='300' fill='url(%23facade)'/><rect x='80' y='100' width='240' height='140' fill='rgba(255,255,255,0.95)' rx='8'/><polygon points='80,100 200,60 320,100' fill='rgba(217,119,6,0.8)'/><rect x='120' y='160' width='30' height='50' fill='%23f59e0b' rx='4'/><rect x='180' y='150' width='40' height='25' fill='%23d97706' rx='4'/><rect x='250' y='160' width='30' height='50' fill='%23f59e0b' rx='4'/><circle cx='200' cy='50' r='12' fill='%23fbbf24'/><rect x='100' y='220' width='200' height='8' fill='%2322c55e'/><circle cx='120' cy='240' r='6' fill='%2322c55e'/><circle cx='160' cy='245' r='8' fill='%2315803d'/><circle cx='200' cy='240' r='6' fill='%2322c55e'/><circle cx='240' cy='245' r='8' fill='%2315803d'/><circle cx='280' cy='240' r='6' fill='%2322c55e'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Mặt tiền & ngoại thất</text></svg>"
                                    alt="Cải tạo mặt tiền và ngoại thất"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasons Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Tại Sao Cần Cải Tạo Mặt Tiền & Ngoại Thất</h2>
                            <p>Những lý do quan trọng để nâng cấp diện mạo ngôi nhà</p>
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
                            <h2>Quy Trình Cải Tạo Mặt Tiền & Ngoại Thất</h2>
                            <p>6 bước thực hiện chuyên nghiệp để có diện mạo hoàn hảo</p>
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

                {/* Exterior Styles Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Phong Cách Ngoại Thất Phổ Biến</h2>
                            <p>Lựa chọn phong cách phù hợp với sở thích và không gian</p>
                        </div>

                        <div className="benefits-grid">
                            {exteriorStyles.map((style, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: style.color}}>
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <h3>{style.name}</h3>
                                    <p style={{marginBottom: '12px'}}>{style.description}</p>
                                    <div style={{textAlign: 'left'}}>
                                        <h4 style={{fontSize: '14px', marginBottom: '8px', color: '#1a202c'}}>
                                            <i className="fas fa-star" style={{color: '#fbbf24', marginRight: '6px'}}></i>
                                            Đặc điểm nổi bật:
                                        </h4>
                                        <ul style={{listStyle: 'none', padding: 0, fontSize: '13px'}}>
                                            {style.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} style={{
                                                    marginBottom: '4px',
                                                    paddingLeft: '16px',
                                                    position: 'relative'
                                                }}>
                                                    <i className="fas fa-check" style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: '2px',
                                                        color: '#10b981',
                                                        fontSize: '10px'
                                                    }}></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
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
                            <p>Tránh những sai lầm phổ biến trong cải tạo mặt tiền và ngoại thất</p>
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
                            <h2>Giải Pháp Tối Ưu</h2>
                            <p>Những lựa chọn thông minh cho mặt tiền và ngoại thất bền đẹp</p>
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
                            <h2>Checklist Nghiệm Thu Mặt Tiền & Ngoại Thất</h2>
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
                            <p>Giải đáp những thắc mắc phổ biến về cải tạo mặt tiền và ngoại thất</p>
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
                            <h2>Nâng Tầm Diện Mạo Ngôi Nhà</h2>
                            <p>
                                <strong>Cải tạo mặt tiền & ngoại thất</strong> không chỉ giúp ngôi nhà
                                <strong> bền đẹp hơn trước tác động của thời tiết</strong>, mà còn nâng cao
                                giá trị và tạo phong cách riêng cho gia chủ.
                            </p>
                            <p>
                                Với quy trình chuẩn kỹ thuật, vật liệu chất lượng và đội ngũ thi công chuyên nghiệp,
                                chúng tôi mang đến giải pháp <strong>an toàn - thẩm mỹ - tiết kiệm chi phí</strong>.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn thiết kế: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-paint-brush"></i>
                                    Xem mẫu mặt tiền
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

export default CaiTaoMatTienNgoaiThatPage;
