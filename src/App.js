// src/App.js - Complete with all routes including pricing pages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import existing components
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import FloatButtons from './components/FloatButtons/FloatButtons';

// Import design pages
import QuyTrinhThietKePage from './pages/thiet-ke/quy-trinh-thiet-ke';
import ThietKeKienTrucPage from './pages/thiet-ke/thiet-ke-kien-truc';
import ThietKeNoiThatPage from './pages/thiet-ke/thiet-ke-noi-that';

// Import construction main pages
import QuyTrinhThiCongPage from './pages/thi-cong/quy-trinh-thi-cong';
import ThiCongTronGoiKienTrucPage from './pages/thi-cong/thi-cong-tron-goi-kien-truc';
import ThiCongTronGoiNoiThatPage from './pages/thi-cong/thi-cong-tron-goi-noi-that';
import ThiCongHangMucPage from './pages/thi-cong/thi-cong-hang-muc';

// Import thi công sửa chữa cải tạo - main page
import SuaChuaCaiTaoPage from './pages/thi-cong/sua-chua-cai-tao';

// Import 7 trang submenu cải tạo từ hang-muc-cai-tao
import ThiCongSuaChuaCaiTaoNhaOPage from './pages/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o';
import CaiTaoNangTangMoRongPage from './pages/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong';
import ThiCongCaiTaoNhaPhoPage from './pages/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho';
import CaiTaoBepNhaVeSinhPage from './pages/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh';
import CaiTaoPhongNguPhongKhachPage from './pages/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach';
import CaiTaoMatTienNgoaiThatPage from './pages/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that';
import ToiUuChiPhiCaiTaoPage from './pages/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao';

// Import 11 construction category pages
import TranVachThachCaoPage from './pages/thi-cong/hang-muc-thi-cong/tran-vach-thach-cao';
import SanGoPage from './pages/thi-cong/hang-muc-thi-cong/san-go';
import DaOpLatPage from './pages/thi-cong/hang-muc-thi-cong/da-op-lat';
import CuaCompositePage from './pages/thi-cong/hang-muc-thi-cong/cua-composite';
import RemCuaPage from './pages/thi-cong/hang-muc-thi-cong/rem-cua';
import ChongThamPage from './pages/thi-cong/hang-muc-thi-cong/chong-tham';
import HoKoiSanVuonPage from './pages/thi-cong/hang-muc-thi-cong/ho-koi-san-vuon';
import NhomKinhPage from './pages/thi-cong/hang-muc-thi-cong/nhom-kinh';
import DienThongMinhPage from './pages/thi-cong/hang-muc-thi-cong/dien-thong-minh';
import PhaoChiPage from './pages/thi-cong/hang-muc-thi-cong/phao-chi';
import DienMatTroiPage from './pages/thi-cong/hang-muc-thi-cong/dien-mat-troi';

// Import pricing pages - main page
import BaoGiaThietKeThiCongNhaPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong-nha';

// Import pricing detail pages
import ThietKeKienTrucPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc';
import ThiCongPhanThoPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho';
import ThiCongHoanThienPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien';
import ThiCongTronGoiPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi';

// Import Application Pages
import UngDungPage from './pages/ung-dung/UngDungPage';
import TinhChiPhiXayDungPage from './pages/ung-dung/TinhChiPhiXayDungPage';
import XemTuoiLamNhaPage from './pages/ung-dung/XemTuoiLamNhaPage';
import ThuocLoBanPage from './pages/ung-dung/ThuocLoBanPage';
import HuongNhaHopTuoiPage from './pages/ung-dung/HuongNhaHopTuoiPage';
import MauHopTuoiPage from './pages/ung-dung/MauHopTuoiPage';

// Import other pricing pages (tạm thời placeholder nếu chưa có)
const BaoGiaThiCongHangMucPage = () => (
    <div style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
            <h1>Báo giá thi công hạng mục</h1>
            <p>Trang đang được phát triển...</p>
        </div>
    </div>
);

const TuVanBaoGiaPage = () => (
    <div style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
            <h1>Tư vấn báo giá</h1>
            <p>Trang đang được phát triển...</p>
        </div>
    </div>
);

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Update active section based on current route
    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/' || path === '/home') {
            setActiveSection('home');
        } else if (path.startsWith('/thiet-ke')) {
            setActiveSection('thiết kế');
        } else if (path.startsWith('/thi-cong')) {
            setActiveSection('thi công');
        } else if (path.startsWith('/bao-gia')) {
            setActiveSection('báo giá');
        } else if (path.startsWith('/du-an')) {
            setActiveSection('dự án');
        } else if (path.startsWith('/tin-tuc')) {
            setActiveSection('tin tức');
        } else if (path.startsWith('/ung-dung')) {
            setActiveSection('ứng dụng');
        } else if (path === '/contact') {
            setActiveSection('contact');
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Header
                                    activeSection={activeSection}
                                    setActiveSection={setActiveSection}
                                />
                                <MainContent
                                    activeSection={activeSection}
                                    setActiveSection={setActiveSection}
                                />
                                <FloatButtons />
                            </>
                        }
                    />

                    {/* Design Routes */}
                    <Route path="/thiet-ke/quy-trinh-thiet-ke" element={<QuyTrinhThietKePage />} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc" element={<ThietKeKienTrucPage />} />
                    <Route path="/thiet-ke/thiet-ke-noi-that" element={<ThietKeNoiThatPage />} />

                    {/* Construction Main Routes */}
                    <Route path="/thi-cong/quy-trinh-thi-cong" element={<QuyTrinhThiCongPage />} />
                    <Route path="/thi-cong/thi-cong-tron-goi-kien-truc" element={<ThiCongTronGoiKienTrucPage />} />
                    <Route path="/thi-cong/thi-cong-tron-goi-noi-that" element={<ThiCongTronGoiNoiThatPage />} />
                    <Route path="/thi-cong/thi-cong-hang-muc" element={<ThiCongHangMucPage />} />

                    {/* Thi công sửa chữa cải tạo - Main page */}
                    <Route path="/thi-cong/sua-chua-cai-tao" element={<SuaChuaCaiTaoPage />} />

                    {/* 7 submenu routes cho cải tạo trong hang-muc-cai-tao */}
                    <Route path="/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o" element={<ThiCongSuaChuaCaiTaoNhaOPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong" element={<CaiTaoNangTangMoRongPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho" element={<ThiCongCaiTaoNhaPhoPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh" element={<CaiTaoBepNhaVeSinhPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach" element={<CaiTaoPhongNguPhongKhachPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that" element={<CaiTaoMatTienNgoaiThatPage />} />
                    <Route path="/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao" element={<ToiUuChiPhiCaiTaoPage />} />

                    {/* Construction Category Routes - 11 articles */}
                    <Route path="/thi-cong/tran-vach-thach-cao" element={<TranVachThachCaoPage />} />
                    <Route path="/thi-cong/san-go" element={<SanGoPage />} />
                    <Route path="/thi-cong/da-op-lat" element={<DaOpLatPage />} />
                    <Route path="/thi-cong/cua-composite" element={<CuaCompositePage />} />
                    <Route path="/thi-cong/rem-cua" element={<RemCuaPage />} />
                    <Route path="/thi-cong/chong-tham" element={<ChongThamPage />} />
                    <Route path="/thi-cong/ho-koi-san-vuon" element={<HoKoiSanVuonPage />} />
                    <Route path="/thi-cong/nhom-kinh" element={<NhomKinhPage />} />
                    <Route path="/thi-cong/dien-thong-minh" element={<DienThongMinhPage />} />
                    <Route path="/thi-cong/phao-chi" element={<PhaoChiPage />} />
                    <Route path="/thi-cong/dien-mat-troi" element={<DienMatTroiPage />} />

                    {/* Application Routes */}
                    <Route path="/ung-dung" element={<UngDungPage />} />
                    <Route path="/ung-dung/tinh-chi-phi-xay-dung" element={<TinhChiPhiXayDungPage />} />
                    <Route path="/ung-dung/xem-tuoi-lam-nha" element={<XemTuoiLamNhaPage />} />
                    <Route path="/ung-dung/thuoc-lo-ban" element={<ThuocLoBanPage />} />
                    <Route path="/ung-dung/huong-nha-hop-tuoi" element={<HuongNhaHopTuoiPage />} />
                    <Route path="/ung-dung/mau-hop-tuoi" element={<MauHopTuoiPage />} />

                    {/* Pricing Routes - Main Pages */}
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong-nha" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <BaoGiaThietKeThiCongNhaPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <BaoGiaThiCongHangMucPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/bao-gia/tu-van-bao-gia" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <TuVanBaoGiaPage />
                            <FloatButtons />
                        </>
                    } />

                    {/* Pricing Detail Routes - Submenu của "Báo giá thiết kế, thi công nhà" */}
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThietKeKienTrucPricingPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThiCongPhanThoPricingPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThiCongHoanThienPricingPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThiCongTronGoiPricingPage />
                            <FloatButtons />
                        </>
                    } />

                    {/* Contact Route */}
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Header
                                    activeSection={activeSection}
                                    setActiveSection={setActiveSection}
                                />
                                <div className="contact-page" style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
                                    <div className="container">
                                        <h1>Liên hệ</h1>
                                        <p>Trang liên hệ sẽ được phát triển sau.</p>
                                        <div style={{ marginTop: '30px' }}>
                                            <p><strong>Hotline:</strong> 0941 090 333</p>
                                            <p><strong>Email:</strong> info@linhome.vn</p>
                                            <p><strong>Website:</strong> www.linhome.vn</p>
                                        </div>
                                    </div>
                                </div>
                                <FloatButtons />
                            </>
                        }
                    />

                    {/* Placeholder routes for other sections */}
                    <Route path="/du-an/*" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <div style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
                                <div className="container">
                                    <h1>Dự án</h1>
                                    <p>Trang dự án đang được phát triển...</p>
                                </div>
                            </div>
                            <FloatButtons />
                        </>
                    } />

                    <Route path="/tin-tuc/*" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <div style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
                                <div className="container">
                                    <h1>Tin tức</h1>
                                    <p>Trang tin tức đang được phát triển...</p>
                                </div>
                            </div>
                            <FloatButtons />
                        </>
                    } />

                    {/* 404 Route - Default fallback */}
                    <Route path="*" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <div style={{ marginTop: '80px', padding: '40px 0', textAlign: 'center' }}>
                                <div className="container">
                                    <h1>404 - Không tìm thấy trang</h1>
                                    <p>Trang bạn đang tìm kiếm không tồn tại.</p>
                                    <a href="/" style={{ color: '#667eea', textDecoration: 'underline' }}>
                                        Về trang chủ
                                    </a>
                                </div>
                            </div>
                            <FloatButtons />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;