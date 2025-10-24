// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../thiet-ke/ThietKePage.css';
import '../../thi-cong/ThiCongHangMuc.css';
import '../BaoGiaThietKeThiCong.css';

const ThiCongTronGoiPricingPage = () => {
    const [activePackage, setActivePackage] = useState('nha-pho');
    const [activeFaq, setActiveFaq] = useState(null);

    // Full package pricing data
    const fullPackages = [
        {
            id: 'nha-pho',
            title: 'Nhà Phố Trọn Gói',
            price: '4,800,000 - 6,500,000 VNĐ/m²',
            originalPrice: '5,800,000 - 7,500,000 VNĐ/m²',
            description: 'Từ thiết kế đến hoàn thiện nhà phố 3-4 tầng',
            breakdown: {
                design: '120,000 - 180,000 VNĐ/m²',
                construction: '2,800,000 - 3,500,000 VNĐ/m²',
                finishing: '2,200,000 - 3,200,000 VNĐ/m²',
                management: '180,000 - 250,000 VNĐ/m²'
            },
            includes: [
                'Thiết kế kiến trúc hoàn chỉnh',
                'Thi công phần thô đến hoàn thiện',
                '3D rendering chất lượng cao (5 góc)',
                'Giám sát kỹ thuật toàn diện',
                'Bảo hành trọn gói 2 năm',
                'Hỗ trợ thủ tục xin phép',
                'Vệ sinh công trình'
            ],
            features: [
                'Diện tích: 80-150m² sàn',
                'Thời gian: 90-120 ngày',
                'Phong cách hiện đại',
                'Vật liệu cao cấp'
            ],
            suitable: ['Gia đình trẻ', 'Ngân sách từ 600 triệu', 'Nhà phố đô thị'],
            duration: '3-4 tháng',
            warranty: '24 tháng',
            bgColor: '#10b981'
        },
        {
            id: 'biet-thu',
            title: 'Biệt Thự Trọn Gói',
            price: '6,500,000 - 8,500,000 VNĐ/m²',
            originalPrice: '7,800,000 - 10,200,000 VNĐ/m²',
            description: 'Thi công trọn gói biệt thử cao cấp',
            breakdown: {
                design: '200,000 - 300,000 VNĐ/m²',
                construction: '3,500,000 - 4,800,000 VNĐ/m²',
                finishing: '3,200,000 - 4,500,000 VNĐ/m²',
                management: '280,000 - 350,000 VNĐ/m²'
            },
            includes: [
                'Thiết kế kiến trúc + nội thất',
                'Thiết kế sân vườn cảnh quan cơ bản',
                'Thi công hoàn chỉnh từ A-Z',
                '3D rendering + video walkthrough',
                'Hệ thống smarthome cơ bản',
                'Bảo hành trọn gói 3 năm',
                'Giám sát và nghiệm thu chuyên nghiệp'
            ],
            features: [
                'Diện tích: 200-500m² sàn',
                'Thời gian: 120-180 ngày',
                'Đa phong cách thiết kế',
                'Vật liệu premium'
            ],
            suitable: ['Gia đình thành đạt', 'Ngân sách từ 1.5 tỷ', 'Biệt thự vườn'],
            duration: '4-6 tháng',
            warranty: '36 tháng',
            bgColor: '#667eea'
        },
        {
            id: 'lau-dai',
            title: 'Lâu Đài Trọn Gói',
            price: '9,500,000 - 15,000,000 VNĐ/m²',
            originalPrice: '11,500,000 - 18,000,000 VNĐ/m²',
            description: 'Dự án lâu đài, dinh thự đẳng cấp luxury',
            breakdown: {
                design: '400,000 - 600,000 VNĐ/m²',
                construction: '4,800,000 - 6,500,000 VNĐ/m²',
                finishing: '4,500,000 - 6,500,000 VNĐ/m²',
                management: '450,000 - 650,000 VNĐ/m²'
            },
            includes: [
                'Thiết kế kiến trúc độc quyền',
                'Thiết kế nội thất luxury hoàn chỉnh',
                'Thiết kế cảnh quan + hồ bơi',
                'Hệ thống smarthome cao cấp',
                '3D rendering + video 4K',
                'Bảo hành trọn gói 5 năm',
                'Dịch vụ after-sales VIP'
            ],
            features: [
                'Diện tích: 500m² sàn trở lên',
                'Thời gian: 180-300 ngày',
                'Kiến trúc cổ điển hoặc hiện đại',
                'Vật liệu luxury nhập khẩu'
            ],
            suitable: ['Doanh nhân thành công', 'Ngân sách từ 5 tỷ', 'Dinh thự đẳng cấp'],
            duration: '6-10 tháng',
            warranty: '60 tháng',
            bgColor: '#f59e0b'
        }
    ];

    // Construction timeline phases
    const constructionTimeline = [
        {
            phase: 1,
            title: 'Thiết kế & Chuẩn bị',
            description: 'Tư vấn, thiết kế và chuẩn bị pháp lý',
            duration: '15-30 ngày',
            activities: [
                'Khảo sát thực địa chi tiết',
                'Tư vấn phong cách và concept',
                'Thiết kế kiến trúc và nội thất',
                'Hoàn thiện hồ sơ pháp lý',
                'Chuẩn bị mặt bằng thi công'
            ],
            percentage: '10-15%',
            icon: 'fas fa-compass',
            color: '#667eea'
        },
        {
            phase: 2,
            title: 'Thi công Phần Thô',
            description: 'Móng, kết cấu, tường, mái',
            duration: '45-90 ngày',
            activities: [
                'Thi công móng và kết cấu chính',
                'Xây dựng tường các tầng',
                'Lợp mái và chống thấm',
                'Hệ thống kỹ thuật thô (điện, nước)',
                'Kiểm tra nghiệm thu từng giai đoạn'
            ],
            percentage: '45-55%',
            icon: 'fas fa-hard-hat',
            color: '#10b981'
        },
        {
            phase: 3,
            title: 'Hoàn thiện',
            description: 'Ốp lát, sơn, trần, điện nước',
            duration: '30-60 ngày',
            activities: [
                'Ốp lát gạch và đá theo thiết kế',
                'Sơn nước nội ngoại thất',
                'Làm trần thạch cao tạo hình',
                'Hoàn thiện hệ thống điện nước',
                'Lắp đặt thiết bị vệ sinh'
            ],
            percentage: '30-35%',
            icon: 'fas fa-paint-brush',
            color: '#f59e0b'
        },
        {
            phase: 4,
            title: 'Nội thất & Bàn giao',
            description: 'Nội thất, kiểm tra và nghiệm thu',
            duration: '15-30 ngày',
            activities: [
                'Lắp đặt nội thất theo thiết kế',
                'Kiểm tra tổng thể chất lượng',
                'Vệ sinh toàn bộ công trình',
                'Nghiệm thu và bàn giao',
                'Hướng dẫn sử dụng và bảo trì'
            ],
            percentage: '10-15%',
            icon: 'fas fa-home',
            color: '#8b5cf6'
        }
    ];

    // Benefits of full package
    const packageBenefits = [
        {
            icon: 'fas fa-handshake',
            title: 'Một đối tác duy nhất',
            description: 'Không cần tìm nhiều nhà thầu khác nhau. Chúng tôi đảm nhiệm toàn bộ từ thiết kế đến hoàn thiện.',
            color: '#10b981'
        },
        {
            icon: 'fas fa-piggy-bank',
            title: 'Tiết kiệm chi phí',
            description: 'Giá trọn gói rẻ hơn 15-20% so với thuê từng giai đoạn. Không phát sinh ngoài dự tính.',
            color: '#667eea'
        },
        {
            icon: 'far fa-clock',
            title: 'Tiết kiệm thời gian',
            description: 'Tiến độ được tối ưu hóa. Các giai đoạn chồng lấp hợp lý, rút ngắn thời gian tổng thể.',
            color: '#f59e0b'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Bảo hành toàn diện',
            description: 'Bảo hành thống nhất cho toàn bộ công trình. Dễ dàng bảo trì và sửa chữa sau này.',
            color: '#8b5cf6'
        },
        {
            icon: 'far fa-eye',
            title: 'Giám sát chặt chẽ',
            description: 'Giám sát kỹ thuật 24/7. Báo cáo tiến độ hàng tuần với hình ảnh thực tế.',
            color: '#ef4444'
        },
        {
            icon: 'fas fa-trophy',
            title: 'Chất lượng nhất quán',
            description: 'Thiết kế và thi công bởi cùng một đội ngũ đảm bảo tính thống nhất và chất lượng.',
            color: '#06b6d4'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Gói trọn gói bao gồm những gì cụ thể?',
            answer: 'Bao gồm: thiết kế kiến trúc, thi công phần thô (móng, kết cấu, tường, mái), hoàn thiện (ốp lát, sơn, trần, điện nước), nội thất cơ bản, giám sát kỹ thuật, bảo hành và hỗ trợ pháp lý.'
        },
        {
            id: 2,
            question: 'Thời gian thi công trọn gói mất bao lâu?',
            answer: 'Nhà phố: 3-4 tháng, Biệt thự: 4-6 tháng, Lâu đài: 6-10 tháng. Thời gian có thể ngắn hơn nhờ tối ưu hóa quy trình và chồng lấp các giai đoạn thi công.'
        },
        {
            id: 3,
            question: 'Có được thay đổi thiết kế trong quá trình thi công không?',
            answer: 'Có thể thay đổi trong giai đoạn thiết kế hoặc đầu giai đoạn thi công phần thô. Thay đổi muộn sẽ phát sinh chi phí 10-25% và ảnh hưởng tiến độ 15-30 ngày.'
        },
        {
            id: 4,
            question: 'Chi phí có phát sinh thêm không?',
            answer: 'Cam kết không phát sinh nếu không thay đổi thiết kế. Mọi chi phí phát sinh (nếu có) sẽ được báo giá chi tiết và thống nhất trước khi thực hiện.'
        },
        {
            id: 5,
            question: 'Thanh toán như thế nào cho gói trọn gói?',
            answer: 'Thanh toán theo 5 đợt: 15% ký hợp đồng, 25% hoàn thành móng, 30% hoàn thành phần thô, 25% hoàn thiện, 5% bàn giao và bảo hành.'
        },
        {
            id: 6,
            question: 'Có hỗ trợ vay vốn ngân hàng không?',
            answer: 'Có hỗ trợ làm hồ sơ vay vốn tại Vietcombank, Techcombank, VPBank. Lãi suất ưu đãi từ 6.5-8.5%/năm cho dự án trọn gói.'
        }
    ];

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    const currentPackage = fullPackages.find(pkg => pkg.id === activePackage);

    return (
        <div className="thiet-ke-page">
            {/* Package Selection */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2>📦 Gói Thi Công Trọn Gói 2025</h2>
                        <p>Giải pháp toàn diện từ thiết kế đến hoàn thiện - Tiết kiệm 15-20% chi phí</p>
                    </div>

                    <div className="pricing-tabs">
                        {fullPackages.map(pkg => (
                            <button
                                key={pkg.id}
                                className={`pricing-tab ${activePackage === pkg.id ? 'active' : ''}`}
                                onClick={() => setActivePackage(pkg.id)}
                            >
                                <i className="fas fa-home"></i>
                                {pkg.title}
                            </button>
                        ))}
                    </div>

                    {currentPackage && (
                        <div className="pricing-detail">
                            <div className="pricing-card" style={{ borderColor: currentPackage.bgColor }}>
                                <div className="pricing-header" style={{ background: currentPackage.bgColor }}>
                                    <h3>
                                        <i className="fas fa-box"></i>
                                        {currentPackage.title}
                                    </h3>
                                    <div className="pricing-amount">
                                        {currentPackage.price}
                                        <div className="original-price">
                                            <del>{currentPackage.originalPrice}</del>
                                            <span className="discount">Tiết kiệm 15-20%</span>
                                        </div>
                                    </div>
                                    <p>{currentPackage.description}</p>
                                </div>

                                <div className="pricing-body">
                                    <div className="pricing-breakdown">
                                        <h4>💰 Chi phí chi tiết:</h4>
                                        <div className="breakdown-items">
                                            <div className="breakdown-item">
                                                <span>Thiết kế:</span>
                                                <strong>{currentPackage.breakdown.design}</strong>
                                            </div>
                                            <div className="breakdown-item">
                                                <span>Thi công thô:</span>
                                                <strong>{currentPackage.breakdown.construction}</strong>
                                            </div>
                                            <div className="breakdown-item">
                                                <span>Hoàn thiện:</span>
                                                <strong>{currentPackage.breakdown.finishing}</strong>
                                            </div>
                                            <div className="breakdown-item">
                                                <span>Quản lý dự án:</span>
                                                <strong>{currentPackage.breakdown.management}</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pricing-grid">
                                        <div className="pricing-column">
                                            <h4>✨ Bao gồm dịch vụ:</h4>
                                            <ul>
                                                {currentPackage.includes.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pricing-column">
                                            <h4>🏠 Đặc điểm:</h4>
                                            <ul>
                                                {currentPackage.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pricing-suitable">
                                        <h4>👥 Phù hợp cho:</h4>
                                        <div className="suitable-tags">
                                            {currentPackage.suitable.map((item, index) => (
                                                <span key={index} className="suitable-tag">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pricing-meta">
                                        <div className="meta-item">
                                            <i className="far fa-clock"></i>
                                            <span>Thời gian: {currentPackage.duration}</span>
                                        </div>
                                        <div className="meta-item">
                                            <i className="fas fa-shield-alt"></i>
                                            <span>Bảo hành: {currentPackage.warranty}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Construction Timeline */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>📅 Tiến Độ Thi Công Trọn Gói</h2>
                        <p>4 giai đoạn thi công liền mạch với quản lý chuyên nghiệp</p>
                    </div>

                    <div className="process-timeline">
                        {constructionTimeline.map((phase, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{phase.phase}</div>
                                <div className="step-icon" style={{ background: phase.color }}>
                                    <i className={phase.icon}></i>
                                </div>
                                <div className="step-content">
                                    <h3>{phase.title}</h3>
                                    <p>{phase.description}</p>
                                    <div className="step-details">
                                        <ul>
                                            {phase.activities.map((activity, activityIndex) => (
                                                <li key={activityIndex}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="step-meta">
                                        <span className="step-duration">
                                            <i className="far fa-clock"></i> {phase.duration}
                                        </span>
                                        <span className="step-percentage">
                                            <i className="fas fa-percentage"></i> {phase.percentage}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="advantages-section">
                <div className="container">
                    <div className="section-header">
                        <h2>⭐ Lợi Ích Vượt Trội Của Gói Trọn Gói</h2>
                        <p>6 lý do khiến 95% khách hàng lựa chọn gói thi công trọn gói</p>
                    </div>

                    <div className="services-grid">
                        {packageBenefits.map((benefit, index) => (
                            <div key={index} className="service-card">
                                <div className="service-header">
                                    <div
                                        className="service-icon"
                                        style={{ background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)` }}
                                    >
                                        <i className={benefit.icon}></i>
                                    </div>
                                </div>

                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison with Separate Contracts */}
            <section className="comparison-section">
                <div className="container">
                    <div className="section-header">
                        <h2>⚖️ So Sánh: Trọn Gói vs Tách Riêng</h2>
                        <p>Tại sao gói trọn gói luôn là lựa chọn tốt nhất?</p>
                    </div>

                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="comparison-feature">Tiêu chí</div>
                            <div className="comparison-package">Gói Trọn Gói</div>
                            <div className="comparison-package">Thuê Tách Riêng</div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Chi phí tổng</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Tiết kiệm 15-20%
                            </div>
                            <div className="comparison-package" style={{ color: '#ef4444' }}>
                                ✗ Đắt hơn 15-20%
                            </div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Thời gian</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Nhanh hơn 20-30%
                            </div>
                            <div className="comparison-package" style={{ color: '#ef4444' }}>
                                ✗ Chậm do chờ điều phối
                            </div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Trách nhiệm</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Một đối tác duy nhất
                            </div>
                            <div className="comparison-package" style={{ color: '#ef4444' }}>
                                ✗ Nhiều nhà thầu khác nhau
                            </div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Bảo hành</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Bảo hành toàn diện
                            </div>
                            <div className="comparison-package" style={{ color: '#ef4444' }}>
                                ✗ Bảo hành từng phần
                            </div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Chất lượng</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Nhất quán, thống nhất
                            </div>
                            <div className="comparison-package" style={{ color: '#f59e0b' }}>
                                ⚠ Có thể không đồng nhất
                            </div>
                        </div>

                        <div className="comparison-row">
                            <div className="comparison-feature">Giám sát</div>
                            <div className="comparison-package" style={{ color: '#10b981', fontWeight: '600' }}>
                                ✓ Chuyên nghiệp 24/7
                            </div>
                            <div className="comparison-package" style={{ color: '#ef4444' }}>
                                ✗ Tự giám sát hoặc thuê riêng
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>❓ Câu Hỏi Thường Gặp</h2>
                        <p>Giải đáp chi tiết về gói thi công trọn gói</p>
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

export default ThiCongTronGoiPricingPage;