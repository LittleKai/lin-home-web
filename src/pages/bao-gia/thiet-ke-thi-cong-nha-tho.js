// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PageStyles.css';
import CTAContent from '../../components/CTAContent/CTAContent';

const ThietKeThiCongNhaThePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const nhaTheServices = [
        {
            id: 'thiet-ke',
            title: 'Báo giá thiết kế từ đường - nhà thờ họ',
            description: 'Thiết kế kiến trúc chuẩn phong thủy, tôn nghiêm, lưu giữ giá trị truyền thống dòng tộc.',
            icon: 'fa-drafting-compass',
            duration: '5-10 ngày',
            warranty: '12 tháng',
            features: ['Kiến trúc truyền thống', 'Chuẩn phong thủy', 'Bản vẽ 2D + 3D'],
            link: '/bao-gia/thiet-ke-thi-cong-nha-tho/thiet-ke-nha-tho',
            bgColor: '#667eea'
        },
        {
            id: 'phan-tho',
            title: 'Báo giá thi công phần thô nhà thờ',
            description: 'Thi công móng, khung, cột, mái thô - kết cấu bền vững, chuẩn phong thủy cho công trình tâm linh.',
            icon: 'fa-hard-hat',
            duration: '20-40 ngày',
            warranty: '10 năm',
            features: ['Móng chắc chắn', 'Khung bền vững', 'Mái thô chuẩn'],
            link: '/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-phan-tho',
            bgColor: '#10b981'
        },
        {
            id: 'hoan-thien',
            title: 'Báo giá thi công hoàn thiện nhà thờ',
            description: 'Hoàn thiện mái ngói, cửa gỗ, hoành phi, câu đối - tạo không gian tâm linh trang trọng.',
            icon: 'fa-paint-brush',
            duration: '15-30 ngày',
            warranty: '5 năm',
            features: ['Ngói mũi hài', 'Chạm khắc gỗ', 'Sơn son thếp vàng'],
            link: '/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-hoan-thien',
            bgColor: '#f59e0b'
        },
        {
            id: 'tron-goi',
            title: 'Báo giá thi công trọn gói nhà thờ',
            description: 'Dịch vụ chìa khóa trao tay từ thiết kế đến hoàn thiện - trang nghiêm, bền vững, tiết kiệm thời gian.',
            icon: 'fa-key',
            duration: '45-90 ngày',
            warranty: '10 năm',
            features: ['Chìa khóa trao tay', 'Trọn gói A-Z', 'Minh bạch chi phí'],
            link: '/bao-gia/thiet-ke-thi-cong-nha-tho/thi-cong-tron-goi',
            bgColor: '#8b5cf6'
        }
    ];

    const priceOverview = [
        {
            category: 'Nhà thờ họ 3 gian (BTCT giả gỗ)',
            designPrice: '180.000 - 250.000đ/m²',
            roughPrice: '3.200.000 - 3.800.000đ/m²',
            finishPrice: 'Theo hạng mục',
            totalPrice: '6.000.000 - 7.500.000đ/m²',
            note: 'Kiến trúc truyền thống, diện tích nhỏ - trung bình'
        },
        {
            category: 'Nhà thờ họ 5 gian (BTCT giả gỗ)',
            designPrice: '200.000 - 280.000đ/m²',
            roughPrice: '3.500.000 - 4.200.000đ/m²',
            finishPrice: 'Theo hạng mục',
            totalPrice: '6.500.000 - 8.000.000đ/m²',
            note: 'Quy mô lớn, có sân rộng, hậu cung'
        },
        {
            category: 'Từ đường gỗ lim, mít, xoan',
            designPrice: '250.000 - 350.000đ/m²',
            roughPrice: '4.500.000 - 6.000.000đ/m²',
            finishPrice: 'Theo hạng mục',
            totalPrice: '8.000.000 - 12.000.000đ/m²',
            note: 'Kiến trúc cao cấp, chạm khắc tinh xảo'
        },
        {
            category: 'Nhà thờ kết hợp khuôn viên',
            designPrice: '200.000 - 300.000đ/m²',
            roughPrice: '3.800.000 - 5.200.000đ/m²',
            finishPrice: 'Theo hạng mục',
            totalPrice: '7.000.000 - 9.500.000đ/m²',
            note: 'Có sân, hồ, vườn, tường bao'
        }
    ];

    const fengShuiFacts = [
        {
            title: 'Hướng đặt từ đường',
            description: 'Thường chọn hướng Nam hoặc Đông Nam để đón sinh khí, mang lại may mắn và thịnh vượng cho con cháu.',
            icon: 'fa-compass'
        },
        {
            title: 'Thế đất chuẩn phong thủy',
            description: 'Phía trước rộng thoáng (minh đường), phía sau có điểm tựa vững chắc (huyền vũ).',
            icon: 'fa-mountain'
        },
        {
            title: 'Kích thước theo thước Lỗ Ban',
            description: 'Tuân thủ thước Lỗ Ban để hợp phong thủy, đảm bảo sự cân bằng âm dương.',
            icon: 'fa-ruler'
        },
        {
            title: 'Bố trí không gian',
            description: 'Gian giữa thờ chính, hai gian bên phụ trợ, tạo sự trang nghiêm và hài hòa.',
            icon: 'fa-th-large'
        },
        {
            title: 'Khuôn viên cảnh quan',
            description: 'Nên có cây xanh, hồ nước để tạo sự cân bằng âm dương, tụ khí sinh tài.',
            icon: 'fa-tree'
        }
    ];

    const constructionProcess = [
        {
            step: 1,
            title: 'Khảo sát hiện trạng',
            description: 'Khảo sát khu đất, thế đất, xác định hướng và vị trí phù hợp theo phong thủy.',
            icon: 'fa-search-location'
        },
        {
            step: 2,
            title: 'Trao đổi nhu cầu',
            description: 'Trao đổi cùng gia tộc về nhu cầu, ngân sách, phong thủy và mong muốn.',
            icon: 'fa-comments'
        },
        {
            step: 3,
            title: 'Lên ý tưởng thiết kế',
            description: 'Xác định số gian, vật liệu, phong cách kiến trúc phù hợp với truyền thống dòng họ.',
            icon: 'fa-lightbulb'
        },
        {
            step: 4,
            title: 'Triển khai bản vẽ',
            description: 'Triển khai bản vẽ mặt bằng, mặt cắt, phối cảnh 3D chi tiết.',
            icon: 'fa-drafting-compass'
        },
        {
            step: 5,
            title: 'Thi công xây dựng',
            description: 'Thi công phần thô, hoàn thiện theo đúng bản vẽ và yêu cầu kỹ thuật.',
            icon: 'fa-hammer'
        },
        {
            step: 6,
            title: 'Nghiệm thu & bàn giao',
            description: 'Hoàn thiện hồ sơ, nghiệm thu công trình, bàn giao và tư vấn bảo trì.',
            icon: 'fa-handshake'
        }
    ];

    const faqs = [
        {
            question: 'Chi phí xây dựng một nhà thờ họ 3 gian khoảng bao nhiêu?',
            answer: 'Chi phí xây nhà thờ họ 3 gian BTCT giả gỗ dao động từ 6-7,5 triệu đồng/m² sàn (trọn gói). Đối với nhà thờ gỗ lim, mít cao cấp có thể lên đến 8-12 triệu đồng/m². Chi phí cụ thể phụ thuộc vào vật liệu, mức độ chạm khắc và quy mô khuôn viên.'
        },
        {
            question: 'Có nên chọn BTCT giả gỗ thay vì gỗ tự nhiên không?',
            answer: 'BTCT giả gỗ có ưu điểm về độ bền, chống mối mọt, chi phí hợp lý và ít bảo trì. Tuy nhiên, gỗ tự nhiên (lim, mít, xoan) mang giá trị tâm linh cao hơn, vẻ đẹp truyền thống và có thể lưu giữ hàng trăm năm. Lựa chọn phụ thuộc vào ngân sách và mong muốn của gia tộc.'
        },
        {
            question: 'Thời gian xây dựng một nhà thờ họ mất bao lâu?',
            answer: 'Thời gian xây dựng phụ thuộc vào quy mô: nhà thờ 3 gian khoảng 2-3 tháng, nhà thờ 5 gian có hậu cung khoảng 3-4 tháng. Thời gian này bao gồm thiết kế, thi công phần thô, hoàn thiện và nghiệm thu.'
        },
        {
            question: 'Làm sao để chọn hướng nhà thờ hợp phong thủy?',
            answer: 'Hướng nhà thờ nên theo nguyên tắc: hướng Nam hoặc Đông Nam để đón sinh khí, phía trước có minh đường rộng thoáng, phía sau có điểm tựa vững chắc. Nên tham khảo thầy phong thủy để xác định hướng phù hợp với tuổi chủ gia tộc và địa thế.'
        },
        {
            question: 'Có cần xin phép xây dựng nhà thờ họ không?',
            answer: 'Tùy theo quy mô và vị trí, có thể cần xin phép xây dựng. Đội ngũ chúng tôi sẽ hỗ trợ tư vấn thủ tục pháp lý và giấy phép xây dựng theo quy định của địa phương.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            <section className="section section-gradient">
                <div className="container">
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <h1 className="section-title" >
                            Báo Giá Thiết Kế, Thi Công Từ Đường - Nhà Thờ Họ 2025
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem' }}>
                            Thi công trọn gói từ đường, nhà thờ họ tại Hà Nội & Nha Trang. Kiến trúc tôn nghiêm, chuẩn phong thủy, lưu giữ giá trị truyền thống dòng tộc.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Các Gói Dịch Vụ Nhà Thờ Họ</h2>
                    <p className="section-subtitle">
                        Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của gia tộc
                    </p>

                    <div className="grid-2">
                        {nhaTheServices.map((service) => (
                            <div
                                key={service.id}
                                className="card"
                                onMouseEnter={() => setHoveredItem(service.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="card-header" style={{ background: service.bgColor }}>
                                    <h3>
                                        <i className={`fas ${service.icon}`}></i>
                                        {service.title}
                                    </h3>
                                    <p>{service.description}</p>
                                </div>

                                <div className="card-body">
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ flex: 1, textAlign: 'center' }}>
                                            <i className="fas fa-clock" style={{ color: '#667eea' }}></i>
                                            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>{service.duration}</div>
                                        </div>
                                        <div style={{ flex: 1, textAlign: 'center' }}>
                                            <i className="fas fa-shield-alt" style={{ color: '#10b981' }}></i>
                                            <div style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>BH {service.warranty}</div>
                                        </div>
                                    </div>

                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to={service.link} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                        Xem chi tiết <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Bảng Giá Tổng Quan</h2>
                    <p className="section-subtitle">
                        Tham khảo mức giá cho các loại hình nhà thờ họ phổ biến
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                            <thead>
                            <tr style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Loại hình công trình</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Thiết kế</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Phần thô</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Hoàn thiện</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Trọn gói</th>
                            </tr>
                            </thead>
                            <tbody>
                            {priceOverview.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <strong>{item.category}</strong>
                                        <div style={{ fontSize: '0.85rem', color: '#718096', marginTop: '0.25rem' }}>{item.note}</div>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{item.designPrice}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{item.roughPrice}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{item.finishPrice}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center', color: '#667eea', fontWeight: '600' }}>{item.totalPrice}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '1.5rem', background: '#fff7ed', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-info-circle" style={{ color: '#f59e0b' }}></i> Giá đã bao gồm vật liệu, nhân công, và quản lý công trình</p>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-info-circle" style={{ color: '#f59e0b' }}></i> Giá trọn gói bao gồm: thiết kế + thi công phần thô + hoàn thiện cơ bản</p>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-info-circle" style={{ color: '#f59e0b' }}></i> Chưa bao gồm: đồ thờ nội thất rời (bàn thờ, sập gụ, tủ thờ)</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Yếu Tố Phong Thủy Quan Trọng</h2>
                    <p className="section-subtitle">
                        Những nguyên tắc phong thủy cần lưu ý khi thiết kế từ đường - nhà thờ họ
                    </p>

                    <div className="grid-3">
                        {fengShuiFacts.map((fact, index) => (
                            <div key={index} className="info-card">
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <div className="icon-circle">
                                        <i className={`fas ${fact.icon}`} style={{ fontSize: '1.5rem', color: '#667eea' }}></i>
                                    </div>
                                </div>
                                <h3>{fact.title}</h3>
                                <p>{fact.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình Thiết Kế & Thi Công</h2>
                    <p className="section-subtitle">
                        6 bước thực hiện chuyên nghiệp từ khảo sát đến bàn giao
                    </p>

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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ý Nghĩa Của Việc Xây Dựng Nhà Thờ Họ</h2>

                    <div className="grid-4">
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-praying-hands" style={{ fontSize: '2rem', color: '#667eea' }}></i>
                            </div>
                            <h3>Tôn nghiêm & trang trọng</h3>
                            <p>Không gian thờ cúng tổ tiên một cách trang nghiêm, giữ gìn đạo lý truyền thống.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-yin-yang" style={{ fontSize: '2rem', color: '#10b981' }}></i>
                            </div>
                            <h3>Hài hòa phong thủy</h3>
                            <p>Kiến trúc chuẩn phong thủy mang lại may mắn, thịnh vượng cho con cháu.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-landmark" style={{ fontSize: '2rem', color: '#f59e0b' }}></i>
                            </div>
                            <h3>Giữ gìn giá trị văn hóa</h3>
                            <p>Lưu giữ kiến trúc cổ truyền, truyền thống văn hóa dòng tộc qua các thế hệ.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-users" style={{ fontSize: '2rem', color: '#8b5cf6' }}></i>
                            </div>
                            <h3>Tối ưu công năng</h3>
                            <p>Phục vụ việc thờ cúng và hội họp dòng họ một cách thuận tiện, hợp lý.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Câu Hỏi Thường Gặp</h2>

                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
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

            <CTAContent
                title="Liên Hệ Tư Vấn Miễn Phí"
                description="Nhận tư vấn phong thủy và báo giá chi tiết cho công trình từ đường - nhà thờ họ"
            />
        </div>
    );
};

export default ThietKeThiCongNhaThePage;