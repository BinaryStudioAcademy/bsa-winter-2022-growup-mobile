import { Platform } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { captureFingerprintAndroid } from './android';
import { captureFingerprintIOS } from './ios';

type FingerprintResult = {
  done: boolean;
  authenticated: boolean;
};

const acceptedBioTypes = ['Biometrics', 'Touch ID'];

const internal = Platform.select<() => Promise<boolean>>({
  android: captureFingerprintAndroid,
  ios: captureFingerprintIOS,
});

const checkBiometry = async () => {
  const biometryType = await FingerprintScanner.isSensorAvailable();
  const hasBiometry = acceptedBioTypes.includes(biometryType);

  return hasBiometry;
};

const captureFingerprint = async (): Promise<FingerprintResult> => {
  if (!internal) {
    return { done: false, authenticated: false };
  }

  const hasBiometry = await checkBiometry();

  if (!hasBiometry) {
    return { done: false, authenticated: false };
  }

  return {
    done: true,
    authenticated: await internal(),
  };
};

export { checkBiometry, captureFingerprint };
