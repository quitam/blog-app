import React from 'react';

import classNames from 'classnames/bind';
import styles from './DetailPost.module.scss';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Recommend from '../../components/Recommend';

const cx = classNames.bind(styles);

const DetailPost = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <img
                    src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <div className={cx('user')}>
                    <img
                        src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
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
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae dolor, repudiandae quae
                    minima natus optio illum nemo totam a, molestiae quaerat fugit atque, quod magnam vero quas?
                    Aspernatur, blanditiis!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi necessitatibus enim expedita
                    doloremque dolorum quas sapiente unde consequuntur, a, commodi officia. Soluta quis totam itaque in
                    magni eos accusamus.
                    <br />
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, eius numquam ratione unde cum
                    laborum cumque. Nulla rerum, explicabo ipsa, deserunt beatae neque, molestiae laboriosam laborum
                    accusantium officia omnis ullam.
                    <br />
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, eius numquam ratione unde cum
                    laborum cumque. Nulla rerum, explicabo ipsa, deserunt beatae neque, molestiae laboriosam laborum
                    accusantium officia omnis ullam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
                    eius numquam ratione unde cum laborum cumque. Nulla rerum, explicabo ipsa, deserunt beatae neque,
                    molestiae laboriosam laborum accusantium officia omnis ullam.
                </p>
            </div>
            <div className={cx('vertical-line')}></div>
            <div className={cx('recommend')}>
                <Recommend />
            </div>
        </div>
    );
};

export default DetailPost;
