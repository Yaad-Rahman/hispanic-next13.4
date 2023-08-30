import { combineReducers, configureStore } from '@reduxjs/toolkit';

import AuthReducer from './slices/authSlice';

const reducer = combineReducers({
  auth: AuthReducer,
});

export const store = configureStore({
  reducer,
});

export type RootReducerState = ReturnType<typeof reducer>;
