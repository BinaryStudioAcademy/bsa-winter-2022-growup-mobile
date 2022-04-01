import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const shadow = useColor('SHADOW');
  const success = useColor('SUCCESS');
  const error = useColor('ERROR');

  return useMemo(
    () =>
      StyleSheet.create({
        card: {
          borderWidth: 1,
          borderRadius: 10,
          borderColor: shadow,
        },
        indicator: {
          width: 16,
          height: 16,
          marginRight: 15,
          borderRadius: 8,
        },
        active: {
          backgroundColor: success,
        },
        inactive: {
          backgroundColor: error,
        },
      }),
    [success, error, shadow]
  );
};

export default useStyles;
