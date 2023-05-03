import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../assets/logo/logo.png';
import { IoCreate } from 'react-icons/io5';
import { Menu, MenuItem } from '@mui/material';
import { MdEditNote, MdLogout } from 'react-icons/md';
import { AuthContext } from '../../context/authContext';

const cx = classNames.bind(styles);

const Header = () => {
    const { currentUser, logout, ContextAvatar } = useContext(AuthContext);
    console.log(currentUser);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('blog-logo')}>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className={cx('nav')}>
                    <div className={cx('categories')}>
                        <Link className={cx('category-item')} to="/?cat=education">
                            <h5>education</h5>
                        </Link>
                        <Link className={cx('category-item')} to="/?cat=food">
                            <h5>food</h5>
                        </Link>
                        <Link className={cx('category-item')} to="/?cat=technology">
                            <h5>technology</h5>
                        </Link>
                        <Link className={cx('category-item')} to="/?cat=music">
                            <h5>music</h5>
                        </Link>
                        <Link className={cx('category-item')} to="/?cat=fashion">
                            <h5>fashion</h5>
                        </Link>
                        <Link className={cx('category-item')} to="/?cat=sport">
                            <h5>sport</h5>
                        </Link>
                    </div>
                    <div className={cx('create')}>
                        <Link to="/write-post">
                            <IoCreate className={cx('icon')} />
                        </Link>
                    </div>
                    {currentUser && (
                        <div>
                            <div className={cx('profile')} onClick={handleClick}>
                                {/* <Avatar src={currentUser.avatar} {...stringAvatar(currentUser.fullname)} /> */}
                                <ContextAvatar />
                            </div>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <span className={cx('fullname')}>{currentUser.fullname}</span>
                                <MenuItem>
                                    <div className={cx('menu-item')}>
                                        <MdEditNote size={20} /> Edit profile
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <div className={cx('menu-item')}>
                                        <MdLogout size={20} /> Logout
                                    </div>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                    {!currentUser && (
                        <div className={cx('profile')}>
                            <Link className={cx('profile-item')} to="/login">
                                <span>Login</span>
                            </Link>
                            <Link className={cx('profile-item')} to="/register">
                                <span>Signup</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
