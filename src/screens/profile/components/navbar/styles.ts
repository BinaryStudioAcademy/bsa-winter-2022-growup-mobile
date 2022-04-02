import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
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
          paddingVertical: 10,
        },
        contentContainer: {
          flex: 1,
        },
        button: {
          flex: 1,
          minWidth: NAVBAR_BUTTON_WIDTH,
          backgroundColor: white,
          marginHorizontal: 4,
        },
        activeButton: {
          backgroundColor: accent,
        },
      }),
    [grey, white, accent]
  );
};

export default useStyles;
