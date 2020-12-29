import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null  // если null, значит капча не нужна
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            }
        }
            default:
                return state
    }
};

export const setAuthUserDataRequest = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getCaptcha = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

// авторизация
export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.authRequest()

        if (data.resultCode === 0){
            let {id, email, login} = data.data
            dispatch(setAuthUserDataRequest(id, email, login, true));
        }
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.loginRequest(email, password, rememberMe, captcha)

    if (data.resultCode === 0){
        dispatch(getAuthUserData())
    }
    
    else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"

        if (data.resultCode === 10){
            dispatch(getCaptchaUrl())
            dispatch(stopSubmit('login', {"captcha": errorMessage}))
        } else {
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }
};

export const logout = () => async (dispatch) =>  {
    let data = await authAPI.logoutRequest()

    if (data.resultCode === 0){
        dispatch(setAuthUserDataRequest(null, null, null, false));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrlRequest()
    const captchaUrl = data.url

    dispatch(getCaptcha(captchaUrl))
};

export const reloadCaptcha = () => async (dispatch) => {
    dispatch(getAuthUserData())
};

export default authReducer;