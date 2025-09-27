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
        { value: 'auto', label: 'Tự động xác định theo năm sinh' },
        { value: 'Kim', label: 'Kim (Vàng, Trắng, Bạc)', color: '#FFD700' },
        { value: 'Mộc', label: 'Mộc (Xanh lá, Xanh lục)', color: '#228B22' },
        { value: 'Thủy', label: 'Thủy (Xanh dương, Đen)', color: '#4169E1' },
        { value: 'Hỏa', label: 'Hỏa (Đỏ, Cam, Hồng)', color: '#FF4500' },
        { value: 'Thổ', label: 'Thổ (Vàng, Nâu, Be)', color: '#D2691E' }
    ];

    const purposeOptions = [
        { value: 'nha_o', label: 'Nhà ở' },
        { value: 'van_phong', label: 'Văn phòng' },
        { value: 'kinh_doanh', label: 'Kinh doanh' },
        { value: 'phong_ngu', label: 'Phòng ngủ' },
        { value: 'phong_khach', label: 'Phòng khách' },
        { value: 'nha_bep', label: 'Nhà bếp' },
        { value: 'phong_tho', label: 'Phòng thờ' }
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
            answer: "Có thể. Thay đổi màu sắc phụ kiện theo mùa giúp cân bằng năng lượng. Ví dụ: mùa xuân dùng xanh lá, mùa hè dùng đỏ, mùa thu dùng vàng, mùa đông dùng xanh dương."
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
                            Màu Sắc Hợp Tuổi Phong Thủy
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#64748b',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Tư vấn màu sắc phù hợp với mệnh và tuổi tác,
                            giúp tăng cường vận khí và mang lại may mắn cho cuộc sống
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
                                Cung cấp thông tin để nhận được gợi ý màu sắc phù hợp nhất
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

                                {/* Mệnh */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Mệnh của bạn
                                    </label>
                                    <select
                                        name="menhData"
                                        value={formData.menhData}
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
                                        {menhOptions.map(menh => (
                                            <option key={menh.value} value={menh.value}>
                                                {menh.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mục đích */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Mục đích sử dụng
                                    </label>
                                    <select
                                        name="mucDich"
                                        value={formData.mucDich}
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
                                        {purposeOptions.map(purpose => (
                                            <option key={purpose.value} value={purpose.value}>
                                                {purpose.label}
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
                                            <i className="fas fa-palette"></i>
                                            Xem Màu Sắc Hợp Tuổi
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Result Section */}
                    {result && (
                        <div id="result-section" style={{
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
                                    🎨 Kết Quả Tư Vấn Màu Sắc
                                </h3>
                                <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
                                    Gợi ý màu sắc phù hợp dựa trên mệnh và mục đích sử dụng của bạn
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
                                Những thắc mắc phổ biến về màu sắc và phong thủy
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

export default MauHopTuoiPage;