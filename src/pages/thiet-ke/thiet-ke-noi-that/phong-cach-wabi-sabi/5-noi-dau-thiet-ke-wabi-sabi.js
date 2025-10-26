import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NamNoiDauThietKeWabiSabi = () => {
  return (
    <div className="wabi-sabi-page">
      <Helmet>
        <title>5 nỗi đau khi thiết kế nội thất Wabi-Sabi & cách khắc phục</title>
        <meta name="description" content="5 nỗi đau thường gặp khi thiết kế nội thất phong cách Wabi-Sabi 2025 và giải pháp khắc phục. Giải pháp tối giản, mộc mạc cho Hà Nội & Nha Trang." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section wabi-sabi-hero pain-points-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">⚠️ 5 nỗi đau khi thiết kế nội thất Wabi-Sabi</h1>
          <p className="hero-subtitle">& Cách khắc phục hiệu quả</p>
          <p className="hero-description">Giải pháp cho Hà Nội & Nha Trang</p>
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
          <span>5 nỗi đau</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        {/* Giới thiệu */}
        <section className="content-section">
          <h2>1. Giới thiệu</h2>
          <p className="intro-text">
            Phong cách Wabi-Sabi mang triết lý Nhật Bản về sự giản dị, bất toàn và tự nhiên, ngày càng được nhiều gia chủ lựa chọn trong năm 2025. 
            Tuy nhiên, khi áp dụng thực tế, khách hàng dễ gặp phải những "nỗi đau" khiến không gian thiếu cân đối hoặc nhanh xuống cấp.
          </p>
          <p className="intro-highlight">
            Dưới đây là <strong>5 vấn đề phổ biến nhất</strong> và giải pháp khắc phục.
          </p>
        </section>

        {/* 5 Nỗi đau & Giải pháp */}
        <section className="content-section pain-points-section">
          <h2>2. 5 nỗi đau & cách khắc phục</h2>
          
          {/* Nỗi đau 1 */}
          <div className="pain-point-card">
            <div className="pain-header">
              <span className="pain-number">1</span>
              <h3>❌ Không gian quá đơn điệu, lạnh lẽo</h3>
            </div>
            <div className="pain-body">
              <div className="pain-cause">
                <h4>Nguyên nhân:</h4>
                <p>Thiết kế quá tối giản, ít chi tiết trang trí.</p>
              </div>
              <div className="pain-solution">
                <h4>✅ Giải pháp:</h4>
                <ul>
                  <li>Kết hợp hoa khô, cây xanh, đèn vàng ấm</li>
                  <li>Thêm điểm nhấn bằng gốm sứ, đồ thủ công</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nỗi đau 2 */}
          <div className="pain-point-card">
            <div className="pain-header">
              <span className="pain-number">2</span>
              <h3>❌ Vật liệu tự nhiên dễ xuống cấp</h3>
            </div>
            <div className="pain-body">
              <div className="pain-cause">
                <h4>Nguyên nhân:</h4>
                <p>Gỗ, tre, gốm dễ bị ẩm mốc, cong vênh.</p>
              </div>
              <div className="pain-solution">
                <h4>✅ Giải pháp:</h4>
                <ul>
                  <li>Dùng gỗ chống ẩm, phủ dầu bảo vệ</li>
                  <li>Ưu tiên tre ép công nghiệp, gốm tráng men</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nỗi đau 3 */}
          <div className="pain-point-card">
            <div className="pain-header">
              <span className="pain-number">3</span>
              <h3>❌ Khí hậu ẩm ở Hà Nội làm hỏng nội thất</h3>
            </div>
            <div className="pain-body">
              <div className="pain-cause">
                <h4>Nguyên nhân:</h4>
                <p>Độ ẩm cao → gỗ, vải lanh dễ mốc.</p>
              </div>
              <div className="pain-solution">
                <h4>✅ Giải pháp:</h4>
                <ul>
                  <li>Chọn gỗ công nghiệp phủ melamine chống ẩm</li>
                  <li>Dùng máy hút ẩm, sơn chống nấm mốc</li>
                </ul>
              </div>
            </div>
            <div className="location-badge hanoi">🏙️ Đặc thù Hà Nội</div>
          </div>

          {/* Nỗi đau 4 */}
          <div className="pain-point-card">
            <div className="pain-header">
              <span className="pain-number">4</span>
              <h3>❌ Khí hậu biển Nha Trang gây ẩm mặn</h3>
            </div>
            <div className="pain-body">
              <div className="pain-cause">
                <h4>Nguyên nhân:</h4>
                <p>Muối biển và độ ẩm cao gây hư hỏng gỗ, kim loại.</p>
              </div>
              <div className="pain-solution">
                <h4>✅ Giải pháp:</h4>
                <ul>
                  <li>Sử dụng inox 304, thép sơn tĩnh điện, gỗ chống ẩm</li>
                  <li>Định kỳ bảo dưỡng, lau phủ dầu bảo vệ</li>
                </ul>
              </div>
            </div>
            <div className="location-badge nhatrang">🏖️ Đặc thù Nha Trang</div>
          </div>

          {/* Nỗi đau 5 */}
          <div className="pain-point-card">
            <div className="pain-header">
              <span className="pain-number">5</span>
              <h3>❌ Thiết kế thiếu đồng bộ, không chuẩn phong cách</h3>
            </div>
            <div className="pain-body">
              <div className="pain-cause">
                <h4>Nguyên nhân:</h4>
                <p>Chọn đồ nội thất rời rạc, không theo bản vẽ.</p>
              </div>
              <div className="pain-solution">
                <h4>✅ Giải pháp:</h4>
                <ul>
                  <li>Thiết kế 3D tổng thể trước khi thi công</li>
                  <li>Thuê KTS am hiểu Wabi-Sabi để đảm bảo đồng bộ</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section className="content-section summary-section">
          <div className="summary-box">
            <h3>📋 Tóm tắt giải pháp</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-icon">🎨</span>
                <p>Thêm điểm nhấn để tránh đơn điệu</p>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🛡️</span>
                <p>Xử lý vật liệu chống ẩm, mốc</p>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🌧️</span>
                <p>Giải pháp riêng cho khí hậu Hà Nội</p>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🌊</span>
                <p>Vật liệu chống ẩm mặn cho Nha Trang</p>
              </div>
              <div className="summary-item">
                <span className="summary-icon">📐</span>
                <p>Thiết kế 3D đồng bộ toàn bộ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Báo giá */}
        <section className="content-section pricing-section">
          <h2>3. Báo giá thiết kế nội thất Wabi-Sabi 2025</h2>
          
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
                  <td>Chung cư nhỏ</td>
                  <td className="price">150.000 – 200.000</td>
                  <td>Nội thất gọn, gam màu sáng</td>
                </tr>
                <tr>
                  <td>Nhà phố – nhà ống</td>
                  <td className="price">160.000 – 220.000</td>
                  <td>Tối ưu diện tích, chống ẩm</td>
                </tr>
                <tr>
                  <td>Biệt thự/villa Wabi-Sabi</td>
                  <td className="price">200.000 – 280.000</td>
                  <td>Vật liệu tự nhiên, không gian mở</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="pricing-note">
            📌 <strong>Lưu ý:</strong> Giá tham khảo, có thể thay đổi theo diện tích & vật liệu.
          </p>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-box">
            <h2>Thiết kế Wabi-Sabi chỉ thật sự thành công</h2>
            <p>Khi cân bằng được sự mộc mạc – tối giản – bền vững.</p>
            <p className="cta-highlight">👉 Đừng để công trình của bạn trở nên đơn điệu hoặc nhanh xuống cấp.</p>
            <p>Hãy để chúng tôi mang đến giải pháp Wabi-Sabi tinh tế & bền vững tại Hà Nội & Nha Trang.</p>
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
            
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/xu-huong-wabi-sabi-2025" className="article-card">
              <h3>Xu hướng Wabi-Sabi 2025</h3>
              <p>Khám phá xu hướng mới nhất trong thiết kế</p>
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

export default NamNoiDauThietKeWabiSabi;
