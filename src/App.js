import React, { lazy } from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';
import './App.css';

import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/Common/Preloader/Preloader';

const Content = lazy(() => import('./components/Content/Content'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render(){

    if(!this.props.initialized){
      return <Preloader/>
    } 
      return (
        <div className="app-wrapper">
          <HeaderContainer/>   
          <Nav/>
              <Route path="/profile/:userId?" render={withSuspense(Content)}/> 
              <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
              <Route path="/news" render={ () => <News/> }/>
              <Route path="/music" render={ () => <Music/> }/>
              <Route path="/users" render={withSuspense(UsersContainer)}/>
              <Route path="/settings" render={ () => <Settings/> }/>
              <Route path="/login" render={ () => <Login/> }/>
        </div>
      )
    
  }  
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// Оборачиваем в withRouter для улучшения роутинга
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

let SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp