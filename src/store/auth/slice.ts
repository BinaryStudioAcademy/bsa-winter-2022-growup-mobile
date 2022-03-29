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

    builder.addCase(sendQuizResults.fulfilled, state => {
      if (state.user) {
        state.user.isCompleteTest = true;
      }
    });

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
  },
});

export { reducer, actions };
