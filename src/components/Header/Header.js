// src/components/Header/Header.js - FIXED với error handling và fallback icons + project colors
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

    // Default section icons mapping with fallback
    const getSectionIcon = (section) => {
        const iconMap = {
            'Thiết kế': 'fas fa-pencil-ruler',
            'Thi công': 'fas fa-hard-hat',
            'Báo giá': 'fas fa-calculator',
            'Ứng dụng': 'fas fa-mobile-alt',
            'Dự án': 'fas fa-folder-open'
        };
        return iconMap[section] || 'fas fa-circle';
    };

    // Get item icon with fallback and special project handling
    const getItemIcon = (item, section) => {
        if (item.icon) return item.icon;

        // Fallback icons based on title keywords
        const title = item.title?.toLowerCase() || '';
        if (title.includes('quy trình')) return 'fas fa-route';
        if (title.includes('kiến trúc')) return 'fas fa-building';
        if (title.includes('nội thất')) return 'fas fa-couch';
        if (title.includes('trọn gói')) return 'fas fa-box';
        if (title.includes('hạng mục')) return 'fas fa-tools';
        if (title.includes('trần') || title.includes('thạch cao')) return 'fas fa-layer-group';
        if (title.includes('sàn gỗ')) return 'fas fa-tree';
        if (title.includes('đá') || title.includes('ốp lát')) return 'fas fa-th-large';
        if (title.includes('cửa')) return 'fas fa-door-open';
        if (title.includes('rèm')) return 'fas fa-th';
        if (title.includes('chống thấm')) return 'fas fa-shield-alt';
        if (title.includes('koi') || title.includes('sân vườn')) return 'fas fa-fish';
        if (title.includes('nhôm kính')) return 'fas fa-window-maximize';
        if (title.includes('điện') && title.includes('thông minh')) return 'fas fa-home';
        if (title.includes('phào chỉ')) return 'fas fa-border-style';
        if (title.includes('mặt trời')) return 'fas fa-solar-panel';
        if (title.includes('tư vấn')) return 'fas fa-calculator';
        if (title.includes('ứng dụng')) return 'fas fa-mobile-alt';
        if (title.includes('dự án')) return 'fas fa-folder';

        return 'fas fa-circle';
    };

    // Get project-specific CSS class for distinct colors
    const getProjectClass = (item, section) => {
        if (section !== 'Dự án') return '';

        const title = item.title?.toLowerCase() || '';
        if (title.includes('biệt thự')) return 'project-villa';
        if (title.includes('nhà phố')) return 'project-townhouse';
        if (title.includes('căn hộ')) return 'project-apartment';
        if (title.includes('thương mại')) return 'project-commercial';

        return '';
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
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

    // Check if a section is active
    const isActiveSection = (section) => {
        if (!activeSection && !location.pathname) return false;

        const currentPath = location.pathname.toLowerCase();
        const sectionLower = section.toLowerCase();

        // Check for home page
        if (section === 'home' || sectionLower === 'home') {
            return currentPath === '/' || currentPath === '';
        }

        // Check for contact page
        if (section === 'contact' || sectionLower === 'contact') {
            return currentPath === '/contact' || currentPath.includes('contact');
        }

        // Check if current path starts with section
        return currentPath.includes(sectionLower.replace(/\s+/g, '-'));
    };

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
            handleDropdownItemClick(item, event);
        }
    };

    // Handle contact click
    const handleContactClick = (event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        navigate('/contact');
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <i className="fas fa-building" aria-hidden="true"></i>
                        </div>
                        <span className="logo-text">LIN HOME</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop" aria-label="Menu điều hướng chính">
                        <ul className="nav-menu">
                            {/* Home Item */}
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link ${isActiveSection('home') ? 'active' : ''}`}
                                    aria-current={isActiveSection('home') ? 'page' : undefined}
                                >
                                    <i className="fas fa-home nav-link-icon" aria-hidden="true"></i>
                                    <span>Trang chủ</span>
                                </Link>
                            </li>

                            {/* Dynamic Menu Items */}
                            {Object.entries(menuData).map(([section, items]) => (
                                <li
                                    key={section}
                                    className="nav-item nav-item-dropdown"
                                    onMouseEnter={() => handleDropdownEnter(section)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={`nav-link ${isActiveSection(section) ? 'active' : ''}`}
                                        aria-expanded={activeDropdown === section}
                                        aria-haspopup="true"
                                    >
                                        <i className={`${getSectionIcon(section)} nav-link-icon`} aria-hidden="true"></i>
                                        <span>{section}</span>
                                        <i className="fas fa-chevron-down dropdown-icon" aria-hidden="true"></i>
                                    </button>

                                    {/* Desktop Dropdown */}
                                    <div className={`dropdown ${activeDropdown === section ? 'show' : ''}`}>
                                        {Array.isArray(items) && items.map((item, index) => (
                                            <button
                                                key={index}
                                                className={`dropdown-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
                                                onClick={(e) => {
                                                    // Nếu item có href, cho phép click để navigate
                                                    if (item.href) {
                                                        e.stopPropagation();
                                                        handleDropdownItemClick(item, e);
                                                    }
                                                }}
                                                onMouseEnter={() => handleSubmenuEnter(item)}
                                                onMouseLeave={handleSubmenuLeave}
                                            >
                                                <div className="dropdown-item-content">
                                                    <i
                                                        className={`${getItemIcon(item, section)} dropdown-item-icon ${getProjectClass(item, section)}`}
                                                        aria-hidden="true"
                                                    ></i>
                                                    <div className="dropdown-item-text">
                                                        <span className="dropdown-item-title">{item.title}</span>
                                                        {item.description && (
                                                            <span className="dropdown-item-description">{item.description}</span>
                                                        )}
                                                    </div>
                                                    {item.hasSubmenu && (
                                                        <i className="fas fa-chevron-right submenu-arrow" aria-hidden="true"></i>
                                                    )}
                                                </div>

                                                {/* Desktop Submenu */}
                                                {item.hasSubmenu && item.submenu && Array.isArray(item.submenu) && (
                                                    <div className={`submenu ${activeSubmenu === item.title ? 'show' : ''}`}>
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                className="submenu-item"
                                                                onClick={(e) => handleDropdownItemClick(subItem, e)}
                                                            >
                                                                <div className="submenu-item-content">
                                                                    <i
                                                                        className={`${getItemIcon(subItem, section)} submenu-item-icon ${getProjectClass(subItem, section)}`}
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                    <div className="submenu-item-text">
                                                                        <span className="submenu-item-title">{subItem.title}</span>
                                                                        {subItem.description && (
                                                                            <span className="submenu-item-description">{subItem.description}</span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </li>
                            ))}

                            {/* Contact Item */}
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className={`nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                    onClick={handleContactClick}
                                    aria-current={isActiveSection('contact') ? 'page' : undefined}
                                >
                                    <i className="fas fa-phone nav-link-icon" aria-hidden="true"></i>
                                    <span>Liên hệ</span>
                                </a>
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
                                <i className="fas fa-home mobile-nav-icon"></i>
                                <span>Trang chủ</span>
                            </Link>
                        </li>

                        {/* Dynamic Mobile Menu Items */}
                        {Object.entries(menuData).map(([section, items]) => (
                            <li key={section} className="mobile-nav-item mobile-nav-dropdown">
                                <button
                                    className={`mobile-nav-link ${activeDropdown === section ? 'active' : ''}`}
                                    onClick={(e) => handleMobileDropdownToggle(section, e)}
                                    aria-expanded={activeDropdown === section}
                                >
                                    <span className="mobile-nav-text">
                                        <i className={`${getSectionIcon(section)} mobile-nav-icon`}></i>
                                        <span>{section}</span>
                                    </span>
                                    <i className={`fas fa-chevron-${activeDropdown === section ? 'up' : 'down'} mobile-dropdown-arrow`}></i>
                                </button>

                                {/* Mobile Dropdown Content */}
                                <div className={`mobile-dropdown-content ${activeDropdown === section ? 'show' : ''}`}>
                                    {Array.isArray(items) && items.map((item, index) => (
                                        <div key={index} className="mobile-dropdown-item">
                                            <button
                                                className={`mobile-dropdown-link ${item.hasSubmenu ? 'has-submenu' : ''}`}
                                                onClick={(e) => handleMobileSubmenuToggle(item, e)}
                                            >
                                                <div className="mobile-dropdown-content-wrapper">
                                                    <i
                                                        className={`${getItemIcon(item, section)} mobile-dropdown-icon ${getProjectClass(item, section)}`}
                                                    ></i>
                                                    <div className="mobile-dropdown-text">
                                                        <span className="mobile-dropdown-title">{item.title}</span>
                                                        {item.description && (
                                                            <span className="mobile-dropdown-description">{item.description}</span>
                                                        )}
                                                    </div>
                                                    {item.hasSubmenu && (
                                                        <i className={`fas fa-chevron-${mobileActiveSubmenu === item.title ? 'up' : 'down'} mobile-submenu-arrow`}></i>
                                                    )}
                                                </div>
                                            </button>

                                            {/* Mobile Submenu */}
                                            {item.hasSubmenu && item.submenu && Array.isArray(item.submenu) && (
                                                <div className={`mobile-submenu ${mobileActiveSubmenu === item.title ? 'show' : ''}`}>
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <button
                                                            key={subIndex}
                                                            className="mobile-submenu-link"
                                                            onClick={(e) => handleDropdownItemClick(subItem, e)}
                                                        >
                                                            <i
                                                                className={`${getItemIcon(subItem, section)} mobile-submenu-icon ${getProjectClass(subItem, section)}`}
                                                            ></i>
                                                            <div className="mobile-submenu-text">
                                                                <span className="mobile-submenu-title">{subItem.title}</span>
                                                                {subItem.description && (
                                                                    <span className="mobile-submenu-description">{subItem.description}</span>
                                                                )}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}

                        {/* Mobile Contact Item */}
                        <li className="mobile-nav-item">
                            <a
                                href="#contact"
                                className={`mobile-nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                onClick={handleContactClick}
                            >
                                <i className="fas fa-phone mobile-nav-icon"></i>
                                <span>Liên hệ</span>
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Contact Info */}
                    {contactInfo && (
                        <div className="mobile-contact-info">
                            {contactInfo.phone && (
                                <div className="mobile-contact-item">
                                    <i className="fas fa-phone"></i>
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </div>
                            )}
                            {contactInfo.email && (
                                <div className="mobile-contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;