import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const NoiDauThietKeIndochinePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const painPoints = [
        {
            id: 1,
            title: 'Chi Phí Quá Cao',
            icon: 'fas fa-money-bill-wave',
            problem: 'Vật liệu gỗ tự nhiên, mây tre, gạch bông thủ công đều đắt đỏ',
            solutions: [
                'Dùng gỗ công nghiệp veneer kết hợp gỗ tự nhiên',
                'Chọn tre ép công nghiệp thay tre nguyên khối',
                'Gạch bông sản xuất công nghệ mới giá rẻ hơn',
                'Ưu tiên vật liệu cho khu vực chính'
            ],
            color: '#ef4444',
            savings: 'Tiết kiệm 30-40% chi phí'
        },
        {
            id: 2,
            title: 'Không Gian Nhỏ Dễ Bị Nặng Nề',
            icon: 'fas fa-compress-arrows-alt',
            problem: 'Nhiều chi tiết hoa văn, nội thất chạm khắc làm không gian chật chội',
            solutions: [
                'Giảm chi tiết trang trí, ưu tiên màu sáng',
                'Dùng nội thất đa năng gọn gàng',
                'Thiết kế tối giản nhưng giữ tinh thần Indochine',
                'Tăng ánh sáng tự nhiên'
            ],
            color: '#f59e0b',
            savings: 'Không gian rộng hơn 20-30%'
        },
        {
            id: 3,
            title: 'Khí Hậu Ẩm Hà Nội Gây Hỏng Gỗ',
            icon: 'fas fa-cloud-rain',
            problem: 'Độ ẩm cao khiến gỗ cong vênh, mốc, giảm tuổi thọ',
            solutions: [
                'Dùng gỗ chống ẩm (Lim Nam Phi, Teak)',
                'Phủ sơn PU hoặc dầu bảo vệ',
                'Thiết kế hệ thống thông gió, hút ẩm',
                'Bảo dưỡng định kỳ 6 tháng/lần'
            ],
            color: '#3b82f6',
            savings: 'Tăng tuổi thọ gỗ gấp 2-3 lần'
        },
        {
            id: 4,
            title: 'Khí Hậu Biển Nha Trang Gây Ẩm Mặn',
            icon: 'fas fa-water',
            problem: 'Muối biển & độ ẩm cao làm gỗ và kim loại nhanh hỏng',
            solutions: [
                'Chọn gỗ Lim Nam Phi, Teak chống mặn',
                'Dùng inox 304 thay vì sắt thường',
                'Định kỳ bảo dưỡng, phủ dầu bảo vệ',
                'Sơn chống ăn mòn cho kim loại'
            ],
            color: '#06b6d4',
            savings: 'Giảm hư hỏng 60-70%'
        },
        {
            id: 5,
            title: 'Thiết Kế Thiếu Đồng Bộ, Dễ Lỗi Mốt',
            icon: 'fas fa-exclamation-triangle',
            problem: 'Tự phối hoặc thuê đơn vị thiếu kinh nghiệm dẫn đến mất cân đối',
            solutions: [
                'Thuê KTS am hiểu phong cách Indochine',
                'Luôn có bản vẽ 3D tổng thể trước thi công',
                'Tham khảo mẫu thiết kế thực tế',
                'Kiểm soát chặt chẽ quy trình thi công'
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
            materials: ['Gỗ Lim Nam Phi', 'Gỗ Teak', 'Sơn PU']
        },
        {
            location: 'Nha Trang',
            issue: 'Ẩm mặn biển',
            solution: 'Gỗ chống mặn + inox 304',
            materials: ['Gỗ Teak', 'Inox 304', 'Dầu bảo vệ']
        },
        {
            location: 'Chung cư',
            issue: 'Diện tích nhỏ',
            solution: 'Nội thất đa năng + màu sáng',
            materials: ['Gỗ công nghiệp', 'Gạch bông nhỏ', 'Kính']
        }
    ];

    const priceTable = [
        {
            type: 'Chung cư',
            price: '180,000 - 230,000',
            note: 'Nội thất tinh giản, 3D chi tiết',
            features: ['Thiết kế tối ưu', 'Gỗ công nghiệp', 'Gạch bông điểm nhấn']
        },
        {
            type: 'Nhà phố',
            price: '200,000 - 260,000',
            note: 'Phối cảnh tối ưu không gian nhỏ',
            features: ['Ánh sáng tự nhiên', 'Nội thất gọn', 'Thông gió tốt']
        },
        {
            type: 'Biệt thự/Villa',
            price: '250,000 - 320,000',
            note: 'Vật liệu cao cấp, nhiều chi tiết',
            features: ['Gỗ tự nhiên 100%', 'Chi tiết thủ công', 'Không gian lớn']
        }
    ];

    const faqData = [
        {
            question: 'Làm sao để giảm chi phí mà vẫn giữ được phong cách Indochine?',
            answer: 'Kết hợp gỗ công nghiệp phủ veneer với gỗ tự nhiên ở vị trí trọng điểm. Sử dụng tre ép công nghiệp thay tre nguyên khối. Gạch bông chỉ dùng điểm nhấn thay vì toàn bộ. Tiết kiệm 30-40% nhưng vẫn đẹp.'
        },
        {
            question: 'Gỗ Indochine có bị ẩm mốc ở Hà Nội không?',
            answer: 'Nếu chọn đúng loại gỗ chống ẩm (Lim Nam Phi, Teak), phủ sơn PU và có hệ thống thông gió tốt thì không bị. Quan trọng là bảo dưỡng định kỳ 6 tháng/lần.'
        },
        {
            question: 'Nha Trang khí hậu mặn, gỗ có bị hỏng nhanh không?',
            answer: 'Chọn gỗ Teak hoặc Lim Nam Phi, kim loại dùng inox 304. Định kỳ phủ dầu bảo vệ 3-6 tháng/lần. Với vật liệu đúng, gỗ có thể dùng 15-20 năm.'
        },
        {
            question: 'Chung cư nhỏ có nên thiết kế Indochine không?',
            answer: 'Có thể nhưng cần giản lược chi tiết, ưu tiên màu sáng, nội thất đa năng. Tập trung vào tinh thần Indochine chứ không phải đầy đủ chi tiết để tránh nặng nề.'
        },
        {
            question: 'Làm sao để tránh thiết kế lỗi mốt?',
            answer: 'Thuê KTS có kinh nghiệm Indochine, luôn có bản vẽ 3D trước thi công, tham khảo mẫu thực tế. Tránh lạm dụng chi tiết, giữ sự cân đối và thanh lịch.'
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
                            Phong cách <strong>Indochine (Đông Dương)</strong> mang vẻ đẹp sang trọng, hoài cổ, tinh tế. 
                            Tuy nhiên, không ít gia chủ khi lựa chọn phong cách này lại gặp phải nhiều vấn đề phát sinh: 
                            chi phí cao, khó thi công, hoặc nhanh lỗi mốt nếu không khéo.
                        </p>
                        <p>
                            Dưới đây là <strong>5 "nỗi đau"</strong> phổ biến khi thiết kế nội thất Indochine và 
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
                        Báo Giá Thiết Kế Nội Thất Indochine 2025
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
                        Giải đáp thắc mắc về các nỗi đau thiết kế Indochine
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

export default NoiDauThietKeIndochinePage;
