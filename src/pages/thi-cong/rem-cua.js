// src/pages/thi-cong/rem-cua.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';
import './ThiCongHangMuc.css';

const RemCuaPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCurtainType, setActiveCurtainType] = useState('fabric');

    // Curtain types comparison
    const curtainTypes = {
        fabric: {
            title: 'Rèm vải truyền thống',
            description: 'Rèm vải cao cấp, đa dạng họa tiết và màu sắc',
            advantages: [
                'Đa dạng mẫu mã, họa tiết phong phú',
                'Cảm giác mềm mại, ấm cúng',
                'Cách âm tốt hơn rèm cứng',
                'Phù hợp mọi phong cách nội thất',
                'Có thể giặt và bảo quản dễ dàng'
            ],
            disadvantages: [
                'Dễ bám bụi, cần giặt thường xuyên',
                'Có thể phai màu theo thời gian',
                'Tốn diện tích khi mở hoàn toàn',
                'Chi phí cao cho vải cao cấp'
            ],
            applications: 'Phòng khách, phòng ngủ, phòng họp, nhà hàng',
            priceRange: '200.000 - 800.000đ/m²'
        },
        roller: {
            title: 'Rèm cuốn (Roller blind)',
            description: 'Rèm cuốn gọn gàng, hiện đại, tiết kiệm không gian',
            advantages: [
                'Gọn gàng, tiết kiệm không gian',
                'Dễ vệ sinh, ít bám bụi',
                'Điều khiển đơn giản',
                'Giá thành hợp lý',
                'Phù hợp văn phòng và nhà hiện đại'
            ],
            disadvantages: [
                'Ít mẫu mã so với rèm vải',
                'Cảm giác cứng, ít ấm cúng',
                'Cách âm kém hơn rèm vải',
                'Có thể bị kẹt cơ cấu'
            ],
            applications: 'Văn phòng, phòng bếp, phòng tắm, cửa sổ nhỏ',
            priceRange: '150.000 - 500.000đ/m²'
        },
        roman: {
            title: 'Rèm roman (Roman shade)',
            description: 'Rèm xếp nếp, kết hợp ưu điểm rèm vải và rèm cuốn',
            advantages: [
                'Thẩm mỹ cao, sang trọng',
                'Tiết kiệm không gian hơn rèm vải',
                'Đa dạng chất liệu',
                'Điều chỉnh ánh sáng linh hoạt',
                'Phù hợp nhiều phong cách'
            ],
            disadvantages: [
                'Phức tạp hơn trong lắp đặt',
                'Chi phí cao hơn rèm cuốn',
                'Cơ cấu có thể hỏng',
                'Khó vệ sinh ở các nếp gấp'
            ],
            applications: 'Phòng khách cao cấp, phòng ngủ master, khách sạn',
            priceRange: '300.000 - 1.200.000đ/m²'
        },
        motorized: {
            title: 'Rèm tự động (Motorized)',
            description: 'Rèm điều khiển bằng motor, smartphone hoặc remote',
            advantages: [
                'Tiện lợi, điều khiển từ xa',
                'Tích hợp được với smarthome',
                'Lập lịch mở/đóng tự động',
                'Phù hợp nhà cao cấp',
                'An toàn cho trẻ em (không có dây)'
            ],
            disadvantages: [
                'Chi phí đầu tư cao',
                'Cần bảo trì motor định kỳ',
                'Phụ thuộc vào nguồn điện',
                'Phức tạp khi sửa chữa'
            ],
            applications: 'Biệt thự, penthouse, khách sạn 5 sao',
            priceRange: '800.000 - 3.000.000đ/m²'
        }
    };

    // Common issues
    const commonIssues = [
        {
            issue: 'Rèm kéo không đều hoặc bị kẹt',
            cause: 'Ray rèm không thẳng, lô kém chất lượng hoặc lắp lệch',
            solution: 'Chỉnh lại ray, thay lô chất lượng tốt, căn chỉnh độ thẳng',
            prevention: 'Sử dụng ray và phụ kiện chất lượng, lắp đúng kỹ thuật',
            icon: 'fa-grip-lines'
        },
        {
            issue: 'Rèm bị phai màu do ánh nắng',
            cause: 'Vải không có khả năng chống UV, tiếp xúc nắng trực tiếp',
            solution: 'Chọn vải chống UV hoặc thêm lớp lót chắn nắng',
            prevention: 'Lựa chọn vải có xử lý chống UV, tránh nắng chiếu trực tiếp',
            icon: 'fa-sun'
        },
        {
            issue: 'Motor rèm kêu to hoặc không chạy',
            cause: 'Motor quá tải, thiếu bảo trì hoặc hỏng do độ ẩm',
            solution: 'Kiểm tra nguồn điện, giảm tải, thay motor nếu cần',
            prevention: 'Bảo trì motor định kỳ, tránh quá tải, chống ẩm',
            icon: 'fa-cog'
        },
        {
            issue: 'Rèm không khít cửa, có khe sáng',
            cause: 'Đo sai kích thước hoặc lắp không đúng vị trí',
            solution: 'Đo lại và điều chỉnh kích thước rèm cho phù hợp',
            prevention: 'Đo đạc chính xác, tính toán kỹ vị trí lắp đặt',
            icon: 'fa-ruler'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Muốn rèm đẹp nhưng sợ nhanh bẩn/phai màu',
            description: 'Lo ngại về việc bảo quản và tuổi thọ của rèm',
            solution: 'Tư vấn chọn vải chống bụi, chống UV, hướng dẫn bảo quản đúng cách'
        },
        {
            concern: 'Ngại việc lắp đặt phức tạp, làm hỏng tường',
            description: 'Sợ ảnh hưởng đến thẩm mỹ và kết cấu của cửa sổ',
            solution: 'Thi công cẩn thận, sử dụng kỹ thuật lắp ít xâm lấn'
        },
        {
            concern: 'Muốn tiện lợi nhưng ngại chi phí motor cao',
            description: 'Cân nhắc giữa sự tiện lợi và ngân sách đầu tư',
            solution: 'Tư vấn giải pháp từ cơ bản đến cao cấp, phù hợp ngân sách'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát và đo đạc',
            description: 'Đo kích thước chính xác, đánh giá hướng nắng và nhu cầu sử dụng',
            duration: '0.5 ngày',
            tools: 'Thước đo, máy đo góc, catalog mẫu'
        },
        {
            step: 2,
            title: 'Tư vấn mẫu và báo giá',
            description: 'Lựa chọn loại rèm, vải, màu sắc và phụ kiện phù hợp',
            duration: '1-2 ngày',
            tools: 'Mẫu vải, catalog, phần mềm thiết kế'
        },
        {
            step: 3,
            title: 'Sản xuất rèm theo kích thước',
            description: 'Cắt may rèm theo đúng kích thước và yêu cầu thiết kế',
            duration: '3-7 ngày',
            tools: 'Máy cắt vải, máy may, máy ép'
        },
        {
            step: 4,
            title: 'Lắp đặt ray và motor (nếu có)',
            description: 'Lắp ray, motor và các phụ kiện điều khiển',
            duration: '0.5-1 ngày',
            tools: 'Khoan, ray rèm, motor, remote'
        },
        {
            step: 5,
            title: 'Lắp đặt rèm và điều chỉnh',
            description: 'Treo rèm, kiểm tra hoạt động và điều chỉnh cuối cùng',
            duration: '0.5 ngày',
            tools: 'Thang, dụng cụ điều chỉnh'
        },
        {
            step: 6,
            title: 'Kiểm tra và hướng dẫn sử dụng',
            description: 'Test hoạt động, hướng dẫn sử dụng và bảo quản',
            duration: '0.5 ngày',
            tools: 'Checklist, tài liệu hướng dẫn'
        }
    ];

    // Applications by room
    const applications = [
        {
            room: 'Phòng khách',
            recommendation: 'Rèm vải hoặc rèm roman',
            reason: 'Cần thẩm mỹ cao, cách âm tốt',
            features: 'Họa tiết đẹp, cách âm, điều chỉnh ánh sáng',
            icon: 'fa-couch'
        },
        {
            room: 'Phòng ngủ',
            recommendation: 'Rèm che nắng + rèm vải',
            reason: 'Cần che nắng hoàn toàn, tạo không gian riêng tư',
            features: 'Che nắng 100%, cách âm, riêng tư',
            icon: 'fa-bed'
        },
        {
            room: 'Văn phòng',
            recommendation: 'Rèm cuốn hoặc rèm sáo',
            reason: 'Gọn gàng, dễ vệ sinh, tiết kiệm không gian',
            features: 'Chống chói, dễ điều chỉnh, bền bỉ',
            icon: 'fa-building'
        },
        {
            room: 'Nhà bếp',
            recommendation: 'Rèm cuốn chống nước',
            reason: 'Chịu được độ ẩm, dễ vệ sinh',
            features: 'Chống nước, chống dầu mỡ, dễ lau',
            icon: 'fa-utensils'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Rèm tự động có an toàn không?',
            answer: 'Rất an toàn nếu lắp đúng quy chuẩn và có tính năng ngắt điện tự động khi quá tải. Motor hiện đại có nhiều bảo vệ an toàn.'
        },
        {
            id: 2,
            question: 'Rèm nên giặt bao lâu một lần?',
            answer: 'Tùy môi trường sử dụng, nhà có nhiều bụi nên giặt 3-6 tháng một lần. Rèm văn phòng có thể 6-12 tháng một lần.'
        },
        {
            id: 3,
            question: 'Thời gian lắp đặt rèm là bao lâu?',
            answer: '1-2 ngày cho số lượng bình thường, bao gồm cả thời gian sản xuất rèm theo kích thước.'
        },
        {
            id: 4,
            question: 'Bảo hành rèm như thế nào?',
            answer: '6-24 tháng tùy loại rèm và phụ kiện. Motor rèm thường bảo hành 12-24 tháng, vải rèm 6-12 tháng.'
        },
        {
            id: 5,
            question: 'Có thể tích hợp rèm vào hệ thống smarthome không?',
            answer: 'Có, rèm tự động có thể tích hợp qua motor thông minh hoặc module điều khiển IoT.'
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
                            <h1>🪟 Thi Công Rèm Cửa Chuyên Nghiệp</h1>
                            <p className="hero-subtitle">
                                Rèm vải, rèm cuốn, rèm tự động - Phù hợp phong cách, chống nắng & riêng tư
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">1-2</span>
                                    <span className="stat-label">Ngày lắp đặt</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Loại rèm chính</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">6-24</span>
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
                            <h2>Tại sao rèm cửa quan trọng?</h2>
                            <p>
                                Rèm cửa không chỉ là yếu tố thẩm mỹ mà còn là <strong>giải pháp điều chỉnh ánh sáng
                                và đảm bảo riêng tư</strong> cho không gian sống.
                            </p>
                            <p>
                                Lựa chọn vật liệu và cơ cấu điều khiển phù hợp sẽ mang lại <strong>sự tiện nghi
                                và thẩm mỹ tối ưu</strong> cho ngôi nhà của bạn.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Curtain Types */}
                <section className="curtain-types-section">
                    <div className="container">
                        <h2>Các loại rèm cửa phổ biến</h2>
                        <div className="curtain-tabs">
                            <button
                                className={`tab-button ${activeCurtainType === 'fabric' ? 'active' : ''}`}
                                onClick={() => setActiveCurtainType('fabric')}
                            >
                                Rèm vải
                            </button>
                            <button
                                className={`tab-button ${activeCurtainType === 'roller' ? 'active' : ''}`}
                                onClick={() => setActiveCurtainType('roller')}
                            >
                                Rèm cuốn
                            </button>
                            <button
                                className={`tab-button ${activeCurtainType === 'roman' ? 'active' : ''}`}
                                onClick={() => setActiveCurtainType('roman')}
                            >
                                Rèm roman
                            </button>
                            <button
                                className={`tab-button ${activeCurtainType === 'motorized' ? 'active' : ''}`}
                                onClick={() => setActiveCurtainType('motorized')}
                            >
                                Rèm tự động
                            </button>
                        </div>

                        {Object.keys(curtainTypes).map(type => (
                            <div
                                key={type}
                                className={`curtain-panel ${activeCurtainType === type ? 'active' : 'hidden'}`}
                            >
                                <h3>{curtainTypes[type].title}</h3>
                                <p className="curtain-description">{curtainTypes[type].description}</p>

                                <div className="curtain-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {curtainTypes[type].advantages.map((advantage, index) => (
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
                                            {curtainTypes[type].disadvantages.map((disadvantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-minus"></i>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="curtain-details">
                                    <div className="detail-item">
                                        <strong>Ứng dụng:</strong> {curtainTypes[type].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Giá thành:</strong> {curtainTypes[type].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Applications by Room */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Tư vấn rèm theo từng không gian</h2>
                        <div className="applications-grid">
                            {applications.map((app, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className={`fas ${app.icon}`}></i>
                                    </div>
                                    <h3>{app.room}</h3>
                                    <p><strong>Khuyến nghị:</strong> {app.recommendation}</p>
                                    <p><strong>Lý do:</strong> {app.reason}</p>
                                    <p><strong>Tính năng:</strong> {app.features}</p>
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
                        <h2>Quy trình thi công rèm cửa</h2>
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
                            <h2>Nhận tư vấn mẫu rèm phù hợp</h2>
                            <p>
                                Liên hệ LinHome để được <strong>tư vấn mẫu rèm và lắp đặt chuyên nghiệp</strong>,
                                phù hợp với phong cách và ngân sách của bạn.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Hotline: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-palette"></i>
                                    Xem catalog rèm
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

export default RemCuaPage;