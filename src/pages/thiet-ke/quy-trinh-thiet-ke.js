// src/pages/thiet-ke/quy-trinh-thiet-ke.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import './ThietKePage.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const QuyTrinhThietKePage = () => {
    // Process steps data
    const processSteps = [
        {
            step: 1,
            title: "Tư vấn nhu cầu và phong cách thiết kế sơ bộ",
            description: "Tư vấn trực tiếp hoặc online với kiến trúc sư nội thất",
            details: [
                "Lắng nghe mong muốn, sở thích và thói quen sinh hoạt của gia đình",
                "Tư vấn sơ bộ về phong cách phù hợp: hiện đại, tân cổ điển, tối giản, Scandinavian...",
                "Định hướng sơ bộ về ngân sách và vật liệu sử dụng"
            ],
            icon: "fa-comments"
        },
        {
            step: 2,
            title: "Báo giá chi phí thiết kế nội thất, kiến trúc",
            description: "Gửi báo giá chi phí thiết kế và kiến trúc chi tiết",
            details: [
                "Phí thiết kế bản vẽ 2D, 3D",
                "Phí triển khai hồ sơ kỹ thuật, kết cấu, điện nước",
                "Dự toán thi công sơ bộ"
            ],
            icon: "fa-calculator"
        },
        {
            step: 3,
            title: "Khảo sát, đo đạc hiện trạng công trình và ký hợp đồng",
            description: "Đội ngũ kỹ sư và kiến trúc sư đến công trình khảo sát",
            details: [
                "Đo đạc diện tích, kiểm tra hiện trạng tường, sàn, trần, hệ thống điện nước",
                "Ghi nhận các yếu tố ánh sáng, hướng nhà, vị trí phòng",
                "Đề xuất điều chỉnh nếu cần thiết",
                "Ký hợp đồng thiết kế đảm bảo quyền lợi và cam kết tiến độ"
            ],
            icon: "fa-ruler-combined"
        },
        {
            step: 4,
            title: "Lên ý tưởng bản vẽ 2D, 3D có yếu tố phong thủy",
            description: "Triển khai bản vẽ 2D bố trí mặt bằng và phối cảnh 3D chi tiết",
            details: [
                "Bản vẽ 2D bố trí mặt bằng chi tiết",
                "Bản vẽ phối cảnh 3D với màu sắc, chất liệu, ánh sáng và đồ nội thất",
                "Cân nhắc yếu tố phong thủy như hướng cửa, vị trí phòng ngủ, màu sắc hợp mệnh"
            ],
            icon: "fa-drafting-compass"
        },
        {
            step: 5,
            title: "Điều chỉnh và chốt phương án thiết kế",
            description: "Trình bày bản vẽ và điều chỉnh theo ý kiến khách hàng",
            details: [
                "Trình bày bản vẽ 2D, 3D cho khách hàng",
                "Đóng góp ý kiến chỉnh sửa qua nhóm làm việc online hoặc trực tiếp",
                "Điều chỉnh chi tiết theo mong muốn đến khi đạt phương án tối ưu",
                "Chốt phương án thiết kế cuối cùng"
            ],
            icon: "fa-check-circle"
        },
        {
            step: 6,
            title: "Triển khai hồ sơ kỹ thuật, kết cấu, điện nước, dự toán",
            description: "Hoàn thiện bộ hồ sơ kỹ thuật chi tiết",
            details: [
                "Bản vẽ kỹ thuật (mặt bằng, mặt cắt, mặt đứng)",
                "Bản vẽ kết cấu xây dựng",
                "Bản vẽ hệ thống điện, cấp thoát nước, chiếu sáng",
                "Chi tiết đồ nội thất, vật liệu, màu sắc",
                "Dự toán khối lượng và chi phí thi công"
            ],
            icon: "fa-file-alt"
        },
        {
            step: 7,
            title: "Kiểm tra và bàn giao hồ sơ",
            description: "Kiểm tra toàn bộ bản vẽ và bàn giao hồ sơ hoàn chỉnh",
            details: [
                "Kiểm tra toàn bộ bản vẽ đảm bảo không có sai sót",
                "Gửi hồ sơ cho khách hàng cả bản giấy và bản mềm",
                "Khách hàng xem lại, đặt câu hỏi và nhận giải đáp chi tiết",
                "Bàn giao rõ ràng giúp hạn chế rủi ro trong thi công"
            ],
            icon: "fa-handshake"
        },
        {
            step: 8,
            title: "Hỗ trợ giám sát và tư vấn online",
            description: "Hỗ trợ giám sát tác giả và tư vấn trong quá trình thi công",
            details: [
                "Hỗ trợ giám sát tác giả trong quá trình thi công",
                "Tư vấn online khi có thắc mắc",
                "Đảm bảo các hạng mục được thực hiện đúng bản vẽ thiết kế",
                "Kịp thời xử lý những tình huống phát sinh"
            ],
            icon: "fa-headset"
        }
    ];

    const benefits = [
        {
            title: "Tiết kiệm thời gian và chi phí",
            description: "Quy trình khoa học giúp tối ưu thời gian và chi phí",
            icon: "fa-clock"
        },
        {
            title: "Tư vấn chuyên nghiệp",
            description: "Được tư vấn bởi kiến trúc sư nội thất giàu kinh nghiệm",
            icon: "fa-user-tie"
        },
        {
            title: "Hồ sơ chi tiết đầy đủ",
            description: "Hồ sơ thiết kế chi tiết, đầy đủ kết cấu, điện nước, vật liệu",
            icon: "fa-folder-open"
        },
        {
            title: "Hỗ trợ phong thủy",
            description: "Mang lại không gian sống may mắn, thịnh vượng",
            icon: "fa-yin-yang"
        },
        {
            title: "Cam kết đồng hành",
            description: "Đồng hành cùng khách hàng từ ý tưởng đến thi công",
            icon: "fa-hands-helping"
        }
    ];

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Quy Trình Thiết Kế Nội Thất Trọn Gói</h1>
                            <p className="hero-subtitle">
                                Từ Ý Tưởng Đến Hồ Sơ Hoàn Thiện - 8 Bước Tiêu Chuẩn Chuyên Nghiệp
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">8</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Minh bạch</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">Hỗ trợ</span>
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
                                <h2>Tại sao cần quy trình thiết kế chuyên nghiệp?</h2>
                                <p>
                                    Trong thời đại ngày nay, thiết kế nội thất không chỉ đơn thuần là sắp xếp đồ đạc cho đẹp mắt
                                    mà còn thể hiện phong cách sống, cá tính và giá trị của gia chủ. Tuy nhiên, nhiều khách hàng
                                    vẫn băn khoăn không biết quy trình thiết kế nội thất chuyên nghiệp diễn ra như thế nào.
                                </p>
                                <p>
                                    Để giúp bạn hiểu rõ hơn, chúng tôi áp dụng <strong>quy trình thiết kế nội thất trọn gói</strong>
                                    gồm 8 bước tiêu chuẩn, phù hợp cho cả căn hộ, nhà phố, biệt thự hay văn phòng.
                                </p>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='process' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23process)'/><circle cx='100' cy='80' r='30' fill='rgba(255,255,255,0.9)'/><circle cx='200' cy='80' r='30' fill='rgba(255,255,255,0.9)'/><circle cx='300' cy='80' r='30' fill='rgba(255,255,255,0.9)'/><text x='100' y='85' text-anchor='middle' font-family='Arial' font-size='16' fill='%23667eea' font-weight='bold'>1</text><text x='200' y='85' text-anchor='middle' font-family='Arial' font-size='16' fill='%23667eea' font-weight='bold'>2</text><text x='300' y='85' text-anchor='middle' font-family='Arial' font-size='16' fill='%23667eea' font-weight='bold'>3</text><path d='M 130 80 L 170 80' stroke='rgba(255,255,255,0.8)' stroke-width='3' marker-end='url(%23arrow)'/><path d='M 230 80 L 270 80' stroke='rgba(255,255,255,0.8)' stroke-width='3'/><rect x='50' y='150' width='300' height='120' fill='rgba(255,255,255,0.9)' rx='12'/><text x='200' y='190' text-anchor='middle' font-family='Arial' font-size='14' fill='%23667eea' font-weight='bold'>Quy trình thiết kế chuyên nghiệp</text><text x='200' y='210' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666'>Từ ý tưởng đến hoàn thiện</text><text x='200' y='240' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666'>8 bước tiêu chuẩn quốc tế</text></svg>"
                                    alt="Quy trình thiết kế chuyên nghiệp"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>8 Bước Quy Trình Thiết Kế Chuyên Nghiệp</h2>
                            <p>Quy trình tiêu chuẩn được áp dụng cho mọi dự án từ nhỏ đến lớn</p>
                        </div>

                        <div className="process-timeline">
                            {processSteps.map((step, index) => (
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
                            <h2>Lợi Ích Khi Chọn Dịch Vụ Thiết Kế Trọn Gói</h2>
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

                {/* CTA Section */}
                <CTAContent />
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default QuyTrinhThietKePage;
