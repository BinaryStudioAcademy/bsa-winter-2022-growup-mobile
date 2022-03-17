interface IAddCareerPayload {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export type { IAddCareerPayload };
