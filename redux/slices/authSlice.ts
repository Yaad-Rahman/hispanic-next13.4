/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';

import type { SignInPayloadType } from '@/types/authType';

import type { AuthSliceInitialProps } from '../types';

const initialState: AuthSliceInitialProps = {
  user: null,
  authenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: { payload: Pick<SignInPayloadType, 'user'> }) => {
      state.user = action.payload.user;
      state.authenticated = true;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.authenticated = initialState.authenticated;
      deleteCookie('token');
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
