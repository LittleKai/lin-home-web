// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong-nha.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../thiet-ke/ThietKePage.css';
import '../thi-cong/ThiCongHangMuc.css';
import './BaoGiaThietKeThiCong.css';

const BaoGiaThietKeThiCongNhaPage = () => {
    const [activePackage, setActivePackage] = useState('nha-pho');
    const [activeFaq, setActiveFaq] = useState(null);

    // Overview pricing data
    const overviewPricing = [
        {
            id: 'nha-pho',
            title: 'Nhà Phố 3-4 Tầng',
            designPrice: '120,000 - 180,000 VNĐ/m²',
            constructionPrice: '2,800,000 - 3,500,000 VNĐ/m²',
            finishingPrice: '2,200,000 - 3,200,000 VNĐ/m²',
            totalPrice: '4,500,000 - 6,200,000 VNĐ/m²',
            description: 'Giải pháp hoàn hảo cho gia đình trẻ',
            icon: 'fas fa-home',
            features: ['Thiết kế hiện đại', 'Tối ưu diện tích', 'Chi phí hợp lý'],
            bgColor: '#10b981'
        },
        {
            id: 'biet-thu',
            title: 'Biệt Thự, Villa',
            designPrice: '180,000 - 300,000 VNĐ/m²',
            constructionPrice: '3,500,000 - 4,800,000 VNĐ/m²',
            finishingPrice: '3,200,000 - 4,500,000 VNĐ/m²',
            totalPrice: '6,500,000 - 8,800,000 VNĐ/m²',
            description: 'Đẳng cấp sống cho gia đình thành đạt',
            icon: 'far fa-building',
            features: ['Không gian rộng rãi', 'Thiết kế cao cấp', 'Sân vườn riêng'],
            bgColor: '#667eea'
        },
        {
            id: 'lau-dai',
            title: 'Lâu Đài, Dinh Thự',
            designPrice: '350,000 - 500,000 VNĐ/m²',
            constructionPrice: '4,800,000 - 6,500,000 VNĐ/m²',
            finishingPrice: '4,500,000 - 6,000,000 VNĐ/m²',
            totalPrice: '9,000,000 - 12,500,000 VNĐ/m²',
            description: 'Kiến trúc phức tạp, nhiều chi tiết cổ điển',
            icon: 'fas fa-chess-rook',
            features: ['Thiết kế phức tạp', 'Chi tiết cầu kỳ', 'Vật liệu cao cấp'],
            bgColor: '#f59e0b'
        }
    ];

    // Sub-pages data
    const subPages = [
        {
            title: 'Báo giá thiết kế kiến trúc',
            slug: 'thiet-ke-kien-truc',
            description: 'Báo giá thiết kế kiến trúc 2025 chi tiết tại Hà Nội & Nha Trang',
            icon: 'fas fa-compass',
            priceRange: '80,000 - 500,000 VNĐ/m²',
            link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
        },
        {
            title: 'Báo giá thi công phần thô',
            slug: 'thi-cong-phan-tho',
            description: 'Báo giá thi công kiến trúc phần thô 2025 tại Hà Nội & Nha Trang',
            icon: 'fas fa-hard-hat',
            priceRange: '2,500,000 - 6,500,000 VNĐ/m²',
            link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho'
        },
        {
            title: 'Báo giá thi công hoàn thiện',
            slug: 'thi-cong-hoan-thien',
            description: 'Báo giá thi công kiến trúc hoàn thiện 2025 tại Hà Nội & Nha Trang',
            icon: 'fas fa-paint-brush',
            priceRange: '1,800,000 - 6,500,000 VNĐ/m²',
            link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien'
        },
        {
            title: 'Báo giá thi công trọn gói',
            slug: 'thi-cong-tron-goi',
            description: 'Báo giá thi công kiến trúc trọn gói 2025 tại Hà Nội & Nha Trang',
            icon: 'fas fa-box',
            priceRange: '4,500,000 - 15,000,000 VNĐ/m²',
            link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Tư vấn & Khảo sát',
            description: 'Tìm hiểu nhu cầu, khảo sát thực địa',
            duration: '1-2 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Thiết kế & Báo giá',
            description: 'Thiết kế sơ bộ và báo giá chi tiết',
            duration: '7-14 ngày',
            icon: 'fas fa-compass'
        },
        {
            step: 3,
            title: 'Ký hợp đồng',
            description: 'Hoàn thiện hồ sơ pháp lý và ký kết',
            duration: '1-2 ngày',
            icon: 'fas fa-handshake'
        },
        {
            step: 4,
            title: 'Thi công',
            description: 'Thi công theo đúng thiết kế và tiến độ',
            duration: '60-180 ngày',
            icon: 'fas fa-hard-hat'
        },
        {
            step: 5,
            title: 'Nghiệm thu & Bàn giao',
            description: 'Kiểm tra chất lượng và bàn giao',
            duration: '2-3 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Báo giá có bao gồm thiết kế không?',
            answer: 'Tùy gói dịch vụ. Gói trọn gói bao gồm thiết kế, các gói riêng lẻ sẽ tính riêng chi phí thiết kế.'
        },
        {
            id: 2,
            question: 'Thời gian hoàn thành dự án mất bao lâu?',
            answer: 'Nhà phố: 3-4 tháng, Biệt thự: 4-6 tháng, Lâu đài: 6-10 tháng, tùy quy mô và độ phức tạp.'
        },
        {
            id: 3,
            question: 'Chi phí có thể thay đổi không?',
            answer: 'Báo giá cố định trong 30 ngày. Chỉ thay đổi khi khách hàng yêu cầu sửa đổi thiết kế hoặc nâng cấp vật liệu.'
        },
        {
            id: 4,
            question: 'Có hỗ trợ vay vốn ngân hàng không?',
            answer: 'Có hỗ trợ làm hồ sơ vay vốn tại các ngân hàng: Vietcombank, Techcombank, VPBank với lãi suất ưu đãi.'
        },
        {
            id: 5,
            question: 'Bảo hành như thế nào?',
            answer: 'Bảo hành kết cấu 5 năm, hoàn thiện 2-3 năm, hệ thống M&E 1-2 năm. Bảo trì miễn phí 6 tháng đầu.'
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const currentPricing = overviewPricing.find(item => item.id === activePackage);

    return (
        <div className="thiet-ke-page">
            {/* Overview Pricing */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2>💰 Tổng Quan Báo Giá 2025</h2>
                        <p>Bảng giá tham khảo cho các loại công trình phổ biến</p>
                    </div>

                    <div className="pricing-tabs">
                        {overviewPricing.map(item => (
                            <button
                                key={item.id}
                                className={`pricing-tab ${activePackage === item.id ? 'active' : ''}`}
                                onClick={() => setActivePackage(item.id)}
                            >
                                <i className={item.icon}></i>
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {currentPricing && (
                        <div className="pricing-overview">
                            <div className="pricing-card" style={{ borderColor: currentPricing.bgColor }}>
                                <div className="pricing-header" style={{ background: currentPricing.bgColor }}>
                                    <h3>
                                        <i className={currentPricing.icon}></i>
                                        {currentPricing.title}
                                    </h3>
                                    <p>{currentPricing.description}</p>
                                </div>

                                <div className="pricing-body">
                                    <div className="pricing-breakdown">
                                        <div className="breakdown-item">
                                            <span className="breakdown-label">Thiết kế kiến trúc:</span>
                                            <span className="breakdown-value">{currentPricing.designPrice}</span>
                                        </div>
                                        <div className="breakdown-item">
                                            <span className="breakdown-label">Thi công phần thô:</span>
                                            <span className="breakdown-value">{currentPricing.constructionPrice}</span>
                                        </div>
                                        <div className="breakdown-item">
                                            <span className="breakdown-label">Thi công hoàn thiện:</span>
                                            <span className="breakdown-value">{currentPricing.finishingPrice}</span>
                                        </div>
                                        <div className="breakdown-item total">
                                            <span className="breakdown-label">Tổng cộng (trọn gói):</span>
                                            <span className="breakdown-value">{currentPricing.totalPrice}</span>
                                        </div>
                                    </div>

                                    <div className="pricing-features">
                                        <h4>✨ Đặc điểm nổi bật:</h4>
                                        <ul>
                                            {currentPricing.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Sub Pages */}
            <section className="subpages-section">
                <div className="container">
                    <div className="section-header">
                        <h2>📋 Báo Giá Chi Tiết Theo Hạng Mục</h2>
                        <p>Xem báo giá cụ thể cho từng giai đoạn thi công</p>
                    </div>

                    <div className="subpages-grid">
                        {subPages.map((page, index) => (
                            <Link to={page.link} key={index} className="subpage-card">
                                <div className="subpage-header">
                                    <div className="subpage-icon">
                                        <i className={page.icon}></i>
                                    </div>
                                    <h3>{page.title}</h3>
                                </div>
                                <div className="subpage-body">
                                    <p>{page.description}</p>
                                    <div className="price-range">
                                        <strong>{page.priceRange}</strong>
                                    </div>
                                    <div className="subpage-link">
                                        Xem chi tiết <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Construction Process */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🔄 Quy Trình Thi Công</h2>
                        <p>5 bước thực hiện dự án chuyên nghiệp</p>
                    </div>

                    <div className="process-timeline">
                        {constructionProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-meta">
                                        <span className="step-duration">
                                            <i className="far fa-clock"></i> {step.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="advantages-section">
                <div className="container">
                    <div className="section-header">
                        <h2>⭐ Tại Sao Chọn Chúng Tôi?</h2>
                        <p>Những lợi thế vượt trội trong dịch vụ thiết kế thi công</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3>10+ Năm Kinh Nghiệm</h3>
                            <p>Đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, đã thực hiện hàng trăm dự án thành công.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                                <i className="fas fa-calculator"></i>
                            </div>
                            <h3>Báo Giá Minh Bạch</h3>
                            <p>Báo giá chi tiết từng hạng mục, không phát sinh ngoài dự tính. Cam kết giá tốt nhất thị trường.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Chất Lượng Đảm Bảo</h3>
                            <p>Sử dụng vật liệu chính hãng, quy trình thi công chuẩn kỹ thuật, giám sát chặt chẽ.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>Hỗ Trợ 24/7</h3>
                            <p>Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7. Bảo hành dài hạn, bảo trì định kỳ.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>❓ Câu Hỏi Thường Gặp</h2>
                        <p>Giải đáp những thắc mắc phổ biến về dịch vụ</p>
                    </div>

                    <div className="faq-container">
                        {faqData.map(faq => (
                            <div key={faq.id} className="faq-item">
                                <div
                                    className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
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
                </div>
            </section>

            {/* Contact Info */}
            <section className="contact-section">
                <div className="container">
                    <div className="section-header">
                        <h2>📞 Liên Hệ Báo Giá</h2>
                        <p>Nhận báo giá chi tiết và tư vấn miễn phí</p>
                    </div>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Hotline</h4>
                                <p>0941 090 333</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>info@linhome.vn</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Địa chỉ</h4>
                                <p>Hà Nội, Việt Nam</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Giờ làm việc</h4>
                                <p>T2-T6: 8:00-18:00, T7: 8:00-12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default BaoGiaThietKeThiCongNhaPage;