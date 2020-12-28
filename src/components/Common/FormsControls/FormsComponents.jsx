import React from 'react';
import a from './FormsComponents.module.css';

let FormsControl = ({input, meta: {touched, error}, child, className, ...props}) => {
    
    let hasError = touched && error

    return (
        <div className={a[className] + " " + (hasError ? a.error :  "")}>
            {props.children}
            { hasError && <span style={{"marginLeft": "10px"}}>{error}</span> }
        </div>
    );
};

export let AddPostInput = (props) => {
    const {input, meta, child, ...restProps} = props
    return(<FormsControl className={"login"} {...props}><input {...restProps} {...input}/></FormsControl>)
};

export let AddMessageInput = (props) => {
    const {input, meta, child, classInput, ...restProps} = props
    return(<FormsControl className={"login"} {...props}><input {...restProps} {...input}/></FormsControl>)
};

export let LoginInput = (props) => {
    const {input, meta, child, classInput, ...restProps} = props
    return(<FormsControl className={"login"} {...props}><input {...restProps} {...input}/></FormsControl>)
};

export let ProfileInput = (props) => {
    const {input, meta, child, classInput, ...restProps} = props
    return(<FormsControl className={"profile_input"} {...props}><input {...restProps} {...input}/></FormsControl>)
};

