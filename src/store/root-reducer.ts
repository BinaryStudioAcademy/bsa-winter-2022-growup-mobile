import { reducer as auth } from './auth';
import { reducer as skill } from './skill';
import { reducer as education } from './education';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { experienceReducer as experience } from './experience';
import { opportunityReducer as opportunity } from './opportunities';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  education,
  experience,
  opportunity,
};
