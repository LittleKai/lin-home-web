// src/pages/bao-gia/bao-gia-sua-chua-cai-tao/QuyTrinhSuaChua.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/CommonStyles.css';

const QuyTrinhSuaChua = () => {
    const [activeTab, setActiveTab] = useState('quick');
    const [activeFaq, setActiveFaq] = useState(null);

    // Process types
    const processTypes = [
        {
            id: 'quick',
            name: 'Quy Trình Nhanh',
            duration: '7-15 ngày',
            price: '1,000,000 - 1,800,000 VNĐ/m²',
            description: 'Sửa chữa nhanh, không đập phá nhiều, phù hợp diện tích nhỏ',
            steps: [
                'Khảo sát & báo giá (1 ngày)',
                'Ký hợp đồng & đặt cọc (1 ngày)',
                'Mua vật liệu (1-2 ngày)',
                'Thi công (3-7 ngày)',
                'Nghiệm thu & bàn giao (1 ngày)'
            ],
            suitable: ['Phòng ngủ nhỏ', 'Phòng tắm', 'Bếp nhỏ'],
            bgColor: '#10b981'
        },
        {
            id: 'standard',
            name: 'Quy Trình Chuẩn',
            duration: '30-60 ngày',
            price: '1,800,000 - 2,800,000 VNĐ/m²',
            description: 'Quy trình đầy đủ, đảm bảo chất lượng, phù hợp nhà phố',
            steps: [
                'Khảo sát & thiết kế (3-5 ngày)',
                'Báo giá & ký hợp đồng (2 ngày)',
                'Phá dỡ & chuẩn bị (3-5 ngày)',
                'Thi công thô (10-15 ngày)',
                'Hoàn thiện (10-20 ngày)',
                'Lắp đặt thiết bị (5-7 ngày)',
                'Nghiệm thu & bảo hành (2 ngày)'
            ],
            suitable: ['Nhà phố 1-2 tầng', 'Căn hộ chung cư', 'Văn phòng'],
            bgColor: '#f59e0b'
        },
        {
            id: 'premium',
            name: 'Quy Trình Cao Cấp',
            duration: '90-150 ngày',
            price: '2,800,000 - 4,500,000 VNĐ/m²',
            description: 'Quy trình chuyên sâu, giám sát chặt chẽ, vật liệu cao cấp',
            steps: [
                'Khảo sát & tư vấn (5-7 ngày)',
                'Thiết kế 2D-3D (10-15 ngày)',
                'Báo giá & hợp đồng (3 ngày)',
                'Phá dỡ toàn bộ (7-10 ngày)',
                'Xây dựng kết cấu (20-30 ngày)',
                'Hệ thống M&E (15-20 ngày)',
                'Hoàn thiện cao cấp (30-45 ngày)',
                'Nội thất & smarthome (10-15 ngày)',
                'Nghiệm thu & bảo hành (5 ngày)'
            ],
            suitable: ['Biệt thự', 'Nhà phố cao cấp', 'Penthouse'],
            bgColor: '#8b5cf6'
        }
    ];

    // Detailed workflow steps
    const detailedSteps = [
        {
            phase: 'Giai Đoạn 1',
            title: 'Khảo Sát & Tư Vấn',
            duration: '1-7 ngày',
            icon: 'fas fa-search',
            tasks: [
                'Đo đạc hiện trạng',
                'Kiểm tra kết cấu',
                'Tư vấn giải pháp',
                'Lập dự toán sơ bộ'
            ]
        },
        {
            phase: 'Giai Đoạn 2',
            title: 'Thiết Kế & Báo Giá',
            duration: '3-15 ngày',
            icon: 'fas fa-pencil-ruler',
            tasks: [
                'Thiết kế bản vẽ 2D',
                'Render 3D (tùy chọn)',
                'Tính khối lượng',
                'Báo giá chi tiết'
            ]
        },
        {
            phase: 'Giai Đoạn 3',
            title: 'Phá Dỡ',
            duration: '3-10 ngày',
            icon: 'fas fa-hammer',
            tasks: [
                'Phá dỡ tường cũ',
                'Tháo điện nước',
                'Dọn dẹp rác thải',
                'Bảo vệ khu vực khác'
            ]
        },
        {
            phase: 'Giai Đoạn 4',
            title: 'Xây Dựng Thô',
            duration: '10-30 ngày',
            icon: 'fas fa-building',
            tasks: [
                'Xây tường mới',
                'Đổ bê tông',
                'Sửa kết cấu',
                'Lắp điện nước thô'
            ]
        },
        {
            phase: 'Giai Đoạn 5',
            title: 'Hoàn Thiện',
            duration: '10-45 ngày',
            icon: 'fas fa-paint-roller',
            tasks: [
                'Ốp lát gạch',
                'Trần thạch cao',
                'Sơn nước',
                'Lắp cửa, tủ bếp'
            ]
        },
        {
            phase: 'Giai Đoạn 6',
            title: 'Nghiệm Thu',
            duration: '1-5 ngày',
            icon: 'fas fa-clipboard-check',
            tasks: [
                'Kiểm tra chất lượng',
                'Sửa lỗi phát sinh',
                'Vệ sinh tổng thể',
                'Bàn giao & bảo hành'
            ]
        }
    ];

    // Quality checkpoints
    const qualityChecks = [
        {
            checkpoint: 'Kiểm Tra Hiện Trạng',
            timing: 'Trước thi công',
            items: ['Kết cấu', 'Nền móng', 'Điện nước', 'Mối mọt'],
            icon: 'fas fa-clipboard-list'
        },
        {
            checkpoint: 'Kiểm Tra Phá Dỡ',
            timing: 'Sau phá dỡ',
            items: ['Dọn sạch rác', 'Bảo vệ an toàn', 'Kiểm tra kết cấu còn lại'],
            icon: 'fas fa-hard-hat'
        },
        {
            checkpoint: 'Kiểm Tra Thô',
            timing: 'Sau xây thô',
            items: ['Độ thẳng tường', 'Độ bằng sàn', 'Hệ thống điện nước'],
            icon: 'fas fa-ruler'
        },
        {
            checkpoint: 'Kiểm Tra Hoàn Thiện',
            timing: 'Trước nghiệm thu',
            items: ['Màu sơn', 'Gạch ốp lát', 'Cửa đi', 'Thiết bị'],
            icon: 'fas fa-check-double'
        }
    ];

    // Document checklist
    const documents = [
        {
            category: 'Trước Thi Công',
            docs: [
                'Hợp đồng thi công',
                'Bản vẽ thiết kế',
                'Báo giá chi tiết',
                'Tiến độ thi công',
                'Giấy phép (nếu cần)'
            ]
        },
        {
            category: 'Trong Thi Công',
            docs: [
                'Nhật ký thi công',
                'Biên bản nghiệm thu từng phần',
                'Chứng từ vật liệu',
                'Hình ảnh quá trình'
            ]
        },
        {
            category: 'Sau Thi Công',
            docs: [
                'Biên bản nghiệm thu',
                'Sơ đồ điện nước',
                'Giấy bảo hành',
                'Hướng dẫn bảo trì'
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Quy trình sửa chữa nhà có những bước nào?',
            answer: 'Quy trình gồm 6 bước chính: (1) Khảo sát & tư vấn, (2) Thiết kế & báo giá, (3) Phá dỡ cũ, (4) Xây dựng thô, (5) Hoàn thiện, (6) Nghiệm thu & bàn giao. Thời gian thực hiện từ 7-150 ngày tùy quy mô.'
        },
        {
            question: 'Làm sao để kiểm soát tiến độ thi công?',
            answer: 'Kiểm soát tiến độ bằng cách: (1) Có bảng tiến độ chi tiết, (2) Họp định kỳ hàng tuần, (3) Kiểm tra công trường thường xuyên, (4) Yêu cầu nhật ký thi công, (5) Nghiệm thu từng giai đoạn.'
        },
        {
            question: 'Khi nào cần xin giấy phép sửa chữa?',
            answer: 'Cần xin phép khi: (1) Thay đổi kết cấu chịu lực, (2) Đập tường chung, (3) Nâng thêm tầng, (4) Thay đổi công năng (nhà ở thành VP), (5) Xây dựng trên 50% diện tích.'
        },
        {
            question: 'Chi phí quản lý thi công chiếm bao nhiêu %?',
            answer: 'Chi phí quản lý thường chiếm 8-12% tổng giá trị công trình. Bao gồm: giám sát kỹ thuật, quản lý nhân công, vật tư, tiến độ, an toàn lao động và các chi phí phát sinh.'
        },
        {
            question: 'Có thể ở trong nhà khi đang sửa chữa không?',
            answer: 'Tùy mức độ sửa chữa: Sửa nhỏ (1-2 phòng) có thể ở được nhưng bụi bặm và ồn ào. Sửa lớn (cả căn) nên tạm trú nơi khác 1-2 tháng. Phá dỡ giai đoạn đầu rất bụi bặm và nguy hiểm.'
        },
        {
            question: 'Bảo hành sửa chữa cải tạo trong bao lâu?',
            answer: 'Bảo hành phụ thuộc hạng mục: Kết cấu (tường, sàn) 2-5 năm, hoàn thiện (sơn, gạch) 1-2 năm, điện nước 1-3 năm, thiết bị theo nhà sản xuất. Yêu cầu cam kết bảo hành bằng văn bản.'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">⚙️ Quy Trình Sửa Chữa Cải Tạo</h1>
                    <p className="section-subtitle">
                        Quy trình thi công chuẩn, minh bạch, đảm bảo tiến độ và chất lượng
                    </p>

                    <div className="hero-stats grid-4">
                        <div className="stat-item">
                            <div className="stat-number">6</div>
                            <div className="stat-label">Giai Đoạn Chính</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">7-150</div>
                            <div className="stat-label">Ngày Thi Công</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Điểm Kiểm Soát</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Bảo Hành Cam Kết</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Types */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">🔄 Lựa Chọn Quy Trình</h2>
                    <p className="section-subtitle">
                        3 loại quy trình phù hợp với từng nhu cầu và ngân sách
                    </p>

                    <div className="tabs-container">
                        <div className="tabs">
                            {processTypes.map((type) => (
                                <button
                                    key={type.id}
                                    className={`tab ${activeTab === type.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(type.id)}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>

                        {processTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`tab-content ${activeTab === type.id ? 'active' : ''}`}
                            >
                                <div className="pricing-card card">
                                    <div className="card-header" style={{ background: `linear-gradient(135deg, ${type.bgColor}, ${type.bgColor}dd)` }}>
                                        <h3>{type.name}</h3>
                                        <div className="price-range">{type.price}</div>
                                        <p>{type.description}</p>
                                        <div className="duration-badge">
                                            <i className="far fa-clock"></i>
                                            {type.duration}
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="steps-section">
                                            <h4>📋 Các Bước Thực Hiện:</h4>
                                            <ul>
                                                {type.steps.map((step, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-arrow-right"></i>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="suitable-section">
                                            <h4>✅ Phù Hợp Cho:</h4>
                                            <ul>
                                                {type.suitable.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-home"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pricing-actions">
                                        <a href="/lien-he" className="btn btn-primary">
                                            <i className="fas fa-phone"></i>
                                            Liên Hệ Tư Vấn
                                        </a>
                                        <a href="/bao-gia/bao-gia-sua-chua-cai-tao" className="btn btn-secondary">
                                            <i className="fas fa-calculator"></i>
                                            Xem Báo Giá
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Workflow */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">📝 Quy Trình Chi Tiết</h2>
                    <p className="section-subtitle">
                        6 giai đoạn thi công chuẩn cho dự án cải tạo
                    </p>

                    <div className="process-timeline">
                        {detailedSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={step.icon}></i>
                                    <span>{step.phase}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <div className="step-duration">
                                        <i className="far fa-clock"></i>
                                        {step.duration}
                                    </div>
                                    <ul>
                                        {step.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex}>
                                                <i className="fas fa-check"></i>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Control */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">✅ Kiểm Soát Chất Lượng</h2>
                    <p className="section-subtitle">
                        4 điểm kiểm tra quan trọng trong quá trình thi công
                    </p>

                    <div className="quality-grid grid-2">
                        {qualityChecks.map((check, index) => (
                            <div key={index} className="quality-card card">
                                <div className="card-header">
                                    <i className={`${check.icon} icon-large`}></i>
                                    <h3>{check.checkpoint}</h3>
                                    <div className="timing">{check.timing}</div>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {check.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <i className="fas fa-check-circle"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Checklist */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">📄 Hồ Sơ Cần Thiết</h2>
                    <p className="section-subtitle">
                        Danh sách giấy tờ cần chuẩn bị cho từng giai đoạn
                    </p>

                    <div className="documents-grid grid-3">
                        {documents.map((doc, index) => (
                            <div key={index} className="document-card card">
                                <div className="card-header">
                                    <i className="fas fa-folder-open icon-large"></i>
                                    <h3>{doc.category}</h3>
                                </div>

                                <div className="card-body">
                                    <ul>
                                        {doc.docs.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <i className="fas fa-file-alt"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">❓ Câu Hỏi Thường Gặp</h2>

                    <div className="faq-list">
                        {faqData.map((faq, index) => (
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

export default QuyTrinhSuaChua;
