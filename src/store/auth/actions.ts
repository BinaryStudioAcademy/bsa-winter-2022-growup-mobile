import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authApi, storage, secureStorage } from 'src/services';
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

const setCurrentUser = createAsyncThunk(ActionType.SET_USER, async () => {
  const token = await secureStorage.getItem(SecureStorageKey.ACCESS_TOKEN);
  console.log('Token in the action setCurrentUser: ', token);

  if (!token) {
    return null;
  }

  const { id, firstName, lastName, email } = await authApi.getCurrentUser();

  const user = {
    id,
    firstName,
    lastName,
    email,
  };
  return user;
});

export { signIn, setCurrentUser, signOut };
