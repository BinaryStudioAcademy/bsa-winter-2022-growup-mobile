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
          padding: DEFAULT_SCREEN_PADDING,
          backgroundColor: white,
        },
        header: {
          marginBottom: 15,
        },
        cardWrapper: {
          paddingBottom: 10,
        },
      }),
    [white]
  );
};

export default useStyles;
