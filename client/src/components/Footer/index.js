import React from 'react';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Logo from '../../assets/logo/logo.png';
import { FiBookOpen, FiMail, FiPhone } from 'react-icons/fi';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <img src={Logo} alt="Logo" />
            <span>Made by Tam with ReactJS</span>
            <div className={cx('about-me')}>
                <span className={cx('about-item')}>
                    <FiBookOpen />
                    HCMC University of Technology and Education
                </span>
                <span className={cx('about-item')}>
                    <FiMail />
                    tamphamasd@gmail.com
                </span>
                <span className={cx('about-item')}>
                    <FiPhone />
                    0813 931 040
                </span>
            </div>
        </div>
    );
};

export default Footer;
