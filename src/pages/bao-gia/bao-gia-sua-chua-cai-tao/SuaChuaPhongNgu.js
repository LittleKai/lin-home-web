// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongNgu.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const SuaChuaPhongNgu = () => {
    const [activeStyle, setActiveStyle] = useState('modern');

    const bedroomStyles = {
        modern: {
            name: 'Hiện đại',
            features: ['Tông màu trung tính', 'Nội thất đơn giản', 'Ánh sáng tự nhiên', 'Không gian thoáng'],
            suitable: 'Phù hợp với người trẻ, yêu thích sự tiện nghi'
        },
        scandinavian: {
            name: 'Scandinavian',
            features: ['Màu sắc nhẹ nhàng', 'Vật liệu tự nhiên', 'Ấm cúng', 'Tối giản'],
            suitable: 'Phù hợp với người yêu thích phong cách Bắc Âu'
        },
        japanese: {
            name: 'Nhật Bản',
            features: ['Giường thấp', 'Màu gỗ tự nhiên', 'Zen & yên tĩnh', 'Tối giản'],
            suitable: 'Phù hợp với người thích sự thanh tịnh'
        },
        luxury: {
            name: 'Sang trọng',
            features: ['Vật liệu cao cấp', 'Chi tiết cầu kỳ', 'Đèn chùm', 'Rèm nhung'],
            suitable: 'Phù hợp với người yêu thích sự xa hoa'
        }
    };

    const renovationPackages = [
        {
            type: 'Cơ bản',
            price: '10 - 18 triệu',
            area: 'Phòng ngủ 12-15m²',
            icon: 'fas fa-bed',
            color: '#10b981',
            includes: [
                'Sơn lại tường và trần',
                'Thay sàn gỗ công nghiệp cơ bản',
                'Lắp đèn LED âm trần',
                'Rèm cửa mới',
                'Sửa chữa nhỏ'
            ]
        },
        {
            type: 'Nâng cao',
            price: '25 - 40 triệu',
            area: 'Phòng ngủ 15-20m²',
            icon: 'fas fa-star',
            color: '#667eea',
            includes: [
                'Làm trần thạch cao có hắt sáng',
                'Ốp đầu giường gỗ/nỉ',
                'Sàn gỗ công nghiệp cao cấp',
                'Tủ âm tường cánh lùa',
                'Hệ thống đèn điều khiển',
                'Cửa sổ nhôm kính cách âm'
            ]
        },
        {
            type: 'Cao cấp',
            price: '50 - 100 triệu',
            area: 'Phòng ngủ 20-30m²',
            icon: 'fas fa-crown',
            color: '#764ba2',
            includes: [
                'Thiết kế nội thất toàn diện',
                'Sàn gỗ tự nhiên/SPC cao cấp',
                'Hệ thống tủ quần áo walk-in',
                'Giường ngủ và nội thất theo yêu cầu',
                'Điều hòa âm trần',
                'Cách âm, cách nhiệt toàn diện'
            ]
        }
    ];

    const priceDetails = [
        {
            category: 'Sàn & Trần',
            items: [
                { name: 'Sàn gỗ công nghiệp Malaysia', price: '250.000 - 350.000/m²' },
                { name: 'Sàn gỗ công nghiệp Đức', price: '400.000 - 600.000/m²' },
                { name: 'Sàn SPC hèm khóa', price: '350.000 - 500.000/m²' },
                { name: 'Trần thạch cao phẳng', price: '150.000 - 180.000/m²' },
                { name: 'Trần thạch cao giật cấp', price: '200.000 - 280.000/m²' }
            ]
        },
        {
            category: 'Tường & Cửa',
            items: [
                { name: 'Sơn tường 2 lớp', price: '70.000 - 100.000/m²' },
                { name: 'Giấy dán tường', price: '150.000 - 400.000/m²' },
                { name: 'Ốp đầu giường gỗ', price: '800.000 - 1.500.000/m²' },
                { name: 'Ốp đầu giường nỉ', price: '600.000 - 1.200.000/m²' },
                { name: 'Cửa gỗ công nghiệp', price: '2.000.000 - 3.500.000/bộ' }
            ]
        },
        {
            category: 'Nội thất phòng ngủ',
            items: [
                { name: 'Giường ngủ gỗ CN 1.6m', price: '5.000.000 - 8.000.000' },
                { name: 'Giường ngủ gỗ tự nhiên', price: '12.000.000 - 25.000.000' },
                { name: 'Tủ quần áo 2 cánh', price: '6.000.000 - 10.000.000' },
                { name: 'Tủ quần áo âm tường', price: '4.000.000 - 6.000.000/m²' },
                { name: 'Bàn trang điểm', price: '3.000.000 - 6.000.000' }
            ]
        },
        {
            category: 'Điện & Chiếu sáng',
            items: [
                { name: 'Đèn LED âm trần phòng ngủ', price: '150.000 - 250.000/bộ' },
                { name: 'Đèn ngủ đầu giường', price: '300.000 - 800.000/bộ' },
                { name: 'Đèn trang trí', price: '500.000 - 2.000.000' },
                { name: 'Ổ cắm, công tắc thông minh', price: '300.000 - 500.000/điểm' }
            ]
        }
    ];

    const designTips = [
        {
            icon: 'fas fa-palette',
            title: 'Màu sắc phòng ngủ',
            tips: [
                'Chọn màu nhẹ nhàng: trắng, be, xám nhạt',
                'Màu xanh dương nhạt giúp dễ ngủ',
                'Tránh màu đỏ, cam sáng gây kích thích'
            ]
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Ánh sáng phòng ngủ',
            tips: [
                'Kết hợp ánh sáng trắng và vàng',
                'Lắp đèn điều chỉnh độ sáng',
                'Đèn ngủ đầu giường tiện lợi'
            ]
        },
        {
            icon: 'fas fa-wind',
            title: 'Thông gió & Nhiệt độ',
            tips: [
                'Đảm bảo thông gió tự nhiên',
                'Nhiệt độ lý tưởng 20-22°C',
                'Rèm cửa 2 lớp điều chỉnh ánh sáng'
            ]
        },
        {
            icon: 'fas fa-volume-mute',
            title: 'Cách âm phòng ngủ',
            tips: [
                'Cửa và cửa sổ cách âm',
                'Thảm trải sàn giảm tiếng ồn',
                'Vật liệu hút âm cho tường'
            ]
        }
    ];

    return (
        <div className="suachua-detail-page">
            {/* Header */}
            <section className="detail-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Trang chủ</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia">Báo giá</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia/bao-gia-sua-chua-cai-tao">Báo giá sửa chữa cải tạo</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Sửa chữa phòng ngủ</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-bed"></i>
                        Chi Phí Sửa Chữa Cải Tạo Phòng Ngủ
                    </h1>
                    <p className="detail-subtitle">
                        Tạo không gian nghỉ ngơi lý tưởng với chi phí hợp lý
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Phòng ngủ là không gian riêng tư và quan trọng nhất trong ngôi nhà - nơi bạn nghỉ ngơi 
                            và tái tạo năng lượng. Một phòng ngủ được thiết kế tốt không chỉ đẹp mắt mà còn 
                            giúp cải thiện chất lượng giấc ngủ.
                        </p>
                        <p>
                            <strong>LinHome</strong> mang đến giải pháp cải tạo phòng ngủ toàn diện, từ thiết kế 
                            đến thi công, đảm bảo không gian nghỉ ngơi hoàn hảo cho bạn.
                        </p>
                    </div>
                </div>
            </section>

            {/* Style Selection */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Phong Cách Thiết Kế Phòng Ngủ</h2>
                    
                    <div className="tabs">
                        {Object.entries(bedroomStyles).map(([key, style]) => (
                            <button
                                key={key}
                                className={`tab ${activeStyle === key ? 'active' : ''}`}
                                onClick={() => setActiveStyle(key)}
                            >
                                {style.name}
                            </button>
                        ))}
                    </div>

                    <div className="style-showcase">
                        <h3>{bedroomStyles[activeStyle].name}</h3>
                        <div className="style-features">
                            <h4>Đặc điểm:</h4>
                            <ul>
                                {bedroomStyles[activeStyle].features.map((feature, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <p className="style-suitable">
                                <i className="fas fa-info-circle"></i>
                                {bedroomStyles[activeStyle].suitable}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Renovation Packages */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Gói Cải Tạo Phòng Ngủ</h2>
                    
                    <div className="room-grid">
                        {renovationPackages.map((pkg, index) => (
                            <div key={index} className="room-card">
                                <div className="room-header" style={{ background: pkg.color }}>
                                    <i className={pkg.icon} className="room-icon"></i>
                                    <h3>Gói {pkg.type}</h3>
                                </div>
                                <div className="room-body">
                                    <div className="price-range">{pkg.price}</div>
                                    <p className="room-area">{pkg.area}</p>
                                    <ul className="room-features">
                                        {pkg.includes.map((item, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-primary">
                                        Liên Hệ Tư Vấn
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Pricing */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Chi Tiết Từng Hạng Mục</h2>
                    
                    <div className="pricing-details">
                        {priceDetails.map((category, index) => (
                            <div key={index} className="price-category">
                                <h3 className="category-title">{category.category}</h3>
                                <div className="price-items">
                                    <table className="price-table">
                                        <tbody>
                                            {category.items.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="item-name">{item.name}</td>
                                                    <td className="item-price">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Bí Quyết Thiết Kế Phòng Ngủ Hoàn Hảo</h2>
                    
                    <div className="tips-grid">
                        {designTips.map((tip, index) => (
                            <div key={index} className="design-tip-card">
                                <div className="tip-header">
                                    <i className={tip.icon}></i>
                                    <h4>{tip.title}</h4>
                                </div>
                                <ul className="tip-list">
                                    {tip.tips.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Size Calculator */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="calculator-box">
                        <h2>Ước Tính Chi Phí Theo Diện Tích</h2>
                        <div className="size-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Diện tích</th>
                                        <th>Gói Cơ bản</th>
                                        <th>Gói Nâng cao</th>
                                        <th>Gói Cao cấp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10-12m²</td>
                                        <td>8-12 triệu</td>
                                        <td>20-30 triệu</td>
                                        <td>40-60 triệu</td>
                                    </tr>
                                    <tr>
                                        <td>12-15m²</td>
                                        <td>10-18 triệu</td>
                                        <td>25-40 triệu</td>
                                        <td>50-80 triệu</td>
                                    </tr>
                                    <tr>
                                        <td>15-20m²</td>
                                        <td>15-25 triệu</td>
                                        <td>35-50 triệu</td>
                                        <td>70-100 triệu</td>
                                    </tr>
                                    <tr>
                                        <td>20-30m²</td>
                                        <td>20-35 triệu</td>
                                        <td>45-70 triệu</td>
                                        <td>90-150 triệu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="calculator-note">
                            <i className="fas fa-info-circle"></i>
                            Chi phí trên chỉ mang tính tham khảo và có thể thay đổi tùy theo yêu cầu cụ thể
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Biến Phòng Ngủ Thành Thiên Đường Nghỉ Ngơi</h2>
                        <p>
                            LinHome sẵn sàng giúp bạn tạo nên không gian phòng ngủ mơ ước. 
                            Hãy liên hệ ngay để được tư vấn thiết kế miễn phí!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Gọi Ngay: 0941 090 333
                            </a>
                            <a href="https://zalo.me/0941090333" className="btn btn-secondary">
                                <i className="fas fa-comments"></i>
                                Chat Zalo Tư Vấn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .style-showcase {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    margin-top: 2rem;
                }

                .style-showcase h3 {
                    color: #667eea;
                    margin-bottom: 1.5rem;
                }

                .style-features ul {
                    list-style: none;
                    margin-bottom: 1rem;
                }

                .style-features li {
                    padding: 0.3rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .style-features i {
                    color: #10b981;
                }

                .style-suitable {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: #f0f4ff;
                    border-radius: 8px;
                    color: #667eea;
                }

                .room-area {
                    text-align: center;
                    color: #718096;
                    margin-bottom: 1.5rem;
                }

                .design-tip-card {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .tip-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .tip-header i {
                    font-size: 2rem;
                    color: #667eea;
                }

                .tip-header h4 {
                    margin: 0;
                    color: #2d3748;
                }

                .tip-list {
                    list-style: none;
                    color: #4a5568;
                }

                .tip-list li {
                    padding: 0.3rem 0;
                    padding-left: 1rem;
                    position: relative;
                }

                .tip-list li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #667eea;
                }

                .calculator-box {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

                .size-table {
                    overflow-x: auto;
                    margin: 2rem 0;
                }

                .size-table table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .size-table th {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 1rem;
                    text-align: left;
                }

                .size-table td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #e2e8f0;
                }

                .size-table tr:hover {
                    background: #f7fafc;
                }

                .calculator-note {
                    text-align: center;
                    color: #667eea;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                @media (max-width: 768px) {
                    .style-showcase {
                        padding: 1.5rem;
                    }

                    .design-tip-card {
                        padding: 1rem;
                    }

                    .tip-header {
                        flex-direction: column;
                        text-align: center;
                    }

                    .size-table {
                        font-size: 0.85rem;
                    }

                    .size-table th,
                    .size-table td {
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default SuaChuaPhongNgu;
