import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IOpportunity } from 'src/common/types';
import { loadOpportunities } from './actions';

interface IOpportunityState {
  opportunitiesLoaded: boolean;
  opportunities?: IOpportunity[];
}

const initialState: IOpportunityState = {
  opportunitiesLoaded: true,
};

const { reducer, actions } = createSlice({
  name: 'opportunity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadOpportunities.fulfilled, (state, { payload }) => {
      state.opportunities = payload;
    });

    builder.addMatcher(
      isAnyOf(loadOpportunities.fulfilled, loadOpportunities.rejected),
      state => {
        state.opportunitiesLoaded = true;
      }
    );
  },
});

export { reducer, actions };
