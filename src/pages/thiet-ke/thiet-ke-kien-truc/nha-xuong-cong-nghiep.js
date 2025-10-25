import React, { useState } from 'react';
import CTAContent from '../../../components/CTAContent/CTAContent';
import '../../../styles/PageStyles.css';

const NhaXuongCongNghiepPage = () => {
    const [activeTab, setActiveTab] = useState('steel');
    const [activeFaq, setActiveFaq] = useState(null);

    const designTypes = [
        {
            id: 'steel',
            name: 'Nhà Xưởng Khung Thép Tiền Chế',
            price: '80,000 - 120,000 VNĐ/m²',
            description: 'Thi công nhanh, chi phí hợp lý. Phù hợp nhà máy sản xuất vừa và nhỏ',
            features: ['Thi công nhanh 2-4 tháng', 'Chi phí hợp lý', 'Độ bền cao 20-30 năm', 'Dễ tháo lắp, di chuyển', 'Không gian rộng, thoáng', 'Mở rộng dễ dàng'],
            sizes: [
                { area: '200-500m²', type: 'Xưởng nhỏ', price: '16-60 triệu', features: 'Sản xuất nhỏ' },
                { area: '500-1500m²', type: 'Xưởng trung', price: '40-180 triệu', features: 'Sản xuất vừa' },
                { area: '1500-5000m²', type: 'Xưởng lớn', price: '120-600 triệu', features: 'Nhà máy' }
            ],
            bgColor: '#64748b'
        },
        {
            id: 'concrete',
            name: 'Nhà Xưởng Bê Tông - Thép',
            price: '100,000 - 150,000 VNĐ/m²',
            description: 'Bền chắc, tuổi thọ cao. Thích hợp nhà xưởng quy mô lớn',
            features: ['Cực kỳ bền chắc', 'Tuổi thọ 40-50 năm', 'Chịu tải trọng lớn', 'Chống cháy tốt', 'Cách âm, cách nhiệt', 'Phù hợp sản xuất nặng'],
            sizes: [
                { area: '500-1000m²', type: 'Xưởng bê tông', price: '50-150 triệu', features: 'Công nghiệp' },
                { area: '1000-3000m²', type: 'Nhà máy trung', price: '100-450 triệu', features: 'Sản xuất lớn' },
                { area: '3000-10000m²', type: 'Nhà máy lớn', price: '300-1.5 tỷ', features: 'KCN' }
            ],
            bgColor: '#475569'
        },
        {
            id: 'warehouse',
            name: 'Nhà Kho Công Nghiệp',
            price: '70,000 - 100,000 VNĐ/m²',
            description: 'Kho chứa hàng, kho logistics. Bố trí lối đi, giá kệ khoa học',
            features: ['Không gian lưu trữ tối ưu', 'Hệ thống giá kệ', 'Lối đi hợp lý', 'Thông gió tự nhiên', 'Chống ẩm mốc', 'An toàn PCCC'],
            sizes: [
                { area: '300-800m²', type: 'Kho nhỏ', price: '21-80 triệu', features: 'Kho hàng' },
                { area: '800-2000m²', type: 'Kho trung', price: '56-200 triệu', features: 'Logistics' },
                { area: '2000-8000m²', type: 'Kho lớn', price: '140-800 triệu', features: 'Phân phối' }
            ],
            bgColor: '#78716c'
        },
        {
            id: 'coldroom',
            name: 'Nhà Máy Chế Biến - Kho Lạnh',
            price: '120,000 - 180,000 VNĐ/m²',
            description: 'Đáp ứng tiêu chuẩn vệ sinh ATTP. Thường dùng tại Nha Trang cho ngành thủy sản',
            features: ['Chuẩn vệ sinh ATTP', 'Cách nhiệt tốt', 'Hệ thống lạnh hiện đại', 'Thoát nước chuyên dụng', 'Chống ẩm tuyệt đối', 'Đạt chuẩn xuất khẩu'],
            sizes: [
                { area: '200-500m²', type: 'Xưởng chế biến', price: '24-90 triệu', features: 'Quy mô nhỏ' },
                { area: '500-1500m²', type: 'Nhà máy CB', price: '60-270 triệu', features: 'Quy mô vừa' },
                { area: '1500-5000m²', type: 'Nhà máy lớn', price: '180-900 triệu', features: 'Xuất khẩu' }
            ],
            bgColor: '#06b6d4'
        }
    ];

    const benefits = [
        { icon: 'fas fa-cogs', title: 'Tối ưu sản xuất', description: 'Bố trí khoa học, thuận tiện vận hành hiệu quả' },
        { icon: 'fas fa-coins', title: 'Tiết kiệm chi phí', description: 'Vật liệu bền, giảm chi phí bảo trì lâu dài' },
        { icon: 'fas fa-shield-alt', title: 'An toàn & bền vững', description: 'Đạt tiêu chuẩn kỹ thuật, PCCC đầy đủ' },
        { icon: 'fas fa-expand-arrows-alt', title: 'Dễ mở rộng', description: 'Thiết kế linh hoạt, dễ nâng cấp sau này' }
    ];

    const faqData = [
        { question: 'Nên chọn khung thép hay bê tông cho nhà xưởng?', answer: 'Khung thép tiền chế: Nhanh (2-4 tháng), rẻ hơn 20-30%, dễ di chuyển. Phù hợp xưởng nhỏ, sản xuất nhẹ. Bê tông-thép: Bền hơn (40-50 năm), chịu tải lớn, chống cháy tốt. Phù hợp nhà máy lớn, sản xuất nặng. Chi phí cao hơn 30-40%.' },
        { question: 'Chi phí xây nhà xưởng 1000m² khoảng bao nhiêu?', answer: 'Thiết kế: 80,000-150,000 VNĐ/m² (80-150 triệu). Xây dựng khung thép: 2.5-4 triệu/m² (2.5-4 tỷ). Xây bê tông: 4-6 triệu/m² (4-6 tỷ). Tổng dự án khung thép 1000m²: 2.6-4.2 tỷ. Bê tông: 4.1-6.2 tỷ.' },
        { question: 'Nhà xưởng cần những giấy phép gì?', answer: 'Cần: (1) Giấy phép xây dựng, (2) Giấy chứng nhận đủ điều kiện PCCC, (3) Giấy phép môi trường (nếu có chất thải), (4) Giấy chứng nhận đủ điều kiện ATTP (nếu chế biến thực phẩm). Chúng tôi hỗ trợ tư vấn hồ sơ.' }
    ];

    const currentType = designTypes.find(type => type.id === activeTab);
    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    return (
        <div className="construction-detail-page">
            <section className="section section-gradient">
                <div className="container">
                    <h1 className="section-title"><i className="fas fa-industry icon-primary"></i>Thiết Kế Nhà Xưởng - Nhà Công Nghiệp 2025</h1>
                    <p className="section-subtitle">Hiện đại - tối ưu công năng - tiết kiệm chi phí tại Hà Nội & Nha Trang</p>
                    <div className="grid-4">
                        {benefits.map((item, index) => (<div key={index} className="feature-item"><i className={item.icon}></i><span>{item.title}</span></div>))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-star icon-primary"></i>Lợi Ích Thiết Kế Nhà Xưởng Chuyên Nghiệp</h2>
                    <div className="grid-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="info-card">
                                <div className="info-icon"><i className={benefit.icon}></i></div>
                                <h3>{benefit.title}</h3><p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-tags icon-primary"></i>Loại Hình Nhà Xưởng & Báo Giá</h2>
                    <div className="tabs">
                        {designTypes.map(type => (<button key={type.id} className={`tab ${activeTab === type.id ? 'active' : ''}`} onClick={() => setActiveTab(type.id)}>{type.name}</button>))}
                    </div>

                    {currentType && (
                        <div className="detail-card">
                            <div className="detail-header" style={{ background: `linear-gradient(135deg, ${currentType.bgColor}, ${currentType.bgColor}dd)` }}>
                                <h3>{currentType.name}</h3><div className="price-range">{currentType.price}</div><p>{currentType.description}</p>
                            </div>
                            <div className="detail-content grid-layout">
                                <div className="info-section">
                                    <h4><i className="fas fa-star"></i> Ưu điểm:</h4>
                                    <ul className="info-list">{currentType.features.map((feature, index) => (<li key={index}><i className="fas fa-check"></i>{feature}</li>))}</ul>
                                </div>
                                <div className="info-section">
                                    <h4><i className="fas fa-ruler"></i> Quy mô & giá:</h4>
                                    <div className="item-list">
                                        {currentType.sizes.map((size, index) => (
                                            <div key={index} className="item-card-extended">
                                                <span className="item-type">{size.area}</span>
                                                <div className="item-specs">
                                                    <span className="item-size">{size.type} | {size.features}</span>
                                                    <span className="item-price-extended">{size.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="detail-content">
                                <div className="detail-actions">
                                    <a href="/lien-he" className="btn btn-primary"><i className="fas fa-phone"></i>Liên Hệ Báo Giá</a>
                                    <a href="/bao-gia/tu-van-bao-gia" className="btn btn-secondary"><i className="fas fa-images"></i>Xem Dự Án Mẫu</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title"><i className="fas fa-question-circle icon-primary"></i>Câu Hỏi Thường Gặp</h2>
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className={`faq-question ${activeFaq === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span><i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
                                {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTAContent />
        </div>
    );
};

export default NhaXuongCongNghiepPage;
