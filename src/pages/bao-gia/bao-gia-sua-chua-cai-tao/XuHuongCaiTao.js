// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/XuHuongCaiTao.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const XuHuongCaiTao = () => {
    const [selectedTrend, setSelectedTrend] = useState(0);

    const trends2025 = [
        {
            id: 'open-space',
            title: 'Không gian mở & Tối ưu ánh sáng tự nhiên',
            icon: 'fas fa-sun',
            color: '#f59e0b',
            description: 'Xu hướng phá bỏ vách ngăn, tạo không gian thông thoáng và tràn ngập ánh sáng',
            features: [
                'Phòng khách liên thông bếp, hạn chế vách ngăn cứng',
                'Sử dụng cửa kính lớn, giếng trời, giếng thông gió',
                'Màu sơn sáng và trần cao giúp ngôi nhà rộng rãi hơn'
            ],
            benefits: 'Tiết kiệm điện chiếu sáng, tạo cảm giác thoải mái',
            suitable: 'Nhà phố, căn hộ có diện tích vừa và nhỏ'
        },
        {
            id: 'eco-friendly',
            title: 'Vật liệu xanh & Thân thiện môi trường',
            icon: 'fas fa-leaf',
            color: '#10b981',
            description: 'Ưu tiên vật liệu bền vững, an toàn cho sức khỏe và môi trường',
            features: [
                'Gạch không nung, sơn sinh thái, gỗ tái chế',
                'Ưu tiên vật liệu tiết kiệm năng lượng, an toàn sức khỏe',
                'Lát sàn bằng tre ép, gỗ công nghiệp chống ẩm'
            ],
            benefits: 'Giảm tác động môi trường, an toàn cho gia đình',
            suitable: 'Mọi loại công trình, đặc biệt nhà có trẻ nhỏ'
        },
        {
            id: 'smart-furniture',
            title: 'Nội thất thông minh, đa công năng',
            icon: 'fas fa-cube',
            color: '#667eea',
            description: 'Tối ưu không gian với nội thất có nhiều chức năng',
            features: [
                'Giường kết hợp tủ kéo, bàn gấp gọn, sofa giường',
                'Tủ âm tường giúp tiết kiệm diện tích',
                'Ứng dụng cơ khí thông minh: ray trượt, bản lề giảm chấn'
            ],
            benefits: 'Tối ưu diện tích, linh hoạt sử dụng',
            suitable: 'Căn hộ nhỏ, phòng đa năng'
        },
        {
            id: 'smart-home',
            title: 'Ứng dụng công nghệ nhà thông minh',
            icon: 'fas fa-microchip',
            color: '#3b82f6',
            description: 'Tích hợp công nghệ IoT vào không gian sống',
            features: [
                'Hệ thống đèn, rèm, điều hòa điều khiển bằng smartphone/giọng nói',
                'Camera an ninh, khóa cửa vân tay',
                'Thiết bị điện tiết kiệm năng lượng, kết nối IoT'
            ],
            benefits: 'Tiện nghi, an toàn, tiết kiệm năng lượng',
            suitable: 'Nhà cao cấp, căn hộ hiện đại'
        },
        {
            id: 'minimalist',
            title: 'Phong cách tối giản & Bắc Âu',
            icon: 'fas fa-mountain',
            color: '#6b7280',
            description: 'Đơn giản hóa không gian, tập trung vào công năng',
            features: [
                'Loại bỏ chi tiết rườm rà, tập trung vào công năng',
                'Gam màu trung tính: trắng, be, xám',
                'Kết hợp ánh sáng tự nhiên và nội thất gỗ sáng màu'
            ],
            benefits: 'Dễ dàng vệ sinh, tạo cảm giác thư thái',
            suitable: 'Mọi không gian, đặc biệt người yêu thích sự đơn giản'
        },
        {
            id: 'green-space',
            title: 'Cải tạo ban công, sân thượng xanh',
            icon: 'fas fa-seedling',
            color: '#059669',
            description: 'Biến không gian ngoài trời thành khu vườn mini',
            features: [
                'Trang trí cây xanh, vườn nhỏ, giàn hoa',
                'Bố trí bàn ghế tạo góc "chill" thư giãn',
                'Sử dụng vật liệu ngoài trời bền bỉ, chống thấm'
            ],
            benefits: 'Cải thiện không khí, tạo không gian thư giãn',
            suitable: 'Nhà có ban công, sân thượng'
        }
    ];

    const trendApplications = [
        {
            space: 'Phòng khách',
            applications: [
                'Không gian mở với bếp',
                'Sofa đa năng, bàn coffee thông minh',
                'Hệ thống đèn LED điều khiển',
                'Tường kính lớn lấy sáng'
            ]
        },
        {
            space: 'Phòng bếp',
            applications: [
                'Đảo bếp đa chức năng',
                'Tủ bếp thông minh với ngăn kéo êm',
                'Thiết bị bếp kết nối IoT',
                'Vật liệu dễ vệ sinh, kháng khuẩn'
            ]
        },
        {
            space: 'Phòng ngủ',
            applications: [
                'Giường có ngăn chứa đồ',
                'Rèm tự động điều khiển',
                'Ánh sáng điều chỉnh theo giờ sinh học',
                'Vật liệu cách âm, cách nhiệt'
            ]
        },
        {
            space: 'Phòng tắm',
            applications: [
                'Smart toilet với nhiều chức năng',
                'Gương thông minh có đèn LED',
                'Sen tắm tiết kiệm nước',
                'Gạch chống trượt, kháng khuẩn'
            ]
        }
    ];

    const costComparison = [
        { trend: 'Không gian mở', basic: '5-10%', premium: '15-25%' },
        { trend: 'Vật liệu xanh', basic: '10-15%', premium: '20-30%' },
        { trend: 'Nội thất thông minh', basic: '15-20%', premium: '25-40%' },
        { trend: 'Smart Home', basic: '20-30%', premium: '40-60%' },
        { trend: 'Phong cách tối giản', basic: '0-5%', premium: '10-15%' },
        { trend: 'Không gian xanh', basic: '5-10%', premium: '15-20%' }
    ];

    const implementationTips = [
        {
            icon: 'fas fa-pencil-ruler',
            title: 'Lập kế hoạch chi tiết',
            desc: 'Xác định rõ xu hướng phù hợp với nhu cầu và ngân sách'
        },
        {
            icon: 'fas fa-balance-scale',
            title: 'Cân bằng thẩm mỹ & công năng',
            desc: 'Đừng chạy theo xu hướng mà quên đi tính thực dụng'
        },
        {
            icon: 'fas fa-dollar-sign',
            title: 'Đầu tư thông minh',
            desc: 'Ưu tiên những xu hướng mang lại giá trị lâu dài'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Tư vấn chuyên gia',
            desc: 'Làm việc với kiến trúc sư để tối ưu thiết kế'
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
                        <span>Xu hướng cải tạo 2025</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-lightbulb"></i>
                        Xu Hướng Sửa Chữa - Cải Tạo Nhà 2025
                    </h1>
                    <p className="detail-subtitle">
                        Hiện đại, thông minh và bền vững - Cập nhật xu hướng thiết kế mới nhất
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Năm 2025 đánh dấu sự thay đổi mạnh mẽ trong xu hướng thiết kế và cải tạo nhà ở. 
                            Người dùng ngày càng quan tâm đến công năng – thẩm mỹ – công nghệ – tính bền vững. 
                        </p>
                        <p>
                            Dưới đây là những xu hướng sửa chữa – cải tạo nhà nổi bật 2025, giúp bạn nắm bắt 
                            để có không gian sống tiện nghi, đẳng cấp và lâu bền.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Trends */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">6 Xu Hướng Nổi Bật 2025</h2>
                    
                    <div className="trends-showcase">
                        <div className="trends-selector">
                            {trends2025.map((trend, index) => (
                                <button
                                    key={index}
                                    className={`trend-button ${selectedTrend === index ? 'active' : ''}`}
                                    onClick={() => setSelectedTrend(index)}
                                    style={{ borderColor: selectedTrend === index ? trend.color : 'transparent' }}
                                >
                                    <i className={trend.icon} style={{ color: trend.color }}></i>
                                    <span>{trend.title}</span>
                                </button>
                            ))}
                        </div>

                        <div className="trend-detail">
                            <div className="trend-header" style={{ background: `linear-gradient(135deg, ${trends2025[selectedTrend].color}20, ${trends2025[selectedTrend].color}10)` }}>
                                <i className={trends2025[selectedTrend].icon} style={{ color: trends2025[selectedTrend].color }}></i>
                                <div>
                                    <h3>{trends2025[selectedTrend].title}</h3>
                                    <p>{trends2025[selectedTrend].description}</p>
                                </div>
                            </div>
                            
                            <div className="trend-content">
                                <h4>Đặc điểm chính:</h4>
                                <ul>
                                    {trends2025[selectedTrend].features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check" style={{ color: trends2025[selectedTrend].color }}></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="trend-info">
                                    <div className="info-item">
                                        <strong>Lợi ích:</strong>
                                        <span>{trends2025[selectedTrend].benefits}</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Phù hợp với:</strong>
                                        <span>{trends2025[selectedTrend].suitable}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application by Space */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ứng Dụng Theo Không Gian</h2>
                    
                    <div className="application-grid">
                        {trendApplications.map((app, index) => (
                            <div key={index} className="application-card">
                                <h3>{app.space}</h3>
                                <ul>
                                    {app.applications.map((item, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-arrow-right"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Impact */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Tác Động Đến Chi Phí</h2>
                    <p className="section-subtitle">
                        Mức tăng chi phí so với cải tạo thông thường
                    </p>
                    
                    <div className="cost-table-container">
                        <table className="trend-cost-table">
                            <thead>
                                <tr>
                                    <th>Xu hướng</th>
                                    <th>Mức cơ bản</th>
                                    <th>Mức cao cấp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.trend}</td>
                                        <td className="cost-basic">+{item.basic}</td>
                                        <td className="cost-premium">+{item.premium}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="table-note">
                            <i className="fas fa-info-circle"></i>
                            Chi phí có thể thay đổi tùy theo quy mô và yêu cầu cụ thể
                        </p>
                    </div>
                </div>
            </section>

            {/* Implementation Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lời Khuyên Khi Áp Dụng Xu Hướng</h2>
                    
                    <div className="tips-grid">
                        {implementationTips.map((tip, index) => (
                            <div key={index} className="implementation-tip">
                                <div className="tip-icon">
                                    <i className={tip.icon}></i>
                                </div>
                                <h4>{tip.title}</h4>
                                <p>{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Outlook */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="future-outlook">
                        <h2>Tầm Nhìn Tương Lai</h2>
                        <p>
                            Xu hướng cải tạo nhà 2025 không chỉ là làm đẹp không gian mà còn hướng tới 
                            sự bền vững, thông minh và thân thiện với môi trường. Đầu tư vào những xu hướng 
                            này không chỉ nâng cao chất lượng sống mà còn tăng giá trị bất động sản trong tương lai.
                        </p>
                        <div className="outlook-stats">
                            <div className="stat">
                                <h3>70%</h3>
                                <p>Khách hàng quan tâm đến vật liệu xanh</p>
                            </div>
                            <div className="stat">
                                <h3>85%</h3>
                                <p>Ưu tiên không gian đa năng</p>
                            </div>
                            <div className="stat">
                                <h3>60%</h3>
                                <p>Sẵn sàng đầu tư cho Smart Home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Bắt Kịp Xu Hướng Cùng LinHome</h2>
                        <p>
                            LinHome luôn cập nhật xu hướng mới nhất để mang đến giải pháp cải tạo 
                            hiện đại và phù hợp nhất cho ngôi nhà của bạn. Hãy liên hệ ngay!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Tư Vấn: 0941 090 333
                            </a>
                            <a href="/du-an" className="btn btn-secondary">
                                <i className="fas fa-images"></i>
                                Xem Dự Án Mẫu
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .trends-showcase {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

                .trends-selector {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .trend-button {
                    padding: 1rem;
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-align: left;
                }

                .trend-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .trend-button.active {
                    background: #f7fafc;
                    border-width: 2px;
                }

                .trend-button i {
                    font-size: 1.5rem;
                }

                .trend-button span {
                    flex: 1;
                    font-weight: 600;
                    color: #2d3748;
                    font-size: 0.9rem;
                }

                .trend-detail {
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .trend-header {
                    padding: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .trend-header i {
                    font-size: 3rem;
                }

                .trend-header h3 {
                    margin: 0 0 0.5rem 0;
                    color: #2d3748;
                }

                .trend-header p {
                    margin: 0;
                    color: #4a5568;
                }

                .trend-content {
                    padding: 1.5rem;
                }

                .trend-content h4 {
                    margin-bottom: 1rem;
                    color: #2d3748;
                }

                .trend-content ul {
                    list-style: none;
                    margin-bottom: 1.5rem;
                }

                .trend-content li {
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                }

                .trend-content i {
                    margin-top: 0.1rem;
                }

                .trend-info {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e2e8f0;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .info-item strong {
                    color: #2d3748;
                }

                .info-item span {
                    color: #4a5568;
                }

                .application-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .application-card {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .application-card h3 {
                    color: #667eea;
                    margin-bottom: 1rem;
                }

                .application-card ul {
                    list-style: none;
                }

                .application-card li {
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #4a5568;
                }

                .application-card i {
                    color: #10b981;
                    font-size: 0.8rem;
                }

                .trend-cost-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .trend-cost-table th {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 1rem;
                    text-align: left;
                }

                .trend-cost-table td {
                    padding: 1rem;
                    border-bottom: 1px solid #e2e8f0;
                }

                .cost-basic {
                    color: #10b981;
                    font-weight: 600;
                }

                .cost-premium {
                    color: #f59e0b;
                    font-weight: 600;
                }

                .implementation-tip {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    text-align: center;
                }

                .tip-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }

                .tip-icon i {
                    font-size: 1.5rem;
                    color: white;
                }

                .implementation-tip h4 {
                    margin-bottom: 0.5rem;
                    color: #2d3748;
                }

                .implementation-tip p {
                    color: #4a5568;
                    margin: 0;
                }

                .future-outlook {
                    background: white;
                    border-radius: 12px;
                    padding: 3rem;
                    text-align: center;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

                .future-outlook h2 {
                    color: #2d3748;
                    margin-bottom: 1.5rem;
                }

                .future-outlook > p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #4a5568;
                    margin-bottom: 2rem;
                }

                .outlook-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .stat {
                    text-align: center;
                }

                .stat h3 {
                    font-size: 2.5rem;
                    color: #667eea;
                    margin-bottom: 0.5rem;
                }

                .stat p {
                    color: #4a5568;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .trends-selector {
                        grid-template-columns: 1fr;
                    }

                    .trend-header {
                        flex-direction: column;
                        text-align: center;
                    }

                    .application-grid {
                        grid-template-columns: 1fr;
                    }

                    .trend-cost-table {
                        font-size: 0.9rem;
                    }

                    .outlook-stats {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .future-outlook {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default XuHuongCaiTao;
