import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const GioiThieuPhongCachHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const characteristics = [
        {
            icon: 'fas fa-palette',
            title: 'Màu Sắc',
            description: 'Tông trung tính (trắng, xám, be), kết hợp nhấn màu đậm hoặc gỗ',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-cube',
            title: 'Vật Liệu',
            description: 'Gỗ công nghiệp, kính, inox, đá nhân tạo',
            color: '#10b981'
        },
        {
            icon: 'fas fa-couch',
            title: 'Nội Thất',
            description: 'Thiết kế đơn giản, đa công năng, hạn chế chi tiết thừa',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Không Gian',
            description: 'Mở, liên thông phòng khách – bếp – ăn',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Ánh Sáng',
            description: 'Cửa kính lớn + đèn LED hiện đại, spotlight, đèn hắt trần',
            color: '#ec4899'
        },
        {
            icon: 'fas fa-image',
            title: 'Trang Trí',
            description: 'Ít họa tiết, nhấn bằng tranh canvas, cây xanh, decor tối giản',
            color: '#ef4444'
        }
    ];

    const applications = [
        {
            city: 'Hà Nội',
            types: ['Nhà phố', 'Chung cư diện tích nhỏ'],
            priority: ['Ưu tiên cửa kính', 'Giếng trời', 'Ánh sáng nhân tạo'],
            icon: 'fas fa-city',
            color: '#ef4444'
        },
        {
            city: 'Nha Trang',
            types: ['Villa', 'Biệt thự ven biển', 'Căn hộ du lịch'],
            priority: ['Không gian mở', 'Chống ẩm mặn', 'Vật liệu bền'],
            icon: 'fas fa-umbrella-beach',
            color: '#3b82f6'
        }
    ];

    const priceTable = [
        {
            type: 'Thiết kế nội thất căn hộ chung cư',
            price: '150.000 - 200.000 VNĐ/m²',
            note: 'Bao gồm phối cảnh 3D chi tiết'
        },
        {
            type: 'Thiết kế nội thất nhà phố – nhà ống',
            price: '160.000 - 220.000 VNĐ/m²',
            note: 'Tùy diện tích và công năng'
        },
        {
            type: 'Thiết kế nội thất biệt thự/villa hiện đại',
            price: '200.000 - 280.000 VNĐ/m²',
            note: 'Yêu cầu cao cấp, nhiều không gian mở'
        }
    ];

    const advantages = [
        'Tối ưu diện tích nhỏ – phù hợp căn hộ 40–70m² ở Hà Nội',
        'Không gian thoáng mát, hợp khí hậu ven biển Nha Trang',
        'Chi phí hợp lý hơn tân cổ điển, Indochine',
        'Dễ thay đổi, nâng cấp nội thất khi cần'
    ];

    const disadvantages = [
        {
            issue: 'Nếu chọn nội thất kém chất lượng',
            result: 'Dễ xuống cấp, bong tróc'
        },
        {
            issue: 'Không khéo léo',
            result: 'Không gian đơn điệu, lạnh lẽo'
        },
        {
            issue: 'Khách hàng Hà Nội hay gặp vấn đề',
            result: 'Bí sáng, ngột ngạt nếu không có cửa kính hoặc giếng trời'
        }
    ];

    const notes = [
        {
            icon: 'fas fa-check-circle',
            title: 'Chọn nội thất gỗ công nghiệp chất lượng cao để tránh cong vênh',
            color: '#10b981'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Bố trí cửa kính lớn, giếng trời cho nhà phố Hà Nội',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Ở Nha Trang, cần chống ẩm mặn cho gỗ & kim loại',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Tránh mua quá nhiều đồ → mất tính tối giản',
            color: '#8b5cf6'
        }
    ];

    const faqData = [
        {
            question: 'Phong cách nội thất Hiện đại phù hợp với loại nhà nào?',
            answer: 'Phong cách Hiện đại phù hợp với hầu hết các loại nhà: chung cư, nhà phố, biệt thự. Đặc biệt phù hợp với căn hộ diện tích nhỏ tại Hà Nội và villa ven biển tại Nha Trang.'
        },
        {
            question: 'Chi phí thiết kế nội thất phong cách Hiện đại là bao nhiêu?',
            answer: 'Chi phí dao động từ 150.000 - 280.000 VNĐ/m² tùy loại hình nhà và yêu cầu thiết kế. Chung cư khoảng 150-200K/m², nhà phố 160-220K/m², biệt thự 200-280K/m².'
        },
        {
            question: 'Làm thế nào để không gian Hiện đại không bị lạnh lẽo?',
            answer: 'Kết hợp gỗ ấm màu, đèn vàng, thêm tranh canvas, cây xanh và decor để tạo sự sống động. Tránh lạm dụng gam màu trắng - xám quá nhiều.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thiết kế 3D: 5-7 ngày. Thi công hoàn thiện: 30-45 ngày cho chung cư, 45-60 ngày cho nhà phố, 60-90 ngày cho biệt thự, tùy diện tích và mức độ phức tạp.'
        },
        {
            question: 'Vật liệu nào phù hợp cho khí hậu Nha Trang?',
            answer: 'Nên sử dụng gỗ công nghiệp chống ẩm phủ melamine/laminate, inox 304, nhôm kính, đá nhân tạo. Tránh vật liệu dễ han gỉ và bong tróc do ẩm mặn.'
        }
    ];

    return (
        <div className="main-content">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <i className="fas fa-home"></i>
                            Thiết Kế Nội Thất Phong Cách Hiện Đại 2025
                        </h1>
                        <p className="hero-subtitle">
                            Tại Hà Nội & Nha Trang
                        </p>
                        <p className="hero-description">
                            Dịch vụ thiết kế nội thất phong cách Hiện đại 2025 tại Hà Nội & Nha Trang. 
                            Tối giản – tiện nghi – sang trọng. Báo giá chi tiết, thiết kế 3D chuyên nghiệp, chuẩn phong thủy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle icon-primary"></i>
                        Giới Thiệu Về Phong Cách Nội Thất Hiện Đại
                    </h2>
                    <div className="content-box">
                        <p>
                            Phong cách nội thất <strong>Hiện đại (Modern Style)</strong> là lựa chọn số 1 hiện nay 
                            cho nhà phố, chung cư, biệt thự. Với đặc trưng tối giản, tinh tế, tiện nghi, 
                            phong cách này mang lại không gian sống trẻ trung, phù hợp nhịp sống đô thị.
                        </p>
                    </div>

                    <div className="grid-2">
                        {applications.map((app, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: app.color }}>
                                    <i className={app.icon}></i>
                                    Tại {app.city}
                                </h3>
                                <p><strong>Phổ biến:</strong></p>
                                <ul>
                                    {app.types.map((type, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {type}
                                        </li>
                                    ))}
                                </ul>
                                <p><strong>Ưu tiên:</strong></p>
                                <ul>
                                    {app.priority.map((item, i) => (
                                        <li key={i}>
                                            <i className="fas fa-star"></i>
                                            {item}
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
                        <i className="fas fa-list-check icon-quality"></i>
                        Đặc Trưng Của Nội Thất Phong Cách Hiện Đại
                    </h2>
                    <div className="grid-3">
                        {characteristics.map((char, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: char.color }}>
                                    <i className={char.icon}></i>
                                    {char.title}
                                </h3>
                                <p>{char.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-balance-scale icon-primary"></i>
                        Ưu – Nhược Điểm & Nỗi Đau Khách Hàng
                    </h2>

                    <div className="grid-2">
                        <div className="info-card">
                            <h3 style={{ color: '#10b981' }}>
                                <i className="fas fa-check-circle"></i>
                                Ưu Điểm
                            </h3>
                            <ul>
                                {advantages.map((adv, index) => (
                                    <li key={index}>
                                        <i className="fas fa-plus"></i>
                                        {adv}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="info-card">
                            <h3 style={{ color: '#ef4444' }}>
                                <i className="fas fa-exclamation-triangle"></i>
                                Nhược Điểm (Nỗi Đau Thường Gặp)
                            </h3>
                            <ul>
                                {disadvantages.map((dis, index) => (
                                    <li key={index}>
                                        <i className="fas fa-minus"></i>
                                        <strong>{dis.issue}:</strong> {dis.result}
                                    </li>
                                ))}
                            </ul>
                            <div className="content-box" style={{ marginTop: '1rem', background: '#fef3c7' }}>
                                <p>
                                    <i className="fas fa-lightbulb" style={{ color: '#f59e0b' }}></i>
                                    <strong> Giải pháp:</strong> Cần thiết kế 3D chi tiết & KTS giàu kinh nghiệm 
                                    để cân bằng công năng – thẩm mỹ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Lưu Ý Khi Lựa Chọn Phong Cách Hiện Đại
                    </h2>
                    <div className="grid-2">
                        {notes.map((note, index) => (
                            <div key={index} className="info-card">
                                <p>
                                    <i className={note.icon} style={{ color: note.color }}></i>
                                    {' '}{note.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-gift icon-gift"></i>
                        Ưu Đãi & Cam Kết Dịch Vụ
                    </h2>
                    <div className="grid-4">
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-comments" style={{ color: '#3b82f6' }}></i>
                                Tư Vấn Miễn Phí
                            </h3>
                            <p>Miễn phí tư vấn ý tưởng ban đầu</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-cube" style={{ color: '#10b981' }}></i>
                                Thiết Kế 3D
                            </h3>
                            <p>Thiết kế 3D chân thực, dễ hình dung</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-user-tie" style={{ color: '#f59e0b' }}></i>
                                KTS Chuyên Nghiệp
                            </h3>
                            <p>KTS giàu kinh nghiệm nhiều dự án</p>
                        </div>
                        <div className="info-card">
                            <h3>
                                <i className="fas fa-hard-hat" style={{ color: '#8b5cf6' }}></i>
                                Giám Sát Thi Công
                            </h3>
                            <p>Hỗ trợ giám sát, đảm bảo đúng thiết kế</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
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

export default GioiThieuPhongCachHienDaiPage;
