import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './WritePost.module.scss';
import { FiUpload } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';

import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';

const cx = classNames.bind(styles);

const WritePost = () => {
    const navigate = useNavigate();
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || '');
    const [text, setText] = useState(state?.desc || '');
    const [image, setimage] = useState(state?.img || null);
    const [cat, setCat] = useState(state?.cat || 'education');

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            img.preview = URL.createObjectURL(img);
            setimage(img);
        }
    };
    const upload = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'blog_app_react_post');
        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/dvj9yelrz/image/upload', formData);
            setimage(res.data.secure_url);
            return res.data.secure_url;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.dark('Processing...');

        const imgUrl = await upload();
        try {
            if (state) {
                const res = await axios.put(`/posts/${state.id}`, {
                    title,
                    desc: text,
                    cat,
                    img: image
                        ? imgUrl
                        : 'https://res.cloudinary.com/dvj9yelrz/image/upload/v1683411629/post-image/o2p2z5ev0thr4y04rmpg.jpg',
                });
                Swal.fire('Updated', res.data, 'success');
            } else {
                const res = await axios.post(`/posts`, {
                    title,
                    desc: text,
                    cat,
                    img: image
                        ? imgUrl
                        : 'https://res.cloudinary.com/dvj9yelrz/image/upload/v1683411629/post-image/o2p2z5ev0thr4y04rmpg.jpg',
                    date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                });
                Swal.fire('Posted', res.data, 'success');
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        //cleanup
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    }, [image]);

    return (
        <div className={cx('container')}>
            <ToastContainer autoClose={3000} />
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
                    {image && (
                        <img
                            src={image.preview ? image.preview : image}
                            alt="preview"
                            className={cx('preview-image')}
                        />
                    )}
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
                            {state ? 'Update' : 'Post'}
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
