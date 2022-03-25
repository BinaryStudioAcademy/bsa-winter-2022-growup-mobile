import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { completeOnboarding } from '../onboarding/actions';
import { sendQuizResults } from '../quiz/actions';
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
    builder.addCase(sendQuizResults.fulfilled, state => {
      if (state.user) {
        state.user.isCompleteTest = true;
      }
    });
    builder.addCase(completeOnboarding.fulfilled, () => {
      // TODO update data after completing
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
