import React, { useContext, useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './DetailPost.module.scss';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Recommend from '../../components/Recommend';
import { AuthContext } from '../../context/authContext';
import CustomAvatar from '../../components/CustomAvatar';
import axios from 'axios';
import moment from 'moment';

const cx = classNames.bind(styles);

const DetailPost = () => {
    const [post, setPost] = useState({});
    const location = useLocation();
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
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                {post.img && <img src={post.img} alt="" />}
                <div className={cx('user')}>
                    {post.fullname && <CustomAvatar avatar={post?.avatar} fullname={post?.fullname} />}
                    <div className={cx('info')}>
                        <span>{post.fullname}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.id === post.uid && (
                        <div className={cx('action')}>
                            <Link to={`/write-post?edit=2`}>
                                <div className={cx('btn', 'edit')}>
                                    <FiEdit3 size={18} />
                                </div>
                            </Link>
                            <div className={cx('btn', 'delete')}>
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
