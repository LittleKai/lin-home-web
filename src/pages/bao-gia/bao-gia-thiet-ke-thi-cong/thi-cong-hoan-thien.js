import React, { useState } from 'react';
import '../BaoGiaThietKeThiCongNha.css';

const BaoGiaThiCongHoanThienPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    // Finishing construction pricing data
    const finishingPricing = [
        {
            title: "Nhà phố - nhà ống",
            price: "2,500,000 - 3,200,000 VNĐ/m²",
            description: "Hoàn thiện cơ bản, sơn bả, ốp lát, cửa đi, cửa sổ",
            includes: [
                "Trát tường, sơn nước ngoài trời",
                "Ốp lát gạch ceramic 60x60",
                "Trần thạch cao phẳng đơn giản",
                "Cửa gỗ composite, cửa sổ nhôm",
                "Hệ thống điện - nước hoàn chỉnh"
            ],
            materials: ["Gạch Ceramic", "Sơn Dulux", "Cửa composite", "Trần thạch cao"],
            icon: "fa-home",
            duration: "45-60 ngày",
            category: "residential"
        },
        {
            title: "Nhà cấp 4 hiện đại",
            price: "2,200,000 - 2,800,000 VNĐ/m²",
            description: "Vật liệu trung cấp, phù hợp ngoại ô & nông thôn",
            includes: [
                "Trát tường, sơn nước cơ bản",
                "Lát gạch 40x40, 50x50",
                "Trần tôn cách nhiệt hoặc thạch cao",
                "Cửa gỗ MDF, cửa sổ sắt",
                "Điện nước cơ bản đủ dùng"
            ],
            materials: ["Gạch men", "Sơn nước thường", "Cửa MDF", "Trần tôn"],
            icon: "fa-house-user",
            duration: "30-40 ngày",
            category: "residential"
        },
        {
            title: "Biệt thự - Villa",
            price: "3,000,000 - 4,000,000 VNĐ/m²",
            description: "Hoàn thiện cao cấp, gỗ tự nhiên, đá ốp, cửa nhôm Xingfa",
            includes: [
                "Sơn cao cấp Dulux/Jotun",
                "Ốp đá granite, gạch Viglacera",
                "Trần thạch cao nghệ thuật",
                "Cửa gỗ tự nhiên, nhôm Xingfa",
                "Thiết bị vệ sinh TOTO/Inax"
            ],
            materials: ["Đá Granite", "Sơn Jotun", "Gỗ tự nhiên", "Nhôm Xingfa"],
            icon: "fa-building",
            duration: "60-90 ngày",
            category: "luxury"
        },
        {
            title: "Lâu đài - Dinh thự",
            price: "4,000,000 - 5,500,000 VNĐ/m²",
            description: "Nhiều chi tiết phào chỉ, gạch đá tự nhiên, đèn chùm",
            includes: [
                "Phào chỉ trang trí cầu kỳ",
                "Đá marble, travertine tự nhiên",
                "Trần vòm, trần canh nghệ thuật",
                "Cửa gỗ quý, kính cường lực",
                "Hệ thống chiếu sáng cao cấp"
            ],
            materials: ["Đá Marble", "Gỗ quý", "Phào chỉ", "Đèn Crystal"],
            icon: "fa-chess-rook",
            duration: "90-120 ngày",
            category: "luxury"
        },
        {
            title: "Khách sạn - Nhà hàng",
            price: "3,000,000 - 4,500,000 VNĐ/m²",
            description: "Hoàn thiện chuẩn kinh doanh, đảm bảo thẩm mỹ & an toàn",
            includes: [
                "Vật liệu chống cháy, kháng khuẩn",
                "Hệ thống PCCC hoàn chỉnh",
                "Âm thanh ánh sáng chuyên nghiệp",
                "Sàn gỗ công nghiệp chịu lực",
                "Thiết bị bếp inox công nghiệp"
            ],
            materials: ["Gỗ chịu lực", "Inox 304", "Sơn chống cháy", "LED"],
            icon: "fa-hotel",
            duration: "70-100 ngày",
            category: "commercial"
        },
        {
            title: "Nhà xưởng - Công nghiệp",
            price: "1,800,000 - 2,500,000 VNĐ/m²",
            description: "Sơn công nghiệp, cửa cuốn, hệ thống thông gió",
            includes: [
                "Sơn epoxy chống bụi sàn",
                "Tường panel cách nhiệt",
                "Cửa cuốn tự động",
                "Hệ thống thông gió công nghiệp",
                "Điện 3 pha, chiếu sáng LED"
            ],
            materials: ["Sơn Epoxy", "Panel cách nhiệt", "Cửa cuốn", "Quạt công nghiệp"],
            icon: "fa-industry",
            duration: "40-60 ngày",
            category: "industrial"
        }
    ];

    // Finishing process steps
    const finishingProcess = [
        {
            step: 1,
            title: "Trát tường, cán nền, chống thấm",
            description: "Chuẩn bị bề mặt tường và sàn cho các công đoạn tiếp theo",
            details: [
                "Trát tường láng mịn, kiểm tra độ phẳng",
                "Chống thấm sàn nhà vệ sinh, ban công",
                "Cán bột bả tường, chà nhám mịn",
                "Quét lót chống kiềm trước khi sơn"
            ],
            icon: "fa-brush",
            duration: "7-10 ngày"
        },
        {
            step: 2,
            title: "Ốp lát gạch, đá, sàn gỗ",
            description: "Thi công ốp lát theo thiết kế đã duyệt",
            details: [
                "Ốp gạch tường nhà vệ sinh, bếp",
                "Lát gạch sàn toàn nhà",
                "Ốp đá cầu thang, lan can (nếu có)",
                "Lắp sàn gỗ phòng ngủ, phòng khách"
            ],
            icon: "fa-th",
            duration: "10-15 ngày"
        },
        {
            step: 3,
            title: "Thi công trần thạch cao, sơn bả",
            description: "Hoàn thiện trần nhà và sơn tường",
            details: [
                "Lắp khung xương, tấm thạch cao",
                "Sơn lót, sơn phủ 2-3 lớp",
                "Thi công trần nghệ thuật (nếu có)",
                "Lắp đèn âm trần, đèn trang trí"
            ],
            icon: "fa-paint-brush",
            duration: "8-12 ngày"
        },
        {
            step: 4,
            title: "Lắp đặt cửa, lan can, mái ngói",
            description: "Lắp đặt cửa ra vào và hoàn thiện mái",
            details: [
                "Lắp cửa chính, cửa phòng",
                "Lắp cửa sổ, lưới an toàn",
                "Thi công lan can cầu thang, ban công",
                "Lợp ngói, máng xối hoàn chỉnh"
            ],
            icon: "fa-door-open",
            duration: "5-8 ngày"
        },
        {
            step: 5,
            title: "Hoàn thiện hệ thống điện - nước",
            description: "Lắp đặt thiết bị điện nước hoàn chỉnh",
            details: [
                "Lắp công tắc, ổ cắm, đèn LED",
                "Lắp thiết bị vệ sinh, vòi sen",
                "Thử nghiệm hệ thống, kiểm tra rò rỉ",
                "Vệ sinh tổng thể toàn nhà"
            ],
            icon: "fa-plug",
            duration: "6-10 ngày"
        },
        {
            step: 6,
            title: "Kiểm tra chất lượng & bàn giao",
            description: "Nghiệm thu và bàn giao công trình",
            details: [
                "Kiểm tra từng hạng mục hoàn thiện",
                "Sửa chữa những lỗi phát hiện",
                "Vệ sinh tổng thể",
                "Bàn giao hồ sơ bảo hành"
            ],
            icon: "fa-clipboard-check",
            duration: "2-3 ngày"
        }
    ];

    // Cost factors
    const costFactors = [
        {
            title: "Diện tích xây dựng",
            description: "Diện tích càng lớn → đơn giá càng giảm do hiệu ứng quy mô",
            impact: "Cao",
            color: "#667eea"
        },
        {
            title: "Chất lượng vật liệu",
            description: "Ceramic < Granite < Marble về giá thành và chất lượng",
            impact: "Cao",
            color: "#f59e0b"
        },
        {
            title: "Phong cách kiến trúc",
            description: "Hiện đại đơn giản < tân cổ điển < cổ điển về độ phức tạp",
            impact: "Trung bình",
            color: "#10b981"
        },
        {
            title: "Địa điểm thi công",
            description: "Trung tâm Hà Nội/Nha Trang có chi phí vận chuyển khác vùng ven",
            impact: "Thấp",
            color: "#8b5cf6"
        }
    ];

    // Material categories
    const materialCategories = [
        {
            category: "Vật liệu ốp lát",
            items: [
                { name: "Gạch Ceramic", price: "200,000-400,000 VNĐ/m²", quality: "Cơ bản" },
                { name: "Gạch Granite", price: "400,000-800,000 VNĐ/m²", quality: "Cao cấp" },
                { name: "Đá Marble", price: "800,000-1,500,000 VNĐ/m²", quality: "Luxury" },
                { name: "Sàn gỗ công nghiệp", price: "350,000-650,000 VNĐ/m²", quality: "Cao cấp" }
            ]
        },
        {
            category: "Sơn & hoàn thiện tường",
            items: [
                { name: "Sơn nước thường", price: "45,000-65,000 VNĐ/m²", quality: "Cơ bản" },
                { name: "Sơn Dulux", price: "65,000-85,000 VNĐ/m²", quality: "Trung cấp" },
                { name: "Sơn Jotun", price: "85,000-120,000 VNĐ/m²", quality: "Cao cấp" },
                { name: "Giấy dán tường", price: "180,000-350,000 VNĐ/m²", quality: "Trang trí" }
            ]
        },
        {
            category: "Cửa & cửa sổ",
            items: [
                { name: "Cửa MDF", price: "1,500,000-2,500,000 VNĐ/cánh", quality: "Cơ bản" },
                { name: "Cửa gỗ Composite", price: "2,500,000-4,000,000 VNĐ/cánh", quality: "Trung cấp" },
                { name: "Cửa gỗ tự nhiên", price: "4,000,000-8,000,000 VNĐ/cánh", quality: "Cao cấp" },
                { name: "Nhôm Xingfa", price: "1,200,000-1,800,000 VNĐ/m²", quality: "Chuẩn" }
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thi công hoàn thiện bao gồm những hạng mục nào?",
            answer: "Bao gồm: trát sơn tường, ốp lát gạch/đá, trần thạch cao, cửa đi/cửa sổ, lan can, mái ngói, hệ thống điện-nước, thiết bị vệ sinh cơ bản. Chưa bao gồm nội thất rời (bàn ghế, giường, tủ)."
        },
        {
            id: 2,
            question: "Thời gian hoàn thiện một ngôi nhà mất bao lâu?",
            answer: "Nhà phố: 45-60 ngày; Biệt thự: 60-90 ngày; Lâu đài: 90-120 ngày, tùy quy mô và mức độ chi tiết. Thời tiết mưa nhiều có thể ảnh hưởng đến tiến độ."
        },
        {
            id: 3,
            question: "Có thể thay đổi vật liệu trong quá trình thi công không?",
            answer: "Có thể thay đổi nhưng phải thông báo trước ít nhất 3-5 ngày và sẽ điều chỉnh lại dự toán chi phí. Thay đổi quá nhiều có thể ảnh hưởng đến tiến độ chung."
        },
        {
            id: 4,
            question: "Vật liệu có đảm bảo chất lượng không?",
            answer: "Sử dụng vật liệu chính hãng từ các thương hiệu uy tín: Viglacera, Đồng Tâm, Dulux, Jotun, TOTO, Inax... có đầy đủ tem chứng nhận và bảo hành."
        },
        {
            id: 5,
            question: "Có bảo hành hoàn thiện không?",
            answer: "Có bảo hành: chống thấm 3 năm, sơn tường 2 năm, ốp lát gạch 2 năm, hệ thống điện nước 1 năm và hỗ trợ bảo trì định kỳ."
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const filteredPricing = activeCategory === 'all'
        ? finishingPricing
        : finishingPricing.filter(item => item.category === activeCategory);

    return (
        <div className="thiet-ke-page">
            {/* Header */}
            <header className="page-header">
                <div className="container">
                    <div className="header-content">
                        <nav className="breadcrumb">
                            <a href="/">Trang chủ</a>
                            <span>/</span>
                            <a href="/bao-gia">Báo giá</a>
                            <span>/</span>
                            <a href="/bao-gia/bao-gia-thiet-ke-thi-cong-nha">Báo giá thiết kế, thi công nhà</a>
                            <span>/</span>
                            <span>Báo giá thi công hoàn thiện</span>
                        </nav>
                        <h1 className="page-title">
                            🏠 Báo giá thi công hoàn thiện 2025
                        </h1>
                        <p className="page-subtitle">
                            Báo giá thi công kiến trúc hoàn thiện 2025 chi tiết tại Hà Nội & Nha Trang.
                            Đơn giá minh bạch cho nhà phố, biệt thự, lâu đài, khách sạn.
                            Cam kết chất lượng - thẩm mỹ - đúng tiến độ.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="page-main">
                <div className="container">
                    {/* Introduction */}
                    <section className="intro-section">
                        <div className="intro-content">
                            <h2>Thi công hoàn thiện - "Khoác áo" cho ngôi nhà</h2>
                            <p>
                                Sau khi hoàn tất phần thô, <strong>thi công hoàn thiện</strong> chính là giai đoạn
                                "khoác áo" cho công trình: từ sơn tường, lát gạch, lắp đặt cửa cho tới
                                hệ thống điện, nước và trang trí kiến trúc.
                            </p>
                            <p>
                                Thi công hoàn thiện không chỉ ảnh hưởng đến <strong>thẩm mỹ</strong> mà còn quyết định
                                <strong>chất lượng sử dụng lâu dài</strong>. Năm 2025, tại Hà Nội và Nha Trang,
                                báo giá thi công hoàn thiện được nhiều gia chủ quan tâm để dự toán chi phí.
                            </p>
                        </div>
                    </section>

                    {/* Category Filter */}
                    <div className="category-filter">
                        <button
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            Tất cả
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'residential' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('residential')}
                        >
                            Nhà ở
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'luxury' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('luxury')}
                        >
                            Cao cấp
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'commercial' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('commercial')}
                        >
                            Thương mại
                        </button>
                        <button
                            className={`filter-btn ${activeCategory === 'industrial' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('industrial')}
                        >
                            Công nghiệp
                        </button>
                    </div>

                    {/* Pricing Section */}
                    <section className="pricing-section">
                        <h2>Bảng báo giá thi công hoàn thiện 2025</h2>
                        <div className="phases-grid">
                            {filteredPricing.map((item, index) => (
                                <div key={index} className="phase-card">
                                    <div className="phase-header">
                                        <div className="phase-icon">
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="duration">Thời gian: {item.duration}</div>
                                    </div>
                                    <div className="phase-body">
                                        <div className="price-highlight">
                                            {item.price}
                                        </div>
                                        <p className="description">{item.description}</p>
                                        <h4>Bao gồm:</h4>
                                        <ul className="phase-includes">
                                            {item.includes.map((feature, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-check-circle"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="materials-showcase">
                                            <h5>Vật liệu chính:</h5>
                                            <div className="material-tags">
                                                {item.materials.map((material, idx) => (
                                                    <span key={idx} className="material-tag">
                                                        {material}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pricing-note">
                            <p><strong>📌 Bao gồm:</strong></p>
                            <ul>
                                <li>Trát, sơn, ốp lát, trần thạch cao, cửa, lan can, mái, hệ thống điện-nước, thiết bị vệ sinh cơ bản</li>
                                <li><strong>Chưa bao gồm:</strong> nội thất rời (bàn ghế, giường, sofa, tủ)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="process-section">
                        <h2>Quy trình thi công hoàn thiện</h2>
                        <div className="process-timeline">
                            {finishingProcess.map((step, index) => (
                                <div key={index} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p><strong>Thời gian:</strong> {step.duration}</p>
                                        <p>{step.description}</p>
                                        <ul>
                                            {step.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Materials Section */}
                    <section className="materials-section">
                        <h2>Bảng giá vật liệu hoàn thiện</h2>
                        {materialCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="material-category">
                                <h3>{category.category}</h3>
                                <div className="materials-grid">
                                    {category.items.map((item, index) => (
                                        <div key={index} className="material-item">
                                            <h4>{item.name}</h4>
                                            <p className="material-price">{item.price}</p>
                                            <span className={`quality-badge ${item.quality.toLowerCase()}`}>
                                                {item.quality}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Cost Factors */}
                    <section className="factors-section">
                        <h2>Các yếu tố ảnh hưởng đến giá hoàn thiện</h2>
                        <div className="factors-grid">
                            {costFactors.map((factor, index) => (
                                <div key={index} className="factor-card">
                                    <div className="factor-icon" style={{ background: factor.color }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3>{factor.title}</h3>
                                    <p>{factor.description}</p>
                                    <div className={`impact-badge ${factor.impact.toLowerCase().replace(' ', '-')}`}>
                                        Ảnh hưởng: {factor.impact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="faq-section">
                        <h2>Câu hỏi thường gặp</h2>
                        <div className="faq-container">
                            {faqData.map((faq) => (
                                <div key={faq.id} className="faq-item">
                                    <div
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                    >
                                        <h3>{faq.question}</h3>
                                        <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                    </div>
                                    {activeFaq === faq.id && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <div className="cta-content">
                            <h2>Nhận báo giá hoàn thiện miễn phí!</h2>
                            <p>
                                Liên hệ ngay để nhận <strong>báo giá chi tiết & tư vấn miễn phí</strong>
                                cho dự án hoàn thiện của bạn
                            </p>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span><strong>Hotline:</strong> 0941 090 333</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-globe"></i>
                                    <span><strong>Website:</strong> www.linhome.vn</span>
                                </div>
                            </div>
                            <div className="cta-buttons">
                                <a href="tel:0941090333" className="btn btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Gọi tư vấn ngay
                                </a>
                                <a href="/contact" className="btn btn-secondary">
                                    <i className="fas fa-envelope"></i>
                                    Gửi yêu cầu báo giá
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default BaoGiaThiCongHoanThienPage;