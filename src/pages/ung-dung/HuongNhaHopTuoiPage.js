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

    const months = Array.from({ length: 12 }, (_, i) => ({
        value: String(i + 1),
        label: `Tháng ${i + 1}`
    }));

    const days = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: `Ngày ${i + 1}`
    }));

    const directions = [
        { value: 'Đông', label: 'Đông - Hướng mặt trời mọc', icon: '🌅', color: '#f59e0b' },
        { value: 'Tây', label: 'Tây - Hướng mặt trời lặn', icon: '🌇', color: '#ef4444' },
        { value: 'Nam', label: 'Nam - Hướng ấm áp, đón nắng', icon: '☀️', color: '#f97316' },
        { value: 'Bắc', label: 'Bắc - Hướng mát mẻ, ổn định', icon: '❄️', color: '#3b82f6' },
        { value: 'Đông Bắc', label: 'Đông Bắc - Hướng phụ, thích hợp văn phòng', icon: '🧭', color: '#8b5cf6' },
        { value: 'Đông Nam', label: 'Đông Nam - Hướng tài lộc, thịnh vượng', icon: '💰', color: '#10b981' },
        { value: 'Tây Bắc', label: 'Tây Bắc - Hướng quyền lực, uy tín', icon: '👑', color: '#6366f1' },
        { value: 'Tây Nam', label: 'Tây Nam - Hướng gia đình, hạnh phúc', icon: '❤️', color: '#ec4899' }
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
            answer: "Thường trong vòng 3-6 tháng sẽ thấy những thay đổi tích cực. Tuy nhiên, cần kiên nhẫn và duy trì các nguyên tắc phong thủy một cách nhất quán."
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
                            }}>🧭🏠</div>
                            <h1 style={{
                                color: '#2d3748',
                                fontSize: '2rem',
                                fontWeight: '700',
                                margin: '0 0 0.5rem 0',
                                lineHeight: '1.2'
                            }}>
                                <i className="fas fa-compass" style={{ marginRight: '0.5rem', color: '#667eea' }}></i>
                                Hướng Nhà Hợp Tuổi
                            </h1>
                            <p style={{
                                color: '#4a5568',
                                fontSize: '1rem',
                                margin: '0',
                                lineHeight: '1.4'
                            }}>
                                Tra cứu hướng nhà phù hợp với tuổi và mệnh để mang lại may mắn, thịnh vượng
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
                                <i className="fas fa-location-arrow" style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}></i>
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

                                {/* Direction Selection */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.8rem',
                                        fontWeight: '600',
                                        color: '#2d3748',
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="fas fa-compass" style={{ marginRight: '0.5rem', color: '#f59e0b' }}></i>
                                        Hướng nhà hiện tại <span style={{ color: '#dc2626' }}>*</span>
                                    </label>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                        gap: '1rem'
                                    }}>
                                        {directions.map(direction => (
                                            <label
                                                key={direction.value}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    padding: '1rem',
                                                    border: `2px solid ${formData.huongNha === direction.value ? direction.color : '#e2e8f0'}`,
                                                    borderRadius: '12px',
                                                    cursor: 'pointer',
                                                    background: formData.huongNha === direction.value ? `${direction.color}10` : 'white',
                                                    transition: 'all 0.3s ease',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="huongNha"
                                                    value={direction.value}
                                                    checked={formData.huongNha === direction.value}
                                                    onChange={handleInputChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                                    {direction.icon}
                                                </div>
                                                <div style={{
                                                    fontWeight: '600',
                                                    color: formData.huongNha === direction.value ? direction.color : '#2d3748',
                                                    fontSize: '0.9rem',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {direction.label}
                                                </div>
                                            </label>
                                        ))}
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
                                            gap: '0.5rem',
                                            margin: '0 auto'
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
                                                Xem hướng nhà hợp tuổi
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
                                    <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Kết quả phân tích</h3>
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
                                Những thắc mắc phổ biến về hướng nhà theo phong thủy
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

export default HuongNhaHopTuoiPage;