import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { signOut, loadCurrentUser, signIn, signInFingerprint } from './actions';

interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
};

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });

    builder.addMatcher(
      isAnyOf(
        loadCurrentUser.fulfilled,
        signIn.fulfilled,
        signInFingerprint.fulfilled
      ),
      (state, { payload }) => {
        state.user = payload ?? null;
      }
    );
  },
});

export { reducer, actions };
