// src/pages/thi-cong/nhom-kinh.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';

const NhomKinhPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeSystem, setActiveSystem] = useState('system55');

    // Aluminum glass systems
    const aluminumSystems = {
        system55: {
            title: 'Hệ 55 (Cửa sổ - Cửa đi)',
            profile: '55mm',
            glassThickness: '5-6mm',
            applications: 'Cửa sổ, cửa đi thông thường',
            advantages: [
                'Giá thành hợp lý',
                'Phù hợp diện tích vừa và nhỏ',
                'Lắp đặt đơn giản',
                'Bảo trì dễ dàng'
            ],
            priceRange: '800.000 - 1.200.000đ/m²'
        },
        system65: {
            title: 'Hệ 65 (Cửa sổ cao cấp)',
            profile: '65mm',
            glassThickness: '6-8mm',
            applications: 'Cửa sổ cao tầng, cửa ban công',
            advantages: [
                'Cách âm tốt hơn hệ 55',
                'Chịu được áp lực gió cao',
                'Khả năng chống thấm tốt',
                'Phù hợp cao ốc, chung cư'
            ],
            priceRange: '1.000.000 - 1.600.000đ/m²'
        },
        system100: {
            title: 'Hệ 100 (Mặt dựng)',
            profile: '100mm',
            glassThickness: '8-12mm',
            applications: 'Mặt dựng tòa nhà, showroom',
            advantages: [
                'Chịu lực cao, an toàn',
                'Cách nhiệt, cách âm tối ưu',
                'Thẩm mỹ hiện đại',
                'Phù hợp công trình lớn'
            ],
            priceRange: '1.500.000 - 2.500.000đ/m²'
        }
    };

    // Material features
    const materialFeatures = {
        advantages: [
            'Nhẹ, bền, chống ăn mòn tự nhiên',
            'Nhiều hệ profile để lựa chọn',
            'Kết hợp kính an toàn đa dạng',
            'Khả năng cách âm, cách nhiệt tốt',
            'Thẩm mỹ hiện đại, sang trọng',
            'Tuổi thọ cao, ít bảo trì'
        ],
        considerations: [
            'Cần thi công chính xác để đảm bảo kín khít',
            'Profile rẻ có độ ổn định màu kém',
            'Kính cần chọn loại phù hợp (an toàn, cách nhiệt)',
            'Phụ kiện chất lượng ảnh hưởng đến tuổi thọ'
        ]
    };

    // Common issues and solutions
    const commonIssues = [
        {
            issue: 'Rỉ nước/thủy tạt qua khe',
            cause: 'Ron, keo kém chất lượng hoặc lắp sai độ dốc',
            solution: 'Kiểm tra, thay ron mới, xử lý keo, chỉnh lại độ dốc thoát nước',
            prevention: 'Sử dụng ron EPDM chất lượng, kiểm tra độ dốc',
            icon: 'fa-tint'
        },
        {
            issue: 'Cửa cấn, kẹt khi đóng mở',
            cause: 'Lắp không đúng cốt hoặc kính/khung không vuông',
            solution: 'Điều chỉnh bản lề, kiểm tra và chỉnh lại khung',
            prevention: 'Đo đạc chính xác, kiểm tra vuông góc',
            icon: 'fa-door-open'
        },
        {
            issue: 'Xệ cánh sau thời gian sử dụng',
            cause: 'Vít nở hoặc điểm định vị không đủ chắc',
            solution: 'Gia cố lại bản lề, tăng cường điểm bắt vít',
            prevention: 'Sử dụng phụ kiện chất lượng, bắt vít đúng kỹ thuật',
            icon: 'fa-tools'
        },
        {
            issue: 'Mất cách âm, ồn ào',
            cause: 'Khe hở lớn, ron kém hoặc kính đơn',
            solution: 'Thay ron mới, sử dụng kính hộp, điều chỉnh khe hở',
            prevention: 'Chọn hệ profile và kính cách âm phù hợp',
            icon: 'fa-volume-up'
        }
    ];

    // Customer pain points
    const customerConcerns = [
        {
            concern: 'Sợ cửa/cửa sổ rò rỉ nước, gió lọt',
            description: 'Gây tốn điện điều hòa và khó chịu khi sử dụng',
            solution: 'Cam kết kỹ thuật lắp đặt chuẩn, sử dụng ron EPDM chất lượng cao'
        },
        {
            concern: 'Lo lắng về an toàn kính',
            description: 'Kính mảnh, không chịu va đập khiến lo ngại về trẻ em',
            solution: 'Tư vấn kính an toàn (tempered, laminated), tuân thủ tiêu chuẩn'
        },
        {
            concern: 'Muốn thẩm mỹ hiện đại',
            description: 'Nhưng sợ nhanh xuống màu, mất tính thẩm mỹ',
            solution: 'Chọn profile có xử lý bề mặt tốt, bảo hành màu sắc'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát kích thước thực tế',
            description: 'Đo đạc chính xác, kiểm tra tường và vị trí lắp đặt',
            duration: '0.5 ngày',
            tools: 'Thước laser, máy đo góc'
        },
        {
            step: 2,
            title: 'Chốt profile và kính',
            description: 'Lựa chọn hệ profile (55, 65, 100...), loại kính và phụ kiện',
            duration: '1 ngày',
            tools: 'Catalog sản phẩm, mẫu profile'
        },
        {
            step: 3,
            title: 'Gia công tại xưởng',
            description: 'Cắt, gia công profile và kính theo kích thước chính xác',
            duration: '2-5 ngày',
            tools: 'Máy cắt nhôm, máy gia công kính'
        },
        {
            step: 4,
            title: 'Lắp đặt khung và kính',
            description: 'Lắp khung, lắp kính, bắt ốc, kiểm tra độ vuông',
            duration: '1-3 ngày',
            tools: 'Khoan, vít chuyên dụng, keo silicon'
        },
        {
            step: 5,
            title: 'Đóng keo và dán ron',
            description: 'Xử lý keo chống thấm, dán ron cách âm',
            duration: '0.5 ngày',
            tools: 'Súng bắn keo, ron EPDM'
        },
        {
            step: 6,
            title: 'Kiểm tra và nghiệm thu',
            description: 'Test độ kín khít, chỉnh bản lề, bàn giao',
            duration: '0.5 ngày',
            tools: 'Dụng cụ kiểm tra, máy thổi gió'
        }
    ];

    // Glass types
    const glassTypes = [
        {
            type: 'Kính cường lực (Tempered)',
            features: 'An toàn khi vỡ, chịu lực tốt',
            applications: 'Cửa chính, mặt dựng, cửa sổ lớn',
            thickness: '6-12mm',
            icon: 'fa-shield-alt'
        },
        {
            type: 'Kính nhiều lớp (Laminated)',
            features: 'An toàn cao, cách âm tốt',
            applications: 'Mặt dựng cao tầng, khu vực an ninh',
            thickness: '6.38-12.76mm',
            icon: 'fa-layer-group'
        },
        {
            type: 'Kính hộp (Double glazing)',
            features: 'Cách nhiệt, cách âm tối ưu',
            applications: 'Cửa sổ, cửa đi cao cấp',
            thickness: '20-24mm',
            icon: 'fa-snowflake'
        },
        {
            type: 'Kính phản quang',
            features: 'Chống nắng, riêng tư',
            applications: 'Mặt dựng tòa nhà, văn phòng',
            thickness: '6-8mm',
            icon: 'fa-sun'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Nhôm kính có bị oxy hóa không?',
            answer: 'Nhôm hợp kim có lớp xử lý bề mặt (anodize/sơn tĩnh điện) chống ăn mòn. Profile chất lượng thấp có thể xuống màu sau thời gian.'
        },
        {
            id: 2,
            question: 'Cửa nhôm kính có cách âm tốt không?',
            answer: 'Có thể cách âm tốt nếu kết hợp kính hộp và ron EPDM chất lượng. Hệ profile lớn hơn (65, 100) cách âm tốt hơn hệ 55.'
        },
        {
            id: 3,
            question: 'Có loại nhôm kính cho nhà mặt tiền không?',
            answer: 'Có, mặt dựng nhôm kính chuyên dụng với hệ profile 100mm trở lên, phù hợp cho tòa nhà, showroom.'
        },
        {
            id: 4,
            question: 'Thời gian thi công nhôm kính là bao lâu?',
            answer: '5-15 ngày tùy quy mô. Bao gồm thời gian gia công tại xưởng và lắp đặt tại hiện trường.'
        },
        {
            id: 5,
            question: 'Bảo hành nhôm kính như thế nào?',
            answer: '12-36 tháng tùy phụ kiện và hệ profile. Bao gồm lỗi kỹ thuật, sụt lún và hỗ trợ thay thế phụ kiện.'
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
                            <h1>🏢 Thi Công Nhôm Kính Chất Lượng Cao</h1>
                            <p className="hero-subtitle">
                                Cửa, vách, mặt dựng - Thẩm mỹ, chịu lực, cách âm, chống nóng
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5-15</span>
                                    <span className="stat-label">Ngày thi công</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Hệ profile chính</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12-36</span>
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
                            <h2>Tại sao chọn nhôm kính?</h2>
                            <p>
                                Nhôm kính là lựa chọn phổ biến cho <strong>cửa đi, cửa sổ, vách ngăn và mặt dựng</strong>
                                nhờ tính năng nhẹ, bền, dễ thi công và phong cách hiện đại.
                            </p>
                            <p>
                                Với nhiều hệ profile từ cơ bản đến cao cấp, nhôm kính phù hợp cho mọi công trình
                                từ nhà ở đến tòa nhà thương mại.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Aluminum Systems */}
                <section className="systems-section">
                    <div className="container">
                        <h2>Các hệ profile nhôm kính</h2>
                        <div className="system-tabs">
                            <button
                                className={`tab-button ${activeSystem === 'system55' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('system55')}
                            >
                                Hệ 55
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'system65' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('system65')}
                            >
                                Hệ 65
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'system100' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('system100')}
                            >
                                Hệ 100
                            </button>
                        </div>

                        {Object.keys(aluminumSystems).map(system => (
                            <div
                                key={system}
                                className={`system-panel ${activeSystem === system ? 'active' : 'hidden'}`}
                            >
                                <div className="system-header">
                                    <h3>{aluminumSystems[system].title}</h3>
                                    <div className="system-specs">
                                        <span><strong>Profile:</strong> {aluminumSystems[system].profile}</span>
                                        <span><strong>Kính:</strong> {aluminumSystems[system].glassThickness}</span>
                                        <span><strong>Giá:</strong> {aluminumSystems[system].priceRange}</span>
                                    </div>
                                </div>

                                <p><strong>Ứng dụng:</strong> {aluminumSystems[system].applications}</p>

                                <div className="system-advantages">
                                    <h4>Ưu điểm:</h4>
                                    <ul>
                                        {aluminumSystems[system].advantages.map((advantage, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {advantage}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Material Features */}
                <section className="features-section">
                    <div className="container">
                        <h2>Đặc điểm vật liệu nhôm kính</h2>
                        <div className="features-grid">
                            <div className="feature-column advantages">
                                <h3><i className="fas fa-thumbs-up"></i> Ưu điểm</h3>
                                <ul>
                                    {materialFeatures.advantages.map((advantage, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check"></i>
                                            {advantage}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-column considerations">
                                <h3><i className="fas fa-info-circle"></i> Lưu ý</h3>
                                <ul>
                                    {materialFeatures.considerations.map((consideration, index) => (
                                        <li key={index}>
                                            <i className="fas fa-exclamation"></i>
                                            {consideration}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Glass Types */}
                <section className="glass-types-section">
                    <div className="container">
                        <h2>Các loại kính sử dụng</h2>
                        <div className="glass-grid">
                            {glassTypes.map((glass, index) => (
                                <div key={index} className="glass-card">
                                    <div className="glass-icon">
                                        <i className={`fas ${glass.icon}`}></i>
                                    </div>
                                    <h3>{glass.type}</h3>
                                    <p className="glass-features">{glass.features}</p>
                                    <p><strong>Ứng dụng:</strong> {glass.applications}</p>
                                    <p><strong>Độ dày:</strong> {glass.thickness}</p>
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
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Gọi LinHome để nhận phương án nhôm kính tối ưu</h2>
                            <p>
                                Chúng tôi tư vấn giải pháp nhôm kính <strong>tối ưu về thẩm mỹ & kỹ thuật</strong>,
                                phù hợp với công năng sử dụng và ngân sách của bạn.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Hotline: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Báo giá nhôm kính
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

export default NhomKinhPage;
