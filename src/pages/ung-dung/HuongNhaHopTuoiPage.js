// src/pages/ung-dung/HuongNhaHopTuoiPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const HuongNhaHopTuoiPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>?ng d?ng xem Hý?ng nhà h?p tu?i</h1> 
                    <p>?ng d?ng xem hý?ng nhà h?p tu?i - Ðang phát tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default HuongNhaHopTuoiPage; 
