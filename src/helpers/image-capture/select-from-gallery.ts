import { Asset, launchImageLibrary } from 'react-native-image-picker';

const selectSingleImageFromGallery = async (): Promise<Asset | undefined> => {
  const response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
  });

  if (!response.assets?.length) {
    return;
  }

  return response.assets[0];
};

const selectImagesFromGallery = async (count?: number): Promise<Asset[]> => {
  const response = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: count,
  });

  return response.assets ?? [];
};

export { selectSingleImageFromGallery, selectImagesFromGallery };
