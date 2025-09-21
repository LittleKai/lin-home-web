// src/components/sections/PortfolioSection/PortfolioSection.js
import React, { useState, useEffect } from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('Tất cả');

    const filters = ['Tất cả', 'Biệt thự', 'Nhà phố', 'Nội thất', 'Sân vườn'];

    // Static projects data
    const staticProjects = [
        {
            _id: '1',
            title: 'Biệt thự hiện đại Vinhomes',
            category: 'Biệt thự',
            description: 'Thiết kế biệt thự 2 tầng phong cách hiện đại với sân vườn rộng rãi.',
            area: 350,
            location: 'Vinhomes Central Park, TP.HCM',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="villa" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23villa)"/><rect x="50" y="100" width="300" height="120" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="70" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="130" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="190" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="250" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="310" y="140" width="20" height="40" fill="%23d69e2e" rx="2"/><polygon points="50,100 200,50 350,100" fill="rgba(255,255,255,0.8)"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Biệt thự hiện đại</text></svg>',
                alt: 'Biệt thự hiện đại Vinhomes'
            }]
        },
        {
            _id: '2',
            title: 'Nhà phố 3 tầng',
            category: 'Nhà phố',
            description: 'Thiết kế nhà phố 3 tầng tối ưu diện tích với ánh sáng tự nhiên.',
            area: 120,
            location: 'Quận 7, TP.HCM',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="townhouse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23townhouse)"/><rect x="100" y="80" width="200" height="150" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="120" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="220" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="120" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="220" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="120" y="180" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="180" width="30" height="30" fill="%23667eea" rx="4"/><rect x="260" y="190" width="20" height="40" fill="%23d69e2e" rx="2"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nhà phố 3 tầng</text></svg>',
                alt: 'Nhà phố 3 tầng'
            }]
        },
        {
            _id: '3',
            title: 'Nội thất phòng khách sang trọng',
            category: 'Nội thất',
            description: 'Thiết kế nội thất phòng khách phong cách luxury với tone màu ấm áp.',
            area: 80,
            location: 'Landmark 81, TP.HCM',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="interior" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23interior)"/><rect x="50" y="50" width="300" height="180" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="70" y="150" width="80" height="40" fill="%23d69e2e" rx="8"/><rect x="170" y="150" width="80" height="40" fill="%23d69e2e" rx="8"/><rect x="270" y="150" width="60" height="60" fill="%23667eea" rx="8"/><rect x="80" y="80" width="200" height="4" fill="%23667eea" rx="2"/><circle cx="120" cy="100" r="8" fill="%23764ba2"/><circle cx="200" cy="100" r="8" fill="%23764ba2"/><circle cx="280" cy="100" r="8" fill="%23764ba2"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nội thất sang trọng</text></svg>',
                alt: 'Nội thất phòng khách sang trọng'
            }]
        },
        {
            _id: '4',
            title: 'Villa cao cấp Đà Lạt',
            category: 'Biệt thự',
            description: 'Villa nghỉ dưỡng với thiết kế hòa hợp cùng thiên nhiên Đà Lạt.',
            area: 500,
            location: 'Đà Lạt, Lâm Đồng',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="dalat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23dalat)"/><circle cx="100" cy="60" r="20" fill="rgba(255,215,0,0.8)"/><rect x="50" y="120" width="300" height="100" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="80" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="140" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="200" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="260" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="320" y="160" width="15" height="30" fill="%23d69e2e" rx="2"/><polygon points="50,120 200,80 350,120" fill="rgba(139,69,19,0.8)"/><ellipse cx="120" cy="240" rx="30" ry="8" fill="rgba(34,197,94,0.6)"/><ellipse cx="280" cy="240" rx="40" ry="10" fill="rgba(34,197,94,0.6)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Villa Đà Lạt</text></svg>',
                alt: 'Villa cao cấp Đà Lạt'
            }]
        },
        {
            _id: '5',
            title: 'Sân vườn Nhật Bản',
            category: 'Sân vườn',
            description: 'Thiết kế sân vườn phong cách Zen với hồ koi và cây cảnh.',
            area: 200,
            location: 'Thảo Điền, TP.HCM',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="garden" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23garden)"/><ellipse cx="200" cy="180" rx="80" ry="40" fill="rgba(59,130,246,0.8)"/><circle cx="180" cy="170" r="4" fill="%23f97316"/><circle cx="220" cy="190" r="4" fill="%23f97316"/><circle cx="200" cy="180" r="3" fill="%23ef4444"/><rect x="50" y="200" width="8" height="60" fill="%238b4513"/><ellipse cx="54" cy="190" rx="20" ry="15" fill="rgba(34,197,94,0.8)"/><rect x="320" y="180" width="8" height="80" fill="%238b4513"/><ellipse cx="324" cy="170" rx="25" ry="20" fill="rgba(34,197,94,0.8)"/><rect x="150" y="120" width="100" height="40" fill="rgba(139,69,19,0.6)" rx="8"/><path d="M 100 240 Q 200 220 300 240" stroke="rgba(156,163,175,0.8)" stroke-width="3" fill="none"/><circle cx="80" cy="100" r="15" fill="rgba(255,255,255,0.3)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Sân vườn Nhật Bản</text></svg>',
                alt: 'Sân vườn Nhật Bản'
            }]
        },
        {
            _id: '6',
            title: 'Nhà hàng hiện đại',
            category: 'Nội thất',
            description: 'Thiết kế nội thất nhà hàng phong cách industrial chic.',
            area: 300,
            location: 'Quận 1, TP.HCM',
            images: [{
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="restaurant" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23restaurant)"/><rect x="50" y="50" width="300" height="180" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="80" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="140" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="200" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="260" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="70" y="150" width="20" height="60" fill="%238b4513"/><rect x="130" y="150" width="20" height="60" fill="%238b4513"/><rect x="190" y="150" width="20" height="60" fill="%238b4513"/><rect x="250" y="150" width="20" height="60" fill="%238b4513"/><rect x="65" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="125" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="185" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="245" y="145" width="30" height="8" fill="%23667eea" rx="4"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nhà hàng hiện đại</text></svg>',
                alt: 'Nhà hàng hiện đại'
            }]
        }
    ];

    useEffect(() => {
        const loadProjects = () => {
            setTimeout(() => {
                setProjects(staticProjects);
                setLoading(false);
            }, 800); // Simulate loading time
        };

        loadProjects();
    }, []);

    const handleProjectClick = (project) => {
        // Handle project click - could navigate to detail page
        alert(`Xem chi tiết: ${project.title}`);
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === 'Tất cả'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    if (loading) {
        return (
            <section className="portfolio">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Dự án tiêu biểu</div>
                        <h2 className="section-title">Portfolio của chúng tôi</h2>
                    </div>
                    <div className="portfolio-grid">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="portfolio-item loading">
                                <div className="portfolio-image skeleton"></div>
                                <div className="portfolio-info">
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="portfolio">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Dự án tiêu biểu</div>
                    <h2 className="section-title">Portfolio của chúng tôi</h2>
                    <p className="section-subtitle">
                        Khám phá những dự án đã thực hiện với chất lượng và
                        sự sáng tạo không ngừng
                    </p>
                </div>

                <div className="portfolio-filters">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => handleFilterChange(filter)}
                            aria-label={`Lọc theo ${filter}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <article key={project._id} className="portfolio-item">
                            <div className="portfolio-image">
                                <img
                                    src={project.images?.[0]?.url || project.image}
                                    alt={project.images?.[0]?.alt || project.title}
                                    loading="lazy"
                                />
                                {project.area && (
                                    <div className="project-area">
                                        <span>{project.area}m²</span>
                                    </div>
                                )}
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-category">{project.category}</div>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                {project.location && (
                                    <div className="project-location">
                                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                        <span>{project.location}</span>
                                    </div>
                                )}
                                <button
                                    className="feature-link"
                                    onClick={() => handleProjectClick(project)}
                                    aria-label={`Xem chi tiết dự án ${project.title}`}
                                >
                                    Xem chi tiết
                                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && !loading && (
                    <div className="no-projects">
                        <p>Không có dự án nào trong danh mục này.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioSection;