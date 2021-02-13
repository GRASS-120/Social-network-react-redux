import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../API/samuraiAPI';
import { PayloadType } from '../types/types';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

export type AuthInitStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null; // если null, значит капча не нужна
};

const initialState: AuthInitStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

//?-- Reducer --//

const authReducer = (state = initialState, action: any): AuthInitStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

//?-- Action creators --//

type SetAuthUserDataRequest = {
  type: typeof SET_USER_DATA;
  payload: PayloadType;
};
export const setAuthUserDataRequest = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataRequest => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

type GetCaptchaUrlType = {
  type: typeof GET_CAPTCHA_URL;
  payload: { captchaUrl: string };
};
export const getCaptcha = (captchaUrl: string): GetCaptchaUrlType => ({
  type: GET_CAPTCHA_URL,
  payload: { captchaUrl },
});

//?-- Thunks --//

// авторизация
export const getAuthUserData = () => {
  return async (dispatch: any) => {
    let data = await authAPI.authRequest();

    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserDataRequest(id, email, login, true));
    }
  };
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => async (dispatch: any) => {
  let data = await authAPI.loginRequest(email, password, rememberMe, captcha);

  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let errorMessage =
      data.messages.length > 0 ? data.messages[0] : 'Some error';

    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
      dispatch(stopSubmit('login', { captcha: errorMessage }));
    } else {
      dispatch(stopSubmit('login', { _error: errorMessage }));
    }
  }
};

export const logout = () => async (dispatch: any) => {
  let data = await authAPI.logoutRequest();

  if (data.resultCode === 0) {
    dispatch(setAuthUserDataRequest(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let data = await securityAPI.getCaptchaUrlRequest();
  const captchaUrl = data.url;

  dispatch(getCaptcha(captchaUrl));
};

export const reloadCaptcha = () => async (dispatch: any) => {
  dispatch(getAuthUserData());
};

export default authReducer;
