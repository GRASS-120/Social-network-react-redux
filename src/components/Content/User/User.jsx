import React from 'react';
import a from './User.module.css'
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../Common/Preloader/Preloader';
import UserStatusWithHooks from './UserStatusWithHooks';

let User = (props) => {

    if (!props.profile) {
      return <Preloader />
    }

    return <div className={a.user}>

      <div className = {a.user__avatar}>
        <img src={props.profile.photos.large}></img>
      </div>
      <div className={a.user__inf}>
        <p className={a.user__name}>{props.profile.fullName}</p>

        <UserStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>

        {props.profile.lookingForAJob == true ? <p className={a.user__date_birth}>{props.profile.lookingForAJobDescription}</p> : null}

        <p className={a.user__city}>City: New York🗽</p>
        <p className={a.user__education}>Education: Cambridge, Software Engineer👨‍🎓</p>
      </div>
      <hr></hr>

     <PostsContainer postsPage={props.postsPage} dispatch={props.dispatch}/>
     
    </div>
}

export default User