import { OpportunityType } from 'src/common/enums';

interface IOpportunity {
  id: string;
  name: string;
  tags: string[];
  type: OpportunityType;
  user: string;
  company: string;
  organization: string;
  startDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type { IOpportunity };
