// src/App.js (Updated with redirect routes)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import existing components
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import FloatButtons from './components/FloatButtons/FloatButtons';

// Import new design pages
import QuyTrinhThietKePage from './pages/thiet-ke/quy-trinh-thiet-ke';
import ThietKeKienTrucPage from './pages/thiet-ke/thiet-ke-kien-truc';
import ThietKeNoiThatPage from './pages/thiet-ke/thiet-ke-noi-that';

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

                    {/* Design Pages */}
                    <Route path="/thiet-ke/quy-trinh-thiet-ke" element={<QuyTrinhThietKePage />} />
                    <Route path="/thiet-ke/thiet-ke-kien-truc" element={<ThietKeKienTrucPage />} />
                    <Route path="/thiet-ke/thiet-ke-noi-that" element={<ThietKeNoiThatPage />} />

                    {/* Redirect short URLs to full URLs */}
                    <Route path="/quy-trinh-thiet-ke" element={<Navigate to="/thiet-ke/quy-trinh-thiet-ke" replace />} />
                    <Route path="/thiet-ke-kien-truc" element={<Navigate to="/thiet-ke/thiet-ke-kien-truc" replace />} />
                    <Route path="/thiet-ke-noi-that" element={<Navigate to="/thiet-ke/thiet-ke-noi-that" replace />} />

                    {/* Construction Pages - Placeholder routes */}
                    <Route path="/thi-cong/*" element={
                        <div style={{
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h1>🚧 Trang Thi công</h1>
                            <p>Trang này đang được phát triển...</p>
                            <button
                                onClick={() => window.location.href = '/'}
                                style={{
                                    background: '#667eea',
                                    color: 'white',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Về trang chủ
                            </button>
                        </div>
                    } />

                    {/* Pricing Pages - Placeholder routes */}
                    <Route path="/bao-gia/*" element={
                        <div style={{
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h1>💰 Trang Báo giá</h1>
                            <p>Trang này đang được phát triển...</p>
                            <button
                                onClick={() => window.location.href = '/'}
                                style={{
                                    background: '#667eea',
                                    color: 'white',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Về trang chủ
                            </button>
                        </div>
                    } />

                    {/* News Pages - Placeholder routes */}
                    <Route path="/tin-tuc/*" element={
                        <div style={{
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h1>📰 Trang Tin tức</h1>
                            <p>Trang này đang được phát triển...</p>
                            <button
                                onClick={() => window.location.href = '/'}
                                style={{
                                    background: '#667eea',
                                    color: 'white',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Về trang chủ
                            </button>
                        </div>
                    } />

                    {/* Applications Pages - Placeholder routes */}
                    <Route path="/ung-dung/*" element={
                        <div style={{
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <h1>📱 Trang Ứng dụng</h1>
                            <p>Trang này đang được phát triển...</p>
                            <button
                                onClick={() => window.location.href = '/'}
                                style={{
                                    background: '#667eea',
                                    color: 'white',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginTop: '1rem'
                                }}
                            >
                                Về trang chủ
                            </button>
                        </div>
                    } />

                    {/* Contact Page */}
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Header
                                    activeSection={activeSection}
                                    setActiveSection={setActiveSection}
                                />
                                <MainContent
                                    activeSection="contact"
                                    setActiveSection={setActiveSection}
                                />
                                <FloatButtons />
                            </>
                        }
                    />

                    {/* Redirect old paths */}
                    <Route path="/home" element={<Navigate to="/" replace />} />

                    {/* 404 Page */}
                    <Route
                        path="*"
                        element={
                            <div style={{
                                minHeight: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                padding: '2rem',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white'
                            }}>
                                <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
                                <h2 style={{ marginBottom: '1rem' }}>Trang không tìm thấy</h2>
                                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                    Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
                                </p>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    style={{
                                        background: 'white',
                                        color: '#667eea',
                                        padding: '16px 32px',
                                        border: 'none',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    🏠 Về trang chủ
                                </button>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;