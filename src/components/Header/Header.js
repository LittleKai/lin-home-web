// src/components/Header/Header.js (Updated with Router support)
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { menuData, contactInfo } from '../../data/menuData';

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

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

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    // Handle navigation click
    const handleNavClick = (section, event) => {
        event.preventDefault();
        setActiveSection(section);
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        // Navigate based on section
        if (section === 'home') {
            navigate('/');
        } else if (section === 'contact') {
            navigate('/contact');
        } else {
            // For other sections, scroll to section on home page
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(section);
                    if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.offsetTop - headerHeight;
                        window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            } else {
                setTimeout(() => {
                    const element = document.getElementById(section);
                    if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.offsetTop - headerHeight;
                        window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        }
    };

    // Handle dropdown item click with routing
    const handleDropdownItemClick = (item, event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        // Navigate to the specific page
        if (item.href) {
            navigate(item.href);
        } else {
            // Fallback for items without href
            console.log(`Navigating to: ${item.title}`);
            alert(`Chuyển đến: ${item.title}`);
        }
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    // Handle mobile dropdown toggle
    const handleMobileDropdownToggle = (section, event) => {
        event.stopPropagation();
        setActiveDropdown(activeDropdown === section ? null : section);
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

    // Check if current path matches section
    const isActiveSection = (section) => {
        const path = location.pathname;
        if (section === 'home') {
            return path === '/';
        } else if (section === 'contact') {
            return path === '/contact';
        } else if (section === 'thiết kế') {
            return path.startsWith('/thiet-ke');
        } else if (section === 'thi công') {
            return path.startsWith('/thi-cong');
        } else if (section === 'báo giá') {
            return path.startsWith('/bao-gia');
        } else if (section === 'tin tức') {
            return path.startsWith('/tin-tuc');
        } else if (section === 'ứng dụng') {
            return path.startsWith('/ung-dung');
        }
        return false;
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="logo"
                        aria-label="LIN HOME - Về trang chủ"
                    >
                        <div className="logo-icon">
                            <i className="fas fa-building" aria-hidden="true"></i>
                        </div>
                        <span className="logo-text">LIN HOME</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop" aria-label="Menu điều hướng chính">
                        <ul className="nav-menu">
                            {/* Home Link */}
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link ${isActiveSection('home') ? 'active' : ''}`}
                                    aria-current={isActiveSection('home') ? 'page' : undefined}
                                >
                                    Trang chủ
                                </Link>
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
                                        className={`nav-link ${isActiveSection(section.toLowerCase()) ? 'active' : ''}`}
                                        aria-expanded={activeDropdown === section}
                                        aria-haspopup="true"
                                    >
                                        <span>{section}</span>
                                        <i className="fas fa-chevron-down dropdown-icon" aria-hidden="true"></i>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className={`dropdown ${activeDropdown === section ? 'active' : ''}`}>
                                        {items.map((item, index) => (
                                            <button
                                                key={index}
                                                className="dropdown-item"
                                                onClick={(e) => handleDropdownItemClick(item, e)}
                                                title={item.description}
                                            >
                                                <span className="dropdown-item-title">{item.title}</span>
                                                {item.description && (
                                                    <span className="dropdown-item-description">
                                                        {item.description}
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </li>
                            ))}

                            {/* Contact Link */}
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                    aria-current={isActiveSection('contact') ? 'page' : undefined}
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </nav>

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
                            <Link
                                to="/"
                                className={`mobile-nav-link ${isActiveSection('home') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-home" aria-hidden="true"></i>
                                <span>Trang chủ</span>
                            </Link>
                        </li>

                        {/* Dynamic Menu Items */}
                        {Object.entries(menuData).map(([section, items]) => (
                            <li key={section} className="mobile-nav-item">
                                <button
                                    className={`mobile-nav-link ${activeDropdown === section ? 'active' : ''}`}
                                    onClick={(e) => handleMobileDropdownToggle(section, e)}
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
                            <Link
                                to="/contact"
                                className={`mobile-nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <span>Liên hệ</span>
                            </Link>
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