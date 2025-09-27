// src/pages/ung-dung/XemTuoiLamNhaPage.js
import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
import GeminiService from './GeminiService';
import '../../styles/CommonStyles.css';

const XemTuoiLamNhaPage = () => {
    const [formData, setFormData] = useState({
        namSinh: '',
        thangSinh: '1',
        ngaySinh: '1',
        gioiTinh: 'nam',
        namLamNha: '',
        loaiCongTrinh: 'nha_o'
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const [activeFaq, setActiveFaq] = useState(null);

    const months = Array.from({ length: 12 }, (_, i) => ({
        value: String(i + 1),
        label: `Tháng ${i + 1}`
    }));

    const days = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: `Ngày ${i + 1}`
    }));

    const constructionTypes = [
        { value: 'nha_o', label: '🏠 Nhà ở', icon: '🏠' },
        { value: 'biet_thu', label: '🏛️ Biệt thự', icon: '🏛️' },
        { value: 'van_phong', label: '🏢 Văn phòng', icon: '🏢' },
        { value: 'cua_hang', label: '🏪 Cửa hàng', icon: '🏪' },
        { value: 'nha_xuong', label: '🏭 Nhà xưởng', icon: '🏭' },
        { value: 'nha_tho', label: '⛩️ Nhà thờ họ', icon: '⛩️' }
    ];

    const faqData = [
        {
            question: "Tại sao cần xem tuổi trước khi làm nhà?",
            answer: "Trong phong thủy, việc xem tuổi giúp xác định thời điểm tốt nhất để khởi công, tránh những năm xung khắc có thể gây bất lợi cho gia chủ và công trình."
        },
        {
            question: "Tam Tai, Kim Lâu, Hoang Ốc là gì?",
            answer: "Đây là những yếu tố quan trọng trong phong thủy: Tam Tai (3 năm xấu liên tiếp), Kim Lâu (năm gặp khó khăn), Hoang Ốc (năm hoang vắng). Cần tránh hoặc có biện pháp hóa giải."
        },
        {
            question: "Làm thế nào để chọn ngày giờ tốt động thổ?",
            answer: "Cần xem xét nhiều yếu tố: tuổi gia chủ, hướng nhà, ngày Hoàng Đạo, giờ tốt, và tránh các ngày xấu như ngày Hắc Đạo, ngày phạm Tam Tai."
        },
        {
            question: "Nếu năm hiện tại không tốt thì phải làm sao?",
            answer: "Có thể: 1) Hoãn sang năm tốt hơn, 2) Mượn tuổi người khác để làm thủ tục, 3) Làm lễ hóa giải, 4) Chọn tháng và ngày tốt trong năm để giảm thiểu tác hại."
        },
        {
            question: "Chi phí tư vấn phong thủy làm nhà thường là bao nhiêu?",
            answer: "Chi phí tùy thuộc vào mức độ tư vấn: xem tuổi cơ bản (500k-1tr), tư vấn toàn diện (2-5tr), thiết kế theo phong thủy (5-20tr). Nên chọn thầy có uy tín và kinh nghiệm."
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.namSinh || !formData.namLamNha) {
            alert('Vui lòng nhập đầy đủ năm sinh và năm dự định làm nhà');
            return;
        }

        const currentYear = new Date().getFullYear();
        if (formData.namSinh < 1920 || formData.namSinh > currentYear) {
            alert('Năm sinh không hợp lệ');
            return;
        }

        if (formData.namLamNha < currentYear || formData.namLamNha > currentYear + 10) {
            alert('Năm làm nhà không hợp lệ');
            return;
        }

        setLoading(true);
        setResult('');

        try {
            const response = await GeminiService.getConsultation('xem-tuoi-lam-nha', formData);

            if (response.success) {
                setResult(response.data);
                setTimeout(() => {
                    document.querySelector('#result-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                setResult(response.error || 'Đã xảy ra lỗi khi tư vấn. Vui lòng thử lại sau.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResult('Đã xảy ra lỗi kết nối. Vui lòng kiểm tra kết nối internet và thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <>
            <Header />
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
                {/* Hero Section */}
                <section className="section section-gradient">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '0.5rem'
                            }}>🏠✨</div>
                            <h1 style={{
                                color: '#2d3748',
                                fontSize: '2rem',
                                fontWeight: '700',
                                margin: '0 0 0.5rem 0',
                                lineHeight: '1.2'
                            }}>
                                <i className="fas fa-calendar-alt" style={{ marginRight: '0.5rem', color: '#667eea' }}></i>
                                Xem Tuổi Làm Nhà
                            </h1>
                            <p style={{
                                color: '#4a5568',
                                fontSize: '1rem',
                                margin: '0',
                                lineHeight: '1.4'
                            }}>
                                Tra cứu tuổi phong thủy để chọn thời điểm tốt nhất xây dựng, cải tạo nhà ở
                            </p>
                        </div>

                        {/* Enhanced Form */}
                        <div style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                            border: '2px solid #f0f9ff'
                        }}>
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '1.5rem',
                                padding: '0.8rem',
                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                borderRadius: '12px',
                                color: 'white'
                            }}>
                                <i className="fas fa-user-clock" style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}></i>
                                <h3 style={{ margin: '0', fontSize: '1.1rem', color: 'white' }}>Nhập thông tin của bạn</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* Birth Date Section - Same Row */}
                                <div style={{
                                    marginBottom: '1.5rem',
                                    padding: '1.2rem',
                                    background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                                    borderRadius: '12px',
                                    border: '2px solid #22c55e'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.8rem',
                                        color: '#15803d'
                                    }}>
                                        <i className="fas fa-birthday-cake" style={{ fontSize: '1rem', marginRight: '0.5rem' }}></i>
                                        <span style={{ fontWeight: '600', fontSize: '1rem' }}>Thông tin ngày sinh</span>
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        gap: '1rem'
                                    }}>
                                        <div>
                                            <label style={{
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: '600',
                                                color: '#2d3748'
                                            }}>
                                                <i className="fas fa-calendar-day" style={{ marginRight: '0.25rem', color: '#667eea' }}></i>
                                                Ngày
                                            </label>
                                            <select
                                                name="ngaySinh"
                                                value={formData.ngaySinh}
                                                onChange={handleInputChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    border: '2px solid #e2e8f0',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem',
                                                    outline: 'none',
                                                    background: 'white',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {days.map(day => (
                                                    <option key={day.value} value={day.value}>
                                                        {day.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label style={{
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: '600',
                                                color: '#2d3748'
                                            }}>
                                                <i className="fas fa-calendar" style={{ marginRight: '0.25rem', color: '#667eea' }}></i>
                                                Tháng
                                            </label>
                                            <select
                                                name="thangSinh"
                                                value={formData.thangSinh}
                                                onChange={handleInputChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    border: '2px solid #e2e8f0',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem',
                                                    outline: 'none',
                                                    background: 'white',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {months.map(month => (
                                                    <option key={month.value} value={month.value}>
                                                        {month.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label style={{
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: '600',
                                                color: '#2d3748'
                                            }}>
                                                <i className="fas fa-calendar-alt" style={{ marginRight: '0.25rem', color: '#667eea' }}></i>
                                                Năm <span style={{ color: '#dc2626' }}>*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="namSinh"
                                                value={formData.namSinh}
                                                onChange={handleInputChange}
                                                placeholder="Ví dụ: 1990"
                                                min="1900"
                                                max="2025"
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    border: '2px solid #e2e8f0',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem',
                                                    outline: 'none',
                                                    background: 'white'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Gender Section - Second Row */}
                                <div style={{
                                    marginBottom: '1.5rem',
                                    padding: '1.2rem',
                                    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                                    borderRadius: '12px',
                                    border: '2px solid #0ea5e9'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.8rem',
                                        color: '#0284c7'
                                    }}>
                                        <i className="fas fa-venus-mars" style={{ fontSize: '1rem', marginRight: '0.5rem' }}></i>
                                        <span style={{ fontWeight: '600', fontSize: '1rem' }}>Giới tính</span>
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '1rem'
                                    }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            border: `2px solid ${formData.gioiTinh === 'nam' ? '#3b82f6' : '#e2e8f0'}`,
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            background: formData.gioiTinh === 'nam' ? '#eff6ff' : 'white',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <input
                                                type="radio"
                                                name="gioiTinh"
                                                value="nam"
                                                checked={formData.gioiTinh === 'nam'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '0.5rem' }}
                                            />
                                            <i className="fas fa-mars" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i>
                                            Nam
                                        </label>

                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            border: `2px solid ${formData.gioiTinh === 'nu' ? '#ec4899' : '#e2e8f0'}`,
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            background: formData.gioiTinh === 'nu' ? '#fdf2f8' : 'white',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <input
                                                type="radio"
                                                name="gioiTinh"
                                                value="nu"
                                                checked={formData.gioiTinh === 'nu'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '0.5rem' }}
                                            />
                                            <i className="fas fa-venus" style={{ marginRight: '0.5rem', color: '#ec4899' }}></i>
                                            Nữ
                                        </label>
                                    </div>
                                </div>

                                {/* Construction Year */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748',
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="fas fa-hammer" style={{ marginRight: '0.5rem', color: '#f59e0b' }}></i>
                                        Năm dự định làm nhà <span style={{ color: '#dc2626' }}>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="namLamNha"
                                        value={formData.namLamNha}
                                        onChange={handleInputChange}
                                        placeholder="Ví dụ: 2024"
                                        min="2024"
                                        max="2030"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            background: 'white'
                                        }}
                                    />
                                </div>

                                {/* Construction Type */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748',
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="fas fa-building" style={{ marginRight: '0.5rem', color: '#10b981' }}></i>
                                        Loại công trình
                                    </label>
                                    <select
                                        name="loaiCongTrinh"
                                        value={formData.loaiCongTrinh}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            background: 'white',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {constructionTypes.map(type => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{
                                            background: loading ? '#94a3b8' : 'linear-gradient(135deg, #667eea, #764ba2)',
                                            color: 'white',
                                            padding: '1rem 2rem',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            margin: '0 auto'
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i>
                                                Đang xem tuổi...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-search"></i>
                                                Xem tuổi làm nhà
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Result Section */}
                        {result && (
                            <div id="result-section" style={{
                                maxWidth: '800px',
                                margin: '3rem auto 0',
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                border: '2px solid #10b981'
                            }}>
                                <div style={{
                                    textAlign: 'center',
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    borderRadius: '12px',
                                    color: 'white'
                                }}>
                                    <i className="fas fa-scroll" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></i>
                                    <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Kết quả xem tuổi</h3>
                                </div>

                                <div style={{
                                    color: '#2d3748',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-wrap'
                                }} dangerouslySetInnerHTML={{ __html: result }}>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section section-alt">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{
                                color: '#2d3748',
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                margin: '0 0 0.5rem 0',
                                lineHeight: '1.2'
                            }}>
                                <i className="fas fa-question-circle" style={{ marginRight: '0.5rem', color: '#667eea' }}></i>
                                Câu hỏi thường gặp
                            </h2>
                            <p style={{
                                color: '#4a5568',
                                fontSize: '1rem',
                                margin: '0',
                                lineHeight: '1.4'
                            }}>
                                Những thắc mắc phổ biến về việc xem tuổi làm nhà
                            </p>
                        </div>

                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {faqData.map((faq, index) => (
                                <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                                    <div className="faq-question" onClick={() => toggleFaq(index)}>
                                        <h4>{faq.question}</h4>
                                        <i className={`fas ${activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} faq-icon`}></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTAContent />
            </main>
            <Footer />
            <FloatButtons />
        </>
    );
};

export default XemTuoiLamNhaPage;