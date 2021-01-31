import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from './authorization-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
  registerPending: false,
  registerError: null,
  logInPending: false,
  logInError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.registerPending = true;
      state.registerError = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.registerPending = false;
    },
    [register.rejected](state, action) {
      state.registerPending = false;
      state.registerError = action.payload;
    },
    [logIn.pending](state) {
      state.logInPending = true;
      state.logInError = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.logInPending = false;
    },
    [logIn.rejected](state, action) {
      state.logInPending = false;
      state.logInError = action.payload;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});
