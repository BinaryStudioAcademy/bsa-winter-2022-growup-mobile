import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddCareerPayload } from 'src/common/types';
import { careerApi } from 'src/services';
import { ActionTypes } from './common';

const loadCareerExperience = createAsyncThunk(
  ActionTypes.LOAD_CAREER_EXPERIENCE,
  async () => {
    const careerExperience = await careerApi.getCareers();
    return careerExperience;
  }
);

const addCareerExperience = createAsyncThunk(
  ActionTypes.ADD_CAREER_EXPERIENCE,
  async (payload: IAddCareerPayload) => {
    const careerExperience = await careerApi.addCareer(payload);
    return careerExperience;
  }
);

export { addCareerExperience, loadCareerExperience };
