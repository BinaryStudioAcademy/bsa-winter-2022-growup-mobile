import { IUserDomain } from './user-domain.interface';

interface IUserLevel {
  domain: IUserDomain;
  name: string;
}

export type { IUserLevel };
