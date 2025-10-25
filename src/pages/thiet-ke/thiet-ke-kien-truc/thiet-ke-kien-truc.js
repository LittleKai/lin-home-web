import React from 'react';
import { Link } from 'react-router-dom';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../../styles/PageStyles.css';

const ThietKeKienTrucPage = () => {
    const services = [
        {
            id: 'lau-dai-dinh-thu',
            title: '🏰 Thiết kế lâu đài - dinh thự',
            description: 'Sang trọng - đẳng cấp - chuẩn phong thủy. Báo giá chi tiết, thiết kế 3D chuyên nghiệp',
            priceRange: '350,000 - 500,000 VNĐ/m²',
            icon: 'fas fa-crown',
            link: '/bao-gia/thiet-ke-kien-truc/lau-dai-dinh-thu',
            bgColor: '#8b5cf6'
        },
        {
            id: 'villa',
            title: '🏡 Thiết kế villa',
            description: 'Sang trọng - hiện đại - tối ưu công năng. Báo giá chi tiết, thiết kế 3D chuyên nghiệp',
            priceRange: '250,000 - 400,000 VNĐ/m²',
            icon: 'fas fa-home',
            link: '/bao-gia/thiet-ke-kien-truc/villa',
            bgColor: '#10b981'
        },
        {
            id: 'khach-san-nha-hang',
            title: '🏨 Thiết kế khách sạn - nhà hàng - shop - cafe',
            description: 'Đẹp - chuyên nghiệp - tối ưu công năng - chuẩn thương hiệu',
            priceRange: '300,000 - 450,000 VNĐ/m²',
            icon: 'fas fa-building',
            link: '/bao-gia/thiet-ke-kien-truc/khach-san-nha-hang',
            bgColor: '#f59e0b'
        },
        {
            id: 'can-ho-chung-cu',
            title: '🏢 Thiết kế căn hộ - chung cư',
            description: 'Hiện đại - tối ưu không gian - đa phong cách. Thiết kế 3D chi tiết',
            priceRange: '150,000 - 250,000 VNĐ/m²',
            icon: 'fas fa-building',
            link: '/bao-gia/thiet-ke-kien-truc/can-ho-chung-cu',
            bgColor: '#3b82f6'
        },
        {
            id: 'biet-thu',
            title: '🏘️ Thiết kế biệt thự',
            description: 'Đẳng cấp - sang trọng - bền vững. Chuẩn phong thủy, thiết kế 3D chuyên nghiệp',
            priceRange: '200,000 - 350,000 VNĐ/m²',
            icon: 'fas fa-house-user',
            link: '/bao-gia/thiet-ke-kien-truc/biet-thu',
            bgColor: '#ec4899'
        },
        {
            id: 'nha-pho',
            title: '🏘️ Thiết kế nhà phố',
            description: 'Thông minh - tối ưu không gian - đa năng. Phù hợp đô thị',
            priceRange: '180,000 - 300,000 VNĐ/m²',
            icon: 'fas fa-city',
            link: '/bao-gia/thiet-ke-kien-truc/nha-pho',
            bgColor: '#06b6d4'
        },
        {
            id: 'resort-du-lich',
            title: '🏖️ Thiết kế resort - khu du lịch',
            description: 'Nghỉ dưỡng - gần gũi thiên nhiên - sang trọng. Tối ưu cảnh quan',
            priceRange: '250,000 - 400,000 VNĐ/m²',
            icon: 'fas fa-umbrella-beach',
            link: '/bao-gia/thiet-ke-kien-truc/resort-du-lich',
            bgColor: '#14b8a6'
        },
        {
            id: 'canh-quan-san-vuon',
            title: '🌳 Thiết kế cảnh quan - sân vườn',
            description: 'Xanh - sạch - đẹp - chuẩn phong thủy. Hồ cá koi, tiểu cảnh',
            priceRange: '120,000 - 250,000 VNĐ/m²',
            icon: 'fas fa-tree',
            link: '/bao-gia/thiet-ke-kien-truc/canh-quan-san-vuon',
            bgColor: '#22c55e'
        },
        {
            id: 'tu-duong-nha-tho',
            title: '🏯 Thiết kế từ đường - nhà thờ',
            description: 'Kiến trúc truyền thống - chuẩn phong thủy - bền vững',
            priceRange: '200,000 - 300,000 VNĐ/m²',
            icon: 'fas fa-torii-gate',
            link: '/bao-gia/thiet-ke-kien-truc/tu-duong-nha-tho',
            bgColor: '#a855f7'
        },
        {
            id: 'nha-xuong-cong-nghiep',
            title: '🏭 Thiết kế nhà xưởng - nhà công nghiệp',
            description: 'Hiện đại - tối ưu công năng - tiết kiệm chi phí',
            priceRange: '80,000 - 180,000 VNĐ/m²',
            icon: 'fas fa-industry',
            link: '/bao-gia/thiet-ke-kien-truc/nha-xuong-cong-nghiep',
            bgColor: '#64748b'
        }
    ];

    const whyChooseUs = [
        {
            icon: 'fas fa-drafting-compass',
            title: 'Thiết Kế 3D Chuyên Nghiệp',
            description: 'Phối cảnh 3D chi tiết, sống động, dễ hình dung công trình'
        },
        {
            icon: 'fas fa-yin-yang',
            title: 'Chuẩn Phong Thủy',
            description: 'Thiết kế theo nguyên tắc phong thủy, mang lại may mắn'
        },
        {
            icon: 'fas fa-users',
            title: 'Đội Ngũ KTS Giàu Kinh Nghiệm',
            description: 'Kiến trúc sư nhiều năm kinh nghiệm với công trình cao cấp'
        },
        {
            icon: 'fas fa-file-contract',
            title: 'Hồ Sơ Chi Tiết',
            description: 'Bàn giao hồ sơ đầy đủ, hỗ trợ giám sát thi công'
        }
    ];

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-building icon-primary"></i>
                        Thiết Kế Kiến Trúc 2025
                    </h1>
                    <p className="section-subtitle">
                        Dịch vụ thiết kế kiến trúc chuyên nghiệp tại Hà Nội & Nha Trang
                    </p>
                    <div className="grid-4">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="feature-item">
                                <i className={item.icon}></i>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list icon-primary"></i>
                        Dịch Vụ Thiết Kế
                    </h2>
                    <p className="section-subtitle">
                        10 loại hình thiết kế kiến trúc chuyên nghiệp
                    </p>

                    <div className="grid-3">
                        {services.map((service) => (
                            <Link 
                                key={service.id} 
                                to={service.link}
                                className="service-card"
                                style={{ 
                                    background: `linear-gradient(135deg, ${service.bgColor}15, ${service.bgColor}05)`,
                                    borderLeft: `4px solid ${service.bgColor}`
                                }}
                            >
                                <div className="service-icon" style={{ color: service.bgColor }}>
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-price" style={{ color: service.bgColor }}>
                                    <i className="fas fa-tag"></i>
                                    {service.priceRange}
                                </div>
                                <div className="service-link" style={{ color: service.bgColor }}>
                                    Xem chi tiết <i className="fas fa-arrow-right"></i>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-primary"></i>
                        Quy Trình Thiết Kế
                    </h2>
                    
                    <div className="grid-2">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Khảo Sát & Tư Vấn</h3>
                            <p>Đo đạc hiện trạng, tư vấn ý tưởng và phong cách phù hợp</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Phác Thảo Mặt Bằng</h3>
                            <p>Thiết kế mặt bằng công năng, bố trí không gian hợp lý</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Thiết Kế Phối Cảnh 3D</h3>
                            <p>Phối cảnh 3D kiến trúc & nội thất chi tiết, sống động</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Hoàn Thiện Hồ Sơ</h3>
                            <p>Bàn giao hồ sơ thiết kế chi tiết & hỗ trợ giám sát thi công</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-handshake icon-primary"></i>
                        Cam Kết Dịch Vụ
                    </h2>
                    
                    <div className="grid-2">
                        <div className="commitment-item">
                            <i className="fas fa-gift"></i>
                            <h3>Miễn phí tư vấn</h3>
                            <p>Tư vấn ý tưởng ban đầu hoàn toàn miễn phí</p>
                        </div>
                        <div className="commitment-item">
                            <i className="fas fa-cube"></i>
                            <h3>Thiết kế 3D sống động</h3>
                            <p>Phối cảnh 3D chi tiết, dễ hình dung công trình</p>
                        </div>
                        <div className="commitment-item">
                            <i className="fas fa-user-graduate"></i>
                            <h3>Đội ngũ chuyên nghiệp</h3>
                            <p>KTS nhiều năm kinh nghiệm với công trình cao cấp</p>
                        </div>
                        <div className="commitment-item">
                            <i className="fas fa-headset"></i>
                            <h3>Hỗ trợ giám sát</h3>
                            <p>Bàn giao hồ sơ chi tiết, hỗ trợ trong suốt quá trình thi công</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default ThietKeKienTrucPage;
