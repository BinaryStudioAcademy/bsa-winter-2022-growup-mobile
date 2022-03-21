import { reducer as auth } from './auth';
import { reducer as skill } from './skill';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { reducer as experience } from './experience';
import { reducer as quiz } from './quiz';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  experience,
  quiz,
};
