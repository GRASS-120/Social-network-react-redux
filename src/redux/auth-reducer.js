import { stopSubmit } from "redux-form"
import { authAPI } from "../API/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
            default:
                return state
    }
}

export const setAuthUserDataRequest = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

// export const getAuthUserData = () => {
//     return (dispatch) => {
//         authAPI.authRequest().then(data => {  
//             if (data.resultCode === 0){
//               let {id, email, login} = data.data
//               dispatch(setAuthUserDataRequest(id, email, login, true));
//             }
//         });
//     }
// }

export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.authRequest()

        if (data.resultCode === 0){
            let {id, email, login} = data.data
            dispatch(setAuthUserDataRequest(id, email, login, true));
        }
        
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.loginRequest(email, password, rememberMe, captcha)

    if (data.resultCode === 0){
        dispatch(getAuthUserData())
    } else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch) =>  {
    let data = await authAPI.logoutRequest()

    if (data.resultCode === 0){
        dispatch(setAuthUserDataRequest(null, null, null, false));
    }
}

export default authReducer