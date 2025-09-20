
import React, { useState, useEffect } from 'react';
import './Header.css';
import { menuData, contactInfo } from '../../data/menuData';

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Handle scroll effect for header background
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.nav-item-dropdown')) {
                setActiveDropdown(null);
            }

            if (isMobileMenuOpen && !event.target.closest('.header')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Handle navigation click
    const handleNavClick = (section, event) => {
        event.preventDefault();
        setActiveSection(section);
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        // Smooth scroll to section if not home
        if (section !== 'home') {
            const element = document.getElementById(section);
            if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Handle dropdown toggle
    const handleDropdownToggle = (section, event) => {
        event.stopPropagation();
        setActiveDropdown(activeDropdown === section ? null : section);
    };

    // Handle dropdown item click
    const handleDropdownItemClick = (item, event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        // In a real application, you would handle routing here
        console.log(`Navigating to: ${item.href} - ${item.title}`);

        // For demo purposes, show alert
        alert(`Chuyển đến: ${item.title}`);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    // Get icon for each section
    const getSectionIcon = (section) => {
        const icons = {
            'Thiết kế': 'drafting-compass',
            'Thi công': 'hard-hat',
            'Báo giá': 'calculator',
            'Tin tức': 'newspaper',
            'Ứng dụng': 'mobile-alt'
        };
        return icons[section] || 'chevron-right';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <button
                        className="logo"
                        onClick={(e) => handleNavClick('home', e)}
                        aria-label="LIN HOME - Về trang chủ"
                    >
                        <div className="logo-icon">
                            <i className="fas fa-building" aria-hidden="true"></i>
                        </div>
                        <span className="logo-text">LIN HOME</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop" aria-label="Menu điều hướng chính">
                        <ul className="nav-menu">
                            {/* Home Link */}
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick('home', e)}
                                    aria-current={activeSection === 'home' ? 'page' : undefined}
                                >
                                    Trang chủ
                                </button>
                            </li>

                            {/* Dynamic Menu Items with Dropdowns */}
                            {Object.entries(menuData).map(([section, items]) => (
                                <li
                                    key={section}
                                    className="nav-item nav-item-dropdown"
                                    onMouseEnter={() => setActiveDropdown(section)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        className={`nav-link ${activeSection === section.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                                        onClick={(e) => handleNavClick(section.toLowerCase().replace(' ', ''), e)}
                                        aria-expanded={activeDropdown === section}
                                        aria-haspopup="true"
                                    >
                                        <span>{section}</span>
                                        <i className="fas fa-chevron-down dropdown-icon" aria-hidden="true"></i>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className={`dropdown ${activeDropdown === section ? 'active' : ''}`}>
                                        <div className="dropdown-content">
                                            {items.map((item, index) => (
                                                <button
                                                    key={index}
                                                    className="dropdown-item"
                                                    onClick={(e) => handleDropdownItemClick(item, e)}
                                                    title={item.description}
                                                >
                                                    <div className="dropdown-item-content">
                                                        <span className="dropdown-item-title">{item.title}</span>
                                                        {item.description && (
                                                            <span className="dropdown-item-description">
                                {item.description}
                              </span>
                                                        )}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}

                            {/* Contact Link */}
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick('contact', e)}
                                    aria-current={activeSection === 'contact' ? 'page' : undefined}
                                >
                                    Liên hệ
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Header Contact Information */}
                    <div className="header-contacts">
                        <a
                            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                            className="contact-item-header"
                            aria-label={`Gọi điện thoại: ${contactInfo.phone}`}
                        >
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <div className="contact-info">
                                <span className="contact-label">Hotline</span>
                                <span className="contact-value">{contactInfo.phone}</span>
                            </div>
                        </a>

                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="contact-item-header"
                            aria-label={`Gửi email đến: ${contactInfo.email}`}
                        >
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            <div className="contact-info">
                                <span className="contact-label">Email</span>
                                <span className="contact-value">{contactInfo.email}</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                id="mobile-navigation"
                className={`nav-mobile ${isMobileMenuOpen ? 'active' : ''}`}
                aria-label="Menu điều hướng di động"
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="mobile-nav-content">
                    {/* Mobile Navigation Header */}
                    <div className="mobile-nav-header">
                        <div className="mobile-logo">
                            <div className="logo-icon">
                                <i className="fas fa-building" aria-hidden="true"></i>
                            </div>
                            <span>LIN HOME</span>
                        </div>
                        <button
                            className="mobile-close-button"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Đóng menu"
                        >
                            <i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <ul className="mobile-nav-menu">
                        {/* Home Item */}
                        <li className="mobile-nav-item">
                            <button
                                className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick('home', e)}
                            >
                                <i className="fas fa-home" aria-hidden="true"></i>
                                <span>Trang chủ</span>
                            </button>
                        </li>

                        {/* Dynamic Menu Items */}
                        {Object.entries(menuData).map(([section, items]) => (
                            <li key={section} className="mobile-nav-item">
                                <button
                                    className={`mobile-nav-link ${activeDropdown === section ? 'active' : ''}`}
                                    onClick={(e) => handleDropdownToggle(section, e)}
                                    aria-expanded={activeDropdown === section}
                                >
                                    <i className={`fas fa-${getSectionIcon(section)}`} aria-hidden="true"></i>
                                    <span>{section}</span>
                                    <i className={`fas fa-chevron-${activeDropdown === section ? 'up' : 'down'} mobile-dropdown-icon`} aria-hidden="true"></i>
                                </button>

                                {/* Mobile Dropdown */}
                                <div className={`mobile-dropdown ${activeDropdown === section ? 'active' : ''}`}>
                                    {items.map((item, index) => (
                                        <button
                                            key={index}
                                            className="mobile-dropdown-item"
                                            onClick={(e) => handleDropdownItemClick(item, e)}
                                        >
                                            <span className="mobile-dropdown-title">{item.title}</span>
                                            {item.description && (
                                                <span className="mobile-dropdown-description">
                          {item.description}
                        </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </li>
                        ))}

                        {/* Contact Item */}
                        <li className="mobile-nav-item">
                            <button
                                className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick('contact', e)}
                            >
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <span>Liên hệ</span>
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Contact Information */}
                    <div className="mobile-contact-info">
                        <h3>Liên hệ nhanh</h3>
                        <div className="mobile-contact-items">
                            <a
                                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                className="mobile-contact-item"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <div className="mobile-contact-content">
                                    <span className="mobile-contact-label">Điện thoại</span>
                                    <span className="mobile-contact-value">{contactInfo.phone}</span>
                                </div>
                            </a>

                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="mobile-contact-item"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <div className="mobile-contact-content">
                                    <span className="mobile-contact-label">Email</span>
                                    <span className="mobile-contact-value">{contactInfo.email}</span>
                                </div>
                            </a>

                            <a
                                href={contactInfo.maps}
                                className="mobile-contact-item"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                <div className="mobile-contact-content">
                                    <span className="mobile-contact-label">Địa chỉ</span>
                                    <span className="mobile-contact-value">{contactInfo.address}</span>
                                </div>
                            </a>

                            <div className="mobile-contact-item">
                                <i className="fas fa-clock" aria-hidden="true"></i>
                                <div className="mobile-contact-content">
                                    <span className="mobile-contact-label">Giờ làm việc</span>
                                    <span className="mobile-contact-value">{contactInfo.workingHours}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mobile-social-links">
                            <h4>Theo dõi chúng tôi</h4>
                            <div className="social-links-grid">
                                <a
                                    href={contactInfo.facebook}
                                    className="social-link facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </a>
                                <a
                                    href={contactInfo.zalo}
                                    className="social-link zalo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Zalo"
                                >
                                    <span className="zalo-icon"></span>
                                </a>
                                <a
                                    href="#"
                                    className="social-link youtube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                >
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="#"
                                    className="social-link instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;