import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddEducationPayload } from 'src/common/types';
import { educationApi } from 'src/services';
import { ActionTypes } from './common';

const addEducation = createAsyncThunk(
  ActionTypes.ADD_EDUCATION,
  (payload: IAddEducationPayload) => {
    return educationApi.addEducation(payload);
  }
);

export { addEducation };