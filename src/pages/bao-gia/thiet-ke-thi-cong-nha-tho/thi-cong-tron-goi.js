// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-tron-goi.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const ThiCongTronGoiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const packagePrices = [
        { type: 'Nhà thờ họ 3 gian (BTCT giả gỗ)', price: '6.000.000 - 7.500.000đ/m² sàn', note: 'Bao gồm móng, khung, mái, hoàn thiện cơ bản' },
        { type: 'Nhà thờ họ 5 gian (BTCT giả gỗ)', price: '6.500.000 - 8.000.000đ/m² sàn', note: 'Quy mô lớn, sân vườn rộng, hậu cung' },
        { type: 'Từ đường gỗ lim - mít - xoan', price: '8.000.000 - 12.000.000đ/m² sàn', note: 'Vật liệu cao cấp, chạm khắc thủ công' },
        { type: 'Từ đường kết hợp khuôn viên', price: '7.000.000 - 9.500.000đ/m² sàn', note: 'Bao gồm sân vườn, hồ bán nguyệt, cuốn thư đá' }
    ];

    const packageBenefits = [
        { benefit: 'Tiết kiệm thời gian', description: 'Đơn vị duy nhất đảm nhận từ A-Z', icon: 'fa-clock' },
        { benefit: 'Minh bạch chi phí', description: 'Báo giá rõ ràng, không phát sinh', icon: 'fa-dollar-sign' },
        { benefit: 'Đồng bộ chất lượng', description: 'Công trình đồng bộ về kỹ thuật và thẩm mỹ', icon: 'fa-check-double' },
        { benefit: 'Bảo hành lâu dài', description: 'Bảo hành kết cấu 10 năm, mái ngói & gỗ 5 năm', icon: 'fa-shield-alt' }
    ];

    const constructionProcess = [
        { step: 1, title: 'Khảo sát đất & phong thủy', description: 'Khảo sát thực địa, xác định thế đất', duration: '1-2 ngày', icon: 'fa-search-location' },
        { step: 2, title: 'Lên phương án thiết kế & báo giá', description: 'Thiết kế chi tiết, báo giá cụ thể', duration: '5-10 ngày', icon: 'fa-drafting-compass' },
        { step: 3, title: 'Xin phép xây dựng', description: 'Chuẩn bị hồ sơ, thủ tục xin phép', duration: '15-30 ngày', icon: 'fa-file-signature' },
        { step: 4, title: 'Thi công phần móng, khung, mái', description: 'Đào móng, dựng khung, thi công mái thô', duration: '20-40 ngày', icon: 'fa-hard-hat' },
        { step: 5, title: 'Hoàn thiện mái ngói, cửa gỗ', description: 'Lợp ngói, lắp cửa, sơn son thếp vàng', duration: '15-30 ngày', icon: 'fa-paint-brush' },
        { step: 6, title: 'Thi công cảnh quan', description: 'Thi công sân vườn, hồ bán nguyệt', duration: '10-20 ngày', icon: 'fa-tree' },
        { step: 7, title: 'Nghiệm thu & bàn giao', description: 'Kiểm tra tổng thể, bàn giao chìa khóa', duration: '2-3 ngày', icon: 'fa-handshake' }
    ];

    const includeExclude = {
        included: ['Thiết kế kiến trúc 2D + 3D', 'Tư vấn phong thủy', 'Hỗ trợ xin phép xây dựng', 'Thi công móng, khung, cột, tường', 'Thi công mái thô & lợp ngói', 'Cửa gỗ chạm khắc', 'Sơn bả tường', 'Hệ thống điện nước', 'Sân vườn cơ bản'],
        excluded: ['Đồ thờ nội thất rời (bàn thờ, sập gụ, tủ thờ)', 'Hoành phi - câu đối cao cấp', 'Cảnh quan nâng cao (hồ Koi, thác nước)', 'Hệ thống âm thanh, ánh sáng đặc biệt', 'Chi phí lễ khởi công, cúng động thổ']
    };

    const faqs = [
        { question: 'Chi phí thi công trọn gói nhà thờ 3 gian khoảng bao nhiêu?', answer: 'Chi phí dao động từ 6-7,5 triệu đồng/m² sàn cho BTCT giả gỗ, 8-12 triệu đồng/m² cho gỗ lim, mít cao cấp.' },
        { question: 'Gói trọn gói có bao gồm bàn thờ không?', answer: 'Gói cơ bản chưa bao gồm đồ thờ rời. Đây là hạng mục tùy chọn với chi phí 20-80 triệu đồng.' },
        { question: 'Thời gian thi công trọn gói mất bao lâu?', answer: 'Nhà thờ 3 gian khoảng 2-3 tháng, nhà thờ 5 gian khoảng 3-4 tháng, bao gồm xin phép và thi công.' },
        { question: 'Có phát sinh chi phí không?', answer: 'Chúng tôi cam kết báo giá minh bạch và không phát sinh nếu không có thay đổi thiết kế.' },
        { question: 'Có hỗ trợ xin phép xây dựng không?', answer: 'Có, gói trọn gói bao gồm dịch vụ hỗ trợ chuẩn bị hồ sơ và xin phép xây dựng.' }
    ];

    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="page-wrapper">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title" >Báo Giá Thi Công Trọn Gói Nhà Thờ Họ 2025</h1>
                    <p className="section-subtitle" >Dịch vụ chìa khóa trao tay, trang nghiêm, bền vững, tiết kiệm thời gian</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ý Nghĩa Thi Công Trọn Gói</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Thi công trọn gói là giải pháp tối ưu cho những gia tộc muốn có một công trình chuẩn mực - đồng bộ - tiết kiệm thời gian.
                        Đơn vị thi công đảm nhận từ khảo sát, thiết kế, xin phép đến thi công và bàn giao.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Báo Giá Thi Công Trọn Gói 2025</h2>
                    <div className="grid-2">
                        {packagePrices.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>{item.type}</h3>
                                    <div className="price-range">{item.price}</div>
                                    <p>{item.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '1.5rem', background: '#fff7ed', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Bao gồm: thiết kế + thi công phần thô + hoàn thiện + sân vườn</p>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i> Chưa bao gồm: đồ thờ nội thất rời (bàn thờ, sập gụ, tủ thờ)</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lợi Ích Của Gói Trọn Gói</h2>
                    <div className="grid-4">
                        {packageBenefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <i className={`fas ${benefit.icon}`} style={{ fontSize: '2rem', color: '#667eea' }}></i>
                                </div>
                                <h3>{benefit.benefit}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Bao Gồm & Không Bao Gồm</h2>
                    <div className="grid-2">
                        <div className="card">
                            <div className="card-header" style={{ background: '#10b981' }}>
                                <h3><i className="fas fa-check-circle"></i> Bao gồm trong gói</h3>
                            </div>
                            <div className="card-body">
                                <ul>
                                    {includeExclude.included.map((item, index) => (
                                        <li key={index}><i className="fas fa-check"></i>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" style={{ background: '#ef4444' }}>
                                <h3><i className="fas fa-times-circle"></i> Không bao gồm</h3>
                            </div>
                            <div className="card-body">
                                <ul>
                                    {includeExclude.excluded.map((item, index) => (
                                        <li key={index}><i className="fas fa-times"></i>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Quy Trình Thi Công Trọn Gói</h2>
                    <div className="process-timeline">
                        {constructionProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={`fas ${step.icon}`}></i>
                                    <span>Bước {step.step}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration"><i className="fas fa-clock"></i>{step.duration}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className={`faq-question ${activeFaq === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </button>
                                {activeFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default ThiCongTronGoiPage;