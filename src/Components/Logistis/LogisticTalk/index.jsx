import React from 'react';

import './LogisticTalk.scss'

function LogisticTalk(props) {
    return (
        <div className="talk">
            <div className="talk-title text-center">
                Một số câu hỏi thường gặp
            </div>

            <p>
                <b>1. Phí vận chuyển trên UTO là bao nhiêu trên 1 đơn hàng?</b>
                <br />
                <i>UTO hỗ trợ vận chuyển đồng giá 28.000đ trên toàn quốc với đơn hàng dưới 3kg.</i>
            </p>

            <p>
                <b>2. Đối tượng nào thì được sử dụng dịch vụ logistic của UTO?</b>
                <br />
                <i>Tất cả các cá nhân có đăng kí và xác minh tài khoản trên hệ sinh thái UTO.</i>
            </p> 

            <p>
                <b>3. Tôi có thể theo dõi được trạng thái đơn hàng trên UTO không?</b>
                <br />
                <i>Bạn có thể theo dõi được trạng thái của mình tại https://uto.vn/ hoặc liên hệ trực tiếp với chúng tôi qua tổng đài CSKH</i>
            </p> 

            <p>
                <b>4. Tôi có thể hủy đơn hàng trên UTO không?</b>
                <br />
                <i>Bạn có thể hủy đơn hàng trên UTO với trường hợp thanh toán trả sau thông qua <a href="mailto:https://uto.vn">https://uto.vn</a></i>
            </p>

            <p>
                <b>5. Tôi có thể thay đổi được địa chỉ nhận hàng sau khi đã đặt hàng không?</b>
                <br />
                <i>Bạn muốn thay đổi địa chỉ nhận hàng sau khi đã đặt hàng cần liên hệ với chúng tôi thông qua tổng đài CSKH</i>
            </p>
            
            <p>
                <b>6. Tôi cần chuẩn bị những gì trước khi sử dụng dịch vụ logistic của UTO?</b>
                <br />
                <i>Bạn cần xác minh thành viên sau khi đăng ký tài khoản trên UTO là đều sử dụng được dịch vụ logistic của UTO.</i>
                <br />
                <i>Hồ sơ xác minh bao gồm hình chụp CMND mặt trước, mặt sau và ảnh chân dung của bạn.</i>
            </p>

            <p>
                <b>7. Thời gian tôi nhận được hàng trong bao lâu?</b>
                <br />
                <i>Thời gian bạn nhận được hàng từ 3-5 ngày.</i>
            </p>

            <p>
                <b>8. Nếu trong quá trình vận chuyển mà hàng bị lỗi hoặc không còn nguyên vẹn thì phải làm như thế nào?</b>
                <br />
                <i>Trong trường hợp này bạn vui lòng giữ nguyên hiện trạng sản phẩm nhận được và liên hệ trực tiếp với chúng tôi qua tổng đài CSKH hoặc gửi tin nhắn support về UTO để được hỗ trợ đổi hàng mới.</i>
            </p>
        </div>
    );
}

export default LogisticTalk;