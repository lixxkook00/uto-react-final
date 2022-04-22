import React from 'react';
import './LogisticIntro.scss'

function LogisticIntro(props) {
    return (
        <div className="intro">
            <p className="title text-center">
                Giới thiệu về dịch vụ Logistic của UTO
            </p>
            
            <p className="to">
                Kính gửi Quý Khách hàng thân mến!
            </p>

            <p className="section">
                <b>Công ty TNHH Công Nghệ Uniontek</b> chân thành cảm ơn Quý Khách hàng đã luôn tin tưởng, hợp tác và chia sẻ với chúng tôi trong suốt thời gian qua. Chúng tôi mong muốn được tiếp tục đồng hành cũng như nhận được nhiều sự quan tâm hơn nữa từ Quý Khách hàng.
            </p>
            <p className="section">
                Để có thể mang lại cho Khách hàng nhiều trải nghiệm tuyệt vời hơn những gì chúng tôi đang có, Uniontek xin thông báo đến Quý Khách hàng về dịch vụ vận chuyển logistic trên <b>HỆ SINH THÁI UTO</b> của chúng tôi.
            </p>

            <p className="section">
                Dịch vụ vận chuyển ngày nay phát triển nhanh chóng, hầu hết tất cả các mô hình kinh doanh hiện nay đều phải sử dụng dịch vụ vận chuyển hàng hóa. Nhưng làm thế nào để tối ưu hóa nhất chi phí vận chuyển cho doanh nghiệp và Khách hàng chính là vấn đề mà UTO hướng tới.
            </p>

            <p className="section">
                Để tiết kiệm thời gian và chi phí vận chuyển hàng hóa, khi doanh nghiệp sử dụng dịch vụ vận chuyển của UTO liên kết, với tất cả các đơn hàng dưới 3kg UTO đều hỗ trợ đồng giá 28.000đ trên toàn quốc. Đặc biệt, dịch vụ logistic của UTO miễn phí chiều hoàn về.
            </p>

            <div className="section">
                Hiện nay, UTO đã ký thỏa thuận hợp tác với các đơn vị vận chuyển để cung cấp dịch vụ tốt nhất cho doanh nghiệp/ cửa hàng.
            </div>

            <div className="section">
                UTO kính mong nhận được sự quan tâm, chia sẻ và ủng hộ cũng như sự hợp tác của Quý Khách hàng đối với dịch vụ logistic trên hệ sinh thái UTO.
            </div>

            <p className="section">
                Mọi thắc mắc xin liên hệ với chúng tôi qua tổng đài CSKH hoặc email hỗ trợ CSKH <b>cskh@uto.vn</b>
            </p>

            <img src="./img/chiet-khau-UTO-Post.png" alt="" />

            <div className="title-section">
                Chiết khấu hấp dẫn
            </div>

            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Với số đơn hàng đạt được, quyền lợi của doanh nghiệp / cửa hàng sẽ được chiết khấu theo chính sách của công ty.
            </div>

            {/* SECTION */}
            <div className="title-section">
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

            <img src="./img/chiet-khau-UTO-Post (1).png" alt="" />

            {/* SECTION */}
            <div className="title-section">
                Liên kết với các đối tác vận chuyển hàng đầu
            </div>

            <div className="img-list">
                {/* <div className="img-item"> */}
                    <img src="./img/vietnampost.jpg" alt="" />
                    <img src="./img/viettelpost.jpg" alt="" />
                    <img src="./img/giaohangnhanh.jpg" alt="" />
                    <img src="./img/best-express.jpg" alt="" />
                {/* </div> */}
            </div>


            {/* SECTION */}
            <div className="title-section">
                Tra cước dễ dàng, tối ưu chi phí
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Cam kết giá tốt, minh bạch và đơn giản
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Sử dụng cùng lúc nhiều hãng vận chuyển, lựa chọn linh hoạt dịch vụ để tối ưu chi phí
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Sử dụng dịch vụ ngay sau 1 phút đăng ký
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Hãng vận chuyển</th>
                        <th>Thời gian lấy hàng</th>
                        <th>Phí vận chuyển</th>
                        <th>Phí thu hộ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="./img/vietnampost.jpg" alt="" />
                        </td>
                        <td>
                            Trong ngày
                        </td>
                        <td>
                            28.000 đ
                        </td>
                        <td>
                            0 đ
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="./img/viettelpost.jpg" alt="" />
                        </td>
                        <td>
                            Trong ngày
                        </td>
                        <td>
                            28.000 đ
                        </td>
                        <td>
                            0 đ
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="./img/J&T - Đối tác vận chuyển của uto.vn.jpg" alt="" />
                        </td>
                        <td>
                            Trong ngày
                        </td>
                        <td>
                            28.000 đ
                        </td>
                        <td>
                            0 đ
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="./img/giaohangnhanh.jpg" alt="" />
                        </td>
                        <td>
                            Trong ngày
                        </td>
                        <td>
                            28.000 đ
                        </td>
                        <td>
                            0 đ
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="./img/best-express.jpg" alt="" />
                        </td>
                        <td>
                            Trong ngày
                        </td>
                        <td>
                            28.000 đ
                        </td>
                        <td>
                            0 đ
                        </td>
                    </tr>
                </tbody>
            </table>

            <img src="./img/shipping-img-2.jpg" alt="" />

            {/* SECTION */}
            <div className="title-section">
                Quản lý đơn hàng tập trung
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Cam kết giá tốt, minh bạch và đơn giản
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Quản lý tất cả các hãng vận chuyển tại 1 nơi
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Theo dõi vận đơn dễ dàng
            </div>

            {/* SECTION */}
            <div className="title-section">
                Nhận tiền COD hàng ngày
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Nhận tiền thu hộ CoD hàng ngày không lo đọng vốn qua trực tiếp tài khoản ngân hàng của bạn
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Bảng kê chi tiết các lần thanh toán rõ ràng
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Dễ dàng kiểm tra tình trạng thanh toán của từng đơn hàng, quên đi nỗi lo nhập nhằng thanh toán
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Chiết khấu cước vận chuyển theo sản lượng đơn
            </div>
            <img src="./img/shipping-img-3.jpg" alt="" />

            <img src="./img/shipping-img-4.jpg" alt="" />

            {/* SECTION */}
            <div className="title-section">
                Hỗ trợ xử lý khiếu nại
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Chuyển hàng
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Chậm lấy hàng
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Chậm phát hàng
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Không liên lạc được khách
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Hủy đơn
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Kiểm tra lịch trình vận đơn
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Lưu kho
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Hoàn hàng về
            </div>
            <div className="li-uto">
                <i className="fa fa-check red"></i>
                Đền bù khi mất hàng
            </div>
        </div>
    );
}

export default LogisticIntro;