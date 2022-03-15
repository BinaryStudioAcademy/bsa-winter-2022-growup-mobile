import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICareer } from 'src/common/types';
import { careerApi } from 'src/services';
import { ActionTypes } from './common';

const addCareerExperience = createAsyncThunk(
  ActionTypes.ADD_CAREER_EXPERIENCE,
  async (payload: ICareer) => {
    const objective = await careerApi.addCareer(payload);
    return objective;
  }
);

export { addCareerExperience };
