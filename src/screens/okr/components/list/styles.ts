import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        cardDivider: {
          paddingBottom: 10,
        },
      }),
    []
  );
};

export default useStyles;
