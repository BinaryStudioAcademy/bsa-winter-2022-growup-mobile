import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 7,
        },
        label: {
          paddingRight: 15,
        },
      }),
    []
  );
};

export default useStyles;
