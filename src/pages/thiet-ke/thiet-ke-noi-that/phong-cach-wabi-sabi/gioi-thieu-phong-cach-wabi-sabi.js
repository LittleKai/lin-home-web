import React, { useState } from 'react';
import CTAContent from '../../../../components/CTAContent/CTAContent';
import '../../../../styles/PageStyles.css';

const GioiThieuWabiSabiPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const characteristics = [
    {
      icon: 'fas fa-palette',
      title: 'Màu Sắc',
      description: 'Gam trung tính, đất, be, nâu gỗ, xám tro - ấm áp và trầm',
      details: ['Nâu đất: tự nhiên', 'Be: dịu nhẹ', 'Xám tro: thanh tịnh', 'Trắng ngà: tinh tế'],
      color: '#92400e'
    },
    {
      icon: 'fas fa-tree',
      title: 'Vật Liệu',
      description: 'Gỗ tự nhiên, gốm sứ thô, đá thô, vải lanh, tre nứa',
      details: ['Gỗ tự nhiên chân thật', 'Gốm sứ thủ công', 'Đá thô mộc mạc', 'Vải lanh tự nhiên'],
      color: '#78716c'
    },
    {
      icon: 'fas fa-couch',
      title: 'Nội Thất',
      description: 'Tối giản, ít chi tiết, đề cao công năng và sự thô mộc',
      details: ['Bàn ghế gọn nhẹ', 'Ít chi tiết rườm rà', 'Công năng linh hoạt', 'Hình khối đơn giản'],
      color: '#a8a29e'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Trang Trí',
      description: 'Bình hoa khô, chậu gốm, tranh tối giản, cây xanh',
      details: ['Hoa khô tự nhiên', 'Gốm thô mộc', 'Tranh tối giản', 'Cây xanh nhỏ'],
      color: '#57534e'
    },
    {
      icon: 'fas fa-sun',
      title: 'Không Gian',
      description: 'Thoáng đãng, ánh sáng tự nhiên, không gian mở',
      details: ['Cửa kính lớn', 'Ánh sáng tự nhiên', 'Không gian mở', 'Thông gió tốt'],
      color: '#d6d3d1'
    }
  ];

  const prosAndCons = {
    pros: [
      {
        title: 'Thư Giãn & Tĩnh Tại',
        description: 'Mang lại cảm giác bình yên, thư thái trong tâm hồn',
        icon: 'fas fa-spa'
      },
      {
        title: 'Chi Phí Vừa Phải',
        description: 'Hạn chế đồ cầu kỳ, tiết kiệm chi phí trang trí',
        icon: 'fas fa-coins'
      },
      {
        title: 'Bền Vững & Xanh',
        description: 'Vật liệu tự nhiên, thân thiện môi trường',
        icon: 'fas fa-leaf'
      },
      {
        title: 'Dễ Kết Hợp',
        description: 'Phù hợp với phong cách tối giản, hiện đại',
        icon: 'fas fa-puzzle-piece'
      }
    ],
    cons: [
      {
        title: 'Dễ Đơn Điệu',
        description: 'Nếu không khéo → trống trải, lạnh lẽo',
        solution: 'Kết hợp hoa khô, cây xanh, đèn vàng ấm',
        icon: 'fas fa-temperature-low'
      },
      {
        title: 'Vật Liệu Khó Tìm',
        description: 'Vật liệu tự nhiên chất lượng cao hiếm',
        solution: 'Chọn gỗ công nghiệp chất lượng, gốm uy tín',
        icon: 'fas fa-search'
      },
      {
        title: 'Độ Ẩm Hà Nội',
        description: 'Khí hậu ẩm làm gỗ dễ hỏng',
        solution: 'Dùng gỗ chống ẩm, phủ dầu bảo vệ',
        icon: 'fas fa-cloud-rain'
      }
    ]
  };

  const applications = [
    {
      location: 'Hà Nội',
      types: [
        {
          type: 'Chung cư',
          description: 'Nội thất tối giản, nhiều ánh sáng nhân tạo kết hợp tự nhiên',
          price: '150,000 - 200,000 VNĐ/m²'
        },
        {
          type: 'Nhà phố',
          description: 'Không gian nhỏ, tối ưu ánh sáng, màu sắc trung tính',
          price: '160,000 - 220,000 VNĐ/m²'
        }
      ],
      climate: 'Độ ẩm cao, cần gỗ chống ẩm',
      color: '#ef4444'
    },
    {
      location: 'Nha Trang',
      types: [
        {
          type: 'Villa/Resort',
          description: 'Không gian mở, vật liệu chống ẩm mặn, gần gũi thiên nhiên',
          price: '200,000 - 280,000 VNĐ/m²'
        },
        {
          type: 'Homestay',
          description: 'Tạo sự khác biệt, thu hút du khách yêu thiên nhiên',
          price: '200,000 - 280,000 VNĐ/m²'
        }
      ],
      climate: 'Ẩm mặn biển, cần vật liệu chống mặn',
      color: '#06b6d4'
    }
  ];

  const designNotes = [
    {
      icon: 'fas fa-check-circle',
      title: 'Không Lạm Dụng Trang Trí',
      description: 'Giữ sự tinh giản, tránh quá nhiều chi tiết làm rối mắt'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Vật Liệu Chống Ẩm',
      description: 'Ưu tiên vật liệu tự nhiên nhưng phải xử lý chống ẩm tốt'
    },
    {
      icon: 'fas fa-sun',
      title: 'Ánh Sáng Tự Nhiên',
      description: 'Bố trí cửa kính lớn, tận dụng tối đa ánh sáng ban ngày'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Cây Xanh & Hoa Khô',
      description: 'Kết hợp cây xanh, hoa khô để tạo điểm nhấn tinh tế'
    }
  ];

  const commitments = [
    {
      icon: 'fas fa-comments',
      title: 'Tư Vấn Miễn Phí',
      description: 'Tư vấn triết lý Wabi-Sabi phù hợp với không gian'
    },
    {
      icon: 'fas fa-cube',
      title: 'Thiết Kế 3D',
      description: 'Phối cảnh 3D chân thực, dễ hình dung trước khi thi công'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'KTS Chuyên Nghiệp',
      description: 'Kiến trúc sư am hiểu triết lý Nhật Bản & tối giản'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Thi Công Trọn Gói',
      description: 'Đồng hành thi công – giám sát để đảm bảo đúng thiết kế'
    }
  ];

  const faqData = [
    {
      question: 'Phong cách Wabi-Sabi là gì?',
      answer: 'Wabi-Sabi là triết lý thẩm mỹ của Nhật Bản, tôn vinh sự giản dị, mộc mạc, không hoàn hảo nhưng chân thật. Trong thiết kế nội thất, Wabi-Sabi tạo nên không gian sống ấm áp – gần gũi thiên nhiên – tối giản nhưng đầy tinh thần Zen.'
    },
    {
      question: 'Wabi-Sabi có phù hợp với chung cư nhỏ không?',
      answer: 'Hoàn toàn phù hợp. Với chung cư nhỏ, Wabi-Sabi giúp không gian bớt chật chội nhờ nội thất tối giản, màu sắc sáng, và ánh sáng tự nhiên. Tuy nhiên cần thêm điểm nhấn bằng hoa khô, cây xanh để tránh đơn điệu.'
    },
    {
      question: 'Chi phí thiết kế Wabi-Sabi là bao nhiêu?',
      answer: 'Chi phí trung bình 150,000 - 280,000 VNĐ/m² tùy loại hình. Chung cư: 150-200K, Nhà phố: 160-220K, Biệt thự: 200-280K VNĐ/m². Giá thay đổi theo diện tích, vật liệu và độ chi tiết thiết kế.'
    },
    {
      question: 'Khí hậu Hà Nội ẩm, gỗ có bị hỏng không?',
      answer: 'Nếu chọn đúng loại gỗ chống ẩm, phủ dầu bảo vệ và có hệ thống thông gió tốt thì không bị. Có thể dùng gỗ công nghiệp phủ melamine chống ẩm hoặc máy hút ẩm để bảo vệ đồ nội thất.'
    },
    {
      question: 'Wabi-Sabi có dễ lỗi mốt không?',
      answer: 'Không. Wabi-Sabi là phong cách vượt thời gian, dựa trên triết lý Nhật Bản về sự bất toàn và tự nhiên. Miễn là thiết kế cân đối, không quá đơn điệu thì luôn đẹp và thanh tịnh qua năm tháng.'
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
              Giới Thiệu Phong Cách Wabi-Sabi
            </h2>
            <div className="content-text">
              <p>
                Phong cách <strong>Wabi-Sabi</strong> là triết lý thẩm mỹ của Nhật Bản, tôn vinh sự giản dị,
                mộc mạc, không hoàn hảo nhưng chân thật. Trong thiết kế nội thất, Wabi-Sabi tạo nên không gian
                sống ấm áp – gần gũi thiên nhiên – tối giản nhưng đầy tinh thần Zen.
              </p>
              <ul className="styled-list">
                <li>
                  <strong>Tại Hà Nội:</strong> Phù hợp chung cư, nhà phố → giúp không gian nhỏ trở nên thanh thoát, thư giãn
                </li>
                <li>
                  <strong>Tại Nha Trang:</strong> Thích hợp villa nghỉ dưỡng, homestay, cafe → gần gũi thiên nhiên, hài hòa với biển trời
                </li>
              </ul>
              <p>
                Năm 2025, Wabi-Sabi tiếp tục là xu hướng nội thất bền vững, gắn liền với lối sống
                tinh tế và gần gũi thiên nhiên.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-gradient" id="characteristics">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-star"></i>
              Đặc Trưng Của Phong Cách Wabi-Sabi
            </h2>
            <p className="section-subtitle">
              5 yếu tố tạo nên vẻ đẹp mộc mạc, thanh tịnh
            </p>

            <div className="grid-3">
              {characteristics.map((char, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: char.color }}>
                      <i className={char.icon}></i>
                      {char.title}
                    </h3>
                    <p>{char.description}</p>
                    <ul>
                      {char.details.map((detail, i) => (
                          <li key={i}>
                            <i className="fas fa-chevron-right"></i>
                            {detail}
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
              <i className="fas fa-balance-scale"></i>
              Ưu - Nhược Điểm & Nỗi Đau Khách Hàng
            </h2>

            <div className="grid-2">
              <div>
                <h3 className="pros-title">
                  <i className="fas fa-check-circle"></i>
                  Ưu Điểm
                </h3>
                {prosAndCons.pros.map((pro, index) => (
                    <div key={index} className="info-card">
                      <h4>
                        <i className={pro.icon}></i>
                        {pro.title}
                      </h4>
                      <p>{pro.description}</p>
                    </div>
                ))}
              </div>

              <div>
                <h3 className="cons-title">
                  <i className="fas fa-exclamation-triangle"></i>
                  Nhược Điểm (Nỗi Đau)
                </h3>
                {prosAndCons.cons.map((con, index) => (
                    <div key={index} className="info-card">
                      <h4>
                        <i className={con.icon}></i>
                        {con.title}
                      </h4>
                      <p><strong>Vấn đề:</strong> {con.description}</p>
                      <p className="solution-text">
                        <i className="fas fa-lightbulb"></i>
                        <strong>Giải pháp:</strong> {con.solution}
                      </p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-map-marker-alt"></i>
              Ứng Dụng Thực Tế Tại Hà Nội & Nha Trang
            </h2>

            <div className="grid-2">
              {applications.map((app, index) => (
                  <div key={index} className="info-card">
                    <h3 style={{ color: app.color }}>
                      <i className="fas fa-location-dot"></i>
                      {app.location}
                    </h3>
                    <p className="climate-badge">
                      <i className="fas fa-cloud"></i>
                      {app.climate}
                    </p>
                    {app.types.map((type, i) => (
                        <div key={i} className="type-section">
                          <h4>{type.type}</h4>
                          <p>{type.description}</p>
                          <span className="standard">{type.price}</span>
                        </div>
                    ))}
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-gradient">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-lightbulb"></i>
              Lưu Ý Khi Thiết Kế Wabi-Sabi
            </h2>

            <div className="grid-4">
              {designNotes.map((note, index) => (
                  <div key={index} className="info-card">
                    <h3>
                      <i className={note.icon}></i>
                      {note.title}
                    </h3>
                    <p>{note.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-handshake"></i>
              Ưu Đãi & Cam Kết
            </h2>

            <div className="grid-4">
              {commitments.map((commit, index) => (
                  <div key={index} className="info-card">
                    <h3>
                      <i className={commit.icon}></i>
                      {commit.title}
                    </h3>
                    <p>{commit.description}</p>
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
              Giải đáp thắc mắc về phong cách Wabi-Sabi
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

export default GioiThieuWabiSabiPage;