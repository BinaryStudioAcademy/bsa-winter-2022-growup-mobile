import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');

  return useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: '100%',
        },
        screen: {
          padding: DEFAULT_SCREEN_PADDING,
          backgroundColor: white,
          flex: 1,
        },
      }),
    [white]
  );
};

export default useStyles;
