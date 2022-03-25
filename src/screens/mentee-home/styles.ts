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
          backgroundColor: white,
          height: '100%',
        },
        scroller: {
          padding: DEFAULT_SCREEN_PADDING,
          flex: 1,
        },
      }),
    [white]
  );
};

export default useStyles;
