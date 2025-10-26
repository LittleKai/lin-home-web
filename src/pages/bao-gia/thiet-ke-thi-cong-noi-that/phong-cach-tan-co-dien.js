// src/pages/bao-gia/thiet-ke-thi-cong-noi-that/phong-cach-tan-co-dien.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const PhongCachTanCoDien = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const pricingTable = [
        {
            category: 'Thiết kế nội thất căn hộ cao cấp Tân cổ điển',
            price: '180.000 - 250.000',
            note: 'Bao gồm phối cảnh 3D chi tiết',
            icon: 'fa-building'
        },
        {
            category: 'Thiết kế nội thất nhà phố – nhà ống Tân cổ điển',
            price: '200.000 - 260.000',
            note: 'Phào chỉ tinh giản, phù hợp diện tích nhỏ',
            icon: 'fa-home'
        },
        {
            category: 'Thiết kế nội thất biệt thự/villa Tân cổ điển',
            price: '250.000 - 320.000',
            note: 'Cao cấp, nhiều chi tiết nghệ thuật',
            icon: 'fa-crown'
        },
        {
            category: 'Gói thiết kế & thi công trọn gói',
            price: 'Báo giá trực tiếp',
            note: 'Tùy diện tích & vật liệu yêu cầu',
            icon: 'fa-box'
        }
    ];

    const servicePackages = [
        {
            name: 'Gói Cơ bản',
            icon: 'fa-box',
            price: 'Từ 180.000 VNĐ/m²',
            suitable: 'Khách hàng muốn tham khảo trước khi thi công',
            features: [
                'Tư vấn ý tưởng + mặt bằng 2D',
                'Dự toán chi phí sơ bộ',
                'Tư vấn lựa chọn vật liệu cơ bản'
            ]
        },
        {
            name: 'Gói Nâng cao',
            icon: 'fa-layer-group',
            price: 'Từ 220.000 VNĐ/m²',
            suitable: 'Nhà phố, chung cư hạng sang',
            features: [
                'Phối cảnh 3D chi tiết',
                'Hồ sơ kỹ thuật thi công',
                'Dự toán chi phí vật liệu + thi công',
                'Tư vấn trong quá trình thi công'
            ]
        },
        {
            name: 'Gói Cao cấp (Trọn gói)',
            icon: 'fa-star',
            price: 'Từ 280.000 VNĐ/m²',
            suitable: 'Biệt thự, villa, công trình cao cấp',
            features: [
                'Thiết kế kiến trúc + nội thất đồng bộ',
                'Giám sát thi công để đảm bảo đúng bản vẽ',
                'Cam kết đúng tiến độ, không phát sinh',
                'Bảo hành & hỗ trợ sau bàn giao'
            ]
        }
    ];

    const materials = [
        {
            name: 'Gỗ tự nhiên',
            icon: 'fa-tree',
            description: 'Gỗ sồi, gỗ óc chó cao cấp cho đồ nội thất'
        },
        {
            name: 'Đá marble',
            icon: 'fa-gem',
            description: 'Đá tự nhiên cho mặt bàn, sàn, tường điểm nhấn'
        },
        {
            name: 'Vải nhung/da',
            icon: 'fa-couch',
            description: 'Bọc ghế sofa, ghế ăn sang trọng'
        },
        {
            name: 'Phào chỉ',
            icon: 'fa-columns',
            description: 'Chi tiết trang trí theo phong cách cổ điển'
        }
    ];

    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Báo giá minh bạch',
            description: 'Chi phí rõ ràng, không phát sinh'
        },
        {
            icon: 'fa-cube',
            title: 'Thiết kế 3D trực quan',
            description: 'Dễ hình dung trước khi thi công'
        },
        {
            icon: 'fa-user-tie',
            title: 'KTS chuyên sâu',
            description: 'Đội ngũ KTS chuyên Tân cổ điển'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Bảo hành & hỗ trợ',
            description: 'Hỗ trợ sau khi bàn giao'
        }
    ];

    const locationNotes = [
        {
            location: 'Hà Nội',
            icon: 'fa-city',
            notes: [
                'Tối ưu ánh sáng để tránh cảm giác nặng nề',
                'Phào chỉ tinh giản phù hợp diện tích nhỏ',
                'Sử dụng gương để tăng độ sáng cho không gian'
            ]
        },
        {
            location: 'Nha Trang',
            icon: 'fa-umbrella-beach',
            notes: [
                'Ưu tiên vật liệu chống ẩm mặn (inox, đá tự nhiên)',
                'Chọn vải bọc ghế chống ẩm tốt',
                'Sơn và hoàn thiện phải chống ăn mòn'
            ]
        }
    ];

    const faqs = [
        {
            question: 'Phong cách Tân cổ điển có phù hợp với căn hộ nhỏ không?',
            answer: 'Hoàn toàn có thể. Với thiết kế thông minh, sử dụng phào chỉ tinh giản, màu sáng và gương, phong cách Tân cổ điển có thể áp dụng cho căn hộ nhỏ mà không tạo cảm giác chật chội. KTS sẽ tư vấn chi tiết để tối ưu không gian.'
        },
        {
            question: 'Chi phí thiết kế Tân cổ điển có đắt hơn phong cách khác?',
            answer: 'Phong cách Tân cổ điển thường có chi phí cao hơn một chút do sử dụng vật liệu cao cấp (gỗ tự nhiên, đá marble, phào chỉ). Tuy nhiên, với báo giá minh bạch và nhiều gói dịch vụ, khách hàng có thể lựa chọn phương án phù hợp với ngân sách.'
        },
        {
            question: 'Thời gian thiết kế mất bao lâu?',
            answer: 'Tùy diện tích và độ phức tạp: Căn hộ (60-100m²): 10-15 ngày. Nhà phố (100-200m²): 15-20 ngày. Biệt thự (200m² trở lên): 20-30 ngày. Thời gian có thể linh hoạt theo yêu cầu khách hàng.'
        },
        {
            question: 'Có được xem mẫu thiết kế trước không?',
            answer: 'Có. Chúng tôi cung cấp bộ sưu tập các mẫu thiết kế Tân cổ điển đã thực hiện. Khách hàng có thể tham khảo và lựa chọn phong cách phù hợp với sở thích cá nhân trước khi bắt đầu thiết kế.'
        },
        {
            question: 'Có thể kết hợp Tân cổ điển với phong cách khác không?',
            answer: 'Có thể. Nhiều khách hàng chọn kết hợp Tân cổ điển với phong cách Hiện đại (gọi là Tân cổ điển đương đại) để có không gian vừa sang trọng vừa tiện nghi. KTS sẽ tư vấn cách kết hợp hài hòa.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Báo Giá Thiết Kế Nội Thất Phong Cách Tân Cổ Điển 2025
                    </h1>
                    <p className="section-subtitle">
                        Bảng báo giá thiết kế nội thất phong cách Tân cổ điển 2025 tại Hà Nội & Nha Trang.
                        Minh bạch chi phí theo m², nhiều gói dịch vụ từ cơ bản đến cao cấp.
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
                        Phong cách <strong>Tân cổ điển (Neo-classical)</strong> là lựa chọn hàng đầu của nhiều
                        gia chủ mong muốn một không gian <strong>sang trọng – đẳng cấp – tinh tế</strong>.
                    </p>
                    <p>
                        Một trong những câu hỏi lớn nhất khi khách hàng tìm đến dịch vụ thiết kế chính là:
                    </p>
                    <div className="note-box">
                        <i className="fas fa-question-circle"></i>
                        <p>"Thiết kế nội thất Tân cổ điển 2025 có giá bao nhiêu?"</p>
                    </div>
                    <p>
                        Để khách hàng dễ dàng tham khảo và so sánh, chúng tôi cung cấp bảng báo giá
                        chi tiết & minh bạch dưới đây.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-table icon-pricing"></i>
                        Bảng Báo Giá Thiết Kế Nội Thất Tân Cổ Điển 2025
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
                            <li>Giá chỉ mang tính tham khảo</li>
                            <li>Có thể thay đổi tùy diện tích, vật liệu (gỗ tự nhiên, đá marble, nhung/da…)</li>
                            <li>Tại Nha Trang: ưu tiên vật liệu chống ẩm mặn</li>
                            <li>Tại Hà Nội: tối ưu ánh sáng, tránh cảm giác chật hẹp</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-box-open"></i>
                        Các Gói Dịch Vụ Thiết Kế Tân Cổ Điển
                    </h2>
                    <div className="grid-3">
                        {servicePackages.map((pkg, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className={`fas ${pkg.icon}`}></i>
                                        {pkg.name}
                                    </h3>
                                    <p className="price-range">{pkg.price}</p>
                                    <p>{pkg.suitable}</p>
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
                        <i className="fas fa-layer-group icon-materials"></i>
                        Vật Liệu Phổ Biến Trong Phong Cách Tân Cổ Điển
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
                        <i className="fas fa-map-marker-alt"></i>
                        Lưu Ý Theo Địa Phương
                    </h2>
                    <div className="grid-2">
                        {locationNotes.map((loc, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className={`fas ${loc.icon}`}></i>
                                        {loc.location}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-list">
                                        {loc.notes.map((note, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-caret-right"></i>
                                                {note}
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
                        <i className="fas fa-star"></i>
                        Vì Sao Chọn Dịch Vụ Của Chúng Tôi?
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

            <section className="section section-gradient">
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

export default PhongCachTanCoDien;