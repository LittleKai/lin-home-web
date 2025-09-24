// src/pages/thi-cong/san-go.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';

const SanGoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeComparison, setActiveComparison] = useState('industrial');

    // Material comparison data
    const floorTypes = {
        industrial: {
            title: 'Sàn gỗ công nghiệp',
            advantages: [
                'Giá hợp lý, phù hợp đại chúng',
                'Đa dạng bề mặt và màu sắc',
                'Dễ thi công, lắp đặt nhanh',
                'Độ bền cao, ít biến dạng',
                'Kháng ẩm tốt hơn gỗ tự nhiên'
            ],
            disadvantages: [
                'Kém chịu ẩm so với gỗ tự nhiên cao cấp',
                'Dễ phồng nếu không chống ẩm tốt',
                'Không thể chà sàn để tu sửa',
                'Cảm giác không tự nhiên như gỗ thật'
            ],
            applications: 'Căn hộ chung cư, nhà phố, văn phòng',
            priceRange: '300.000 - 800.000đ/m²',
            warranty: '12-18 tháng'
        },
        natural: {
            title: 'Sàn gỗ tự nhiên',
            advantages: [
                'Vẻ đẹp tự nhiên, sang trọng',
                'Bền bỉ, có thể sử dụng hàng chục năm',
                'Có thể chà sàn, tu sửa khi cần',
                'Tăng giá trị bất động sản',
                'Cảm giác chân thực, ấm áp'
            ],
            disadvantages: [
                'Giá thành cao',
                'Nhạy cảm với độ ẩm và nhiệt độ',
                'Cần bảo dưỡng định kỳ',
                'Thời gian lắp đặt lâu hơn'
            ],
            applications: 'Biệt thự, nhà cao cấp, không gian sang trọng',
            priceRange: '800.000 - 2.500.000đ/m²',
            warranty: '18-36 tháng'
        }
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Phồng/rộp sàn sau một thời gian',
            cause: 'Do nền ẩm, chống ẩm kém hoặc lót xốp kém chất lượng',
            solution: 'Tháo lát, xử lý nền, thay lớp lót và lát lại',
            prevention: 'Kiểm tra độ ẩm nền trước khi lát',
            icon: 'fa-water'
        },
        {
            issue: 'Sàn kêu khi đi lại',
            cause: 'Do lắp không đúng khe co giãn hoặc bắt vít/đinh sai',
            solution: 'Kiểm tra khe co giãn, bổ sung keo đàn hồi hoặc điều chỉnh liên kết',
            prevention: 'Tuân thủ khe co giãn theo tiêu chuẩn',
            icon: 'fa-volume-up'
        },
        {
            issue: 'Màu sắc không đồng đều',
            cause: 'Do không lưu ý hướng lắp, xuất xứ lô gỗ khác nhau',
            solution: 'Chọn vật liệu cùng lô, bảo quản đúng điều kiện trước lắp',
            prevention: 'Kiểm tra màu sắc trước khi lắp đặt',
            icon: 'fa-palette'
        }
    ];

    // Customer pain points
    const customerConcerns = [
        {
            concern: 'Lo ngại sàn bị hỏng nhanh',
            description: 'Sau vài tháng sử dụng do kỹ thuật thi công kém',
            solution: 'Cam kết kỹ thuật chuẩn, vật liệu chất lượng, bảo hành rõ ràng'
        },
        {
            concern: 'Sợ chi phí bảo dưỡng cao',
            description: 'Chi phí đổi mới tốn kém, khó khăn trong bảo trì',
            solution: 'Tư vấn chọn loại sàn phù hợp, hướng dẫn bảo dưỡng đúng cách'
        },
        {
            concern: 'Khó lựa chọn loại sàn',
            description: 'Phân vân giữa sàn công nghiệp và tự nhiên',
            solution: 'Tư vấn chi tiết theo nhu cầu, ngân sách và không gian sử dụng'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Kiểm tra và xử lý nền',
            description: 'Kiểm tra độ ẩm, độ phẳng, cán phẳng nếu cần',
            duration: '0.5-1 ngày',
            importance: 'Rất quan trọng'
        },
        {
            step: 2,
            title: 'Lót lớp chống ẩm',
            description: 'Lót lớp chống ẩm và tiếng ồn chuyên dụng',
            duration: '0.5 ngày',
            importance: 'Bắt buộc'
        },
        {
            step: 3,
            title: 'Lát sàn gỗ',
            description: 'Lát theo quy cách, giữ khe giãn theo hướng nhà',
            duration: '1-3 ngày',
            importance: 'Kỹ thuật cao'
        },
        {
            step: 4,
            title: 'Hoàn thiện nẹp cạnh',
            description: 'Lắp nẹp, xử lý cạnh, vệ sinh sàn',
            duration: '0.5 ngày',
            importance: 'Thẩm mỹ'
        },
        {
            step: 5,
            title: 'Bảo dưỡng và hướng dẫn',
            description: 'Bảo dưỡng ban đầu và hướng dẫn sử dụng',
            duration: '0.5 ngày',
            importance: 'Quan trọng'
        }
    ];

    // Technical tips
    const technicalTips = [
        {
            title: 'Chọn loại sàn',
            tip: 'Sàn gỗ công nghiệp cho căn hộ, văn phòng; gỗ tự nhiên cho biệt thự, không gian cao cấp',
            icon: 'fa-search'
        },
        {
            title: 'Kiểm soát độ ẩm',
            tip: 'Luôn kiểm tra độ ẩm nền dưới 4% trước khi lát để tránh phồng rộp',
            icon: 'fa-thermometer-half'
        },
        {
            title: 'Khe co giãn',
            tip: 'Để khe co giãn 8-12mm ở tường và 1-2mm giữa các thanh sàn',
            icon: 'fa-expand-arrows-alt'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Có thể lát sàn gỗ trên nền gạch cũ không?',
            answer: 'Có thể, nếu nền phẳng và không ẩm. Cần xử lý nền sạch sẽ, kiểm tra độ ẩm và lót lớp chống ẩm phù hợp.'
        },
        {
            id: 2,
            question: 'Sàn gỗ có chống nước không?',
            answer: 'Có loại chống nước nhưng không khuyến nghị dùng cho khu vực ướt liên tục như nhà tắm. Tốt nhất dùng cho phòng khách, phòng ngủ.'
        },
        {
            id: 3,
            question: 'Sàn gỗ có trơn trượt không?',
            answer: 'Tùy bề mặt. Nên chọn loại có độ nhám vừa phải, tránh bề mặt quá bóng gây trơn trượt, đặc biệt có trẻ em.'
        },
        {
            id: 4,
            question: 'Thời gian thi công sàn gỗ là bao lâu?',
            answer: '2-5 ngày tùy diện tích. Căn hộ 80m² thường hoàn thành trong 2-3 ngày, bao gồm cả thời gian khô ráo.'
        },
        {
            id: 5,
            question: 'Bảo hành sàn gỗ như thế nào?',
            answer: '12-24 tháng tùy loại vật liệu. Bao gồm lỗi kỹ thuật, phồng rộp không do lỗi sử dụng, và hỗ trợ bảo dưỡng.'
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
                            <h1>🌳 Thi Công Sàn Gỗ Chuyên Nghiệp</h1>
                            <p className="hero-subtitle">
                                Sàn gỗ công nghiệp & tự nhiên, lắp đặt chuẩn kỹ thuật, chống ẩm, bảo hành dài hạn
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">2-5</span>
                                    <span className="stat-label">Ngày thi công</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-36</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">2</span>
                                    <span className="stat-label">Loại sàn gỗ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao nên chọn sàn gỗ?</h2>
                            <p>
                                Sàn gỗ mang đến sự <strong>ấm cúng và sang trọng</strong> cho không gian sống.
                                Lựa chọn vật liệu và kỹ thuật thi công đúng cách sẽ quyết định tuổi thọ và
                                cảm giác sử dụng của sàn gỗ.
                            </p>
                            <p>
                                LinHome cung cấp dịch vụ thi công sàn gỗ chuyên nghiệp với
                                <strong>kỹ thuật chuẩn, vật liệu chất lượng và bảo hành uy tín</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Material Comparison Section */}
                <section className="comparison-section">
                    <div className="container">
                        <h2>So sánh các loại sàn gỗ</h2>
                        <div className="comparison-tabs">
                            <button
                                className={`tab-button ${activeComparison === 'industrial' ? 'active' : ''}`}
                                onClick={() => setActiveComparison('industrial')}
                            >
                                Sàn gỗ công nghiệp
                            </button>
                            <button
                                className={`tab-button ${activeComparison === 'natural' ? 'active' : ''}`}
                                onClick={() => setActiveComparison('natural')}
                            >
                                Sàn gỗ tự nhiên
                            </button>
                        </div>

                        <div className="comparison-content">
                            {Object.keys(floorTypes).map(type => (
                                <div
                                    key={type}
                                    className={`comparison-panel ${activeComparison === type ? 'active' : 'hidden'}`}
                                >
                                    <h3>{floorTypes[type].title}</h3>
                                    <div className="comparison-grid">
                                        <div className="advantages-section">
                                            <h4><i className="fas fa-thumbs-up"></i> Điểm mạnh</h4>
                                            <ul>
                                                {floorTypes[type].advantages.map((advantage, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-check"></i>
                                                        {advantage}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="disadvantages-section">
                                            <h4><i className="fas fa-exclamation-triangle"></i> Điểm yếu</h4>
                                            <ul>
                                                {floorTypes[type].disadvantages.map((disadvantage, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-minus"></i>
                                                        {disadvantage}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comparison-details">
                                        <div className="detail-item">
                                            <strong>Ứng dụng:</strong> {floorTypes[type].applications}
                                        </div>
                                        <div className="detail-item">
                                            <strong>Giá thành:</strong> {floorTypes[type].priceRange}
                                        </div>
                                        <div className="detail-item">
                                            <strong>Bảo hành:</strong> {floorTypes[type].warranty}
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                    <div className="issue-header">
                                        <div className="issue-icon">
                                            <i className={`fas ${issue.icon}`}></i>
                                        </div>
                                        <h3>{issue.issue}</h3>
                                    </div>
                                    <div className="issue-content">
                                        <p className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {issue.cause}
                                        </p>
                                        <p className="issue-solution">
                                            <strong>Khắc phục:</strong> {issue.solution}
                                        </p>
                                        <p className="issue-prevention">
                                            <strong>Phòng tránh:</strong> {issue.prevention}
                                        </p>
                                    </div>
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
                                    <h3><i className="fas fa-exclamation-circle"></i> {concern.concern}</h3>
                                    <p className="concern-description">{concern.description}</p>
                                    <p className="concern-solution">
                                        <strong>Giải pháp LinHome:</strong> {concern.solution}
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
                            {constructionProcess.map((step, index) => (
                                <div key={step.step} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        <div className="step-meta">
                                            <span className="step-duration">
                                                <i className="fas fa-clock"></i>
                                                {step.duration}
                                            </span>
                                            <span className={`step-importance importance-${step.importance.toLowerCase().replace(' ', '-')}`}>
                                                <i className="fas fa-star"></i>
                                                {step.importance}
                                            </span>
                                        </div>
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
                            <h2>Gọi ngay LinHome để nhận tư vấn</h2>
                            <p>
                                Chúng tôi sẽ tư vấn chọn vật liệu sàn gỗ phù hợp và cung cấp
                                <strong>báo giá lắp đặt chi tiết, minh bạch</strong> cho dự án của bạn.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Hotline: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Báo giá sàn gỗ
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

export default SanGoPage;
