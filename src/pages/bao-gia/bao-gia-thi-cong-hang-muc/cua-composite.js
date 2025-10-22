// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';
import '../BaoGiaThiCongHangMuc.css';

const CuaCompositePage = () => {
    const [activeTab, setActiveTab] = useState('standard');
    const [activeFaq, setActiveFaq] = useState(null);

    // Pricing data for composite doors
    const doorTypes = [
        {
            id: 'standard',
            name: 'Cửa Composite Tiêu Chuẩn',
            price: '1,800,000 - 2,800,000 VNĐ/cánh',
            description: 'Cửa composite phủ film PVC, chống nước tốt',
            features: [
                'Cốt composite chống nước',
                'Phủ film PVC vân gỗ',
                'Khung cửa MDF chống ẩm',
                'Khóa tay gạt cao cấp',
                'Bảo hành 12-18 tháng'
            ],
            sizes: [
                { size: '70cm x 200cm', price: '1,800,000 - 2,200,000 VNĐ' },
                { size: '80cm x 200cm', price: '2,000,000 - 2,400,000 VNĐ' },
                { size: '90cm x 200cm', price: '2,200,000 - 2,800,000 VNĐ' }
            ],
            bgColor: '#dc2626'
        },
        {
            id: 'premium',
            name: 'Cửa Composite Cao Cấp',
            price: '2,800,000 - 4,200,000 VNĐ/cánh',
            description: 'Cửa composite phủ melamin, thiết kế hiện đại',
            features: [
                'Cốt composite cao cấp',
                'Phủ melamin chống trầy',
                'Thiết kế tạo hình đặc biệt',
                'Phụ kiện nhập khẩu',
                'Bảo hành 18-24 tháng'
            ],
            sizes: [
                { size: '70cm x 200cm', price: '2,800,000 - 3,400,000 VNĐ' },
                { size: '80cm x 200cm', price: '3,200,000 - 3,800,000 VNĐ' },
                { size: '90cm x 200cm', price: '3,600,000 - 4,200,000 VNĐ' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'luxury',
            name: 'Cửa Composite Luxury',
            price: '4,000,000 - 4,500,000 VNĐ/cánh',
            description: 'Cửa composite sơn PU, chất lượng như gỗ tự nhiên',
            features: [
                'Cốt composite đặc biệt',
                'Sơn PU cao cấp 5 lớp',
                'Tạo hình nghệ thuật',
                'Phụ kiện luxury châu Âu',
                'Bảo hành 24-36 tháng'
            ],
            sizes: [
                { size: '70cm x 200cm', price: '4,000,000 - 4,500,000 VNĐ' },
                { size: '80cm x 200cm', price: '4,200,000 - 4,800,000 VNĐ' },
                { size: '90cm x 200cm', price: '4,500,000 - 5,200,000 VNĐ' }
            ],
            bgColor: '#059669'
        }
    ];

    // Advantages comparison
    const materialComparison = [
        {
            material: 'Cửa Composite',
            pros: ['Chống nước 100%', 'Không cong vênh', 'Giá hợp lý', 'Bảo dưỡng ít'],
            cons: ['Độ sang trọng chưa bằng gỗ', 'Cách âm trung bình'],
            rating: 4.5,
            price: '1.8 - 5.2 triệu/cánh'
        },
        {
            material: 'Cửa Gỗ Tự Nhiên',
            pros: ['Sang trọng cao', 'Cách âm tốt', 'Tự nhiên', 'Có thể sửa chữa'],
            cons: ['Sợ nước', 'Dễ cong vênh', 'Giá cao', 'Cần bảo dưỡng nhiều'],
            rating: 4,
            price: '3 - 15 triệu/cánh'
        },
        {
            material: 'Cửa Nhôm Kính',
            pros: ['Chống nước', 'Ánh sáng tự nhiên', 'Hiện đại', 'Bền lâu'],
            cons: ['Cách âm kém', 'Thiếu riêng tư', 'Lạnh về mùa đông'],
            rating: 3.5,
            price: '2.5 - 8 triệu/cánh'
        }
    ];

    // Installation process
    const installationSteps = [
        {
            step: 1,
            title: 'Đo Đạc Ô Chờ',
            description: 'Đo chính xác kích thước ô cửa, kiểm tra vuông góc',
            duration: '0.5 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Gia Công Cửa',
            description: 'Gia công cửa theo kích thước, lắp phụ kiện',
            duration: '2-3 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 3,
            title: 'Chuẩn Bị Lắp Đặt',
            description: 'Xử lý ô chờ, chuẩn bị vật liệu lắp đặt',
            duration: '0.5 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 4,
            title: 'Lắp Đặt Cửa',
            description: 'Lắp khung cửa, cân chỉnh, kiểm tra độ kín',
            duration: '1 ngày',
            icon: 'fas fa-door-open'
        },
        {
            step: 5,
            title: 'Hoàn Thiện',
            description: 'Điều chỉnh cuối, vệ sinh, bàn giao',
            duration: '0.5 ngày',
            icon: 'fas fa-check'
        }
    ];

    // Usage tips
    const usageTips = [
        {
            category: 'Sử dụng đúng cách',
            icon: 'fas fa-hand-point-right',
            tips: [
                'Đóng mở nhẹ nhàng, không dùng lực',
                'Tránh va đập mạnh vào cửa',
                'Không treo vật nặng lên cửa',
                'Kiểm tra độ kín định kỳ'
            ]
        },
        {
            category: 'Vệ sinh & bảo dưỡng',
            icon: 'fas fa-spray-can',
            tips: [
                'Lau chùi bằng khăn ẩm',
                'Dùng nước sạch, tránh hóa chất mạnh',
                'Bôi trôn bản lề 6 tháng/lần',
                'Kiểm tra khóa cửa định kỳ'
            ]
        },
        {
            category: 'Xử lý sự cố',
            icon: 'fas fa-wrench',
            tips: [
                'Cửa sệnh: điều chỉnh bản lề',
                'Khóa khó: bôi trôn cylinder',
                'Khe hở lớn: điều chỉnh khung',
                'Liên hệ thợ khi cần thiết'
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Cửa composite có thật sự chống nước 100%?',
            answer: 'Đúng, cốt composite làm từ bột gỗ và nhựa PVC nên chống nước tuyệt đối, không bị cong vênh hay mốc mọt như gỗ tự nhiên. Thích hợp cho vùng ẩm ướt.'
        },
        {
            question: 'Thời gian bảo hành cửa composite bao lâu?',
            answer: 'Cửa composite tiêu chuẩn: 12-18 tháng. Cửa cao cấp: 18-24 tháng. Cửa luxury: 24-36 tháng. Bảo hành bao gồm cong vênh, bong tróc, hỏng phụ kiện.'
        },
        {
            question: 'Cửa composite có cách âm tốt không?',
            answer: 'Cách âm ở mức trung bình, khoảng 25-30dB. Tốt hơn cửa nhôm kính nhưng chưa bằng cửa gỗ tự nhiên dày. Phù hợp cho phòng ngủ, phòng làm việc gia đình.'
        },
        {
            question: 'Có thể sửa chữa cửa composite khi bị hỏng?',
            answer: 'Có thể sửa chữa nhỏ như bong sơn, trầy xước. Với hư hỏng lớn thì khó sửa và tốn kém. Nên chọn sản phẩm chất lượng từ đầu và sử dụng đúng cách.'
        }
    ];

    const currentDoor = doorTypes.find(type => type.id === activeTab);

    return (
        <div className="construction-detail-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🚪 Báo Giá Thi Công Cửa Composite 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết lắp đặt cửa gỗ nhựa Composite 
                            tại Hà Nội & Nha Trang. Chống nước - Bền đẹp - Giá tốt.
                        </p>
                        
                        <div className="hero-features grid-4">
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Chống Nước 100%</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Thân Thiện Môi Trường</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-palette"></i>
                                <span>Đa Dạng Màu Sắc</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-dollar-sign"></i>
                                <span>Giá Hợp Lý</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Door Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🚪 Loại Cửa Composite & Báo Giá</h2>
                    <p className="section-subtitle">
                        3 dòng cửa composite phù hợp mọi nhu cầu và ngân sách
                    </p>

                    <div className="tabs">
                        {doorTypes.map(type => (
                            <button
                                key={type.id}
                                className={`tab ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentDoor && (
                        <div className="door-detail">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentDoor.bgColor}, ${currentDoor.bgColor}dd)` }}>
                                <h3>{currentDoor.name}</h3>
                                <div className="price-range">{currentDoor.price}</div>
                                <p>{currentDoor.description}</p>
                            </div>

                            <div className="detail-content grid-2">
                                <div className="features-section">
                                    <h4>✨ Bao gồm:</h4>
                                    <ul className="features-list">
                                        {currentDoor.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sizes-section">
                                    <h4>📏 Kích thước & giá:</h4>
                                    <div className="sizes-list">
                                        {currentDoor.sizes.map((size, index) => (
                                            <div key={index} className="size-item">
                                                <div className="size-name">{size.size}</div>
                                                <div className="size-price">{size.price}</div>
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

            {/* Material Comparison */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">⚖️ So Sánh Vật Liệu Cửa</h2>
                    <p className="section-subtitle">
                        So sánh ưu nhược điểm của các loại cửa phổ biến
                    </p>

                    <div className="comparison-grid grid-3">
                        {materialComparison.map((material, index) => (
                            <div key={index} className="comparison-card card">
                                <div className="card-header">
                                    <h3>{material.material}</h3>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i 
                                                key={i} 
                                                className={`fas fa-star ${i < Math.floor(material.rating) ? 'active' : ''}`}
                                            ></i>
                                        ))}
                                        <span>{material.rating}/5</span>
                                    </div>
                                    <div className="price-range">{material.price}</div>
                                </div>
                                <div className="card-body">
                                    <div className="pros-cons">
                                        <div className="pros">
                                            <h4>👍 Ưu điểm:</h4>
                                            <ul>
                                                {material.pros.map((pro, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-plus"></i>
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="cons">
                                            <h4>👎 Nhược điểm:</h4>
                                            <ul>
                                                {material.cons.map((con, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-minus"></i>
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
                    <h2 className="section-title">🔧 Quy Trình Lắp Đặt</h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt cửa composite chuyên nghiệp
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

            {/* Usage Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">💡 Hướng Dẫn Sử Dụng & Bảo Dưỡng</h2>
                    <p className="section-subtitle">
                        Cách sử dụng và chăm sóc cửa composite để tăng tuổi thọ
                    </p>

                    <div className="tips-grid grid-3">
                        {usageTips.map((tip, index) => (
                            <div key={index} className="tip-card card">
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

export default CuaCompositePage;
