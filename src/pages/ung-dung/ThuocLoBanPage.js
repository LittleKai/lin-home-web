// src/pages/ung-dung/ThuocLoBanPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const ThuocLoBanPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>?ng d?ng xem Thý?c l? ban tr?c tuy?n</h1> 
                    <p>?ng d?ng thý?c l? ban - Ðang phát tri?n</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default ThuocLoBanPage; 
