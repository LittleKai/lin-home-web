import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const Top10MauTanCoDienPage = () => {
  const [activeTab, setActiveTab] = useState('living-room');
  const [activeFaq, setActiveFaq] = useState(null);

  const designs = [
    {
      id: 'living-room-villa',
      category: 'living-room',
      name: 'Phòng Khách Biệt Thự Tân Cổ Điển Sang Trọng',
      location: 'Hà Nội & Nha Trang',
      features: [
        'Sofa bọc da cao cấp',
        'Bàn trà đá marble',
        'Đèn chùm pha lê',
        'Phào chỉ trần tinh xảo',
        'Gam màu trắng - vàng ánh kim'
      ],
      price: '250-320 triệu',
      area: '40-60m²',
      color: '#3b82f6'
    },
    {
      id: 'living-room-townhouse',
      category: 'living-room',
      name: 'Phòng Khách Nhà Phố Tân Cổ Điển Tinh Gọn',
      location: 'Hà Nội',
      features: [
        'Gam màu trắng - vàng ánh kim',
        'Sofa vải nhung',
        'Kệ tivi treo tường tối giản',
        'Phào chỉ nhẹ',
        'Ánh sáng tự nhiên tối đa'
      ],
      price: '60-90 triệu',
      area: '20-30m²',
      color: '#10b981'
    },
    {
      id: 'dining-room',
      category: 'dining',
      name: 'Phòng Ăn Biệt Thự Đẳng Cấp',
      location: 'Hà Nội & Nha Trang',
      features: [
        'Bàn ăn dài 8-12 ghế',
        'Tủ rượu âm tường',
        'Đèn chùm pha lê trang trí',
        'Ghế bọc da/nhung',
        'Phào chỉ tinh tế'
      ],
      price: '80-120 triệu',
      area: '25-35m²',
      color: '#f59e0b'
    },
    {
      id: 'kitchen',
      category: 'kitchen',
      name: 'Phòng Bếp Hiện Đại Pha Tân Cổ Điển',
      location: 'Hà Nội & Nha Trang',
      features: [
        'Tủ bếp gỗ công nghiệp phủ sơn trắng',
        'Tay nắm đồng sang trọng',
        'Đảo bếp kết hợp quầy bar',
        'Đá ốp bếp marble',
        'Đèn thả trang trí'
      ],
      price: '100-150 triệu',
      area: '15-25m²',
      color: '#ef4444'
    },
    {
      id: 'bedroom-master',
      category: 'bedroom',
      name: 'Phòng Ngủ Master Biệt Thự',
      location: 'Hà Nội & Nha Trang',
      features: [
        'Giường bọc nệm cao cấp',
        'Tab đầu giường phào chỉ tinh tế',
        'Đèn ngủ vàng ấm',
        'Rèm hai lớp',
        'Tủ áo âm tường'
      ],
      price: '150-200 triệu',
      area: '30-40m²',
      color: '#8b5cf6'
    },
    {
      id: 'bedroom-small',
      category: 'bedroom',
      name: 'Phòng Ngủ Nhỏ Nhà Phố',
      location: 'Hà Nội',
      features: [
        'Nội thất gọn gàng',
        'Giường gỗ công nghiệp phủ veneer',
        'Gam màu sáng mở rộng không gian',
        'Tủ áo âm tường thông minh',
        'Ánh sáng vàng ấm'
      ],
      price: '40-60 triệu',
      area: '12-18m²',
      color: '#ec4899'
    },
    {
      id: 'bathroom',
      category: 'bathroom',
      name: 'Phòng Tắm Biệt Thự Tân Cổ Điển',
      location: 'Hà Nội & Nha Trang',
      features: [
        'Lavabo đá marble',
        'Bồn tắm đặt sàn',
        'Gương lớn viền mạ vàng',
        'Đèn tường sang trọng',
        'Phào chỉ nhẹ nhàng'
      ],
      price: '60-100 triệu',
      area: '10-15m²',
      color: '#14b8a6'
    },
    {
      id: 'office',
      category: 'office',
      name: 'Phòng Làm Việc Tân Cổ Điển',
      location: 'Hà Nội',
      features: [
        'Bàn gỗ tự nhiên',
        'Ghế da cổ điển',
        'Thư viện sách âm tường',
        'Ánh sáng vàng ấm',
        'Phào chỉ tinh tế'
      ],
      price: '50-80 triệu',
      area: '12-20m²',
      color: '#a855f7'
    },
    {
      id: 'hotel',
      category: 'commercial',
      name: 'Nội Thất Khách Sạn Mini Tân Cổ Điển',
      location: 'Nha Trang',
      features: [
        'Giường bọc da cao cấp',
        'Phào chỉ nhẹ, tinh tế',
        'Ánh sáng vàng sang trọng',
        'Bố trí tiện nghi',
        'Phù hợp khách du lịch cao cấp'
      ],
      price: '400-600 triệu',
      area: '80-120m²',
      color: '#f97316'
    },
    {
      id: 'villa-beach',
      category: 'villa',
      name: 'Villa Tân Cổ Điển Ven Biển',
      location: 'Nha Trang',
      features: [
        'Không gian mở, thoáng đãng',
        'Vật liệu chống ẩm mặn',
        'Kết hợp sang trọng cổ điển',
        'Tiện nghi hiện đại',
        'View biển tuyệt đẹp'
      ],
      price: '1-2 tỷ',
      area: '150-250m²',
      color: '#06b6d4'
    }
  ];

  const categories = [
    { id: 'living-room', name: 'Phòng Khách', icon: 'fas fa-couch' },
    { id: 'villa', name: 'Villa', icon: 'fas fa-home' },
    { id: 'dining', name: 'Phòng Ăn', icon: 'fas fa-utensils' },
    { id: 'kitchen', name: 'Phòng Bếp', icon: 'fas fa-fire-burner' },
    { id: 'bedroom', name: 'Phòng Ngủ', icon: 'fas fa-bed' },
    { id: 'bathroom', name: 'Phòng Tắm', icon: 'fas fa-shower' },
    { id: 'office', name: 'Phòng Làm Việc', icon: 'fas fa-briefcase' },
    { id: 'commercial', name: 'Khách Sạn/Homestay', icon: 'fas fa-hotel' }
  ];

  const priceTable = [
    {
      type: 'Nhà phố - nhà ống',
      price: '200,000 - 260,000',
      note: 'Tối ưu chi tiết, diện tích vừa & nhỏ',
      suitable: 'Hà Nội'
    },
    {
      type: 'Biệt thự/villa',
      price: '250,000 - 320,000',
      note: 'Sang trọng, không gian lớn',
      suitable: 'Hà Nội & Nha Trang'
    },
    {
      type: 'Căn hộ cao cấp',
      price: '180,000 - 250,000',
      note: 'Phù hợp chung cư hạng sang',
      suitable: 'Hà Nội'
    }
  ];

  const faqData = [
    {
      question: 'Mẫu thiết kế nào phù hợp với nhà phố nhỏ tại Hà Nội?',
      answer: 'Mẫu "Phòng Khách Nhà Phố Tân Cổ Điển Tinh Gọn" và "Phòng Ngủ Nhỏ Nhà Phố" là phù hợp nhất. Giảm chi tiết, ưu tiên màu sáng, nội thất đa năng nhưng vẫn giữ tinh thần Tân cổ điển.'
    },
    {
      question: 'Villa ven biển Nha Trang nên chọn mẫu nào?',
      answer: 'Mẫu "Villa Tân Cổ Điển Ven Biển" với không gian mở, vật liệu chống ẩm mặn, kết hợp sang trọng cổ điển và tiện nghi hiện đại. Giá 1-2 tỷ cho 150-250m².'
    },
    {
      question: 'Chi phí thiết kế phòng khách Tân cổ điển là bao nhiêu?',
      answer: 'Nhà phố: 60-90 triệu (20-30m²). Biệt thự: 250-320 triệu (40-60m²). Bao gồm thiết kế 3D, giám sát thi công, nội thất cơ bản.'
    },
    {
      question: 'Có thể kết hợp Tân cổ điển với phong cách khác không?',
      answer: 'Có thể kết hợp với phong cách Hiện đại (Modern) để giảm chi tiết phào chỉ, tăng tính tiện nghi nhưng vẫn giữ được nét sang trọng Tân cổ điển.'
    },
    {
      question: 'Khách sạn mini Tân cổ điển có thu hút khách không?',
      answer: 'Rất thu hút, đặc biệt ở Nha Trang. Tân cổ điển tạo không gian sang trọng, đẳng cấp, phù hợp khách du lịch cao cấp. Giá thuê cao hơn 20-30% so với thông thường.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const filteredDesigns = designs.filter(d => d.category === activeTab);

  return (
      <div className="main-content">

        <section className="section" id="intro">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-info-circle"></i>
              Giới Thiệu
            </h2>
            <div className="content-text">
              <p>
                Phong cách <strong>Tân cổ điển (Neo-classical)</strong> là biểu tượng của sự sang trọng –
                tinh tế – bền vững theo thời gian. Năm 2025, nhiều gia chủ lựa chọn Tân cổ điển cho
                biệt thự, nhà phố, chung cư cao cấp tại Hà Nội & Nha Trang.
              </p>
              <p>
                Dưới đây là <strong>10 mẫu thiết kế nội thất Tân cổ điển đẹp nhất 2025</strong>,
                giúp bạn có thêm ý tưởng cho không gian sống trong mơ.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-gradient" id="designs">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-images"></i>
              Top 10 Mẫu Thiết Kế Tân Cổ Điển
            </h2>
            <p className="section-subtitle">
              Chọn danh mục để xem mẫu thiết kế
            </p>

            <div className="tabs">
              {categories.map(cat => (
                  <button
                      key={cat.id}
                      className={`tab ${activeTab === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(cat.id)}
                  >
                    <i className={cat.icon}></i>
                    {cat.name}
                  </button>
              ))}
            </div>

            <div className="grid-2">
              {filteredDesigns.map((design, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: design.color }}>
                      <i className="fas fa-star"></i>
                      {design.name}
                    </h3>
                    <p className="location-badge">
                      <i className="fas fa-map-marker-alt"></i>
                      {design.location}
                    </p>
                    <ul>
                      {design.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                      ))}
                    </ul>
                    <div className="design-info">
                                    <span className="standard">
                                        <i className="fas fa-ruler-combined"></i>
                                      {design.area}
                                    </span>
                      <span className="standard">
                                        <i className="fas fa-tag"></i>
                        {design.price}
                                    </span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-tag"></i>
              Báo Giá Thiết Kế Nội Thất Tân Cổ Điển 2025
            </h2>
            <p className="section-subtitle">
              Đơn giá tham khảo VNĐ/m² - Thay đổi theo vật liệu & yêu cầu chi tiết
            </p>

            <div className="grid-3">
              {priceTable.map((item, index) => (
                  <div key={index} className="info-card">
                    <h3>
                      <i className="fas fa-home"></i>
                      {item.type}
                    </h3>
                    <p className="price-highlight">{item.price} VNĐ/m²</p>
                    <p><strong>Ghi chú:</strong> {item.note}</p>
                    <p><strong>Phù hợp:</strong> {item.suitable}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-circle-question"></i>
              Câu Hỏi Thường Gặp
            </h2>
            <p className="section-subtitle">
              Giải đáp thắc mắc về mẫu thiết kế Tân cổ điển
            </p>

            <div className="faq-container">
              {faqData.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button
                        className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <i className="fas fa-chevron-down"></i>
                    </button>
                    {activeFaq === index && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>

        <CTAContent />
      </div>
  );
};

export default Top10MauTanCoDienPage;