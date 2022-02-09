import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageService } from './storage';
import { Http } from './http';
import { AuthApi } from './authApi';

import { API_ORIGIN_URL, API_PREFIX } from 'src/common/constants';

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
  apiPath: `${API_ORIGIN_URL}${API_PREFIX}`,
});

export { storage, secureStorage, authApi };
