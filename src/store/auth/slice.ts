import { createSlice } from '@reduxjs/toolkit';

import { IUser } from 'src/common/types';
import { sendQuizResults } from '../quiz/actions';
import { signOut, loadCurrentUser } from './actions';

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
    builder.addCase(signOut, state => {
      state.user = null;
    });
    builder.addCase(loadCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload ?? null;
    });
    builder.addCase(sendQuizResults.fulfilled, state => {
      if (state.user) {
        state.user.isCompleteTest = true;
      }
    });
  },
});

export { reducer, actions };
