// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const RemCuaCaoCapPage = () => {
    const [activeTab, setActiveTab] = useState('roller');
    const [activeFaq, setActiveFaq] = useState(null);

    // Curtain types
    const curtainTypes = [
        {
            id: 'roller',
            name: 'Rèm Cuốn',
            price: '250,000 - 450,000 VNĐ/m²',
            description: 'Rèm cuốn hiện đại, tiện dụng cho văn phòng và gia đình',
            features: [
                'Vải chống nắng Hàn Quốc/Đài Loan',
                'Motor Somfy/Dooya tự động',
                'Ray nhôm bền chắc',
                'Remote điều khiển từ xa',
                'Bảo hành 12-24 tháng'
            ],
            types: [
                { type: 'Rèm cuốn cầu vồng', price: '250-350K/m²', feature: 'Điều chỉnh ánh sáng' },
                { type: 'Rèm cuốn 1 màu', price: '280-380K/m²', feature: 'Che sáng hoàn toàn' },
                { type: 'Rèm cuốn cảm ứng', price: '350-450K/m²', feature: 'Tự động thông minh' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'vertical',
            name: 'Rèm Lá Dọc',
            price: '180,000 - 320,000 VNĐ/m²',
            description: 'Rèm lá dọc sang trọng, phù hợp văn phòng, cửa kính lớn',
            features: [
                'Lá nhựa PVC/vải cao cấp',
                'Xoay 180° điều chỉnh ánh sáng',
                'Ray trượt êm ái',
                'Dễ vệ sinh, bảo dưỡng',
                'Bảo hành 12-18 tháng'
            ],
            types: [
                { type: 'Lá nhựa PVC', price: '180-250K/m²', feature: 'Chống nước, bền' },
                { type: 'Lá vải dệt', price: '220-280K/m²', feature: 'Mềm mại, sang trọng' },
                { type: 'Lá vải nhựa', price: '250-320K/m²', feature: 'Chống ẩm cao cấp' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'luxury',
            name: 'Rèm Vải Cao Cấp',
            price: '350,000 - 800,000 VNĐ/m²',
            description: 'Rèm vải luxury, thêu hoa văn tinh xảo cho biệt thự',
            features: [
                'Vải nhập khẩu Châu Âu/Nhật',
                'Thêu tay hoặc in 3D',
                'Ray điện Somfy cao cấp',
                'Thiết kế theo yêu cầu',
                'Bảo hành 24-36 tháng'
            ],
            types: [
                { type: 'Rèm vải gấm thêu', price: '450-650K/m²', feature: 'Sang trọng cổ điển' },
                { type: 'Rèm vải nhung', price: '400-600K/m²', feature: 'Cách âm, cách nhiệt' },
                { type: 'Rèm vải lụa Nhật', price: '550-800K/m²', feature: 'Luxury, mềm mại' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Tư Vấn',
            description: 'Đo kích thước cửa sổ, tư vấn loại rèm phù hợp',
            duration: '0.5 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Chọn Mẫu & Màu Sắc',
            description: 'Chọn vải, màu sắc, kiểu dáng theo phong cách',
            duration: '1-2 ngày',
            icon: 'fas fa-palette'
        },
        {
            step: 3,
            title: 'Sản Xuất Rèm',
            description: 'Cắt vải, may rèm theo kích thước chính xác',
            duration: '3-7 ngày',
            icon: 'fas fa-cut'
        },
        {
            step: 4,
            title: 'Lắp Đặt Ray & Motor',
            description: 'Lắp ray, motor điện (nếu có), kiểm tra vận hành',
            duration: '0.5-1 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 5,
            title: 'Treo Rèm & Hoàn Thiện',
            description: 'Treo rèm, điều chỉnh, vệ sinh, hướng dẫn sử dụng',
            duration: '0.5 ngày',
            icon: 'fas fa-check-circle'
        }
    ];

    // Curtain benefits
    const benefits = [
        {
            title: 'Chống Nắng & Cách Nhiệt',
            description: 'Giảm nhiệt độ phòng 3-5°C, tiết kiệm điện điều hòa',
            icon: 'fas fa-sun',
            color: '#f59e0b'
        },
        {
            title: 'Tăng Sự Riêng Tư',
            description: 'Che chắn ánh nhìn từ bên ngoài, tạo không gian riêng tư',
            icon: 'fas fa-eye-slash',
            color: '#3b82f6'
        },
        {
            title: 'Cách Âm Tốt',
            description: 'Rèm vải dày giảm tiếng ồn từ bên ngoài 20-30%',
            icon: 'fas fa-volume-mute',
            color: '#8b5cf6'
        },
        {
            title: 'Trang Trí Nội Thất',
            description: 'Tạo điểm nhấn, nâng tầm thẩm mỹ không gian',
            icon: 'fas fa-home',
            color: '#10b981'
        }
    ];

    // Fabric types
    const fabricTypes = [
        {
            fabric: 'Vải Polyester',
            pros: ['Giá rẻ', 'Dễ giặt', 'Không nhăn', 'Bền màu'],
            cons: ['Ít sang trọng', 'Thấm hút kém'],
            price: '80,000 - 150,000 VNĐ/m',
            suitable: ['Văn phòng', 'Nhà phố', 'Căn hộ']
        },
        {
            fabric: 'Vải Gấm Thêu',
            pros: ['Sang trọng', 'Bền đẹp', 'Cách nhiệt tốt', 'Thẩm mỹ cao'],
            cons: ['Giá cao', 'Nặng', 'Khó giặt'],
            price: '200,000 - 400,000 VNĐ/m',
            suitable: ['Biệt thự', 'Khách sạn', 'Nhà hàng cao cấp']
        },
        {
            fabric: 'Vải Nhung',
            pros: ['Cách âm tốt', 'Sang trọng', 'Bền', 'Cách nhiệt'],
            cons: ['Dễ bám bụi', 'Nặng', 'Giá cao'],
            price: '180,000 - 350,000 VNĐ/m',
            suitable: ['Phòng ngủ', 'Rạp chiếu phim', 'Phòng thu']
        },
        {
            fabric: 'Vải Lụa Tơ Tằm',
            pros: ['Mềm mại', 'Sang trọng', 'Thoáng khí', 'Luxury'],
            cons: ['Giá rất cao', 'Dễ nhăn', 'Khó bảo quản'],
            price: '300,000 - 600,000 VNĐ/m',
            suitable: ['Biệt thự cao cấp', 'Suite khách sạn 5*']
        }
    ];

    // Maintenance tips
    const maintenanceTips = [
        {
            category: 'Vệ Sinh Định Kỳ',
            tips: [
                'Hút bụi rèm 1-2 tuần/lần',
                'Giặt khô 6-12 tháng/lần',
                'Lau ray và motor định kỳ',
                'Kiểm tra remote, pin'
            ],
            frequency: '1-2 tuần',
            icon: 'fas fa-broom'
        },
        {
            category: 'Bảo Quản Rèm',
            tips: [
                'Tránh ánh nắng trực tiếp lâu',
                'Không kéo rèm quá mạnh',
                'Giữ ray sạch sẽ, không bụi',
                'Kiểm tra motor định kỳ'
            ],
            frequency: 'Thường xuyên',
            icon: 'fas fa-shield-alt'
        },
        {
            category: 'Xử Lý Sự Cố',
            tips: [
                'Rèm kẹt: kiểm tra ray',
                'Motor không hoạt động: thay pin',
                'Vải bám mùi: phơi nắng nhẹ',
                'Nhăn: ủi nhiệt độ thấp'
            ],
            frequency: 'Khi cần',
            icon: 'fas fa-wrench'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nên chọn rèm cuốn hay rèm vải?',
            answer: 'Rèm cuốn phù hợp văn phòng, hiện đại, tiện lợi, giá rẻ. Rèm vải sang trọng hơn, cách âm tốt hơn, phù hợp phòng ngủ, biệt thự. Tùy không gian và mục đích sử dụng.'
        },
        {
            question: 'Motor rèm Somfy có tốt không?',
            answer: 'Somfy là thương hiệu motor rèm số 1 thế giới (Pháp), êm, bền, chính xác, bảo hành 5 năm. Giá cao hơn 50-100% so với motor Trung Quốc nhưng chất lượng vượt trội.'
        },
        {
            question: 'Chi phí làm rèm cho căn hộ 80m²?',
            answer: 'Căn hộ 80m² có khoảng 15-20m² cửa sổ. Rèm cuốn: 4-7 triệu. Rèm lá dọc: 3-6 triệu. Rèm vải cao cấp: 7-15 triệu. Giá đã bao gồm vật liệu + thi công.'
        },
        {
            question: 'Thời gian làm rèm mất bao lâu?',
            answer: 'Rèm cuốn, lá dọc: 3-5 ngày (may + lắp). Rèm vải may: 5-10 ngày (thiết kế + may + lắp). Thời gian phụ thuộc độ phức tạp và số lượng.'
        },
        {
            question: 'Rèm có chống nắng hiệu quả không?',
            answer: 'Rèm cuốn chống nắng chặn 70-95% ánh sáng và nhiệt. Rèm vải dày chặn 80-90%. Rèm 2 lớp (blackout) chặn 99%. Giảm nhiệt độ phòng 3-5°C, tiết kiệm điện.'
        },
        {
            question: 'Có thể lắp rèm tự động cho rèm cũ không?',
            answer: 'Có thể nếu ray còn tốt và phù hợp. Chi phí motor + lắp đặt: 2-5 triệu/bộ tùy loại motor (Dooya, Somfy). Thợ sẽ khảo sát để tư vấn cụ thể.'
        }
    ];

    const currentType = curtainTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-window-maximize"></i>
                        Báo Giá Rèm Cửa Cao Cấp
                    </h1>
                    <p className="section-subtitle">
                        Thi công rèm cuốn, rèm lá dọc, rèm vải cao cấp chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-sun"></i>
                            <span>Chống Nắng Hiệu Quả</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-palette icon-design"></i>
                            <span>Đa Dạng Mẫu Mã</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-certificate icon-quality"></i>
                            <span>Bảo Hành Dài</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-robot"></i>
                            <span>Motor Tự Động</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curtain Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Rèm & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại rèm cửa phổ biến
                    </p>

                    <div className="tabs">
                        {curtainTypes.map(type => (
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
                                        Xem Mẫu Rèm
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Lợi Ích Rèm Cửa
                    </h2>
                    <p className="section-subtitle">
                        Tại sao nên lắp rèm cửa cao cấp
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

            {/* Installation Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-process"></i>
                        Quy Trình Thi Công
                    </h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt rèm cửa chuyên nghiệp
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

            {/* Fabric Types */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-th icon-materials"></i>
                        Loại Vải Rèm
                    </h2>
                    <p className="section-subtitle">
                        So sánh các loại vải rèm phổ biến
                    </p>

                    <div className="grid-4">
                        {fabricTypes.map((fabric, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-tshirt"></i>
                                    {fabric.fabric}
                                </h3>
                                <h4>Ưu điểm:</h4>
                                <ul>
                                    {fabric.pros.map((pro, i) => (
                                        <li key={i}>
                                            <i className="fas fa-plus-circle"></i>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                                <h4>Nhược điểm:</h4>
                                <ul>
                                    {fabric.cons.map((con, i) => (
                                        <li key={i}>
                                            <i className="fas fa-minus-circle"></i>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                                <span className="standard">{fabric.price}</span>
                                <div className="tags">
                                    {fabric.suitable.map((s, i) => (
                                        <span key={i} className="tag">{s}</span>
                                    ))}
                                </div>
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
                        Giữ rèm cửa bền đẹp lâu dài
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
                        Giải đáp thắc mắc về rèm cửa
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

export default RemCuaCaoCapPage;