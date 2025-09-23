// src/pages/thi-cong/tran-vach-thach-cao.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';
import './ThiCongHangMuc.css';

const TranVachThachCaoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    // Strengths and weaknesses data
    const materialFeatures = {
        strengths: [
            'Nhẹ, dễ thi công và vận chuyển',
            'Tạo hình linh hoạt theo thiết kế',
            'Cách âm & cách nhiệt tốt với tấm đặc biệt',
            'Bề mặt phẳng, mịn dễ hoàn thiện sơn',
            'Chi phí hợp lý, thi công nhanh'
        ],
        weaknesses: [
            'Kém chịu nước nếu sử dụng tấm thường',
            'Dễ hư hỏng khi bị va đập mạnh',
            'Cần xử lý mối nối và cạnh chuẩn để tránh nứt',
            'Phải sử dụng tấm chống ẩm cho khu vực ẩm ướt'
        ]
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Mối nối nổi vết (bong bả)',
            cause: 'Do trộn bả không đúng tỷ lệ hoặc mặt nền rung',
            solution: 'Mài, làm sạch, bả lại bằng vật liệu chuyên dụng, kiểm tra kết cấu khung',
            icon: 'fa-exclamation-triangle'
        },
        {
            issue: 'Nứt tại khe co giãn',
            cause: 'Do thiếu khe co giãn hoặc lắp sai kỹ thuật',
            solution: 'Cắt khe co giãn, chèn vật liệu đàn hồi PU sealant, kiểm tra khung xương',
            icon: 'fa-crack'
        },
        {
            issue: 'Thấm nước & phồng ván',
            cause: 'Do sử dụng tấm thạch cao thường ở khu ẩm',
            solution: 'Thay bằng tấm chống ẩm/kháng ẩm; xử lý nguồn nước',
            icon: 'fa-tint'
        }
    ];

    // Customer pain points analysis
    const customerConcerns = [
        {
            concern: 'Sợ bị phát sinh chi phí',
            description: 'Khi phát hiện lỗi sau khi sơn. Họ cần cam kết bảo hành rõ ràng.',
            solution: 'Báo giá minh bạch, cam kết không phát sinh'
        },
        {
            concern: 'Ngại thời gian thi công kéo dài',
            description: 'Ảnh hưởng tới sinh hoạt. Muốn thi công sạch, nhanh, ít bụi.',
            solution: 'Quy trình nhanh 3-7 ngày, thi công sạch sẽ'
        },
        {
            concern: 'Lo lắng về chất lượng hoàn thiện',
            description: 'Các mối nối, vị trí đèn âm trần, điều hòa phải chuẩn.',
            solution: 'Đội thợ chuyên nghiệp, kiểm tra chất lượng nghiêm ngặt'
        }
    ];

    // Construction process steps
    const constructionSteps = [
        {
            step: 1,
            title: 'Khảo sát hiện trạng',
            description: 'Đo đạc kích thước, kiểm tra vị trí kỹ thuật (ống, dầm)',
            duration: '0.5 ngày'
        },
        {
            step: 2,
            title: 'Lên bản vẽ chi tiết',
            description: 'Thiết kế trần/vách, xác định loại tấm và hệ khung',
            duration: '1 ngày'
        },
        {
            step: 3,
            title: 'Chuẩn bị vật tư',
            description: 'Khung xương, vít chuyên dụng, tấm thạch cao, bả mối nối',
            duration: '0.5 ngày'
        },
        {
            step: 4,
            title: 'Lắp dựng khung xương',
            description: 'Tạo khung, kiểm tra thăng bằng và độ chắc chắn',
            duration: '1-2 ngày'
        },
        {
            step: 5,
            title: 'Lắp tấm thạch cao',
            description: 'Bắt vít đúng bước, xử lý mối nối bằng bả, lưới gia cường',
            duration: '1-2 ngày'
        },
        {
            step: 6,
            title: 'Hoàn thiện bề mặt',
            description: 'Bả hoàn thiện, mài mịn, sơn lót/sơn hoàn thiện',
            duration: '2-3 ngày'
        },
        {
            step: 7,
            title: 'Nghiệm thu & bảo hành',
            description: 'Kiểm tra, bàn giao và cam kết bảo hành',
            duration: '0.5 ngày'
        }
    ];

    // Technical tips
    const technicalTips = [
        {
            title: 'Khu vực ẩm ướt',
            tip: 'Sử dụng tấm chống ẩm cho phòng bếp/nhà tắm',
            icon: 'fa-shower'
        },
        {
            title: 'Trần lớn',
            tip: 'Lắp khe co giãn để tránh nứt do nhiệt độ',
            icon: 'fa-expand-arrows-alt'
        },
        {
            title: 'Độ ẩm công trình',
            tip: 'Kiểm soát độ ẩm trước khi bả sơn',
            icon: 'fa-thermometer-half'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Trần thạch cao có chịu ẩm tốt không?',
            answer: 'Tấm thường không chịu ẩm tốt; cần dùng tấm chống ẩm chuyên dụng cho khu vực ẩm ướt như phòng tắm, bếp.'
        },
        {
            id: 2,
            question: 'Có thể sơn trực tiếp lên tấm thạch cao không?',
            answer: 'Không được. Phải bả mối nối, mài nhẵn và lăn lót trước khi sơn để đảm bảo bề mặt đẹp và bền.'
        },
        {
            id: 3,
            question: 'Bao lâu thì hoàn thiện trần thạch cao?',
            answer: 'Trung bình 3-7 ngày cho căn hộ tiêu chuẩn, tùy diện tích và độ phức tạp của thiết kế.'
        },
        {
            id: 4,
            question: 'Trần thạch cao dễ nứt không?',
            answer: 'Nếu thi công đúng kỹ thuật với khe co giãn và khung xương chắc chắn thì hạn chế tối đa việc nứt.'
        },
        {
            id: 5,
            question: 'Bảo hành trần thạch cao như thế nào?',
            answer: 'Chúng tôi bảo hành 12-24 tháng tùy hạng mục, bao gồm sửa chữa các lỗi kỹ thuật và bong tróc.'
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (
        <div className="page-wrapper">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏗️ Thi Công Trần & Vách Thạch Cao</h1>
                            <p className="hero-subtitle">
                                Thi công nhanh, cách âm, chống nóng, hoàn thiện thẩm mỹ. Báo giá minh bạch, bảo hành.
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">3-7</span>
                                    <span className="stat-label">Ngày hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-24</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Chất lượng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Giới thiệu về thi công trần & vách thạch cao</h2>
                            <p>
                                Thạch cao là giải pháp hoàn thiện nội thất phổ biến nhờ <strong>nhẹ, dễ tạo hình</strong> và
                                bề mặt mịn thuận tiện cho sơn trang trí. Thích hợp cho căn hộ, văn phòng, nhà hàng, khách sạn.
                            </p>
                            <p>
                                Với công nghệ thi công hiện đại và đội ngũ thợ lành nghề, LinHome cam kết mang đến
                                giải pháp trần thạch cao <strong>đẹp, bền và tiết kiệm chi phí</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Material Features Section */}
                <section className="features-section">
                    <div className="container">
                        <h2>Điểm mạnh - Điểm yếu của vật liệu thạch cao</h2>
                        <div className="features-grid">
                            <div className="feature-column strengths">
                                <h3><i className="fas fa-thumbs-up"></i> Điểm mạnh</h3>
                                <ul>
                                    {materialFeatures.strengths.map((strength, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check"></i>
                                            {strength}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-column weaknesses">
                                <h3><i className="fas fa-exclamation-triangle"></i> Điểm yếu</h3>
                                <ul>
                                    {materialFeatures.weaknesses.map((weakness, index) => (
                                        <li key={index}>
                                            <i className="fas fa-minus"></i>
                                            {weakness}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issues Section */}
                <section className="issues-section">
                    <div className="container">
                        <h2>Các lỗi thường gặp & cách khắc phục</h2>
                        <div className="issues-grid">
                            {commonIssues.map((issue, index) => (
                                <div key={index} className="issue-card">
                                    <div className="issue-icon">
                                        <i className={`fas ${issue.icon}`}></i>
                                    </div>
                                    <h3>{issue.issue}</h3>
                                    <p className="issue-cause"><strong>Nguyên nhân:</strong> {issue.cause}</p>
                                    <p className="issue-solution"><strong>Khắc phục:</strong> {issue.solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Concerns Section */}
                <section className="concerns-section">
                    <div className="container">
                        <h2>Phân tích nỗi đau khách hàng</h2>
                        <div className="concerns-grid">
                            {customerConcerns.map((concern, index) => (
                                <div key={index} className="concern-card">
                                    <h3>{concern.concern}</h3>
                                    <p className="concern-description">{concern.description}</p>
                                    <p className="concern-solution">
                                        <strong>Giải pháp của LinHome:</strong> {concern.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Construction Process Section */}
                <section className="process-section">
                    <div className="container">
                        <h2>Quy trình thi công chi tiết</h2>
                        <div className="process-timeline">
                            {constructionSteps.map((step, index) => (
                                <div key={step.step} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        <span className="step-duration">
                                            <i className="fas fa-clock"></i>
                                            {step.duration}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Tips Section */}
                <section className="tips-section">
                    <div className="container">
                        <h2>Ứng dụng & Tips kỹ thuật</h2>
                        <div className="tips-grid">
                            {technicalTips.map((tip, index) => (
                                <div key={index} className="tip-card">
                                    <div className="tip-icon">
                                        <i className={`fas ${tip.icon}`}></i>
                                    </div>
                                    <h3>{tip.title}</h3>
                                    <p>{tip.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <h2>Câu hỏi thường gặp (FAQ)</h2>
                        <div className="faq-container">
                            {faqData.map((faq) => (
                                <div key={faq.id} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                        style={{
                                            width: '100%',
                                            padding: '20px',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            background: activeFaq === faq.id ? '#f8fafc' : 'white',
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#2d3748',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '10px',
                                            transition: 'all 0.3s ease'
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
                            <h2>Liên hệ LinHome để khảo sát miễn phí</h2>
                            <p>
                                Nhận báo giá thi công trần/vách thạch cao chi tiết và tư vấn chuyên nghiệp từ đội ngũ
                                kỹ thuật giàu kinh nghiệm của chúng tôi.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Gọi ngay: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Báo giá miễn phí
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

export default TranVachThachCaoPage;
