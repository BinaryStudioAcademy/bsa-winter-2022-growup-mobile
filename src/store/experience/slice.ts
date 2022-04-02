import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ICareer } from 'src/common/types';

import {
  addCareerExperience,
  loadCareerExperience,
  deleteCareerExperience,
  editCareerExperience,
} from './actions';

interface ICareerState {
  careerExperience: ICareer[];
  careerExperienceLoading: boolean;
}

const initialState: ICareerState = {
  careerExperience: [],
  careerExperienceLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'career',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addCareerExperience.fulfilled, (state, { payload }) => {
      state.careerExperience.push(payload);
    });

    builder.addCase(loadCareerExperience.fulfilled, (state, { payload }) => {
      state.careerExperience = payload;
    });

    builder.addCase(deleteCareerExperience.fulfilled, (state, { payload }) => {
      const deleteIndex = state.careerExperience.findIndex(
        item => item.id === payload
      );

      state.careerExperience.splice(deleteIndex, 1);
    });

    builder.addCase(editCareerExperience.fulfilled, (state, { payload }) => {
      const updateIndex = state.careerExperience.findIndex(
        item => item.id === payload.id
      );
      state.careerExperience[updateIndex] = payload;
    });

    builder.addMatcher(
      isAnyOf(
        addCareerExperience.pending,
        loadCareerExperience.pending,
        deleteCareerExperience.pending,
        editCareerExperience.pending
      ),
      state => {
        state.careerExperienceLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        addCareerExperience.fulfilled,
        loadCareerExperience.fulfilled,
        deleteCareerExperience.fulfilled,
        editCareerExperience.fulfilled,
        addCareerExperience.rejected,
        loadCareerExperience.rejected,
        deleteCareerExperience.rejected,
        editCareerExperience.rejected
      ),
      state => {
        state.careerExperienceLoading = false;
      }
    );
  },
});

export { reducer, actions };
