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
          borderRadius: 10,
          borderColor: shadow,
        },
      }),
    [shadow]
  );
};

export default useStyles;
