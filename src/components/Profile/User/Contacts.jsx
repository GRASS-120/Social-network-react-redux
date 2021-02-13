import React from 'react';
import style from './User.module.css';

let Contacts = ({ contacts, contactsName }) => {
  return (
    <div className={style.contacts}>
      <span className={style.contacts__title}>{contactsName}: </span>
      <span>{contacts}</span>
    </div>
  );
};

export default Contacts;
