import { usersAPI, followAPI } from '../API/samuraiAPI';
import { UserType } from '../types/types';
import { objectUpdater } from '../utils/object-helper';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [] as Array<number>,
};

export type UsersInitStateType = typeof initialState;

//?-- Reducer --//

export const usersReducer = (
  state = initialState,
  action: any
): UsersInitStateType => {
  console.log(state.followingProgress);

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: objectUpdater(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: objectUpdater(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    }
    // ин-фа приходит с сервера
    case SET_USERS: {
      return { ...state, users: action.users }; // объединение списка старых юзеров и новых
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

//?-- Action creators --//

type followSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOW,
  userId,
});

type unfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersType = {
  type: typeof SET_USERS;
  users: UserType;
};
export const setUsers = (users: UserType): setUsersType => ({
  type: SET_USERS,
  users,
});

type setCurrentPage = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): setCurrentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type toggleFollowingProgressType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): toggleFollowingProgressType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//?-- Thunks --//

export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const onPageChangeThinkCreator = (
  pageNumber: number,
  pageSize: number
) => async (dispatch: any) => {
  dispatch(toggleIsFetching(false));

  const data = await usersAPI.getUsers(pageNumber, pageSize);

  dispatch(setUsers(data.items));
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
  const apiMethod = followAPI.followRequest.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  const apiMethod = followAPI.unfollowRequest.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};

export default usersReducer;
