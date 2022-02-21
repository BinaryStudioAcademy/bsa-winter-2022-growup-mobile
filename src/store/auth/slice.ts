import { createSlice } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { setCurrentUser, signIn } from './actions';

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
    // builder.addCase(signIn.fulfilled, () => {});
    builder.addCase(setCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      console.log('Updated user state: ', state.user);
    });
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  signIn,
};

export { reducer, actions };
