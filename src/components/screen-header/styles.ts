import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const grey = useColor('GREY');

  return useMemo(
    () =>
      StyleSheet.create({
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: grey,
          paddingVertical: 10,
          paddingHorizontal: 20,
          minHeight: 60,
        },
      }),
    [grey]
  );
};

export default useStyles;
