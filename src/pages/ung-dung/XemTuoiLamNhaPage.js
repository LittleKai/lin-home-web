// src/pages/ung-dung/XemTuoiLamNhaPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const XemTuoiLamNhaPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>?ng d?ng xem Tu?i làm nhà</h1> 
                    <p>?ng d?ng xem tu?i làm nhà - Ðang phát tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default XemTuoiLamNhaPage; 
