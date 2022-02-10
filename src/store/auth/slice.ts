import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { signIn } from './actions';

interface IAuthState {
  user: IUser | null;
  isAuthorized: boolean;
}

const initialState: IAuthState = {
  user: null,
  isAuthorized: false,
};

const slice = createSlice({
  name: 'auth',
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
