import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
  const RedirectComponent = ({ isAuth }, ...props) => {
    // Редирект на страницу с авторизацией
    if (!isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
