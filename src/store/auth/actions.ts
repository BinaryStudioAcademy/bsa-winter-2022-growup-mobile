import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignInPayload } from '../../common/types';
import { ActionType } from './common';

const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async (payload: ISignInPayload) => {
    // TODO: implement login logic
  }
);

export { signIn };
