import { reducer as auth } from './auth';
import { reducer as skill } from './skill';
import { reducer as education } from './education';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { reducer as experience } from './experience';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  experience,
  education,
};
