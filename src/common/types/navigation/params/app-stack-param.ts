import { NavigatorScreenParams } from '@react-navigation/native';

import { AppRoute } from 'src/common/enums';
import { AppTabsParamList } from '.';

type AppStackParamList = {
  [AppRoute.APP_TABS]: NavigatorScreenParams<AppTabsParamList>;
  [AppRoute.ADD_OKR]: {
    isTeamOkr: boolean;
  };
  [AppRoute.ADD_KEY_RESULT]: undefined;
  [AppRoute.ONBOARDING_SETUP]: undefined;
  [AppRoute.ADMIN_HOME]: undefined;
  [AppRoute.OPPORTUNITY_DETAILS]: undefined;
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ADD_USER]: undefined;
};

export type { AppStackParamList };
