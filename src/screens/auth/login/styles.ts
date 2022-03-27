import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');

  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          flex: 1,
        },
        screen: {
          height: '100%',
          backgroundColor: white,
          paddingTop: DEFAULT_SCREEN_PADDING,
          paddingHorizontal: DEFAULT_SCREEN_PADDING,
        },
        logo: {
          height: 48,
          alignSelf: 'center',
          marginVertical: DEFAULT_SCREEN_PADDING * 4,
          resizeMode: 'contain',
        },
        footer: {
          padding: DEFAULT_SCREEN_PADDING,
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
