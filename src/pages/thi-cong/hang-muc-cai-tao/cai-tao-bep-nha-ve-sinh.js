// src/pages/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import FloatButtons from '../../../components/FloatButtons/FloatButtons';
import '../../thiet-ke/ThietKePage.css';
import CTAContent from '../../../components/CTAContent/CTAContent';

const CaiTaoBepNhaVeSinhPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    // Why renovate kitchen and bathroom
    const renovationReasons = [
        {
            title: "Không gian sử dụng nhiều nhất",
            description: "Bếp và WC là 2 khu vực được sử dụng thường xuyên nhất trong gia đình",
            icon: "fa-clock",
            color: "#667eea"
        },
        {
            title: "Dễ xuống cấp do ẩm ướt",
            description: "Môi trường ẩm ướt gây thấm dột, nấm mốc, mất vệ sinh",
            icon: "fa-tint",
            color: "#ef4444"
        },
        {
            title: "Hệ thống điện nước xuống cấp",
            description: "Đường ống, dây điện cũ có nguy cơ rò rỉ, chập cháy",
            icon: "fa-bolt",
            color: "#f59e0b"
        },
        {
            title: "Thiết kế lỗi thời",
            description: "Không đáp ứng nhu cầu sinh hoạt hiện đại",
            icon: "fa-home",
            color: "#10b981"
        }
    ];

    // Renovation process for kitchen and bathroom
    const renovationProcess = [
        {
            step: 1,
            title: "Khảo sát hiện trạng",
            description: "Kiểm tra toàn diện tình trạng bếp và WC",
            details: [
                "Kiểm tra hệ thống cấp thoát nước",
                "Đánh giá tình trạng chống thấm",
                "Kiểm tra kết cấu sàn, tường",
                "Xác định nhu cầu cải tạo"
            ],
            duration: "1 ngày",
            icon: "fa-search"
        },
        {
            step: 2,
            title: "Thiết kế cải tạo",
            description: "Lập phương án thiết kế tối ưu",
            details: [
                "Bố trí công năng hợp lý",
                "Lựa chọn vật liệu phù hợp môi trường ẩm ướt",
                "Thiết kế hệ thống thông gió",
                "Phối cảnh 3D để khách hàng dễ hình dung"
            ],
            duration: "3-5 ngày",
            icon: "fa-drafting-compass"
        },
        {
            step: 3,
            title: "Thi công chống thấm",
            description: "Xử lý chống thấm theo quy trình 3 lớp",
            details: [
                "Làm sạch bề mặt, xử lý vết nứt",
                "Tạo dốc thoát nước hợp lý",
                "Thi công 3 lớp chống thấm chuẩn kỹ thuật",
                "Test ngâm nước 48-72h"
            ],
            duration: "3-5 ngày",
            icon: "fa-shield-alt"
        },
        {
            step: 4,
            title: "Thi công điện - nước",
            description: "Lắp đặt hệ thống M&E mới",
            details: [
                "Đi ống âm tường/sàn theo thiết kế",
                "Lắp đặt thiết bị, van khóa chất lượng",
                "Test áp lực ≥ 2 bar",
                "Đi dây điện an toàn, có aptomat riêng"
            ],
            duration: "3-7 ngày",
            icon: "fa-tools"
        },
        {
            step: 5,
            title: "Hoàn thiện",
            description: "Ốp lát và lắp đặt thiết bị",
            details: [
                "Ốp lát gạch chống trơn, chống ẩm",
                "Lắp đặt tủ bếp, thiết bị vệ sinh",
                "Sơn chống thấm, chống nấm mốc",
                "Lắp hệ thống thông gió, hút mùi"
            ],
            duration: "5-10 ngày",
            icon: "fa-paint-brush"
        },
        {
            step: 6,
            title: "Nghiệm thu & bàn giao",
            description: "Kiểm tra chất lượng và bàn giao",
            details: [
                "Kiểm tra chống thấm, điện nước",
                "Test thiết bị, van khóa",
                "Kiểm tra thẩm mỹ hoàn thiện",
                "Bàn giao hồ sơ bảo hành"
            ],
            duration: "1 ngày",
            icon: "fa-clipboard-check"
        }
    ];

    // Common mistakes in kitchen and bathroom renovation
    const commonMistakes = [
        {
            title: "Chống thấm sai quy trình",
            cause: "Bỏ qua xử lý bề mặt, chỉ quét 1 lớp",
            consequence: "Thấm dột sau vài tháng, hư hại nội thất",
            solution: "Làm sạch bề mặt, tạo độ dốc, test ngâm nước ≥ 48h",
            icon: "fa-tint"
        },
        {
            title: "Ống nước đi sai kỹ thuật",
            cause: "Lắp ống thoát chéo, gây tắc nghẽn",
            consequence: "Nước thoát chậm, có mùi hôi",
            solution: "Bố trí ống có độ dốc chuẩn, dễ bảo trì",
            icon: "fa-wrench"
        },
        {
            title: "Ổ điện đặt sai vị trí",
            cause: "Đặt quá thấp, không có nắp chống nước",
            consequence: "Nguy hiểm khi tiếp xúc với nước",
            solution: "Đặt ổ cao ≥ 30-40cm, có nắp chống nước",
            icon: "fa-plug"
        },
        {
            title: "Gạch lát kém chất lượng",
            cause: "Chọn gạch không chống trơn, không chống ẩm",
            consequence: "Bong tróc, trơn trượt nguy hiểm",
            solution: "Chọn gạch chống trơn, chống ẩm chuyên dụng",
            icon: "fa-th-large"
        },
        {
            title: "Thông gió kém",
            cause: "Không lắp quạt hút, cửa sổ quá nhỏ",
            consequence: "Mùi hôi, nấm mốc, không khí ô nhiễm",
            solution: "Lắp quạt hút gió, cửa sổ hoặc giếng trời",
            icon: "fa-fan"
        }
    ];

    // Customer pain points
    const painPoints = [
        {
            title: "Ngại đập phá, bụi bẩn",
            description: "Ảnh hưởng sinh hoạt gia đình",
            solution: "Thi công nhanh, dọn dẹp sạch sẽ hàng ngày",
            icon: "fa-hammer"
        },
        {
            title: "Chi phí phát sinh",
            description: "Do thay toàn bộ điện-nước",
            solution: "Dự toán minh bạch, báo trước chi phí phát sinh",
            icon: "fa-money-bill-wave"
        },
        {
            title: "Lo ngại thấm dột tái diễn",
            description: "Sau vài tháng lại bị thấm",
            solution: "Quy trình chống thấm chuẩn, bảo hành lâu dài",
            icon: "fa-shield-alt"
        },
        {
            title: "Không gian vẫn bí bách",
            description: "Dù đã sửa nhưng không khải hoang",
            solution: "Thiết kế tối ưu, cải thiện thông gió ánh sáng",
            icon: "fa-compress"
        }
    ];

    // Optimal solutions
    const optimalSolutions = [
        {
            title: "Vật liệu chống thấm chất lượng cao",
            description: "Sika, Intoc, Kova - uy tín trên thị trường",
            icon: "fa-certificate",
            color: "#667eea"
        },
        {
            title: "Thiết bị vệ sinh tiết kiệm nước",
            description: "Bền bỉ, hiện đại, thân thiện môi trường",
            icon: "fa-leaf",
            color: "#10b981"
        },
        {
            title: "Tủ bếp thông minh",
            description: "Tận dụng tối đa diện tích, nhiều ngăn chứa",
            icon: "fa-cube",
            color: "#f59e0b"
        },
        {
            title: "Tăng ánh sáng tự nhiên & thông gió",
            description: "Cửa sổ, vách kính, hệ thống hút gió hiệu quả",
            icon: "fa-lightbulb",
            color: "#8b5cf6"
        }
    ];

    // Quality checklist for kitchen and bathroom renovation
    const qualityChecklist = [
        {
            category: "Chống thấm",
            icon: "fa-tint",
            color: "#06b6d4",
            items: [
                "Ngâm thử sàn WC ≥ 48h, không thấm dột",
                "Tường không có vết ẩm, loang nước",
                "Góc tường, mối nối được xử lý kín đáo"
            ]
        },
        {
            category: "Hệ thống nước",
            icon: "fa-faucet",
            color: "#10b981",
            items: [
                "Hệ thống cấp thoát nước hoạt động ổn định",
                "Không rò rỉ tại các mối nối",
                "Áp lực nước đạt chuẩn ≥ 2 bar"
            ]
        },
        {
            category: "An toàn điện",
            icon: "fa-bolt",
            color: "#f59e0b",
            items: [
                "Ổ điện an toàn, có nắp chống nước",
                "Aptomat riêng cho khu vực ẩm ướt",
                "Đường dây có hệ thống tiếp đất"
            ]
        },
        {
            category: "Hoàn thiện",
            icon: "fa-check-circle",
            color: "#8b5cf6",
            items: [
                "Sàn lát phẳng, gạch chống trơn, mạch đều",
                "Thiết bị vận hành tốt (chậu, bồn cầu, vòi sen...)",
                "Hệ thống thông gió hoạt động hiệu quả"
            ]
        }
    ];

    // FAQ data
    const faqData = [
        {
            id: 1,
            question: "Cải tạo bếp & WC có cần đập phá toàn bộ không?",
            answer: "Không nhất thiết. Có thể giữ nguyên kết cấu, chỉ thay lớp hoàn thiện và hệ thống điện-nước."
        },
        {
            id: 2,
            question: "Chi phí cải tạo bếp & WC khoảng bao nhiều?",
            answer: "Dao động 30-150 triệu, tùy diện tích và vật liệu sử dụng."
        },
        {
            id: 3,
            question: "Làm sao để chống thấm bền lâu cho WC?",
            answer: "Thi công đúng quy trình: xử lý nền → tạo dốc → quét chống thấm nhiều lớp → thử ngâm nước."
        },
        {
            id: 4,
            question: "Bao lâu nên cải tạo bếp & WC một lần?",
            answer: "Khoảng 10-15 năm, hoặc sớm hơn nếu xuống cấp nặng."
        },
        {
            id: 5,
            question: "Thời gian cải tạo bếp & WC mất bao lâu?",
            answer: "Thường từ 2-3 tuần, tùy quy mô và mức độ cải tạo."
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
                            <h1>🚿 Cải Tạo Bếp Và Nhà Vệ Sinh</h1>
                            <p className="hero-subtitle">
                                Nâng Cấp Không Gian Tiện Nghi & An Toàn
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">6</span>
                                    <span className="stat-label">Bước thực hiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">2-3</span>
                                    <span className="stat-label">Tuần hoàn thiện</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">10-15</span>
                                    <span className="stat-label">Năm tuổi thọ</span>
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
                                <h2>Vì sao cần cải tạo bếp & nhà vệ sinh?</h2>
                                <p>
                                    <strong>Bếp và nhà vệ sinh</strong> là hai không gian được sử dụng nhiều nhất
                                    trong gia đình, đồng thời cũng dễ xuống cấp nhất do đặc thù môi trường
                                    <strong> ẩm ướt, nhiều hơi nước</strong>.
                                </p>
                                <p>
                                    Sau một thời gian sử dụng, các vấn đề thường gặp như <strong>thấm dột,
                                    nấm mốc, hệ thống điện nước xuống cấp</strong> sẽ ảnh hưởng đến sức khỏe
                                    và chất lượng cuộc sống của gia đình.
                                </p>
                                <p>
                                    <strong>Cải tạo đúng cách</strong> sẽ giúp tối ưu công năng, nâng cao
                                    thẩm mỹ và tăng giá trị ngôi nhà một cách đáng kể.
                                </p>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='kitchen-bath' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2306b6d4'/><stop offset='100%' style='stop-color:%230284c7'/></linearGradient></defs><rect width='400' height='300' fill='url(%23kitchen-bath)'/><rect x='60' y='80' width='120' height='100' fill='rgba(255,255,255,0.95)' rx='8'/><rect x='220' y='70' width='120' height='110' fill='rgba(255,255,255,0.9)' rx='8'/><rect x='80' y='120' width='30' height='40' fill='%2306b6d4' rx='4'/><rect x='120' y='110' width='40' height='20' fill='%230284c7' rx='4'/><rect x='240' y='100' width='25' height='40' fill='%2306b6d4' rx='4'/><rect x='280' y='90' width='40' height='25' fill='%230284c7' rx='4'/><circle cx='95' cy='105' r='8' fill='%23fbbf24'/><circle cx='255' cy='125' r='6' fill='%23fbbf24'/><rect x='90' y='140' width='50' height='4' fill='%2306b6d4'/><rect x='250' y='135' width='50' height='4' fill='%2306b6d4'/><text x='120' y='60' text-anchor='middle' font-size='12' fill='white' font-weight='bold'>Bếp</text><text x='280' y='50' text-anchor='middle' font-size='12' fill='white' font-weight='bold'>WC</text><text x='200' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Cải tạo bếp & WC</text></svg>"
                                    alt="Cải tạo bếp và nhà vệ sinh"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasons Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lý Do Cần Cải Tạo Bếp & Nhà Vệ Sinh</h2>
                            <p>Những vấn đề thường gặp cần được khắc phục</p>
                        </div>

                        <div className="benefits-grid">
                            {renovationReasons.map((reason, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: reason.color}}>
                                        <i className={`fas ${reason.icon}`}></i>
                                    </div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Cải Tạo Bếp & Nhà Vệ Sinh Chuẩn Kỹ Thuật</h2>
                            <p>6 bước thực hiện chuyên nghiệp đảm bảo chất lượng</p>
                        </div>

                        <div className="process-timeline">
                            {renovationProcess.map((step) => (
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
                                                <span className="process-duration">
                                                    <i className="far fa-clock"></i> {step.duration}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="process-details">
                                            <ul>
                                                {step.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Mistakes Section */}
                <section className="intro-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Lỗi Thường Gặp & Biện Pháp Khắc Phục</h2>
                            <p>Tránh những sai lầm phổ biến trong cải tạo bếp và WC</p>
                        </div>

                        <div className="benefits-grid">
                            {commonMistakes.map((mistake, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#ef4444'}}>
                                        <i className={`fas ${mistake.icon}`}></i>
                                    </div>
                                    <h3>{mistake.title}</h3>
                                    <div style={{textAlign: 'left', fontSize: '13px', lineHeight: '1.4'}}>
                                        <p className="issue-cause">
                                            <strong>Nguyên nhân:</strong> {mistake.cause}
                                        </p>
                                        <p className="issue-solution">
                                            <strong>Hậu quả:</strong> {mistake.consequence}
                                        </p>
                                        <p className="issue-prevention">
                                            <strong>Giải pháp:</strong> {mistake.solution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pain Points Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Nỗi Đau Khách Hàng Khi Cải Tạo Bếp & Nhà Vệ Sinh</h2>
                            <p>Những lo lắng phổ biến và giải pháp của chúng tôi</p>
                        </div>

                        <div className="benefits-grid">
                            {painPoints.map((point, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: '#dc2626'}}>
                                        <i className={`fas ${point.icon}`}></i>
                                    </div>
                                    <h3 style={{color: '#dc2626'}}>{point.title}</h3>
                                    <p style={{marginBottom: '12px'}}>
                                        <strong>Nỗi lo:</strong> {point.description}
                                    </p>
                                    <p style={{color: '#059669'}}>
                                        <strong>Giải pháp:</strong> {point.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Optimal Solutions Section */}
                <section className="benefits-section" style={{background: '#f7fafc'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Giải Pháp Tối Ưu</h2>
                            <p>Những lựa chọn thông minh cho bếp và nhà vệ sinh hoàn hảo</p>
                        </div>

                        <div className="benefits-grid">
                            {optimalSolutions.map((solution, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: solution.color}}>
                                        <i className={`fas ${solution.icon}`}></i>
                                    </div>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Checklist Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Checklist Nghiệm Thu Cải Tạo Bếp & Nhà Vệ Sinh</h2>
                            <p>Danh sách kiểm tra chất lượng trước khi bàn giao</p>
                        </div>

                        <div className="benefits-grid">
                            {qualityChecklist.map((category, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon" style={{background: category.color}}>
                                        <i className={`fas ${category.icon}`}></i>
                                    </div>
                                    <h3>{category.category}</h3>
                                    <div style={{textAlign: 'left'}}>
                                        <ul style={{listStyle: 'none', padding: 0, fontSize: '14px'}}>
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex} style={{
                                                    marginBottom: '8px',
                                                    paddingLeft: '20px',
                                                    position: 'relative'
                                                }}>
                                                    <i className="fas fa-check" style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: '2px',
                                                        color: '#10b981',
                                                        fontSize: '12px'
                                                    }}></i>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Câu Hỏi Thường Gặp (FAQ)</h2>
                            <p>Giải đáp những thắc mắc phổ biến về cải tạo bếp và WC</p>
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
                <CTAContent />
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default CaiTaoBepNhaVeSinhPage;