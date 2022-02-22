import { Asset, CameraType, launchCamera } from 'react-native-image-picker';

const captureSingleImage = async (
  type?: CameraType
): Promise<Asset | undefined> => {
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
