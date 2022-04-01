import { UserRoleType } from 'src/common/enums';

interface IAddUserPayload {
  role: UserRoleType;
  email: string;
}

export type { IAddUserPayload };
