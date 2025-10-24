// src/pages/bao-gia/bao-gia-thi-cong-hang-muc/phao-chi-pu-ps-thach-cao.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const PhaoChiPage = () => {
    const [activeTab, setActiveTab] = useState('pu');
    const [activeFaq, setActiveFaq] = useState(null);

    // Molding types
    const moldingTypes = [
        {
            id: 'pu',
            name: 'Phào Chỉ PU (Polyurethane)',
            price: '45,000 - 150,000 VNĐ/m',
            description: 'Phào chỉ PU nhẹ, bền, chống mối mọt, dễ sơn phủ',
            features: [
                'Nhẹ và bền chắc',
                'Chống mối mọt hiệu quả',
                'Dễ sơn phủ nhiều màu',
                'Đa dạng mẫu mã hoa văn',
                'Không bị cong vênh',
                'Chống ẩm tốt'
            ],
            applications: [
                { type: 'Phào trần', size: '5-15cm', price: '45-80K' },
                { type: 'Phào chân tường', size: '8-12cm', price: '60-100K' },
                { type: 'Khung tranh', size: '3-8cm', price: '50-120K' },
                { type: 'Phào cột trang trí', size: '10-20cm', price: '80-150K' }
            ],
            bgColor: '#f59e0b'
        },
        {
            id: 'ps',
            name: 'Phào Chỉ PS (Polystyrene)',
            price: '25,000 - 85,000 VNĐ/m',
            description: 'Phào chỉ PS giá rẻ nhất, thi công nhanh, bề mặt mịn',
            features: [
                'Giá rẻ nhất thị trường',
                'Thi công nhanh gọn',
                'Bề mặt mịn đẹp',
                'Dễ cắt gọt tạo hình',
                'Trọng lượng nhẹ',
                'Màu trắng tinh khiết'
            ],
            applications: [
                { type: 'Phào trần cơ bản', size: '5-10cm', price: '25-45K' },
                { type: 'Trang trí đơn giản', size: '3-8cm', price: '30-55K' },
                { type: 'Căn hộ chung cư', size: '6-12cm', price: '35-65K' },
                { type: 'Văn phòng', size: '4-10cm', price: '40-85K' }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'gypsum',
            name: 'Phào Chỉ Thạch Cao',
            price: '65,000 - 180,000 VNĐ/m',
            description: 'Phào chỉ thạch cao tạo hình linh hoạt, sang trọng cổ điển',
            features: [
                'Tạo hình linh hoạt phức tạp',
                'Chống cháy an toàn',
                'Cách âm nhẹ',
                'Sang trọng cổ điển',
                'Có thể điêu khắc chi tiết',
                'Thân thiện môi trường'
            ],
            applications: [
                { type: 'Biệt thự cổ điển', size: '10-25cm', price: '80-150K' },
                { type: 'Khách sạn cao cấp', size: '8-20cm', price: '90-160K' },
                { type: 'Nhà hàng sang trọng', size: '12-30cm', price: '100-180K' },
                { type: 'Hội trường', size: '15-35cm', price: '120-180K' }
            ],
            bgColor: '#8b5cf6'
        }
    ];

    // Installation steps
    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát & Đo Đạc',
            description: 'Đo đạc diện tích, thiết kế bố trí phào chỉ phù hợp phong cách',
            duration: '0.5 ngày',
            icon: 'fas fa-ruler'
        },
        {
            step: 2,
            title: 'Chọn Loại & Mẫu Mã',
            description: 'Tư vấn chọn loại phào chỉ (PU, PS, thạch cao) và hoa văn',
            duration: '1 ngày',
            icon: 'fas fa-palette'
        },
        {
            step: 3,
            title: 'Gia Công & Chuẩn Bị',
            description: 'Gia công, cắt phào chỉ theo kích thước, chuẩn bị keo dán',
            duration: '1-2 ngày',
            icon: 'fas fa-cut'
        },
        {
            step: 4,
            title: 'Lắp Đặt & Cố Định',
            description: 'Lắp đặt, cố định bằng keo chuyên dụng hoặc vít ốc',
            duration: '1-3 ngày',
            icon: 'fas fa-tools'
        },
        {
            step: 5,
            title: 'Hoàn Thiện & Sơn',
            description: 'Xử lý mối nối, sơn hoàn thiện theo yêu cầu',
            duration: '1-2 ngày',
            icon: 'fas fa-paint-brush'
        }
    ];

    // Design styles
    const designStyles = [
        {
            style: 'Hiện Đại - Tối Giản',
            description: 'Phào chỉ đơn giản, đường nét thẳng, tông màu trung tính',
            materials: ['PS cơ bản', 'PU đơn giản'],
            spaces: ['Chung cư hiện đại', 'Văn phòng', 'Nhà phố trẻ'],
            priceRange: '25-80K/m',
            icon: 'fas fa-minus'
        },
        {
            style: 'Tân Cổ Điển',
            description: 'Hoa văn tinh tế, đường cong mềm mại, chi tiết phong phú',
            materials: ['PU cao cấp', 'Thạch cao điêu khắc'],
            spaces: ['Biệt thự', 'Khách sạn 4-5*', 'Nhà hàng cao cấp'],
            priceRange: '80-150K/m',
            icon: 'fas fa-crown'
        },
        {
            style: 'Cổ Điển Châu Âu',
            description: 'Hoa văn phức tạp, đường nét cầu kỳ, phong cách hoàng gia',
            materials: ['Thạch cao điêu khắc', 'PU cao cấp nhập khẩu'],
            spaces: ['Biệt thự sang trọng', 'Lâu đài', 'Dinh thự'],
            priceRange: '120-180K/m',
            icon: 'fas fa-chess-king'
        },
        {
            style: 'Scandinavian',
            description: 'Tối giản, màu trắng sáng, đường nét mảnh thanh thoát',
            materials: ['PS trắng', 'PU đơn giản'],
            spaces: ['Căn hộ nhỏ', 'Phòng khách hiện đại', 'Không gian mở'],
            priceRange: '30-70K/m',
            icon: 'fas fa-igloo'
        }
    ];

    // Comparison data
    const comparison = [
        {
            aspect: 'Giá thành',
            pu: '45-150K/m',
            ps: '25-85K/m',
            gypsum: '65-180K/m'
        },
        {
            aspect: 'Độ bền',
            pu: 'Rất tốt (20+ năm)',
            ps: 'Trung bình (10-15 năm)',
            gypsum: 'Tốt (15-20 năm)'
        },
        {
            aspect: 'Trọng lượng',
            pu: 'Rất nhẹ',
            ps: 'Siêu nhẹ',
            gypsum: 'Nặng hơn'
        },
        {
            aspect: 'Chống ẩm',
            pu: 'Tốt',
            ps: 'Trung bình',
            gypsum: 'Kém'
        },
        {
            aspect: 'Tạo hình',
            pu: 'Đa dạng',
            ps: 'Cơ bản',
            gypsum: 'Rất đa dạng'
        },
        {
            aspect: 'Thi công',
            pu: 'Dễ dàng',
            ps: 'Rất dễ',
            gypsum: 'Khó hơn'
        },
        {
            aspect: 'Bảo dưỡng',
            pu: 'Ít',
            ps: 'Ít',
            gypsum: 'Trung bình'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Nên chọn phào chỉ PU, PS hay thạch cao?',
            answer: 'PS phù hợp ngân sách thấp, không gian đơn giản. PU là lựa chọn cân bằng giữa giá và chất lượng, phù hợp hầu hết công trình. Thạch cao dành cho biệt thự, khách sạn cần tạo hình phức tạp và sang trọng.'
        },
        {
            question: 'Phào chỉ có bền không? Có bị cong vênh không?',
            answer: 'PU và thạch cao ít bị cong vênh. PS có thể bị cong nếu nhiệt độ cao hoặc thi công không đúng kỹ thuật. PU có độ bền cao nhất (20+ năm).'
        },
        {
            question: 'Chi phí lắp phào chỉ cho căn hộ 80m² bao nhiêu?',
            answer: 'Phào trần + chân tường: PS 3-5 triệu, PU 6-10 triệu, thạch cao 8-15 triệu tùy độ phức tạp của hoa văn và mẫu mã.'
        },
        {
            question: 'Phào chỉ có cần bảo dưỡng không?',
            answer: 'Chỉ cần vệ sinh bụi bẩn định kỳ bằng khăn mềm. Nếu sơn phai màu có thể sơn lại. PU và thạch cao bền lâu, ít cần bảo dưỡng đặc biệt.'
        },
        {
            question: 'Thời gian thi công phào chỉ mất bao lâu?',
            answer: 'Căn hộ 80m²: PS mất 1-2 ngày, PU 2-3 ngày, thạch cao 3-5 ngày tùy độ phức tạp. Bao gồm cả thời gian sơn hoàn thiện.'
        },
        {
            question: 'Phào chỉ có chống cháy không?',
            answer: 'PS và PU có khả năng chống cháy tương đối tốt. Thạch cao là vật liệu chống cháy tốt nhất trong 3 loại, an toàn với công trình cao tầng.'
        }
    ];

    const currentType = moldingTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            {/* Header Section */}
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-grip-lines icon-design"></i>
                        Báo Giá Phào Chỉ PU - PS - Thạch Cao
                    </h1>
                    <p className="section-subtitle">
                        Thi công lắp đặt phào chỉ trang trí PU, PS, thạch cao chuyên nghiệp
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-palette icon-design"></i>
                            <span>Đa Dạng Mẫu Mã</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-hammer icon-construction"></i>
                            <span>Thi Công Chuyên Nghiệp</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-paint-brush icon-paint"></i>
                            <span>Hoàn Thiện Tinh Tế</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-award icon-quality"></i>
                            <span>Chất Lượng Cao</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Molding Types Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Loại Phào Chỉ & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 loại phào chỉ phổ biến với đặc điểm và giá cả khác nhau
                    </p>

                    {/* Tabs */}
                    <div className="tabs">
                        {moldingTypes.map(type => (
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

                                {/* Applications Section */}
                                <div className="info-section">
                                    <h4><i className="fas fa-home"></i> Ứng dụng & giá:</h4>
                                    <div className="item-list">
                                        {currentType.applications.map((app, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{app.type}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">Kích thước: {app.size}</span>
                                                    <span className="item-price-extended">{app.price}/m</span>
                                                </div>
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
                                        Xem Mẫu Phào
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Design Styles */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-palette icon-design"></i>
                        Phong Cách Thiết Kế
                    </h2>
                    <p className="section-subtitle">
                        Các phong cách phào chỉ phù hợp từng không gian
                    </p>

                    <div className="grid-4">
                        {designStyles.map((style, index) => (
                            <div key={index} className="style-card card">
                                <div className="card-header">
                                    <h3>
                                        <i className={style.icon}></i>
                                        {style.style}
                                    </h3>
                                    <p>{style.description}</p>
                                    <div className="price-range">{style.priceRange}</div>
                                </div>
                                <div className="card-body">
                                    <div className="materials">
                                        <h4>Vật liệu:</h4>
                                        <div className="tags">
                                            {style.materials.map((material, i) => (
                                                <span key={i} className="tag">{material}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="spaces">
                                        <h4>Phù hợp:</h4>
                                        <ul>
                                            {style.spaces.map((space, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-dot-circle"></i>
                                                    {space}
                                                </li>
                                            ))}
                                        </ul>
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
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-process"></i>
                        Quy Trình Thi Công
                    </h2>
                    <p className="section-subtitle">
                        5 bước lắp đặt phào chỉ chuyên nghiệp
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

            {/* Comparison Table */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-balance-scale icon-comparison"></i>
                        So Sánh Chi Tiết
                    </h2>
                    <p className="section-subtitle">
                        Bảng so sánh 3 loại phào chỉ PU - PS - Thạch Cao
                    </p>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                            <tr>
                                <th>Tiêu Chí</th>
                                <th style={{ background: '#f59e0b', color: 'white' }}>PU</th>
                                <th style={{ background: '#10b981', color: 'white' }}>PS</th>
                                <th style={{ background: '#8b5cf6', color: 'white' }}>Thạch Cao</th>
                            </tr>
                            </thead>
                            <tbody>
                            {comparison.map((row, index) => (
                                <tr key={index}>
                                    <td style={{ fontWeight: '600' }}>{row.aspect}</td>
                                    <td>{row.pu}</td>
                                    <td>{row.ps}</td>
                                    <td>{row.gypsum}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
                        Giải đáp thắc mắc về phào chỉ trang trí
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

export default PhaoChiPage;