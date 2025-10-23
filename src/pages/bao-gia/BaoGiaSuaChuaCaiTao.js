// src/pages/bao-gia/BaoGiaSuaChuaCaiTao.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CommonStyles.css';
import './BaoGiaSuaChuaCaiTao.css';

const BaoGiaSuaChuaCaiTao = () => {
    const renovationServices = [
        {
            icon: 'fas fa-ruler-combined',
            title: 'Làm sao ước tính chi phí sửa chữa chính xác',
            description: 'Hướng dẫn chi tiết cách tính toán và ước lượng ngân sách sửa chữa cải tạo nhà hợp lý',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/cach-uoc-tinh-chi-phi',
            color: '#667eea'
        },
        {
            icon: 'fas fa-clipboard-list',
            title: 'Quy trình sửa chữa cải tạo từ A-Z',
            description: 'Quy trình làm việc chuyên nghiệp, minh bạch từ khảo sát đến bàn giao',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/quy-trinh-sua-chua',
            color: '#764ba2'
        },
        {
            icon: 'fas fa-calculator',
            title: 'Chi phí sửa chữa phòng khách',
            description: 'Báo giá chi tiết cho việc cải tạo phòng khách hiện đại, tiện nghi',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-khach',
            color: '#10b981'
        },
        {
            icon: 'fas fa-utensils',
            title: 'Chi phí cải tạo phòng bếp',
            description: 'Giải pháp nâng cấp không gian bếp với mức giá phải chăng',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-bep',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-bed',
            title: 'Chi phí sửa chữa phòng ngủ',
            description: 'Tạo không gian nghỉ ngơi lý tưởng với chi phí hợp lý',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-ngu',
            color: '#ef4444'
        },
        {
            icon: 'fas fa-shower',
            title: 'Chi phí cải tạo phòng tắm WC',
            description: 'Nâng cấp phòng tắm hiện đại, sạch sẽ và tiện nghi',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-tam',
            color: '#3b82f6'
        },
        {
            icon: 'fas fa-search',
            title: 'Chọn đơn vị sửa chữa uy tín',
            description: 'Tiêu chí và kinh nghiệm lựa chọn nhà thầu thi công chất lượng',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/chon-don-vi-uy-tin',
            color: '#8b5cf6'
        },
        {
            icon: 'fas fa-lightbulb',
            title: 'Xu hướng sửa chữa cải tạo 2025',
            description: 'Cập nhật xu hướng thiết kế hiện đại, thông minh và bền vững',
            link: '/bao-gia/bao-gia-sua-chua-cai-tao/xu-huong-cai-tao',
            color: '#06b6d4'
        }
    ];

    const priceTable = [
        {
            category: 'Thiết kế - Khảo sát',
            items: [
                { name: 'Khảo sát hiện trạng', content: 'Kiểm tra, đo vẽ công trình', price: 'Miễn phí' },
                { name: 'Thiết kế cải tạo kiến trúc', content: 'Bản vẽ mặt bằng, phối cảnh', price: '120.000 - 180.000 / m²' },
                { name: 'Thiết kế nội thất', content: 'Bản vẽ 2D/3D', price: '150.000 - 250.000 / m²' },
                { name: 'Hồ sơ kỹ thuật thi công', content: 'Triển khai chi tiết', price: '80.000 - 150.000 / m²' }
            ]
        },
        {
            category: 'Tháo dỡ - Xử lý',
            items: [
                { name: 'Đập phá tường gạch 100', content: 'Tháo dỡ tường cũ', price: '150.000 - 200.000 / m²' },
                { name: 'Đập phá tường gạch 200', content: 'Tường chịu lực', price: '200.000 - 300.000 / m²' },
                { name: 'Tháo dỡ nền lát', content: 'Gạch, đá, bê tông', price: '120.000 - 180.000 / m²' },
                { name: 'Đập phá trần thạch cao', content: 'Gỡ bỏ trần cũ', price: '80.000 - 120.000 / m²' },
                { name: 'Vận chuyển xà bần', content: 'Xe 2.5m³', price: '400.000 - 600.000 / xe' }
            ]
        },
        {
            category: 'Xây dựng - Phần thô',
            items: [
                { name: 'Xây tường gạch 100', content: 'Tường ngăn', price: '900.000 - 1.100.000 / m²' },
                { name: 'Xây tường gạch 200', content: 'Tường bao', price: '1.100.000 - 1.300.000 / m²' },
                { name: 'Trát tường xi măng', content: 'Trong nhà', price: '70.000 - 90.000 / m²' },
                { name: 'Trát tường ngoài trời', content: 'Chống thấm', price: '90.000 - 120.000 / m²' },
                { name: 'Đổ bê tông sàn', content: 'Dày 10 - 12 cm', price: '1.000.000 - 1.300.000 / m²' },
                { name: 'Chống thấm sàn', content: 'Sơn, phủ chống thấm', price: '120.000 - 180.000 / m²' }
            ]
        },
        {
            category: 'Hoàn thiện - Hoàn trả',
            items: [
                { name: 'Sơn bả tường', content: '2 lớp bột + 2 lớp sơn', price: '70.000 - 120.000 / m²' },
                { name: 'Ốp lát gạch 300x600', content: 'WC, bếp', price: '150.000 - 220.000 / m²' },
                { name: 'Ốp lát gạch 600x600', content: 'Sàn phòng khách', price: '180.000 - 250.000 / m²' },
                { name: 'Ốp lát gạch 800x800', content: 'Sàn cao cấp', price: '220.000 - 280.000 / m²' },
                { name: 'Trần thạch cao phẳng', content: 'Hoàn thiện sơn', price: '150.000 - 180.000 / m²' },
                { name: 'Trần thạch cao giật cấp', content: 'Có hắt sáng', price: '180.000 - 220.000 / m²' }
            ]
        }
    ];

    const promotions = [
        { icon: 'fas fa-gift', text: 'Miễn phí khảo sát & tư vấn tận nơi' },
        { icon: 'fas fa-drafting-compass', text: 'Hỗ trợ bản vẽ cải tạo 2D/3D khi ký hợp đồng' },
        { icon: 'fas fa-shield-alt', text: 'Bảo hành công trình từ 12 - 24 tháng' },
        { icon: 'fas fa-hand-holding-usd', text: 'Giá trọn gói - không phát sinh' },
        { icon: 'fas fa-file-contract', text: 'Hỗ trợ xin giấy phép sửa chữa cải tạo' }
    ];

    return (
        <div className="renovation-page">
            {/* Hero Section */}
            <section className="renovation-hero">
                <div className="container">
                    <h1 className="hero-title">
                        <i className="fas fa-tools"></i>
                        Báo Giá Sửa Chữa - Cải Tạo Nhà Chi Tiết 2025
                    </h1>
                    <p className="hero-subtitle">
                        Giải pháp tiết kiệm, nâng cấp không gian sống hiện đại và bền vững
                    </p>
                    <div className="hero-features">
                        <div className="hero-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Báo giá minh bạch</span>
                        </div>
                        <div className="hero-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Không phát sinh</span>
                        </div>
                        <div className="hero-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>Đội ngũ chuyên nghiệp</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="renovation-intro">
                        <p>
                            Ngôi nhà sau nhiều năm sử dụng thường bị xuống cấp, hư hỏng hoặc không còn phù hợp công năng. 
                            Thay vì xây mới tốn kém, sửa chữa – cải tạo nhà là giải pháp tiết kiệm, giúp bạn sở hữu 
                            không gian sống tiện nghi, hiện đại và bền vững.
                        </p>
                        <p>
                            Tại <strong>LinHome</strong> chúng tôi cung cấp dịch vụ cải tạo nhà trọn gói, với báo giá 
                            minh bạch – chi tiết – không phát sinh. Đội ngũ kiến trúc sư và thợ thi công giàu kinh nghiệm 
                            sẽ đồng hành cùng bạn từ khảo sát – thiết kế – thi công – hoàn thiện.
                        </p>
                    </div>
                </div>
            </section>

            {/* Price Table */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Bảng Báo Giá Chi Tiết (30 Hạng Mục)</h2>
                    <p className="section-subtitle">
                        Đơn giá dưới đây mang tính tham khảo. Giá có thể thay đổi theo diện tích, 
                        hiện trạng, vật liệu và phong cách thiết kế.
                    </p>
                    
                    <div className="price-tables">
                        {priceTable.map((category, index) => (
                            <div key={index} className="price-category">
                                <h3 className="category-title">{category.category}</h3>
                                <div className="price-items">
                                    <table className="price-table">
                                        <thead>
                                            <tr>
                                                <th>Hạng mục</th>
                                                <th>Nội dung</th>
                                                <th>Đơn giá (VNĐ)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.items.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="item-name">{item.name}</td>
                                                    <td className="item-content">{item.content}</td>
                                                    <td className="item-price">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Dịch Vụ Sửa Chữa Cải Tạo</h2>
                    <p className="section-subtitle">
                        Tìm hiểu chi tiết về từng hạng mục sửa chữa cải tạo
                    </p>
                    
                    <div className="services-grid">
                        {renovationServices.map((service, index) => (
                            <Link to={service.link} key={index} className="service-card">
                                <div className="service-icon" style={{ backgroundColor: service.color }}>
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <span className="service-link">
                                    Xem chi tiết <i className="fas fa-arrow-right"></i>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promotions */}
            <section className="section section-gradient">
                <div className="container">
                    <h2 className="section-title">Ưu Đãi & Cam Kết</h2>
                    <div className="promotions-grid">
                        {promotions.map((promo, index) => (
                            <div key={index} className="promotion-item">
                                <i className={promo.icon}></i>
                                <p>{promo.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Quy Trình Làm Việc Chuyên Nghiệp</h2>
                    <div className="process-steps">
                        {[
                            { number: '1', title: 'Tiếp nhận thông tin', desc: 'Lắng nghe nhu cầu khách hàng' },
                            { number: '2', title: 'Khảo sát miễn phí', desc: 'Đo đạc và đánh giá hiện trạng' },
                            { number: '3', title: 'Báo giá chi tiết', desc: 'Đề xuất phương án và chi phí' },
                            { number: '4', title: 'Ký hợp đồng', desc: 'Thỏa thuận và ký kết hợp đồng' },
                            { number: '5', title: 'Thi công', desc: 'Triển khai đúng tiến độ' },
                            { number: '6', title: 'Bàn giao', desc: 'Nghiệm thu và bảo hành' }
                        ].map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="process-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="renovation-cta">
                <div className="container">
                    <h2>Bạn Cần Sửa Chữa - Cải Tạo Nhà?</h2>
                    <p>
                        Hãy liên hệ ngay với LinHome để được tư vấn miễn phí và nhận báo giá chi tiết nhất!
                    </p>
                    <div className="cta-buttons">
                        <a href="tel:0941090333" className="btn btn-primary">
                            <i className="fas fa-phone"></i>
                            Gọi Ngay: 0941 090 333
                        </a>
                        <a href="https://zalo.me/0941090333" className="btn btn-secondary">
                            <i className="fas fa-comments"></i>
                            Chat Zalo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BaoGiaSuaChuaCaiTao;
