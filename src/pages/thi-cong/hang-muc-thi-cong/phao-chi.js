// src/pages/thi-cong/phao-chi.js
import React, { useState } from 'react';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const PhaoChiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeMaterial, setActiveMaterial] = useState('pu');

    // Phào chỉ materials
    const phaoChiMaterials = {
        pu: {
            title: 'Phào chỉ PU (Polyurethane)',
            description: 'Phào chỉ PU cao cấp, chống ẩm, bền bỉ',
            advantages: [
                'Chống ẩm và chống nước tuyệt đối',
                'Không bị mối mọt, côn trùng',
                'Bề mặt mịn, dễ sơn và hoàn thiện',
                'Nhẹ, dễ lắp đặt',
                'Không co giãn, không nứt theo thời gian',
                'Đa dạng mẫu mã và kích thước'
            ],
            disadvantages: [
                'Giá thành cao hơn thạch cao',
                'Cứng hơn, khó điều chỉnh khi lắp',
                'Cần keo dán chuyên dụng',
                'Khó sửa chữa khi bị hỏng'
            ],
            applications: 'Phòng tắm, bếp, khu vực ẩm ướt, nội thất cao cấp',
            priceRange: '80.000 - 300.000đ/m',
            lifespan: '15-20 năm'
        },
        ps: {
            title: 'Phào chỉ PS (Polystyrene)',
            description: 'Phào chỉ PS giá rẻ, phù hợp trang trí cơ bản',
            advantages: [
                'Giá thành rẻ, phù hợp ngân sách',
                'Nhẹ, dễ cắt và lắp đặt',
                'Đa dạng mẫu mã',
                'Phù hợp trang trí tạm thời',
                'Có thể sơn màu theo yêu cầu'
            ],
            disadvantages: [
                'Độ bền thấp, dễ gãy',
                'Không chịu ẩm tốt',
                'Dễ bị côn trùng phá hoại',
                'Bề mặt có thể bị lõm khi va đập',
                'Tuổi thọ ngắn'
            ],
            applications: 'Phòng khách, phòng ngủ khô ráo, trang trí tạm thời',
            priceRange: '20.000 - 80.000đ/m',
            lifespan: '3-5 năm'
        },
        plaster: {
            title: 'Phào chỉ thạch cao',
            description: 'Phào chỉ thạch cao truyền thống, dễ tạo hình',
            advantages: [
                'Dễ tạo hình theo yêu cầu riêng',
                'Có thể gia công chi tiết phức tạp',
                'Giá hợp lý cho chi tiết lớn',
                'Có thể sửa chữa khi hư hỏng',
                'Phù hợp phong cách cổ điển',
                'Thi công tại chỗ linh hoạt'
            ],
            disadvantages: [
                'Nặng, cần điểm bắt chắc chắn',
                'Dễ vỡ khi va đập',
                'Không chịu ẩm, dễ nấm mốc',
                'Mối nối dễ bị nứt',
                'Cần kỹ thuật cao để hoàn thiện đẹp'
            ],
            applications: 'Phòng khách, sảnh lớn, công trình cổ điển',
            priceRange: '50.000 - 200.000đ/m',
            lifespan: '8-15 năm'
        }
    };

    // Common issues
    const commonIssues = [
        {
            issue: 'Mối nối phào chỉ lộ vết',
            cause: 'Ghép nối không chuẩn, bả kém chất lượng',
            solution: 'Tháo ghép lại, dùng keo chuyên dụng, bả mối nối kỹ',
            prevention: 'Cắt góc chính xác, sử dụng keo và bả chuyên dụng',
            icon: 'fa-cut'
        },
        {
            issue: 'Phào chỉ rơi hoặc bị nhúng',
            cause: 'Định vị kém, keo không đủ hoặc điểm bắt yếu',
            solution: 'Gia cố lại bằng vít và keo chất lượng cao',
            prevention: 'Kiểm tra bề mặt dán, dùng keo phù hợp với vật liệu',
            icon: 'fa-anchor'
        },
        {
            issue: 'Phai màu sau khi sơn',
            cause: 'Bề mặt chưa xử lý kỹ, sơn kém chất lượng',
            solution: 'Làm sạch, sơn lót chuyên dụng, dùng sơn chất lượng',
            prevention: 'Xử lý bề mặt đúng cách, chọn sơn phù hợp',
            icon: 'fa-palette'
        },
        {
            issue: 'Phào chỉ bị cong vênh',
            cause: 'Độ ẩm không đều, vật liệu kém chất lượng',
            solution: 'Thay bằng vật liệu chống ẩm tốt hơn',
            prevention: 'Chọn vật liệu phù hợp với điều kiện môi trường',
            icon: 'fa-wave-square'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Muốn không gian đẹp nhưng ngại chi phí',
            description: 'Cân nhắc giữa thẩm mỹ và ngân sách cho chi tiết trang trí',
            solution: 'Tư vấn lựa chọn vật liệu phù hợp ngân sách, ưu tiên điểm nhấn quan trọng'
        },
        {
            concern: 'Sợ phào chỉ dễ hỏng, bong tróc',
            description: 'Lo lắng về độ bền và chất lượng sau thời gian sử dụng',
            solution: 'Cam kết sử dụng vật liệu chất lượng, thi công đúng kỹ thuật, bảo hành rõ ràng'
        },
        {
            concern: 'Ngại thời gian thi công kéo dài',
            description: 'Sợ việc trang trí chi tiết làm ảnh hưởng đến tiến độ tổng thể',
            solution: 'Quy trình thi công nhanh gọn, sắp xếp hợp lý trong tổng thể dự án'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Tư vấn mẫu và đo đạc',
            description: 'Chọn mẫu phào chỉ phù hợp phong cách, đo đạc vị trí lắp đặt',
            duration: '0.5 ngày',
            tools: 'Catalog mẫu, thước đo, máy đo góc'
        },
        {
            step: 2,
            title: 'Chuẩn bị và gia công',
            description: 'Cắt phào chỉ theo kích thước, gia công góc và mối nối',
            duration: '0.5-1 ngày',
            tools: 'Máy cắt góc, dụng cụ gia công'
        },
        {
            step: 3,
            title: 'Xử lý bề mặt tường',
            description: 'Làm sạch tường, xử lý không bằng phẳng nếu cần',
            duration: '0.5 ngày',
            tools: 'Giấy nhám, dụng cụ làm sạch'
        },
        {
            step: 4,
            title: 'Lắp đặt phào chỉ',
            description: 'Dán phào chỉ, xử lý mối nối, kiểm tra độ thẳng',
            duration: '1-2 ngày',
            tools: 'Keo dán chuyên dụng, đinh nhỏ, thước thủy'
        },
        {
            step: 5,
            title: 'Bả mịn và xử lý mối nối',
            description: 'Bả các mối nối, mài mịn để chuẩn bị sơn',
            duration: '0.5-1 ngày',
            tools: 'Bột bả, giấy nhám mịn'
        },
        {
            step: 6,
            title: 'Sơn hoàn thiện',
            description: 'Sơn lót và sơn màu theo yêu cầu, kiểm tra chất lượng',
            duration: '1 ngày',
            tools: 'Sơn lót, sơn màu, cọ, lăn'
        }
    ];

    // Style applications
    const styleApplications = [
        {
            style: 'Phong cách cổ điển',
            features: 'Hoa văn phức tạp, chi tiết cầu kỳ',
            materials: 'Thạch cao hoặc PU cao cấp',
            areas: 'Sảnh, phòng khách, phòng ăn',
            icon: 'fa-crown'
        },
        {
            style: 'Phong cách hiện đại',
            features: 'Đường nét đơn giản, tối giản',
            materials: 'PU hoặc PS đơn giản',
            areas: 'Căn hộ hiện đại, văn phòng',
            icon: 'fa-square'
        },
        {
            style: 'Phong cách tân cổ điển',
            features: 'Kết hợp cổ điển và hiện đại',
            materials: 'PU với thiết kế vừa phải',
            areas: 'Biệt thự, nhà phố cao cấp',
            icon: 'fa-balance-scale'
        },
        {
            style: 'Phong cách tối giản',
            features: 'Trang trí tối thiểu, nhấn mạnh không gian',
            materials: 'PS hoặc PU đơn giản',
            areas: 'Studio, loft, không gian mở',
            icon: 'fa-minus'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Phào chỉ PU hay thạch cao bền hơn?',
            answer: 'Phào chỉ PU bền hơn và chống ẩm tốt hơn thạch cao, đặc biệt phù hợp cho môi trường ẩm ướt.'
        },
        {
            id: 2,
            question: 'Phào chỉ có thể sơn màu khác được không?',
            answer: 'Có thể sơn được sau khi xử lý bề mặt bằng sơn lót chuyên dụng. Nên chọn sơn chất lượng cao để độ bền màu tốt.'
        },
        {
            id: 3,
            question: 'Thời gian thi công phào chỉ là bao lâu?',
            answer: '2-7 ngày tùy độ phức tạp và diện tích. Phào chỉ đơn giản có thể hoàn thành trong 2-3 ngày.'
        },
        {
            id: 4,
            question: 'Bảo hành phào chỉ như thế nào?',
            answer: '12-24 tháng tùy vật liệu và hạng mục. PU thường bảo hành lâu hơn PS và thạch cao.'
        },
        {
            id: 5,
            question: 'Chi phí thi công phào chỉ như thế nào?',
            answer: 'Tùy chất liệu và độ phức tạp: PS 20-80k/m, PU 80-300k/m, thạch cao 50-200k/m.'
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🎨 Thi Công Phào Chỉ Trang Trí</h1>
                            <p className="hero-subtitle">
                                PU, PS, thạch cao - Tạo điểm nhấn sang trọng cho trần, tường, nội thất
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">2-7</span>
                                    <span className="stat-label">Ngày thi công</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Chất liệu chính</span>
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
                            <h2>Phào chỉ - Điểm nhấn hoàn hảo cho nội thất</h2>
                            <p>
                                Phào chỉ là chi tiết trang trí giúp <strong>nâng tầm thẩm mỹ nội thất</strong>,
                                từ phong cách cổ điển cầu kỳ đến hiện đại tối giản.
                            </p>
                            <p>
                                Với đa dạng chất liệu PU, PS, thạch cao, phào chỉ có thể <strong>biến hóa linh hoạt</strong>
                                phù hợp với mọi phong cách thiết kế và ngân sách.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Material Comparison */}
                <section className="materials-section">
                    <div className="container">
                        <h2>So sánh các chất liệu phào chỉ</h2>
                        <div className="material-tabs">
                            <button
                                className={`tab-button ${activeMaterial === 'pu' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('pu')}
                            >
                                PU (Polyurethane)
                            </button>
                            <button
                                className={`tab-button ${activeMaterial === 'ps' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('ps')}
                            >
                                PS (Polystyrene)
                            </button>
                            <button
                                className={`tab-button ${activeMaterial === 'plaster' ? 'active' : ''}`}
                                onClick={() => setActiveMaterial('plaster')}
                            >
                                Thạch cao
                            </button>
                        </div>

                        {Object.keys(phaoChiMaterials).map(material => (
                            <div
                                key={material}
                                className={`material-panel ${activeMaterial === material ? 'active' : 'hidden'}`}
                            >
                                <h3>{phaoChiMaterials[material].title}</h3>
                                <p className="material-description">{phaoChiMaterials[material].description}</p>

                                <div className="material-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {phaoChiMaterials[material].advantages.map((advantage, index) => (
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
                                            {phaoChiMaterials[material].disadvantages.map((disadvantage, index) => (
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
                                        <strong>Ứng dụng:</strong> {phaoChiMaterials[material].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Chi phí:</strong> {phaoChiMaterials[material].priceRange}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Tuổi thọ:</strong> {phaoChiMaterials[material].lifespan}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style Applications */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Ứng dụng phào chỉ theo phong cách</h2>
                        <div className="applications-grid">
                            {styleApplications.map((app, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className={`fas ${app.icon}`}></i>
                                    </div>
                                    <h3>{app.style}</h3>
                                    <p><strong>Đặc điểm:</strong> {app.features}</p>
                                    <p><strong>Vật liệu:</strong> {app.materials}</p>
                                    <p><strong>Khu vực:</strong> {app.areas}</p>
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
                        <h2>Quy trình thi công phào chỉ</h2>
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

    );
};

export default PhaoChiPage;