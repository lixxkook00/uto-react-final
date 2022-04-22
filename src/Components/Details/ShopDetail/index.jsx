import React,{ useState,useEffect,useRef} from 'react';
import './ShopDetail.scss'
import CartMarket from '../../Carts/CartMarket'
import MyData from '../../../data/data.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router';

let firstList = [];
let quantityProductPerPage = 9;

function ShopDetail(props) {

    let {_id} = useParams()

    const pageSection = useRef(null)
    const contentSection = useRef(null)

    
    // get first product list
    useEffect(() => {
        firstList =  MyData.product.filter((product) => product.shopID === _id)
    },[])
    
    // get quantity page
    const pageNum = (firstList.length%quantityProductPerPage) > 0 
                    ? Math.floor(firstList.length/quantityProductPerPage) +1 
                    : Math.floor(firstList.length/quantityProductPerPage)

    // handle pagination
    const [currentProductList,setCurrentProductList] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    // handle next/prev button
    const handleNextPrevButton = (action) => {
        switch (action) {
            case "Go to previous page":
                setCurrentPage(currentPage-1)
                break;
            case "Go to next page":
                setCurrentPage(currentPage+1)
                break
            default:
                break;
        }
    }

    useEffect(() => {
        contentSection.current.scrollIntoView()  
    })

    useEffect(() => {
        const currentProductListTemp = [...firstList]
        // get index of current page
        const firstProductIndex = (currentPage-1)*quantityProductPerPage;
        const lastProductIndex = (currentPage*quantityProductPerPage) >= (currentProductListTemp.length) 
                                ? currentProductListTemp.length 
                                : (currentPage*quantityProductPerPage)

        
        // create new product list
        const newProductList = currentProductListTemp.slice(firstProductIndex,lastProductIndex)

        // console.log(currentPage,firstProductIndex,lastProductIndex,firstList.length,newProductList)
        setCurrentProductList(newProductList)

        pageSection.current.scrollIntoView()  
    },[currentPage])


    return (
        <div className="shop-content" ref={contentSection}>
            {/* shop infor */}
            <div className="post">
                <div className="shop">
                    <div className="shop-cover">
                        <img src="./img/Hàng Mỹ Xách Tay.png" alt="" />
                    </div>
                    <div className="shop-back shop-detail">
                        <div className="shop-avt ">
                            <img src="./img/516D546A6B7A7239524E57524B6D554B425A78345938536D4B446B41347344737A653857697950484A7353333876.png" alt="" />
                            <div className="shop-infor-owner">
                                Quản lý bởi Kimmizin
                            </div>
                            <div className="shop-infor-500 hidden-tl hide-on-pc hidden-500plus">
                                <div className="shop-infor-name">
                                    Hàng Mỹ Xách Tay
                                </div>
                                <div className="shop-infor-id">
                                    {_id}
                                </div>
                            </div>
                        </div>
                        <div className="shop-infor">
                            <div className="shop-infor-name hidden-500">
                                Hàng Mỹ Xách Tay
                            </div>
                            <div className="shop-infor-id hidden-500">
                                {_id}
                            </div>
                            
                            <div className="shop-infor-address">
                                <i className="fa-solid fa-location-pin"></i>
                                Khu Nam Viên, Khu Biệt Thự Phú Mỹ Hưng Thành phố Hồ Chí Minh
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all product this shop */}
            <div className="post" ref={pageSection}>
                {/* title */}
                <div className="market-title market-title--blue">
                    tất cả sản phẩm
                </div>

                {/* product list */}
                <div className="container">
                    <div className="row">
                        
                        {
                            currentProductList.map((product,index) => {
                                return (
                                    <CartMarket key={index} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>

                {/* pagination */}
                <Stack spacing={2} className="col-xl-12">
                    <Pagination 
                        onChange={(e) => {
                            setCurrentPage(parseInt(e.target.innerText))
                            handleNextPrevButton(e.currentTarget.getAttribute("aria-label"))
                        }}
                        count={pageNum} 
                        color="primary" 
                    />
                </Stack>
            </div>
        </div>
    );
}

export default ShopDetail;