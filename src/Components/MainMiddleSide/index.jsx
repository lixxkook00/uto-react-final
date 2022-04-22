import React,{useEffect,useRef} from 'react';
import './MainMiddleSide.scss'

import { Route,Routes} from 'react-router-dom';

import MMSCommunity from '../MMS/MMSCommunity'
import MMSLogistic from '../MMS/MMSLogistic'
import MMSServices from '../MMS/MMSServices'
import MMSEdu from '../MMS/MMSEdu'
import MMSMarket from '../MMS/MMSMarket'
import ProductDetail from '../Details/ProductDetail'
import ShopDetail from '../Details/ShopDetail';

// Footer
import Footer from '../Footer'


function MainMiddleSide() {
    const myRef = useRef(null)

    useEffect(() =>{
        myRef.current.scrollIntoView()  
    })

    return (
        <div className="main-content">
            <div className="all-content" ref={myRef}>
                {/* <ScrollToTop/> */}
                    <Routes>
                        {/* San thuong mai */}
                        <Route exact path="/" element={< MMSMarket/>} />

                        {/* Cong dong */}
                        <Route exact path="/community" element={< MMSCommunity/>} />

                        {/* Dich vu */}
                        <Route exact path="/services" element={< MMSServices/>} />

                        {/* Logistic */}
                        <Route exact path="/logistic" element={< MMSLogistic/>} />

                        {/* Giao duc */}
                        <Route exact path="/edu" element={< MMSEdu/>} />

                        {/* Detail Product */}
                        <Route path="/market/:_id" element={<ProductDetail/>} />

                        {/* Detail Shop */}
                        <Route path="/shop/:_id" element={<ShopDetail/>} />
                    </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default MainMiddleSide;