// src/pages/thiet-ke/thiet-ke-noi-that.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import './ThietKePage.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const ThietKeNoiThatPage = () => {
    const [activeStyle, setActiveStyle] = useState('hien-dai');

    // Interior design styles data
    const interiorStyles = [
        {
            id: 'hien-dai',
            name: 'Nội thất Hiện đại',
            description: 'Tập trung vào tính thực dụng, đường nét gọn gàng, dễ ứng dụng trong không gian đô thị.',
            characteristics: [
                'Đường thẳng, bề mặt phẳng',
                'Đồ nội thất đa chức năng',
                'Hệ lưu trữ tối ưu',
                'Ánh sáng và vật liệu dễ vệ sinh'
            ],
            materials: ['Kính', 'Kim loại', 'Gỗ công nghiệp', 'MDF phủ Veneer'],
            colors: ['Trắng', 'Xám', 'Be', 'Điểm nhấn màu sắc nổi'],
            suitableFor: ['Chung cư', 'Nhà phố hiện đại'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="modern-interior" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="300" fill="url(%23modern-interior)"/><rect x="50" y="50" width="300" height="200" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="70" y="180" width="80" height="40" fill="%23667eea" rx="8"/><rect x="170" y="180" width="80" height="40" fill="%23667eea" rx="8"/><rect x="270" y="160" width="60" height="60" fill="%23764ba2" rx="8"/><rect x="80" y="80" width="200" height="4" fill="%23667eea" rx="2"/><circle cx="120" cy="100" r="8" fill="%23764ba2"/><circle cx="200" cy="100" r="8" fill="%23764ba2"/><circle cx="280" cy="100" r="8" fill="%23764ba2"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Nội thất hiện đại</text></svg>'
        },
        {
            id: 'tan-co-dien',
            name: 'Nội thất Tân cổ điển',
            description: 'Kết hợp đường nét cổ điển tinh tế với công năng hiện đại.',
            characteristics: [
                'Phào chỉ mềm mại',
                'Đồ nội thất cong',
                'Đèn chùm, chi tiết dát kim loại',
                'Cân bằng sang trọng và tiện dụng'
            ],
            materials: ['Da', 'Vải nhung', 'Đá marble', 'Gỗ tự nhiên'],
            colors: ['Kem', 'Vàng ánh kim', 'Xanh đậm', 'Nâu gỗ'],
            suitableFor: ['Phòng khách biệt thự', 'Phòng ngủ master cao cấp'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="neoclassic-interior" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23d4af37"/><stop offset="100%" style="stop-color:%23b8860b"/></linearGradient></defs><rect width="400" height="300" fill="url(%23neoclassic-interior)"/><rect x="50" y="50" width="300" height="200" fill="rgba(255,248,220,0.95)" rx="12"/><ellipse cx="120" cy="180" rx="40" ry="20" fill="%23d4af37"/><ellipse cx="280" cy="180" rx="40" ry="20" fill="%23d4af37"/><rect x="180" y="160" width="40" height="60" fill="%238b4513" rx="8"/><circle cx="200" cy="80" r="25" fill="rgba(212,175,55,0.8)"/><path d="M 175 80 Q 200 60 225 80" stroke="%23d4af37" stroke-width="3" fill="none"/><rect x="80" y="120" width="60" height="40" fill="rgba(139,69,19,0.6)" rx="8"/><rect x="260" y="120" width="60" height="40" fill="rgba(139,69,19,0.6)" rx="8"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Tân cổ điển</text></svg>'
        },
        {
            id: 'toi-gian',
            name: 'Nội thất Tối giản',
            description: '"Ít nhưng chất" - tập trung vào trải nghiệm và công năng.',
            characteristics: [
                'Đồ ít, không gian thoáng',
                'Các mặt phẳng lớn',
                'Độ chính xác trong thi công',
                'Chọn vật liệu chất lượng cao'
            ],
            materials: ['Gỗ sáng màu', 'Bê tông mịn', 'Kim loại tối giản'],
            colors: ['Trắng', 'Xám', 'Đen', 'Màu gỗ tự nhiên'],
            suitableFor: ['Căn hộ nhỏ', 'Nhà phố cần sự gọn gàng'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="minimal-interior" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f8fafc"/><stop offset="100%" style="stop-color:%23e2e8f0"/></linearGradient></defs><rect width="400" height="300" fill="url(%23minimal-interior)"/><rect x="80" y="80" width="240" height="160" fill="rgba(255,255,255,0.98)" rx="4"/><rect x="120" y="160" width="60" height="40" fill="%23374151" rx="4"/><rect x="200" y="160" width="60" height="40" fill="%23374151" rx="4"/><rect x="100" y="120" width="200" height="8" fill="%23d1d5db" rx="4"/><rect x="300" y="140" width="8" height="60" fill="%23374151" rx="0"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="%23666" font-weight="bold">Tối giản</text></svg>'
        },
        {
            id: 'scandinavian',
            name: 'Nội thất Scandinavian',
            description: 'Ấm áp, thân thiện, ưu tiên ánh sáng và vật liệu tự nhiên.',
            characteristics: [
                'Đường nét đơn giản',
                'Chất liệu gỗ sáng',
                'Textile ấm',
                'Ánh sáng tự nhiên tối ưu'
            ],
            materials: ['Gỗ sồi/óak', 'Len', 'Cotton', 'Gốm sứ đơn giản'],
            colors: ['Trắng', 'Pastel', 'Gỗ sáng'],
            suitableFor: ['Gia đình trẻ', 'Căn hộ nhỏ', 'Homestay ấm cúng'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="scandinavian" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23fef3c7"/><stop offset="100%" style="stop-color:%23fde68a"/></linearGradient></defs><rect width="400" height="300" fill="url(%23scandinavian)"/><rect x="60" y="60" width="280" height="180" fill="rgba(255,255,255,0.95)" rx="12"/><rect x="90" y="160" width="70" height="40" fill="%23d97706" rx="12"/><rect x="180" y="160" width="70" height="40" fill="%23d97706" rx="12"/><rect x="270" y="140" width="40" height="60" fill="%2392400e" rx="8"/><ellipse cx="130" cy="120" rx="20" ry="10" fill="rgba(217,119,6,0.6)"/><ellipse cx="220" cy="115" rx="25" ry="12" fill="rgba(217,119,6,0.6)"/><ellipse cx="280" cy="110" rx="15" ry="8" fill="rgba(217,119,6,0.6)"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="%23666" font-weight="bold">Scandinavian</text></svg>'
        },
        {
            id: 'industrial',
            name: 'Nội thất Industrial',
            description: 'Lấy cảm hứng từ kho xưởng, thể hiện qua vật liệu thô và cấu trúc lộ.',
            characteristics: [
                'Tường gạch, ống thép',
                'Bê tông trần',
                'Đồ dùng tái chế',
                'Vật liệu mềm để làm ấm'
            ],
            materials: ['Gạch thô', 'Thép', 'Bê tông', 'Gỗ tái chế'],
            colors: ['Xám', 'Nâu', 'Đen', 'Tông kim loại'],
            suitableFor: ['Loft', 'Quán café', 'Không gian thương mại'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="industrial" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23374151"/><stop offset="100%" style="stop-color:%23111827"/></linearGradient></defs><rect width="400" height="300" fill="url(%23industrial)"/><rect x="60" y="80" width="280" height="160" fill="rgba(75,85,99,0.9)" rx="4"/><rect x="80" y="160" width="60" height="40" fill="%23d97706" rx="0"/><rect x="160" y="160" width="60" height="40" fill="%23d97706" rx="0"/><rect x="240" y="160" width="60" height="40" fill="%23d97706" rx="0"/><rect x="70" y="100" width="8" height="60" fill="%23374151"/><rect x="100" y="100" width="8" height="60" fill="%23374151"/><rect x="280" y="100" width="8" height="60" fill="%23374151"/><rect x="310" y="100" width="8" height="60" fill="%23374151"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Industrial</text></svg>'
        },
        {
            id: 'bohemian',
            name: 'Nội thật Bohemian',
            description: 'Phong cách tự do, phóng khoáng, giàu sắc màu và họa tiết.',
            characteristics: [
                'Lớp chồng họa tiết',
                'Thảm dệt, đồ thủ công',
                'Trang trí tay nghề',
                'Phối họa tiết thông minh'
            ],
            materials: ['Rattan', 'Tre', 'Đồ dệt thổ cẩm', 'Gỗ tự nhiên', 'Len'],
            colors: ['Gam màu ấm', 'Jewel tones', 'Tông đất'],
            suitableFor: ['Không gian sáng tạo', 'Phòng cá nhân', 'Homestay nghệ thuật'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="boho" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23dc2626"/><stop offset="100%" style="stop-color:%2392400e"/></linearGradient></defs><rect width="400" height="300" fill="url(%23boho)"/><rect x="50" y="60" width="300" height="180" fill="rgba(254,243,199,0.95)" rx="12"/><ellipse cx="120" cy="180" rx="30" ry="15" fill="%23dc2626"/><ellipse cx="200" cy="175" rx="35" ry="18" fill="%23059669"/><ellipse cx="280" cy="185" rx="25" ry="12" fill="%23c2410c"/><circle cx="100" cy="120" r="15" fill="rgba(220,38,38,0.7)"/><circle cx="180" cy="110" r="18" fill="rgba(5,150,105,0.7)"/><circle cx="260" cy="125" r="12" fill="rgba(194,65,12,0.7)"/><polygon points="300,80 310,100 320,80" fill="%23dc2626"/><polygon points="320,90 330,110 340,90" fill="%23059669"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Bohemian</text></svg>'
        },
        {
            id: 'luxury',
            name: 'Nội thất Luxury',
            description: 'Tập trung vào vật liệu cao cấp và chi tiết hoàn thiện tinh xảo.',
            characteristics: [
                'Đường nét tinh xảo',
                'Đồ nội thất custom',
                'Đèn trang trí nổi bật',
                'Chất lượng vật liệu cao cấp'
            ],
            materials: ['Marble', 'Đá tự nhiên', 'Da thật', 'Gỗ quý', 'Pha lê', 'Mạ vàng'],
            colors: ['Đen', 'Trắng', 'Vàng kim', 'Xanh navy', 'Nâu sẫm'],
            suitableFor: ['Biệt thự cao cấp', 'Penthouse', 'Phòng khách xa hoa'],
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="luxury" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23000000"/><stop offset="100%" style="stop-color:%23374151"/></linearGradient></defs><rect width="400" height="300" fill="url(%23luxury)"/><rect x="50" y="60" width="300" height="180" fill="rgba(255,255,255,0.98)" rx="16"/><rect x="80" y="160" width="80" height="50" fill="%23000000" rx="12"/><rect x="180" y="160" width="80" height="50" fill="%23000000" rx="12"/><rect x="280" y="140" width="50" height="70" fill="%23d4af37" rx="8"/><circle cx="150" cy="100" r="20" fill="%23d4af37"/><polygon points="130,100 150,80 170,100" fill="%23fbbf24"/><rect x="200" y="90" width="60" height="8" fill="%23d4af37" rx="4"/><text x="200" y="280" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Luxury</text></svg>'
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Tư vấn phong cách, nhu cầu",
            icon: "fa-comments"
        },
        {
            step: 2,
            title: "Khảo sát không gian, đo đạc",
            icon: "fa-ruler-combined"
        },
        {
            step: 3,
            title: "Lên bản vẽ 2D, phối cảnh 3D",
            icon: "fa-drafting-compass"
        },
        {
            step: 4,
            title: "Điều chỉnh, chốt phương án",
            icon: "fa-check-circle"
        },
        {
            step: 5,
            title: "Triển khai bản vẽ kỹ thuật chi tiết",
            icon: "fa-file-alt"
        },
        {
            step: 6,
            title: "Bàn giao hồ sơ, hỗ trợ thi công",
            icon: "fa-handshake"
        }
    ];

    const benefits = [
        {
            title: "Không gian sống tiện nghi, cá tính",
            description: "Thiết kế phù hợp với phong cách sống và sở thích cá nhân",
            icon: "fa-home"
        },
        {
            title: "Bố trí hợp lý, tiết kiệm diện tích",
            description: "Tối ưu hóa không gian sử dụng, mỗi góc nhà đều có ý nghĩa",
            icon: "fa-puzzle-piece"
        },
        {
            title: "Tư vấn bởi kiến trúc sư giàu kinh nghiệm",
            description: "Đội ngũ chuyên gia hàng đầu với nhiều năm kinh nghiệm",
            icon: "fa-user-tie"
        },
        {
            title: "Tối ưu chi phí, hạn chế sai sót",
            description: "Thiết kế chi tiết giúp kiểm soát chi phí và chất lượng thi công",
            icon: "fa-dollar-sign"
        }
    ];

    const handleStyleChange = (styleId) => {
        setActiveStyle(styleId);
    };

    const activeStyleData = interiorStyles.find(style => style.id === activeStyle);

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Thiết Kế Nội Thất</h1>
                            <p className="hero-subtitle">
                                Nâng Tầm Giá Trị Không Gian Sống
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">7+</span>
                                    <span className="stat-label">Phong cách</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">6</span>
                                    <span className="stat-label">Bước thiết kế</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Cá nhân hóa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <div className="intro-text">
                                <h2>Thiết kế nội thất là gì?</h2>
                                <p>
                                    Thiết kế nội thất là nghệ thuật sắp xếp, tổ chức không gian bên trong công trình,
                                    giúp ngôi nhà vừa tiện nghi vừa thể hiện cá tính của gia chủ.
                                </p>

                                <h3>Vai trò của thiết kế nội thất</h3>
                                <ul className="role-list">
                                    <li>Tối ưu diện tích sử dụng</li>
                                    <li>Đảm bảo thẩm mỹ, phong cách riêng</li>
                                    <li>Tạo cảm giác thoải mái, tiện nghi</li>
                                    <li>Gia tăng giá trị cho ngôi nhà</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='interior' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23interior)'/><rect x='60' y='60' width='280' height='180' fill='rgba(255,255,255,0.95)' rx='12'/><rect x='80' y='160' width='60' height='40' fill='%23667eea' rx='8'/><rect x='160' y='160' width='60' height='40' fill='%23667eea' rx='8'/><rect x='240' y='140' width='80' height='60' fill='%23764ba2' rx='8'/><circle cx='120' cy='100' r='15' fill='%23f59e0b'/><circle cx='200' cy='100' r='15' fill='%23f59e0b'/><circle cx='280' cy='100' r='15' fill='%23f59e0b'/><rect x='90' y='80' width='220' height='4' fill='%23667eea' rx='2'/><text x='200' y='270' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Thiết kế nội thất</text></svg>"
                                    alt="Thiết kế nội thất"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interior Styles Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Phong Cách Thiết Kế Nội Thất Được Ưa Chuộng</h2>
                            <p>Khám phá những phong cách nội thất phù hợp với không gian sống của bạn</p>
                        </div>

                        <div className="styles-tabs">
                            {interiorStyles.map((style) => (
                                <button
                                    key={style.id}
                                    className={`style-tab ${activeStyle === style.id ? 'active' : ''}`}
                                    onClick={() => handleStyleChange(style.id)}
                                >
                                    {style.name}
                                </button>
                            ))}
                        </div>

                        {activeStyleData && (
                            <div className="style-detail">
                                <div className="style-image">
                                    <img src={activeStyleData.image} alt={activeStyleData.name} />
                                </div>
                                <div className="style-info">
                                    <h3>{activeStyleData.name}</h3>
                                    <p className="style-description">{activeStyleData.description}</p>

                                    <div className="style-features">
                                        <div className="feature-group">
                                            <h4><i className="fas fa-star"></i> Đặc trưng</h4>
                                            <ul>
                                                {activeStyleData.characteristics.map((char, index) => (
                                                    <li key={index}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-cube"></i> Vật liệu/Chất liệu</h4>
                                            <div className="tag-list">
                                                {activeStyleData.materials.map((material, index) => (
                                                    <span key={index} className="tag">{material}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-palette"></i> Bảng màu</h4>
                                            <div className="tag-list">
                                                {activeStyleData.colors.map((color, index) => (
                                                    <span key={index} className="tag color-tag">{color}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-home"></i> Phù hợp cho</h4>
                                            <div className="tag-list">
                                                {activeStyleData.suitableFor.map((suit, index) => (
                                                    <span key={index} className="tag">{suit}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Thiết Kế Nội Thất</h2>
                            <p>6 bước thực hiện dự án thiết kế nội thất chuyên nghiệp</p>
                        </div>

                        <div className="process-grid">
                            {processSteps.map((step, index) => (
                                <div key={step.step} className="process-card">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <h3>{step.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lợi Ích Khi Thuê Đơn Vị Thiết Kế Nội Thất Chuyên Nghiệp</h2>
                            <p>Những giá trị mà chúng tôi mang lại cho không gian sống của bạn</p>
                        </div>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">
                                        <i className={`fas ${benefit.icon}`}></i>
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTAContent />
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default ThietKeNoiThatPage;
