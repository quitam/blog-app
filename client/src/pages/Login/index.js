import React, { useContext, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/authContext';

const cx = classNames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login({
                email: email,
                password: password,
            });
            if (res.status === 200) {
                toast.dark('Login success');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            toast.dark(error.response.data);
        }
    };
    return (
        <div className={cx('container')}>
            <ToastContainer />
            <div className={cx('wrapper')}>
                <span className="logo" style={{ fontSize: '24px' }}>
                    Tama Blog
                </span>
                <span className={cx('title')}>Login</span>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        required
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        required
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
