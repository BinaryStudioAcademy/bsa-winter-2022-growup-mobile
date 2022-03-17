import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddCareerPayload, ICareer } from 'src/common/types';
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

const deleteCareerExperience = createAsyncThunk(
  ActionTypes.DELETE_CAREER_EXPERIENCE,
  async (id: string) => {
    await careerApi.deleteCareer(id);
    return id;
  }
);

const editCareerExperience = createAsyncThunk(
  ActionTypes.EDIT_CAREER_EXPERIENCE,
  async (payload: ICareer) => {
    const editedCareer = await careerApi.editCareer(payload);
    return editedCareer;
  }
);

export {
  addCareerExperience,
  loadCareerExperience,
  deleteCareerExperience,
  editCareerExperience,
};
