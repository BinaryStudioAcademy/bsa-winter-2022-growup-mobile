import { IKeyResult } from '.';

interface IObjective {
  id: string;
  name: string;
  result: number;
  keyResults: IKeyResult[];
}

export type { IObjective };
