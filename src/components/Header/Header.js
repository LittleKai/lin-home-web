// src/components/Header/Header.js - Refactored version
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { menuData, contactInfo } from '../../data/menuData';
import { getSectionIcon, getItemIcon, getProjectClass, isActiveSection } from './HeaderHelpers';

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

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
        event.preventDefault();
        event.stopPropagation();
        setActiveDropdown(activeDropdown === section ? null : section);
        setMobileActiveSubmenu(null);
    };

    // Handle mobile submenu toggle
    const handleMobileSubmenuToggle = (item, event) => {
        event.preventDefault();
        event.stopPropagation();

        if (item.hasSubmenu) {
            setMobileActiveSubmenu(mobileActiveSubmenu === item.title ? null : item.title);
        } else {
            handleDropdownItemClick(item, event);
        }
    };

    // Handle home link click
    const handleHomeClick = (event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);
        navigate('/');
    };

    // Handle contact link click
    const handleContactClick = (event) => {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setMobileActiveSubmenu(null);
        navigate('/contact');
    };

    // Render desktop dropdown menu
    const renderDesktopDropdown = (items, section) => (
        <div className={`dropdown ${activeDropdown === section ? 'show' : ''}`}>
            {Array.isArray(items) && items.map((item, index) => (
                <div
                    key={index}
                    className={`dropdown-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
                    onMouseEnter={() => handleSubmenuEnter(item)}
                    onMouseLeave={handleSubmenuLeave}
                >
                    <button
                        className="dropdown-item-content"
                        onClick={(e) => handleDropdownItemClick(item, e)}
                    >
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
                    </button>

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
                </div>
            ))}
        </div>
    );

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    {/* Logo */}
                    <Link to="/" className="logo" onClick={handleHomeClick}>
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
                                    className={`nav-link ${isActiveSection('home', activeSection, location) ? 'active' : ''}`}
                                    onClick={handleHomeClick}
                                >
                                    <i className="fas fa-home nav-link-icon" aria-hidden="true"></i>
                                    <span>Trang chủ</span>
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
                                        className={`nav-link ${isActiveSection(section, activeSection, location) ? 'active' : ''}`}
                                        aria-haspopup="true"
                                        aria-expanded={activeDropdown === section}
                                    >
                                        <i className={`${getSectionIcon(section)} nav-link-icon`} aria-hidden="true"></i>
                                        <span>{section}</span>
                                        <i className="fas fa-chevron-down dropdown-icon" aria-hidden="true"></i>
                                    </button>

                                    {/* Desktop Dropdown */}
                                    {renderDesktopDropdown(items, section)}
                                </li>
                            ))}

                            {/* Contact Item */}
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className={`nav-link ${isActiveSection('contact', activeSection, location) ? 'active' : ''}`}
                                    onClick={handleContactClick}
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
                                className={`mobile-nav-link ${isActiveSection('home', activeSection, location) ? 'active' : ''}`}
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
                                        <div
                                            key={index}
                                            className={`mobile-dropdown-item ${item.hasSubmenu ? 'has-submenu' : ''} ${mobileActiveSubmenu === item.title ? 'submenu-open' : ''}`}
                                        >
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
                                                                {/* Description bị ẩn bởi CSS: .mobile-submenu-description { display: none !important; } */}
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
                                className={`mobile-nav-link ${isActiveSection('contact', activeSection, location) ? 'active' : ''}`}
                                onClick={handleContactClick}
                            >
                                <i className="fas fa-phone mobile-nav-icon"></i>
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