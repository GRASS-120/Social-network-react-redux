import React from 'react';
import a from "./Dialog.module.css"
import {NavLink} from 'react-router-dom'

const Dialog = (props) => {

    return (

        <NavLink to={"/dialogs/" + props.id}>
            <div className={a.dialog}>
                <div className={a.dialog_img}>
                    <img src="https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png"></img>
                </div>
                <div className={a.dialog_name}>
                    <p> {props.name} </p>
                </div>
            </div>
        </NavLink>

    )
}

export default Dialog