import React from 'react';
import './LogisticShip.scss'

function LosgisticShip(props) {
    return (
        <div className="ship">
            <div className="ship-title">
                <img src="./img/chiet-khau-UTO-Post (1).png" alt="" />
            </div>

            <div className="ship-title">
                Cổng vận chuyển và thu tiền hộ COD toàn quốc
            </div>

            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Lấy hàng tận nhà, phát hàng toàn quốc
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Chi phí tối ưu, chiết khấu cao
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Nhận tiền COD hàng ngày
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Hỗ trợ xử lý khiếu nại
            </div>

            <div className="ship-btn">
                <a href="https://id.uto.vn/logistic/addinvoice">
                    Vận đơn ngay
                </a>
            </div>
        </div>
    );
}

export default LosgisticShip;