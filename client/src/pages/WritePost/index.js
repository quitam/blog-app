import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './WritePost.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const cx = classNames.bind(styles);

const WritePost = () => {
    const [value, setValue] = useState('');

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <input type="text" placeholder="Title" />
                <div className={cx('editor-container')}>
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('item')}>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{ display: 'none' }} type="file" name="file" id="file" />
                    <label className={cx('file')} htmlFor="file">
                        Upload Image
                    </label>
                    <div className={cx('actions')}>
                        <button className={cx('save')}>Save as a draft</button>
                        <button className={cx('update')}>Update</button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h1>Category</h1>
                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="education" value="education" />
                        <label htmlFor="education">Education</label>
                    </div>

                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="food" value="food" />
                        <label htmlFor="food">Food</label>
                    </div>

                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="technology" value="technology" />
                        <label htmlFor="technology">Technology</label>
                    </div>

                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="music" value="music" />
                        <label htmlFor="music">Music</label>
                    </div>

                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="fashion" value="fashion" />
                        <label htmlFor="fashion">Fashion</label>
                    </div>

                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="sport" value="sport" />
                        <label htmlFor="sport">Sport</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritePost;
