// src/pages/thi-cong/ho-koi-san-vuon.js
import React, { useState } from 'react';
import '../../thiet-ke/ThietKePage.css';
import '../ThiCongHangMuc.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const HoKoiSanVuonPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeSystem, setActiveSystem] = useState('biological');

    // Filtration systems
    const filtrationSystems = {
        biological: {
            title: 'Hệ lọc sinh học (Biological Filter)',
            description: 'Sử dụng vi sinh vật để phân hủy chất thải, tự nhiên nhất',
            advantages: [
                'Môi trường tự nhiên, thân thiện với cá',
                'Chi phí vận hành thấp',
                'Ổn định lâu dài',
                'Tự động cân bằng sinh thái'
            ],
            disadvantages: [
                'Cần thời gian khởi động hệ sinh thái',
                'Nhạy cảm với thuốc sát khuẩn',
                'Yêu cầu diện tích lắp đặt lớn'
            ],
            applications: 'Hồ koi tự nhiên, hồ lớn, hồ resort',
            priceRange: '50-200 triệu VNĐ'
        },
        mechanical: {
            title: 'Hệ lọc cơ học (Mechanical Filter)',
            description: 'Lọc bằng vật liệu vật lý như cotton, vải lọc, bông lọc',
            advantages: [
                'Hiệu quả nhanh, thấy ngay kết quả',
                'Dễ vệ sinh và thay thế',
                'Chi phí đầu tư hợp lý',
                'Không phụ thuộc sinh học'
            ],
            disadvantages: [
                'Cần thay vật liệu lọc thường xuyên',
                'Chi phí vận hành cao',
                'Không xử lý được chất thải hòa tan'
            ],
            applications: 'Hồ koi nhỏ, hồ trong nhà, hồ cá cảnh',
            priceRange: '20-80 triệu VNĐ'
        },
        uv: {
            title: 'Hệ lọc UV & Ozone',
            description: 'Sử dụng tia UV hoặc ozone để diệt khuẩn, làm trong nước',
            advantages: [
                'Diệt khuẩn hiệu quả 99.9%',
                'Nước trong suốt, sạch sẽ',
                'Ngăn ngừa bệnh cho cá',
                'Không cần hóa chất'
            ],
            disadvantages: [
                'Chi phí điện cao',
                'Cần thay bóng đèn UV định kỳ',
                'Có thể giết cả vi sinh có ích'
            ],
            applications: 'Hồ koi cao cấp, hồ triển lãm, bệnh viện cá',
            priceRange: '80-300 triệu VNĐ'
        }
    };

    // Common issues
    const commonIssues = [
        {
            issue: 'Nước đục, ô nhiễm liên tục',
            cause: 'Hệ lọc không đủ công suất hoặc thiết kế dòng chảy kém',
            solution: 'Nâng cấp hệ lọc, tăng cường vi sinh, kiểm tra chu kỳ nước',
            prevention: 'Thiết kế hệ lọc phù hợp mật độ cá, vệ sinh định kỳ',
            icon: 'fa-tint'
        },
        {
            issue: 'Cá chết do thiếu oxy',
            cause: 'Bơm oxy yếu, hệ tuần hoàn không đều, mật độ cá quá dày',
            solution: 'Nâng cấp bơm oxy, thêm vòi phun, giảm mật độ cá',
            prevention: 'Thiết kế hệ sục khí đầy đủ, theo dõi DO hàng ngày',
            icon: 'fa-lungs'
        },
        {
            issue: 'Hồ bị rò rỉ nước',
            cause: 'Lớp chống thấm kém, mối nối không kín, nứt do lún',
            solution: 'Kiểm tra và sửa chữa lớp EPDM/HDPE, làm kín mối nối',
            prevention: 'Sử dụng vật liệu chất lượng cao, thi công chuyên nghiệp',
            icon: 'fa-exclamation-triangle'
        },
        {
            issue: 'Cá bệnh, phát triển chậm',
            cause: 'Chất lượng nước kém, thức ăn không phù hợp, stress',
            solution: 'Cải thiện chất lượng nước, điều chỉnh thức ăn, tạo môi trường thoải mái',
            prevention: 'Theo dõi thông số nước, cho ăn đúng cách, tránh stress',
            icon: 'fa-fish'
        }
    ];

    // Customer concerns
    const customerConcerns = [
        {
            concern: 'Sợ chi phí bảo trì liên tục và phức tạp',
            description: 'Lo ngại phải chi nhiều tiền cho điện, thức ăn, thuốc men hàng tháng',
            solution: 'Thiết kế hệ thống tối ưu, hướng dẫn bảo trì đúng cách, gói bảo trì trọn gói'
        },
        {
            concern: 'Lo ngại cá bệnh hoặc chết do kỹ thuật kém',
            description: 'Sợ đầu tư cá đắt tiền nhưng không biết chăm sóc',
            solution: 'Tư vấn chọn giống cá phù hợp, đào tạo kỹ thuật nuôi, hỗ trợ 24/7'
        },
        {
            concern: 'Muốn hồ đẹp nhưng không tốn thời gian chăm sóc',
            description: 'Cần hệ thống tự động hóa cao, ít can thiệp thủ công',
            solution: 'Thiết kế hệ thống tự động, báo động từ xa, dịch vụ chăm sóc định kỳ'
        }
    ];

    // Construction process
    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát vị trí và tư vấn thiết kế',
            description: 'Phân tích đất, địa hình, hướng nắng, nguồn nước và điện',
            duration: '1-2 ngày',
            tools: 'GPS, máy đo pH đất, thước đo'
        },
        {
            step: 2,
            title: 'Thiết kế chi tiết và lập dự toán',
            description: 'Bản vẽ kỹ thuật, chọn vật liệu chống thấm và hệ lọc',
            duration: '3-5 ngày',
            tools: 'AutoCAD, phần mềm tính toán thủy lực'
        },
        {
            step: 3,
            title: 'Thi công đào hồ và làm móng',
            description: 'Đào theo thiết kế, tạo độ dốc, làm móng bê tông',
            duration: '3-7 ngày',
            tools: 'Máy đào, xe tải, bê tông'
        },
        {
            step: 4,
            title: 'Lắp đặt hệ thống chống thấm',
            description: 'Trải màng EPDM/HDPE, hàn nối, kiểm tra kín nước',
            duration: '2-3 ngày',
            tools: 'Màng chống thấm, máy hàn, keo dán'
        },
        {
            step: 5,
            title: 'Lắp đặt hệ thống lọc và tuần hoàn',
            description: 'Bể lọc sinh học/cơ học, bơm, đường ống, vòi phun',
            duration: '2-4 ngày',
            tools: 'Bơm nước, ống PVC, vật liệu lọc'
        },
        {
            step: 6,
            title: 'Hoàn thiện cảnh quan và trang trí',
            description: 'Đá tự nhiên, cây thủy sinh, đèn LED, thác nước',
            duration: '3-5 ngày',
            tools: 'Đá cảnh quan, cây thủy sinh, đèn LED'
        },
        {
            step: 7,
            title: 'Xử lý nước và thử nghiệm hệ thống',
            description: 'Khử chlorine, cân bằng pH, nuôi men vi sinh, test 24/7',
            duration: '7-14 ngày',
            tools: 'Hóa chất xử lý nước, men vi sinh, máy đo'
        },
        {
            step: 8,
            title: 'Thả cá và hướng dẫn chăm sóc',
            description: 'Thả cá thử nghiệm, hướng dẫn cho ăn, bảo trì',
            duration: '1-2 ngày',
            tools: 'Cá koi, thức ăn, hướng dẫn sử dụng'
        }
    ];

    // Pond maintenance tips
    const maintenanceTips = [
        {
            title: 'Kiểm tra chất lượng nước hàng ngày',
            description: 'Đo pH, DO, ammonia, nitrite để đảm bảo môi trường tốt',
            frequency: 'Hàng ngày',
            icon: 'fa-vials'
        },
        {
            title: 'Cho cá ăn đúng cách',
            description: 'Cho ăn 2-3 lần/ngày, lượng vừa đủ trong 5-10 phút',
            frequency: '2-3 lần/ngày',
            icon: 'fa-fish'
        },
        {
            title: 'Vệ sinh hệ thống lọc',
            description: 'Rửa vật liệu lọc cơ học, kiểm tra bơm và đường ống',
            frequency: '1-2 tuần/lần',
            icon: 'fa-filter'
        },
        {
            title: 'Thay nước định kỳ',
            description: 'Thay 10-20% nước hồ để loại bỏ chất thải tích tụ',
            frequency: '1 tuần/lần',
            icon: 'fa-redo'
        },
        {
            title: 'Cắt tỉa cây thủy sinh',
            description: 'Loại bỏ lá héo, cây chết để tránh ô nhiễm nước',
            frequency: '2-4 tuần/lần',
            icon: 'fa-leaf'
        }
    ];

    // Pond sizes and costs
    const pondSizes = [
        {
            size: 'Hồ nhỏ (5-10m²)',
            capacity: '10-20 con cá',
            features: 'Lọc cơ học, bơm nhỏ, cảnh quan đơn giản',
            cost: '15-30 triệu VNĐ',
            maintenance: '500k-1tr/tháng'
        },
        {
            size: 'Hồ trung bình (15-30m²)',
            capacity: '30-50 con cá',
            features: 'Lọc sinh học, hệ thống UV, thác nhỏ',
            cost: '50-100 triệu VNĐ',
            maintenance: '1-2tr/tháng'
        },
        {
            size: 'Hồ lớn (40m² trở lên)',
            capacity: '100+ con cá',
            features: 'Hệ lọc tổng hợp, tự động hóa, cảnh quan cao cấp',
            cost: '150-500 triệu VNĐ',
            maintenance: '3-5tr/tháng'
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: 'Hồ koi cần bao lâu để ổn định nước trước khi thả cá?',
            answer: 'Thường cần 7-14 ngày để hệ vi sinh vật ổn định. Nên thả ít cá thử nghiệm trước, quan sát 1 tuần rồi mới thả đủ số lượng.'
        },
        {
            id: 2,
            question: 'Chi phí bảo trì hồ koi hàng tháng khoảng bao nhiêu?',
            answer: 'Tùy quy mô hồ, từ 500k-5 triệu VNĐ/tháng bao gồm điện, thức ăn, hóa chất, thay vật liệu lọc.'
        },
        {
            id: 3,
            question: 'Nên dùng màng EPDM hay bê tông để chống thấm?',
            answer: 'EPDM linh hoạt, dễ sửa chữa, phù hợp hồ nhỏ. Bê tông bền hơn nhưng cần xử lý chống thấm kỹ và chi phí cao hơn.'
        },
        {
            id: 4,
            question: 'Có thể nuôi cá koi với cây thủy sinh không?',
            answer: 'Được, nhưng chọn cây cứng, không rụng lá nhiều. Cây thủy sinh giúp cân bằng sinh thái và tạo thẩm mỹ.'
        },
        {
            id: 5,
            question: 'Hồ koi có cần che nắng không?',
            answer: 'Nên có khu vực che nắng khoảng 30-50% diện tích hồ để cá tránh nắng gắt và giảm nhiệt độ nước.'
        },
        {
            id: 6,
            question: 'Bảo hành hồ koi như thế nào?',
            answer: 'Thường 12 tháng cho thi công và hệ lọc. Bao gồm sửa chữa rò rỉ, lỗi thiết bị và tư vấn kỹ thuật.'
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🐠 Thi Công Hồ Koi Sân Vườn</h1>
                            <p className="hero-subtitle">
                                Thiết kế & thi công hồ koi: hệ lọc chuyên nghiệp, thiết kế phong thủy, duy trì môi trường nước chuẩn
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">10-20</span>
                                    <span className="stat-label">Ngày thi công</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">Hệ lọc chính</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12</span>
                                    <span className="stat-label">Tháng bảo hành</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Tại sao nên có hồ koi trong sân vườn?</h2>
                            <p>
                                Hồ koi không chỉ là yếu tố cảnh quan đẹp mắt mà còn mang ý nghĩa <strong>phong thủy tốt lành</strong>,
                                tạo điểm nhấn sang trọng cho không gian sống.
                            </p>
                            <p>
                                Tuy nhiên, để có một hồ koi thành công cần <strong>kiến thức chuyên sâu về hệ lọc nước,
                                oxy hóa và kỹ thuật nuôi cá</strong> phù hợp.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filtration Systems */}
                <section className="systems-section">
                    <div className="container">
                        <h2>Các hệ thống lọc nước cho hồ koi</h2>
                        <div className="system-tabs">
                            <button
                                className={`tab-button ${activeSystem === 'biological' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('biological')}
                            >
                                Lọc sinh học
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'mechanical' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('mechanical')}
                            >
                                Lọc cơ học
                            </button>
                            <button
                                className={`tab-button ${activeSystem === 'uv' ? 'active' : ''}`}
                                onClick={() => setActiveSystem('uv')}
                            >
                                Lọc UV & Ozone
                            </button>
                        </div>

                        {Object.keys(filtrationSystems).map(system => (
                            <div
                                key={system}
                                className={`system-panel ${activeSystem === system ? 'active' : 'hidden'}`}
                            >
                                <h3>{filtrationSystems[system].title}</h3>
                                <p className="system-description">{filtrationSystems[system].description}</p>

                                <div className="system-comparison">
                                    <div className="advantages-section">
                                        <h4><i className="fas fa-thumbs-up"></i> Ưu điểm</h4>
                                        <ul>
                                            {filtrationSystems[system].advantages.map((advantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-check"></i>
                                                    {advantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="disadvantages-section">
                                        <h4><i className="fas fa-exclamation-triangle"></i> Nhược điểm</h4>
                                        <ul>
                                            {filtrationSystems[system].disadvantages.map((disadvantage, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-minus"></i>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="system-details">
                                    <div className="detail-item">
                                        <strong>Ứng dụng:</strong> {filtrationSystems[system].applications}
                                    </div>
                                    <div className="detail-item">
                                        <strong>Chi phí:</strong> {filtrationSystems[system].priceRange}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pond Sizes */}
                <section className="applications-section">
                    <div className="container">
                        <h2>Các quy mô hồ koi phổ biến</h2>
                        <div className="applications-grid">
                            {pondSizes.map((pond, index) => (
                                <div key={index} className="application-card">
                                    <div className="app-icon">
                                        <i className="fas fa-water"></i>
                                    </div>
                                    <h3>{pond.size}</h3>
                                    <p><strong>Sức chứa:</strong> {pond.capacity}</p>
                                    <p><strong>Tính năng:</strong> {pond.features}</p>
                                    <p><strong>Chi phí:</strong> {pond.cost}</p>
                                    <p><strong>Bảo trì:</strong> {pond.maintenance}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Maintenance Tips */}
                <section className="tips-section">
                    <div className="container">
                        <h2>Hướng dẫn bảo trì hồ koi</h2>
                        <div className="tips-grid">
                            {maintenanceTips.map((tip, index) => (
                                <div key={index} className="tip-card">
                                    <div className="tip-icon">
                                        <i className={`fas ${tip.icon}`}></i>
                                    </div>
                                    <h3>{tip.title}</h3>
                                    <p>{tip.description}</p>
                                    <div className="tip-frequency">
                                        <i className="fas fa-clock"></i>
                                        {tip.frequency}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Issues */}
                <section className="issues-section">
                    <div className="container">
                        <h2>Các vấn đề thường gặp & cách khắc phục</h2>
                        <div className="issues-grid">
                            {commonIssues.map((issue, index) => (
                                <div key={index} className="issue-card">
                                    <div className="issue-header">
                                        <div className="issue-icon">
                                            <i className={`fas ${issue.icon}`}></i>
                                        </div>
                                        <h3>{issue.issue}</h3>
                                    </div>
                                    <div className="issue-content">
                                        <p className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {issue.cause}
                                        </p>
                                        <p className="issue-solution">
                                            <strong>Khắc phục:</strong> {issue.solution}
                                        </p>
                                        <p className="issue-prevention">
                                            <strong>Phòng tránh:</strong> {issue.prevention}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Concerns */}
                <section className="concerns-section">
                    <div className="container">
                        <h2>Phân tích nỗi đau khách hàng</h2>
                        <div className="concerns-grid">
                            {customerConcerns.map((concern, index) => (
                                <div key={index} className="concern-card">
                                    <h3><i className="fas fa-exclamation-circle"></i> {concern.concern}</h3>
                                    <p className="concern-description">{concern.description}</p>
                                    <p className="concern-solution">
                                        <strong>Giải pháp LinHome:</strong> {concern.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Construction Process */}
                <section className="process-section">
                    <div className="container">
                        <h2>Quy trình thi công hồ koi chi tiết</h2>
                        <div className="process-timeline">
                            {constructionProcess.map((step, index) => (
                                <div key={step.step} className="process-step">
                                    <div className="step-number">{step.step}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        <div className="step-meta">
                                            <span className="step-duration">
                                                <i className="fas fa-clock"></i>
                                                {step.duration}
                                            </span>
                                            <span className="step-tools">
                                                <i className="fas fa-tools"></i>
                                                {step.tools}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <h2>Câu hỏi thường gặp (FAQ)</h2>
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
                                        <span>{faq.question}</span>
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

    );
};

export default HoKoiSanVuonPage;
