// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongTam.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const CaiTaoPhongTam = () => {
    const [selectedSize, setSelectedSize] = useState('small');

    const bathroomSizes = {
        small: { name: 'Nhỏ (2-3m²)', desc: 'Phòng tắm căn hộ, chung cư' },
        medium: { name: 'Vừa (4-6m²)', desc: 'Phòng tắm tiêu chuẩn' },
        large: { name: 'Lớn (>6m²)', desc: 'Phòng tắm master, có bồn tắm' }
    };

    const renovationItems = [
        {
            category: 'Thiết bị vệ sinh',
            icon: 'fas fa-toilet',
            items: [
                { 
                    name: 'Bồn cầu 1 khối', 
                    brands: 'TOTO, Inax, Viglacera',
                    price: '2.500.000 - 8.000.000',
                    note: 'Tiết kiệm nước, dễ vệ sinh'
                },
                { 
                    name: 'Lavabo + Chân', 
                    brands: 'TOTO, American Standard',
                    price: '1.500.000 - 5.000.000',
                    note: 'Nhiều kiểu dáng'
                },
                { 
                    name: 'Sen tắm đứng', 
                    brands: 'Grohe, Kohler, Inax',
                    price: '1.200.000 - 6.000.000',
                    note: 'Nóng lạnh, massage'
                },
                { 
                    name: 'Bồn tắm', 
                    brands: 'TOTO, Caesar',
                    price: '8.000.000 - 30.000.000',
                    note: 'Acrylic, đá nhân tạo'
                },
                { 
                    name: 'Vòi lavabo', 
                    brands: 'Grohe, TOTO',
                    price: '800.000 - 3.000.000',
                    note: 'Nóng lạnh'
                }
            ]
        },
        {
            category: 'Ốp lát & Chống thấm',
            icon: 'fas fa-th',
            items: [
                { 
                    name: 'Gạch lát nền 30x30', 
                    price: '150.000 - 300.000/m²',
                    note: 'Chống trượt, men mờ'
                },
                { 
                    name: 'Gạch ốp tường 30x60', 
                    price: '180.000 - 350.000/m²',
                    note: 'Dễ vệ sinh, đa dạng'
                },
                { 
                    name: 'Gạch mosaic trang trí', 
                    price: '300.000 - 800.000/m²',
                    note: 'Tạo điểm nhấn'
                },
                { 
                    name: 'Chống thấm sàn & tường', 
                    price: '120.000 - 200.000/m²',
                    note: 'Sika, Kova'
                },
                { 
                    name: 'Xi măng chà ron', 
                    price: '30.000 - 50.000/m²',
                    note: 'Chống thấm, chống nấm'
                }
            ]
        },
        {
            category: 'Phụ kiện & Nội thất',
            icon: 'fas fa-shower',
            items: [
                { 
                    name: 'Cabin tắm kính', 
                    price: '3.500.000 - 12.000.000',
                    note: 'Kính cường lực 8-10mm'
                },
                { 
                    name: 'Gương phòng tắm', 
                    price: '500.000 - 2.000.000',
                    note: 'Có đèn LED, sấy gương'
                },
                { 
                    name: 'Tủ lavabo', 
                    price: '2.000.000 - 6.000.000',
                    note: 'Gỗ chống ẩm, đá nhân tạo'
                },
                { 
                    name: 'Kệ góc, móc treo', 
                    price: '200.000 - 800.000',
                    note: 'Inox 304, nhựa ABS'
                },
                { 
                    name: 'Máy nước nóng', 
                    price: '2.000.000 - 8.000.000',
                    note: 'Trực tiếp, gián tiếp'
                }
            ]
        },
        {
            category: 'Hệ thống điện nước',
            icon: 'fas fa-plug',
            items: [
                { 
                    name: 'Đường ống nước PPR', 
                    price: '80.000 - 120.000/m',
                    note: 'Chịu nhiệt, áp lực'
                },
                { 
                    name: 'Hệ thống điện chống giật', 
                    price: '50.000 - 80.000/m',
                    note: 'Dây điện chống nước'
                },
                { 
                    name: 'Đèn LED phòng tắm', 
                    price: '150.000 - 400.000/bộ',
                    note: 'Chống ẩm IP44'
                },
                { 
                    name: 'Quạt hút gió', 
                    price: '300.000 - 1.000.000',
                    note: 'Âm trần, gắn tường'
                }
            ]
        }
    ];

    const packageOptions = [
        {
            level: 'Tiết kiệm',
            price: {
                small: '12 - 18 triệu',
                medium: '18 - 25 triệu',
                large: '25 - 35 triệu'
            },
            features: [
                'Thiết bị vệ sinh Viglacera',
                'Gạch ốp lát trong nước',
                'Sen tắm cơ bản',
                'Gương thường',
                'Thi công cơ bản'
            ],
            color: '#10b981'
        },
        {
            level: 'Trung cấp',
            price: {
                small: '20 - 30 triệu',
                medium: '30 - 45 triệu',
                large: '45 - 60 triệu'
            },
            features: [
                'Thiết bị Inax/American Standard',
                'Gạch cao cấp',
                'Cabin tắm kính',
                'Tủ lavabo',
                'Gương LED',
                'Máy nước nóng'
            ],
            color: '#667eea'
        },
        {
            level: 'Cao cấp',
            price: {
                small: '35 - 50 triệu',
                medium: '50 - 80 triệu',
                large: '80 - 150 triệu'
            },
            features: [
                'Thiết bị TOTO/Kohler',
                'Gạch nhập khẩu',
                'Bồn tắm massage',
                'Nội thất cao cấp',
                'Đèn trang trí',
                'Smart toilet'
            ],
            color: '#764ba2'
        }
    ];

    const importantNotes = [
        {
            icon: 'fas fa-tint',
            title: 'Chống thấm kỹ lưỡng',
            desc: 'Đặc biệt quan trọng cho căn hộ chung cư'
        },
        {
            icon: 'fas fa-ruler',
            title: 'Đo đạc chính xác',
            desc: 'Tránh lãng phí vật liệu và chi phí phát sinh'
        },
        {
            icon: 'fas fa-bolt',
            title: 'An toàn điện',
            desc: 'Sử dụng thiết bị chống giật, ổ cắm chống nước'
        },
        {
            icon: 'fas fa-wind',
            title: 'Thông gió tốt',
            desc: 'Lắp quạt hút để tránh ẩm mốc'
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
                        <span>Cải tạo phòng tắm</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-shower"></i>
                        Chi Phí Cải Tạo Phòng Tắm - WC
                    </h1>
                    <p className="detail-subtitle">
                        Nâng cấp phòng tắm hiện đại, sạch sẽ và tiện nghi
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Phòng tắm là không gian vệ sinh cá nhân quan trọng, ảnh hưởng trực tiếp đến 
                            sức khỏe và tiện nghi sinh hoạt. Một phòng tắm được cải tạo tốt không chỉ 
                            sạch sẽ, an toàn mà còn giúp thư giãn sau ngày dài.
                        </p>
                        <p>
                            <strong>LinHome</strong> chuyên cải tạo phòng tắm với kỹ thuật chống thấm 
                            hoàn hảo, thiết bị chất lượng và thiết kế tối ưu công năng.
                        </p>
                    </div>
                </div>
            </section>

            {/* Size Selection & Packages */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Gói Cải Tạo Theo Diện Tích</h2>
                    
                    <div className="size-selector">
                        <div className="size-tabs">
                            {Object.entries(bathroomSizes).map(([key, size]) => (
                                <button
                                    key={key}
                                    className={`size-tab ${selectedSize === key ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(key)}
                                >
                                    <span className="size-name">{size.name}</span>
                                    <span className="size-desc">{size.desc}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="packages-grid">
                        {packageOptions.map((pkg, index) => (
                            <div key={index} className="package-card" style={{ borderTop: `4px solid ${pkg.color}` }}>
                                <h3 style={{ color: pkg.color }}>Gói {pkg.level}</h3>
                                <div className="package-price">
                                    {pkg.price[selectedSize]}
                                </div>
                                <ul className="package-features">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check" style={{ color: pkg.color }}></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary" style={{ background: pkg.color }}>
                                    Xem Chi Tiết
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Items */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Chi Tiết Vật Tư & Thiết Bị</h2>
                    
                    <div className="items-categories">
                        {renovationItems.map((category, index) => (
                            <div key={index} className="category-section">
                                <div className="category-header">
                                    <i className={category.icon}></i>
                                    <h3>{category.category}</h3>
                                </div>
                                <div className="items-list">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="item-row">
                                            <div className="item-info">
                                                <h4>{item.name}</h4>
                                                {item.brands && <span className="item-brands">Thương hiệu: {item.brands}</span>}
                                                <span className="item-note">{item.note}</span>
                                            </div>
                                            <div className="item-price">{item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình Cải Tạo Phòng Tắm</h2>
                    
                    <div className="bathroom-process">
                        <div className="process-timeline">
                            {[
                                { day: 'Ngày 1', task: 'Tháo dỡ thiết bị cũ', desc: 'Bảo vệ khu vực xung quanh' },
                                { day: 'Ngày 2-3', task: 'Xử lý điện nước', desc: 'Đi lại đường ống, dây điện' },
                                { day: 'Ngày 4-5', task: 'Chống thấm', desc: '2-3 lớp chống thấm' },
                                { day: 'Ngày 6-7', task: 'Ốp lát gạch', desc: 'Nền và tường' },
                                { day: 'Ngày 8-9', task: 'Lắp thiết bị', desc: 'Bồn cầu, lavabo, sen' },
                                { day: 'Ngày 10', task: 'Hoàn thiện', desc: 'Vệ sinh, nghiệm thu' }
                            ].map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker">{index + 1}</div>
                                    <div className="timeline-content">
                                        <h4>{item.day}</h4>
                                        <h5>{item.task}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Quan Trọng Khi Cải Tạo</h2>
                    
                    <div className="notes-grid">
                        {importantNotes.map((note, index) => (
                            <div key={index} className="note-card">
                                <div className="note-icon">
                                    <i className={note.icon}></i>
                                </div>
                                <h4>{note.title}</h4>
                                <p>{note.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Cải Tạo Phòng Tắm Chuẩn 5 Sao</h2>
                        <p>
                            LinHome cam kết mang đến phòng tắm sạch sẽ, an toàn với công nghệ chống thấm 
                            tốt nhất. Liên hệ ngay để được tư vấn và báo giá chi tiết!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Hotline: 0941 090 333
                            </a>
                            <a href="/lien-he" className="btn btn-secondary">
                                <i className="fas fa-calendar"></i>
                                Đặt Lịch Khảo Sát
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .size-selector {
                    margin-bottom: 3rem;
                }

                .size-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .size-tab {
                    padding: 1rem 2rem;
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-align: center;
                }

                .size-tab.active {
                    border-color: #667eea;
                    background: #f0f4ff;
                }

                .size-name {
                    display: block;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 0.25rem;
                }

                .size-desc {
                    display: block;
                    font-size: 0.85rem;
                    color: #718096;
                }

                .packages-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .package-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    text-align: center;
                    transition: all 0.3s;
                }

                .package-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
                }

                .package-card h3 {
                    margin-bottom: 1rem;
                }

                .package-price {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 1.5rem;
                }

                .package-features {
                    list-style: none;
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                .package-features li {
                    padding: 0.4rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #4a5568;
                }

                .items-categories {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .category-section {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .category-header {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 1rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .category-header i {
                    font-size: 1.5rem;
                }

                .category-header h3 {
                    margin: 0;
                }

                .items-list {
                    padding: 1rem;
                }

                .item-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 1rem;
                    border-bottom: 1px solid #e2e8f0;
                    gap: 1rem;
                }

                .item-row:last-child {
                    border-bottom: none;
                }

                .item-info {
                    flex: 1;
                }

                .item-info h4 {
                    margin-bottom: 0.25rem;
                    color: #2d3748;
                }

                .item-brands {
                    display: block;
                    font-size: 0.85rem;
                    color: #667eea;
                    margin-bottom: 0.25rem;
                }

                .item-note {
                    display: block;
                    font-size: 0.85rem;
                    color: #718096;
                }

                .item-price {
                    font-weight: 600;
                    color: #764ba2;
                    white-space: nowrap;
                }

                .bathroom-process {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .notes-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .note-card {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    text-align: center;
                }

                .note-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }

                .note-icon i {
                    font-size: 1.5rem;
                    color: white;
                }

                .note-card h4 {
                    margin-bottom: 0.5rem;
                    color: #2d3748;
                }

                .note-card p {
                    color: #4a5568;
                    margin: 0;
                    font-size: 0.9rem;
                }

                @media (max-width: 768px) {
                    .size-tabs {
                        flex-direction: column;
                        align-items: center;
                    }

                    .size-tab {
                        width: 100%;
                        max-width: 300px;
                    }

                    .packages-grid {
                        grid-template-columns: 1fr;
                    }

                    .item-row {
                        flex-direction: column;
                        text-align: center;
                    }

                    .notes-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default CaiTaoPhongTam;
