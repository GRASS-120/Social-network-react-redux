import * as axios from 'axios';

// Общие настройки для запроса
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true, // ? авторизован ли пользователь ? // withCredentials - позволяет делать кроссдоменные запросы
  headers: {
    'API-KEY': 'c966373d-cc4d-4199-ad3b-01ba84f6d32d', // подтверждение для всех запросов, кроме get()
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => Response.data);
  },
};

export const followAPI = {
  followRequest(id) {
    return instance.post(`follow/${id}`, {}).then((Response) => Response.data);
  },

  unfollowRequest(id) {
    return instance.delete(`follow/${id}`).then((Response) => Response.data);
  },
};

export const authAPI = {
  authRequest() {
    return instance.get('/auth/me').then((Response) => Response.data);
  },

  loginRequest(email, password, rememberMe = false, captcha = null) {
    return instance
      .post('/auth/login', { email, password, rememberMe, captcha })
      .then((Response) => Response.data);
  },

  logoutRequest() {
    return instance.delete('/auth/login').then((Response) => Response.data);
  },
};

export const securityAPI = {
  getCaptchaUrlRequest() {
    return instance
      .get('/security/get-captcha-url')
      .then((Response) => Response.data);
  },
};

export const profileAPI = {
  profileRequest(userId) {
    return instance.get(`/profile/${userId}`).then((Response) => Response.data);
  },

  profileStatus(userId) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((Response) => Response.data);
  },

  updateStatus(status) {
    return instance
      .put(`/profile/status`, { status: status })
      .then((Response) => Response.data);
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance
      .put(`/profile/photo`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // для медиафайлов?
      })
      .then((Response) => Response.data);
  },

  saveProfile(profile) {
    return instance.put(`/profile`, profile).then((Response) => Response.data);
  },
};
