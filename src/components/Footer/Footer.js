import React from 'react';
import { contactInfo } from '../../data/menuData';
import './Footer.css';

const Footer = () => {
    const handleLinkClick = (linkText) => {
        alert(`Chuyển đến: ${linkText}`);
    };

    const handleSocialClick = (platform) => {
        switch (platform) {
            case 'facebook':
                window.open(contactInfo.facebook, '_blank', 'noopener,noreferrer');
                break;
            case 'zalo':
                window.open(contactInfo.zalo, '_blank', 'noopener,noreferrer');
                break;
            default:
                alert(`Chuyển đến ${platform}`);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3>
                            <i className="fas fa-building" aria-hidden="true"></i>
                            LIN HOME
                        </h3>
                        <p>
                            Với phương châm "Làm đẹp từ tâm", LIN HOME chuyên cung cấp dịch vụ
                            thiết kế và thi công xây dựng chất lượng cao với đội ngũ kiến trúc sư
                            và kỹ sư giàu kinh nghiệm.
                        </p>
                        <div className="social-links">
                            <button
                                className="social-link facebook"
                                onClick={() => handleSocialClick('facebook')}
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            </button>
                            <button
                                className="social-link zalo"
                                onClick={() => handleSocialClick('zalo')}
                                aria-label="Zalo"
                            >
                                <span className="zalo-icon" aria-hidden="true"></span>
                            </button>
                            <button
                                className="social-link youtube"
                                onClick={() => handleSocialClick('YouTube')}
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube" aria-hidden="true"></i>
                            </button>
                            <button
                                className="social-link instagram"
                                onClick={() => handleSocialClick('Instagram')}
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li>
                                <button onClick={() => handleLinkClick('Thiết kế kiến trúc')}>
                                    Thiết kế kiến trúc
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Thi công xây dựng')}>
                                    Thi công xây dựng
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Thiết kế nội thất')}>
                                    Thiết kế nội thất
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Thiết kế sân vườn')}>
                                    Thiết kế sân vườn
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Sửa chữa cải tạo')}>
                                    Sửa chữa cải tạo
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Tư vấn báo giá')}>
                                    Tư vấn báo giá
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h3>Hỗ trợ</h3>
                        <ul>
                            <li>
                                <button onClick={() => handleLinkClick('Quy trình làm việc')}>
                                    Quy trình làm việc
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Chính sách bảo hành')}>
                                    Chính sách bảo hành
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Câu hỏi thường gặp')}>
                                    Câu hỏi thường gặp
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Tải ứng dụng')}>
                                    Tải ứng dụng
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleLinkClick('Liên hệ hỗ trợ')}>
                                    Liên hệ hỗ trợ
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h3>Liên hệ</h3>
                        <ul>
                            <li>
                                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                                    <i className="fas fa-phone" aria-hidden="true"></i>
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${contactInfo.email}`}>
                                    <i className="fas fa-envelope" aria-hidden="true"></i>
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.maps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                    {contactInfo.address}
                                </a>
                            </li>
                            <li>
                <span>
                  <i className="fas fa-globe" aria-hidden="true"></i>
                    {contactInfo.website}
                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; 2025 LIN HOME. Tất cả quyền được bảo lưu. |
                        Thiết kế bởi LIN HOME Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;