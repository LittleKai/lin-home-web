// src/App.js - Complete with all routes including pricing pages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import existing components
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import FloatButtons from './components/FloatButtons/FloatButtons';

// Import ContactSection
import ContactSection from './components/sections/ContactSection/ContactSection';

// Import design pages
import QuyTrinhThietKePage from './pages/thiet-ke/quy-trinh-thiet-ke';
import ThietKeKienTrucPage from './pages/thiet-ke/thiet-ke-kien-truc';
import ThietKeNoiThatPage from './pages/thiet-ke/thiet-ke-noi-that';

// Import architecture design category pages
import BietThuPage from './pages/thiet-ke/thiet-ke-kien-truc/biet-thu';
import NhaPhoPage from './pages/thiet-ke/thiet-ke-kien-truc/nha-pho';
import CanHoChungCuPage from './pages/thiet-ke/thiet-ke-kien-truc/can-ho-chung-cu';
import VillaPage from './pages/thiet-ke/thiet-ke-kien-truc/villa';
import LauDaiDinhThuPage from './pages/thiet-ke/thiet-ke-kien-truc/lau-dai-dinh-thu';
import ResortDuLichPage from './pages/thiet-ke/thiet-ke-kien-truc/resort-du-lich';
import KhachSanNhaHangPage from './pages/thiet-ke/thiet-ke-kien-truc/khach-san-nha-hang';
import NhaXuongCongNghiepPage from './pages/thiet-ke/thiet-ke-kien-truc/nha-xuong-cong-nghiep';
import CanhQuanSanVuonPage from './pages/thiet-ke/thiet-ke-kien-truc/canh-quan-san-vuon';
import TuDuongNhaThoPage from './pages/thiet-ke/thiet-ke-kien-truc/tu-duong-nha-tho';

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
import BaoGiaThietKeThiCongNhaPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong';

// Import pricing detail pages
import ThietKeKienTrucPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thiet-ke-kien-truc';
import ThiCongPhanThoPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-phan-tho';
import ThiCongHoanThienPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-hoan-thien';
import ThiCongTronGoiPricingPage from './pages/bao-gia/bao-gia-thiet-ke-thi-cong/thi-cong-tron-goi';

// Import existing pricing pages
import BaoGiaThiCongHangMucPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc';

// ========== IMPORT 11 TRANG BÁO GIÁ THI CÔNG HẠNG MỤC ==========
import BaoGiaTranVachThachCaoPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao';
import BaoGiaSanGoPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/san-go';
import BaoGiaOpLatGachDaPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da';
import BaoGiaNhomKinhPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh';
import BaoGiaCuaCompositePage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite';
import BaoGiaDienNangLuongMatTroiPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi';
import BaoGiaSmarthomePage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/smarthome';
import BaoGiaHoCaKoiTieuCanhPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh';
import BaoGiaRemCuaCaoCapPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap';
import BaoGiaChongThamPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham';
import BaoGiaPhaoChiPage from './pages/bao-gia/bao-gia-thi-cong-hang-muc/phao-chi-pu-ps-thach-cao';

// Thêm vào phần import của báo giá sửa chữa cải tạo
import BaoGiaSuaChuaCaiTao from './pages/bao-gia/BaoGiaSuaChuaCaiTao';
import CachUocTinhChiPhi from './pages/bao-gia/bao-gia-sua-chua-cai-tao/CachUocTinhChiPhi';
import QuyTrinhSuaChua from './pages/bao-gia/bao-gia-sua-chua-cai-tao/QuyTrinhSuaChua';
import SuaChuaPhongKhach from './pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongKhach';
import CaiTaoPhongBep from './pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongBep';
import SuaChuaPhongNgu from './pages/bao-gia/bao-gia-sua-chua-cai-tao/SuaChuaPhongNgu';
import CaiTaoPhongTam from './pages/bao-gia/bao-gia-sua-chua-cai-tao/CaiTaoPhongTam';
import ChonDonViUyTin from './pages/bao-gia/bao-gia-sua-chua-cai-tao/ChonDonViUyTin';
import XuHuongCaiTao from './pages/bao-gia/bao-gia-sua-chua-cai-tao/XuHuongCaiTao';

// Import Application Pages
import UngDungPage from './pages/ung-dung/UngDungPage';
import TinhChiPhiXayDungPage from './pages/ung-dung/TinhChiPhiXayDungPage';
import XemTuoiLamNhaPage from './pages/ung-dung/XemTuoiLamNhaPage';
import ThuocLoBanPage from './pages/ung-dung/ThuocLoBanPage';
import HuongNhaHopTuoiPage from './pages/ung-dung/HuongNhaHopTuoiPage';
import MauHopTuoiPage from './pages/ung-dung/MauHopTuoiPage';
import Footer from "./components/Footer/Footer";

// Component để hiển thị ContactSection với Header và FloatButtons
const ContactPageWrapper = () => (
    <>
        <Header
            activeSection="contact"
            setActiveSection={() => {}}
        />
        <div style={{ marginTop: '80px' }}>
            <ContactSection />
        </div>
        <FloatButtons />
    </>
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
        } else if (path === '/contact' || path === '/lien-he') {
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
                    <Route path="/thiet-ke/quy-trinh-thiet-ke" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <QuyTrinhThietKePage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/thiet-ke/thiet-ke-kien-truc" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThietKeKienTrucPage />
                            <FloatButtons />
                        </>
                    } />
                    <Route path="/thiet-ke/thiet-ke-noi-that" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <ThietKeNoiThatPage />
                            <FloatButtons />
                        </>
                    } />

                    {/* Architecture Design Category Routes */}
                    <Route path="/thiet-ke/thiet-ke-kien-truc/biet-thu" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BietThuPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/nha-pho" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><NhaPhoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/can-ho-chung-cu" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CanHoChungCuPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/villa" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><VillaPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/lau-dai-dinh-thu" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><LauDaiDinhThuPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/resort-du-lich" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ResortDuLichPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/khach-san-nha-hang" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><KhachSanNhaHangPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/nha-xuong-cong-nghiep" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><NhaXuongCongNghiepPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/canh-quan-san-vuon" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CanhQuanSanVuonPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc/tu-duong-nha-tho" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><TuDuongNhaThoPage /><FloatButtons /><Footer /></>} />

                    {/* Construction Main Routes */}
                    <Route path="/thi-cong/quy-trinh-thi-cong" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><QuyTrinhThiCongPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/thi-cong-tron-goi-kien-truc" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThiCongTronGoiKienTrucPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/thi-cong-tron-goi-noi-that" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThiCongTronGoiNoiThatPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/thi-cong-hang-muc" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThiCongHangMucPage /><FloatButtons /><Footer /></>} />

                    {/* Construction - Sửa chữa cải tạo main page */}
                    <Route path="/thi-cong/sua-chua-cai-tao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><SuaChuaCaiTaoPage /><FloatButtons /><Footer /></>} />

                    {/* Construction - 7 routes cho submenu cải tạo */}
                    <Route path="/thi-cong/hang-muc-cai-tao/thi-cong-sua-chua-cai-tao-nha-o" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThiCongSuaChuaCaiTaoNhaOPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-nang-tang-mo-rong" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoNangTangMoRongPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/thi-cong-cai-tao-nha-pho" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThiCongCaiTaoNhaPhoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-bep-nha-ve-sinh" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoBepNhaVeSinhPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-phong-ngu-phong-khach" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoPhongNguPhongKhachPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/cai-tao-mat-tien-ngoai-that" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoMatTienNgoaiThatPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-cai-tao/toi-uu-chi-phi-cai-tao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ToiUuChiPhiCaiTaoPage /><FloatButtons /><Footer /></>} />

                    {/* Construction Category Routes - 11 routes */}
                    <Route path="/thi-cong/hang-muc-thi-cong/tran-vach-thach-cao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><TranVachThachCaoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/san-go" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><SanGoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/da-op-lat" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><DaOpLatPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/cua-composite" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CuaCompositePage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/rem-cua" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><RemCuaPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/chong-tham" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ChongThamPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/ho-koi-san-vuon" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><HoKoiSanVuonPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/nhom-kinh" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><NhomKinhPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/dien-thong-minh" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><DienThongMinhPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/phao-chi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><PhaoChiPage /><FloatButtons /><Footer /></>} />
                    <Route path="/thi-cong/hang-muc-thi-cong/dien-mat-troi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><DienMatTroiPage /><FloatButtons /><Footer /></>} />

                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaSuaChuaCaiTao /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/cach-uoc-tinh-chi-phi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CachUocTinhChiPhi /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/quy-trinh-sua-chua" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><QuyTrinhSuaChua /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-khach" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><SuaChuaPhongKhach /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-bep" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoPhongBep /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/sua-chua-phong-ngu" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><SuaChuaPhongNgu /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/cai-tao-phong-tam" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><CaiTaoPhongTam /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/chon-don-vi-uy-tin" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ChonDonViUyTin /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-sua-chua-cai-tao/xu-huong-cai-tao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><XuHuongCaiTao /><FloatButtons /><Footer /></>} />
                    
                    {/* ========== 11 ROUTES CHO TRANG BÁO GIÁ THI CÔNG HẠNG MỤC ========== */}
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/tran-vach-thach-cao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaTranVachThachCaoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/san-go" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaSanGoPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/op-lat-gach-da" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaOpLatGachDaPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/nhom-kinh" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaNhomKinhPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/cua-composite" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaCuaCompositePage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/dien-nang-luong-mat-troi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaDienNangLuongMatTroiPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/smarthome" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaSmarthomePage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/ho-ca-koi-tieu-canh" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaHoCaKoiTieuCanhPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/rem-cua-cao-cap" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaRemCuaCaoCapPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/chong-tham" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaChongThamPage /><FloatButtons /><Footer /></>} />
                    <Route path="/bao-gia/bao-gia-thi-cong-hang-muc/phao-chi-pu-ps-thach-cao" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><BaoGiaPhaoChiPage /><FloatButtons /><Footer /></>} />

                    {/* Application Routes */}
                    <Route path="/ung-dung" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><UngDungPage /><FloatButtons /><Footer /></>} />
                    <Route path="/ung-dung/tinh-chi-phi-xay-dung" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><TinhChiPhiXayDungPage /><FloatButtons /><Footer /></>} />
                    <Route path="/ung-dung/xem-tuoi-lam-nha" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><XemTuoiLamNhaPage /><FloatButtons /><Footer /></>} />
                    <Route path="/ung-dung/thuoc-lo-ban" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><ThuocLoBanPage /><FloatButtons /><Footer /></>} />
                    <Route path="/ung-dung/huong-nha-hop-tuoi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><HuongNhaHopTuoiPage /><FloatButtons /><Footer /></>} />
                    <Route path="/ung-dung/mau-hop-tuoi" element={<><Header activeSection={activeSection} setActiveSection={setActiveSection} /><MauHopTuoiPage /><FloatButtons /><Footer /></>} />

                    {/* Pricing Main Route */}
                    <Route path="/bao-gia/bao-gia-thiet-ke-thi-cong" element={
                        <>
                            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                            <BaoGiaThietKeThiCongNhaPage />
                            <FloatButtons />
                        </>
                    } />

                    {/* ===== ROUTES KẾT NỐI VỚI CONTACTSECTION ===== */}
                    {/* Route /bao-gia/tu-van-bao-gia */}
                    <Route path="/bao-gia/tu-van-bao-gia" element={<ContactPageWrapper />} />

                    {/* Route /pages/bao-gia/tu-van-bao-gia */}
                    <Route path="/pages/bao-gia/tu-van-bao-gia" element={<ContactPageWrapper />} />

                    {/* Route /lien-he */}
                    <Route path="/lien-he" element={<ContactPageWrapper />} />

                    {/* Route /contact (đã có sẵn, sẽ được thay thế) */}
                    <Route path="/contact" element={<ContactPageWrapper />} />

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

                    <Route
                        path="/bao-gia/bao-gia-thi-cong-hang-muc"
                        element={
                            <>
                                <Header activeSection={activeSection} setActiveSection={setActiveSection} />
                                <BaoGiaThiCongHangMucPage />
                                <FloatButtons />
                                <Footer />
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