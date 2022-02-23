import { Asset } from 'react-native-image-picker';

interface IMultipartFile {
  uri: string;
  name: string;
  type: string;
}

function assetToMultipartFile(asset: Asset): IMultipartFile {
  return {
    uri: asset.uri ?? asset.base64 ?? '',
    name: asset.fileName ?? '',
    type: asset.type ?? '',
  };
}

export { assetToMultipartFile };
