import React, { useState } from 'react';
import '../BaoGiaThietKeThiCongNha.css';

const BaoGiaThiCongPhanThoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activePhase, setActivePhase] = useState(0);

    // Construction pricing data
    const constructionPricing = [
        {
            title: "Nhà phố - nhà ống",
            price: "3,200,000 - 3,800,000 VNĐ/m²",
            description: "Bao gồm móng, khung, tường, mái thô",
            includes: [
                "Móng băng bê tông cốt thép",
                "Khung cột dầm chịu lực",
                "Tường xây gạch nung/block",
                "Sàn bê tông cốt thép",
                "Mái thô (không ngói)"
            ],
            icon: "fa-home",
            duration: "60-80 ngày"
        },
        {
            title: "Nhà cấp 4 hiện đại",
            price: "2,800,000 - 3,200,000 VNĐ/m²",
            description: "Phần móng + tường bao + mái",
            includes: [
                "Móng băng đơn giản",
                "Tường bao chu vi",
                "Mái dàn gỗ/thép",
                "Nền nhà bê tông",
                "Hệ thống điện nước cơ bản"
            ],
            icon: "fa-house-user",
            duration: "30-45 ngày"
        },
        {
            title: "Biệt thư - Villa",
            price: "3,500,000 - 4,200,000 VNĐ/m²",
            description: "Nhiều không gian, yêu cầu kết cấu phức tạp",
            includes: [
                "Móng bè/cọc khoan nhồi",
                "Kết cấu bê tông cốt thép",
                "Tường xây cao cấp",
                "Sàn + cầu thang bê tông",
                "Mái phức tạp nhiều mặt"
            ],
            icon: "fa-building",
            duration: "90-120 ngày"
        },
        {
            title: "Lâu đài - Dinh thự",
            price: "4,000,000 - 5,000,000 VNĐ/m²",
            description: "Cột, vòm, chi tiết kiến trúc cầu kỳ",
            includes: [
                "Móng sâu đặc biệt",
                "Cột tròn, cột vuông trang trí",
                "Vòm, mái vòm",
                "Chi tiết phào chỉ bê tông",
                "Kết cấu chịu lực phức tạp"
            ],
            icon: "fa-chess-rook",
            duration: "120-180 ngày"
        },
        {
            title: "Khách sạn - Nhà hàng",
            price: "3,500,000 - 4,500,000 VNĐ/m²",
            description: "Thi công nhiều tầng, đảm bảo tiêu chuẩn an toàn",
            includes: [
                "Kết cấu chịu tải trọng lớn",
                "Hệ thống PCCC cơ bản",
                "Thang máy (hố thang)",
                "Sàn chịu tải đặc biệt",
                "Hệ thống M&E âm sàn"
            ],
            icon: "fa-hotel",
            duration: "100-150 ngày"
        },
        {
            title: "Nhà xưởng - Công nghiệp",
            price: "2,500,000 - 3,200,000 VNĐ/m²",
            description: "Kết cấu thép, mái tôn, sàn bê tông công nghiệp",
            includes: [
                "Móng băng/đơn cọc",
                "Khung thép tiền chế",
                "Mái tôn lạnh/tôn sandwich",
                "Sàn bê tông công nghiệp",
                "Hệ thống thoát nước mưa"
            ],
            icon: "fa-industry",
            duration: "45-60 ngày"
        }
    ];

    // Construction phases
    const constructionPhases = [
        {
            title: "Giai đoạn 1: Khảo sát & chuẩn bị",
            duration: "5-7 ngày",
            description: "Khảo sát địa chất, chuẩn bị mặt bằng thi công",
            includes: [
                "Khoan khảo sát địa chất (nếu cần)",
                "Định vị công trình theo bản vẽ",
                "Dọn dẹp, san lấp mặt bằng",
                "Lập hàng rào, biển báo an toàn",
                "Chuẩn bị kho bãi, điện nước tạm"
            ],
            icon: "fa-search"
        },
        {
            title: "Giai đoạn 2: Thi công móng",
            duration: "15-25 ngày",
            description: "Đào móng, đổ bê tông móng theo thiết kế",
            includes: [
                "Đào móng theo độ sâu thiết kế",
                "Xử lý nền móng, đầm nén",
                "Lắp ráp cốt thép móng",
                "Đổ bê tông móng, bảo dưỡng",
                "Làm chống thấm móng"
            ],
            icon: "fa-hammer"
        },
        {
            title: "Giai đoạn 3: Thi công cột, dầm, sàn",
            duration: "20-35 ngày",
            description: "Dựng khung chịu lực chính của công trình",
            includes: [
                "Lắp dựng cốt thép cột tầng 1",
                "Đổ bê tông cột, bảo dưỡng",
                "Lắp ván khuôn dầm sàn",
                "Đổ bê tông dầm sàn tầng 1",
                "Thi công tương tự các tầng trên"
            ],
            icon: "fa-building"
        },
        {
            title: "Giai đoạn 4: Thi công tường",
            duration: "15-20 ngày",
            description: "Xây tường bao che và tường ngăn",
            includes: [
                "Xây tường bao che chu vi",
                "Xây tường ngăn các phòng",
                "Để lỗ cửa đi, cửa sổ",
                "Trát láng tường thô",
                "Kiểm tra độ thẳng đứng"
            ],
            icon: "fa-th-large"
        },
        {
            title: "Giai đoạn 5: Thi công mái",
            duration: "10-15 ngày",
            description: "Hoàn thiện kết cấu mái theo thiết kế",
            includes: [
                "Lắp dựng dàn mái gỗ/thép",
                "Lợp tôn/ngói thô (chưa ngói lợp)",
                "Làm máng xối thoát nước",
                "Sơn chống gỉ dàn thép",
                "Kiểm tra độ dốc thoát nước"
            ],
            icon: "fa-home"
        },
        {
            title: "Giai đoạn 6: Hệ thống kỹ thuật",
            duration: "10-12 ngày",
            description: "Lắp đặt hệ thống điện nước cơ bản",
            includes: [
                "Luồn ống điện âm tường/sàn",
                "Đặt ống nước cấp, thoát nước",
                "Lắp đặt hộp điện tổng",
                "Thử nghiệm hệ thống",
                "Bàn giao phần thô"
            ],
            icon: "fa-tools"
        }
    ];

    // Cost factors
    const costFactors = [
        {
            title: "Diện tích xây dựng",
            description: "Càng lớn, đơn giá càng giảm do tiết kiệm chi phí cố định",
            impact: "Cao"
        },
        {
            title: "Địa chất & móng",
            description: "Đất yếu cần móng cọc sẽ tăng chi phí đáng kể",
            impact: "Cao"
        },
        {
            title: "Phong cách kiến trúc",
            description: "Hiện đại đơn giản rẻ hơn cổ điển phức tạp",
            impact: "Trung bình"
        },
        {
            title: "Vật liệu sử dụng",
            description: "Thép Việt Nhật, xi măng Hà Nội/Holcim, gạch tuynel",
            impact: "Trung bình"
        },
        {
            title: "Khu vực thi công",
            description: "Hà Nội chi phí nhân công cao hơn Nha Trang",
            impact: "Thấp"
        }
    ];

    // Materials showcase
    const materials = [
        { name: "Xi măng", brand: "PCB40 Hà Nội", quality: "Chất lượng cao" },
        { name: "Thép", brand: "Hòa Phát/Việt Nhật", quality: "Chuẩn TCVN" },
        { name: "Gạch", brand: "Tuynel/Đồng Tâm", quality: "Chuẩn QCVN" },
        { name: "Cát sạn", brand: "Sông Hồng", quality: "Đạt tiêu chuẩn" }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Thi công phần thô bao gồm những hạng mục nào?",
            answer: "Bao gồm: móng, cột, dầm, sàn, tường xây, cầu thang, mái thô và hệ thống điện nước âm sàn cơ bản. Chưa bao gồm hoàn thiện (ốp lát, sơn, cửa, trần)."
        },
        {
            id: 2,
            question: "Thời gian thi công phần thô mất bao lâu?",
            answer: "Nhà phố: 60-80 ngày; Biệt thự: 90-120 ngày; Lâu đài: 120-180 ngày, tùy quy mô và thời tiết."
        },
        {
            id: 3,
            question: "Có cần làm móng cọc không?",
            answer: "Tùy địa chất. Đất tốt dùng móng băng/đơn. Đất yếu cần móng cọc khoan nhồi hoặc ép cọc bê tông."
        },
        {
            id: 4,
            question: "Vật liệu thi công có đạt chất lượng không?",
            answer: "Sử dụng vật liệu chính hãng: xi măng PCB40, thép Hòa Phát/Việt Nhật, gạch Tuynel/Đồng Tâm có tem chứng nhận."
        },
        {
            id: 5,
            question: "Có bảo hành kết cấu phần thô không?",
            answer: "Có, bảo hành kết cấu 5-10 năm tùy hạng mục. Móng bảo hành 10 năm, kết cấu bê tông 5 năm."
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
                            <span>Báo giá thi công phần thô</span>
                        </nav>
                        <h1 className="page-title">
                            🏗️ Báo giá thi công phần thô 2025
                        </h1>
                        <p className="page-subtitle">
                            Báo giá thi công kiến trúc phần thô 2025 chi tiết tại Hà Nội & Nha Trang.
                            Đơn giá minh bạch cho nhà phố, biệt thự, lâu đài, khách sạn.
                            Cam kết chất lượng - tiến độ.
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
                            <h2>Thi công phần thô - Nền tảng vững chắc cho ngôi nhà</h2>
                            <p>
                                Thi công <strong>phần thô</strong> là giai đoạn quan trọng trong xây dựng,
                                bao gồm toàn bộ kết cấu chịu lực và hạ tầng kỹ thuật của công trình.
                                Đây là "xương sống" quyết định độ bền vững và an toàn.
                            </p>
                            <div className="construction-details">
                                <h3>Phần thô bao gồm:</h3>
                                <ul>
                                    <li><strong>Móng:</strong> móng băng, móng bè, móng cọc</li>
                                    <li><strong>Khung:</strong> cột, dầm, sàn bê tông cốt thép</li>
                                    <li><strong>Tường:</strong> tường bao che và tường ngăn</li>
                                    <li><strong>Mái thô:</strong> dàn mái, lợp tạm (chưa ngói lợp)</li>
                                    <li><strong>Hệ thống:</strong> điện nước âm sàn cơ bản</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section className="pricing-section">
                        <h2>Bảng báo giá thi công phần thô 2025</h2>
                        <div className="phases-grid">
                            {constructionPricing.map((item, index) => (
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
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pricing-note">
                            <p><strong>📌 Bao gồm:</strong></p>
                            <ul>
                                <li>Móng, khung, cột, sàn, tường, cầu thang, mái thô</li>
                                <li>Hệ thống điện nước âm sàn cơ bản</li>
                                <li><strong>Chưa bao gồm:</strong> hoàn thiện (ốp lát, sơn, cửa, trần, nội thất)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Construction Process */}
                    <section className="process-section">
                        <h2>Quy trình thi công phần thô</h2>
                        <div className="process-timeline">
                            {constructionPhases.map((phase, index) => (
                                <div key={index} className="process-step">
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-icon">
                                        <i className={`fas ${phase.icon}`}></i>
                                    </div>
                                    <div className="step-content">
                                        <h3>{phase.title}</h3>
                                        <p><strong>Thời gian:</strong> {phase.duration}</p>
                                        <p>{phase.description}</p>
                                        <ul>
                                            {phase.includes.map((detail, idx) => (
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
                        <h2>Các yếu tố ảnh hưởng đến giá thi công phần thô</h2>
                        <div className="factors-grid">
                            {costFactors.map((factor, index) => (
                                <div key={index} className="factor-card">
                                    <div className="factor-icon">
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

                    {/* Materials Section */}
                    <section className="materials-section">
                        <h2>Vật liệu xây dựng sử dụng</h2>
                        <p className="section-intro">
                            Chúng tôi cam kết sử dụng 100% vật liệu chính hãng, có nguồn gốc xuất xứ
                            rõ ràng và đạt chuẩn QCVN để đảm bảo chất lượng công trình.
                        </p>
                        <div className="materials-grid">
                            {materials.map((material, index) => (
                                <div key={index} className="material-item">
                                    <h4>{material.name}</h4>
                                    <p><strong>{material.brand}</strong></p>
                                    <p>{material.quality}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Advantages */}
                    <section className="advantages-section">
                        <h2>Ưu đãi & cam kết dịch vụ</h2>
                        <div className="advantages-grid">
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <h3>Miễn phí tư vấn</h3>
                                <p>Miễn phí tư vấn & dự toán chi tiết</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h3>Cam kết tiến độ</h3>
                                <p>Cam kết tiến độ & chất lượng bê tông, thép</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3>Đội ngũ chuyên nghiệp</h3>
                                <p>Kỹ sư & đội thợ kinh nghiệm 10+ năm</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3>Bảo hành dài hạn</h3>
                                <p>Bảo hành kết cấu phần thô 5-10 năm, chống thấm 3 năm</p>
                            </div>
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
                            <h2>Nhận báo giá thi công phần thô miễn phí!</h2>
                            <p>
                                Liên hệ ngay để nhận <strong>dự toán chi tiết & tư vấn miễn phí</strong>
                                cho dự án thi công phần thô của bạn
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

export default BaoGiaThiCongPhanThoPage;