import { reducer as auth } from './auth';
import { reducer as skill } from './skill';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { experienceReducer as experience } from './experience';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  experience,
};
