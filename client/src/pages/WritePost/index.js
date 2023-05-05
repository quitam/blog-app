import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './WritePost.module.scss';
import { FiUpload } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const cx = classNames.bind(styles);

const WritePost = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || '');
    const [text, setText] = useState(state?.desc || '');
    const [image, setimage] = useState(state?.img || null);
    const [cat, setCat] = useState(state?.cat || 'education');

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            img.preview = URL.createObjectURL(img);
            setimage(img.preview);
        }
    };
    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', image);
            const res = await axios.post('/upload', formData);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        try {
        } catch (error) {
            console.log(error);
        }
    };
    // useEffect(() => {
    //     //cleanup
    //     return () => {
    //         image && URL.revokeObjectURL(image.preview);
    //     };
    // }, [image]);

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
                    {image && <img src={image} alt="preview" className={cx('preview-image')} />}
                    {/* button clear image */}
                    {image && <TfiClose className={cx('btn-close')} onClick={() => setimage(null)} />}
                </div>
                <input
                    required
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className={cx('editor-container')}>
                    <ReactQuill className="editor" theme="snow" value={text} onChange={setText} />
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
                        <button className={cx('update')} onClick={handleSubmit}>
                            Post
                        </button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h1>Category</h1>
                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'education'}
                            id="education"
                            value="education"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="education">Education</label>
                    </div>

                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'food'}
                            id="food"
                            value="food"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="food">Food</label>
                    </div>

                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'technology'}
                            id="technology"
                            value="technology"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="technology">Technology</label>
                    </div>

                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'music'}
                            id="music"
                            value="music"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="music">Music</label>
                    </div>

                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'fashion'}
                            id="fashion"
                            value="fashion"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="fashion">Fashion</label>
                    </div>

                    <div className={cx('cat')}>
                        <input
                            type="radio"
                            name="cat"
                            checked={cat === 'sport'}
                            id="sport"
                            value="sport"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="sport">Sport</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritePost;
