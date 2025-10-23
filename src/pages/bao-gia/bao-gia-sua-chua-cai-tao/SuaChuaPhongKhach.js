// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongKhach.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const SuaChuaPhongKhach = () => {
    const [activeTab, setActiveTab] = useState('basic');

    const renovationPackages = {
        basic: {
            name: 'Gói Cơ Bản',
            price: '15 - 25 triệu',
            area: 'Cho phòng khách 15-20m²',
            features: [
                'Sơn lại toàn bộ tường và trần',
                'Thay đổi hệ thống đèn chiếu sáng cơ bản',
                'Lắp đặt rèm cửa mới',
                'Vệ sinh và đánh bóng sàn hiện có',
                'Sửa chữa các hư hỏng nhỏ'
            ]
        },
        standard: {
            name: 'Gói Tiêu Chuẩn',
            price: '35 - 50 triệu',
            area: 'Cho phòng khách 20-30m²',
            features: [
                'Làm mới trần thạch cao phẳng',
                'Ốp tường trang trí 1 mặt',
                'Thay sàn gỗ công nghiệp/gạch mới',
                'Hệ thống đèn LED âm trần',
                'Thi công kệ TV âm tường',
                'Sơn tường với màu sắc tùy chọn'
            ]
        },
        premium: {
            name: 'Gói Cao Cấp',
            price: '60 - 100 triệu',
            area: 'Cho phòng khách 30-40m²',
            features: [
                'Trần thạch cao giật cấp có đèn hắt',
                'Ốp tường gỗ/đá cao cấp',
                'Sàn gỗ tự nhiên/đá marble',
                'Hệ thống chiếu sáng thông minh',
                'Tủ kệ trang trí theo yêu cầu',
                'Vách ngăn CNC trang trí',
                'Điều hòa âm trần/cassette'
            ]
        }
    };

    const priceDetails = [
        {
            category: 'Phá dỡ & Chuẩn bị',
            items: [
                { name: 'Tháo dỡ nội thất cũ', price: '50.000 - 80.000/m²' },
                { name: 'Đập phá tường (nếu có)', price: '150.000 - 200.000/m²' },
                { name: 'Vận chuyển phế thải', price: '500.000 - 800.000/chuyến' }
            ]
        },
        {
            category: 'Xây dựng & Hoàn thiện',
            items: [
                { name: 'Trần thạch cao phẳng', price: '150.000 - 180.000/m²' },
                { name: 'Trần thạch cao giật cấp', price: '200.000 - 280.000/m²' },
                { name: 'Sơn tường cao cấp', price: '80.000 - 120.000/m²' },
                { name: 'Ốp tường gỗ/đá', price: '300.000 - 800.000/m²' }
            ]
        },
        {
            category: 'Sàn nhà',
            items: [
                { name: 'Sàn gỗ công nghiệp', price: '250.000 - 450.000/m²' },
                { name: 'Sàn gạch 60x60', price: '180.000 - 250.000/m²' },
                { name: 'Sàn gạch 80x80', price: '220.000 - 350.000/m²' },
                { name: 'Sàn gỗ tự nhiên', price: '600.000 - 1.200.000/m²' }
            ]
        },
        {
            category: 'Điện & Chiếu sáng',
            items: [
                { name: 'Đèn LED âm trần', price: '150.000 - 250.000/bộ' },
                { name: 'Đèn chùm trang trí', price: '1.000.000 - 5.000.000/bộ' },
                { name: 'Hệ thống điện âm tường', price: '50.000 - 80.000/m' },
                { name: 'Công tắc, ổ cắm cao cấp', price: '200.000 - 400.000/điểm' }
            ]
        }
    ];

    const designStyles = [
        {
            style: 'Hiện đại',
            image: '/images/modern-living.jpg',
            features: ['Tông màu trung tính', 'Nội thất tối giản', 'Ánh sáng tự nhiên'],
            suitable: 'Phù hợp với gia đình trẻ, yêu thích sự đơn giản'
        },
        {
            style: 'Tân cổ điển',
            image: '/images/classic-living.jpg',
            features: ['Chi tiết cầu kỳ', 'Màu sắc ấm áp', 'Nội thất sang trọng'],
            suitable: 'Phù hợp với những ai yêu thích vẻ đẹp hoàng gia'
        },
        {
            style: 'Scandinavian',
            image: '/images/scandi-living.jpg',
            features: ['Tông màu sáng', 'Vật liệu tự nhiên', 'Không gian thoáng'],
            suitable: 'Phù hợp với người yêu thích phong cách Bắc Âu'
        },
        {
            style: 'Industrial',
            image: '/images/industrial-living.jpg',
            features: ['Vật liệu thô', 'Màu tối', 'Chi tiết kim loại'],
            suitable: 'Phù hợp với không gian loft, căn hộ hiện đại'
        }
    ];

    const renovationTips = [
        {
            icon: 'fas fa-palette',
            title: 'Chọn màu sắc phù hợp',
            content: 'Màu sáng giúp không gian rộng hơn, màu tối tạo cảm giác ấm cúng'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Tối ưu ánh sáng',
            content: 'Kết hợp ánh sáng tự nhiên và nhân tạo để tạo không gian sống động'
        },
        {
            icon: 'fas fa-couch',
            title: 'Bố trí nội thất hợp lý',
            content: 'Đảm bảo lối đi thông thoáng, tạo điểm nhấn với sofa hoặc kệ TV'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Thêm cây xanh',
            content: 'Cây cảnh giúp thanh lọc không khí và tạo điểm nhấn tự nhiên'
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
                        <span>Sửa chữa phòng khách</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-couch"></i>
                        Chi Phí Sửa Chữa Cải Tạo Phòng Khách
                    </h1>
                    <p className="detail-subtitle">
                        Báo giá chi tiết cho việc cải tạo phòng khách hiện đại, tiện nghi và sang trọng
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Phòng khách là không gian trung tâm của ngôi nhà, nơi tiếp đón khách và sum họp gia đình. 
                            Việc cải tạo phòng khách không chỉ làm mới không gian sống mà còn thể hiện gu thẩm mỹ và 
                            phong cách của gia chủ.
                        </p>
                        <p>
                            <strong>LinHome</strong> cung cấp dịch vụ sửa chữa cải tạo phòng khách trọn gói với nhiều 
                            phương án phù hợp mọi ngân sách và phong cách thiết kế.
                        </p>
                    </div>
                </div>
            </section>

            {/* Renovation Packages */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Gói Cải Tạo Phòng Khách</h2>
                    
                    <div className="tabs">
                        <button 
                            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
                            onClick={() => setActiveTab('basic')}
                        >
                            <i className="fas fa-home"></i>
                            Cơ Bản
                        </button>
                        <button 
                            className={`tab ${activeTab === 'standard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('standard')}
                        >
                            <i className="fas fa-star"></i>
                            Tiêu Chuẩn
                        </button>
                        <button 
                            className={`tab ${activeTab === 'premium' ? 'active' : ''}`}
                            onClick={() => setActiveTab('premium')}
                        >
                            <i className="fas fa-crown"></i>
                            Cao Cấp
                        </button>
                    </div>

                    <div className="package-content">
                        <div className="package-card">
                            <h3>{renovationPackages[activeTab].name}</h3>
                            <div className="package-price">{renovationPackages[activeTab].price}</div>
                            <p className="package-area">{renovationPackages[activeTab].area}</p>
                            <h4>Bao gồm:</h4>
                            <ul className="package-features">
                                {renovationPackages[activeTab].features.map((feature, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Liên Hệ Báo Giá
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Pricing */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Chi Tiết Theo Hạng Mục</h2>
                    
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

            {/* Design Styles */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Phong Cách Thiết Kế Phòng Khách</h2>
                    
                    <div className="style-grid">
                        {designStyles.map((style, index) => (
                            <div key={index} className="style-card">
                                <h3>{style.style}</h3>
                                <ul>
                                    {style.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="style-suitable">{style.suitable}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Khi Cải Tạo Phòng Khách</h2>
                    
                    <div className="tips-grid">
                        {renovationTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <i className={tip.icon}></i>
                                <h4>{tip.title}</h4>
                                <p>{tip.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Bắt Đầu Cải Tạo Phòng Khách Của Bạn</h2>
                        <p>
                            Hãy để LinHome giúp bạn biến phòng khách thành không gian sống lý tưởng. 
                            Liên hệ ngay để được tư vấn và báo giá miễn phí!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Gọi Ngay: 0941 090 333
                            </a>
                            <a href="https://zalo.me/0941090333" className="btn btn-secondary">
                                <i className="fas fa-comments"></i>
                                Chat Zalo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .package-content {
                    max-width: 600px;
                    margin: 2rem auto 0;
                }

                .package-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .package-card h3 {
                    color: #667eea;
                    margin-bottom: 1rem;
                }

                .package-price {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #764ba2;
                    margin-bottom: 0.5rem;
                }

                .package-area {
                    color: #718096;
                    margin-bottom: 2rem;
                }

                .package-card h4 {
                    margin-bottom: 1rem;
                    color: #2d3748;
                }

                .package-features {
                    list-style: none;
                    text-align: left;
                    margin-bottom: 2rem;
                }

                .package-features li {
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #4a5568;
                }

                .package-features i {
                    color: #10b981;
                }

                .pricing-details {
                    display: grid;
                    gap: 1.5rem;
                }

                .style-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .style-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .style-card h3 {
                    color: #667eea;
                    margin-bottom: 1rem;
                }

                .style-card ul {
                    list-style: none;
                    margin-bottom: 1rem;
                }

                .style-card li {
                    padding: 0.3rem 0;
                    color: #4a5568;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .style-card i {
                    color: #10b981;
                    font-size: 0.8rem;
                }

                .style-suitable {
                    font-style: italic;
                    color: #718096;
                    font-size: 0.9rem;
                    margin: 0;
                }

                .tip-card h4 {
                    margin: 0.75rem 0 0.5rem;
                    color: #2d3748;
                }

                @media (max-width: 768px) {
                    .package-price {
                        font-size: 2rem;
                    }

                    .style-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default SuaChuaPhongKhach;
