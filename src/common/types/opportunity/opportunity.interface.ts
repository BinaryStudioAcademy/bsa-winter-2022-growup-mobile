interface IOpportunity {
  id: string;
  name: string;
  orgGroup: string;
  type: string;
  startDate: Date;
  tags: string[]; // is it location ?
}

export type { IOpportunity };
