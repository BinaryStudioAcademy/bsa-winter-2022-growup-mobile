import { UserRoleType } from 'src/common/enums';

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleType;
  isCompleteTest: boolean;
  avatar?: string;
}

export type { IUser };
