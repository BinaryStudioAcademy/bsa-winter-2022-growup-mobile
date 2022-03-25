import { IAddCareerPayload } from '../career';
import { IEducation } from '../education';
import { IAddLanguagePayload } from '../language';

interface IOnboarding {
  firstName: string;
  lastName: string;
  position: string;
  educations: IEducation[];
  careerJourneys: IAddCareerPayload[];
  languages: IAddLanguagePayload[];
}

export type { IOnboarding };
