import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const Top10MauThietKeTanCoDien = () => {
    const [activeTab, setActiveTab] = useState('phong-khach');
    const [activeFaq, setActiveFaq] = useState(null);

    const designSamples = [
        {
            id: 'phong-khach',
            name: 'Phòng Khách',
            models: [
                {
                    title: 'Phòng Khách Biệt Thự Tân Cổ Điển Sang Trọng',
                    features: [
                        'Sofa bọc da cao cấp, màu be/xám ghi',
                        'Bàn trà đá marble trắng vân vàng',
                        'Đèn chùm pha lê lớn, hoành tráng',
                        'Phào chỉ trần tinh xảo, cân đối',
                        'Thảm trải lông ngắn cao cấp',
                        'Tủ trang trí âm tường mạ vàng'
                    ],
                    area: '40-60m²',
                    price: '250-320k/m²',
                    suitable: 'Biệt thự, villa'
                },
                {
                    title: 'Phòng Khách Nhà Phố Tân Cổ Điển Tinh Gọn',
                    features: [
                        'Gam màu trắng - vàng ánh kim nhẹ nhàng',
                        'Sofa vải nhung xám, gọn gàng',
                        'Kệ tivi treo tường tối giản',
                        'Phào chỉ nhẹ, không rườm rà',
                        'Đèn chùm mini hoặc đèn thả',
                        'Gương trang trí mở rộng không gian'
                    ],
                    area: '20-35m²',
                    price: '200-260k/m²',
                    suitable: 'Nhà phố, chung cư'
                }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'phong-an',
            name: 'Phòng Ăn',
            models: [
                {
                    title: 'Phòng Ăn Biệt Thự Đẳng Cấp',
                    features: [
                        'Bàn ăn dài 8-12 ghế, gỗ tự nhiên',
                        'Ghế bọc vải nhung hoặc da',
                        'Tủ rượu âm tường, kính trong',
                        'Đèn chùm pha lê treo trần',
                        'Thảm trải dưới bàn ăn',
                        'Tường phào chỉ nghệ thuật'
                    ],
                    area: '30-45m²',
                    price: '250-320k/m²',
                    suitable: 'Biệt thự'
                },
                {
                    title: 'Phòng Ăn Nhà Phố Hiện Đại Pha Tân Cổ Điển',
                    features: [
                        'Bàn ăn 4-6 ghế, gọn gàng',
                        'Kết hợp tủ bếp hiện đại',
                        'Đèn thả trang trí tinh tế',
                        'Màu sắc trắng - xám - vàng nhẹ',
                        'Kệ trang trí tích hợp',
                        'Tường accent nhẹ nhàng'
                    ],
                    area: '15-25m²',
                    price: '200-260k/m²',
                    suitable: 'Nhà phố'
                }
            ],
            bgColor: '#f59e0b'
        },
        {
            id: 'phong-bep',
            name: 'Phòng Bếp',
            models: [
                {
                    title: 'Phòng Bếp Hiện Đại Pha Tân Cổ Điển',
                    features: [
                        'Tủ bếp gỗ công nghiệp phủ sơn trắng',
                        'Tay nắm đồng mạ vàng sang trọng',
                        'Đảo bếp kết hợp quầy bar',
                        'Mặt bếp đá marble hoặc đá nhân tạo',
                        'Thiết bị bếp âm tủ cao cấp',
                        'Đèn hắt tủ bếp LED'
                    ],
                    area: '15-30m²',
                    price: '220-280k/m²',
                    suitable: 'Biệt thự, nhà phố'
                }
            ],
            bgColor: '#10b981'
        },
        {
            id: 'phong-ngu',
            name: 'Phòng Ngủ',
            models: [
                {
                    title: 'Phòng Ngủ Master Biệt Thự Tân Cổ Điển',
                    features: [
                        'Giường bọc nệm, tab đầu giường phào chỉ',
                        'Tủ áo gỗ công nghiệp mạ vàng',
                        'Bàn trang điểm cổ điển có gương',
                        'Đèn ngủ vàng ấm, tinh tế',
                        'Rèm hai lớp, vải cao cấp',
                        'Thảm trải chân giường'
                    ],
                    area: '25-40m²',
                    price: '250-320k/m²',
                    suitable: 'Biệt thự'
                },
                {
                    title: 'Phòng Ngủ Nhỏ Nhà Phố Tân Cổ Điển',
                    features: [
                        'Nội thất gọn gàng, tối ưu diện tích',
                        'Giường gỗ công nghiệp phủ veneer',
                        'Gam màu sáng mở rộng không gian',
                        'Tủ âm tường tiết kiệm diện tích',
                        'Đèn ngủ treo tường',
                        'Phào chỉ nhẹ nhàng'
                    ],
                    area: '12-20m²',
                    price: '200-260k/m²',
                    suitable: 'Nhà phố, chung cư'
                }
            ],
            bgColor: '#ec4899'
        },
        {
            id: 'phong-tam',
            name: 'Phòng Tắm',
            models: [
                {
                    title: 'Phòng Tắm Biệt Thự Tân Cổ Điển',
                    features: [
                        'Lavabo đá marble hoặc đá nhân tạo',
                        'Bồn tắm đặt sàn sang trọng',
                        'Gương lớn viền mạ vàng',
                        'Đèn tường nghệ thuật',
                        'Vòi sen đồng mạ vàng',
                        'Gạch ốp tường vân marble'
                    ],
                    area: '10-20m²',
                    price: '250-320k/m²',
                    suitable: 'Biệt thự'
                }
            ],
            bgColor: '#3b82f6'
        },
        {
            id: 'phong-lam-viec',
            name: 'Phòng Làm Việc',
            models: [
                {
                    title: 'Phòng Làm Việc Tân Cổ Điển',
                    features: [
                        'Bàn gỗ tự nhiên, thiết kế cổ điển',
                        'Ghế da cao cấp, thoải mái',
                        'Thư viện sách âm tường',
                        'Ánh sáng vàng ấm, không gắt',
                        'Tường phào chỉ trang trọng',
                        'Thảm trải sàn cao cấp'
                    ],
                    area: '15-25m²',
                    price: '230-300k/m²',
                    suitable: 'Biệt thự, nhà phố'
                }
            ],
            bgColor: '#14b8a6'
        },
        {
            id: 'khach-san',
            name: 'Khách Sạn/Villa',
            models: [
                {
                    title: 'Nội Thất Khách Sạn Mini Tân Cổ Điển Tại Nha Trang',
                    features: [
                        'Giường bọc da, sang trọng',
                        'Phào chỉ nhẹ, phù hợp khách du lịch',
                        'Ánh sáng vàng ấm áp',
                        'Bố trí tiện nghi đầy đủ',
                        'Vật liệu chống ẩm mặn',
                        'View hướng biển tối ưu'
                    ],
                    area: '20-35m²/phòng',
                    price: '250-320k/m²',
                    suitable: 'Khách sạn, homestay'
                },
                {
                    title: 'Villa Tân Cổ Điển Ven Biển',
                    features: [
                        'Không gian mở, view biển',
                        'Vật liệu chống ẩm cao cấp',
                        'Kết hợp sang trọng & tiện nghi',
                        'Bể bơi infinity',
                        'Sân vườn nhiệt đới',
                        'Nội thất chống nắng mưa'
                    ],
                    area: '200-500m²',
                    price: '280-350k/m²',
                    suitable: 'Villa biển'
                }
            ],
            bgColor: '#06b6d4'
        }
    ];

    const priceTable = [
        {
            type: 'Nhà phố – nhà ống Tân cổ điển',
            price: '200,000 – 260,000',
            note: 'Tối ưu chi tiết, diện tích vừa & nhỏ'
        },
        {
            type: 'Biệt thự/villa Tân cổ điển',
            price: '250,000 – 320,000',
            note: 'Sang trọng, không gian lớn'
        },
        {
            type: 'Căn hộ cao cấp Tân cổ điển',
            price: '180,000 – 250,000',
            note: 'Phù hợp chung cư hạng sang'
        }
    ];

    const designNotes = [
        {
            title: 'Không Lạm Dụng Chi Tiết',
            description: 'Tránh cảm giác nặng nề, giữ không gian thoáng đãng',
            icon: 'fas fa-balance-scale'
        },
        {
            title: 'Hà Nội: Giếng Trời & Cửa Kính',
            description: 'Cần tận dụng ánh sáng tự nhiên tối đa',
            icon: 'fas fa-sun'
        },
        {
            title: 'Nha Trang: Vật Liệu Chống Ẩm',
            description: 'Ưu tiên vật liệu chống ẩm mặn cho độ bền cao',
            icon: 'fas fa-shield-alt'
        },
        {
            title: 'Đảm Bảo Đồng Bộ',
            description: 'Kiến trúc và nội thất phải hài hòa với nhau',
            icon: 'fas fa-sync'
        }
    ];

    const selectionCriteria = [
        {
            title: 'Phù Hợp Diện Tích',
            points: [
                'Biệt thự: Phào chỉ hoành tráng, đèn chùm lớn',
                'Nhà phố: Chi tiết tinh giản, màu sáng',
                'Chung cư: Tối ưu không gian, nội thất gọn'
            ],
            icon: 'fas fa-ruler-combined',
            color: '#8b5cf6'
        },
        {
            title: 'Phù Hợp Địa Lý',
            points: [
                'Hà Nội: Giếng trời, cửa kính lớn',
                'Nha Trang: Vật liệu chống ẩm mặn',
                'View biển: Kết hợp thiên nhiên'
            ],
            icon: 'fas fa-map-marker-alt',
            color: '#10b981'
        },
        {
            title: 'Phù Hợp Ngân Sách',
            points: [
                'Cao cấp: Toàn bộ vật liệu tự nhiên',
                'Trung cấp: Kết hợp tự nhiên & công nghiệp',
                'Tối ưu: Gỗ công nghiệp, đá nhân tạo'
            ],
            icon: 'fas fa-dollar-sign',
            color: '#f59e0b'
        }
    ];

    const faqs = [
        {
            question: 'Mẫu nào phù hợp với biệt thự rộng?',
            answer: 'Phòng khách biệt thự sang trọng, phòng ăn đẳng cấp với bàn dài, phòng ngủ master với phào chỉ tinh xảo. Tất cả đều sử dụng vật liệu cao cấp, đèn chùm pha lê lớn và không gian mở.'
        },
        {
            question: 'Nhà phố nhỏ nên chọn mẫu nào?',
            answer: 'Chọn các mẫu tinh gọn: phòng khách nhà phố với màu sáng, phòng ăn hiện đại pha tân cổ điển, phòng ngủ nhỏ tối ưu diện tích. Tránh đèn chùm quá lớn và phào chỉ rườm rà.'
        },
        {
            question: 'Tại Nha Trang cần lưu ý gì?',
            answer: 'Chọn vật liệu chống ẩm mặn: gỗ xử lý đặc biệt, inox 304, kim loại mạ PVD. Mẫu villa ven biển và khách sạn mini đều đã tối ưu cho khí hậu biển.'
        },
        {
            question: 'Chi phí cho từng mẫu là bao nhiêu?',
            answer: 'Nhà phố: 200-260k/m², Biệt thự: 250-320k/m², Chung cư: 180-250k/m². Giá thay đổi theo vật liệu và độ chi tiết. Liên hệ để nhận báo giá chính xác.'
        },
        {
            question: 'Có thể kết hợp nhiều mẫu không?',
            answer: 'Có thể, nhưng cần đảm bảo đồng bộ về màu sắc và phong cách. Ví dụ: phòng khách sang trọng kết hợp bếp hiện đại, nhưng phải cùng gam màu và chất liệu tương đồng.'
        }
    ];

    const currentCategory = designSamples.find(cat => cat.id === activeTab);

    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="container">
                    <h1 className="page-title">
                        <i className="fas fa-star"></i>
                        Top 10 Mẫu Thiết Kế Nội Thất Phong Cách Tân Cổ Điển 2025
                    </h1>
                    <p className="page-subtitle">
                        Đẹp nhất cho biệt thự, nhà phố, chung cư cao cấp
                        <br />
                        <strong>Tại Hà Nội & Nha Trang</strong>
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-card">
                        <h2>
                            <i className="fas fa-info-circle"></i>
                            Giới Thiệu
                        </h2>
                        <p>
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> là biểu tượng của sự 
                            <strong> sang trọng – tinh tế – bền vững</strong> theo thời gian. Năm 2025, nhiều gia chủ lựa chọn 
                            Tân cổ điển cho biệt thự, nhà phố, chung cư cao cấp tại Hà Nội & Nha Trang.
                        </p>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Dưới đây là 10 mẫu thiết kế nội thất Tân cổ điển đẹp nhất 2025, giúp bạn có thêm ý tưởng cho không gian sống trong mơ.
                        </p>
                    </div>
                </div>
            </section>

            <section className="tabs-section">
                <div className="container">
                    <h2 className="section-title">10 Mẫu Nội Thất Tân Cổ Điển 2025</h2>
                    
                    <div className="tabs-container">
                        {designSamples.map((category) => (
                            <button
                                key={category.id}
                                className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(category.id)}
                                style={activeTab === category.id ? { backgroundColor: category.bgColor } : {}}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {currentCategory && (
                        <div className="tab-content">
                            {currentCategory.models.map((model, index) => (
                                <div key={index} className="model-card">
                                    <div className="model-header" style={{ backgroundColor: currentCategory.bgColor }}>
                                        <h3>{model.title}</h3>
                                        <div className="model-info">
                                            <span><i className="fas fa-ruler"></i> {model.area}</span>
                                            <span><i className="fas fa-dollar-sign"></i> {model.price}</span>
                                            <span><i className="fas fa-home"></i> {model.suitable}</span>
                                        </div>
                                    </div>

                                    <div className="model-content">
                                        <h4>
                                            <i className="fas fa-star"></i>
                                            Đặc Điểm Nổi Bật
                                        </h4>
                                        <ul className="features-list">
                                            {model.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-check-circle"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="selection-criteria-section">
                <div className="container">
                    <h2 className="section-title">Tiêu Chí Lựa Chọn Mẫu Tân Cổ Điển</h2>
                    <div className="criteria-grid">
                        {selectionCriteria.map((criteria, index) => (
                            <div key={index} className="criteria-card" style={{ borderColor: criteria.color }}>
                                <div className="criteria-header" style={{ backgroundColor: criteria.color }}>
                                    <i className={criteria.icon}></i>
                                    <h3>{criteria.title}</h3>
                                </div>
                                <ul className="criteria-list">
                                    {criteria.points.map((point, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="price-table-section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Thiết Kế Nội Thất Tân Cổ Điển 2025</h2>
                    <div className="price-table-wrapper">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Hạng Mục Thiết Kế</th>
                                    <th>Đơn Giá (VNĐ/m²)</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceTable.map((item, index) => (
                                    <tr key={index}>
                                        <td><strong>{item.type}</strong></td>
                                        <td className="price-cell">{item.price}</td>
                                        <td>{item.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="note-box">
                        <i className="fas fa-info-circle"></i>
                        <strong>Lưu ý:</strong> Giá tham khảo, có thể thay đổi theo vật liệu & diện tích.
                    </div>
                </div>
            </section>

            <section className="design-notes-section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Khi Lựa Chọn Mẫu Tân Cổ Điển</h2>
                    <div className="features-grid">
                        {designNotes.map((note, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <i className={note.icon}></i>
                                </div>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
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

            <section className="conclusion-section">
                <div className="container">
                    <div className="conclusion-card">
                        <h2>
                            <i className="fas fa-check-circle"></i>
                            Kết Luận
                        </h2>
                        <p>
                            10 mẫu thiết kế trên cho thấy <strong>Tân cổ điển 2025</strong> không chỉ sang trọng mà còn có thể 
                            ứng dụng linh hoạt cho biệt thự, nhà phố, chung cư.
                        </p>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Nếu bạn cần thiết kế nội thất Tân cổ điển tại Hà Nội & Nha Trang, hãy liên hệ ngay để được tư vấn miễn phí & báo giá chi tiết.
                        </p>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default Top10MauThietKeTanCoDien;
