import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { LoginInput } from "../Common/FormsControls/FormsComponents";
import { requiredField, maxLengthCreator, emailValidation } from '../../utils/validators/validators';
import a from '../Common/FormsControls/FormsComponents.module.css'

const maxLength30 =  maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
                <div>
                    <Field component={LoginInput} name="email" type="text" placeholder="Email" validate={[requiredField, maxLength30, emailValidation]}/>
                </div>
                <div>
                    <Field component={LoginInput} name="password" type="password" placeholder="Password" validate={[requiredField, maxLength30]}/>
                </div>
                <div>
                    <Field component={LoginInput} name="rememberMe" type="checkbox"/>remember me
                </div>
                { error && <div className={a.formSummaryError}> {error} </div> }
                <div>
                    {/* <Field component='div' name="captcha"/> */}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm