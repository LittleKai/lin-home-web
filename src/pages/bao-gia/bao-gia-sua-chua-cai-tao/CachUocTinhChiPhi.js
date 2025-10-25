// src/pages/bao-gia/bao-gia-thiet-ke-thi-cong/CachUocTinhChiPhi.js
import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const CachUocTinhChiPhiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [calculatorValues, setCalculatorValues] = useState({
        area: 50,
        level: 'medium'
    });

    const priceByLevel = {
        basic: { min: 2500000, max: 3500000, name: 'Cải tạo cơ bản' },
        medium: { min: 3500000, max: 5000000, name: 'Cải tạo trung bình' },
        premium: { min: 5000000, max: 7000000, name: 'Cải tạo cao cấp' }
    };

    const calculateCost = () => {
        const level = priceByLevel[calculatorValues.level];
        const minCost = (calculatorValues.area * level.min).toLocaleString('vi-VN');
        const maxCost = (calculatorValues.area * level.max).toLocaleString('vi-VN');
        return { minCost, maxCost, levelName: level.name };
    };

    const costResult = calculateCost();

    const factors = [
        {
            icon: 'fas fa-home',
            title: 'Hiện Trạng Công Trình',
            color: '#667eea',
            items: [
                'Nhà xuống cấp nhiều cần đập phá, xử lý nền móng',
                'Nhà còn mới chỉ cải tạo nội thất, sơn sửa',
                'Mức độ hư hỏng ảnh hưởng trực tiếp đến chi phí'
            ]
        },
        {
            icon: 'fas fa-ruler-combined',
            title: 'Diện Tích Cải Tạo',
            color: '#f59e0b',
            items: [
                'Cải tạo 1 phòng: chi phí thấp, tập trung',
                'Cải tạo toàn bộ nhà: giá trên m² được tối ưu hơn',
                'Diện tích lớn dễ thương lượng giá tốt hơn'
            ]
        },
        {
            icon: 'fas fa-cubes',
            title: 'Vật Liệu Xây Dựng',
            color: '#8b5cf6',
            items: [
                'Vật liệu trung bình: tiết kiệm 20-30%',
                'Vật liệu cao cấp: tăng 30-50% chi phí',
                'Lựa chọn gạch, sơn, thiết bị vệ sinh ảnh hưởng lớn'
            ]
        },
        {
            icon: 'fas fa-palette',
            title: 'Phong Cách Thiết Kế',
            color: '#ec4899',
            items: [
                'Thiết kế đơn giản, tối giản: chi phí hợp lý',
                'Thiết kế hiện đại, tân cổ điển: chi tiết phức tạp',
                'Phong cách sang trọng đòi hỏi nhiều công đoạn'
            ]
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Đơn Vị Thi Công',
            color: '#10b981',
            items: [
                'Nhà thầu uy tín: báo giá minh bạch, ít phát sinh',
                'Đội nhóm nhỏ: giá rẻ nhưng dễ chi phí phát sinh',
                'Chọn đơn vị có kinh nghiệm để đảm bảo chất lượng'
            ]
        }
    ];

    const steps = [
        {
            number: '01',
            title: 'Xác Định Nhu Cầu Cải Tạo',
            icon: 'fas fa-clipboard-list',
            content: [
                'Cải tạo phòng bếp hay phòng khách?',
                'Sơn sửa toàn bộ hay nâng cấp nội thất?',
                'Khoanh vùng hạng mục cần chi tiêu'
            ]
        },
        {
            number: '02',
            title: 'Tính Chi Phí Theo m²',
            icon: 'fas fa-calculator',
            content: [
                'Cải tạo cơ bản: 2,500,000 - 3,500,000 VNĐ/m²',
                'Cải tạo trung bình: 3,500,000 - 5,000,000 VNĐ/m²',
                'Cải tạo cao cấp: 5,000,000 - 7,000,000 VNĐ/m²'
            ],
            example: 'Ví dụ: Nhà 50m² cải tạo trung bình → 50 x 4,000,000 = 200,000,000 VNĐ'
        },
        {
            number: '03',
            title: 'Cộng Chi Phí Phát Sinh',
            icon: 'fas fa-plus-circle',
            content: [
                'Giấy phép sửa chữa (nếu cần)',
                'Thay đổi hệ thống điện - nước',
                'Trang trí nội thất, đồ rời',
                'Nên dự trù thêm 10-15% tổng chi phí'
            ]
        }
    ];

    const savingTips = [
        { icon: 'fas fa-pencil-ruler', tip: 'Lập kế hoạch & bản vẽ chi tiết trước khi thi công' },
        { icon: 'fas fa-balance-scale', tip: 'Ưu tiên vật liệu bền - giá hợp lý, tránh chạy theo xu hướng tạm thời' },
        { icon: 'fas fa-handshake', tip: 'Chọn nhà thầu uy tín, báo giá minh bạch, hợp đồng rõ ràng' },
        { icon: 'fas fa-box-open', tip: 'Thi công trọn gói tiết kiệm hơn thuê lẻ từng hạng mục' },
        { icon: 'fas fa-recycle', tip: 'Tận dụng lại vật liệu, nội thất còn dùng tốt' }
    ];

    const faqs = [
        {
            question: 'Chi phí cải tạo 1 phòng khoảng bao nhiêu?',
            answer: 'Tùy vào phòng nào và mức độ cải tạo. Phòng khách/ngủ khoảng 20-50 triệu. Phòng bếp/tắm khoảng 30-70 triệu do cần nhiều thiết bị và chống thấm.'
        },
        {
            question: 'Làm sao để tránh chi phí phát sinh?',
            answer: 'Chọn nhà thầu uy tín với hợp đồng rõ ràng, báo giá chi tiết từng hạng mục. Lập bản vẽ thiết kế cụ thể trước khi thi công. Dự trù thêm 10-15% cho các tình huống bất ngờ.'
        },
        {
            question: 'Có thể cải tạo nhà với ngân sách hạn chế?',
            answer: 'Hoàn toàn có thể! Ưu tiên cải tạo từng phòng theo giai đoạn, chọn vật liệu trung bình có chất lượng, tận dụng nội thất cũ, và làm việc với nhà thầu để tối ưu chi phí.'
        },
        {
            question: 'Thời gian cải tạo nhà thường mất bao lâu?',
            answer: 'Cải tạo 1 phòng: 1-2 tuần. Cải tạo toàn bộ căn hộ 50-80m²: 1-2 tháng. Thời gian còn phụ thuộc vào mức độ xuống cấp và phạm vi công việc.'
        }
    ];

    return (
        <div className="page-wrapper">
            <section className="section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-calculator"></i>
                        Cách Ước Tính Chi Phí Sửa Chữa Cải Tạo Nhà
                    </h1>
                    <p className="section-subtitle">
                        Hướng dẫn chi tiết giúp bạn ước tính chi phí chính xác, tiết kiệm và minh bạch
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i>
                        Công Cụ Ước Tính Chi Phí
                    </h2>
                    
                    <div className="calculator-card">
                        <div className="calculator-inputs">
                            <div className="input-group">
                                <label>Diện tích cải tạo (m²):</label>
                                <input 
                                    type="number" 
                                    value={calculatorValues.area}
                                    onChange={(e) => setCalculatorValues({...calculatorValues, area: Number(e.target.value)})}
                                    min="10"
                                    max="500"
                                />
                            </div>
                            <div className="input-group">
                                <label>Mức độ cải tạo:</label>
                                <select 
                                    value={calculatorValues.level}
                                    onChange={(e) => setCalculatorValues({...calculatorValues, level: e.target.value})}
                                >
                                    <option value="basic">Cải tạo cơ bản</option>
                                    <option value="medium">Cải tạo trung bình</option>
                                    <option value="premium">Cải tạo cao cấp</option>
                                </select>
                            </div>
                        </div>
                        <div className="calculator-result">
                            <h3>Ước Tính Chi Phí</h3>
                            <p className="result-label">{costResult.levelName}</p>
                            <div className="result-price">
                                {costResult.minCost} - {costResult.maxCost} VNĐ
                            </div>
                            <p className="result-note">* Đây là ước tính sơ bộ, chi phí thực tế còn phụ thuộc vào nhiều yếu tố khác</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-cogs"></i>
                        Yếu Tố Ảnh Hưởng Đến Chi Phí
                    </h2>
                    <div className="grid-3">
                        {factors.map((factor, index) => (
                            <div key={index} className="info-card">
                                <div className="card-icon" style={{ background: factor.color }}>
                                    <i className={factor.icon}></i>
                                </div>
                                <h3>{factor.title}</h3>
                                <ul className="info-list">
                                    {factor.items.map((item, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-list-ol"></i>
                        Cách Ước Tính Chi Phí Sơ Bộ
                    </h2>
                    <div className="process-timeline">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={step.icon}></i>
                                </div>
                                <div className="step-content">
                                    <div className="step-label">Bước {step.number}</div>
                                    <h3>{step.title}</h3>
                                    <ul>
                                        {step.content.map((item, i) => (
                                            <li key={i}>
                                                <i className="fas fa-chevron-right"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {step.example && (
                                        <div className="example-box">
                                            <strong>Ví dụ:</strong> {step.example}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-piggy-bank"></i>
                        Mẹo Tiết Kiệm Chi Phí
                    </h2>
                    <div className="grid-2">
                        {savingTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <i className={tip.icon}></i>
                                <p>{tip.tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
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
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default CachUocTinhChiPhiPage;
