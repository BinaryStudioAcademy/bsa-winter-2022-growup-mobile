import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  API_ORIGIN_URL,
  API_PREFIX,
  GOOGLE_API_KEY,
  GOOGLE_MAPS_API_ORIGIN_URL,
} from 'src/common/constants';

import { SkillApi } from './skill-api';
import { NotificationApi } from './notification-api';
import { GooglePlacesApi } from './google-places-api';
import { OKRApi } from './okr-api';
import { EducationApi } from './education-api';
import { CareerApi } from './career-api';
import { PushNotificationsApi } from './push-notifications-api';
import { AuthApi } from './auth-api';
import { OpportunitiesApi } from './opportunities-api';
import { StorageService } from './storage';
import { Http } from './http';
import { QuizApi } from './quiz-api';
import { OnboardingApi } from './onboarding-api';
import { LanguageApi } from './language-api';
import { UserApi } from './user-api';

const apiPath = `${API_ORIGIN_URL}${API_PREFIX}`;

const storage = new StorageService({
  storage: AsyncStorage,
});

const secureStorage = new StorageService({
  storage: EncryptedStorage,
});

const http = new Http({
  storage: secureStorage,
});

const authApi = new AuthApi({
  http,
  apiPath,
});

const skillApi = new SkillApi({
  http,
  apiPath,
});

const notificationApi = new NotificationApi({
  http,
  apiPath,
});

const googlePlacesApi = new GooglePlacesApi({
  http,
  apiPath: GOOGLE_MAPS_API_ORIGIN_URL,
  apiKey: GOOGLE_API_KEY,
});

const okrApi = new OKRApi({
  http,
  apiPath,
});

const educationApi = new EducationApi({
  http,
  apiPath,
});

const careerApi = new CareerApi({
  http,
  apiPath,
});

const opportunitiesApi = new OpportunitiesApi({
  http,
  apiPath,
});

const quizApi = new QuizApi({
  http,
  apiPath,
});

const onboardingApi = new OnboardingApi({
  http,
  apiPath,
});

const languageApi = new LanguageApi({
  http,
  apiPath,
});

const userApi = new UserApi({
  http,
  apiPath,
});

const pushNotificationApi = new PushNotificationsApi();

export {
  storage,
  secureStorage,
  authApi,
  skillApi,
  notificationApi,
  googlePlacesApi,
  okrApi,
  educationApi,
  careerApi,
  pushNotificationApi,
  quizApi,
  opportunitiesApi,
  onboardingApi,
  languageApi,
  userApi,
};
