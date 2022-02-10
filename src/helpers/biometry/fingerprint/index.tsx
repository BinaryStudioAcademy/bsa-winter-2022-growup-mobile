import { Platform } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { captureFingerprintAndroid } from './android';

interface FingerprintResult {
  done: boolean;
  authenticated: boolean;
}

const acceptedBioTypes = ['Biometrics', 'Touch ID'];

const internal = Platform.select<() => Promise<boolean>>({
  android: captureFingerprintAndroid,
  // ios: captureFingerprintIOS,
});

export const captureFingerprint = async (): Promise<FingerprintResult> => {
  if (!internal) {
    return { done: false, authenticated: false };
  }

  const biometryType = await FingerprintScanner.isSensorAvailable();
  const hasBiometry = acceptedBioTypes.includes(biometryType);

  if (!hasBiometry) {
    return { done: false, authenticated: false };
  }

  return {
    done: true,
    authenticated: await internal(),
  };
};
