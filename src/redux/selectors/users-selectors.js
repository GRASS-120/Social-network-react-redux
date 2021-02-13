import { createSelector } from 'reselect';

const getUsers = (state) => state.usersPage.users;

export const getUsersSuper = createSelector(getUsers, (users) =>
  users.filter(() => true)
);

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getFollowingProgress = (state) =>
  state.usersPage.followingProgress;
