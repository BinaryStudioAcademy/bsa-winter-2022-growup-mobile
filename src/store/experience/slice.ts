import { createSlice } from '@reduxjs/toolkit';
import { ICareer } from 'src/common/types';

import { addCareerExperience, getCareerExperience } from './actions';

interface ICareerState {
  careerExperience: ICareer[];
}

const initialState: ICareerState = {
  careerExperience: [],
};

const slice = createSlice({
  name: 'career',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addCareerExperience.fulfilled, (state, { payload }) => {
      state.careerExperience.push(payload);
    });
    builder.addCase(getCareerExperience.fulfilled, (state, { payload }) => {
      state.careerExperience = payload;
    });
  },
});

const { reducer } = slice;

const actions = {
  ...slice.actions,
  addCareerExperience,
  getCareerExperience,
};

export { reducer, actions };