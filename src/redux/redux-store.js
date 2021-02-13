import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
// import navReducer from './nav-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  // navPage: navReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
