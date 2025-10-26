import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const NoiDauThietKeTanCoDien = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const painPoints = [
        {
            id: 1,
            title: 'Thiết Kế Quá Rườm Rà, Nặng Nề',
            icon: 'fas fa-weight-hanging',
            color: '#ef4444',
            cause: 'KTS chưa tiết chế, lạm dụng phào chỉ & hoa văn',
            solution: {
                title: 'Giải pháp hiệu quả',
                steps: [
                    'Ưu tiên đường nét tinh giản, đăng đối',
                    'Chỉ nhấn mạnh tại trần, tường, cửa chính',
                    'Không áp dụng phào chỉ cho toàn bộ không gian',
                    'Tư vấn 3D trước khi thi công'
                ]
            },
            examples: [
                'Phào chỉ chỉ tại phòng khách, không làm toàn nhà',
                'Đèn chùm pha lê chỉ tại khu vực chính',
                'Tường accent thay vì toàn bộ tường'
            ]
        },
        {
            id: 2,
            title: 'Chi Phí Cao, Dễ Vượt Ngân Sách',
            icon: 'fas fa-dollar-sign',
            color: '#f59e0b',
            cause: 'Vật liệu cao cấp: gỗ tự nhiên, đá marble, vải nhung',
            solution: {
                title: 'Giải pháp tối ưu chi phí',
                steps: [
                    'Chọn gỗ công nghiệp phủ veneer chất lượng',
                    'Sử dụng đá nhân tạo thay marble tự nhiên',
                    'Tham khảo báo giá chi tiết ngay từ đầu',
                    'Phân bổ ngân sách theo mức độ ưu tiên'
                ]
            },
            examples: [
                'Gỗ công nghiệp MDF phủ veneer cho tủ bếp',
                'Đá nhân tạo Vicostone cho bàn bếp',
                'Vải da công nghiệp cho sofa'
            ]
        },
        {
            id: 3,
            title: 'Không Gian Nhà Phố Chật Hẹp, Thiếu Sáng',
            icon: 'fas fa-compress-arrows-alt',
            color: '#8b5cf6',
            cause: 'Phong cách tân cổ điển thường hợp biệt thự rộng',
            solution: {
                title: 'Giải pháp cho nhà phố nhỏ',
                steps: [
                    'Dùng màu sáng (trắng, kem) thay tông tối',
                    'Tận dụng giếng trời lấy sáng tự nhiên',
                    'Cửa kính lớn để không gian thoáng đãng',
                    'Nội thất gọn gàng, đa năng'
                ]
            },
            examples: [
                'Tường trắng với phào chỉ nhẹ',
                'Giếng trời ở tầng 2-3',
                'Gương lớn tăng độ rộng'
            ]
        },
        {
            id: 4,
            title: 'Nội Thất Nhanh Xuống Cấp Tại Khu Vực Biển',
            icon: 'fas fa-water',
            color: '#3b82f6',
            cause: 'Độ ẩm, hơi muối biển gây hỏng gỗ & han gỉ kim loại (Nha Trang)',
            solution: {
                title: 'Giải pháp chống ẩm mặn',
                steps: [
                    'Dùng gỗ chống ẩm, xử lý đặc biệt',
                    'Inox 304 hoặc kim loại mạ PVD',
                    'Lớp phủ bảo vệ chống ẩm',
                    'Bảo dưỡng định kỳ 6 tháng/lần'
                ]
            },
            examples: [
                'Gỗ Smartwood chống ẩm',
                'Kim loại inox 304 thay đồng',
                'Sơn chống ẩm Nippon Weather Guard'
            ]
        },
        {
            id: 5,
            title: 'Thiết Kế Không Đồng Bộ – Thiếu Cân Đối',
            icon: 'fas fa-random',
            color: '#10b981',
            cause: 'Không có bản vẽ 3D tổng thể, chọn đồ rời rạc',
            solution: {
                title: 'Giải pháp đảm bảo đồng bộ',
                steps: [
                    'Thiết kế 3D từ đầu đến cuối',
                    'Mô phỏng thực tế trước khi thi công',
                    'Chọn đơn vị thiết kế & thi công trọn gói',
                    'KTS giám sát chặt chẽ từng công đoạn'
                ]
            },
            examples: [
                'Bản vẽ 3D phòng khách kết nối bếp',
                'Màu sắc đồng bộ toàn nhà',
                'Phào chỉ cùng kiểu dáng'
            ]
        }
    ];

    const priceTable = [
        {
            type: 'Nội thất nhà phố – nhà ống Tân cổ điển',
            price: '200,000 – 260,000',
            note: 'Tiết chế chi tiết, phù hợp diện tích nhỏ'
        },
        {
            type: 'Nội thất biệt thự/villa Tân cổ điển',
            price: '250,000 – 320,000',
            note: 'Sang trọng, nhiều không gian lớn'
        },
        {
            type: 'Gói thiết kế & thi công trọn gói',
            price: 'Báo giá trực tiếp',
            note: 'Tùy diện tích & vật liệu'
        }
    ];

    const preventionTips = [
        {
            title: 'Tư Vấn & Khảo Sát Kỹ Lưỡng',
            description: 'Đo đạc chính xác, tư vấn phong cách phù hợp với diện tích và ngân sách',
            icon: 'fas fa-search'
        },
        {
            title: 'Thiết Kế 3D Chi Tiết',
            description: 'Mô phỏng thực tế 100%, xem trước kết quả, điều chỉnh trước khi thi công',
            icon: 'fas fa-cube'
        },
        {
            title: 'Chọn Vật Liệu Phù Hợp',
            description: 'Tư vấn vật liệu theo địa lý, khí hậu và khả năng tài chính',
            icon: 'fas fa-box'
        },
        {
            title: 'KTS Giám Sát Thi Công',
            description: 'Giám sát chặt chẽ từng công đoạn, đảm bảo đúng thiết kế và chất lượng',
            icon: 'fas fa-hard-hat'
        }
    ];

    const comparisons = [
        {
            aspect: 'Phào chỉ',
            wrong: 'Lạm dụng khắp nơi',
            right: 'Chỉ tại khu vực trọng điểm',
            icon: 'fas fa-shapes'
        },
        {
            aspect: 'Màu sắc',
            wrong: 'Tông tối, nặng nề',
            right: 'Trắng, kem, vàng nhẹ nhàng',
            icon: 'fas fa-palette'
        },
        {
            aspect: 'Vật liệu',
            wrong: 'Toàn đá marble tự nhiên',
            right: 'Kết hợp marble và đá nhân tạo',
            icon: 'fas fa-gem'
        },
        {
            aspect: 'Ánh sáng',
            wrong: 'Thiếu sáng tự nhiên',
            right: 'Giếng trời + cửa kính lớn',
            icon: 'fas fa-sun'
        }
    ];

    const faqs = [
        {
            question: 'Làm sao để biết thiết kế có bị rườm rà không?',
            answer: 'Hãy yêu cầu bản vẽ 3D chi tiết và so sánh với các mẫu tham khảo. Nếu cảm thấy "quá nhiều chi tiết", đó là dấu hiệu cần tiết chế. Một thiết kế tân cổ điển tốt phải cân đối giữa sang trọng và thoáng đãng.'
        },
        {
            question: 'Chi phí vượt ngân sách thường do đâu?',
            answer: 'Thường do: (1) Thay đổi thiết kế giữa chừng, (2) Chọn vật liệu nâng cấp không có trong dự toán ban đầu, (3) Phát sinh chi tiết chưa tính. Giải pháp: Báo giá chi tiết, ký hợp đồng rõ ràng, hạn chế thay đổi.'
        },
        {
            question: 'Nhà phố nhỏ có nên làm tân cổ điển không?',
            answer: 'Có thể, nhưng cần tiết chế. Dùng màu sáng, phào chỉ nhẹ, tận dụng giếng trời và cửa kính lớn. Tránh đèn chùm quá lớn và phào chỉ quá nhiều.'
        },
        {
            question: 'Tại Nha Trang cần lưu ý gì đặc biệt?',
            answer: 'Chống ẩm mặn là ưu tiên số 1. Chọn gỗ xử lý chống ẩm, inox 304, kim loại mạ PVD, sơn chống ẩm. Bảo dưỡng định kỳ 6 tháng/lần để duy trì độ bền.'
        },
        {
            question: 'Thiết kế không đồng bộ thường do đâu?',
            answer: 'Do không có bản vẽ tổng thể, mua nội thất rời rạc không tư vấn, hoặc nhiều đơn vị thi công khác nhau. Giải pháp: Chọn đơn vị thiết kế & thi công trọn gói.'
        }
    ];

    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="container">
                    <h1 className="page-title">
                        <i className="fas fa-exclamation-triangle"></i>
                        5 Nỗi Đau Thường Gặp Khi Thiết Kế Nội Thất Tân Cổ Điển
                    </h1>
                    <p className="page-subtitle">
                        Tư vấn & giải pháp khắc phục cho biệt thự, nhà phố
                        <br />
                        <strong>Tại Hà Nội & Nha Trang</strong>
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-card">
                        <h2>
                            <i className="fas fa-info-circle"></i>
                            Giới Thiệu
                        </h2>
                        <p>
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> được nhiều gia chủ lựa chọn vì sự 
                            <strong> sang trọng – đẳng cấp – bền vững</strong> theo thời gian. Tuy nhiên, trong thực tế thi công, 
                            không ít khách hàng gặp phải "nỗi đau" khiến công trình không đạt như kỳ vọng.
                        </p>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Dưới đây là 5 vấn đề thường gặp nhất và cách khắc phục hiệu quả.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pain-points-section">
                <div className="container">
                    <h2 className="section-title">5 Nỗi Đau & Giải Pháp Chi Tiết</h2>

                    {painPoints.map((pain, index) => (
                        <div key={pain.id} className="pain-point-card">
                            <div className="pain-header" style={{ backgroundColor: pain.color }}>
                                <div className="pain-number">#{pain.id}</div>
                                <div className="pain-icon">
                                    <i className={pain.icon}></i>
                                </div>
                                <h3>{pain.title}</h3>
                            </div>

                            <div className="pain-content">
                                <div className="pain-cause">
                                    <h4>
                                        <i className="fas fa-question-circle"></i>
                                        Nguyên Nhân
                                    </h4>
                                    <p>{pain.cause}</p>
                                </div>

                                <div className="pain-solution">
                                    <h4>
                                        <i className="fas fa-lightbulb"></i>
                                        {pain.solution.title}
                                    </h4>
                                    <ul>
                                        {pain.solution.steps.map((step, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check-circle"></i>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pain-examples">
                                    <h4>
                                        <i className="fas fa-list"></i>
                                        Ví Dụ Cụ Thể
                                    </h4>
                                    <div className="examples-grid">
                                        {pain.examples.map((example, idx) => (
                                            <div key={idx} className="example-item">
                                                <i className="fas fa-arrow-right"></i>
                                                {example}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="comparison-section">
                <div className="container">
                    <h2 className="section-title">So Sánh: Sai Lầm vs Đúng Cách</h2>
                    <div className="comparison-grid">
                        {comparisons.map((comp, index) => (
                            <div key={index} className="comparison-card">
                                <div className="comparison-icon">
                                    <i className={comp.icon}></i>
                                </div>
                                <h3>{comp.aspect}</h3>
                                <div className="comparison-content">
                                    <div className="wrong-way">
                                        <i className="fas fa-times-circle"></i>
                                        <strong>Sai lầm:</strong>
                                        <p>{comp.wrong}</p>
                                    </div>
                                    <div className="right-way">
                                        <i className="fas fa-check-circle"></i>
                                        <strong>Đúng cách:</strong>
                                        <p>{comp.right}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="prevention-section">
                <div className="container">
                    <h2 className="section-title">Cách Phòng Tránh Từ Đầu</h2>
                    <div className="features-grid">
                        {preventionTips.map((tip, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <i className={tip.icon}></i>
                                </div>
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="price-table-section">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Thiết Kế Nội Thất Tân Cổ Điển 2025</h2>
                    <div className="price-table-wrapper">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Hạng Mục Thiết Kế</th>
                                    <th>Đơn Giá (VNĐ/m²)</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceTable.map((item, index) => (
                                    <tr key={index}>
                                        <td><strong>{item.type}</strong></td>
                                        <td className="price-cell">{item.price}</td>
                                        <td>{item.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="note-box">
                        <i className="fas fa-info-circle"></i>
                        <strong>Lưu ý:</strong> Giá tham khảo, thay đổi theo yêu cầu cụ thể.
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    <div className="faq-list">
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
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="conclusion-section">
                <div className="container">
                    <div className="conclusion-card">
                        <h2>
                            <i className="fas fa-check-circle"></i>
                            Kết Luận
                        </h2>
                        <p>
                            Thiết kế nội thất phong cách <strong>Tân cổ điển</strong> sẽ thật sự hoàn hảo nếu tránh được 5 nỗi đau trên.
                        </p>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Đừng để công trình của bạn trở nên rườm rà, tốn kém hoặc nhanh xuống cấp.
                        </p>
                        <p>
                            Hãy để chúng tôi mang đến giải pháp thiết kế Tân cổ điển <strong>sang trọng – tinh tế – bền vững</strong> tại Hà Nội & Nha Trang.
                        </p>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default NoiDauThietKeTanCoDien;
