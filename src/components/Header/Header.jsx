import React from 'react';
import a from './Header.module.css';
import { NavLink } from 'react-router-dom';

// как работают названия классов в css модулях
let classes = {
    'header': 'Header_header__2zYJg',  // изначальное простое название класса:
    'logo': 'Header_logo__3qQ0a',      // новое, сложное и уникальное название,
}                                      // которое генерирует браузер

const Header = (props) => {
    return (
        <header className={a.header}>
            <div className={a.logo}>
                <img src="https://lh3.googleusercontent.com/proxy/0ClcIHkUHKVfo8FnfhxnpaOKE-A1SpHH6heAMdH7rprogZmo9BDQbekNl3BvQt-mRS18fQ6y4obnqNXRlLNYre3p7jJ6_1hpYTXwkXnEgm7LZ7OB0ZI"></img>
            </div> 
            <div className={a.login_block}>
                { props.isAuth === false ?
                    <NavLink to='/login' className="login_text">Login</NavLink> 
                :   <div>{props.login}<button onClick={props.logout}>logout</button></div> }
                
            </div>
        </header>
    ); 
};

export default Header;