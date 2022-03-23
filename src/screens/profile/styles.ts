import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');
  const primary = useColor('PRIMARY');

  return useMemo(
    () =>
      StyleSheet.create({
        fullHeight: {
          height: '100%',
        },
        screen: {
          padding: DEFAULT_SCREEN_PADDING,
          backgroundColor: white,
          flex: 1,
        },
        content: {
          flex: 1,
          backgroundColor: white,
        },
        swiperWrapper: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        swiperItem: {
          flex: 1,
          padding: DEFAULT_SCREEN_PADDING,
        },
        containerHeader: {
          color: primary,
        },
        card: {
          marginVertical: 10,
        },
      }),
    [white, primary]
  );
};

export default useStyles;
