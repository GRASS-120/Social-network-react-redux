import { profileAPI } from "../API/api";

const ADD_POST = 'posts/ADD-POST'
const SET_USER_PROFILE = 'posts/SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'posts/SET_STATUS_PROFILE'
const DELETE_POST = 'posts/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'posts/SAVE_PHOTO_SUCCESS'

let initialState = {  // начальное значение STATE
    posts: [
        {
            id: 1,
            message: "Hi! Anime poor💩🖕",
            likes_count: 1,
        },
        {
            id: 2,
            message: "DO YOU UNDERSTAAAAAAAAAAANDO?",
            likes_count: 231,
        },
    ],
    profile: null,
    status: ""
};

export const postsReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                // id: STATE.posts[STATE.posts.length - 1].id + 1,
                message: action.message,
                likes_count: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],  // добавление поста
            }
        }

        case SET_USER_PROFILE : {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS_PROFILE : {
            return { ...state, status: action.status }
        }

        case DELETE_POST : {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }

        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} }
        }

        default:
            return state
}};

export const addPostActionCreator = (message) => ({type: ADD_POST, message: message});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS_PROFILE, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.profileRequest(userId)
        dispatch(setUserProfileSuccess(data));
    }
};

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.profileStatus(userId)
        dispatch(setUserStatus(data))
    }
};

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)

        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
};

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
    }
};

export default postsReducer;