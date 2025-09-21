// src/pages/thi-cong/thi-cong-tron-goi-kien-truc.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';

const ThiCongTronGoiKienTrucPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Construction process steps
    const processSteps = [
        {
            step: 1,
            title: "Khảo sát & tư vấn ban đầu",
            description: "Đo đạc hiện trạng, phân tích nhu cầu sử dụng, định hướng phong cách",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế kiến trúc",
            description: "Lên ý tưởng, triển khai bản vẽ phối cảnh, bản vẽ kỹ thuật",
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Dự toán & báo giá",
            description: "Tính toán chi phí chi tiết, minh bạch từng hạng mục",
            icon: "fa-calculator"
        },
        {
            step: 4,
            title: "Hỗ trợ pháp lý",
            description: "Xin phép xây dựng, hoàn thiện hồ sơ",
            icon: "fa-file-contract"
        },
        {
            step: 5,
            title: "Ký hợp đồng",
            description: "Cam kết rõ ràng về tiến độ, chi phí, trách nhiệm",
            icon: "fa-handshake"
        },
        {
            step: 6,
            title: "Thi công phần thô",
            description: "Móng, khung, tường, mái",
            icon: "fa-hard-hat"
        },
        {
            step: 7,
            title: "Thi công hoàn thiện",
            description: "Cửa, điện, nước, sơn, lát gạch...",
            icon: "fa-paint-brush"
        },
        {
            step: 8,
            title: "Giám sát chất lượng",
            description: "Đội ngũ kỹ sư giám sát toàn bộ quá trình",
            icon: "fa-clipboard-check"
        },
        {
            step: 9,
            title: "Nghiệm thu & bàn giao",
            description: "Đúng tiến độ, đúng chất lượng",
            icon: "fa-home"
        },
        {
            step: 10,
            title: "Bảo hành - bảo trì",
            description: "Đồng hành cùng khách hàng sau khi bàn giao",
            icon: "fa-tools"
        }
    ];

    // Benefits of turnkey construction
    const benefits = [
        {
            title: "Tiết kiệm chi phí",
            description: "Đơn vị thi công trọn gói sẽ chủ động tối ưu vật liệu, nhân công, tránh lãng phí",
            icon: "fa-dollar-sign"
        },
        {
            title: "Tiết kiệm thời gian",
            description: "Không mất công tìm nhiều nhà thầu riêng lẻ",
            icon: "fa-clock"
        },
        {
            title: "Đảm bảo chất lượng",
            description: "Từ móng đến hoàn thiện đều được kiểm soát chặt chẽ",
            icon: "fa-shield-alt"
        },
        {
            title: "Đồng bộ thiết kế - thi công",
            description: "Tránh tình trạng thiết kế một kiểu nhưng thi công ra một kiểu",
            icon: "fa-sync-alt"
        },
        {
            title: "Pháp lý rõ ràng",
            description: "Hỗ trợ xin cấp phép xây dựng, giấy tờ liên quan",
            icon: "fa-file-contract"
        },
        {
            title: "Bảo hành - bảo trì",
            description: "Yên tâm sử dụng công trình lâu dài",
            icon: "fa-wrench"
        }
    ];

    // Cost factors
    const costFactors = [
        {
            title: "Diện tích & quy mô công trình",
            description: "Diện tích xây dựng và số tầng ảnh hưởng trực tiếp đến chi phí",
            icon: "fa-expand-arrows-alt"
        },
        {
            title: "Phong cách kiến trúc",
            description: "Hiện đại, cổ điển, tân cổ điển có mức giá khác nhau",
            icon: "fa-palette"
        },
        {
            title: "Chất lượng vật liệu xây dựng",
            description: "Vật liệu cao cấp sẽ có giá thành cao hơn",
            icon: "fa-cubes"
        },
        {
            title: "Thời gian và tiến độ yêu cầu",
            description: "Yêu cầu hoàn thành nhanh có thể phát sinh chi phí",
            icon: "fa-calendar-alt"
        },
        {
            title: "Các hạng mục bổ sung",
            description: "Sân vườn, cảnh quan, hạ tầng phụ",
            icon: "fa-plus-circle"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thi công trọn gói có đắt hơn thuê từng hạng mục không?",
            answer: "Thực tế, thi công trọn gói giúp tối ưu chi phí và hạn chế phát sinh, nên tổng chi phí thường tiết kiệm hơn."
        },
        {
            id: 2,
            question: "Thời gian hoàn thiện một công trình mất bao lâu?",
            answer: "Tùy quy mô: nhà phố 3-4 tầng thường 4-6 tháng; biệt thự có thể 8-12 tháng."
        },
        {
            id: 3,
            question: "Có thể thay đổi vật liệu trong quá trình thi công không?",
            answer: "Có, nhưng sẽ điều chỉnh lại dự toán trước khi triển khai."
        },
        {
            id: 4,
            question: "LIN HOME có cam kết gì về chất lượng?",
            answer: "Chúng tôi cam kết 'Không phát sinh chi phí ngoài hợp đồng' và cung cấp dịch vụ bảo hành - bảo trí lâu dài."
        }
    ];

    // Company advantages
    const advantages = [
        {
            title: "Hơn 5 năm kinh nghiệm",
            description: "Trong ngành xây dựng - kiến trúc",
            icon: "fa-calendar-check"
        },
        {
            title: "Đội ngũ chuyên môn",
            description: "Kiến trúc sư & kỹ sư giàu chuyên môn",
            icon: "fa-user-tie"
        },
        {
            title: "Quy trình minh bạch",
            description: "Quản lý minh bạch, khoa học",
            icon: "fa-chart-line"
        },
        {
            title: "Cam kết không phát sinh",
            description: "Không phát sinh chi phí ngoài hợp đồng",
            icon: "fa-lock"
        },
        {
            title: "Bảo hành lâu dài",
            description: "Dịch vụ bảo hành - bảo trì lâu dài",
            icon: "fa-shield-alt"
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
                            <h1>🏗️ Thi Công Trọn Gói Kiến Trúc</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Toàn Diện Cho Công Trình Bền Vững
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">10</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Năm kinh nghiệm</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Trọn gói</span>
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
                                <h2>Thi công trọn gói kiến trúc là gì?</h2>
                                <p>
                                    Thi công trọn gói kiến trúc là dịch vụ trong đó <strong>toàn bộ quá trình xây dựng
                                    một công trình -- từ thiết kế, xin phép, thi công đến bàn giao</strong> -- đều do
                                    một đơn vị đảm nhận.
                                </p>
                                <p>
                                    Chủ đầu tư chỉ cần ký hợp đồng một lần duy nhất, còn lại mọi công đoạn đều được
                                    đội ngũ chuyên môn thực hiện và giám sát.
                                </p>
                                <p>
                                    Điểm mạnh nhất của hình thức này là <strong>sự đồng bộ và nhất quán</strong>: bản vẽ
                                    thiết kế được triển khai đúng ý tưởng, hạn chế tối đa phát sinh chi phí và sai sót kỹ thuật.
                                </p>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='turnkey' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23turnkey)'/><rect x='60' y='80' width='280' height='160' fill='rgba(255,255,255,0.95)' rx='16'/><rect x='80' y='100' width='60' height='100' fill='%23667eea' rx='8'/><rect x='150' y='90' width='60' height='110' fill='%23667eea' rx='8'/><rect x='220' y='95' width='60' height='105' fill='%23667eea' rx='8'/><rect x='290' y='105' width='40' height='95' fill='%23764ba2' rx='8'/><polygon points='60,80 200,40 340,80' fill='rgba(118,75,162,0.8)'/><circle cx='360' cy='50' r='20' fill='rgba(255,215,0,0.8)'/><rect x='100' y='120' width='8' height='60' fill='%23059669'/><rect x='170' y='110' width='8' height='70' fill='%23059669'/><rect x='240' y='115' width='8' height='65' fill='%23059669'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Thi công trọn gói</text></svg>"
                                    alt="Thi công trọn gói kiến trúc"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lợi Ích Nổi Bật Của Thi Công Trọn Gói Kiến Trúc</h2>
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
                            <h2>Quy Trình Thi Công Trọn Gói Kiến Trúc Chuyên Nghiệp</h2>
                            <p>10 bước thực hiện dự án từ ý tưởng đến bàn giao hoàn thiện</p>
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

                {/* Cost Factors Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Yếu Tố Ảnh Hưởng Đến Chi Phí Thi Công Kiến Trúc</h2>
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
                            <h2>Liên Hệ Ngay Để Bắt Đầu Dự Án</h2>
                            <p>
                                Nếu bạn cần <strong>thi công trọn gói kiến trúc chuyên nghiệp, uy tín</strong>,
                                hãy liên hệ ngay với LIN HOME để được <strong>tư vấn miễn phí & báo giá chi tiết</strong>.
                            </p>
                            <p>
                                Với hơn 5 năm kinh nghiệm và đội ngũ chuyên gia giàu chuyên môn, chúng tôi cam kết
                                mang đến cho bạn một công trình chất lượng, đúng tiến độ và trong tầm ngân sách.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn miễn phí
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

export default ThiCongTronGoiKienTrucPage;