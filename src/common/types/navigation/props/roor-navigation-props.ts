import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  AppStackParamList,
  AppTabsParamList,
  OnboardingStackParamList,
  RootStackParamList,
} from '..';

type RootNavigationProps = CompositeNavigationProp<
  CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList>,
    CompositeNavigationProp<
      NativeStackNavigationProp<AppStackParamList>,
      NativeStackNavigationProp<AppTabsParamList>
    >
  >,
  NativeStackNavigationProp<OnboardingStackParamList>
>;

export type { RootNavigationProps };
