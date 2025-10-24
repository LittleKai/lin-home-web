// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const TranVachThachCaoPage = () => {
    const [activeTab, setActiveTab] = useState('ceiling');
    const [activeFaq, setActiveFaq] = useState(null);

    // Gypsum types
    const gypsumTypes = [
        {
            id: 'ceiling',
            name: 'Trần Thạch Cao',
            price: '120,000 - 250,000 VNĐ/m²',
            description: 'Trần thạch cao phẳng, giật cấp, chống ẩm cho mọi không gian',
            features: [
                'Tấm thạch cao Knauf/Gyproc',
                'Khung xương C/U chịu lực',
                'Đèn LED âm trần hiện đại',
                'Sơn hoàn thiện mịn màng',
                'Bảo hành 12-24 tháng'
            ],
            types: [
                { type: 'Trần phẳng cơ bản', price: '120-160K/m²', feature: 'Đơn giản, phổ biến' },
                { type: 'Trần giật cấp 1-2 bậc', price: '160-200K/m²', feature: 'Tạo chiều sâu' },
                { type: 'Trần giật cấp phức tạp', price: '200-250K/m²', feature: 'Nghệ thuật, sang trọng' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'partition',
            name: 'Vách Ngăn Thạch Cao',
            price: '180,000 - 320,000 VNĐ/m²',
            description: 'Vách ngăn phòng, cách âm, chống cháy',
            features: [
                'Vách đơn hoặc vách đôi',
                'Chống cháy 2-4 giờ',
                'Cách âm 35-45dB',
                'Nhẹ, không ảnh hưởng móng',
                'Bảo hành 12-18 tháng'
            ],
            types: [
                { type: 'Vách đơn 75mm', price: '180-230K/m²', feature: 'Cách âm 35dB' },
                { type: 'Vách đôi 100mm', price: '230-280K/m²', feature: 'Cách âm 40dB' },
                { type: 'Vách chống cháy', price: '280-320K/m²', feature: 'Chống cháy 4h' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'decoration',
            name: 'Trang Trí Thạch Cao',
            price: '250,000 - 500,000 VNĐ/m²',
            description: 'Trần 3D, hoa văn nghệ thuật, backdrop TV',
            features: [
                'Thiết kế 3D theo yêu cầu',
                'Hoa văn điêu khắc tinh xảo',
                'Đèn LED RGB trang trí',
                'Sơn phủ cao cấp',
                'Bảo hành 18-36 tháng'
            ],
            types: [
                { type: 'Backdrop TV', price: '250-350K/m²', feature: 'Điểm nhấn phòng khách' },
                { type: 'Trần 3D nghệ thuật', price: '350-450K/m²', feature: 'Độc đáo, ấn tượng' },
                { type: 'Cột thạch cao cổ điển', price: '400-500K/m²', feature: 'Sang trọng luxury' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Thiết Kế',
            description: 'Đo đạc, thiết kế bản vẽ 3D, tư vấn mẫu mã',
            duration: '1-2 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 2,
            title: 'Lắp Khung Xương',
            description: 'Lắp khung xương thép C/U, đảm bảo chịu lực tốt',
            duration: '1-2 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 3,
            title: 'Lắp Tấm Thạch Cao',
            description: 'Đóng tấm thạch cao, xử lý mối nối cẩn thận',
            duration: '2-3 ngày',
            icon: 'fas fa-th-large'
        },
        {
            step: 4,
            title: 'Xử Lý Bề Mặt',
            description: 'Trét matit, chà nhám, chuẩn bị sơn',
            duration: '2-3 ngày',
            icon: 'fas fa-paint-roller'
        },
        {
            step: 5,
            title: 'Sơn & Hoàn Thiện',
            description: 'Sơn hoàn thiện, lắp đèn LED, vệ sinh',
            duration: '1-2 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Gypsum board types
    const boardTypes = [
        {
            type: 'Thạch Cao Tiêu Chuẩn',
            brand: 'Knauf/Gyproc',
            thickness: '9.5-12.5mm',
            uses: ['Trần phẳng', 'Vách thường'],
            price: '45,000 - 65,000 VNĐ/tấm',
            icon: 'fas fa-square'
        },
        {
            type: 'Thạch Cao Chống Ẩm',
            brand: 'Knauf Aquapanel',
            thickness: '12.5mm',
            uses: ['Nhà bếp', 'Phòng tắm', 'Ban công'],
            price: '70,000 - 95,000 VNĐ/tấm',
            icon: 'fas fa-droplet'
        },
        {
            type: 'Thạch Cao Chống Cháy',
            brand: 'Gyproc Fireline',
            thickness: '12.5-15mm',
            uses: ['Văn phòng', 'Khách sạn', 'Bệnh viện'],
            price: '80,000 - 110,000 VNĐ/tấm',
            icon: 'fas fa-fire-extinguisher'
        },
        {
            type: 'Thạch Cao Cách Âm',
            brand: 'Knauf Soundshield',
            thickness: '12.5mm',
            uses: ['Phòng ngủ', 'Phòng họp', 'Studio'],
            price: '85,000 - 120,000 VNĐ/tấm',
            icon: 'fas fa-volume-mute'
        }
    ];

    // Design styles
    const designStyles = [
        {
            style: 'Hiện Đại - Tối Giản',
            description: 'Trần phẳng, đường nét thẳng, đèn LED âm trần',
            spaces: ['Căn hộ chung cư', 'Văn phòng', 'Showroom'],
            price: '120-180K/m²',
            icon: 'fas fa-minus'
        },
        {
            style: 'Tân Cổ Điển',
            description: 'Trần giật cấp, phào chỉ, đèn chùm pha lê',
            spaces: ['Biệt thự', 'Nhà phố', 'Khách sạn'],
            price: '200-300K/m²',
            icon: 'fas fa-crown'
        },
        {
            style: 'Cổ Điển Châu Âu',
            description: 'Hoa văn điêu khắc, cột trang trí, đèn cổ điển',
            spaces: ['Biệt thự sang trọng', 'Dinh thự', 'Resort cao cấp'],
            price: '300-500K/m²',
            icon: 'fas fa-chess-king'
        },
        {
            style: 'Công Nghiệp',
            description: 'Để lộ khung xương, đèn thả công nghiệp',
            spaces: ['Cafe', 'Quán bar', 'Văn phòng sáng tạo'],
            price: '100-150K/m²',
            icon: 'fas fa-industry'
        }
    ];

    // Benefits
    const benefits = [
        {
            title: 'Cách Âm & Cách Nhiệt',
            description: 'Giảm tiếng ồn 30-45dB, giữ nhiệt tốt',
            icon: 'fas fa-volume-mute',
            color: '#3b82f6'
        },
        {
            title: 'Chống Cháy An Toàn',
            description: 'Chống cháy 2-4 giờ, an toàn tuyệt đối',
            icon: 'fas fa-fire-extinguisher',
            color: '#ef4444'
        },
        {
            title: 'Nhẹ & Linh Hoạt',
            description: 'Không ảnh hưởng móng, dễ tạo hình',
            icon: 'fas fa-feather',
            color: '#10b981'
        },
        {
            title: 'Thẩm Mỹ Cao',
            description: 'Tạo không gian đẹp, sang trọng',
            icon: 'fas fa-palette',
            color: '#8b5cf6'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Vệ Sinh Định Kỳ',
            tips: [
                'Lau bụi bằng khăn mềm khô',
                'Tránh dùng nước trực tiếp',
                'Kiểm tra vết nứt nhỏ',
                'Sơn lại khi phai màu'
            ],
            frequency: '3-6 tháng',
            icon: 'fas fa-broom'
        },
        {
            category: 'Bảo Vệ Trần',
            tips: [
                'Tránh va đập mạnh',
                'Không treo đồ quá nặng',
                'Kiểm tra rò rỉ nước',
                'Thông gió tốt tránh ẩm'
            ],
            frequency: 'Thường xuyên',
            icon: 'fas fa-shield-alt'
        },
        {
            category: 'Xử Lý Sự Cố',
            tips: [
                'Nứt nhỏ: trét matit lại',
                'Ẩm mốc: sơn chống ẩm',
                'Rò rỉ: sửa nguồn nước',
                'Vết bẩn: sơn lại'
            ],
            frequency: 'Khi cần',
            icon: 'fas fa-wrench'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Trần thạch cao có bền không? Có bị nứt không?',
            answer: 'Trần thạch cao rất bền nếu thi công đúng kỹ thuật (tuổi thọ 15-20 năm). Có thể bị nứt nhỏ do co giãn nhiệt độ nhưng dễ sửa chữa. Cần chọn vật liệu chất lượng và thợ có kinh nghiệm.'
        },
        {
            question: 'Trần thạch cao có chống ẩm được không?',
            answer: 'Trần thạch cao tiêu chuẩn sợ ẩm. Nhưng có loại chống ẩm đặc biệt (Aquapanel) chịu được môi trường ẩm ướt. Phù hợp bếp, phòng tắm. Giá cao hơn 30-40% nhưng bền hơn nhiều.'
        },
        {
            question: 'Chi phí làm trần thạch cao cho căn hộ 80m² bao nhiêu?',
            answer: 'Trần phẳng đơn giản: 10-13 triệu (120-160K/m²). Trần giật cấp 1-2 bậc: 13-16 triệu (160-200K/m²). Trần có thiết kế phức tạp: 16-20 triệu (200-250K/m²). Đã bao gồm vật liệu + thi công.'
        },
        {
            question: 'Thời gian thi công trần thạch cao mất bao lâu?',
            answer: 'Căn hộ 80m² trần phẳng: 7-10 ngày. Trần giật cấp: 10-14 ngày. Bao gồm lắp khung (2-3 ngày), đóng tấm (2-3 ngày), trét matit (2-3 ngày), sơn (2-3 ngày), phơi khô.'
        },
        {
            question: 'Vách thạch cao có cách âm tốt không?',
            answer: 'Vách đơn 75mm: ~35dB (đủ dùng). Vách đôi 100mm có bông cách âm: ~40-45dB (tốt). Vách chuyên dụng: ~50dB (rất tốt). Hiệu quả cách âm phụ thuộc độ dày và vật liệu cách âm bên trong.'
        },
        {
            question: 'Có thể tháo dỡ và lắp lại vách thạch cao không?',
            answer: 'Rất khó và thường làm hỏng tấm thạch cao. Nếu cần di chuyển vách thì phải phá bỏ và làm lại. Đây là nhược điểm của thạch cao so với vách panel có thể tháo lắp.'
        }
    ];

    const currentType = gypsumTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-grip-lines icon-ceiling"></i>
                        Báo Giá Trần Vách Thạch Cao
                    </h1>
                    <p className="section-subtitle">
                        Thi công trần thạch cao, vách ngăn, trang trí thạch cao chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-feather"></i>
                            <span>Nhẹ & Linh Hoạt</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-volume-mute"></i>
                            <span>Cách Âm Tốt</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-fire-extinguisher icon-safety"></i>
                            <span>Chống Cháy</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-palette icon-design"></i>
                            <span>Thẩm Mỹ Cao</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gypsum Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Hình & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại hình thạch cao phổ biến
                    </p>

                    <div className="tabs">
                        {gypsumTypes.map(type => (
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

                                <div className="info-section">
                                    <h4><i className="fas fa-list"></i> Phân loại & giá:</h4>
                                    <div className="item-list">
                                        {currentType.types.map((item, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{item.type}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">{item.feature}</span>
                                                    <span className="item-price-extended">{item.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary">
                                        <i className="fas fa-phone"></i>
                                        Liên Hệ Báo Giá
                                    </a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                        <i className="fas fa-eye"></i>
                                        Xem Mẫu Thiết Kế
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
                        5 bước thi công trần thạch cao chuyên nghiệp
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

            {/* Board Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-th icon-materials"></i>
                        Các Loại Tấm Thạch Cao
                    </h2>
                    <p className="section-subtitle">
                        Chọn loại tấm phù hợp với mục đích
                    </p>

                    <div className="grid-4">
                        {boardTypes.map((board, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={board.icon}></i>
                                    {board.type}
                                </h3>
                                <p><strong>Thương hiệu:</strong> {board.brand}</p>
                                <p><strong>Độ dày:</strong> {board.thickness}</p>
                                <h4>Ứng dụng:</h4>
                                <ul>
                                    {board.uses.map((use, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{board.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Styles */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-palette icon-design"></i>
                        Phong Cách Thiết Kế
                    </h2>
                    <p className="section-subtitle">
                        Các phong cách trần thạch cao phổ biến
                    </p>

                    <div className="grid-4">
                        {designStyles.map((style, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={style.icon}></i>
                                    {style.style}
                                </h3>
                                <p>{style.description}</p>
                                <h4>Phù hợp:</h4>
                                <ul>
                                    {style.spaces.map((space, i) => (
                                        <li key={i}>
                                            <i className="fas fa-dot-circle"></i>
                                            {space}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{style.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Ưu Điểm Thạch Cao
                    </h2>
                    <p className="section-subtitle">
                        Lợi ích của trần vách thạch cao
                    </p>

                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: benefit.color }}>
                                    <i className={benefit.icon}></i>
                                    {benefit.title}
                                </h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Hướng Dẫn Bảo Dưỡng
                    </h2>
                    <p className="section-subtitle">
                        Giữ trần thạch cao bền đẹp
                    </p>

                    <div className="grid-3">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={tip.icon}></i>
                                    {tip.category}
                                </h3>
                                <ul>
                                    {tip.tips.map((t, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                <span className="frequency-badge">{tip.frequency}</span>
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
                        Giải đáp thắc mắc về trần thạch cao
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

export default TranVachThachCaoPage;