import { NavigatorScreenParams } from '@react-navigation/native';

import { AppRoute, AuthRoute } from 'src/common/enums';
import { AppStackParamList } from '.';

type RootStackParamList = {
  [AppRoute.APP]: NavigatorScreenParams<AppStackParamList>;
  [AuthRoute.SIGN_IN]: undefined;
  [AuthRoute.SIGN_UP]: undefined;
};

export type { RootStackParamList };
