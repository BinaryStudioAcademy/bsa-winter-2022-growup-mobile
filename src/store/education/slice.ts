import { createSlice } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import { addEducation, loadEducationExperience } from './actions';

interface IEducationState {
  education: IEducation[];
}

const initialState: IEducationState = {
  education: [],
};

const { reducer, actions } = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addEducation.fulfilled, (state, { payload }) => {
      state.education.push(payload);
    });
    builder.addCase(loadEducationExperience.fulfilled, (state, { payload }) => {
      state.education = payload;
    });
  },
});

export { reducer, actions };
