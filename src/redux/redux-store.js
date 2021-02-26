import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './posts-reducer.ts';
import dialogsReducer from './dialogs-reducer.ts';
// import navReducer from './nav-reducer';
import usersReducer from './users-reducer.ts';
import appReducer from './app-reducer.ts';
import authReducer from './auth-reducer.ts';

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
