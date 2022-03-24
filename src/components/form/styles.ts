import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const error = useColor('ERROR');

  return useMemo(
    () =>
      StyleSheet.create({
        error: {
          paddingTop: 4,
          color: error,
        },
        formIcon: {
          marginBottom: 0,
        },
      }),
    [error]
  );
};

export default useStyles;
