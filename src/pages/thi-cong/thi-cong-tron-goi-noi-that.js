// src/pages/thi-cong/thi-cong-tron-goi-noi-that.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';

const ThiCongTronGoiNoiThatPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Interior construction process steps
    const processSteps = [
        {
            step: 1,
            title: "Khảo sát & trao đổi nhu cầu",
            description: "Đo đạc, tìm hiểu phong cách mong muốn",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế nội thất",
            description: "Lên concept 3D, chọn vật liệu, phối màu",
            icon: "fa-palette"
        },
        {
            step: 3,
            title: "Báo giá chi tiết & ký hợp đồng",
            description: "Cam kết rõ ràng chi phí, tiến độ",
            icon: "fa-file-contract"
        },
        {
            step: 4,
            title: "Sản xuất nội thất tại xưởng",
            description: "Gia công theo bản vẽ, kiểm soát chất lượng",
            icon: "fa-industry"
        },
        {
            step: 5,
            title: "Thi công - lắp đặt",
            description: "Lắp đặt nội thất, hệ thống điện, ánh sáng, decor",
            icon: "fa-tools"
        },
        {
            step: 6,
            title: "Hoàn thiện & nghiệm thu",
            description: "Kiểm tra chi tiết từng hạng mục",
            icon: "fa-clipboard-check"
        },
        {
            step: 7,
            title: "Bàn giao & bảo hành",
            description: "Hỗ trợ bảo trì, sửa chữa khi có nhu cầu",
            icon: "fa-handshake"
        }
    ];

    // Benefits of turnkey interior construction
    const benefits = [
        {
            title: "Thẩm mỹ đồng bộ",
            description: "Thiết kế và thi công được triển khai liền mạch",
            icon: "fa-sync-alt"
        },
        {
            title: "Tiết kiệm thời gian",
            description: "Không phải tự tìm xưởng, nhà thầu lẻ",
            icon: "fa-clock"
        },
        {
            title: "Chi phí hợp lý",
            description: "Tận dụng sản xuất trực tiếp tại xưởng, tránh trung gian",
            icon: "fa-dollar-sign"
        },
        {
            title: "Chất lượng đảm bảo",
            description: "Vật liệu đúng chuẩn, tay nghề thợ cao",
            icon: "fa-shield-alt"
        },
        {
            title: "Bảo hành - bảo trì",
            description: "Hỗ trợ lâu dài sau khi bàn giao",
            icon: "fa-wrench"
        }
    ];

    // Cost factors for interior construction
    const costFactors = [
        {
            title: "Diện tích không gian",
            description: "Căn hộ, nhà phố, biệt thự có mức giá khác nhau",
            icon: "fa-expand-arrows-alt"
        },
        {
            title: "Phong cách nội thất",
            description: "Hiện đại, tối giản, luxury... có chi phí khác biệt",
            icon: "fa-palette"
        },
        {
            title: "Chất liệu sử dụng",
            description: "Gỗ tự nhiên, gỗ công nghiệp, kim loại, kính...",
            icon: "fa-cubes"
        },
        {
            title: "Mức độ chi tiết của đồ nội thất",
            description: "Thiết kế phức tạp yêu cầu tay nghề cao hơn",
            icon: "fa-cogs"
        },
        {
            title: "Hạng mục trang trí bổ sung",
            description: "Rèm, đèn, tranh, phụ kiện trang trí",
            icon: "fa-plus-circle"
        }
    ];

    // Company advantages
    const advantages = [
        {
            title: "Xưởng sản xuất riêng",
            description: "Chủ động chất lượng & giá thành",
            icon: "fa-industry"
        },
        {
            title: "Đội ngũ chuyên nghiệp",
            description: "KTS sáng tạo, thợ tay nghề cao",
            icon: "fa-users"
        },
        {
            title: "Kinh nghiệm thực tế",
            description: "Đã thi công hàng trăm dự án: căn hộ, biệt thự, showroom, văn phòng",
            icon: "fa-medal"
        },
        {
            title: "Quy trình chặt chẽ",
            description: "Minh bạch - đúng tiến độ",
            icon: "fa-chart-line"
        },
        {
            title: "Cam kết bảo hành",
            description: "Hỗ trợ khách hàng sau dự án",
            icon: "fa-shield-alt"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thi công trọn gói nội thất có cần thuê thiết kế riêng không?",
            answer: "Không cần, công ty sẽ thực hiện cả thiết kế & thi công, đảm bảo đồng bộ."
        },
        {
            id: 2,
            question: "Nội thất sản xuất trong nước có bền không?",
            answer: "Với vật liệu chuẩn & xưởng sản xuất chuyên nghiệp, tuổi thọ có thể 10-15 năm."
        },
        {
            id: 3,
            question: "Thời gian hoàn thiện một căn hộ chung cư là bao lâu?",
            answer: "Thông thường từ 30-45 ngày, tùy diện tích và mức độ chi tiết."
        },
        {
            id: 4,
            question: "Có thể thay đổi thiết kế trong quá trình thi công không?",
            answer: "Có thể điều chỉnh nhưng cần thông báo sớm để tránh ảnh hưởng đến tiến độ và chi phí."
        },
        {
            id: 5,
            question: "Quy trình bảo hành nội thất như thế nào?",
            answer: "Chúng tôi bảo hành 2-5 năm tùy hạng mục và hỗ trợ bảo trì định kỳ theo yêu cầu."
        }
    ];

    // Interior styles showcase
    const interiorStyles = [
        {
            name: "Hiện đại",
            description: "Tập trung vào tính thực dụng, đường nét gọn gàng",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23667eea'/><rect x='50' y='50' width='200' height='100' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='70' y='70' width='50' height='30' fill='%23667eea' rx='4'/><rect x='130' y='70' width='50' height='30' fill='%23667eea' rx='4'/><rect x='190' y='70' width='40' height='60' fill='%23764ba2' rx='4'/><text x='150' y='180' text-anchor='middle' font-size='12' fill='white'>Hiện đại</text></svg>"
        },
        {
            name: "Tân cổ điển",
            description: "Kết hợp đường nét cổ điển tinh tế với công năng hiện đại",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23d4af37'/><rect x='50' y='50' width='200' height='100' fill='rgba(255,248,220,0.9)' rx='8'/><ellipse cx='100' cy='100' rx='25' ry='15' fill='%23d4af37'/><ellipse cx='200' cy='100' rx='25' ry='15' fill='%23d4af37'/><rect x='140' y='80' width='20' height='40' fill='%238b4513' rx='4'/><text x='150' y='180' text-anchor='middle' font-size='12' fill='white'>Tân cổ điển</text></svg>"
        },
        {
            name: "Tối giản",
            description: "Ít nhưng chất - tập trung vào trải nghiệm và công năng",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f8fafc'/><rect x='70' y='70' width='160' height='80' fill='rgba(255,255,255,0.98)' rx='4'/><rect x='90' y='90' width='40' height='25' fill='%23374151' rx='2'/><rect x='140' y='90' width='40' height='25' fill='%23374151' rx='2'/><rect x='190' y='100' width='5' height='30' fill='%23374151'/><text x='150' y='180' text-anchor='middle' font-size='12' fill='%23666'>Tối giản</text></svg>"
        },
        {
            name: "Luxury",
            description: "Tập trung vào vật liệu cao cấp và chi tiết hoàn thiện tinh xảo",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23000000'/><rect x='50' y='50' width='200' height='100' fill='rgba(255,255,255,0.98)' rx='12'/><rect x='70' y='80' width='50' height='30' fill='%23000000' rx='6'/><rect x='130' y='80' width='50' height='30' fill='%23000000' rx='6'/><rect x='190' y='70' width='30' height='40' fill='%23d4af37' rx='4'/><circle cx='120' cy='60' r='10' fill='%23d4af37'/><text x='150' y='180' text-anchor='middle' font-size='12' fill='white'>Luxury</text></svg>"
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
                            <h1>🏠 Thi Công Trọn Gói Nội Thất</h1>
                            <p className="hero-subtitle">
                                Hoàn Thiện Không Gian Sống Đồng Bộ & Đẳng Cấp
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">7</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">30-45</span>
                                    <span className="stat-label">Ngày hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">10-15</span>
                                    <span className="stat-label">Năm bền bỉ</span>
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
                                <h2>Thi công trọn gói nội thất là gì?</h2>
                                <p>
                                    Thi công trọn gói nội thất là dịch vụ đảm nhận toàn bộ quá trình <strong>biến
                                    bản vẽ thiết kế thành không gian sống thực tế</strong>: từ khảo sát, lên ý tưởng,
                                    sản xuất nội thất, thi công lắp đặt đến bàn giao và bảo hành.
                                </p>
                                <p>
                                    Khách hàng chỉ cần làm việc với một đơn vị duy nhất, đảm bảo <strong>thẩm mỹ
                                    đồng bộ, tối ưu chi phí và thời gian</strong>.
                                </p>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='interior-construction' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f59e0b'/><stop offset='100%' style='stop-color:%23d97706'/></linearGradient></defs><rect width='400' height='300' fill='url(%23interior-construction)'/><rect x='60' y='60' width='280' height='180' fill='rgba(255,255,255,0.95)' rx='12'/><rect x='80' y='140' width='70' height='40' fill='%23f59e0b' rx='8'/><rect x='165' y='140' width='70' height='40' fill='%23f59e0b' rx='8'/><rect x='250' y='120' width='80' height='60' fill='%23d97706' rx='8'/><rect x='90' y='90' width='200' height='4' fill='%23f59e0b' rx='2'/><circle cx='130' cy='110' r='10' fill='%23d97706'/><circle cx='200' cy='110' r='10' fill='%23d97706'/><circle cx='270' cy='110' r='10' fill='%23d97706'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Nội thất trọn gói</text></svg>"
                                    alt="Thi công trọn gói nội thất"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lợi Ích Của Thi Công Trọn Gói Nội Thất</h2>
                            <p>Những giá trị vượt trội mà dịch vụ trọn gói mang lại</p>
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

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Thi Công Trọn Gói Nội Thất Chuyên Nghiệp</h2>
                            <p>7 bước thực hiện từ ý tưởng đến hoàn thiện</p>
                        </div>

                        <div className="process-grid">
                            {processSteps.map((step, index) => (
                                <div key={step.step} className="process-card">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interior Styles Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Phong Cách Nội Thất Phổ Biến</h2>
                            <p>Đa dạng phong cách để lựa chọn phù hợp với sở thích</p>
                        </div>

                        <div className="benefits-grid">
                            {interiorStyles.map((style, index) => (
                                <div key={index} className="benefit-card">
                                    <div style={{
                                        width: '80px',
                                        height: '60px',
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
                                    <p>{style.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cost Factors Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Yếu Tố Ảnh Hưởng Đến Chi Phí Nội Thất</h2>
                            <p>Những yếu tố quan trọng quyết định giá thành dự án</p>
                        </div>

                        <div className="benefits-grid">
                            {costFactors.map((factor, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">
                                        <i className={`fas ${factor.icon}`}></i>
                                    </div>
                                    <h3>{factor.title}</h3>
                                    <p>{factor.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose LinHome Section */}
                <section className="additional-info-section">
                    <div className="container">
                        <div className="section-header" style={{color: 'white', marginBottom: '48px'}}>
                            <h2>Vì Sao Nên Chọn LIN HOME</h2>
                            <p>Những điểm vượt trội làm nên uy tín của chúng tôi</p>
                        </div>

                        <div className="additional-content">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="info-card">
                                    <div className="info-icon">
                                        <i className={`fas ${advantage.icon}`}></i>
                                    </div>
                                    <h3>{advantage.title}</h3>
                                    <p>{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Câu Hỏi Thường Gặp (FAQ)</h2>
                            <p>Giải đáp những thắc mắc phổ biến của khách hàng</p>
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
                            <h2>Hoàn Thiện Không Gian Sống Mơ Ước</h2>
                            <p>
                                Hãy để LIN HOME giúp bạn <strong>hoàn thiện không gian sống mơ ước</strong> với
                                dịch vụ <strong>thi công trọn gói nội thất uy tín -- chuyên nghiệp -- tiết kiệm chi phí</strong>.
                            </p>
                            <p>
                                Với xưởng sản xuất riêng và đội ngũ thợ tay nghề cao, chúng tôi cam kết mang đến
                                cho bạn một không gian nội thất chất lượng, đẹp mắt và bền bỉ theo thời gian.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn miễn phí
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-home"></i>
                                    Xem mẫu thiết kế
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

export default ThiCongTronGoiNoiThatPage;