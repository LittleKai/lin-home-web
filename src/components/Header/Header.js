// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { menuData, contactInfo } from '../../data/menuData';

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
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
                setActiveSubmenu(null);
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
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);
    }, [location.pathname]);

    // Handle dropdown item click with routing
    const handleDropdownItemClick = (item, event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);

        // Navigate to the specific page
        if (item.href) {
            navigate(item.href);
        } else {
            console.log(`Navigating to: ${item.title}`);
            alert(`Chuyển đến: ${item.title}`);
        }
    };

    // Handle submenu hover for desktop
    const handleSubmenuEnter = (item) => {
        if (item.hasSubmenu) {
            setActiveSubmenu(item.title);
        }
    };

    const handleSubmenuLeave = () => {
        setActiveSubmenu(null);
    };

    // Handle dropdown mouse events for desktop
    const handleDropdownEnter = (section) => {
        setActiveDropdown(section);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);
    };

    // Handle mobile dropdown toggle
    const handleMobileDropdownToggle = (section, event) => {
        event.stopPropagation();
        setActiveDropdown(activeDropdown === section ? null : section);
        setMobileActiveSubmenu(null);
    };

    // Handle mobile submenu toggle
    const handleMobileSubmenuToggle = (item, event) => {
        event.stopPropagation();
        if (item.hasSubmenu) {
            setMobileActiveSubmenu(
                mobileActiveSubmenu === item.title ? null : item.title
            );
        } else {
            // Navigate to regular item
            handleDropdownItemClick(item, event);
        }
    };

    // Handle social link clicks
    const handleSocialClick = (platform, url, event) => {
        event.preventDefault();
        if (url && url !== '#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            alert(`Chuyển đến ${platform}`);
        }
        setIsMobileMenuOpen(false);
    };

    // Get icon for each section
    const getSectionIcon = (section) => {
        const icons = {
            'Thiết kế': 'drafting-compass',
            'Thi công': 'hard-hat',
            'Báo giá': 'calculator',
            'Tin tức': 'newspaper',
            'Ứng dụng': 'mobile-alt',
            'Dự án': 'building'
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
        } else if (section === 'dự án') {
            return path.startsWith('/du-an');
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
                                    onMouseEnter={() => handleDropdownEnter(section)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`nav-link ${isActiveSection(section.toLowerCase()) ? 'active' : ''}`}
                                        aria-expanded={activeDropdown === section}
                                        aria-haspopup="true"
                                    >
                                        <span>{section}</span>
                                        <i className="fas fa-chevron-down dropdown-icon" aria-hidden="true"></i>
                                    </button>

                                    {/* First Level Dropdown Menu */}
                                    <div className={`dropdown ${activeDropdown === section ? 'show' : ''}`}>
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`dropdown-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
                                                onMouseEnter={() => handleSubmenuEnter(item)}
                                                onMouseLeave={handleSubmenuLeave}
                                            >
                                                <a
                                                    href={item.href || '#'}
                                                    className="dropdown-link"
                                                    onClick={(e) => handleDropdownItemClick(item, e)}
                                                >
                                                    <div className="dropdown-content">
                                                        <div className="dropdown-title">{item.title}</div>
                                                        {item.description && (
                                                            <div className="dropdown-description">
                                                                {item.description}
                                                            </div>
                                                        )}
                                                    </div>
                                                </a>

                                                {/* Second Level Submenu */}
                                                {item.hasSubmenu && item.submenu && (
                                                    <div className={`submenu ${activeSubmenu === item.title ? 'show' : ''}`}>
                                                        <div className="submenu-header">
                                                            <i className="fas fa-tools"></i>
                                                            11 Hạng mục thi công
                                                        </div>
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.href || '#'}
                                                                className="submenu-item"
                                                                onClick={(e) => handleDropdownItemClick(subItem, e)}
                                                            >
                                                                <div className="submenu-item-title">
                                                                    {subItem.title}
                                                                </div>
                                                                {subItem.description && (
                                                                    <div className="submenu-item-description">
                                                                        {subItem.description}
                                                                    </div>
                                                                )}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
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

                        {/* Dynamic Menu Items for Mobile */}
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

                                {/* Mobile First Level Dropdown */}
                                <div className={`mobile-dropdown ${activeDropdown === section ? 'active' : ''}`}>
                                    {items.map((item, index) => (
                                        <div key={index}>
                                            <button
                                                className="mobile-dropdown-item"
                                                onClick={(e) => handleMobileSubmenuToggle(item, e)}
                                            >
                                                <div className="mobile-dropdown-content">
                                                    <div className="mobile-dropdown-title">
                                                        {item.title}
                                                        {item.hasSubmenu && (
                                                            <i
                                                                className={`fas fa-chevron-${mobileActiveSubmenu === item.title ? 'up' : 'down'}`}
                                                                style={{float: 'right', fontSize: '12px'}}
                                                            ></i>
                                                        )}
                                                    </div>
                                                    {item.description && (
                                                        <div className="mobile-dropdown-description">
                                                            {item.description}
                                                        </div>
                                                    )}
                                                </div>
                                            </button>

                                            {/* Mobile Second Level Submenu */}
                                            {item.hasSubmenu && item.submenu && (
                                                <div className={`mobile-submenu ${mobileActiveSubmenu === item.title ? 'active' : ''}`}>
                                                    <div className="mobile-submenu-header">
                                                        <i className="fas fa-tools"></i>
                                                        11 Hạng mục thi công
                                                    </div>
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.href || '#'}
                                                            className="mobile-submenu-item"
                                                            onClick={(e) => handleDropdownItemClick(subItem, e)}
                                                        >
                                                            <span className="mobile-submenu-title">
                                                                {subItem.title}
                                                            </span>
                                                            {subItem.description && (
                                                                <span className="mobile-submenu-description">
                                                                    {subItem.description}
                                                                </span>
                                                            )}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
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
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <span>Liên hệ</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Contact Info */}
                    <div className="mobile-nav-footer">
                        <div className="mobile-contact-info">
                            <div className="mobile-contact-item">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                            </div>
                            <div className="mobile-contact-item">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                            </div>
                        </div>

                        {/* Mobile Social Links */}
                        <div className="mobile-social-links">
                            <button
                                className="social-link facebook"
                                onClick={(e) => handleSocialClick('Facebook', '#', e)}
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            </button>
                            <button
                                className="social-link zalo"
                                onClick={(e) => handleSocialClick('Zalo', '#', e)}
                                aria-label="Zalo"
                            >
                                <i className="fas fa-comment-dots" aria-hidden="true"></i>
                            </button>
                            <button
                                className="social-link youtube"
                                onClick={(e) => handleSocialClick('YouTube', '#', e)}
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;