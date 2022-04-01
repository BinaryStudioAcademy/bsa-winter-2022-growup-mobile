import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddUserPayload, IUserInfo } from 'src/common/types';
import { userApi } from 'src/services';
import { ActionTypes } from './common';

const addUser = createAsyncThunk<IUserInfo, IAddUserPayload>(
  ActionTypes.ADD_USER,
  payload => {
    return userApi.create(payload);
  }
);

export { addUser };
