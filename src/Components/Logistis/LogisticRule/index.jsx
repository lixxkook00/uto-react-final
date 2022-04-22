import React from 'react';
import './LogisticRule.scss'

function LogisticRule(props) {
    return (
        <div className="rule ">
            <div className="rule-title text-center">
                Quy định vận chuyển hàng hóa qua UTO
            </div>

            <p>Hệ sinh thái UTO (Website   <a href="https://uto.vn">https://uto.vn</a>) là sàn thương mại điện tử, đơn vị cung cấp giải pháp quản trị cho nhiều tổ chức, gia công phần mềm trên các nền tảng bao gồm định dạng trình duyệt web và các ứng dụng trên hệ điều hành IOS và Android.</p>

            <p>Để tối ưu hóa cho hoạt động kinh doanh hàng hóa/dịch vụ của các cá nhân/tổ chức, Hệ sinh thái UTO kết nối Người sử dụng dịch vụ ( Người gửi) đang có nhu cầu sử dụng dịch vụ giao nhận hàng hóa với nhà cung cấp dịch vụ về lĩnh vực bưu chính, vận chuyển hàng hóa tới tay Người tiêu dùng ( Người nhận).</p>

            <p> <strong>- Nhà cung cấp dịch vụ vận chuyển:</strong> Là tổ chức đã có giấy phép bưu chính được phép cung ứng dịch vụ chuyển phát Bưu gửi.</p>

            <p> <strong>- Người gửi:</strong> Là tổ chức/cá nhân đăng ký và xác minh tài khoản trên hệ sinh thái UTO, tạo vận đơn và gửi vận đơn sang cho Nhà cung cấp dịch vụ trên hệ sinh thái UTO. </p>

            <p> <strong>- Vận đơn:</strong> Được khởi tạo bởi Người gửi theo các trường thông tin có sẵn trên hệ sinh thái UTO.</p>

            <p> <strong>- Bưu gửi: </strong> Có nghĩa là thư, gói, kiện hàng hóa được chấp nhận vận chuyển và phát hợp pháp.</p>

            <p> <strong>Điều 1: Chấp nhận Bưu gửi:</strong> </p>

            <p>Nhà cung cấp dịch vụ và Hệ sinh thái UTO chỉ chấp nhận Bưu gửi khi có đủ các điều kiện sau đây:</p>

            <p> <strong>1. Đầy đủ thông tin</strong> </p>

            <p>Người gửi phải điền và cung cấp đầy đủ thông tin bao gồm thông tin Người gửi, Người nhận, tên hàng hóa, khối lượng, kích thước 03 (ba) chiều (dài-rộng-cao) của Bưu gửi ( đối với các đơn hàng kích thước lớn), số tiền COD ( nếu có) được thể hiện trên mục tạo đơn hàng đã thiết lập sẵn trên Hệ sinh thái UTO.</p>

            <p> <strong>2. Cước phí dịch vụ</strong> </p>

            <p>- Đã được Người gửi chấp nhận thanh toán Cước phí Dịch vụ;</p>

            <p>- Cước phí đồng giá Toàn quốc 28.000đ/ đơn hàng có khối lượng dưới 3kg.</p>

            <p>- Hàng hóa cồng kềnh được tính quy đổi theo công thức sau:</p>

            <p> <strong>Số đo (cm): Dài x Rộng x Cao ÷ 6000 = Trọng lượng theo kích thước.</strong> </p>

            <p>- Người gửi điền đúng khối lượng và kích thước Bưu gửi khi tạo vận đơn, nếu Người gửi điền sai trường thông tin khối lượng và kích thước khi tạo vận đơn trên Hệ sinh thái UTO so với khối lượng và kích thước Bưu gửi thực tế thì Nhà cung cấp dịch vụ có thể từ chối thực hiện dịch vụ hoặc/và Người gửi phải thanh toán thêm cước vận chuyển cho khối lượng và kích thước tăng thêm.</p>

            <p> <strong>3. Đảm bảo hàng hóa :</strong> </p>

            <p>- Người gửi chịu trách nhiệm trước Nhà cung cấp dịch vụ vận chuyển hoặc/và cơ quan quản lý nhà nước có thẩm quyền về v ật chứa trong Bưu gửi không thuộc danh mục hàng cấm, hoặc đáp ứng các điều kiện nếu thuộc danh mục hàng hạn chế kinh doanh hoặc kinh doanh có điều kiện theo quy định pháp luật;</p>

            <p>- Bồi thường cho bên bị thiệt hại khi nội dung của Bưu gửi có chứa vật phẩm, hàng hóa cấm gửi theo quy định tại Điều 7 Luật Bưu Chính số 49/2010/QH12, ngày 28/06/2010 và theo quy định tại mục VII.2 của Quy chế này, bao gồm: tiền xử phạt vi phạm hành chính, thiệt hại thực tế xảy ra…;</p>

            <p> <strong>4. Đóng gói Bưu gửi</strong> </p>

            <p>- Tất cả Bưu Gửi cần được đóng gói theo quy định (đóng thùng carton, hộp, bìa cứng...) bọc túi ni lông xung quanh. Đối với hàng dễ vỡ cần ghi rõ trên Bưu gửi, dán mã vận đơn đã được khởi tạo trên hệ sinh thái UTO</p>

            <p>- Đối với Bưu gửi nguyên đai nguyên kiện hoặc kèm theo hóa đơn, cần đóng gói, chèn đệm, xốp, túi khí cẩn thận vào hàng hóa. Cần ghi rõ Bưu gửi chuyển nguyên đai nguyên kiện trên Bưu gửi, không kiểm tra trước khi kí nhận.</p>

            <p> <strong>Điều 3: Địa điểm nhận Bưu gửi</strong> </p>

            <p>- Thực hiện theo chỉ định của Người gửi nhưng không nằm ngoài Phạm vi cung ứng của Nhà cung cấp dịch vụ.</p>

            <p>- Nhân viên giao nhận của Nhà cung cấp dịch vụ đến nhận hàng, kiểm tra tình trạng đóng gói bên ngoài của Bưu gửi và xác nhận số lượng đơn hàng đã nhận từ Người gửi.</p>

            <p>- Thời gian lấy hàng giờ hành chính hoặc theo thỏa thuận giữa Người gửi và Nhân viên giao nhận của Nhà cung cấp dịch vụ.</p>

            <p> <strong>Điều 4: Quy định về giao Bưu gửi</strong> </p>

            <p>- Nhân viên giao nhận của Nhà cung cấp dịch vụ có trách nhiệm hướng dẫn Người nhận kiểm tra tình trạng bên ngoài của Bưu gửi và giám sát đến khi Người nhận đồng ý ký nhận Bưu gửi.</p>

            <p>- Giao Bưu gửi theo nguyên tắc “ nguyên đai, nguyên kiện” cho Người nhận như tình trạng khi nhận từ Người gửi. Để tránh hiểu lầm, Nhà cung cấp dịch vụ sẽ không hỗ trợ cho Người nhận mở Bưu gửi để kiểm tra/xem nội dung bên trong nếu chưa có sự đồng ý của Người gửi. Mọi khiếu nại xảy ra sau này sẽ căn cứ vào ký nhận của Người nhận bên Bưu gửi để xử lý.</p>

            <p>- Trường hợp Người nhận không nhận Bưu gửi sau khi đã kiểm tra/xem nội dung bên trong vì bất kỳ lý do gì không phải do lỗi của Nhà cung cấp dịch vụ, Nhân viên giao nhận sẽ hoàn trả Bưu gửi cho Người gửi và không chịu trách nhiệm về nội dung Bưu gửi bên trong.</p>

            <p>- Hệ sinh thái UTO không chịu trách nhiệm với các trường hợp Người gửi tự ý liên lạc và thỏa thuận giao nhận Bưu gửi với nhân viên giao nhận của Nhà cung cấp dịch vụ mà không tạo đơn hàng trên Hệ sinh thái UTO.</p>

            <p>- Đối với các Bưu gửi đã được thu gom và đổi sang trạng thái luân chuyển, nếu Người gửi muốn hủy đơn, đơn hàng xảy ra sự cố, thay đổi thông tin Người nhận, Cước phí dịch vụ sẽ thay đổi và Người gửi hoặc Người nhận chịu phí thay đổi này.</p>

            <p> <strong>Điều 5: Quy định về chuyển hoàn bưu gửi</strong> </p>

            <p>- Hoàn trả Bưu gửi cho người gửi khi Người gửi yêu cầu, Người nhận từ chối nhận bưu gửi hoặc không giao được cho Người nhận mặc dù đã áp dụng mọi phương thức liên lạc có thể. Đơn hàng được lưu tại kho 7 ngày để Người gửi liên lạc với Người nhận. Trong trường hợp vẫn không giao được cho Người nhận, Người gửi vẫn phải thanh toán cước phí dịch vụ cho các đơn hàng bị trả về này và được miễn phí cước trả hàng theo quy định.</p>

            <p> <strong>Điều 6: Quy định về chuyển tiền thu hộ COD</strong> </p>

            <p>- Khi Người gửi tạo đơn hàng mới trên Hệ sinh thái UTO cần điền thông tin tài khoản ngân hàng của mình để nhận tiền thu hộ.</p>

            <p>- Hàng ngày, Nhà cung cấp dịch vụ và Hệ sinh thái UTO đối soát cước vận chuyển và tiền thu hộ đã phát sinh. Lịch đối soát không bao gồm thứ 7, chủ nhật và các ngày nghỉ Lễ.</p>

            <p>- Sau khi đối soát thành công, Cước thu hộ của Người gửi sẽ được hệ sinh thái UTO chuyển vào ví UPAY để Người gửi có thể đặt lệnh rút.</p>

            <p> <strong>Điều 7: Quy định về bồi thường khi xảy ra trường hợp mất hoặc hư hỏng Bưu gửi trong thời gian toàn trình</strong> </p>

            <p>Nhà cung cấp dịch vụ có trách nhiệm bồi thường thiệt hại xảy ra trong quá trình cung ứng Dịch vụ khi lỗi hoàn toàn thuộc về bên Nhà cung cấp dịch vụ. Việc bồi thường thiệt hại liên quan đến thực trạng Bưu gửi được thực hiện như sau:</p>

            <p> <strong>a. Bưu gửi là thư từ, tài liệu, ấn phẩm :</strong> Mọi mất mát, hư hỏng hoặc bị tráo đổi do Nhà cung cấp dịch vụ thì thực hiện bồi thường theo quy định của pháp luật bưu chính hiện hành.</p>

            <p> <strong>b. Bưu gửi là vật phẩm, hàng hóa :</strong> </p>

            <p> <i>b.1. Trường hợp Bưu gửi bị mất:  </i> </p>

            <p>Trường hợp có khai giá và và có đầy đủ cơ sở xác minh giá trị bưu gửi thì bồi thường 100% giá trị khai giá nhưng không vượt quá 20 (hai mươi) triệu đồng.</p>

            <p>Trường hợp có khai giá nhưng không có đầy đủ Cơ sở xác minh giá trị bưu gửi hoặc không khai giá nhưng có đầy đủ cơ sở xác minh giá trị bưu gửi thì bồi thường 100% giá trị bưu gửi nhưng không vượt quá 1.000.000 (một) triệu đồng.</p>

            <p>Trường hợp không có khai giá và không có đầy đủ hóa đơn giá trị bưu gửi thì đền bù 04 (bốn) lần cước phí vận chuyển.</p>

            <p> <i>b.2.  Trường hợp Bưu gửi bị hư hỏng:  </i> </p>

            <p>Áp dụng theo chính sách đền bù mất hàng, tuy nhiên giá trị đền bù phụ thuộc vào mức độ hư hỏng của Bưu gửi, cụ thể như sau:</p>

            <p> <b><i>Giá trị đền bù =</i></b> <i>(Tỷ lệ % khối lượng bưu gửi bị mất, hư hại một phần)</i> x <i>(Mức bồi thường quy định tại mục b.1)</i>. Trong đó: </p>

            <p>Tỉ lệ % khối lượng bưu gửi bị mất, hư hại một phần được xác định căn cứ vào biên bản lập có xác nhận của người gửi hoặc người nhận. Theo đó, tỷ lệ bồi thường tối đa được quy định như sau:</p>

            <p>Bảng mức đền bù đối với hàng hóa hư hỏng:</p>

            <p><i>b.2.1 Hàng hóa hư hỏng có khai giá:</i></p>

            {/* table */}

            <table className="table table-striped">
                <tbody>
                <tr>
                    <td valign="top">
                        <p className="text-center">LOẠI BỂ VỠ</p>
                    </td>
                    <td valign="top">
                        Tối đa bồi thường
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>1.
                        </span>
                        </span>
                        <span>Rách, vỡ, ướt thùng hàng của nhà sản xuất</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>5%</span>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>2.
                        </span>
                        </span>
                        <span>Rách tem niêm phong của nhà sản xuất</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>10%</span>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>3.
                        </span>
                        </span>
                        <span>Kích hoạt bảo hành điện tử hoặc kích hoạt nguồn</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>15%</span>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>4.
                        </span>
                        </span>
                        <span>Mất phụ kiện</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>15%</span>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>5.
                        </span>
                        </span>
                        <span>Hàng hóa bị bể vỡ, hư hại tới 50% giá trị Hàng Hóa</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>50%</span>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                    <p>
                        <span>
                        <span>6.
                        </span>
                        </span>
                        <span>Hàng hóa bị bể vỡ, hư hại trên 50% giá trị Hàng Hóa</span>
                    </p>
                    </td>
                    <td valign="top">
                    <p align="center">
                        <span>100%</span>
                    </p>
                    </td>
                </tr>
                </tbody>
            </table>

            <p>Cách thức xác nhận tỷ lệ (%) bể vỡ hư hại:</p>

            <p>Các tỷ lệ bồi thường như trên là mức tối đa, không phải mức mặc định</p>

            <p>Tùy thuộc vào mức độ bể vỡ của từng trường hợp, tỷ lệ bồi thường có thể nhỏ hơn và chỉ dừng mức lớn nhất như trong bảng điều kiện trên.</p>

            <p>Cách thức xác nhận tỷ lệ hư hại:</p>

            <p>Hàng hóa bị bể vỡ, hư hại tới 50% có đủ điều kiện sau:</p>

            <p>Số lượng Hàng Hóa hư hại tới 50% tổng số lượng các chi tiết cấu thành nên đơn hàng</p>

            <p>Nhà bán hàng phải tốn chi phí sửa chữa hoặc thay thế mới sử dụng tiếp được hay tiến hành bán thanh lý được</p>

            <p>Hàng hóa bị bể vỡ, hư hại trên 50% có đủ điều kiện sau:</p>

            <p>Số lượng Hàng Hóa hư hại vượt quá 50% tổng số lượng các chi tiết cấu thành nên đơn hàng</p>

            <p>Nhà bán hàng phải tốn chi phí sửa chữa hoặc thay thế mới sử dụng tiếp được hay tiến hành thanh lý được</p>

            <p>Thời gian thanh toán bồi thường trong vòng 30 ngày kể từ ngày chấp nhận bồi thường</p>

            <p><b>Điều 8 Các quy định miễn trừ trách nhiệm đền bù</b></p>

            <p>Các trường hợp khiếu nại về tình trạng hư hỏng của Bưu Gửi sau khi Người nhận đã ký nhận Bưu gửi sẽ không được Nhà cung cấp dịch vụ giải quyết khiếu nại và đền bù;</p>

            <p>Bưu gửi bị cơ quan nhà nước có thẩm quyền tịch thu do không rõ nguồn gốc xuất xứ, thu giữ hoặc tiêu hủy do nội dung của Bưu gửi vi phạm qui định của pháp luật;</p>

            <p>Từ chối bồi thường với hàng hóa bên trong Bưu gửi bị hỏng do đặc tính tự nhiên của sản phẩm  ( dễ nóng chảy, hạn sử dụng ngắn, yêu cầu điều kiện bảo quản đặc biệt...)</p>

            <p>Từ chối bồi thường với hàng hóa bên trong Bưu gửi bị hư, hỏng do lỗi từ phía Người gửi (do đóng gói không đảm bảo gây vỡ hỏng hàng hóa);</p>

            <p>Người gửi không có chứng từ xác nhận việc gửi Bưu gửi;</p>

            <p>Mọi thắc mắc xin gửi thông tin về địa chỉ mail: <a href="mailto:cskh@uto.vn">cskh@uto.vn</a></p>
        </div>
    );
}

export default LogisticRule;