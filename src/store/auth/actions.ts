import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'src/services';

import { ISignInPayload } from '../../common/types';
import { ActionType } from './common';

const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async (payload: ISignInPayload) => {
    // TODO: implement login logic
    const { user } = await authApi.signIn(payload);

    return user;
  }
);

export { signIn };
