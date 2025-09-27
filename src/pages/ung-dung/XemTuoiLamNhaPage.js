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
    const resultRef = useRef(null);

    const months = Array.from({ length: 12 }, (_, i) => ({
        value: String(i + 1),
        label: `Tháng ${i + 1}`
    }));

    const days = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: `Ngày ${i + 1}`
    }));

    const constructionTypes = [
        { value: 'nha_o', label: 'Nhà ở' },
        { value: 'biet_thu', label: 'Biệt thự' },
        { value: 'van_phong', label: 'Văn phòng' },
        { value: 'cua_hang', label: 'Cửa hàng' },
        { value: 'nha_xuong', label: 'Nhà xưởng' },
        { value: 'nha_tho', label: 'Nhà thờ họ' }
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
                    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <Header />

            {/* Main content with original styling */}
            <div style={{ marginTop: '80px', padding: '40px 0' }}>
                <div className="container">
                    {/* Hero Section */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '1rem'
                        }}>
                            Xem Tuổi Làm Nhà Phong Thủy
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#64748b',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Tư vấn chuyên sâu về thời điểm tốt nhất để khởi công xây dựng,
                            phân tích Tam Tai, Kim Lâu, Hoang Ốc và đưa ra lời khuyên phong thủy chính xác
                        </p>
                    </div>

                    {/* Form Section */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'white',
                        borderRadius: '20px',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                        padding: '2.5rem',
                        marginBottom: '3rem'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{
                                fontSize: '1.8rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '0.5rem'
                            }}>
                                Thông Tin Tư Vấn
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1rem' }}>
                                Vui lòng cung cấp thông tin chính xác để nhận được kết quả tư vấn tốt nhất
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                {/* Năm sinh */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Năm sinh *
                                    </label>
                                    <input
                                        type="number"
                                        name="namSinh"
                                        value={formData.namSinh}
                                        onChange={handleInputChange}
                                        placeholder="VD: 1990"
                                        required
                                        min="1900"
                                        max="2024"
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                    />
                                </div>

                                {/* Giới tính */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Giới tính
                                    </label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            background: formData.gioiTinh === 'nam' ? '#667eea' : 'white',
                                            color: formData.gioiTinh === 'nam' ? 'white' : '#4a5568'
                                        }}>
                                            <input
                                                type="radio"
                                                name="gioiTinh"
                                                value="nam"
                                                checked={formData.gioiTinh === 'nam'}
                                                onChange={handleInputChange}
                                                style={{ display: 'none' }}
                                            />
                                            <i className="fas fa-mars" style={{ marginRight: '0.5rem' }}></i>
                                            Nam
                                        </label>

                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            background: formData.gioiTinh === 'nu' ? '#667eea' : 'white',
                                            color: formData.gioiTinh === 'nu' ? 'white' : '#4a5568'
                                        }}>
                                            <input
                                                type="radio"
                                                name="gioiTinh"
                                                value="nu"
                                                checked={formData.gioiTinh === 'nu'}
                                                onChange={handleInputChange}
                                                style={{ display: 'none' }}
                                            />
                                            <i className="fas fa-venus" style={{ marginRight: '0.5rem' }}></i>
                                            Nữ
                                        </label>
                                    </div>
                                </div>

                                {/* Tháng sinh */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Tháng sinh
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

                                {/* Ngày sinh */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Ngày sinh
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

                                {/* Năm làm nhà */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Năm dự định làm nhà *
                                    </label>
                                    <input
                                        type="number"
                                        name="namLamNha"
                                        value={formData.namLamNha}
                                        onChange={handleInputChange}
                                        placeholder="VD: 2025"
                                        required
                                        min={new Date().getFullYear()}
                                        max={new Date().getFullYear() + 10}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                    />
                                </div>

                                {/* Loại công trình */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
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
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        margin: '0 auto',
                                        minWidth: '200px'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!loading) {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!loading) {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Đang phân tích...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-search"></i>
                                            Xem Tuổi Làm Nhà
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Result Section */}
                    {result && (
                        <div ref={resultRef} style={{
                            maxWidth: '900px',
                            margin: '0 auto 3rem auto',
                            background: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                color: 'white',
                                padding: '1.5rem 2rem',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '1.5rem',
                                    fontWeight: '600'
                                }}>
                                    🔮 Kết Quả Tư Vấn Phong Thủy
                                </h3>
                                <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
                                    Phân tích chi tiết dựa trên thông tin bạn cung cấp
                                </p>
                            </div>
                            <div style={{
                                padding: '2rem',
                                lineHeight: '1.8',
                                color: '#2d3748'
                            }}>
                                <div
                                    style={{
                                        whiteSpace: 'pre-line',
                                        fontSize: '1rem'
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: result.replace(/\n/g, '<br>')
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: '3rem'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem'
                            }}>
                                Câu Hỏi Thường Gặp
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1rem' }}>
                                Những thắc mắc phổ biến về việc xem tuổi làm nhà
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                        overflow: 'hidden',
                                        border: activeFaq === index ? '2px solid #667eea' : '2px solid transparent'
                                    }}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            width: '100%',
                                            padding: '1.5rem',
                                            background: activeFaq === index ? '#667eea' : 'white',
                                            color: activeFaq === index ? 'white' : '#2d3748',
                                            border: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                    </button>

                                    {activeFaq === index && (
                                        <div style={{
                                            padding: '1.5rem',
                                            background: '#f8f9fa',
                                            borderTop: '1px solid #e2e8f0'
                                        }}>
                                            <p style={{
                                                margin: 0,
                                                color: '#4a5568',
                                                lineHeight: '1.6'
                                            }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <CTAContent />
                </div>
            </div>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default XemTuoiLamNhaPage;