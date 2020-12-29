import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, reloadCaptcha } from '../../redux/auth-reducer';
import LoginReduxForm from './LoginForm';
import style from './Login.module.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth === true){ 
        return <Redirect to="/profile"/>
        
    } else {
        return (
            <div className={style.login}>
                <h1 className={style.login__title}>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} reloadCaptcha={props.reloadCaptcha}/>
            </div>
        ) 
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login, reloadCaptcha})(Login);