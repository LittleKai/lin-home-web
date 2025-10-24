// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/san-go.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const SanGoPage = () => {
    const [activeTab, setActiveTab] = useState('industrial');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for flooring types
    const flooringTypes = [
        {
            id: 'industrial',
            name: 'Sàn Gỗ Công Nghiệp',
            price: '180,000 - 450,000 VNĐ/m²',
            description: 'Sàn gỗ công nghiệp HDF, chống ẩm, đa dạng mẫu mã',
            features: [
                'Gỗ HDF chống ẩm 8-12mm',
                'Lớp lót chống ẩm EPE',
                'Phào chân tường gỗ MDF',
                'Keo dán chuyên dụng',
                'Bảo hành 12-24 tháng'
            ],
            brands: [
                { name: 'Robina', price: '280,000 - 450,000 VNĐ/m²' },
                { name: 'Inovar', price: '220,000 - 380,000 VNĐ/m²' },
                { name: 'Janmi', price: '180,000 - 320,000 VNĐ/m²' },
                { name: 'Kronospan', price: '200,000 - 350,000 VNĐ/m²' }
            ],
            bgColor: '#8b5a2b'
        },
        {
            id: 'natural',
            name: 'Sàn Gỗ Tự Nhiên',
            price: '450,000 - 1,200,000 VNĐ/m²',
            description: 'Gỗ tự nhiên cao cấp: sồi, căm xe, lim, teak',
            features: [
                'Gỗ tự nhiên loại A 15-18mm',
                'Xử lý chống mối mọt, chống cong vênh',
                'Sơn PU hoặc dầu tự nhiên',
                'Thi công chuyên nghiệp',
                'Bảo hành 24-36 tháng'
            ],
            brands: [
                { name: 'Gỗ Sồi Nga', price: '650,000 - 950,000 VNĐ/m²' },
                { name: 'Gỗ Căm Xe', price: '550,000 - 850,000 VNĐ/m²' },
                { name: 'Gỗ Lim Nam Phi', price: '800,000 - 1,200,000 VNĐ/m²' },
                { name: 'Gỗ Teak', price: '900,000 - 1,200,000 VNĐ/m²' }
            ],
            bgColor: '#92400e'
        },
        {
            id: 'spc',
            name: 'Sàn Nhựa SPC',
            price: '150,000 - 350,000 VNĐ/m²',
            description: 'Sàn nhựa composite SPC chống nước 100%, an toàn',
            features: [
                'Chống nước 100%',
                'Chống trầy xước tốt',
                'Không chứa formaldehyde',
                'Lắp đặt nhanh không keo',
                'Bảo hành 15-20 năm'
            ],
            brands: [
                { name: 'Aimaru', price: '200,000 - 350,000 VNĐ/m²' },
                { name: 'Railflex', price: '180,000 - 320,000 VNĐ/m²' },
                { name: 'Galaxy', price: '150,000 - 280,000 VNĐ/m²' },
                { name: 'Kosmos', price: '170,000 - 300,000 VNĐ/m²' }
            ],
            bgColor: '#059669'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Chuẩn Bị Nền',
            description: 'Vệ sinh nền, kiểm tra độ phẳng, độ ẩm, xử lý khuyết tật',
            duration: '0.5-1 ngày',
            icon: 'fas fa-broom'
        },
        {
            step: 2,
            title: 'Trải Lớp Lót Chống Ẩm',
            description: 'Trải màng PE hoặc lót EPE, keo dán chuyên dụng',
            duration: '0.5 ngày',
            icon: 'fas fa-layer-group'
        },
        {
            step: 3,
            title: 'Lắp Đặt Sàn Gỗ',
            description: 'Ghép tấm theo kỹ thuật hèm khóa, để khe co giãn',
            duration: '1-2 ngày',
            icon: 'fas fa-puzzle-piece'
        },
        {
            step: 4,
            title: 'Lắp Phào Chân Tường',
            description: 'Cố định phào che khe co giãn, tạo thẩm mỹ hoàn thiện',
            duration: '0.5 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 5,
            title: 'Vệ Sinh & Bàn Giao',
            description: 'Làm sạch bề mặt, kiểm tra chất lượng, hướng dẫn bảo dưỡng',
            duration: '0.5 ngày',
            icon: 'fas fa-sparkles'
        }
    ];

    // Climate considerations
    const climateAdvice = [
        {
            location: 'Hà Nội',
            climate: 'Ẩm ướt, nhiệt độ thay đổi',
            recommendations: [
                'Ưu tiên sàn gỗ công nghiệp chống ẩm',
                'Tránh gỗ tự nhiên vùng sàn ướt',
                'Sử dụng máy hút ẩm mùa mưa',
                'Lót chống ẩm EPE dày 3mm'
            ],
            icon: 'fas fa-cloud-rain'
        },
        {
            location: 'TP.HCM',
            climate: 'Nóng ẩm quanh năm',
            recommendations: [
                'Sàn nhựa SPC là lựa chọn tốt',
                'Gỗ công nghiệp chống ẩm cao cấp',
                'Đảm bảo thông gió tốt',
                'Kiểm tra độ ẩm nền trước lắp'
            ],
            icon: 'fas fa-sun'
        },
        {
            location: 'Đà Nẵng - Ven Biển',
            climate: 'Độ ẩm cao, gió mặn',
            recommendations: [
                'Ưu tiên sàn nhựa SPC',
                'Gỗ tự nhiên cần xử lý đặc biệt',
                'Kiểm tra thường xuyên',
                'Bảo dưỡng 3-6 tháng/lần'
            ],
            icon: 'fas fa-water'
        },
        {
            location: 'Tây Nguyên',
            climate: 'Khô hanh, nhiệt độ thấp',
            recommendations: [
                'Gỗ tự nhiên hoạt động tốt',
                'Cần giữ độ ẩm ổn định',
                'Tránh gỗ công nghiệp giá rẻ',
                'Sử dụng máy tạo ẩm mùa khô'
            ],
            icon: 'fas fa-mountain'
        }
    ];

    // Quality standards
    const qualityStandards = [
        {
            title: 'Tiêu Chuẩn Châu Âu E1',
            description: 'Hàm lượng formaldehyde ≤ 0.5mg/L, an toàn sức khỏe',
            standard: 'E1 / E0',
            icon: 'fas fa-shield-alt'
        },
        {
            title: 'Chống Ẩm AC4-AC5',
            description: 'Chống mài mòn cấp cao, độ bền trên 15 năm',
            standard: 'AC4 / AC5',
            icon: 'fas fa-water'
        },
        {
            title: 'Chứng Nhận FSC',
            description: 'Gỗ từ nguồn bền vững, thân thiện môi trường',
            standard: 'FSC Certified',
            icon: 'fas fa-leaf'
        },
        {
            title: 'ISO 9001:2015',
            description: 'Quy trình sản xuất đạt chuẩn quốc tế',
            standard: 'ISO 9001',
            icon: 'fas fa-certificate'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            title: 'Vệ Sinh Hàng Ngày',
            tips: [
                'Quét hoặc hút bụi thường xuyên',
                'Lau ẩm bằng khăn mềm',
                'Tránh để nước đọng lâu',
                'Không dùng chất tẩy mạnh'
            ],
            frequency: 'Hàng ngày',
            icon: 'fas fa-broom'
        },
        {
            title: 'Bảo Dưỡng Định Kỳ',
            tips: [
                'Đánh bóng bề mặt 6 tháng/lần',
                'Kiểm tra khe co giãn',
                'Bổ sung dầu dưỡng gỗ tự nhiên',
                'Sửa chữa kịp thời nếu hư hỏng'
            ],
            frequency: '3-6 tháng',
            icon: 'fas fa-tools'
        },
        {
            title: 'Bảo Vệ Sàn Gỗ',
            tips: [
                'Dùng thảm chùi chân ở cửa ra vào',
                'Đặt đệm lót chân bàn ghế',
                'Tránh kéo lê đồ nặng',
                'Không để nắng chiếu trực tiếp lâu'
            ],
            frequency: 'Thường xuyên',
            icon: 'fas fa-shield-alt'
        },
        {
            title: 'Kiểm Soát Độ Ẩm',
            tips: [
                'Duy trì độ ẩm 40-60%',
                'Sử dụng máy hút/tạo ẩm',
                'Thông gió đều đặn',
                'Tránh làm ướt sàn'
            ],
            frequency: 'Hàng ngày',
            icon: 'fas fa-tint'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Sàn gỗ công nghiệp và sàn gỗ tự nhiên khác nhau như thế nào?',
            answer: 'Sàn gỗ công nghiệp được làm từ gỗ HDF ép nhiều lớp với lớp phủ bề mặt, giá rẻ hơn, chống ẩm tốt hơn nhưng không thể đánh bóng lại. Sàn gỗ tự nhiên làm từ gỗ nguyên khối, bền hơn, sang trọng hơn, có thể đánh bóng nhiều lần nhưng giá cao và cần bảo dưỡng kỹ hơn.'
        },
        {
            question: 'Sàn nhựa SPC có bền không? So với sàn gỗ thì sao?',
            answer: 'Sàn nhựa SPC rất bền (bảo hành 15-20 năm), chống nước 100%, chống trầy tốt. Ưu điểm vượt trội là không sợ nước, phù hợp phòng tắm, bếp. Nhược điểm là không có cảm giác ấm áp, sang trọng như gỗ tự nhiên. Về giá cả thì SPC thường rẻ hơn gỗ tự nhiên nhưng tương đương hoặc cao hơn gỗ công nghiệp.'
        },
        {
            question: 'Thi công sàn gỗ cho căn hộ 80m² mất bao lâu?',
            answer: 'Thông thường mất khoảng 3-5 ngày cho căn hộ 80m². Bao gồm: chuẩn bị nền (1 ngày), trải lót chống ẩm (0.5 ngày), lắp đặt sàn (1.5-2 ngày), lắp phào và hoàn thiện (1 ngày). Thời gian có thể lâu hơn nếu nền không bằng phẳng hoặc cần xử lý đặc biệt.'
        },
        {
            question: 'Sàn gỗ có chống nước không? Có lắp được phòng tắm không?',
            answer: 'Sàn gỗ công nghiệp chống ẩm tốt nhưng KHÔNG chống nước 100%, không nên lắp phòng tắm. Sàn gỗ tự nhiên rất kỵ nước. Chỉ có sàn nhựa SPC mới chống nước hoàn toàn và phù hợp cho phòng tắm, bếp, ban công.'
        },
        {
            question: 'Chi phí trung bình để lắp sàn gỗ cho cả nhà?',
            answer: 'Tùy loại sàn: Sàn nhựa SPC (150-350K/m²), sàn gỗ công nghiệp (180-450K/m²), sàn gỗ tự nhiên (450K-1.2tr/m²). Giá đã bao gồm vật liệu + thi công. Ví dụ căn hộ 80m² dùng sàn gỗ công nghiệp trung bình: 80m² x 280K = 22.4 triệu VNĐ.'
        },
        {
            question: 'Làm thế nào để chọn sàn gỗ phù hợp với khí hậu miền Bắc?',
            answer: 'Khí hậu miền Bắc ẩm, nhiệt độ thay đổi nên nên chọn: 1) Sàn gỗ công nghiệp chống ẩm tốt (Robina, Inovar), 2) Sàn nhựa SPC nếu không quan trọng thẩm mỹ gỗ, 3) Tránh gỗ tự nhiên giá rẻ dễ cong vênh, 4) Dùng lót chống ẩm EPE dày, 5) Sử dụng máy hút ẩm mùa đông.'
        }
    ];

    const currentType = flooringTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-table-cells icon-flooring"></i>
                        Báo Giá Sàn Gỗ - Sàn Nhựa
                    </h1>
                    <p className="section-subtitle">
                        Thi công lắp đặt sàn gỗ công nghiệp, gỗ tự nhiên, sàn nhựa SPC chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-tags icon-pricing"></i>
                            <span>Giá Cạnh Tranh</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-quality"></i>
                            <span>Bảo Hành Dài</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Thi Công Chuyên Nghiệp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-truck"></i>
                            <span>Giao Hàng Nhanh</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flooring Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Bảng Giá Sàn Gỗ & Sàn Nhựa
                    </h2>
                    <p className="section-subtitle">
                        Chọn loại sàn phù hợp với nhu cầu và ngân sách của bạn
                    </p>

                    {/* Tabs */}
                    <div className="tabs">
                        {flooringTypes.map(type => (
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
                                    <h4><i className="fas fa-star"></i> Đặc điểm nổi bật:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Brands Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-award"></i> Thương hiệu & giá:</h4>
                                    <div className="item-list">
                                        {currentType.brands.map((brand, index) => (
                                            <div key={index} className="item-card">
                                                <span className="item-name">{brand.name}</span>
                                                <span className="item-price">{brand.price}</span>
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
                        5 bước thi công chuẩn, đảm bảo chất lượng và thẩm mỹ
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

            {/* Climate Advice */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-cloud-rain icon-location"></i>
                        Tư Vấn Theo Khí Hậu
                    </h2>
                    <p className="section-subtitle">
                        Lựa chọn sàn gỗ phù hợp với điều kiện khí hậu địa phương
                    </p>

                    <div className="grid-4">
                        {climateAdvice.map((advice, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={advice.icon}></i>
                                    {advice.location}
                                </h3>
                                <p className="subtitle">{advice.climate}</p>
                                <h4>Khuyến nghị:</h4>
                                <ul>
                                    {advice.recommendations.map((rec, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {rec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-certificate icon-quality"></i>
                        Tiêu Chuẩn Chất Lượng
                    </h2>
                    <p className="section-subtitle">
                        Sản phẩm đạt các tiêu chuẩn quốc tế cao nhất
                    </p>

                    <div className="grid-4">
                        {qualityStandards.map((standard, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={standard.icon}></i>
                                    {standard.title}
                                </h3>
                                <p>{standard.description}</p>
                                <span className="standard">{standard.standard}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Hướng Dẫn Bảo Dưỡng
                    </h2>
                    <p className="section-subtitle">
                        Bảo quản đúng cách giúp sàn gỗ bền đẹp lâu dài
                    </p>

                    <div className="grid-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={tip.icon}></i>
                                    {tip.title}
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
                        Giải đáp các thắc mắc phổ biến về sàn gỗ
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

export default SanGoPage;