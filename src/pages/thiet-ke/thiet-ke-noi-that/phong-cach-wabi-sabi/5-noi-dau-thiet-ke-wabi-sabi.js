import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const NoiDauThietKeTanCoDienPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const painPoints = [
    {
      id: 1,
      title: 'Thiết Kế Quá Rườm Rà, Nặng Nề',
      icon: 'fas fa-compress-arrows-alt',
      problem: 'KTS chưa tiết chế, lạm dụng phào chỉ & hoa văn làm không gian chật chội',
      solutions: [
        'Ưu tiên đường nét tinh giản, đăng đối',
        'Chỉ nhấn mạnh tại trần, tường, cửa chính',
        'Không dùng phào chỉ toàn bộ không gian',
        'Tập trung điểm nhấn nghệ thuật'
      ],
      color: '#ef4444',
      savings: 'Không gian thoáng đãng hơn 30%'
    },
    {
      id: 2,
      title: 'Chi Phí Cao, Dễ Vượt Ngân Sách',
      icon: 'fas fa-money-bill-wave',
      problem: 'Vật liệu cao cấp (gỗ tự nhiên, đá marble, vải nhung) làm tăng chi phí',
      solutions: [
        'Chọn gỗ công nghiệp phủ veneer',
        'Dùng đá nhân tạo thay marble',
        'Tham khảo báo giá chi tiết từ đầu',
        'Tránh phát sinh trong thi công'
      ],
      color: '#f59e0b',
      savings: 'Tiết kiệm 30-40% chi phí'
    },
    {
      id: 3,
      title: 'Không Gian Nhà Phố Chật Hẹp, Thiếu Sáng',
      icon: 'fas fa-sun',
      problem: 'Phong cách Tân cổ điển thường hợp biệt thự rộng, nhà phố dễ bí bách',
      solutions: [
        'Dùng màu sáng (trắng, kem) thay tông tối',
        'Tận dụng giếng trời',
        'Cửa kính lớn lấy sáng tự nhiên',
        'Giảm phào chỉ, nội thất gọn'
      ],
      color: '#3b82f6',
      savings: 'Tăng ánh sáng tự nhiên 40%'
    },
    {
      id: 4,
      title: 'Nội Thất Nhanh Xuống Cấp Tại Nha Trang',
      icon: 'fas fa-water',
      problem: 'Độ ẩm, hơi muối biển gây hỏng gỗ & han gỉ kim loại',
      solutions: [
        'Dùng gỗ chống ẩm (Teak, Lim Nam Phi)',
        'Inox 304, kim loại mạ PVD',
        'Chống ẩm mặn bằng lớp phủ bảo vệ',
        'Bảo dưỡng định kỳ 6 tháng/lần'
      ],
      color: '#06b6d4',
      savings: 'Tăng tuổi thọ gấp 2-3 lần'
    },
    {
      id: 5,
      title: 'Thiết Kế Không Đồng Bộ – Thiếu Cân Đối',
      icon: 'fas fa-balance-scale',
      problem: 'Không có bản vẽ 3D tổng thể, chọn đồ rời rạc dẫn đến mất cân đối',
      solutions: [
        'Thiết kế 3D từ đầu đến cuối',
        'Mô phỏng thực tế trước thi công',
        'Chọn đơn vị thiết kế & thi công trọn gói',
        'Đảm bảo đồng bộ kiến trúc - nội thất'
      ],
      color: '#8b5cf6',
      savings: 'Tránh lãng phí 40-50% chi phí'
    }
  ];

  const climateTable = [
    {
      location: 'Hà Nội',
      issue: 'Độ ẩm cao (80-90%)',
      solution: 'Gỗ chống ẩm + giếng trời',
      materials: ['Gỗ Teak', 'Gỗ Lim Nam Phi', 'Sơn PU chống ẩm']
    },
    {
      location: 'Nha Trang',
      issue: 'Ẩm mặn biển',
      solution: 'Gỗ chống mặn + inox 304',
      materials: ['Gỗ Teak', 'Inox 304', 'Kim loại mạ PVD']
    },
    {
      location: 'Nhà phố',
      issue: 'Diện tích nhỏ',
      solution: 'Màu sáng + nội thất gọn',
      materials: ['Gỗ công nghiệp', 'Phào chỉ nhẹ', 'Kính lớn']
    }
  ];

  const priceTable = [
    {
      type: 'Nhà phố - nhà ống',
      price: '200,000 - 260,000',
      note: 'Tiết chế chi tiết, phù hợp diện tích nhỏ',
      features: ['Chi tiết tinh giản', 'Phào chỉ nhẹ', 'Nội thất gọn gàng']
    },
    {
      type: 'Biệt thự/villa',
      price: '250,000 - 320,000',
      note: 'Sang trọng, nhiều không gian lớn',
      features: ['Vật liệu cao cấp', 'Phào chỉ nghệ thuật', 'Không gian rộng']
    },
    {
      type: 'Gói thiết kế & thi công trọn gói',
      price: 'Báo giá trực tiếp',
      note: 'Tùy diện tích & vật liệu',
      features: ['Thiết kế 3D', 'Giám sát thi công', 'Bảo hành dài hạn']
    }
  ];

  const faqData = [
    {
      question: 'Làm sao để giảm chi phí mà vẫn giữ được phong cách Tân cổ điển?',
      answer: 'Kết hợp gỗ công nghiệp phủ veneer với gỗ tự nhiên ở vị trí trọng điểm. Sử dụng đá nhân tạo thay marble. Tham khảo báo giá chi tiết từ đầu để tránh phát sinh. Tiết kiệm 30-40% nhưng vẫn đẹp.'
    },
    {
      question: 'Tân cổ điển có bị rườm rà không?',
      answer: 'Nếu KTS không tiết chế, lạm dụng phào chỉ thì sẽ rườm rà. Giải pháp: ưu tiên đường nét tinh giản, chỉ nhấn mạnh tại trần, tường, cửa chính. Không dùng phào chỉ toàn bộ không gian.'
    },
    {
      question: 'Nhà phố nhỏ có nên thiết kế Tân cổ điển không?',
      answer: 'Có thể nhưng cần tiết chế chi tiết. Dùng màu sáng (trắng, kem), tận dụng giếng trời và cửa kính lớn. Giảm phào chỉ, nội thất gọn gàng. Tập trung điểm nhấn thay vì đầy đủ chi tiết.'
    },
    {
      question: 'Nha Trang khí hậu mặn, nội thất Tân cổ điển có bị hỏng nhanh không?',
      answer: 'Nếu chọn đúng vật liệu: gỗ chống ẩm (Teak, Lim Nam Phi), inox 304, kim loại mạ PVD và bảo dưỡng định kỳ thì hoàn toàn bền. Tuổi thọ tăng gấp 2-3 lần.'
    },
    {
      question: 'Làm sao tránh thiết kế không đồng bộ?',
      answer: 'Thiết kế 3D từ đầu đến cuối, mô phỏng thực tế trước thi công. Chọn đơn vị thiết kế & thi công trọn gói để đảm bảo đồng bộ kiến trúc - nội thất. Tránh lãng phí 40-50% chi phí.'
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
                Phong cách <strong>Tân cổ điển (Neo-classical)</strong> được nhiều gia chủ lựa chọn
                vì sự sang trọng – đẳng cấp – bền vững theo thời gian. Tuy nhiên, trong thực tế thi công,
                không ít khách hàng gặp phải "nỗi đau" khiến công trình không đạt như kỳ vọng.
              </p>
              <p>
                Dưới đây là <strong>5 nỗi đau thường gặp nhất</strong> khi thiết kế nội thất Tân cổ điển
                và cách khắc phục hiệu quả.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-gradient" id="pain-points">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-first-aid"></i>
              5 Nỗi Đau & Giải Pháp Khắc Phục
            </h2>
            <p className="section-subtitle">
              Phân tích chi tiết và giải pháp thực tế
            </p>

            <div className="grid-2">
              {painPoints.map((pain, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: pain.color }}>
                      <i className={pain.icon}></i>
                      Nỗi đau {pain.id}: {pain.title}
                    </h3>
                    <p className="problem-text">
                      <strong>Vấn đề:</strong> {pain.problem}
                    </p>
                    <p><strong>Giải pháp:</strong></p>
                    <ul>
                      {pain.solutions.map((solution, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            {solution}
                          </li>
                      ))}
                    </ul>
                    <span className="savings-badge">{pain.savings}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-map-marker-alt"></i>
              Giải Pháp Theo Địa Điểm
            </h2>
            <p className="section-subtitle">
              Tùy chỉnh theo khí hậu và không gian
            </p>

            <div className="grid-3">
              {climateTable.map((item, index) => (
                  <div key={index} className="info-card">
                    <h3>
                      <i className="fas fa-location-dot"></i>
                      {item.location}
                    </h3>
                    <p><strong>Vấn đề:</strong> {item.issue}</p>
                    <p><strong>Giải pháp:</strong> {item.solution}</p>
                    <p><strong>Vật liệu đề xuất:</strong></p>
                    <ul>
                      {item.materials.map((material, i) => (
                          <li key={i}>
                            <i className="fas fa-chevron-right"></i>
                            {material}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-tag"></i>
              Báo Giá Thiết Kế Nội Thất Tân Cổ Điển 2025
            </h2>
            <p className="section-subtitle">
              Đơn giá tham khảo VNĐ/m² - Thay đổi theo diện tích & vật liệu thực tế
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
              Giải đáp thắc mắc về các nỗi đau thiết kế Tân cổ điển
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

export default NoiDauThietKeTanCoDienPage;