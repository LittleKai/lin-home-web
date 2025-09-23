// src/data/menuData.js
// Menu data structure for navigation
export const menuData = {
    'Thiết kế': [
        {
            title: 'Quy trình thiết kế',
            href: '/thiet-ke/quy-trinh-thiet-ke',
            description: 'Quy trình thiết kế chuyên nghiệp từ ý tưởng đến hoàn thiện'
        },
        {
            title: 'Thiết kế kiến trúc',
            href: '/thiet-ke/thiet-ke-kien-truc',
            description: 'Thiết kế kiến trúc hiện đại, độc đáo và phù hợp địa hình'
        },
        {
            title: 'Thiết kế nội thất',
            href: '/thiet-ke/thiet-ke-noi-that',
            description: 'Thiết kế nội thất sang trọng, tiện nghi và tối ưu không gian'
        }
    ],
    'Thi công': [
        {
            title: 'Quy trình thi công',
            href: '/thi-cong/quy-trinh-thi-cong',
            description: 'Quy trình thi công khoa học, đảm bảo chất lượng và tiến độ'
        },
        {
            title: 'Thi công trọn gói kiến trúc',
            href: '/thi-cong/thi-cong-tron-goi-kien-truc',
            description: 'Thi công trọn gói từ móng đến hoàn thiện'
        },
        {
            title: 'Thi công trọn gói nội thất',
            href: '/thi-cong/thi-cong-tron-goi-noi-that',
            description: 'Thi công nội thất hoàn chỉnh theo thiết kế'
        },
        {
            title: 'Thi công hạng mục',
            href: '/thi-cong/thi-cong-hang-muc',
            description: 'Thi công theo từng hạng mục cụ thể - 11 dịch vụ chuyên nghiệp',
            hasSubmenu: true,
            submenu: [
                {
                    title: 'Trần & vách thạch cao',
                    href: '/thi-cong/tran-vach-thach-cao',
                    description: 'Thi công trần thạch cao cách âm, chống nóng'
                },
                {
                    title: 'Sàn gỗ',
                    href: '/thi-cong/san-go',
                    description: 'Lắp đặt sàn gỗ công nghiệp & tự nhiên'
                },
                {
                    title: 'Đá ốp lát',
                    href: '/thi-cong/da-op-lat',
                    description: 'Granite, marble, đá nhân tạo'
                },
                {
                    title: 'Nhôm kính',
                    href: '/thi-cong/nhom-kinh',
                    description: 'Cửa, vách, mặt dựng nhôm kính'
                },
                {
                    title: 'Cửa composite',
                    href: '/thi-cong/cua-composite',
                    description: 'Cửa chống ẩm, chống mối mọt'
                },
                {
                    title: 'Điện mặt trời',
                    href: '/thi-cong/dien-mat-troi',
                    description: 'Hệ thống Solar PV tiết kiệm điện'
                },
                {
                    title: 'Điện thông minh',
                    href: '/thi-cong/dien-thong-minh',
                    description: 'Smarthome - nhà thông minh'
                },
                {
                    title: 'Hồ koi sân vườn',
                    href: '/thi-cong/ho-koi-san-vuon',
                    description: 'Thiết kế & thi công hồ cá koi'
                },
                {
                    title: 'Rèm cửa',
                    href: '/thi-cong/rem-cua',
                    description: 'Rèm vải, cuốn, tự động chống nắng'
                },
                {
                    title: 'Chống thấm',
                    href: '/thi-cong/chong-tham',
                    description: 'Xử lý thấm tường, sàn, mái'
                },
                {
                    title: 'Phào chỉ',
                    href: '/thi-cong/phao-chi',
                    description: 'PU, PS, thạch cao trang trí'
                }
            ]
        },
        {
            title: 'Thi công sửa chữa cải tạo',
            href: '/thi-cong/thi-cong-sua-chua-cai-tao',
            description: 'Dịch vụ sửa chữa, cải tạo và nâng cấp công trình hiện có'
        }
    ],
    'Báo giá': [
        {
            title: 'Báo giá thiết kế, thi công nhà',
            href: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha',
            description: 'Báo giá chi tiết cho dự án thiết kế và thi công nhà ở'
        },
        {
            title: 'Báo giá thi công hạng mục',
            href: '/bao-gia/bao-gia-thi-cong-hang-muc',
            description: 'Báo giá từng hạng mục: thạch cao, sàn gỗ, đá ốp lát...'
        },
        {
            title: 'Tư vấn báo giá',
            href: '/bao-gia/tu-van-bao-gia',
            description: 'Tư vấn miễn phí và báo giá chi tiết cho dự án'
        }
    ],
    'Dự án': [
        {
            title: 'Dự án biệt thự',
            href: '/du-an/biet-thu',
            description: 'Các dự án biệt thự đã hoàn thành'
        },
        {
            title: 'Dự án nhà phố',
            href: '/du-an/nha-pho',
            description: 'Thiết kế và thi công nhà phố hiện đại'
        },
        {
            title: 'Dự án căn hộ',
            href: '/du-an/can-ho',
            description: 'Nội thất căn hộ chung cư cao cấp'
        },
        {
            title: 'Dự án thương mại',
            href: '/du-an/thuong-mai',
            description: 'Văn phòng, showroom, cửa hàng'
        }
    ]
};

// Contact information
export const contactInfo = {
    phone: '0941 090 333',
    email: 'info@linhome.vn',
    address: 'Hà Nội, Việt Nam',
    website: 'www.linhome.vn',
    workingHours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00'
};

// Services data for FeaturesSection component
export const servicesData = [
    {
        id: 'thiet-ke-kien-truc',
        icon: 'fa-drafting-compass',
        title: 'Thiết kế kiến trúc',
        description: 'Thiết kế các công trình từ nhà ở đến các dự án lớn với phong cách hiện đại và tiện nghi.',
        link: '/thiet-ke/thiet-ke-kien-truc',
        color: '#667eea'
    },
    {
        id: 'thi-cong-xay-dung',
        icon: 'fa-hard-hat',
        title: 'Thi công xây dựng',
        description: 'Thi công trọn gói từ móng đến hoàn thiện với đội ngũ thợ lành nghề và giám sát chặt chẽ.',
        link: '/thi-cong/thi-cong-tron-goi-kien-truc',
        color: '#10b981'
    },
    {
        id: 'thiet-ke-noi-that',
        icon: 'fa-home',
        title: 'Thiết kế nội thất',
        description: 'Tạo không gian sống hoàn hảo với các phong cách nội thất đa dạng và hiện đại.',
        link: '/thiet-ke/thiet-ke-noi-that',
        color: '#f59e0b'
    },
    {
        id: 'thi-cong-hang-muc',
        icon: 'fa-layer-group',
        title: 'Thi công hạng mục',
        description: 'Thi công chuyên sâu từng hạng mục: thạch cao, sàn gỗ, đá ốp lát, nhôm kính...',
        link: '/thi-cong/thi-cong-hang-muc',
        color: '#8b5cf6'
    }
];