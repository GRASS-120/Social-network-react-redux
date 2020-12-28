import React from 'react';
import style from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className={style.loading_animation}>
            <div className={style.loading_box}></div>
            <div className={style.loading_box}></div>
        </div>
    )
};

export default Preloader;