// src/routes/ThiCongHangMucRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import main page
import ThiCongHangMucPage from '../pages/thi-cong/thi-cong-hang-muc';

// Import all sub-pages
import TranVachThachCaoPage from '../pages/thi-cong/categories/tran-vach-thach-cao';
import SanGoPage from '../pages/thi-cong/categories/san-go';
import DaOpLatPage from '../pages/thi-cong/categories/da-op-lat';

// Import remaining pages (placeholders for now - to be created)
const NhomKinhPage = React.lazy(() => import('../pages/thi-cong/categories/nhom-kinh'));
const CuaCompositePage = React.lazy(() => import('../pages/thi-cong/categories/cua-composite'));
const DienMatTroiPage = React.lazy(() => import('../pages/thi-cong/categories/dien-mat-troi'));
const DienThongMinhPage = React.lazy(() => import('../pages/thi-cong/categories/dien-thong-minh'));
const HoKoiSanVuonPage = React.lazy(() => import('../pages/thi-cong/categories/ho-koi-san-vuon'));
const RemCuaPage = React.lazy(() => import('../pages/thi-cong/categories/rem-cua'));
const ChongThamPage = React.lazy(() => import('../pages/thi-cong/categories/chong-tham'));
const PhaoChiPage = React.lazy(() => import('../pages/thi-cong/categories/phao-chi'));

const ThiCongHangMucRoutes = () => {
    return (
        <Routes>
            {/* Main category page */}
            <Route path="/thi-cong-hang-muc" element={<ThiCongHangMucPage />} />

            {/* Sub-category pages */}
            <Route path="/tran-vach-thach-cao" element={<TranVachThachCaoPage />} />
            <Route path="/san-go" element={<SanGoPage />} />
            <Route path="/da-op-lat" element={<DaOpLatPage />} />

            {/* Lazy loaded pages */}
            <Route path="/nhom-kinh" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <NhomKinhPage />
                </React.Suspense>
            } />
            <Route path="/cua-composite" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <CuaCompositePage />
                </React.Suspense>
            } />
            <Route path="/dien-mat-troi" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <DienMatTroiPage />
                </React.Suspense>
            } />
            <Route path="/dien-thong-minh" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <DienThongMinhPage />
                </React.Suspense>
            } />
            <Route path="/ho-koi-san-vuon" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <HoKoiSanVuonPage />
                </React.Suspense>
            } />
            <Route path="/rem-cua" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <RemCuaPage />
                </React.Suspense>
            } />
            <Route path="/chong-tham" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <ChongThamPage />
                </React.Suspense>
            } />
            <Route path="/phao-chi" element={
                <React.Suspense fallback={<div>Đang tải...</div>}>
                    <PhaoChiPage />
                </React.Suspense>
            } />
        </Routes>
    );
};

export default ThiCongHangMucRoutes;

// src/data/thiCongHangMucData.js
// Centralized data for all construction category pages

export const hangMucCategories = [
    {
        id: 'tran-vach-thach-cao',
        title: 'Thi công trần & vách thạch cao',
        shortTitle: 'Trần vách thạch cao',
        description: 'Thi công nhanh, cách âm, chống nóng, hoàn thiện thẩm mỹ',
        icon: 'fa-layer-group',
        color: '#667eea',
        path: '/thi-cong/tran-vach-thach-cao',
        duration: '3-7 ngày',
        warranty: '12-24 tháng',
        priceRange: '150.000-300.000đ/m²',
        features: ['Cách âm & cách nhiệt', 'Tạo hình linh hoạt', 'Bề mặt mịn dễ sơn'],
        applications: ['Căn hộ', 'Văn phòng', 'Nhà hàng', 'Khách sạn'],
        seoKeywords: 'thi công trần thạch cao, vách thạch cao, trần thạch cao giá rẻ'
    },
    {
        id: 'san-go',
        title: 'Thi công sàn gỗ',
        shortTitle: 'Sàn gỗ',
        description: 'Sàn gỗ công nghiệp & tự nhiên, lắp đặt chuẩn kỹ thuật',
        icon: 'fa-tree',
        color: '#10b981',
        path: '/thi-cong/san-go',
        duration: '2-5 ngày',
        warranty: '12-24 tháng',
        priceRange: '300.000-2.500.000đ/m²',
        features: ['Chống ẩm tối ưu', 'Lắp đặt nhanh', 'Ấm cúng sang trọng'],
        applications: ['Phòng khách', 'Phòng ngủ', 'Văn phòng', 'Showroom'],
        seoKeywords: 'lắp sàn gỗ, sàn gỗ công nghiệp, sàn gỗ tự nhiên'
    },
    {
        id: 'da-op-lat',
        title: 'Thi công đá ốp lát',
        shortTitle: 'Đá ốp lát',
        description: 'Granite, marble, đá nhân tạo - cắt chuẩn, mạch kín',
        icon: 'fa-gem',
        color: '#f59e0b',
        path: '/thi-cong/da-op-lat',
        duration: '5-10 ngày',
        warranty: '12-24 tháng',
        priceRange: '400.000-2.500.000đ/m²',
        features: ['Nhiều chất liệu', 'Cắt chuẩn mạch kín', 'Chống thấm'],
        applications: ['Mặt tiền', 'Cầu thang', 'Sàn', 'Mặt bếp'],
        seoKeywords: 'ốp lát đá granite, đá marble, thi công đá tự nhiên'
    },
    {
        id: 'nhom-kinh',
        title: 'Thi công nhôm kính',
        shortTitle: 'Nhôm kính',
        description: 'Cửa, vách, mặt dựng - thẩm mỹ, chịu lực, cách âm',
        icon: 'fa-window-maximize',
        color: '#8b5cf6',
        path: '/thi-cong/nhom-kinh',
        duration: '5-15 ngày',
        warranty: '12-36 tháng',
        priceRange: '800.000-2.000.000đ/m²',
        features: ['Nhẹ bền chống ăn mòn', 'Cách âm hiệu quả', 'Thiết kế hiện đại'],
        applications: ['Cửa sổ', 'Cửa chính', 'Vách ngăn', 'Mặt dựng'],
        seoKeywords: 'cửa nhôm kính, vách nhôm kính, mặt dựng nhôm kính'
    },
    {
        id: 'cua-composite',
        title: 'Thi công cửa composite',
        shortTitle: 'Cửa composite',
        description: 'Chống ẩm, chống mối mọt, bền bỉ cho mọi không gian',
        icon: 'fa-door-open',
        color: '#ef4444',
        path: '/thi-cong/cua-composite',
        duration: '1-3 ngày',
        warranty: '12-24 tháng',
        priceRange: '1.500.000-4.000.000đ/cánh',
        features: ['Chịu nước tốt', 'Không mối mọt', 'Giá ổn định'],
        applications: ['Cửa phòng tắm', 'Cửa phòng ngủ', 'Cửa toilet', 'Cửa bếp'],
        seoKeywords: 'cửa composite, cửa nhựa gỗ, cửa chống nước'
    },
    {
        id: 'dien-mat-troi',
        title: 'Hệ thống điện mặt trời',
        shortTitle: 'Điện mặt trời',
        description: 'Solar PV - tối ưu tiết kiệm điện, đầu tư dài hạn',
        icon: 'fa-solar-panel',
        color: '#06b6d4',
        path: '/thi-cong/dien-mat-troi',
        duration: '7-15 ngày',
        warranty: '10-25 năm',
        priceRange: '15.000-25.000đ/W',
        features: ['Tiết kiệm điện lâu dài', 'Thân thiện môi trường', 'Hoàn vốn 4-8 năm'],
        applications: ['Nhà ở', 'Công ty', 'Nhà máy', 'Trường học'],
        seoKeywords: 'điện mặt trời, pin năng lượng mặt trời, hệ thống solar'
    },
    {
        id: 'dien-thong-minh',
        title: 'Hệ thống điện thông minh',
        shortTitle: 'Smarthome',
        description: 'Điều khiển chiếu sáng, điều hòa bằng smartphone',
        icon: 'fa-home',
        color: '#84cc16',
        path: '/thi-cong/dien-thong-minh',
        duration: '7-15 ngày',
        warranty: '12-24 tháng',
        priceRange: '5.000.000-50.000.000đ/căn',
        features: ['Điều khiển từ xa', 'Tiết kiệm năng lượng', 'Tích hợp IoT'],
        applications: ['Căn hộ cao cấp', 'Biệt thự', 'Văn phòng', 'Khách sạn'],
        seoKeywords: 'nhà thông minh, smarthome, điện thông minh'
    },
    {
        id: 'ho-koi-san-vuon',
        title: 'Thi công hồ koi sân vườn',
        shortTitle: 'Hồ koi',
        description: 'Thiết kế phong thủy, hệ lọc chuẩn, môi trường sinh thái',
        icon: 'fa-fish',
        color: '#0ea5e9',
        path: '/thi-cong/ho-koi-san-vuon',
        duration: '10-20 ngày',
        warranty: '12 tháng',
        priceRange: '5.000.000-50.000.000đ/hồ',
        features: ['Hệ lọc chuyên nghiệp', 'Thiết kế phong thủy', 'Cảnh quan sân vườn'],
        applications: ['Sân vườn', 'Biệt thự', 'Nhà hàng', 'Resort'],
        seoKeywords: 'hồ cá koi, hồ koi sân vườn, thiết kế hồ koi'
    },
    {
        id: 'rem-cua',
        title: 'Thi công rèm cửa',
        shortTitle: 'Rèm cửa',
        description: 'Rèm vải, cuốn, tự động - chống nắng & riêng tư',
        icon: 'fa-window-restore',
        color: '#f97316',
        path: '/thi-cong/rem-cua',
        duration: '1-2 ngày',
        warranty: '6-24 tháng',
        priceRange: '200.000-2.000.000đ/m²',
        features: ['Đa dạng chất liệu', 'Tự động/thủ công', 'Chống nắng hiệu quả'],
        applications: ['Phòng khách', 'Phòng ngủ', 'Văn phòng', 'Khách sạn'],
        seoKeywords: 'rèm cửa, rèm cuốn, rèm tự động'
    },
    {
        id: 'chong-tham',
        title: 'Thi công chống thấm',
        shortTitle: 'Chống thấm',
        description: 'Xử lý thấm tường, sàn, mái - bảo vệ công trình',
        icon: 'fa-shield-alt',
        color: '#6366f1',
        path: '/thi-cong/chong-tham',
        duration: '3-7 ngày',
        warranty: '12-36 tháng',
        priceRange: '100.000-500.000đ/m²',
        features: ['Xử lý triệt để', 'Vật liệu chuyên dụng', 'Bảo vệ công trình'],
        applications: ['Tường', 'Sàn', 'Mái', 'Nhà vệ sinh'],
        seoKeywords: 'chống thấm tường, chống thấm sàn, xử lý thấm'
    },
    {
        id: 'phao-chi',
        title: 'Thi công phào chỉ',
        shortTitle: 'Phào chỉ',
        description: 'PU, PS, thạch cao - tạo điểm nhấn sang trọng',
        icon: 'fa-palette',
        color: '#ec4899',
        path: '/thi-cong/phao-chi',
        duration: '2-7 ngày',
        warranty: '12-24 tháng',
        priceRange: '50.000-300.000đ/m',
        features: ['PU/PS chống ẩm', 'Thạch cao dễ tạo hình', 'Trang trí đa dạng'],
        applications: ['Trần', 'Tường', 'Cửa', 'Nội thất'],
        seoKeywords: 'phào chỉ PU, phào chỉ thạch cao, trang trí nội thất'
    }
];

// Common construction process template
export const commonConstructionProcess = [
    {
        step: 1,
        title: 'Khảo sát & tư vấn',
        description: 'Đo đạc, lắng nghe nhu cầu khách hàng',
        icon: 'fa-search'
    },
    {
        step: 2,
        title: 'Lên phương án & báo giá',
        description: 'Đề xuất giải pháp phù hợp, báo giá chi tiết',
        icon: 'fa-calculator'
    },
    {
        step: 3,
        title: 'Ký hợp đồng',
        description: 'Cam kết tiến độ, chi phí minh bạch',
        icon: 'fa-file-contract'
    },
    {
        step: 4,
        title: 'Thi công',
        description: 'Triển khai bởi đội ngũ thợ chuyên nghiệp',
        icon: 'fa-hard-hat'
    },
    {
        step: 5,
        title: 'Nghiệm thu & bàn giao',
        description: 'Kiểm tra chất lượng trước khi bàn giao',
        icon: 'fa-clipboard-check'
    },
    {
        step: 6,
        title: 'Bảo hành - bảo trì',
        description: 'Hỗ trợ khách hàng khi phát sinh nhu cầu',
        icon: 'fa-tools'
    }
];

// Company advantages for construction services
export const constructionAdvantages = [
    {
        title: 'Kinh nghiệm nhiều năm',
        description: 'Trong lĩnh vực thi công kiến trúc & nội thất',
        icon: 'fa-medal'
    },
    {
        title: 'Đội ngũ chuyên nghiệp',
        description: 'Thợ tay nghề cao, giám sát kỹ thuật chuyên môn',
        icon: 'fa-users'
    },
    {
        title: 'Vật liệu chính hãng',
        description: 'Nguồn vật liệu chất lượng, giá tốt',
        icon: 'fa-certificate'
    },
    {
        title: 'Chi phí minh bạch',
        description: 'Không phát sinh ngoài hợp đồng',
        icon: 'fa-calculator'
    },
    {
        title: 'Dịch vụ tận tâm',
        description: 'Đồng hành cùng khách hàng từ thi công đến bảo trì',
        icon: 'fa-handshake'
    }
];

// SEO metadata for all pages
export const seoMetadata = {
    'thi-cong-hang-muc': {
        title: 'Thi Công Trọn Gói Hạng Mục - 11 Dịch Vụ Chuyên Nghiệp | LinHome',
        description: 'Thi công trọn gói 11 hạng mục: thạch cao, sàn gỗ, đá ốp lát, nhôm kính... Báo giá minh bạch, bảo hành lâu dài. Liên hệ 0941 090 333',
        keywords: 'thi công hạng mục, thi công trọn gói, LinHome, thạch cao, sàn gỗ'
    },
    'tran-vach-thach-cao': {
        title: 'Thi Công Trần Vách Thạch Cao Chuyên Nghiệp | Báo Giá Tốt 2024',
        description: 'Thi công trần thạch cao, vách thạch cao nhanh chóng. Cách âm, chống nóng. Bảo hành 12-24 tháng. Gọi 0941 090 333 tư vấn miễn phí',
        keywords: 'trần thạch cao, vách thạch cao, thi công thạch cao giá rẻ'
    }
    // Add more SEO data for other pages...
};
