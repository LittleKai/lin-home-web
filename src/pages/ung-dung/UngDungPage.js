// src/pages/ung-dung/UngDungPage.js 
import React from 'react'; 
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
 
const UngDungPage = () => { 
    return ( 
        <> 
            <Header /> 
            <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}> 
                <div className="container" style={{ padding: '40px 20px' }}> 
                    <h1>Trang ?ng d?ng - Ðang phát tri?n</h1> 
                    <p>Trang t?ng quan các ?ng d?ng s? ðý?c hoàn thi?n s?m.</p> 
                </div> 
            </main> 
            <Footer /> 
        </> 
    ); 
}; 
 
export default UngDungPage; 
