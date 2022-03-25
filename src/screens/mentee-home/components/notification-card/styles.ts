import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          alignSelf: 'flex-end',
        },
      }),
    []
  );
};

export default useStyles;
