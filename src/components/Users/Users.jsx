import React from 'react';
import style from './Users.module.css';
import Preloader from '../Common/Preloader/Preloader';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChange, followingProgress, follow, unfollow, ...props}) => {

    return (
        <div className={style.users}>

            { props.isFetching ? <Preloader/> : null }

            <div className={style.users__list}>
                {
                    props.users.map(u => <User key={u.id} u={u} followingProgress={followingProgress} follow={follow} unfollow={unfollow}/>)
                }
            </div>

            <Paginator totalItemCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>

        </div>
    )};

export default Users;