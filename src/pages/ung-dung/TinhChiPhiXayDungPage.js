// src/pages/ung-dung/TinhChiPhiXayDungPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const TinhChiPhiXayDungPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>?ng d?ng Tính chi phí xây d?ng</h1> 
                    <p>?ng d?ng tính chi phí xây d?ng - Ðang phát tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default TinhChiPhiXayDungPage; 
