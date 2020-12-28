import React, {useState} from 'react';
import style from './User.module.css';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/img/6xQ6_ADKgiQ.jpg';
import Sidebar from './Sidebar/Sidebar';
import UserInf from './UserInf/UserInf';
import UserInfFormRedux from './UserInf/UserInfForm';

let User = (props) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
      
      props.saveProfile(formData).then(() => {
        setEditMode(false)
      })
    }

    if (!props.profile) {
      return <Preloader/>
    };

    let onMainPhotoSelected = (e) => {
      if(e.target.files.length){
        props.savePhoto(e.target.files[0])
      }
    };

    return (
      <div className={style.user}>
          <div className={style.user__avatar}>
              <img src={props.profile.photos.large || userPhoto} alt="img"></img>
              <div className={style.user__photo_change}>
                  {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}    
              </div>
          </div>

          { editMode
            ? <UserInfFormRedux
                initialValues={props.profile}
                profile={props.profile}
                isOwner={props.isOwner}
                updateUserStatus={props.updateUserStatus}
                status={props.status}
                deactiveEditMode={() => setEditMode(false)}
                onSubmit={onSubmit}
              />
            : <UserInf
                profile={props.profile}
                isOwner={props.isOwner}
                updateUserStatus={props.updateUserStatus}
                status={props.status}
                activeEditMode={() => setEditMode(true)}
              />
          }

          <Sidebar/>

          <PostsContainer/>
     
      </div>
)};

export default User;