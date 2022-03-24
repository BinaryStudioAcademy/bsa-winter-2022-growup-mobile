import { OpportunityType } from 'src/common/enums';

interface IFullOpportunity {
  id: string;
  name: string;
  organization: string;
  type: OpportunityType;
  company: {
    id: string;
    name: string;
    description?: string;
  };
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
}

export type { IFullOpportunity };
