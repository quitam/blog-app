import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './WritePost.module.scss';
import { FiUpload } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const cx = classNames.bind(styles);

const WritePost = () => {
    const [value, setValue] = useState('');
    const [image, setimage] = useState(null);

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            img.preview = URL.createObjectURL(img);
            setimage(img);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('wrap-image')}>
                    {/* show label if don't have image */}
                    {!image && (
                        <div>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                name="file"
                                id="file"
                                onChange={handleChangeImage}
                            />
                            <label className={cx('file')} htmlFor="file">
                                <span>Upload Image</span>
                                <span>
                                    <FiUpload size={20} />
                                </span>
                            </label>
                        </div>
                    )}
                    {/* preview image */}
                    {image && <img src={image.preview} alt="preview" className={cx('preview-image')} />}
                    {/* button clear image */}
                    {image && <TfiClose className={cx('btn-close')} onClick={() => setimage(null)} />}
                </div>
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

                    <div className={cx('actions')}>
                        <button className={cx('save')}>Save as a draft</button>
                        <button className={cx('update')}>Update</button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h1>Category</h1>
                    <div className={cx('cat')}>
                        <input type="radio" name="cat" id="education" value="education" defaultChecked />
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
