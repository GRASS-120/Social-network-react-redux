import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reset } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import LoginReduxForm from './LoginForm';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData.captcha)
    }

    if (props.isAuth === true){ 
        return <Redirect to="/profile"/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        ) 
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: login})(Login)