import { useNavigation } from '@react-navigation/native';

import { RootNavigationProps } from 'src/common/types';

export const useAppNavigation = () => useNavigation<RootNavigationProps>();
