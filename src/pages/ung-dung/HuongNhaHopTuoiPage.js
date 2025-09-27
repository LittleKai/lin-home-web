// src/pages/ung-dung/HuongNhaHopTuoiPage.js
import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
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

    const months = Array.from({ length: 12 }, (_, i) => ({
        value: String(i + 1),
        label: `Tháng ${i + 1}`
    }));

    const days = Array.from({ length: 31 }, (_, i) => ({
        value: String(i + 1),
        label: `Ngày ${i + 1}`
    }));

    const directions = [
        { value: 'Đông', label: 'Đông', description: 'Hướng mặt trời mọc', icon: '🌅' },
        { value: 'Tây', label: 'Tây', description: 'Hướng mặt trời lặn', icon: '🌇' },
        { value: 'Nam', label: 'Nam', description: 'Hướng ấm áp, đón nắng', icon: '☀️' },
        { value: 'Bắc', label: 'Bắc', description: 'Hướng mát mẻ, ổn định', icon: '❄️' },
        { value: 'Đông Bắc', label: 'Đông Bắc', description: 'Hướng phụ, thích hợp văn phòng', icon: '🧭' },
        { value: 'Đông Nam', label: 'Đông Nam', description: 'Hướng tài lộc, thịnh vượng', icon: '💰' },
        { value: 'Tây Bắc', label: 'Tây Bắc', description: 'Hướng quyền lực, uy tín', icon: '👑' },
        { value: 'Tây Nam', label: 'Tây Nam', description: 'Hướng gia đình, hạnh phúc', icon: '❤️' }
    ];

    const faqData = [
        {
            question: "Làm thế nào để xác định hướng nhà chính xác?",
            answer: "Bạn có thể sử dụng la bàn hoặc ứng dụng la bàn trên điện thoại để xác định hướng cửa chính của ngôi nhà. Đứng ở cửa chính và quay mặt ra ngoài để đo hướng. Nếu không chắc chắn, hãy đo vào nhiều thời điểm khác nhau và lấy kết quả trung bình."
        },
        {
            question: "Tại sao tuổi tác ảnh hưởng đến hướng nhà?",
            answer: "Theo phong thủy, mỗi người có một hướng tốt dựa trên năm sinh và giới tính. Điều này được tính toán dựa trên hệ thống Bát Trạch phong thủy, trong đó có 4 hướng tốt và 4 hướng xấu cho mỗi người."
        },
        {
            question: "Có nên thay đổi hướng cửa chính không?",
            answer: "Việc thay đổi hướng cửa chính cần được cân nhắc kỹ lưỡng vì chi phí cao và phức tạp về mặt kiến trúc. Thay vào đó, bạn có thể sử dụng các biện pháp hóa giải như đặt gương, cây xanh, hoặc thay đổi màu sắc."
        },
        {
            question: "Hướng nhà ảnh hưởng gì đến cuộc sống?",
            answer: "Hướng nhà phù hợp có thể mang lại sức khỏe tốt, tài vận thịnh vượng, gia đình hạnh phúc và sự nghiệp thuận lợi. Ngược lại, hướng không phù hợp có thể gây ra khó khăn về tài chính, sức khỏe và các mối quan hệ."
        },
        {
            question: "Có cần xem hướng nhà cho tất cả thành viên?",
            answer: "Chủ yếu xem hướng nhà cho chủ hộ (người đứng tên nhà). Tuy nhiên, nên tham khảo hướng tốt của vợ/chồng để đảm bảo hài hòa. Nếu có xung đột, ưu tiên người có ảnh hưởng lớn nhất trong gia đình."
        }
    ];

    const getRandomGeminiKey = () => {
        return geminiKeys[Math.floor(Math.random() * geminiKeys.length)];
    };

    const formatAIResponse = (text) => {
        if (!text) return text;

        // Format headings with ** to bold
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #2d3748; font-size: 1.15em; display: block; margin: 1rem 0 0.5rem 0;">$1</strong>');

        // Format numbered lists
        formatted = formatted.replace(/^(\d+\.\s.*$)/gm, '<div style="margin: 1.5rem 0; padding: 1.2rem; background: linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%); border-left: 4px solid #667eea; border-radius: 0 12px 12px 0; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);"><strong style="color: #667eea; font-size: 1.1em;">$1</strong></div>');

        // Format bullet points with ***
        formatted = formatted.replace(/^\*\*\*(.*$)/gm, '<div style="margin: 1rem 0; padding: 1rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f7fa 100%); border-left: 3px solid #10b981; border-radius: 0 10px 10px 0; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);"><strong style="color: #10b981; margin-right: 0.5rem;">→</strong> <span style="color: #1e40af; font-weight: 500;">$1</span></div>');

        // Format sub-bullets with **
        formatted = formatted.replace(/^\*\*(.*$)/gm, '<div style="margin: 0.75rem 0 0.75rem 2rem; color: #4f46e5; padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #059669; margin-right: 0.5rem;">•</strong> <span style="font-weight: 500;">$1</span></div>');

        // Format single bullets with *
        formatted = formatted.replace(/^\*((?!\*).*)$/gm, '<div style="margin: 0.5rem 0 0.5rem 2.5rem; color: #374151; padding: 0.25rem 0;">• $1</div>');

        // Format paragraphs
        formatted = formatted.replace(/\n\n/g, '<br><br>');
        formatted = formatted.replace(/\n/g, '<br>');

        return formatted;
    };

    const callGeminiAPI = async (apiKey, prompt, retryCount = 0) => {
        try {
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
                if ((response.status === 503 || response.status === 429) && retryCount < 3) {
                    console.log(`API Error ${response.status}. Retry ${retryCount + 1}/3 with different key...`);
                    const newApiKey = getRandomGeminiKey();
                    await new Promise(resolve => setTimeout(resolve, 2000 * (retryCount + 1)));
                    return callGeminiAPI(newApiKey, prompt, retryCount + 1);
                }
                throw new Error(`${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Không có phản hồi từ AI');
            }

            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            if (retryCount < 3 && (error.name === 'TypeError' || error.message.includes('fetch'))) {
                console.log(`Network error. Retry ${retryCount + 1}/3 with different key...`);
                const newApiKey = getRandomGeminiKey();
                await new Promise(resolve => setTimeout(resolve, 2000 * (retryCount + 1)));
                return callGeminiAPI(newApiKey, prompt, retryCount + 1);
            }
            throw error;
        }
    };

    const scrollToResult = () => {
        setTimeout(() => {
            if (resultRef.current) {
                resultRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }, 100);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const consultGemini = async () => {
        if (!formData.namSinh || !formData.huongNha) {
            alert('Vui lòng điền đầy đủ năm sinh và hướng nhà!');
            return;
        }

        const currentYear = new Date().getFullYear();
        const birthYear = parseInt(formData.namSinh);

        if (birthYear < 1900 || birthYear > currentYear) {
            alert('Năm sinh không hợp lệ!');
            return;
        }

        setLoading(true);
        setResult('');

        try {
            const apiKey = getRandomGeminiKey();
            const age = currentYear - birthYear;

            const prompt = `Bạn là chuyên gia phong thủy Việt Nam chuyên về hướng nhà. Hãy phân tích chi tiết và tư vấn về hướng nhà hợp tuổi cho:

**THÔNG TIN KHÁCH HÀNG:**
***Ngày sinh:** ${formData.ngaySinh}/${formData.thangSinh}/${formData.namSinh} (${age} tuổi)
***Giới tính:** ${formData.gioiTinh}
***Hướng nhà hiện tại:** ${formData.huongNha}

**YÊU CẦU PHÂN TÍCH:**

**1. PHÂN TÍCH MỆNH VÀ HƯỚNG:**
***Xác định mệnh theo năm sinh** (Kim, Mộc, Thủy, Hỏa, Thổ)
***Phân tích hướng ${formData.huongNha}** theo hệ thống Bát Trạch
***Độ tương hợp** giữa mệnh và hướng nhà (điểm từ 1-10)

**2. ĐÁNH GIÁ HƯỚNG NHÀ HIỆN TẠI:**
***Ưu điểm của hướng ${formData.huongNha}** cho người này
***Nhược điểm và những điều cần lưu ý**
***Tác động đến sức khỏe, tài vận, gia đình**

**3. LỜI KHUYÊN CẢI THIỆN:**
***Cách tối ưu hóa hướng ${formData.huongNha}**
***Màu sắc, vật liệu nên sử dụng**
***Bố trí nội thất và không gian**
***Cây cảnh và vật phẩm phong thủy**

**4. CÁC HƯỚNG TỐT KHÁC:**
***Top 3 hướng tốt nhất** cho người này
***Lý do tại sao những hướng này phù hợp**
***So sánh với hướng hiện tại**

**5. BIỆN PHÁP HÓA GIẢI (nếu cần):**
***Cách khắc phục** nếu hướng không hoàn toàn phù hợp
***Vật phẩm phong thủy** để cải thiện năng lượng
***Thời gian tốt** để thực hiện các thay đổi

**6. LỜI KHUYÊN TỔNG QUAN:**
***Kế hoạch dài hạn** để tối ưu phong thủy
***Những điều tuyệt đối nên tránh**
***Cách duy trì năng lượng tích cực**

Hãy trả lời bằng tiếng Việt, chi tiết, thực tế và dễ hiểu. Sử dụng ** để in đậm tiêu đề chính, *** cho các điểm quan trọng. Đưa ra những lời khuyên cụ thể có thể áp dụng ngay.`;

            const aiResponse = await callGeminiAPI(apiKey, prompt);
            const formattedResponse = formatAIResponse(aiResponse);
            setResult(formattedResponse);

            // Auto scroll to result after successful response
            scrollToResult();

        } catch (error) {
            console.error('Error:', error);
            let errorMessage = 'Xin lỗi, có lỗi xảy ra khi phân tích. ';

            if (error.message.includes('503')) {
                errorMessage += 'Dịch vụ AI đang quá tải, đã thử lại 3 lần nhưng không thành công. Vui lòng thử lại sau 5-10 phút.';
            } else if (error.message.includes('429')) {
                errorMessage += 'Đã vượt quá giới hạn sử dụng, đã thử lại 3 lần. Vui lòng thử lại sau 1 giờ.';
            } else if (error.message.includes('400')) {
                errorMessage += 'Dữ liệu đầu vào không hợp lệ, vui lòng kiểm tra lại thông tin.';
            } else {
                errorMessage += 'Vui lòng kiểm tra kết nối mạng và thử lại.';
            }

            setResult(errorMessage);
            scrollToResult(); // Also scroll to error message
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
                        <div className="section-title">Hướng Nhà Hợp Tuổi</div>
                        <div className="section-subtitle">
                            Tìm hiểu hướng nhà phù hợp với tuổi tác theo phong thủy Bát Trạch
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            margin: '2rem auto',
                            maxWidth: '600px',
                            textAlign: 'center',
                            color: 'white',
                            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <i className="fas fa-robot" style={{ fontSize: '1.2rem' }}></i>
                                <strong>Sử dụng AI Phong Thủy Chuyên Sâu</strong>
                            </div>
                            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>
                                Phân tích theo hệ thống Bát Trạch truyền thống kết hợp công nghệ hiện đại
                            </p>
                        </div>
                    </div>
                </section>

                {/* Input Form Section */}
                <section className="section">
                    <div className="container">
                        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            <div className="card-header">
                                <h3>
                                    <i className="fas fa-compass"></i>
                                    Thông Tin Cần Thiết
                                </h3>
                                <p>Nhập thông tin để được tư vấn hướng nhà hợp tuổi</p>
                            </div>

                            <div className="card-body">
                                {/* Birth Date Section */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Ngày sinh <span style={{ color: '#e53e3e' }}>*</span>
                                    </label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '1rem' }}>
                                        <select
                                            name="ngaySinh"
                                            value={formData.ngaySinh}
                                            onChange={handleInputChange}
                                            style={{
                                                padding: '0.75rem',
                                                border: '2px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                background: 'white',
                                                transition: 'border-color 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                        >
                                            {days.map(day => (
                                                <option key={day.value} value={day.value}>
                                                    {day.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            name="thangSinh"
                                            value={formData.thangSinh}
                                            onChange={handleInputChange}
                                            style={{
                                                padding: '0.75rem',
                                                border: '2px solid #e2e8f0',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                background: 'white',
                                                transition: 'border-color 0.3s ease'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                        >
                                            {months.map(month => (
                                                <option key={month.value} value={month.value}>
                                                    {month.label}
                                                </option>
                                            ))}
                                        </select>

                                        <input
                                            type="number"
                                            name="namSinh"
                                            value={formData.namSinh}
                                            onChange={handleInputChange}
                                            placeholder="Năm sinh (VD: 1990)"
                                            min="1900"
                                            max="2024"
                                            style={{
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
                                            background: formData.gioiTinh === 'nữ' ? '#667eea' : 'white',
                                            color: formData.gioiTinh === 'nữ' ? 'white' : '#4a5568'
                                        }}>
                                            <input
                                                type="radio"
                                                name="gioiTinh"
                                                value="nữ"
                                                checked={formData.gioiTinh === 'nữ'}
                                                onChange={handleInputChange}
                                                style={{ display: 'none' }}
                                            />
                                            <i className="fas fa-venus" style={{ marginRight: '0.5rem' }}></i>
                                            Nữ
                                        </label>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Hướng nhà hiện tại <span style={{ color: '#e53e3e' }}>*</span>
                                    </label>
                                    <select
                                        name="huongNha"
                                        value={formData.huongNha}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '2px solid #e2e8f0',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            background: 'white',
                                            transition: 'border-color 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                    >
                                        <option value="">Chọn hướng nhà</option>
                                        {directions.map(direction => (
                                            <option key={direction.value} value={direction.value}>
                                                {direction.icon} {direction.label} - {direction.description}
                                            </option>
                                        ))}
                                    </select>
                                    <small style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                                        Hướng của cửa chính khi đứng trong nhà nhìn ra ngoài
                                    </small>
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
                                        gap: '0.5rem',
                                        boxShadow: loading ? 'none' : '0 4px 16px rgba(102, 126, 234, 0.3)',
                                        transform: loading ? 'none' : 'translateY(0)',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!loading) {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!loading) {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.3)';
                                        }
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Đang phân tích hướng nhà...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-magic"></i>
                                            Tư Vấn Hướng Nhà
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Result Section */}
                {result && (
                    <section className="section" ref={resultRef}>
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h3>
                                        <i className="fas fa-lightbulb"></i>
                                        Kết Quả Phân Tích Hướng Nhà
                                    </h3>
                                    <p>Tư vấn chi tiết từ chuyên gia phong thủy AI</p>
                                </div>
                                <div className="card-body">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                                        padding: '2rem',
                                        borderRadius: '12px',
                                        border: '1px solid #cbd5e0',
                                        lineHeight: '1.8',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        color: '#2d3748'
                                    }} dangerouslySetInnerHTML={{ __html: result }}>
                                    </div>

                                    <div style={{
                                        marginTop: '1.5rem',
                                        padding: '1rem',
                                        background: '#e3f2fd',
                                        border: '1px solid #2196f3',
                                        borderRadius: '8px',
                                        color: '#1565c0'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <i className="fas fa-info-circle"></i>
                                            <strong>Lưu ý quan trọng:</strong>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            Kết quả này dựa trên phong thủy truyền thống và chỉ mang tính tham khảo.
                                            Để có kết quả chính xác nhất, nên kết hợp với việc xem địa thế,
                                            môi trường xung quanh và tham khảo ý kiến chuyên gia phong thủy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Tips Section */}
                <section className="section section-gradient">
                    <div className="container">
                        <div className="section-title">Hướng Dẫn Xác Định Hướng Nhà</div>
                        <div className="section-subtitle">
                            Cách đo hướng nhà chính xác và những lưu ý quan trọng
                        </div>

                        <div className="grid-3" style={{ marginTop: '2rem' }}>
                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-blue" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-compass"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Sử Dụng La Bàn</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Đứng ở cửa chính, quay mặt ra ngoài và sử dụng la bàn hoặc app trên điện thoại
                                        để xác định hướng. Đo ít nhất 3 lần để có kết quả chính xác.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-green" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-sun"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Quan Sát Mặt Trời</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Mặt trời mọc ở hướng Đông, lặn ở hướng Tây. Vào buổi trưa,
                                        mặt trời ở phía Nam. Dựa vào đó để xác định hướng nhà một cách tương đối.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-gradient" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Lưu Ý Quan Trọng</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Tránh đo gần đồ vật kim loại, ô tô hoặc thiết bị điện tử.
                                        Hướng nhà là hướng cửa chính, không phải hướng của căn phòng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Direction Benefits */}
                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '2rem' }}>
                                Tác Động Của Các Hướng Nhà
                            </h3>

                            <div className="grid-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ color: '#667eea', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-chart-line"></i>
                                            Hướng Tốt (Cát Hướng)
                                        </h4>
                                        <ul style={{ color: '#4a5568', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                                            <li style={{ marginBottom: '0.5rem' }}>Mang lại sức khỏe dồi dào, tinh thần sảng khoái</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Tài vận thịnh vượng, công việc thuận lợi</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Gia đình hạnh phúc, con cái học giỏi</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Nhận được sự giúp đỡ từ quý nhân</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ color: '#e53e3e', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="fas fa-exclamation-circle"></i>
                                            Hướng Xấu (Hung Hướng)
                                        </h4>
                                        <ul style={{ color: '#4a5568', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                                            <li style={{ marginBottom: '0.5rem' }}>Dễ gặp bệnh tật, stress, mệt mỏi</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Tài chính bấp bênh, công việc trục trặc</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Gia đình bất hòa, mâu thuẫn nhiều</li>
                                            <li style={{ marginBottom: '0.5rem' }}>Gặp tiểu nhân, thị phi phiền toái</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section">
                    <div className="container">
                        <div className="section-title">Câu Hỏi Thường Gặp</div>
                        <div className="section-subtitle">
                            Những thắc mắc phổ biến về hướng nhà hợp tuổi
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

                {/* Contact CTA */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="card" style={{
                            textAlign: 'center',
                            maxWidth: '600px',
                            margin: '0 auto',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none'
                        }}>
                            <div className="card-body" style={{ padding: '3rem 2rem' }}>
                                <div className="icon-circle" style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    margin: '0 auto 1.5rem',
                                    width: '80px',
                                    height: '80px',
                                    fontSize: '2rem'
                                }}>
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                                    Cần Tư Vấn Chuyên Sâu?
                                </h3>
                                <p style={{
                                    marginBottom: '2rem',
                                    opacity: 0.9,
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6'
                                }}>
                                    Liên hệ với chuyên gia phong thủy để được tư vấn chi tiết về
                                    hướng nhà, bố trí nội thất và cách cải thiện vận khí
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href="tel:0123456789"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            background: 'rgba(255,255,255,0.2)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            fontWeight: '600'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.3)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <i className="fas fa-phone"></i>
                                        Gọi Tư Vấn
                                    </a>
                                    <a
                                        href="https://zalo.me/0123456789"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            background: 'rgba(255,255,255,0.2)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            fontWeight: '600'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.3)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <i className="fab fa-facebook-messenger"></i>
                                        Chat Zalo
                                    </a>
                                </div>
                            </div>
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

export default HuongNhaHopTuoiPage;