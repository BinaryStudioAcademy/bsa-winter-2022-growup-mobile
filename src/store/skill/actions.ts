import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateSkill } from 'src/common/types';
import { skillApi } from 'src/services';
import { ActionTypes } from './common';

const create = createAsyncThunk(
  ActionTypes.Create,
  async (payload: ICreateSkill) => {
    const skill = await skillApi.create(payload);
    return skill;
  }
);

export { create };
