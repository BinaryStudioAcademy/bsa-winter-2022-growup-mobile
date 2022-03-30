interface IAddEducationPayload {
  specialization: string;
  university: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export type { IAddEducationPayload };
