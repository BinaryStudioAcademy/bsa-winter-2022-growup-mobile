import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        keyResult: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }),
    []
  );
};

export default useStyles;
