// src/pages/thi-cong/da-op-lat.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';

const DaOpLatPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStoneType, setActiveStoneType] = useState('granite');

    // Stone types comparison
    const stoneTypes = {
        granite: {
            title: 'Granite (Đá hoa cương)',
            characteristics: 'Cứng, bền, chống trầy xước tốt',
            advantages: [
                'Độ cứng cao, chống va đập tốt',
                'Chịu nhiệt độ cao, không bị biến dạng',
                'Đa dạng màu sắc và vân đá',
                'Phù hợp cho sàn và mặt ngoài',
                'Tuổi thọ cao, ít bảo dưỡng'
            ],
            disadvantages: [
                'Nặng, cần khung chịu lực tốt',
                'Chi phí vận chuyển cao',
                'Cần thợ có kinh nghiệm để cắt',
                'Một số loại có thể hút nước'
            ],
            applications: 'Sàn, mặt tiền, cầu thang, mặt bàn bếp',
            priceRange: '400.000 - 1.200.000đ/m²'
        },
        marble: {
            title: 'Marble (Đá cẩm thạch)',
            characteristics: 'Vân đẹp, sang trọng, bề mặt mịn',
            advantages: [
                'Vẻ đẹp tự nhiên, sang trọng',
                'Vân đá độc đáo, không lặp lại',
                'Cảm giác mát lạnh tự nhiên',
                'Phù hợp nội thất cao cấp',
                'Có thể đánh bóng cao'
            ],
            disadvantages: [
                'Mềm hơn granite, dễ trầy xước',
                'Nhạy cảm với axit (chanh, giấm)',
                'Cần bảo dưỡng thường xuyên',
                'Giá thành cao'
            ],
            applications: 'Ốp tường, mặt bàn, phòng tắm, không gian nội thất',
            priceRange: '600.000 - 2.500.000đ/m²'
        },
        engineered: {
            title: 'Đá nhân tạo (Engineered Stone)',
            characteristics: 'Đồng đều, ít lỗ rỗng, nhiều màu sắc',
            advantages: [
                'Màu sắc đồng đều, không vân lỗi',
                'Ít thấm nước hơn đá tự nhiên',
                'Đa dạng màu sắc và họa tiết',
                'Độ bền cao, chống vi khuẩn',
                'Dễ bảo dưỡng'
            ],
            disadvantages: [
                'Kém tự nhiên trong cảm nhận',
                'Giới hạn kích thước nhất định',
                'Chi phí cao hơn gạch thông thường',
                'Cần kỹ thuật lắp đặt chuyên nghiệp'
            ],
            applications: 'Mặt bếp, quầy bar, phòng tắm, mặt bàn',
            priceRange: '800.000 - 1.800.000đ/m²'
        }
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Mạch keo lộ, không đều',
            cause: 'Không xử lý mạch đúng loại vật liệu, keo không phù hợp',
            solution: 'Bóc mạch cũ, trám lại bằng keo chuyên dụng, mài lại cho mịn',
            prevention: 'Sử dụng keo chuyên dụng cho từng loại đá',
            icon: 'fa-grip-lines'
        },
        {
            issue: 'Đá bị nứt/chênh cao thấp',
            cause: 'Do nền yếu, dán không đủ keo hoặc không căn chỉnh',
            solution: 'Tháo đá, xử lý nền, dán lại theo tiêu chuẩn kỹ thuật',
            prevention: 'Kiểm tra nền kỹ lưỡng trước khi ốp',
            icon: 'fa-crack'
        },
        {
            issue: 'Thấm mạch ở khu bếp/nhà tắm',
            cause: 'Do chống thấm kém trước khi ốp đá',
            solution: 'Xử lý chống thấm triệt để, dùng keo chống thấm chuyên dụng',
            prevention: 'Luôn làm chống thấm trước khi ốp đá',
            icon: 'fa-tint'
        },
        {
            issue: 'Đá bị ố màu, mất bóng',
            cause: 'Do tiếp xúc với hóa chất, không bảo dưỡng đúng cách',
            solution: 'Đánh bóng lại, sử dụng sản phẩm bảo dưỡng chuyên dụng',
            prevention: 'Vệ sinh đúng cách, tránh hóa chất mạnh',
            icon: 'fa-eye-slash'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Sợ tốn tiền cho vật liệu đắt',
            description: 'Nhưng thi công kém khiến đá hỏng hoặc không ăn ý thẩm mỹ',
            solution: 'Tư vấn chọn đá phù hợp ngân sách, đội thợ chuyên nghiệp, bảo hành rõ ràng'
        },
        {
            concern: 'Lo lắng phát sinh chi phí',
            description: 'Sau khi nhận bàn giao do điều chỉnh mạch, cắt thêm',
            solution: 'Khảo sát kỹ lưỡng, báo giá chi tiết, cam kết không phát sinh'
        },
        {
            concern: 'Muốn vật liệu bền, dễ vệ sinh',
            description: 'Và giữ giá trị theo thời gian, không lo bảo dưỡng phức tạp',
            solution: 'Tư vấn chọn loại đá phù hợp, hướng dẫn bảo dưỡng đúng cách'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát & đo đạc',
            description: 'Kiểm tra độ phẳng nền, đo đạc kích thước chính xác',
            duration: '0.5 ngày',
            tools: 'Thước laser, máy đo độ ẩm'
        },
        {
            step: 2,
            title: 'Chọn đá & lên phương án',
            description: 'Chọn loại đá, màu sắc, xác định keo dán và mạch phù hợp',
            duration: '1 ngày',
            tools: 'Catalog mẫu đá, phần mềm thiết kế'
        },
        {
            step: 3,
            title: 'Xử lý nền & chống thấm',
            description: 'Làm sạch nền, xử lý chống thấm (nếu cần), căng chỉ',
            duration: '1 ngày',
            tools: 'Vật liệu chống thấm, máy trộn'
        },
        {
            step: 4,
            title: 'Dán đá & căn chỉnh',
            description: 'Dán từng viên đá, căn chỉnh mạch, kiểm tra độ phẳng',
            duration: '2-4 ngày',
            tools: 'Keo dán chuyên dụng, máy cắt đá'
        },
        {
            step: 5,
            title: 'Xử lý mạch & hoàn thiện',
            description: 'Trám mạch, mài, đánh bóng (nếu yêu cầu)',
            duration: '1-2 ngày',
            tools: 'Máy mài, máy đánh bóng'
        },
        {
            step: 6,
            title: 'Vệ sinh & bàn giao',
            description: 'Vệ sinh sạch sẽ, kiểm tra chất lượng, hướng dẫn bảo dưỡng',
            duration: '0.5 ngày',
            tools: 'Hóa chất vệ sinh chuyên dụng'
        }
    ];

    // Technical applications
    const applications = [
        {
            area: 'Mặt tiền công trình',
            stoneType: 'Granite',
            reason: 'Chịu được thời tiết, độ bền cao',
            thickness: '20-30mm',
            icon: 'fa-building'
        },
        {
            area: 'Sàn trong nhà',
            stoneType: 'Granite hoặc đá nhân tạo',
            reason: 'Chịu lực tốt, dễ vệ sinh',
            thickness: '15-20mm',
            icon: 'fa-home'
        },
        {
            area: 'Mặt bàn bếp',
            stoneType: 'Granite hoặc đá nhân tạo',
            reason: 'Chịu nhiệt, chống trầy, không thấm',
            thickness: '20-30mm',
            icon: 'fa-fire'
        },
        {
            area: 'Phòng tắm',
            stoneType: 'Marble hoặc đá nhân tạo',
            reason: 'Chống thấm tốt, thẩm mỹ cao',
            thickness: '10-15mm',
            icon: 'fa-shower'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Nên chọn granite hay marble cho cầu thang?',
            answer: 'Nên chọn granite nếu ưu tiên độ bền và chịu lực; chọn marble nếu ưu tiên thẩm mỹ và có ngân sách cao, sẵn sàng bảo dưỡng thường xuyên.'
        },
        {
            id: 2,
            question: 'Đá có cần xử lý chống thấm không?',
            answer: 'Bắt buộc phải xử lý chống thấm cho khu vực bếp, nhà tắm. Các khu vực khác tùy loại đá và điều kiện sử dụng.'
        },
        {
            id: 3,
            question: 'Độ dày đá tiêu chuẩn là bao nhiêu?',
            answer: 'Thường 20-30mm cho mặt ngoài và chịu lực; 10-20mm cho ốp tường nội thất tùy ứng dụng và yêu cầu thẩm mỹ.'
        },
        {
            id: 4,
            question: 'Thời gian thi công đá ốp lát là bao lâu?',
            answer: '5-10 ngày tùy diện tích và độ phức tạp. Diện tích 50m² thường hoàn thành trong 5-7 ngày.'
        },
        {
            id: 5,
            question: 'Bảo hành thi công đá như thế nào?',
            answer: '12-24 tháng tùy hạng mục. Bao gồm lỗi kỹ thuật, bong tróc, và hỗ trợ bảo dưỡng định kỳ.'
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
                            <h1>💎 Thi Công Đá Ốp Lát Chuyên Nghiệp</h1>
                            <p className="hero-subtitle">
                                Granite, Marble, Đá nhân tạo - Cắt chuẩn, mạch kín, chống thấm
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5-10</span>
                                    <span className="stat-label">Ngày thi công</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Loại đá chính</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-24</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao chọn đá tự nhiên & đá nhân tạo?</h2>
                            <p>
                                Đá tự nhiên và đá nhân tạo mang lại <strong>vẻ đẹp, độ bền và giá trị</strong> cho công trình.
                                Thi công đòi hỏi kỹ thuật chính xác để tránh nứt, lệch mạch và thấm nước.
                            </p>
                            <p>
                                LinHome với đội ngũ thợ có kinh nghiệm lâu năm, cam kết thi công
                                <strong>chuẩn kỹ thuật, thẩm mỹ cao và bảo hành uy tín</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stone Types Comparison */}
                <section className="stone-types-section">
                    <div className="container">
                        <h2>Phân loại và đặc điểm các loại đá</h2>
                        <div className="stone-tabs">
                            <button
                                className={`tab-button ${activeStoneType === 'granite' ? 'active' : ''}`}
                                onClick={() => setActiveStoneType('granite')}
                            >
                                Granite
                            </button>
                            <button
                                className={`tab-button ${activeStoneType === 'marble' ? 'active' : ''}`}
                                onClick={() => setActiveStoneType('marble')}
                            >
                                Marble
                            </button>
                            <button
                                className={`tab-button ${activeStoneType === 'engineered' ? 'active' : ''}`}
                                onClick={() => setActiveStoneType('engineered')}
                            >
                                Đá nhân tạo
                            </button>
                        </div>

                        {Object.keys(stoneTypes).map(type => (
                            <div
                                key={type}
                                className={`stone-panel ${activeStoneType === type ? 'active' : 'hidden'}`}
                            >
                                <div className="stone-header">
                                    <h3>{stoneTypes[type].title}</h3>
                                    <p className="stone-characteristics">{stoneTypes[type].characteristics}</p>
                                </div>

                                <div className="stone-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {stoneTypes[type].advantages.map((advantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-check"></i>
                                                    {advantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="disadvantages-section">
                                        <h4><i className="fas fa-exclamation-triangle"></i> Nhược điểm</h4>
                                        <ul>
                                            {stoneTypes[type].disadvantages.map((disadvantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-minus"></i>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="stone-details">
                                    <div className="detail-item">
                                        <strong>Ứng dụng:</strong> {stoneTypes[type].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Giá thành:</strong> {stoneTypes[type].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Ứng dụng & Tips kỹ thuật</h2>
                        <div className="applications-grid">
                            {applications.map((app, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className={`fas ${app.icon}`}></i>
                                    </div>
                                    <h3>{app.area}</h3>
                                    <p><strong>Loại đá:</strong> {app.stoneType}</p>
                                    <p><strong>Lý do:</strong> {app.reason}</p>
                                    <p><strong>Độ dày:</strong> {app.thickness}</p>
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
                                            <span className="step-tools">
                                                <i className="fas fa-tools"></i>
                                                {step.tools}
                                            </span>
                                        </div>
                                    </div>
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
                            <h2>Nhận tư vấn chất liệu đá và báo giá</h2>
                            <p>
                                Liên hệ ngay LinHome để được tư vấn chọn loại đá phù hợp và
                                nhận <strong>báo giá thi công chuyên nghiệp, minh bạch</strong>.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Gọi tư vấn: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-gem"></i>
                                    Xem catalog đá
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

export default DaOpLatPage;
