import { createSlice } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import {
  loadEducationExperience,
  editEducationExperience,
  addEducationExperience,
  deleteEducationExperience,
} from './actions';

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
    builder.addCase(addEducationExperience.fulfilled, (state, { payload }) => {
      state.education.push(payload);
    });
    builder.addCase(loadEducationExperience.fulfilled, (state, { payload }) => {
      state.education = payload;
    });
    builder.addCase(editEducationExperience.fulfilled, (state, { payload }) => {
      const index = state.education.findIndex(
        education => education.id === payload.id
      );
      state.education[index] = payload;
    });
    builder.addCase(
      deleteEducationExperience.fulfilled,
      (state, { payload }) => {
        const index = state.education.findIndex(
          education => education.id === payload
        );
        state.education.splice(index, 1);
      }
    );
  },
});

export { reducer, actions };
