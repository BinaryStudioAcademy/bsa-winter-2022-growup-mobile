import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useMemo } from 'react';

import { useColor } from './use-color';

export const useStackScreenOptions = (): NativeStackNavigationOptions => {
  const black = useColor('BLACK');
  const grey = useColor('GREY');

  return useMemo(
    () => ({
      headerTitleAlign: 'center',
      headerTintColor: black,
      headerStyle: {
        backgroundColor: grey,
      },
      headerTitleStyle: {
        color: black,
        fontFamily: 'NunitoSans-SemiBold',
      },
    }),
    [black, grey]
  );
};
