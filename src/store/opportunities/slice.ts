import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IOpportunity } from 'src/common/types';
import { loadOpportunities } from './actions';

interface IOpportunityState {
  opportunitiesLoading: boolean;
  opportunities?: IOpportunity[];
}

const initialState: IOpportunityState = {
  opportunitiesLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'opportunity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadOpportunities.pending, state => {
      state.opportunitiesLoading = true;
    });

    builder.addCase(loadOpportunities.fulfilled, (state, { payload }) => {
      state.opportunities = payload;
    });

    builder.addMatcher(
      isAnyOf(loadOpportunities.fulfilled, loadOpportunities.rejected),
      state => {
        state.opportunitiesLoading = false;
      }
    );
  },
});

export { reducer, actions };
