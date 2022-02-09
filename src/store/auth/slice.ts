import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../common/types';
import { signIn } from './actions';

interface IUserState {
  user: IUser | null;
  isAuthorized: boolean;
}

const initialState: IUserState = {
  user: null,
  isAuthorized: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthorized = Boolean(payload);
    });
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  signIn,
};

export { reducer, actions };
