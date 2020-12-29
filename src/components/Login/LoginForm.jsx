import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { LoginInput } from "../Common/FormsControls/FormsComponents";
import { requiredField, maxLengthCreator, emailValidation } from '../../utils/validators/validators';
import a from '../Common/FormsControls/FormsComponents.module.css';
import style from './Login.module.css';

const maxLength30 =  maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaUrl, reloadCaptcha}) => {
    return (
        <form onSubmit={handleSubmit}>

            { error && <div className={a.formSummaryError}>{error}</div> }

            <div className={style.login__item}>
                <Field component={LoginInput} name="email" type="text" placeholder="Email" validate={[requiredField, maxLength30, emailValidation]}/>
            </div>

            <div className={style.login__item}>
                <Field component={LoginInput} name="password" type="password" placeholder="Password" validate={[requiredField, maxLength30]}/>
            </div>

            <div className={style.login__item}>
                <Field component={LoginInput} name="rememberMe" type="checkbox"/>
                {/* <span>remember me</span> */}
            </div>

            { captchaUrl && <div>
                <img className={style.login__item} src={captchaUrl} alt="captcha"/>
                <div className={style.login__item}>
                    <Field component={LoginInput} name="captcha" type="text" placeholder="Captcha"/>
                </div>
                <button onClick={reloadCaptcha} className={style.login__new_captcha}>new captcha</button>
            </div>  
            }
            <button className={style.login__button}>Login</button>
        </form>
    ) 
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm