import { ICareer } from './career.interface';

type IAddCareerPayload = Omit<ICareer, 'id'>;

export type { IAddCareerPayload };
