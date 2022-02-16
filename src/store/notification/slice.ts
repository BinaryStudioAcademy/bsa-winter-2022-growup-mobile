import { createSlice } from '@reduxjs/toolkit';

import { markNotificationRead } from './actions';

const initialState = {};

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  markNotificationRead,
};

export { reducer, actions };
