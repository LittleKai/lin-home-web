// src/pages/thi-cong/dien-thong-minh.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const DienThongMinhPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeScenario, setActiveScenario] = useState('lighting');

    // Smart home scenarios
    const smartScenarios = {
        lighting: {
            title: 'Hệ thống chiếu sáng thông minh',
            description: 'Điều khiển đèn tự động theo thời gian, cảm biến chuyển động',
            features: [
                'Bật/tắt đèn theo lịch trình',
                'Điều chỉnh độ sáng tự động',
                'Cảm biến chuyển động',
                'Điều khiển bằng giọng nói',
                'Tạo không khí theo tâm trạng'
            ],
            devices: 'Đèn LED thông minh, dimmer, cảm biến chuyển động',
            priceRange: '2-8 triệu VNĐ/phòng'
        },
        security: {
            title: 'Hệ thống an ninh thông minh',
            description: 'Camera, cảm biến cửa, báo động kết nối smartphone',
            features: [
                'Camera giám sát từ xa',
                'Cảm biến cửa, cửa sổ',
                'Báo động khẩn cấp',
                'Nhận thông báo real-time',
                'Lưu trữ video đám mây'
            ],
            devices: 'Camera IP, cảm biến từ, còi báo động, khóa thông minh',
            priceRange: '5-20 triệu VNĐ/ngôi nhà'
        },
        climate: {
            title: 'Điều khiển khí hậu thông minh',
            description: 'Tự động điều chỉnh nhiệt độ, độ ẩm theo nhu cầu',
            features: [
                'Điều khiển điều hòa từ xa',
                'Lập lịch bật/tắt tự động',
                'Cảm biến nhiệt độ, độ ẩm',
                'Tối ưu tiết kiệm năng lượng',
                'Điều khiển quạt, rèm tự động'
            ],
            devices: 'Thermostat thông minh, cảm biến nhiệt độ, điều khiển IR',
            priceRange: '3-12 triệu VNĐ/ngôi nhà'
        },
        entertainment: {
            title: 'Hệ thống giải trí thông minh',
            description: 'Âm thanh, hình ảnh đa vùng, điều khiển tập trung',
            features: [
                'Âm thanh đa vùng',
                'Streaming nhạc không dây',
                'Điều khiển TV, dàn âm',
                'Tích hợp các nền tảng giải trí',
                'Điều khiển bằng tablet/smartphone'
            ],
            devices: 'Loa thông minh, TV box, ampli, điều khiển đa năng',
            priceRange: '8-30 triệu VNĐ/ngôi nhà'
        }
    };

    // Common issues
    const commonIssues = [
        {
            issue: 'Thiết bị mất kết nối WiFi',
            cause: 'Mạng WiFi không ổn định, router yếu, hoặc cấu hình sai',
            solution: 'Kiểm tra router, tăng cường repeater, cấu hình lại thiết bị',
            prevention: 'Đầu tư router chất lượng, mesh network cho nhà lớn',
            icon: 'fa-wifi'
        },
        {
            issue: 'Không đồng bộ giữa các thiết bị',
            cause: 'Các thiết bị khác hãng, giao thức khác nhau',
            solution: 'Sử dụng hub trung tâm, cập nhật firmware thiết bị',
            prevention: 'Chọn hệ sinh thái thống nhất, tương thích',
            icon: 'fa-sync-alt'
        },
        {
            issue: 'Bảo mật thông tin kém',
            cause: 'Sử dụng mật khẩu mặc định, thiết bị không cập nhật',
            solution: 'Đổi mật khẩu mạnh, cập nhật firmware, thiết lập firewall',
            prevention: 'Chọn thiết bị có chứng nhận bảo mật, cập nhật thường xuyên',
            icon: 'fa-shield-alt'
        },
        {
            issue: 'Hệ thống phức tạp, khó sử dụng',
            cause: 'Cài đặt quá phức tạp, giao diện không thân thiện',
            solution: 'Đơn giản hóa kịch bản, tùy chỉnh giao diện phù hợp',
            prevention: 'Thiết kế theo nhu cầu thực tế, đào tạo người dùng',
            icon: 'fa-cogs'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Sợ kỹ thuật quá phức tạp, khó sử dụng',
            description: 'Lo ngại không thể thao tác hoặc gặp trục trặc hàng ngày',
            solution: 'Thiết kế giao diện đơn giản, đào tạo chi tiết, hỗ trợ 24/7'
        },
        {
            concern: 'Lo lắng về chi phí nâng cấp và tương thích',
            description: 'Sợ đầu tư ban đầu lớn và khó mở rộng sau này',
            solution: 'Tư vấn phương án từ cơ bản đến nâng cao, dễ mở rộng'
        },
        {
            concern: 'Muốn hệ thống an toàn, vận hành ổn định',
            description: 'Lo ngại về bảo mật thông tin và độ tin cậy',
            solution: 'Sử dụng thiết bị chính hãng, mã hóa cao, backup offline'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Tư vấn nhu cầu và khảo sát',
            description: 'Tìm hiểu thói quen sống, chọn kịch bản phù hợp',
            duration: '1-2 ngày',
            tools: 'Checklist nhu cầu, sơ đồ mạng'
        },
        {
            step: 2,
            title: 'Thiết kế hệ thống và lựa chọn thiết bị',
            description: 'Chọn hub trung tâm, giao thức (Zigbee, Z-wave, WiFi)',
            duration: '2-3 ngày',
            tools: 'Phần mềm thiết kế, catalog thiết bị'
        },
        {
            step: 3,
            title: 'Chuẩn bị hạ tầng mạng',
            description: 'Lắp đặt router, mesh network, cáp mạng',
            duration: '1 ngày',
            tools: 'Router, access point, cáp CAT6'
        },
        {
            step: 4,
            title: 'Lắp đặt thiết bị cơ bản',
            description: 'Lắp công tắc thông minh, cảm biến, camera',
            duration: '2-3 ngày',
            tools: 'Thiết bị smarthome, dụng cụ lắp đặt'
        },
        {
            step: 5,
            title: 'Cấu hình và kết nối hệ thống',
            description: 'Kết nối thiết bị với hub, cài đặt ứng dụng',
            duration: '1-2 ngày',
            tools: 'Laptop, smartphone, phần mềm cấu hình'
        },
        {
            step: 6,
            title: 'Thiết lập kịch bản và test',
            description: 'Tạo automation, thử nghiệm các tình huống',
            duration: '1 ngày',
            tools: 'App điều khiển, thiết bị test'
        },
        {
            step: 7,
            title: 'Đào tạo và bàn giao',
            description: 'Hướng dẫn sử dụng, bảo trì và troubleshooting',
            duration: '0.5 ngày',
            tools: 'Tài liệu hướng dẫn, video demo'
        }
    ];

    // Technical tips
    const technicalTips = [
        {
            title: 'Chọn hệ sinh thái phù hợp',
            tip: 'Ưu tiên hệ thống có thể mở rộng và tương thích với nhiều thiết bị',
            icon: 'fa-sitemap'
        },
        {
            title: 'Đầu tư mạng WiFi mạnh',
            tip: 'Router chất lượng cao và mesh network cho diện tích lớn',
            icon: 'fa-wifi'
        },
        {
            title: 'Dự phòng điều khiển offline',
            tip: 'Luôn có phương án điều khiển thủ công khi mất internet',
            icon: 'fa-hand-paper'
        },
        {
            title: 'Bảo mật từ đầu',
            tip: 'Đổi mật khẩu mặc định, cập nhật firmware thường xuyên',
            icon: 'fa-lock'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Smarthome có tiết kiệm điện thật không?',
            answer: 'Có, nếu thiết kế kịch bản hợp lý. Có thể tiết kiệm 15-30% điện năng nhờ tự động tắt đèn, điều khiển điều hòa thông minh.'
        },
        {
            id: 2,
            question: 'Có cần internet để vận hành smarthome?',
            answer: 'Nhiều chức năng cần internet để điều khiển từ xa, nhưng nên có kịch bản cục bộ (local) cho những tính năng quan trọng.'
        },
        {
            id: 3,
            question: 'Smarthome có dễ sử dụng cho người lớn tuổi?',
            answer: 'Có thể tùy chỉnh giao diện đơn giản hoặc kết hợp điều khiển bằng công tắc vật lý thông thường.'
        },
        {
            id: 4,
            question: 'Chi phí lắp một hệ thống cơ bản là bao nhiêu?',
            answer: 'Tùy phạm vi, một phòng cơ bản có thể từ 5-15 triệu VNĐ. Toàn bộ ngôi nhà từ 30-100 triệu tùy yêu cầu.'
        },
        {
            id: 5,
            question: 'Ai sẽ bảo trì hệ thống smarthome?',
            answer: 'Đơn vị lắp đặt thường cung cấp dịch vụ hậu mãi, cập nhật firmware và hỗ trợ kỹ thuật.'
        },
        {
            id: 6,
            question: 'Bảo mật thông tin có được đảm bảo không?',
            answer: 'Cần chọn thiết bị có tiêu chuẩn bảo mật cao, thay mật khẩu mặc định và cập nhật firmware thường xuyên.'
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
                            <h1>🏠 Hệ Thống Điện Thông Minh (Smarthome)</h1>
                            <p className="hero-subtitle">
                                Kiểm soát chiếu sáng, điều hòa, an ninh bằng smartphone/giọng nói
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">7-15</span>
                                    <span className="stat-label">Ngày lắp đặt</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">15-30%</span>
                                    <span className="stat-label">Tiết kiệm điện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">Điều khiển từ xa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao nên đầu tư hệ thống điện thông minh?</h2>
                            <p>
                                Smarthome tích hợp <strong>điều khiển thiết bị điện qua ứng dụng/giọng nói</strong>,
                                nâng cao tiện nghi và tiết kiệm năng lượng cho gia đình hiện đại.
                            </p>
                            <p>
                                Hệ thống bao gồm điều khiển đèn, rèm, ổ cắm thông minh, cảm biến an ninh,
                                tạo ra <strong>ngôi nhà thông minh, tiện nghi và an toàn</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Smart Scenarios */}
                <section className="scenarios-section">
                    <div className="container">
                        <h2>Các kịch bản smarthome phổ biến</h2>
                        <div className="scenario-tabs">
                            <button
                                className={`tab-button ${activeScenario === 'lighting' ? 'active' : ''}`}
                                onClick={() => setActiveScenario('lighting')}
                            >
                                Chiếu sáng
                            </button>
                            <button
                                className={`tab-button ${activeScenario === 'security' ? 'active' : ''}`}
                                onClick={() => setActiveScenario('security')}
                            >
                                An ninh
                            </button>
                            <button
                                className={`tab-button ${activeScenario === 'climate' ? 'active' : ''}`}
                                onClick={() => setActiveScenario('climate')}
                            >
                                Khí hậu
                            </button>
                            <button
                                className={`tab-button ${activeScenario === 'entertainment' ? 'active' : ''}`}
                                onClick={() => setActiveScenario('entertainment')}
                            >
                                Giải trí
                            </button>
                        </div>

                        {Object.keys(smartScenarios).map(scenario => (
                            <div
                                key={scenario}
                                className={`scenario-panel ${activeScenario === scenario ? 'active' : 'hidden'}`}
                            >
                                <h3>{smartScenarios[scenario].title}</h3>
                                <p className="scenario-description">{smartScenarios[scenario].description}</p>

                                <div className="scenario-features">
                                    <h4><i className="fas fa-star"></i> Tính năng chính</h4>
                                    <ul>
                                        {smartScenarios[scenario].features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="scenario-details">
                                    <div className="detail-item">
                                        <strong>Thiết bị:</strong> {smartScenarios[scenario].devices}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Chi phí:</strong> {smartScenarios[scenario].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Tips */}
                <section className="tips-section">
                    <div className="container">
                        <h2>Tips kỹ thuật quan trọng</h2>
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

                {/* Common Issues */}
                <section className="issues-section">
                    <div className="container">
                        <h2>Các vấn đề thường gặp & cách khắc phục</h2>
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
                        <h2>Quy trình lắp đặt hệ thống điện thông minh</h2>
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

export default DienThongMinhPage;