import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const primary = useColor('PRIMARY');

  return useMemo(
    () =>
      StyleSheet.create({
        containerHeader: {
          color: primary,
        },
        button: {
          alignSelf: 'flex-start',
          marginVertical: 10,
        },
        boldText: {
          fontFamily: 'NunitoSans-Bold',
        },
        textContent: {
          marginVertical: 5,
        },
      }),
    [primary]
  );
};

export default useStyles;
