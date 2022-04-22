import React from 'react';
import './MMSMarket.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"; 
import "swiper/css/autoplay"; 
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";

// data
import myData from '../../../data/data.json';

// cart item
import CartMarket from '../../Carts/CartMarket'

// cart seller 
import CartSeller from '../../Carts/CartSeller'


function MMSMarket(props) {

  const productList = myData.product;

  return (
    <div className="market">
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
              <img src="./img/Kinh doanh 4 không.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src="./img/Banner phụ (trang Sàn Thương Mại).jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src="./img/Kinh doanh 4 không.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src="./img/Banner chính 3 (Trang Sàn Thương Mại).jpg" />
            </a>
          </SwiperSlide>
        </Swiper>

        {/* session reputable sellers */}
        <div className="post">
          {/* title */}
          <div className="market-title market-title--red">
            CỬA HÀNG UY TÍN
          </div>
          {/* Slider */}
          <Swiper
            modules={[Pagination,Autoplay]}
            slidesPerView={2}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 1500 }}
            className="mySwiper"

            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {
              myData.sellers.map((seller,index) => {
                return (
                  <SwiperSlide key={index}>
                    <CartSeller seller={seller} />
                  </SwiperSlide>
                );
              })
            }
          
          </Swiper>
        </div>

        {/* FLASH SALE */}
        <div className="post">
          {/* Title */}
          <div className="sale-title">
            <div className="sale-title-left">
              <img src="./img/ic_flash1.png" alt="" className="sale-title-icon"/>
              <div className="sale-title-text">
                FLASH SALE
              </div>
            </div>

            <div className="sale-title-right">
              <a href="#" className="view-more">
                Xem thêm
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="market-product-list">
            <div className="container">
              <div className="row">
                {/* item */}
                {
                  productList.map((product,index) => {
                    // console.log(product)
                    return (
                      <CartMarket key={index} product={product}/>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </div>
        

        {/* Banner */}
        <a href="" className="banner">
          <img src="./img/Banner phụ 2 (trang Sàn Thương Mại).jpg" alt="" />
        </a>

        {/* Banner */}
        <a href="" className="banner">
          <img src="./img/Banner phụ (trang Sàn Thương Mại).jpg" alt="" />
        </a>

        {/* session reputable sellers */}
        <div className="post">
          {/* title */}
          <div className="market-title market-title--blue">
            Mặt hàng mới
          </div>
          {/* Content */}
          <div className="market-product-list">
            <div className="container">
              <div className="row">
                {/* item */}
                {
                  productList.map((product,index) => {
                    // console.log(product)
                    return (
                      <CartMarket key={index} product={product}/>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default MMSMarket;