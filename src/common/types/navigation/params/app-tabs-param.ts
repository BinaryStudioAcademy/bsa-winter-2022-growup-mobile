import { NavigatorScreenParams } from '@react-navigation/native';
import { AppRoute } from 'src/common/enums';
import { ProfileStackParamList } from './profile-stack-param';

type AppTabsParamList = {
  [AppRoute.HOME]: undefined;
  [AppRoute.EXPLORE]: undefined;
  [AppRoute.OPPORTUNITIES]: undefined;
  [AppRoute.OKR]: undefined;
  [AppRoute.PROFILE]: NavigatorScreenParams<ProfileStackParamList>;
};

export type { AppTabsParamList };
