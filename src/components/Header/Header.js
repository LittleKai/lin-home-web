// src/components/Header/Header.js - Updated with Applications section
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

    // Section icon mapping
    const getSectionIcon = (section) => {
        const iconMap = {
            'Thiết kế': 'pencil-ruler',
            'Thi công': 'hard-hat',
            'Ứng dụng': 'mobile-alt', // New icon for Applications
            'Báo giá': 'calculator'
        };
        return iconMap[section] || 'circle';
    };

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

        return currentPath.includes(sectionLower) || activeSection === sectionLower;
    };

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

    // Handle contact navigation - scroll to ContactSection
    const handleContactClick = (e) => {
        e.preventDefault();

        // Check if we're on the home page
        if (location.pathname === '/') {
            // Scroll to contact section on home page
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('contact');
            }
        } else {
            // Navigate to home page with contact hash
            navigate('/#contact');
        }

        setIsMobileMenuOpen(false);
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
                                                            <div className="dropdown-description">{item.description}</div>
                                                        )}
                                                    </div>
                                                </a>

                                                {/* Second Level Submenu (if exists) */}
                                                {item.hasSubmenu && item.submenu && (
                                                    <div className={`submenu ${activeSubmenu === item.title ? 'show' : ''}`}>
                                                        <div className="submenu-header">
                                                            <i className="fas fa-tools"></i>
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
                                <a
                                    href="#contact"
                                    className={`nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                    onClick={handleContactClick}
                                    aria-current={isActiveSection('contact') ? 'page' : undefined}
                                >
                                    Liên hệ
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
                                                                className={`fas fa-chevron-${mobileActiveSubmenu === item.title ? 'up' : 'down'} mobile-submenu-icon`}
                                                                aria-hidden="true"
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
                            <a
                                href="#contact"
                                className={`mobile-nav-link ${isActiveSection('contact') ? 'active' : ''}`}
                                onClick={(e) => {
                                    handleContactClick(e);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                                <span>Liên hệ</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;