import { OnboardingRoute } from 'src/common/enums';
import { ICareer } from '../../career';
import { IEducation } from '../../education';

type OnboardingStackParamList = {
  [OnboardingRoute.ONBOARDING]: undefined;
  [OnboardingRoute.ADD_EDUCATION]: {
    _education?: IEducation;
  };
  [OnboardingRoute.ADD_EXPERIENCE]: {
    career?: ICareer;
  };
  [OnboardingRoute.ADD_LANGUAGE]: undefined;
  [OnboardingRoute.ADD_LOCATION]: undefined;
};

export type { OnboardingStackParamList };
