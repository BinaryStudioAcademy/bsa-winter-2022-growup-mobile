import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import { addEducation, loadEducationExperience } from './actions';

interface IEducationState {
  education: IEducation[];
  educationLoading: boolean;
}

const initialState: IEducationState = {
  education: [],
  educationLoading: false,
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

    builder.addMatcher(
      isAnyOf(addEducation.pending, loadEducationExperience.pending),
      state => {
        state.educationLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        addEducation.fulfilled,
        loadEducationExperience.fulfilled,
        addEducation.rejected,
        loadEducationExperience.rejected
      ),
      state => {
        state.educationLoading = false;
      }
    );
  },
});

export { reducer, actions };
