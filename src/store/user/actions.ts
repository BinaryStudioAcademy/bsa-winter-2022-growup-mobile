import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn, signOut } from './slice';
import { ActionType } from './common';

// TODO: use api call to verify user data
const login = createAsyncThunk(
  ActionType.SetUser,
  async (loginPayload: any, { dispatch }) => {
    dispatch(signIn);
  }
);

export const authActions = {
  signIn,
  signOut,
  login,
};
