// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongBep.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const CaiTaoPhongBep = () => {
    const [selectedLayout, setSelectedLayout] = useState('L');

    const kitchenLayouts = {
        'L': {
            name: 'Bếp chữ L',
            description: 'Phù hợp với không gian vừa và nhỏ, tối ưu góc',
            advantages: ['Tiết kiệm không gian', 'Dễ di chuyển', 'Phù hợp góc vuông'],
            price: '15 - 25 triệu'
        },
        'I': {
            name: 'Bếp chữ I',
            description: 'Bố trí thẳng hàng, phù hợp không gian hẹp',
            advantages: ['Đơn giản', 'Tiết kiệm chi phí', 'Phù hợp căn hộ nhỏ'],
            price: '12 - 20 triệu'
        },
        'U': {
            name: 'Bếp chữ U',
            description: 'Không gian bếp rộng rãi với 3 mặt tủ',
            advantages: ['Nhiều không gian lưu trữ', 'Tiện nghi', 'Phù hợp gia đình lớn'],
            price: '25 - 40 triệu'
        },
        'Island': {
            name: 'Bếp có đảo',
            description: 'Hiện đại với đảo bếp trung tâm',
            advantages: ['Sang trọng', 'Đa chức năng', 'Tạo điểm nhấn'],
            price: '35 - 60 triệu'
        }
    };

    const renovationItems = [
        {
            category: 'Tủ bếp',
            items: [
                { name: 'Tủ bếp gỗ công nghiệp MDF', price: '3.000.000 - 4.500.000/md', note: 'Chống ẩm, phủ Melamine' },
                { name: 'Tủ bếp gỗ Acrylic', price: '4.500.000 - 6.000.000/md', note: 'Bề mặt bóng, dễ vệ sinh' },
                { name: 'Tủ bếp gỗ tự nhiên', price: '6.000.000 - 10.000.000/md', note: 'Sang trọng, bền vững' }
            ]
        },
        {
            category: 'Mặt bếp',
            items: [
                { name: 'Đá Granite nhân tạo', price: '1.200.000 - 1.800.000/m²', note: 'Đa dạng màu sắc' },
                { name: 'Đá Marble tự nhiên', price: '2.500.000 - 4.000.000/m²', note: 'Cao cấp, vân đẹp' },
                { name: 'Đá thạch anh', price: '3.000.000 - 5.000.000/m²', note: 'Độ cứng cao, chống trầy' }
            ]
        },
        {
            category: 'Thiết bị bếp',
            items: [
                { name: 'Bếp từ đôi', price: '5.000.000 - 15.000.000', note: 'Tiết kiệm điện, an toàn' },
                { name: 'Máy hút mùi', price: '3.000.000 - 12.000.000', note: 'Công suất 600-1200m³/h' },
                { name: 'Lò nướng âm tủ', price: '8.000.000 - 25.000.000', note: 'Đa chức năng' },
                { name: 'Máy rửa bát', price: '8.000.000 - 20.000.000', note: 'Tiết kiệm nước, thời gian' }
            ]
        },
        {
            category: 'Ốp tường & Sàn',
            items: [
                { name: 'Gạch ốp tường 30x60', price: '150.000 - 250.000/m²', note: 'Dễ vệ sinh' },
                { name: 'Kính ốp tường', price: '400.000 - 600.000/m²', note: 'Hiện đại, sạch sẽ' },
                { name: 'Gạch lát sàn chống trượt', price: '200.000 - 350.000/m²', note: 'An toàn' }
            ]
        }
    ];

    const budgetPlans = [
        {
            level: 'Tiết kiệm',
            total: '25 - 40 triệu',
            icon: 'fas fa-piggy-bank',
            includes: [
                'Tủ bếp MDF cơ bản',
                'Bếp gas đôi',
                'Chậu rửa inox',
                'Gạch ốp tường thông thường',
                'Sơn tường mới'
            ]
        },
        {
            level: 'Trung bình',
            total: '50 - 80 triệu',
            icon: 'fas fa-star',
            includes: [
                'Tủ bếp Acrylic',
                'Bếp từ + Máy hút mùi',
                'Mặt đá granite',
                'Gạch ốp cao cấp',
                'Đèn LED âm tủ'
            ]
        },
        {
            level: 'Cao cấp',
            total: '100 - 200 triệu',
            icon: 'fas fa-crown',
            includes: [
                'Tủ bếp gỗ tự nhiên/nhập khẩu',
                'Full thiết bị Bosch/Hafele',
                'Mặt đá thạch anh',
                'Kính ốp tường',
                'Hệ thống lọc nước'
            ]
        }
    ];

    const savingTips = [
        'Giữ lại khung tủ cũ nếu còn tốt, chỉ thay cánh tủ',
        'Chọn thiết bị bếp combo để tiết kiệm',
        'Tự thi công phần sơn tường đơn giản',
        'Mua thiết bị trong đợt khuyến mãi',
        'Chọn vật liệu trong nước chất lượng cao'
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
                        <span>Cải tạo phòng bếp</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-utensils"></i>
                        Chi Phí Cải Tạo Phòng Bếp Hiện Đại
                    </h1>
                    <p className="detail-subtitle">
                        Giải pháp nâng cấp không gian bếp với mức giá phải chăng
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Phòng bếp không chỉ là nơi nấu nướng mà còn là không gian sum họp gia đình. 
                            Một phòng bếp được cải tạo đẹp và tiện nghi sẽ giúp việc nấu ăn trở nên thú vị 
                            và tăng giá trị cho ngôi nhà.
                        </p>
                        <p>
                            <strong>LinHome</strong> cung cấp giải pháp cải tạo phòng bếp toàn diện với 
                            nhiều mức giá phù hợp, từ tiết kiệm đến cao cấp.
                        </p>
                    </div>
                </div>
            </section>

            {/* Kitchen Layouts */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Các Kiểu Bố Trí Phòng Bếp</h2>
                    
                    <div className="layout-selector">
                        <div className="layout-tabs">
                            {Object.entries(kitchenLayouts).map(([key, layout]) => (
                                <button
                                    key={key}
                                    className={`layout-tab ${selectedLayout === key ? 'active' : ''}`}
                                    onClick={() => setSelectedLayout(key)}
                                >
                                    {layout.name}
                                </button>
                            ))}
                        </div>
                        
                        <div className="layout-content">
                            <h3>{kitchenLayouts[selectedLayout].name}</h3>
                            <p className="layout-desc">{kitchenLayouts[selectedLayout].description}</p>
                            <div className="layout-price">
                                Chi phí tủ bếp: {kitchenLayouts[selectedLayout].price}
                            </div>
                            <h4>Ưu điểm:</h4>
                            <ul className="layout-advantages">
                                {kitchenLayouts[selectedLayout].advantages.map((adv, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {adv}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Pricing */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Chi Tiết Cải Tạo Phòng Bếp</h2>
                    
                    <div className="renovation-categories">
                        {renovationItems.map((category, index) => (
                            <div key={index} className="category-block">
                                <h3 className="category-header">
                                    <i className="fas fa-layer-group"></i>
                                    {category.category}
                                </h3>
                                <div className="items-table">
                                    <table>
                                        <tbody>
                                            {category.items.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="item-name">{item.name}</td>
                                                    <td className="item-note">{item.note}</td>
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

            {/* Budget Plans */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Gói Cải Tạo Theo Ngân Sách</h2>
                    
                    <div className="budget-grid">
                        {budgetPlans.map((plan, index) => (
                            <div key={index} className="budget-card">
                                <div className="budget-header">
                                    <i className={plan.icon}></i>
                                    <h3>{plan.level}</h3>
                                </div>
                                <div className="budget-price">{plan.total}</div>
                                <h4>Bao gồm:</h4>
                                <ul className="budget-includes">
                                    {plan.includes.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary">
                                    Xem Chi Tiết
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Quy Trình Cải Tạo Phòng Bếp</h2>
                    
                    <div className="process-steps">
                        {[
                            { number: '1', title: 'Khảo sát & Đo đạc', desc: 'Kiểm tra hiện trạng, đo kích thước' },
                            { number: '2', title: 'Thiết kế 3D', desc: 'Bản vẽ chi tiết và hình ảnh 3D' },
                            { number: '3', title: 'Chọn vật liệu', desc: 'Tư vấn và lựa chọn vật liệu phù hợp' },
                            { number: '4', title: 'Thi công', desc: 'Tháo dỡ cũ, lắp đặt mới' },
                            { number: '5', title: 'Hoàn thiện', desc: 'Lắp thiết bị, dọn dẹp' },
                            { number: '6', title: 'Bàn giao', desc: 'Nghiệm thu và hướng dẫn sử dụng' }
                        ].map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="process-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Saving Tips */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="tips-box">
                        <h2>Mẹo Tiết Kiệm Chi Phí Cải Tạo Bếp</h2>
                        <ul className="saving-tips-list">
                            {savingTips.map((tip, index) => (
                                <li key={index}>
                                    <i className="fas fa-lightbulb"></i>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Sẵn Sàng Cải Tạo Phòng Bếp?</h2>
                        <p>
                            LinHome cam kết mang đến không gian bếp hiện đại, tiện nghi với chi phí hợp lý nhất.
                            Liên hệ ngay để được tư vấn miễn phí!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Hotline: 0941 090 333
                            </a>
                            <a href="/lien-he" className="btn btn-secondary">
                                <i className="fas fa-calendar-check"></i>
                                Đặt Lịch Tư Vấn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .layout-selector {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .layout-tabs {
                    display: flex;
                    background: #f7fafc;
                    border-bottom: 2px solid #e2e8f0;
                }

                .layout-tab {
                    flex: 1;
                    padding: 1rem;
                    background: none;
                    border: none;
                    font-weight: 600;
                    color: #4a5568;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .layout-tab.active {
                    background: white;
                    color: #667eea;
                    border-bottom: 3px solid #667eea;
                    margin-bottom: -2px;
                }

                .layout-content {
                    padding: 2rem;
                }

                .layout-desc {
                    color: #4a5568;
                    margin-bottom: 1rem;
                }

                .layout-price {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #667eea;
                    margin-bottom: 1.5rem;
                }

                .layout-advantages {
                    list-style: none;
                }

                .layout-advantages li {
                    padding: 0.3rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .layout-advantages i {
                    color: #10b981;
                }

                .renovation-categories {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .category-block {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .category-header {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 1rem 1.5rem;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .items-table {
                    padding: 1rem;
                }

                .items-table table {
                    width: 100%;
                }

                .items-table td {
                    padding: 0.75rem;
                    border-bottom: 1px solid #e2e8f0;
                }

                .item-note {
                    color: #718096;
                    font-size: 0.9rem;
                }

                .budget-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .budget-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    text-align: center;
                    transition: all 0.3s;
                }

                .budget-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
                }

                .budget-header i {
                    font-size: 3rem;
                    color: #667eea;
                    margin-bottom: 0.5rem;
                }

                .budget-header h3 {
                    margin: 0;
                    color: #2d3748;
                }

                .budget-price {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #764ba2;
                    margin: 1rem 0 1.5rem;
                }

                .budget-includes {
                    list-style: none;
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                .budget-includes li {
                    padding: 0.3rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #4a5568;
                }

                .budget-includes i {
                    color: #10b981;
                    font-size: 0.9rem;
                }

                .tips-box {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .tips-box h2 {
                    color: #2d3748;
                    margin-bottom: 2rem;
                }

                .saving-tips-list {
                    list-style: none;
                    max-width: 600px;
                    margin: 0 auto;
                    text-align: left;
                }

                .saving-tips-list li {
                    padding: 0.75rem 0;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: #4a5568;
                    border-bottom: 1px solid #e2e8f0;
                }

                .saving-tips-list li:last-child {
                    border-bottom: none;
                }

                .saving-tips-list i {
                    color: #f59e0b;
                    margin-top: 0.2rem;
                }

                @media (max-width: 768px) {
                    .layout-tabs {
                        flex-wrap: wrap;
                    }

                    .layout-tab {
                        flex: 1 1 50%;
                    }

                    .items-table {
                        overflow-x: auto;
                    }

                    .items-table td {
                        font-size: 0.9rem;
                    }

                    .budget-grid {
                        grid-template-columns: 1fr;
                    }

                    .budget-price {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default CaiTaoPhongBep;
