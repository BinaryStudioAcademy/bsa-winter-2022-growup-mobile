import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IKeyResult } from 'src/common/types';
import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { okrApi } from 'src/services';
import { ActionTypes } from './common';

const createOKR = createAsyncThunk(
  ActionTypes.CREATE_OKR,
  async (payload: IAddOkr) => {
    const objective = await okrApi.createOKR(payload);
    return objective;
  }
);

const addKeyResult = createAction<IKeyResult>(ActionTypes.ADD_KEY_RESULT);

export { createOKR, addKeyResult };
