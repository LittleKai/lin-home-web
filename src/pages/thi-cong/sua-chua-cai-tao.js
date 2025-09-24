// src/pages/thi-cong/sua-chua-cai-tao.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import '../thiet-ke/ThietKePage.css';

const SuaChuaCaiTaoPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Main renovation process steps
    const renovationProcess = [
        {
            step: 1,
            title: "Khảo sát & tư vấn ban đầu",
            description: "Kiểm tra hiện trạng kết cấu, hệ thống điện-nước, mái và tường",
            details: [
                "Kiểm tra kết cấu móng, dầm, cột",
                "Đánh giá hệ thống điện-nước hiện tại",
                "Ghi nhận nhu cầu cải tạo của gia chủ"
            ],
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế & lập phương án cải tạo",
            description: "Lập bản vẽ chi tiết và dự toán chi phí, thời gian",
            details: [
                "Bản vẽ kết cấu - kiến trúc - M&E",
                "Dự toán chi phí minh bạch",
                "Timeline thực hiện dự án"
            ],
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Xin giấy phép xây dựng",
            description: "Hỗ trợ thủ tục pháp lý cho các thay đổi kết cấu",
            details: [
                "Xin phép nếu thay đổi kết cấu",
                "Hồ sơ thay đổi mặt tiền, nâng tầng",
                "Tránh rủi ro pháp lý"
            ],
            icon: "fa-file-contract"
        },
        {
            step: 4,
            title: "Thi công thô & kết cấu",
            description: "Đục phá, tháo dỡ và gia cố kết cấu cần thiết",
            details: [
                "Đục phá theo thiết kế",
                "Gia cố móng, cột, dầm nếu cần",
                "Biện pháp chống đỡ tạm thời"
            ],
            icon: "fa-hard-hat"
        },
        {
            step: 5,
            title: "Thi công hệ thống M&E",
            description: "Điện-nước-chống thấm toàn diện",
            details: [
                "Đi dây điện, lắp ống nước âm tường",
                "Xử lý chống thấm toàn diện",
                "Test hệ thống trước hoàn thiện"
            ],
            icon: "fa-tools"
        },
        {
            step: 6,
            title: "Hoàn thiện & lắp đặt",
            description: "Ốp lát, sơn bả, lắp cửa-trần-thiết bị",
            details: [
                "Ốp lát gạch theo thiết kế",
                "Sơn bả hoàn thiện",
                "Lắp đặt nội thất, thiết bị"
            ],
            icon: "fa-paint-brush"
        },
        {
            step: 7,
            title: "Nghiệm thu & bàn giao",
            description: "Kiểm tra theo checklist từng hạng mục",
            details: [
                "Checklist nghiệm thu chi tiết",
                "Lập hồ sơ bảo hành",
                "Hướng dẫn sử dụng và bảo trì"
            ],
            icon: "fa-clipboard-check"
        }
    ];

    // Renovation categories
    const renovationCategories = [
        {
            id: 'quy-trinh-sua-chua',
            title: 'Quy trình sửa chữa cải tạo nhà chi tiết',
            description: 'Quy trình chuẩn từ khảo sát đến bàn giao, đảm bảo an toàn và chất lượng',
            href: '/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o',
            icon: 'fa-list-ol',
            color: '#667eea'
        },
        {
            id: 'nang-tang-mo-rong',
            title: 'Cải tạo nâng tầng và mở rộng nhà',
            description: 'Giải pháp tối ưu không gian sống, tăng diện tích sử dụng',
            href: '/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong',
            icon: 'fa-building',
            color: '#10b981'
        },
        {
            id: 'cai-tao-nha-pho',
            title: 'Thi công cải tạo nhà phố',
            description: 'Cải tạo nhà phố hiện đại, tối ưu công năng và thẩm mỹ',
            href: '/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho',
            icon: 'fa-home',
            color: '#f59e0b'
        },
        {
            id: 'cai-tao-bep-vs',
            title: 'Cải tạo bếp và nhà vệ sinh',
            description: 'Nâng cấp không gian tiện nghi, vệ sinh và an toàn',
            href: '/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh',
            icon: 'fa-bath',
            color: '#8b5cf6'
        },
        {
            id: 'cai-tao-phong-khach-ngu',
            title: 'Cải tạo phòng ngủ & phòng khách',
            description: 'Tối ưu không gian sinh hoạt, nâng tầm tiện nghi và thẩm mỹ',
            href: '/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach',
            icon: 'fa-bed',
            color: '#ef4444'
        },
        {
            id: 'cai-tao-mat-tien',
            title: 'Cải tạo mặt tiền & ngoại thất',
            description: 'Nâng tầm thẩm mỹ và giá trị ngôi nhà',
            href: '/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that',
            icon: 'fa-paint-roller',
            color: '#06b6d4'
        },
        {
            id: 'toi-uu-chi-phi',
            title: 'Tối ưu chi phí cải tạo',
            description: 'Giải pháp tiết kiệm, hiệu quả cao cho công trình cải tạo',
            href: '/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao',
            icon: 'fa-calculator',
            color: '#84cc16'
        }
    ];

    // Common mistakes in renovation
    const commonMistakes = [
        {
            title: "Đục phá nhầm tường/cột chịu lực",
            cause: "Không có bản vẽ kết cấu, thợ tự ý đục phá",
            consequence: "Gây nứt, lún sàn, nguy cơ sập",
            solution: "Thuê kỹ sư kiểm tra, dùng thiết bị scan tường",
            icon: "fa-exclamation-triangle"
        },
        {
            title: "Thi công chống thấm sai quy trình",
            cause: "Bỏ qua xử lý bề mặt, chỉ quét 1 lớp",
            consequence: "Thấm dột sau vài tháng, hư hại nội thất",
            solution: "Làm sạch bề mặt, thi công đủ 3 lớp, test ngâm 48-72h",
            icon: "fa-tint"
        },
        {
            title: "Đấu nối điện nước không đúng kỹ thuật",
            cause: "Không theo bản vẽ M&E, nối thủ công",
            consequence: "Rò rỉ, chập cháy, mất an toàn",
            solution: "Có bản vẽ chi tiết, nghiệm thu bằng thiết bị",
            icon: "fa-bolt"
        },
        {
            title: "Phát sinh chi phí ngoài dự toán",
            cause: "Khảo sát không kỹ, hợp đồng không chi tiết",
            consequence: "Mất niềm tin, áp lực tài chính",
            solution: "Dự toán rõ ràng, có quỹ dự phòng 10-15%",
            icon: "fa-money-bill-wave"
        }
    ];

    // Benefits comparison
    const comparisonData = [
        {
            criteria: "Chi phí",
            selfRenovation: "Ban đầu có thể rẻ hơn",
            professional: "Tối ưu dài hạn, hạn chế phát sinh"
        },
        {
            criteria: "Thời gian",
            selfRenovation: "Kéo dài do thiếu kinh nghiệm",
            professional: "Đảm bảo tiến độ theo hợp đồng"
        },
        {
            criteria: "Chất lượng",
            selfRenovation: "Khó kiểm soát, dễ sai kỹ thuật",
            professional: "Có kỹ sư, giám sát chuyên môn"
        },
        {
            criteria: "An toàn",
            selfRenovation: "Nguy cơ tai nạn cao",
            professional: "Biện pháp thi công & bảo hộ chuẩn"
        },
        {
            criteria: "Pháp lý",
            selfRenovation: "Không rõ ràng, dễ vi phạm",
            professional: "Có hồ sơ xin phép, hoàn công"
        },
        {
            criteria: "Bảo hành",
            selfRenovation: "Không có",
            professional: "Cam kết bảo hành, sửa lỗi miễn phí"
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Bao lâu thì nên cải tạo nhà?",
            answer: "Thông thường 10-15 năm, hoặc khi xuống cấp (thấm dột, nứt tường, hệ thống điện nước lỗi thời)."
        },
        {
            id: 2,
            question: "Cải tạo nhà có cần xin phép xây dựng?",
            answer: "Có, nếu thay đổi kết cấu, mặt tiền, nâng tầng. Các hạng mục nội thất, sửa chữa nhỏ thì không cần."
        },
        {
            id: 3,
            question: "Làm sao hạn chế chi phí phát sinh khi cải tạo?",
            answer: "Khảo sát kỹ hiện trạng, lập dự toán chi tiết, ký hợp đồng rõ ràng, có quỹ dự phòng 10-15%."
        },
        {
            id: 4,
            question: "Thời gian cải tạo nhà mất bao lâu?",
            answer: "Tùy quy mô: sửa nhỏ 1-2 tuần, cải tạo lớn 1-3 tháng."
        },
        {
            id: 5,
            question: "Có thể ở trong nhà khi đang cải tạo không?",
            answer: "Chỉ khi sửa chữa nhỏ. Nếu cải tạo lớn nên di dời để đảm bảo an toàn và chất lượng thi công."
        }
    ];

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏠 Thi Công Sửa Chữa Cải Tạo Nhà Ở</h1>
                            <p className="hero-subtitle">
                                Quy Trình Chuyên Nghiệp - An Toàn - Bền Vững
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">7</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">10-15</span>
                                    <span className="stat-label">Năm tuổi thọ</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Bảo hành</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <div className="intro-text">
                                <h2>Sửa chữa cải tạo nhà ở - Giải pháp nâng cấp không gian sống</h2>
                                <p>
                                    Sau một thời gian sử dụng, ngôi nhà của bạn có thể xuất hiện các vấn đề như
                                    <strong> thấm dột, nứt tường, hệ thống điện nước xuống cấp</strong>, hoặc
                                    đơn giản là không còn phù hợp với nhu cầu sinh hoạt hiện tại.
                                </p>
                                <p>
                                    <strong>Sửa chữa cải tạo nhà ở</strong> là giải pháp tối ưu giúp bạn có được
                                    không gian sống hoàn hảo mà không cần xây mới hoàn toàn, tiết kiệm chi phí
                                    và thời gian đáng kể.
                                </p>
                                <h3>Khi nào cần sửa chữa cải tạo nhà?</h3>
                                <ul className="role-list">
                                    <li>Ngôi nhà đã sử dụng từ 10-15 năm trở lên</li>
                                    <li>Xuất hiện thấm dột, nứt tường, sụt lún</li>
                                    <li>Hệ thống điện nước lỗi thời, không an toàn</li>
                                    <li>Không gian không còn phù hợp với nhu cầu gia đình</li>
                                    <li>Muốn nâng cấp thẩm mỹ và tăng giá trị bất động sản</li>
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='renovation' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981'/><stop offset='100%' style='stop-color:%23059669'/></linearGradient></defs><rect width='400' height='300' fill='url(%23renovation)'/><rect x='50' y='80' width='120' height='100' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='180' y='60' width='120' height='120' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='310' y='70' width='80' height='110' fill='rgba(255,255,255,0.9)' rx='8'/><polygon points='50,80 110,40 170,80' fill='rgba(16,185,129,0.8)'/><polygon points='180,60 240,20 300,60' fill='rgba(5,150,105,0.8)'/><circle cx='350' cy='50' r='15' fill='rgba(255,215,0,0.8)'/><rect x='70' y='120' width='80' height='4' fill='%2310b981'/><rect x='200' y='100' width='80' height='4' fill='%2310b981'/><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Sửa chữa cải tạo</text></svg>"
                                    alt="Sửa chữa cải tạo nhà ở"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Sửa Chữa Cải Tạo Chuyên Nghiệp</h2>
                            <p>7 bước thực hiện đảm bảo chất lượng và an toàn</p>
                        </div>

                        <div className="process-timeline">
                            {renovationProcess.map((step, index) => (
                                <div key={step.step} className="process-item">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-content">
                                        <div className="process-header">
                                            <div className="process-icon">
                                                <i className={`fas ${step.icon}`}></i>
                                            </div>
                                            <div className="process-title">
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                        <div className="process-details">
                                            <ul>
                                                {step.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Renovation Categories Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Hạng Mục Cải Tạo Chi Tiết</h2>
                            <p>Giải pháp chuyên sâu cho từng khu vực trong ngôi nhà</p>
                        </div>

                        <div className="benefits-grid">
                            {renovationCategories.map((category, index) => (
                                <Link key={category.id} to={category.href} className="benefit-card" style={{textDecoration: 'none', color: 'inherit'}}>
                                    <div className="benefit-icon" style={{background: category.color}}>
                                        <i className={`fas ${category.icon}`}></i>
                                    </div>
                                    <h3>{category.title}</h3>
                                    <p>{category.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Mistakes Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Lỗi Thường Gặp Khi Cải Tạo & Cách Khắc Phục</h2>
                            <p>Tránh những sai lầm tốn kém trong quá trình cải tạo</p>
                        </div>

                        <div className="benefits-grid">
                            {commonMistakes.map((mistake, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className={`fas ${mistake.icon}`}></i>
                                    </div>
                                    <h3>{mistake.title}</h3>
                                    <div style={{textAlign: 'left', fontSize: '14px', lineHeight: '1.5'}}>
                                        <p><strong>Nguyên nhân:</strong> {mistake.cause}</p>
                                        <p><strong>Hậu quả:</strong> {mistake.consequence}</p>
                                        <p><strong>Giải pháp:</strong> {mistake.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>So Sánh: Tự Sửa Chữa vs Thuê Đơn Vị Chuyên Nghiệp</h2>
                            <p>Lý do nên chọn đơn vị thi công chuyên nghiệp</p>
                        </div>

                        <div className="style-detail">
                            <div className="style-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23667eea'/><rect x='30' y='50' width='240' height='100' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='50' y='70' width='80' height='15' fill='%23ef4444' rx='2'/><rect x='140' y='70' width='80' height='15' fill='%2310b981' rx='2'/><rect x='50' y='95' width='60' height='15' fill='%23f59e0b' rx='2'/><rect x='140' y='95' width='100' height='15' fill='%2310b981' rx='2'/><rect x='50' y='120' width='70' height='15' fill='%23ef4444' rx='2'/><rect x='140' y='120' width='90' height='15' fill='%2310b981' rx='2'/><text x='90' y='45' text-anchor='middle' font-size='12' fill='white'>Tự làm vs Chuyên nghiệp</text><text x='90' y='170' text-anchor='middle' font-size='10' fill='white'>So sánh ưu nhược điểm</text></svg>"
                                    alt="So sánh tự sửa chữa vs chuyên nghiệp"
                                />
                            </div>
                            <div className="style-info">
                                <h3>Tại sao nên chọn đơn vị chuyên nghiệp?</h3>
                                <div className="style-features">
                                    {comparisonData.map((item, index) => (
                                        <div key={index} className="feature-group">
                                            <h4><i className="fas fa-balance-scale"></i> {item.criteria}</h4>
                                            <ul>
                                                <li style={{color: '#ef4444'}}>
                                                    <strong>Tự làm:</strong> {item.selfRenovation}
                                                </li>
                                                <li style={{color: '#10b981'}}>
                                                    <strong>Chuyên nghiệp:</strong> {item.professional}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Câu Hỏi Thường Gặp</h2>
                            <p>Giải đáp những thắc mắc phổ biến về cải tạo nhà ở</p>
                        </div>

                        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                            {faqData.map((faq) => (
                                <div key={faq.id} className="faq-item" style={{
                                    marginBottom: '16px',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: 'white'
                                }}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                        style={{
                                            width: '100%',
                                            padding: '20px',
                                            textAlign: 'left',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#1a202c',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <i className={`fas fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                                    </button>
                                    {activeFaq === faq.id && (
                                        <div className="faq-answer" style={{
                                            padding: '0 20px 20px',
                                            color: '#4a5568',
                                            lineHeight: '1.6'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Bắt Đầu Dự Án Cải Tạo Của Bạn</h2>
                            <p>
                                <strong>Sửa chữa cải tạo nhà ở</strong> cần có quy trình chuyên nghiệp và đội ngũ
                                có kinh nghiệm để đảm bảo an toàn, chất lượng và tiến độ. Với nhiều năm kinh nghiệm
                                trong lĩnh vực thi công, chúng tôi cam kết mang đến cho bạn <strong>giải pháp cải tạo
                                tối ưu - an toàn - bền vững</strong>.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <i className="fas fa-phone"></i>
                                    Tư vấn miễn phí: 0941 090 333
                                </button>
                                <button className="btn-secondary">
                                    <i className="fas fa-calculator"></i>
                                    Báo giá chi tiết
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default SuaChuaCaiTaoPage;
