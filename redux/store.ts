import { combineReducers, configureStore } from '@reduxjs/toolkit';

import AuthReducer from './slices/authSlice';
import TicketsReducer from './slices/ticketSlice';

const reducer = combineReducers({
  auth: AuthReducer,
  tickets: TicketsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootReducerState = ReturnType<typeof reducer>;
