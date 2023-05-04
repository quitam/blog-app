import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Recommend = ({ cat, post }) => {
    const [recommend, setRecommend] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setRecommend(res.data.filter((item) => item.id !== post.id).slice(0, 5));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [cat, post.id]);

    return (
        <div className={cx('container')}>
            <h1>Other posts the same</h1>
            {recommend.length > 0 &&
                recommend.map((post) => (
                    <div className={cx('post')} key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <img src={post.img} alt="" />
                        </Link>
                        <Link to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <div className={cx('wrap-btn')}>
                            <button onClick={() => navigate(`/post/${post.id}`)}>Read more</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Recommend;
