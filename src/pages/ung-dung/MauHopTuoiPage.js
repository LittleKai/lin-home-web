// src/pages/ung-dung/MauHopTuoiPage.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
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

    // Available Gemini API keys
    const geminiKeys = [
        'AIzaSyAxfaDXqfJESn-UiV_PrILhihyvFU6QkGw',
        'AIzaSyDEsifzFyaPY5zca8mp2sHnj41k_PVuiTQ',
        'AIzaSyColbzIN-yDFj4uKtF6DWSU9IU8B84AvsM',
        'AIzaSyC_jOHN_XYMIzneO9dMk_pGiP4rea3QPNQ',
        'AIzaSyC3SCrar3EW92GIwQGjUd13Ebcn22swQoM',
        'AIzaSyBo-fIsTKQs3j3ElXRhRjv79mfRplWHNYc',
        'AIzaSyDimh_A65SYjmtZoR_Sl0-bZKXmKvPDXrA',
        'AIzaSyAKWtKWb_ozSCAI97WWhcgm_EB8pgvWzK4',
        'AIzaSyDLvxbXVN1ycTF87urbQEjN3L-XhchvhKE',
        'AIzaSyCyJG-f3tRgY1SlrUaMQxjILms7hzo3mWI',
        'AIzaSyAq2UIxBBFrrGlb_pA7z1GHKVTqy4Qeiig',
        'AIzaSyAc2BUU5jxtWMVYTO28JsFu9n7w2-ud-qA',
        'AIzaSyBCHK8-SGyHHG24t7yy5HzpKhveJFdk1qs',
        'AIzaSyDM63DmLwNb5LKHbZFj-mwYT0aBcBDbZLg',
        'AIzaSyA6OeXY3-bLknr6Nh97dGWAbnFqQ4BNytg',
        'AIzaSyDSc3eaBTApLN4rV0agw8xgqgQTPwr3q4c',
        'AIzaSyBEZOICOKkDnvDR03n-yvpqeNN1svsFneg',
        'AIzaSyCx4fnrgUKY0QJFoaTXybuH46tLMGnEa8k'
    ];

    const menhOptions = [
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
            answer: "Mệnh được tính theo năm sinh âm lịch. Bạn có thể tra cứu online hoặc dựa vào năm sinh dương lịch để xác định mệnh Kim, Mộc, Thủy, Hỏa, Thổ."
        },
        {
            question: "Tại sao màu sắc quan trọng trong phong thủy?",
            answer: "Màu sắc đại diện cho ngũ hành và có thể hỗ trợ hoặc cản trở vận khí của con người. Màu hợp mệnh sẽ mang lại may mắn và thịnh vượng."
        },
        {
            question: "Có nên sơn toàn bộ nhà một màu không?",
            answer: "Không nên. Mỗi không gian có chức năng khác nhau nên chọn màu phù hợp. Nên kết hợp nhiều màu hài hòa để tạo cân bằng năng lượng."
        },
        {
            question: "Màu nào tuyệt đối không nên dùng?",
            answer: "Không có màu tuyệt đối cấm kỵ, chỉ có màu phù hợp hay không phù hợp với mệnh. Tuy nhiên, nên tránh màu quá chói lóa hoặc quá tối trong không gian sống."
        }
    ];

    const getRandomGeminiKey = () => {
        return geminiKeys[Math.floor(Math.random() * geminiKeys.length)];
    };

    const formatAIResponse = (text) => {
        if (!text) return text;

        // Clean up excessive line breaks first
        let formatted = text.replace(/\n{3,}/g, '\n\n'); // Replace 3+ line breaks with 2

        // Format headings with ** to bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #2d3748; font-size: 1.15em; display: block; margin: 1.5rem 0 0.75rem 0;">$1</strong>');

        // Format numbered lists (1. 2. 3. etc.)
        formatted = formatted.replace(/^(\d+\.\s.*$)/gm, '<div style="margin: 1.5rem 0; padding: 1.2rem; background: linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%); border-left: 4px solid #667eea; border-radius: 0 12px 12px 0; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);"><strong style="color: #667eea; font-size: 1.1em;">$1</strong></div>');

        // Clean up multiple asterisks and convert to proper bullet points
        // First, replace multiple asterisks at start of line with single dash
        formatted = formatted.replace(/^\*{2,}\s*(.*$)/gm, '- $1');

        // Convert remaining single asterisks to dashes for consistency
        formatted = formatted.replace(/^\*\s*(.*$)/gm, '- $1');

        // Format bullet points with - to styled bullets
        formatted = formatted.replace(/^-\s*(.*$)/gm, '<div style="margin: 0.75rem 0; padding: 0.75rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f7fa 100%); border-left: 3px solid #10b981; border-radius: 0 10px 10px 0; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);"><strong style="color: #10b981; margin-right: 0.5rem;">→</strong> <span style="color: #1e40af; font-weight: 500;">$1</span></div>');

        // Handle nested bullets (indented with spaces or tabs)
        formatted = formatted.replace(/^[\s\t]+-\s*(.*$)/gm, '<div style="margin: 0.5rem 0 0.5rem 2rem; color: #4f46e5; padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #059669; margin-right: 0.5rem;">•</strong> <span style="font-weight: 500;">$1</span></div>');

        // Clean up excessive spacing in formatted content
        formatted = formatted.replace(/(<\/div>\s*){2,}/g, '</div>');

        // Convert double line breaks to single line breaks with margin
        formatted = formatted.replace(/\n\n/g, '<div style="margin: 1rem 0;"></div>');

        // Convert single line breaks to br tags
        formatted = formatted.replace(/\n/g, '<br>');

        // Clean up any remaining excessive spacing
        formatted = formatted.replace(/(<br>\s*){3,}/g, '<br><br>');

        return formatted;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const consultGemini = async () => {
        if (!formData.namSinh) {
            alert('Vui lòng nhập năm sinh!');
            return;
        }

        setLoading(true);
        setResult('');

        try {
            const apiKey = getRandomGeminiKey();
            const purposeLabel = purposeOptions.find(p => p.value === formData.mucDich)?.label || formData.mucDich;

            const prompt = `Bạn là chuyên gia phong thủy về màu sắc. Hãy tư vấn màu sắc hợp tuổi cho:
            - Năm sinh: ${formData.namSinh}
            - Giới tính: ${formData.gioiTinh}
            - Mệnh: ${formData.menhData === 'auto' ? 'Hãy tự tính dựa trên năm sinh' : formData.menhData}
            - Mục đích sử dụng: ${purposeLabel}
            
            Hãy đưa ra:
            1. **Phân tích mệnh và màu sắc hợp với năm sinh này**
            ${formData.menhData === 'auto' ? '- Tính toán mệnh chính xác theo năm sinh dương lịch' : ''}
            
            2. **Top 5 màu sắc tốt nhất cho mục đích sử dụng**
            
            3. **Màu sắc nên tránh và lý do**
            
            4. **Cách phối hợp màu sắc hài hòa**
            
            5. **Tác động tích cực của màu sắc đến vận khí**
            
            6. **Gợi ý cụ thể về cách ứng dụng màu sắc** (sơn tường, nội thất, phụ kiện)
            
            Trả lời bằng tiếng Việt, chi tiết và thực tế. Sử dụng ** để in đậm tiêu đề, *** cho điểm quan trọng.`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            if (!response.ok) {
                throw new Error('Không thể kết nối đến dịch vụ AI');
            }

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;
            setResult(formatAIResponse(aiResponse));

        } catch (error) {
            console.error('Error:', error);
            setResult('Xin lỗi, có lỗi xảy ra khi phân tích. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="section section-gradient">
                    <div className="container">
                        <div className="section-title">Màu Hợp Tuổi</div>
                        <div className="section-subtitle">
                            Tìm hiểu màu sắc phù hợp với mệnh và tuổi của bạn theo phong thủy
                        </div>

                        <div className="alert-info" style={{
                            background: '#e3f2fd',
                            border: '1px solid #2196f3',
                            borderRadius: '8px',
                            padding: '1rem',
                            margin: '2rem auto',
                            maxWidth: '600px',
                            textAlign: 'center',
                            color: '#1976d2'
                        }}>
                            <i className="fas fa-robot" style={{ marginRight: '0.5rem' }}></i>
                            <strong>Sử dụng chatbot AI</strong> để đưa ra kết quả màu sắc phù hợp nhất
                        </div>
                    </div>
                </section>

                {/* Input Form Section */}
                <section className="section">
                    <div className="container">
                        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <div className="card-header">
                                <h3>
                                    <i className="fas fa-palette"></i>
                                    Thông Tin Cần Thiết
                                </h3>
                                <p>Nhập thông tin để được tư vấn màu sắc hợp mệnh</p>
                            </div>

                            <div className="card-body">
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Năm sinh <span style={{ color: '#e53e3e' }}>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="namSinh"
                                        value={formData.namSinh}
                                        onChange={handleInputChange}
                                        placeholder="Ví dụ: 1990"
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

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Giới tính
                                    </label>
                                    <select
                                        name="gioiTinh"
                                        value={formData.gioiTinh}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            background: 'white'
                                        }}
                                    >
                                        <option value="nam">Nam</option>
                                        <option value="nữ">Nữ</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Mệnh (nếu biết)
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
                                            background: 'white'
                                        }}
                                    >
                                        <option value="auto">Để AI tự tính dựa trên năm sinh</option>
                                        {menhOptions.map(menh => (
                                            <option key={menh.value} value={menh.value}>
                                                {menh.label}
                                            </option>
                                        ))}
                                    </select>
                                    <small style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                                        Hoặc để tự tính dựa trên năm sinh dương lịch
                                    </small>
                                </div>

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
                                            background: 'white'
                                        }}
                                    >
                                        {purposeOptions.map(purpose => (
                                            <option key={purpose.value} value={purpose.value}>
                                                {purpose.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={consultGemini}
                                    disabled={loading}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: loading ? '#cbd5e0' : 'linear-gradient(135deg, #667eea, #764ba2)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Đang phân tích màu sắc...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-magic"></i>
                                            Tư Vấn Màu Sắc
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Color Guide Section */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="section-title">Ngũ Hành và Màu Sắc</div>
                        <div className="section-subtitle">
                            Tham khảo mối quan hệ giữa ngũ hành và màu sắc trong phong thủy
                        </div>

                        <div className="grid-5" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '2rem'
                        }}>
                            {menhOptions.map((menh, index) => (
                                <div key={index} className="card" style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: menh.color,
                                        margin: '0 auto 1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                    }}>
                                        {menh.value}
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>
                                        Mệnh {menh.value}
                                    </h4>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                                        {menh.label.split('(')[1]?.replace(')', '') || menh.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Result Section */}
                {result && (
                    <section className="section">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-lightbulb"></i>
                                        Kết Quả Phân Tích Màu Sắc
                                    </h3>
                                    <p>Tư vấn từ chuyên gia phong thủy AI</p>
                                </div>
                                <div className="card-body">
                                    <div style={{
                                        background: '#f8fafc',
                                        padding: '1.5rem',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        lineHeight: '1.8',
                                        fontFamily: 'inherit'
                                    }} dangerouslySetInnerHTML={{ __html: result }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                <section className="section">
                    <div className="container">
                        <div className="section-title">Câu Hỏi Thường Gặp</div>
                        <div className="section-subtitle">
                            Những thắc mắc phổ biến về màu sắc trong phong thủy
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
        </div>
    );
};

export default MauHopTuoiPage;