// src/pages/bao-gia/BaoGiaSuaChuaCaiTao.js
import React, { useState } from 'react';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../../styles/PageStyles.css';

const BaoGiaSuaChuaCaiTaoPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeFaq, setActiveFaq] = useState(null);

    const categories = [
        { id: 'all', name: 'Tất Cả', icon: 'fas fa-th' },
        { id: 'design', name: 'Thiết Kế', icon: 'fas fa-pencil-ruler' },
        { id: 'demolition', name: 'Tháo Dỡ', icon: 'fas fa-hammer' },
        { id: 'construction', name: 'Xây Dựng', icon: 'fas fa-building' },
        { id: 'finishing', name: 'Hoàn Thiện', icon: 'fas fa-paint-roller' },
        { id: 'system', name: 'Điện Nước', icon: 'fas fa-bolt' },
        { id: 'furniture', name: 'Nội Thất', icon: 'fas fa-couch' }
    ];

    const priceItems = [
        {
            category: 'design',
            name: 'Khảo sát hiện trạng',
            description: 'Kiểm tra, đo vẽ công trình',
            price: 'Miễn phí',
            unit: '',
            icon: 'fas fa-search'
        },
        {
            category: 'design',
            name: 'Thiết kế cải tạo kiến trúc',
            description: 'Bản vẽ mặt bằng, phối cảnh',
            price: '120,000 - 180,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-drafting-compass'
        },
        {
            category: 'design',
            name: 'Thiết kế nội thất',
            description: 'Bản vẽ 2D/3D',
            price: '150,000 - 250,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-home'
        },
        {
            category: 'design',
            name: 'Hồ sơ kỹ thuật thi công',
            description: 'Triển khai chi tiết',
            price: '80,000 - 150,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-file-alt'
        },
        {
            category: 'demolition',
            name: 'Đập phá tường gạch 100',
            description: 'Tháo dỡ tường cũ',
            price: '150,000 - 200,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-hammer'
        },
        {
            category: 'demolition',
            name: 'Đập phá tường gạch 200',
            description: 'Tường chịu lực',
            price: '200,000 - 300,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-hammer'
        },
        {
            category: 'demolition',
            name: 'Tháo dỡ nền lát',
            description: 'Gạch, đá, bê tông',
            price: '120,000 - 180,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-tools'
        },
        {
            category: 'demolition',
            name: 'Đập phá trần thạch cao',
            description: 'Gỡ bỏ trần cũ',
            price: '80,000 - 120,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-tools'
        },
        {
            category: 'demolition',
            name: 'Vận chuyển xà bần',
            description: 'Xe 2.5m³',
            price: '400,000 - 600,000',
            unit: 'VNĐ/xe',
            icon: 'fas fa-truck'
        },
        {
            category: 'construction',
            name: 'Xây tường gạch 100',
            description: 'Tường ngăn',
            price: '900,000 - 1,100,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-th-large'
        },
        {
            category: 'construction',
            name: 'Xây tường gạch 200',
            description: 'Tường bao',
            price: '1,100,000 - 1,300,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-th-large'
        },
        {
            category: 'construction',
            name: 'Trát tường xi măng',
            description: 'Trong nhà',
            price: '70,000 - 90,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-trowel'
        },
        {
            category: 'construction',
            name: 'Trát tường ngoài trời',
            description: 'Chống thấm',
            price: '90,000 - 120,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-trowel'
        },
        {
            category: 'construction',
            name: 'Đổ bê tông sàn',
            description: 'Dày 10-12cm',
            price: '1,000,000 - 1,300,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-layer-group'
        },
        {
            category: 'construction',
            name: 'Chống thấm sàn',
            description: 'Sơn, phủ chống thấm',
            price: '120,000 - 180,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-shield-alt'
        },
        {
            category: 'finishing',
            name: 'Sơn bả tường',
            description: '2 lớp bột + 2 lớp sơn',
            price: '70,000 - 120,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-paint-roller'
        },
        {
            category: 'finishing',
            name: 'Ốp lát gạch 300x600',
            description: 'WC, bếp',
            price: '150,000 - 220,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-th'
        },
        {
            category: 'finishing',
            name: 'Ốp lát gạch 600x600',
            description: 'Sàn phòng khách',
            price: '180,000 - 250,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-th'
        },
        {
            category: 'finishing',
            name: 'Ốp lát gạch 800x800',
            description: 'Sàn cao cấp',
            price: '220,000 - 280,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-th'
        },
        {
            category: 'finishing',
            name: 'Trần thạch cao phẳng',
            description: 'Hoàn thiện sơn',
            price: '150,000 - 180,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-grip-lines'
        },
        {
            category: 'finishing',
            name: 'Trần thạch cao giật cấp',
            description: 'Có hắt sáng',
            price: '180,000 - 220,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-grip-lines'
        },
        {
            category: 'finishing',
            name: 'Cửa nhôm kính',
            description: 'Xingfa, PMA',
            price: '1,800,000 - 2,800,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-door-open'
        },
        {
            category: 'finishing',
            name: 'Cửa gỗ công nghiệp',
            description: 'MDF/HDF',
            price: '2,000,000 - 3,200,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-door-closed'
        },
        {
            category: 'finishing',
            name: 'Lan can cầu thang kính',
            description: 'Tay vịn gỗ/INOX',
            price: '1,200,000 - 1,800,000',
            unit: 'VNĐ/md',
            icon: 'fas fa-grip-vertical'
        },
        {
            category: 'system',
            name: 'Đi dây điện âm tường',
            description: 'Ống gen + dây Cadivi',
            price: '35,000 - 50,000',
            unit: 'VNĐ/md',
            icon: 'fas fa-bolt'
        },
        {
            category: 'system',
            name: 'Ổ cắm, công tắc',
            description: 'Panasonic, Sino',
            price: '150,000 - 250,000',
            unit: 'VNĐ/điểm',
            icon: 'fas fa-plug'
        },
        {
            category: 'system',
            name: 'Lắp đèn LED downlight',
            description: 'Âm trần',
            price: '150,000 - 250,000',
            unit: 'VNĐ/bóng',
            icon: 'fas fa-lightbulb'
        },
        {
            category: 'system',
            name: 'Đi ống nước PPR',
            description: 'Âm sàn 20-32mm',
            price: '60,000 - 90,000',
            unit: 'VNĐ/md',
            icon: 'fas fa-faucet'
        },
        {
            category: 'system',
            name: 'Lắp thiết bị vệ sinh',
            description: 'Bồn cầu, lavabo, sen tắm',
            price: '350,000 - 600,000',
            unit: 'VNĐ/bộ',
            icon: 'fas fa-toilet'
        },
        {
            category: 'furniture',
            name: 'Tủ bếp gỗ công nghiệp',
            description: 'MDF chống ẩm',
            price: '3,000,000 - 4,500,000',
            unit: 'VNĐ/md',
            icon: 'fas fa-utensils'
        },
        {
            category: 'furniture',
            name: 'Tủ quần áo gỗ CN',
            description: 'MDF/MFC phủ Melamine',
            price: '3,200,000 - 4,800,000',
            unit: 'VNĐ/m²',
            icon: 'fas fa-door-open'
        },
        {
            category: 'furniture',
            name: 'Giường ngủ gỗ CN',
            description: 'MDF/MFC',
            price: '5,000,000 - 8,000,000',
            unit: 'VNĐ/chiếc',
            icon: 'fas fa-bed'
        },
        {
            category: 'furniture',
            name: 'Bàn ăn gỗ CN',
            description: '4-6 ghế',
            price: '5,000,000 - 7,500,000',
            unit: 'VNĐ/bộ',
            icon: 'fas fa-chair'
        },
        {
            category: 'furniture',
            name: 'Sofa nỉ/gỗ CN',
            description: '2-3 chỗ',
            price: '6,000,000 - 12,000,000',
            unit: 'VNĐ/bộ',
            icon: 'fas fa-couch'
        }
    ];

    const filteredItems = activeCategory === 'all'
        ? priceItems
        : priceItems.filter(item => item.category === activeCategory);

    const benefits = [
        {
            icon: 'fas fa-search',
            title: 'Miễn Phí Khảo Sát',
            desc: 'Đo đạc, kiểm tra hiện trạng và tư vấn chi tiết không tính phí'
        },
        {
            icon: 'fas fa-file-contract',
            title: 'Báo Giá Minh Bạch',
            desc: 'Chi tiết từng hạng mục, không phát sinh chi phí ngoài hợp đồng'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Bảo Hành 12-24 Tháng',
            desc: 'Cam kết bảo hành dài hạn, hỗ trợ bảo trì trọn đời công trình'
        },
        {
            icon: 'fas fa-hand-holding-usd',
            title: 'Giá Trọn Gói',
            desc: 'Không phát sinh, thanh toán theo tiến độ an toàn'
        }
    ];

    const processSteps = [
        { step: '1', title: 'Tiếp Nhận', desc: 'Lắng nghe nhu cầu & nhu cầu' },
        { step: '2', title: 'Khảo Sát', desc: 'Đo đạc, kiểm tra hiện trạng' },
        { step: '3', title: 'Báo Giá', desc: 'Thiết kế & báo giá chi tiết' },
        { step: '4', title: 'Ký HĐ', desc: 'Thỏa thuận & ký hợp đồng' },
        { step: '5', title: 'Thi Công', desc: 'Thực hiện đúng tiến độ' },
        { step: '6', title: 'Bàn Giao', desc: 'Nghiệm thu & bảo hành' }
    ];

    const faqs = [
        {
            question: 'Báo giá này đã bao gồm vật liệu chưa?',
            answer: 'Có, báo giá đã bao gồm cả vật liệu và nhân công. Tuy nhiên, giá cụ thể sẽ tùy thuộc vào chất lượng vật liệu bạn chọn (phổ thông, trung cấp hay cao cấp).'
        },
        {
            question: 'Thời gian cải tạo một căn nhà mất bao lâu?',
            answer: 'Tùy vào quy mô: Cải tạo 1 phòng 1-2 tuần, cải tạo căn hộ 50-80m² khoảng 1-2 tháng, cải tạo nhà phố 3 tầng khoảng 2-3 tháng.'
        },
        {
            question: 'Chi phí có phát sinh không?',
            answer: 'Với hợp đồng rõ ràng, chi phí sẽ không phát sinh. Mọi thay đổi trong quá trình thi công (nếu có) sẽ được báo trước và chỉ thực hiện khi có sự đồng ý của khách hàng.'
        },
        {
            question: 'Có cần xin giấy phép sửa chữa không?',
            answer: 'Tùy vào quy mô công trình. Nếu chỉ sửa chữa nội thất thông thường thì không cần. Nếu thay đổi kết cấu, phá tường chịu lực thì cần xin phép. Chúng tôi sẽ hỗ trợ bạn trong việc này.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-clipboard-list"></i>
                        Báo Giá Sửa Chữa Cải Tạo Nhà Chi Tiết
                    </h1>
                    <p className="section-subtitle">
                        Bảng giá 30 hạng mục sửa chữa - cải tạo nhà mới nhất 2025, minh bạch và cập nhật
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="filter-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <i className={cat.icon}></i>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid-3">
                        {filteredItems.map((item, index) => (
                            <div key={index} className="info-card">
                                <div className="card-icon" style={{
                                    background: item.category === 'design' ? '#667eea' :
                                        item.category === 'demolition' ? '#dc2626' :
                                            item.category === 'construction' ? '#f59e0b' :
                                                item.category === 'finishing' ? '#10b981' :
                                                    item.category === 'system' ? '#3b82f6' :
                                                        '#8b5cf6'
                                }}>
                                    <i className={item.icon}></i>
                                </div>
                                <h3>{item.name}</h3>
                                <p className="card-description">{item.description}</p>
                                <div className="price-tag">
                                    <span className="price-amount">{item.price}</span>
                                    {item.unit && <span className="price-unit">{item.unit}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-gift"></i>
                        Ưu Đãi & Cam Kết
                    </h2>
                    <div className="grid-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <i className={`${benefit.icon} icon-large`}></i>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list-ol"></i>
                        Quy Trình Làm Việc Chuyên Nghiệp
                    </h2>
                    <div className="process-steps">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-card">
                                <div className="process-number">{step.step}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-calculator"></i>
                        Ước Tính Chi Phí Sơ Bộ
                    </h2>
                    <div className="estimate-cards">
                        <div className="estimate-card">
                            <h3>
                                <i className="fas fa-star"></i>
                                Cải Tạo Cơ Bản
                            </h3>
                            <div className="estimate-price">2.5M - 3.5M</div>
                            <div className="estimate-unit">VNĐ/m²</div>
                            <ul className="estimate-features">
                                <li><i className="fas fa-check"></i> Sơn sửa tường</li>
                                <li><i className="fas fa-check"></i> Sửa chữa trần</li>
                                <li><i className="fas fa-check"></i> Thay sàn cơ bản</li>
                                <li><i className="fas fa-check"></i> Điện nước đơn giản</li>
                            </ul>
                        </div>
                        <div className="estimate-card highlight">
                            <div className="badge">Phổ Biến</div>
                            <h3>
                                <i className="fas fa-star"></i>
                                Cải Tạo Nâng Cấp
                            </h3>
                            <div className="estimate-price">3.5M - 5M</div>
                            <div className="estimate-unit">VNĐ/m²</div>
                            <ul className="estimate-features">
                                <li><i className="fas fa-check"></i> Trần thạch cao giật cấp</li>
                                <li><i className="fas fa-check"></i> Sàn gỗ cao cấp</li>
                                <li><i className="fas fa-check"></i> Ốp lát gạch 600x600</li>
                                <li><i className="fas fa-check"></i> Nội thất cơ bản</li>
                            </ul>
                        </div>
                        <div className="estimate-card">
                            <h3>
                                <i className="fas fa-star"></i>
                                Cải Tạo Cao Cấp
                            </h3>
                            <div className="estimate-price">5M - 7M</div>
                            <div className="estimate-unit">VNĐ/m²</div>
                            <ul className="estimate-features">
                                <li><i className="fas fa-check"></i> Thiết kế cao cấp</li>
                                <li><i className="fas fa-check"></i> Vật liệu nhập khẩu</li>
                                <li><i className="fas fa-check"></i> Nội thất đầy đủ</li>
                                <li><i className="fas fa-check"></i> Smart home</li>
                            </ul>
                        </div>
                    </div>
                    <div className="estimate-note">
                        <i className="fas fa-info-circle"></i>
                        <strong>Lưu ý:</strong> Đây là mức giá tham khảo. Chi phí thực tế phụ thuộc vào hiện trạng công trình, diện tích, vật liệu và thiết kế cụ thể.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tools"></i>
                        Các Dịch Vụ Liên Quan
                    </h2>
                    <div className="grid-4">
                        {[
                            { title: 'Sửa Chữa Phòng Khách', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/sua-chua-phong-khach', icon: 'fas fa-couch' },
                            { title: 'Sửa Chữa Phòng Ngủ', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/sua-chua-phong-ngu', icon: 'fas fa-bed' },
                            { title: 'Cải Tạo Phòng Bếp', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/cai-tao-phong-bep', icon: 'fas fa-kitchen-set' },
                            { title: 'Cải Tạo Phòng Tắm', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/cai-tao-phong-tam', icon: 'fas fa-bath' },
                            { title: 'Quy Trình Sửa Chữa', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/quy-trinh-sua-chua', icon: 'fas fa-clipboard-list' },
                            { title: 'Cách Ước Tính Chi Phí', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/cach-uoc-tinh-chi-phi', icon: 'fas fa-calculator' },
                            { title: 'Chọn Đơn Vị Uy Tín', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/chon-don-vi-uy-tin', icon: 'fas fa-award' },
                            { title: 'Xu Hướng Cải Tạo 2025', link: '/bao-gia/bao-gia-thiet-ke-thi-cong/xu-huong-cai-tao', icon: 'fas fa-lightbulb' }
                        ].map((service, index) => (
                            <a key={index} href={service.link} className="service-link-card">
                                <i className={service.icon}></i>
                                <span>{service.title}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default BaoGiaSuaChuaCaiTaoPage;