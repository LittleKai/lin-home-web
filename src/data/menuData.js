// src/data/menuData.js - FINAL VERSION với đầy đủ icon và cấu trúc hoàn chỉnh
export const menuData = {
    'Thiết kế': [
        {
            title: 'Quy trình thiết kế',
            href: '/thiet-ke/quy-trinh-thiet-ke',
            description: 'Quy trình thiết kế chuyên nghiệp từ ý tưởng đến hoàn thiện',
            icon: 'fas fa-route'
        },
        {
            title: 'Thiết kế kiến trúc',
            href: '/thiet-ke/thiet-ke-kien-truc',
            description: 'Thiết kế kiến trúc hiện đại, độc đáo và phù hợp địa hình',
            icon: 'fas fa-building'
        },
        {
            title: 'Thiết kế nội thất',
            href: '/thiet-ke/thiet-ke-noi-that',
            description: 'Thiết kế nội thất sang trọng, tiện nghi và tối ưu không gian',
            icon: 'fas fa-couch'
        }
    ],
    'Thi công': [
        {
            title: 'Quy trình thi công',
            href: '/thi-cong/quy-trinh-thi-cong',
            description: 'Quy trình thi công khoa học, đảm bảo chất lượng và tiến độ',
            icon: 'fas fa-clipboard-list'
        },
        {
            title: 'Thi công trọn gói kiến trúc',
            href: '/thi-cong/thi-cong-tron-goi-kien-truc',
            description: 'Thi công trọn gói từ móng đến hoàn thiện',
            icon: 'fas fa-hard-hat'
        },
        {
            title: 'Thi công trọn gói nội thất',
            href: '/thi-cong/thi-cong-tron-goi-noi-that',
            description: 'Thi công nội thất hoàn chỉnh theo thiết kế',
            icon: 'fas fa-paint-brush'
        },
        {
            title: 'Thi công hạng mục',
            href: '/thi-cong/thi-cong-hang-muc',
            description: 'Thi công theo từng hạng mục cụ thể',
            icon: 'fas fa-tools',
            hasSubmenu: true,
            submenu: [
                {
                    title: 'Trần & vách thạch cao',
                    href: '/thi-cong/tran-vach-thach-cao',
                    description: 'Thi công trần thạch cao cách âm, chống nóng',
                    icon: 'fas fa-layer-group'
                },
                {
                    title: 'Sàn gỗ công nghiệp',
                    href: '/thi-cong/san-go',
                    description: 'Lắp đặt sàn gỗ chất lượng cao',
                    icon: 'fas fa-tree'
                },
                {
                    title: 'Đá ốp lát',
                    href: '/thi-cong/da-op-lat',
                    description: 'Ốp lát đá tự nhiên và nhân tạo',
                    icon: 'fas fa-th-large'
                },
                {
                    title: 'Cửa composite',
                    href: '/thi-cong/cua-composite',
                    description: 'Lắp đặt cửa composite chống nước',
                    icon: 'fas fa-door-open'
                },
                {
                    title: 'Rèm cửa',
                    href: '/thi-cong/rem-cua',
                    description: 'Rèm cửa cao cấp, hiện đại',
                    icon: 'fas fa-th'
                },
                {
                    title: 'Chống thấm',
                    href: '/thi-cong/chong-tham',
                    description: 'Xử lý chống thấm chuyên nghiệp',
                    icon: 'fas fa-shield-alt'
                },
                {
                    title: 'Hồ koi sân vườn',
                    href: '/thi-cong/ho-koi-san-vuon',
                    description: 'Thi công hồ koi và sân vườn',
                    icon: 'fas fa-fish'
                },
                {
                    title: 'Nhôm kính',
                    href: '/thi-cong/nhom-kinh',
                    description: 'Lắp đặt nhôm kính cao cấp',
                    icon: 'fas fa-window-maximize'
                },
                {
                    title: 'Điện thông minh',
                    href: '/thi-cong/dien-thong-minh',
                    description: 'Hệ thống điện thông minh',
                    icon: 'fas fa-home'
                },
                {
                    title: 'Phào chỉ',
                    href: '/thi-cong/phao-chi',
                    description: 'Lắp đặt phào chỉ trang trí',
                    icon: 'fas fa-border-style'
                },
                {
                    title: 'Điện mặt trời',
                    href: '/thi-cong/dien-mat-troi',
                    description: 'Hệ thống điện năng lượng mặt trời',
                    icon: 'fas fa-solar-panel'
                }
            ]
        },
        {
            title: 'Thi công sửa chữa cải tạo',
            href: '/thi-cong/sua-chua-cai-tao',
            description: 'Sửa chữa, cải tạo, nâng cấp công trình',
            icon: 'fas fa-wrench',
            hasSubmenu: true,
            submenu: [
                {
                    title: 'Thi Công Sửa Chữa Cải Tạo Nhà Ở',
                    href: '/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o',
                    description: 'Quy Trình, Lỗi Thường Gặp & Giải Pháp An Toàn',
                    icon: 'fas fa-home'
                },
                {
                    title: 'Cải tạo nâng tầng và mở rộng nhà',
                    href: '/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong',
                    description: 'Giải pháp tối ưu không gian sống',
                    icon: 'fas fa-arrow-up'
                },
                {
                    title: 'Thi công cải tạo nhà phố',
                    href: '/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho',
                    description: 'Giải pháp tối ưu không gian sống hiện đại',
                    icon: 'fas fa-city'
                },
                {
                    title: 'Cải tạo bếp và nhà vệ sinh',
                    href: '/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh',
                    description: 'Giải pháp nâng cấp không gian sinh hoạt tiện nghi & an toàn',
                    icon: 'fas fa-bath'
                },
                {
                    title: 'Cải tạo phòng ngủ & phòng khách',
                    href: '/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach',
                    description: 'Tối ưu không gian sống, nâng tầm tiện nghi & thẩm mỹ',
                    icon: 'fas fa-bed'
                },
                {
                    title: 'Cải tạo mặt tiền & ngoại thất',
                    href: '/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that',
                    description: 'Giải pháp nâng tầm thẩm mỹ và giá trị ngôi nhà',
                    icon: 'fas fa-building'
                },
                {
                    title: 'Làm sao để tối ưu chi phí khi sửa chữa cải tạo nhà?',
                    href: '/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao',
                    description: 'Giải pháp tiết kiệm, hiệu quả cao',
                    icon: 'fas fa-dollar-sign'
                }
            ]
        }
    ],
    'Báo giá': [
        {
            title: 'Báo giá thiết kế, thi công nhà',
            href: '/bao-gia/bao-gia-thiet-ke-thi-cong-nha',
            description: 'Báo giá chi tiết cho dự án thiết kế và thi công nhà ở',
            icon: 'fas fa-home',
            hasSubmenu: true,
            submenu: [
                {
                    title: 'Báo giá thiết kế kiến trúc',
                    href: '/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc',
                    description: 'Chi phí thiết kế kiến trúc từ bản vẽ 2D đến 3D',
                    icon: 'fas fa-pencil-ruler'
                },
                {
                    title: 'Báo giá thi công phần thô',
                    href: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho',
                    description: 'Chi phí thi công móng, cột, dầm, tường, mái',
                    icon: 'fas fa-hard-hat'
                },
                {
                    title: 'Báo giá thi công hoàn thiện',
                    href: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien',
                    description: 'Chi phí ốp lát, sơn, trần, cửa, nội thất',
                    icon: 'fas fa-paint-brush'
                },
                {
                    title: 'Báo giá thi công trọn gói',
                    href: '/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi',
                    description: 'Chi phí trọn gói từ thiết kế đến hoàn thiện',
                    icon: 'fas fa-box'
                }
            ]
        },
        {
            title: 'Báo giá thi công hạng mục',
            description: 'Báo giá 11 hạng mục thi công chuyên biệt',
            href: '/bao-gia/bao-gia-thi-cong-hang-muc',
            icon: 'fas fa-list-alt',
            hasSubmenu: true,
            submenu: [
                {
                    title: 'Trần & Vách Thạch Cao',
                    description: 'Báo giá trần phẳng, giật cấp, vách ngăn thạch cao',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao',
                    icon: 'fas fa-layer-group'
                },
                {
                    title: 'Sàn Gỗ Công Nghiệp & Tự Nhiên',
                    description: 'Báo giá sàn gỗ HDF, SPC, tự nhiên cao cấp',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/san-go',
                    icon: 'fas fa-tree'
                },
                {
                    title: 'Ốp Lát Gạch & Đá Hoa Cương',
                    description: 'Báo giá gạch ceramic, porcelain, granite, marble',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da',
                    icon: 'fas fa-th-large'
                },
                {
                    title: 'Nhôm Kính',
                    description: 'Báo giá cửa nhôm kính, vách kính, mặt dựng',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh',
                    icon: 'fas fa-window-maximize'
                },
                {
                    title: 'Cửa Composite',
                    description: 'Báo giá cửa gỗ nhựa composite chống nước',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite',
                    icon: 'fas fa-door-open'
                },
                {
                    title: 'Điện Năng Lượng Mặt Trời',
                    description: 'Báo giá hệ thống điện mặt trời hòa lưới, độc lập',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi',
                    icon: 'fas fa-solar-panel'
                },
                {
                    title: 'Smarthome (Nhà Thông Minh)',
                    description: 'Báo giá hệ thống nhà thông minh IoT, automation',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/smarthome',
                    icon: 'fas fa-home'
                },
                {
                    title: 'Hồ Cá Koi & Tiểu Cảnh Sân Vườn',
                    description: 'Báo giá hồ cá koi, tiểu cảnh phong thủy',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh',
                    icon: 'fas fa-fish'
                },
                {
                    title: 'Rèm Cửa Cao Cấp',
                    description: 'Báo giá rèm vải, rèm cầu vồng, rèm tự động',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap',
                    icon: 'fas fa-th'
                },
                {
                    title: 'Chống Thấm',
                    description: 'Báo giá chống thấm tường, sàn, mái, tầng hầm',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham',
                    icon: 'fas fa-shield-alt'
                },
                {
                    title: 'Phào Chỉ PU - PS - Thạch Cao',
                    description: 'Báo giá phào chỉ trang trí PU, PS, thạch cao',
                    href: '/bao-gia/bao-gia-thi-cong-hang-muc/phao-chi-pu-ps-thach-cao',
                    icon: 'fas fa-border-style'
                }
            ]
        },
        {
            title: 'Báo giá sửa chữa cải tạo',
            path: '/bao-gia/bao-gia-sua-chua-cai-tao',
            icon: 'fas fa-tools',
            hasSubmenu: true,
            description: 'Báo giá chi tiết sửa chữa, cải tạo nhà trọn gói',
            submenu: [
                {
                    title: 'Cách ước tính chi phí',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/cach-uoc-tinh-chi-phi',
                    icon: 'fas fa-calculator',
                    description: 'Hướng dẫn tính toán chi phí sửa chữa chính xác'
                },
                {
                    title: 'Quy trình sửa chữa',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/quy-trinh-sua-chua',
                    icon: 'fas fa-clipboard-list',
                    description: 'Quy trình làm việc chuyên nghiệp từ A-Z'
                },
                {
                    title: 'Sửa chữa phòng khách',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-khach',
                    icon: 'fas fa-couch',
                    description: 'Chi phí cải tạo phòng khách hiện đại'
                },
                {
                    title: 'Cải tạo phòng bếp',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-bep',
                    icon: 'fas fa-utensils',
                    description: 'Nâng cấp không gian bếp tiện nghi'
                },
                {
                    title: 'Sửa chữa phòng ngủ',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-ngu',
                    icon: 'fas fa-bed',
                    description: 'Tạo không gian nghỉ ngơi lý tưởng'
                },
                {
                    title: 'Cải tạo phòng tắm',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-tam',
                    icon: 'fas fa-shower',
                    description: 'Nâng cấp phòng tắm hiện đại, sạch sẽ'
                },
                {
                    title: 'Chọn đơn vị uy tín',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/chon-don-vi-uy-tin',
                    icon: 'fas fa-award',
                    description: 'Tiêu chí lựa chọn nhà thầu chất lượng'
                },
                {
                    title: 'Xu hướng cải tạo 2025',
                    href: '/bao-gia/bao-gia-sua-chua-cai-tao/xu-huong-cai-tao',
                    icon: 'fas fa-lightbulb',
                    description: 'Xu hướng thiết kế hiện đại và bền vững'
                }
            ]
        },
        {
            title: 'Tư vấn báo giá',
            href: '/bao-gia/tu-van-bao-gia',
            description: 'Tư vấn miễn phí và báo giá chi tiết cho dự án',
            icon: 'fas fa-calculator'
        }
    ],
    'Ứng dụng': [
        {
            title: 'Ứng dụng xem Thước lỗ ban trực tuyến',
            href: '/ung-dung/thuoc-lo-ban',
            description: 'Công cụ xem thước lỗ ban online miễn phí',
            icon: 'fas fa-ruler'
        },
        {
            title: 'Ứng dụng xem Tuổi làm nhà',
            href: '/ung-dung/xem-tuoi-lam-nha',
            description: 'Xem tuổi hợp với việc xây dựng, sửa chữa nhà',
            icon: 'fas fa-calendar-alt'
        },
        {
            title: 'Ứng dụng xem Hướng nhà hợp tuổi',
            href: '/ung-dung/huong-nha-hop-tuoi',
            description: 'Tư vấn hướng nhà phù hợp theo tuổi gia chủ',
            icon: 'fas fa-compass'
        },
        {
            title: 'Ứng dụng xem Màu hợp tuổi',
            href: '/ung-dung/mau-hop-tuoi',
            description: 'Chọn màu sắc phù hợp theo phong thủy',
            icon: 'fas fa-palette'
        },
        {
            title: 'Ứng dụng Tính chi phí xây dựng',
            href: '/ung-dung/tinh-chi-phi-xay-dung',
            description: 'Tính toán chi phí xây dựng nhanh chóng, chính xác',
            icon: 'fas fa-calculator'
        }
    ],
    'Dự án': [
        {
            title: 'Dự án biệt thự',
            href: '/du-an/biet-thu',
            description: 'Các dự án biệt thự đã hoàn thành',
            icon: 'fas fa-home'
        },
        {
            title: 'Dự án nhà phố',
            href: '/du-an/nha-pho',
            description: 'Thiết kế và thi công nhà phố hiện đại',
            icon: 'fas fa-building'
        },
        {
            title: 'Dự án căn hộ',
            href: '/du-an/can-ho',
            description: 'Nội thất căn hộ chung cư cao cấp',
            icon: 'fas fa-city'
        },
        {
            title: 'Dự án thương mại',
            href: '/du-an/thuong-mai',
            description: 'Văn phòng, showroom, cửa hàng',
            icon: 'fas fa-store'
        }
    ]
};

// Section icons mapping for header main menu
export const sectionIcons = {
    'Thiết kế': 'fas fa-pencil-ruler',
    'Thi công': 'fas fa-hard-hat',
    'Báo giá': 'fas fa-calculator',
    'Ứng dụng': 'fas fa-mobile-alt',
    'Dự án': 'fas fa-folder-open'
};

// Contact information
export const contactInfo = {
    phone: '0941 090 333',
    email: 'info@linhome.vn',
    address: 'Số 463 An Dương Vương, Phường Phú Thượng, PHà Nội, Việt Nam',
    website: 'www.linhome.vn',
    workingHours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
    facebook: 'https://facebook.com/linhome.vn',
    zalo: 'https://zalo.me/0941090333'
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

// Export default for convenience
export default menuData;