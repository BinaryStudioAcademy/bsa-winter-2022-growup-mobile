interface IEditEducationPayload {
  id: string;
  specialization: string;
  university: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export type { IEditEducationPayload };
