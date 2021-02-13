import { stopSubmit } from 'redux-form';
import { profileAPI } from '../API/samuraiAPI';
import { PostsType, ProfileType, PhotosType } from '../types/types';

const ADD_POST = 'posts/ADD-POST';
const SET_USER_PROFILE = 'posts/SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'posts/SET_STATUS_PROFILE';
const DELETE_POST = 'posts/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'posts/SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Happy New Year 2021!🎄',
      likes_count: 231,
    },
    {
      id: 2,
      message: 'DO YOU UNDERSTAAAAAAAAAAANDO?',
      likes_count: 111,
    },
  ] as Array<PostsType>,
  profile: ((null as unknown) as ProfileType) || null,
  status: '',
};

export type PostsInitStateType = typeof initialState;

//?-- Reducer --//

export const postsReducer = (
  state = initialState,
  action: any
): PostsInitStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: 3,
        // id: STATE.posts[STATE.posts.length - 1].id + 1,
        message: action.message,
        likes_count: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost], // добавление поста
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS_PROFILE: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }

    default:
      return state;
  }
};

//?-- Action creators --//

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  message: string;
};
export const addPostActionCreator = (
  message: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  message: message,
});

type SetUserProfileSuccessType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfileSuccess = (
  profile: ProfileType
): SetUserProfileSuccessType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetUserStatusType = {
  type: typeof SET_STATUS_PROFILE;
  status: string;
};
export const setUserStatus = (status: string): SetUserStatusType => ({
  type: SET_STATUS_PROFILE,
  status,
});

type DeletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//?-- Thunks --//

export const setUserProfile = (userId: number) => async (dispatch: any) => {
  try {
    const data = await profileAPI.profileRequest(userId);
    dispatch(setUserProfileSuccess(data));
  } catch (error) {
    // alert(error.message)
  }
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  try {
    const data = await profileAPI.profileStatus(userId);
    dispatch(setUserStatus(data));
  } catch (error) {
    // alert(error.message)
  }
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);

  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (file: string) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);

  if (data.resultCode === 0) {
    dispatch(setUserProfile(userId));
  } else {
    const errorMessage =
      data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('profile_form', { _error: errorMessage }));

    // let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"

    // let regExp = /\(([^)]+)\)/;
    // let matches = regExp.exec(errorMessage);
    // let errorFlow = matches[1].split("->")[1]
    // console.log(errorFlow)

    // dispatch(stopSubmit('profile_form', {"contacts": {[`${errorFlow}`]: errorMessage}}))

    return Promise.reject(data.messages[0]);
  }
};

export default postsReducer;
