// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-hoan-thien.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/PageStyles.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const ThiCongHoanThienPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const finishPrices = [
        { item: 'Lợp mái ngói ta mũi hài', price: '600.000 - 900.000đ/m² mái', note: 'Ngói đất nung thủ công, bền 50+ năm' },
        { item: 'Cửa bức bàn, cửa võng gỗ lim/mít', price: '25 - 40 triệu đồng/bộ', note: 'Chạm khắc tinh xảo, hoa văn truyền thống' },
        { item: 'Hoành phi - Câu đối - Đại tự', price: '15 - 50 triệu đồng/hạng mục', note: 'Sơn son thếp vàng, nghệ nhân thực hiện' },
        { item: 'Án gian thờ, sập gụ - tủ thờ', price: '20 - 80 triệu đồng/bộ', note: 'Gỗ lim/mít, chạm khắc thủ công' },
        { item: 'Sơn bả & trang trí truyền thống', price: '180.000 - 250.000đ/m²', note: 'Màu sơn phong thủy, chống thấm' },
        { item: 'Tiểu cảnh sân vườn', price: '120.000 - 200.000đ/m²', note: 'Tạo minh đường tụ thủy, cân bằng phong thủy' }
    ];

    const materialComparison = [
        { material: 'Gỗ lim Lào', characteristics: 'Cứng, bền, thơm', durability: '100+ năm', price: 'Rất cao', usage: 'Cột, kèo, bàn thờ cao cấp' },
        { material: 'Gỗ mít già', characteristics: 'Bền, đẹp, dễ chạm', durability: '70-100 năm', price: 'Cao', usage: 'Cửa, hoành phi, án gian' },
        { material: 'Gỗ xoan ta', characteristics: 'Mềm, dễ gia công', durability: '50-70 năm', price: 'Trung bình', usage: 'Cửa phụ, nội thất' },
        { material: 'BTCT giả gỗ', characteristics: 'Bền, chống mối', durability: '50+ năm', price: 'Thấp', usage: 'Cột, kèo thay thế gỗ' }
    ];

    const constructionProcess = [
        { step: 1, title: 'Khảo sát & xác định phong thủy', description: 'Kiểm tra lại thế đất, hướng', duration: '1 ngày', icon: 'fa-search-location' },
        { step: 2, title: 'Thi công mái ngói', description: 'Tạo độ dốc chuẩn, lợp ngói mũi hài', duration: '5-7 ngày', icon: 'fa-home' },
        { step: 3, title: 'Chế tác & lắp đặt cửa, hoành phi', description: 'Nghệ nhân chế tác, chạm khắc hoa văn', duration: '10-15 ngày', icon: 'fa-door-open' },
        { step: 4, title: 'Sơn son thếp vàng', description: 'Sơn màu truyền thống, thếp vàng', duration: '7-10 ngày', icon: 'fa-paint-brush' },
        { step: 5, title: 'Lắp đặt bàn thờ, nội thất', description: 'Lắp đặt án gian, sập gụ, tủ thờ', duration: '3-5 ngày', icon: 'fa-couch' },
        { step: 6, title: 'Thi công tiểu cảnh', description: 'Tạo hồ bán nguyệt, cây xanh', duration: '5-7 ngày', icon: 'fa-tree' }
    ];

    const faqs = [
        { question: 'Chi phí hoàn thiện nhà thờ 3 gian khoảng bao nhiêu?', answer: 'Tổng chi phí hoàn thiện cơ bản khoảng 200-400 triệu đồng. Nếu bao gồm hoành phi, bàn thờ cao cấp có thể lên đến 500-800 triệu.' },
        { question: 'Ngói ta mũi hài có bền không?', answer: 'Ngói ta nung thủ công có độ bền trên 50 năm, chống nóng, cách nhiệt tốt và giữ được nét đẹp truyền thống.' },
        { question: 'Có nên sử dụng gỗ công nghiệp thay gỗ tự nhiên không?', answer: 'Gỗ công nghiệp giá rẻ hơn nhưng giá trị tâm linh không bằng gỗ tự nhiên. Nên ưu tiên gỗ lim, mít, xoan ta.' },
        { question: 'Thời gian hoàn thiện mất bao lâu?', answer: 'Nhà thờ 3 gian khoảng 15-25 ngày, nhà thờ 5 gian khoảng 25-40 ngày.' }
    ];

    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="page-wrapper">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title" >Báo Giá Thi Công Hoàn Thiện Nhà Thờ Họ 2025</h1>
                    <p className="section-subtitle" >Hoàn thiện chuyên nghiệp, vật liệu chuẩn truyền thống, phong thủy hài hòa</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ý Nghĩa Thi Công Hoàn Thiện</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Nếu phần thô là "xương sống" thì hoàn thiện chính là "linh hồn" của công trình.
                        Đây là giai đoạn định hình vẻ đẹp thẩm mỹ, sự tôn nghiêm và phong thủy.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Báo Giá Thi Công Hoàn Thiện 2025</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px' }}>
                            <thead>
                            <tr style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Hạng mục hoàn thiện</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Đơn giá</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Ghi chú</th>
                            </tr>
                            </thead>
                            <tbody>
                            {finishPrices.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1rem' }}><strong>{item.item}</strong></td>
                                    <td style={{ padding: '1rem', textAlign: 'center', color: '#667eea', fontWeight: '600' }}>{item.price}</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#718096' }}>{item.note}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">So Sánh Vật Liệu Gỗ</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px' }}>
                            <thead>
                            <tr style={{ background: '#f8fafc' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Loại gỗ</th>
                                <th style={{ padding: '1rem' }}>Đặc tính</th>
                                <th style={{ padding: '1rem' }}>Độ bền</th>
                                <th style={{ padding: '1rem' }}>Giá</th>
                                <th style={{ padding: '1rem' }}>Ứng dụng</th>
                            </tr>
                            </thead>
                            <tbody>
                            {materialComparison.map((material, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1rem' }}><strong>{material.material}</strong></td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{material.characteristics}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{material.durability}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{material.price}</td>
                                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>{material.usage}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình Thi Công Hoàn Thiện</h2>
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

export default ThiCongHoanThienPage;