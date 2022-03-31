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
        topPadded: {
          marginTop: 16,
        },
        buttons: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }),
    [white]
  );
};

export default useStyles;
