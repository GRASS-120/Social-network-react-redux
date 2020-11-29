import React from 'react';
import a from './Post.module.css'

let p = {
    "paddingLeft": "15px",
}

const Post = (props) => {
    return (
        <div className={a.post}>
                <div className={a.post_author_avatar}>
                    <img src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg"></img>
                </div>
                <div className={a.post_author}>
                    <p className={a.p_post_author}>Dolba Eb</p>
                    <p className={a.post_date}>30 ноября 2019 в 23:40</p>
                </div>
                <p className={a.post_delate}>❌</p>
                <hr></hr>
                <div className={a.post_text}>
                    <p className={a.p_post_text}> {props.message}</p>
                </div>  
                <hr></hr> 
                <p style={p}>❤️ {props.likes_count} </p>
            </div>
    )
}

export default Post