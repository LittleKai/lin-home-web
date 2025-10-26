import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const ThietKeNoiThatTanCoDienPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const characteristics = [
        {
            icon: 'fas fa-palette',
            title: 'Màu Sắc',
            description: 'Trắng, kem, vàng ánh kim, xanh cổ vịt, xám ghi - sang trọng & đẳng cấp',
            details: ['Trắng - kem: chủ đạo', 'Vàng ánh kim: điểm nhấn', 'Xanh cổ vịt: tinh tế', 'Xám ghi: hiện đại'],
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-gem',
            title: 'Chất Liệu',
            description: 'Gỗ tự nhiên, đá marble, kim loại mạ vàng, vải nhung/da cao cấp',
            details: ['Gỗ tự nhiên cao cấp', 'Đá marble sang trọng', 'Kim loại mạ vàng', 'Vải nhung/da cao cấp'],
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'Hoa Văn',
            description: 'Phào chỉ tường, trần, cột giả - nhẹ nhàng, tinh tế',
            details: ['Phào chỉ tường tinh xảo', 'Trần cao nghệ thuật', 'Cột giả cổ điển', 'Đường nét tinh tế'],
            color: '#ec4899'
        },
        {
            icon: 'fas fa-couch',
            title: 'Nội Thất',
            description: 'Sofa tân cổ điển, đèn chùm pha lê, bàn trà đá',
            details: ['Sofa bọc da/nhung', 'Đèn chùm pha lê', 'Bàn trà đá marble', 'Tủ rượu sang trọng'],
            color: '#10b981'
        },
        {
            icon: 'fas fa-ruler-combined',
            title: 'Không Gian',
            description: 'Cân đối, đăng đối, tạo cảm giác bề thế nhưng không rườm rà',
            details: ['Cân đối và đăng đối', 'Tạo cảm giác bề thế', 'Không rườm rà', 'Ánh sáng hài hòa'],
            color: '#06b6d4'
        }
    ];

    const prosAndCons = {
        pros: [
            {
                title: 'Sang Trọng & Đẳng Cấp',
                description: 'Tạo giá trị khác biệt, thể hiện đẳng cấp gia chủ',
                icon: 'fas fa-crown'
            },
            {
                title: 'Bền Vững Theo Thời Gian',
                description: 'Sử dụng lâu dài, ít lỗi mốt',
                icon: 'fas fa-infinity'
            },
            {
                title: 'Phù Hợp Phong Thủy',
                description: 'Dễ kết hợp với phong thủy, màu sắc hài hòa',
                icon: 'fas fa-yin-yang'
            },
            {
                title: 'Linh Hoạt Ứng Dụng',
                description: 'Phù hợp nhiều loại công trình: biệt thự, nhà phố, chung cư',
                icon: 'fas fa-home'
            }
        ],
        cons: [
            {
                title: 'Chi Phí Cao',
                description: 'Vật liệu cao cấp làm tăng chi phí',
                solution: 'Kết hợp gỗ công nghiệp phủ veneer, đá nhân tạo',
                icon: 'fas fa-money-bill-wave'
            },
            {
                title: 'Thi Công Phức Tạp',
                description: 'Cần KTS giàu kinh nghiệm, thi công tỉ mỉ',
                solution: 'Chọn đơn vị thiết kế & thi công trọn gói',
                icon: 'fas fa-tools'
            },
            {
                title: 'Dễ Rườm Rà',
                description: 'Nếu không tinh tế, dễ trở nên nặng nề',
                solution: 'Tiết chế chi tiết, ưu tiên đường nét tinh giản',
                icon: 'fas fa-compress-arrows-alt'
            }
        ]
    };

    const applications = [
        {
            location: 'Hà Nội',
            types: [
                {
                    type: 'Biệt thự',
                    description: 'Không gian chú trọng ánh sáng vàng, hạn chế sự bí bách',
                    price: '250,000 - 320,000 VNĐ/m²'
                },
                {
                    type: 'Chung cư cao cấp',
                    description: 'Thiết kế tinh giản, tối ưu diện tích',
                    price: '180,000 - 250,000 VNĐ/m²'
                },
                {
                    type: 'Nhà phố',
                    description: 'Nhiều tầng, phào chỉ nhẹ, chi tiết tỉ mỉ',
                    price: '200,000 - 260,000 VNĐ/m²'
                }
            ],
            climate: 'Chú trọng ánh sáng tự nhiên, giếng trời',
            color: '#3b82f6'
        },
        {
            location: 'Nha Trang',
            types: [
                {
                    type: 'Villa ven biển',
                    description: 'Vật liệu chống ẩm mặn, gỗ xử lý chống ẩm',
                    price: '250,000 - 320,000 VNĐ/m²'
                },
                {
                    type: 'Khách sạn, Homestay',
                    description: 'Sang trọng, thu hút khách cao cấp',
                    price: '250,000 - 320,000 VNĐ/m²'
                }
            ],
            climate: 'Vật liệu chống ẩm mặn, inox 304, gỗ chống ẩm',
            color: '#10b981'
        }
    ];

    const designNotes = [
        {
            icon: 'fas fa-lightbulb',
            title: 'Không Lạm Dụng Chi Tiết',
            description: 'Tránh cảm giác nặng nề, rườm rà. Chỉ nhấn mạnh tại trần, tường, cửa chính'
        },
        {
            icon: 'fas fa-sun',
            title: 'Màu Sắc Sáng & Ánh Kim',
            description: 'Lựa chọn màu sắc sáng kết hợp ánh kim để cân bằng sang trọng'
        },
        {
            icon: 'fas fa-water',
            title: 'Chống Ẩm Mặn (Nha Trang)',
            description: 'Với khí hậu Nha Trang, cần chống ẩm mặn cho gỗ & kim loại'
        },
        {
            icon: 'fas fa-cube',
            title: 'Bản Vẽ 3D Chi Tiết',
            description: 'Luôn có bản vẽ 3D để kiểm soát chi phí & thẩm mỹ trước thi công'
        }
    ];

    const commitments = [
        {
            icon: 'fas fa-comments',
            title: 'Tư Vấn Miễn Phí',
            description: 'Tư vấn ý tưởng ban đầu miễn phí'
        },
        {
            icon: 'fas fa-cube',
            title: 'Thiết Kế 3D',
            description: 'Phối cảnh 3D chân thực, chi tiết'
        },
        {
            icon: 'fas fa-user-graduate',
            title: 'KTS Kinh Nghiệm',
            description: 'KTS lâu năm trong Tân cổ điển'
        },
        {
            icon: 'fas fa-hammer',
            title: 'Giám Sát Thi Công',
            description: 'Đảm bảo đúng thiết kế, chất lượng'
        }
    ];

    const faqData = [
        {
            question: 'Phong cách Tân cổ điển là gì?',
            answer: 'Tân cổ điển (Neo-classical) là sự kết hợp tinh tế giữa nét sang trọng cổ điển và sự tối giản hiện đại. Không cầu kỳ như cổ điển châu Âu, nhưng vẫn giữ sự quý phái và đẳng cấp.'
        },
        {
            question: 'Tân cổ điển có phù hợp với chung cư nhỏ không?',
            answer: 'Có thể. Với chung cư nhỏ cần tiết chế chi tiết phào chỉ, ưu tiên màu sáng, nội thất gọn gàng nhưng vẫn giữ tinh thần Tân cổ điển với vài điểm nhấn như đèn chùm nhỏ, phào nhẹ.'
        },
        {
            question: 'Chi phí thiết kế Tân cổ điển là bao nhiêu?',
            answer: 'Chi phí trung bình: Chung cư: 180-250K, Nhà phố: 200-260K, Biệt thự: 250-320K VNĐ/m². Giá thay đổi theo vật liệu và yêu cầu chi tiết.'
        },
        {
            question: 'Nha Trang khí hậu mặn, gỗ có bị hỏng không?',
            answer: 'Nếu chọn đúng loại gỗ chống ẩm, kim loại inox 304, và phủ lớp bảo vệ thì hoàn toàn bền. Quan trọng là bảo dưỡng định kỳ.'
        },
        {
            question: 'Làm sao tránh thiết kế Tân cổ điển bị rườm rà?',
            answer: 'Không lạm dụng chi tiết, ưu tiên đường nét tinh giản, chỉ nhấn mạnh tại khu vực trọng điểm. Luôn có bản vẽ 3D để kiểm soát tổng thể.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="main-content">

            <section className="section" id="intro">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle"></i>
                        Giới Thiệu Phong Cách Tân Cổ Điển
                    </h2>
                    <div className="content-text">
                        <p>
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> là sự kết hợp tinh tế giữa
                            nét sang trọng cổ điển và sự tối giản hiện đại. Không cầu kỳ như cổ điển châu Âu,
                            nhưng vẫn giữ sự quý phái – đẳng cấp, Tân cổ điển ngày càng được ưa chuộng tại Việt Nam.
                        </p>
                        <ul className="styled-list">
                            <li>
                                <strong>Tại Hà Nội:</strong> Phù hợp biệt thự, nhà phố cao cấp, chung cư hạng sang
                            </li>
                            <li>
                                <strong>Tại Nha Trang:</strong> Thường áp dụng cho villa ven biển, khách sạn, nhà hàng
                            </li>
                        </ul>
                        <p>
                            Năm 2025, Tân cổ điển tiếp tục là xu hướng nội thất bền vững, gắn liền với lối sống
                            sang trọng và đẳng cấp.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="characteristics">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i>
                        Đặc Trưng Của Phong Cách Tân Cổ Điển
                    </h2>
                    <p className="section-subtitle">
                        5 yếu tố tạo nên vẻ đẹp sang trọng và đẳng cấp
                    </p>

                    <div className="grid-3">
                        {characteristics.map((char, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: char.color }}>
                                    <i className={char.icon}></i>
                                    {char.title}
                                </h3>
                                <p>{char.description}</p>
                                <ul>
                                    {char.details.map((detail, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-balance-scale"></i>
                        Ưu - Nhược Điểm & Nỗi Đau Khách Hàng
                    </h2>

                    <div className="grid-2">
                        <div>
                            <h3 className="pros-title">
                                <i className="fas fa-check-circle"></i>
                                Ưu Điểm
                            </h3>
                            {prosAndCons.pros.map((pro, index) => (
                                <div key={index} className="info-card">
                                    <h4>
                                        <i className={pro.icon}></i>
                                        {pro.title}
                                    </h4>
                                    <p>{pro.description}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="cons-title">
                                <i className="fas fa-exclamation-triangle"></i>
                                Nhược Điểm (Nỗi Đau)
                            </h3>
                            {prosAndCons.cons.map((con, index) => (
                                <div key={index} className="info-card">
                                    <h4>
                                        <i className={con.icon}></i>
                                        {con.title}
                                    </h4>
                                    <p><strong>Vấn đề:</strong> {con.description}</p>
                                    <p className="solution-text">
                                        <i className="fas fa-lightbulb"></i>
                                        <strong>Giải pháp:</strong> {con.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-map-marker-alt"></i>
                        Ứng Dụng Thực Tế Tại Hà Nội & Nha Trang
                    </h2>

                    <div className="grid-2">
                        {applications.map((app, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: app.color }}>
                                    <i className="fas fa-location-dot"></i>
                                    {app.location}
                                </h3>
                                <p className="climate-badge">
                                    <i className="fas fa-cloud"></i>
                                    {app.climate}
                                </p>
                                {app.types.map((type, i) => (
                                    <div key={i} className="type-section">
                                        <h4>{type.type}</h4>
                                        <p>{type.description}</p>
                                        <span className="standard">{type.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Lưu Ý Khi Thiết Kế Tân Cổ Điển
                    </h2>

                    <div className="grid-4">
                        {designNotes.map((note, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={note.icon}></i>
                                    {note.title}
                                </h3>
                                <p>{note.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-handshake"></i>
                        Ưu Đãi & Cam Kết
                    </h2>

                    <div className="grid-4">
                        {commitments.map((commit, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className={commit.icon}></i>
                                    {commit.title}
                                </h3>
                                <p>{commit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về phong cách Tân cổ điển
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

            <CTAContent />
        </div>
    );
};

export default ThietKeNoiThatTanCoDienPage;