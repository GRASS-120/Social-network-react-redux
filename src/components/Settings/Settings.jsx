import React from 'react';
import style from './Settings.module.scss';

const Settings = () => (
  <div className={style.settings}>
    <div className={style.settings__menu}>
      <div className={style.settings__menu_item}>
        <p>item</p>
      </div>
    </div>
    <div className={style.settings__workplace}>settings</div>
  </div>
);

export default Settings;
