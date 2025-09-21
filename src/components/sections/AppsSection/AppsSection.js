import React from 'react';
import './AppsSection.css';

const AppsSection = () => {
    const appsList = [
        {
            title: 'Ứng dụng Tính chi phí xây dựng',
            description: 'Ứng dụng dự toán nhà phố do chính LIN HOME phát triển, có độ chính xác trên 95%, đơn giá thi công xây dựng được cập nhật thường xuyên theo tỉnh thành.',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="calc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2310b981"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="120" height="120" fill="url(%23calc)" rx="20"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white" font-weight="bold">Calculator</text></svg>',
            link: '/vn/tinh-chi-phi-xay-dung.html'
        },
        {
            title: 'Ứng dụng xem Tuổi làm nhà',
            description: 'Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không.',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f59e0b" rx="20"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white">Age Check</text></svg>',
            link: '/vn/xem-tuoi-lam-nha.html'
        },
        {
            title: 'Ứng dụng thiết kế 3D',
            description: 'Công cụ thiết kế 3D trực tuyến giúp bạn tạo ra mô hình ngôi nhà mơ ước một cách dễ dàng. Với giao diện thân thiện và thư viện vật liệu phong phú.',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23667eea" rx="20"/><text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="8" fill="white">3D Design</text></svg>',
            link: '/vn/thiet-ke-3d.html'
        }
    ];

    const handleAppClick = (app) => {
        alert(`Chuyển đến: ${app.title}`);
    };

    return (
        <section className="apps">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Công cụ hỗ trợ</div>
                    <h2 className="section-title">Ứng dụng tiện ích</h2>
                    <p className="section-subtitle">
                        Bộ công cụ toàn diện hỗ trợ khách hàng trong quá trình
                        thiết kế và xây dựng ngôi nhà
                    </p>
                </div>
                <div className="apps-grid">
                    {appsList.map((app, index) => (
                        <article key={index} className="app-card">
                            <div className="app-icon">
                                <img src={app.image} alt={app.title} loading="lazy" />
                            </div>
                            <div className="app-content">
                                <h3>
                                    <button
                                        onClick={() => handleAppClick(app)}
                                        aria-label={`Mở ứng dụng ${app.title}`}
                                    >
                                        {app.title}
                                    </button>
                                </h3>
                                <p>{app.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppsSection;

