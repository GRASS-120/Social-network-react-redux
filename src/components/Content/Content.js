import React from 'react';
import User from './User/UserContainer';
import a from './Content.module.css';

const Content = ( {postsPage, dispatch} ) => {

    return (
      <div className={a.content}>
        <div className={a.content__img}>
          <img src = "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-blue-flat-geometric-creative-banner-image_147604.jpg"></img>
        </div>

        <User postsPage={postsPage} dispatch={dispatch}/> 

      </div>
    )
}

export default Content;