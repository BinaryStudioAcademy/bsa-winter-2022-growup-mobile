interface ICareer {
  id: string;
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export type { ICareer };
