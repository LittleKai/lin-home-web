// src/pages/ung-dung/HuongNhaHopTuoiPage.js
import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
import GeminiService from './GeminiService';
import '../../styles/CommonStyles.css';

const HuongNhaHopTuoiPage = () => {
    const [formData, setFormData] = useState({
        namSinh: '',
        gioiTinh: 'nam',
        thangSinh: '1',
        ngaySinh: '1',
        huongNha: ''
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

    const directions = [
        { value: 'Đông', label: 'Đông - Hướng mặt trời mọc 🌅' },
        { value: 'Tây', label: 'Tây - Hướng mặt trời lặn 🌇' },
        { value: 'Nam', label: 'Nam - Hướng ấm áp, đón nắng ☀️' },
        { value: 'Bắc', label: 'Bắc - Hướng mát mẻ, ổn định ❄️' },
        { value: 'Đông Bắc', label: 'Đông Bắc - Hướng phụ, thích hợp văn phòng 🧭' },
        { value: 'Đông Nam', label: 'Đông Nam - Hướng tài lộc, thịnh vượng 💰' },
        { value: 'Tây Bắc', label: 'Tây Bắc - Hướng quyền lực, uy tín 👑' },
        { value: 'Tây Nam', label: 'Tây Nam - Hướng gia đình, hạnh phúc ❤️' }
    ];

    const faqData = [
        {
            question: "Làm thế nào để xác định hướng nhà chính xác?",
            answer: "Sử dụng la bàn hoặc ứng dụng mobile để đo hướng cửa chính. Đứng trong nhà, hướng ra cửa chính để xác định hướng nhà. Nên đo nhiều lần để đảm bảo chính xác."
        },
        {
            question: "Hướng nhà có ảnh hưởng như thế nào đến cuộc sống?",
            answer: "Hướng nhà ảnh hưởng đến năng lượng, sức khỏe, tài vận và các mối quan hệ trong gia đình. Hướng hợp mệnh sẽ mang lại may mắn, hướng xung khắc có thể gây khó khăn."
        },
        {
            question: "Nếu hướng nhà không hợp tuổi thì phải làm sao?",
            answer: "Có thể hóa giải bằng cách: thay đổi cửa chính, sử dụng màu sắc và vật phẩm phong thủy phù hợp, bố trí nội thất hợp lý, hoặc tham khảo chuyên gia để có giải pháp cụ thể."
        },
        {
            question: "Có nên thay đổi hướng cửa chính không?",
            answer: "Chỉ nên thay đổi khi thực sự cần thiết và có điều kiện. Thường thì việc hóa giải bằng phong thủy nội thất sẽ hiệu quả và tiết kiệm hơn việc sửa đổi kiến trúc."
        },
        {
            question: "Bao lâu thì thấy hiệu quả khi thay đổi phong thủy?",
            answer: "Thường trong vòng 3-6 tháng sẽ thấy những thay đổi tích cực. Tuy nhiên, cần kiên trì và thực hiện đúng các lời khuyên phong thủy để đạt hiệu quả tốt nhất."
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

        if (!formData.namSinh || !formData.huongNha) {
            alert('Vui lòng nhập đầy đủ năm sinh và hướng nhà');
            return;
        }

        const currentYear = new Date().getFullYear();
        if (formData.namSinh < 1920 || formData.namSinh > currentYear) {
            alert('Năm sinh không hợp lệ');
            return;
        }

        setLoading(true);
        setResult('');

        try {
            const response = await GeminiService.getConsultation('huong-nha-hop-tuoi', formData);

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
                            Hướng Nhà Hợp Tuổi Phong Thủy
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#64748b',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Phân tích mức độ tương hợp giữa hướng nhà và tuổi tác,
                            đưa ra lời khuyên cải thiện và tối ưu hóa phong thủy cho ngôi nhà của bạn
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
                                Cung cấp thông tin để nhận được phân tích chính xác về hướng nhà của bạn
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
                            </div>

                            {/* Hướng nhà - full width */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: '600',
                                    color: '#2d3748'
                                }}>
                                    Hướng nhà hiện tại *
                                </label>
                                <select
                                    name="huongNha"
                                    value={formData.huongNha}
                                    onChange={handleInputChange}
                                    required
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
                                    <option value="">-- Chọn hướng nhà --</option>
                                    {directions.map(direction => (
                                        <option key={direction.value} value={direction.value}>
                                            {direction.label}
                                        </option>
                                    ))}
                                </select>
                                <small style={{
                                    display: 'block',
                                    marginTop: '0.5rem',
                                    color: '#64748b',
                                    fontSize: '0.875rem',
                                    fontStyle: 'italic'
                                }}>
                                    💡 Mẹo: Đứng trong nhà, hướng ra cửa chính để xác định hướng nhà
                                </small>
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
                                            <i className="fas fa-compass"></i>
                                            Kiểm Tra Hướng Nhà
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
                                    🧭 Kết Quả Phân Tích Phong Thủy
                                </h3>
                                <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
                                    Đánh giá chi tiết về mức độ hợp tuổi của hướng nhà bạn
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
                                Những thắc mắc phổ biến về hướng nhà và phong thủy
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

export default HuongNhaHopTuoiPage;