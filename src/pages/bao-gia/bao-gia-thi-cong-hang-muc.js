// src/pages/bao-gia/bao-gia-thi-cong-hang-muc.js
import React, { useState } from 'react';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../../styles/PageStyles.css';

const BaoGiaThiCongHangMucPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Data for all construction items
    const constructionItems = [
        {
            id: 'tran-vach-thach-cao',
            title: 'Trần & Vách Thạch Cao',
            description: 'Thi công trần thạch cao phẳng, giật cấp, vách ngăn cách âm',
            priceRange: '120,000 - 380,000 VNĐ/m²',
            icon: 'fas fa-grip-lines',
            category: 'interior',
            features: ['Trần phẳng', 'Trần giật cấp', 'Vách ngăn', 'Cách âm'],
            bgColor: '#667eea',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao'
        },
        {
            id: 'san-go',
            title: 'Sàn Gỗ & Sàn Nhựa',
            description: 'Lắp đặt sàn gỗ công nghiệp, gỗ tự nhiên, sàn nhựa cao cấp',
            priceRange: '180,000 - 1,200,000 VNĐ/m²',
            icon: 'fas fa-grip-horizontal',
            category: 'flooring',
            features: ['Sàn gỗ công nghiệp', 'Sàn gỗ tự nhiên', 'Sàn nhựa SPC', 'Phào chân tường'],
            bgColor: '#8b5a2b',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/san-go'
        },
        {
            id: 'op-lat-gach-da',
            title: 'Ốp Lát Gạch & Đá',
            description: 'Ốp lát gạch ceramic, porcelain, đá granite, marble',
            priceRange: '80,000 - 550,000 VNĐ/m²',
            icon: 'fas fa-th',
            category: 'flooring',
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
            description: 'Lắp đặt cửa gỗ nhựa composite chống nước cao cấp',
            priceRange: '1,800,000 - 4,500,000 VNĐ/cánh',
            icon: 'fas fa-door-open',
            category: 'doors',
            features: ['Chống nước 100%', 'Cách âm tốt', 'Đa dạng mẫu mã', 'Bền màu lâu'],
            bgColor: '#dc2626',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite'
        },
        {
            id: 'phao-chi',
            title: 'Phào Chỉ PU, PS, Thạch Cao',
            description: 'Lắp đặt phào chỉ trang trí nội thất cao cấp',
            priceRange: '35,000 - 280,000 VNĐ/m',
            icon: 'fas fa-bezier-curve',
            category: 'decoration',
            features: ['Phào PU cao cấp', 'Phào PS giá rẻ', 'Phào thạch cao', 'Trần giật cấp'],
            bgColor: '#7c3aed',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/phao-chi-pu-ps-thach-cao'
        },
        {
            id: 'chong-tham',
            title: 'Chống Thấm',
            description: 'Chống thấm tường, mái, sàn, nhà vệ sinh',
            priceRange: '45,000 - 350,000 VNĐ/m²',
            icon: 'fas fa-shield-alt',
            category: 'waterproofing',
            features: ['Chống thấm tường', 'Chống thấm mái', 'Chống thấm sàn', 'Xử lý thấm'],
            bgColor: '#0891b2',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham'
        },
        {
            id: 'dien-mat-troi',
            title: 'Điện Năng Lượng Mặt Trời',
            description: 'Lắp đặt hệ thống điện mặt trời hòa lưới, độc lập',
            priceRange: '12,000 - 18,000 VNĐ/W',
            icon: 'fas fa-solar-panel',
            category: 'solar',
            features: ['Hòa lưới', 'Độc lập', 'Hybrid', 'Tiết kiệm 70%'],
            bgColor: '#f59e0b',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi'
        },
        {
            id: 'ho-ca-koi',
            title: 'Hồ Cá Koi & Tiểu Cảnh',
            description: 'Thiết kế thi công hồ cá koi, sân vườn, tiểu cảnh',
            priceRange: '3,500 - 12,000 VNĐ/lít',
            icon: 'fas fa-water',
            category: 'landscape',
            features: ['Hồ cá koi', 'Sân vườn', 'Thác nước', 'Hệ thống lọc'],
            bgColor: '#06b6d4',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh'
        },
        {
            id: 'rem-cua',
            title: 'Rèm Cửa Cao Cấp',
            description: 'Lắp đặt rèm cuốn, rèm lá dọc, rèm vải cao cấp',
            priceRange: '180,000 - 800,000 VNĐ/m²',
            icon: 'fas fa-window-maximize',
            category: 'decoration',
            features: ['Rèm cuốn', 'Rèm lá dọc', 'Rèm vải', 'Motor tự động'],
            bgColor: '#8b5cf6',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap'
        },
        {
            id: 'smarthome',
            title: 'Smarthome - Nhà Thông Minh',
            description: 'Giải pháp nhà thông minh toàn diện',
            priceRange: '15,000,000 - 150,000,000 VNĐ',
            icon: 'fas fa-home',
            category: 'technology',
            features: ['Điều khiển từ xa', 'AI tự động', 'An ninh thông minh', 'Tiết kiệm điện'],
            bgColor: '#10b981',
            link: '/bao-gia/bao-gia-thi-cong-hang-muc/smarthome'
        }
    ];

    // Filter categories
    const categories = [
        { id: 'all', name: 'Tất Cả', icon: 'fas fa-th-large' },
        { id: 'interior', name: 'Nội Thất', icon: 'fas fa-couch' },
        { id: 'flooring', name: 'Sàn & Lát', icon: 'fas fa-layer-group' },
        { id: 'windows', name: 'Cửa & Kính', icon: 'fas fa-window-maximize' },
        { id: 'doors', name: 'Cửa Ra Vào', icon: 'fas fa-door-open' },
        { id: 'decoration', name: 'Trang Trí', icon: 'fas fa-paint-brush' },
        { id: 'waterproofing', name: 'Chống Thấm', icon: 'fas fa-shield-alt' },
        { id: 'solar', name: 'Năng Lượng', icon: 'fas fa-solar-panel' },
        { id: 'landscape', name: 'Sân Vườn', icon: 'fas fa-tree' },
        { id: 'technology', name: 'Công Nghệ', icon: 'fas fa-microchip' }
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
                    <h1 className="section-title">
                        <i className="fas fa-tools icon-construction"></i>
                        Báo Giá Thi Công Hạng Mục 2025
                    </h1>
                    <p className="section-subtitle">
                        Báo giá chi tiết từng hạng mục thi công: trần thạch cao, sàn gỗ, ốp lát,
                        nhôm kính tại Hà Nội & Nha Trang. Uy tín - Chất lượng - Giá tốt.
                    </p>

                    {/* Stats */}
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-hard-hat"></i>
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Dự Án</div>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-users"></i>
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Thợ Lành Nghề</div>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-star"></i>
                            <div className="stat-number">4.9/5</div>
                            <div className="stat-label">Đánh Giá</div>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt icon-safety"></i>
                            <div className="stat-number">12-36</div>
                            <div className="stat-label">Tháng BH</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-filter"></i>
                        Chọn Hạng Mục Thi Công
                    </h2>

                    <div className="tabs">
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
            </section>

            {/* Construction Items Grid */}
            <section className="section section-alt">
                <div className="container">
                    <p className="section-subtitle" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        Tìm thấy <strong>{filteredItems.length}</strong> hạng mục thi công
                    </p>

                    <div className="grid-3">
                        {filteredItems.map(item => (
                            <div key={item.id} className="detail-card">
                                <div
                                    className="detail-header"
                                    style={{ background: `linear-gradient(135deg, ${item.bgColor}, ${item.bgColor}dd)` }}
                                >
                                    <h3>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </div>

                                <div className="detail-content">
                                    <div className="price-display">
                                        <div className="price-range">{item.priceRange}</div>
                                        <div className="price-label">Chi phí thi công</div>
                                    </div>

                                    <div className="feature-tags">
                                        {item.features.map((feature, index) => (
                                            <span key={index} className="tag">
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="detail-content">
                                    <div className="detail-actions">
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
                    <h2 className="section-title">
                        <i className="fas fa-star icon-quality"></i>
                        Tại Sao Chọn Chúng Tôi?
                    </h2>
                    <p className="section-subtitle">
                        Những ưu điểm vượt trội trong dịch vụ thi công hạng mục
                    </p>

                    <div className="grid-4">
                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3>10+ Năm Kinh Nghiệm</h3>
                            <p>Đội ngũ thợ lành nghề, kỹ thuật viên giàu kinh nghiệm trong từng hạng mục chuyên biệt.</p>
                        </div>

                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                                <i className="fas fa-calculator"></i>
                            </div>
                            <h3>Báo Giá Minh Bạch</h3>
                            <p>Báo giá chi tiết từng hạng mục, vật tư rõ ràng. Cam kết không phát sinh ngoài hợp đồng.</p>
                        </div>

                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Chất Lượng Chuẩn</h3>
                            <p>Sử dụng vật liệu chính hãng, quy trình thi công theo tiêu chuẩn kỹ thuật.</p>
                        </div>

                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Bảo Hành Dài Hạn</h3>
                            <p>Bảo hành từ 12-36 tháng tùy hạng mục. Hỗ trợ bảo dưỡng định kỳ.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-map-marker-alt icon-location"></i>
                        Khu Vực Phục Vụ
                    </h2>

                    <div className="grid-2">
                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Hà Nội & Các Tỉnh Phía Bắc</h3>
                            <p>Thi công các hạng mục chuyên nghiệp cho nhà phố, chung cư, biệt thự tại Hà Nội và vùng phụ cận.</p>
                            <ul className="info-list">
                                <li><i className="fas fa-check"></i> Hà Nội nội thành</li>
                                <li><i className="fas fa-check"></i> Vùng ven Hà Nội</li>
                                <li><i className="fas fa-check"></i> Hải Phòng, Quảng Ninh</li>
                                <li><i className="fas fa-check"></i> Thái Nguyên, Vĩnh Phúc</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <div className="icon-badge" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Nha Trang & Các Tỉnh Phía Nam</h3>
                            <p>Dịch vụ thi công hạng mục cho resort, khách sạn, nhà ở ven biển tại Nha Trang và miền Trung.</p>
                            <ul className="info-list">
                                <li><i className="fas fa-check"></i> Nha Trang, Khánh Hòa</li>
                                <li><i className="fas fa-check"></i> Phan Thiết, Bình Thuận</li>
                                <li><i className="fas fa-check"></i> Đà Lạt, Lâm Đồng</li>
                                <li><i className="fas fa-check"></i> Quy Nhơn, Bình Định</li>
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