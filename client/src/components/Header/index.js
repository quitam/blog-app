import React from 'react';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../assets/logo/logo.png';
import { IoCreate } from 'react-icons/io5';

const cx = classNames.bind(styles);

const Header = () => {
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
                    <div className={cx('profile')}>
                        <span>PROFILE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
