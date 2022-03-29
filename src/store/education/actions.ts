import { createAsyncThunk } from '@reduxjs/toolkit';

import { IEducation } from 'src/common/types';
import { educationApi } from 'src/services';
import { ActionTypes } from './common';

const addEducationExperience = createAsyncThunk(
  ActionTypes.ADD_EDUCATION,
  async (payload: IEducation) => {
    const education = await educationApi.addEducation(payload);
    return education;
  }
);

const loadEducationExperience = createAsyncThunk(
  ActionTypes.LOAD_EDUCATION,
  async () => {
    const educations = await educationApi.loadEducations();
    return educations;
  }
);

const editEducationExperience = createAsyncThunk(
  ActionTypes.EDIT_EDUCATION,
  async (payload: IEducation) => {
    const education = await educationApi.editEducation(payload);
    return education;
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
