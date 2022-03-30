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
        form: {
          flex: 1,
        },
        container: {
          flex: 1,
          justifyContent: 'space-between',
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
