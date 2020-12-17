import React from 'react';
import a from './User.module.css'
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../Common/Preloader/Preloader';
import UserStatusWithHooks from './UserStatusWithHooks';
import userPhoto from '../../../assets/img/6xQ6_ADKgiQ.jpg';
import UserStatus from './UserStatus';

let User = (props) => {

    if (!props.profile) {
      return <Preloader />
    }

    let onMainPhotoSelected = (e) => {
      if(e.target.files.length){
        props.savePhoto(e.target.files[0])
      }
    };

    return (
      <div className={a.user}>
        <div className = {a.user__avatar}>
          <img src={props.profile.photos.large || userPhoto} alt="img"></img>
        </div>
        <div>
          {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}    
        </div>
        <div className={a.user__inf}>
          <p className={a.user__name}>{props.profile.fullName}</p>

          <UserStatus status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>

          <p className={a.user__date_birth}>{props.profile?.lookingForAJobDescription}</p>
          <p className={a.user__city}>City: New York🗽</p>
          <p className={a.user__education}>Education: Cambridge, Software Engineer👨‍🎓</p>
        </div>
        <hr></hr>

        <PostsContainer postsPage={props.postsPage} dispatch={props.dispatch}/>
     
      </div>
  )};

export default User;