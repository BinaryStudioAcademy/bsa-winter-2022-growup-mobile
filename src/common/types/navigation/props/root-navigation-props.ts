import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  AppStackParamList,
  AppTabsParamList,
  OnboardingStackParamList,
  ProfileStackParamList,
  RootStackParamList,
} from '..';

type RootNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  CompositeNavigationProp<
    CompositeNavigationProp<
      NativeStackNavigationProp<AppStackParamList>,
      NativeStackNavigationProp<OnboardingStackParamList>
    >,
    CompositeNavigationProp<
      NativeStackNavigationProp<AppStackParamList>,
      CompositeNavigationProp<
        NativeStackNavigationProp<AppTabsParamList>,
        NativeStackNavigationProp<ProfileStackParamList>
      >
    >
  >
>;

export type { RootNavigationProps };
