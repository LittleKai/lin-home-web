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
                    <h1>?ng d?ng xem H�?ng nh� h?p tu?i</h1> 
                    <p>?ng d?ng xem h�?ng nh� h?p tu?i - �ang ph�t tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default HuongNhaHopTuoiPage; 
