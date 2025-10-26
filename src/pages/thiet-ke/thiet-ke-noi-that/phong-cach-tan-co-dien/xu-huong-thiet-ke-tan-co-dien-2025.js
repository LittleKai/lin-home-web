import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongThietKeTanCoDien2025 = () => {
    const [activeTab, setActiveTab] = useState('biet-thu');
    const [activeFaq, setActiveFaq] = useState(null);

    const trends = [
        {
            id: 'toi-gian',
            title: 'Tối Giản Chi Tiết, Nhấn Mạnh Đường Nét',
            description: 'Giảm bớt phào chỉ rườm rà, tập trung vào hình khối cân đối và điểm nhấn nghệ thuật',
            icon: 'fas fa-draw-polygon',
            color: '#8b5cf6',
            features: [
                'Phào chỉ tinh giản, không quá cầu kỳ',
                'Đường nét sắc sảo, hiện đại',
                'Tạo điểm nhấn nghệ thuật tại khu vực trọng điểm',
                'Cân đối giữa cổ điển và hiện đại'
            ]
        },
        {
            id: 'mau-sac',
            title: 'Màu Sắc Hoàng Gia Nhưng Hiện Đại',
            description: 'Chủ đạo trắng - kem - vàng ánh kim, phối hợp xanh cổ vịt, xám khói, đen sang trọng',
            icon: 'fas fa-palette',
            color: '#f59e0b',
            features: [
                'Màu trắng, kem làm nền chủ đạo',
                'Vàng ánh kim tạo điểm nhấn quý phái',
                'Xanh cổ vịt, xám khói mang lại sự hiện đại',
                'Đen sang trọng cho chi tiết nội thất'
            ]
        },
        {
            id: 'vat-lieu',
            title: 'Vật Liệu Cao Cấp & Bền Vững',
            description: 'Gỗ tự nhiên, đá marble, inox mạ vàng, vải nhung - đặc biệt chống ẩm mặn tại Nha Trang',
            icon: 'fas fa-gem',
            color: '#10b981',
            features: [
                'Gỗ tự nhiên hoặc gỗ công nghiệp cao cấp',
                'Đá marble, đá nhân tạo chất lượng',
                'Inox mạ vàng, kim loại mạ PVD',
                'Vải nhung, da cao cấp cho nội thất'
            ]
        },
        {
            id: 'khong-gian',
            title: 'Không Gian Mở & Thông Minh',
            description: 'Biệt thự kết nối phòng khách - bếp - ăn, nhà phố tối ưu diện tích với nội thất đa năng',
            icon: 'fas fa-expand-arrows-alt',
            color: '#ef4444',
            features: [
                'Không gian mở, liên thông',
                'Nội thất đa năng tiết kiệm diện tích',
                'Tối ưu ánh sáng tự nhiên',
                'Kết nối hài hòa giữa các khu vực'
            ]
        },
        {
            id: 'anh-sang',
            title: 'Kết Hợp Ánh Sáng Tự Nhiên & Đèn Nghệ Thuật',
            description: 'Đèn chùm pha lê, đèn hắt trần kết hợp cửa kính lớn, giếng trời',
            icon: 'fas fa-lightbulb',
            color: '#3b82f6',
            features: [
                'Đèn chùm pha lê sang trọng',
                'Đèn hắt trần tạo hiệu ứng ánh sáng',
                'Cửa kính lớn đón ánh sáng tự nhiên',
                'Giếng trời cho nhà phố nhiều tầng'
            ]
        }
    ];

    const solutions = [
        {
            id: 'biet-thu',
            name: 'Biệt Thự Tân Cổ Điển',
            description: 'Giải pháp cho không gian lớn, cần sự cân đối và sang trọng',
            features: [
                'Trần cao, đèn chùm pha lê lớn',
                'Vật liệu đá marble cao cấp',
                'Sofa bọc da/nhung sang trọng',
                'Bàn ăn dài 8-12 ghế',
                'Tủ rượu âm tường nghệ thuật',
                'Gỗ chống ẩm tại Nha Trang'
            ],
            notes: [
                'Chú trọng tính đăng đối, sự hoành tráng',
                'Vật liệu cao cấp, bền vững',
                'Ánh sáng tự nhiên kết hợp đèn trang trí'
            ],
            price: '250,000 - 320,000 VNĐ/m²',
            bgColor: '#8b5cf6'
        },
        {
            id: 'nha-pho',
            name: 'Nhà Phố Tân Cổ Điển',
            description: 'Giải pháp cho diện tích hạn chế, cần tiết chế chi tiết',
            features: [
                'Tường sáng màu, phào nhẹ nhàng',
                'Nội thất gọn gàng, đa năng',
                'Tủ bếp thông minh',
                'Tivi treo tường',
                'Giếng trời lấy sáng',
                'Cửa kính lớn tại Hà Nội'
            ],
            notes: [
                'Tiết chế chi tiết phào chỉ',
                'Ưu tiên tính tiện nghi & thoáng sáng',
                'Tối ưu diện tích với nội thất thông minh'
            ],
            price: '200,000 - 260,000 VNĐ/m²',
            bgColor: '#10b981'
        }
    ];

    const priceTable = [
        {
            type: 'Nhà phố – nhà ống Tân cổ điển',
            price: '200,000 – 260,000',
            note: 'Phào chỉ tinh giản, phù hợp diện tích nhỏ'
        },
        {
            type: 'Biệt thự/villa Tân cổ điển',
            price: '250,000 – 320,000',
            note: 'Nhiều không gian, vật liệu cao cấp'
        },
        {
            type: 'Gói thiết kế & thi công trọn gói',
            price: 'Báo giá trực tiếp',
            note: 'Theo diện tích & yêu cầu vật liệu'
        }
    ];

    const designNotes = [
        {
            title: 'Không lạm dụng chi tiết',
            description: 'Tránh rườm rà, giữ không gian thoáng đãng',
            icon: 'fas fa-balance-scale'
        },
        {
            title: 'Đảm bảo đồng bộ',
            description: 'Kiến trúc – nội thất – ánh sáng hài hòa',
            icon: 'fas fa-sync'
        },
        {
            title: 'Biệt thự: Tính đăng đối',
            description: 'Chú ý sự hoành tráng và cân đối',
            icon: 'fas fa-home'
        },
        {
            title: 'Nhà phố: Tiện nghi & thoáng sáng',
            description: 'Ưu tiên tính thực dụng và ánh sáng tự nhiên',
            icon: 'fas fa-building'
        }
    ];

    const faqs = [
        {
            question: 'Xu hướng tân cổ điển 2025 khác gì so với trước đây?',
            answer: 'Xu hướng 2025 tập trung vào sự tối giản hơn, giảm bớt phào chỉ rườm rà, kết hợp vật liệu bền vững và không gian thông minh. Màu sắc cũng hiện đại hơn với xanh cổ vịt, xám khói thay vì chỉ vàng - trắng truyền thống.'
        },
        {
            question: 'Tại sao cần chú ý vật liệu chống ẩm tại Nha Trang?',
            answer: 'Nha Trang có độ ẩm cao và hơi muối biển, làm gỗ dễ mốc và kim loại dễ gỉ. Cần chọn gỗ xử lý chống ẩm, inox 304, kim loại mạ PVD và lớp phủ bảo vệ đặc biệt.'
        },
        {
            question: 'Biệt thự và nhà phố tân cổ điển khác nhau như thế nào?',
            answer: 'Biệt thự có không gian lớn nên có thể sử dụng chi tiết phào chỉ, đèn chùm lớn, vật liệu cao cấp. Nhà phố cần tiết chế chi tiết, sử dụng màu sáng, nội thất gọn gàng và tối ưu ánh sáng tự nhiên.'
        },
        {
            question: 'Chi phí thiết kế có thể tối ưu như thế nào?',
            answer: 'Có thể chọn gỗ công nghiệp phủ veneer thay vì gỗ tự nhiên, đá nhân tạo thay đá marble tự nhiên, nhưng vẫn đảm bảo chất lượng cao. Thiết kế 3D chi tiết giúp kiểm soát chi phí tốt hơn.'
        },
        {
            question: 'Có nên kết hợp phong cách hiện đại vào tân cổ điển?',
            answer: 'Hoàn toàn nên! Xu hướng 2025 khuyến khích kết hợp nội thất hiện đại như tủ bếp thông minh, tivi treo tường với phào chỉ tân cổ điển để tạo không gian vừa sang trọng vừa tiện nghi.'
        }
    ];

    const currentSolution = solutions.find(sol => sol.id === activeTab);

    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="container">
                    <h1 className="page-title">
                        <i className="fas fa-chart-line"></i>
                        Xu Hướng Thiết Kế Nội Thất Tân Cổ Điển 2025
                    </h1>
                    <p className="page-subtitle">
                        Giải pháp sang trọng, đẳng cấp cho biệt thự & nhà phố
                        <br />
                        <strong>Tại Hà Nội & Nha Trang</strong>
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-card">
                        <h2>
                            <i className="fas fa-star"></i>
                            Giới Thiệu
                        </h2>
                        <p>
                            Phong cách <strong>Tân cổ điển (Neo-classical)</strong> tiếp tục khẳng định vị thế trong năm 2025 
                            nhờ sự kết hợp giữa tính sang trọng cổ điển và sự tinh gọn hiện đại. Đây là lựa chọn lý tưởng cho:
                        </p>
                        <ul>
                            <li><i className="fas fa-home"></i> <strong>Biệt thú:</strong> tạo nên sự bề thế, đẳng cấp</li>
                            <li><i className="fas fa-building"></i> <strong>Nhà phố cao cấp:</strong> mang đến không gian sang trọng, tinh tế</li>
                        </ul>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Để áp dụng thành công, cần hiểu rõ xu hướng mới và giải pháp phù hợp từng loại công trình.
                        </p>
                    </div>
                </div>
            </section>

            <section className="trends-section">
                <div className="container">
                    <h2 className="section-title">5 Xu Hướng Thiết Kế Nội Thất Tân Cổ Điển 2025</h2>
                    <div className="trends-grid">
                        {trends.map((trend, index) => (
                            <div key={trend.id} className="trend-card">
                                <div className="trend-header" style={{ backgroundColor: trend.color }}>
                                    <div className="trend-icon">
                                        <i className={trend.icon}></i>
                                    </div>
                                    <div className="trend-number">#{index + 1}</div>
                                </div>
                                <h3>{trend.title}</h3>
                                <p className="trend-description">{trend.description}</p>
                                <ul className="trend-features">
                                    {trend.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tabs-section">
                <div className="container">
                    <h2 className="section-title">Giải Pháp Cho Biệt Thự & Nhà Phố</h2>
                    
                    <div className="tabs-container">
                        {solutions.map((solution) => (
                            <button
                                key={solution.id}
                                className={`tab-button ${activeTab === solution.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(solution.id)}
                                style={activeTab === solution.id ? { backgroundColor: solution.bgColor } : {}}
                            >
                                {solution.name}
                            </button>
                        ))}
                    </div>

                    {currentSolution && (
                        <div className="tab-content">
                            <div className="price-header" style={{ backgroundColor: currentSolution.bgColor }}>
                                <h3>{currentSolution.name}</h3>
                                <div className="price-badge">{currentSolution.price}</div>
                            </div>

                            <div className="content-section">
                                <p className="description">{currentSolution.description}</p>

                                <div className="features-list">
                                    <h4>
                                        <i className="fas fa-star"></i>
                                        Đặc Điểm Thiết Kế
                                    </h4>
                                    <ul>
                                        {currentSolution.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check-circle"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="notes-box">
                                    <h4>
                                        <i className="fas fa-lightbulb"></i>
                                        Lưu Ý Quan Trọng
                                    </h4>
                                    <ul>
                                        {currentSolution.notes.map((note, index) => (
                                            <li key={index}>
                                                <i className="fas fa-arrow-right"></i>
                                                {note}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
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
                        <strong>Lưu ý:</strong> Giá thay đổi tùy diện tích, phong cách chi tiết & loại vật liệu.
                    </div>
                </div>
            </section>

            <section className="design-notes-section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Khi Áp Dụng Phong Cách Tân Cổ Điển</h2>
                    <div className="features-grid">
                        {designNotes.map((note, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <i className={note.icon}></i>
                                </div>
                                <h3>{note.title}</h3>
                                <p>{note.description}</p>
                            </div>
                        ))}
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
                            Thiết kế nội thất phong cách <strong>Tân cổ điển 2025</strong> không chỉ mang lại sự sang trọng và đẳng cấp 
                            mà còn được điều chỉnh để phù hợp với biệt thự và nhà phố ở Hà Nội & Nha Trang.
                        </p>
                        <p className="highlight">
                            <i className="fas fa-arrow-right"></i>
                            Liên hệ ngay để được tư vấn miễn phí & báo giá chi tiết cho công trình của bạn.
                        </p>
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default XuHuongThietKeTanCoDien2025;
