// src/pages/bao-gia/thiet-ke-thi-cong-noi-that/phong-cach-hien-dai.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const PhongCachHienDai = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const pricingTable = [
        {
            category: 'Thiết kế nội thất căn hộ chung cư hiện đại',
            price: '150.000 - 200.000',
            note: 'Phối cảnh 3D chi tiết, tối ưu diện tích',
            icon: 'fa-building'
        },
        {
            category: 'Thiết kế nội thất nhà phố – nhà ống hiện đại',
            price: '160.000 - 220.000',
            note: 'Nhiều tầng, chú trọng ánh sáng & công năng',
            icon: 'fa-home'
        },
        {
            category: 'Thiết kế nội thất biệt thự/villa hiện đại',
            price: '200.000 - 280.000',
            note: 'Không gian lớn, nội thất cao cấp',
            icon: 'fa-hotel'
        },
        {
            category: 'Gói thiết kế & thi công trọn gói',
            price: 'Báo giá trực tiếp',
            note: 'Tùy diện tích & yêu cầu vật liệu',
            icon: 'fa-box'
        }
    ];

    const servicePackages = [
        {
            name: 'Gói Cơ bản',
            icon: 'fa-box',
            price: 'Từ 150.000 VNĐ/m²',
            suitable: 'Căn hộ nhỏ, tiết kiệm chi phí',
            features: [
                'Tư vấn ý tưởng + bản vẽ 2D mặt bằng',
                'Báo giá dự toán sơ bộ',
                'Tư vấn lựa chọn vật liệu cơ bản'
            ]
        },
        {
            name: 'Gói Nâng cao',
            icon: 'fa-layer-group',
            price: 'Từ 180.000 VNĐ/m²',
            suitable: 'Nhà phố, chung cư diện tích trung bình',
            features: [
                'Thiết kế phối cảnh 3D chi tiết',
                'Hồ sơ kỹ thuật thi công',
                'Dự toán chi phí vật liệu + thi công',
                'Tư vấn trong quá trình thi công'
            ]
        },
        {
            name: 'Gói Cao cấp (Trọn gói)',
            icon: 'fa-star',
            price: 'Từ 220.000 VNĐ/m²',
            suitable: 'Biệt thự, villa hiện đại cao cấp',
            features: [
                'Thiết kế kiến trúc + nội thất đồng bộ',
                'Hồ sơ 3D chi tiết, giám sát thi công',
                'Cam kết đúng tiến độ, không phát sinh',
                'Bảo hành & hỗ trợ sau bàn giao'
            ]
        }
    ];

    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Chi phí rõ ràng',
            description: 'Báo giá minh bạch, không phát sinh'
        },
        {
            icon: 'fa-balance-scale',
            title: 'So sánh dễ dàng',
            description: 'Dễ so sánh với các phong cách khác'
        },
        {
            icon: 'fa-lightbulb',
            title: 'Tư vấn chuyên nghiệp',
            description: 'Giải pháp phù hợp ngân sách từng gia đình'
        },
        {
            icon: 'fa-clipboard-check',
            title: 'Khảo sát miễn phí',
            description: 'Báo giá chi tiết cho từng công trình'
        }
    ];

    const locationNotes = [
        {
            location: 'Hà Nội',
            icon: 'fa-city',
            notes: [
                'Chú trọng giếng trời để lấy sáng tự nhiên',
                'Tối ưu không gian nhỏ, tránh cảm giác chật hẹp',
                'Thiết kế phù hợp khí hậu bốn mùa'
            ]
        },
        {
            location: 'Nha Trang',
            icon: 'fa-umbrella-beach',
            notes: [
                'Chọn vật liệu chống ẩm mặn để tăng độ bền',
                'Tận dụng ánh sáng và gió biển tự nhiên',
                'Thiết kế phù hợp khí hậu ven biển'
            ]
        }
    ];

    const faqs = [
        {
            question: 'Thiết kế nội thất phong cách Hiện đại có tốn kém không?',
            answer: 'Phong cách Hiện đại có nhiều mức giá linh hoạt tùy vào diện tích và vật liệu. Chi phí dao động từ 150.000 - 280.000 VNĐ/m². Với thiết kế tối giản, bạn có thể tiết kiệm chi phí nhưng vẫn đạt được không gian đẹp, tiện nghi.'
        },
        {
            question: 'Thời gian hoàn thành thiết kế là bao lâu?',
            answer: 'Tùy vào diện tích và độ phức tạp: Căn hộ nhỏ (50-80m²): 7-10 ngày. Nhà phố (80-150m²): 10-15 ngày. Biệt thự (150m² trở lên): 15-25 ngày. Thời gian có thể rút ngắn nếu khách hàng cung cấp đầy đủ thông tin ban đầu.'
        },
        {
            question: 'Có được xem phối cảnh 3D trước khi thi công không?',
            answer: 'Có. Tất cả các gói dịch vụ từ Nâng cao trở lên đều bao gồm phối cảnh 3D chi tiết, giúp khách hàng hình dung rõ ràng không gian trước khi thi công. Gói Cơ bản chỉ có bản vẽ 2D.'
        },
        {
            question: 'Giá đã bao gồm thi công chưa?',
            answer: 'Giá thiết kế chưa bao gồm thi công. Nếu khách hàng chọn gói Trọn gói, chúng tôi sẽ báo giá riêng cho phần thi công dựa trên vật liệu và yêu cầu cụ thể. Báo giá thi công được tính riêng và minh bạch.'
        },
        {
            question: 'Có được điều chỉnh thiết kế không?',
            answer: 'Có. Trong quá trình thiết kế, khách hàng được điều chỉnh miễn phí tối đa 2 lần. Các lần chỉnh sửa tiếp theo sẽ có phí phát sinh tùy theo mức độ thay đổi. Chúng tôi luôn lắng nghe và điều chỉnh để đảm bảo thiết kế đúng ý.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Báo Giá Thiết Kế Nội Thất Phong Cách Hiện Đại 2025
                    </h1>
                    <p className="section-subtitle">
                        Bảng báo giá thiết kế nội thất phong cách Hiện đại 2025 tại Hà Nội & Nha Trang.
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
                        Phong cách nội thất <strong>Hiện đại (Modern Style)</strong> mang đến không gian
                        <strong> tối giản – tinh tế – tiện nghi</strong>. Tuy nhiên, một trong những câu hỏi
                        mà khách hàng quan tâm nhất là:
                    </p>
                    <div className="note-box">
                        <i className="fas fa-question-circle"></i>
                        <p>"Thiết kế nội thất phong cách Hiện đại hết bao nhiêu tiền?"</p>
                    </div>
                    <p>
                        Để khách hàng có cái nhìn minh bạch, chúng tôi đưa ra bảng báo giá chi tiết 2025
                        cho dịch vụ thiết kế nội thất phong cách Hiện đại tại Hà Nội & Nha Trang.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-table icon-pricing"></i>
                        Bảng Báo Giá Thiết Kế Nội Thất Hiện Đại 2025
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
                            <li>Giá có thể thay đổi theo diện tích, vật liệu, độ chi tiết</li>
                            <li>Khách hàng tại Hà Nội cần lưu ý về giếng trời, lấy sáng</li>
                            <li>Khách hàng tại Nha Trang cần chọn vật liệu chống ẩm mặn để tăng độ bền</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-box-open"></i>
                        Các Gói Dịch Vụ Thiết Kế Nội Thất Hiện Đại
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

            <section className="section section-alt">
                <div className="container">
                    <h2>
                        <i className="fas fa-star"></i>
                        Vì Sao Nên Chọn Báo Giá Minh Bạch Từ Chúng Tôi?
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

export default PhongCachHienDai;