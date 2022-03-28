import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { completeOnboarding, uploadUserAvatar } from '../onboarding/actions';
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
    builder.addCase(completeOnboarding.fulfilled, (state, { payload }) => {
      if (payload) {
        const { firstName, lastName, position } = payload;
        if (state.user) {
          state.user.firstName = firstName;
          state.user.lastName = lastName;
          state.user.position = position;
        }
      }
    });
    builder.addCase(uploadUserAvatar.fulfilled, (state, { payload }) => {
      if (state.user) {
        state.user.avatar = payload?.avatar;
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
