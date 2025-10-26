import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Top10MauThietKeWabiSabi = () => {
  return (
    <div className="wabi-sabi-page">
      <Helmet>
        <title>Top 10 mẫu thiết kế nội thất Wabi-Sabi đẹp nhất 2025</title>
        <meta name="description" content="Top 10 mẫu thiết kế nội thất phong cách Wabi-Sabi 2025 tại Hà Nội & Nha Trang. Không gian tối giản – mộc mạc – đậm tinh thần Nhật Bản." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section wabi-sabi-hero gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">🌸 Top 10 mẫu thiết kế nội thất Wabi-Sabi đẹp nhất 2025</h1>
          <p className="hero-subtitle">Không gian tối giản – Mộc mạc – Đậm tinh thần Nhật Bản</p>
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
          <span>Top 10 mẫu</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        {/* Giới thiệu */}
        <section className="content-section">
          <h2>1. Giới thiệu</h2>
          <p className="intro-text">
            Phong cách Wabi-Sabi ngày càng phổ biến trong thiết kế nội thất năm 2025 nhờ tính tối giản, mộc mạc nhưng tinh tế. 
            Với triết lý đề cao vẻ đẹp "bất toàn", Wabi-Sabi tạo ra không gian sống ấm áp, yên bình, gần gũi thiên nhiên.
          </p>
          <p className="intro-highlight">
            Dưới đây là <strong>10 mẫu thiết kế nổi bật nhất 2025</strong> tại Hà Nội & Nha Trang.
          </p>
        </section>

        {/* Top 10 Mẫu */}
        <section className="content-section gallery-section">
          <h2>2. Top 10 mẫu thiết kế nội thất Wabi-Sabi</h2>
          
          <div className="design-gallery">
            {/* Mẫu 1 */}
            <div className="design-card">
              <div className="design-number">1</div>
              <div className="design-content">
                <h3>🏠 Phòng khách chung cư Wabi-Sabi tối giản</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Sofa vải lanh màu be, bàn gỗ thô mộc</p>
                  <p className="feature-item">✓ Sàn gỗ sáng màu, cây xanh nhỏ làm điểm nhấn</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Chung cư</span>
                  <span className="tag">Hà Nội</span>
                  <span className="tag">Tối giản</span>
                </div>
              </div>
            </div>

            {/* Mẫu 2 */}
            <div className="design-card">
              <div className="design-number">2</div>
              <div className="design-content">
                <h3>🏠 Phòng khách biệt thự Wabi-Sabi tại Nha Trang</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Không gian mở, cửa kính lớn đón nắng biển</p>
                  <p className="feature-item">✓ Tường xi măng xám thô, đồ gốm trang trí</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Biệt thự</span>
                  <span className="tag">Nha Trang</span>
                  <span className="tag">View biển</span>
                </div>
              </div>
            </div>

            {/* Mẫu 3 */}
            <div className="design-card">
              <div className="design-number">3</div>
              <div className="design-content">
                <h3>🛋️ Phòng khách nhà phố Hà Nội</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Tông xám – trắng – nâu</p>
                  <p className="feature-item">✓ Nội thất nhỏ gọn, gương lớn mở rộng không gian</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Nhà phố</span>
                  <span className="tag">Hà Nội</span>
                  <span className="tag">Diện tích nhỏ</span>
                </div>
              </div>
            </div>

            {/* Mẫu 4 */}
            <div className="design-card">
              <div className="design-number">4</div>
              <div className="design-content">
                <h3>🍽️ Phòng bếp – ăn tối giản</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Bàn gỗ nguyên tấm, ghế tre thô</p>
                  <p className="feature-item">✓ Đèn thả bằng mây tre, ánh sáng vàng ấm</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Phòng bếp</span>
                  <span className="tag">Vật liệu tự nhiên</span>
                </div>
              </div>
            </div>

            {/* Mẫu 5 */}
            <div className="design-card">
              <div className="design-number">5</div>
              <div className="design-content">
                <h3>🛏️ Phòng ngủ master biệt thự Wabi-Sabi</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Giường gỗ mộc, ga giường vải cotton</p>
                  <p className="feature-item">✓ Tranh tường tối giản, đèn gốm bàn ngủ</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Phòng ngủ</span>
                  <span className="tag">Biệt thự</span>
                  <span className="tag">Yên tĩnh</span>
                </div>
              </div>
            </div>

            {/* Mẫu 6 */}
            <div className="design-card">
              <div className="design-number">6</div>
              <div className="design-content">
                <h3>🛏️ Phòng ngủ nhỏ chung cư</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Tông be – trắng, tủ âm tường</p>
                  <p className="feature-item">✓ Cửa sổ rộng đón ánh sáng tự nhiên</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Phòng ngủ</span>
                  <span className="tag">Chung cư</span>
                  <span className="tag">Tối ưu</span>
                </div>
              </div>
            </div>

            {/* Mẫu 7 */}
            <div className="design-card">
              <div className="design-number">7</div>
              <div className="design-content">
                <h3>🚿 Phòng tắm Wabi-Sabi</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Bồn tắm đá thô, lavabo gốm sứ</p>
                  <p className="feature-item">✓ Cây xanh nhỏ tạo điểm nhấn Zen</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Phòng tắm</span>
                  <span className="tag">Zen</span>
                  <span className="tag">Spa</span>
                </div>
              </div>
            </div>

            {/* Mẫu 8 */}
            <div className="design-card">
              <div className="design-number">8</div>
              <div className="design-content">
                <h3>💼 Phòng làm việc tối giản</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Bàn gỗ tự nhiên, ghế tre ép</p>
                  <p className="feature-item">✓ Không trang trí rườm rà, ánh sáng tự nhiên</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Home office</span>
                  <span className="tag">Tập trung</span>
                </div>
              </div>
            </div>

            {/* Mẫu 9 */}
            <div className="design-card">
              <div className="design-number">9</div>
              <div className="design-content">
                <h3>🍵 Góc trà đạo Wabi-Sabi</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Bàn thấp, nệm ngồi, trà cụ gốm</p>
                  <p className="feature-item">✓ Không gian tĩnh tại, đậm chất Nhật Bản</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Góc thư giãn</span>
                  <span className="tag">Trà đạo</span>
                  <span className="tag">Nhật Bản</span>
                </div>
              </div>
            </div>

            {/* Mẫu 10 */}
            <div className="design-card featured">
              <div className="design-number">10</div>
              <div className="design-content">
                <h3>🏡 Homestay Wabi-Sabi tại Nha Trang</h3>
                <div className="design-features">
                  <p className="feature-item">✓ Trần gỗ, tường thô, sàn xi măng mài</p>
                  <p className="feature-item">✓ Không gian mở hòa hợp thiên nhiên, phù hợp du lịch nghỉ dưỡng</p>
                </div>
                <div className="design-tags">
                  <span className="tag">Homestay</span>
                  <span className="tag">Nha Trang</span>
                  <span className="tag">Nghỉ dưỡng</span>
                  <span className="tag">HOT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Categories */}
        <section className="content-section categories-section">
          <h3>Phân loại theo không gian</h3>
          <div className="categories-grid">
            <div className="category-card">
              <h4>🏠 Phòng khách</h4>
              <p>Mẫu 1, 2, 3</p>
            </div>
            <div className="category-card">
              <h4>🛏️ Phòng ngủ</h4>
              <p>Mẫu 5, 6</p>
            </div>
            <div className="category-card">
              <h4>🍽️ Phòng bếp</h4>
              <p>Mẫu 4</p>
            </div>
            <div className="category-card">
              <h4>🚿 Phòng tắm</h4>
              <p>Mẫu 7</p>
            </div>
            <div className="category-card">
              <h4>💼 Phòng làm việc</h4>
              <p>Mẫu 8</p>
            </div>
            <div className="category-card">
              <h4>🏡 Homestay/Villa</h4>
              <p>Mẫu 2, 10</p>
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
                  <th>Hạng mục</th>
                  <th>Đơn giá (VNĐ/m²)</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chung cư</td>
                  <td className="price">150.000 – 200.000</td>
                  <td>Nội thất tối giản, nhiều ánh sáng</td>
                </tr>
                <tr>
                  <td>Nhà phố</td>
                  <td className="price">160.000 – 220.000</td>
                  <td>Không gian hẹp, bố trí thông minh</td>
                </tr>
                <tr>
                  <td>Biệt thự/villa, homestay</td>
                  <td className="price">200.000 – 280.000</td>
                  <td>Không gian lớn, vật liệu tự nhiên</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="pricing-note">
            📌 <strong>Lưu ý:</strong> Giá tham khảo, có thể thay đổi tùy diện tích & yêu cầu chi tiết.
          </p>
        </section>

        {/* Key Features */}
        <section className="content-section features-summary">
          <h3>Điểm chung của các mẫu thiết kế</h3>
          <div className="features-grid">
            <div className="feature-box">
              <span className="icon">🎨</span>
              <h4>Màu sắc trung tính</h4>
              <p>Be, nâu, xám, trắng ngà</p>
            </div>
            <div className="feature-box">
              <span className="icon">🪵</span>
              <h4>Vật liệu tự nhiên</h4>
              <p>Gỗ, tre, gốm, đá thô</p>
            </div>
            <div className="feature-box">
              <span className="icon">💡</span>
              <h4>Ánh sáng tự nhiên</h4>
              <p>Cửa kính lớn, giếng trời</p>
            </div>
            <div className="feature-box">
              <span className="icon">🌿</span>
              <h4>Cây xanh điểm nhấn</h4>
              <p>Hoa khô, cây cảnh mini</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-box">
            <h2>Phong cách Wabi-Sabi 2025</h2>
            <p>Mang lại không gian sống tĩnh tại – mộc mạc – gần gũi thiên nhiên, từ chung cư nhỏ gọn ở Hà Nội đến villa nghỉ dưỡng tại Nha Trang.</p>
            <p className="cta-highlight">👉 Hãy liên hệ ngay để nhận tư vấn miễn phí & phối cảnh 3D chi tiết cho không gian Wabi-Sabi của bạn.</p>
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
            
            <Link to="/thiet-ke/thiet-ke-noi-that/phong-cach-wabi-sabi/5-noi-dau-thiet-ke-wabi-sabi" className="article-card">
              <h3>5 nỗi đau khi thiết kế Wabi-Sabi</h3>
              <p>Giải pháp khắc phục những khó khăn thường gặp</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Top10MauThietKeWabiSabi;
