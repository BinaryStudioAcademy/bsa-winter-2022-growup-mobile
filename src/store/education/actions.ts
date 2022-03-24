import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddEducationPayload, IEducation } from 'src/common/types';
import { educationApi } from 'src/services';
import { ActionTypes } from './common';

const addEducationExperience = createAsyncThunk(
  ActionTypes.ADD_EDUCATION,
  (payload: IAddEducationPayload) => {
    return educationApi.addEducation(payload);
  }
);

const loadEducationExperience = createAsyncThunk(
  ActionTypes.LOAD_EDUCATION,
  async () => {
    return await educationApi.loadEducations();
  }
);

const editEducationExperience = createAsyncThunk(
  ActionTypes.EDIT_EDUCATION,
  async (payload: IEducation) => {
    return await educationApi.editEducation(payload);
  }
);

const deleteEducationExperience = createAsyncThunk(
  ActionTypes.DELETE_EDUCATION,
  async (educationId: string) => {
    await educationApi.deleteEducation(educationId);
    return educationId;
  }
);

export {
  addEducationExperience,
  loadEducationExperience,
  editEducationExperience,
  deleteEducationExperience,
};
