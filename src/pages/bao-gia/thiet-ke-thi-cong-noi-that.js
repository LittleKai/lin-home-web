// src/pages/bao-gia/thiet-ke-thi-cong-noi-that.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PageStyles.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const ThietKeThiCongNoiThat = () => {
    const designStyles = [
        {
            id: 'hien-dai',
            title: 'Phong cách Hiện đại',
            slug: 'phong-cach-hien-dai',
            description: 'Không gian tối giản – tinh tế – tiện nghi',
            priceRange: '150.000 - 280.000 VNĐ/m²',
            icon: 'fa-building',
            features: [
                'Thiết kế tối giản, tinh tế',
                'Tối ưu diện tích sử dụng',
                'Phối cảnh 3D chi tiết',
                'Nhiều tầng, chú trọng ánh sáng'
            ],
            suitable: ['Căn hộ chung cư', 'Nhà phố', 'Biệt thự hiện đại']
        },
        {
            id: 'tan-co-dien',
            title: 'Phong cách Tân cổ điển',
            slug: 'phong-cach-tan-co-dien',
            description: 'Sang trọng – đẳng cấp – tinh tế',
            priceRange: '180.000 - 320.000 VNĐ/m²',
            icon: 'fa-crown',
            features: [
                'Phào chỉ tinh giản, sang trọng',
                'Vật liệu cao cấp (gỗ, đá marble)',
                'Chi tiết nghệ thuật',
                'Thiết kế đẳng cấp'
            ],
            suitable: ['Căn hộ cao cấp', 'Nhà phố', 'Biệt thự sang trọng']
        },
        {
            id: 'indochine',
            title: 'Phong cách Indochine',
            slug: 'phong-cach-indochine',
            description: 'Đông Dương sang trọng – hoài cổ',
            priceRange: '180.000 - 350.000 VNĐ/m²',
            icon: 'fa-landmark',
            features: [
                'Kết hợp Pháp cổ điển & Á Đông',
                'Vật liệu tự nhiên (gỗ, tre, mây)',
                'Chi tiết thủ công tinh xảo',
                'Gần gũi thiên nhiên'
            ],
            suitable: ['Biệt thự', 'Villa', 'Homestay', 'Resort']
        },
        {
            id: 'wabi-sabi',
            title: 'Phong cách Wabi-Sabi',
            slug: 'phong-cach-wabi-sabi',
            description: 'Tối giản – mộc mạc – tinh thần Nhật Bản',
            priceRange: '150.000 - 300.000 VNĐ/m²',
            icon: 'fa-spa',
            features: [
                'Giản dị, mộc mạc, tự nhiên',
                'Vật liệu tự nhiên (gỗ, đá, tre)',
                'Không gian mở, ánh sáng tự nhiên',
                'Triết lý Zen Nhật Bản'
            ],
            suitable: ['Căn hộ nhỏ', 'Nhà phố', 'Biệt thự', 'Homestay']
        }
    ];

    const servicePackages = [
        {
            name: 'Gói Cơ bản',
            description: 'Phù hợp căn hộ nhỏ, tiết kiệm chi phí',
            icon: 'fa-box',
            features: [
                'Tư vấn ý tưởng + bản vẽ 2D mặt bằng',
                'Báo giá dự toán sơ bộ',
                'Tư vấn lựa chọn vật liệu'
            ]
        },
        {
            name: 'Gói Nâng cao',
            description: 'Phù hợp nhà phố, chung cư diện tích trung bình',
            icon: 'fa-layer-group',
            features: [
                'Thiết kế phối cảnh 3D chi tiết',
                'Hồ sơ kỹ thuật thi công',
                'Dự toán chi phí vật liệu + thi công',
                'Tư vấn trong quá trình thi công'
            ]
        },
        {
            name: 'Gói Cao cấp (Trọn gói)',
            description: 'Phù hợp biệt thự, villa cao cấp',
            icon: 'fa-star',
            features: [
                'Thiết kế kiến trúc + nội thất đồng bộ',
                'Hồ sơ 3D chi tiết, sát thực tế',
                'Giám sát trong quá trình thi công',
                'Cam kết đúng tiến độ, không phát sinh',
                'Bảo hành & bảo trì dài hạn'
            ]
        }
    ];

    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Chi phí minh bạch',
            description: 'Báo giá rõ ràng, không phát sinh'
        },
        {
            icon: 'fa-cube',
            title: 'Thiết kế 3D',
            description: 'Hình dung trực quan trước khi thi công'
        },
        {
            icon: 'fa-users',
            title: 'Đội ngũ chuyên nghiệp',
            description: 'KTS chuyên sâu từng phong cách'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Bảo hành dài hạn',
            description: 'Hỗ trợ sau khi bàn giao'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-tags icon-pricing"></i>
                        Báo Giá Thiết Kế Thi Công Nội Thất 2025
                    </h1>
                    <p className="section-subtitle">
                        Bảng báo giá thiết kế nội thất 2025 tại Hà Nội & Nha Trang.
                        Minh bạch chi phí theo m², nhiều gói dịch vụ từ cơ bản đến cao cấp.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2>
                        <i className="fas fa-palette"></i>
                        Các Phong Cách Thiết Kế Nội Thất
                    </h2>
                    <div className="grid-2">
                        {designStyles.map((style) => (
                            <Link
                                key={style.id}
                                to={`/bao-gia/thiet-ke-thi-cong-noi-that/${style.slug}`}
                                className="style-card"
                            >
                                <div className="card-header">
                                    <h3>
                                        <i className={`fas ${style.icon}`}></i>
                                        {style.title}
                                    </h3>
                                    <p>{style.description}</p>
                                    <div className="price-range">
                                        {style.priceRange}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="materials">
                                        <h4><i className="fas fa-check-circle"></i> Đặc điểm nổi bật</h4>
                                        <ul className="icon-list">
                                            {style.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-caret-right"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="spaces">
                                        <h4><i className="fas fa-home"></i> Phù hợp với</h4>
                                        <ul>
                                            {style.suitable.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-circle"></i>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>
                        <i className="fas fa-box-open"></i>
                        Các Gói Dịch Vụ Thiết Kế
                    </h2>
                    <div className="grid-3">
                        {servicePackages.map((pkg, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className={`fas ${pkg.icon}`}></i>
                                        {pkg.name}
                                    </h3>
                                    <p>{pkg.description}</p>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-list">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-gradient">
                <div className="container">
                    <h2>
                        <i className="fas fa-star"></i>
                        Vì Sao Nên Chọn Dịch Vụ Của Chúng Tôi?
                    </h2>
                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="feature-item">
                                <i className={`fas ${benefit.icon}`}></i>
                                <span>{benefit.title}</span>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="tips-section">
                        <h2>
                            <i className="fas fa-info-circle icon-tips"></i>
                            Lưu Ý Khi Chọn Dịch Vụ Thiết Kế
                        </h2>
                        <div className="grid-4">
                            <div className="info-card">
                                <i className="fas fa-ruler-combined"></i>
                                <h4>Diện tích & yêu cầu</h4>
                                <p>Giá có thể thay đổi tùy diện tích, vật liệu và độ chi tiết mong muốn</p>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4>Đặc điểm địa phương</h4>
                                <p>Hà Nội: chú ý giếng trời, lấy sáng. Nha Trang: vật liệu chống ẩm mặn</p>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-comments"></i>
                                <h4>Tư vấn miễn phí</h4>
                                <p>Miễn phí khảo sát & báo giá chi tiết cho từng công trình</p>
                            </div>
                            <div className="info-card">
                                <i className="fas fa-balance-scale"></i>
                                <h4>So sánh dễ dàng</h4>
                                <p>Báo giá minh bạch giúp so sánh và quyết định dễ dàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default ThietKeThiCongNoiThat;