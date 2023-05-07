import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;

    const parseText = (text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        return doc.body.textContent;
    };

    useEffect(() => {
        const fecthData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (error) {}
        };
        fecthData();
    }, [cat]);

    return (
        <div className={cx('container')}>
            <div className={cx('list-post')}>
                {posts.map((post) => (
                    <div className={cx('post')} key={post.id}>
                        <div className={cx('post-img')}>
                            <img src={post.img} alt="" onClick={() => navigate(`/post/${post.id}`)} />
                        </div>
                        <div className={cx('post-content')}>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{parseText(post.desc)}</p>
                            <div className={cx('button')}>
                                <button onClick={() => navigate(`/post/${post.id}`)}>Read more</button>
                            </div>
                        </div>
                    </div>
                ))}
                {posts.length === 0 && <span>No post</span>}
            </div>
        </div>
    );
};

export default Home;
