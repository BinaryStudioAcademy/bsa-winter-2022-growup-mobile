import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppStackParamList, RootStackParamList } from '..';

type OKRNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<AppStackParamList>
>;

export type { OKRNavigationProps };
