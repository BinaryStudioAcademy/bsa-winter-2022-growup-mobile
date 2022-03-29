import { createSlice } from '@reduxjs/toolkit';
import { Asset } from 'react-native-image-picker';

import { IOnboarding } from 'src/common/types';
import {
  completeOnboarding,
  saveUserAvatar,
  saveUserInfo,
  saveUserLanguage,
} from './actions';

interface IOnboardingState {
  userData: IOnboarding;
  avatar?: Asset;
}

const initialState: IOnboardingState = {
  userData: {
    firstName: '',
    lastName: '',
    position: '',
    careerJourneys: [],
    educations: [],
    interests: [],
  },
  avatar: undefined,
};

const { reducer, actions } = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveUserInfo, (state, { payload }) => {
      const { firstName, lastName, position } = payload;
      state.userData.firstName = firstName;
      state.userData.lastName = lastName;
      state.userData.position = position;
    });
    builder.addCase(saveUserLanguage, (state, { payload }) => {
      state.userData.interests.push(payload);
    });
    builder.addCase(saveUserAvatar, (state, { payload }) => {
      state.avatar = payload;
    });
    builder.addCase(completeOnboarding.fulfilled, state => {
      state.avatar = undefined;
      state.userData.firstName = '';
      state.userData.lastName = '';
      state.userData.position = '';
    });
  },
});

export { reducer, actions };
