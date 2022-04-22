import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import {Link} from 'react-router-dom'

import {useState} from 'react';
import './Header.scss'

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

function Header({handleSelectSection,sectionIndex}) {
    
    // Handle Modal Search
    const [open, setOpen] = React.useState(false);
    const handleOpenSearch = () => setOpen(true);
    const handleCloseSearch = () => setOpen(false);

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

    const handleActiveMainContent = (index) => {
        // Handle Select section
        handleSelectSection(index);
    
    }

    // popover
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPop = Boolean(anchorEl);
    const id = openPop ? 'simple-popover' : undefined;


    return (
        <header className="header">
            {/* Logo Left*/}
            <a href="/" className="header-logo">
                <img src="./img/uto logo image.png" alt="" />
            </a>

            {/* Main Content */}
            <div className="header-main">
                {
                    mainContentList.map((item,index) =>{
                        return (
                            <Link to={`/${item.id}`} key={index} href onClick={() => {
                                handleActiveMainContent(index);
                                // handleSelectSection(index);
                                }} className={`header-main-item ${index===sectionIndex ? 'active' : ''}`}>
                                <i className={item.icon}></i>
                                <div className="header-main-name">{item.name}</div>
                            </Link>
                        );
                    })
                }
            </div>

            {/* Option Right */}
            <div className="header-right">
                <div className="header-right-item" onClick={handleOpenSearch}>
                    <i className="fa fa-search"></i>
                </div>

                <div className="header-right-item" onClick={toggleDrawer('right', true)}>
                    <i className="fa fa-shopping-bag"></i>
                    <span className="noti">
                        0
                    </span>
                </div>

                <div onClick={handleClick} aria-describedby={id} className="header-right-item">
                    <i className="fa fa-user"></i>
                </div>
            </div>
            
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

            {/* User Popover */}
            <Popover
                id={id}
                open={openPop}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>
                    <a href="https://" className="user-item">
                        <div className="user-item-icon">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="user-item-title">
                            <span>Đăng nhập</span>
                        </div>
                    </a>
                    
                    <a href="https://" className="user-item">
                        <div className="user-item-icon">
                            <i className="fa-solid fa-store"></i>
                        </div>
                        <div className="user-item-title">
                            <span>Quản lý cửa hàng</span>
                        </div>
                    </a>
                </Typography>
            </Popover>

        </header>
    );
}

export default Header;