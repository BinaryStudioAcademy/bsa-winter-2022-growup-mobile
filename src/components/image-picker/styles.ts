import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingVertical: 15,
          alignItems: 'center',
          width: '100%',
        },
      }),
    []
  );
};

export default useStyles;
