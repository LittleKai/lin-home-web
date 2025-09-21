// src/pages/thiet-ke/thiet-ke-kien-truc.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FloatButtons from '../../components/FloatButtons/FloatButtons';
import './ThietKePage.css';

const ThietKeKienTrucPage = () => {
    const [activeStyle, setActiveStyle] = useState('hien-dai');

    // Architecture styles data from document
    const architectureStyles = [
        {
            id: 'hien-dai',
            name: 'Kiến trúc Hiện đại',
            description: 'Tập trung vào hình khối đơn giản, mặt tiền phẳng và hệ kính lớn để tối ưu ánh sáng tự nhiên.',
            characteristics: [
                'Mặt bằng mở, tỉ lệ rõ ràng',
                'Ít chi tiết trang trí rườm rà',
                'Tối ưu hướng sáng',
                'Đảm bảo cách nhiệt cho mặt kính',
                'Hài hòa giữa không gian trong/ngoài'
            ],
            materials: ['Kính', 'Thép', 'Bê tông', 'Ốp gỗ công nghiệp', 'Gỗ tự nhiên'],
            colors: ['Trắng', 'Xám', 'Đen', 'Điểm nhấn màu gỗ ấm', 'Màu nổi'],
            suitableFor: ['Chung cư', 'Nhà phố hiện đại', 'Văn phòng'],
            cost: 'Trung bình',
            notes: 'Có thể tiết kiệm nếu sử dụng vật liệu tiêu chuẩn',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="modern" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="300" fill="url(%23modern)"/><rect x="80" y="100" width="240" height="140" fill="rgba(255,255,255,0.95)" rx="8"/><rect x="100" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="150" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="200" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="250" y="120" width="40" height="60" fill="%23667eea" rx="4"/><rect x="300" y="140" width="15" height="40" fill="%23d69e2e" rx="2"/><rect x="80" y="100" width="240" height="8" fill="%23667eea" rx="4"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Kiến trúc hiện đại</text></svg>'
        },
        {
            id: 'co-dien',
            name: 'Kiến trúc Cổ điển',
            description: 'Nhấn mạnh tính biểu tượng và yếu tố trang trí tinh xảo, thể hiện sự sang trọng.',
            characteristics: [
                'Phào chỉ, cột, mái',
                'Chi tiết điêu khắc',
                'Cửa vòm',
                'Cần tính toán tỉ lệ, cân bằng chi tiết trang trí',
                'Chi phí bảo trì cao hơn'
            ],
            materials: ['Đá tự nhiên', 'Thạch cao', 'Gỗ cao cấp', 'Sơn mịn'],
            colors: ['Kem', 'Be', 'Vàng nhạt', 'Các gam trung tính ấm'],
            suitableFor: ['Biệt thự', 'Nhà lô cao cấp', 'Công trình đòi hỏi tính trang trọng'],
            cost: 'Cao',
            notes: 'Do yêu cầu thi công tỉ mỉ và vật liệu cao cấp',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="classic" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23d4af37"/><stop offset="100%" style="stop-color:%23b8860b"/></linearGradient></defs><rect width="400" height="300" fill="url(%23classic)"/><rect x="80" y="120" width="240" height="120" fill="rgba(255,255,255,0.95)" rx="0"/><rect x="90" y="130" width="12" height="100" fill="%23d4af37" rx="6"/><rect x="120" y="130" width="12" height="100" fill="%23d4af37" rx="6"/><rect x="270" y="130" width="12" height="100" fill="%23d4af37" rx="6"/><rect x="300" y="130" width="12" height="100" fill="%23d4af37" rx="6"/><rect x="150" y="160" width="30" height="50" fill="%238b4513" rx="15"/><polygon points="80,120 200,80 320,120" fill="rgba(212,175,55,0.8)"/><rect x="80" y="115" width="240" height="8" fill="%23d4af37"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Kiến trúc cổ điển</text></svg>'
        },
        {
            id: 'tan-co-dien',
            name: 'Kiến trúc Tân cổ điển',
            description: 'Kết hợp tinh tế giữa yếu tố cổ điển và các đường nét hiện đại.',
            characteristics: [
                'Phào chỉ nhẹ nhàng',
                'Khối kiến trúc cân đối',
                'Cửa sổ lớn',
                'Giữ sự cân bằng giữa chi tiết cổ điển và đường nét hiện đại',
                'Tránh cảm giác nặng nề'
            ],
            materials: ['Gỗ', 'Đá ốp', 'Hệ lan can mạ', 'Các chi tiết kim loại mạ vàng'],
            colors: ['Trắng', 'Be', 'Xám nhạt', 'Kết hợp điểm nhấn vàng hay xanh đậm'],
            suitableFor: ['Nhà phố', 'Biệt thự cần vẻ sang trọng nhưng không quá nặng nề'],
            cost: 'Trung cao',
            notes: 'Phụ thuộc mức độ trang trí và vật liệu',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="neoclassic" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f4f4f4"/><stop offset="100%" style="stop-color:%23e0e0e0"/></linearGradient></defs><rect width="400" height="300" fill="url(%23neoclassic)"/><rect x="80" y="110" width="240" height="130" fill="rgba(255,255,255,0.98)" rx="4"/><rect x="100" y="130" width="35" height="55" fill="%236b7280" rx="4"/><rect x="145" y="130" width="35" height="55" fill="%236b7280" rx="4"/><rect x="220" y="130" width="35" height="55" fill="%236b7280" rx="4"/><rect x="265" y="130" width="35" height="55" fill="%236b7280" rx="4"/><rect x="310" y="160" width="15" height="40" fill="%23d4af37" rx="2"/><polygon points="75,110 200,75 325,110" fill="rgba(107,114,128,0.8)"/><rect x="185" y="195" width="30" height="35" fill="%23d4af37" rx="4"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="%23666" font-weight="bold">Tân cổ điển</text></svg>'
        },
        {
            id: 'toi-gian',
            name: 'Kiến trúc Tối giản (Minimalism)',
            description: 'Thiết kế theo nguyên tắc "ít nhưng chất": tập trung vào công năng và tỷ lệ.',
            characteristics: [
                'Mặt phẳng lớn',
                'Đường nét sắc bén',
                'Không gian mở',
                'Ít màu sắc',
                'Chất lượng hoàn thiện rất quan trọng'
            ],
            materials: ['Bê tông trần', 'Gỗ', 'Kính', 'Kim loại sơn tĩnh điện'],
            colors: ['Trắng', 'Xám', 'Đen', 'Màu gỗ tự nhiên'],
            suitableFor: ['Nhà phố hiện đại', 'Căn hộ nhỏ', 'Không gian làm việc'],
            cost: 'Trung bình',
            notes: 'Tiết kiệm về chi tiết nhưng yêu cầu hoàn thiện cao',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="minimal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f8fafc"/><stop offset="100%" style="stop-color:%23e2e8f0"/></linearGradient></defs><rect width="400" height="300" fill="url(%23minimal)"/><rect x="100" y="100" width="200" height="120" fill="rgba(255,255,255,0.98)" rx="0"/><rect x="120" y="120" width="60" height="40" fill="%23374151" rx="0"/><rect x="200" y="120" width="60" height="40" fill="%23374151" rx="0"/><rect x="120" y="170" width="140" height="30" fill="%23d1d5db" rx="0"/><rect x="320" y="140" width="8" height="60" fill="%23374151" rx="0"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="%23666" font-weight="bold">Tối giản</text></svg>'
        },
        {
            id: 'indochine',
            name: 'Kiến trúc Indochine (Đông Dương)',
            description: 'Kết hợp tinh hoa kiến trúc Pháp thời thuộc địa với văn hóa truyền thống Á Đông.',
            characteristics: [
                'Mái ngói',
                'Cửa chớp',
                'Ban công',
                'Họa tiết hoa văn truyền thống',
                'Không gian bán mở'
            ],
            materials: ['Gỗ tự nhiên', 'Ngói đất nung', 'Đá lát', 'Gạch hoa bằng men'],
            colors: ['Tông đất ấm', 'Nâu gỗ', 'Kem', 'Xanh nhẹ'],
            suitableFor: ['Nhà phố truyền thống', 'Biệt thự nghỉ dưỡng', 'Quán cà phê phong cách retro'],
            cost: 'Trung bình đến cao',
            notes: 'Tùy vật liệu gỗ và độ tinh xảo của chi tiết. Lưu ý chống ẩm ở khí hậu nhiệt đới',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="indochine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23d2691e"/><stop offset="100%" style="stop-color:%23a0522d"/></linearGradient></defs><rect width="400" height="300" fill="url(%23indochine)"/><rect x="80" y="120" width="240" height="120" fill="rgba(255,248,220,0.95)" rx="4"/><rect x="100" y="140" width="25" height="60" fill="%238b4513" rx="0"/><rect x="135" y="140" width="25" height="60" fill="%238b4513" rx="0"/><rect x="240" y="140" width="25" height="60" fill="%238b4513" rx="0"/><rect x="275" y="140" width="25" height="60" fill="%238b4513" rx="0"/><polygon points="75,120 200,90 325,120" fill="rgba(139,69,19,0.9)"/><rect x="170" y="170" width="20" height="40" fill="%23654321" rx="2"/><rect x="200" y="170" width="20" height="40" fill="%23654321" rx="2"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Indochine</text></svg>'
        },
        {
            id: 'xanh',
            name: 'Kiến trúc Xanh (Eco-Architecture)',
            description: 'Thiết kế hướng đến bền vững, tối ưu sử dụng năng lượng và thân thiện môi trường.',
            characteristics: [
                'Mái xanh',
                'Thông gió tự nhiên',
                'Sử dụng vật liệu tái chế',
                'Hệ thu nước mưa',
                'Thiết kế hợp lý để tối ưu hiệu quả môi trường'
            ],
            materials: ['Gỗ tái tạo', 'Tre', 'Vật liệu cách nhiệt', 'Kính tiết kiệm năng lượng'],
            colors: ['Tông trung tính', 'Xanh lá', 'Gỗ tự nhiên'],
            suitableFor: ['Nhà ở mong muốn tiết kiệm năng lượng', 'Dự án cộng đồng', 'Nghỉ dưỡng sinh thái'],
            cost: 'Biến thiên',
            notes: 'Thường cao ở giai đoạn đầu do đầu tư hệ thống bền vững nhưng tiết kiệm năng lượng lâu dài',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="eco" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="400" height="300" fill="url(%23eco)"/><rect x="80" y="120" width="240" height="120" fill="rgba(255,255,255,0.95)" rx="8"/><rect x="100" y="140" width="40" height="50" fill="%2334d399" rx="4"/><rect x="150" y="140" width="40" height="50" fill="%2334d399" rx="4"/><rect x="210" y="140" width="40" height="50" fill="%2334d399" rx="4"/><rect x="260" y="140" width="40" height="50" fill="%2334d399" rx="4"/><ellipse cx="120" cy="110" rx="15" ry="8" fill="rgba(34,197,94,0.8)"/><ellipse cx="180" cy="105" rx="20" ry="10" fill="rgba(34,197,94,0.8)"/><ellipse cx="240" cy="108" rx="18" ry="9" fill="rgba(34,197,94,0.8)"/><ellipse cx="280" cy="112" rx="12" ry="6" fill="rgba(34,197,94,0.8)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Kiến trúc xanh</text></svg>'
        },
        {
            id: 'dia-trung-hai',
            name: 'Kiến trúc Địa Trung Hải (Mediterranean)',
            description: 'Lấy cảm hứng từ vùng ven biển Địa Trung Hải với không gian thoáng và màu sắc tươi sáng.',
            characteristics: [
                'Tường trát vữa',
                'Mái ngói đỏ/terracotta',
                'Ban công',
                'Cửa vòm',
                'Thiết kế chú trọng không gian ngoại thất'
            ],
            materials: ['Vữa trát', 'Gạch men', 'Gỗ', 'Đá tự nhiên'],
            colors: ['Trắng', 'Xanh biển', 'Vàng nắng', 'Terracotta'],
            suitableFor: ['Biệt thự ven biển', 'Nhà nghỉ dưỡng', 'Khu du lịch'],
            cost: 'Trung bình đến cao',
            notes: 'Phụ thuộc vật liệu hoàn thiện ngoại thất và khả năng chống ăn mòn do khí hậu biển',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="mediterranean" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%234682b4"/><stop offset="100%" style="stop-color:%232e8b57"/></linearGradient></defs><rect width="400" height="300" fill="url(%23mediterranean)"/><rect x="80" y="120" width="240" height="120" fill="rgba(255,248,220,0.95)" rx="8"/><rect x="100" y="140" width="30" height="50" fill="%234682b4" rx="15"/><rect x="140" y="140" width="30" height="50" fill="%234682b4" rx="15"/><rect x="230" y="140" width="30" height="50" fill="%234682b4" rx="15"/><rect x="270" y="140" width="30" height="50" fill="%234682b4" rx="15"/><polygon points="75,120 200,85 325,120" fill="rgba(205,92,92,0.8)"/><circle cx="350" cy="60" r="25" fill="rgba(255,215,0,0.8)"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Địa Trung Hải</text></svg>'
        },
        {
            id: 'brutalism',
            name: 'Kiến trúc Brutalism (Thô mộc)',
            description: 'Phong cách mạnh mẽ, trung thực với vật liệu, thể hiện qua khối hộp lớn và bề mặt thô.',
            characteristics: [
                'Bê tông trần',
                'Khối hình học',
                'Ít trang trí',
                'Biểu đạt cấu trúc thô',
                'Xử lý chi tiết hoàn thiện để tránh cảm giác lạnh lẽo'
            ],
            materials: ['Bê tông', 'Thép', 'Kính'],
            colors: ['Xám', 'Đen', 'Tông đất'],
            suitableFor: ['Công trình muốn tạo dấu ấn kiến trúc', 'Biệt thự cá tính', 'Công trình nghệ thuật'],
            cost: 'Trung bình đến cao',
            notes: 'Phụ thuộc vào kỹ thuật hoàn thiện bê tông. Có thể kết hợp gỗ và cây xanh để làm mềm',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="brutalism" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23696969"/><stop offset="100%" style="stop-color:%23404040"/></linearGradient></defs><rect width="400" height="300" fill="url(%23brutalism)"/><rect x="80" y="100" width="240" height="140" fill="rgba(128,128,128,0.9)" rx="0"/><rect x="100" y="120" width="50" height="80" fill="%23404040" rx="0"/><rect x="170" y="110" width="60" height="90" fill="%23404040" rx="0"/><rect x="250" y="130" width="50" height="70" fill="%23404040" rx="0"/><rect x="80" y="100" width="240" height="10" fill="%23303030"/><rect x="120" y="140" width="8" height="40" fill="%23606060"/><rect x="190" y="130" width="8" height="50" fill="%23606060"/><text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="14" fill="white" font-weight="bold">Brutalism</text></svg>'
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Tư vấn nhu cầu và phong cách",
            description: "Tìm hiểu yêu cầu, sở thích và phong cách kiến trúc mong muốn",
            icon: "fa-comments"
        },
        {
            step: 2,
            title: "Khảo sát hiện trạng, đo đạc",
            description: "Khảo sát địa hình, đo đạc chính xác mặt bằng và hiện trạng",
            icon: "fa-ruler-combined"
        },
        {
            step: 3,
            title: "Lên ý tưởng và bản vẽ sơ bộ",
            description: "Phát triển ý tưởng thiết kế và tạo bản vẽ phác thảo ban đầu",
            icon: "fa-lightbulb"
        },
        {
            step: 4,
            title: "Chốt phương án, triển khai bản vẽ chi tiết",
            description: "Hoàn thiện thiết kế và triển khai bản vẽ kỹ thuật chi tiết",
            icon: "fa-drafting-compass"
        },
        {
            step: 5,
            title: "Bàn giao hồ sơ và hỗ trợ giám sát",
            description: "Bàn giao đầy đủ hồ sơ thiết kế và hỗ trợ trong quá trình thi công",
            icon: "fa-handshake"
        }
    ];

    const benefits = [
        {
            title: "Sở hữu công trình đẹp, bền vững",
            description: "Thiết kế chất lượng cao, đảm bảo tính thẩm mỹ và độ bền lâu dài cho công trình",
            icon: "fa-home"
        },
        {
            title: "Tối ưu công năng, tiện nghi",
            description: "Bố trí không gian hợp lý, phù hợp với nhu cầu sử dụng và sinh hoạt thực tế",
            icon: "fa-puzzle-piece"
        },
        {
            title: "Hạn chế chi phí phát sinh",
            description: "Thiết kế chi tiết giúp kiểm soát tốt chi phí và tránh các sai sót trong quá trình thi công",
            icon: "fa-dollar-sign"
        },
        {
            title: "Đồng hành xuyên suốt",
            description: "Đội ngũ kiến trúc sư chuyên nghiệp hỗ trợ từ khâu thiết kế đến giám sát thi công",
            icon: "fa-users"
        }
    ];

    const architectureRoles = [
        "Định hình phong cách tổng thể cho công trình",
        "Đảm bảo công năng sử dụng, phù hợp nhu cầu",
        "Tối ưu chi phí thi công",
        "Mang lại sự hài hòa giữa công trình và cảnh quan xung quanh"
    ];

    const handleStyleChange = (styleId) => {
        setActiveStyle(styleId);
    };

    const activeStyleData = architectureStyles.find(style => style.id === activeStyle);

    const handleContactClick = () => {
        alert('Chuyển đến trang liên hệ để tư vấn miễn phí');
    };

    const handlePortfolioClick = () => {
        alert('Chuyển đến trang portfolio để xem các dự án đã thực hiện');
    };

    return (
        <div className="thiet-ke-page">
            <Header />

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1>🏛️ Thiết Kế Kiến Trúc</h1>
                            <p className="hero-subtitle">
                                Giải Pháp Tạo Nên Không Gian Sống Hoàn Hảo
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">9+</span>
                                    <span className="stat-label">Phong cách kiến trúc</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Bước thiết kế</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Năm kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <div className="intro-content">
                            <div className="intro-text">
                                <h2>Thiết kế kiến trúc là gì?</h2>
                                <p>
                                    Thiết kế kiến trúc là quá trình sáng tạo và tổ chức không gian sống, đảm bảo hài hòa
                                    giữa công năng, thẩm mỹ và phong thủy. Đây là bước quan trọng giúp gia chủ có một
                                    ngôi nhà không chỉ đẹp mà còn tiện nghi và bền vững.
                                </p>

                                <h3>Vai trò của thiết kế kiến trúc</h3>
                                <ul className="role-list">
                                    {architectureRoles.map((role, index) => (
                                        <li key={index}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="intro-image">
                                <img
                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='arch' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><rect width='400' height='300' fill='url(%23arch)'/><rect x='80' y='100' width='240' height='140' fill='rgba(255,255,255,0.9)' rx='12'/><rect x='100' y='120' width='60' height='80' fill='%23667eea' rx='8'/><rect x='170' y='110' width='60' height='90' fill='%23667eea' rx='8'/><rect x='240' y='125' width='60' height='75' fill='%23667eea' rx='8'/><polygon points='80,100 200,60 320,100' fill='rgba(118,75,162,0.8)'/><circle cx='340' cy='70' r='25' fill='rgba(255,215,0,0.8)'/><text x='200' y='270' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'>Thiết kế kiến trúc</text></svg>"
                                    alt="Thiết kế kiến trúc"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture Styles Section */}
                <section className="styles-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Các Phong Cách Thiết Kế Kiến Trúc Phổ Biến</h2>
                            <p>Khám phá những phong cách kiến trúc được ưa chuộng nhất hiện nay với đặc trưng riêng biệt</p>
                        </div>

                        <div className="styles-tabs">
                            {architectureStyles.map((style) => (
                                <button
                                    key={style.id}
                                    className={`style-tab ${activeStyle === style.id ? 'active' : ''}`}
                                    onClick={() => handleStyleChange(style.id)}
                                    aria-label={`Chọn phong cách ${style.name}`}
                                >
                                    {style.name}
                                </button>
                            ))}
                        </div>

                        {activeStyleData && (
                            <div className="style-detail">
                                <div className="style-image">
                                    <img src={activeStyleData.image} alt={activeStyleData.name} />
                                </div>
                                <div className="style-info">
                                    <h3>{activeStyleData.name}</h3>
                                    <p className="style-description">{activeStyleData.description}</p>

                                    <div className="style-features">
                                        <div className="feature-group">
                                            <h4><i className="fas fa-star"></i> Đặc trưng</h4>
                                            <ul>
                                                {activeStyleData.characteristics.map((char, index) => (
                                                    <li key={index}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-cube"></i> Vật liệu/Chất liệu</h4>
                                            <div className="tag-list">
                                                {activeStyleData.materials.map((material, index) => (
                                                    <span key={index} className="tag">{material}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-palette"></i> Bảng màu</h4>
                                            <div className="tag-list">
                                                {activeStyleData.colors.map((color, index) => (
                                                    <span key={index} className="tag color-tag">{color}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-home"></i> Phù hợp cho</h4>
                                            <div className="tag-list">
                                                {activeStyleData.suitableFor.map((suit, index) => (
                                                    <span key={index} className="tag">{suit}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="feature-group">
                                            <h4><i className="fas fa-dollar-sign"></i> Chi phí/Độ khó</h4>
                                            <span className={`cost-badge ${
                                                activeStyleData.cost.includes('Cao') || activeStyleData.cost.includes('cao') ? 'high' :
                                                    activeStyleData.cost.includes('Trung') || activeStyleData.cost.includes('trung') ? 'medium' : 'low'
                                            }`}>
                                                {activeStyleData.cost}
                                            </span>
                                        </div>

                                        {activeStyleData.notes && (
                                            <div className="feature-group">
                                                <h4><i className="fas fa-info-circle"></i> Lưu ý khi thiết kế</h4>
                                                <p className="style-notes">{activeStyleData.notes}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Quy Trình Thiết Kế Kiến Trúc</h2>
                            <p>5 bước thực hiện dự án thiết kế kiến trúc chuyên nghiệp từ ý tưởng đến hoàn thiện</p>
                        </div>

                        <div className="process-grid">
                            {processSteps.map((step, index) => (
                                <div key={step.step} className="process-card">
                                    <div className="process-number">
                                        <span>{step.step}</span>
                                    </div>
                                    <div className="process-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lợi Ích Khi Sử Dụng Dịch Vụ Thiết Kế Kiến Trúc Chuyên Nghiệp</h2>
                            <p>Những giá trị đặc biệt mà chúng tôi mang lại cho dự án của bạn</p>
                        </div>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon">
                                        <i className={`fas ${benefit.icon}`}></i>
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Info Section */}
                <section className="additional-info-section">
                    <div className="container">
                        <div className="additional-content">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3>Tư vấn phong cách phù hợp</h3>
                                <p>
                                    Mỗi phong cách kiến trúc có những đặc trưng riêng biệt. Đội ngũ kiến trúc sư
                                    của chúng tôi sẽ tư vấn phong cách phù hợp nhất với nhu cầu, sở thích và
                                    ngân sách của gia đình bạn.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h3>Thiết kế bền vững</h3>
                                <p>
                                    Chúng tôi ưu tiên các giải pháp thiết kế thân thiện với môi trường,
                                    tiết kiệm năng lượng và sử dụng vật liệu bền vững, giúp giảm chi phí
                                    vận hành lâu dài cho gia đình bạn.
                                </p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Tăng giá trị bất động sản</h3>
                                <p>
                                    Một thiết kế kiến trúc đẹp và hợp lý không chỉ mang lại không gian sống
                                    thoải mái mà còn gia tăng đáng kể giá trị bất động sản của ngôi nhà bạn
                                    trong tương lai.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Bắt Đầu Dự Án Thiết Kế Kiến Trúc Của Bạn</h2>
                            <p>
                                Thiết kế kiến trúc là bước nền tảng để tạo nên một công trình đẹp, bền vững và phù hợp
                                với phong cách sống của gia chủ. Việc lựa chọn đơn vị thiết kế uy tín sẽ giúp bạn tiết
                                kiệm chi phí, đảm bảo tiến độ và sở hữu một không gian sống lý tưởng.
                            </p>
                            <p>
                                Nếu bạn đang tìm kiếm giải pháp <strong>thiết kế - thi công kiến trúc trọn gói</strong>,
                                hãy liên hệ ngay với đội ngũ kiến trúc sư chuyên nghiệp để được tư vấn chi tiết và
                                nhận báo giá phù hợp nhất.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn-primary" onClick={handleContactClick}>
                                    <i className="fas fa-phone"></i>
                                    Tư vấn miễn phí
                                </button>
                                <button className="btn-secondary" onClick={handlePortfolioClick}>
                                    <i className="fas fa-drafting-compass"></i>
                                    Xem portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatButtons />
        </div>
    );
};

export default ThietKeKienTrucPage;