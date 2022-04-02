import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { ISkill } from 'src/common/types';
import { loadSkills, createSkill } from './actions';

interface ISkillState {
  skills: ISkill[];
  skillsLoading: boolean;
}

const initialState: ISkillState = {
  skills: [],
  skillsLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'skill',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadSkills.fulfilled, (state, { payload }) => {
      state.skills = payload;
    });

    builder.addCase(createSkill.fulfilled, (state, { payload }) => {
      state.skills.push(payload);
    });

    builder.addMatcher(
      isAnyOf(loadSkills.fulfilled, createSkill.fulfilled),
      state => {
        state.skillsLoading = true;
      }
    );
  },
});

export { reducer, actions };
