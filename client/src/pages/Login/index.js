import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { toast, ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    };
    return (
        <div className={cx('container')}>
            <ToastContainer autoClose={3000} />
            <div className={cx('wrapper')}>
                <span className="logo" style={{ fontSize: '24px' }}>
                    Tama Blog
                </span>
                <span className={cx('title')}>Login</span>
                <form onSubmit={handleLogin}>
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('login-btn')} type="submit">
                        LOGIN
                    </button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <Link className={cx('link')} to="/register">
                        Signup
                    </Link>{' '}
                    now
                </p>
            </div>
        </div>
    );
};

export default Login;
