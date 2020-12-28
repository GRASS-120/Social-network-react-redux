import React from 'react';
import style from './Post.module.css';
import userPhoto from '../../../../assets/img/6xQ6_ADKgiQ.jpg';

let Post = (props) => {

    let deletePost = () => {
        props.deletePost(props.id)
    };

    return (
        <div className={style.post}>
            <div className={style.post__inf}>
                <div className={style.post_author_avatar}>
                    <img alt="avatar" src={props.photo || userPhoto}></img>
                </div>
                <div className={style.post_author}>
                    <p className={style.p_post_author}>{props.name}</p>
                    <p className={style.post_date}>30 ноября 2019 в 23:40</p>
                </div>
                <p className={style.post_delete} onClick={deletePost}>
                    <i className="fas fa-times"></i>
                </p>
            </div>

            <div className={style.post__content}>
                <div className={style.post_text}>
                    <p className={style.p_post_text}> {props.message}</p>
                </div>
                 
            </div>
            <div className={style.post_menu}>
                <p>❤️{props.likes_count}</p>
            </div> 
        </div>
    )
};

export default Post;