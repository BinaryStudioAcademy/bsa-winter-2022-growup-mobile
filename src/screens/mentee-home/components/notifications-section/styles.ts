import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        section: {
          paddingBottom: 20,
        },
        cardWrapper: {
          paddingTop: 7,
        },
      }),
    []
  );
};

export default useStyles;
