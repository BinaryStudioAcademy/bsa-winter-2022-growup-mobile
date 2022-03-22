import { createAsyncThunk } from '@reduxjs/toolkit';

import { opportunitiesApi } from 'src/services';
import { ActionTypes } from './common';

const loadOpportunities = createAsyncThunk(
  ActionTypes.LOAD_OPPORTUNITIES,
  () => {
    return opportunitiesApi.getOpportunities();
  }
);

export { loadOpportunities };
