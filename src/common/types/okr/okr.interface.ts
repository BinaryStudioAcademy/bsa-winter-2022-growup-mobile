import { IObjective } from './objective.interface';

interface IOkr {
  id: string;
  avatarUrl?: string;
  name: string;
  type: string;
  year: number;
  inProgress: boolean;
  objectives: IObjective[];
}

export type { IOkr };
