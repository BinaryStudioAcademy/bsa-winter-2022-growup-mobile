import FingerprintScanner from 'react-native-fingerprint-scanner';

export const captureFingerprintIOS = (): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    FingerprintScanner.authenticate({
      description: 'Authenticate with fingerprint',
    })
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
};
