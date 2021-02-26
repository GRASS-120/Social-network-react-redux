import React from 'react';
import LoginReduxForm from './LoginForm';
import style from './Login.module.css';

const Login = ({ login, captchaUrl, reloadCaptcha }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  return (
    <div className={style.login}>
      <div className={style.login__block}>
        <h1 className={style.login__title}>Login</h1>
        <LoginReduxForm
          onSubmit={onSubmit}
          captchaUrl={captchaUrl}
          reloadCaptcha={reloadCaptcha}
        />
      </div>
    </div>
  );
};

export default Login;
