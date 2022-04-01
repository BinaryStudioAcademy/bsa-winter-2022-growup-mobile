import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IOkr } from 'src/common/types';

import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { createOKR, addKeyResult, loadOKRs } from './actions';

interface IOKRState {
  okrs: IOkr[];
  okrsLoading: boolean;
  current: IAddOkr;
  objectives: IAddOkr[];
}

const initialState: IOKRState = {
  okrs: [],
  okrsLoading: false,
  current: { name: '', cycle: '', parent: '', teamName: '', keyResults: [] },
  objectives: [],
};

const slice = createSlice({
  name: 'okr',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadOKRs.fulfilled, (state, { payload }) => {
      state.okrs = payload;
    });

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

    builder.addMatcher(isAnyOf(loadOKRs.pending, createOKR.pending), state => {
      state.okrsLoading = true;
    });

    builder.addMatcher(
      isAnyOf(
        loadOKRs.fulfilled,
        createOKR.fulfilled,
        loadOKRs.rejected,
        createOKR.rejected
      ),
      state => {
        state.okrsLoading = false;
      }
    );
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  createOKR,
  addKeyResult,
};

export { reducer, actions };
