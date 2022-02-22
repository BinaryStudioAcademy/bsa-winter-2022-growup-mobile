import { createSlice } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { signIn, signOut } from './actions';

interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(signOut, state => {
      state.user = null;
    });
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  signIn,
  signOut,
};

export { reducer, actions };
