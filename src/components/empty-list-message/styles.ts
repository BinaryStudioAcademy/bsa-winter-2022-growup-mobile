import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        text: {
          textAlign: 'center',
          width: '100%',
          marginVertical: 10,
        },
      }),
    []
  );
};

export default useStyles;
