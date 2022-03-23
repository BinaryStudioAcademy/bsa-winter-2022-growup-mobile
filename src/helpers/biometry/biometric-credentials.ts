import * as keychain from 'react-native-keychain';

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
  const credentials = await getBiometricCredentials();

  return biometry && Boolean(credentials);
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
  await keychain.setGenericPassword(username, password, {
    securityLevel: keychain.SECURITY_LEVEL.SECURE_SOFTWARE,
    authenticationType: keychain.AUTHENTICATION_TYPE.BIOMETRICS,
    accessControl: keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
    accessible: keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
};

const revokeBiometricCredentials = async (): Promise<void> => {
  await keychain.resetGenericPassword();
};

export {
  hasBiometry,
  hasCredentials,
  getBiometricCredentials,
  setBiometricCredentials,
  revokeBiometricCredentials,
};
