import { OKRStatus } from 'src/common/enums';
import { IKeyResult } from '.';

interface IOkr {
  id: string;
  userId: string;
  name: string;
  type: string;
  year: number;
  status: OKRStatus;
  keyResults: IKeyResult[];
}

export type { IOkr };
