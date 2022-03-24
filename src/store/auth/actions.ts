import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as keychain from 'react-native-keychain';

import { authApi, secureStorage } from 'src/services';
import { ISignInPayload } from 'src/common/types';
import { SecureStorageKey } from 'src/common/enums';

import {
  hasBiometry,
  revokeBiometricCredentials,
  setBiometricCredentials,
} from 'src/helpers';

import { ActionTypes } from './common';

const signIn = createAsyncThunk(
  ActionTypes.SIGN_IN,
  async (payload: ISignInPayload) => {
    const response = await authApi.signIn(payload);

    if (!response) {
      await revokeBiometricCredentials();
      return;
    }

    if (await hasBiometry()) {
      await setBiometricCredentials(payload.email, payload.password);
    }

    await secureStorage.setItem(SecureStorageKey.ACCESS_TOKEN, response.token);
    return response.user;
  }
);

const signInFingerprint = createAsyncThunk(
  ActionTypes.SIGN_IN_FINGERPRINT,
  async ({ username: email, password }: keychain.UserCredentials) => {
    const response = await authApi.signIn({ email, password });

    if (!response) {
      await revokeBiometricCredentials();
      return;
    }

    await secureStorage.setItem(SecureStorageKey.ACCESS_TOKEN, response.token);
    return response.user;
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

export { signIn, signInFingerprint, loadCurrentUser, signOut };
