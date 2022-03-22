enum ApiPath {
  SIGN_IN = '/auth/login',
  SIGN_UP = '/auth/register',
  SIGN_IN_FINGERPRINT = '/auth/login/fingerprint',
  SIGN_IN_CHALLENGE = '/auth/login/fingerprint/challenge',
  CURRENT_USER = '/user',
  SKILLS = '/skills',
  NOTIFICATIONS = '/notifications',
  MARK_READ = '/mark-read',
  GOOGLE_PLACES_AUTOCOMPLETE = '/place/autocomplete/json',
  USER_AVATAR = '/user/avatar',
  USER_CAREER = '/user/career-journey',
  OPPORTUNITIES = '/company/opportunities',
}

export { ApiPath };
