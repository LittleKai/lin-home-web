// src/pages/ung-dung/XemTuoiLamNhaPage.js
import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
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

    const constructionTypes = [
        { value: 'nha_o', label: 'Nhà ở', icon: 'fa-home', description: 'Nhà ở gia đình, căn hộ' },
        { value: 'biet_thu', label: 'Biệt thự', icon: 'fa-building', description: 'Villa, biệt thự cao cấp' },
        { value: 'chung_cu', label: 'Chung cư', icon: 'fa-city', description: 'Apartment, condotel' },
        { value: 'van_phong', label: 'Văn phòng', icon: 'fa-briefcase', description: 'Trụ sở công ty, building' },
        { value: 'nha_xuong', label: 'Nhà xưởng', icon: 'fa-industry', description: 'Kho bãi, nhà máy sản xuất' },
        { value: 'cua_hang', label: 'Cửa hàng', icon: 'fa-store', description: 'Shop, showroom kinh doanh' },
        { value: 'nha_tho', label: 'Nhà thờ', icon: 'fa-church', description: 'Đình chùa, nhà thờ họ' },
        { value: 'khach_san', label: 'Khách sạn', icon: 'fa-bed', description: 'Hotel, resort, homestay' }
    ];

    const faqData = [
        {
            question: "Tại sao cần xem tuổi khi làm nhà?",
            answer: "Theo phong thủy, việc xây dựng nhà cửa cần hợp với vận khí của chủ nhà. Tuổi tác ảnh hưởng đến thời điểm tốt để khởi công, giúp công trình thuận lợi và mang lại may mắn cho gia đình."
        },
        {
            question: "Có bắt buộc phải theo lịch âm không?",
            answer: "Không bắt buộc tuyệt đối. Tuy nhiên, trong phong thủy truyền thống Việt Nam thường sử dụng lịch âm để tính toán. AI sẽ tự động chuyển đổi và tư vấn dựa trên cả hai hệ lịch."
        },
        {
            question: "Năm xấu có làm nhà được không?",
            answer: "Có thể làm nhà trong năm không thuận lợi nhưng cần chọn tháng, ngày tốt và có các biện pháp hóa giải phù hợp. Quan trọng là thiết kế hợp lý và thi công chất lượng."
        },
        {
            question: "Làm sao biết năm nào tốt nhất?",
            answer: "Năm tốt nhất thường là năm hợp với mệnh, không xung khắc với tuổi chủ nhà. AI sẽ phân tích chi tiết và đưa ra gợi ý cụ thể cho từng trường hợp."
        },
        {
            question: "Có cần xem tuổi của cả vợ chồng?",
            answer: "Nên xem tuổi của cả hai vợ chồng, đặc biệt là người đứng tên sở hữu nhà. Nếu có xung đột, cần tìm thời điểm trung hòa hoặc áp dụng các biện pháp hóa giải."
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
                // Handle specific error codes that should trigger retry
                if ((response.status === 503 || response.status === 429) && retryCount < 3) {
                    console.log(`API Error ${response.status}. Retry ${retryCount + 1}/3 with different key...`);
                    const newApiKey = getRandomGeminiKey();
                    await new Promise(resolve => setTimeout(resolve, 2000 * (retryCount + 1))); // Progressive delay
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
            // Retry for network errors
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
        if (!formData.namSinh || !formData.namLamNha) {
            alert('Vui lòng điền đầy đủ năm sinh và năm dự định làm nhà!');
            return;
        }

        const currentYear = new Date().getFullYear();
        const birthYear = parseInt(formData.namSinh);
        const constructionYear = parseInt(formData.namLamNha);

        if (birthYear < 1900 || birthYear > currentYear) {
            alert('Năm sinh không hợp lệ!');
            return;
        }

        if (constructionYear < currentYear || constructionYear > currentYear + 20) {
            alert('Năm làm nhà nên từ năm hiện tại đến 20 năm tới!');
            return;
        }

        setLoading(true);
        setResult('');

        try {
            const apiKey = getRandomGeminiKey();
            const constructionLabel = constructionTypes.find(c => c.value === formData.loaiCongTrinh)?.label || formData.loaiCongTrinh;
            const age = constructionYear - birthYear;

            const prompt = `Bạn là chuyên gia phong thủy Việt Nam về xem tuổi làm nhà. Hãy phân tích chi tiết cho trường hợp sau:

**THÔNG TIN KHÁCH HÀNG:**
***Ngày sinh:** ${formData.ngaySinh}/${formData.thangSinh}/${formData.namSinh} (${age} tuổi vào năm ${formData.namLamNha})
***Giới tính:** ${formData.gioiTinh}
***Năm dự định làm nhà:** ${formData.namLamNha}
***Loại công trình:** ${constructionLabel}

**YÊU CẦU PHÂN TÍCH:**

**1. PHÂN TÍCH MỆNH VÀ TUỔI:**
***Xác định mệnh theo năm sinh** (Kim, Mộc, Thủy, Hỏa, Thổ)
***Phân tích đặc điểm tuổi tác** và vận khí năm ${formData.namLamNha}

**2. ĐÁNH GIÁ NĂM ${formData.namLamNha}:**
***Năm này có phù hợp** để làm ${constructionLabel.toLowerCase()} không?
***Điểm tốt và điểm cần lưu ý**
***Mức độ phù hợp** (từ 1-10 điểm)

**3. THÁNG TỐT TRONG NĂM:**
***Top 3-5 tháng tốt nhất** để khởi công
***Tháng nào nên tránh** và tại sao
***Giai đoạn nào phù hợp** cho từng công việc (động thổ, đổ móng, cất nóc)

**4. LỜI KHUYÊN CHO ${constructionLabel.toUpperCase()}:**
***Hướng nhà và vị trí** đặt công trình phù hợp
***Màu sắc chủ đạo** nên chọn
***Bố cục không gian** theo phong thủy

**5. NGHI LỄ VÀ CÚNG KHỞI CÔNG:**
***Cách chọn ngày giờ tốt** để động thổ
***Vật phẩm và lễ vật** cần chuẩn bị
***Các bước thực hiện** nghi lễ khởi công

**6. GỢI Ý NĂM KHÁC (nếu cần):**
***Những năm khác gần đây** cũng tốt
***Năm nào tốt nhất** trong 5 năm tới

**7. CÁCH HÓA GIẢI (nếu có bất lợi):**
***Biện pháp khắc phục** những yếu tố không thuận
***Vật phẩm phong thủy** hỗ trợ
***Cách bố trí** để cải thiện vận khí

Hãy trả lời bằng tiếng Việt, chi tiết, thiết thực và dễ hiểu. Sử dụng ** để in đậm tiêu đề chính, *** cho các điểm quan trọng.`;

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
                        <div className="section-title">Xem Tuổi Làm Nhà</div>
                        <div className="section-subtitle">
                            Tư vấn thời điểm tốt nhất để khởi công xây dựng theo tuổi tác và phong thủy
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
                                <strong>Sử dụng AI Phong Thủy Chuyên Nghiệp</strong>
                            </div>
                            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>
                                Phân tích dựa trên kiến thức phong thủy truyền thống và hiện đại
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
                                    <i className="fas fa-calendar-alt"></i>
                                    Thông Tin Cần Thiết
                                </h3>
                                <p>Nhập thông tin để được tư vấn thời điểm làm nhà tốt nhất</p>
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

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: '600',
                                        color: '#2d3748'
                                    }}>
                                        Năm dự định làm nhà <span style={{ color: '#e53e3e' }}>*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="namLamNha"
                                        value={formData.namLamNha}
                                        onChange={handleInputChange}
                                        placeholder="Ví dụ: 2025"
                                        min="2024"
                                        max="2044"
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
                                    <small style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                                        Nên chọn từ năm hiện tại đến 20 năm tới
                                    </small>
                                </div>

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
                                            transition: 'border-color 0.3s ease'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                    >
                                        {constructionTypes.map(type => (
                                            <option key={type.value} value={type.value}>
                                                {type.label} - {type.description}
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
                                            Đang phân tích tuổi tác...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-magic"></i>
                                            Xem Tuổi Làm Nhà
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
                                        Kết Quả Phân Tích Tuổi Làm Nhà
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
                                        background: '#fff3cd',
                                        border: '1px solid #ffc107',
                                        borderRadius: '8px',
                                        color: '#856404'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <i className="fas fa-exclamation-triangle"></i>
                                            <strong>Lưu ý quan trọng:</strong>
                                        </div>
                                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            Kết quả này chỉ mang tính tham khảo theo phong thủy truyền thống.
                                            Việc xây dựng thành công còn phụ thuộc vào nhiều yếu tố khác như thiết kế,
                                            thi công chất lượng, điều kiện địa chính trị và tài chính.
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
                        <div className="section-title">Những Điều Cần Lưu Ý</div>
                        <div className="section-subtitle">
                            Hướng dẫn quan trọng khi xem tuổi làm nhà
                        </div>

                        <div className="grid-3" style={{ marginTop: '2rem' }}>
                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-blue" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-calendar-check"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Chọn Thời Điểm Phù Hợp</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Không chỉ xem năm mà còn cần chọn tháng, ngày tốt để động thổ, đổ móng và cất nóc.
                                        Mỗi giai đoạn có thời điểm phù hợp riêng.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-green" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Xem Tuổi Gia Đình</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Nên tham khảo tuổi của cả vợ chồng, đặc biệt người đứng tên sở hữu.
                                        Nếu có xung khắc, cần tìm cách hóa giải hoặc chọn thời điểm trung hòa.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <div className="icon-circle icon-gradient" style={{ margin: '0 auto 1rem' }}>
                                        <i className="fas fa-compass"></i>
                                    </div>
                                    <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Kết Hợp Yếu Tố Khác</h4>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        Cần kết hợp với hướng nhà, vị trí đất, địa hình xung quanh.
                                        Phong thủy tốt là sự hài hòa của nhiều yếu tố, không chỉ riêng tuổi tác.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Construction Steps */}
                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '2rem' }}>
                                Các Giai Đoạn Làm Nhà Cần Xem Tuổi
                            </h3>

                            <div className="grid-4">
                                <div style={{
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '1.5rem',
                                        width: '30px',
                                        height: '30px',
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        zIndex: '1'
                                    }}>1</div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <h4 style={{ color: '#2d3748', marginBottom: '0.5rem', fontSize: '1rem' }}>Động Thổ</h4>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                                            Nghi lễ khởi công, xới đất lần đầu
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '1.5rem',
                                        width: '30px',
                                        height: '30px',
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        zIndex: '1'
                                    }}>2</div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <h4 style={{ color: '#2d3748', marginBottom: '0.5rem', fontSize: '1rem' }}>Đổ Móng</h4>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                                            Đặt viên gạch đầu tiên, đổ bê tông móng
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '1.5rem',
                                        width: '30px',
                                        height: '30px',
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        zIndex: '1'
                                    }}>3</div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <h4 style={{ color: '#2d3748', marginBottom: '0.5rem', fontSize: '1rem' }}>Cất Nóc</h4>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                                            Lắp xà gồ, kèo cuối cùng của mái nhà
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '1.5rem',
                                        width: '30px',
                                        height: '30px',
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        zIndex: '1'
                                    }}>4</div>
                                    <div style={{ paddingTop: '1rem' }}>
                                        <h4 style={{ color: '#2d3748', marginBottom: '0.5rem', fontSize: '1rem' }}>Về Nhà</h4>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                                            Chọn ngày tốt để dọn về nhà mới
                                        </p>
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
                            Những thắc mắc phổ biến về xem tuổi làm nhà
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
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                                    Cần Tư Vấn Trực Tiếp?
                                </h3>
                                <p style={{
                                    marginBottom: '2rem',
                                    opacity: 0.9,
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6'
                                }}>
                                    Liên hệ với chúng tôi để được tư vấn chi tiết hơn về
                                    thời điểm tốt nhất cho dự án xây dựng của bạn
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
                                        Gọi Ngay
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

export default XemTuoiLamNhaPage;