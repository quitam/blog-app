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
    console.log(cat);
    useEffect(() => {
        const fecthData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (error) {}
        };
        fecthData();
    }, [cat]);
    // const posts = [
    //     {
    //         id: 1,
    //         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    //         desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    //         img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     },
    //     {
    //         id: 2,
    //         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    //         desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    //         img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     },
    //     {
    //         id: 3,
    //         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    //         desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    //         img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     },
    //     {
    //         id: 4,
    //         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    //         desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    //         img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     },
    // ];

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
                            <p>{post.desc}</p>
                            <div className={cx('button')}>
                                <button onClick={() => navigate(`/post/${post.id}`)}>Read more</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
