import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const shadow = useColor('SHADOW');

  return useMemo(
    () =>
      StyleSheet.create({
        card: {
          borderWidth: 1,
          borderColor: shadow,
          borderRadius: 10,
          paddingTop: 15,
          paddingBottom: 5,
          paddingHorizontal: 15,
        },
      }),
    [shadow]
  );
};

export default useStyles;
