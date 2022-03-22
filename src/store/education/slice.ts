import { createSlice } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import { addEducation } from './actions';

interface IEducationState {
  educationExperience: IEducation[];
}

const initialState: IEducationState = {
  educationExperience: [],
};

const { reducer, actions } = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addEducation.fulfilled, (state, { payload }) => {
      state.educationExperience.push(payload);
    });
  },
});

export { reducer, actions };
