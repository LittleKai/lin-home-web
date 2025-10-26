// src/pages/bao-gia/thiet-ke-thi-cong-noi-that/phong-cach-indochine.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const PhongCachIndochine = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const pricingTable = [
        {
            category: 'Chung cư nhỏ (Hà Nội)',
            price: '180.000 - 230.000',
            note: 'Tối ưu diện tích, thiết kế tinh giản',
            icon: 'fa-building'
        },
        {
            category: 'Nhà phố – nhà ống',
            price: '200.000 - 260.000',
            note: 'Giữ nét Indochine, không gian thoáng',
            icon: 'fa-home'
        },
        {
            category: 'Biệt thự/villa (Hà Nội & Nha Trang)',
            price: '250.000 - 320.000',
            note: 'Vật liệu cao cấp, nhiều chi tiết thủ công',
            icon: 'fa-landmark'
        },
        {
            category: 'Homestay/resort (Nha Trang)',
            price: '260.000 - 350.000',
            note: 'Thiết kế độc đáo, gần gũi thiên nhiên',
            icon: 'fa-umbrella-beach'
        }
    ];

    const servicePackages = [
        {
            name: 'Gói Cơ bản',
            icon: 'fa-box',
            features: [
                'Bản vẽ 2D bố trí mặt bằng',
                'Dự toán sơ bộ chi phí',
                'Tư vấn lựa chọn vật liệu cơ bản'
            ]
        },
        {
            name: 'Gói Nâng cao',
            icon: 'fa-layer-group',
            features: [
                'Phối cảnh 3D chi tiết',
                'Hồ sơ kỹ thuật đầy đủ',
                'Dự toán chi phí vật liệu + thi công',
                'Tư vấn trong quá trình thi công'
            ]
        },
        {
            name: 'Gói Trọn gói',
            icon: 'fa-star',
            features: [
                'Thiết kế + thi công + giám sát',
                'Cam kết đúng tiến độ, không phát sinh',
                'Bảo hành & bảo trì công trình',
                'Hỗ trợ sau khi bàn giao'
            ]
        }
    ];

    const characteristics = [
        {
            icon: 'fa-archway',
            title: 'Kiến trúc Pháp cổ điển',
            description: 'Vòm cửa, cột trụ, cửa sổ lớn đặc trưng'
        },
        {
            icon: 'fa-tree',
            title: 'Nội thất Á Đông',
            description: 'Gỗ tự nhiên, tre, mây, đan lát truyền thống'
        },
        {
            icon: 'fa-palette',
            title: 'Màu sắc ấm áp',
            description: 'Nâu gỗ, vàng đất, xanh lá nhạt hài hòa'
        },
        {
            icon: 'fa-leaf',
            title: 'Gần gũi thiên nhiên',
            description: 'Không gian xanh, cây cối, ánh sáng tự nhiên'
        }
    ];

    const materials = [
        {
            name: 'Gỗ tự nhiên',
            icon: 'fa-tree',
            description: 'Gỗ lim, gỗ gụ, gỗ tếch cho đồ nội thất'
        },
        {
            name: 'Tre, mây',
            icon: 'fa-spa',
            description: 'Đan lát, trang trí theo phong cách Á Đông'
        },
        {
            name: 'Gạch bông',
            icon: 'fa-th',
            description: 'Họa tiết truyền thống, điểm nhấn sàn và tường'
        },
        {
            name: 'Đá tự nhiên',
            icon: 'fa-gem',
            description: 'Đá xanh, đá vàng cho cảm giác cổ kính'
        }
    ];

    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Chi phí minh bạch',
            description: 'Báo giá rõ ràng theo từng hạng mục'
        },
        {
            icon: 'fa-cube',
            title: 'Thiết kế 3D sát thực tế',
            description: 'Hình dung rõ ràng trước khi thi công'
        },
        {
            icon: 'fa-user-tie',
            title: 'KTS am hiểu phong cách',
            description: 'Chuyên sâu về Indochine và Đông Dương'
        },
        {
            icon: 'fa-tools',
            title: 'Hỗ trợ thi công trọn gói',
            description: 'Bảo hành dài hạn, bảo trì định kỳ'
        }
    ];

    const suitableSpaces = [
        {
            type: 'Biệt thự',
            icon: 'fa-home',
            description: 'Không gian rộng, kết hợp vườn và nội thất hài hòa'
        },
        {
            type: 'Villa',
            icon: 'fa-landmark',
            description: 'Sang trọng, nhiều chi tiết nghệ thuật tinh xảo'
        },
        {
            type: 'Homestay',
            icon: 'fa-bed',
            description: 'Ấm cúng, gần gũi, thu hút khách du lịch'
        },
        {
            type: 'Resort',
            icon: 'fa-umbrella-beach',
            description: 'Không gian nghỉ dưỡng đậm chất Đông Dương'
        }
    ];

    const faqs = [
        {
            question: 'Phong cách Indochine có phù hợp với chung cư không?',
            answer: 'Hoàn toàn có thể. Với diện tích nhỏ, chúng tôi sẽ thiết kế tinh giản, chọn lọc các yếu tố đặc trưng (gỗ tự nhiên, gạch bông, màu sắc ấm) mà không làm không gian bị chật chội. KTS sẽ tư vấn cách tối ưu phù hợp.'
        },
        {
            question: 'Vật liệu Indochine có bền không, đặc biệt tại Nha Trang?',
            answer: 'Với khí hậu ven biển, chúng tôi ưu tiên vật liệu chống ẩm mặn: gỗ tự nhiên xử lý chống mối mọt, tre mây qua xử lý đặc biệt, sơn chống ăn mòn. Tất cả đều được bảo hành và bảo trì định kỳ để đảm bảo độ bền lâu dài.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thời gian thiết kế: 10-20 ngày tùy diện tích. Thời gian thi công: 2-4 tháng tùy quy mô công trình và độ phức tạp của chi tiết thủ công. Chúng tôi cam kết đúng tiến độ đã thỏa thuận.'
        },
        {
            question: 'Chi phí Indochine có cao hơn phong cách khác?',
            answer: 'Do sử dụng vật liệu tự nhiên và nhiều chi tiết thủ công, chi phí có thể cao hơn một chút. Tuy nhiên, với báo giá minh bạch và nhiều gói dịch vụ, khách hàng có thể lựa chọn phương án phù hợp với ngân sách mà vẫn giữ được nét đẹp đặc trưng.'
        },
        {
            question: 'Phong cách Indochine có phù hợp với homestay/resort không?',
            answer: 'Rất phù hợp! Indochine mang đến cảm giác hoài cổ, sang trọng mà vẫn gần gũi, thu hút khách du lịch. Đặc biệt tại Nha Trang, phong cách này rất được ưa chuộng cho các dự án nghỉ dưỡng.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Báo Giá Thiết Kế Nội Thất Phong Cách Indochine 2025
                    </h1>
                    <p className="section-subtitle">
                        Báo giá thiết kế nội thất phong cách Indochine 2025 chi tiết, minh bạch theo m².
                        Phong cách Đông Dương sang trọng – hoài cổ. Tư vấn miễn phí tại Hà Nội & Nha Trang.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2>
                        <i className="fas fa-clipboard-list"></i>
                        Giới Thiệu
                    </h2>
                    <p>
                        Phong cách <strong>Indochine (Đông Dương)</strong> là sự kết hợp tinh tế giữa
                        kiến trúc Pháp cổ điển và nội thất Á Đông truyền thống. Năm 2025, đây là phong cách
                        được nhiều gia chủ lựa chọn tại Hà Nội và Nha Trang bởi sự
                        <strong> sang trọng – hoài cổ – bền vững theo thời gian</strong>.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-table icon-pricing"></i>
                        Bảng Báo Giá Thiết Kế Nội Thất Indochine 2025
                    </h2>
                    <div className="price-table">
                        {pricingTable.map((item, index) => (
                            <div key={index} className="price-row">
                                <div className="col-name">
                                    <i className={`fas ${item.icon}`}></i>
                                    {item.category}
                                </div>
                                <div className="col-desc">{item.note}</div>
                                <div className="col-price">
                                    <span className="price-value">{item.price}</span>
                                    <span className="price-unit">VNĐ/m²</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="note-box">
                        <h4><i className="fas fa-info-circle"></i> Lưu ý:</h4>
                        <ul>
                            <li>Giá thay đổi tùy diện tích, vật liệu (gỗ tự nhiên, tre, mây, gạch bông)</li>
                            <li>Công trình càng nhiều chi tiết thủ công, chi phí càng cao</li>
                            <li>Đơn giá trên bao gồm thiết kế 2D + 3D, chưa bao gồm thi công</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-star"></i>
                        Đặc Điểm Nổi Bật Phong Cách Indochine
                    </h2>
                    <div className="grid-4">
                        {characteristics.map((char, index) => (
                            <div key={index} className="feature-item">
                                <i className={`fas ${char.icon}`}></i>
                                <span>{char.title}</span>
                                <p>{char.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-layer-group icon-materials"></i>
                        Vật Liệu Phổ Biến Trong Phong Cách Indochine
                    </h2>
                    <div className="grid-4">
                        {materials.map((material, index) => (
                            <div key={index} className="feature-item">
                                <i className={`fas ${material.icon}`}></i>
                                <span>{material.name}</span>
                                <p>{material.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2>
                        <i className="fas fa-box-open"></i>
                        Gói Dịch Vụ Thiết Kế Indochine
                    </h2>
                    <div className="grid-3">
                        {servicePackages.map((pkg, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className={`fas ${pkg.icon}`}></i>
                                        {pkg.name}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-list">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-home"></i>
                        Không Gian Phù Hợp
                    </h2>
                    <div className="grid-4">
                        {suitableSpaces.map((space, index) => (
                            <div key={index} className="feature-item">
                                <i className={`fas ${space.icon}`}></i>
                                <span>{space.type}</span>
                                <p>{space.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-shield-alt"></i>
                        Cam Kết Dịch Vụ
                    </h2>
                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="feature-item">
                                <i className={`fas ${benefit.icon}`}></i>
                                <span>{benefit.title}</span>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-question-circle icon-faq"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <h4>{faq.question}</h4>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
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

export default PhongCachIndochine;