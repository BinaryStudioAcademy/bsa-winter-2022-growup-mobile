import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAddCareerPayload,
  IAddLanguagePayload,
  IEducation,
  IOnboarding,
  IUserInfo,
} from 'src/common/types';
import { onboardingApi } from 'src/services';
import { ActionTypes } from './common';

const completeOnboarding = createAsyncThunk(
  ActionTypes.COMPLETE_ONBOARDING,
  async (payload: IOnboarding) => {
    const updatedUser = await onboardingApi.updateUserData(payload);
    return updatedUser;
  }
);

const saveUserInfo = createAction<IUserInfo>(ActionTypes.SAVE_USER_INFO);

const saveUserExperience = createAction<IAddCareerPayload>(
  ActionTypes.SAVE_USER_EXPERIENCE
);

const saveUserEducation = createAction<IEducation>(
  ActionTypes.SAVE_USER_EDUCATION
);

const saveUserLanguage = createAction<IAddLanguagePayload>(
  ActionTypes.SAVE_USER_LANGUAGE
);

export {
  completeOnboarding,
  saveUserInfo,
  saveUserExperience,
  saveUserEducation,
  saveUserLanguage,
};
