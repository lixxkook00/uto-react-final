import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Footer.scss'

function Footer(props) {
    return (
        <div className="ft">
            <div className="footer">
                <div className="footer-title">
                    Hỗ trợ
                </div>

                <div className="footer-link-list">
                    <div className="footer-link-item">
                        <a href="https://uto.vn/policy/return">Chính sách trả hàng</a>
                    </div>
                    <div className="footer-link-item">
                        <a href="https://uto.vn/policy/limit-return">Chính sách trả hàng</a>
                    </div>
                    <div className="footer-link-item">
                        <a href="https://uto.vn/policy/terms">Điều khoản dịch vụ</a>
                    </div>
                    <div className="footer-link-item">
                        <a href="https://uto.vn/policy/terms-trading">Điều khoản dịch vụ mua bán UTO</a>
                    </div>
                    <div className="footer-link-item">
                        <a href="https://uto.vnpolicy/required-legal">Danh mục yêu cầu hồ sơ pháp lý Nhà bán & Hàng hóa</a>
                    </div>
                    <div className="footer-link-item">
                        <a href="https://uto.vn/policy/limit-return">Chính sách vận chuyển</a>
                    </div>
                </div>

                <div className="footer-title">
                    Chúng tôi trên mạng xã hội
                </div>

                <div className="footer-icon-list">
                    <a href="https://www.facebook.com/uto.vn" className="footer-icon-item">
                        <img src="./img/social icon.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCVm2Adt_uRIUELiqs_lDscg" className="footer-icon-item">
                        <img src="./img/social icon (1).png" alt="" />
                    </a>
                    <a href="https://zalo.me/3390877102212137867" className="footer-icon-item">
                        <img src="./img/social icon (2).png" alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@uniontek_official" className="footer-icon-item">
                        <img src="./img/social icon (3).png" alt="" />
                    </a>
                </div>

                <div className="footer-app-list">
                    <a href="" className="footer-app-item">
                        <img src="./img/application icon (1).png" alt="" />
                    </a>
                    <a href="" className="footer-app-item">
                        <img src="./img/application icon.png" alt="" />
                    </a>
                </div>
                
                <div className="footer-line"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title-contact">
                                <div className="title-contact-img">
                                    <img src="./img/ic_sp1.png" alt="" />
                                </div>
                                <div className="title-contact-text">
                                    <p>Tổng đài hỗ trợ 24/7</p>
                                    <div className="phone">
                                        <a href="tel:1900886633">1900 88 66 33</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            Đăng ký để cập nhật thông tin mới nhất về các chương trình khuyến mãi và nhận được voucher hấp dẫn
                        </div>
                        <div className="col-xl-6">
                            <div className="footer-input">
                                <input type="text" placeholder="Nhập email của bạn..." />
                                <div className="footer-input-btn">
                                    <i className="far fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            
            <div className="footer-brand">
                <p>© 2022 UTO</p>
                <p>Nâng tầm thương hiệu của bạn</p>
            </div>
        </div>
    );
}

export default Footer;