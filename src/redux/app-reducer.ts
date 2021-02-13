// import { reset, stopSubmit } from 'redux-form';
// import { authAPI } from '../API/api';
import { getAuthUserData } from './auth-reducer';

const INITIALIZED = 'INITIALIZED';

export type AppInitStateType = {
  initialized: boolean;
};

const initialState: AppInitStateType = {
  initialized: false,
};

const appReducer = (
  state = initialState,
  action: { type: typeof INITIALIZED }
): AppInitStateType => {
  switch (action.type) {
    case INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED });

export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
