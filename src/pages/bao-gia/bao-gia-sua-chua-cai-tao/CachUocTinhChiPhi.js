// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/CachUocTinhChiPhi.js
import React from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const CachUocTinhChiPhi = () => {
    const factors = [
        {
            icon: 'fas fa-home',
            title: 'Hiện trạng công trình',
            points: [
                'Nhà xuống cấp nhiều → Cần đập phá, xử lý nền móng, chống thấm, gia cố kết cấu',
                'Nhà còn mới → Chủ yếu cải tạo nội thất, sơn sửa, thay đổi không gian'
            ],
            note: 'Hiện trạng càng phức tạp thì chi phí càng cao'
        },
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Diện tích cải tạo',
            points: [
                'Cải tạo 1 phòng (phòng khách, bếp, WC) → Chi phí thấp',
                'Cải tạo toàn bộ nhà → Tốn kém hơn nhưng có thể tối ưu trọn gói, giảm giá trên m²'
            ],
            note: ''
        },
        {
            icon: 'fas fa-cubes',
            title: 'Vật liệu xây dựng & nội thất',
            points: [
                'Vật liệu trung bình → Tiết kiệm 20–30%',
                'Vật liệu cao cấp → Tăng 30–50% tổng chi phí'
            ],
            note: 'Lựa chọn gạch, sơn, thiết bị vệ sinh, cửa, trần thạch cao... sẽ ảnh hưởng lớn đến ngân sách'
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'Phong cách thiết kế',
            points: [
                'Thiết kế đơn giản, tối giản → Chi phí hợp lý',
                'Thiết kế hiện đại, tân cổ điển, sang trọng → Đòi hỏi nhiều chi tiết, chi phí cao hơn'
            ],
            note: ''
        },
        {
            icon: 'fas fa-hard-hat',
            title: 'Đơn vị thi công',
            points: [
                'Chọn nhà thầu uy tín, báo giá minh bạch → Hạn chế phát sinh chi phí',
                'Chọn đội nhóm nhỏ, thiếu kinh nghiệm → Giá rẻ nhưng dễ phát sinh thêm chi phí sửa chữa sau này'
            ],
            note: ''
        }
    ];

    const estimationSteps = [
        {
            step: 1,
            title: 'Xác định nhu cầu cải tạo',
            content: 'Bạn muốn: Cải tạo phòng bếp? Làm mới phòng khách? Sơn sửa toàn bộ nhà? Hay nâng cấp nội thất?',
            tip: 'Việc này giúp bạn khoanh vùng hạng mục cần chi'
        },
        {
            step: 2,
            title: 'Tính chi phí theo m²',
            content: 'Cải tạo cơ bản: 2.500.000 – 3.500.000 VNĐ/m²\nCải tạo nâng cấp trung bình: 3.500.000 – 5.000.000 VNĐ/m²\nCải tạo cao cấp: 5.000.000 – 7.000.000 VNĐ/m²',
            tip: 'Ví dụ: Nhà 50m² cải tạo trung bình → 50 x 4.000.000 = 200.000.000 VNĐ'
        },
        {
            step: 3,
            title: 'Cộng thêm các chi phí phát sinh',
            content: 'Giấy phép sửa chữa (nếu cần)\nThay đổi thiết kế điện – nước\nTrang trí nội thất, đồ rời (sofa, bàn ghế, đèn trang trí)',
            tip: 'Nên dự trù thêm 10–15% tổng chi phí'
        }
    ];

    const savingTips = [
        { icon: 'fas fa-clipboard-check', text: 'Lập kế hoạch & bản vẽ thiết kế chi tiết trước khi thi công' },
        { icon: 'fas fa-layer-group', text: 'Ưu tiên vật liệu bền – giá hợp lý, tránh chạy theo xu hướng tạm thời' },
        { icon: 'fas fa-handshake', text: 'Chọn nhà thầu uy tín, báo giá minh bạch, hợp đồng rõ ràng' },
        { icon: 'fas fa-box', text: 'Thi công trọn gói thay vì thuê lẻ từng hạng mục → tiết kiệm hơn' },
        { icon: 'fas fa-recycle', text: 'Tận dụng lại vật liệu, nội thất còn dùng tốt' }
    ];

    return (
        <div className="suachua-detail-page">
            {/* Header */}
            <section className="detail-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Trang chủ</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia">Báo giá</a>
                        <i className="fas fa-chevron-right"></i>
                        <a href="/bao-gia/bao-gia-sua-chua-cai-tao">Báo giá sửa chữa cải tạo</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Cách ước tính chi phí</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-calculator"></i>
                        Làm Sao Để Ước Tính Chi Phí Sửa Chữa Cải Tạo Nhà Chính Xác Nhất?
                    </h1>
                    <p className="detail-subtitle">
                        Hướng dẫn chi tiết cách tính toán và ước lượng ngân sách sửa chữa cải tạo nhà hợp lý
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Việc sửa chữa, cải tạo nhà là nhu cầu phổ biến khi ngôi nhà đã xuống cấp hoặc không còn phù hợp 
                            với nhu cầu sử dụng. Tuy nhiên, nhiều gia chủ gặp khó khăn trong việc ước tính chi phí trước khi 
                            bắt tay vào thi công. Nếu không tính toán kỹ, bạn rất dễ rơi vào tình trạng thiếu hụt ngân sách 
                            hoặc phát sinh quá nhiều chi phí.
                        </p>
                        <p>
                            Trong bài viết này, <strong>LinHome</strong> sẽ giúp bạn nắm rõ cách ước tính chi phí sửa chữa 
                            cải tạo nhà chính xác – tiết kiệm – minh bạch, để luôn chủ động trong tài chính.
                        </p>
                    </div>
                </div>
            </section>

            {/* Factors */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Các Yếu Tố Ảnh Hưởng Đến Chi Phí Sửa Chữa Cải Tạo Nhà</h2>
                    
                    <div className="factors-grid">
                        {factors.map((factor, index) => (
                            <div key={index} className="factor-card">
                                <div className="factor-header">
                                    <div className="factor-icon">
                                        <i className={factor.icon}></i>
                                    </div>
                                    <h3>{factor.title}</h3>
                                </div>
                                <div className="factor-content">
                                    <ul>
                                        {factor.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    {factor.note && (
                                        <p className="factor-note">
                                            <i className="fas fa-info-circle"></i> {factor.note}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estimation Steps */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Cách Ước Tính Chi Phí Sơ Bộ Trước Khi Cải Tạo</h2>
                    
                    <div className="steps-container">
                        {estimationSteps.map((step, index) => (
                            <div key={index} className="estimation-step">
                                <div className="step-header">
                                    <div className="step-number">Bước {step.step}</div>
                                    <h3>{step.title}</h3>
                                </div>
                                <div className="step-content">
                                    <p style={{ whiteSpace: 'pre-line' }}>{step.content}</p>
                                    <div className="step-tip">
                                        <i className="fas fa-lightbulb"></i>
                                        <span>{step.tip}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Range Table */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Bảng Chi Phí Tham Khảo Theo Diện Tích</h2>
                    
                    <div className="cost-table-container">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Diện tích</th>
                                    <th>Cải tạo cơ bản</th>
                                    <th>Cải tạo trung bình</th>
                                    <th>Cải tạo cao cấp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>30m²</td>
                                    <td>75 - 105 triệu</td>
                                    <td>105 - 150 triệu</td>
                                    <td>150 - 210 triệu</td>
                                </tr>
                                <tr>
                                    <td>50m²</td>
                                    <td>125 - 175 triệu</td>
                                    <td>175 - 250 triệu</td>
                                    <td>250 - 350 triệu</td>
                                </tr>
                                <tr>
                                    <td>80m²</td>
                                    <td>200 - 280 triệu</td>
                                    <td>280 - 400 triệu</td>
                                    <td>400 - 560 triệu</td>
                                </tr>
                                <tr>
                                    <td>100m²</td>
                                    <td>250 - 350 triệu</td>
                                    <td>350 - 500 triệu</td>
                                    <td>500 - 700 triệu</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="table-note">
                            <i className="fas fa-info-circle"></i> Lưu ý: Bảng giá trên chỉ mang tính chất tham khảo. 
                            Chi phí thực tế có thể thay đổi tùy theo hiện trạng công trình và yêu cầu cụ thể.
                        </p>
                    </div>
                </div>
            </section>

            {/* Saving Tips */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Mẹo Giúp Tiết Kiệm Chi Phí Sửa Chữa Cải Tạo Nhà</h2>
                    
                    <div className="tips-grid">
                        {savingTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <i className={tip.icon}></i>
                                <p>{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conclusion & CTA */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Kết Luận</h2>
                        <p>
                            Ước tính chi phí sửa chữa cải tạo nhà không hề khó, quan trọng là bạn phải hiểu rõ nhu cầu, 
                            diện tích, vật liệu và lựa chọn đơn vị thi công phù hợp.
                        </p>
                        <p>
                            Nếu bạn đang cần một báo giá chi tiết cho công trình của mình, hãy liên hệ ngay với LinHome 
                            để được tư vấn miễn phí!
                        </p>
                        <div className="cta-buttons">
                            <a href="/bao-gia/bao-gia-sua-chua-cai-tao" className="btn btn-secondary">
                                <i className="fas fa-file-invoice-dollar"></i>
                                Xem Báo Giá Chi Tiết
                            </a>
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Hotline: 0941 090 333
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CachUocTinhChiPhi;
