// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

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
                'Chống tia UV',
                'Chịu nhiệt tốt'
            ],
            applications: [
                { type: 'Mái sân thượng', price: '180-280K', method: 'Màng khò nóng' },
                { type: 'Sàn WC', price: '120-180K', method: 'Vữa + màng' },
                { type: 'Ban công', price: '150-220K', method: 'Sơn PU' }
            ],
            bgColor: '#0ea5e9'
        },
        {
            id: 'basement',
            name: 'Chống Thấm Ngược',
            price: '220,000 - 380,000 VNĐ/m²',
            description: 'Chống thấm từ bên trong tầng hầm, hầm xe, công trình ngầm',
            features: [
                'Hệ chống thấm áp lực ngược',
                'Kháng áp lực nước cao',
                'Keo chuyên dụng Sikadur',
                'Bảo hành 5-7 năm',
                'Không cần đào bới',
                'Thi công nhanh'
            ],
            applications: [
                { type: 'Tầng hầm', price: '220-320K', method: 'Crystalline' },
                { type: 'Hầm xe', price: '250-350K', method: 'Epoxy injection' },
                { type: 'Hố thang máy', price: '280-380K', method: 'Membrane system' }
            ],
            bgColor: '#7c3aed'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Tìm Nguyên Nhân',
            description: 'Kiểm tra kỹ nguồn gốc thấm dột, đánh giá mức độ hư hỏng',
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

    // Waterproofing materials/brands
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
            warranty: '5-7 năm',
            icon: 'fas fa-award'
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
            warranty: '3-5 năm',
            icon: 'fas fa-certificate'
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
            warranty: '3-5 năm',
            icon: 'fas fa-medal'
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
            answer: 'Nếu thi công đúng kỹ thuật và sử dụng vật liệu chất lượng, chống thấm có thể bền 5-10 năm. Cần bảo dưỡng định kỳ và kiểm tra hàng năm, đặc biệt sau mùa mưa.'
        },
        {
            question: 'Tại sao nhà vẫn thấm sau khi đã chống thấm?',
            answer: 'Có thể do: chưa xử lý triệt để nguyên nhân, chất lượng vật liệu kém, thi công không đúng kỹ thuật, hoặc có vết nứt mới xuất hiện do lún móng. Cần khảo sát lại để tìm nguyên nhân.'
        },
        {
            question: 'Chi phí chống thấm toàn bộ nhà bao nhiêu?',
            answer: 'Nhà 4 tầng (80m²/tầng): mái + sân thượng khoảng 15-25 triệu, tường ngoài 10-18 triệu, phòng tắm 3-5 triệu/phòng, tùy vào mức độ hư hỏng và vật liệu sử dụng.'
        },
        {
            question: 'Có cần đục phá để chống thấm không?',
            answer: 'Tùy mức độ hư hỏng. Chống thấm ngoài chỉ cần làm sạch bề mặt. Chống thấm trong (như phòng tắm) có thể cần đục bỏ lớp hoàn thiện cũ để xử lý tận gốc.'
        },
        {
            question: 'Thời gian thi công chống thấm mất bao lâu?',
            answer: 'Mái sân thượng 60m²: 3-5 ngày. Tường ngoài: 5-7 ngày. Phòng tắm: 3-4 ngày. Tầng hầm: 7-15 ngày. Bao gồm cả thời gian khô và dưỡng hộ vật liệu.'
        },
        {
            question: 'Có thể tự chống thấm được không?',
            answer: 'Có thể với các vị trí đơn giản như tường trong nhà. Tuy nhiên, các vị trí quan trọng như mái, tầng hầm, sàn nhà vệ sinh nên thuê thợ chuyên nghiệp để đảm bảo chất lượng và có bảo hành.'
        }
    ];

    const currentType = waterproofTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-droplet icon-water"></i>
                        Báo Giá Chống Thấm
                    </h1>
                    <p className="section-subtitle">
                        Thi công chống thấm tường, mái, sàn, tầng hầm chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-safety"></i>
                            <span>Bảo Vệ Công Trình</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Bảo Hành Dài Hạn</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Thợ Chuyên Nghiệp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-check-circle icon-quality"></i>
                            <span>Cam Kết Chất Lượng</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Waterproofing Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Hình Chống Thấm & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        Giải pháp chống thấm cho từng vị trí cụ thể
                    </p>

                    {/* Tabs */}
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

                    {/* Detail Card */}
                    {currentType && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}
                            >
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                {/* Features Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Applications Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-home"></i> Ứng dụng & giá:</h4>
                                    <div className="item-list">
                                        {currentType.applications.map((app, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{app.type}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">Phương pháp: {app.method}</span>
                                                    <span className="item-price-extended">{app.price}/m²</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary">
                                        <i className="fas fa-phone"></i>
                                        Liên Hệ Báo Giá
                                    </a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                        <i className="fas fa-calculator"></i>
                                        Tính Chi Phí
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Installation Process */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-process"></i>
                        Quy Trình Thi Công
                    </h2>
                    <p className="section-subtitle">
                        5 bước chống thấm đảm bảo chất lượng
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

            {/* Materials/Brands */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-box icon-materials"></i>
                        Vật Liệu Chống Thấm
                    </h2>
                    <p className="section-subtitle">
                        Các thương hiệu uy tín trên thị trường
                    </p>

                    <div className="grid-3">
                        {materials.map((material, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={material.icon}></i>
                                    {material.brand}
                                </h3>
                                <p className="subtitle">Bảo hành: {material.warranty}</p>
                                <h4>Sản phẩm:</h4>
                                <ul>
                                    {material.products.map((product, i) => (
                                        <li key={i}>
                                            <i className="fas fa-box"></i>
                                            {product}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Ưu điểm:</h4>
                                <div className="tags">
                                    {material.pros.map((pro, i) => (
                                        <span key={i} className="tag">{pro}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Problems */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-wrench icon-construction"></i>
                        Vấn Đề Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Nguyên nhân và giải pháp chống thấm
                    </p>

                    <div className="grid-4">
                        {commonProblems.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={item.icon}></i>
                                    {item.problem}
                                </h3>
                                <h4>Nguyên nhân:</h4>
                                <ul>
                                    {item.causes.map((cause, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {cause}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Giải pháp:</h4>
                                <p>{item.solution}</p>
                                <span className="standard">Chi phí: {item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về chống thấm
                    </p>

                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <i className="fas fa-chevron-down"></i>
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