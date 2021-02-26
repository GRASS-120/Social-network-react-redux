import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, reloadCaptcha } from '../../redux/auth-reducer.ts';
import Login from './Login';

const LoginContainer = (props) => {
  if (props.isAuth === true) {
    return <Redirect to="/profile" />;
  }
  return (
    <Login
      login={props.login}
      captchaUrl={props.captchaUrl}
      reloadCaptcha={props.reloadCaptcha}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, reloadCaptcha })(
  LoginContainer
);
