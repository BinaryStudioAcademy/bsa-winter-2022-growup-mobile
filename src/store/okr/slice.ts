import { createSlice } from '@reduxjs/toolkit';
import { IKeyResult } from 'src/common/types';

import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { createOKR, addKeyResult } from './actions';

interface IOKRState {
  currentKeyResults: IKeyResult[]; // create OKR key results
  objectives: IAddOkr[]; // TODO change to IOKR
}

const initialState: IOKRState = {
  currentKeyResults: [],
  objectives: [],
};

const slice = createSlice({
  name: 'okr',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createOKR.fulfilled, (state, { payload }) => {
      state.objectives.push(payload);
    });
    builder.addCase(addKeyResult, (state, { payload }) => {
      state.currentKeyResults.push(payload);
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
