import { UserRoleType } from 'src/common/enums';

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleType: UserRoleType;
}

export type { IUser };
