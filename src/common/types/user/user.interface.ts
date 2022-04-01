import { UserRoleType } from 'src/common/enums';
import { IUserLevel } from './user-level.interface';

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  avatar?: string;
  isCompleteTest: boolean;
  role: UserRoleType;
  level: IUserLevel;
}

export type { IUser };
