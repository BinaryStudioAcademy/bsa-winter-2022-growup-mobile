import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IFullOpportunity } from 'src/common/types';
import { opportunitiesApi } from 'src/services';
import { ActionTypes } from './common';

const loadOpportunities = createAsyncThunk(
  ActionTypes.LOAD_OPPORTUNITIES,
  () => {
    return opportunitiesApi.getOpportunities();
  }
);

const loadExpandedOpportunity = createAsyncThunk<
  IFullOpportunity | undefined,
  string
>(ActionTypes.LOAD_EXPANDED_OPPORTUNITY, (id: string) => {
  return opportunitiesApi.getOpportunityById(id);
});

const resetExpandedOpportunity = createAction(
  ActionTypes.RESET_EXPANDED_OPPORTUNITY
);

export { loadOpportunities, loadExpandedOpportunity, resetExpandedOpportunity };
