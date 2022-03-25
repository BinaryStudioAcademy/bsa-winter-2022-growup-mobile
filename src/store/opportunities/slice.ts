import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IFullOpportunity, IOpportunity } from 'src/common/types';

import {
  loadExpandedOpportunity,
  loadOpportunities,
  resetExpandedOpportunity,
} from './actions';

interface IOpportunityState {
  opportunitiesLoading: boolean;
  opportunities?: IOpportunity[];
  expandedLoading: boolean;
  expandedOpportunity?: IFullOpportunity;
}

const initialState: IOpportunityState = {
  opportunitiesLoading: false,
  expandedLoading: false,
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

    builder.addCase(loadExpandedOpportunity.pending, state => {
      state.expandedLoading = true;
    });

    builder.addCase(loadExpandedOpportunity.fulfilled, (state, { payload }) => {
      state.expandedOpportunity = payload;
    });

    builder.addCase(resetExpandedOpportunity, state => {
      state.expandedOpportunity = undefined;
    });

    builder.addMatcher(
      isAnyOf(loadOpportunities.fulfilled, loadOpportunities.rejected),
      state => {
        state.opportunitiesLoading = false;
      }
    );

    builder.addMatcher(
      isAnyOf(
        loadExpandedOpportunity.fulfilled,
        loadExpandedOpportunity.rejected
      ),
      state => {
        state.expandedLoading = false;
      }
    );
  },
});

export { reducer, actions };
