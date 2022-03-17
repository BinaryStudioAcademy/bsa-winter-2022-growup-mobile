import { createSlice } from '@reduxjs/toolkit';

import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { createOKR, addKeyResult } from './actions';

interface IOKRState {
  current: IAddOkr; // create OKR key results
  objectives: IAddOkr[]; // TODO change to IOKR
}

const initialState: IOKRState = {
  current: { name: '', cycle: '', parent: '', teamName: '', keyResults: [] },
  objectives: [],
};

const slice = createSlice({
  name: 'okr',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createOKR.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }

      state.objectives.push(payload);
      state.current.keyResults = [];
      state.current.name = '';
      state.current.parent = '';
      state.current.cycle = '';
      state.current.teamName = '';
    });
    builder.addCase(addKeyResult, (state, { payload }) => {
      state.current.keyResults.push(payload);
    });
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  createOKR,
  addKeyResult,
};

export { reducer, actions };
