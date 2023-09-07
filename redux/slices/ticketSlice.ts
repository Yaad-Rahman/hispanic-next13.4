/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { TicketType } from '@/types/ticketType';

const initialState: { tickets: TicketType[] | null } = {
  tickets: null,
};

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action: { payload: { tickets: TicketType[] } }) => {
      state.tickets = action.payload.tickets;
    },
  },
});

export const { setTickets } = ticketSlice.actions;

export default ticketSlice.reducer;
