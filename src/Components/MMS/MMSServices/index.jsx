import React from 'react';
import './MMSServices.scss'

function MMSServices(props) {
    return (
        <div className="post">
            <div className="services-title primary-title">
                Dịch vụ
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 box-show-uto border-radius-12">
                        <a href="https://webbuilder.uto.vn/" className="services-cart">
                            <div className="services-cart-img">
                                <img src="./img/services-image.jpg" alt="" />
                            </div>
                            
                        </a>
                        <div className="services-cart-name">
                                <div className="services-cart-icon">
                                    <img src="./img/web icon.png" alt="" />
                                </div>
                                <div className="services-cart-text">
                                    Web Builder
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MMSServices;