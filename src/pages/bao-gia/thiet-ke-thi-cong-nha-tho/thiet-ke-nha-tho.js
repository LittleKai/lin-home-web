// src/pages/bao-gia/thiet-ke-thi-cong-nha-tho/thiet-ke-nha-tho.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            details: 'Hướng Nam mang lại ánh sáng tốt, khí sinh mạnh. Hướng Đông Nam đón gió mát.',
            icon: 'fa-compass'
        },
        {
            title: 'Thế đất',
            description: 'Phía trước rộng thoáng, phía sau có điểm tựa vững chắc',
            details: 'Minh đường phía trước rộng để tụ khí, huyền vũ phía sau cao để chắn gió.',
            icon: 'fa-mountain'
        },
        {
            title: 'Kích thước',
            description: 'Tuân thủ thước Lỗ Ban để hợp phong thủy',
            details: 'Các kích thước theo thước Lỗ Ban như: Tài Đức, Quan Lộc, Bản Mệnh.',
            icon: 'fa-ruler'
        },
        {
            title: 'Bố trí không gian',
            description: 'Gian giữa thờ chính, hai gian bên phụ trợ',
            details: 'Gian giữa là trung tâm tâm linh, hai gian bên cho sinh hoạt.',
            icon: 'fa-th-large'
        },
        {
            title: 'Khuôn viên',
            description: 'Nên có cây xanh, hồ nước để tạo sự cân bằng âm dương',
            details: 'Hồ bán nguyệt phía trước tụ thủy sinh tài, cây xanh tạo sinh khí.',
            icon: 'fa-tree'
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
            description: 'Lắng nghe mong muốn, ngân sách, yêu cầu về phong thủy.',
            duration: '1 ngày',
            icon: 'fa-comments'
        },
        {
            step: 3,
            title: 'Lên ý tưởng kiến trúc',
            description: 'Xác định số gian, vật liệu, phong cách kiến trúc.',
            duration: '2-3 ngày',
            icon: 'fa-lightbulb'
        },
        {
            step: 4,
            title: 'Triển khai bản vẽ mặt bằng, phối cảnh 3D',
            description: 'Vẽ chi tiết mặt bằng, mặt cắt và tạo phối cảnh 3D chân thực.',
            duration: '3-5 ngày',
            icon: 'fa-drafting-compass'
        },
        {
            step: 5,
            title: 'Hoàn thiện hồ sơ thiết kế chi tiết',
            description: 'Hoàn thiện bộ hồ sơ thiết kế, bàn giao và tư vấn thi công.',
            duration: '1-2 ngày',
            icon: 'fa-check-circle'
        }
    ];

    const importantNotes = [
        {
            title: 'Không nên tiết kiệm vật liệu gỗ',
            description: 'Gỗ kém chất lượng dễ cong vênh, mất giá trị tâm linh',
            icon: 'fa-exclamation-triangle'
        },
        {
            title: 'Tránh phá cách quá hiện đại',
            description: 'Sẽ làm mất đi vẻ trang nghiêm vốn có',
            icon: 'fa-ban'
        },
        {
            title: 'Nên chọn đơn vị am hiểu truyền thống',
            description: 'Để giữ chuẩn mực kiến trúc',
            icon: 'fa-user-tie'
        },
        {
            title: 'Tôn trọng phong thủy dòng họ',
            description: 'Sai lệch hướng hay kích thước có thể gây bất lợi',
            icon: 'fa-yin-yang'
        }
    ];

    const faqs = [
        {
            question: 'Chi phí thiết kế nhà thờ họ 3 gian khoảng bao nhiêu?',
            answer: 'Chi phí thiết kế nhà thờ họ 3 gian dao động từ 180.000 - 250.000đ/m², đã bao gồm bản vẽ kiến trúc 2D và phối cảnh 3D.'
        },
        {
            question: 'Thiết kế nhà thờ có bao gồm thiết kế nội thất không?',
            answer: 'Gói thiết kế cơ bản chỉ bao gồm kiến trúc tổng thể. Thiết kế nội thất có thể đặt gói riêng.'
        },
        {
            question: 'Bản vẽ 3D có giống với thực tế không?',
            answer: 'Bản vẽ 3D phản ánh đúng 90-95% so với thực tế.'
        },
        {
            question: 'Có tư vấn phong thủy trong gói thiết kế không?',
            answer: 'Có, gói thiết kế bao gồm tư vấn phong thủy cơ bản về hướng nhà, vị trí đặt bàn thờ.'
        }
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title" >
                        Báo Giá Thiết Kế Từ Đường - Nhà Thờ Họ 2025
                    </h1>
                    <p className="section-subtitle" >
                        Thiết kế kiến trúc chuẩn phong thủy, tôn nghiêm, lưu giữ giá trị truyền thống dòng tộc
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ý Nghĩa Của Việc Thiết Kế Từ Đường - Nhà Thờ Họ</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Từ đường, nhà thờ họ là công trình tâm linh quan trọng, nơi thờ phụng tổ tiên và lưu giữ truyền thống dòng tộc.
                    </p>

                    <div className="grid-4">
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-praying-hands" style={{ fontSize: '2rem', color: '#667eea' }}></i>
                            </div>
                            <h3>Tôn nghiêm & trang trọng</h3>
                            <p>Không gian thờ cúng theo chuẩn mực truyền thống.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-yin-yang" style={{ fontSize: '2rem', color: '#10b981' }}></i>
                            </div>
                            <h3>Hài hòa phong thủy</h3>
                            <p>Mang lại may mắn, thịnh vượng cho con cháu.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-landmark" style={{ fontSize: '2rem', color: '#f59e0b' }}></i>
                            </div>
                            <h3>Giữ gìn văn hóa</h3>
                            <p>Lưu giữ kiến trúc cổ truyền qua các thế hệ.</p>
                        </div>
                        <div className="info-card">
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <i className="fas fa-users" style={{ fontSize: '2rem', color: '#8b5cf6' }}></i>
                            </div>
                            <h3>Tối ưu công năng</h3>
                            <p>Phục vụ thờ cúng và hội họp dòng họ.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Báo Giá Thiết Kế 2025</h2>

                    <div className="grid-2">
                        {designPrices.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-header">
                                    <h3>{item.type}</h3>
                                    <div className="price-range">{item.price}</div>
                                    <p>{item.note}</p>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        {item.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <i className="fas fa-check-circle"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '1.5rem', background: '#fff7ed', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-info-circle" style={{ color: '#f59e0b' }}></i> Báo giá đã bao gồm bản vẽ 2D + phối cảnh 3D</p>
                        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><i className="fas fa-info-circle" style={{ color: '#f59e0b' }}></i> Giá thay đổi tùy loại gỗ, diện tích, mức độ chạm khắc</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Yếu Tố Phong Thủy Cần Lưu Ý</h2>

                    <div className="grid-3">
                        {fengShuiPrinciples.map((principle, index) => (
                            <div key={index} className="info-card">
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <i className={`fas ${principle.icon}`} style={{ fontSize: '1.8rem', color: '#667eea' }}></i>
                                </div>
                                <h3>{principle.title}</h3>
                                <p>{principle.description}</p>
                                <p style={{ fontSize: '0.85rem', color: '#718096', marginTop: '0.5rem' }}>{principle.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Quy Trình Thiết Kế</h2>

                    <div className="process-timeline">
                        {designProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <i className={`fas ${step.icon}`}></i>
                                    <span>Bước {step.step}</span>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-duration">
                                        <i className="fas fa-clock"></i>
                                        {step.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Lưu Ý Quan Trọng</h2>

                    <div className="grid-2">
                        {importantNotes.map((note, index) => (
                            <div key={index} className="info-card">
                                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    <i className={`fas ${note.icon}`} style={{ fontSize: '2rem', color: '#ef4444' }}></i>
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

            <CTAContent />
        </div>
    );
};

export default ThietKeNhaThePage;