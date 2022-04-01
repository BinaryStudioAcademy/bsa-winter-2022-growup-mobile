import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICreateSkillPayload } from 'src/common/types';
import { skillApi } from 'src/services';
import { ActionTypes } from './common';

const createSkill = createAsyncThunk(
  ActionTypes.CREATE_SKILL,
  async (payload: ICreateSkillPayload) => {
    const skill = await skillApi.create(payload);
    return skill;
  }
);

const loadSkills = createAsyncThunk(ActionTypes.LOAD_SKILLS, async () => {
  const skills = await skillApi.loadSkills();

  return skills;
});

export { createSkill, loadSkills };
