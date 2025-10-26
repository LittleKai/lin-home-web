// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho/thiet-ke-nha-tho.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import '../../../styles/PageStyles.css';

import CTAContent from '../../../components/CTAContent/CTAContent';

const ThietKeNhaThePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const designPrices = [
        {
            type: 'Nhà thờ họ 3 gian',
            price: '180.000 - 250.000đ/m²',
            note: 'Kiến trúc truyền thống, diện tích nhỏ - trung bình',
            features: ['Bản vẽ mặt bằng 2D', 'Phối cảnh 3D', 'Tư vấn phong thủy']
        },
        {
            type: 'Nhà thờ họ 5 gian',
            price: '200.000 - 280.000đ/m²',
            note: 'Quy mô lớn, có sân rộng, hậu cung',
            features: ['Bản vẽ chi tiết 2D', 'Phối cảnh 3D chân thực', 'Tư vấn phong thủy chuyên sâu']
        },
        {
            type: 'Từ đường hiện đại (BTCT giả gỗ)',
            price: '150.000 - 220.000đ/m²',
            note: 'Đảm bảo thẩm mỹ, tiết kiệm chi phí',
            features: ['Thiết kế tối ưu', 'Bản vẽ kỹ thuật', 'Phối cảnh 3D']
        },
        {
            type: 'Từ đường gỗ lim, mít, xoan',
            price: '250.000 - 350.000đ/m²',
            note: 'Kiến trúc cao cấp, chạm khắc tinh xảo',
            features: ['Bản vẽ chạm khắc chi tiết', 'Phối cảnh 3D cao cấp', 'Tư vấn vật liệu']
        },
        {
            type: 'Nhà thờ kết hợp khuôn viên cảnh quan',
            price: '200.000 - 300.000đ/m²',
            note: 'Có sân, hồ, vườn, tường bao',
            features: ['Thiết kế tổng thể', 'Bản vẽ cảnh quan', 'Phối cảnh 3D toàn cảnh']
        }
    ];

    const fengShuiPrinciples = [
        {
            title: 'Hướng đặt từ đường',
            description: 'Thường chọn hướng Nam hoặc Đông Nam để đón sinh khí',
            icon: 'fa-compass',
            details: 'Hướng Nam mang lại ánh sáng tốt, khí sinh mạnh. Hướng Đông Nam đón gió mát, tạo không gian thoáng đãng.'
        },
        {
            title: 'Thế đất',
            description: 'Phía trước rộng thoáng, phía sau có điểm tựa vững chắc',
            icon: 'fa-mountain',
            details: 'Minh đường phía trước rộng để tụ khí, huyền vũ phía sau cao để chắn gió, tạo sự ổn định.'
        },
        {
            title: 'Kích thước',
            description: 'Tuân thủ thước Lỗ Ban để hợp phong thủy',
            icon: 'fa-ruler',
            details: 'Các kích thước theo thước Lỗ Ban như: Tài Đức, Quan Lộc, Bản Mệnh để hợp tuổi chủ nhà.'
        },
        {
            title: 'Bố trí không gian',
            description: 'Gian giữa thờ chính, hai gian bên phụ trợ',
            icon: 'fa-th-large',
            details: 'Gian giữa là trung tâm tâm linh, hai gian bên cho sinh hoạt và tiếp khách dòng họ.'
        },
        {
            title: 'Khuôn viên',
            description: 'Nên có cây xanh, hồ nước để tạo sự cân bằng âm dương',
            icon: 'fa-tree',
            details: 'Hồ bán nguyệt phía trước tụ thủy sinh tài, cây xanh tạo sinh khí, cân bằng ngũ hành.'
        }
    ];

    const designProcess = [
        {
            step: 1,
            title: 'Khảo sát hiện trạng khu đất, thế đất',
            description: 'Đo đạc chính xác diện tích, địa hình, xác định hướng và vị trí phù hợp.',
            duration: '1-2 ngày',
            icon: 'fa-search-location'
        },
        {
            step: 2,
            title: 'Trao đổi cùng gia tộc về nhu cầu & phong thủy',
            description: 'Lắng nghe mong muốn, ngân sách, yêu cầu về phong thủy và kiến trúc truyền thống.',
            duration: '1 ngày',
            icon: 'fa-comments'
        },
        {
            step: 3,
            title: 'Lên ý tưởng kiến trúc',
            description: 'Xác định số gian (3 hoặc 5), vật liệu (gỗ tự nhiên hoặc BTCT), phong cách kiến trúc.',
            duration: '2-3 ngày',
            icon: 'fa-lightbulb'
        },
        {
            step: 4,
            title: 'Triển khai bản vẽ mặt bằng, phối cảnh 3D',
            description: 'Vẽ chi tiết mặt bằng, mặt cắt, mặt đứng và tạo phối cảnh 3D chân thực.',
            duration: '3-5 ngày',
            icon: 'fa-drafting-compass'
        },
        {
            step: 5,
            title: 'Hoàn thiện hồ sơ thiết kế chi tiết, bàn giao & tư vấn thi công',
            description: 'Hoàn thiện bộ hồ sơ thiết kế, giải đáp thắc mắc và tư vấn thi công.',
            duration: '1-2 ngày',
            icon: 'fa-check-circle'
        }
    ];

    const importantNotes = [
        {
            title: 'Không nên tiết kiệm vật liệu gỗ',
            description: 'Gỗ kém chất lượng dễ cong vênh, mất giá trị tâm linh',
            icon: 'fa-exclamation-triangle',
            solution: 'Chọn gỗ lim, mít, xoan ta có nguồn gốc rõ ràng, đã qua xử lý chống mối mọt.'
        },
        {
            title: 'Tránh phá cách quá hiện đại',
            description: 'Sẽ làm mất đi vẻ trang nghiêm vốn có',
            icon: 'fa-ban',
            solution: 'Giữ nguyên bản kiến trúc truyền thống, có thể ứng dụng công nghệ vào kết cấu.'
        },
        {
            title: 'Nên chọn đơn vị am hiểu truyền thống',
            description: 'Để giữ chuẩn mực kiến trúc',
            icon: 'fa-user-tie',
            solution: 'Làm việc với KTS và nghệ nhân có kinh nghiệm về kiến trúc tâm linh truyền thống.'
        },
        {
            title: 'Tôn trọng phong thủy dòng họ',
            description: 'Sai lệch hướng hay kích thước có thể gây bất lợi',
            icon: 'fa-yin-yang',
            solution: 'Tham khảo ý kiến bậc cao niên trong họ và thầy phong thủy có uy tín.'
        }
    ];

    const includedServices = [
        {
            service: 'Bản vẽ kiến trúc 2D',
            details: 'Mặt bằng, mặt cắt, mặt đứng chi tiết',
            icon: 'fa-file-alt'
        },
        {
            service: 'Phối cảnh 3D',
            details: 'Hình ảnh 3D chân thực, nhiều góc nhìn',
            icon: 'fa-cube'
        },
        {
            service: 'Tư vấn phong thủy',
            details: 'Xác định hướng, vị trí, kích thước hợp tuổi',
            icon: 'fa-compass'
        },
        {
            service: 'Tư vấn vật liệu',
            details: 'Lựa chọn vật liệu phù hợp ngân sách',
            icon: 'fa-hammer'
        }
    ];

    const faqs = [
        {
            question: 'Chi phí thiết kế nhà thờ họ 3 gian khoảng bao nhiêu?',
            answer: 'Chi phí thiết kế nhà thờ họ 3 gian dao động từ 180.000 - 250.000đ/m², đã bao gồm bản vẽ kiến trúc 2D và phối cảnh 3D. Giá có thể thay đổi tùy theo độ phức tạp và yêu cầu chi tiết của gia chủ.'
        },
        {
            question: 'Thiết kế nhà thờ có bao gồm thiết kế nội thất không?',
            answer: 'Gói thiết kế cơ bản chỉ bao gồm kiến trúc tổng thể và bố trí không gian. Thiết kế nội thất bàn thờ, hoành phi, câu đối có thể đặt gói riêng với chi phí bổ sung.'
        },
        {
            question: 'Bản vẽ 3D có giống với thực tế sau khi thi công không?',
            answer: 'Bản vẽ 3D được thiết kế rất chi tiết và chân thực, phản ánh đúng 90-95% so với thực tế. Sự khác biệt nhỏ có thể do ánh sáng tự nhiên và màu sắc vật liệu thực tế.'
        },
        {
            question: 'Có tư vấn phong thủy trong gói thiết kế không?',
            answer: 'Có, gói thiết kế bao gồm tư vấn phong thủy cơ bản về hướng nhà, vị trí đặt bàn thờ, kích thước theo thước Lỗ Ban. Nếu cần tư vấn phong thủy chuyên sâu, chúng tôi có dịch vụ riêng.'
        },
        {
            question: 'Thời gian thiết kế nhà thờ mất bao lâu?',
            answer: 'Thời gian thiết kế từ 5-10 ngày làm việc tùy quy mô. Nhà thờ 3 gian khoảng 5-7 ngày, nhà thờ 5 gian có hậu cung khoảng 7-10 ngày, đã bao gồm thời gian trao đổi và chỉnh sửa.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-container">
            <Header />

            <div className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="hero-content">
                    <div className="breadcrumb">
                        <Link to="/">Trang chủ</Link>
                        <span className="separator">/</span>
                        <Link to="/bao-gia">Báo giá</Link>
                        <span className="separator">/</span>
                        <Link to="/bao-gia/thiet-ke-thi-cong-nha-tho">Nhà thờ họ</Link>
                        <span className="separator">/</span>
                        <span>Thiết kế</span>
                    </div>
                    <h1 className="hero-title">Báo Giá Thiết Kế Từ Đường - Nhà Thờ Họ 2025</h1>
                    <p className="hero-description">
                        Thiết kế kiến trúc chuẩn phong thủy, tôn nghiêm, lưu giữ giá trị truyền thống dòng tộc tại Hà Nội & Nha Trang.
                    </p>
                </div>
            </div>

            <div className="content-wrapper">
                <section className="intro-section">
                    <h2 className="section-title">Ý Nghĩa Của Việc Thiết Kế Từ Đường - Nhà Thờ Họ</h2>
                    <p>
                        Từ đường, nhà thờ họ là công trình tâm linh quan trọng trong văn hóa người Việt, nơi thờ phụng tổ tiên và lưu giữ truyền thống dòng tộc. Một thiết kế chuẩn mực sẽ giúp:
                    </p>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <i className="fas fa-praying-hands"></i>
                            <h3>Đảm bảo sự tôn nghiêm và trang trọng</h3>
                            <p>Không gian thờ cúng được thiết kế theo chuẩn mực truyền thống, tạo sự trang nghiêm cho lễ nghi.</p>
                        </div>
                        <div className="benefit-card">
                            <i className="fas fa-yin-yang"></i>
                            <h3>Hài hòa phong thủy</h3>
                            <p>Mang lại may mắn, thịnh vượng cho con cháu, cân bằng âm dương trong gia tộc.</p>
                        </div>
                        <div className="benefit-card">
                            <i className="fas fa-landmark"></i>
                            <h3>Truyền giữ giá trị văn hóa</h3>
                            <p>Lưu giữ kiến trúc cổ truyền, truyền thống văn hóa dòng tộc qua các thế hệ.</p>
                        </div>
                        <div className="benefit-card">
                            <i className="fas fa-users"></i>
                            <h3>Tối ưu công năng</h3>
                            <p>Phục vụ việc thờ cúng và hội họp dòng họ một cách thuận tiện, hợp lý.</p>
                        </div>
                    </div>
                </section>

                <section className="price-table-section">
                    <div className="section-header">
                        <h2 className="section-title">Báo Giá Thiết Kế Từ Đường - Nhà Thờ Họ 2025</h2>
                    </div>

                    <div className="price-cards-grid">
                        {designPrices.map((item, index) => (
                            <div key={index} className="price-card">
                                <div className="price-card-header">
                                    <h3>{item.type}</h3>
                                    <div className="price-tag">{item.price}</div>
                                </div>
                                <p className="price-note">{item.note}</p>
                                <ul className="price-features">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="price-notes">
                        <p><i className="fas fa-info-circle"></i> Báo giá đã bao gồm bản vẽ kiến trúc 2D + phối cảnh 3D</p>
                        <p><i className="fas fa-info-circle"></i> Giá thay đổi tùy loại gỗ, diện tích, mức độ chạm khắc</p>
                        <p><i className="fas fa-info-circle"></i> Không bao gồm thiết kế nội thất bàn thờ, hoành phi, câu đối (có thể đặt gói riêng)</p>
                    </div>
                </section>

                <section className="fengshui-section">
                    <div className="section-header">
                        <h2 className="section-title">Yếu Tố Phong Thủy Cần Lưu Ý Trong Thiết Kế</h2>
                    </div>

                    <div className="fengshui-details-grid">
                        {fengShuiPrinciples.map((principle, index) => (
                            <div key={index} className="fengshui-detail-card">
                                <div className="fengshui-icon">
                                    <i className={`fas ${principle.icon}`}></i>
                                </div>
                                <h3>{principle.title}</h3>
                                <p className="principle-description">{principle.description}</p>
                                <p className="principle-details">{principle.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-header">
                        <h2 className="section-title">Quy Trình Thiết Kế Từ Đường - Nhà Thờ Họ</h2>
                    </div>

                    <div className="process-timeline">
                        {designProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">
                                    <i className={`fas ${step.icon}`}></i>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration">
                                        <i className="fas fa-clock"></i>
                                        <span>{step.duration}</span>
                                    </div>
                                </div>
                                {index < designProcess.length - 1 && (
                                    <div className="step-connector"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="notes-section">
                    <div className="section-header">
                        <h2 className="section-title">Lưu Ý & Khuyến Cáo Quan Trọng</h2>
                    </div>

                    <div className="notes-grid">
                        {importantNotes.map((note, index) => (
                            <div key={index} className="note-card">
                                <div className="note-icon">
                                    <i className={`fas ${note.icon}`}></i>
                                </div>
                                <h3>{note.title}</h3>
                                <p className="note-description">{note.description}</p>
                                <div className="note-solution">
                                    <strong>Giải pháp:</strong> {note.solution}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-included-section">
                    <div className="section-header">
                        <h2 className="section-title">Dịch Vụ Bao Gồm Trong Gói Thiết Kế</h2>
                    </div>

                    <div className="services-included-grid">
                        {includedServices.map((service, index) => (
                            <div key={index} className="service-included-card">
                                <i className={`fas ${service.icon}`}></i>
                                <h3>{service.service}</h3>
                                <p>{service.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="commitment-section">
                    <div className="section-header">
                        <h2 className="section-title">Ưu Đãi & Cam Kết Dịch Vụ</h2>
                    </div>

                    <div className="commitment-grid">
                        <div className="commitment-card">
                            <i className="fas fa-gift"></i>
                            <h3>Miễn phí tư vấn phong thủy ban đầu</h3>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-cube"></i>
                            <h3>Bản vẽ 3D chi tiết, chân thực</h3>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-user-tie"></i>
                            <h3>Đội ngũ KTS - nghệ nhân giàu kinh nghiệm</h3>
                        </div>
                        <div className="commitment-card">
                            <i className="fas fa-shield-alt"></i>
                            <h3>Cam kết giữ gìn giá trị truyền thống</h3>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
                    <div className="section-header">
                        <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <CTAContent 
                    title="Liên Hệ Tư Vấn Thiết Kế Miễn Phí"
                    description="Nhận tư vấn phong thủy và báo giá chi tiết cho thiết kế từ đường - nhà thờ họ"
                />
            </div>

            <div className="footer-placeholder"></div>
        </div>
    );
};

export default ThietKeNhaThePage;
