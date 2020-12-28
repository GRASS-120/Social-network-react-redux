import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './User.module.css';
import userPhoto from '../../../assets/img/6xQ6_ADKgiQ.jpg';

let User = ({u, followingProgress, follow, unfollow}) => {
    return (
        <div className={style.users_item}>
            <div className={style.left_block}>
                <NavLink to={`/profile/${u.id}`}>
                    <img alt="user" src={ u.photos.small || userPhoto} className={style.user_img}/>
                </NavLink>
                { u.followed ?

                 <button disabled={followingProgress.some(id => id === u.id)} onClick={ () => { unfollow(u.id)} }
                    className={style.unfollow_button}>UNFOLLOW</button> :

                 <button disabled={followingProgress.some(id => id === u.id)} onClick={ () => { follow(u.id)} }
                    className={style.follow_button}>FOLLOW</button> 
                }
            </div>
            <div className={style.right_block}>
                <div className={style.user_inf}>
                    <p className={style.name}>{u.name}</p>
                </div>
                <div className={style.user_status}>
                    <p>status: {u.status !== null ? u.status : 'none'}</p>
                </div>
            </div>
        </div>
    )
};

export default User;