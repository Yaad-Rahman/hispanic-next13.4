import { createSlice } from '@reduxjs/toolkit';

import type { AuthSliceInitialProps } from '../types';

const initialState: AuthSliceInitialProps = {
  token: '',
  user: {},
  authenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOpen: () => {},
  },
});
