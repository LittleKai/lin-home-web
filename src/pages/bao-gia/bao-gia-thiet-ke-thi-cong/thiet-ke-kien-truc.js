import React, { useState } from 'react';
import '../BaoGiaThietKeThiCongNha.css';

const BaoGiaThietKeKienTrucPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Design pricing data
    const designPricing = [
        {
            title: "Nhà phố - nhà ống",
            price: "120,000 - 180,000 VNĐ/m²",
            description: "Phong cách hiện đại, tối ưu diện tích nhỏ",
            includes: [
                "Thiết kế mặt bằng tổng thể",
                "Thiết kế mặt đứng 4 hướng",
                "Thiết kế mặt cắt chi tiết",
                "Phối cảnh 3D ngoại thất",
                "Hồ sơ hoàn công"
            ],
            icon: "fa-home",
            color: "#667eea"
        },
        {
            title: "Nhà cấp 4 hiện đại",
            price: "100,000 - 150,000 VNĐ/m²",
            description: "Phù hợp nông thôn & ngoại ô",
            includes: [
                "Thiết kế mặt bằng công năng",
                "Thiết kế mặt đứng đơn giản",
                "Phối cảnh 3D cơ bản",
                "Hồ sơ xin phép xây dựng",
                "Tư vấn vật liệu xây dựng"
            ],
            icon: "fa-house-user",
            color: "#10b981"
        },
        {
            title: "Biệt thự - Villa",
            price: "200,000 - 350,000 VNĐ/m²",
            description: "Phong cách hiện đại, tân cổ điển, nghỉ dưỡng",
            includes: [
                "Thiết kế kiến trúc chi tiết",
                "Thiết kế cảnh quan sân vườn",
                "Phối cảnh 3D cao cấp",
                "Animation 3D (nếu yêu cầu)",
                "Tư vấn phong thủy"
            ],
            icon: "fa-building",
            color: "#f59e0b"
        },
        {
            title: "Lâu đài - Dinh thự",
            price: "300,000 - 450,000 VNĐ/m²",
            description: "Kiến trúc phức tạp, nhiều chi tiết cổ điển",
            includes: [
                "Thiết kế kiến trúc phức tạp",
                "Chi tiết phào chỉ trang trí",
                "Phối cảnh 3D siêu thực",
                "Thiết kế nội thất cơ bản",
                "Maketing 3D + Video"
            ],
            icon: "fa-chess-rook",
            color: "#8b5cf6"
        },
        {
            title: "Khách sạn - Nhà hàng - Cafe - Shop",
            price: "180,000 - 280,000 VNĐ/m²",
            description: "Đảm bảo công năng kinh doanh & thẩm mỹ",
            includes: [
                "Thiết kế theo tiêu chuẩn kinh doanh",
                "Tối ưu không gian sử dụng",
                "Thiết kế biển hiệu",
                "Phối cảnh 3D chuyên nghiệp",
                "Hồ sơ PCCC cơ bản"
            ],
            icon: "fa-hotel",
            color: "#06b6d4"
        },
        {
            title: "Nhà xưởng - Công nghiệp",
            price: "80,000 - 120,000 VNĐ/m²",
            description: "Thiết kế kết cấu bền vững, tối ưu công năng sản xuất",
            includes: [
                "Thiết kế kết cấu thép",
                "Tính toán tĩnh tải, hoạt tải",
                "Thiết kế hệ thống thông gió",
                "Bản vẽ thi công chi tiết",
                "Dự toán vật tư xây dựng"
            ],
            icon: "fa-industry",
            color: "#ef4444"
        }
    ];

    // Design process steps
    const designProcess = [
        {
            step: 1,
            title: "Khảo sát hiện trạng & tư vấn nhu cầu",
            description: "Đội ngũ KTS đến khảo sát địa điểm, lắng nghe nhu cầu của gia chủ",
            details: [
                "Khảo sát mặt bằng, địa hình, hướng nhà",
                "Tìm hiểu sở thích, phong cách yêu thích",
                "Tư vấn giải pháp thiết kế phù hợp ngân sách"
            ],
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Đề xuất ý tưởng & phong cách kiến trúc",
            description: "Trình bày ý tưởng thiết kế ban đầu với nhiều phương án lựa chọn",
            details: [
                "Đề xuất 2-3 phong cách kiến trúc phù hợp",
                "Phác thảo ý tưởng thiết kế ban đầu",
                "Tư vấn ưu nhược điểm từng phương án"
            ],
            icon: "fa-lightbulb"
        },
        {
            step: 3,
            title: "Thiết kế mặt bằng công năng chi tiết",
            description: "Thiết kế mặt bằng tối ưu công năng sử dụng, phong thủy",
            details: [
                "Thiết kế mặt bằng tầng 1, tầng 2, tầng áp mái",
                "Bố trí không gian hợp lý theo công năng",
                "Đảm bảo yếu tố phong thủy, ánh sáng, thông gió"
            ],
            icon: "fa-drafting-compass"
        },
        {
            step: 4,
            title: "Triển khai phối cảnh 3D ngoại thất",
            description: "Tạo phối cảnh 3D chân thực giúp gia chủ dễ hình dung",
            details: [
                "Modeling 3D chi tiết toàn bộ công trình",
                "Rendering phối cảnh với ánh sáng tự nhiên",
                "Tạo nhiều góc nhìn khác nhau"
            ],
            icon: "fa-cube"
        },
        {
            step: 5,
            title: "Bàn giao hồ sơ thiết kế kiến trúc đầy đủ",
            description: "Hoàn thiện hồ sơ thiết kế theo đúng quy chuẩn xây dựng",
            details: [
                "Bản vẽ thiết kế kiến trúc (mặt bằng, mặt đứng, mặt cắt)",
                "Phối cảnh 3D độ phân giải cao",
                "File nguồn 3D (nếu yêu cầu)"
            ],
            icon: "fa-file-alt"
        },
        {
            step: 6,
            title: "Hỗ trợ giám sát thi công",
            description: "Hỗ trợ giải đáp thắc mắc trong quá trình thi công",
            details: [
                "Giải thích chi tiết bản vẽ cho thợ thi công",
                "Tư vấn điều chỉnh khi có phát sinh",
                "Kiểm tra tiến độ và chất lượng thi công"
            ],
            icon: "fa-tools"
        }
    ];

    // Cost factors
    const costFactors = [
        {
            title: "Diện tích công trình",
            description: "Diện tích càng lớn, đơn giá càng ưu đãi. Công trình > 200m² có thể giảm 10-15%",
            impact: "Cao",
            color: "#667eea"
        },
        {
            title: "Phong cách kiến trúc",
            description: "Hiện đại đơn giản < tân cổ điển < cổ điển châu Âu về mức độ phức tạp",
            impact: "Cao",
            color: "#f59e0b"
        },
        {
            title: "Độ phức tạp",
            description: "Số tầng, chi tiết trang trí, cấu trúc đặc biệt như vòm, cột",
            impact: "Trung bình",
            color: "#10b981"
        },
        {
            title: "Yêu cầu đặc biệt",
            description: "Phong thủy, cảnh quan, hồ bơi, sân tennis, nhà xe ngầm...",
            impact: "Trung bình",
            color: "#8b5cf6"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thiết kế kiến trúc bao gồm những gì?",
            answer: "Bao gồm: mặt bằng các tầng, mặt đứng 4 hướng, mặt cắt dọc/ngang, chi tiết cấu tạo, phối cảnh 3D ngoại thất và hồ sơ hoàn công."
        },
        {
            id: 2,
            question: "Thời gian thiết kế một ngôi nhà là bao lâu?",
            answer: "Nhà phố: 7-10 ngày; Biệt thự: 15-20 ngày; Lâu đài: 25-30 ngày, tùy thuộc mức độ phức tạp và số lần chỉnh sửa."
        },
        {
            id: 3,
            question: "Có được chỉnh sửa thiết kế không?",
            answer: "Có, miễn phí chỉnh sửa 3 lần đầu. Từ lần thứ 4 trở đi sẽ tính phí tùy mức độ thay đổi."
        },
        {
            id: 4,
            question: "File thiết kế có được bàn giao đầy đủ không?",
            answer: "Có, bàn giao file PDF bản vẽ, file ảnh phối cảnh 3D độ phân giải cao. File nguồn CAD/3D sẽ có phụ phí."
        },
        {
            id: 5,
            question: "Có hỗ trợ xin phép xây dựng không?",
            answer: "Có, chúng tôi hỗ trợ chuẩn bị hồ sơ xin phép xây dựng theo quy định của địa phương."
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
                            <span>Báo giá thiết kế kiến trúc</span>
                        </nav>
                        <h1 className="page-title">
                            🏛️ Báo giá thiết kế kiến trúc 2025
                        </h1>
                        <p className="page-subtitle">
                            Báo giá thiết kế kiến trúc 2025 chi tiết, minh bạch tại Hà Nội & Nha Trang.
                            Dịch vụ thiết kế nhà phố, biệt thự, lâu đài, khách sạn, nhà xưởng.
                            Tư vấn miễn phí, thiết kế 3D chuyên nghiệp.
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
                            <h2>Tại sao cần thiết kế kiến trúc chuyên nghiệp?</h2>
                            <p>
                                Trong xây dựng, <strong>thiết kế kiến trúc</strong> là bước khởi đầu quan trọng,
                                quyết định đến công năng, thẩm mỹ và chi phí thi công. Một bản thiết kế
                                chuyên nghiệp sẽ giúp gia chủ <strong>tối ưu không gian - kiểm soát ngân sách -
                                đảm bảo phong thủy - nâng cao giá trị bất động sản</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="pricing-section">
                        <h2>Bảng báo giá thiết kế kiến trúc 2025</h2>
                        <div className="pricing-grid">
                            {designPricing.map((item, index) => (
                                <div key={index} className="pricing-card">
                                    <div className="card-header">
                                        <div className="card-icon" style={{ background: item.color }}>
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p className="description">{item.description}</p>
                                        <div className="price-highlight">
                                            {item.price}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4>Bao gồm:</h4>
                                        <ul className="features">
                                            {item.includes.map((feature, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-check"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pricing-note">
                            <p><strong>📌 Lưu ý:</strong></p>
                            <ul>
                                <li>Đơn giá bao gồm <strong>thiết kế kiến trúc 2D + phối cảnh 3D</strong></li>
                                <li>Chưa bao gồm thiết kế nội thất & cảnh quan (có thể đặt gói riêng)</li>
                                <li>Giá thay đổi tùy diện tích, phong cách & mức độ chi tiết</li>
                            </ul>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="process-section">
                        <h2>Quy trình thiết kế kiến trúc 2025</h2>
                        <div className="process-timeline">
                            {designProcess.map((step, index) => (
                                <div key={index} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
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

                    {/* Cost Factors */}
                    <section className="factors-section">
                        <h2>Các yếu tố ảnh hưởng đến chi phí thiết kế</h2>
                        <div className="factors-grid">
                            {costFactors.map((factor, index) => (
                                <div key={index} className="factor-card">
                                    <div className="factor-icon" style={{ background: factor.color }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3>{factor.title}</h3>
                                    <p>{factor.description}</p>
                                    <div className={`impact-badge ${factor.impact.toLowerCase()}`}>
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
                            <h2>Nhận tư vấn thiết kế miễn phí!</h2>
                            <p>
                                Liên hệ ngay để nhận <strong>tư vấn miễn phí & báo giá chi tiết</strong>
                                cho dự án thiết kế kiến trúc của bạn
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
                                    Gửi yêu cầu thiết kế
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default BaoGiaThietKeKienTrucPage;