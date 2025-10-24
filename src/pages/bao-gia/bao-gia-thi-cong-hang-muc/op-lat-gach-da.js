// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const OpLatGachDaPage = () => {
    const [activeTab, setActiveTab] = useState('ceramic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Tiling types
    const tilingTypes = [
        {
            id: 'ceramic',
            name: 'Gạch Ceramic & Porcelain',
            price: '80,000 - 180,000 VNĐ/m²',
            description: 'Ốp lát gạch ceramic, porcelain cho phòng khách, bếp, WC',
            features: [
                'Gạch ceramic/porcelain loại A',
                'Keo dán chuyên dụng Dulux/Jotun',
                'Xi măng trắng chít mạch',
                'Ron nhựa màu đồng bộ',
                'Bảo hành 12-18 tháng'
            ],
            applications: [
                { room: 'Phòng khách', size: '60x60cm', price: '100-150K/m²' },
                { room: 'Phòng bếp', size: '30x60cm', price: '90-140K/m²' },
                { room: 'Phòng tắm', size: '30x30cm', price: '80-120K/m²' },
                { room: 'Ban công', size: '40x40cm', price: '85-130K/m²' }
            ],
            bgColor: '#059669'
        },
        {
            id: 'granite',
            name: 'Đá Granite Tự Nhiên',
            price: '220,000 - 350,000 VNĐ/m²',
            description: 'Ốp lát đá granite tự nhiên cao cấp, bền đẹp sang trọng',
            features: [
                'Đá granite loại A',
                'Cắt máy, mài bóng chuẩn',
                'Keo dán đá chuyên dụng',
                'Chống thấm, chống bám bẩn',
                'Bảo hành 18-24 tháng'
            ],
            applications: [
                { room: 'Phòng khách cao cấp', type: 'Đá xám Ấn Độ', price: '250-320K/m²' },
                { room: 'Cầu thang', type: 'Đá đen Galaxy', price: '280-350K/m²' },
                { room: 'Sảnh lớn', type: 'Đá trắng Bình Định', price: '220-280K/m²' },
                { room: 'Bàn bếp', type: 'Đá nâu Anh Quốc', price: '300-350K/m²' }
            ],
            bgColor: '#475569'
        },
        {
            id: 'marble',
            name: 'Đá Marble & Nhân Tạo',
            price: '350,000 - 550,000 VNĐ/m²',
            description: 'Đá marble tự nhiên và nhân tạo cho không gian luxury',
            features: [
                'Đá marble tự nhiên/nhân tạo',
                'Gia công chính xác cao',
                'Xử lý chống thấm đặc biệt',
                'Đánh bóng crystal finish',
                'Bảo hành 24-36 tháng'
            ],
            applications: [
                { room: 'Biệt thự cao cấp', type: 'Marble Carrara', price: '450-550K/m²' },
                { room: 'Khách sạn 5*', type: 'Marble nhân tạo', price: '350-450K/m²' },
                { room: 'Showroom', type: 'Marble Calacatta', price: '480-550K/m²' },
                { room: 'Văn phòng CEO', type: 'Đá nhân tạo Caesar', price: '380-480K/m²' }
            ],
            bgColor: '#dc2626'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Chuẩn Bị',
            description: 'Kiểm tra độ phẳng, độ ẩm, xử lý lớp nền',
            duration: '0.5-1 ngày',
            icon: 'fas fa-ruler-combined'
        },
        {
            step: 2,
            title: 'Cán Nền & Trộn Keo',
            description: 'Cán đều bề mặt, trộn keo dán theo tỷ lệ chuẩn',
            duration: '0.5 ngày',
            icon: 'fas fa-trowel'
        },
        {
            step: 3,
            title: 'Ốp Lát Gạch/Đá',
            description: 'Lát từng viên, giữ khe đều, kiểm tra độ phẳng',
            duration: '2-4 ngày',
            icon: 'fas fa-th'
        },
        {
            step: 4,
            title: 'Chít Mạch Ron',
            description: 'Chít mạch xi măng trắng hoặc ron nhựa màu',
            duration: '1 ngày',
            icon: 'fas fa-fill'
        },
        {
            step: 5,
            title: 'Vệ Sinh & Hoàn Thiện',
            description: 'Làm sạch, đánh bóng, kiểm tra chất lượng',
            duration: '0.5-1 ngày',
            icon: 'fas fa-sparkles'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Vệ Sinh Hàng Ngày',
            tips: [
                'Quét hoặc lau bằng khăn ẩm',
                'Tránh chất tẩy mạnh',
                'Lau khô khi có nước đổ',
                'Dùng miếng lót chân bàn ghế'
            ],
            frequency: 'Hàng ngày',
            icon: 'fas fa-broom'
        },
        {
            category: 'Bảo Dưỡng Định Kỳ',
            tips: [
                'Vệ sinh chuyên sâu 3-6 tháng',
                'Đánh bóng đá 6-12 tháng',
                'Xử lý chống thấm lại',
                'Thay ron nhựa khi phai'
            ],
            frequency: '3-6 tháng',
            icon: 'fas fa-tools'
        },
        {
            category: 'Xử Lý Vết Bẩn',
            tips: [
                'Vết thường: nước xà phòng',
                'Vết dầu mỡ: dung dịch kiềm',
                'Vết cà phê: nước chanh loãng',
                'Vết rỉ sét: dung dịch acid nhẹ'
            ],
            frequency: 'Khi cần',
            icon: 'fas fa-spray-can'
        },
        {
            category: 'Bảo Vệ Bề Mặt',
            tips: [
                'Không kéo lê đồ nặng',
                'Dùng tấm lót bảo vệ',
                'Tránh va đập mạnh',
                'Xử lý ngay vết nứt nhỏ'
            ],
            frequency: 'Thường xuyên',
            icon: 'fas fa-shield-alt'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nên chọn gạch ceramic hay porcelain?',
            answer: 'Porcelain bền hơn, hút nước ít hơn, phù hợp phòng ẩm, giá cao hơn 20-30%. Ceramic giá rẻ hơn, đủ dùng cho phòng khách, phòng ngủ. Với phòng tắm, bếp nên chọn porcelain.'
        },
        {
            question: 'Đá granite và marble khác nhau thế nào?',
            answer: 'Granite cứng hơn, chống trầy tốt, ít hút nước, phù hợp sàn nhà. Marble mềm hơn, sang trọng hơn, dễ trầy, thích hợp làm điểm nhấn. Granite bền và dễ bảo dưỡng hơn.'
        },
        {
            question: 'Chi phí ốp lát căn hộ 80m² bao nhiêu?',
            answer: 'Gạch ceramic: 6-10 triệu. Porcelain: 10-15 triệu. Đá granite: 18-28 triệu. Đã bao gồm vật liệu + thi công + hoàn thiện.'
        },
        {
            question: 'Thời gian thi công ốp lát mất bao lâu?',
            answer: 'Căn hộ 80m²: Gạch 4-6 ngày, đá granite 5-8 ngày. Bao gồm chuẩn bị, ốp lát, hoàn thiện. Thời gian phụ thuộc độ phức tạp pattern.'
        },
        {
            question: 'Làm sao tránh gạch bị nứt?',
            answer: 'Dùng keo dán tốt, để khe co giãn đủ rộng (1-2mm), tránh va đập mạnh. Với đá tự nhiên cần xử lý chống thấm mặt sau. Thi công đúng kỹ thuật là quan trọng nhất.'
        },
        {
            question: 'Chi phí bảo dưỡng ốp lát như thế nào?',
            answer: 'Gạch: 20-40K VNĐ/m²/2 năm (vệ sinh chuyên sâu). Đá tự nhiên: 50-100K VNĐ/m²/2 năm (đánh bóng, seal bảo vệ). Chi phí thấp nếu tự làm.'
        }
    ];

    const currentType = tilingTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-th icon-flooring"></i>
                        Báo Giá Ốp Lát Gạch & Đá
                    </h1>
                    <p className="section-subtitle">
                        Thi công ốp lát gạch ceramic, porcelain, đá granite, marble chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-gem"></i>
                            <span>Chất Lượng Cao</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Bảo Hành Dài</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Thợ Chuyên Nghiệp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-truck"></i>
                            <span>Giao Hàng Nhanh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tiling Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Vật Liệu & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại vật liệu ốp lát phổ biến
                    </p>

                    <div className="tabs">
                        {tilingTypes.map(type => (
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
                                    <h4><i className="fas fa-star"></i> Bao gồm:</h4>
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
                                    <h4><i className="fas fa-home"></i> Ứng dụng & giá:</h4>
                                    <div className="item-list">
                                        {currentType.applications.map((app, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{app.room}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">{app.size || app.type}</span>
                                                    <span className="item-price-extended">{app.price}</span>
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
                                        Xem Mẫu Gạch
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
                        5 bước ốp lát chuyên nghiệp
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

            {/* Maintenance Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Hướng Dẫn Bảo Dưỡng
                    </h2>
                    <p className="section-subtitle">
                        Giữ gạch/đá bền đẹp lâu dài
                    </p>

                    <div className="grid-4">
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
                        Giải đáp thắc mắc về ốp lát
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

export default OpLatGachDaPage;