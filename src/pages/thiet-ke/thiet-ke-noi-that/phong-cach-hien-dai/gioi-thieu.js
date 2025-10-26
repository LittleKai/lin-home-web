import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const GioiThieuHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const characteristics = [
        {
            icon: 'fas fa-palette',
            title: 'Màu Sắc',
            description: 'Tông trung tính (trắng, xám, be), kết hợp nhấn màu đậm hoặc gỗ',
            details: ['Trắng: thoáng sạch', 'Xám: tinh tế', 'Be: ấm cúng', 'Nhấn: gỗ nâu, đen'],
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-cube',
            title: 'Vật Liệu',
            description: 'Gỗ công nghiệp, kính, inox, đá nhân tạo',
            details: ['Gỗ công nghiệp chống ẩm', 'Kính cường lực', 'Inox 304', 'Đá nhân tạo bền'],
            color: '#10b981'
        },
        {
            icon: 'fas fa-couch',
            title: 'Nội Thất',
            description: 'Thiết kế đơn giản, đa công năng, hạn chế chi tiết thừa',
            details: ['Thiết kế tối giản', 'Đa công năng', 'Gọn gàng', 'Tiện nghi cao'],
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-door-open',
            title: 'Không Gian',
            description: 'Mở, liên thông phòng khách – bếp – ăn',
            details: ['Không gian mở', 'Liên thông các phòng', 'Tối ưu diện tích', 'Thông thoáng'],
            color: '#06b6d4'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Ánh Sáng',
            description: 'Cửa kính lớn + đèn LED hiện đại, spotlight, đèn hắt trần',
            details: ['Cửa kính lớn', 'Đèn LED', 'Spotlight', 'Đèn hắt trần'],
            color: '#f59e0b'
        }
    ];

    const prosAndCons = {
        pros: [
            {
                title: 'Tối Ưu Diện Tích Nhỏ',
                description: 'Phù hợp căn hộ 40–70m² ở Hà Nội',
                icon: 'fas fa-expand-arrows-alt'
            },
            {
                title: 'Không Gian Thoáng Mát',
                description: 'Hợp khí hậu ven biển Nha Trang',
                icon: 'fas fa-wind'
            },
            {
                title: 'Chi Phí Hợp Lý',
                description: 'Hợp lý hơn tân cổ điển, Indochine',
                icon: 'fas fa-money-bill-wave'
            },
            {
                title: 'Dễ Thay Đổi',
                description: 'Dễ nâng cấp nội thất khi cần',
                icon: 'fas fa-sync-alt'
            }
        ],
        cons: [
            {
                title: 'Chất Lượng Vật Liệu',
                description: 'Nội thất kém chất lượng dễ xuống cấp, bong tróc',
                solution: 'Chọn gỗ công nghiệp chất lượng cao, phụ kiện tốt',
                icon: 'fas fa-exclamation-triangle'
            },
            {
                title: 'Dễ Đơn Điệu',
                description: 'Không khéo léo → không gian lạnh lẽo',
                solution: 'Kết hợp cây xanh, đèn ấm, tranh trang trí',
                icon: 'fas fa-palette'
            },
            {
                title: 'Vấn Đề Ánh Sáng',
                description: 'Hà Nội hay gặp vấn đề bí sáng, ngột ngạt',
                solution: 'Thiết kế cửa kính lớn, giếng trời',
                icon: 'fas fa-lightbulb'
            }
        ]
    };

    const applications = [
        {
            location: 'Hà Nội',
            types: [
                {
                    type: 'Nhà phố, chung cư diện tích nhỏ',
                    description: 'Ưu tiên cửa kính, giếng trời, ánh sáng nhân tạo',
                    price: '150,000 - 220,000 VNĐ/m²'
                }
            ],
            climate: 'Khí hậu ẩm, cần chống ẩm cho gỗ',
            color: '#3b82f6'
        },
        {
            location: 'Nha Trang',
            types: [
                {
                    type: 'Villa, biệt thự ven biển',
                    description: 'Ưu tiên không gian mở, chống ẩm mặn, vật liệu bền',
                    price: '200,000 - 280,000 VNĐ/m²'
                }
            ],
            climate: 'Ẩm mặn biển, cần vật liệu chống mặn',
            color: '#10b981'
        }
    ];

    const designNotes = [
        {
            icon: 'fas fa-check-circle',
            title: 'Chọn Vật Liệu Đúng',
            description: 'Gỗ công nghiệp chất lượng cao để tránh cong vênh'
        },
        {
            icon: 'fas fa-sun',
            title: 'Bố Trí Ánh Sáng',
            description: 'Cửa kính lớn, giếng trời cho nhà phố Hà Nội'
        },
        {
            icon: 'fas fa-water',
            title: 'Chống Ẩm Mặn',
            description: 'Ở Nha Trang, cần chống ẩm mặn cho gỗ & kim loại'
        },
        {
            icon: 'fas fa-balance-scale',
            title: 'Tránh Lạm Dụng',
            description: 'Tránh mua quá nhiều đồ → mất tính tối giản'
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
            description: 'Phối cảnh 3D chân thực, dễ hình dung'
        },
        {
            icon: 'fas fa-user-graduate',
            title: 'KTS Chuyên Nghiệp',
            description: 'KTS giàu kinh nghiệm phong cách Hiện đại'
        },
        {
            icon: 'fas fa-hammer',
            title: 'Giám Sát Thi Công',
            description: 'Hỗ trợ giám sát, đảm bảo đúng thiết kế'
        }
    ];

    const faqData = [
        {
            question: 'Phong cách Hiện đại là gì?',
            answer: 'Phong cách nội thất Hiện đại (Modern Style) là phong cách thiết kế tối giản, tinh tế, tiện nghi, phù hợp nhịp sống đô thị. Đặc trưng bởi màu sắc trung tính, nội thất đơn giản, không gian mở và ánh sáng tự nhiên.'
        },
        {
            question: 'Phong cách Hiện đại có phù hợp với chung cư nhỏ không?',
            answer: 'Rất phù hợp. Phong cách Hiện đại là giải pháp tốt nhất cho căn hộ 40-70m² ở Hà Nội nhờ thiết kế tối ưu diện tích, nội thất đa năng và không gian mở liên thông.'
        },
        {
            question: 'Chi phí thiết kế Hiện đại là bao nhiêu?',
            answer: 'Chi phí trung bình 150,000 - 280,000 VNĐ/m² tùy loại hình. Chung cư: 150-200K, Nhà phố: 160-220K, Biệt thự: 200-280K VNĐ/m². Giá thay đổi theo vật liệu và yêu cầu.'
        },
        {
            question: 'Nha Trang khí hậu ẩm mặn, có phù hợp không?',
            answer: 'Phù hợp nếu chọn đúng vật liệu. Dùng gỗ công nghiệp chống ẩm, inox 304, kính cường lực. Tránh vật liệu dễ han gỉ. Với vật liệu đúng, nội thất có thể dùng 10-15 năm.'
        },
        {
            question: 'Phong cách Hiện đại có dễ lỗi mốt không?',
            answer: 'Không. Phong cách Hiện đại là phong cách vượt thời gian nhờ tính tối giản và đơn giản. Miễn là giữ được sự cân bằng, không gian luôn đẹp và thời thượng.'
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
                        Giới Thiệu Phong Cách Hiện Đại
                    </h2>
                    <div className="content-text">
                        <p>
                            Phong cách <strong>Hiện đại (Modern Style)</strong> là lựa chọn số 1 hiện nay cho
                            nhà phố, chung cư, biệt thự. Với đặc trưng tối giản, tinh tế, tiện nghi, phong cách
                            này mang lại không gian sống trẻ trung, phù hợp nhịp sống đô thị.
                        </p>
                        <ul className="styled-list">
                            <li>
                                <strong>Ở Hà Nội:</strong> Phổ biến trong căn hộ chung cư, nhà phố, nhà ống –
                                giải quyết bài toán diện tích nhỏ, thiếu sáng
                            </li>
                            <li>
                                <strong>Ở Nha Trang:</strong> Phù hợp villa, biệt thự ven biển, homestay, căn hộ
                                nghỉ dưỡng – đề cao sự thoáng đãng, mở rộng không gian
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="characteristics">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i>
                        Đặc Trưng Của Phong Cách Hiện Đại
                    </h2>
                    <p className="section-subtitle">
                        5 yếu tố tạo nên vẻ đẹp tối giản và tiện nghi
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
                        Ứng Dụng Tại Hà Nội & Nha Trang
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
                        Lưu Ý Khi Thiết Kế Hiện Đại
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
                        Giải đáp thắc mắc về phong cách Hiện đại
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

export default GioiThieuHienDaiPage;