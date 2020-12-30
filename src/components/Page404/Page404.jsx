import React from 'react';
import style from './Page404.module.css';

let Page404 = (props) => {
    return (
        <div className={style.page404}>
            <p className={style.page404__title}>404 ERROR; PAGE NOT FOUND</p>
            <img className={style.page404__gif} src="https://24.media.tumblr.com/b7ae6c694085e0b294cdd938278c70c7/tumblr_mpupx1krXM1s3jc4vo1_400.gif" alt="error"></img>
        </div>
    )
};

export default Page404;