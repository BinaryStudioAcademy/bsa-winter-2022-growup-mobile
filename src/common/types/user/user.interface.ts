interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  avatar?: string;
  isCompleteTest: boolean;
}

export type { IUser };
