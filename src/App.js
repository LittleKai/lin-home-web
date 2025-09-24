// src/App.js - Updated with construction routes and category articles
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Import 11 construction category pages
import TranVachThachCaoPage from './pages/thi-cong/categories/tran-vach-thach-cao';
import SanGoPage from './pages/thi-cong/categories/san-go';
import DaOpLatPage from './pages/thi-cong/categories/da-op-lat';
import CuaCompositePage from './pages/thi-cong/categories/cua-composite';
import RemCuaPage from './pages/thi-cong/categories/rem-cua';
import ChongThamPage from './pages/thi-cong/categories/chong-tham';
import HoKoiSanVuonPage from './pages/thi-cong/categories/ho-koi-san-vuon';
import NhomKinhPage from './pages/thi-cong/categories/nhom-kinh';
import DienThongMinhPage from './pages/thi-cong/categories/dien-thong-minh';
import PhaoChiPage from './pages/thi-cong/categories/phao-chi';
import DienMatTroiPage from './pages/thi-cong/categories/dien-mat-troi';

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

                    {/* Contact Route */}
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Header
                                    activeSection={activeSection}
                                    setActiveSection={setActiveSection}
                                />
                                <div className="contact-page">
                                    <h1>Liên hệ</h1>
                                    <p>Trang liên hệ sẽ được phát triển sau.</p>
                                </div>
                                <FloatButtons />
                            </>
                        }
                    />

                    {/* Fallback for undefined routes */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;