import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        logo: {
          height: 48,
          resizeMode: 'contain',
        },
      }),
    []
  );
};

export default useStyles;
