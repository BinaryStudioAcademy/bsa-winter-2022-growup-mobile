import { IAddLanguagePayload } from '../language';

interface IOnboarding {
  firstName: string;
  lastName: string;
  interests: IAddLanguagePayload[];
}

export type { IOnboarding };
