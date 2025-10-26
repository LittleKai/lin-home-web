// src/pages/thi-cong/cua-composite.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const CuaCompositePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeComparison, setActiveComparison] = useState('composite');

    // Material comparison data
    const doorTypes = {
        composite: {
            title: 'Cửa Composite (Nhựa gỗ)',
            characteristics: 'Chống ẩm, chống mối mọt, bền bỉ',
            advantages: [
                'Chịu nước tốt hơn gỗ tự nhiên',
                'Không bị mối mọt, côn trùng',
                'Ít cong vênh theo thời gian',
                'Giá ổn định, phù hợp ngân sách',
                'Ít cần bảo dưỡng',
                'Đa dạng màu sắc và kiểu dáng'
            ],
            disadvantages: [
                'Không thể sửa chữa như gỗ tự nhiên',
                'Bề mặt giả gỗ có thể kém tự nhiên',
                'Không có mùi hương gỗ tự nhiên',
                'Khó tái chế'
            ],
            applications: 'Cửa nhà tắm, phòng ngủ, toilet, khu vực ẩm ướt',
            priceRange: '1.500.000 - 4.000.000đ/cánh',
            warranty: '12-24 tháng'
        },
        wood: {
            title: 'Cửa Gỗ Tự Nhiên',
            characteristics: 'Đẹp tự nhiên, sang trọng, có thể sửa chữa',
            advantages: [
                'Vẻ đẹp tự nhiên, sang trọng',
                'Mùi hương gỗ dễ chịu',
                'Có thể sửa chữa, chà nhám lại',
                'Tăng giá trị thẩm mỹ cao',
                'Cách âm tốt',
                'Thân thiện môi trường'
            ],
            disadvantages: [
                'Dễ bị ảnh hưởng bởi độ ẩm',
                'Có thể bị mối mọt, nấm mốc',
                'Cần bảo dưỡng thường xuyên',
                'Giá thành cao hơn',
                'Dễ cong vênh nếu không bảo quản tốt'
            ],
            applications: 'Cửa chính, phòng khách, phòng ngủ, văn phòng',
            priceRange: '2.000.000 - 8.000.000đ/cánh',
            warranty: '6-12 tháng'
        }
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Cánh cửa bị lệch sau lắp đặt',
            cause: 'Do khung chưa cân bằng hoặc bắt ốc sai vị trí',
            solution: 'Điều chỉnh bản lề, kiểm tra và chỉnh lại khung cửa',
            prevention: 'Đo đạc chính xác, kiểm tra vuông góc trước lắp',
            icon: 'fa-door-open'
        },
        {
            issue: 'Rỉ nước ở đáy cửa nhà tắm',
            cause: 'Do không kê cao đúng tiêu chuẩn hoặc ron kém chất lượng',
            solution: 'Làm lại đáy cửa, chèn ron chuyên dụng, đảm bảo thoát nước',
            prevention: 'Thiết kế độ cao phù hợp, sử dụng ron chống nước',
            icon: 'fa-tint'
        },
        {
            issue: 'Màu sắc phai do ánh nắng',
            cause: 'Do chất lượng bề mặt kém, không có lớp UV bảo vệ',
            solution: 'Chọn vật liệu có lớp UV hoặc sơn bảo vệ chuyên dụng',
            prevention: 'Lựa chọn sản phẩm chất lượng có chứng nhận',
            icon: 'fa-sun'
        },
        {
            issue: 'Cửa đóng không khít, có khe hở',
            cause: 'Do co giãn vật liệu hoặc lắp đặt không chuẩn',
            solution: 'Điều chỉnh khung, thay thế ron niêm phong',
            prevention: 'Để khe co giãn phù hợp, kiểm tra định kỳ',
            icon: 'fa-compress-arrows-alt'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Sợ cửa bị mốc, phồng khi dùng ở khu ẩm',
            description: 'Đặc biệt lo lắng khi sử dụng cho phòng tắm, khu bếp có độ ẩm cao',
            solution: 'Cam kết sử dụng cửa composite chất lượng cao, chống ẩm tốt, lắp đặt đúng kỹ thuật'
        },
        {
            concern: 'Muốn cửa đẹp, bền nhưng ngân sách vừa phải',
            description: 'Cần giải pháp cân bằng giữa thẩm mỹ và chi phí hợp lý',
            solution: 'Tư vấn sản phẩm phù hợp ngân sách, nhiều mẫu mã để lựa chọn'
        },
        {
            concern: 'Lo ngại khung cửa không chuẩn gây kẹt cánh',
            description: 'Sợ cửa không đóng mở được sau thời gian sử dụng',
            solution: 'Đo đạc chính xác, thi công khung chuẩn, kiểm tra kỹ trước bàn giao'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát ô cửa hiện tại',
            description: 'Đo đạc chính xác kích thước, kiểm tra khung và nền móng',
            duration: '0.5 ngày',
            tools: 'Thước đo, máy kiểm tra độ vuông'
        },
        {
            step: 2,
            title: 'Tư vấn mẫu và báo giá',
            description: 'Chọn mẫu cửa phù hợp phong cách và công năng sử dụng',
            duration: '1 ngày',
            tools: 'Catalog mẫu, phần mềm thiết kế'
        },
        {
            step: 3,
            title: 'Sản xuất cửa theo kích thước',
            description: 'Gia công cửa composite theo đúng kích thước đã đo',
            duration: '3-5 ngày',
            tools: 'Máy cắt, máy khoan, phụ kiện'
        },
        {
            step: 4,
            title: 'Lắp đặt khung và cánh cửa',
            description: 'Lắp đặt khung, điều chỉnh để cánh đóng mở nhẹ nhàng',
            duration: '1 ngày',
            tools: 'Khoan, vít, bản lề, khóa'
        },
        {
            step: 5,
            title: 'Kiểm tra và hoàn thiện',
            description: 'Kiểm tra chống nước đáy cửa, điều chỉnh cuối cùng',
            duration: '0.5 ngày',
            tools: 'Ron chống nước, keo silicon'
        },
        {
            step: 6,
            title: 'Nghiệm thu và bảo hành',
            description: 'Kiểm tra hoạt động, bàn giao và cam kết bảo hành',
            duration: '0.5 ngày',
            tools: 'Checklist nghiệm thu'
        }
    ];

    // Applications
    const applications = [
        {
            area: 'Cửa phòng tắm',
            reason: 'Chịu được độ ẩm cao, không bị phồng rộp',
            features: 'Chống nước, chống mốc',
            thickness: '35-45mm',
            icon: 'fa-shower'
        },
        {
            area: 'Cửa phòng ngủ',
            reason: 'Cách âm tốt, thẩm mỹ, bền bỉ',
            features: 'Cách âm, đa dạng mẫu mã',
            thickness: '40-50mm',
            icon: 'fa-bed'
        },
        {
            area: 'Cửa toilet',
            reason: 'Khu vực ẩm ướt, cần chống thấm tối ưu',
            features: 'Chống ẩm, dễ vệ sinh',
            thickness: '35-40mm',
            icon: 'fa-toilet'
        },
        {
            area: 'Cửa khu bếp',
            reason: 'Chịu được hơi nước, dầu mỡ',
            features: 'Chống ẩm, dễ lau chùi',
            thickness: '40-45mm',
            icon: 'fa-utensils'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Cửa composite có chịu nước thật không?',
            answer: 'Có, cửa composite chịu nước tốt hơn gỗ tự nhiên nhiều. Tuy nhiên cần lắp đặt đúng kỹ thuật và sử dụng ron chống nước chuyên dụng.'
        },
        {
            id: 2,
            question: 'Có thể sơn lại cửa composite không?',
            answer: 'Có thể, nhưng cần xử lý bề mặt chuyên dụng trước khi sơn. Nên sử dụng sơn chuyên dụng cho composite để đảm bảo độ bám dính.'
        },
        {
            id: 3,
            question: 'Thời gian lắp đặt cửa composite là bao lâu?',
            answer: '1-3 ngày cho một bộ cửa tiêu chuẩn, bao gồm cả thời gian sản xuất và lắp đặt hoàn thiện.'
        },
        {
            id: 4,
            question: 'Bảo hành cửa composite như thế nào?',
            answer: '12-24 tháng tùy nhà cung cấp. Bao gồm lỗi kỹ thuật, cong vênh và các vấn đề do thi công.'
        },
        {
            id: 5,
            question: 'Cửa composite có bị co ngót không?',
            answer: 'Ít hơn gỗ tự nhiên nhưng vẫn có co ngót nhẹ. Do đó cần để khe giãn theo tiêu chuẩn kỹ thuật.'
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
                            <h1>🚪 Thi Công Cửa Composite Chuyên Nghiệp</h1>
                            <p className="hero-subtitle">
                                Chống ẩm, chống mối mọt, bền bỉ cho cửa nhà tắm, phòng ngủ, phòng vệ sinh
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">1-3</span>
                                    <span className="stat-label">Ngày lắp đặt</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-24</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Chống ẩm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao chọn cửa composite?</h2>
                            <p>
                                Cửa composite (nhựa gỗ) là vật liệu thay thế hoàn hao cho cửa gỗ truyền thống,
                                đặc biệt phù hợp cho <strong>khu vực ẩm ướt như nhà tắm, toilet, bếp</strong>.
                            </p>
                            <p>
                                Với ưu điểm <strong>chống ẩm, không mối mọt, bền bỉ</strong> và đa dạng mẫu mã,
                                cửa composite đang được nhiều gia đình lựa chọn thay thế cho cửa gỗ tự nhiên.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Material Comparison */}
                <section className="comparison-section">
                    <div className="container">
                        <h2>So sánh cửa composite và cửa gỗ tự nhiên</h2>
                        <div className="comparison-tabs">
                            <button
                                className={`tab-button ${activeComparison === 'composite' ? 'active' : ''}`}
                                onClick={() => setActiveComparison('composite')}
                            >
                                Cửa Composite
                            </button>
                            <button
                                className={`tab-button ${activeComparison === 'wood' ? 'active' : ''}`}
                                onClick={() => setActiveComparison('wood')}
                            >
                                Cửa Gỗ Tự Nhiên
                            </button>
                        </div>

                        <div className="comparison-content">
                            {Object.keys(doorTypes).map(type => (
                                <div
                                    key={type}
                                    className={`comparison-panel ${activeComparison === type ? 'active' : 'hidden'}`}
                                >
                                    <h3>{doorTypes[type].title}</h3>
                                    <p className="material-characteristics">{doorTypes[type].characteristics}</p>

                                    <div className="comparison-grid">
                                        <div className="advantages-section">
                                            <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                            <ul>
                                                {doorTypes[type].advantages.map((advantage, index) => (
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
                                                {doorTypes[type].disadvantages.map((disadvantage, index) => (
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
                                            <strong>Ứng dụng:</strong> {doorTypes[type].applications}
                                        </div>
                                        <div className="detail-item">
                                            <strong>Giá thành:</strong> {doorTypes[type].priceRange}
                                        </div>
                                        <div className="detail-item">
                                            <strong>Bảo hành:</strong> {doorTypes[type].warranty}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Ứng dụng cửa composite theo từng khu vực</h2>
                        <div className="applications-grid">
                            {applications.map((app, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className={`fas ${app.icon}`}></i>
                                    </div>
                                    <h3>{app.area}</h3>
                                    <p><strong>Lý do:</strong> {app.reason}</p>
                                    <p><strong>Tính năng:</strong> {app.features}</p>
                                    <p><strong>Độ dày:</strong> {app.thickness}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Issues */}
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

                {/* Customer Concerns */}
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

                {/* Construction Process */}
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
                <CTAContent />
            </main>

        </div>
    );
};

export default CuaCompositePage;
