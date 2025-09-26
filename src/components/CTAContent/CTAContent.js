// src/components/CTAContent/CTAContent.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './CTAContent.css';

const CTAContent = () => {
    const location = useLocation();

    // Define CTA content for different routes with specific mapping
    const ctaData = {
        // TRANG BAO GIA - Dẫn đến bài viết
        '/bao-gia/bao-gia-thiet-ke-thi-cong-nha': {
            title: 'Tìm hiểu chi tiết về dịch vụ của chúng tôi',
            subtitle: 'Xem các bài viết chuyên sâu về thiết kế và thi công để có cái nhìn tổng quan',
            primaryButton: {
                text: 'Xem dịch vụ thiết kế',
                link: '/thiet-ke/thiet-ke-kien-truc'
            },
            secondaryButton: {
                text: 'Xem dịch vụ thi công',
                link: '/thi-cong/thi-cong-tron-goi-kien-truc'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc': {
            title: 'Khám phá quy trình thiết kế chuyên nghiệp',
            subtitle: 'Tìm hiểu chi tiết về quy trình và phương pháp thiết kế của chúng tôi',
            primaryButton: {
                text: 'Xem quy trình thiết kế',
                link: '/thiet-ke/quy-trinh-thiet-ke'
            },
            secondaryButton: {
                text: 'Xem thiết kế nội thất',
                link: '/thiet-ke/thiet-ke-noi-that'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi': {
            title: 'Tìm hiểu về dịch vụ thi công của chúng tôi',
            subtitle: 'Khám phá quy trình và các hạng mục thi công chuyên nghiệp',
            primaryButton: {
                text: 'Xem quy trình thi công',
                link: '/thi-cong/quy-trinh-thi-cong'
            },
            secondaryButton: {
                text: 'Xem thi công hạng mục',
                link: '/thi-cong/thi-cong-hang-muc'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho': {
            title: 'Tìm hiểu về thi công phần thô',
            subtitle: 'Xem chi tiết quy trình và kỹ thuật thi công phần thô chuyên nghiệp',
            primaryButton: {
                text: 'Xem quy trình thi công',
                link: '/thi-cong/quy-trinh-thi-cong'
            },
            secondaryButton: {
                text: 'Xem hạng mục thi công',
                link: '/thi-cong/thi-cong-hang-muc'
            }
        },

        '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien': {
            title: 'Khám phá dịch vụ hoàn thiện',
            subtitle: 'Tìm hiểu về các hạng mục hoàn thiện cao cấp và quy trình thi công',
            primaryButton: {
                text: 'Xem hạng mục hoàn thiện',
                link: '/thi-cong/thi-cong-hang-muc'
            },
            secondaryButton: {
                text: 'Xem thi công trọn gói',
                link: '/thi-cong/thi-cong-tron-goi-kien-truc'
            }
        },

        // TRANG BAI VIET - Dẫn đến báo giá
        '/thiet-ke/thiet-ke-kien-truc': {
            title: 'Sẵn sàng nhận báo giá thiết kế?',
            subtitle: 'Liên hệ ngay để nhận báo giá chi tiết và tư vấn thiết kế miễn phí',
            primaryButton: {
                text: 'Xem báo giá thiết kế',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
            },
            secondaryButton: {
                text: 'Xem báo giá tổng thể',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        '/thiet-ke/thiet-ke-noi-that': {
            title: 'Cần báo giá thiết kế nội thất?',
            subtitle: 'Nhận tư vấn và báo giá thiết kế nội thất từ đội ngũ chuyên gia',
            primaryButton: {
                text: 'Xem báo giá thiết kế',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
            },
            secondaryButton: {
                text: 'Xem thi công nội thất',
                link: '/thi-cong/thi-cong-tron-goi-noi-that'
            }
        },

        '/thiet-ke/quy-trinh-thiet-ke': {
            title: 'Bắt đầu dự án thiết kế ngay',
            subtitle: 'Áp dụng quy trình thiết kế chuyên nghiệp cho dự án của bạn',
            primaryButton: {
                text: 'Nhận báo giá thiết kế',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
            },
            secondaryButton: {
                text: 'Liên hệ tư vấn',
                link: '/lien-he'
            }
        },

        // THI CONG PAGES
        '/thi-cong/thi-cong-tron-goi-kien-truc': {
            title: 'Nhận báo giá thi công ngay',
            subtitle: 'Liên hệ để nhận báo giá chi tiết cho dự án thi công trọn gói',
            primaryButton: {
                text: 'Xem báo giá thi công',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
            },
            secondaryButton: {
                text: 'Xem báo giá tổng thể',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            }
        },

        '/thi-cong/thi-cong-tron-goi-noi-that': {
            title: 'Báo giá thi công nội thất',
            subtitle: 'Nhận báo giá chi tiết cho dự án thi công nội thất của bạn',
            primaryButton: {
                text: 'Xem báo giá thi công',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
            },
            secondaryButton: {
                text: 'Xem hạng mục thi công',
                link: '/thi-cong/thi-cong-hang-muc'
            }
        },

        '/thi-cong/quy-trinh-thi-cong': {
            title: 'Áp dụng quy trình cho dự án',
            subtitle: 'Sử dụng quy trình thi công chuẩn cho dự án xây dựng của bạn',
            primaryButton: {
                text: 'Nhận báo giá thi công',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
            },
            secondaryButton: {
                text: 'Tư vấn miễn phí',
                link: '/lien-he'
            }
        },

        '/thi-cong/thi-cong-hang-muc': {
            title: 'Báo giá theo hạng mục',
            subtitle: 'Nhận báo giá chi tiết cho từng hạng mục thi công',
            primaryButton: {
                text: 'Xem báo giá chi tiết',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            },
            secondaryButton: {
                text: 'Xem thi công trọn gói',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
            }
        },

        '/thi-cong/sua-chua-cai-tao': {
            title: 'Báo giá sửa chữa cải tạo',
            subtitle: 'Nhận tư vấn và báo giá cho dự án sửa chữa cải tạo',
            primaryButton: {
                text: 'Xem báo giá cải tạo',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            },
            secondaryButton: {
                text: 'Tư vấn khảo sát',
                link: '/lien-he'
            }
        },

        // HANG MUC CAI TAO
        '/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh': {
            title: 'Báo giá cải tạo bếp - WC',
            subtitle: 'Nhận báo giá chi tiết cho dự án cải tạo bếp và nhà vệ sinh',
            primaryButton: {
                text: 'Xem báo giá cải tạo',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            },
            secondaryButton: {
                text: 'Khảo sát miễn phí',
                link: '/lien-he'
            }
        },

        // HANG MUC THI CONG
        '/thi-cong/hang-muc-thi-cong/chong-tham': {
            title: 'Báo giá chống thấm',
            subtitle: 'Nhận báo giá dịch vụ chống thấm chuyên nghiệp',
            primaryButton: {
                text: 'Xem báo giá chi tiết',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            },
            secondaryButton: {
                text: 'Tư vấn kỹ thuật',
                link: '/lien-he'
            }
        },

        // DEFAULT FALLBACK
        'default': {
            title: 'Bắt đầu dự án của bạn ngay hôm nay',
            subtitle: 'Từ thiết kế đến hoàn thiện - Chúng tôi đồng hành cùng bạn tạo nên ngôi nhà mơ ước',
            primaryButton: {
                text: 'Nhận báo giá miễn phí',
                link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
            },
            secondaryButton: {
                text: 'Tư vấn trực tiếp',
                link: '/lien-he'
            }
        }
    };

    // Get current route content with intelligent fallback logic
    const getCurrentCTA = () => {
        const currentPath = location.pathname;

        // Exact match first
        if (ctaData[currentPath]) {
            return ctaData[currentPath];
        }

        // Smart fallback based on path patterns
        if (currentPath.includes('/hang-muc-cai-tao/')) {
            return {
                title: 'Báo giá cải tạo chuyên nghiệp',
                subtitle: 'Nhận tư vấn và báo giá cho dự án cải tạo của bạn',
                primaryButton: {
                    text: 'Xem báo giá cải tạo',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
                },
                secondaryButton: {
                    text: 'Khảo sát miễn phí',
                    link: '/lien-he'
                }
            };
        }

        if (currentPath.includes('/hang-muc-thi-cong/')) {
            return {
                title: 'Báo giá hạng mục thi công',
                subtitle: 'Nhận báo giá chi tiết cho hạng mục thi công chuyên biệt',
                primaryButton: {
                    text: 'Xem báo giá chi tiết',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
                },
                secondaryButton: {
                    text: 'Tư vấn kỹ thuật',
                    link: '/lien-he'
                }
            };
        }

        // Category-based fallback
        if (currentPath.startsWith('/bao-gia/')) {
            return {
                title: 'Tìm hiểu chi tiết về dịch vụ',
                subtitle: 'Xem thông tin chi tiết về các dịch vụ thiết kế và thi công',
                primaryButton: {
                    text: 'Xem dịch vụ thiết kế',
                    link: '/thiet-ke/thiet-ke-kien-truc'
                },
                secondaryButton: {
                    text: 'Xem dịch vụ thi công',
                    link: '/thi-cong/thi-cong-tron-goi-kien-truc'
                }
            };
        } else if (currentPath.startsWith('/thiet-ke/')) {
            return {
                title: 'Nhận báo giá thiết kế ngay',
                subtitle: 'Liên hệ để nhận báo giá chi tiết và tư vấn thiết kế miễn phí',
                primaryButton: {
                    text: 'Xem báo giá thiết kế',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc'
                },
                secondaryButton: {
                    text: 'Xem báo giá tổng thể',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
                }
            };
        } else if (currentPath.startsWith('/thi-cong/')) {
            return {
                title: 'Nhận báo giá thi công ngay',
                subtitle: 'Liên hệ để nhận báo giá chi tiết cho dự án thi công',
                primaryButton: {
                    text: 'Xem báo giá thi công',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi'
                },
                secondaryButton: {
                    text: 'Xem báo giá tổng thể',
                    link: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha'
                }
            };
        }

        // Final fallback
        return ctaData['default'];
    };

    const currentCTA = getCurrentCTA();

    // Handle button clicks with navigation
    const handleButtonClick = (link) => {
        if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:')) {
            window.open(link, '_blank');
        } else {
            // Use React Router navigation or window.location
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
                        aria-label={currentCTA.primaryButton.text}
                    >
                        {currentCTA.primaryButton.text}
                    </button>

                    <button
                        className="cta-btn cta-btn-secondary"
                        onClick={() => handleButtonClick(currentCTA.secondaryButton.link)}
                        aria-label={currentCTA.secondaryButton.text}
                    >
                        {currentCTA.secondaryButton.text}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTAContent;