import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          height: '100%',
          backgroundColor: white,
          padding: DEFAULT_SCREEN_PADDING,
        },
        content: {
          flex: 1,
          paddingBottom: 15,
        },
        logoWrapper: {
          paddingVertical: 40,
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo: {
          height: 48,
          resizeMode: 'contain',
        },
        footer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [white]
  );
};

export default useStyles;
