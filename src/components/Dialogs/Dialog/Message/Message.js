import React from 'react';
import a from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={a.message}>
            <div id={a.message_avatar}>
                <img src="https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png"></img>
            </div>
            <div id={a.message_text}>
                <p> {props.message} </p>
            </div>
        </div>  
    )
}

export default Message