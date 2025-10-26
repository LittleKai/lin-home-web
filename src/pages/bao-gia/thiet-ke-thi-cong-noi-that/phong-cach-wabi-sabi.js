// src/pages/bao-gia/thiet-ke-thi-cong-noi-that/phong-cach-wabi-sabi.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const PhongCachWabiSabi = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const pricingTable = [
        {
            category: 'Chung cư nhỏ (Hà Nội)',
            price: '150.000 - 200.000',
            note: 'Tối giản, nhiều ánh sáng tự nhiên',
            icon: 'fa-building'
        },
        {
            category: 'Nhà phố – nhà ống',
            price: '160.000 - 220.000',
            note: 'Bố trí hợp lý, gọn gàng',
            icon: 'fa-home'
        },
        {
            category: 'Biệt thự/villa (Hà Nội & Nha Trang)',
            price: '200.000 - 280.000',
            note: 'Vật liệu tự nhiên, không gian mở',
            icon: 'fa-spa'
        },
        {
            category: 'Homestay/resort (Nha Trang)',
            price: '220.000 - 300.000',
            note: 'Thiết kế độc đáo, đậm chất Nhật Bản',
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
                'Tư vấn lựa chọn vật liệu tự nhiên'
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
                'Đảm bảo đúng phong cách Wabi-Sabi',
                'Bảo hành & bảo trì công trình',
                'Hỗ trợ sau khi hoàn thiện'
            ]
        }
    ];

    const characteristics = [
        {
            icon: 'fa-leaf',
            title: 'Giản dị, mộc mạc',
            description: 'Loại bỏ sự cầu kỳ, tôn vinh vẻ đẹp tự nhiên'
        },
        {
            icon: 'fa-sun',
            title: 'Ánh sáng tự nhiên',
            description: 'Tối đa hóa ánh sáng mặt trời, gió tự nhiên'
        },
        {
            icon: 'fa-palette',
            title: 'Màu sắc trung tính',
            description: 'Be, nâu, xám, trắng kem tạo cảm giác yên bình'
        },
        {
            icon: 'fa-yin-yang',
            title: 'Triết lý Zen',
            description: 'Không gian thanh tịnh, tĩnh lặng, thư giãn'
        }
    ];

    const materials = [
        {
            name: 'Gỗ tự nhiên',
            icon: 'fa-tree',
            description: 'Gỗ thô, giữ nguyên vân gỗ tự nhiên'
        },
        {
            name: 'Đá tự nhiên',
            icon: 'fa-gem',
            description: 'Đá xám, đá trắng, đá sỏi tạo điểm nhấn'
        },
        {
            name: 'Gốm, đất nung',
            icon: 'fa-vase',
            description: 'Đồ gốm thủ công, màu đất tự nhiên'
        },
        {
            name: 'Tre, cói',
            icon: 'fa-spa',
            description: 'Vật liệu thân thiện môi trường, bền vững'
        }
    ];

    const principles = [
        {
            title: 'Kanso (Giản dị)',
            description: 'Loại bỏ những gì không cần thiết, giữ lại điều cốt lõi',
            icon: 'fa-circle'
        },
        {
            title: 'Fukinsei (Bất đối xứng)',
            description: 'Vẻ đẹp trong sự không hoàn hảo, tự nhiên',
            icon: 'fa-shapes'
        },
        {
            title: 'Shibui (Thanh lịch)',
            description: 'Tinh tế mà không cầu kỳ, đơn giản mà sâu sắc',
            icon: 'fa-feather'
        },
        {
            title: 'Shizen (Tự nhiên)',
            description: 'Gần gũi với thiên nhiên, vật liệu tự nhiên',
            icon: 'fa-leaf'
        },
        {
            title: 'Yugen (Huyền bí)',
            description: 'Vẻ đẹp sâu lắng, gợi cảm xúc tinh tế',
            icon: 'fa-moon'
        },
        {
            title: 'Datsuzoku (Tự do)',
            description: 'Thoát khỏi quy ước, sáng tạo theo cách riêng',
            icon: 'fa-dove'
        }
    ];

    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Chi phí minh bạch',
            description: 'Báo giá rõ ràng, không phát sinh'
        },
        {
            icon: 'fa-cube',
            title: 'Thiết kế 3D sát thực tế',
            description: 'Hình dung rõ ràng trước khi thi công'
        },
        {
            icon: 'fa-user-tie',
            title: 'KTS am hiểu triết lý',
            description: 'Chuyên sâu Wabi-Sabi & tối giản Nhật Bản'
        },
        {
            icon: 'fa-clock',
            title: 'Bàn giao đúng tiến độ',
            description: 'Hỗ trợ sau khi hoàn thiện'
        }
    ];

    const suitableSpaces = [
        {
            type: 'Căn hộ nhỏ',
            icon: 'fa-building',
            description: 'Tối ưu không gian, tạo cảm giác rộng rãi'
        },
        {
            type: 'Nhà phố',
            icon: 'fa-home',
            description: 'Không gian thoáng đãng, ánh sáng tự nhiên'
        },
        {
            type: 'Biệt thự',
            icon: 'fa-spa',
            description: 'Kết hợp vườn, ao, cây xanh hài hòa'
        },
        {
            type: 'Homestay',
            icon: 'fa-bed',
            description: 'Không gian yên bình, thư giãn cho khách'
        }
    ];

    const faqs = [
        {
            question: 'Phong cách Wabi-Sabi có phù hợp với người Việt không?',
            answer: 'Hoàn toàn phù hợp. Wabi-Sabi mang đến không gian thanh tịnh, gần gũi thiên nhiên – điều mà nhiều gia đình Việt đang tìm kiếm trong cuộc sống hiện đại đầy bận rộn. Phong cách này giúp tạo nên không gian thư giãn, giảm stress.'
        },
        {
            question: 'Chi phí Wabi-Sabi có rẻ hơn phong cách khác không?',
            answer: 'Wabi-Sabi sử dụng vật liệu tự nhiên và thiết kế tối giản nên chi phí có thể tiết kiệm hơn các phong cách cầu kỳ. Tuy nhiên, vật liệu tự nhiên chất lượng cao (gỗ tự nhiên, đá, gốm) vẫn có giá trị nhất định. Báo giá minh bạch giúp khách hàng lựa chọn phù hợp ngân sách.'
        },
        {
            question: 'Không gian Wabi-Sabi có bị trống trải không?',
            answer: 'Không. Wabi-Sabi là sự cân bằng giữa tối giản và ấm cúng. Mỗi vật dụng đều có ý nghĩa và vị trí riêng. Không gian được thiết kế để tạo cảm giác yên bình mà không trống trải hay thiếu sự sống.'
        },
        {
            question: 'Thời gian thiết kế và thi công mất bao lâu?',
            answer: 'Thời gian thiết kế: 7-15 ngày tùy diện tích. Thời gian thi công: 1-3 tháng tùy quy mô. Do thiết kế tối giản, quá trình thi công thường nhanh hơn các phong cách cầu kỳ. Chúng tôi cam kết đúng tiến độ.'
        },
        {
            question: 'Có thể kết hợp Wabi-Sabi với phong cách khác không?',
            answer: 'Có thể. Nhiều gia đình kết hợp Wabi-Sabi với phong cách Hiện đại hoặc Scandinavian để tạo không gian vừa tối giản vừa tiện nghi. KTS sẽ tư vấn cách kết hợp hài hòa giữa các phong cách.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Báo Giá Thiết Kế Nội Thất Phong Cách Wabi-Sabi 2025
                    </h1>
                    <p className="section-subtitle">
                        Báo giá thiết kế nội thất phong cách Wabi-Sabi 2025 chi tiết, minh bạch theo m².
                        Giải pháp tối giản – mộc mạc – tinh thần Nhật Bản. Tư vấn miễn phí tại Hà Nội & Nha Trang.
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
                        Phong cách <strong>Wabi-Sabi</strong> ngày càng được ưa chuộng trong thiết kế nội thất
                        nhờ sự <strong>giản dị – mộc mạc – đề cao tự nhiên</strong>. Năm 2025, nhu cầu tìm hiểu
                        báo giá thiết kế Wabi-Sabi tăng mạnh, đặc biệt ở Hà Nội (chung cư, nhà phố) và Nha Trang
                        (biệt thự, homestay, resort).
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-table icon-pricing"></i>
                        Bảng Báo Giá Thiết Kế Nội Thất Wabi-Sabi 2025
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
                        <p>Giá có thể thay đổi theo:</p>
                        <ul>
                            <li>Diện tích công trình</li>
                            <li>Vật liệu sử dụng (gỗ tự nhiên, đá, gốm, tre)</li>
                            <li>Độ chi tiết & yêu cầu riêng của gia chủ</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-star"></i>
                        Đặc Điểm Nổi Bật Phong Cách Wabi-Sabi
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
                        <i className="fas fa-yin-yang"></i>
                        7 Nguyên Tắc Thiết Kế Wabi-Sabi
                    </h2>
                    <div className="grid-3">
                        {principles.map((principle, index) => (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <div className="icon-header">
                                        <i className={`fas ${principle.icon}`}></i>
                                        <h4>{principle.title}</h4>
                                    </div>
                                    <p>{principle.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2>
                        <i className="fas fa-layer-group icon-materials"></i>
                        Vật Liệu Phổ Biến Trong Phong Cách Wabi-Sabi
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

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-box-open"></i>
                        Gói Dịch Vụ Thiết Kế Wabi-Sabi
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

            <section className="section section-gradient">
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

            <section className="section">
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

            <section className="section section-alt">
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

export default PhongCachWabiSabi;