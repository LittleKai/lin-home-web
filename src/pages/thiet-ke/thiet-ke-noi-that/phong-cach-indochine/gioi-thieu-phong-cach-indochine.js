import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const GioiThieuIndochinePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const characteristics = [
        {
            icon: 'fas fa-palette',
            title: 'Màu Sắc',
            description: 'Vàng nhạt, trắng ngà, xanh ngọc, nâu gỗ - ấm áp và sang trọng',
            details: ['Vàng nhạt: ấm cúng', 'Trắng ngà: thanh lịch', 'Xanh ngọc: điểm nhấn', 'Nâu gỗ: tự nhiên'],
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-tree',
            title: 'Vật Liệu',
            description: 'Gỗ tự nhiên, mây tre đan, gạch bông, đá tự nhiên',
            details: ['Gỗ tự nhiên cao cấp', 'Mây tre thủ công', 'Gạch bông cổ điển', 'Đá tự nhiên ốp tường'],
            color: '#10b981'
        },
        {
            icon: 'fas fa-couch',
            title: 'Nội Thất',
            description: 'Bàn ghế gỗ chạm khắc, sofa bọc vải, tủ gỗ cổ điển',
            details: ['Sofa gỗ chạm khắc', 'Bàn trà nguyên khối', 'Tủ gỗ điêu khắc', 'Ghế mây tre đan'],
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Trang Trí',
            description: 'Bình gốm, quạt trần gỗ, tranh sơn dầu, đèn mây tre',
            details: ['Bình gốm cổ', 'Quạt trần gỗ', 'Tranh sơn dầu Á Đông', 'Đèn mây tre'],
            color: '#ec4899'
        },
        {
            icon: 'fas fa-door-open',
            title: 'Không Gian',
            description: 'Cửa vòm, trần cao, hành lang thoáng mát',
            details: ['Cửa vòm đặc trưng', 'Trần cao 3-5m', 'Hành lang rộng', 'Thông gió tự nhiên'],
            color: '#06b6d4'
        }
    ];

    const prosAndCons = {
        pros: [
            {
                title: 'Sang Trọng & Bền Vững',
                description: 'Vẻ đẹp vượt thời gian, ít bị lỗi mốt',
                icon: 'fas fa-star'
            },
            {
                title: 'Phù Hợp Khí Hậu Nhiệt Đới',
                description: 'Thông gió tốt, mát mẻ tự nhiên',
                icon: 'fas fa-wind'
            },
            {
                title: 'Thể Hiện Đẳng Cấp',
                description: 'Gu thẩm mỹ tinh tế, sang trọng',
                icon: 'fas fa-gem'
            },
            {
                title: 'Gần Gũi Thiên Nhiên',
                description: 'Vật liệu tự nhiên, xanh, thân thiện',
                icon: 'fas fa-leaf'
            }
        ],
        cons: [
            {
                title: 'Chi Phí Cao',
                description: 'Vật liệu gỗ, tre thủ công đắt tiền',
                solution: 'Kết hợp gỗ công nghiệp để tiết kiệm',
                icon: 'fas fa-money-bill-wave'
            },
            {
                title: 'Thiết Kế Phức Tạp',
                description: 'Cần kiến trúc sư nhiều kinh nghiệm',
                solution: 'Chọn đơn vị uy tín, có portfolio',
                icon: 'fas fa-drafting-compass'
            },
            {
                title: 'Có Thể Nặng Nề',
                description: 'Nếu không gian nhỏ, dễ bí bách',
                solution: 'Giảm chi tiết, ưu tiên màu sáng',
                icon: 'fas fa-compress-arrows-alt'
            }
        ]
    };

    const applications = [
        {
            location: 'Hà Nội',
            types: [
                {
                    type: 'Chung cư',
                    description: 'Gạch bông trang trí, gỗ sáng màu, nội thất gọn',
                    price: '180,000 - 230,000 VNĐ/m²'
                },
                {
                    type: 'Nhà phố',
                    description: 'Gỗ công nghiệp + mây tre để giảm chi phí',
                    price: '200,000 - 260,000 VNĐ/m²'
                }
            ],
            climate: 'Độ ẩm cao, cần gỗ chống ẩm',
            color: '#3b82f6'
        },
        {
            location: 'Nha Trang',
            types: [
                {
                    type: 'Villa/Resort',
                    description: 'Gỗ chống ẩm, nội thất mây tre, không gian mở',
                    price: '250,000 - 320,000 VNĐ/m²'
                },
                {
                    type: 'Homestay',
                    description: 'Tạo sự khác biệt, thu hút du khách',
                    price: '250,000 - 320,000 VNĐ/m²'
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
            description: 'Vật liệu tự nhiên nhưng phải chống ẩm, chống mặn (đặc biệt ở Nha Trang)'
        },
        {
            icon: 'fas fa-balance-scale',
            title: 'Giữ Sự Cân Đối',
            description: 'Tránh lạm dụng chi tiết trang trí, giữ không gian hài hòa'
        },
        {
            icon: 'fas fa-cube',
            title: 'Bản Vẽ 3D',
            description: 'Luôn có bản vẽ 3D trước thi công để kiểm soát chi phí'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Chọn KTS Giàu Kinh Nghiệm',
            description: 'Kiến trúc sư am hiểu phong cách Indochine sẽ tránh được nhiều sai sót'
        }
    ];

    const commitments = [
        {
            icon: 'fas fa-comments',
            title: 'Tư Vấn Miễn Phí',
            description: 'Tư vấn ý tưởng, phong cách phù hợp với không gian'
        },
        {
            icon: 'fas fa-cube',
            title: 'Thiết Kế 3D',
            description: 'Phối cảnh 3D sát thực tế, giúp hình dung rõ ràng'
        },
        {
            icon: 'fas fa-user-graduate',
            title: 'KTS Chuyên Nghiệp',
            description: 'Kiến trúc sư am hiểu phong cách Indochine'
        },
        {
            icon: 'fas fa-hammer',
            title: 'Thi Công Trọn Gói',
            description: 'Thi công và giám sát từ A-Z'
        }
    ];

    const faqData = [
        {
            question: 'Phong cách Indochine là gì?',
            answer: 'Indochine là sự kết hợp hài hòa giữa nét đẹp văn hóa Á Đông và kiến trúc Pháp tinh tế. Phong cách này mang tính hoài cổ, sang trọng nhưng vẫn tiện nghi, phù hợp với khí hậu nhiệt đới.'
        },
        {
            question: 'Indochine có phù hợp với chung cư nhỏ không?',
            answer: 'Có thể. Với chung cư nhỏ cần giảm chi tiết trang trí, ưu tiên màu sáng, nội thất đa năng nhưng vẫn giữ tinh thần Indochine với gạch bông điểm nhấn, đồ gỗ nhẹ nhàng.'
        },
        {
            question: 'Chi phí thiết kế Indochine là bao nhiêu?',
            answer: 'Chi phí trung bình 180,000 - 320,000 VNĐ/m² tùy loại hình. Chung cư: 180-230K, Nhà phố: 200-260K, Biệt thự: 250-320K VNĐ/m². Giá thay đổi theo vật liệu và yêu cầu.'
        },
        {
            question: 'Nha Trang khí hậu mặn, gỗ có bền không?',
            answer: 'Nếu chọn đúng loại gỗ chống ẩm mặn (Lim Nam Phi, Teak), kim loại dùng inox 304, và bảo dưỡng định kỳ thì hoàn toàn bền. Tuổi thọ có thể lên 15-20 năm.'
        },
        {
            question: 'Indochine có dễ lỗi mốt không?',
            answer: 'Không. Indochine là phong cách vượt thời gian, ít bị lỗi mốt nhờ tính cổ điển và sang trọng. Miễn là thiết kế cân đối, không lạm dụng chi tiết thì luôn đẹp qua năm tháng.'
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
                        Giới Thiệu Phong Cách Indochine
                    </h2>
                    <div className="content-text">
                        <p>
                            Phong cách <strong>Indochine (Đông Dương)</strong> là sự kết hợp hài hòa giữa nét đẹp 
                            văn hóa Á Đông và kiến trúc Pháp tinh tế. Đây là lựa chọn lý tưởng cho gia chủ yêu thích 
                            sự hoài cổ, sang trọng nhưng vẫn tiện nghi.
                        </p>
                        <ul className="styled-list">
                            <li>
                                <strong>Ở Hà Nội:</strong> Phù hợp với biệt thự, nhà phố, chung cư cao cấp
                            </li>
                            <li>
                                <strong>Ở Nha Trang:</strong> Được ưa chuộng trong villa nghỉ dưỡng, resort, homestay
                            </li>
                        </ul>
                        <p>
                            Năm 2025, Indochine tiếp tục là xu hướng nội thất bền vững, gắn liền với lối sống 
                            tinh tế và gần gũi thiên nhiên.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="characteristics">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i>
                        Đặc Trưng Của Phong Cách Indochine
                    </h2>
                    <p className="section-subtitle">
                        5 yếu tố tạo nên vẻ đẹp độc đáo
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
                        Lưu Ý Khi Thiết Kế Indochine
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
                        Giải đáp thắc mắc về phong cách Indochine
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

export default GioiThieuIndochinePage;
