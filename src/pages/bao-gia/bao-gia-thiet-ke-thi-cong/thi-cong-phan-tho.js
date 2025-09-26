// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../thiet-ke/ThietKePage.css';
import '../../thi-cong/ThiCongHangMuc.css';
import '../BaoGiaThietKeThiCongNha.css';

const ThiCongPhanThoPricingPage = () => {
    const [activeCategory, setActiveCategory] = useState('nha-pho');
    const [activeFaq, setActiveFaq] = useState(null);

    // Construction pricing data
    const constructionPricing = [
        {
            id: 'nha-pho',
            category: 'nha-pho',
            title: 'Nhà Phố 3-4 Tầng',
            price: '2,500,000 - 3,200,000 VNĐ/m²',
            description: 'Thi công phần thô hoàn chỉnh cho nhà phố',
            includes: [
                'Đào móng, đổ bê tông móng',
                'Xây tường gạch ống, gạch đỏ',
                'Đổ sàn bê tông cốt thép',
                'Dựng cột dầm kết cấu',
                'Lợp mái ngói, tôn',
                'Hệ thống cống thoát nước thô'
            ],
            materials: [
                'Xi măng PCB30, PCB40',
                'Gạch ống Đồng Nai 8 lỗ',
                'Thép CB240, CB300',
                'Cát vàng, đá 1x2',
                'Ngói Đồng Nai, Viglacera'
            ],
            duration: '45-60 ngày',
            bgColor: '#10b981'
        },
        {
            id: 'biet-thu',
            category: 'biet-thu',
            title: 'Biệt Thự, Villa',
            price: '3,200,000 - 4,200,000 VNĐ/m²',
            description: 'Thi công phần thô biệt thự cao cấp',
            includes: [
                'Móng cọc khoan nhồi (nếu cần)',
                'Kết cấu bê tông cốt thép',
                'Tường xây gạch block, gạch đỏ',
                'Sàn deck bê tông',
                'Mái btct hoặc thép',
                'Hệ thống PCCC cơ bản'
            ],
            materials: [
                'Bê tông B25, B30 thương phẩm',
                'Thép D10, D12, D16',
                'Gạch block Hebel',
                'Ống nước HDPE, PPR',
                'Dây điện Cadivi, Trần Phú'
            ],
            duration: '60-90 ngày',
            bgColor: '#667eea'
        },
        {
            id: 'lau-dai',
            category: 'lau-dai',
            title: 'Lâu Đài, Dinh Thự',
            price: '4,500,000 - 6,000,000 VNĐ/m²',
            description: 'Thi công phần thô cho công trình cao cấp',
            includes: [
                'Móng cọc ép hoặc khoan nhồi',
                'Kết cấu thép hoặc btct đặc biệt',
                'Tường block cách nhiệt cao cấp',
                'Sàn deck dày đặc biệt',
                'Hệ thống kỹ thuật phức tạp',
                'PCCC và an toàn cao cấp'
            ],
            materials: [
                'Bê tông B35, B40 đặc biệt',
                'Thép CT3, thép hình',
                'Gạch block Ytong, AAC',
                'Vật liệu cách âm, cách nhiệt',
                'Hệ thống thông minh cơ bản'
            ],
            duration: '90-150 ngày',
            bgColor: '#f59e0b'
        }
    ];

    // Construction stages
    const constructionStages = [
        {
            stage: 1,
            title: 'Chuẩn bị mặt bằng',
            description: 'San lấp, đào móng, chuẩn bị hạ tầng',
            details: [
                'Khảo sát địa chất, thử tải trọng',
                'San ủi mặt bằng, thoát nước tạm',
                'Đào móng theo đúng kỹ thuật',
                'Làm đường vào công trường'
            ],
            duration: '5-10 ngày',
            cost: '8-12%',
            icon: 'fas fa-hard-hat'
        },
        {
            stage: 2,
            title: 'Thi công móng',
            description: 'Đổ móng bê tông, cột móng',
            details: [
                'Đổ bê tông lót móng',
                'Lắp dựng cốt thép móng',
                'Đổ bê tông móng đúng quy cách',
                'Bảo dưỡng bê tông đúng kỹ thuật'
            ],
            duration: '7-14 ngày',
            cost: '20-25%',
            icon: 'fas fa-layer-group'
        },
        {
            stage: 3,
            title: 'Thi công kết cấu',
            description: 'Dựng cột, dầm, sàn các tầng',
            details: [
                'Dựng cột tầng trệt',
                'Lắp dựng cốt thép dầm sàn',
                'Đổ sàn bê tông từng tầng',
                'Tiếp tục các tầng trên'
            ],
            duration: '20-40 ngày',
            cost: '35-45%',
            icon: 'far fa-building'
        },
        {
            stage: 4,
            title: 'Xây tường, lợp mái',
            description: 'Hoàn thiện phần thô',
            details: [
                'Xây tường gạch ống các tầng',
                'Thi công hệ thống mái',
                'Lợp ngói hoặc tôn',
                'Hệ thống cống rãnh thoát nước'
            ],
            duration: '15-25 ngày',
            cost: '25-30%',
            icon: 'fas fa-home'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Phần thô bao gồm những gì?',
            answer: 'Phần thô bao gồm: móng, cột, dầm, sàn, tường xây, mái lợp, hệ thống điện nước thô, cống thoát nước. Không bao gồm ốp lát, sơn, trần, cửa.'
        },
        {
            id: 2,
            question: 'Thời gian thi công phần thô mất bao lâu?',
            answer: 'Nhà phố 3-4 tầng: 45-60 ngày, Biệt thự: 60-90 ngày, Lâu đài: 90-150 ngày. Tùy thuộc vào quy mô và điều kiện thời tiết.'
        },
        {
            id: 3,
            question: 'Vật liệu có đảm bảo chất lượng không?',
            answer: 'Sử dụng vật liệu từ nhà máy uy tín: Xi măng Hải Phòng, gạch Đồng Nai, thép Pomina, Hòa Phát. Có chứng từ chất lượng đầy đủ.'
        },
        {
            id: 4,
            question: 'Có bảo hành phần thô không?',
            answer: 'Bảo hành kết cấu 5 năm, chống thấm móng 3 năm, các hạng mục khác 2 năm. Bảo trì và sửa chữa miễn phí trong thời gian bảo hành.'
        },
        {
            id: 5,
            question: 'Thanh toán như thế nào?',
            answer: 'Chia 4 đợt: 20% ký hợp đồng, 30% hoàn thành móng, 30% hoàn thành kết cấu, 20% nghiệm thu hoàn thành.'
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const currentPricing = constructionPricing.find(item => item.id === activeCategory);

    return (
        <div className="thiet-ke-page">
            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2>💰 Bảng Giá Thi Công Phần Thô 2025</h2>
                        <p>Chi phí thi công phần thô theo từng loại công trình</p>
                    </div>

                    <div className="pricing-tabs">
                        {constructionPricing.map(item => (
                            <button
                                key={item.id}
                                className={`pricing-tab ${activeCategory === item.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(item.id)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {currentPricing && (
                        <div className="pricing-detail">
                            <div className="pricing-card" style={{ borderColor: currentPricing.bgColor }}>
                                <div className="pricing-header" style={{ background: currentPricing.bgColor }}>
                                    <h3>{currentPricing.title}</h3>
                                    <div className="pricing-amount">{currentPricing.price}</div>
                                    <p>{currentPricing.description}</p>
                                </div>

                                <div className="pricing-body">
                                    <div className="pricing-grid">
                                        <div className="pricing-column">
                                            <h4>🏗️ Bao gồm hạng mục:</h4>
                                            <ul>
                                                {currentPricing.includes.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pricing-column">
                                            <h4>🧱 Vật liệu chính:</h4>
                                            <ul>
                                                {currentPricing.materials.map((material, index) => (
                                                    <li key={index}>{material}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pricing-meta">
                                        <div className="meta-item">
                                            <i className="far fa-clock"></i>
                                            <span>Thời gian: {currentPricing.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Construction Stages */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🔄 Quy Trình Thi Công Phần Thô</h2>
                        <p>4 giai đoạn thi công chuyên nghiệp đảm bảo chất lượng</p>
                    </div>

                    <div className="process-timeline">
                        {constructionStages.map((stage, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{stage.stage}</div>
                                <div className="step-icon">
                                    <i className={stage.icon}></i>
                                </div>
                                <div className="step-content">
                                    <h3>{stage.title}</h3>
                                    <p>{stage.description}</p>
                                    <div className="step-details">
                                        <ul>
                                            {stage.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="step-meta">
                                        <span className="step-duration">
                                            <i className="far fa-clock"></i> {stage.duration}
                                        </span>
                                        <span className="step-cost">
                                            <i className="fas fa-percentage"></i> {stage.cost}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="materials-section">
                <div className="container">
                    <div className="section-header">
                        <h2>🧱 Vật Liệu Thi Công</h2>
                        <p>Sử dụng vật liệu chất lượng từ các nhà sản xuất uy tín</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                                <i className="fas fa-industry"></i>
                            </div>
                            <h3>Xi Măng PCB 30, 40</h3>
                            <p>Xi măng Hải Phòng, Holcim - đạt tiêu chuẩn TCVN, độ bền cao, chống thấm tốt.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                <i className="fas fa-th-large"></i>
                            </div>
                            <h3>Gạch Ống 8 Lỗ</h3>
                            <p>Gạch Đồng Nai, Viglacera - cách nhiệt tốt, khối lượng nhẹ, dễ thi công.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                                <i className="fas fa-weight-hanging"></i>
                            </div>
                            <h3>Thép CB240, CB300</h3>
                            <p>Thép Pomina, Hòa Phát - chất lượng cao, chống gỉ sét, đảm bảo độ bền kết cấu.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                                <i className="fas fa-mountain"></i>
                            </div>
                            <h3>Cát Vàng & Đá 1x2</h3>
                            <p>Cát vàng sông Hồng, đá dăm Hòa Bình - sạch, đúng cỡ hạt, độ bền cao.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>❓ Câu Hỏi Thường Gặp</h2>
                        <p>Giải đáp những thắc mắc về thi công phần thô</p>
                    </div>

                    <div className="faq-container">
                        {faqData.map(faq => (
                            <div key={faq.id} className="faq-item">
                                <div
                                    className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === faq.id && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTAContent />
        </div>
    );
};

export default ThiCongPhanThoPricingPage;