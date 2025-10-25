import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const LauDaiDinhThuPage = () => {
    const [activeTab, setActiveTab] = useState('classic-europe');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'classic-europe',
            name: 'Kiến trúc cổ điển châu Âu',
            price: '350,000 - 500,000 VNĐ/m²',
            description: 'Sử dụng cột trụ, phù điêu, vòm mái cầu kỳ. Màu sắc sang trọng: trắng - vàng - kem',
            features: [
                'Cột trụ La Mã,Hy Lạp',
                'Phù điêu chạm khắc tinh xảo',
                'Vòm mái cầu kỳ',
                'Màu sắc sang trọng',
                'Chi tiết tỉ mỉ',
                'Chuẩn phong thủy'
            ],
            sizes: [
                { area: '300-500m²', style: 'Cổ điển Pháp', price: '105-200 triệu', features: '2-3 tầng' },
                { area: '500-800m²', style: 'Cổ điển Anh', price: '175-350 triệu', features: '3-4 tầng' },
                { area: '800-1500m²', style: 'Cổ điển Italia', price: '280-700 triệu', features: '4-5 tầng' }
            ],
            bgColor: '#8b5cf6'
        },
        {
            id: 'neoclassic',
            name: 'Kiến trúc tân cổ điển',
            price: '300,000 - 450,000 VNĐ/m²',
            description: 'Giữ lại sự uy nghi, nhưng tối giản chi tiết rườm rà. Phù hợp cả ở Hà Nội và Nha Trang',
            features: [
                'Đường nét tối giản',
                'Vẫn giữ nét sang trọng',
                'Kết hợp hiện đại',
                'Tiết kiệm chi phí hơn',
                'Dễ thi công',
                'Phong thủy hợp lý'
            ],
            sizes: [
                { area: '200-400m²', style: 'Tân cổ điển hiện đại', price: '60-150 triệu', features: '2-3 tầng' },
                { area: '400-700m²', style: 'Tân cổ điển sang trọng', price: '120-280 triệu', features: '3-4 tầng' },
                { area: '700-1200m²', style: 'Tân cổ điển đẳng cấp', price: '210-500 triệu', features: '4-5 tầng' }
            ],
            bgColor: '#06b6d4'
        },
        {
            id: 'modern-classic',
            name: 'Kiến trúc hiện đại pha cổ điển',
            price: '320,000 - 480,000 VNĐ/m²',
            description: 'Kết hợp kính, gỗ, đá tự nhiên với mái vòm tinh tế. Thường dùng cho villa ven biển ở Nha Trang',
            features: [
                'Kính, gỗ, đá tự nhiên',
                'Mái vòm tinh tế',
                'Không gian mở',
                'Ánh sáng tự nhiên',
                'Phù hợp ven biển',
                'Thông thoáng'
            ],
            sizes: [
                { area: '250-450m²', style: 'Villa biển hiện đại', price: '80-180 triệu', features: '2-3 tầng' },
                { area: '450-750m²', style: 'Villa nghỉ dưỡng', price: '144-320 triệu', features: '3-4 tầng' },
                { area: '750-1300m²', style: 'Resort cao cấp', price: '240-600 triệu', features: '4-5 tầng' }
            ],
            bgColor: '#10b981'
        }
    ];

    const installationSteps = [
        {
            step: 1,
            title: 'Khảo Sát Khu Đất & Tư Vấn Ý Tưởng',
            description: 'Đo đạc hiện trạng, phân tích phong thủy, tư vấn phong cách phù hợp',
            duration: '2-3 ngày',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Phác Thảo Mặt Bằng Công Năng',
            description: 'Thiết kế mặt bằng chi tiết các tầng, bố trí phòng chức năng',
            duration: '5-7 ngày',
            icon: 'fas fa-drafting-compass'
        },
        {
            step: 3,
            title: 'Thiết Kế Phối Cảnh 3D',
            description: 'Thiết kế 3D kiến trúc bên ngoài và nội thất bên trong',
            duration: '7-10 ngày',
            icon: 'fas fa-cube'
        },
        {
            step: 4,
            title: 'Hoàn Thiện Hồ Sơ Thiết Kế',
            description: 'Hoàn thiện hồ sơ kỹ thuật, bản vẽ thi công chi tiết',
            duration: '5-7 ngày',
            icon: 'fas fa-file-alt'
        },
        {
            step: 5,
            title: 'Bàn Giao & Hỗ Trợ Giám Sát',
            description: 'Bàn giao hồ sơ, hỗ trợ giám sát thi công đảm bảo đúng thiết kế',
            duration: 'Suốt quá trình',
            icon: 'fas fa-handshake'
        }
    ];

    const benefits = [
        {
            icon: 'fas fa-crown',
            title: 'Khẳng định đẳng cấp chủ nhân',
            description: 'Kiến trúc độc bản, khác biệt, thể hiện địa vị'
        },
        {
            icon: 'fas fa-gem',
            title: 'Thẩm mỹ vượt thời gian',
            description: 'Đường nét tinh tế, chi tiết tỉ mỉ, không bao giờ lỗi mốt'
        },
        {
            icon: 'fas fa-home',
            title: 'Công năng tối ưu',
            description: 'Không gian sống tiện nghi, khoa học, đáp ứng mọi nhu cầu'
        },
        {
            icon: 'fas fa-yin-yang',
            title: 'Phong thủy chuẩn',
            description: 'Thiết kế theo nguyên tắc phong thủy, mang lại may mắn, tài lộc'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Giá trị bền vững',
            description: 'Công trình có tuổi thọ cao, giá trị bất động sản tăng theo thời gian'
        }
    ];

    const faqData = [
        {
            question: 'Chi phí thiết kế lâu đài - dinh thự bao gồm những gì?',
            answer: 'Chi phí thiết kế bao gồm: khảo sát hiện trạng, tư vấn phong cách, thiết kế mặt bằng công năng, phối cảnh 3D kiến trúc và nội thất, hồ sơ kỹ thuật chi tiết, và hỗ trợ giám sát thi công. Giá có thể thay đổi tùy vào quy mô, phong cách và mức độ chi tiết yêu cầu.'
        },
        {
            question: 'Thời gian thiết kế mất bao lâu?',
            answer: 'Thời gian thiết kế trung bình từ 20-30 ngày tùy theo quy mô công trình. Với lâu đài dinh thự lớn (>1000m²) có thể mất 30-45 ngày. Thời gian có thể rút ngắn hoặc kéo dài tùy vào sự phức tạp của thiết kế và số lần chỉnh sửa.'
        },
        {
            question: 'Có cần xin phép xây dựng không?',
            answer: 'Có, công trình lâu đài - dinh thự đều cần xin giấy phép xây dựng. Chúng tôi sẽ cung cấp đầy đủ hồ sơ thiết kế theo quy định để bạn nộp hồ sơ xin phép. Tại Hà Nội và Nha Trang có thể có quy định khác nhau, chúng tôi sẽ tư vấn cụ thể.'
        },
        {
            question: 'Có thể thiết kế theo phong cách riêng không?',
            answer: 'Hoàn toàn có thể. Chúng tôi thiết kế theo yêu cầu riêng của khách hàng, kết hợp các phong cách hoặc tạo ra phong cách độc đáo. KTS sẽ tư vấn để đảm bảo tính thẩm mỹ, công năng và khả thi khi thi công.'
        },
        {
            question: 'Thiết kế có chuẩn phong thủy không?',
            answer: 'Có, tất cả thiết kế của chúng tôi đều được tư vấn phong thủy. Chúng tôi xác định hướng nhà, vị trí các phòng chức năng, màu sắc phù hợp với tuổi chủ nhà và mệnh ngũ hành. Điều này giúp gia chủ an tâm về mặt tâm linh.'
        },
        {
            question: 'Có hỗ trợ thi công không?',
            answer: 'Chúng tôi hỗ trợ giám sát thi công để đảm bảo công trình được thi công đúng thiết kế. Nếu khách hàng cần, chúng tôi cũng có thể giới thiệu đơn vị thi công uy tín hoặc nhận thi công trọn gói.'
        }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title">
                        <i className="fas fa-crown icon-primary"></i>
                        Thiết Kế Lâu Đài - Dinh Thự
                    </h1>
                    <p className="section-subtitle">
                        Sang trọng - đẳng cấp - chuẩn phong thủy tại Hà Nội & Nha Trang
                    </p>
                    <div className="grid-4">
                        <div className="feature-item">
                            <i className="fas fa-gem"></i>
                            <span>Đẳng Cấp Sang Trọng</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-yin-yang"></i>
                            <span>Phong Thủy Chuẩn</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-cube"></i>
                            <span>Thiết Kế 3D</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-tie"></i>
                            <span>KTS Giàu Kinh Nghiệm</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-star icon-primary"></i>
                        Lợi Ích Của Việc Thiết Kế Lâu Đài - Dinh Thự
                    </h2>
                    <div className="grid-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div className="info-icon">
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tags icon-primary"></i>
                        Phong Cách Thiết Kế & Báo Giá
                    </h2>
                    <p className="section-subtitle">
                        3 phong cách thiết kế lâu đài - dinh thự phổ biến
                    </p>

                    <div className="tabs">
                        {designTypes.map(type => (
                            <button
                                key={type.id}
                                className={`tab ${activeTab === type.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>

                    {currentType && (
                        <div className="detail-card">
                            <div
                                className="detail-header"
                                style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}
                            >
                                <h3>{currentType.name}</h3>
                                <div className="price-range">{currentType.price}</div>
                                <p>{currentType.description}</p>
                            </div>

                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Đặc điểm nổi bật:</h4>
                                    <ul className="info-list">
                                        {currentType.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Quy mô & giá:</h4>
                                    <div className="item-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{size.area}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">
                                                        {size.style} | {size.features}
                                                    </span>
                                                    <span className="item-price-extended">{size.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary">
                                        <i className="fas fa-phone"></i>
                                        Liên Hệ Báo Giá
                                    </a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary">
                                        <i className="fas fa-images"></i>
                                        Xem Mẫu Thiết Kế
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-tasks icon-primary"></i>
                        Quy Trình Thiết Kế
                    </h2>
                    <div className="steps-container">
                        {installationSteps.map((step) => (
                            <div key={step.step} className="step-card">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <div className="step-duration">
                                    <i className="fas fa-clock"></i>
                                    {step.duration}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-exclamation-circle icon-primary"></i>
                        Lưu Ý Khi Thiết Kế
                    </h2>
                    <div className="grid-2">
                        <div className="note-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Tại Hà Nội</h3>
                            <p>Chú trọng phong thủy theo hướng đất, kết hợp kiến trúc truyền thống và hiện đại. Cần xem xét khí hậu 4 mùa rõ rệt.</p>
                        </div>
                        <div className="note-card">
                            <i className="fas fa-umbrella-beach"></i>
                            <h3>Tại Nha Trang</h3>
                            <p>Tối ưu không gian mở, tận dụng gió và ánh sáng biển. Chú ý chống ẩm mặn, sử dụng vật liệu chịu được khí hậu ven biển.</p>
                        </div>
                    </div>
                    <div className="highlight-box">
                        <i className="fas fa-lightbulb"></i>
                        <p><strong>Lưu ý quan trọng:</strong> Ưu tiên đơn vị có kinh nghiệm thực hiện công trình lớn. Cần đảm bảo kết hợp hài hòa giữa kiến trúc - nội thất - cảnh quan.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        <i className="fas fa-question-circle icon-primary"></i>
                        Câu Hỏi Thường Gặp
                    </h2>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div 
                                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
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

export default LauDaiDinhThuPage;
