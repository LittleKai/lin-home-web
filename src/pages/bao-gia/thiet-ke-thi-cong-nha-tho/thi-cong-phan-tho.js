// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-phan-tho.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const ThiCongPhanThoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const roughPrices = [
        {
            type: 'Nhà thờ họ 3 gian (BTCT giả gỗ)',
            price: '3.200.000 - 3.800.000đ/m² sàn',
            note: 'Phần móng, khung, mái thô'
        },
        {
            type: 'Nhà thờ họ 5 gian (BTCT giả gỗ)',
            price: '3.500.000 - 4.200.000đ/m² sàn',
            note: 'Quy mô lớn, kết cấu chắc chắn'
        },
        {
            type: 'Từ đường gỗ lim - mít - xoan',
            price: '4.500.000 - 6.000.000đ/m² sàn',
            note: 'Thi công phức tạp, nhiều cột kèo gỗ'
        },
        {
            type: 'Từ đường kết hợp sân vườn',
            price: '3.800.000 - 5.200.000đ/m² sàn',
            note: 'Có hồ, sân, tiểu cảnh phong thủy'
        }
    ];

    const constructionItems = [
        { item: 'Móng', description: 'Đào móng, đổ bê tông móng, cọc chịu lực', icon: 'fa-layer-group' },
        { item: 'Khung', description: 'Cột, dầm, kèo BTCT hoặc gỗ tự nhiên', icon: 'fa-columns' },
        { item: 'Tường', description: 'Xây tường bao, vách ngăn', icon: 'fa-th-large' },
        { item: 'Mái thô', description: 'Kèo mái, dầm mái, tạo độ dốc', icon: 'fa-home' },
        { item: 'Điện - Nước âm', description: 'Hệ thống điện âm tường, ống nước', icon: 'fa-plug' }
    ];

    const constructionProcess = [
        { step: 1, title: 'Khảo sát đất & xem phong thủy', description: 'Chọn thế đất tiền minh đường - hậu huyền vũ', duration: '1-2 ngày', icon: 'fa-search-location' },
        { step: 2, title: 'Đào móng & xử lý nền', description: 'Đào móng theo thiết kế, đổ bê tông móng', duration: '3-5 ngày', icon: 'fa-shovel' },
        { step: 3, title: 'Dựng khung cột - kèo', description: 'Dựng cột, dầm bằng gỗ lim, mít hoặc BTCT', duration: '5-7 ngày', icon: 'fa-columns' },
        { step: 4, title: 'Xây tường bao & vách ngăn', description: 'Xây tường phù hợp bố cục 3-5 gian', duration: '5-7 ngày', icon: 'fa-th-large' },
        { step: 5, title: 'Thi công mái thô', description: 'Lắp kèo mái, tạo độ dốc truyền thống', duration: '3-5 ngày', icon: 'fa-home' },
        { step: 6, title: 'Lắp đặt điện - nước âm', description: 'Phục vụ chiếu sáng và sinh hoạt', duration: '2-3 ngày', icon: 'fa-plug' }
    ];

    const faqs = [
        { question: 'Chi phí thi công phần thô nhà thờ 3 gian khoảng bao nhiêu?', answer: 'Chi phí dao động từ 3,2-3,8 triệu đồng/m² sàn, bao gồm móng, khung, cột, tường, mái thô và hệ thống điện nước âm.' },
        { question: 'Phần thô có bao gồm mái ngói không?', answer: 'Phần thô chỉ bao gồm kết cấu mái, chưa bao gồm lợp ngói mũi hài. Lợp ngói thuộc giai đoạn hoàn thiện.' },
        { question: 'Thời gian thi công phần thô mất bao lâu?', answer: 'Nhà thờ 3 gian khoảng 20-30 ngày, nhà thờ 5 gian khoảng 30-40 ngày.' },
        { question: 'Có nên chọn gỗ lim thay vì BTCT không?', answer: 'Gỗ lim có giá trị tâm linh cao hơn và độ bền lâu dài. BTCT giả gỗ tiết kiệm chi phí, chống mối mọt tốt.' }
    ];

    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="page-wrapper">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title" >Báo Giá Thi Công Phần Thô Nhà Thờ Họ 2025</h1>
                    <p className="section-subtitle" >Thi công phần thô chuyên nghiệp, kết cấu bền vững, chuẩn phong thủy</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ý Nghĩa Thi Công Phần Thô</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Thi công phần thô là giai đoạn quan trọng, đặt nền móng và dựng khung cho toàn bộ công trình.
                        Một nền móng chắc chắn, khung cột kiên cố đảm bảo độ bền vững hàng trăm năm.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Báo Giá Thi Công Phần Thô 2025</h2>
                    <div className="grid-2">
                        {roughPrices.map((item, index) => (
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
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Bao gồm: móng, khung, cột, tường, mái thô, điện nước âm</p>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i> Chưa bao gồm: chạm khắc gỗ, hoàn thiện nội thất, mái ngói</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Các Hạng Mục Thi Công Phần Thô</h2>
                    <div className="grid-3">
                        {constructionItems.map((item, index) => (
                            <div key={index} className="info-card">
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <i className={`fas ${item.icon}`} style={{ fontSize: '2rem', color: '#667eea' }}></i>
                                </div>
                                <h3>{item.item}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình Thi Công Phần Thô</h2>
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

export default ThiCongPhanThoPage;