import React from 'react';
import './EduCart.scss'



function CartEdu({course}) {
    return (
        <div key={course.id} className="col-xl-6">
            <div className="course-item">
                <div className="course-item-img">
                    <img src={`./img/${course.img}`} alt="" />
                </div>
                <div className="course-item-infor">
                    <a href={course.link.toString()} className="course-item-name">
                        {course.name}
                    </a>
                    <div className="course-item-teacher">
                        {course.teacher}
                    </div>
                    <div className="course-item-price">
                        <div className="course-item-price--retail">
                            {course.retailPrice !==0 && course.retailPrice } {course.retailPrice !==0 && <sup>đ</sup>}
                        </div>
                        <div className="course-item-price--sale">
                            {course.salePrice} <sup>đ</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartEdu;