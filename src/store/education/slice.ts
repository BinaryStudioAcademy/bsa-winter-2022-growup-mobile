import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import {
  loadEducationExperience,
  editEducationExperience,
  addEducationExperience,
  deleteEducationExperience,
} from './actions';

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

    builder.addMatcher(
      isAnyOf(
        addEducationExperience.pending,
        loadEducationExperience.pending,
        editEducationExperience.pending,
        deleteEducationExperience.pending
      ),
      state => {
        state.educationLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        addEducationExperience.fulfilled,
        loadEducationExperience.fulfilled,
        editEducationExperience.fulfilled,
        deleteEducationExperience.fulfilled,
        addEducationExperience.rejected,
        loadEducationExperience.rejected,
        editEducationExperience.rejected,
        deleteEducationExperience.rejected
      ),
      state => {
        state.educationLoading = false;
      }
    );
  },
});

export { reducer, actions };
