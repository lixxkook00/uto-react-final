import React from 'react';
import './MainRightSide.scss'

const member = [
    {
        id:0,
        avt:'author-image.png',
        name:'Lê Quang Linh',
    },
    {
        id:1,
        avt:'author-image.png',
        name:'Văn Nguyễn Hồng Thu',
    },
    {
        id:2,
        avt:'author-image.png',
        name:'Trần Thi Kim Trang',
    },
    {
        id:3,
        avt:'author-image.png',
        name:'Kiều Trang',
    },
    {
        id:4,
        avt:'author-image.png',
        name:'Lý Thị Thanh Huyền',
    },
    {
        id:5,
        avt:'author-image.png',
        name:'Trần Thái Hữu',
    },
    {
        id:6,
        avt:'author-image.png',
        name:'HUỲNH VĂN PHỐI',
    },
    {
        id:7,
        avt:'author-image.png',
        name:'Nguyễn Minh Ngọc',
    },
    {
        id:8,
        avt:'author-image.png',
        name:'Cao Thị Huề',
    },
    {
        id:9,
        avt:'author-image.png',
        name:'Đinh Thị Kim Bích',
    },
]

function MainRightSide(props) {
    return (
        <div className="main-right">
            <ul className="main-right-list">
                
                {/* Title */}
                <li className="main-right-title">
                    Thành viên nổi bật
                </li>

                {/* list member outstanding */}
                {
                    member.map((item,index) => {
                        return (
                            <li key={index} className="main-right-item">
                                <a href={item.href}>
                                    <img src={`./img/${item.avt}`} alt="" />
                                    <div className="name">
                                        {item.name}
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }

                {/* title */}
                <li className="main-right-title mt-25 mb-10">
                    Tải ứng dụng UTO
                </li>

                {/* Download Icon */}
                <div className="download">
                    <a href="" className="download-item">
                        <img src="./img/application icon.png" alt="" />
                    </a>
                    <a href="" className="download-item">
                        <img src="./img/application icon (1).png" alt="" />
                    </a>
                </div>
            </ul>
        </div>
    );
}

export default MainRightSide;