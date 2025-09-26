// src/pages/ung-dung/MauHopTuoiPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const MauHopTuoiPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>?ng d?ng xem Màu h?p tu?i</h1> 
                    <p>?ng d?ng xem màu h?p tu?i - Ðang phát tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default MauHopTuoiPage; 
