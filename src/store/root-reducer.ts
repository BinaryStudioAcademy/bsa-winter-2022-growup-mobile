import { reducer as auth } from './auth';
import { reducer as skill } from './skill';
import { notificationReducer as notification } from './notification';

export const rootReducer = {
  auth,
  skill,
  notification,
};
