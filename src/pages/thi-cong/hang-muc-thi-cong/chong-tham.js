// src/pages/thi-cong/chong-tham.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const ChongThamPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeMaterial, setActiveMaterial] = useState('membrane');

    // Waterproofing materials
    const waterproofMaterials = {
        membrane: {
            title: 'Màng chống thấm (Polymer, PU, Bitum)',
            description: 'Màng chống thấm đàn hồi, bền bỉ cho mọi bề mặt',
            advantages: [
                'Độ bền cao, chống thấm tuyệt đối',
                'Đàn hồi tốt, không nứt khi co giãn',
                'Chịu được UV và thời tiết khắc nghiệt',
                'Có thể áp dụng cho nhiều bề mặt',
                'Tuổi thọ lâu dài (10-20 năm)'
            ],
            disadvantages: [
                'Chi phí cao hơn các giải pháp khác',
                'Cần lớp bảo vệ nếu dùng cho sàn chịu lực',
                'Thi công phức tạp, cần kỹ thuật cao',
                'Khó sửa chữa khi bị hư hỏng'
            ],
            applications: 'Mái nhà, sân thượng, nhà vệ sinh, tầng hầm',
            priceRange: '100.000 - 300.000đ/m²'
        },
        penetrative: {
            title: 'Hóa chất thẩm thấu (Silicate, Silane)',
            description: 'Hóa chất thấm sâu vào bề mặt, tạo lớp chống thấm từ bên trong',
            advantages: [
                'Không thay đổi bề mặt ban đầu',
                'Thấm sâu, chống thấm từ gốc',
                'Dễ thi công, ít ảnh hưởng công trình',
                'Chi phí hợp lý',
                'Phù hợp cho tường cũ'
            ],
            disadvantages: [
                'Hiệu quả phụ thuộc vào chất lượng thi công',
                'Không phù hợp cho vết nứt lớn',
                'Cần thời gian khô ráo lâu',
                'Khó kiểm soát độ thấm đều'
            ],
            applications: 'Tường bê tông, tường gạch, móng nhà',
            priceRange: '50.000 - 150.000đ/m²'
        },
        crystalline: {
            title: 'Chống thấm tinh thể (Crystalline)',
            description: 'Tạo tinh thể bên trong bê tông, tự động hàn gắn vết nứt nhỏ',
            advantages: [
                'Tự động hàn gắn vết nứt nhỏ',
                'Thấm sâu vào cấu trúc bê tông',
                'Không cần bảo trì định kỳ',
                'Chống thấm vĩnh viễn',
                'An toàn cho sức khỏe'
            ],
            disadvantages: [
                'Chi phí cao',
                'Chỉ hiệu quả với bê tông',
                'Thời gian phản ứng lâu',
                'Cần độ ẩm để kích hoạt'
            ],
            applications: 'Bể nước ngầm, tầng hầm, công trình bê tông',
            priceRange: '200.000 - 500.000đ/m²'
        },
        injection: {
            title: 'Chống thấm áp lực cao (Injection)',
            description: 'Bơm hóa chất vào vết nứt dưới áp lực cao',
            advantages: [
                'Xử lý được vết nứt sâu',
                'Hiệu quả ngay lập tức',
                'Không cần phá dỡ nhiều',
                'Phù hợp cho công trình đang sử dụng'
            ],
            disadvantages: [
                'Chi phí thiết bị cao',
                'Cần kỹ thuật chuyên sâu',
                'Khó tiếp cận một số vị trí',
                'Có thể cần làm nhiều lần'
            ],
            applications: 'Vết nứt tường, móng, hầm chung cư',
            priceRange: '300.000 - 800.000đ/m'
        }
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Xử lý chống thấm không triệt để',
            cause: 'Chỉ xử lý bề mặt, không tìm và xử lý nguồn gốc thấm',
            solution: 'Bóc lớp cũ, tìm nguồn thấm, xử lý triệt để từ gốc',
            prevention: 'Khảo sát kỹ lưỡng, xử lý đúng nguyên nhân',
            icon: 'fa-tint'
        },
        {
            issue: 'Không xử lý điểm tiếp giáp (ống, khe)',
            cause: 'Bỏ sót các điểm yếu: ống thủng tường, khe co giãn',
            solution: 'Xử lý chi tiết bằng băng keo chuyên dụng và sealant',
            prevention: 'Kiểm tra toàn bộ điểm giao kết, dùng vật liệu chuyên dụng',
            icon: 'fa-compress-arrows-alt'
        },
        {
            issue: 'Màng chống thấm không đều độ dày',
            cause: 'Quét hoặc phun không đều, thiếu kinh nghiệm',
            solution: 'Kiểm tra độ dày, quét lại những vùng mỏng',
            prevention: 'Thi công theo đúng quy trình, kiểm soát chất lượng',
            icon: 'fa-layer-group'
        },
        {
            issue: 'Tái thấm sau thời gian ngắn',
            cause: 'Vật liệu kém chất lượng hoặc không phù hợp',
            solution: 'Thay thế bằng vật liệu chất lượng cao, đúng kỹ thuật',
            prevention: 'Chọn vật liệu uy tín, phù hợp với điều kiện thực tế',
            icon: 'fa-redo'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Sợ xử lý chống thấm tốn kém liên tục',
            description: 'Lo ngại phải sửa chữa nhiều lần mà không triệt để',
            solution: 'Cam kết xử lý triệt để từ gốc, bảo hành rõ ràng, hỗ trợ lâu dài'
        },
        {
            concern: 'Lo lắng về ảnh hưởng sức khỏe',
            description: 'Sợ ẩm mốc, nấm gây hại cho gia đình',
            solution: 'Sử dụng vật liệu an toàn, xử lý kháng khuẩn, thông gió tốt'
        },
        {
            concern: 'Muốn giải pháp lâu dài, ít bảo trì',
            description: 'Cần giải pháp bền vững, không phải quan tâm thường xuyên',
            solution: 'Tư vấn giải pháp phù hợp, vật liệu chất lượng cao, bảo hành dài hạn'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Kiểm tra và xác định nguồn thấm',
            description: 'Khảo sát kỹ lưỡng để tìm nguyên nhân và vị trí thấm chính xác',
            duration: '0.5-1 ngày',
            tools: 'Máy đo độ ẩm, camera nội soi, thiết bị phát hiện rò rỉ'
        },
        {
            step: 2,
            title: 'Phá bỏ lớp hư hỏng',
            description: 'Bóc bỏ lớp sơn, vữa bị hỏng để lộ bề mặt cần xử lý',
            duration: '0.5-1 ngày',
            tools: 'Máy khoan, máy mài, dụng cụ phá dỡ'
        },
        {
            step: 3,
            title: 'Làm sạch và xử lý bề mặt',
            description: 'Vệ sinh sạch sẽ, xử lý vết nứt, tạo bề mặt thích hợp',
            duration: '0.5 ngày',
            tools: 'Máy rửa áp lực cao, hóa chất tẩy rửa'
        },
        {
            step: 4,
            title: 'Lựa chọn và thi công giải pháp chống thấm',
            description: 'Áp dụng phương pháp phù hợp: màng, hóa chất, hoặc kết hợp',
            duration: '1-3 ngày',
            tools: 'Vật liệu chống thấm, máy phun, dụng cụ thi công'
        },
        {
            step: 5,
            title: 'Xử lý chi tiết và điểm yếu',
            description: 'Chú ý đặc biệt đến góc tường, ống thủng, khe co giãn',
            duration: '0.5-1 ngày',
            tools: 'Băng keo chuyên dụng, sealant, vật liệu trám'
        },
        {
            step: 6,
            title: 'Kiểm tra bằng nước thử',
            description: 'Test bằng cách tạo ao nước để kiểm tra hiệu quả chống thấm',
            duration: '1-2 ngày',
            tools: 'Nước, ống thủy, thiết bị đo'
        },
        {
            step: 7,
            title: 'Hoàn thiện bề mặt và bảo hành',
            description: 'Sơn lại, lát gạch hoặc hoàn thiện theo yêu cầu',
            duration: '1-2 ngày',
            tools: 'Vật liệu hoàn thiện, dụng cụ thi công'
        }
    ];

    // Areas of application
    const applications = [
        {
            area: 'Nhà vệ sinh',
            problem: 'Thấm nước do sử dụng liên tục',
            solution: 'Màng chống thấm + xử lý góc tường',
            features: 'Chống thấm 100%, kháng hóa chất',
            icon: 'fa-shower'
        },
        {
            area: 'Mái nhà',
            problem: 'Thấm mưa, nước đọng',
            solution: 'Màng chống thấm chuyên dụng cho mái',
            features: 'Chịu UV, chống nứt, thoát nước tốt',
            icon: 'fa-home'
        },
        {
            area: 'Tường bên ngoài',
            problem: 'Thấm mưa, ẩm mốc',
            solution: 'Hóa chất thẩm thấu hoặc màng',
            features: 'Thẩm mỹ, bảo vệ kết cấu',
            icon: 'fa-building'
        },
        {
            area: 'Tầng hầm',
            problem: 'Áp lực nước ngầm',
            solution: 'Chống thấm tinh thể + injection',
            features: 'Chịu áp lực cao, tự phục hồi',
            icon: 'fa-arrow-down'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Chống thấm có thể vĩnh viễn không?',
            answer: 'Không có giải pháp chống thấm vĩnh viễn 100%. Tuổi thọ phụ thuộc vào vật liệu, kỹ thuật thi công và điều kiện sử dụng, thường 5-20 năm.'
        },
        {
            id: 2,
            question: 'Chi phí xử lý chống thấm là bao nhiêu?',
            answer: 'Tùy diện tích và mức độ hư hỏng, từ 50.000-800.000đ/m². Xử lý sớm sẽ tiết kiệm chi phí hơn để lâu.'
        },
        {
            id: 3,
            question: 'Bao lâu nên kiểm tra chống thấm lại?',
            answer: 'Nên kiểm tra định kỳ 6-12 tháng/lần, đặc biệt sau mùa mưa để phát hiện sớm các dấu hiệu hư hỏng.'
        },
        {
            id: 4,
            question: 'Có thể chống thấm từ bên ngoài không?',
            answer: 'Có, chống thấm từ bên ngoài thường hiệu quả hơn vì ngăn nước từ nguồn. Tuy nhiên cần đánh giá cụ thể từng trường hợp.'
        },
        {
            id: 5,
            question: 'Thời gian bảo hành chống thấm như thế nào?',
            answer: 'Thường 12-36 tháng tùy phương pháp và vật liệu. Màng chống thấm cao cấp có thể bảo hành lên đến 5 năm.'
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
                            <h1>🛡️ Thi Công Chống Thấm Chuyên Nghiệp</h1>
                            <p className="hero-subtitle">
                                Xử lý chống thấm tường, sàn, mái, nhà vệ sinh - Bảo vệ công trình bền lâu
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">3-7</span>
                                    <span className="stat-label">Ngày xử lý</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-36</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Phương pháp chính</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao chống thấm quan trọng?</h2>
                            <p>
                                Chống thấm là hạng mục <strong>bảo vệ kết cấu và thẩm mỹ công trình</strong>.
                                Xử lý triệt để giúp tránh ẩm mốc, bong tróc và các hư hỏng nặng về sau.
                            </p>
                            <p>
                                Việc <strong>phát hiện sớm và xử lý đúng phương pháp</strong> sẽ tiết kiệm
                                chi phí đáng kể so với việc để lâu dần thành hư hỏng nghiêm trọng.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Waterproof Materials */}
                <section className="materials-section">
                    <div className="container">
                        <h2>Các phương pháp chống thấm phổ biến</h2>
                        <div className="material-tabs">
                            <button
                                className={`tab-button ${activeMaterial === 'membrane' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('membrane')}
                            >
                                Màng chống thấm
                            </button>
                            <button
                                className={`tab-button ${activeMaterial === 'penetrative' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('penetrative')}
                            >
                                Hóa chất thẩm thấu
                            </button>
                            <button
                                className={`tab-button ${activeMaterial === 'crystalline' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('crystalline')}
                            >
                                Chống thấm tinh thể
                            </button>
                            <button
                                className={`tab-button ${activeMaterial === 'injection' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('injection')}
                            >
                                Áp lực cao
                            </button>
                        </div>

                        {Object.keys(waterproofMaterials).map(material => (
                            <div
                                key={material}
                                className={`material-panel ${activeMaterial === material ? 'active' : 'hidden'}`}
                            >
                                <h3>{waterproofMaterials[material].title}</h3>
                                <p className="material-description">{waterproofMaterials[material].description}</p>

                                <div className="material-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {waterproofMaterials[material].advantages.map((advantage, index) => (
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
                                            {waterproofMaterials[material].disadvantages.map((disadvantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-minus"></i>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="material-details">
                                    <div className="detail-item">
                                        <strong>Ứng dụng:</strong> {waterproofMaterials[material].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Chi phí:</strong> {waterproofMaterials[material].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Applications by Area */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Ứng dụng chống thấm theo khu vực</h2>
                        <div className="applications-grid">
                            {applications.map((app, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className={`fas ${app.icon}`}></i>
                                    </div>
                                    <h3>{app.area}</h3>
                                    <p><strong>Vấn đề:</strong> {app.problem}</p>
                                    <p><strong>Giải pháp:</strong> {app.solution}</p>
                                    <p><strong>Đặc điểm:</strong> {app.features}</p>
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
                        <h2>Quy trình xử lý chống thấm chuyên nghiệp</h2>
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
                            <h2>Khảo sát chống thấm miễn phí</h2>
                            <p>
                                Gọi LinHome để được <strong>khảo sát hiện trạng chống thấm miễn phí</strong>
                                và nhận phương án <strong>xử lý triệt để, bảo hành dài hạn</strong>.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Hotline: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-search"></i>
                                    Khảo sát miễn phí
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default ChongThamPage;