import React from 'react';
import "./NotFound404.scss"

import {Link } from 'react-router-dom'

function NotFound404(props) {
    return (
       <div className="notfound">
            {/* <img className="logo-notfound" src="/img/text logo image.png" alt="" /> */}
            <img src="/img/NotFoundGif.gif" alt="" />

            <Link to="/" className="primary-button">
                Trở lại trang chủ
            </Link>
       </div>
    );
}

export default NotFound404;