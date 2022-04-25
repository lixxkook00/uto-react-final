
import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'

import './HeaderMobile.scss'

const mainContentList = [
    {
        id:"community",
        icon:"fas fa-users",
        name:"Cộng đồng",
    },
    {
        id:"services",
        icon:"fa-solid fa-puzzle-piece",
        name:"Dịch vụ",
    },
    {
        id:"",
        icon:"fa fa-cart-plus",
        name:"Sàn thương mại",
    },
    {
        id:"logistic",
        icon:"fa fa-ship",
        name:"Logistics",
    },
    {
        id:"edu",
        icon:"fa fa-graduation-cap",
        name:"Đào tạo",
    },
]

// Style Modal Search
const style = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:'none',
    p: 4,
};

function HeaderMobile(props) {
    // Handle Modal Search
    const [open, setOpen] = React.useState(false);
    const handleOpenSearch = () => setOpen(true);
    const handleCloseSearch = () => setOpen(false);

    // Handle Modal Cart Nav
    const [stateNav, setStateNav] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };
        
    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <List>
                <div className="cart-title">
                    <div className="cart-title-text nav-logo">
                       <img src="/img/uto logo image.png" alt="" />
                    </div>
                    <div className="cart-title-close">
                        <button className="clear-btn">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
            </List>
            <Divider />
            <div className="tempty-title mt-10">
                {
                    mainContentList.map((item,index) => {
                        return (
                            <Link key={index} to={`/${item.id}`} className="nav-item">
                                <div className="nav-item-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="nav-item-name">
                                    {item.name}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </Box>
    );

    // Handle Modal Cart
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };
        
    const modalCart = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className="cart-title">
                    <div className="cart-title-text">
                        Giỏ hàng
                    </div>
                    <div className="cart-title-close">
                        <button className="clear-btn">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </List>
            <Divider />
            <div className="tempty-title mt-10">
                <h1>Chưa có sản phẩm trong giỏ hàng</h1>
                <img src="./img/empty_cart.png" alt="" />
            </div>
        </Box>
    );

    return (

        <div className="header-mobile hide-on-pc">
            <a href="/" className="logo">
                <img src="./img/uto logo image.png" alt="" />
            </a>
           
           <div className="icons">
               <div className="icon" onClick={handleOpenSearch}>
                    <i className="fa fa-search"></i>
                </div>
                <div className="icon" onClick={toggleDrawer('right', true)}>
                    <i className="fa fa-shopping-bag"></i>
                    <span className="noti">
                        0
                    </span>
                </div>
                <div className="icon" onClick={toggleDrawerNav('left', true)}>
                    <i className="fas fa-bars"></i>
                </div>
           </div>


            {/* Modal Nav */}
            <Drawer
                anchor={'left'}
                open={stateNav['left']}
                onClose={toggleDrawerNav('left', false)}
            >
                {modalCartNav('left')}
            </Drawer>

            {/* Modal Search */}
            <Modal
                open={open}
                onClose={handleCloseSearch}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-close">
                        <div className="title">Tìm kiếm trên UTO</div>
                        <button className="clear-btn" onClick={handleCloseSearch}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="modal-input">
                        <input type="text" placeholder='Website, Phần mềm, . . .'/>
                        <button className="clear-btn ">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </Box>
            </Modal>

            {/* Modal Cart */}
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {modalCart('right')}
            </Drawer>
        </div>

        
    );
}

export default HeaderMobile;