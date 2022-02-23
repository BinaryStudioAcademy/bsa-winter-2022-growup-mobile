import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authApi, secureStorage } from 'src/services';
import { ISignInPayload } from 'src/common/types';
import { ActionType } from './common';
import { SecureStorageKey } from 'src/common/enums';

const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async (payload: ISignInPayload, { dispatch }) => {
    const { token } = await authApi.signIn(payload);

    await secureStorage.setItem(SecureStorageKey.ACCESS_TOKEN, token);
    dispatch(loadCurrentUser());
  }
);

const signOut = createAction(ActionType.SIGN_OUT);

const loadCurrentUser = createAsyncThunk(
  ActionType.LOAD_CURRENT_USER,
  async () => {
    const token = await secureStorage.getItem(SecureStorageKey.ACCESS_TOKEN);

    if (!token) {
      return null;
    }

    return await authApi.getCurrentUser();
  }
);

export { signIn, loadCurrentUser, signOut };
