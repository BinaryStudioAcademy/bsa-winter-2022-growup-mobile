import { UserRoleType } from 'src/common/enums';

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleType: UserRoleType;
  isCompleteTest: boolean;
}

export type { IUser };
