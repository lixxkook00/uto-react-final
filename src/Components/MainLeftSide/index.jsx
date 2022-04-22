import React,{ useState }  from 'react';
import './MainLeftSide.scss'

import {category} from '../../data'


function MainLeftSide(props) {

    // View more category
    const [viewMore, setViewMore] = useState(false);

    // handle View More 
    const handleViewMore = () => {
        setViewMore(!viewMore);
        // console.log(viewMore)
    }
    
    return (
        <div className="main-left">
            <ul className={`main-left-list ${viewMore === false ? "" : "view-more"}`}>
                {
                    category.map((item,index) => {
                        return (
                            <li key={index} className={`main-left-item`}>
                                <a href={item.href}>
                                    <img src={`./img/${item.img}`} alt="" />
                                    <div className="name">
                                        {item.title}
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="main-left-last-item" onClick={handleViewMore}>
                <div className="main-left-icon">
                    <i className={viewMore === false ? "fa fa-angle-down" : "fa fa-angle-up"}></i>
                </div>
                <div className="name" >
                    {viewMore === false ? "Xem thêm" : "Ẩn bớt"}
                </div>
            </div>
        </div>
    );
}

export default MainLeftSide;