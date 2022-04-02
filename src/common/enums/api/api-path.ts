enum ApiPath {
  SIGN_IN = '/auth/login',
  SIGN_UP = '/auth/register',
  VERIFY_TOKEN = '/auth/register/verify',
  COMPLETE_REGISTRATION = '/auth/register/finish',
  CURRENT_USER = '/user',
  SKILLS = '/skills',
  NOTIFICATIONS = '/notifications',
  MARK_READ = '/mark-read',
  GOOGLE_PLACES_AUTOCOMPLETE = '/place/autocomplete/json',
  USER_AVATAR = '/user/avatar',
  USER_EDUCATION = '/user/education',
  USER_CAREER = '/user/career-journey',
  OPPORTUNITIES = '/company/opportunities',
  QUIZ_QUESTION = '/work-quiz/question',
  QUIZ_RESULT = '/work-quiz/result',
  ONBOARDING = '/user/profile',
  AVATAR = '/user/avatar',
  LANGUAGE = '/user/languages',
  COMPANY_USERS = '/company/users',
  OKR = '/company/okr',
}

export { ApiPath };
