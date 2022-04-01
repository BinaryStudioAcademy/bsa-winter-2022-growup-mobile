import { createSlice } from '@reduxjs/toolkit';
import { Asset } from 'react-native-image-picker';

import { IOnboarding } from 'src/common/types';
import { completeOnboarding, saveUserAvatar, saveUserInfo } from './actions';

interface IOnboardingState {
  userData: IOnboarding;
  avatar?: Asset;
}

const initialState: IOnboardingState = {
  userData: {
    firstName: '',
    lastName: '',
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
      const { firstName, lastName } = payload;
      state.userData.firstName = firstName;
      state.userData.lastName = lastName;
    });
    builder.addCase(saveUserAvatar, (state, { payload }) => {
      state.avatar = payload;
    });
    builder.addCase(completeOnboarding.fulfilled, state => {
      state.avatar = undefined;
      state.userData.firstName = '';
      state.userData.lastName = '';
    });
  },
});

export { reducer, actions };
