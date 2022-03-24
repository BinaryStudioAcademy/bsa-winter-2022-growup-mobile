import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const grey = useColor('GREY');

  return useMemo(
    () =>
      StyleSheet.create({
        header: {
          backgroundColor: grey,
        },
      }),
    [grey]
  );
};

export default useStyles;
