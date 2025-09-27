// src/pages/ung-dung/MauHopTuoiPage.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
import GeminiService from './GeminiService';
import '../../styles/CommonStyles.css';

const MauHopTuoiPage = () => {
    const [formData, setFormData] = useState({
        namSinh: '',
        gioiTinh: 'nam',
        menhData: 'auto',
        mucDich: 'nha_o'
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const [activeFaq, setActiveFaq] = useState(null);

    const menhOptions = [
        { value: 'auto', label: '🔮 Tự động xác định theo năm sinh', color: '#667eea', icon: '🔮' },
        { value: 'Kim', label: 'Kim (Vàng, Trắng, Bạc)', color: '#FFD700', icon: '⚡' },
        { value: 'Mộc', label: 'Mộc (Xanh lá, Xanh lục)', color: '#228B22', icon: '🌿' },
        { value: 'Thủy', label: 'Thủy (Xanh dương, Đen)', color: '#4169E1', icon: '💧' },
        { value: 'Hỏa', label: 'Hỏa (Đỏ, Cam, Hồng)', color: '#FF4500', icon: '🔥' },
        { value: 'Thổ', label: 'Thổ (Vàng, Nâu, Be)', color: '#D2691E', icon: '🏔️' }
    ];

    const purposeOptions = [
        { value: 'nha_o', label: '🏠 Nhà ở', icon: '🏠', color: '#10b981' },
        { value: 'van_phong', label: '🏢 Văn phòng', icon: '🏢', color: '#3b82f6' },
        { value: 'kinh_doanh', label: '🏪 Kinh doanh', icon: '🏪', color: '#f59e0b' },
        { value: 'phong_ngu', label: '🛏️ Phòng ngủ', icon: '🛏️', color: '#8b5cf6' },
        { value: 'phong_khach', label: '🛋️ Phòng khách', icon: '🛋️', color: '#06b6d4' },
        { value: 'nha_bep', label: '👨‍🍳 Nhà bếp', icon: '👨‍🍳', color: '#ef4444' },
        { value: 'phong_tho', label: '🕯️ Phòng thờ', icon: '🕯️', color: '#eab308' }
    ];

    const faqData = [
        {
            question: "Làm thế nào để biết mệnh của mình?",
            answer: "Mệnh được tính theo năm sinh âm lịch dựa trên hệ thống Nạp Âm Ngũ Hành. Bạn có thể để hệ thống tự động xác định hoặc tra cứu online theo năm sinh để biết mệnh Kim, Mộc, Thủy, Hỏa, Thổ."
        },
        {
            question: "Tại sao màu sắc quan trọng trong phong thủy?",
            answer: "Màu sắc đại diện cho ngũ hành và có thể hỗ trợ hoặc cản trở vận khí. Màu hợp mệnh sẽ tăng cường năng lượng tích cực, mang lại may mắn, thịnh vượng và sức khỏe tốt."
        },
        {
            question: "Có nên sử dụng toàn bộ nhà cùng một màu không?",
            answer: "Không nên. Mỗi không gian có chức năng khác nhau nên sử dụng màu sắc phù hợp. Ví dụ: phòng ngủ dùng màu nhẹ nhàng, phòng khách dùng màu tươi sáng, phòng làm việc dùng màu tập trung."
        },
        {
            question: "Màu sắc xung khắc có ảnh hưởng nghiêm trọng không?",
            answer: "Màu xung khắc có thể gây căng thẳng, mệt mỏi và ảnh hưởng đến tâm trạng. Tuy nhiên, có thể hóa giải bằng cách sử dụng màu trung gian hoặc điều chỉnh tỷ lệ màu sắc."
        },
        {
            question: "Có thể thay đổi màu sắc theo mùa không?",
            answer: "Có thể. Thay đổi màu sắc phụ kiện theo mùa giúp cân bằng năng lượng. Mùa xuân dùng xanh lá, mùa hè dùng đỏ cam, mùa thu dùng vàng nâu, mùa đông dùng xanh đen."
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

        if (!formData.namSinh) {
            alert('Vui lòng nhập năm sinh');
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
            const response = await GeminiService.getConsultation('mau-hop-tuoi', formData);

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
                            }}>🎨✨</div>
                            <h1 style={{
                                color: '#2d3748',
                                fontSize: '2rem',
                                fontWeight: '700',
                                margin: '0 0 0.5rem 0',
                                lineHeight: '1.2'
                            }}>
                                <i className="fas fa-palette" style={{ marginRight: '0.5rem', color: '#667eea' }}></i>
                                Màu Hợp Tuổi
                            </h1>
                            <p style={{
                                color: '#4a5568',
                                fontSize: '1rem',
                                margin: '0',
                                lineHeight: '1.4'
                            }}>
                                Tư vấn màu sắc phong thủy phù hợp với tuổi và mệnh để tăng cường vận khí
                            </p>
                        </div>

                        {/* Enhanced Form */}
                        <div style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            background: 'white',
                            padding: '2rem',
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
                                <i className="fas fa-paint-brush" style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}></i>
                                <h3 style={{ margin: '0', fontSize: '1.1rem', color: 'white' }}>Nhập thông tin của bạn</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* Birth Year and Gender */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontWeight: '600',
                                            color: '#2d3748',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-calendar-alt" style={{ marginRight: '0.5rem', color: '#667eea' }}></i>
                                            Năm sinh <span style={{ color: '#dc2626' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="namSinh"
                                            value={formData.namSinh}
                                            onChange={handleInputChange}
                                            placeholder="Ví dụ: 1990"
                                            min="1920"
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

                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontWeight: '600',
                                            color: '#2d3748',
                                            fontSize: '0.9rem'
                                        }}>
                                            <i className="fas fa-venus-mars" style={{ marginRight: '0.5rem', color: '#ec4899' }}></i>
                                            Giới tính
                                        </label>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '0.5rem'
                                        }}>
                                            <label style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0.75rem',
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
                                                <i className="fas fa-mars" style={{ marginRight: '0.25rem', color: '#3b82f6' }}></i>
                                                Nam
                                            </label>

                                            <label style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0.75rem',
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
                                                <i className="fas fa-venus" style={{ marginRight: '0.25rem', color: '#ec4899' }}></i>
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Menh Selection */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.8rem',
                                        fontWeight: '600',
                                        color: '#2d3748',
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="fas fa-yin-yang" style={{ marginRight: '0.5rem', color: '#8b5cf6' }}></i>
                                        Mệnh của bạn (Ngũ hành)
                                    </label>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                                        gap: '1rem'
                                    }}>
                                        {menhOptions.map(menh => (
                                            <label
                                                key={menh.value}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    padding: '1rem 0.5rem',
                                                    border: `2px solid ${formData.menhData === menh.value ? menh.color : '#e2e8f0'}`,
                                                    borderRadius: '12px',
                                                    cursor: 'pointer',
                                                    background: formData.menhData === menh.value ? `${menh.color}15` : 'white',
                                                    transition: 'all 0.3s ease',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="menhData"
                                                    value={menh.value}
                                                    checked={formData.menhData === menh.value}
                                                    onChange={handleInputChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{
                                                    fontSize: '1.5rem',
                                                    marginBottom: '0.5rem',
                                                    color: menh.color
                                                }}>
                                                    {menh.icon}
                                                </div>
                                                <div style={{
                                                    fontWeight: '600',
                                                    color: formData.menhData === menh.value ? menh.color : '#2d3748',
                                                    fontSize: '0.85rem',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {menh.label}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Purpose Selection */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.8rem',
                                        fontWeight: '600',
                                        color: '#2d3748',
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="fas fa-home" style={{ marginRight: '0.5rem', color: '#10b981' }}></i>
                                        Mục đích sử dụng màu sắc
                                    </label>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                        gap: '1rem'
                                    }}>
                                        {purposeOptions.map(purpose => (
                                            <label
                                                key={purpose.value}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    padding: '1rem 0.5rem',
                                                    border: `2px solid ${formData.mucDich === purpose.value ? purpose.color : '#e2e8f0'}`,
                                                    borderRadius: '12px',
                                                    cursor: 'pointer',
                                                    background: formData.mucDich === purpose.value ? `${purpose.color}15` : 'white',
                                                    transition: 'all 0.3s ease',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="mucDich"
                                                    value={purpose.value}
                                                    checked={formData.mucDich === purpose.value}
                                                    onChange={handleInputChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{
                                                    fontSize: '1.5rem',
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    {purpose.icon}
                                                </div>
                                                <div style={{
                                                    fontWeight: '600',
                                                    color: formData.mucDich === purpose.value ? purpose.color : '#2d3748',
                                                    fontSize: '0.85rem',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {purpose.label.replace(/^[🏠🏢🏪🛏️🛋️👨‍🍳🕯️]\s/, '')}
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
                                                Đang tư vấn...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-search"></i>
                                                Xem màu hợp tuổi
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
                                margin: '2rem auto 0',
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
                                    <i className="fas fa-palette" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}></i>
                                    <h3 style={{ margin: '0', fontSize: '1.2rem' }}>Tư vấn màu sắc phong thủy</h3>
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
                <section className="section">
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
                                Những thắc mắc phổ biến về màu sắc và phong thủy
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

export default MauHopTuoiPage;