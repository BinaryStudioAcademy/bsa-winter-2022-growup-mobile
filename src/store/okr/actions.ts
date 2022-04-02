import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IKeyResult } from 'src/common/types';
import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { okrApi } from 'src/services';
import { ActionTypes } from './common';

const loadOKRs = createAsyncThunk(ActionTypes.LOAD_OKR, () => {
  return okrApi.getAll();
});

const createOKR = createAsyncThunk(
  ActionTypes.CREATE_OKR,
  (payload: IAddOkr) => {
    return okrApi.createOKR(payload);
  }
);

const addKeyResult = createAction<IKeyResult>(ActionTypes.ADD_KEY_RESULT);

export { loadOKRs, createOKR, addKeyResult };
