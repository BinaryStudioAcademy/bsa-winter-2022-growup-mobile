import { createSlice } from '@reduxjs/toolkit';

import { ISkill } from 'src/common/types';
import { loadSkills } from './actions';

interface ISkillState {
  skills: ISkill[];
}

const initialState: ISkillState = {
  skills: [],
};

const { reducer, actions } = createSlice({
  name: 'skill',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadSkills.fulfilled, (state, { payload }) => {
      state.skills = payload;
    });
  },
});

export { reducer, actions };
