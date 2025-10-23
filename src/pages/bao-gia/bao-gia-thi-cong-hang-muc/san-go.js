// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/san-go.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const SanGoPage = () => {
    const [activeTab, setActiveTab] = useState('industrial');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for flooring
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
                'Xử lý chống mối mọt',
                'Sơn PU hoặc UV cao cấp',
                'Phào gỗ tự nhiên đồng bộ',
                'Bảo hành 24-36 tháng'
            ],
            brands: [
                { name: 'Gỗ Sồi Nga', price: '450,000 - 650,000 VNĐ/m²' },
                { name: 'Gỗ Căm Xe', price: '550,000 - 800,000 VNĐ/m²' },
                { name: 'Gỗ Lim Nam Phi', price: '650,000 - 950,000 VNĐ/m²' },
                { name: 'Gỗ Teak Burma', price: '800,000 - 1,200,000 VNĐ/m²' }
            ],
            bgColor: '#92400e'
        },
        {
            id: 'luxury',
            name: 'Sàn Gỗ Luxury (SPC/LVT)',
            price: '320,000 - 850,000 VNĐ/m²',
            description: 'Sàn gỗ SPC chống nước 100%, phù hợp mọi không gian',
            features: [
                'Cốt SPC chống nước tuyệt đối',
                'Bề mặt wear layer bền 20 năm',
                'Cách âm tốt, êm ái',
                'Lắp đặt nhanh, click lock',
                'Bảo hành 15-25 năm'
            ],
            brands: [
                { name: 'Floorpan SPC', price: '320,000 - 480,000 VNĐ/m²' },
                { name: 'Aimyhome LVT', price: '380,000 - 550,000 VNĐ/m²' },
                { name: 'Smartwood SPC', price: '420,000 - 650,000 VNĐ/m²' },
                { name: 'Pergo Rigid Core', price: '550,000 - 850,000 VNĐ/m²' }
            ],
            bgColor: '#059669'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Chuẩn Bị Mặt Bằng',
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
            location: 'Nha Trang',
            climate: 'Khí hậu biển, độ ẩm cao',
            recommendations: [
                'Chọn sàn SPC chống nước 100%',
                'Tránh gỗ tự nhiên khu vực ven biển',
                'Hệ thống thông gió tốt',
                'Xử lý chống muối mặn cho phào gỗ'
            ],
            icon: 'fas fa-water'
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Vệ sinh hàng ngày',
            tips: [
                'Quét hoặc hút bụi nhẹ nhàng',
                'Lau ẩm bằng khăn vắt khô',
                'Tránh dùng nhiều nước',
                'Lau khô ngay khi có nước đổ'
            ],
            icon: 'fas fa-broom'
        },
        {
            category: 'Bảo dưỡng định kỳ',
            tips: [
                'Đánh bóng 6 tháng/lần',
                'Kiểm tra phào chân tường',
                'Xử lý vết xước nhỏ',
                'Bảo dưỡng chuyên nghiệp 2 năm/lần'
            ],
            icon: 'fas fa-tools'
        },
        {
            category: 'Lưu ý sử dụng',
            tips: [
                'Dùng đệm chân bàn ghế',
                'Tránh đi giày cao gót nhọn',
                'Kiểm soát độ ẩm 45-65%',
                'Tránh ánh nắng trực tiếp'
            ],
            icon: 'fas fa-exclamation-triangle'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Sàn gỗ công nghiệp và tự nhiên khác gì?',
            answer: 'Sàn gỗ công nghiệp làm từ gỗ ép HDF, chống ẩm tốt, giá hợp lý. Sàn gỗ tự nhiên là gỗ nguyên khối, sang trọng nhưng cần bảo dưỡng nhiều hơn và giá cao hơn.'
        },
        {
            question: 'Thời gian thi công sàn gỗ bao lâu?',
            answer: 'Căn hộ 80m² thường mất 2-3 ngày: 1 ngày chuẩn bị mặt bằng, 1-2 ngày lắp đặt sàn và phào. Thời gian có thể lâu hơn nếu nền không bằng phẳng.'
        },
        {
            question: 'Sàn gỗ có chống nước được không?',
            answer: 'Sàn gỗ công nghiệp chống ẩm tốt nhưng không chống nước hoàn toàn. Sàn SPC/LVT chống nước 100%. Gỗ tự nhiên cần xử lý chống thấm đặc biệt.'
        },
        {
            question: 'Chi phí bảo dưỡng sàn gỗ như thế nào?',
            answer: 'Sàn gỗ công nghiệp: 50,000-80,000 VNĐ/m²/2 năm. Sàn gỗ tự nhiên: 100,000-150,000 VNĐ/m²/2 năm. Bao gồm đánh bóng, sửa chữa nhỏ.'
        }
    ];

    const currentFlooring = flooringTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🏠 Báo Giá Thi Công Sàn Gỗ Công Nghiệp & Tự Nhiên 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết lắp đặt sàn gỗ công nghiệp, tự nhiên, SPC/LVT 
                            tại Hà Nội & Nha Trang. Chất lượng - Uy tín - Bảo hành dài hạn.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Thân Thiện Môi Trường</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Chống Trầy Xước</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-temperature-low"></i>
                                <span>Cách Nhiệt Tốt</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-heart"></i>
                                <span>Êm Ái Dễ Chịu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flooring Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🌳 Loại Sàn Gỗ & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng sàn gỗ phổ biến phù hợp mọi nhu cầu và ngân sách
                    </p>

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

                    {currentFlooring && (
                        <div className="flooring-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentFlooring.bgColor}, ${currentFlooring.bgColor}dd)` }}>
                                <h3>{currentFlooring.name}</h3>
                                <div className="price-range">{currentFlooring.price}</div>
                                <p>{currentFlooring.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Đặc điểm nổi bật:</h4>
                                    <ul className="features-list">
                                        {currentFlooring.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="brands-section">
                                    <h4>🏷️ Thương hiệu & giá:</h4>
                                    <div className="brands-list">
                                        {currentFlooring.brands.map((brand, index) => (
                                            <div key={index} className="brand-item">
                                                <div className="brand-name">{brand.name}</div>
                                                <div className="brand-price">{brand.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

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
                    )}
                </div>
            </section>

            {/* Installation Process */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Lắp Đặt Sàn Gỗ</h2>
                    <p className="section-subtitle">
                        5 bước thi công chuẩn kỹ thuật đảm bảo chất lượng và độ bền
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

            {/* Climate Considerations */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🌤️ Lưu Ý Theo Khí Hậu</h2>
                    <p className="section-subtitle">
                        Chọn loại sàn gỗ phù hợp với đặc điểm khí hậu từng vùng
                    </p>

                    <div className="climate-grid grid-2">
                        {climateAdvice.map((advice, index) => (
                            <div key={index} className="climate-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={advice.icon}></i>
                                        {advice.location}
                                    </h3>
                                    <p>{advice.climate}</p>
                                </div>
                                <div className="card-body">
                                    <h4>💡 Khuyến nghị:</h4>
                                    <ul>
                                        {advice.recommendations.map((rec, i) => (
                                            <li key={i}>
                                                <i className="fas fa-arrow-right"></i>
                                                {rec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🧹 Hướng Dẫn Bảo Dưỡng</h2>
                    <p className="section-subtitle">
                        Cách chăm sóc sàn gỗ để tăng tuổi thọ và giữ vẻ đẹp lâu dài
                    </p>

                    <div className="maintenance-grid grid-3">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="maintenance-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={tip.icon}></i>
                                        {tip.category}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        {tip.tips.map((item, i) => (
                                            <li key={i}>
                                                <i className="fas fa-check-circle"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Thường Gặp</h2>
                    
                    <div className="faq-list">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button 
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
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
