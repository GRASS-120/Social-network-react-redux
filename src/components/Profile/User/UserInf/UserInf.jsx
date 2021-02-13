import React from 'react';
import Contacts from '../Contacts';
import UserStatus from '../UserStatus';
import style from '../User.module.css';

let UserInf = ({
  profile,
  isOwner,
  updateUserStatus,
  status,
  activeEditMode,
}) => {
  return (
    <div className={style.user__inf}>
      <p className={style.user__name}>{profile.fullName}</p>

      <UserStatus
        status={status}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
      />

      <div>
        <p className={style.user__job}>
          My skills: {profile?.lookingForAJobDescription}
        </p>
      </div>

      <div>
        <p className={style.user__description}>About me: {profile?.aboutMe}</p>
      </div>

      {isOwner && (
        <button className={style.contacts__edit} onClick={activeEditMode}>
          Edit profile <i className="fas fa-user-cog"></i>
        </button>
      )}

      <div>
        <p>Contacts:</p>
        <div>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contacts
                key={key}
                contacts={profile.contacts[key]}
                contactsName={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInf;
