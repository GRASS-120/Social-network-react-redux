import React, { lazy } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';
import './App.scss';

import Nav from './components/Nav/Nav.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/Common/Preloader/Preloader';
import Page404 from './components/Page404/Page404';
import SettingsContainer from './components/Settings/SettingsContainer';

const Profile = lazy(() => import('./components/Profile/Profile'));
const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  catchAllUnHandlerErrors = (reason) => {
    // console.log(reason.reason.message)
    // alert("some error detected!")
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnHandlerErrors);
  }

  // убираем мусор - отписка от event'a
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnHandlerErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <Switch>
          {/* Начальная страница */}
          <Route exact path="/" render={() => <Redirect to="/profile" />} />

          <Route path="/profile/:userId?" render={withSuspense(Profile)} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/settings" render={() => <SettingsContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="*" render={() => <Page404 />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

// Оборачиваем в withRouter для улучшения роутинга
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
