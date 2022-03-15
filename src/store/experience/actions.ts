import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddCareer } from 'src/common/types';
import { careerApi } from 'src/services';
import { ActionTypes } from './common';

const getCareerExperience = createAsyncThunk(
  ActionTypes.GET_CAREER_EXPERIENCE,
  async () => {
    const careerExperience = await careerApi.getCareers();
    return careerExperience;
  }
);

const addCareerExperience = createAsyncThunk(
  ActionTypes.ADD_CAREER_EXPERIENCE,
  async (payload: IAddCareer) => {
    const careerExperience = await careerApi.addCareer(payload);
    return careerExperience;
  }
);

export { addCareerExperience, getCareerExperience };
