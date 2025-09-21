import React, { useState } from 'react';
import './MainContent.css';
import { menuData, contactInfo } from '../../data/menuData';

const MainContent = ({ activeSection, setActiveSection }) => {
    const [activeFilter, setActiveFilter] = useState('Tất cả');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    // Hero Section Component
    const HeroSection = () => (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-star"></i>
                        Hơn 10+ dự án thành công
                    </div>
                    <h1>Kiến Trúc Xây Dựng Hiện Đại</h1>
                    <p>
                        Thiết kế và thi công trọn gói với chất lượng tốt nhất.
                        Biến ước mơ ngôi nhà của bạn thành hiện thực với đội ngũ
                        kiến trúc sư và kỹ sư giàu kinh nghiệm.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => setActiveSection('portfolio')}>
                            <i className="fas fa-play"></i>
                            Xem portfolio
                        </button>
                        <button className="btn-secondary" onClick={() => setActiveSection('contact')}>
                            <i className="fas fa-phone"></i>
                            Liên hệ ngay
                        </button>
                    </div>
                </div>
                <div className="hero-image floating"></div>
            </div>
        </section>
    );

    // Features Section Component
    const FeaturesSection = () => {
        const features = [
            {
                icon: 'fa-drafting-compass',
                title: 'Thiết kế kiến trúc',
                description: 'Thiết kế các công trình từ nhà ở đến các dự án lớn với phong cách hiện đại và tiện nghi.',
                link: 'Xem chi tiết'
            },
            {
                icon: 'fa-hard-hat',
                title: 'Thi công xây dựng',
                description: 'Thi công trọn gói từ móng đến hoàn thiện với đội ngũ thợ lành nghề và giám sát chặt chẽ.',
                link: 'Xem chi tiết'
            },
            {
                icon: 'fa-home',
                title: 'Thiết kế nội thất',
                description: 'Tạo không gian sống hoàn hảo với các phong cách nội thất đa dạng và hiện đại.',
                link: 'Xem chi tiết'
            },
            {
                icon: 'fa-seedling',
                title: 'Thiết kế sân vườn',
                description: 'Thiết kế cảnh quan sân vườn xanh mát, hài hòa với thiên nhiên và kiến trúc tổng thể.',
                link: 'Xem chi tiết'
            },
            {
                icon: 'fa-calculator',
                title: 'Tư vấn báo giá',
                description: 'Báo giá minh bạch, chi tiết cho từng hạng mục công việc và vật tư xây dựng.',
                link: 'Xem chi tiết'
            },
            {
                icon: 'fa-tools',
                title: 'Sửa chữa cải tạo',
                description: 'Dịch vụ sửa chữa, cải tạo, nâng cấp các công trình hiện có một cách chuyên nghiệp.',
                link: 'Xem chi tiết'
            }
        ];

        return (
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Dịch vụ chuyên nghiệp</div>
                        <h2 className="section-title">Dịch vụ của chúng tôi</h2>
                        <p className="section-subtitle">
                            Cung cấp giải pháp toàn diện cho mọi nhu cầu xây dựng
                            từ thiết kế đến thi công hoàn thiện
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <i className={`fas ${feature.icon}`}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <button className="feature-link" onClick={() => alert(`Chuyển đến: ${feature.title}`)}>
                                    {feature.link}
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Portfolio Section Component
    const PortfolioSection = () => {
        const filters = ['Tất cả', 'Biệt thự', 'Nhà phố', 'Nội thất', 'Sân vườn'];

        const projects = [
            {
                title: 'Biệt thự hiện đại Vinhomes',
                category: 'Biệt thự',
                description: 'Thiết kế biệt thự 2 tầng phong cách hiện đại với sân vườn rộng rãi.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="villa" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23villa)"/><rect x="50" y="100" width="300" height="120" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="70" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="130" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="190" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="250" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="310" y="140" width="20" height="40" fill="%23d69e2e" rx="2"/><polygon points="50,100 200,50 350,100" fill="rgba(255,255,255,0.8)"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Biệt thự hiện đại</text></svg>'
            },
            {
                title: 'Nhà phố 3 tầng',
                category: 'Nhà phố',
                description: 'Thiết kế nhà phố 3 tầng tối ưu diện tích với ánh sáng tự nhiên.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="townhouse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23townhouse)"/><rect x="100" y="80" width="200" height="150" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="120" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="220" y="100" width="30" height="30" fill="%23667eea" rx="4"/><rect x="120" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="220" y="140" width="30" height="30" fill="%23667eea" rx="4"/><rect x="120" y="180" width="30" height="30" fill="%23667eea" rx="4"/><rect x="170" y="180" width="30" height="30" fill="%23667eea" rx="4"/><rect x="260" y="190" width="20" height="40" fill="%23d69e2e" rx="2"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nhà phố 3 tầng</text></svg>'
            },
            {
                title: 'Nội thất phòng khách sang trọng',
                category: 'Nội thất',
                description: 'Thiết kế nội thất phòng khách phong cách luxury với tone màu ấm áp.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="interior" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23interior)"/><rect x="50" y="50" width="300" height="180" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="70" y="150" width="80" height="40" fill="%23d69e2e" rx="8"/><rect x="170" y="150" width="80" height="40" fill="%23d69e2e" rx="8"/><rect x="270" y="150" width="60" height="60" fill="%23667eea" rx="8"/><rect x="80" y="80" width="200" height="4" fill="%23667eea" rx="2"/><circle cx="120" cy="100" r="8" fill="%23764ba2"/><circle cx="200" cy="100" r="8" fill="%23764ba2"/><circle cx="280" cy="100" r="8" fill="%23764ba2"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nội thất sang trọng</text></svg>'
            },
            {
                title: 'Villa cao cấp Đà Lạt',
                category: 'Biệt thự',
                description: 'Villa nghỉ dưỡng với thiết kế hòa hợp cùng thiên nhiên Đà Lạt.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="dalat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23dalat)"/><circle cx="100" cy="60" r="20" fill="rgba(255,215,0,0.8)"/><rect x="50" y="120" width="300" height="100" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="80" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="140" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="200" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="260" y="140" width="40" height="40" fill="%23667eea" rx="6"/><rect x="320" y="160" width="15" height="30" fill="%23d69e2e" rx="2"/><polygon points="50,120 200,80 350,120" fill="rgba(139,69,19,0.8)"/><ellipse cx="120" cy="240" rx="30" ry="8" fill="rgba(34,197,94,0.6)"/><ellipse cx="280" cy="240" rx="40" ry="10" fill="rgba(34,197,94,0.6)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Villa Đà Lạt</text></svg>'
            },
            {
                title: 'Sân vườn Nhật Bản',
                category: 'Sân vườn',
                description: 'Thiết kế sân vườn phong cách Zen với hồ koi và cây cảnh.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="garden" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23garden)"/><ellipse cx="200" cy="180" rx="80" ry="40" fill="rgba(59,130,246,0.8)"/><circle cx="180" cy="170" r="4" fill="%23f97316"/><circle cx="220" cy="190" r="4" fill="%23f97316"/><circle cx="200" cy="180" r="3" fill="%23ef4444"/><rect x="50" y="200" width="8" height="60" fill="%238b4513"/><ellipse cx="54" cy="190" rx="20" ry="15" fill="rgba(34,197,94,0.8)"/><rect x="320" y="180" width="8" height="80" fill="%238b4513"/><ellipse cx="324" cy="170" rx="25" ry="20" fill="rgba(34,197,94,0.8)"/><rect x="150" y="120" width="100" height="40" fill="rgba(139,69,19,0.6)" rx="8"/><path d="M 100 240 Q 200 220 300 240" stroke="rgba(156,163,175,0.8)" stroke-width="3" fill="none"/><circle cx="80" cy="100" r="15" fill="rgba(255,255,255,0.3)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Sân vườn Nhật Bản</text></svg>'
            },
            {
                title: 'Nhà hàng hiện đại',
                category: 'Nội thất',
                description: 'Thiết kế nội thất nhà hàng phong cách industrial chic.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="restaurant" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="280" fill="url(%23restaurant)"/><rect x="50" y="50" width="300" height="180" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="80" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="140" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="200" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="260" y="100" width="40" height="40" fill="%23d69e2e" rx="20"/><rect x="70" y="150" width="20" height="60" fill="%238b4513"/><rect x="130" y="150" width="20" height="60" fill="%238b4513"/><rect x="190" y="150" width="20" height="60" fill="%238b4513"/><rect x="250" y="150" width="20" height="60" fill="%238b4513"/><rect x="65" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="125" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="185" y="145" width="30" height="8" fill="%23667eea" rx="4"/><rect x="245" y="145" width="30" height="8" fill="%23667eea" rx="4"/><text x="200" y="250" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nhà hàng hiện đại</text></svg>'
            }
        ];

        const filteredProjects = activeFilter === 'Tất cả'
            ? projects
            : projects.filter(project => project.category === activeFilter);

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
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="portfolio-item">
                                <div className="portfolio-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="portfolio-info">
                                    <div className="portfolio-category">{project.category}</div>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <button className="feature-link" onClick={() => alert(`Xem chi tiết: ${project.title}`)}>
                                        Xem chi tiết
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Apps Section Component
    const AppsSection = () => {
        const appsList = [
            {
                title: 'Ứng dụng Tính chi phí xây dựng',
                description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%, đơn giá thi công xây dựng được cập nhật thường xuyên theo tỉnh thành.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="calc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2310b981"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="120" height="120" fill="url(%23calc)" rx="20"/><rect x="20" y="25" width="80" height="70" fill="white" rx="8"/><rect x="30" y="35" width="15" height="8" fill="%23059669" rx="2"/><rect x="50" y="35" width="15" height="8" fill="%23059669" rx="2"/><rect x="70" y="35" width="15" height="8" fill="%23059669" rx="2"/><rect x="30" y="50" width="15" height="8" fill="%23059669" rx="2"/><rect x="50" y="50" width="15" height="8" fill="%23059669" rx="2"/><rect x="70" y="50" width="15" height="8" fill="%23059669" rx="2"/><rect x="30" y="65" width="15" height="8" fill="%23059669" rx="2"/><rect x="50" y="65" width="15" height="8" fill="%23059669" rx="2"/><rect x="70" y="65" width="15" height="8" fill="%23f59e0b" rx="2"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Calculator</text></svg>',
                link: '/vn/tinh-chi-phi-xay-dung.html'
            },
            {
                title: 'Ứng dụng xem Tuổi làm nhà',
                description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="age" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f59e0b"/><stop offset="100%" style="stop-color:%23d97706"/></linearGradient></defs><rect width="120" height="120" fill="url(%23age)" rx="20"/><circle cx="60" cy="60" r="35" fill="white"/><circle cx="60" cy="60" r="25" fill="none" stroke="%23d97706" stroke-width="3"/><text x="60" y="45" text-anchor="middle" font-family="Arial" font-size="10" fill="%23d97706" font-weight="bold">2025</text><text x="60" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="%23666">Tuổi hợp</text><text x="60" y="78" text-anchor="middle" font-family="Arial" font-size="8" fill="%23666">làm nhà</text><path d="M60,35 L62,45 L58,45 Z" fill="%23d97706"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Age Check</text></svg>',
                link: '/vn/xem-tuoi-lam-nha.html'
            },
            {
                title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
                description: 'Thước lỗ ban là thước sử dụng đo đạc xây dựng Dương Trạch (nhà cửa) và Âm Trạch (mộ phần). Trên thước lỗ ban có chia kích thước địa lý thông thường.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="ruler" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%236366f1"/><stop offset="100%" style="stop-color:%234f46e5"/></linearGradient></defs><rect width="120" height="120" fill="url(%23ruler)" rx="20"/><rect x="20" y="45" width="80" height="30" fill="white" rx="4"/><rect x="25" y="50" width="2" height="20" fill="%234f46e5"/><rect x="35" y="55" width="2" height="10" fill="%234f46e5"/><rect x="45" y="50" width="2" height="20" fill="%234f46e5"/><rect x="55" y="55" width="2" height="10" fill="%234f46e5"/><rect x="65" y="50" width="2" height="20" fill="%234f46e5"/><rect x="75" y="55" width="2" height="10" fill="%234f46e5"/><rect x="85" y="50" width="2" height="20" fill="%234f46e5"/><rect x="95" y="55" width="2" height="10" fill="%234f46e5"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Lỗ Ban</text></svg>',
                link: '/vn/thuoc-lo-ban-truc-tuyen.html'
            },
            {
                title: 'Ứng dụng xem Hướng nhà hợp tuổi',
                description: 'Xem hướng hợp với tuổi là một phần quan trọng trong thuật phong thủy, một ngôi nhà tốt sẽ mang tới may mắn, thịnh vượng và sung túc cho gia chủ.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="direction" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ef4444"/><stop offset="100%" style="stop-color:%23dc2626"/></linearGradient></defs><rect width="120" height="120" fill="url(%23direction)" rx="20"/><circle cx="60" cy="60" r="35" fill="white"/><circle cx="60" cy="60" r="25" fill="none" stroke="%23dc2626" stroke-width="2"/><text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="8" fill="%23dc2626" font-weight="bold">Bắc</text><text x="85" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="%23dc2626" font-weight="bold">Đông</text><text x="60" y="90" text-anchor="middle" font-family="Arial" font-size="8" fill="%23dc2626" font-weight="bold">Nam</text><text x="35" y="65" text-anchor="middle" font-family="Arial" font-size="8" fill="%23dc2626" font-weight="bold">Tây</text><polygon points="60,45 62,52 58,52" fill="%23dc2626"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Compass</text></svg>',
                link: '/vn/xem-huong-lam-nha.html'
            },
            {
                title: 'Ứng dụng xem Màu hợp tuổi',
                description: 'Bên cạnh các yếu tố như bố cục, phương hướng, bố trí không gian thì màu sắc của ngôi nhà cũng ảnh hưởng không nhỏ tới môi trường nhà ở.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="color" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ec4899"/><stop offset="100%" style="stop-color:%23be185d"/></linearGradient></defs><rect width="120" height="120" fill="url(%23color)" rx="20"/><circle cx="60" cy="60" r="35" fill="white"/><circle cx="45" cy="45" r="8" fill="%23ef4444"/><circle cx="75" cy="45" r="8" fill="%2310b981"/><circle cx="60" cy="75" r="8" fill="%236366f1"/><circle cx="45" cy="75" r="8" fill="%23f59e0b"/><circle cx="75" cy="75" r="8" fill="%238b5cf6"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Colors</text></svg>',
                link: '/vn/xem-mau-hop-tuoi.html'
            },
            {
                title: 'Ứng dụng thiết kế 3D',
                description: 'Công cụ thiết kế 3D trực tuyến giúp bạn tạo ra mô hình ngôi nhà mơ ước một cách dễ dàng. Với giao diện thân thiện và thư viện vật liệu phong phú.',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="3d" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="120" height="120" fill="url(%233d)" rx="20"/><rect x="30" y="40" width="60" height="40" fill="rgba(255,255,255,0.9)" rx="6"/><rect x="35" y="45" width="15" height="15" fill="%23667eea" rx="2"/><rect x="55" y="45" width="15" height="15" fill="%23667eea" rx="2"/><rect x="75" y="45" width="10" height="30" fill="%23764ba2" rx="2"/><rect x="35" y="65" width="35" height="10" fill="%23f59e0b" rx="2"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">3D Design</text></svg>',
                link: '/vn/thiet-ke-3d.html'
            }
        ];

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
                        {appsList.map((app, index) => (
                            <div key={index} className="app-card">
                                <div className="app-icon">
                                    <img src={app.image} alt={app.title} />
                                </div>
                                <div className="app-content">
                                    <h3>
                                        <a href={app.link} onClick={(e) => {
                                            e.preventDefault();
                                            alert(`Chuyển đến: ${app.title}`);
                                        }}>
                                            {app.title}
                                        </a>
                                    </h3>
                                    <p>{app.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // News Section Component
    const NewsSection = () => {
        const news = [
            {
                title: 'Xu hướng kiến trúc xanh trong xây dựng hiện đại 2025',
                date: '20/08/2025',
                category: 'Kiến trúc',
                content: 'Kiến trúc xanh đang trở thành xu hướng chủ đạo trong ngành xây dựng với các giải pháp bền vững và thân thiện môi trường...',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="400" height="200" fill="url(%23green)"/><rect x="50" y="100" width="300" height="60" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="70" y="110" width="20" height="40" fill="%23059669" rx="2"/><rect x="100" y="115" width="20" height="35" fill="%23059669" rx="2"/><rect x="130" y="120" width="20" height="30" fill="%23059669" rx="2"/><rect x="160" y="110" width="20" height="40" fill="%23059669" rx="2"/><circle cx="300" cy="50" r="20" fill="%23fbbf24"/><ellipse cx="200" cy="180" rx="60" ry="10" fill="rgba(34,197,94,0.6)"/><ellipse cx="120" cy="185" rx="40" ry="8" fill="rgba(34,197,94,0.6)"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Kiến trúc xanh</text></svg>'
            },
            {
                title: 'Vật liệu xây dựng thông minh cho ngôi nhà tương lai',
                date: '18/08/2025',
                category: 'Vật liệu',
                content: 'Các vật liệu xây dựng thông minh giúp tối ưu hóa năng lượng và tăng độ bền vững cho công trình...',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="smart" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%236366f1"/><stop offset="100%" style="stop-color:%234f46e5"/></linearGradient></defs><rect width="400" height="200" fill="url(%23smart)"/><rect x="80" y="80" width="240" height="80" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="100" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="160" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="220" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="280" y="100" width="40" height="40" fill="%236366f1" rx="8"/><circle cx="120" cy="120" r="8" fill="white"/><circle cx="180" cy="120" r="8" fill="white"/><circle cx="240" cy="120" r="8" fill="white"/><circle cx="300" cy="120" r="8" fill="white"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Smart Materials</text></svg>'
            },
            {
                title: 'Phong thủy trong thiết kế nhà ở hiện đại',
                date: '15/08/2025',
                category: 'Phong thủy',
                content: 'Kết hợp phong thủy truyền thống với thiết kế hiện đại để tạo ra không gian sống hài hòa và thịnh vượng...',
                image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="fengshui" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f59e0b"/><stop offset="100%" style="stop-color:%23d97706"/></linearGradient></defs><rect width="400" height="200" fill="url(%23fengshui)"/><circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.9)"/><path d="M 200 60 A 40 40 0 0 1 200 140 A 40 40 0 0 1 200 60" fill="%23000"/><path d="M 200 60 A 40 40 0 0 0 200 140 A 40 40 0 0 0 200 60" fill="%23fff"/><circle cx="180" cy="80" r="8" fill="white"/><circle cx="220" cy="120" r="8" fill="black"/><rect x="50" y="140" width="80" height="40" fill="rgba(255,255,255,0.8)" rx="6"/><rect x="270" y="140" width="80" height="40" fill="rgba(255,255,255,0.8)" rx="6"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Phong thủy hiện đại</text></svg>'
            }
        ];

        return (
            <section className="news">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Tin tức & Kiến thức</div>
                        <h2 className="section-title">Cập nhật mới nhất</h2>
                        <p className="section-subtitle">
                            Khám phá các xu hướng mới và kiến thức hữu ích
                            trong lĩnh vực kiến trúc xây dựng
                        </p>
                    </div>
                    <div className="news-grid">
                        {news.map((article, index) => (
                            <div key={index} className="news-card">
                                <div className="news-image">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <span className="news-category">{article.category}</span>
                                        <span className="news-date">
                                            <i className="far fa-calendar"></i> {article.date}
                                        </span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.content}</p>
                                    <button className="feature-link" onClick={() => alert(`Đọc thêm: ${article.title}`)}>
                                        Đọc thêm
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Contact Section Component
    const ContactSection = () => {
        const contactInfoItems = [
            {
                icon: 'fa-phone',
                title: 'Điện thoại',
                content: contactInfo.phone
            },
            {
                icon: 'fa-envelope',
                title: 'Email',
                content: contactInfo.email
            },
            {
                icon: 'fa-map-marker-alt',
                title: 'Địa chỉ',
                content: contactInfo.address
            },
            {
                icon: 'fa-clock',
                title: 'Giờ làm việc',
                content: contactInfo.workingHours
            }
        ];

        return (
            <section className="contact">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Liên hệ với chúng tôi</div>
                        <h2 className="section-title">Bắt đầu dự án của bạn</h2>
                        <p className="section-subtitle">
                            Hãy để chúng tôi biết về dự án mơ ước của bạn.
                            Đội ngũ chuyên gia sẽ tư vấn miễn phí và chi tiết nhất.
                        </p>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Thông tin liên hệ</h3>
                            {contactInfoItems.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">
                                        <i className={`fas ${info.icon}`}></i>
                                    </div>
                                    <div className="contact-item-content">
                                        <h4>{info.title}</h4>
                                        <p>{info.content}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social Links */}
                            <div style={{marginTop: '40px'}}>
                                <h4 style={{marginBottom: '16px', color: '#1a202c'}}>Theo dõi chúng tôi</h4>
                                <div className="social-links">
                                    <a href="#" className="social-link" onClick={() => alert('Chuyển đến Facebook')}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-link" onClick={() => alert('Chuyển đến Instagram')}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-link" onClick={() => alert('Chuyển đến YouTube')}>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="#" className="social-link" onClick={() => alert('Chuyển đến LinkedIn')}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Gửi yêu cầu tư vấn</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Họ và tên *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Nhập họ và tên của bạn"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Nhập địa chỉ email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Nhập số điện thoại"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Dịch vụ quan tâm</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Chọn dịch vụ</option>
                                        <option value="thiet-ke-kien-truc">Thiết kế kiến trúc</option>
                                        <option value="thi-cong-xay-dung">Thi công xây dựng</option>
                                        <option value="thiet-ke-noi-that">Thiết kế nội thất</option>
                                        <option value="thiet-ke-san-vuon">Thiết kế sân vườn</option>
                                        <option value="sua-chua-cai-tao">Sửa chữa cải tạo</option>
                                        <option value="tu-van-bao-gia">Tư vấn báo giá</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Tin nhắn</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                                        rows="5"
                                    ></textarea>
                                </div>
                                <button type="submit" className="form-submit">
                                    <i className="fas fa-paper-plane"></i>
                                    Gửi yêu cầu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Footer Component
    const Footer = () => (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>
                            <i className="fas fa-building"></i>
                            LIN HOME
                        </h3>
                        <p>
                            Với phương châm "Làm đẹp từ tâm", LIN HOME chuyên cung cấp dịch vụ
                            thiết kế và thi công xây dựng chất lượng cao với đội ngũ kiến trúc sư
                            và kỹ sư giàu kinh nghiệm.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" onClick={() => alert('Chuyển đến Facebook')}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-link" onClick={() => alert('Chuyển đến Instagram')}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="social-link" onClick={() => alert('Chuyển đến YouTube')}>
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="social-link" onClick={() => alert('Chuyển đến LinkedIn')}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li><button onClick={() => alert('Chuyển đến: Thiết kế kiến trúc')}>Thiết kế kiến trúc</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Thi công xây dựng')}>Thi công xây dựng</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Thiết kế nội thất')}>Thiết kế nội thất</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Thiết kế sân vườn')}>Thiết kế sân vườn</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Sửa chữa cải tạo')}>Sửa chữa cải tạo</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Tư vấn báo giá')}>Tư vấn báo giá</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Hỗ trợ</h3>
                        <ul>
                            <li><button onClick={() => alert('Chuyển đến: Quy trình làm việc')}>Quy trình làm việc</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Chính sách bảo hành')}>Chính sách bảo hành</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Câu hỏi thường gặp')}>Câu hỏi thường gặp</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Tải ứng dụng')}>Tải ứng dụng</button></li>
                            <li><button onClick={() => alert('Chuyển đến: Liên hệ hỗ trợ')}>Liên hệ hỗ trợ</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Liên hệ</h3>
                        <ul>
                            <li>
                                <i className="fas fa-phone"></i>
                                {contactInfo.phone}
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                {contactInfo.email}
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                {contactInfo.address}
                            </li>
                            <li>
                                <i className="fas fa-globe"></i>
                                {contactInfo.website}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 LIN HOME. Tất cả quyền được bảo lưu. | Thiết kế bởi LIN HOME Team</p>
                </div>
            </div>
        </footer>
    );

    // Render content based on active section
    const renderContent = () => {
        switch(activeSection) {
            case 'contact':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <ContactSection />
                        <Footer />
                    </main>
                );
            case 'portfolio':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <PortfolioSection />
                        <FeaturesSection />
                        <Footer />
                    </main>
                );
            case 'apps':
                return (
                    <main style={{ marginTop: '80px' }}>
                        <AppsSection />
                        <NewsSection />
                        <Footer />
                    </main>
                );
            default:
                return (
                    <main>
                        <HeroSection />
                        <FeaturesSection />
                        <PortfolioSection />
                        <AppsSection />
                        <NewsSection />
                        <ContactSection />
                        <Footer />
                    </main>
                );
        }
    };

    return renderContent();
};

export default MainContent;