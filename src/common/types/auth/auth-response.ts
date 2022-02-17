import { IUser } from '..';

type AuthResponse = {
  token: string;
  user: IUser;
};

export type { AuthResponse };
