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
          flex: 1,
        },
        buttons: {
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }),
    [white]
  );
};

export default useStyles;
