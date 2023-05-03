import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

const Recommend = ({ cat, post }) => {
    const [recommend, setRecommend] = useState([]);
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
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <div className={cx('wrap-btn')}>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Recommend;
