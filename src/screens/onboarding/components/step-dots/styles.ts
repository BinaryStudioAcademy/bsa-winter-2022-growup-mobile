import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const accent = useColor('ACCENT');

  return useMemo(
    () =>
      StyleSheet.create({
        dotsContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-between',
          height: 50,
          width: 70,
        },
        dot: {
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: accent,
        },
        activeDot: {
          width: 12,
          height: 12,
          borderRadius: 6,
        },
      }),
    [accent]
  );
};

export default useStyles;
