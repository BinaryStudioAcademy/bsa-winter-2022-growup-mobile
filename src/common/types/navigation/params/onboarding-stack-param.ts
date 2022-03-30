import { OnboardingRoute } from 'src/common/enums';
import { ICareer } from '../../career';

type OnboardingStackParamList = {
  [OnboardingRoute.ONBOARDING]: undefined;
  [OnboardingRoute.ADD_EDUCATION]: undefined;
  [OnboardingRoute.ADD_EXPERIENCE]: {
    career?: ICareer;
  };
  [OnboardingRoute.ADD_LANGUAGE]: undefined;
  [OnboardingRoute.ADD_LOCATION]: undefined;
};

export type { OnboardingStackParamList };
