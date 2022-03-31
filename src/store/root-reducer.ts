import { authReducer as auth } from './auth';
import { skillReducer as skill } from './skill';
import { educationReducer as education } from './education';
import { okrReducer as okr } from './okr';
import { notificationReducer as notification } from './notification';
import { experienceReducer as experience } from './experience';
import { opportunityReducer as opportunity } from './opportunities';
import { quizReducer as quiz } from './quiz';
import { onboardingReducer as onboarding } from './onboarding';
import { languageReducer as language } from './language';
import { usersReducer as users } from './users';

export const rootReducer = {
  auth,
  skill,
  notification,
  okr,
  education,
  experience,
  opportunity,
  quiz,
  onboarding,
  language,
  users,
};
