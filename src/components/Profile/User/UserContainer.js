import React, { useEffect } from 'react';
import User from './User';
import { connect } from 'react-redux';
import { setUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../../redux/posts-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';

const UserContainer = (props) => {

  useEffect(() => {
    let userId = props.match.params.userId

    if (!userId){
          userId = props.authUserId;
          if (!userId){
            // Один из вариантов редиректа, но лучше Redirect
            props.history.push("/login")
          }
        }
    
        props.setUserProfile(userId);
        props.getUserStatus(userId);
  }, [props]);

  return (
      <User
        {...props}
        isOwner={!props.match.params.userId}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
  )
};

let mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
  status: state.postsPage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps,
    {
      setUserProfile,
      getUserStatus,
      updateUserStatus,
      savePhoto,
      saveProfile,
    }),
  withRouter,
  // withAuthRedirect,
)(UserContainer);