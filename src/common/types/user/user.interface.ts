import { UserRoleType } from 'src/common/enums';

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  avatar?: string;
  isCompleteTest: boolean;
  role: UserRoleType;
}

export type { IUser };
