import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { sendQuizResults } from '../quiz/actions';

import {
  signOut,
  loadCurrentUser,
  signIn,
  signInFingerprint,
  signUp,
} from './actions';

interface IAuthState {
  user: IUser | null;
  authLoading: boolean;
}

const initialState: IAuthState = {
  user: null,
  authLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });

    builder.addCase(sendQuizResults.fulfilled, state => {
      if (state.user) {
        state.user.isCompleteTest = true;
      }
    });

    builder.addMatcher(
      isAnyOf(
        loadCurrentUser.pending,
        signIn.pending,
        signUp.pending,
        signInFingerprint.pending
      ),
      state => {
        state.authLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        loadCurrentUser.fulfilled,
        signIn.fulfilled,
        signUp.fulfilled,
        signInFingerprint.fulfilled
      ),
      (state, { payload }) => {
        state.user = payload ?? null;
      }
    );

    builder.addMatcher(
      isAnyOf(
        loadCurrentUser.fulfilled,
        signIn.fulfilled,
        signUp.fulfilled,
        signInFingerprint.fulfilled,
        loadCurrentUser.rejected,
        signIn.rejected,
        signUp.rejected,
        signInFingerprint.rejected
      ),
      state => {
        state.authLoading = false;
      }
    );
  },
});

export { reducer, actions };
