import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const Top10MauPhongCachHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const topDesigns = [
        {
            number: 1,
            title: 'Phòng Khách Chung Cư Hiện Đại Tối Giản',
            features: [
                'Gam màu trắng – ghi, sofa chữ L, kệ TV treo tường',
                'Giải pháp cho căn hộ nhỏ Hà Nội',
                'Tối ưu diện tích và ánh sáng'
            ],
            icon: 'fas fa-couch',
            color: '#3b82f6'
        },
        {
            number: 2,
            title: 'Phòng Khách Biệt Thự Ven Biển Nha Trang',
            features: [
                'Cửa kính toàn cảnh, sofa da màu be, bàn trà gỗ',
                'Không gian mở, đón gió biển',
                'Vật liệu chống ẩm mặn'
            ],
            icon: 'fas fa-umbrella-beach',
            color: '#06b6d4'
        },
        {
            number: 3,
            title: 'Phòng Bếp + Bàn Ăn Liên Thông',
            features: [
                'Bếp chữ L, đảo bếp kết hợp bàn ăn',
                'Nội thất gỗ công nghiệp phủ melamine',
                'Tiết kiệm không gian, tiện nghi'
            ],
            icon: 'fas fa-utensils',
            color: '#10b981'
        },
        {
            number: 4,
            title: 'Phòng Ngủ Master Sang Trọng',
            features: [
                'Giường bọc nệm, tab đầu giường tối giản',
                'Đèn hắt trần, tranh nghệ thuật trừu tượng',
                'Không gian riêng tư, thư giãn'
            ],
            icon: 'fas fa-bed',
            color: '#8b5cf6'
        },
        {
            number: 5,
            title: 'Phòng Ngủ Con Trẻ Năng Động',
            features: [
                'Giường tầng thông minh, tủ quần áo âm tường',
                'Màu sắc tươi sáng, tiện nghi',
                'Khu vực học tập và vui chơi'
            ],
            icon: 'fas fa-child',
            color: '#ec4899'
        },
        {
            number: 6,
            title: 'Phòng Tắm Hiện Đại',
            features: [
                'Kính cường lực, lavabo treo tường, đèn LED',
                'Vật liệu chống ẩm mặn (phù hợp Nha Trang)',
                'Thiết kế sang trọng, dễ vệ sinh'
            ],
            icon: 'fas fa-bath',
            color: '#3b82f6'
        },
        {
            number: 7,
            title: 'Nội Thất Văn Phòng Tại Nhà',
            features: [
                'Bàn làm việc gỗ công nghiệp, ghế ergonomic',
                'Tận dụng ánh sáng tự nhiên',
                'Khu vực làm việc chuyên nghiệp'
            ],
            icon: 'fas fa-laptop-house',
            color: '#f59e0b'
        },
        {
            number: 8,
            title: 'Nội Thất Căn Hộ Studio',
            features: [
                'Sofa giường, bàn ăn gấp gọn, tủ đa năng',
                'Giải pháp cho chung cư nhỏ Hà Nội',
                'Tối ưu hóa từng m² không gian'
            ],
            icon: 'fas fa-home',
            color: '#10b981'
        },
        {
            number: 9,
            title: 'Nội Thất Villa Hiện Đại Cao Cấp',
            features: [
                'Đèn chùm nghệ thuật, sofa da cao cấp, ốp đá tự nhiên',
                'Không gian mở liền kề hồ bơi',
                'Sang trọng, đẳng cấp'
            ],
            icon: 'fas fa-building',
            color: '#8b5cf6'
        },
        {
            number: 10,
            title: 'Phòng Giải Trí Gia Đình',
            features: [
                'Ghế sofa rạp phim, hệ thống âm thanh 5.1',
                'Trang trí tối giản, ánh sáng hắt trần',
                'Không gian giải trí hoàn hảo'
            ],
            icon: 'fas fa-tv',
            color: '#ef4444'
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
            note: 'Tối ưu diện tích nhỏ, nhiều tầng'
        },
        {
            type: 'Thiết kế nội thất biệt thự/villa hiện đại',
            price: '200.000 - 280.000 VNĐ/m²',
            note: 'Không gian rộng, nhiều hạng mục cao cấp'
        }
    ];

    const designNotes = [
        {
            icon: 'fas fa-water',
            title: 'Ưu tiên vật liệu chống ẩm mặn tại Nha Trang',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-sun',
            title: 'Ở Hà Nội, chú trọng giếng trời & cửa kính lớn để lấy sáng',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-sync',
            title: 'Đảm bảo đồng bộ kiến trúc – nội thất – phong thủy',
            color: '#10b981'
        },
        {
            icon: 'fas fa-clock',
            title: 'Không nên chạy theo xu hướng quá nhiều → dễ lỗi mốt',
            color: '#8b5cf6'
        }
    ];

    const benefits = [
        {
            icon: 'fas fa-lightbulb',
            title: 'Ý Tưởng Phong Phú',
            description: '10 mẫu đa dạng cho nhiều loại hình nhà',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-palette',
            title: 'Thẩm Mỹ Hiện Đại',
            description: 'Thiết kế tối giản, tinh tế, sang trọng',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-coins',
            title: 'Chi Phí Hợp Lý',
            description: 'Phù hợp nhiều ngân sách khác nhau',
            color: '#10b981'
        },
        {
            icon: 'fas fa-tools',
            title: 'Dễ Thi Công',
            description: 'Vật liệu phổ biến, dễ tìm, dễ làm',
            color: '#3b82f6'
        }
    ];

    const faqData = [
        {
            question: 'Mẫu nội thất nào phù hợp với căn hộ nhỏ?',
            answer: 'Mẫu 1 (Phòng khách chung cư tối giản) và Mẫu 8 (Căn hộ studio) phù hợp nhất với căn hộ diện tích nhỏ 40-70m². Tận dụng nội thất đa năng và màu sáng.'
        },
        {
            question: 'Chi phí để thực hiện các mẫu này là bao nhiêu?',
            answer: 'Chi phí dao động 150-280K VNĐ/m² cho thiết kế, thi công khoảng 3-8 triệu/m² tùy vật liệu. Ví dụ: chung cư 60m² tổng khoảng 200-500 triệu.'
        },
        {
            question: 'Mẫu nào phù hợp cho biệt thự ven biển?',
            answer: 'Mẫu 2 (Phòng khách biệt thự ven biển) và Mẫu 9 (Villa cao cấp) được thiết kế đặc biệt cho khí hậu ven biển với vật liệu chống ẩm mặn.'
        },
        {
            question: 'Có thể kết hợp nhiều mẫu trong một ngôi nhà không?',
            answer: 'Hoàn toàn có thể! Ví dụ: phòng khách dùng mẫu 1, bếp mẫu 3, phòng ngủ mẫu 4. Quan trọng là đảm bảo đồng bộ về màu sắc và phong cách.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thiết kế 3D: 5-7 ngày. Thi công: 30-45 ngày (chung cư), 45-60 ngày (nhà phố), 60-90 ngày (biệt thự) tùy diện tích và độ phức tạp.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <i className="fas fa-star"></i>
                            Top 10 Mẫu Thiết Kế Nội Thất Phong Cách Hiện Đại Đẹp Nhất 2025
                        </h1>
                        <p className="hero-subtitle">
                            Cho Căn Hộ, Nhà Phố, Biệt Thự
                        </p>
                        <p className="hero-description">
                            Top 10 mẫu thiết kế nội thất phong cách Hiện đại đẹp nhất 2025 cho căn hộ, nhà phố, biệt thự 
                            tại Hà Nội & Nha Trang. Tối giản – tiện nghi – sang trọng.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle icon-primary"></i>
                        Giới Thiệu
                    </h2>
                    <div className="content-box">
                        <p>
                            Nội thất phong cách <strong>Hiện đại (Modern Style)</strong> ngày càng phổ biến nhờ sự tối giản, 
                            tiện nghi và tinh tế. Trong năm 2025, nhiều xu hướng mới ra đời, kết hợp giữa công năng thông minh – 
                            thẩm mỹ sang trọng – vật liệu bền vững.
                        </p>
                        <p>
                            <i className="fas fa-arrow-right" style={{ color: '#3b82f6' }}></i>
                            {' '}<strong>Dưới đây là 10 mẫu thiết kế nội thất hiện đại đẹp nhất 2025, phù hợp cho chung cư, 
                            nhà phố, biệt thự tại Hà Nội & Nha Trang.</strong>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list-ol icon-quality"></i>
                        Top 10 Mẫu Nội Thất Phong Cách Hiện Đại 2025
                    </h2>

                    <div className="grid-2">
                        {topDesigns.map((design, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: design.color }}>
                                    <i className={design.icon}></i>
                                    {' '}{design.number}. {design.title}
                                </h3>
                                <ul>
                                    {design.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-gift icon-gift"></i>
                        Lợi Ích Khi Chọn Các Mẫu Này
                    </h2>
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

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb icon-tips"></i>
                        Lưu Ý Khi Lựa Chọn Mẫu Thiết Kế Nội Thất Hiện Đại
                    </h2>
                    <div className="grid-2">
                        {designNotes.map((note, index) => (
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
                    <div className="content-box" style={{ textAlign: 'center', background: '#eff6ff' }}>
                        <h3 style={{ color: '#3b82f6' }}>
                            <i className="fas fa-quote-left"></i>
                            Kết Luận
                        </h3>
                        <p>
                            10 mẫu thiết kế nội thất phong cách Hiện đại trên sẽ giúp bạn có thêm ý tưởng để biến không gian sống 
                            thành tổ ấm tiện nghi – sang trọng – phù hợp ngân sách.
                        </p>
                        <p>
                            <strong>Nếu bạn cần dịch vụ thiết kế nội thất phong cách Hiện đại tại Hà Nội & Nha Trang, 
                            hãy liên hệ ngay để được tư vấn miễn phí & nhận báo giá chi tiết.</strong>
                        </p>
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

export default Top10MauPhongCachHienDaiPage;
