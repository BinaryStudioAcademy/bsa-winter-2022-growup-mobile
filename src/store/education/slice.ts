import { createSlice } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import { addEducation } from './actions';

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
  },
});

export { reducer, actions };
