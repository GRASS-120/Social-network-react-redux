import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Settings from './Settings';

const SettingsContainer = (props) => {
  if (props.isAuth === true) {
    return <h1>d</h1>;
  }
  return <Settings />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {}),
  withAuthRedirect
)(SettingsContainer);
