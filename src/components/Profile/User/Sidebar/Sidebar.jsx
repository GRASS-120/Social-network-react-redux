import React from 'react';
import style from './Sidebar.module.css'
import FriendsList from './Widgets/FriendsList/FriendsList';

let Sidebar = ({}) => {
    return (
        <div className={style.user__sidebar}>
            <FriendsList/>
        </div>
    )
};

export default Sidebar;