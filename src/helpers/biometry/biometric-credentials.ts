import * as keychain from 'react-native-keychain';

import { SecureStorageKey } from 'src/common/enums';
import { secureStorage } from 'src/services';

const hasBiometry = async (): Promise<boolean> => {
  const type = await keychain.getSupportedBiometryType();

  const allowedTypes = [
    keychain.BIOMETRY_TYPE.FINGERPRINT,
    keychain.BIOMETRY_TYPE.TOUCH_ID,
  ];

  return Boolean(type && allowedTypes.includes(type));
};

const hasCredentials = async (): Promise<boolean> => {
  const biometry = await hasBiometry();

  const hasCredentialsStored = await secureStorage.getItem(
    SecureStorageKey.HAS_KEYCHAIN_CREDS
  );

  return biometry && hasCredentialsStored === '1';
};

const getBiometricCredentials =
  async (): Promise<keychain.UserCredentials | null> => {
    try {
      return (await keychain.getGenericPassword()) || null;
    } catch {
      return null;
    }
  };

const setBiometricCredentials = async (
  username: string,
  password: string
): Promise<void> => {
  try {
    await keychain.setGenericPassword(username, password, {
      securityLevel: keychain.SECURITY_LEVEL.SECURE_SOFTWARE,
      authenticationType: keychain.AUTHENTICATION_TYPE.BIOMETRICS,
      accessControl: keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
      accessible: keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    await secureStorage.setItem(SecureStorageKey.HAS_KEYCHAIN_CREDS, '1');
  } catch {
    // ignore
  }
};

const revokeBiometricCredentials = async (): Promise<void> => {
  await keychain.resetGenericPassword();
  await secureStorage.removeItem(SecureStorageKey.HAS_KEYCHAIN_CREDS);
};

export {
  hasBiometry,
  hasCredentials,
  getBiometricCredentials,
  setBiometricCredentials,
  revokeBiometricCredentials,
};
