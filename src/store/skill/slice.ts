import { createSlice } from '@reduxjs/toolkit';

import { createSkill } from './actions';

const initialState = {};

const slice = createSlice({
  name: 'skill',
  initialState,
  reducers: {},
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  createSkill,
};

export { reducer, actions };
