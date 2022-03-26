import { createSlice } from '@reduxjs/toolkit';

import { IOnboarding } from 'src/common/types';
import { saveUserInfo, saveUserLanguage } from './actions';

interface IOnboardingState {
  userData: IOnboarding;
}

const initialState: IOnboardingState = {
  userData: {
    firstName: '',
    lastName: '',
    position: '',
    careerJourneys: [],
    educations: [],
    languages: [],
  },
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
      state.userData.languages.push(payload);
    });
  },
});

export { reducer, actions };
