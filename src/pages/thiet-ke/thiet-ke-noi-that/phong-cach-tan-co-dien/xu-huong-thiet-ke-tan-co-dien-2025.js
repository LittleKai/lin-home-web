import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongTanCoDienPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const trends = [
        {
            id: 'toi-gian',
            name: 'Tối Giản Chi Tiết, Nhấn Mạnh Đường Nét',
            icon: 'fas fa-ruler-combined',
            description: 'Giảm bớt phào chỉ rườm rà, tập trung vào hình khối cân đối và điểm nhấn nghệ thuật',
            features: [
                'Giảm phào chỉ không cần thiết',
                'Tập trung hình khối cân đối',
                'Điểm nhấn nghệ thuật tinh tế',
                'Đường nét thanh lịch'
            ],
            color: '#10b981'
        },
        {
            id: 'mau-sac',
            name: 'Màu Sắc Hoàng Gia Nhưng Hiện Đại',
            icon: 'fas fa-palette',
            description: 'Chủ đạo: trắng – kem – vàng ánh kim. Phối hợp: xanh cổ vịt, xám khói, đen sang trọng',
            features: [
                'Trắng - kem chủ đạo',
                'Vàng ánh kim điểm nhấn',
                'Xanh cổ vịt tinh tế',
                'Đen - xám sang trọng'
            ],
            color: '#f59e0b'
        },
        {
            id: 'vat-lieu',
            name: 'Vật Liệu Cao Cấp & Bền Vững',
            icon: 'fas fa-gem',
            description: 'Gỗ tự nhiên, đá marble, inox mạ vàng, vải nhung. Tại Nha Trang, cần vật liệu chống ẩm mặn',
            features: [
                'Gỗ tự nhiên cao cấp',
                'Đá marble sang trọng',
                'Inox mạ vàng bền đẹp',
                'Vải nhung cao cấp'
            ],
            color: '#8b5cf6'
        },
        {
            id: 'khong-gian-mo',
            name: 'Không Gian Mở & Thông Minh',
            icon: 'fas fa-door-open',
            description: 'Biệt thự: kết nối phòng khách – bếp – ăn. Nhà phố: tối ưu diện tích bằng nội thất đa năng',
            features: [
                'Không gian liên thông',
                'Nội thất đa năng',
                'Tối ưu diện tích',
                'Thông minh, tiện nghi'
            ],
            color: '#06b6d4'
        },
        {
            id: 'anh-sang',
            name: 'Ánh Sáng Tự Nhiên & Đèn Nghệ Thuật',
            icon: 'fas fa-lightbulb',
            description: 'Đèn chùm pha lê, đèn hắt trần. Kết hợp cửa kính lớn, giếng trời',
            features: [
                'Đèn chùm pha lê sang trọng',
                'Đèn hắt trần tinh tế',
                'Cửa kính lớn đón sáng',
                'Giếng trời tự nhiên'
            ],
            color: '#ec4899'
        }
    ];

    const solutions = [
        {
            type: 'Biệt Thự Tân Cổ Điển',
            icon: 'fas fa-home',
            suitable: 'Không gian lớn - cần sự cân đối và sang trọng',
            features: [
                'Trần cao, đèn chùm pha lê',
                'Vật liệu đá marble cao cấp',
                'Sofa bọc da/nhung',
                'Bàn ăn dài 8-12 ghế',
                'Tủ rượu âm tường'
            ],
            note: 'Tại Nha Trang: chọn gỗ chống ẩm, inox mạ vàng chất lượng',
            price: '250,000 - 320,000 VNĐ/m²',
            color: '#3b82f6'
        },
        {
            type: 'Nhà Phố Tân Cổ Điển',
            icon: 'fas fa-building',
            suitable: 'Diện tích hạn chế - cần tiết chế chi tiết',
            features: [
                'Tường sáng màu, phào nhẹ',
                'Nội thất gọn gàng',
                'Tủ bếp thông minh',
                'Tivi treo tường',
                'Giếng trời & cửa kính lớn'
            ],
            note: 'Tại Hà Nội: thiết kế giếng trời để lấy sáng tự nhiên',
            price: '200,000 - 260,000 VNĐ/m²',
            color: '#10b981'
        }
    ];

    const priceTable = [
        {
            type: 'Nhà phố - nhà ống',
            price: '200,000 - 260,000',
            note: 'Phào chỉ tinh giản, phù hợp diện tích nhỏ',
            features: ['Thiết kế tối ưu', 'Chi tiết tiết chế', 'Phù hợp diện tích vừa']
        },
        {
            type: 'Biệt thự/villa',
            price: '250,000 - 320,000',
            note: 'Nhiều không gian, vật liệu cao cấp',
            features: ['Không gian lớn', 'Vật liệu cao cấp', 'Chi tiết nghệ thuật']
        },
        {
            type: 'Gói thiết kế & thi công trọn gói',
            price: 'Báo giá trực tiếp',
            note: 'Theo diện tích & yêu cầu vật liệu',
            features: ['Thiết kế 3D', 'Giám sát thi công', 'Bảo hành dài hạn']
        }
    ];

    const faqData = [
        {
            question: 'Xu hướng Tân cổ điển 2025 khác gì so với trước?',
            answer: 'Xu hướng 2025 tập trung vào việc tối giản chi tiết, giảm bớt phào chỉ rườm rà, nhấn mạnh đường nét và hình khối cân đối. Màu sắc vẫn giữ tông hoàng gia nhưng hiện đại hơn với sự kết hợp trắng - kem - vàng ánh kim.'
        },
        {
            question: 'Biệt thự và nhà phố có cách thiết kế khác nhau không?',
            answer: 'Có. Biệt thự: không gian lớn, cần sự cân đối và sang trọng với trần cao, đèn chùm pha lê, đá marble. Nhà phố: diện tích hạn chế, cần tiết chế chi tiết phào chỉ, ưu tiên tường sáng, nội thất gọn gàng.'
        },
        {
            question: 'Chi phí thiết kế Tân cổ điển có cao không?',
            answer: 'Nhà phố: 200-260K, Biệt thự: 250-320K VNĐ/m². Có thể tối ưu chi phí bằng cách sử dụng gỗ công nghiệp phủ veneer kết hợp gỗ tự nhiên, đá nhân tạo thay marble.'
        },
        {
            question: 'Không gian mở có phù hợp với Tân cổ điển không?',
            answer: 'Rất phù hợp. Xu hướng 2025 khuyến khích không gian mở, liên thông giữa phòng khách - bếp - ăn cho biệt thự, và nội thất đa năng cho nhà phố để tối ưu diện tích.'
        },
        {
            question: 'Làm sao để thiết kế không bị nặng nề?',
            answer: 'Không lạm dụng chi tiết, tập trung vào hình khối cân đối. Sử dụng màu sáng (trắng, kem) kết hợp ánh kim. Luôn có bản vẽ 3D để kiểm soát tổng thể trước thi công.'
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
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> tiếp tục khẳng định vị thế
                            trong năm 2025 nhờ sự kết hợp giữa tính sang trọng cổ điển và sự tinh gọn hiện đại.
                            Đây là lựa chọn lý tưởng cho biệt thự: tạo nên sự bề thế, đẳng cấp và nhà phố cao cấp:
                            mang đến không gian sang trọng, tinh tế.
                        </p>
                        <p>
                            Để áp dụng thành công, cần hiểu rõ xu hướng mới và giải pháp phù hợp từng loại công trình.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gradient" id="trends">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i>
                        5 Xu Hướng Thiết Kế Tân Cổ Điển 2025
                    </h2>
                    <p className="section-subtitle">
                        Những xu hướng nổi bật đang dẫn đầu thị trường
                    </p>

                    <div className="grid-3">
                        {trends.map((trend, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: trend.color }}>
                                    <i className={trend.icon}></i>
                                    {trend.name}
                                </h3>
                                <p>{trend.description}</p>
                                <ul>
                                    {trend.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-chevron-right"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-lightbulb"></i>
                        Giải Pháp Cho Biệt Thự & Nhà Phố
                    </h2>
                    <p className="section-subtitle">
                        Tùy chỉnh phong cách phù hợp với từng không gian
                    </p>

                    <div className="grid-2">
                        {solutions.map((solution, index) => (
                            <div key={index} className="info-card">
                                <h3 style={{ color: solution.color }}>
                                    <i className={solution.icon}></i>
                                    {solution.type}
                                </h3>
                                <p><strong>Đặc điểm:</strong> {solution.suitable}</p>
                                <ul>
                                    {solution.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="tip-text">
                                    <i className="fas fa-info-circle"></i>
                                    {solution.note}
                                </p>
                                <span className="standard">{solution.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tag"></i>
                        Báo Giá Thiết Kế Nội Thất Tân Cổ Điển 2025
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
                        Giải đáp thắc mắc về xu hướng Tân cổ điển 2025
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

export default XuHuongTanCoDienPage;