import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FcAddImage } from 'react-icons/fc';
import axios from 'axios';
import Swal from 'sweetalert2';

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
        toast.dark('Processing...');
        const avatarUrl = await upload();
        try {
            const res = await axios.post('/auth/register', {
                fullname: fullName,
                email: email,
                password: password,
                avatar: avatarUrl ? avatarUrl : '',
            });
            if (res.status === 200) {
                Swal.fire('Success', 'Signup success. Please login', 'success');
            }
            navigate('/login');
        } catch (error) {
            toast.dark(error.response.data);
        }
    };
    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setAvatar(img);
        }
    };
    const upload = async () => {
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('upload_preset', 'blog_app_react_avatar');
        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/dvj9yelrz/image/upload', formData);
            return res.data.secure_url;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <ToastContainer autoClose={3000} />
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

                        <input style={{ display: 'none' }} type="file" id="file" onChange={handleChangeImage} />
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
