import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GioiThieuPhongCachWabiSabi = () => {
  return (
    <div className="wabi-sabi-page">
      <Helmet>
        <title>Thiết kế nội thất phong cách Wabi-Sabi 2025 tại Hà Nội & Nha Trang</title>
        <meta name="description" content="Dịch vụ thiết kế nội thất phong cách Wabi-Sabi 2025 tại Hà Nội & Nha Trang. Tối giản – mộc mạc – tinh thần Nhật Bản. Báo giá chi tiết, tư vấn miễn phí." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section wabi-sabi-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">🍂 Thiết kế nội thất phong cách Wabi-Sabi 2025</h1>
          <p className="hero-subtitle">Tối giản – Mộc mạc – Tinh thần Nhật Bản</p>
          <p className="hero-description">Tại Hà Nội & Nha Trang</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span className="separator">/</span>
          <Link to="/thiet-ke/thiet-ke-noi-that">Thiết kế nội thất</Link>
          <span className="separator">/</span>
          <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi">Phong cách Wabi-Sabi</Link>
          <span className="separator">/</span>
          <span>Giới thiệu</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        {/* Giới thiệu */}
        <section className="content-section">
          <h2>1. Giới thiệu về phong cách Wabi-Sabi</h2>
          <p className="intro-text">
            Wabi-Sabi là triết lý thẩm mỹ của Nhật Bản, tôn vinh sự giản dị, mộc mạc, không hoàn hảo nhưng chân thật. 
            Trong thiết kế nội thất, Wabi-Sabi tạo nên không gian sống ấm áp – gần gũi thiên nhiên – tối giản nhưng đầy tinh thần Zen.
          </p>
          
          <div className="location-grid">
            <div className="location-card">
              <h3>🏙️ Tại Hà Nội</h3>
              <p>Phù hợp chung cư, nhà phố → giúp không gian nhỏ trở nên thanh thoát, thư giãn.</p>
            </div>
            <div className="location-card">
              <h3>🏖️ Tại Nha Trang</h3>
              <p>Thích hợp villa nghỉ dưỡng, homestay, cafe → gần gũi thiên nhiên, hài hòa với biển trời.</p>
            </div>
          </div>
        </section>

        {/* Đặc trưng */}
        <section className="content-section features-section">
          <h2>2. Đặc trưng nội thất phong cách Wabi-Sabi</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Màu sắc</h3>
              <p>Gam trung tính, đất, be, nâu gỗ, xám tro</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🪵</div>
              <h3>Vật liệu</h3>
              <p>Gỗ tự nhiên, gốm, đá thô, vải lanh, tre</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🛋️</div>
              <h3>Đồ nội thất</h3>
              <p>Tối giản, ít chi tiết, đề cao công năng</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🌞</div>
              <h3>Không gian</h3>
              <p>Thoáng đãng, ánh sáng tự nhiên</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🏺</div>
              <h3>Trang trí</h3>
              <p>Đồ gốm thô mộc, bình hoa khô, tranh tối giản</p>
            </div>
          </div>
        </section>

        {/* Ưu - Nhược điểm */}
        <section className="content-section pros-cons-section">
          <h2>3. Ưu – nhược điểm & nỗi đau khách hàng</h2>
          
          <div className="pros-cons-grid">
            <div className="pros-card">
              <h3>✅ Ưu điểm</h3>
              <ul>
                <li>Mang lại cảm giác thư giãn, tĩnh tại</li>
                <li>Chi phí vừa phải (do hạn chế đồ nội thất cầu kỳ)</li>
                <li>Bền vững, dễ kết hợp với phong cách tối giản</li>
              </ul>
            </div>
            
            <div className="cons-card">
              <h3>❌ Nhược điểm (nỗi đau)</h3>
              <ul>
                <li>Nếu không khéo → dễ thành đơn điệu, trống trải</li>
                <li>Khó tìm vật liệu tự nhiên chất lượng cao</li>
                <li>Với khí hậu ẩm ở Hà Nội, đồ gỗ dễ hỏng nếu không xử lý tốt</li>
                <li>Với khí hậu biển Nha Trang, vật liệu tự nhiên dễ bị ẩm mặn</li>
              </ul>
            </div>
          </div>
          
          <div className="solution-box">
            <h3>👉 Giải pháp:</h3>
            <p>Chọn gỗ chống ẩm, phủ dầu bảo vệ, thêm trang trí thủ công tinh tế để cân bằng.</p>
          </div>
        </section>

        {/* Ứng dụng */}
        <section className="content-section application-section">
          <h2>4. Ứng dụng tại Hà Nội & Nha Trang</h2>
          
          <div className="application-grid">
            <div className="application-card">
              <h3>🏙️ Hà Nội</h3>
              <ul>
                <li><strong>Loại hình:</strong> Chung cư, nhà phố nhỏ</li>
                <li><strong>Đặc điểm:</strong> Nội thất tối giản, nhiều ánh sáng nhân tạo kết hợp tự nhiên</li>
              </ul>
            </div>
            
            <div className="application-card">
              <h3>🏖️ Nha Trang</h3>
              <ul>
                <li><strong>Loại hình:</strong> Villa, homestay, resort</li>
                <li><strong>Đặc điểm:</strong> Không gian mở, nội thất gần gũi thiên nhiên, vật liệu chống ẩm mặn</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Báo giá */}
        <section className="content-section pricing-section">
          <h2>5. Báo giá thiết kế nội thất phong cách Wabi-Sabi 2025</h2>
          
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Hạng mục thiết kế</th>
                  <th>Đơn giá (VNĐ/m²)</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chung cư phong cách Wabi-Sabi</td>
                  <td className="price">150.000 – 200.000</td>
                  <td>Phối cảnh 3D chi tiết</td>
                </tr>
                <tr>
                  <td>Nhà phố – nhà ống</td>
                  <td className="price">160.000 – 220.000</td>
                  <td>Không gian nhỏ, tối ưu ánh sáng</td>
                </tr>
                <tr>
                  <td>Biệt thự/villa, homestay</td>
                  <td className="price">200.000 – 280.000</td>
                  <td>Vật liệu tự nhiên, không gian mở</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="pricing-note">
            📌 <strong>Lưu ý:</strong> Giá có thể thay đổi tùy diện tích, vật liệu (gỗ, gốm, đá) và độ chi tiết thiết kế.
          </p>
        </section>

        {/* Lưu ý thiết kế */}
        <section className="content-section tips-section">
          <h2>6. Lưu ý khi thiết kế phong cách Wabi-Sabi</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-number">1</div>
              <p>Không lạm dụng đồ trang trí → giữ sự tinh giản</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-number">2</div>
              <p>Ưu tiên vật liệu tự nhiên nhưng phải được xử lý chống ẩm</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-number">3</div>
              <p>Bố trí cửa kính lớn, ánh sáng tự nhiên</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-number">4</div>
              <p>Kết hợp thêm cây xanh, hoa khô để tạo điểm nhấn</p>
            </div>
          </div>
        </section>

        {/* Ưu đãi & cam kết */}
        <section className="content-section commitment-section">
          <h2>7. Ưu đãi & cam kết dịch vụ</h2>
          
          <div className="commitment-grid">
            <div className="commitment-item">
              <span className="commitment-icon">💬</span>
              <p>Miễn phí tư vấn ban đầu</p>
            </div>
            
            <div className="commitment-item">
              <span className="commitment-icon">🎨</span>
              <p>Thiết kế 3D chân thực, dễ hình dung trước khi thi công</p>
            </div>
            
            <div className="commitment-item">
              <span className="commitment-icon">👨‍💼</span>
              <p>KTS am hiểu triết lý Nhật Bản & tối giản</p>
            </div>
            
            <div className="commitment-item">
              <span className="commitment-icon">🔨</span>
              <p>Đồng hành thi công – giám sát để đảm bảo đúng thiết kế</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-box">
            <h2>Nội thất phong cách Wabi-Sabi 2025 là lựa chọn lý tưởng</h2>
            <p>Cho những ai yêu thích sự giản dị – thanh tịnh – mộc mạc nhưng tinh tế.</p>
            <p className="cta-highlight">👉 Hãy liên hệ ngay để nhận tư vấn miễn phí & báo giá chi tiết cho không gian Wabi-Sabi của bạn tại Hà Nội & Nha Trang.</p>
            <div className="cta-buttons">
              <a href="tel:0941090333" className="btn btn-primary">📞 Hotline: 0941090333</a>
              <Link to="/lien-he" className="btn btn-secondary">Liên hệ tư vấn</Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="related-articles">
          <h2>Bài viết liên quan</h2>
          <div className="articles-grid">
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/xu-huong-wabi-sabi-2025" className="article-card">
              <h3>Xu hướng thiết kế Wabi-Sabi 2025</h3>
              <p>Khám phá xu hướng mới nhất trong thiết kế nội thất Wabi-Sabi</p>
            </Link>
            
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/5-noi-dau-thiet-ke-wabi-sabi" className="article-card">
              <h3>5 nỗi đau khi thiết kế Wabi-Sabi</h3>
              <p>Giải pháp khắc phục những khó khăn thường gặp</p>
            </Link>
            
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/top-10-mau-thiet-ke-wabi-sabi" className="article-card">
              <h3>Top 10 mẫu thiết kế đẹp nhất</h3>
              <p>Tham khảo những mẫu thiết kế Wabi-Sabi ấn tượng</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GioiThieuPhongCachWabiSabi;
