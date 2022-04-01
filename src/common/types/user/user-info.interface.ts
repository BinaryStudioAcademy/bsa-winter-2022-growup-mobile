import { Asset } from 'react-native-image-picker';

interface IUserInfo {
  firstName: string;
  lastName: string;
  avatar?: Asset;
}

export type { IUserInfo };
