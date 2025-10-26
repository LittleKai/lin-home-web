import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const NoiDauThietKeHienDaiPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const painPoints = [
        {
            id: 1,
            title: 'Không Gian Trống Trải, Lạnh Lẽo',
            icon: 'fas fa-snowflake',
            problem: 'Lạm dụng gam màu trắng – xám, nội thất tối giản quá mức',
            solutions: [
                'Kết hợp gỗ ấm màu, đèn vàng',
                'Thêm tranh canvas, cây xanh',
                'Sử dụng decor để tăng sức sống',
                'Cân bằng giữa tối giản và ấm cúng'
            ],
            color: '#3b82f6',
            savings: 'Tăng sự ấm cúng 50-60%'
        },
        {
            id: 2,
            title: 'Nội Thất Kém Chất Lượng - Nhanh Xuống Cấp',
            icon: 'fas fa-exclamation-triangle',
            problem: 'Chọn gỗ MDF thường, phụ kiện rẻ tiền. Hậu quả: mối mọt, bong tróc sau 1-2 năm',
            solutions: [
                'Sử dụng MDF chống ẩm, HDF cao cấp',
                'Chọn gỗ veneer chất lượng',
                'Phụ kiện Hafele, Blum',
                'Tránh hàng trôi nổi giá rẻ'
            ],
            color: '#ef4444',
            savings: 'Tăng tuổi thọ gấp 3-4 lần'
        },
        {
            id: 3,
            title: 'Nhà Phố Hà Nội Chật Hẹp, Thiếu Sáng',
            icon: 'fas fa-compress-arrows-alt',
            problem: 'Mặt tiền nhỏ, bị che khuất bởi công trình xung quanh',
            solutions: [
                'Giếng trời đón ánh sáng tự nhiên',
                'Cửa kính lớn, gương phản chiếu',
                'Thiết kế nội thất đa năng',
                'Giảm vách ngăn thừa'
            ],
            color: '#f59e0b',
            savings: 'Tăng ánh sáng 40-50%'
        },
        {
            id: 4,
            title: 'Nha Trang Khí Hậu Ẩm Mặn - Đồ Nhanh Hỏng',
            icon: 'fas fa-water',
            problem: 'Không chọn vật liệu phù hợp khí hậu ven biển',
            solutions: [
                'Dùng inox 304, nhôm kính',
                'Gỗ chống ẩm phủ melamine/laminate',
                'Tránh vật liệu dễ han gỉ',
                'Bảo dưỡng định kỳ'
            ],
            color: '#06b6d4',
            savings: 'Giảm hư hỏng 60-70%'
        },
        {
            id: 5,
            title: 'Thiết Kế Thiếu Đồng Bộ - Công Năng Bất Tiện',
            icon: 'fas fa-puzzle-piece',
            problem: 'Không có bản vẽ 3D tổng thể → bố trí chắp vá. Khó di chuyển, không đồng bộ',
            solutions: [
                'Thiết kế 3D trước khi thi công',
                'Chọn đơn vị thiết kế thi công trọn gói',
                'Kiểm soát chặt chẽ quy trình',
                'Đảm bảo đồng bộ kiến trúc - nội thất'
            ],
            color: '#8b5cf6',
            savings: 'Tránh lãng phí 40-50% chi phí'
        }
    ];

    const climateTable = [
        {
            location: 'Hà Nội',
            issue: 'Độ ẩm cao (80-90%)',
            solution: 'Gỗ chống ẩm + thông gió',
            materials: ['MDF chống ẩm', 'HDF cao cấp', 'Sơn PU chống ẩm']
        },
        {
            location: 'Nha Trang',
            issue: 'Ẩm mặn biển',
            solution: 'Gỗ chống mặn + inox 304',
            materials: ['Gỗ melamine', 'Inox 304', 'Kính cường lực']
        },
        {
            location: 'Chung cư',
            issue: 'Diện tích nhỏ',
            solution: 'Nội thất đa năng + màu sáng',
            materials: ['Gỗ công nghiệp', 'Kính', 'Gương']
        }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '150,000 - 200,000',
            note: 'Bao gồm phối cảnh 3D chi tiết',
            features: ['Tối ưu diện tích', 'Nội thất đa năng', 'Ánh sáng tốt']
        },
        {
            type: 'Nhà phố',
            price: '160,000 - 220,000',
            note: 'Tối ưu diện tích nhỏ, thiếu sáng',
            features: ['Giếng trời', 'Cửa kính lớn', 'Thông gió tốt']
        },
        {
            type: 'Biệt thự/Villa',
            price: '200,000 - 280,000',
            note: 'Không gian rộng, cao cấp',
            features: ['Vật liệu cao cấp', 'Không gian mở', 'Chi tiết tinh tế']
        }
    ];

    const faqData = [
        {
            question: 'Làm sao để giảm chi phí mà vẫn giữ được phong cách Hiện đại?',
            answer: 'Kết hợp gỗ công nghiệp chất lượng cao với gỗ tự nhiên ở vị trí trọng điểm. Sử dụng phụ kiện tốt nhưng hợp lý. Tập trung vào thiết kế thông minh thay vì vật liệu đắt tiền. Tiết kiệm 30-40% nhưng vẫn đẹp.'
        },
        {
            question: 'Gỗ Hiện đại có bị ẩm mốc ở Hà Nội không?',
            answer: 'Nếu chọn đúng loại gỗ chống ẩm (MDF chống ẩm, HDF), sơn PU và có hệ thống thông gió tốt thì không bị. Quan trọng là bảo dưỡng định kỳ 6 tháng/lần.'
        },
        {
            question: 'Nha Trang khí hậu mặn, gỗ có bị hỏng nhanh không?',
            answer: 'Chọn gỗ phủ melamine/laminate, kim loại dùng inox 304. Định kỳ kiểm tra và bảo dưỡng 3-6 tháng/lần. Với vật liệu đúng, gỗ có thể dùng 10-15 năm.'
        },
        {
            question: 'Chung cư nhỏ có nên thiết kế Hiện đại không?',
            answer: 'Rất nên. Phong cách Hiện đại là giải pháp tốt nhất cho căn hộ nhỏ với nội thất đa năng, màu sáng, không gian mở. Tập trung vào công năng thay vì trang trí để tránh chật chội.'
        },
        {
            question: 'Làm sao để tránh thiết kế lỗi mốt?',
            answer: 'Chọn KTS có kinh nghiệm, luôn có bản vẽ 3D trước thi công. Giữ sự cân bằng giữa tối giản và ấm cúng. Tránh lạm dụng màu tối hoặc chi tiết phức tạp.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="main-content">

            <section className="section" id="intro">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-info-circle"></i>
                        Giới Thiệu
                    </h2>
                    <div className="content-text">
                        <p>
                            Phong cách <strong>Hiện đại (Modern Style)</strong> đang là xu hướng nội thất phổ biến
                            nhất tại Việt Nam, đặc biệt ở Hà Nội & Nha Trang. Tuy nhiên, không ít khách hàng gặp
                            phải vấn đề phát sinh trong quá trình thiết kế & thi công, khiến không gian sống kém
                            tiện nghi, nhanh xuống cấp.
                        </p>
                        <p>
                            Dưới đây là <strong>5 "nỗi đau"</strong> phổ biến khi thiết kế nội thất Hiện đại và
                            cách khắc phục hiệu quả.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="pain-points">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-first-aid"></i>
                        5 Nỗi Đau & Giải Pháp Khắc Phục
                    </h2>
                    <p className="section-subtitle">
                        Phân tích chi tiết và giải pháp thực tế
                    </p>

                    <div className="grid-2">
                        {painPoints.map((pain, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: pain.color }}>
                                    <i className={pain.icon}></i>
                                    Nỗi đau {pain.id}: {pain.title}
                                </h3>
                                <p className="problem-text">
                                    <strong>Vấn đề:</strong> {pain.problem}
                                </p>
                                <p><strong>Giải pháp:</strong></p>
                                <ul>
                                    {pain.solutions.map((solution, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {solution}
                                        </li>
                                    ))}
                                </ul>
                                <span className="savings-badge">{pain.savings}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-map-marker-alt"></i>
                        Giải Pháp Theo Địa Điểm
                    </h2>
                    <p className="section-subtitle">
                        Tùy chỉnh theo khí hậu và không gian
                    </p>

                    <div className="grid-3">
                        {climateTable.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-location-dot"></i>
                                    {item.location}
                                </h3>
                                <p><strong>Vấn đề:</strong> {item.issue}</p>
                                <p><strong>Giải pháp:</strong> {item.solution}</p>
                                <p><strong>Vật liệu đề xuất:</strong></p>
                                <ul>
                                    {item.materials.map((material, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {material}
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
                        <i className="fas fa-tag"></i>
                        Báo Giá Thiết Kế Nội Thất Hiện Đại 2025
                    </h2>
                    <p className="section-subtitle">
                        Đơn giá tham khảo VNĐ/m² - Thay đổi theo diện tích & vật liệu thực tế
                    </p>

                    <div className="grid-3">
                        {priceTable.map((item, index) => (
                            <div key={index} className="info-card">
                                <h3>
                                    <i className="fas fa-home"></i>
                                    {item.type}
                                </h3>
                                <p className="price-highlight">{item.price} VNĐ/m²</p>
                                <p><strong>Ghi chú:</strong> {item.note}</p>
                                <ul>
                                    {item.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-circle-question"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="section-subtitle">
                        Giải đáp thắc mắc về các nỗi đau thiết kế Hiện đại
                    </p>

                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <i className="fas fa-chevron-down"></i>
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

            <CTAContent />
        </div>
    );
};

export default NoiDauThietKeHienDaiPage;