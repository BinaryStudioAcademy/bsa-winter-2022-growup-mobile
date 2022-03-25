import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const white = useColor('WHITE');
  const shadow = useColor('SHADOW');

  return useMemo(
    () =>
      StyleSheet.create({
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: white,
          borderBottomWidth: 1,
          borderBottomColor: shadow,
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
      }),
    [white, shadow]
  );
};

export default useStyles;
