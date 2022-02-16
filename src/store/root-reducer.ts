import { authReducer as auth } from './auth';
import { skillReducer as skill } from './skill';
import { notificationReducer as notification } from './notification';

export const rootReducer = {
  auth,
  skill,
  notification,
};
