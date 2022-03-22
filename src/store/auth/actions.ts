import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authApi, secureStorage } from 'src/services';
import { ISignInPayload } from 'src/common/types';
import { ActionTypes } from './common';
import { SecureStorageKey } from 'src/common/enums';

const signIn = createAsyncThunk(
  ActionTypes.SIGN_IN,
  async (payload: ISignInPayload, { dispatch }) => {
    const response = await authApi.signIn(payload);

    if (!response) {
      return;
    }

    await secureStorage.setItem(SecureStorageKey.ACCESS_TOKEN, response.token);
    dispatch(loadCurrentUser());
  }
);

const signOut = createAction(ActionTypes.SIGN_OUT);

const loadCurrentUser = createAsyncThunk(
  ActionTypes.LOAD_CURRENT_USER,
  async () => {
    const token = await secureStorage.getItem(SecureStorageKey.ACCESS_TOKEN);

    if (!token) {
      return null;
    }

    return await authApi.getCurrentUser();
  }
);

export { signIn, loadCurrentUser, signOut };
