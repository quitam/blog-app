import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FcAddImage } from 'react-icons/fc';
import axios from 'axios';

const cx = classNames.bind(styles);

const Register = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [avatar, setAvatar] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                fullname: fullName,
                email: email,
                password: password,
            });
            if (res.status === 200) {
                toast.dark('User has been created!');
            }
        } catch (error) {
            toast.dark(error.response.data);
        }
    };
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <span className="logo" style={{ fontSize: '24px' }}>
                        Tama Blog
                    </span>
                    <span className={cx('title')}>Sign up</span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        {password !== confirmPass && <span className={cx('err')}>Confirm password not match</span>}

                        <input style={{ display: 'none' }} type="file" id="file" onChange={handleUpload} />
                        <label htmlFor="file">
                            <FcAddImage size={30} />
                            {avatar ? <span>{avatar.name}</span> : <span>Add avatar</span>}
                        </label>
                        <button className={cx('signup-btn')} type="submit">
                            SIGN UP
                        </button>
                    </form>
                    <p>
                        If you already have an account.{' '}
                        <Link className={cx('link')} to="/login">
                            Login
                        </Link>{' '}
                        now
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
