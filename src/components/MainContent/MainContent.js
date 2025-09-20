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

    // Hero Section
    const HeroSection = () => (
        <section className="hero">
            <div className="hero-background"></div>
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

    // Features Section
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
                                <button className="feature-link">
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

    // Portfolio Section
    const PortfolioSection = () => {
        const filters = ['Tất cả', 'Biệt thự', 'Nhà phố', 'Nội thất', 'Sân vườn'];

        const projects = [
            {
                title: 'Biệt thự hiện đại Vinhomes',
                category: 'Biệt thự',
                description: 'Thiết kế biệt thự 2 tầng phong cách hiện đại với sân vườn rộng rãi.'
            },
            {
                title: 'Nhà phố 3 tầng',
                category: 'Nhà phố',
                description: 'Thiết kế nhà phố 3 tầng tối ưu diện tích với ánh sáng tự nhiên.'
            },
            {
                title: 'Nội thất phòng khách sang trọng',
                category: 'Nội thất',
                description: 'Thiết kế nội thất phòng khách phong cách luxury với tone màu ấm áp.'
            },
            {
                title: 'Villa cao cấp Đà Lạt',
                category: 'Biệt thự',
                description: 'Villa nghỉ dưỡng với thiết kế hòa hợp cùng thiên nhiên Đà Lạt.'
            },
            {
                title: 'Sân vườn Nhật Bản',
                category: 'Sân vườn',
                description: 'Thiết kế sân vườn phong cách Zen với hồ koi và cây cảnh.'
            },
            {
                title: 'Nhà hàng hiện đại',
                category: 'Nội thất',
                description: 'Thiết kế nội thất nhà hàng phong cách industrial chic.'
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
                                <div className="portfolio-image"></div>
                                <div className="portfolio-info">
                                    <div className="portfolio-category">{project.category}</div>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <button className="feature-link">
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

    // Apps Section
    const AppsSection = () => {
        const appsList = [
            {
                title: 'Ứng dụng Tính chi phí xây dựng',
                description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%.',
                link: '/vn/tinh-chi-phi-xay-dung.html'
            },
            {
                title: 'Ứng dụng xem Tuổi làm nhà',
                description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió.',
                link: '/vn/xem-tuoi-lam-nha.html'
            },
            {
                title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
                description: 'Thước lỗ ban là thước sử dụng đo đạc xây dựng Dương Trạch và Âm Trạch.',
                link: '/vn/thuoc-lo-ban-truc-tuyen.html'
            },
            {
                title: 'Ứng dụng xem Hướng nhà hợp tuổi',
                description: 'Xem hướng hợp với tuổi là một phần quan trọng trong thuật phong thủy.',
                link: '/vn/xem-huong-lam-nha.html'
            },
            {
                title: 'Ứng dụng xem Màu hợp tuổi',
                description: 'Màu sắc hình thành các trường năng lượng khác nhau theo ngũ hành.',
                link: '/vn/xem-mau-hop-tuoi.html'
            },
            {
                title: 'Ứng dụng thiết kế 3D',
                description: 'Công cụ thiết kế 3D trực tuyến giúp bạn tạo ra mô hình ngôi nhà mơ ước.',
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
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="app-content">
                                    <h3>
                                        <a href={app.link}>{app.title}</a>
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

    // Contact Section
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

    // Footer
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
                    </div>
                    <div className="footer-section">
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li><button>Thiết kế kiến trúc</button></li>
                            <li><button>Thi công xây dựng</button></li>
                            <li><button>Thiết kế nội thất</button></li>
                            <li><button>Thiết kế sân vườn</button></li>
                            <li><button>Sửa chữa cải tạo</button></li>
                            <li><button>Tư vấn báo giá</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Hỗ trợ</h3>
                        <ul>
                            <li><button>Quy trình làm việc</button></li>
                            <li><button>Chính sách bảo hành</button></li>
                            <li><button>Câu hỏi thường gặp</button></li>
                            <li><button>Tải ứng dụng</button></li>
                            <li><button>Liên hệ hỗ trợ</button></li>
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
                        <ContactSection />
                        <Footer />
                    </main>
                );
        }
    };

    return renderContent();
};

export default MainContent;