import { createSlice } from '@reduxjs/toolkit';

import { create } from './actions';

const initialState = {};

const slice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  create,
};

export { reducer, actions };
