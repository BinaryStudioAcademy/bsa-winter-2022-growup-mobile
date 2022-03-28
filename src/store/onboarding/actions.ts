import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Asset } from 'react-native-image-picker';

import { IAddLanguagePayload, IOnboarding, IUserInfo } from 'src/common/types';
import { authApi, onboardingApi } from 'src/services';
import { ActionTypes } from './common';

const completeOnboarding = createAsyncThunk(
  ActionTypes.COMPLETE_ONBOARDING,
  async (payload: IOnboarding) => {
    const updatedUser = await onboardingApi.updateUserData(payload);
    return updatedUser;
  }
);

const uploadUserAvatar = createAsyncThunk(
  ActionTypes.UPLOAD_USER_AVATAR,
  async (payload: Asset) => {
    const user = await authApi.uploadAvatar(payload);
    return user;
  }
);

const saveUserInfo = createAction<IUserInfo>(ActionTypes.SAVE_USER_INFO);

const saveUserLanguage = createAction<IAddLanguagePayload>(
  ActionTypes.SAVE_USER_LANGUAGE
);

const saveUserAvatar = createAction<Asset>(ActionTypes.SAVE_USER_AVATAR);

export {
  completeOnboarding,
  saveUserInfo,
  saveUserLanguage,
  saveUserAvatar,
  uploadUserAvatar,
};
