import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        textName: {
          fontSize: 16,
        },
        infoRow: {
          flexDirection: 'row',
        },
        hint: {
          marginRight: 5,
        },
        content: {
          padding: 10,
        },
      }),
    []
  );
};

export default useStyles;
