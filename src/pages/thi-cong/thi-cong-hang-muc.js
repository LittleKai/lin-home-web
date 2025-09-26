// src/pages/thi-cong/thi-cong-hang-muc.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';
import './ThiCongHangMuc.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const ThiCongHangMucPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    // Services data - 11 main construction categories
    const hangMucServices = [
        {
            id: 'tran-vach-thach-cao',
            title: 'Thi công trần & vách thạch cao',
            description: 'Thi công nhanh, cách âm, chống nóng, hoàn thiện thẩm mỹ. Báo giá minh bạch, bảo hành.',
            icon: 'fa-layer-group',
            duration: '3-7 ngày',
            warranty: '12-24 tháng',
            features: ['Cách âm & cách nhiệt tốt', 'Tạo hình linh hoạt', 'Bề mặt mịn dễ sơn'],
            link: '/thi-cong/tran-vach-thach-cao',
            bgColor: '#667eea'
        },
        {
            id: 'san-go',
            title: 'Thi công sàn gỗ',
            description: 'Sàn gỗ công nghiệp & tự nhiên, lắp đặt chuẩn kỹ thuật, chống ẩm, bảo hành dài hạn.',
            icon: 'fa-tree',
            duration: '2-5 ngày',
            warranty: '12-24 tháng',
            features: ['Chống ẩm tối ưu', 'Lắp đặt nhanh chóng', 'Ấm cúng và sang trọng'],
            link: '/thi-cong/san-go',
            bgColor: '#10b981'
        },
        {
            id: 'da-op-lat',
            title: 'Thi công đá ốp lát',
            description: 'Mặt tiền, cầu thang, bếp, sàn - cắt chuẩn, mạch kín, chống thấm.',
            icon: 'fa-gem',
            duration: '5-10 ngày',
            warranty: '12-24 tháng',
            features: ['Granite, marble, nhân tạo', 'Cắt chuẩn mạch kín', 'Chống thấm hiệu quả'],
            link: '/thi-cong/da-op-lat',
            bgColor: '#f59e0b'
        },
        {
            id: 'nhom-kinh',
            title: 'Thi công nhôm kính',
            description: 'Cửa, vách, mặt dựng - thẩm mỹ, chịu lực, cách âm, chống nóng.',
            icon: 'fa-window-maximize',
            duration: '5-15 ngày',
            warranty: '12-36 tháng',
            features: ['Nhẹ, bền, chống ăn mòn', 'Cách âm hiệu quả', 'Thiết kế hiện đại'],
            link: '/thi-cong/nhom-kinh',
            bgColor: '#8b5cf6'
        },
        {
            id: 'cua-composite',
            title: 'Thi công cửa composite',
            description: 'Chống ẩm, chống mối mọt, bền bỉ cho cửa nhà tắm, phòng ngủ, phòng vệ sinh.',
            icon: 'fa-door-open',
            duration: '1-3 ngày',
            warranty: '12-24 tháng',
            features: ['Chịu nước tốt', 'Không mối mọt', 'Giá ổn định'],
            link: '/thi-cong/cua-composite',
            bgColor: '#ef4444'
        },
        {
            id: 'dien-mat-troi',
            title: 'Hệ thống điện mặt trời',
            description: 'Thiết kế & lắp đặt hệ thống Solar PV - tối ưu tiết kiệm điện, đầu tư dài hạn.',
            icon: 'fa-solar-panel',
            duration: '7-15 ngày',
            warranty: '10-25 năm',
            features: ['Tiết kiệm điện lâu dài', 'Thân thiện môi trường', 'Hoàn vốn 4-8 năm'],
            link: '/thi-cong/dien-mat-troi',
            bgColor: '#06b6d4'
        },
        {
            id: 'dien-thong-minh',
            title: 'Hệ thống điện thông minh',
            description: 'Smarthome: điều khiển chiếu sáng, điều hòa, an ninh bằng smartphone/giọng nói.',
            icon: 'fa-home',
            duration: '7-15 ngày',
            warranty: '12-24 tháng',
            features: ['Điều khiển từ xa', 'Tiết kiệm năng lượng', 'Tích hợp IoT'],
            link: '/thi-cong/dien-thong-minh',
            bgColor: '#84cc16'
        },
        {
            id: 'ho-koi-san-vuon',
            title: 'Thi công hồ koi sân vườn',
            description: 'Thiết kế & thi công hồ koi: hệ lọc, thiết kế phong thủy, duy trì môi trường nước chuẩn.',
            icon: 'fa-fish',
            duration: '10-20 ngày',
            warranty: '12 tháng',
            features: ['Hệ lọc chuyên nghiệp', 'Thiết kế phong thủy', 'Cảnh quan sân vườn'],
            link: '/thi-cong/ho-koi-san-vuon',
            bgColor: '#0ea5e9'
        },
        {
            id: 'rem-cua',
            title: 'Thi công rèm cửa',
            description: 'Rèm vải, rèm cuốn, rèm tự động - phù hợp phong cách, chống nắng & riêng tư.',
            icon: 'fa-window-restore',
            duration: '1-2 ngày',
            warranty: '6-24 tháng',
            features: ['Đa dạng chất liệu', 'Tự động hoặc thủ công', 'Chống nắng hiệu quả'],
            link: '/thi-cong/rem-cua',
            bgColor: '#f97316'
        },
        {
            id: 'chong-tham',
            title: 'Thi công chống thấm',
            description: 'Xử lý chống thấm tường, sàn, mái, nhà vệ sinh - bảo vệ công trình bền lâu.',
            icon: 'fa-shield-alt',
            duration: '3-7 ngày',
            warranty: '12-36 tháng',
            features: ['Xử lý triệt để', 'Vật liệu chuyên dụng', 'Bảo vệ công trình'],
            link: '/thi-cong/chong-tham',
            bgColor: '#6366f1'
        },
        {
            id: 'phao-chi',
            title: 'Thi công phào chỉ',
            description: 'PU, PS, thạch cao - tạo điểm nhấn sang trọng cho trần, tường, nội thất.',
            icon: 'fa-palette',
            duration: '2-7 ngày',
            warranty: '12-24 tháng',
            features: ['PU/PS chống ẩm', 'Thạch cao dễ tạo hình', 'Trang trí đa dạng'],
            link: '/thi-cong/phao-chi',
            bgColor: '#ec4899'
        }
    ];

    // Benefits data
    const benefits = [
        {
            title: 'Tiết kiệm chi phí',
            description: 'Không lo phát sinh, dự toán chi tiết ngay từ đầu',
            icon: 'fa-money-bill-wave'
        },
        {
            title: 'Đảm bảo chất lượng',
            description: 'Vật liệu chính hãng, đội ngũ thợ lành nghề',
            icon: 'fa-award'
        },
        {
            title: 'Đồng bộ thẩm mỹ',
            description: 'Các hạng mục được thi công hài hòa, phù hợp tổng thể',
            icon: 'fa-eye'
        },
        {
            title: 'Tiến độ rõ ràng',
            description: 'Cam kết thời gian hoàn thiện từng hạng mục',
            icon: 'fa-calendar-check'
        },
        {
            title: 'Bảo hành - bảo trì',
            description: 'Hỗ trợ sửa chữa, thay thế khi cần',
            icon: 'fa-tools'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát & tư vấn',
            description: 'Đo đạc, lắng nghe nhu cầu khách hàng'
        },
        {
            step: 2,
            title: 'Lên phương án & báo giá',
            description: 'Đề xuất giải pháp phù hợp, báo giá chi tiết'
        },
        {
            step: 3,
            title: 'Ký hợp đồng',
            description: 'Cam kết tiến độ, chi phí minh bạch'
        },
        {
            step: 4,
            title: 'Thi công',
            description: 'Triển khai bởi đội ngũ thợ chuyên nghiệp'
        },
        {
            step: 5,
            title: 'Nghiệm thu & bàn giao',
            description: 'Kiểm tra chất lượng trước khi bàn giao'
        },
        {
            step: 6,
            title: 'Bảo hành - bảo trì',
            description: 'Hỗ trợ khách hàng khi phát sinh nhu cầu'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Tôi có thể thi công riêng từng hạng mục thay vì trọn gói không?',
            answer: 'Có. Khách hàng có thể chọn từng hạng mục riêng hoặc gói tổng hợp, tùy nhu cầu và ngân sách.'
        },
        {
            id: 2,
            question: 'Thời gian thi công từng hạng mục thường mất bao lâu?',
            answer: 'Tùy quy mô và đặc thù: thạch cao 3-7 ngày; đá ốp lát 5-10 ngày; sàn gỗ 2-5 ngày; điện mặt trời 7-15 ngày...'
        },
        {
            id: 3,
            question: 'Tôi có thể chọn mẫu mã, vật liệu riêng không?',
            answer: 'Hoàn toàn có. Công ty sẽ tư vấn và điều chỉnh theo nhu cầu, phong cách thiết kế của khách hàng.'
        },
        {
            id: 4,
            question: 'Bảo hành cho từng hạng mục kéo dài bao lâu?',
            answer: 'Tùy từng hạng mục: sàn gỗ 12-24 tháng, cửa composite 24 tháng, hồ koi 12 tháng, pin điện mặt trời 10-15 năm...'
        },
        {
            id: 5,
            question: 'Chi phí thi công được tính như thế nào?',
            answer: 'Chi phí phụ thuộc vào diện tích, vật liệu, mức độ phức tạp. Sau khi khảo sát, công ty sẽ gửi báo giá chi tiết và minh bạch.'
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (
        <div className="page-wrapper">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏗️ Thi Công Trọn Gói Hạng Mục</h1>
                            <p className="hero-subtitle">
                                Giải pháp toàn diện cho không gian bền đẹp và tiện nghi
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">11</span>
                                    <span className="stat-label">Hạng mục chính</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Minh bạch</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Năm kinh nghiệm</span>
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
                                <h2>Thi công trọn gói hạng mục là gì?</h2>
                                <p>
                                    Thi công trọn gói hạng mục là dịch vụ đảm nhận toàn bộ quy trình thi công cho từng phần cụ thể
                                    của công trình như <strong>thạch cao, đá ốp lát, cửa composite, rèm cửa, sàn gỗ, chống thấm,
                                    hồ koi sân vườn, nhôm kính, điện thông minh, phào chỉ, điện mặt trời</strong>.
                                </p>
                                <p>
                                    Chủ đầu tư chỉ cần làm việc với <strong>một đơn vị duy nhất</strong>, mọi công việc từ khảo sát,
                                    thiết kế chi tiết, thi công đến bàn giao đều được triển khai đồng bộ, nhanh chóng và chuyên nghiệp.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <h2>Lợi ích khi chọn thi công trọn gói hạng mục</h2>
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

                {/* Services Grid Section */}
                <section className="services-section">
                    <div className="container">
                        <h2>11 Hạng Mục Thi Công Trọn Gói Tại LinHome</h2>
                        <div className="services-grid">
                            {hangMucServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="service-card"
                                    onMouseEnter={() => setHoveredItem(service.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    style={{
                                        background: hoveredItem === service.id
                                            ? `linear-gradient(135deg, ${service.bgColor}, ${service.bgColor}dd)`
                                            : '#ffffff',
                                        color: hoveredItem === service.id ? 'white' : '#333',
                                        transform: hoveredItem === service.id ? 'translateY(-5px)' : 'translateY(0)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div className="service-header">
                                        <div className="service-icon">
                                            <i className={`fas ${service.icon}`} style={{
                                                color: hoveredItem === service.id ? 'white' : service.bgColor
                                            }}></i>
                                        </div>
                                        <div className="service-meta">
                                            <span className="duration">{service.duration}</span>
                                            <span className="warranty">BH: {service.warranty}</span>
                                        </div>
                                    </div>

                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>

                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <span key={idx} className="feature-tag">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        to={service.link}
                                        className="service-link"
                                        style={{
                                            color: hoveredItem === service.id ? 'white' : service.bgColor,
                                            borderColor: hoveredItem === service.id ? 'white' : service.bgColor
                                        }}
                                    >
                                        Xem chi tiết
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <h2>Quy trình thi công trọn gói hạng mục</h2>
                        <div className="process-timeline">
                            {constructionProcess.map((step, index) => (
                                <div key={step.step} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose LinHome Section */}
                <section className="why-choose-section">
                    <div className="container">
                        <h2>Vì sao nên chọn LinHome</h2>
                        <div className="why-choose-grid">
                            <div className="why-choose-item">
                                <i className="fas fa-medal"></i>
                                <h3>Kinh nghiệm nhiều năm</h3>
                                <p>Trong lĩnh vực thi công kiến trúc & nội thất</p>
                            </div>
                            <div className="why-choose-item">
                                <i className="fas fa-users"></i>
                                <h3>Đội ngũ chuyên nghiệp</h3>
                                <p>Thợ tay nghề cao, giám sát kỹ thuật chuyên môn</p>
                            </div>
                            <div className="why-choose-item">
                                <i className="fas fa-certificate"></i>
                                <h3>Vật liệu chính hãng</h3>
                                <p>Chất lượng cao, giá tốt</p>
                            </div>
                            <div className="why-choose-item">
                                <i className="fas fa-calculator"></i>
                                <h3>Chi phí minh bạch</h3>
                                <p>Không phát sinh ngoài hợp đồng</p>
                            </div>
                            <div className="why-choose-item">
                                <i className="fas fa-handshake"></i>
                                <h3>Dịch vụ tận tâm</h3>
                                <p>Đồng hành từ thi công đến bảo trì</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <h2>Câu hỏi thường gặp</h2>
                        <div className="faq-container">
                            {faqData.map((faq) => (
                                <div key={faq.id} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                        style={{
                                            width: '100%',
                                            padding: '20px',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            background: activeFaq === faq.id ? '#f8fafc' : 'white',
                                            textAlign: 'left',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#2d3748',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span>👉 {faq.question}</span>
                                        <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                    </button>
                                    {activeFaq === faq.id && (
                                        <div className="faq-answer" style={{
                                            padding: '0 20px 20px',
                                            color: '#4a5568',
                                            lineHeight: '1.6'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    )}
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

export default ThiCongHangMucPage;
