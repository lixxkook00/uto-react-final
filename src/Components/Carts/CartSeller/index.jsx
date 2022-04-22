import React from 'react';
import './CartSeller.scss'
import {Link} from 'react-router-dom'

function CartSeller({seller}) {
    return (
        <Link to={`/shop/${seller.ID}`} className="seller-slider-cart box-show-uto">
            <div className="seller-slider-cart_img">
            <img src={`./img/${seller.img}`} alt="" />
            </div>
            <div className="seller-slider-cart_title">
            {seller.name}
            </div>
        </Link>
    );
}

export default CartSeller;