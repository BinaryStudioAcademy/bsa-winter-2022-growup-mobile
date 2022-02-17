import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authApi, storage } from 'src/services';
import { ISignInPayload } from 'src/common/types';
import { ActionType } from './common';
import { SecureStorageKey } from 'src/common/enums';

const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async (payload: ISignInPayload) => {
    const { token } = await authApi.signIn(payload);
    await storage.setItem(SecureStorageKey.ACCESS_TOKEN, token);

    return token;
  }
);

const signOut = createAction(ActionType.SIGN_OUT);

export { signIn, signOut };
