import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        buttonText: {
          fontSize: 20,
        },
      }),
    []
  );
};

export default useStyles;
