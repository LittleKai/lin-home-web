// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import '../BaoGiaThiCongHangMuc.css';
import '../ConstructionDetailPages.css';

const ChongThamPage = () => {
    const [activeTab, setActiveTab] = useState('wall');
    const [activeFaq, setActiveFaq] = useState(null);

    // Waterproofing types
    const waterproofTypes = [
        {
            id: 'wall',
            name: 'Chống Thấm Tường',
            price: '85,000 - 180,000 VNĐ/m²',
            description: 'Chống thấm tường ngoài trời, phòng tắm, tầng hầm',
            features: [
                'Sơn chống thấm Sika/Kova',
                'Xử lý nứt tường chuyên sâu',
                'Bảo hành 2-3 năm',
                'Màu sắc đa dạng',
                'Kháng kiềm cao',
                'Thân thiện môi trường'
            ],
            applications: [
                { type: 'Tường ngoài', price: '85-120K', method: 'Sơn acrylic' },
                { type: 'Phòng tắm', price: '120-150K', method: 'Vữa polymer' },
                { type: 'Tầng hầm', price: '150-180K', method: 'Hệ epoxy' }
            ],
            bgColor: '#dc2626'
        },
        {
            id: 'floor-roof',
            name: 'Chống Thấm Sàn & Mái',
            price: '120,000 - 280,000 VNĐ/m²',
            description: 'Chống thấm mái sân thượng, sàn nhà vệ sinh, ban công',
            features: [
                'Màng khò nóng bitum',
                'Sơn PU đàn hồi',
                'Xử lý khe co giãn',
                'Bảo hành 3-5 năm',
                'Chống nứt cao',
                'Chống tia UV'
            ],
            applications: [
                { type: 'Mái sân thượng', price: '180-280K', method: 'Màng bitum' },
                { type: 'Sàn WC', price: '120-180K', method: 'PU liquid' },
                { type: 'Ban công', price: '150-220K', method: 'Acrylic membrane' }
            ],
            bgColor: '#059669'
        },
        {
            id: 'basement',
            name: 'Chống Thấm Tầng Hầm',
            price: '180,000 - 350,000 VNĐ/m²',
            description: 'Chống thấm ngược, chống nước ngầm cho tầng hầm',
            features: [
                'Vật liệu gốc xi măng',
                'Chống nước ngầm áp lực cao',
                'Công nghệ Crystalline',
                'Bảo hành 5 năm',
                'Thẩm thấu sâu',
                'Tự lành vết nứt nhỏ'
            ],
            applications: [
                { type: 'Tầng hầm gia đình', price: '180-250K', method: 'Xi măng polymer' },
                { type: 'Hầm xe chung cư', price: '220-300K', method: 'Crystalline + membrane' },
                { type: 'Basement cao cấp', price: '280-350K', method: 'Hệ 3 lớp' }
            ],
            bgColor: '#7c3aed'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát Tình Trạng',
            description: 'Xác định nguyên nhân thấm, mức độ hư hỏng, đề xuất giải pháp',
            duration: '0.5-1 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Xử Lý Bề Mặt',
            description: 'Vệ sinh, trám vá các vết nứt, tạo bề mặt phẳng',
            duration: '1-2 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 3,
            title: 'Thi Công Chống Thấm',
            description: 'Quét sơn, dán màng, đổ phụ gia theo đúng quy trình',
            duration: '2-5 ngày',
            icon: 'fas fa-paint-roller'
        },
        {
            step: 4,
            title: 'Kiểm Tra Nghiệm Thu',
            description: 'Phun nước thử, đảm bảo không thấm dột, kiểm tra chất lượng',
            duration: '1 ngày',
            icon: 'fas fa-check-circle'
        },
        {
            step: 5,
            title: 'Bàn Giao & Bảo Hành',
            description: 'Hoàn thiện, dọn dẹp, cam kết bảo hành rõ ràng',
            duration: '0.5 ngày',
            icon: 'fas fa-handshake'
        }
    ];

    // Waterproofing materials
    const materials = [
        {
            brand: 'Sika (Thụy Sĩ)',
            products: [
                'SikaTop Seal 107',
                'Sikaflex 221',
                'SikaProof Membrane'
            ],
            pros: ['Chất lượng cao', 'Bền lâu', 'Công nghệ tiên tiến'],
            priceRange: 'Cao',
            warranty: '5-7 năm'
        },
        {
            brand: 'Kova (Việt Nam)',
            products: [
                'Kova KV11',
                'Kova Flex 888',
                'Kova Proof'
            ],
            pros: ['Giá hợp lý', 'Phù hợp khí hậu VN', 'Hỗ trợ tốt'],
            priceRange: 'Trung bình',
            warranty: '3-5 năm'
        },
        {
            brand: 'Neomax (Hàn Quốc)',
            products: [
                'Neo Seal Plus',
                'Neo Proof 100',
                'Neo Flex Membrane'
            ],
            pros: ['Tính năng tốt', 'Giá cạnh tranh', 'Dễ thi công'],
            priceRange: 'Trung bình',
            warranty: '3-5 năm'
        }
    ];

    // Common waterproofing problems
    const commonProblems = [
        {
            problem: 'Tường Ẩm Mốc',
            causes: ['Thấm nước mưa', 'Độ ẩm cao', 'Thông gió kém'],
            solution: 'Sơn chống thấm + cải thiện thông gió',
            price: '85-150K/m²',
            icon: 'fas fa-exclamation-triangle'
        },
        {
            problem: 'Mái Nhà Dột',
            causes: ['Vật liệu xuống cấp', 'Khe co giãn', 'Thi công kém'],
            solution: 'Màng chống thấm + xử lý khe nứt',
            price: '180-280K/m²',
            icon: 'fas fa-cloud-rain'
        },
        {
            problem: 'Tầng Hầm Ngập',
            causes: ['Nước ngầm áp lực', 'Chống thấm kém', 'Thoát nước tệ'],
            solution: 'Hệ chống thấm ngược + thoát nước',
            price: '220-350K/m²',
            icon: 'fas fa-water'
        },
        {
            problem: 'Sàn WC Thấm',
            causes: ['Màng chống thấm rách', 'Khe nối ống', 'Áp lực nước'],
            solution: 'Làm lại màng + keo trám khe',
            price: '120-180K/m²',
            icon: 'fas fa-bath'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Chống thấm có bền lâu không?',
            answer: 'Nếu thi công đúng kỹ thuật và sử dụng vật liệu chất lượng, chống thấm có thể bền 5-10 năm. Cần bảo dưỡng định kỳ và kiểm tra hàng năm.'
        },
        {
            question: 'Tại sao nhà vẫn thấm sau khi đã chống thấm?',
            answer: 'Có thể do: chưa xử lý triệt để nguyên nhân, chất lượng vật liệu kém, thi công không đúng kỹ thuật, hoặc có vết nứt mới xuất hiện.'
        },
        {
            question: 'Chi phí chống thấm toàn bộ nhà bao nhiều?',
            answer: 'Nhà 4 tầng (80m²): mái + sân thượng khoảng 15-25 triệu, tường ngoài 10-18 triệu, phòng tắm 3-5 triệu/phòng.'
        },
        {
            question: 'Có cần đục phá để chống thấm không?',
            answer: 'Tùy mức độ hư hỏng. Chống thấm ngoài chỉ cần làm sạch bề mặt. Chống thấm trong có thể cần đục bỏ lớp hoàn thiện cũ.'
        }
    ];

    const currentType = waterproofTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🧱 Báo Giá Thi Công Chống Thấm 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết chống thấm tường, sàn, mái, tầng hầm 
                            tại Hà Nội & Nha Trang. Hiệu quả - Bền lâu - Giá hợp lý.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Chống Thấm Triệt Để</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-award"></i>
                                <span>Vật Liệu Chính Hãng</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-tools"></i>
                                <span>Thi Công Chuyên Nghiệp</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-clock"></i>
                                <span>Bảo Hành 2-5 Năm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Waterproofing Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🛡️ Loại Chống Thấm & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 loại chống thấm chuyên biệt cho từng hạng mục
                    </p>

                    <div className="tabs">
                        {waterproofTypes.map(type => (
                            <button
                                key={type.id}
                                className={`tab ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="waterproof-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Đặc điểm:</h4>
                                    <ul className="features-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="applications-section">
                                    <h4>🏠 Ứng dụng & giá:</h4>
                                    <div className="applications-list">
                                        {currentType.applications.map((app, index) => (
                                            <div key={index} className="application-item">
                                                <div className="app-type">{app.type}</div>
                                                <div className="app-method">{app.method}</div>
                                                <div className="app-price">{app.price}/m²</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-actions">
                                <a href="/lien-he" className="btn btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Liên Hệ Báo Giá
                                </a>
                                <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                    <i className="fas fa-search"></i>
                                    Khảo Sát Miễn Phí
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Common Problems */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">⚠️ Vấn Đề Thấm Thường Gặp</h2>
                    <p className="section-subtitle">
                        Các vấn đề thấm dột phổ biến và giải pháp xử lý
                    </p>

                    <div className="problems-grid grid-4">
                        {commonProblems.map((problem, index) => (
                            <div key={index} className="problem-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={problem.icon}></i>
                                        {problem.problem}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="causes">
                                        <h4>🔍 Nguyên nhân:</h4>
                                        <ul>
                                            {problem.causes.map((cause, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {cause}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="solution">
                                        <h4>💡 Giải pháp:</h4>
                                        <p>{problem.solution}</p>
                                    </div>
                                    <div className="problem-price">
                                        <strong>{problem.price}</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Thi Công</h2>
                    <p className="section-subtitle">
                        5 bước thi công chống thấm chuyên nghiệp
                    </p>

                    <div className="process-timeline">
                        {installationSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={step.icon}></i>
                                    <span>{step.step}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration">
                                        <i className="far fa-clock"></i>
                                        {step.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Comparison */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🧪 So Sánh Vật Liệu</h2>
                    <p className="section-subtitle">
                        So sánh các thương hiệu vật liệu chống thấm uy tín
                    </p>

                    <div className="materials-grid grid-3">
                        {materials.map((material, index) => (
                            <div key={index} className="material-card card">
                                <div className="card-header">
                                    <h3>{material.brand}</h3>
                                    <div className="price-range">Giá: {material.priceRange}</div>
                                    <div className="warranty">BH: {material.warranty}</div>
                                </div>
                                <div className="card-body">
                                    <div className="products">
                                        <h4>📦 Sản phẩm:</h4>
                                        <ul>
                                            {material.products.map((product, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-box"></i>
                                                    {product}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pros">
                                        <h4>👍 Ưu điểm:</h4>
                                        <div className="tags">
                                            {material.pros.map((pro, i) => (
                                                <span key={i} className="tag">{pro}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Thường Gặp</h2>
                    
                    <div className="faq-list">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button 
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default ChongThamPage;
