import { PermissionsAndroid } from 'react-native';
import { Asset, CameraType, launchCamera } from 'react-native-image-picker';

const requestCameraPermissionAndroid = async (): Promise<boolean> => {
  try {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message:
          'GrowUP Mobile needs access to your camera to capture a photo for your avatar',
        buttonNeutral: 'Ask me later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );

    return permission === PermissionsAndroid.RESULTS.GRANTED;
  } catch {
    return false;
  }
};

const captureSingleImage = async (
  type: CameraType = 'back'
): Promise<Asset | undefined> => {
  const hasPermission = await requestCameraPermissionAndroid();

  if (!hasPermission) {
    return;
  }

  const response = await launchCamera({
    mediaType: 'photo',
    cameraType: type,
  });

  if (!response.assets?.length) {
    return;
  }

  return response.assets[0];
};

export { captureSingleImage };
