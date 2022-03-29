import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const shadow = useColor('SHADOW');

  return useMemo(
    () =>
      StyleSheet.create({
        textName: {
          fontSize: 16,
        },
        infoRow: {
          flexDirection: 'row',
        },
        hint: {
          marginRight: 5,
        },
        content: {
          padding: 10,
          borderWidth: 1,
          borderColor: shadow,
        },
      }),
    [shadow]
  );
};

export default useStyles;
