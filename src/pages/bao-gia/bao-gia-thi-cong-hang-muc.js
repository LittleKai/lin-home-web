// src/pages/bao-gia/bao-gia-thi-cong-hang-muc.js
import React, { useState } from 'react';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../../styles/CommonStyles.css';
import './BaoGiaThiCongHangMuc.css';

const BaoGiaThiCongHangMucPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Data for all construction items
    const constructionItems = [
        {
            id: 'tran-vach-thach-cao',
            title: 'Trần & Vách Thạch Cao',
            description: 'Thi công trần thạch cao phẳng, giật cấp, vách ngăn cách âm',
            priceRange: '120,000 - 380,000 VNĐ/m²',
            icon: 'fas fa-layer-group',
            category: 'interior',
            features: ['Trần phẳng', 'Trần giật cấp', 'Vách ngăn', 'Cách âm'],
            bgColor: '#667eea',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao'
        },
        {
            id: 'san-go',
            title: 'Sàn Gỗ Công Nghiệp & Tự Nhiên',
            description: 'Lắp đặt sàn gỗ công nghiệp, gỗ tự nhiên cao cấp',
            priceRange: '180,000 - 1,200,000 VNĐ/m²',
            icon: 'fas fa-tree',
            category: 'flooring',
            features: ['Sàn gỗ công nghiệp', 'Sàn gỗ tự nhiên', 'Lót chống ẩm', 'Phào chân tường'],
            bgColor: '#8b5a2b',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/san-go'
        },
        {
            id: 'op-lat-gach-da',
            title: 'Ốp Lát Gạch & Đá Hoa Cương',
            description: 'Ốp lát gạch ceramic, porcelain, đá granite, marble',
            priceRange: '80,000 - 450,000 VNĐ/m²',
            icon: 'fas fa-th-large',
            category: 'tiling',
            features: ['Gạch ceramic', 'Gạch porcelain', 'Đá granite', 'Đá marble'],
            bgColor: '#059669',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da'
        },
        {
            id: 'nhom-kinh',
            title: 'Nhôm Kính',
            description: 'Thi công cửa nhôm kính, vách kính, mặt dựng',
            priceRange: '450,000 - 1,800,000 VNĐ/m²',
            icon: 'fas fa-window-maximize',
            category: 'windows',
            features: ['Cửa nhôm kính', 'Vách kính', 'Mặt dựng', 'Kính cường lực'],
            bgColor: '#3b82f6',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh'
        },
        {
            id: 'cua-composite',
            title: 'Cửa Composite',
            description: 'Lắp đặt cửa gỗ nhựa composite chống nước',
            priceRange: '1,800,000 - 4,500,000 VNĐ/cánh',
            icon: 'fas fa-door-open',
            category: 'doors',
            features: ['Chống nước', 'Cách âm', 'Đa dạng mẫu mã', 'Bền màu'],
            bgColor: '#dc2626',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite'
        },
        {
            id: 'son-tuong',
            title: 'Sơn Tường',
            description: 'Sơn nước, sơn nhũ, sơn hiệu ứng cao cấp',
            priceRange: '35,000 - 180,000 VNĐ/m²',
            icon: 'fas fa-paint-roller',
            category: 'painting',
            features: ['Sơn nước', 'Sơn nhũ', 'Sơn hiệu ứng', 'Sơn chống thấm'],
            bgColor: '#7c3aed',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/son-tuong'
        },
        {
            id: 'dien-nuoc',
            title: 'Điện Nước',
            description: 'Thi công hệ thống điện, nước, cấp thoát nước',
            priceRange: '180,000 - 450,000 VNĐ/m²',
            icon: 'fas fa-plug',
            category: 'mep',
            features: ['Điện dân dụng', 'Nước sạch', 'Thoát nước', 'Điều hòa'],
            bgColor: '#f59e0b',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/dien-nuoc'
        },
        {
            id: 'khung-go',
            title: 'Khung Gỗ',
            description: 'Thi công khung gỗ tự nhiên, gỗ công nghiệp',
            priceRange: '850,000 - 2,800,000 VNĐ/m²',
            icon: 'fas fa-hammer',
            category: 'structure',
            features: ['Gỗ tự nhiên', 'Gỗ công nghiệp', 'Khung cửa', 'Khung vách'],
            bgColor: '#92400e',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/khung-go'
        },
        {
            id: 'mai-ton',
            title: 'Mái Tôn',
            description: 'Lợp mái tôn, tôn lạnh, panel cách nhiệt',
            priceRange: '180,000 - 650,000 VNĐ/m²',
            icon: 'fas fa-home',
            category: 'roofing',
            features: ['Tôn lạnh', 'Panel cách nhiệt', 'Tôn màu', 'Chống thấm'],
            bgColor: '#64748b',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/mai-ton'
        },
        {
            id: 'giay-dan-tuong',
            title: 'Giấy Dán Tường',
            description: 'Dán giấy tường cao cấp, decor wall',
            priceRange: '45,000 - 320,000 VNĐ/m²',
            icon: 'fas fa-image',
            category: 'decoration',
            features: ['Giấy 3D', 'Giấy vinyl', 'Giấy dệt', 'Giấy cao cấp'],
            bgColor: '#ec4899',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/giay-dan-tuong'
        },
        {
            id: 'be-tong-ep-kim',
            title: 'Bê Tông Ép Kim',
            description: 'Thi công bê tông ép kim cho sàn, tường',
            priceRange: '280,000 - 750,000 VNĐ/m²',
            icon: 'fas fa-industry',
            category: 'concrete',
            features: ['Sàn ép kim', 'Tường ép kim', 'Cách âm', 'Chống cháy'],
            bgColor: '#475569',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/be-tong-ep-kim'
        }
    ];

    // Filter categories
    const categories = [
        { id: 'all', name: 'Tất Cả Hạng Mục', icon: 'fas fa-th-large' },
        { id: 'interior', name: 'Nội Thất', icon: 'fas fa-couch' },
        { id: 'flooring', name: 'Sàn & Lát', icon: 'fas fa-layer-group' },
        { id: 'tiling', name: 'Ốp Lát', icon: 'fas fa-th' },
        { id: 'windows', name: 'Cửa & Kính', icon: 'fas fa-window-maximize' },
        { id: 'doors', name: 'Cửa Ra Vào', icon: 'fas fa-door-open' },
        { id: 'painting', name: 'Sơn & Trang Trí', icon: 'fas fa-paint-brush' },
        { id: 'mep', name: 'M&E', icon: 'fas fa-tools' },
        { id: 'structure', name: 'Kết Cấu', icon: 'fas fa-building' },
        { id: 'roofing', name: 'Mái & Che Phủ', icon: 'fas fa-home' },
        { id: 'decoration', name: 'Trang Trí', icon: 'fas fa-paint-roller' },
        { id: 'concrete', name: 'Bê Tông', icon: 'fas fa-industry' }
    ];

    // Filter items based on category
    const filteredItems = activeFilter === 'all' 
        ? constructionItems 
        : constructionItems.filter(item => item.category === activeFilter);

    return (
        <div className="construction-items-page">
            {/* Hero Section */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="text-center">
                        <h1 className="section-title">
                            🏗️ Báo Giá Thi Công Hạng Mục 2025
                        </h1>
                        <p className="section-subtitle">
                            Báo giá chi tiết từng hạng mục thi công: trần thạch cao, sàn gỗ, ốp lát, 
                            nhôm kính tại Hà Nội & Nha Trang. Uy tín - Chất lượng - Giá tốt.
                        </p>
                        
                        <div className="hero-stats grid-4">
                            <div className="stat-item">
                                <div className="stat-number">11+</div>
                                <div className="stat-label">Hạng Mục</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Dự Án</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Hỗ Trợ</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">12-36</div>
                                <div className="stat-label">Tháng BH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="section">
                <div className="container">
                    <div className="filter-categories">
                        <h2 className="section-title">Chọn Hạng Mục Thi Công</h2>
                        
                        <div className="filter-tabs">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`tab ${activeFilter === category.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(category.id)}
                                >
                                    <i className={category.icon}></i>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Construction Items Grid */}
            <section className="section section-alt">
                <div className="container">
                    <div className="items-grid grid-3">
                        {filteredItems.map(item => (
                            <div key={item.id} className="item-card card">
                                <div 
                                    className="card-header"
                                    style={{ background: `linear-gradient(135deg, ${item.bgColor}, ${item.bgColor}dd)` }}
                                >
                                    <h3>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                                
                                <div className="card-body">
                                    <div className="price-info">
                                        <div className="price-range">{item.priceRange}</div>
                                        <div className="price-note">Chi phí thi công</div>
                                    </div>
                                    
                                    <div className="features-list">
                                        {item.features.map((feature, index) => (
                                            <span key={index} className="feature-tag">
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="card-actions">
                                        <a href={item.link} className="btn btn-primary">
                                            <i className="fas fa-eye"></i>
                                            Xem Chi Tiết
                                        </a>
                                        <a href="/lien-he" className="btn btn-secondary">
                                            <i className="fas fa-phone"></i>
                                            Tư Vấn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">⭐ Tại Sao Chọn Chúng Tôi?</h2>
                    <p className="section-subtitle">
                        Những ưu điểm vượt trội trong dịch vụ thi công hạng mục
                    </p>

                    <div className="benefits-grid grid-4">
                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3>10+ Năm Kinh Nghiệm</h3>
                            <p>Đội ngũ thợ lành nghề, kỹ thuật viên giàu kinh nghiệm trong từng hạng mục chuyên biệt.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                                <i className="fas fa-calculator"></i>
                            </div>
                            <h3>Báo Giá Minh Bạch</h3>
                            <p>Báo giá chi tiết từng hạng mục, vật tư rõ ràng. Cam kết không phát sinh ngoài hợp đồng.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Chất Lượng Chuẩn</h3>
                            <p>Sử dụng vật liệu chính hãng, quy trình thi công theo tiêu chuẩn kỹ thuật.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Bảo Hành Dài Hạn</h3>
                            <p>Bảo hành từ 12-36 tháng tùy hạng mục. Hỗ trợ bảo dưỡng định kỳ.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">🗺️ Khu Vực Phục Vụ</h2>
                    <div className="service-areas grid-2">
                        <div className="area-card">
                            <div className="area-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Hà Nội & Các Tỉnh Phía Bắc</h3>
                            <p>Thi công các hạng mục chuyên nghiệp cho nhà phố, chung cư, biệt thự tại Hà Nội và vùng phụ cận.</p>
                            <ul>
                                <li><i className="fas fa-check"></i> Hà Nội nội thành</li>
                                <li><i className="fas fa-check"></i> Vùng ven Hà Nội</li>
                                <li><i className="fas fa-check"></i> Hải Phòng, Quảng Ninh</li>
                                <li><i className="fas fa-check"></i> Thái Nguyên, Vĩnh Phúc</li>
                            </ul>
                        </div>
                        
                        <div className="area-card">
                            <div className="area-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Nha Trang & Các Tỉnh Phía Nam</h3>
                            <p>Dịch vụ thi công hạng mục cho resort, khách sạn, nhà ở ven biển tại Nha Trang và miền Trung.</p>
                            <ul>
                                <li><i className="fas fa-check"></i> Nha Trang, Khánh Hòa</li>
                                <li><i className="fas fa-check"></i> Phan Thiết, Bình Thuận</li>
                                <li><i className="fas fa-check"></i> Đà Lạt, Lâm Đồng</li>
                                <li><i className="fas fa-check"></i> Quy Nhon, Bình Định</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default BaoGiaThiCongHangMucPage;
