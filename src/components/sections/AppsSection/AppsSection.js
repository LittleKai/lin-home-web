// src/components/sections/AppsSection/AppsSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppsSection.css';

const AppsSection = () => {
    const navigate = useNavigate();
    const [expandedApp, setExpandedApp] = useState(null);

    const appsList = [
        {
            id: 'tinh-chi-phi',
            title: 'Ứng dụng Tính chi phí xây dựng',
            shortTitle: 'Tính chi phí',
            description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%, đơn giá thi công xây dựng được cập nhật thường xuyên theo tỉnh thành. Là ứng dụng dự toán thông minh, sau khi có kết quả sẽ gợi ý các công trình phù hợp với yêu cầu của chủ đầu tư.',
            icon: 'fa-calculator',
            color: '#667eea',
            route: '/ung-dung/tinh-chi-phi-xay-dung',
            features: ['Độ chính xác trên 95%', 'Cập nhật đơn giá theo tỉnh thành', 'Gợi ý công trình phù hợp']
        },
        {
            id: 'tuoi-lam-nha',
            title: 'Ứng dụng xem Tuổi làm nhà',
            shortTitle: 'Tuổi làm nhà',
            description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không. Nên tránh phạm vào 3 năm: Kim Lâu, Hoang Ốc, Tam Tai. Cả đời một con người chỉ còn lại khoảng 17 năm để có thể tiến hành động thổ.',
            icon: 'fa-calendar-alt',
            color: '#10b981',
            route: '/ung-dung/xem-tuoi-lam-nha',
            features: ['Tránh Kim Lâu, Hoang Ốc, Tam Tai', 'Khoảng 17 năm hợp động thổ', 'Phong thủy thuận lợi']
        },
        {
            id: 'thuoc-lo-ban',
            title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
            shortTitle: 'Thước lỗ ban',
            description: 'Thước lỗ ban là thước sử dụng đo đạc xây dựng Dương Trạch (nhà cửa) và Âm Trạch (mộ phần). Trên thước lỗ ban có chia kích thước địa lý thông thường và các cung giúp phân định các khoảng tốt xấu. Giúp người sử dụng biết được kích thước thế nào là đẹp nên sử dụng.',
            icon: 'fa-ruler',
            color: '#f59e0b',
            route: '/ung-dung/thuoc-lo-ban',
            features: ['Đo Dương Trạch & Âm Trạch', 'Phân định kích thước tốt xấu', 'Hướng dẫn sử dụng chi tiết']
        },
        {
            id: 'huong-nha',
            title: 'Ứng dụng xem Hướng nhà hợp tuổi',
            shortTitle: 'Hướng nhà',
            description: 'Xem hướng hợp với tuổi là một phần quan trọng trong thuật phong thuỷ, một ngôi nhà tốt sẽ mang tới may mắn, thịnh vượng và sung túc cho gia chủ suốt cuộc đời. Xem hướng nhà theo tuổi là một trong những yếu tố để đảm bảo ngôi nhà hợp phong thủy, mang lại cát lợi.',
            icon: 'fa-compass',
            color: '#8b5cf6',
            route: '/ung-dung/huong-nha-hop-tuoi',
            features: ['Hướng nhà theo tuổi', 'Phong thủy cát lợi', 'May mắn thịnh vượng']
        },
        {
            id: 'mau-hop-tuoi',
            title: 'Ứng dụng xem Màu hợp tuổi',
            shortTitle: 'Màu hợp tuổi',
            description: 'Bên cạnh các yếu tố như bố cục, phương hướng, bố trí không gian, chức năng… thì màu sắc của ngôi nhà cũng ảnh hưởng không nhỏ tới môi trường nhà ở. Theo quan điểm phong thủy, màu sắc hình thành các trường năng lượng khác nhau, tương sinh hoặc tương khắc với bản mệnh theo ngũ hành.',
            icon: 'fa-palette',
            color: '#ec4899',
            route: '/ung-dung/mau-hop-tuoi',
            features: ['Màu sắc theo ngũ hành', 'Tương sinh tương khắc', 'Năng lượng tích cực']
        }
    ];

    // Handle app click - navigate to app page
    const handleAppClick = (app, event) => {
        event.preventDefault();
        if (app.route) {
            navigate(app.route);
        }
    };

    // Toggle app details
    const toggleAppDetails = (appId, event) => {
        event.stopPropagation();
        setExpandedApp(expandedApp === appId ? null : appId);
    };

    return (
        <section className="apps">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Công cụ hỗ trợ</div>
                    <h2 className="section-title">Ứng dụng tiện ích</h2>
                    <p className="section-subtitle">
                        Bộ công cụ toàn diện hỗ trợ khách hàng trong quá trình
                        thiết kế và xây dựng ngôi nhà
                    </p>
                </div>

                <div className="apps-grid">
                    {appsList.map((app) => (
                        <article
                            key={app.id}
                            className={`app-card ${expandedApp === app.id ? 'expanded' : ''}`}
                            onClick={(e) => handleAppClick(app, e)}
                        >
                            <div className="app-icon" style={{ backgroundColor: app.color }}>
                                <i className={`fas ${app.icon}`} aria-hidden="true"></i>
                            </div>

                            <div className="app-content">
                                <h3>
                                    <button
                                        onClick={(e) => handleAppClick(app, e)}
                                        aria-label={`Mở ứng dụng ${app.title}`}
                                        aria-describedby={`app-description-${app.id}`}
                                    >
                                        {app.title}
                                        <i className="fas fa-external-link-alt app-link-icon" aria-hidden="true"></i>
                                    </button>
                                </h3>

                                <p id={`app-description-${app.id}`} className="app-description">
                                    {app.description}
                                </p>

                                {/* Toggle button for features */}
                                <button
                                    className="app-details-toggle"
                                    onClick={(e) => toggleAppDetails(app.id, e)}
                                    aria-expanded={expandedApp === app.id}
                                    aria-controls={`app-features-${app.id}`}
                                >
                                    <span>{expandedApp === app.id ? 'Ẩn' : 'Xem'} tính năng</span>
                                    <i className={`fas fa-chevron-${expandedApp === app.id ? 'up' : 'down'}`} aria-hidden="true"></i>
                                </button>

                                {/* App features dropdown */}
                                <div
                                    id={`app-features-${app.id}`}
                                    className={`app-features ${expandedApp === app.id ? 'expanded' : ''}`}
                                    aria-hidden={expandedApp !== app.id}
                                >
                                    <ul>
                                        {app.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check" aria-hidden="true"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="apps-cta">
                    <h3>Khám phá ngay các ứng dụng tiện ích</h3>
                    <p>Trải nghiệm bộ công cụ hỗ trợ thiết kế và xây dựng hoàn toàn miễn phí</p>
                    <button
                        className="cta-button"
                        onClick={() => navigate('/ung-dung')}
                        aria-label="Xem tất cả ứng dụng"
                    >
                        Xem tất cả ứng dụng
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AppsSection;