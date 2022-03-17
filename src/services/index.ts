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
import { CareerApi } from './career-api';
import { PushNotificationsApi } from './push-notifications-api';
import { StorageService } from './storage';
import { Http } from './http';
import { AuthApi } from './auth-api';
import { EducationApi } from './education-api';

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
  apiPath: `${API_ORIGIN_URL}${API_PREFIX}`,
});

const googlePlacesApi = new GooglePlacesApi({
  http,
  apiPath: GOOGLE_MAPS_API_ORIGIN_URL,
  apiKey: GOOGLE_API_KEY,
});

const okrApi = new OKRApi({
  http,
  apiPath: `${API_ORIGIN_URL}${API_PREFIX}`,
});

const educationApi = new EducationApi({
  http,
  apiPath: `${API_ORIGIN_URL}${API_PREFIX}`,
});

const careerApi = new CareerApi({
  http,
  apiPath: `${API_ORIGIN_URL}${API_PREFIX}`,
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
  careerApi,
  pushNotificationApi,
  educationApi,
};
