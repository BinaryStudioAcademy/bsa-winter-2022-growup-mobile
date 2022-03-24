import { OpportunityType } from 'src/common/enums';

interface IOpportunity {
  id: string;
  name: string;
  tags: string[];
  type: OpportunityType;
  organization: string;
  startDate: string;
}

export type { IOpportunity };
