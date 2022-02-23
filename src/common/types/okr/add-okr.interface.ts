import { IKeyResult } from '.';

interface IAddOkr {
  name: string;
  cycle: string;
  parent?: string;
  teamName?: string;
  keyResults: IKeyResult[];
}

export type { IAddOkr };
