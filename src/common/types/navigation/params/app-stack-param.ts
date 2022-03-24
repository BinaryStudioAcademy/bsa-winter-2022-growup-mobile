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
  [AppRoute.QUIZ]: undefined;
};

export type { AppStackParamList };
