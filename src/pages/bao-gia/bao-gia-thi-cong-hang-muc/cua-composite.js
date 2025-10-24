// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CuaCompositePage = () => {
    const [activeTab, setActiveTab] = useState('standard');
    const [activeFaq, setActiveFaq] = useState(null);

    // Composite door types
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
            price: '4,000,000 - 5,200,000 VNĐ/cánh',
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

    // Installation steps
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
            title: 'Sản Xuất Cửa',
            description: 'Gia công cửa composite theo kích thước, hoàn thiện bề mặt',
            duration: '3-7 ngày',
            icon: 'fas fa-industry'
        },
        {
            step: 3,
            title: 'Lắp Khung Cửa',
            description: 'Lắp khung gỗ, cố định chắc chắn vào tường',
            duration: '0.5 ngày',
            icon: 'fas fa-hammer'
        },
        {
            step: 4,
            title: 'Lắp Cánh & Phụ Kiện',
            description: 'Lắp cánh cửa, bản lề, khóa, điều chỉnh độ phẳng',
            duration: '0.5 ngày',
            icon: 'fas fa-door-open'
        },
        {
            step: 5,
            title: 'Hoàn Thiện',
            description: 'Kiểm tra vận hành, hoàn thiện khe hở, vệ sinh',
            duration: '0.5 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Material comparison
    const materialComparison = [
        {
            material: 'Cửa Composite',
            pros: ['Chống nước 100%', 'Không cong vênh', 'Giá hợp lý', 'Bảo dưỡng ít'],
            cons: ['Độ sang trọng chưa bằng gỗ', 'Cách âm trung bình'],
            rating: 4.5,
            price: '1.8 - 5.2 triệu/cánh',
            icon: 'fas fa-door-closed'
        },
        {
            material: 'Cửa Gỗ Tự Nhiên',
            pros: ['Sang trọng cao', 'Cách âm tốt', 'Tự nhiên', 'Có thể sửa chữa'],
            cons: ['Sợ nước', 'Dễ cong vênh', 'Giá cao', 'Cần bảo dưỡng nhiều'],
            rating: 4,
            price: '3 - 15 triệu/cánh',
            icon: 'fas fa-tree'
        },
        {
            material: 'Cửa Nhôm Kính',
            pros: ['Chống nước', 'Ánh sáng tự nhiên', 'Hiện đại', 'Bền lâu'],
            cons: ['Cách âm kém', 'Thiếu riêng tư', 'Lạnh về mùa đông'],
            rating: 3.5,
            price: '2.5 - 8 triệu/cánh',
            icon: 'fas fa-wine-glass'
        },
        {
            material: 'Cửa Thép Vân Gỗ',
            pros: ['Chống cháy', 'An ninh cao', 'Giá rẻ', 'Bền'],
            cons: ['Nặng', 'Thiết kế đơn giản', 'Kém thẩm mỹ'],
            rating: 3,
            price: '1.5 - 4 triệu/cánh',
            icon: 'fas fa-shield-alt'
        }
    ];

    // Usage tips
    const usageTips = [
        {
            category: 'Vệ Sinh Hàng Ngày',
            tips: [
                'Lau bằng khăn mềm ẩm',
                'Tránh chất tẩy mạnh',
                'Vệ sinh khóa, bản lề',
                'Lau khô sau khi ướt'
            ],
            frequency: 'Hàng tuần',
            icon: 'fas fa-broom'
        },
        {
            category: 'Bảo Dưỡng Định Kỳ',
            tips: [
                'Tra dầu bản lề 6 tháng/lần',
                'Kiểm tra khóa, tay nắm',
                'Bổ sung sơn nếu trầy',
                'Kiểm tra độ kín gió'
            ],
            frequency: '3-6 tháng',
            icon: 'fas fa-tools'
        },
        {
            category: 'Lưu Ý Sử Dụng',
            tips: [
                'Không đóng cửa quá mạnh',
                'Tránh va đập mạnh',
                'Không treo đồ nặng',
                'Giữ khóa sạch sẽ'
            ],
            frequency: 'Thường xuyên',
            icon: 'fas fa-exclamation-triangle'
        },
        {
            category: 'Xử Lý Sự Cố',
            tips: [
                'Cửa kẹt: điều chỉnh bản lề',
                'Khóa khó: tra dầu WD-40',
                'Trầy nhẹ: sơn lại',
                'Gọi thợ nếu hư nặng'
            ],
            frequency: 'Khi cần',
            icon: 'fas fa-wrench'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Cửa composite có thực sự chống nước 100%?',
            answer: 'Có. Cốt composite không hút nước, không bị phồng rộp hay cong vênh khi tiếp xúc nước lâu dài. Rất phù hợp cho phòng tắm, nhà bếp, cửa ra vào ban công.'
        },
        {
            question: 'So với cửa gỗ tự nhiên, cửa composite có bền không?',
            answer: 'Cửa composite bền hơn về chống ẩm, chống mối mọt. Tuy nhiên về độ sang trọng và cách âm thì chưa bằng gỗ tự nhiên cao cấp. Tuổi thọ composite 10-15 năm, gỗ tự nhiên 20+ năm nếu bảo dưỡng tốt.'
        },
        {
            question: 'Chi phí lắp cửa composite cho căn hộ 80m²?',
            answer: 'Căn hộ 80m² thường có 4-6 cửa phòng. Chi phí: Loại tiêu chuẩn 8-13 triệu, loại cao cấp 13-20 triệu, loại luxury 18-28 triệu (đã bao gồm khung, phụ kiện, thi công).'
        },
        {
            question: 'Thời gian bảo hành cửa composite?',
            answer: 'Cửa tiêu chuẩn: 12-18 tháng. Cửa cao cấp: 18-24 tháng. Cửa luxury: 24-36 tháng. Bảo hành bao gồm cong vênh, bong tróc, hỏng phụ kiện do lỗi sản xuất.'
        },
        {
            question: 'Cửa composite có cách âm tốt không?',
            answer: 'Cách âm ở mức trung bình, khoảng 25-30dB. Tốt hơn cửa nhôm kính nhưng chưa bằng cửa gỗ tự nhiên dày. Đủ cho phòng ngủ, phòng làm việc gia đình nhưng chưa phù hợp phòng thu âm.'
        },
        {
            question: 'Có thể sửa chữa cửa composite khi bị hỏng?',
            answer: 'Có thể sửa chữa nhỏ như bong sơn, trầy xước bằng cách sơn lại. Với hư hỏng lớn (nứt, gãy cốt) thì khó sửa và tốn kém. Nên chọn sản phẩm chất lượng từ đầu và sử dụng đúng cách.'
        }
    ];

    const currentDoor = doorTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-door-closed icon-door"></i>
                        Báo Giá Cửa Composite
                    </h1>
                    <p className="section-subtitle">
                        Lắp đặt cửa gỗ nhựa composite chống nước, bền đẹp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-droplet icon-water"></i>
                            <span>Chống Nước 100%</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-quality"></i>
                            <span>Không Cong Vênh</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-tags icon-pricing"></i>
                            <span>Giá Hợp Lý</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-award icon-quality"></i>
                            <span>Bảo Hành Dài</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Door Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Cửa Composite & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 dòng cửa composite từ tiêu chuẩn đến luxury
                    </p>

                    {/* Tabs */}
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

                    {/* Detail Card */}
                    {currentDoor && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentDoor.bgColor}, ${currentDoor.bgColor}dd)` }}
                            >
                                <h3>{currentDoor.name}</h3>
                                <div className="price-range">{currentDoor.price}</div>
                                <p>{currentDoor.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                {/* Features Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Đặc điểm:</h4>
                                    <ul className="info-list">
                                        {currentDoor.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Sizes Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Kích thước & giá:</h4>
                                    <div className="item-list">
                                        {currentDoor.sizes.map((size, index) => (
                                            <div key={index} className="item-card">
                                                <span className="item-name">{size.size}</span>
                                                <span className="item-price">{size.price}</span>
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
                                        <i className="fas fa-eye"></i>
                                        Xem Mẫu Cửa
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
                        Quy Trình Lắp Đặt
                    </h2>
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

            {/* Material Comparison */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-balance-scale icon-comparison"></i>
                        So Sánh Vật Liệu Cửa
                    </h2>
                    <p className="section-subtitle">
                        Đánh giá ưu nhược điểm các loại cửa
                    </p>

                    <div className="grid-4">
                        {materialComparison.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={item.icon}></i>
                                    {item.material}
                                </h3>
                                <div className="rating">
                                    {'⭐'.repeat(Math.floor(item.rating))}
                                    {item.rating % 1 !== 0 && '½'}
                                    <span> {item.rating}/5</span>
                                </div>
                                <h4>Ưu điểm:</h4>
                                <ul>
                                    {item.pros.map((pro, i) => (
                                        <li key={i}>
                                            <i className="fas fa-plus-circle"></i>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Nhược điểm:</h4>
                                <ul>
                                    {item.cons.map((con, i) => (
                                        <li key={i}>
                                            <i className="fas fa-minus-circle"></i>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Usage Tips */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Hướng Dẫn Sử Dụng & Bảo Dưỡng
                    </h2>
                    <p className="section-subtitle">
                        Giữ cửa composite bền đẹp lâu dài
                    </p>

                    <div className="grid-4">
                        {usageTips.map((tip, index) => (
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
                        Giải đáp thắc mắc về cửa composite
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

export default CuaCompositePage;