// components/CTAContent/CTAContent.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './CTAContent.css';

const CTAContent = () => {
    const location = useLocation();

    // Define CTA content for different routes
    const ctaData = {
        // Trang chủ
        '/': {
            title: 'Bắt đầu dự án xây dựng của bạn ngay hôm nay',
            subtitle: 'Từ thiết kế đến hoàn thiện - Chúng tôi đồng hành cùng bạn tạo nên ngôi nhà mơ ước',
            primaryButton: {
                text: 'Nhận báo giá miễn phí',
                link: '/bao-gia/tu-van-bao-gia'
            },
            secondaryButton: {
                text: 'Xem dự án đã thực hiện',
                link: '/du-an'
            }
        },

        // THIẾT KẾ routes
        '/thiet-ke': {
            title: 'Sẵn sàng hiện thực ý tưởng thiết kế của bạn?',
            subtitle: 'Đội ngũ kiến trúc sư giàu kinh nghiệm sẽ biến ý tưởng thành bản vẽ hoàn chỉnh',
            primaryButton: {
                text: 'Tư vấn thiết kế',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
            },
            secondaryButton: {
                text: 'Xem báo giá thiết kế',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        // THI CÔNG routes
        '/thi-cong': {
            title: 'Cần thi công chuyên nghiệp cho công trình?',
            subtitle: 'Đội ngũ thợ lành nghề với kinh nghiệm 10+ năm cam kết chất lượng và tiến độ',
            primaryButton: {
                text: 'Nhận báo giá thi công',
                link: '/bao-gia/bao-gia-thi-cong-hang-muc'
            },
            secondaryButton: {
                text: 'Xem hạng mục thi công',
                link: '/thi-cong/hang-muc-thi-cong'
            }
        },

        // Hạng mục cải tạo
        '/thi-cong/hang-muc-cai-tao': {
            title: 'Cải tạo ngôi nhà theo phong cách riêng',
            subtitle: 'Chuyên gia cải tạo với giải pháp tối ưu chi phí và thời gian thi công',
            primaryButton: {
                text: 'Tư vấn cải tạo',
                link: '/bao-gia/tu-van-bao-gia'
            },
            secondaryButton: {
                text: 'Xem chi phí cải tạo',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        // Hạng mục thi công
        '/thi-cong/hang-muc-thi-cong': {
            title: 'Thi công hạng mục chuyên nghiệp',
            subtitle: 'Từ thạch cao, sàn gỗ đến điện thông minh - Chúng tôi có đội thợ chuyên môn cao',
            primaryButton: {
                text: 'Nhận báo giá chi tiết',
                link: '/bao-gia/bao-gia-thi-cong-hang-muc'
            },
            secondaryButton: {
                text: 'Liên hệ tư vấn',
                link: '/lien-he'
            }
        },

        // BÁO GIÁ routes
        '/bao-gia': {
            title: 'Nhận báo giá chi tiết và minh bạch',
            subtitle: 'Báo giá đầy đủ từ thiết kế, thi công đến hoàn thiện với cam kết không phát sinh',
            primaryButton: {
                text: 'Tư vấn báo giá miễn phí',
                link: '/bao-gia/tu-van-bao-gia'
            },
            secondaryButton: {
                text: 'Xem bảng giá chi tiết',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        // Báo giá thiết kế thi công
        '/bao-gia/bao-gia-thiet-ke-thi-cong': {
            title: 'Bắt đầu dự án với báo giá chính xác',
            subtitle: 'Nhận báo giá chi tiết và lên kế hoạch thi công phù hợp với ngân sách của bạn',
            primaryButton: {
                text: 'Liên hệ tư vấn ngay',
                link: '/lien-he'
            },
            secondaryButton: {
                text: 'Đăng ký khảo sát',
                link: '/bao-gia/tu-van-bao-gia'
            }
        },

        // Specific pricing pages
        '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc': {
            title: 'Sẵn sàng bắt đầu thiết kế kiến trúc?',
            subtitle: 'Liên hệ ngay để được tư vấn thiết kế và nhận báo giá ưu đãi',
            primaryButton: {
                text: 'Đặt lịch tư vấn',
                link: '/lien-he'
            },
            secondaryButton: {
                text: 'Xem các gói thi công',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho': {
            title: 'Cần thi công phần thô chất lượng?',
            subtitle: 'Đặt lịch khảo sát để nhận báo giá thi công phần thô chi tiết và chính xác nhất',
            primaryButton: {
                text: 'Đặt lịch khảo sát',
                link: '/bao-gia/tu-van-bao-gia'
            },
            secondaryButton: {
                text: 'Xem báo giá hoàn thiện',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien': {
            title: 'Hoàn thiện ngôi nhà hoàn hảo của bạn',
            subtitle: 'Từ ốp lát, sơn tường đến nội thất - Chúng tôi mang đến không gian sống lý tưởng',
            primaryButton: {
                text: 'Tư vấn hoàn thiện',
                link: '/lien-he'
            },
            secondaryButton: {
                text: 'Xem gói trọn gói',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi': {
            title: 'Gói trọn gói - Tiết kiệm thời gian & chi phí',
            subtitle: 'Từ thiết kế đến bàn giao - Một đơn vị thực hiện, đảm bảo chất lượng thống nhất',
            primaryButton: {
                text: 'Nhận tư vấn trọn gói',
                link: '/bao-gia/tu-van-bao-gia'
            },
            secondaryButton: {
                text: 'Hotline: 0941 090 333',
                link: 'tel:0941090333'
            }
        },

        // Default fallback for other routes
        'default': {
            title: 'Cần tư vấn về dự án xây dựng?',
            subtitle: 'Đội ngũ chuyên gia với hơn 10 năm kinh nghiệm sẵn sàng hỗ trợ bạn',
            primaryButton: {
                text: 'Liên hệ tư vấn',
                link: '/lien-he'
            },
            secondaryButton: {
                text: 'Xem báo giá',
                link: '/bao-gia'
            }
        }
    };

    // Get current route content with fallback logic
    const getCurrentCTA = () => {
        const currentPath = location.pathname;

        // Exact match first
        if (ctaData[currentPath]) {
            return ctaData[currentPath];
        }

        // Check parent routes for nested pages
        const pathSegments = currentPath.split('/').filter(segment => segment);

        // Build possible parent paths
        for (let i = pathSegments.length; i > 0; i--) {
            const parentPath = '/' + pathSegments.slice(0, i).join('/');
            if (ctaData[parentPath]) {
                return ctaData[parentPath];
            }
        }

        // Category-based fallback
        if (currentPath.includes('/thiet-ke')) {
            return ctaData['/thiet-ke'];
        } else if (currentPath.includes('/thi-cong')) {
            return ctaData['/thi-cong'];
        } else if (currentPath.includes('/bao-gia')) {
            return ctaData['/bao-gia'];
        }

        // Final fallback
        return ctaData['default'];
    };

    const currentCTA = getCurrentCTA();

    const handleButtonClick = (link) => {
        // Check if external link
        if (link.startsWith('http') || link.startsWith('tel:')) {
            window.open(link, '_blank');
        } else {
            window.location.href = link;
        }
    };

    return (
        <section className="cta-content">
            <div className="cta-container">
                <div className="cta-text">
                    <h2 className="cta-title">{currentCTA.title}</h2>
                    <p className="cta-subtitle">{currentCTA.subtitle}</p>
                </div>

                <div className="cta-buttons">
                    <button
                        className="cta-btn cta-btn-primary"
                        onClick={() => handleButtonClick(currentCTA.primaryButton.link)}
                    >
                        {currentCTA.primaryButton.text}
                    </button>

                    <button
                        className="cta-btn cta-btn-secondary"
                        onClick={() => handleButtonClick(currentCTA.secondaryButton.link)}
                    >
                        {currentCTA.secondaryButton.text}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTAContent;