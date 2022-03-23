import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const success = useColor('SUCCESS');
  const error = useColor('ERROR');

  return useMemo(
    () =>
      StyleSheet.create({
        indicator: {
          width: 16,
          height: 16,
          borderRadius: 8,
        },
        active: {
          backgroundColor: success,
        },
        inactive: {
          backgroundColor: error,
        },
      }),
    [success, error]
  );
};

export default useStyles;
