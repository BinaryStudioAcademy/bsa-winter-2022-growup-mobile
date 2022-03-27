import { OpportunityType } from 'src/common/enums';
import { ITag } from '..';

interface IOpportunity {
  id: string;
  name: string;
  tags: ITag[];
  type: OpportunityType;
  organization: string;
  startDate: string;
}

export type { IOpportunity };
