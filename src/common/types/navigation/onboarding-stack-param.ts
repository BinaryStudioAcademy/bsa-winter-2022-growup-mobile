import { AppRoute, OnboardingRoute } from 'src/common/enums';

type OnboardingStackParamList = {
  [OnboardingRoute.ONBOARDING]: undefined;
  [OnboardingRoute.ADD_EDUCATION]: undefined;
  [OnboardingRoute.ADD_EXPERIENCE]: undefined;
  [OnboardingRoute.ADD_LANGUAGE]: undefined;
  [OnboardingRoute.ADD_LOCATION]: undefined;
  [AppRoute.APP]: undefined;
};

export type { OnboardingStackParamList };
