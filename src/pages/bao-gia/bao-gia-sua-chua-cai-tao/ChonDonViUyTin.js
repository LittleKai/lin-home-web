// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/ChonDonViUyTin.js
import React, { useState } from 'react';
import '../../../styles/CommonStyles.css';
import './SuaChuaCaiTaoStyles.css';

const ChonDonViUyTin = () => {
    const [activeTab, setActiveTab] = useState('criteria');

    const evaluationCriteria = [
        {
            icon: 'fas fa-certificate',
            title: 'Giấy phép kinh doanh',
            points: [
                'Đăng ký kinh doanh hợp lệ',
                'Giấy phép xây dựng (nếu cần)',
                'Chứng chỉ năng lực thi công',
                'Bảo hiểm trách nhiệm nghề nghiệp'
            ],
            importance: 'Đảm bảo tính pháp lý và trách nhiệm'
        },
        {
            icon: 'fas fa-history',
            title: 'Kinh nghiệm & Uy tín',
            points: [
                'Thời gian hoạt động trên 5 năm',
                'Portfolio công trình đã thực hiện',
                'Đánh giá từ khách hàng cũ',
                'Danh tiếng trên thị trường'
            ],
            importance: 'Phản ánh năng lực thực tế'
        },
        {
            icon: 'fas fa-users',
            title: 'Đội ngũ nhân sự',
            points: [
                'Kiến trúc sư có chứng chỉ hành nghề',
                'Kỹ sư giám sát chuyên nghiệp',
                'Thợ thi công lành nghề',
                'Đào tạo an toàn lao động'
            ],
            importance: 'Quyết định chất lượng công trình'
        },
        {
            icon: 'fas fa-file-invoice-dollar',
            title: 'Báo giá minh bạch',
            points: [
                'Chi tiết từng hạng mục',
                'Cam kết không phát sinh',
                'Giá cả hợp lý thị trường',
                'Phương thức thanh toán linh hoạt'
            ],
            importance: 'Tránh bị "chặt chém" chi phí'
        },
        {
            icon: 'fas fa-handshake',
            title: 'Hợp đồng rõ ràng',
            points: [
                'Nội dung chi tiết, đầy đủ',
                'Cam kết tiến độ cụ thể',
                'Điều khoản bảo hành',
                'Quy định về phát sinh'
            ],
            importance: 'Bảo vệ quyền lợi khách hàng'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Chính sách bảo hành',
            points: [
                'Thời gian bảo hành 12-24 tháng',
                'Cam kết xử lý nhanh chóng',
                'Bảo hành cả công và vật liệu',
                'Có văn bản bảo hành'
            ],
            importance: 'Đảm bảo chất lượng lâu dài'
        }
    ];

    const redFlags = [
        {
            icon: 'fas fa-exclamation-triangle',
            title: 'Báo giá quá thấp',
            desc: 'Thường đi kèm chất lượng kém hoặc phát sinh nhiều'
        },
        {
            icon: 'fas fa-ban',
            title: 'Không có hợp đồng',
            desc: 'Không bảo vệ được quyền lợi khi có tranh chấp'
        },
        {
            icon: 'fas fa-question-circle',
            title: 'Thông tin mơ hồ',
            desc: 'Không rõ địa chỉ, không có portfolio'
        },
        {
            icon: 'fas fa-hand-holding-usd',
            title: 'Yêu cầu cọc cao',
            desc: 'Đòi cọc trên 50% là dấu hiệu đáng ngờ'
        },
        {
            icon: 'fas fa-times-circle',
            title: 'Không bảo hành',
            desc: 'Không chịu trách nhiệm sau thi công'
        },
        {
            icon: 'fas fa-user-slash',
            title: 'Thiếu chuyên nghiệp',
            desc: 'Hẹn không đúng giờ, tư vấn qua loa'
        }
    ];

    const verificationSteps = [
        {
            step: 1,
            title: 'Tìm hiểu sơ bộ',
            tasks: [
                'Tìm kiếm thông tin trên Google, Facebook',
                'Xem đánh giá từ khách hàng cũ',
                'Kiểm tra website và portfolio',
                'Hỏi ý kiến người quen đã sử dụng'
            ]
        },
        {
            step: 2,
            title: 'Liên hệ tư vấn',
            tasks: [
                'Gọi điện hoặc chat để trao đổi',
                'Đánh giá thái độ và chuyên môn',
                'Yêu cầu tư vấn chi tiết',
                'Hẹn khảo sát thực tế'
            ]
        },
        {
            step: 3,
            title: 'Khảo sát & Báo giá',
            tasks: [
                'Đón tiếp nhân viên khảo sát',
                'Quan sát cách làm việc',
                'Nhận báo giá chi tiết',
                'So sánh với các đơn vị khác'
            ]
        },
        {
            step: 4,
            title: 'Kiểm tra pháp lý',
            tasks: [
                'Yêu cầu xem giấy phép kinh doanh',
                'Kiểm tra các chứng chỉ năng lực',
                'Xác minh thông tin công ty',
                'Đọc kỹ điều khoản hợp đồng'
            ]
        },
        {
            step: 5,
            title: 'Tham khảo công trình',
            tasks: [
                'Xem công trình mẫu đã làm',
                'Liên hệ khách hàng cũ (nếu có thể)',
                'Đánh giá chất lượng thực tế',
                'Kiểm tra tình trạng sau bảo hành'
            ]
        }
    ];

    const comparisonTable = [
        { criteria: 'Thời gian hoạt động', good: 'Trên 5 năm', bad: 'Dưới 1 năm' },
        { criteria: 'Portfolio', good: 'Nhiều công trình tương tự', bad: 'Ít hoặc không có' },
        { criteria: 'Báo giá', good: 'Chi tiết, hợp lý', bad: 'Sơ sài, quá cao/thấp' },
        { criteria: 'Hợp đồng', good: 'Đầy đủ, rõ ràng', bad: 'Không có hoặc mơ hồ' },
        { criteria: 'Thanh toán', good: 'Theo tiến độ', bad: 'Yêu cầu trả hết trước' },
        { criteria: 'Bảo hành', good: '12-24 tháng', bad: 'Không có hoặc < 6 tháng' },
        { criteria: 'Thái độ', good: 'Chuyên nghiệp, nhiệt tình', bad: 'Hời hợt, khó liên lạc' }
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
                        <span>Chọn đơn vị uy tín</span>
                    </nav>
                    <h1 className="detail-title">
                        <i className="fas fa-search"></i>
                        Cách Chọn Đơn Vị Sửa Chữa Cải Tạo Nhà Uy Tín
                    </h1>
                    <p className="detail-subtitle">
                        Tiêu chí và kinh nghiệm lựa chọn nhà thầu thi công chất lượng
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="detail-intro">
                        <p>
                            Việc lựa chọn đơn vị sửa chữa, cải tạo nhà uy tín là yếu tố then chốt quyết định 
                            thành công của dự án. Một nhà thầu tốt không chỉ đảm bảo chất lượng công trình 
                            mà còn giúp bạn tiết kiệm chi phí và thời gian.
                        </p>
                        <p>
                            Dưới đây là hướng dẫn chi tiết giúp bạn đánh giá và lựa chọn đơn vị thi công 
                            phù hợp, tránh rủi ro và những bất ngờ không mong muốn.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="section section-alt">
                <div className="container">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'criteria' ? 'active' : ''}`}
                            onClick={() => setActiveTab('criteria')}
                        >
                            <i className="fas fa-check-square"></i>
                            Tiêu Chí Đánh Giá
                        </button>
                        <button
                            className={`tab ${activeTab === 'redflags' ? 'active' : ''}`}
                            onClick={() => setActiveTab('redflags')}
                        >
                            <i className="fas fa-exclamation-triangle"></i>
                            Dấu Hiệu Cảnh Báo
                        </button>
                        <button
                            className={`tab ${activeTab === 'steps' ? 'active' : ''}`}
                            onClick={() => setActiveTab('steps')}
                        >
                            <i className="fas fa-list-ol"></i>
                            Quy Trình Kiểm Tra
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'criteria' && (
                        <div className="criteria-grid">
                            {evaluationCriteria.map((criteria, index) => (
                                <div key={index} className="criteria-card">
                                    <div className="criteria-header">
                                        <div className="criteria-icon">
                                            <i className={criteria.icon}></i>
                                        </div>
                                        <h3>{criteria.title}</h3>
                                    </div>
                                    <ul className="criteria-points">
                                        {criteria.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="criteria-importance">
                                        <i className="fas fa-info-circle"></i>
                                        {criteria.importance}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'redflags' && (
                        <div className="redflags-grid">
                            {redFlags.map((flag, index) => (
                                <div key={index} className="redflag-card">
                                    <div className="redflag-icon">
                                        <i className={flag.icon}></i>
                                    </div>
                                    <h4>{flag.title}</h4>
                                    <p>{flag.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'steps' && (
                        <div className="verification-steps">
                            {verificationSteps.map((step, index) => (
                                <div key={index} className="verification-step">
                                    <div className="step-header">
                                        <div className="step-number">Bước {step.step}</div>
                                        <h3>{step.title}</h3>
                                    </div>
                                    <ul className="step-tasks">
                                        {step.tasks.map((task, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check"></i>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">So Sánh Đơn Vị Tốt vs Kém</h2>
                    
                    <div className="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tiêu chí</th>
                                    <th className="good-col">
                                        <i className="fas fa-check-circle"></i>
                                        Đơn vị uy tín
                                    </th>
                                    <th className="bad-col">
                                        <i className="fas fa-times-circle"></i>
                                        Đơn vị kém
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonTable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="criteria-cell">{row.criteria}</td>
                                        <td className="good-cell">{row.good}</td>
                                        <td className="bad-cell">{row.bad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Mẹo Chọn Nhà Thầu Từ Chuyên Gia</h2>
                    
                    <div className="expert-tips">
                        <div className="tip-box">
                            <div className="tip-number">01</div>
                            <div className="tip-content">
                                <h4>Đừng chỉ chọn theo giá</h4>
                                <p>Giá quá rẻ thường đi kèm chất lượng kém, vật liệu giả, và nhiều chi phí phát sinh sau này.</p>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-number">02</div>
                            <div className="tip-content">
                                <h4>Xem công trình thực tế</h4>
                                <p>Yêu cầu xem các công trình đã làm, đặc biệt là những công trình tương tự với nhu cầu của bạn.</p>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-number">03</div>
                            <div className="tip-content">
                                <h4>Ký hợp đồng chi tiết</h4>
                                <p>Hợp đồng phải ghi rõ: phạm vi công việc, vật liệu sử dụng, thời gian, và điều khoản bảo hành.</p>
                            </div>
                        </div>
                        <div className="tip-box">
                            <div className="tip-number">04</div>
                            <div className="tip-content">
                                <h4>Thanh toán theo tiến độ</h4>
                                <p>Không bao giờ thanh toán 100% trước. Nên chia làm 3-4 đợt theo tiến độ thi công.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose LinHome */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Vì Sao Nên Chọn LinHome?</h2>
                    
                    <div className="why-linhome">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h4>15+ Năm Kinh Nghiệm</h4>
                            <p>Hàng nghìn công trình hoàn thành, khách hàng hài lòng</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-file-contract"></i>
                            </div>
                            <h4>Hợp Đồng Minh Bạch</h4>
                            <p>Rõ ràng từng hạng mục, không phát sinh</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h4>Bảo Hành 24 Tháng</h4>
                            <p>Cam kết chất lượng, hỗ trợ sau thi công</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h4>Đội Ngũ Chuyên Nghiệp</h4>
                            <p>KTS, kỹ sư giàu kinh nghiệm, thợ lành nghề</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient">
                <div className="container">
                    <div className="conclusion-box">
                        <h2>Hãy Để LinHome Đồng Hành Cùng Bạn</h2>
                        <p>
                            Với kinh nghiệm lâu năm và cam kết chất lượng, LinHome tự hào là đơn vị 
                            sửa chữa cải tạo nhà uy tín hàng đầu. Liên hệ ngay để được tư vấn miễn phí!
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:0941090333" className="btn btn-primary">
                                <i className="fas fa-phone"></i>
                                Hotline: 0941 090 333
                            </a>
                            <a href="/lien-he" className="btn btn-secondary">
                                <i className="fas fa-envelope"></i>
                                Yêu Cầu Báo Giá
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .criteria-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .criteria-card {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .criteria-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .criteria-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                }

                .criteria-header h3 {
                    flex: 1;
                    margin: 0;
                    color: #2d3748;
                }

                .criteria-points {
                    list-style: none;
                    margin-bottom: 1rem;
                }

                .criteria-points li {
                    padding: 0.3rem 0;
                    padding-left: 1.5rem;
                    position: relative;
                    color: #4a5568;
                }

                .criteria-points li:before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: #10b981;
                }

                .criteria-importance {
                    padding: 0.75rem;
                    background: #f0f4ff;
                    border-radius: 8px;
                    color: #667eea;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .redflags-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .redflag-card {
                    background: #fef2f2;
                    border: 2px solid #fee2e2;
                    border-radius: 12px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s;
                }

                .redflag-card:hover {
                    border-color: #ef4444;
                    transform: translateY(-2px);
                }

                .redflag-icon {
                    width: 60px;
                    height: 60px;
                    background: #ef4444;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }

                .redflag-icon i {
                    font-size: 1.5rem;
                    color: white;
                }

                .redflag-card h4 {
                    color: #dc2626;
                    margin-bottom: 0.5rem;
                }

                .redflag-card p {
                    color: #7f1d1d;
                    margin: 0;
                }

                .verification-steps {
                    margin-top: 2rem;
                }

                .verification-step {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .step-tasks {
                    list-style: none;
                    margin-top: 1rem;
                }

                .step-tasks li {
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #4a5568;
                }

                .step-tasks i {
                    color: #10b981;
                }

                .comparison-table {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                }

                .comparison-table table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .comparison-table th {
                    padding: 1rem;
                    text-align: left;
                    font-weight: 600;
                }

                .comparison-table thead tr {
                    background: #f7fafc;
                }

                .good-col {
                    color: #10b981;
                }

                .bad-col {
                    color: #ef4444;
                }

                .comparison-table td {
                    padding: 1rem;
                    border-top: 1px solid #e2e8f0;
                }

                .criteria-cell {
                    font-weight: 600;
                    color: #2d3748;
                }

                .good-cell {
                    color: #059669;
                }

                .bad-cell {
                    color: #dc2626;
                }

                .expert-tips {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .tip-box {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    display: flex;
                    gap: 1.5rem;
                }

                .tip-number {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #667eea;
                    opacity: 0.3;
                }

                .tip-content h4 {
                    margin-bottom: 0.5rem;
                    color: #2d3748;
                }

                .tip-content p {
                    color: #4a5568;
                    margin: 0;
                }

                .why-linhome {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                @media (max-width: 768px) {
                    .criteria-grid,
                    .redflags-grid {
                        grid-template-columns: 1fr;
                    }

                    .comparison-table {
                        overflow-x: auto;
                    }

                    .comparison-table table {
                        min-width: 500px;
                    }

                    .tip-box {
                        flex-direction: column;
                        text-align: center;
                    }

                    .expert-tips {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ChonDonViUyTin;
