export type PayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type PhotosType = {
  small: String;
  large: String;
};

export type UserType = {
  name: string;
  id: number;
  photos: PhotosType;
  status: string;
  followed: boolean;
};

export type PostsType = {
  id: number;
  message: string;
  likes_count: number;
};

export type ContactsType = {
  github: String;
  vk: String;
  facebook: String;
  instagram: String;
  twitter: String;
  website: String;
  youtube: String;
  mainLink: String;
};

export type ProfileType = {
  userId: Number;
  lookingForAJob: Boolean;
  lookingForAJobDescription: String;
  fullName: String;
  contacts: ContactsType;
  photos: PhotosType;
};
