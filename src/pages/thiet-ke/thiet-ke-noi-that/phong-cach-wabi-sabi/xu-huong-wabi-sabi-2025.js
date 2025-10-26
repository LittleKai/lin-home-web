import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const XuHuongWabiSabi2025 = () => {
  return (
    <div className="wabi-sabi-page">
      <Helmet>
        <title>Xu hướng thiết kế nội thất Wabi-Sabi 2025 – Giải pháp cho biệt thự & chung cư</title>
        <meta name="description" content="Xu hướng thiết kế nội thất phong cách Wabi-Sabi 2025 tại Hà Nội & Nha Trang. Giải pháp tối giản, mộc mạc cho biệt thự & chung cư hiện đại." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section wabi-sabi-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">🌿 Xu hướng thiết kế nội thất Wabi-Sabi 2025</h1>
          <p className="hero-subtitle">Giải pháp cho biệt thự & chung cư</p>
          <p className="hero-description">Tối giản – Mộc mạc – Hiện đại</p>
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
          <span>Xu hướng 2025</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        {/* Giới thiệu */}
        <section className="content-section">
          <h2>1. Giới thiệu</h2>
          <p className="intro-text">
            Phong cách Wabi-Sabi mang triết lý Nhật Bản: đơn sơ, mộc mạc, trân trọng vẻ đẹp của sự bất toàn. 
            Năm 2025, xu hướng này trở thành lựa chọn hàng đầu cho gia chủ yêu thích sự thanh tịnh – tối giản – gần gũi thiên nhiên.
          </p>
          
          <div className="intro-highlights">
            <div className="highlight-card">
              <h3>🏢 Biệt thự</h3>
              <p>Wabi-Sabi giúp không gian rộng trở nên tinh tế, hài hòa.</p>
            </div>
            <div className="highlight-card">
              <h3>🏠 Chung cư</h3>
              <p>Phong cách này giúp căn hộ nhỏ bớt chật chội, tạo sự thoáng đãng.</p>
            </div>
          </div>
        </section>

        {/* Xu hướng nổi bật */}
        <section className="content-section trends-section">
          <h2>2. Xu hướng nổi bật của Wabi-Sabi năm 2025</h2>
          
          <div className="trends-list">
            <div className="trend-item">
              <div className="trend-number">1</div>
              <div className="trend-content">
                <h3>🔹 Vật liệu tự nhiên & thô mộc</h3>
                <ul>
                  <li>Gỗ tự nhiên, gạch đất nung, đá thô, gốm sứ, tre nứa</li>
                  <li>Vật liệu mang cảm giác ấm áp, chân thật</li>
                </ul>
              </div>
            </div>

            <div className="trend-item">
              <div className="trend-number">2</div>
              <div className="trend-content">
                <h3>🔹 Màu sắc trầm ấm, trung tính</h3>
                <ul>
                  <li>Nâu đất, be, xám tro, trắng ngà</li>
                  <li>Tạo cảm giác tĩnh lặng, thư thái</li>
                </ul>
              </div>
            </div>

            <div className="trend-item">
              <div className="trend-number">3</div>
              <div className="trend-content">
                <h3>🔹 Không gian mở, ánh sáng tự nhiên</h3>
                <ul>
                  <li>Cửa kính lớn, giếng trời</li>
                  <li>Tận dụng ánh sáng để làm nổi bật vật liệu mộc</li>
                </ul>
              </div>
            </div>

            <div className="trend-item">
              <div className="trend-number">4</div>
              <div className="trend-content">
                <h3>🔹 Nội thất tối giản – công năng cao</h3>
                <ul>
                  <li>Bàn ghế gọn nhẹ, ít chi tiết</li>
                  <li>Ưu tiên nội thất có công năng linh hoạt</li>
                </ul>
              </div>
            </div>

            <div className="trend-item">
              <div className="trend-number">5</div>
              <div className="trend-content">
                <h3>🔹 Trang trí tinh thần Zen</h3>
                <ul>
                  <li>Bình hoa khô, chậu gốm, tranh tối giản, cây xanh</li>
                  <li>Đưa thiên nhiên vào trong nhà</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Giải pháp cho biệt thự & chung cư */}
        <section className="content-section solutions-section">
          <h2>3. Giải pháp cho biệt thự & chung cư</h2>
          
          <div className="solutions-grid">
            <div className="solution-card villa-card">
              <h3>🏡 Biệt thự Wabi-Sabi</h3>
              <div className="solution-content">
                <p className="solution-intro">Không gian rộng → nhấn mạnh sự cân đối, tối giản.</p>
                <ul>
                  <li>Dùng tường thô, trần gỗ, sàn đá tự nhiên</li>
                  <li>Kết hợp hồ cá koi, vườn cây, ánh sáng sân trong để tạo sự thiền định</li>
                </ul>
              </div>
              <div className="solution-features">
                <span className="feature-badge">Không gian rộng</span>
                <span className="feature-badge">Vườn thiền</span>
                <span className="feature-badge">Ánh sáng tự nhiên</span>
              </div>
            </div>

            <div className="solution-card apartment-card">
              <h3>🏠 Chung cư Wabi-Sabi</h3>
              <div className="solution-content">
                <p className="solution-intro">Diện tích nhỏ → ưu tiên nội thất gọn, gam màu sáng.</p>
                <ul>
                  <li>Bố trí gương, cửa kính lớn để mở rộng thị giác</li>
                  <li>Sử dụng đồ gốm nhỏ, cây xanh mini làm điểm nhấn</li>
                </ul>
              </div>
              <div className="solution-features">
                <span className="feature-badge">Tối ưu diện tích</span>
                <span className="feature-badge">Màu sáng</span>
                <span className="feature-badge">Nội thất gọn</span>
              </div>
            </div>
          </div>
        </section>

        {/* Báo giá */}
        <section className="content-section pricing-section">
          <h2>4. Báo giá thiết kế nội thất Wabi-Sabi 2025</h2>
          
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
                  <td>Chung cư Wabi-Sabi</td>
                  <td className="price">150.000 – 200.000</td>
                  <td>Phù hợp căn hộ nhỏ, tối giản</td>
                </tr>
                <tr>
                  <td>Nhà phố – nhà ống</td>
                  <td className="price">160.000 – 220.000</td>
                  <td>Tối ưu không gian hẹp</td>
                </tr>
                <tr>
                  <td>Biệt thự/villa Wabi-Sabi</td>
                  <td className="price">200.000 – 280.000</td>
                  <td>Vật liệu tự nhiên, không gian lớn</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="pricing-note">
            📌 <strong>Lưu ý:</strong> Giá thay đổi tùy diện tích, vật liệu và mức độ chi tiết.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="content-section key-takeaways">
          <h3>Điểm nhấn quan trọng</h3>
          <div className="takeaways-grid">
            <div className="takeaway-item">
              <span className="icon">✓</span>
              <p>Xu hướng 2025 tập trung vào vật liệu tự nhiên thô mộc</p>
            </div>
            <div className="takeaway-item">
              <span className="icon">✓</span>
              <p>Ánh sáng tự nhiên là yếu tố then chốt</p>
            </div>
            <div className="takeaway-item">
              <span className="icon">✓</span>
              <p>Phù hợp cả không gian lớn và nhỏ</p>
            </div>
            <div className="takeaway-item">
              <span className="icon">✓</span>
              <p>Cân bằng giữa tối giản và ấm cúng</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-box">
            <h2>Xu hướng Wabi-Sabi 2025</h2>
            <p>Mang đến giải pháp nội thất tinh giản – mộc mạc – gần gũi thiên nhiên, phù hợp cả với biệt thự rộng rãi lẫn chung cư nhỏ gọn.</p>
            <p className="cta-highlight">👉 Hãy liên hệ ngay để được tư vấn miễn phí & báo giá chi tiết cho công trình của bạn tại Hà Nội & Nha Trang.</p>
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
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/gioi-thieu-phong-cach-wabi-sabi" className="article-card">
              <h3>Giới thiệu phong cách Wabi-Sabi</h3>
              <p>Tìm hiểu chi tiết về triết lý và đặc trưng Wabi-Sabi</p>
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

export default XuHuongWabiSabi2025;
