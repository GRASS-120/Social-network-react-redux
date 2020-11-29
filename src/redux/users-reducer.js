import { usersAPI } from '../API/api';
import { followAPI } from '../API/api';
import { objectUpdater } from '../utils/object-helper';

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0, 
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: {
            return {
                ...state,
                users: objectUpdater(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: objectUpdater(state.users, action.userId, 'id', {followed: false})
            }
        }
        // ин-фа приходит с сервера
        case SET_USERS: {
            return {...state, users: action.users}  // объединение списка старых юзеров и новых
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_PROGRESS: {
            return {...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id != action.userId)
            }
        }
        
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users}) 
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {   
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const onPageChangeThinkCreator = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(false))
        
        let data = await usersAPI.getUsers(pageNumber, pageSize)

        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true))
    }
}

let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode == 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = followAPI.followRequest.bind(userId)
        followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = followAPI.unfollowRequest.bind(userId)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
    }
}

export default usersReducer