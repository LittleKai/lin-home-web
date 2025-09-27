// src/pages/ung-dung/ThuocLoBanPage.js
import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import CTAContent from '../../components/CTAContent/CTAContent';
import '../../styles/CommonStyles.css';
import './ThuocLoBanPage.css';

const ThuocLoBanPage = () => {
    const [measurement, setMeasurement] = useState(1200);
    const [selectedRulerLength, setSelectedRulerLength] = useState(522);
    const [result, setResult] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    // Define ruler segments according to traditional Vietnamese feng shui (in mm)
    const rulerSegments = {
        522: [ // 52.2cm = 522mm - Thông Thủy (Airflow ruler for doors/windows)
            { name: "Tài", type: "good", percentage: 12.5 },
            { name: "Bệnh", type: "bad", percentage: 12.5 },
            { name: "Ly", type: "bad", percentage: 12.5 },
            { name: "Nghĩa", type: "good", percentage: 12.5 },
            { name: "Quan", type: "good", percentage: 12.5 },
            { name: "Kiếp", type: "bad", percentage: 12.5 },
            { name: "Hại", type: "bad", percentage: 12.5 },
            { name: "Bản", type: "good", percentage: 12.5 }
        ],
        429: [ // 42.9cm = 429mm - Dương Trạch (Yang construction for solid structures)
            { name: "Tài", type: "good", percentage: 12.5 },
            { name: "Bệnh", type: "bad", percentage: 12.5 },
            { name: "Ly", type: "bad", percentage: 12.5 },
            { name: "Nghĩa", type: "good", percentage: 12.5 },
            { name: "Quan", type: "good", percentage: 12.5 },
            { name: "Kiếp", type: "bad", percentage: 12.5 },
            { name: "Hại", type: "bad", percentage: 12.5 },
            { name: "Bản", type: "good", percentage: 12.5 }
        ],
        388: [ // 38.8cm = 388mm - Âm Phần (Yin ruler for furniture/spiritual objects)
            { name: "Đinh", type: "good", percentage: 12.5 },
            { name: "Hại", type: "bad", percentage: 12.5 },
            { name: "Vượng", type: "good", percentage: 12.5 },
            { name: "Khổ", type: "bad", percentage: 12.5 },
            { name: "Nghĩa", type: "good", percentage: 12.5 },
            { name: "Quan", type: "good", percentage: 12.5 },
            { name: "Kiếp", type: "bad", percentage: 12.5 },
            { name: "Tài", type: "good", percentage: 12.5 }
        ]
    };

    const meanings = {
        // Auspicious segments (Good feng shui)
        "Tài": "Tiền tài, phú quý - mang lại thịnh vượng tài chính",
        "Nghĩa": "Nhân nghĩa, đạo đức - hòa hợp gia đình, con cháu hiếu thảo",
        "Quan": "Quan lộc, thăng tiến - sự nghiệp thành công, học hành tấn tới",
        "Bản": "Gốc gác vững chắc - nền tảng ổn định, phúc lộc lâu dài",
        "Đinh": "Đinh thịnh, phát đạt - gia đình hưng vượng, con cháu đông đúc",
        "Vượng": "Hưng vượng, phồn vinh - mọi việc thuận lợi, kinh doanh phát đạt",

        // Inauspicious segments (Poor feng shui - should avoid)
        "Bệnh": "Bệnh tật, yếu đuối - sức khỏe kém, chi phí y tế cao",
        "Ly": "Chia ly, tan vỡ - gia đình bất hòa, ly hôn, mất mát",
        "Kiếp": "Kiếp nạn, tai họa - mất tiền, bị trộm, tai nạn bất ngờ",
        "Hại": "Tổn hại, bất lợi - xui xẻo, ảnh hưởng xấu, thất bại",
        "Khổ": "Khó khăn, đau khổ - gặp nhiều trở ngại, cuộc sống khó khăn"
    };

    const rulerTypes = [
        { value: 522, name: "Thông Thủy", description: "Cửa, cửa sổ, không gian thoáng", icon: "fas fa-door-open" },
        { value: 429, name: "Dương Trạch", description: "Bếp, cầu thang, tường, móng", icon: "fas fa-building" },
        { value: 388, name: "Âm Phần", description: "Bàn thờ, giường, tủ, bàn ghế", icon: "fas fa-chair" }
    ];

    const faqData = [
        {
            question: "Thước Lỗ Ban là gì và tại sao nên sử dụng?",
            answer: "Thước Lỗ Ban là hệ thống đo lường phong thủy truyền thống từ thời nhà Minh (thế kỷ 13-15), được thợ mộc Trung Hoa và Việt Nam sử dụng để chọn kích thước may mắn. Mỗi chu kỳ thước chia thành 8 đoạn với ý nghĩa tốt/xấu khác nhau, giúp mang lại vận may và tránh điều bất lợi cho gia chủ."
        },
        {
            question: "Khi nào dùng thước Thông Thủy 522mm?",
            answer: "Thước Thông Thủy (522mm) dùng cho các khoảng không thoáng khí như cửa chính, cửa phòng, cửa sổ, chiều cao trần nhà. Đây là thước quan trọng nhất vì cửa là nơi khí vào ra, ảnh hưởng trực tiếp đến vận khí của cả ngôi nhà và gia đình."
        },
        {
            question: "Thước Dương Trạch 429mm dùng để làm gì?",
            answer: "Thước Dương Trạch (429mm) áp dụng cho các kết cấu rắn chắc như bếp nấu, bậc thang, móng nhà, tường ngăn, cột trụ. Những bộ phận này thuộc yếu tố Dương, ảnh hưởng đến sự ổn định và thịnh vượng lâu dài của ngôi nhà."
        },
        {
            question: "Ứng dụng của thước Âm Phần 388mm?",
            answer: "Thước Âm Phần (388mm) được sử dụng cho đồ nội thất và vật phẩm tâm linh như bàn thờ tổ tiên, giường ngủ, tủ quần áo, bàn làm việc. Những vật dụng này thuộc yếu tố Âm, ảnh hưởng trực tiếp đến sức khỏe và tài lộc của người sử dụng."
        },
        {
            question: "Cách đọc kết quả thước Lỗ Ban như thế nào?",
            answer: "Kết quả hiển thị màu đỏ (tốt) hoặc màu đen (xấu). Nên chọn kích thước rơi vào vùng đỏ với tên gọi tích cực như Tài (tiền tài), Nghĩa (hòa hợp), Quan (thăng tiến), Bản (ổn định). Tránh vùng đen như Bệnh (ốm đau), Ly (chia ly), Kiếp (mất mát), Hại (bất lợi)."
        },
        {
            question: "Thước Lỗ Ban có thực sự hiệu quả không?",
            answer: "Thước Lỗ Ban phản ánh kinh nghiệm thiết kế của thợ mộc qua hàng nghìn năm, tích hợp nguyên lý tỷ lệ vàng và cảm nhận thẩm mỹ. Nhiều công trình cung đình và nhà cổ nổi tiếng đều áp dụng hệ thống này. Dù không có bằng chứng khoa học tuyệt đối, nhưng việc tuân theo giúp tạo không gian hài hòa và tâm lý thoải mái."
        }
    ];

    // Calculate result with improved accuracy
    const calculateResult = useCallback(() => {
        if (measurement <= 0) return;

        // Calculate position within one ruler cycle using modulo
        const position = measurement % selectedRulerLength;
        const cycles = Math.floor(measurement / selectedRulerLength);

        const segments = rulerSegments[selectedRulerLength];
        const segmentLength = selectedRulerLength / 8; // Each segment is exactly 1/8 of ruler length

        // Find which segment the position falls into
        const segmentIndex = Math.floor(position / segmentLength);

        // Handle edge case when position equals ruler length (should be segment 0)
        const actualSegmentIndex = segmentIndex >= 8 ? 0 : segmentIndex;
        const currentSegment = segments[actualSegmentIndex];

        setResult({
            position,
            cycles,
            segment: currentSegment,
            segmentIndex: actualSegmentIndex,
            segmentLength,
            positionInSegment: position - (actualSegmentIndex * segmentLength),
            meaning: meanings[currentSegment.name] || "Không có thông tin"
        });
    }, [measurement, selectedRulerLength, rulerSegments, meanings]);

    // Calculate result whenever measurement or ruler type changes
    useEffect(() => {
        calculateResult();
    }, [calculateResult]);

    const RulerVisual = ({ position, segment }) => {
        const segments = rulerSegments[selectedRulerLength];
        const markerPosition = (position / selectedRulerLength) * 100;

        return (
            <div className="ruler-visual">
                <div className="ruler-segments">
                    {segments.map((seg, index) => (
                        <div
                            key={index}
                            className={`segment ${seg.type} ${seg.name === segment.name ? 'current' : ''}`}
                            title={`${seg.name}: ${meanings[seg.name] || ''}`}
                        >
                            {seg.name}
                        </div>
                    ))}
                </div>
                <div
                    className="marker"
                    style={{ left: `${markerPosition}%` }}
                />
            </div>
        );
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="page-wrapper">
            <Header />

            <main className="main-content">
                {/* Compact Header */}
                <section className="compact-header">
                    <div className="container">
                        <h1 className="page-title">
                            <i className="fas fa-ruler-combined"></i>
                            Thước Lỗ Ban Online
                        </h1>
                        <div className="quick-guide">
                            <span className="guide-item good">Đỏ = Tốt</span>
                            <span className="guide-item bad">Đen = Xấu</span>
                        </div>
                    </div>
                </section>

                {/* Main Calculator */}
                <section className="section">
                    <div className="container">
                        <div className="compact-calculator">
                            {/* Input Row */}
                            <div className="input-row">
                                <div className="measurement-group">
                                    <label>Kích thước (mm):</label>
                                    <input
                                        type="number"
                                        className="measurement-input"
                                        value={measurement}
                                        onChange={(e) => setMeasurement(Number(e.target.value))}
                                        placeholder="Nhập số"
                                        min="1"
                                    />
                                </div>

                                <div className="quick-sizes">
                                    {[800, 1000, 1200, 1500, 2000, 2100].map(size => (
                                        <button
                                            key={size}
                                            className="size-btn"
                                            onClick={() => setMeasurement(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Ruler Types */}
                            <div className="ruler-row">
                                <label>Loại thước:</label>
                                <div className="ruler-options">
                                    {rulerTypes.map(type => (
                                        <button
                                            key={type.value}
                                            className={`ruler-btn ${selectedRulerLength === type.value ? 'active' : ''}`}
                                            onClick={() => setSelectedRulerLength(type.value)}
                                        >
                                            <i className={type.icon}></i>
                                            <span className="btn-name">{type.name}</span>
                                            <span className="btn-desc">{type.description}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Result */}
                            {result && (
                                <div className={`result-compact ${result.segment.type === 'good' ? 'good' : 'bad'}`}>
                                    <div className="result-header">
                                        <div className="result-status">
                                            {result.segment.type === 'good' ?
                                                <><i className="fas fa-check"></i> TỐT</> :
                                                <><i className="fas fa-times"></i> XẤU</>
                                            }
                                        </div>
                                        <div className="result-size">{measurement}mm</div>
                                    </div>

                                    <RulerVisual position={result.position} segment={result.segment} />

                                    <div className="result-info">
                                        <span><strong>{result.segment.name}:</strong> {result.meaning}</span>
                                        <span>{result.cycles} chu kỳ + {result.position.toFixed(1)}mm</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Compact FAQ */}
                <section className="section section-alt">
                    <div className="container">
                        <h2 className="section-title">Câu hỏi thường gặp</h2>
                        <div className="compact-faq">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                                >
                                    <div
                                        className="faq-question"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h4>{faq.question}</h4>
                                        <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'} faq-icon`}></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
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

export default ThuocLoBanPage;