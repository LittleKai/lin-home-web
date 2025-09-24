// src/pages/thi-cong/dien-mat-troi.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';

const DienMatTroiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeSystem, setActiveSystem] = useState('grid-tied');

    // Solar system types
    const systemTypes = {
        'grid-tied': {
            title: 'Hệ thống hòa lưới (Grid-tied)',
            description: 'Kết nối với lưới điện quốc gia, bán điện dư thừa',
            advantages: [
                'Chi phí đầu tư thấp hơn (không cần pin)',
                'Có thể bán điện dư thừa cho EVN',
                'Hiệu suất cao, ít bảo trì',
                'Thời gian hoàn vốn nhanh hơn'
            ],
            disadvantages: [
                'Không hoạt động khi mất điện lưới',
                'Phụ thuộc vào chính sách mua bán điện',
                'Cần thủ tục xin phép phức tạp'
            ],
            applications: 'Nhà ở, công ty, nhà máy có kết nối lưới điện',
            priceRange: '15.000 - 20.000đ/W'
        },
        'off-grid': {
            title: 'Hệ thống độc lập (Off-grid)',
            description: 'Hoạt động độc lập, sử dụng pin lưu trữ năng lượng',
            advantages: [
                'Hoạt động độc lập, không phụ thuộc lưới điện',
                'Phù hợp vùng xa, không có lưới điện',
                'Cung cấp điện liên tục 24/7'
            ],
            disadvantages: [
                'Chi phí đầu tư cao (bao gồm pin)',
                'Pin cần thay thế định kỳ (5-10 năm)',
                'Hiệu suất thấp hơn hệ hòa lưới',
                'Cần tính toán công suất chính xác'
            ],
            applications: 'Nhà vườn, khu resort xa, đảo, vùng sâu vùng xa',
            priceRange: '25.000 - 35.000đ/W'
        },
        'hybrid': {
            title: 'Hệ thống Hybrid (Kết hợp)',
            description: 'Kết hợp cả hòa lưới và pin lưu trữ',
            advantages: [
                'Linh hoạt nhất - có pin dự phòng',
                'Vừa bán điện vừa có điện dự phòng',
                'Tối ưu hóa sử dụng năng lượng',
                'An toàn cao nhất'
            ],
            disadvantages: [
                'Chi phí cao nhất',
                'Hệ thống phức tạp nhất',
                'Cần bảo trì nhiều thiết bị'
            ],
            applications: 'Biệt thự, resort, bệnh viện, trung tâm dữ liệu',
            priceRange: '30.000 - 45.000đ/W'
        }
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Sụt giảm hiệu suất do bụi bẩn',
            cause: 'Tấm pin không được vệ sinh định kỳ, bị che bởi lá cây, bụi bẩn',
            solution: 'Lập lịch vệ sinh tấm pin, cắt tỉa cây che nắng, kiểm tra khung giá đỡ',
            prevention: 'Vệ sinh 3-6 tháng/lần, thiết kế tránh bóng che',
            icon: 'fa-sun'
        },
        {
            issue: 'Lỗi inverter, mất kết nối',
            cause: 'Inverter quá tải, lỗi đấu nối, hoặc hỏng do thời tiết',
            solution: 'Kiểm tra cầu chì, đấu nối, thay inverter nếu cần',
            prevention: 'Bảo dưỡng định kỳ, chọn inverter chất lượng cao',
            icon: 'fa-bolt'
        },
        {
            issue: 'Hệ thống không ổn định khi có gió',
            cause: 'Giá đỡ không được thiết kế chịu lực tốt, bu lông lỏng',
            solution: 'Gia cố lại bu lông, nâng cấp hệ khung giá đỡ chắc chắn',
            prevention: 'Thiết kế khung theo tiêu chuẩn chịu gió, kiểm tra định kỳ',
            icon: 'fa-wind'
        },
        {
            issue: 'Pin lưu trữ suy giảm nhanh',
            cause: 'Sử dụng pin kém chất lượng, sạc xả không đúng cách',
            solution: 'Thay pin chất lượng cao, cài đặt BMS (Battery Management System)',
            prevention: 'Chọn pin lithium chất lượng, theo dõi trạng thái pin',
            icon: 'fa-battery-half'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Lo ngại về chi phí đầu tư ban đầu lớn',
            description: 'Sợ không thể hoàn vốn trong thời gian hợp lý',
            solution: 'Tư vấn phương án phù hợp ngân sách, tính toán ROI cụ thể, hỗ trợ vay vốn'
        },
        {
            concern: 'Sợ rủi ro kỹ thuật và bảo hành không rõ ràng',
            description: 'Lo lắng về chất lượng pin, inverter và độ bền của hệ thống',
            solution: 'Cam kết sử dụng thiết bị chính hãng, bảo hành 10-25 năm cho pin, 5-10 năm cho inverter'
        },
        {
            concern: 'Muốn hệ thống hoạt động ổn định, ít bảo trì',
            description: 'Không muốn phải can thiệp kỹ thuật thường xuyên',
            solution: 'Thiết kế hệ thống đơn giản, đáng tin cậy, dịch vụ bảo trì định kỳ'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát mái nhà và đánh giá tiềm năng',
            description: 'Đo diện tích, kiểm tra hướng nắng, đánh giá bóng che và khả năng chịu tải',
            duration: '1 ngày',
            tools: 'Máy đo bức xạ, GPS, máy đo góc'
        },
        {
            step: 2,
            title: 'Thiết kế hệ thống và báo giá',
            description: 'Tính toán số tấm pin, inverter, dự toán sản lượng điện và chi phí',
            duration: '2-3 ngày',
            tools: 'Phần mềm thiết kế PVSyst, AutoCAD'
        },
        {
            step: 3,
            title: 'Xin phép và hoàn tất thủ tục',
            description: 'Xin phép EVN (nếu hòa lưới), hoàn tất giấy tờ pháp lý',
            duration: '15-30 ngày',
            tools: 'Hồ sơ pháp lý, đơn đăng ký'
        },
        {
            step: 4,
            title: 'Chuẩn bị vật tư và thiết bị',
            description: 'Đặt mua tấm pin, inverter, khung giá đỡ, cáp DC/AC',
            duration: '5-10 ngày',
            tools: 'Tấm pin, inverter, khung nhôm, cáp'
        },
        {
            step: 5,
            title: 'Lắp đặt khung giá đỡ',
            description: 'Khoan, bắt vít, lắp khung nhôm theo thiết kế đã duyệt',
            duration: '1-2 ngày',
            tools: 'Khoan, bu lông, khung nhôm'
        },
        {
            step: 6,
            title: 'Lắp đặt tấm pin và inverter',
            description: 'Bố trí tấm pin, đấu nối DC, lắp inverter, hệ thống giám sát',
            duration: '1-2 ngày',
            tools: 'Tấm pin, inverter, connector MC4'
        },
        {
            step: 7,
            title: 'Đấu nối AC và kiểm tra hệ thống',
            description: 'Nối với tủ điện chính, kiểm tra an toàn điện, chạy thử',
            duration: '1 ngày',
            tools: 'Cáp AC, CB, đồng hồ đo'
        },
        {
            step: 8,
            title: 'Nghiệm thu và hòa lưới',
            description: 'EVN kiểm tra và cho phép hòa lưới, bàn giao hệ thống',
            duration: '1-3 ngày',
            tools: 'Checklist nghiệm thu EVN'
        }
    ];

    // Benefits
    const benefits = [
        {
            title: 'Tiết kiệm chi phí điện lâu dài',
            description: 'Giảm 70-90% hóa đơn điện hàng tháng',
            icon: 'fa-piggy-bank'
        },
        {
            title: 'Thân thiện với môi trường',
            description: 'Giảm phát thải CO2, sử dụng năng lượng sạch',
            icon: 'fa-leaf'
        },
        {
            title: 'Tăng giá trị bất động sản',
            description: 'Ngôi nhà có hệ thống điện mặt trời có giá trị cao hơn',
            icon: 'fa-home'
        },
        {
            title: 'Hoàn vốn nhanh',
            description: 'Thời gian hoàn vốn 4-8 năm tùy điều kiện',
            icon: 'fa-chart-line'
        },
        {
            title: 'Độ bền cao, ít bảo trì',
            description: 'Tấm pin bảo hành 20-25 năm, ít hỏng hóc',
            icon: 'fa-shield-alt'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Hệ điện mặt trời hòa lưới có thể bán điện được không?',
            answer: 'Có, theo Thông tư 05/2022 của Bộ Công Thương, hộ gia đình có thể bán điện dư thừa cho EVN với giá được quy định.'
        },
        {
            id: 2,
            question: 'Thời gian hoàn vốn đầu tư là bao lâu?',
            answer: 'Tùy vào công suất hệ thống và giá điện hiện tại, thường từ 4-8 năm. Ở những nơi giá điện cao và nắng tốt, thời gian có thể ngắn hơn.'
        },
        {
            id: 3,
            question: 'Tấm pin mặt trời bảo hành bao lâu?',
            answer: 'Tấm pin thường có bảo hành 20-25 năm cho hiệu suất (80% công suất ban đầu), 10-12 năm cho sản phẩm.'
        },
        {
            id: 4,
            question: 'Cần bảo trì gì định kỳ cho hệ thống?',
            answer: 'Vệ sinh tấm pin 3-6 tháng/lần, kiểm tra đấu nối điện, theo dõi hiệu suất qua app giám sát.'
        },
        {
            id: 5,
            question: 'Mái nhà nào phù hợp để lắp điện mặt trời?',
            answer: 'Mái có hướng Nam/Đông Nam/Tây Nam, góc nghiêng 15-30 độ, diện tích thoáng, ít bóng che từ cây hoặc nhà cao.'
        },
        {
            id: 6,
            question: 'Có rủi ro cháy nổ khi lắp điện mặt trời không?',
            answer: 'Nếu lắp đặt đúng kỹ thuật và sử dụng thiết bị chất lượng thì rất an toàn. Quan trọng là chọn đơn vị thi công uy tín.'
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
                            <h1>☀️ Hệ Thống Điện Mặt Trời Solar PV</h1>
                            <p className="hero-subtitle">
                                Thiết kế & lắp đặt hệ thống Solar PV - Tối ưu tiết kiệm điện, đầu tư dài hạn
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">7-15</span>
                                    <span className="stat-label">Ngày lắp đặt</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">20-25</span>
                                    <span className="stat-label">Năm bảo hành pin</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">4-8</span>
                                    <span className="stat-label">Năm hoàn vốn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao nên đầu tư điện mặt trời?</h2>
                            <p>
                                Điện mặt trời là giải pháp <strong>tiết kiệm chi phí điện lâu dài</strong>, tận dụng
                                năng lượng tái tạo từ ánh sáng mặt trời phong phú tại Việt Nam.
                            </p>
                            <p>
                                Với công nghệ ngày càng hoàn thiện và chi phí giảm dần, đầu tư hệ thống điện mặt trời
                                là <strong>quyết định thông minh cho tương lai</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* System Types */}
                <section className="systems-section">
                    <div className="container">
                        <h2>Các loại hệ thống điện mặt trời</h2>
                        <div className="system-tabs">
                            <button
                                className={`tab-button ${activeSystem === 'grid-tied' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('grid-tied')}
                            >
                                Hòa lưới
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'off-grid' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('off-grid')}
                            >
                                Độc lập
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'hybrid' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('hybrid')}
                            >
                                Hybrid
                            </button>
                        </div>

                        {Object.keys(systemTypes).map(type => (
                            <div
                                key={type}
                                className={`system-panel ${activeSystem === type ? 'active' : 'hidden'}`}
                            >
                                <h3>{systemTypes[type].title}</h3>
                                <p className="system-description">{systemTypes[type].description}</p>

                                <div className="system-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {systemTypes[type].advantages.map((advantage, index) => (
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
                                            {systemTypes[type].disadvantages.map((disadvantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-minus"></i>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="system-details">
                                    <div className="detail-item">
                                        <strong>Ứng dụng:</strong> {systemTypes[type].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Giá thành:</strong> {systemTypes[type].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="benefits-section">
                    <div className="container">
                        <h2>Lợi ích của hệ thống điện mặt trời</h2>
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
                        <h2>Quy trình lắp đặt hệ thống điện mặt trời</h2>
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
                            <h2>Khảo sát hệ thống điện mặt trời miễn phí</h2>
                            <p>
                                Liên hệ LinHome để được <strong>khảo sát miễn phí</strong> và nhận
                                <strong>phương án lắp điện mặt trời tối ưu</strong> cho ngôi nhà của bạn.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Hotline: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Tính toán công suất
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

export default DienMatTroiPage;
