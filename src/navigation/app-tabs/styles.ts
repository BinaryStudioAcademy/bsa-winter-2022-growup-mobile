import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const white = useColor('WHITE');
  const primary = useColor('PRIMARY');
  const navSeconadry = useColor('NAVIGATION_SECONDARY');

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: white,
        },
        barStyle: {
          borderWidth: 0.5,
          borderBottomWidth: 1,
          backgroundColor: primary,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: navSeconadry,
          overflow: 'hidden',
        },
      }),
    [white, primary, navSeconadry]
  );
};

export default useStyles;
