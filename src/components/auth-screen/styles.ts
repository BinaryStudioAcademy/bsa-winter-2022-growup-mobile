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
          paddingTop: DEFAULT_SCREEN_PADDING,
          paddingHorizontal: DEFAULT_SCREEN_PADDING,
        },
        logoWrapper: {
          alignItems: 'center',
          flex: 1,
        },
        logo: {
          height: 48,
          alignSelf: 'center',
          resizeMode: 'contain',
        },
        content: {
          paddingVertical: DEFAULT_SCREEN_PADDING,
        },
        footer: {
          paddingVertical: DEFAULT_SCREEN_PADDING,
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
