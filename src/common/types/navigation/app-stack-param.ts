import { NavigatorScreenParams } from '@react-navigation/native';

import { AppRoute } from 'src/common/enums';
import { AppTabsParamList } from '.';

type AppStackParamList = {
  [AppRoute.APP_TUBS]: NavigatorScreenParams<AppTabsParamList>;
  [AppRoute.ADD_OKR]: {
    isTeamOkr: boolean;
  };
  [AppRoute.ADD_KEY_RESULT]: undefined;
};

export type { AppStackParamList };
