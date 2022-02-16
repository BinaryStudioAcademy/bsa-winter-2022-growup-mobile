import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageService } from './storage';
import { Http } from './http';
import { AuthApi } from './auth-api';

import { API_ORIGIN_URL, API_PREFIX } from 'src/common/constants';
import { SkillApi } from './skill-api';
import { NotificationApi } from './notification-api';

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

export { storage, secureStorage, authApi, skillApi, notificationApi };
