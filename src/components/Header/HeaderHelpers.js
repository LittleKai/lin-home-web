// src/components/Header/HeaderHelpers.js
// Helper functions for Header component

/**
 * Get icon class for section based on section name
 * @param {string} section - Section name
 * @returns {string} Icon class
 */
export const getSectionIcon = (section) => {
    const iconMap = {
        'Thiết kế': 'fas fa-pencil-ruler',
        'Thi công': 'fas fa-hard-hat',
        'Báo giá': 'fas fa-calculator',
        'Ứng dụng': 'fas fa-mobile-alt',
        'Dự án': 'fas fa-folder-open'
    };
    return iconMap[section] || 'fas fa-circle';
};

/**
 * Get icon class for menu item with fallback based on title keywords
 * @param {Object} item - Menu item object
 * @param {string} section - Section name
 * @returns {string} Icon class
 */
export const getItemIcon = (item, section) => {
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

/**
 * Get project-specific CSS class for distinct colors
 * @param {Object} item - Menu item object
 * @param {string} section - Section name
 * @returns {string} CSS class for project type
 */
export const getProjectClass = (item, section) => {
    if (section !== 'Dự án') return '';

    const title = item.title?.toLowerCase() || '';
    if (title.includes('biệt thự')) return 'project-villa';
    if (title.includes('nhà phố')) return 'project-townhouse';
    if (title.includes('căn hộ')) return 'project-apartment';
    if (title.includes('thương mại')) return 'project-commercial';

    return '';
};

/**
 * Check if a section is currently active
 * @param {string} section - Section name
 * @param {string} activeSection - Currently active section
 * @param {Object} location - React Router location object
 * @returns {boolean} True if section is active
 */
export const isActiveSection = (section, activeSection, location) => {
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
