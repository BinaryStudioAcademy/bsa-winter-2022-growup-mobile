import { authReducer as auth } from './auth';
import { skillReducer as skill } from './skill';
import { educationReducer as education } from './education';
import { okrReducer as okr } from './okr';
import { experienceReducer as experience } from './experience';
import { notificationReducer as notification } from './notification';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  education,
  experience,
};
