import React from 'react';
import User from './User/UserContainer';
import style from './Profile.module.css';

const Content = ( {postsPage, dispatch} ) => {

    return (
      <div className={style.profile}>
        <User postsPage={postsPage} dispatch={dispatch}/> 
      </div>
    )
};

export default Content;