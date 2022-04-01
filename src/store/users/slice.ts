import { createSlice } from '@reduxjs/toolkit';

import { IUserInfo } from 'src/common/types';
import { addUser } from './actions';

interface IUsersState {
  users: IUserInfo[];
}

const initialState: IUsersState = {
  users: [],
};

const { reducer, actions } = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.users.push(payload);
    });
  },
});

export { reducer, actions };
