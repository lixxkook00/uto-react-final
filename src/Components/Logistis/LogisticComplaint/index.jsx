import React from 'react';
import './LogisticComplaint.scss'

function LogisticComplaint(props) {
    return (
        <div className="complaint">
            <div className="complaint-title text-center">
                Giải quyết khiếu nại
            </div>

            <p>
                <b>1. Các hình thức khiếu nại để Khách hàng có thể khiếu nại qua các kênh sau:</b>
                <br />
                <span>-Khiếu nại trực tiếp tại bộ phận giao dịch khách hàng của BƯU CỤC cung cấp dịch vụ.</span>
                <br />
                <span>-Thông tin đầu mối chung tiếp nhận khiếu nại Email: <a href="mailto:cskh@uto.vn">cskh@uto.vn.</a></span>
            </p>

            <p>
                <b>2. Quy trình giải quyết khiếu nại:</b>
                <br />
                <span>- Thông qua các hình thức khiếu nại trên, Khách hàng có thể lựa chọn các phương thức để khiếu nại và yêu cầu giải quyết bồi thường.</span>
                <br />
                <span>- Đối với 01 KHIẾU NẠI sẽ được giải quyết theo quy trình sau:</span>
                
                <div className="li-uto">
                    <i className="fa fa-check red"></i>
                    Ghi nhận yêu cầu khiếu nại của Khách hàng
                </div>

                <div className="li-uto">
                    <i className="fa fa-check red"></i>
                    Xác định khiếu nại của Khách hàng phát sinh do lỗi tại đâu? Do nhân viên nào thực hiện? Do lỗi của khách hàng?
                </div>

                <div className="li-uto">
                    <i className="fa fa-check red"></i>
                    Xác minh trách nhiệm của Đơn vị cung cấp dịch vụ để giải quyết với Khách hàng
                </div>

                <div className="li-uto">
                    <i className="fa fa-check red"></i>
                    Đầu mối tiếp nhận khiếu nại chung sẽ phối hợp với các bên liên quan để trả lời, thông tin lại việc giải quyết khiếu nại với khách hàng. Tuy nhiên việc chịu trách nhiệm giải quyết khiếu nại, bồi thường (nếu có) cuối cùng sẽ do đơn vi chủ trì cung cấp dịch vụ chịu trách nhiệm.
                </div>
            </p>
        </div>
    );
}

export default LogisticComplaint;