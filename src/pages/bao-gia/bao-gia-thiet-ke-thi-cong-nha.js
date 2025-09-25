import React, { useState } from 'react';
import './BaoGiaThietKeThiCongNha.css';

const BaoGiaThietKeThiCongNhaPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Pricing data for different house types
    const pricingData = [
        {
            title: "Nhà phố - nhà ống",
            designPrice: "120,000 - 180,000 VNĐ/m²",
            constructionPrice: "3,200,000 - 3,800,000 VNĐ/m²",
            finishingPrice: "2,500,000 - 3,200,000 VNĐ/m²",
            totalPrice: "5,500,000 - 7,000,000 VNĐ/m²",
            description: "Phong cách hiện đại, tối ưu diện tích nhỏ",
            icon: "fa-home",
            features: ["Thiết kế 2D + 3D", "Móng + khung + tường", "Hoàn thiện cơ bản"]
        },
        {
            title: "Nhà cấp 4 hiện đại",
            designPrice: "100,000 - 150,000 VNĐ/m²",
            constructionPrice: "2,800,000 - 3,200,000 VNĐ/m²",
            finishingPrice: "2,200,000 - 2,800,000 VNĐ/m²",
            totalPrice: "4,500,000 - 6,000,000 VNĐ/m²",
            description: "Phù hợp nông thôn & ngoại ô",
            icon: "fa-house-user",
            features: ["Thiết kế tinh gọn", "Kết cấu đơn giản", "Vật liệu phù hợp"]
        },
        {
            title: "Biệt thự - Villa",
            designPrice: "200,000 - 350,000 VNĐ/m²",
            constructionPrice: "3,500,000 - 4,200,000 VNĐ/m²",
            finishingPrice: "3,000,000 - 4,000,000 VNĐ/m²",
            totalPrice: "6,500,000 - 9,000,000 VNĐ/m²",
            description: "Phong cách hiện đại, tân cổ điển",
            icon: "fa-building",
            features: ["Thiết kế cao cấp", "Nhiều không gian", "Hoàn thiện luxury"]
        },
        {
            title: "Lâu đài - Dinh thự",
            designPrice: "300,000 - 450,000 VNĐ/m²",
            constructionPrice: "4,000,000 - 5,000,000 VNĐ/m²",
            finishingPrice: "4,000,000 - 5,500,000 VNĐ/m²",
            totalPrice: "9,000,000 - 12,000,000 VNĐ/m²",
            description: "Kiến trúc phức tạp, nhiều chi tiết cổ điển",
            icon: "fa-chess-rook",
            features: ["Thiết kế phức tạp", "Chi tiết cầu kỳ", "Vật liệu cao cấp"]
        },
        {
            title: "Khách sạn - Nhà hàng",
            designPrice: "180,000 - 280,000 VNĐ/m²",
            constructionPrice: "3,500,000 - 4,500,000 VNĐ/m²",
            finishingPrice: "3,000,000 - 4,500,000 VNĐ/m²",
            totalPrice: "6,000,000 - 8,500,000 VNĐ/m²",
            description: "Đảm bảo công năng kinh doanh & thẩm mỹ",
            icon: "fa-hotel",
            features: ["Tiêu chuẩn PCCC", "Công năng kinh doanh", "Thẩm mỹ cao"]
        },
        {
            title: "Nhà xưởng - Công nghiệp",
            designPrice: "80,000 - 120,000 VNĐ/m²",
            constructionPrice: "2,500,000 - 3,200,000 VNĐ/m²",
            finishingPrice: "1,800,000 - 2,500,000 VNĐ/m²",
            totalPrice: "3,500,000 - 5,000,000 VNĐ/m²",
            description: "Thiết kế kết cấu bền vững, tối ưu công năng",
            icon: "fa-industry",
            features: ["Kết cấu thép", "Hoàn thiện công nghiệp", "Tối ưu sản xuất"]
        }
    ];

    // Sub-pages data
    const subPages = [
        {
            title: "Báo giá thiết kế kiến trúc",
            slug: "thiet-ke-kien-truc",
            description: "Báo giá thiết kế kiến trúc 2025 chi tiết tại Hà Nội & Nha Trang",
            icon: "fa-drafting-compass",
            priceRange: "80,000 - 450,000 VNĐ/m²"
        },
        {
            title: "Báo giá thi công phần thô",
            slug: "thi-cong-phan-tho",
            description: "Báo giá thi công kiến trúc phần thô 2025 tại Hà Nội & Nha Trang",
            icon: "fa-hard-hat",
            priceRange: "2,500,000 - 5,000,000 VNĐ/m²"
        },
        {
            title: "Báo giá thi công hoàn thiện",
            slug: "thi-cong-hoan-thien",
            description: "Báo giá thi công kiến trúc hoàn thiện 2025 tại Hà Nội & Nha Trang",
            icon: "fa-paint-brush",
            priceRange: "1,800,000 - 5,500,000 VNĐ/m²"
        },
        {
            title: "Báo giá thi công trọn gói",
            slug: "thi-cong-tron-goi",
            description: "Báo giá thi công kiến trúc trọn gói 2025 tại Hà Nội & Nha Trang",
            icon: "fa-clipboard-list",
            priceRange: "3,500,000 - 12,000,000 VNĐ/m²"
        }
    ];

    // Cost factors
    const costFactors = [
        {
            title: "Diện tích công trình",
            description: "Diện tích càng lớn, đơn giá càng ưu đãi",
            icon: "fa-expand-arrows-alt"
        },
        {
            title: "Phong cách kiến trúc",
            description: "Hiện đại thường rẻ hơn tân cổ điển, cổ điển",
            icon: "fa-palette"
        },
        {
            title: "Độ phức tạp",
            description: "Lâu đài, khách sạn nhiều chi tiết có giá cao hơn nhà phố",
            icon: "fa-cogs"
        },
        {
            title: "Yêu cầu đặc biệt",
            description: "Kết hợp phong thủy, cảnh quan, hồ bơi...",
            icon: "fa-plus-circle"
        }
    ];

    // Process steps
    const processSteps = [
        {
            step: 1,
            title: "Khảo sát & tư vấn",
            description: "Khảo sát hiện trạng & tư vấn nhu cầu",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Đề xuất ý tưởng",
            description: "Đề xuất ý tưởng & phong cách kiến trúc",
            icon: "fa-lightbulb"
        },
        {
            step: 3,
            title: "Thiết kế mặt bằng",
            description: "Thiết kế mặt bằng công năng chi tiết",
            icon: "fa-drafting-compass"
        },
        {
            step: 4,
            title: "Phối cảnh 3D",
            description: "Triển khai phối cảnh 3D ngoại thất",
            icon: "fa-cube"
        },
        {
            step: 5,
            title: "Bàn giao hồ sơ",
            description: "Bàn giao hồ sơ thiết kế kiến trúc đầy đủ",
            icon: "fa-file-alt"
        },
        {
            step: 6,
            title: "Hỗ trợ thi công",
            description: "Hỗ trợ giám sát thi công",
            icon: "fa-tools"
        }
    ];

    // Services and commitments
    const services = [
        {
            title: "Miễn phí tư vấn",
            description: "Miễn phí tư vấn & khảo sát ban đầu",
            icon: "fa-gift"
        },
        {
            title: "Thiết kế 3D",
            description: "Thiết kế 3D chân thực, dễ hình dung công trình",
            icon: "fa-cube"
        },
        {
            title: "Đội ngũ KTS",
            description: "Đội ngũ KTS giàu kinh nghiệm, am hiểu nhiều phong cách",
            icon: "fa-users"
        },
        {
            title: "Cam kết tiến độ",
            description: "Cam kết bàn giao đúng tiến độ, hồ sơ chi tiết",
            icon: "fa-clock"
        }
    ];

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
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
                            <span>Báo giá thiết kế, thi công nhà</span>
                        </nav>
                        <h1 className="page-title">
                            🏛️ Báo giá thiết kế, thi công nhà 2025
                        </h1>
                        <p className="page-subtitle">
                            Báo giá thiết kế, thi công nhà chi tiết tại Hà Nội & Nha Trang.
                            Dịch vụ trọn gói từ thiết kế đến hoàn thiện. Cam kết minh bạch, không phát sinh.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="page-main">
                <div className="container">
                    {/* Introduction Section */}
                    <section className="intro-section">
                        <div className="intro-content">
                            <h2>Giới thiệu về thiết kế và thi công nhà 2025</h2>
                            <p>
                                Trong xây dựng, <strong>thiết kế kiến trúc</strong> là bước khởi đầu quan trọng,
                                quyết định đến công năng, thẩm mỹ và chi phí thi công. Một bản thiết kế
                                chuyên nghiệp sẽ giúp gia chủ <strong>tối ưu không gian - kiểm soát ngân sách -
                                đảm bảo phong thủy - nâng cao giá trị bất động sản</strong>.
                            </p>
                            <p>
                                Năm 2025, tại <strong>Hà Nội</strong> và <strong>Nha Trang</strong>,
                                nhu cầu thiết kế kiến trúc ngày càng tăng, đặc biệt với các loại hình:
                                nhà phố, biệt thự, lâu đài, khách sạn, nhà xưởng.
                            </p>
                        </div>
                    </section>

                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Tổng quan báo giá
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'subpages' ? 'active' : ''}`}
                            onClick={() => setActiveTab('subpages')}
                        >
                            Báo giá chi tiết
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'process' ? 'active' : ''}`}
                            onClick={() => setActiveTab('process')}
                        >
                            Quy trình
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Pricing Table */}
                            <section className="pricing-section">
                                <h2>Bảng báo giá thiết kế, thi công nhà 2025</h2>
                                <div className="pricing-grid">
                                    {pricingData.map((item, index) => (
                                        <div key={index} className="pricing-card">
                                            <div className="card-header">
                                                <div className="card-icon">
                                                    <i className={`fas ${item.icon}`}></i>
                                                </div>
                                                <h3>{item.title}</h3>
                                                <p className="description">{item.description}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="price-item">
                                                    <span className="label">Thiết kế:</span>
                                                    <span className="price">{item.designPrice}</span>
                                                </div>
                                                <div className="price-item">
                                                    <span className="label">Phần thô:</span>
                                                    <span className="price">{item.constructionPrice}</span>
                                                </div>
                                                <div className="price-item">
                                                    <span className="label">Hoàn thiện:</span>
                                                    <span className="price">{item.finishingPrice}</span>
                                                </div>
                                                <div className="price-item total">
                                                    <span className="label">Trọn gói:</span>
                                                    <span className="price">{item.totalPrice}</span>
                                                </div>
                                                <ul className="features">
                                                    {item.features.map((feature, idx) => (
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

                            {/* Cost Factors */}
                            <section className="factors-section">
                                <h2>Các yếu tố ảnh hưởng đến chi phí</h2>
                                <div className="factors-grid">
                                    {costFactors.map((factor, index) => (
                                        <div key={index} className="factor-card">
                                            <div className="factor-icon">
                                                <i className={`fas ${factor.icon}`}></i>
                                            </div>
                                            <h3>{factor.title}</h3>
                                            <p>{factor.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Services Section */}
                            <section className="services-section">
                                <h2>Ưu đãi & cam kết dịch vụ</h2>
                                <div className="services-grid">
                                    {services.map((service, index) => (
                                        <div key={index} className="service-card">
                                            <div className="service-icon">
                                                <i className={`fas ${service.icon}`}></i>
                                            </div>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === 'subpages' && (
                        <section className="subpages-section">
                            <h2>Báo giá chi tiết theo từng hạng mục</h2>
                            <div className="subpages-grid">
                                {subPages.map((page, index) => (
                                    <div key={index} className="subpage-card">
                                        <div className="subpage-header">
                                            <div className="subpage-icon">
                                                <i className={`fas ${page.icon}`}></i>
                                            </div>
                                            <h3>{page.title}</h3>
                                        </div>
                                        <div className="subpage-body">
                                            <p>{page.description}</p>
                                            <div className="price-range">
                                                <strong>{page.priceRange}</strong>
                                            </div>
                                            <a
                                                href={`/bao-gia/bao-gia-thiet-ke-thi-cong/${page.slug}`}
                                                className="btn btn-primary"
                                            >
                                                Xem chi tiết
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {activeTab === 'process' && (
                        <section className="process-section">
                            <h2>Quy trình thiết kế kiến trúc 2025</h2>
                            <div className="process-timeline">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="process-step">
                                        <div className="step-number">{step.step}</div>
                                        <div className="step-icon">
                                            <i className={`fas ${step.icon}`}></i>
                                        </div>
                                        <div className="step-content">
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA Section */}
                    <section className="cta-section">
                        <div className="cta-content">
                            <h2>Nhận tư vấn miễn phí ngay hôm nay!</h2>
                            <p>
                                Liên hệ ngay để nhận <strong>tư vấn miễn phí & báo giá chi tiết</strong>
                                cho công trình của bạn
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
                                    Gửi yêu cầu
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default BaoGiaThietKeThiCongNhaPage;