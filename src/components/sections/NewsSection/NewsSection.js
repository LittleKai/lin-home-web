// src/components/sections/NewsSection/NewsSection.js
import React, { useState, useEffect, useMemo } from 'react';
import './NewsSection.css';

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Static news data - moved to useMemo to fix ESLint warning
    const staticNews = useMemo(() => [
        {
            _id: '1',
            title: 'Xu hướng kiến trúc xanh trong xây dựng hiện đại 2025',
            publishedAt: '2025-08-20',
            category: 'Kiến trúc',
            excerpt: 'Kiến trúc xanh đang trở thành xu hướng chủ đạo trong ngành xây dựng với các giải pháp bền vững và thân thiện môi trường. Các công trình xanh không chỉ giúp tiết kiệm năng lượng mà còn tạo ra môi trường sống tốt hơn.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2334d399"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="400" height="200" fill="url(%23green)"/><rect x="50" y="100" width="300" height="60" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="70" y="110" width="20" height="40" fill="%23059669" rx="2"/><rect x="100" y="115" width="20" height="35" fill="%23059669" rx="2"/><rect x="130" y="120" width="20" height="30" fill="%23059669" rx="2"/><rect x="160" y="110" width="20" height="40" fill="%23059669" rx="2"/><circle cx="300" cy="50" r="20" fill="%23fbbf24"/><ellipse cx="200" cy="180" rx="60" ry="10" fill="rgba(34,197,94,0.6)"/><ellipse cx="120" cy="185" rx="40" ry="8" fill="rgba(34,197,94,0.6)"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Kiến trúc xanh</text></svg>',
                alt: 'Kiến trúc xanh'
            },
            views: 1250
        },
        {
            _id: '2',
            title: 'Vật liệu xây dựng thông minh cho ngôi nhà tương lai',
            publishedAt: '2025-08-18',
            category: 'Vật liệu',
            excerpt: 'Các vật liệu xây dựng thông minh giúp tối ưu hóa năng lượng và tăng độ bền vững cho công trình. Từ gạch thông minh có thể điều chỉnh nhiệt độ đến kính tự làm sạch, công nghệ đang thay đổi cách chúng ta xây dựng.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="smart" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%236366f1"/><stop offset="100%" style="stop-color:%234f46e5"/></linearGradient></defs><rect width="400" height="200" fill="url(%23smart)"/><rect x="80" y="80" width="240" height="80" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="100" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="160" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="220" y="100" width="40" height="40" fill="%236366f1" rx="8"/><rect x="280" y="100" width="40" height="40" fill="%236366f1" rx="8"/><circle cx="120" cy="120" r="8" fill="white"/><circle cx="180" cy="120" r="8" fill="white"/><circle cx="240" cy="120" r="8" fill="white"/><circle cx="300" cy="120" r="8" fill="white"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Smart Materials</text></svg>',
                alt: 'Vật liệu thông minh'
            },
            views: 980
        },
        {
            _id: '3',
            title: 'Phong thủy trong thiết kế nhà ở hiện đại',
            publishedAt: '2025-08-15',
            category: 'Phong thủy',
            excerpt: 'Kết hợp phong thủy truyền thống với thiết kế hiện đại để tạo ra không gian sống hài hòa và thịnh vượng. Những nguyên tắc cơ bản về hướng nhà, bố trí nội thất và màu sắc trong phong thủy hiện đại.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="fengshui" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f59e0b"/><stop offset="100%" style="stop-color:%23d97706"/></linearGradient></defs><rect width="400" height="200" fill="url(%23fengshui)"/><circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.9)"/><path d="M 200 60 A 40 40 0 0 1 200 140 A 40 40 0 0 1 200 60" fill="%23000"/><path d="M 200 60 A 40 40 0 0 0 200 140 A 40 40 0 0 0 200 60" fill="%23fff"/><circle cx="180" cy="80" r="8" fill="white"/><circle cx="220" cy="120" r="8" fill="black"/><rect x="50" y="140" width="80" height="40" fill="rgba(255,255,255,0.8)" rx="6"/><rect x="270" y="140" width="80" height="40" fill="rgba(255,255,255,0.8)" rx="6"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Phong thủy hiện đại</text></svg>',
                alt: 'Phong thủy hiện đại'
            },
            views: 1580
        },
        {
            _id: '4',
            title: 'Mẫu nhà 2 tầng đẹp năm 2025',
            publishedAt: '2025-08-12',
            category: 'Mẫu nhà',
            excerpt: 'Tổng hợp những mẫu nhà 2 tầng đẹp nhất năm 2025 với thiết kế hiện đại, tối ưu công năng và phù hợp với xu hướng kiến trúc mới. Từ phong cách tối giản đến luxury sang trọng.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="house" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><rect width="400" height="200" fill="url(%23house)"/><rect x="100" y="80" width="200" height="80" fill="rgba(255,255,255,0.9)" rx="8"/><rect x="120" y="100" width="25" height="25" fill="%23667eea" rx="3"/><rect x="155" y="100" width="25" height="25" fill="%23667eea" rx="3"/><rect x="190" y="100" width="25" height="25" fill="%23667eea" rx="3"/><rect x="225" y="100" width="25" height="25" fill="%23667eea" rx="3"/><rect x="260" y="120" width="15" height="30" fill="%23d69e2e" rx="2"/><polygon points="100,80 200,40 300,80" fill="rgba(139,69,19,0.8)"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Mẫu nhà 2 tầng</text></svg>',
                alt: 'Mẫu nhà 2 tầng đẹp'
            },
            views: 2100
        },
        {
            _id: '5',
            title: 'Chi phí xây nhà trọn gói 2025',
            publishedAt: '2025-08-10',
            category: 'Báo giá',
            excerpt: 'Bảng giá chi tiết chi phí xây nhà trọn gói năm 2025, bao gồm vật liệu, nhân công và các hạng mục từ móng đến hoàn thiện. Cập nhật giá mới nhất theo từng khu vực.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="cost" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2310b981"/><stop offset="100%" style="stop-color:%23059669"/></linearGradient></defs><rect width="400" height="200" fill="url(%23cost)"/><rect x="80" y="60" width="240" height="100" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="100" y="80" width="60" height="8" fill="%2310b981" rx="4"/><rect x="100" y="100" width="80" height="8" fill="%2310b981" rx="4"/><rect x="100" y="120" width="50" height="8" fill="%2310b981" rx="4"/><rect x="100" y="140" width="70" height="8" fill="%2310b981" rx="4"/><circle cx="280" cy="110" r="25" fill="%23059669"/><text x="280" y="115" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">$</text><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Chi phí xây nhà</text></svg>',
                alt: 'Chi phí xây nhà trọn gói'
            },
            views: 3200
        },
        {
            _id: '6',
            title: 'Nội thất phòng bếp hiện đại',
            publishedAt: '2025-08-08',
            category: 'Nội thất',
            excerpt: 'Khám phá các xu hướng thiết kế nội thất phòng bếp hiện đại 2025. Từ bếp mở tích hợp phòng khách đến smart kitchen với công nghệ thông minh, tất cả để tạo nên không gian bếp hoàn hảo.',
            featuredImage: {
                url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="kitchen" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ef4444"/><stop offset="100%" style="stop-color:%23dc2626"/></linearGradient></defs><rect width="400" height="200" fill="url(%23kitchen)"/><rect x="60" y="60" width="280" height="100" fill="rgba(255,255,255,0.9)" rx="12"/><rect x="80" y="80" width="40" height="60" fill="%23ef4444" rx="6"/><rect x="130" y="80" width="40" height="60" fill="%23ef4444" rx="6"/><rect x="180" y="80" width="40" height="60" fill="%23ef4444" rx="6"/><rect x="230" y="80" width="40" height="60" fill="%23ef4444" rx="6"/><rect x="280" y="80" width="40" height="60" fill="%23ef4444" rx="6"/><rect x="90" y="90" width="20" height="4" fill="white" rx="2"/><rect x="140" y="90" width="20" height="4" fill="white" rx="2"/><rect x="190" y="90" width="20" height="4" fill="white" rx="2"/><text x="200" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="white" font-weight="bold">Nội thất bếp hiện đại</text></svg>',
                alt: 'Nội thất phòng bếp hiện đại'
            },
            views: 1890
        }
    ], []);

    useEffect(() => {
        const loadNews = () => {
            setTimeout(() => {
                // Get first 3 news items
                setNews(staticNews.slice(0, 3));
                setLoading(false);
            }, 600); // Simulate loading time
        };

        loadNews();
    }, [staticNews]);

    const handleNewsClick = (article) => {
        alert(`Đọc thêm: ${article.title}`);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    const formatViews = (views) => {
        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}k lượt xem`;
        }
        return `${views} lượt xem`;
    };

    if (loading) {
        return (
            <section className="news">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Tin tức & Kiến thức</div>
                        <h2 className="section-title">Cập nhật mới nhất</h2>
                    </div>
                    <div className="news-grid">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="news-card loading">
                                <div className="news-image skeleton"></div>
                                <div className="news-content">
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="news" id="news">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Tin tức & Kiến thức</div>
                    <h2 className="section-title">Cập nhật mới nhất</h2>
                    <p className="section-subtitle">
                        Khám phá các xu hướng mới và kiến thức hữu ích
                        trong lĩnh vực kiến trúc xây dựng
                    </p>
                </div>

                <div className="news-grid">
                    {news.map((article) => (
                        <article key={article._id} className="news-card">
                            <div className="news-image">
                                <img
                                    src={article.featuredImage?.url || article.image}
                                    alt={article.featuredImage?.alt || article.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <span className="news-category">{article.category}</span>
                                    <span className="news-date">
                                        <i className="far fa-calendar" aria-hidden="true"></i>
                                        {formatDate(article.publishedAt || article.date)}
                                    </span>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt || article.content}</p>
                                <div className="news-footer">
                                    <span className="news-views">
                                        <i className="far fa-eye" aria-hidden="true"></i>
                                        {formatViews(article.views)}
                                    </span>
                                    <button
                                        className="feature-link"
                                        onClick={() => handleNewsClick(article)}
                                        aria-label={`Đọc thêm bài viết ${article.title}`}
                                    >
                                        Đọc thêm
                                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="news-cta">
                    <button
                        className="btn-secondary"
                        onClick={() => alert('Chuyển đến trang tin tức')}
                    >
                        Xem tất cả tin tức
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;