import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';
import { NAVBAR_BUTTON_WIDTH } from './constants';

const useStyles = () => {
  const grey = useColor('GREY');
  const white = useColor('WHITE');
  const accent = useColor('ACCENT');

  return useMemo(
    () =>
      StyleSheet.create({
        navbar: {
          backgroundColor: grey,
          paddingHorizontal: DEFAULT_SCREEN_PADDING,
          paddingVertical: 10,
        },
        contentContainer: {
          flex: 1,
        },
        button: {
          flex: 1,
          minWidth: NAVBAR_BUTTON_WIDTH,
          borderRadius: 7,
          backgroundColor: white,
        },
        activeButton: {
          backgroundColor: accent,
        },
      }),
    [grey, white, accent]
  );
};

export default useStyles;
