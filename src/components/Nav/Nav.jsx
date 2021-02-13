import React from 'react';
import { NavLink } from 'react-router-dom';
import a from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={a.nav}>
      <NavLink to="/profile" activeClassName={a.active}>
        <div>Profile❄️</div>
      </NavLink>

      <NavLink to="/dialogs" activeClassName={a.active}>
        <div>Messages✉️</div>
      </NavLink>

      <NavLink to="/news" activeClassName={a.active}>
        <div>News📃</div>
      </NavLink>

      <div>
        <NavLink to="/music" activeClassName={a.active}>
          <div>Videos🎥</div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/music" activeClassName={a.active}>
          <div>Music🎵</div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/users">
          <div id={a.friends}>Find users🔎</div>
        </NavLink>
      </div>

      <hr />

      <div>
        <NavLink to="/settings" activeClassName={a.active}>
          <div>Settings⚙️</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
