import { authReducer as auth } from './auth';
import { skillReducer as skill } from './skill';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { experienceReducer as experience } from './experience';
import { opportunityReducer as opportunity } from './opportunities';
import { quizReducer as quiz } from './quiz';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  experience,
  opportunity,
  quiz,
};
