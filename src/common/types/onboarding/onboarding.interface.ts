import { IAddCareerPayload } from '../career';
import { IEducation } from '../education';
import { IAddLanguagePayload } from '../language';

interface IOnboarding {
  firstName: string;
  lastName: string;
  educations: IEducation[];
  careerJourneys: IAddCareerPayload[];
  interests: IAddLanguagePayload[];
}

export type { IOnboarding };
