import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICreateSkillPayload } from 'src/common/types';
import { skillApi } from 'src/services';
import { ActionTypes } from './common';

const createSkill = createAsyncThunk(
  ActionTypes.CREATE_SKILL,
  async (payload: ICreateSkillPayload) => {
    return await skillApi.create(payload);
  }
);

export { createSkill };
