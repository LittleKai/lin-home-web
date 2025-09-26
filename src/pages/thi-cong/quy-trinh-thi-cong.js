// src/pages/thi-cong/quy-trinh-thi-cong.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const QuyTrinhThiCongPage = () => {
    const [activeStep, setActiveStep] = useState(1);

    // Construction process steps data
    const processSteps = [
        {
            step: 1,
            title: "Tư vấn và tiếp nhận nhu cầu khách hàng",
            description: "Buổi tư vấn trực tiếp hoặc online để hiểu nhu cầu xây dựng",
            details: [
                "Lắng nghe nhu cầu xây dựng, cải tạo hoặc hoàn thiện nhà",
                "Tư vấn giải pháp phù hợp với ngân sách, diện tích và phong cách",
                "Đề xuất sơ bộ về vật liệu, thời gian thi công và quy mô nhân lực"
            ],
            icon: "fa-comments",
            duration: "1-3 ngày"
        },
        {
            step: 2,
            title: "Báo giá thi công và lập dự toán chi tiết",
            description: "Gửi báo giá thi công trọn gói với dự toán minh bạch",
            details: [
                "Chi phí vật liệu xây dựng, hoàn thiện",
                "Nhân công theo từng hạng mục",
                "Máy móc, thiết bị thi công",
                "Dự toán tiến độ và chi phí phát sinh (nếu có)"
            ],
            icon: "fa-calculator",
            duration: "2-5 ngày"
        },
        {
            step: 3,
            title: "Khảo sát hiện trạng và ký hợp đồng",
            description: "Đội ngũ kỹ sư đến công trình khảo sát và đo đạc thực tế",
            details: [
                "Kiểm tra mặt bằng, hiện trạng móng, tường, hệ thống điện - nước",
                "Ghi nhận những yếu tố ảnh hưởng đến quá trình thi công",
                "Đưa ra đề xuất tối ưu để hạn chế rủi ro",
                "Ký hợp đồng thi công trọn gói, quy định rõ quyền lợi và nghĩa vụ"
            ],
            icon: "fa-ruler-combined",
            duration: "1-2 ngày"
        },
        {
            step: 3.5,
            title: "Hỗ trợ thủ tục xin phép xây dựng",
            description: "Hỗ trợ hoàn tất giấy phép xây dựng theo quy định pháp luật",
            details: [
                "Tư vấn, chuẩn bị hồ sơ cần thiết",
                "Hỗ trợ nộp và theo dõi tiến trình xin phép tại cơ quan quản lý",
                "Đảm bảo công trình được cấp phép đúng loại hình, đúng quy chuẩn"
            ],
            icon: "fa-file-contract",
            duration: "15-30 ngày"
        },
        {
            step: 4,
            title: "Chuẩn bị nguyên vật liệu và nhân lực",
            description: "Chuẩn bị đầy đủ vật liệu, thiết bị và nhân lực thi công",
            details: [
                "Lựa chọn vật liệu xây dựng theo hợp đồng (gạch, xi măng, thép, gỗ, sơn...)",
                "Chuẩn bị máy móc, thiết bị cần thiết",
                "Bố trí đội ngũ nhân công, kỹ sư giám sát"
            ],
            icon: "fa-boxes",
            duration: "3-7 ngày"
        },
        {
            step: 5,
            title: "Thi công phần thô",
            description: "Thực hiện các hạng mục kết cấu chính của công trình",
            details: [
                "Đào móng, xử lý nền đất",
                "Thi công hệ thống cột, dầm, sàn, tường",
                "Lắp đặt sơ bộ hệ thống điện nước âm tường"
            ],
            icon: "fa-hard-hat",
            duration: "30-90 ngày"
        },
        {
            step: 6,
            title: "Thi công hoàn thiện",
            description: "Hoàn thiện các chi tiết và hệ thống theo thiết kế",
            details: [
                "Trát, ốp lát, sơn bả",
                "Lắp đặt cửa, trần, sàn",
                "Hoàn thiện hệ thống điện nước, chiếu sáng",
                "Thi công nội thất cơ bản theo thiết kế"
            ],
            icon: "fa-paint-brush",
            duration: "20-45 ngày"
        },
        {
            step: 7,
            title: "Nghiệm thu và bàn giao công trình",
            description: "Kiểm tra toàn bộ chất lượng và bàn giao công trình",
            details: [
                "Độ bền và chất lượng kết cấu",
                "Sự đồng bộ trong hoàn thiện nội thất",
                "Kiểm tra hệ thống điện, nước, chống thấm",
                "Nghiệm thu và bàn giao chính thức"
            ],
            icon: "fa-clipboard-check",
            duration: "3-5 ngày"
        },
        {
            step: 8,
            title: "Bảo hành và hỗ trợ sau thi công",
            description: "Chế độ bảo hành và hỗ trợ khách hàng sau bàn giao",
            details: [
                "Bảo hành phần kết cấu và hoàn thiện theo thời gian cam kết",
                "Hỗ trợ sửa chữa, bảo trì khi có sự cố",
                "Tư vấn miễn phí trong quá trình sử dụng"
            ],
            icon: "fa-tools",
            duration: "5-10 năm"
        }
    ];

    const benefits = [
        {
            title: "Tiết kiệm chi phí",
            description: "Dự toán rõ ràng, tránh phát sinh ngoài ý muốn",
            icon: "fa-dollar-sign"
        },
        {
            title: "Tiết kiệm thời gian",
            description: "Chỉ làm việc với một đơn vị từ A đến Z",
            icon: "fa-clock"
        },
        {
            title: "Đảm bảo chất lượng",
            description: "Đội ngũ kỹ sư giám sát toàn bộ quá trình",
            icon: "fa-shield-alt"
        },
        {
            title: "Đồng bộ thiết kế - thi công",
            description: "Ý tưởng ban đầu được thực hiện chính xác",
            icon: "fa-sync-alt"
        },
        {
            title: "Chính sách bảo hành minh bạch",
            description: "Gia tăng sự an tâm cho khách hàng",
            icon: "fa-handshake"
        }
    ];

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    const activeStepData = processSteps.find(step => step.step === activeStep);

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏗️ Quy Trình Thi Công Trọn Gói</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Hoàn Hảo Cho Ngôi Nhà Mơ Ước
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">9</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Minh bạch</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Năm kinh nghiệm</span>
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
                                <h2>Tại sao nên chọn thi công trọn gói?</h2>
                                <p>
                                    Khi xây dựng hoặc cải tạo nhà ở, nhiều gia chủ băn khoăn: nên thuê đơn vị thi công
                                    riêng lẻ từng hạng mục hay chọn dịch vụ <strong>thi công trọn gói</strong>?
                                </p>
                                <p>
                                    Thực tế, giải pháp trọn gói giúp tiết kiệm chi phí, rút ngắn thời gian và đảm bảo
                                    chất lượng đồng bộ từ thiết kế đến hoàn thiện. Quy trình thi công trọn gói diễn ra
                                    theo 9 bước tiêu chuẩn, đảm bảo chuyên nghiệp và minh bạch.
                                </p>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='construction' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='400' height='300' fill='url(%23construction)'/><rect x='80' y='120' width='240' height='120' fill='rgba(255,255,255,0.9)' rx='12'/><rect x='100' y='140' width='60' height='80' fill='%2310b981' rx='8'/><rect x='170' y='130' width='60' height='90' fill='%2310b981' rx='8'/><rect x='240' y='135' width='60' height='85' fill='%2310b981' rx='8'/><polygon points='80,120 200,80 320,120' fill='rgba(5,150,105,0.8)'/><circle cx='350' cy='70' r='20' fill='rgba(255,215,0,0.8)'/><rect x='120' y='160' width='8' height='40' fill='%23047857'/><rect x='190' y='150' width='8' height='50' fill='%23047857'/><rect x='260' y='155' width='8' height='45' fill='%23047857'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Quy trình thi công</text></svg>"
                                    alt="Quy trình thi công trọn gói"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>9 Bước Quy Trình Thi Công Trọn Gói</h2>
                            <p>Quy trình tiêu chuẩn được áp dụng cho mọi dự án từ nhỏ đến lớn</p>
                        </div>

                        {/* Process Timeline */}
                        <div className="process-timeline">
                            {processSteps.map((step, index) => (
                                <div
                                    key={step.step}
                                    className={`process-item ${activeStep === step.step ? 'active' : ''}`}
                                    onClick={() => handleStepClick(step.step)}
                                    style={{ cursor: 'pointer' }}
                                >
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
                                                {step.duration && (
                                                    <span className="process-duration">
                                                        <i className="far fa-clock"></i> {step.duration}
                                                    </span>
                                                )}
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

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lợi Ích Khi Chọn Dịch Vụ Thi Công Trọn Gói</h2>
                            <p>Những giá trị mà chúng tôi mang lại cho khách hàng</p>
                        </div>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">
                                        <i className={`fas ${benefit.icon}`}></i>
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Info Section */}
                <section className="additional-info-section">
                    <div className="container">
                        <div className="additional-content">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <h3>Chất lượng đảm bảo</h3>
                                <p>
                                    Với quy trình thi công chuyên nghiệp và đội ngũ kỹ sư giàu kinh nghiệm,
                                    chúng tôi cam kết mang đến chất lượng tốt nhất cho mọi công trình.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Tiến độ đúng hạn</h3>
                                <p>
                                    Lập kế hoạch chi tiết và quản lý tiến độ chặt chẽ, đảm bảo bàn giao
                                    công trình đúng thời gian cam kết.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h3>Hỗ trợ 24/7</h3>
                                <p>
                                    Đội ngũ tư vấn và hỗ trợ khách hàng 24/7, sẵn sàng giải đáp mọi thắc mắc
                                    trong quá trình thi công và sử dụng.
                                </p>
                            </div>
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

export default QuyTrinhThiCongPage;