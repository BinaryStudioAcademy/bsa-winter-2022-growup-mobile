import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        headingText: {
          fontFamily: 'NunitoSans-SemiBold',
        },
        headerContent: {
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerMenu: {
          position: 'absolute',
          right: 10,
        },
      }),
    []
  );
};

export default useStyles;
