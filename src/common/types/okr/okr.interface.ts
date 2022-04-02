import { IObjective } from '.';

interface IOkr {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  objectives: IObjective[];
}

export type { IOkr };
