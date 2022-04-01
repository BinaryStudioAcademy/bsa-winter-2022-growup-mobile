import { UserRoleType } from 'src/common/enums';

interface IAddUserPayload {
  firstName: string;
  lastName: string;
  role: UserRoleType;
  email: string;
}

export type { IAddUserPayload };
