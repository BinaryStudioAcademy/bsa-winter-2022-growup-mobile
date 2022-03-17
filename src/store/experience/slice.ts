import { createSlice } from '@reduxjs/toolkit';

import { ICareer } from 'src/common/types';
import { addCareerExperience, loadCareerExperience } from './actions';

interface ICareerState {
  careerExperience: ICareer[];
}

const initialState: ICareerState = {
  careerExperience: [],
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
  },
});

export { reducer, actions };
