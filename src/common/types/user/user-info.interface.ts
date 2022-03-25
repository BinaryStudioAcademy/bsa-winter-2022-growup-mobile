import { Asset } from 'react-native-image-picker';

interface IUserInfo {
  firstName: string;
  lastName: string;
  position: string;
  avatar?: Asset;
}

export type { IUserInfo };
