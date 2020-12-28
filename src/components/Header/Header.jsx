import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

// как работают названия классов в css модулях
let classes = {
    'header': 'Header_header__2zYJg',  // изначальное простое название класса:
    'logo': 'Header_logo__3qQ0a',      // новое, сложное и уникальное название,
}                                      // которое генерирует браузер

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="logo"></img>
            </div> 
            <div className={style.login_block}>
                { props.isAuth === false ?
                    <NavLink to='/login' className="login_text">Login</NavLink> 
                :   <div className={style.login_ing}>
                        <NavLink to='/profile' className="login_text">{props.login}</NavLink>
                        <button className={style.login_button} onClick={props.logout}>logout</button>
                    </div> }
                
            </div>
        </header>
    ); 
};

export default Header;