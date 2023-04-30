import React from 'react';

import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';

const cx = classNames.bind(styles);

const Recommend = () => {
    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
    ];
    return (
        <div className={cx('container')}>
            <h1>Other posts the same</h1>
            {posts.map((post) => (
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
