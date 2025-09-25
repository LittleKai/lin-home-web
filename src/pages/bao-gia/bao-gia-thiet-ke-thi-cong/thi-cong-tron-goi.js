import React, { useState } from 'react';
import '../BaoGiaThietKeThiCongNha.css';

const BaoGiaThiCongTronGoiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activePackage, setActivePackage] = useState('basic');

    // Turnkey construction pricing data
    const turnkeyPricing = [
        {
            title: "Nhà phố - nhà ống",
            price: "5,500,000 - 7,000,000 VNĐ/m²",
            description: "Trọn gói phần thô + hoàn thiện cơ bản",
            includes: [
                "Thiết kế kiến trúc 2D + 3D",
                "Xin phép xây dựng",
                "Thi công phần thô hoàn chỉnh",
                "Hoàn thiện cơ bản (sơn, gạch, cửa)",
                "Hệ thống điện nước đầy đủ"
            ],
            advantages: [
                "Tiết kiệm 15-20% chi phí",
                "Thời gian rút ngắn 30%",
                "Không lo phát sinh",
                "Bảo hành toàn diện"
            ],
            icon: "fa-home",
            duration: "90-120 ngày",
            warranty: "5 năm"
        },
        {
            title: "Nhà cấp 4 hiện đại",
            price: "4,500,000 - 6,000,000 VNĐ/m²",
            description: "Bao gồm mái ngói/mái tôn + hoàn thiện cơ bản",
            includes: [
                "Thiết kế phù hợp nông thôn",
                "Móng băng + tường + mái",
                "Hoàn thiện đơn giản, bền đẹp",
                "Sân bê tông, hàng rào",
                "Giếng khoan (nếu cần)"
            ],
            advantages: [
                "Chi phí hợp lý nhất",
                "Vật liệu bền, phù hợp khí hậu",
                "Thi công nhanh",
                "Bảo trì dễ dàng"
            ],
            icon: "fa-house-user",
            duration: "60-80 ngày",
            warranty: "3 năm"
        },
        {
            title: "Biệt thự - Villa",
            price: "6,500,000 - 9,000,000 VNĐ/m²",
            description: "Hoàn thiện cao cấp, nhiều chi tiết & sân vườn",
            includes: [
                "Thiết kế kiến trúc cao cấp",
                "Kết cấu phức tạp, an toàn",
                "Hoàn thiện cao cấp (đá, gỗ)",
                "Cảnh quan sân vườn cơ bản",
                "Hệ thống smarthome cơ bản"
            ],
            advantages: [
                "Thiết kế độc quyền",
                "Vật liệu cao cấp",
                "Thi công chuyên nghiệp",
                "Bảo hành lâu dài"
            ],
            icon: "fa-building",
            duration: "120-180 ngày",
            warranty: "7 năm"
        },
        {
            title: "Lâu đài - Dinh thự",
            price: "9,000,000 - 12,000,000 VNĐ/m²",
            description: "Kiến trúc phức tạp, nhiều chi tiết cổ điển",
            includes: [
                "Thiết kế kiến trúc nghệ thuật",
                "Kết cấu đặc biệt (vòm, cột)",
                "Hoàn thiện luxury (marble, gỗ quý)",
                "Cảnh quan châu Âu",
                "Hệ thống smarthome cao cấp"
            ],
            advantages: [
                "Thiết kế độc đáo",
                "Thi công tinh xảo",
                "Vật liệu nhập khẩu",
                "Dịch vụ VIP"
            ],
            icon: "fa-chess-rook",
            duration: "180-240 ngày",
            warranty: "10 năm"
        },
        {
            title: "Khách sạn - Nhà hàng",
            price: "6,000,000 - 8,500,000 VNĐ/m²",
            description: "Đảm bảo tiêu chuẩn an toàn, công năng kinh doanh",
            includes: [
                "Thiết kế theo tiêu chuẩn PCCC",
                "Kết cấu chịu tải trọng lớn",
                "Hệ thống M&E chuyên nghiệp",
                "Hoàn thiện chuẩn kinh doanh",
                "Hỗ trợ thủ tục mở cửa"
            ],
            advantages: [
                "Tuân thủ quy chuẩn",
                "Tối ưu vận hành",
                "Giảm chi phí bảo trì",
                "Hỗ trợ pháp lý"
            ],
            icon: "fa-hotel",
            duration: "150-200 ngày",
            warranty: "5 năm"
        },
        {
            title: "Nhà xưởng - Công nghiệp",
            price: "3,500,000 - 5,000,000 VNĐ/m²",
            description: "Kết cấu thép + hoàn thiện công nghiệp",
            includes: [
                "Thiết kế kết cấu tối ưu",
                "Khung thép tiền chế",
                "Hệ thống thông gió công nghiệp",
                "Sàn epoxy chống bụi",
                "Hệ thống PCCC cơ bản"
            ],
            advantages: [
                "Thi công nhanh nhất",
                "Chi phí cạnh tranh",
                "Bền vững theo thời gian",
                "Mở rộng dễ dàng"
            ],
            icon: "fa-industry",
            duration: "80-120 ngày",
            warranty: "3 năm"
        }
    ];

    // Package comparison
    const packageComparison = {
        basic: {
            title: "Gói Cơ Bản",
            description: "Phù hợp gia đình có ngân sách hạn chế",
            features: [
                "Thiết kế đơn giản, hiện đại",
                "Vật liệu cơ bản, chất lượng tốt",
                "Hoàn thiện theo tiêu chuẩn",
                "Bảo hành 3 năm"
            ],
            priceRange: "3.5 - 6 triệu VNĐ/m²"
        },
        standard: {
            title: "Gói Tiêu Chuẩn",
            description: "Lựa chọn phổ biến nhất, cân bằng giá - chất lượng",
            features: [
                "Thiết kế đa dạng phong cách",
                "Vật liệu tốt, thương hiệu uy tín",
                "Hoàn thiện cao cấp",
                "Bảo hành 5 năm"
            ],
            priceRange: "5.5 - 8 triệu VNĐ/m²"
        },
        premium: {
            title: "Gói Cao Cấp",
            description: "Dành cho khách hàng yêu cầu chất lượng tối ưu",
            features: [
                "Thiết kế độc quyền, sang trọng",
                "Vật liệu cao cấp, nhập khẩu",
                "Hoàn thiện luxury",
                "Bảo hành 7-10 năm"
            ],
            priceRange: "8 - 12 triệu VNĐ/m²"
        }
    };

    // Turnkey process
    const turnkeyProcess = [
        {
            step: 1,
            title: "Khảo sát & tư vấn giải pháp tổng thể",
            description: "Đánh giá toàn diện nhu cầu và đề xuất giải pháp tối ưu",
            details: [
                "Khảo sát mặt bằng, địa chất",
                "Tư vấn phong cách kiến trúc phù hợp",
                "Lập dự toán chi tiết theo ngân sách",
                "Tư vấn pháp lý, thủ tục"
            ],
            icon: "fa-search",
            duration: "3-5 ngày"
        },
        {
            step: 2,
            title: "Lập phương án thiết kế & báo giá chi tiết",
            description: "Thiết kế và báo giá trọn gói minh bạch",
            details: [
                "Thiết kế sơ bộ 2-3 phương án",
                "Báo giá trọn gói từ A-Z",
                "Thời gian hoàn thành dự kiến",
                "Điều khoản hợp đồng rõ ràng"
            ],
            icon: "fa-drafting-compass",
            duration: "7-10 ngày"
        },
        {
            step: 3,
            title: "Xin phép xây dựng",
            description: "Hỗ trợ hoàn tất thủ tục pháp lý",
            details: [
                "Chuẩn bị hồ sơ xin phép xây dựng",
                "Nộp hồ sơ tại UBND địa phương",
                "Theo dõi tiến độ duyệt phép",
                "Nhận giấy phép xây dựng"
            ],
            icon: "fa-file-contract",
            duration: "15-30 ngày"
        },
        {
            step: 4,
            title: "Thi công phần móng & phần thô",
            description: "Thi công kết cấu chịu lực chính",
            details: [
                "Đào móng, đổ bê tông móng",
                "Thi công cột, dầm, sàn các tầng",
                "Xây tường, thi công cầu thang",
                "Hoàn thiện mái thô"
            ],
            icon: "fa-hard-hat",
            duration: "60-120 ngày"
        },
        {
            step: 5,
            title: "Hoàn thiện kiến trúc, lắp đặt điện nước",
            description: "Hoàn thiện tổng thể công trình",
            details: [
                "Trát tường, sơn, ốp lát",
                "Lắp cửa, trần, lan can",
                "Hệ thống điện nước hoàn chỉnh",
                "Lắp thiết bị, vệ sinh"
            ],
            icon: "fa-paint-brush",
            duration: "45-90 ngày"
        },
        {
            step: 6,
            title: "Bàn giao công trình & bảo hành dài hạn",
            description: "Nghiệm thu và hỗ trợ lâu dài",
            details: [
                "Kiểm tra chất lượng tổng thể",
                "Bàn giao hồ sơ hoàn công",
                "Hướng dẫn sử dụng & bảo trì",
                "Cam kết bảo hành dài hạn"
            ],
            icon: "fa-clipboard-check",
            duration: "2-3 ngày"
        }
    ];

    // Advantages of turnkey construction
    const turnkeyAdvantages = [
        {
            title: "Tiết kiệm thời gian",
            description: "Một đơn vị quản lý xuyên suốt, rút ngắn 30% thời gian",
            icon: "fa-clock",
            color: "#667eea"
        },
        {
            title: "Kiểm soát chi phí",
            description: "Báo giá trọn gói, không phát sinh ngoài hợp đồng",
            icon: "fa-calculator",
            color: "#10b981"
        },
        {
            title: "Đảm bảo đồng bộ",
            description: "Thiết kế & thi công ăn khớp, đúng tiến độ",
            icon: "fa-sync-alt",
            color: "#f59e0b"
        },
        {
            title: "Pháp lý rõ ràng",
            description: "Hỗ trợ xin cấp phép xây dựng, giấy tờ liên quan",
            icon: "fa-file-contract",
            color: "#8b5cf6"
        },
        {
            title: "Bảo hành - bảo trì",
            description: "Yên tâm sử dụng công trình lâu dài",
            icon: "fa-wrench",
            color: "#ef4444"
        },
        {
            title: "Chất lượng đồng nhất",
            description: "Kiểm soát chất lượng chặt chẽ từ đầu đến cuối",
            icon: "fa-award",
            color: "#06b6d4"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thi công trọn gói có đắt hơn thuê từng hạng mục không?",
            answer: "Thực tế, thi công trọn gói giúp tối ưu chi phí và hạn chế phát sinh, nên tổng chi phí thường tiết kiệm hơn 15-20% so với thuê riêng lẻ từng hạng mục."
        },
        {
            id: 2,
            question: "Thời gian hoàn thiện một công trình mất bao lâu?",
            answer: "Nhà phố 3-4 tầng: 90-120 ngày; Biệt thự: 120-180 ngày; Lâu đài: 180-240 ngày. Thời gian có thể rút ngắn 30% so với thi công riêng lẻ."
        },
        {
            id: 3,
            question: "Có thể thay đổi vật liệu trong quá trình thi công không?",
            answer: "Có, nhưng sẽ điều chỉnh lại dự toán trước khi triển khai. Thay đổi nhiều có thể ảnh hưởng đến tiến độ và chi phí đã cam kết."
        },
        {
            id: 4,
            question: "LIN HOME có cam kết gì về chất lượng?",
            answer: "Chúng tôi cam kết 'Không phát sinh chi phí ngoài hợp đồng', bảo hành kết cấu 5-10 năm, hoàn thiện 2-3 năm và cung cấp dịch vụ bảo trì định kỳ."
        },
        {
            id: 5,
            question: "Có hỗ trợ vay vốn ngân hàng không?",
            answer: "Có, chúng tôi hỗ trợ làm hồ sơ vay vốn tại các ngân hàng liên kết với lãi suất ưu đãi và thủ tục đơn giản."
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

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
                            <span>Báo giá thi công trọn gói</span>
                        </nav>
                        <h1 className="page-title">
                            🏡 Báo giá thi công trọn gói 2025
                        </h1>
                        <p className="page-subtitle">
                            Báo giá thi công kiến trúc trọn gói 2025 tại Hà Nội & Nha Trang.
                            Đơn giá minh bạch, trọn gói từ thiết kế đến hoàn thiện.
                            Cam kết chất lượng - không phát sinh.
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
                            <h2>Thi công trọn gói - Giải pháp toàn diện cho ngôi nhà</h2>
                            <p>
                                Thi công kiến trúc <strong>trọn gói</strong> là giải pháp được nhiều gia chủ lựa chọn
                                năm 2025. Với hình thức này, nhà thầu sẽ đảm nhận toàn bộ quy trình:
                                <strong>từ thiết kế, xin phép xây dựng, thi công phần thô, hoàn thiện đến bàn giao
                                    chìa khóa trao tay</strong>.
                            </p>
                            <div className="construction-details">
                                <h3>Ưu điểm lớn nhất của gói thi công trọn gói:</h3>
                                <ul>
                                    <li><strong>Tiết kiệm thời gian:</strong> một đơn vị quản lý xuyên suốt</li>
                                    <li><strong>Kiểm soát chi phí:</strong> báo giá trọn gói, không phát sinh</li>
                                    <li><strong>Đảm bảo đồng bộ:</strong> thiết kế & thi công ăn khớp, đúng tiến độ</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Package Selection */}
                    <div className="package-selector">
                        <h2>Lựa chọn gói phù hợp</h2>
                        <div className="package-tabs">
                            <button
                                className={`package-tab ${activePackage === 'basic' ? 'active' : ''}`}
                                onClick={() => setActivePackage('basic')}
                            >
                                Gói Cơ Bản
                            </button>
                            <button
                                className={`package-tab ${activePackage === 'standard' ? 'active' : ''}`}
                                onClick={() => setActivePackage('standard')}
                            >
                                Gói Tiêu Chuẩn
                            </button>
                            <button
                                className={`package-tab ${activePackage === 'premium' ? 'active' : ''}`}
                                onClick={() => setActivePackage('premium')}
                            >
                                Gói Cao Cấp
                            </button>
                        </div>
                        <div className="package-info">
                            <h3>{packageComparison[activePackage].title}</h3>
                            <p>{packageComparison[activePackage].description}</p>
                            <div className="package-price">
                                {packageComparison[activePackage].priceRange}
                            </div>
                            <ul className="package-features">
                                {packageComparison[activePackage].features.map((feature, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check-circle"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <section className="pricing-section">
                        <h2>Bảng báo giá thi công trọn gói 2025</h2>
                        <div className="phases-grid">
                            {turnkeyPricing.map((item, index) => (
                                <div key={index} className="phase-card">
                                    <div className="phase-header">
                                        <div className="phase-icon">
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="duration">
                                            Thời gian: {item.duration} | Bảo hành: {item.warranty}
                                        </div>
                                    </div>
                                    <div className="phase-body">
                                        <div className="price-highlight">
                                            {item.price}
                                        </div>
                                        <p className="description">{item.description}</p>
                                        <div className="includes-section">
                                            <h4>Bao gồm:</h4>
                                            <ul className="phase-includes">
                                                {item.includes.map((feature, idx) => (
                                                    <li key={idx}>
                                                        <i className="fas fa-check-circle"></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="advantages-section">
                                            <h4>Ưu điểm:</h4>
                                            <ul className="advantages-list">
                                                {item.advantages.map((advantage, idx) => (
                                                    <li key={idx}>
                                                        <i className="fas fa-star"></i>
                                                        {advantage}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pricing-note">
                            <p><strong>📌 Báo giá bao gồm:</strong></p>
                            <ul>
                                <li>Thiết kế kiến trúc, xin phép xây dựng, thi công phần thô, hoàn thiện cơ bản</li>
                                <li><strong>Chưa bao gồm:</strong> nội thất rời & hạng mục cao cấp (đèn chùm, đá tự nhiên, gỗ quý)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Advantages Section */}
                    <section className="advantages-section">
                        <h2>Tại sao chọn thi công trọn gói?</h2>
                        <div className="advantages-grid">
                            {turnkeyAdvantages.map((advantage, index) => (
                                <div key={index} className="advantage-card">
                                    <div className="advantage-icon" style={{ background: advantage.color }}>
                                        <i className={`fas ${advantage.icon}`}></i>
                                    </div>
                                    <h3>{advantage.title}</h3>
                                    <p>{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="process-section">
                        <h2>Quy trình thi công trọn gói</h2>
                        <div className="process-timeline">
                            {turnkeyProcess.map((step, index) => (
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
                            <h2>Nhận báo giá trọn gói miễn phí!</h2>
                            <p>
                                Liên hệ ngay để nhận <strong>tư vấn miễn phí & báo giá trọn gói chi tiết</strong>
                                cho dự án của bạn. Cam kết không phát sinh chi phí ngoài hợp đồng!
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

export default BaoGiaThiCongTronGoiPage;