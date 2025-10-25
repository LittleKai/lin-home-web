import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const VillaPage = () => {
    const [activeTab, setActiveTab] = useState('modern');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'modern',
            name: 'Villa Hiện Đại',
            price: '250,000 - 400,000 VNĐ/m²',
            description: 'Kiến trúc mở, nhiều kính, đường nét tối giản. Phù hợp villa ven biển Nha Trang',
            features: [
                'Không gian mở, thoáng đãng',
                'Sử dụng kính thông minh',
                'Đường nét tối giản, hiện đại',
                'Tích hợp công nghệ thông minh',
                'Hồ bơi vô cực',
                'Sân vườn xanh mát'
            ],
            sizes: [
                { area: '150-250m²', type: 'Villa 2 tầng', price: '38-80 triệu', features: '3 phòng ngủ' },
                { area: '250-400m²', type: 'Villa 3 tầng', price: '63-130 triệu', features: '4-5 phòng ngủ' },
                { area: '400-600m²', type: 'Villa cao cấp', price: '100-220 triệu', features: '5-6 phòng ngủ' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'neoclassic',
            name: 'Villa Tân Cổ Điển',
            price: '280,000 - 420,000 VNĐ/m²',
            description: 'Kết hợp nét sang trọng, tinh tế với sự tiện nghi. Phù hợp biệt thự villa ngoại ô Hà Nội',
            features: [
                'Nét sang trọng, tinh tế',
                'Cột trụ, phào chỉ đẹp mắt',
                'Không gian tiện nghi',
                'Màu sắc trang nhã',
                'Phong thủy hợp lý',
                'Sân vườn cổ điển'
            ],
            sizes: [
                { area: '180-300m²', type: 'Villa tân cổ điển', price: '50-110 triệu', features: '3-4 phòng ngủ' },
                { area: '300-500m²', type: 'Villa sang trọng', price: '84-180 triệu', features: '4-5 phòng ngủ' },
                { area: '500-800m²', type: 'Villa đẳng cấp', price: '140-320 triệu', features: '5-7 phòng ngủ' }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'resort',
            name: 'Villa Nghỉ Dưỡng',
            price: '300,000 - 450,000 VNĐ/m²',
            description: 'Có hồ bơi, tiểu cảnh, sân vườn rộng. Lý tưởng cho villa du lịch, villa cho thuê',
            features: [
                'Hồ bơi riêng tư',
                'Tiểu cảnh sân vườn',
                'Không gian nghỉ dưỡng',
                'BBQ ngoài trời',
                'Phòng gym, spa',
                'Khu vui chơi trẻ em'
            ],
            sizes: [
                { area: '200-350m²', type: 'Villa resort 2 tầng', price: '60-140 triệu', features: '3-4 phòng ngủ' },
                { area: '350-550m²', type: 'Villa resort cao cấp', price: '105-220 triệu', features: '4-5 phòng ngủ' },
                { area: '550-900m²', type: 'Villa resort đẳng cấp', price: '165-380 triệu', features: '5-7 phòng ngủ' }
            ],
            bgColor: '#14b8a6'
        }
    ];

    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát Hiện Trạng Khu Đất',
            description: 'Đo đạc, phân tích địa hình, hướng gió, ánh sáng tự nhiên',
            duration: '1-2 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Đề Xuất Ý Tưởng & Phong Cách',
            description: 'Tư vấn phong cách thiết kế phù hợp với nhu cầu và ngân sách',
            duration: '2-3 ngày',
            icon: 'fas fa-lightbulb'
        },
        {
            step: 3,
            title: 'Thiết Kế Mặt Bằng Công Năng',
            description: 'Bố trí không gian phòng chức năng, sân vườn, hồ bơi',
            duration: '4-6 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 4,
            title: 'Triển Khai Phối Cảnh 3D',
            description: 'Thiết kế 3D kiến trúc bên ngoài và nội thất bên trong',
            duration: '6-8 ngày',
            icon: 'fas fa-cube'
        },
        {
            step: 5,
            title: 'Bàn Giao Hồ Sơ Thiết Kế',
            description: 'Hoàn thiện hồ sơ kỹ thuật chi tiết để thi công',
            duration: '3-5 ngày',
            icon: 'fas fa-file-alt'
        },
        {
            step: 6,
            title: 'Hỗ Trợ Giám Sát Thi Công',
            description: 'Giám sát quá trình thi công đảm bảo đúng thiết kế',
            duration: 'Suốt quá trình',
            icon: 'fas fa-hard-hat'
        }
    ];

    const benefits = [
        {
            icon: 'fas fa-home',
            title: 'Tối ưu công năng',
            description: 'Bố trí không gian hợp lý, tiện nghi, đáp ứng nhu cầu sống'
        },
        {
            icon: 'fas fa-gem',
            title: 'Thẩm mỹ cao cấp',
            description: 'Kiến trúc sang trọng, nội thất tinh tế, bắt mắt'
        },
        {
            icon: 'fas fa-tree',
            title: 'Không gian xanh',
            description: 'Kết hợp sân vườn, hồ bơi, tiểu cảnh hài hòa'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Giá trị bất động sản',
            description: 'Villa được thiết kế chuẩn tăng giá trị lâu dài'
        },
        {
            icon: 'fas fa-spa',
            title: 'Trải nghiệm sống đẳng cấp',
            description: 'Không gian nghỉ dưỡng ngay trong nhà riêng'
        }
    ];

    const faqData = [
        {
            question: 'Villa khác biệt thự như thế nào?',
            answer: 'Villa thường có không gian mở, gần gũi thiên nhiên, có sân vườn và hồ bơi, thích hợp nghỉ dưỡng. Biệt thự thường có kiến trúc đồ sộ hơn, đẳng cấp hơn nhưng ít không gian xanh. Tuy nhiên ranh giới giữa villa và biệt thự ngày nay khá mờ nhạt.'
        },
        {
            question: 'Diện tích đất tối thiểu để xây villa?',
            answer: 'Diện tích tối thiểu khoảng 150-200m² để có thể bố trí nhà, sân vườn và hồ bơi hợp lý. Tuy nhiên với 300-500m² trở lên sẽ thoải mái hơn để thiết kế villa với đầy đủ tiện nghi và không gian xanh.'
        },
        {
            question: 'Chi phí xây villa khoảng bao nhiêu?',
            answer: 'Chi phí thi công villa dao động 8-15 triệu/m² tùy vào vật liệu và độ hoàn thiện. Với villa 250m² chi phí khoảng 2-3.75 tỷ. Chưa bao gồm chi phí thiết kế, cảnh quan, hồ bơi và nội thất.'
        },
        {
            question: 'Villa ven biển cần lưu ý gì?',
            answer: 'Cần chú ý chống ẩm mặn, sử dụng vật liệu chống ăn mòn (thép không gỉ, sơn chống ăn mòn). Thiết kế cần tối ưu gió tự nhiên, tránh nắng gắt. Hệ thống thoát nước phải tốt để chống ngập úng mùa mưa.'
        },
        {
            question: 'Villa có hồ bơi riêng tốn chi phí bao nhiêu?',
            answer: 'Hồ bơi nhỏ 15-25m² chi phí 80-150 triệu, hồ bơi trung bình 30-50m² chi phí 150-300 triệu, hồ bơi lớn >50m² có thể lên đến 300-600 triệu tùy hệ thống lọc, sưởi, đèn LED và thiết kế.'
        },
        {
            question: 'Villa cho thuê nghỉ dưỡng cần thiết kế như thế nào?',
            answer: 'Cần tối ưu số phòng ngủ (4-6 phòng), có hồ bơi, BBQ ngoài trời, phòng khách rộng. Thiết kế phải bắt mắt để chụp ảnh đẹp. Nên có phòng giặt riêng, bếp đầy đủ tiện nghi. Ưu tiên vật liệu bền, dễ bảo trì.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-home icon-primary"></i>
                        Thiết Kế Villa 2025
                    </h1>
                    <p className="section-subtitle">
                        Sang trọng - hiện đại - tối ưu công năng tại Hà Nội & Nha Trang
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-swimming-pool"></i>
                            <span>Hồ Bơi Riêng Tư</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-leaf"></i>
                            <span>Sân Vườn Xanh</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-cube"></i>
                            <span>Thiết Kế 3D</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>Tư Vấn Chuyên Nghiệp</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-primary"></i>
                        Lợi Ích Của Thiết Kế Villa Chuyên Nghiệp
                    </h2>
                    <div className="grid-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div className="info-icon">
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-primary"></i>
                        Phong Cách Thiết Kế Villa & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 phong cách thiết kế villa phổ biến 2025
                    </p>

                    <div className="tabs">
                        {designTypes.map(type => (
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

                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Quy mô & giá:</h4>
                                    <div className="item-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{size.area}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">
                                                        {size.type} | {size.features}
                                                    </span>
                                                    <span className="item-price-extended">{size.price}</span>
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
                                        <i className="fas fa-images"></i>
                                        Xem Mẫu Thiết Kế
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-primary"></i>
                        Quy Trình Thiết Kế Villa
                    </h2>
                    <div className="steps-container">
                        {installationSteps.map((step) => (
                            <div key={step.step} className="step-card">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <div className="step-duration">
                                    <i className="fas fa-clock"></i>
                                    {step.duration}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-exclamation-circle icon-primary"></i>
                        Lưu Ý Khi Thiết Kế Villa
                    </h2>
                    <div className="grid-2">
                        <div className="note-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Với villa Hà Nội</h3>
                            <p>Chú trọng công năng và phong thủy. Thiết kế cần phù hợp với khí hậu 4 mùa. Tối ưu hệ thống sưởi ấm mùa đông.</p>
                        </div>
                        <div className="note-card">
                            <i className="fas fa-umbrella-beach"></i>
                            <h3>Với villa Nha Trang</h3>
                            <p>Tối ưu không gian mở, chống ẩm mặn. Tận dụng gió biển và ánh sáng tự nhiên. Sử dụng vật liệu chịu được khí hậu ven biển.</p>
                        </div>
                    </div>
                    <div className="highlight-box">
                        <i className="fas fa-lightbulb"></i>
                        <p><strong>Khuyến nghị:</strong> Nên kết hợp thiết kế kiến trúc - nội thất - cảnh quan đồng bộ. Chọn đơn vị thiết kế có kinh nghiệm thực hiện villa cao cấp.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle icon-primary"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div 
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default VillaPage;
