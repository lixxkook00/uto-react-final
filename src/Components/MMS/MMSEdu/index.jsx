import React from 'react';
import './MMSEdu.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";

// data
import myData from '../../../data/data.json';


// YoutubeEmbed
import YoutubeEmbed from '../../YoutubeEmbed'

// Cart Edu
import CartEdu from '../../Carts/EduCart'

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

function MMSEdu(props) {
    const categoryList = myData.edu_category;
    const youtubeList = myData.edu_youtubeLink;
    const courseList = myData.edu_courses;

    return (
        <div className="edu">
            {/* Banner */}
            <Swiper
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                pagination={{
                    clickable: false,
                }}
                autoplay={{ delay: 1500 }}
                className="mySwiper"
                >
                <SwiperSlide>
                    <a href="">
                    <img src="./img/61cebe560c11b.jpg" />
                    </a>
                </SwiperSlide>
                
                <SwiperSlide>
                    <a href="">
                    <img src="./img/61cebe280474a.jpg" />
                    </a>
                </SwiperSlide>
            </Swiper>

            {/* category */}
            <div className="post">
                <div className="container">
                    <div className="row">
                        {
                            categoryList.map((category,index) => {
                                return (
                                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <a href= {category.link} className="edu-category-item">
                                            <div className="edu-category-item_text">
                                                {category.name}
                                            </div>
                                            <div className="edu-category-item_icon">
                                                <img src= {`./img/${category.icon}`} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* session reputable sellers */}
            <div className="post edu-post">
                {/* title */}
                <div className="market-title market-title--red">
                    LỚP HỌC NỔI BẬT
                </div>
                {/* Slider */}
                <Swiper
                    modules={[Pagination,Autoplay]}
                    slidesPerView={2}
                    spaceBetween={1}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{ delay: 3000 }}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {
                        youtubeList.map((item,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <a href="" className="seller-slider-cart box-show-uto">
                                        <YoutubeEmbed embedId={getId(item.link)} />
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            {/* feature courses */}
            <div className="post">
                <div className="feature-courses">
                    {/* title */}
                    <div className="feature-courses-title">
                        Khóa học nổi bật
                    </div>

                    {/* content */}
                    <div className="container mb-10">
                        <div className="row">
                            {
                                courseList.map((course,index) => {
                                    return (
                                        <CartEdu course={course} key={index}/>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            
            {/* all courses */}
            <div className="post">
                <div className="feature-courses">
                    {/* title */}
                    <div className="feature-courses-title">
                        Tất cả khóa học
                    </div>

                    {/* content */}
                    <div className="container mb-10">
                        <div className="row">
                            {
                                courseList.map((course,index) => {
                                    return (
                                        <CartEdu course={course} key={index}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* feature */}
            <div className="post">
                <div className="feature-courses">
                    {/* title */}
                    <div className="feature-courses-title">
                        4 lý do bạn nên học online tại startup education
                    </div>

                    {/* content */}
                    <div className="container mb-10">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="reason-item">
                                    <div className="text-center">
                                        <img src="./img/h5.jpg.jpg" alt="" />
                                    </div>
                                    <div className="reason-item-title">
                                        Giảng viên uy tín
                                    </div>
                                    <div className="reason-item-decs">
                                        Ứng dụng thực tế, bài tập rèn luyện thực hành tạo ra kết quả...
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="reason-item">
                                    <div className="text-center">
                                        <img src="./img/h6.jpg.jpg" alt="" />
                                    </div>
                                    <div className="reason-item-title">
                                        Thanh toán online
                                    </div>
                                    <div className="reason-item-decs">
                                        Được học offline
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="reason-item">
                                    <div className="text-center">
                                        <img src="./img/h7.jpg.jpg" alt="" />
                                    </div>
                                    <div className="reason-item-title">
                                        Học trực tuyến
                                    </div>
                                    <div className="reason-item-decs">
                                        Có đội ngũ support kèm cặp hỗ trợ
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="reason-item">
                                    <div className="text-center">
                                        <img src="./img/h8.jpg.jpg" alt="" />
                                    </div>
                                    <div className="reason-item-title">
                                        Tham dự group
                                    </div>
                                    <div className="reason-item-decs">
                                        Cộng đồng khởi nghiệp và giáo dục chất lượng
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MMSEdu;