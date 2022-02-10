import { IUser } from '..';

type AuthResponse = {
  accessToken: string;
  user: IUser;
};

export type { AuthResponse };
