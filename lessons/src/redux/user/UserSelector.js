import { createSelector } from '@reduxjs/toolkit';

const getUsers = state => state.users;
export const userSelector = createSelector(getUsers, state => state.isFound);
