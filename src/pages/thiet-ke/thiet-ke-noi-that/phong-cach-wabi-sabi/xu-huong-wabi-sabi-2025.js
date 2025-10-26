import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const XuHuongWabiSabi2025Page = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const trends = [
    {
      id: 'vat-lieu',
      name: 'Vật Liệu Tự Nhiên & Thô Mộc',
      icon: 'fas fa-tree',
      description: 'Gỗ tự nhiên, gạch đất nung, đá thô, gốm sứ, tre nứa mang cảm giác ấm áp, chân thật',
      features: [
        'Gỗ tự nhiên cao cấp',
        'Gạch đất nung thủ công',
        'Đá thô mộc mạc',
        'Gốm sứ không men',
        'Tre nứa tự nhiên'
      ],
      color: '#78716c'
    },
    {
      id: 'mau-sac',
      name: 'Màu Sắc Trầm Ấm, Trung Tính',
      icon: 'fas fa-palette',
      description: 'Nâu đất, be, xám tro, trắng ngà tạo cảm giác tĩnh lặng, thư thái',
      features: [
        'Nâu đất ấm áp',
        'Be dịu nhẹ',
        'Xám tro thanh tịnh',
        'Trắng ngà tinh tế',
        'Không dùng màu sắc rực rỡ'
      ],
      color: '#92400e'
    },
    {
      id: 'khong-gian',
      name: 'Không Gian Mở, Ánh Sáng Tự Nhiên',
      icon: 'fas fa-sun',
      description: 'Cửa kính lớn, giếng trời, tận dụng ánh sáng để làm nổi bật vật liệu mộc',
      features: [
        'Cửa kính lớn đón nắng',
        'Giếng trời thoáng đãng',
        'Ánh sáng tự nhiên tối đa',
        'Không gian mở liên thông',
        'Thông gió tự nhiên'
      ],
      color: '#d6d3d1'
    },
    {
      id: 'noi-that',
      name: 'Nội Thất Tối Giản – Công Năng Cao',
      icon: 'fas fa-couch',
      description: 'Bàn ghế gọn nhẹ, ít chi tiết, ưu tiên nội thất có công năng linh hoạt',
      features: [
        'Bàn ghế gọn gàng',
        'Ít chi tiết rườm rà',
        'Công năng linh hoạt',
        'Hình khối đơn giản',
        'Vật liệu thô mộc'
      ],
      color: '#a8a29e'
    },
    {
      id: 'trang-tri',
      name: 'Trang Trí Tinh Thần Zen',
      icon: 'fas fa-spa',
      description: 'Bình hoa khô, chậu gốm, tranh tối giản, cây xanh - đưa thiên nhiên vào trong nhà',
      features: [
        'Bình hoa khô tự nhiên',
        'Chậu gốm thủ công',
        'Tranh tối giản',
        'Cây xanh nhỏ gọn',
        'Đá tự nhiên trang trí'
      ],
      color: '#57534e'
    }
  ];

  const solutions = [
    {
      type: 'Biệt Thự Wabi-Sabi',
      icon: 'fas fa-home',
      suitable: 'Nha Trang - Villa nghỉ dưỡng, Resort',
      features: [
        'Không gian rộng → nhấn mạnh sự cân đối, tối giản',
        'Dùng tường thô, trần gỗ, sàn đá tự nhiên',
        'Kết hợp hồ cá koi, vườn cây, ánh sáng sân trong',
        'Tạo sự thiền định, gần gũi thiên nhiên',
        'Vật liệu chống ẩm mặn cao cấp'
      ],
      price: '200,000 - 280,000 VNĐ/m²',
      color: '#06b6d4'
    },
    {
      type: 'Chung Cư Wabi-Sabi',
      icon: 'fas fa-building',
      suitable: 'Hà Nội - Chung cư cao cấp, Nhà phố',
      features: [
        'Diện tích nhỏ → ưu tiên nội thất gọn, gam màu sáng',
        'Bố trí gương, cửa kính lớn để mở rộng thị giác',
        'Sử dụng đồ gốm nhỏ, cây xanh mini làm điểm nhấn',
        'Ánh sáng nhân tạo kết hợp tự nhiên',
        'Tối ưu không gian lưu trữ'
      ],
      price: '150,000 - 200,000 VNĐ/m²',
      color: '#ef4444'
    }
  ];

  const priceTable = [
    {
      type: 'Chung cư',
      price: '150,000 - 200,000',
      note: 'Phù hợp căn hộ nhỏ, tối giản',
      features: ['Nội thất gọn gàng', 'Màu sắc sáng', 'Ánh sáng tối ưu']
    },
    {
      type: 'Nhà phố',
      price: '160,000 - 220,000',
      note: 'Tối ưu không gian hẹp',
      features: ['Không gian thông minh', 'Chống ẩm tốt', 'Thiết kế linh hoạt']
    },
    {
      type: 'Biệt thự/Villa',
      price: '200,000 - 280,000',
      note: 'Vật liệu tự nhiên, không gian lớn',
      features: ['Vật liệu cao cấp', 'Không gian mở', 'Gần gũi thiên nhiên']
    }
  ];

  const faqData = [
    {
      question: 'Phong cách Wabi-Sabi có phù hợp với khí hậu Việt Nam không?',
      answer: 'Hoàn toàn phù hợp. Wabi-Sabi với vật liệu tự nhiên, không gian mở, thông gió tốt rất phù hợp khí hậu nhiệt đới. Tuy nhiên cần chọn gỗ chống ẩm và xử lý bảo vệ đúng cách ở Hà Nội và Nha Trang.'
    },
    {
      question: 'Chi phí thiết kế Wabi-Sabi có cao không?',
      answer: 'Chi phí vừa phải, từ 150,000 - 280,000 VNĐ/m² tùy loại hình. Wabi-Sabi hạn chế đồ cầu kỳ nên tiết kiệm chi phí trang trí, nhưng cần đầu tư vào vật liệu tự nhiên chất lượng.'
    },
    {
      question: 'Có thể áp dụng Wabi-Sabi cho chung cư nhỏ không?',
      answer: 'Có thể. Với chung cư nhỏ, ưu tiên nội thất gọn, gam màu sáng, gương và cửa kính lớn để mở rộng không gian. Thêm điểm nhấn bằng gốm nhỏ, cây xanh mini để tránh đơn điệu.'
    },
    {
      question: 'Vật liệu tự nhiên có bị xuống cấp nhanh không?',
      answer: 'Nếu chọn gỗ chống ẩm, phủ dầu bảo vệ và bảo dưỡng định kỳ thì không. Có thể dùng tre ép công nghiệp, gốm tráng men để tăng độ bền mà vẫn giữ tinh thần Wabi-Sabi.'
    },
    {
      question: 'Thời gian thiết kế và thi công mất bao lâu?',
      answer: 'Thiết kế 3D: 5-7 ngày. Thi công: 25-45 ngày tùy diện tích và độ phức tạp. Wabi-Sabi tối giản nên thời gian thi công thường nhanh hơn các phong cách phức tạp khác.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
                Phong cách <strong>Wabi-Sabi</strong> mang triết lý Nhật Bản về sự giản dị, bất toàn và tự nhiên,
                ngày càng được nhiều gia chủ lựa chọn trong năm 2025. Với xu hướng sống xanh, tối giản và
                gần gũi thiên nhiên, Wabi-Sabi trở thành giải pháp lý tưởng cho cả biệt thự rộng rãi lẫn
                chung cư nhỏ gọn tại Hà Nội và Nha Trang.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-gradient" id="trends">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-chart-line"></i>
              5 Xu Hướng Thiết Kế Wabi-Sabi 2025
            </h2>
            <p className="section-subtitle">
              Những xu hướng nổi bật đang dẫn đầu thị trường
            </p>

            <div className="grid-3">
              {trends.map((trend, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: trend.color }}>
                      <i className={trend.icon}></i>
                      {trend.name}
                    </h3>
                    <p>{trend.description}</p>
                    <ul>
                      {trend.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fas fa-chevron-right"></i>
                            {feature}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-lightbulb"></i>
              Giải Pháp Cho Biệt Thự & Chung Cư
            </h2>
            <p className="section-subtitle">
              Tùy chỉnh phong cách phù hợp với từng không gian
            </p>

            <div className="grid-2">
              {solutions.map((solution, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: solution.color }}>
                      <i className={solution.icon}></i>
                      {solution.type}
                    </h3>
                    <p><strong>Phù hợp:</strong> {solution.suitable}</p>
                    <ul>
                      {solution.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                      ))}
                    </ul>
                    <span className="standard">{solution.price}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-tag"></i>
              Báo Giá Thiết Kế Nội Thất Wabi-Sabi 2025
            </h2>
            <p className="section-subtitle">
              Đơn giá tham khảo VNĐ/m² - Thay đổi theo diện tích & vật liệu
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
                    <ul>
                      {item.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            {feature}
                          </li>
                      ))}
                    </ul>
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
              Giải đáp thắc mắc về xu hướng Wabi-Sabi 2025
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

export default XuHuongWabiSabi2025Page;