// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import '../BaoGiaThiCongHangMuc.css';

const OpLatGachDaPage = () => {
    const [activeTab, setActiveTab] = useState('ceramic');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for tiling
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
            suitable: ['Phòng khách', 'Phòng bếp', 'Phòng tắm', 'Hành lang'],
            bgColor: '#059669'
        },
        {
            id: 'granite',
            name: 'Đá Granite Tự Nhiên',
            price: '220,000 - 350,000 VNĐ/m²',
            description: 'Ốp lát đá granite tự nhiên cao cấp, bền đẹp sang trọng',
            features: [
                'Đá granite loại A (Ấn Độ, Việt Nam)',
                'Cắt máy, mài bóng chuẩn',
                'Keo dán đá chuyên dụng',
                'Chống thấm, chống bám bẩn',
                'Bảo hành 18-24 tháng'
            ],
            suitable: ['Phòng khách cao cấp', 'Cầu thang', 'Sảnh lớn', 'Bàn bếp'],
            bgColor: '#475569'
        },
        {
            id: 'marble',
            name: 'Đá Marble & Nhân Tạo',
            price: '350,000 - 450,000 VNĐ/m²',
            description: 'Đá marble tự nhiên và nhân tạo cho không gian luxury',
            features: [
                'Đá marble tự nhiên/nhân tạo',
                'Gia công chính xác cao',
                'Xử lý chống thấm đặc biệt',
                'Đánh bóng crystal finish',
                'Bảo hành 24-36 tháng'
            ],
            suitable: ['Biệt thự', 'Khách sạn', 'Showroom', 'Văn phòng CEO'],
            bgColor: '#dc2626'
        }
    ];

    // Technical specifications
    const specifications = [
        {
            category: 'Gạch Lát Nền',
            items: [
                { name: 'Gạch 30x30cm', price: '15,000 - 25,000 VNĐ/viên', note: 'Phòng tắm, bếp' },
                { name: 'Gạch 40x40cm', price: '25,000 - 45,000 VNĐ/viên', note: 'Phòng khách nhỏ' },
                { name: 'Gạch 60x60cm', price: '45,000 - 85,000 VNĐ/viên', note: 'Phòng khách lớn' },
                { name: 'Gạch 80x80cm', price: '85,000 - 150,000 VNĐ/viên', note: 'Không gian rộng' }
            ]
        },
        {
            category: 'Gạch Ốp Tường',
            items: [
                { name: 'Gạch thẻ 20x40cm', price: '35,000 - 65,000 VNĐ/m²', note: 'Phòng tắm tiêu chuẩn' },
                { name: 'Gạch mosaic', price: '120,000 - 250,000 VNĐ/m²', note: 'Điểm nhấn trang trí' },
                { name: 'Gạch giả đá', price: '85,000 - 180,000 VNĐ/m²', note: 'Phòng khách hiện đại' },
                { name: 'Gạch 3D texture', price: '150,000 - 320,000 VNĐ/m²', note: 'Tường accent cao cấp' }
            ]
        }
    ];

    // Installation process
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
            title: 'Lát Gạch/Ốp Đá',
            description: 'Lát theo pattern thiết kế, căn chỉnh ron đều',
            duration: '1-3 ngày',
            icon: 'fas fa-th-large'
        },
        {
            step: 4,
            title: 'Chít Mạch & Ron',
            description: 'Chít kín mạch, làm ron đều đẹp, vệ sinh sạch',
            duration: '1 ngày',
            icon: 'fas fa-fill'
        },
        {
            step: 5,
            title: 'Hoàn Thiện & Bàn Giao',
            description: 'Kiểm tra độ bám dính, làm sạch, bàn giao',
            duration: '0.5 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Quality criteria
    const qualityCriteria = [
        {
            aspect: 'Độ Bám Dính',
            description: 'Gạch bám chắc, không rỗng, không bong tróc',
            testMethod: 'Gõ kiểm tra âm thanh đều',
            standard: 'Không có âm thanh rỗng',
            icon: 'fas fa-hand-rock'
        },
        {
            aspect: 'Độ Phẳng',
            description: 'Bề mặt phẳng, không lồi lõm, chênh lệch tối đa 2mm/2m',
            testMethod: 'Thước thẳng 2m kiểm tra',
            standard: '≤ 2mm chênh lệch',
            icon: 'fas fa-level-up-alt'
        },
        {
            aspect: 'Ron Đều',
            description: 'Khe ron đều nhau, thẳng hàng, đầy đủ',
            testMethod: 'Quan sát bằng mắt thường',
            standard: 'Ron 2-3mm đều nhau',
            icon: 'fas fa-grip-lines'
        },
        {
            aspect: 'Vệ Sinh',
            description: 'Bề mặt sạch, không còn vết keo, xi măng',
            testMethod: 'Kiểm tra trực quan',
            standard: 'Bề mặt sạch 100%',
            icon: 'fas fa-sparkles'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nên chọn gạch hay đá tự nhiên?',
            answer: 'Gạch ceramic/porcelain: giá hợp lý, bảo dưỡng dễ, phù hợp đại đa số. Đá tự nhiên: sang trọng, độ bền cao nhưng giá đắt, cần bảo dưỡng chuyên nghiệp.'
        },
        {
            question: 'Thời gian thi công ốp lát bao lâu?',
            answer: 'Căn hộ 80m²: 3-5 ngày. Bao gồm 1 ngày chuẩn bị, 2-3 ngày ốp lát, 1 ngày hoàn thiện. Thời gian phụ thuộc độ phức tạp pattern và diện tích.'
        },
        {
            question: 'Làm sao để tránh gạch bị nứt?',
            answer: 'Sử dụng keo dán chất lượng, để khe co giãn đủ rộng, tránh va đập mạnh. Với đá tự nhiên cần xử lý chống thấm để tránh nứt do thay đổi độ ẩm.'
        },
        {
            question: 'Chi phí bảo dưỡng ốp lát như thế nào?',
            answer: 'Gạch ceramic: 20,000-40,000 VNĐ/m²/2 năm (làm sạch chuyên sâu). Đá tự nhiên: 50,000-100,000 VNĐ/m²/2 năm (đánh bóng, seal bảo vệ).'
        }
    ];

    const currentTiling = tilingTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🧱 Báo Giá Thi Công Ốp Lát Gạch & Đá Hoa Cương 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết ốp lát gạch ceramic, porcelain, đá granite, marble 
                            tại Hà Nội & Nha Trang. Thi công chuẩn kỹ thuật - Bảo hành dài hạn.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Chống Thấm</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-gem"></i>
                                <span>Bền Đẹp</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-broom"></i>
                                <span>Dễ Vệ Sinh</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-palette"></i>
                                <span>Đa Dạng Màu Sắc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tiling Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🏺 Loại Gạch & Đá - Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng sản phẩm chính phù hợp mọi không gian và ngân sách
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

                    {currentTiling && (
                        <div className="tiling-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentTiling.bgColor}, ${currentTiling.bgColor}dd)` }}>
                                <h3>{currentTiling.name}</h3>
                                <div className="price-range">{currentTiling.price}</div>
                                <p>{currentTiling.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Bao gồm:</h4>
                                    <ul className="features-list">
                                        {currentTiling.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="suitable-section">
                                    <h4>🏠 Phù hợp:</h4>
                                    <div className="tags">
                                        {currentTiling.suitable.map((item, index) => (
                                            <span key={index} className="tag">{item}</span>
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

            {/* Technical Specifications */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">📐 Thông Số Kỹ Thuật & Giá</h2>
                    <p className="section-subtitle">
                        Bảng giá chi tiết theo kích thước và loại gạch/đá
                    </p>

                    <div className="specifications-grid grid-2">
                        {specifications.map((spec, index) => (
                            <div key={index} className="spec-card card">
                                <div className="card-header">
                                    <h3>{spec.category}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="spec-list">
                                        {spec.items.map((item, i) => (
                                            <div key={i} className="spec-item">
                                                <div className="spec-name">{item.name}</div>
                                                <div className="spec-price">{item.price}</div>
                                                <div className="spec-note">{item.note}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔧 Quy Trình Thi Công Chuẩn</h2>
                    <p className="section-subtitle">
                        5 bước thi công đảm bảo chất lượng và thẩm mỹ
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

            {/* Quality Standards */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">✅ Tiêu Chuẩn Chất Lượng</h2>
                    <p className="section-subtitle">
                        Các tiêu chí kiểm tra chất lượng thi công ốp lát
                    </p>

                    <div className="quality-grid grid-2">
                        {qualityCriteria.map((criteria, index) => (
                            <div key={index} className="quality-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={criteria.icon}></i>
                                        {criteria.aspect}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <p><strong>Mô tả:</strong> {criteria.description}</p>
                                    <p><strong>Cách kiểm tra:</strong> {criteria.testMethod}</p>
                                    <p><strong>Tiêu chuẩn:</strong> <span className="standard">{criteria.standard}</span></p>
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

export default OpLatGachDaPage;
