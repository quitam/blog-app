import React, { useContext, useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './DetailPost.module.scss';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Recommend from '../../components/Recommend';
import { AuthContext } from '../../context/authContext';
import CustomAvatar from '../../components/CustomAvatar';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';

const cx = classNames.bind(styles);

const DetailPost = () => {
    const [post, setPost] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split('/')[2];
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [postId]);
    const handleClick = () => {
        Swal.fire({
            title: 'Are you sure you want to delete this post?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                toast.dark('Deleting...');
                try {
                    await axios.delete(`/posts/${postId}`);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Post deleted successfully',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } catch (err) {
                    console.log(err);
                }
            }
        });
    };
    return (
        <div className={cx('container')}>
            <ToastContainer autoClose={2000} />
            <div className={cx('content')}>
                {post.img && <img src={post.img} alt="" />}
                <div className={cx('user')}>
                    {post.fullname && <CustomAvatar avatar={post?.avatar} fullname={post?.fullname} />}
                    <div className={cx('info')}>
                        <span>{post.fullname}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser?.id === post.uid && (
                        <div className={cx('action')}>
                            <Link to={`/write-post?edit=2`}>
                                <div className={cx('btn', 'edit')}>
                                    <FiEdit3 size={18} />
                                </div>
                            </Link>
                            <div onClick={handleClick} className={cx('btn', 'delete')}>
                                <FiTrash2 size={18} />
                            </div>
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            <div className={cx('vertical-line')}></div>
            <div className={cx('recommend')}>
                <Recommend />
            </div>
        </div>
    );
};

export default DetailPost;
