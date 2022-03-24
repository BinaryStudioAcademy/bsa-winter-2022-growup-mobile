import { createSlice } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import {
  loadEducationExperience,
  editEducationExperience,
  addEducationExperience,
  deleteEducationExperience,
} from './actions';

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
    builder.addCase(addEducationExperience.fulfilled, (state, { payload }) => {
      state.educationExperience.push(payload);
    });
    builder.addCase(loadEducationExperience.fulfilled, (state, { payload }) => {
      state.educationExperience = payload;
    });
    builder.addCase(editEducationExperience.fulfilled, (state, { payload }) => {
      const index = state.educationExperience.findIndex(
        education => education.id === payload.id
      );
      state.educationExperience[index] = payload;
    });
    builder.addCase(
      deleteEducationExperience.fulfilled,
      (state, { payload }) => {
        const index = state.educationExperience.findIndex(
          education => education.id === payload
        );
        state.educationExperience.splice(index, 1);
      }
    );
  },
});

export { reducer, actions };
