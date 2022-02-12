import { Platform } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const captureLegacy = (): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    FingerprintScanner.authenticate({
      onAttempt: () => resolve(false),
    })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
};

const capture = (): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    FingerprintScanner.authenticate({
      title: 'Authenticate with fingerprint',
    })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
};

export const captureFingerprintAndroid = (): Promise<boolean> => {
  const requiresLegacy = Platform.Version < 23;

  if (requiresLegacy) {
    return captureLegacy();
  }

  return capture();
};
