import { IUser } from '../user';

type AuthResponse = {
  token: string;
  user: IUser;
};

export type { AuthResponse };
